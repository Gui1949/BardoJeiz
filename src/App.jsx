import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import FiltroAutores from "./components/FiltroAutores";
import FraseCard from "./components/FraseCard";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import StatusCard from "./components/StatusCard";
import { autores, carregarPosts, filtrar } from "./lib/posts";
import { alternar, lerReacoes, salvarReacoes } from "./lib/reacoes";

const PAGINA = 12;

function App() {
  const [posts, setPosts] = useState(null);
  const [erro, setErro] = useState("");
  const [busca, setBusca] = useState("");
  const [autor, setAutor] = useState(null);
  const [visiveis, setVisiveis] = useState(PAGINA);
  const [reacoes, setReacoes] = useState(lerReacoes);
  const sentinelaRef = useRef(null);

  useEffect(() => {
    carregarPosts()
      .then(setPosts)
      .catch((falha) => setErro(falha.message));
  }, []);

  const listaAutores = useMemo(() => (posts ? autores(posts) : []), [posts]);

  const filtrados = useMemo(
    () => (posts ? filtrar(posts, { autor, busca }) : []),
    [posts, autor, busca]
  );

  useEffect(() => {
    setVisiveis(PAGINA);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [autor, busca]);

  useEffect(() => {
    const alvo = sentinelaRef.current;
    if (!alvo) return undefined;

    const observador = new IntersectionObserver((entradas) => {
      if (entradas[0].isIntersecting) {
        setVisiveis((atual) => atual + PAGINA);
      }
    });
    observador.observe(alvo);
    return () => observador.disconnect();
  }, [filtrados.length]);

  const reagir = useCallback((id, tipo) => {
    setReacoes((atual) => {
      const proximo = alternar(atual, id, tipo);
      salvarReacoes(proximo);
      return proximo;
    });
  }, []);

  if (!posts) return <Loader erro={erro} />;

  const naTela = filtrados.slice(0, visiveis);

  return (
    <>
      <Navbar
        busca={busca}
        onBusca={setBusca}
        autorAtivo={autor}
        onLimparAutor={() => setAutor(null)}
        total={filtrados.length}
      />

      <main className="conteudo">
        <StatusCard />
        <FraseCard />

        <a
          className="card card--sinuca"
          href="https://gui1949.github.io/billiards-mobile"
          target="_blank"
          rel="noreferrer"
        >
          <span>Bora uma sinuquinha?</span>
          <span className="material-symbols-rounded">sports_and_outdoors</span>
        </a>

        <FiltroAutores lista={listaAutores} ativo={autor} onSelecionar={setAutor} />

        {naTela.length === 0 ? (
          <p className="vazio">Nada por aqui, cumpadi.</p>
        ) : (
          naTela.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              reacao={reacoes[post.id]}
              onReagir={reagir}
              onAutor={setAutor}
            />
          ))
        )}

        <div ref={sentinelaRef} className="sentinela" />
      </main>

      <button
        className="voltar-topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
      >
        <span className="material-symbols-rounded">arrow_upward</span>
      </button>
    </>
  );
}

export default App;
