const BASE = import.meta.env.BASE_URL;

export function asset(caminho) {
  if (!caminho) return "";
  if (/^(https?:)?\/\//.test(caminho) || caminho.startsWith("data:")) {
    return caminho;
  }
  return `${BASE}${caminho.replace(/^\//, "")}`;
}

export function ehFacebook(midia) {
  return midia.includes("fbsbx") || midia.includes("fbcdn");
}

export function ehVideo(midia) {
  return /\.(mp4|mov|webm)(\?|$)/i.test(midia);
}

export async function carregarPosts() {
  const resposta = await fetch(asset("data/posts.json"));
  if (!resposta.ok) {
    throw new Error(`Não rolou carregar o feed (${resposta.status})`);
  }
  const posts = await resposta.json();
  return posts.map((post) => ({
    ...post,
    avatar: asset(post.avatar),
    midia: asset(post.midia),
  }));
}

export function autores(posts) {
  const contagem = new Map();
  for (const post of posts) {
    contagem.set(post.username, (contagem.get(post.username) ?? 0) + 1);
  }
  return [...contagem.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([username, total]) => ({ username, total }));
}

export function filtrar(posts, { autor, busca }) {
  const termo = busca.trim().toLowerCase();
  return posts.filter((post) => {
    if (autor && post.username !== autor) return false;
    if (!termo) return true;
    return (
      post.descricao.toLowerCase().includes(termo) ||
      post.username.toLowerCase().includes(termo)
    );
  });
}
