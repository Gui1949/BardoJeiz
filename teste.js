let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let artigos = [
  { palavra: "o", tipo: "masc" },
  { palavra: "a", tipo: "fem" },
];

let sujeitos = [
  { palavra: "bar", tipo: "masc", cat: "obj" },
  { palavra: "jacksons", tipo: "masc", cat: "pessoa" },
  { palavra: "bolsonaro", tipo: "masc", cat: "pessoa" },
  { palavra: "lula", tipo: "masc", cat: "pessoa" },
  {
    palavra: "desgraçado da vigilancia sanitaria",
    tipo: "masc",
    cat: "pessoa",
  },
  { palavra: "jairton kleyson", tipo: "masc", cat: "pessoa" },
  { palavra: "filho da puta do bicheiro", tipo: "masc", cat: "pessoa" },
  { palavra: "koerano", tipo: "masc", cat: "pessoa" },
  { palavra: "bicheiro", tipo: "masc", cat: "obj" },
  { palavra: "cara que me deve quinze mil reais", tipo: "masc", cat: "pessoa" },
  {
    palavra:
      "cachaça falsificada que comprei semana passada daquele cara suspeito",
    tipo: "fem",
    cat: "obj",
  },
  {
    palavra: "faca enferrujada que ta aqui no bar desde 1963",
    tipo: "fem",
    cat: "obj",
  },
  { palavra: "joão do bar vizinho", tipo: "masc", cat: "pessoa" },
];

let verb_lig = [
  { palavra: "é", cat: "obj" },
  { palavra: "ta", cat: "obj" },
  { palavra: "parece que ta", cat: "obj" },
  { palavra: "anda", cat: "pessoa" },
  { palavra: "vive", cat: "pessoa" },
  { palavra: "continua", cat: "pessoa" },
];

let pron_adj = [
  { palavra: "foda", tipo: "ambos", cat: "ambos" },
  { palavra: "sendo um belo de um filho da puta", tipo: "masc", cat: "pessoa" },
  { palavra: "falando putaria nessa porra", tipo: "masc", cat: "pessoa" },
  {
    palavra:
      "comendo traveco escondido e ainda fica disfarçando... a gente sabe de tudo",
    tipo: "masc",
    cat: "pessoa",
  },
  { palavra: "sendo corno", tipo: "masc", cat: "pessoa" },
  { palavra: "parecendo com o reginaldo rossi", tipo: "masc", cat: "pessoa" },
  { palavra: "frequentando o cabaré da leila", tipo: "ambos", cat: "pessoa" },
  { palavra: "suja pra carai, puta que pariu", tipo: "fem", cat: "obj" },
  { palavra: "sujo que só a porra viu", tipo: "masc", cat: "obj" },
  { palavra: "muito ruim viu puta que pariu", tipo: "ambos", cat: "obj" },
  { palavra: "sendo muito arrombado", tipo: "masc", cat: "pessoa" },
  {
    palavra:
      "cachaceiro, não paga porra nenhuma e rouba na sinuca... ta fudido",
    tipo: "masc",
    cat: "pessoa",
  },
  { palavra: "muito fudido pra carai", tipo: "masc", cat: "ambos" },
  {
    palavra: "só se fudendo, parece puta esse corno",
    tipo: "masc",
    cat: "pessoa",
  },
];

let artigo = artigos[getRandomInt(0, artigos.length)];

//Filtra sujeito pelo tipo (masc ou fem)

let sujeito = sujeitos.filter((suj) => suj.tipo == artigo.tipo);
sujeito = sujeito[getRandomInt(0, sujeito.length)];

//Filtra o verbo de ligação pelo tipo

let verbo = verb_lig.filter(
  (ver) => ver.cat == sujeito.cat || sujeito.cat == "ambos"
);
verbo = verbo[getRandomInt(0, verbo.length)];

//Filta o adjetivo com o verbo de ligação e sujeito

let adj = pron_adj.filter(
  (pro) =>
    (pro.cat == verbo.cat || verbo.cat == "ambos") &&
    (pro.tipo == sujeito.tipo || pro.tipo == "ambos")
);
adj = adj[getRandomInt(0, adj.length)];

console.log(
  artigo.palavra +
    " " +
    sujeito.palavra +
    " " +
    verbo.palavra +
    " " +
    adj.palavra
);

desc =
  artigo.palavra +
  " " +
  sujeito.palavra +
  " " +
  verbo.palavra +
  " " +
  adj.palavra;

// console.log(desc);
