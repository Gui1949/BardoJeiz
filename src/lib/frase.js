import dados from "../data/jeiz.json";

function sorteio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

export function gerarFrase() {
  const artigo = sorteio(dados.artigos);

  const sujeito = sorteio(
    dados.sujeitos.filter((item) => item.tipo === artigo.tipo)
  );

  const verbo = sorteio(
    dados.verb_lig.filter(
      (item) => item.cat === sujeito.cat || sujeito.cat === "ambos"
    )
  );

  const adjetivo = sorteio(
    dados.pron_adj.filter(
      (item) =>
        (item.cat === verbo.cat || verbo.cat === "ambos") &&
        (item.tipo === sujeito.tipo || item.tipo === "ambos")
    )
  );

  return `${artigo.palavra} ${sujeito.palavra} ${verbo.palavra} ${adjetivo.palavra}`;
}
