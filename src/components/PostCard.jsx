import { memo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ehFacebook, ehVideo } from "../lib/posts";

const SEM_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'/>";

function Midia({ post }) {
  if (!post.midia) return null;

  if (ehFacebook(post.midia)) {
    return (
      <div className="post__fb">
        <p className="post__fb-titulo">Publicação do FaceBook</p>
        <p className="post__fb-desc">
          A postagem vem do FaceBook. Não me responsabilizo por nada de lá não.
        </p>
        <a className="botao" href={post.midia} target="_blank" rel="noreferrer">
          Acessar
        </a>
      </div>
    );
  }

  if (ehVideo(post.midia)) {
    return <video className="post__midia" src={post.midia} controls playsInline />;
  }

  return (
    <img
      className="post__midia"
      src={post.midia}
      alt={post.descricao || "Publicação"}
      loading="lazy"
      onError={(evento) => {
        evento.currentTarget.classList.add("post__midia--quebrada");
      }}
    />
  );
}

function PostCard({ post, reacao, onReagir, onAutor }) {
  const cardRef = useRef(null);
  const [compartilhado, setCompartilhado] = useState(false);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
          once: true,
        },
      });
    },
    { scope: cardRef }
  );

  const publicidade = post.username === "Publicidade";

  const compartilhar = async () => {
    const texto = `Olha essa merda que o ${post.username} postou no Bar do Jeiz: ${post.descricao}`;
    const url = post.link ?? window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Bar do Jeiz", text: texto, url });
        return;
      }
      await navigator.clipboard.writeText(`${texto} ${url}`);
      setCompartilhado(true);
      setTimeout(() => setCompartilhado(false), 2000);
    } catch {
      // usuário cancelou o compartilhamento
    }
  };

  const likes = post.likes + (reacao === "like" ? 1 : 0);
  const dislikes = post.dislikes + (reacao === "dislike" ? 1 : 0);

  return (
    <article className="card card--post" ref={cardRef}>
      <header className="post__topo">
        <img
          className="post__avatar"
          src={post.avatar || SEM_AVATAR}
          alt=""
          loading="lazy"
        />
        <div>
          <button className="post__autor" onClick={() => onAutor(post.username)}>
            {post.username}
          </button>
          <p className="post__data">
            {publicidade ? "MATERIAL PUBLICITÁRIO" : post.data}
          </p>
        </div>
      </header>

      <Midia post={post} />

      {post.descricao ? <p className="post__desc">{post.descricao}</p> : null}

      {post.link ? (
        <a className="post__link" href={post.link} target="_blank" rel="noreferrer">
          Ler artigo
          <span className="material-symbols-rounded">open_in_new</span>
        </a>
      ) : null}

      <footer className="post__acoes">
        <button
          className={`reacao ${reacao === "like" ? "reacao--ativa" : ""}`}
          onClick={() => onReagir(post.id, "like")}
        >
          <span className="material-symbols-rounded">thumb_up</span>
          {likes}
        </button>
        <button
          className={`reacao ${reacao === "dislike" ? "reacao--ativa" : ""}`}
          onClick={() => onReagir(post.id, "dislike")}
        >
          <span className="material-symbols-rounded">thumb_down</span>
          {dislikes}
        </button>
        {publicidade ? null : (
          <button className="reacao reacao--fim" onClick={compartilhar}>
            <span className="material-symbols-rounded">
              {compartilhado ? "check" : "share"}
            </span>
            {compartilhado ? "Copiado" : "Compartilhar"}
          </button>
        )}
      </footer>
    </article>
  );
}

export default memo(PostCard);
