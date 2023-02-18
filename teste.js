const artigos = ['o', 'a', 'os', 'as'];
const pronomes = ['meu', 'seu', 'nosso', 'dele', 'dela'];
const substantivos = ['bar', 'amigos', 'cerveja', 'petiscos', 'sinuca', 'música', 'caipirinha', 'cliente', 'atendimento', 'garrafa', 'copo', 'conta', 'boteco', 'happy hour', 'ambiente', 'petiscaria', 'cachaça'];
const verbos = ['bebeu', 'comeu', 'jogou', 'dançou', 'pagou', 'conversou', 'gargalhou', 'curtiu', 'experimentou', 'apreciou', 'pediu', 'serviu', 'aproveitou', 'aprontou', 'causou', 'divertiu-se', 'bateu papo'];

function fraseAleatoria() {
  const artigo = artigos[Math.floor(Math.random() * artigos.length)];
  const pronome = pronomes[Math.floor(Math.random() * pronomes.length)];
  const substantivo1 = substantivos[Math.floor(Math.random() * substantivos.length)];
  const verbo = verbos[Math.floor(Math.random() * verbos.length)];
  const substantivo2 = substantivos[Math.floor(Math.random() * substantivos.length)];
  
  return `${artigo} ${substantivo1} ${verbo} ${pronome} ${substantivo2}.`;
}

console.log(fraseAleatoria());
