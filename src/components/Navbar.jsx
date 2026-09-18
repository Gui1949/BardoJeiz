import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar({ busca, onBusca, autorAtivo, onLimparAutor, total }) {
  const barraRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(barraRef.current, {
        yPercent: -120,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { scope: barraRef }
  );

  return (
    <header className="navbar" ref={barraRef}>
      <div className="navbar__marca">
        {autorAtivo ? (
          <button
            className="botao-icone"
            onClick={onLimparAutor}
            aria-label="Voltar para o feed"
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
        ) : null}
        <h1 className="logo">
          Bar do<span className="logo__destaque">Jeiz</span>
        </h1>
        <span className="navbar__contador">{total} posts</span>
      </div>

      <label className="busca">
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          value={busca}
          placeholder={autorAtivo ? `Buscar em ${autorAtivo}` : "Procurar treta"}
          onChange={(evento) => onBusca(evento.target.value)}
        />
      </label>
    </header>
  );
}

export default Navbar;
