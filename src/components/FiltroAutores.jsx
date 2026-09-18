function FiltroAutores({ lista, ativo, onSelecionar }) {
  return (
    <nav className="filtros" aria-label="Filtrar por frequentador">
      {lista.map(({ username, total }) => (
        <button
          key={username}
          className={`chip ${ativo === username ? "chip--ativo" : ""}`}
          onClick={() => onSelecionar(ativo === username ? null : username)}
        >
          {username}
          <span className="chip__total">{total}</span>
        </button>
      ))}
    </nav>
  );
}

export default FiltroAutores;
