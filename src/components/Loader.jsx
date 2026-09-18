function Loader({ erro }) {
  if (erro) {
    return (
      <div className="loader">
        <span className="material-symbols-rounded">sentiment_dissatisfied</span>
        <p>{erro}</p>
      </div>
    );
  }

  return (
    <div className="loader">
      <div className="loader__copo" />
      <p>Enchendo o copo...</p>
    </div>
  );
}

export default Loader;
