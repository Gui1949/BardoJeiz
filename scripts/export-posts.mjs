/**
 * Exporta os posts do SQLite do BardoJeiz-server para JSON estatico.
 *
 *   node scripts/export-posts.mjs ../BardoJeiz-server
 *
 * Gera public/data/posts.json e copia para public/img as imagens que ficavam
 * hospedadas no backend.
 */
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { basename, resolve } from "node:path";

const serverDir = resolve(process.argv[2] ?? "../BardoJeiz-server");
const dbPath = resolve(serverDir, "database.db");
const outFile = resolve("public/data/posts.json");
const imgDir = resolve("public/img");

const BACKEND_HOSTS = ["localhost:8180", "herokuapp.com", "vercel.app"];

const rows = JSON.parse(
  execFileSync(
    "python3",
    [
      "-c",
      [
        "import sqlite3,json,sys",
        "c=sqlite3.connect(sys.argv[1])",
        "c.row_factory=sqlite3.Row",
        "rows=[dict(r) for r in c.execute('select * from POSTS order by ID desc')]",
        "json.dump(rows,sys.stdout,ensure_ascii=False)",
      ].join("\n"),
      dbPath,
    ],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
  )
);

mkdirSync(imgDir, { recursive: true });
const copied = new Set();

function localizar(url) {
  const valor = (url ?? "").trim();
  if (!valor) return "";
  if (!BACKEND_HOSTS.some((host) => valor.includes(host))) return valor;

  const nome = basename(new URL(valor).pathname);
  const origem = resolve(serverDir, "img", nome);
  if (!existsSync(origem)) return "";
  if (!copied.has(nome)) {
    copyFileSync(origem, resolve(imgDir, nome));
    copied.add(nome);
  }
  return `img/${nome}`;
}

function paraIso(texto) {
  const match = (texto ?? "").match(
    /(\d{2})\/(\d{2})\/(\d{4})[,\s-]+(\d{2}):(\d{2})(?::(\d{2}))?/
  );
  if (!match) return null;
  const [, dia, mes, ano, hora, min, seg = "00"] = match;
  return `${ano}-${mes}-${dia}T${hora}:${min}:${seg}-03:00`;
}

const posts = rows.map((row) => ({
  id: row.ID,
  username: row.USERNAME,
  avatar: localizar(row.USER_PIC),
  data: row.POST_DATA,
  dataIso: paraIso(row.POST_DATA),
  midia: localizar(row.PIC_LOCAL),
  descricao: row.POST_DESC ?? "",
  likes: row.POST_LIKE ?? 0,
  dislikes: row.POST_DISLIKE ?? 0,
  link: row.LINK || null,
}));

mkdirSync(resolve("public/data"), { recursive: true });
writeFileSync(outFile, `${JSON.stringify(posts)}\n`);

console.log(`${posts.length} posts -> ${outFile}`);
console.log(`${copied.size} imagens copiadas -> ${imgDir}`);
