const CHAVE = "bardojeiz:reacoes";

export function lerReacoes() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) ?? {};
  } catch {
    return {};
  }
}

export function salvarReacoes(reacoes) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(reacoes));
  } catch {
    // modo anônimo / storage cheio: a reação vive só nessa sessão
  }
}

export function alternar(reacoes, id, tipo) {
  const atual = reacoes[id];
  const proximo = { ...reacoes };
  if (atual === tipo) {
    delete proximo[id];
  } else {
    proximo[id] = tipo;
  }
  return proximo;
}
