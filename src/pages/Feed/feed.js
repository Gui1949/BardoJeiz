import React from "react";
import "./style.css";
import "../../assets/styles/global.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Conteudo from "./components/Conteudo";
import Navbar from "./components/Navbar";
import "./loader.css";

let url = "https://bar-do-jeiz.onrender.com/data";

function dislike(id_btn) {
  let id_trat = "";
  id_trat = id_btn.replace(/[^0-9\.]+/g, "");

  let objeto_desfazer = document.getElementById("btn_like_" + id_trat);

  let objeto = document.getElementById("btn_dislike_" + id_trat);

  colorir(objeto);

  fetch("https://bar-do-jeiz.onrender.com/data/dislike", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID: id_trat,
    }),
  });
}

function colorir(objeto) {
  if (objeto.style.color === "rgb(255, 121, 198)") {
    objeto.style.color = "#ffffff";
  } else {
    objeto.style.color = "#ff79c6";
  }
}

let interval = setInterval(() => {
  let date_ob = new Date();
  let dia = ("0" + date_ob.getDate()).slice(-2);
  let mes = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let ano = date_ob.getFullYear();
  let horas = date_ob.getHours();
  let minutos = date_ob.getMinutes();

  function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  let tempo_final =
    str_pad_left(horas, "0", 2) + ":" + str_pad_left(minutos, "0", 2);
  try {
    document.getElementById("timer_clock").innerHTML = tempo_final;

    if (horas > 0 && horas <= 5) {
      document.getElementById("timer_title").innerHTML =
        "Vai dormir porra, ta loko?";
      document.getElementById("icon_dash").innerHTML = "psychology";
    } else if (horas >= 6 && horas <= 12) {
      document.getElementById("timer_title").innerHTML =
        "Eae cumpadi, bom dia!";
      document.getElementById("icon_dash").innerHTML = "brightness_7";
    } else if (horas > 12 && horas <= 17) {
      document.getElementById("timer_title").innerHTML =
        "Boa tarde, meu consagrado";
      document.getElementById("icon_dash").innerHTML = "brightness_medium";
    } else if (horas > 17 && horas <= 21) {
      document.getElementById("timer_title").innerHTML =
        "Boa noite e até amanhã.";
      document.getElementById("icon_dash").innerHTML = "nights_stay";
    } else if (horas > 21 && horas <= 23) {
      document.getElementById("timer_title").innerHTML =
        "Bora dormir ou ta dificil?";
      document.getElementById("icon_dash").innerHTML = "hotel";
    } else if (horas == 0) {
      document.getElementById("timer_title").innerHTML =
        "CIRCULANDO, MEIA NOITE JAH";
      document.getElementById("icon_dash").innerHTML = "local_police";
    }
  } catch {}
}, 1000);

function getTemp() {
  let startPos;
  let geoSuccess = function (position) {
    startPos = position;
    let latitude = startPos.coords.latitude;
    let longitude = startPos.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc2a0c4ba3d95cc8c10568222f57d0be`;
    getTempByCoord(url);
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);

  function getTempByCoord(url) {
    fetch(url, {
      method: "POST",
    })
      .then((resp) => resp.text())
      .then(function (reqres) {
        reqres = JSON.parse(reqres);
        let temp_atual = reqres.main.temp;
        temp_atual = temp_atual - 273;
        temp_atual = parseFloat(temp_atual).toFixed(1);
        document.getElementById("temp_num").innerHTML = temp_atual + "°C";
        document.getElementById("temp_lbl").innerHTML = reqres.name;
        let icon_clima = reqres.weather[0].description;
        if (!icon_clima.includes("clear")) {
          document.getElementById("temp_ico").innerHTML = "cloud";
        } else {
          document.getElementById("temp_ico").innerHTML = "wb_sunny";
        }
      });
  }
}

function Feed() {
  const [lerdados, setDados] = React.useState([]);
  const [puxando, setPuxando] = React.useState(0);
  const [puxandoNews, setPuxandoNews] = React.useState(0);
  const [user, setUser] = React.useState("");
  const [news, setNews] = React.useState({});
  const [qtd_posts, setQTD] = React.useState(0);
  const [dados_limit, setLimit] = React.useState([]);
  const [posts_tela, setPostsTela] = React.useState(10);

  //Verificar atualizações

  setTimeout(() => {
    setInterval(() => {
      fetch("https://bar-do-jeiz.onrender.com/data", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((reqres) => {
          let qtd_dados = reqres.data.length;
          setQTD(qtd_dados);
        });
    }, 10000);
  }, 2000);

  if (puxando == 0) {
    fetch("https://bar-do-jeiz.onrender.com/data", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((reqres) => {
        let dados = reqres.data;
        setDados(Object.values(dados));
        setLimit(lerdados.slice(0, posts_tela));
        setPuxando(1);
        getTemp();
      });
  }

  if (puxando == 0) {
    fetch("https://bar-do-jeiz.onrender.com/news", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((reqres) => {
        let dados = reqres;
        setNews(dados);
        setPuxandoNews(1);
      });
  }

  if (lerdados[0] == undefined) {
    return (
      <div id="loading">
        <div class="loader">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  let lista_feed;

  if (user == "") {
    lista_feed = dados_limit.map((ler_dados) => (
      <div
        id={ler_dados.USERNAME == "Publicidade" ? "post_merchan" : "post_feed"}
        key={ler_dados.ID}
        className="posts"
      >
        <div id="header">
          <div className="avatar">
            <img className="avatar_img" src={ler_dados.USER_PIC} />
          </div>
          <ListItemText
            primary={
              <p
                className="username"
                style={{ cursor: "pointer" }}
                onClick={() => setUser(ler_dados.USERNAME)}
              >
                <b>{ler_dados.USERNAME}</b>
              </p>
            }
            className="username_data_post"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className="nav__icon"
                  color="textPrimary"
                ></Typography>
                <p className="data_post">
                  {ler_dados.USERNAME == "Publicidade"
                    ? "MATERIAL PUBLICITÁRIO"
                    : ler_dados.POST_DATA}
                </p>
              </React.Fragment>
            }
          />
        </div>
        <Conteudo foto={ler_dados.PIC_LOCAL} />
        <ListItemText
          primary={
            <>
              <p className="descricao_post">{ler_dados.POST_DESC}</p>
              {ler_dados.LINK ? (
                <a
                  className="descricao_post"
                  href={ler_dados.LINK}
                  target="_blank"
                >
                  Ler artigo
                </a>
              ) : null}
            </>
          }
          className="username_data_post_"
        />

        <div id="botoes_reacao">
          <button
            className="reacao_btn"
            id={"btn_dislike_" + ler_dados.ID}
            onClick={() => dislike(JSON.stringify(ler_dados, ["ID"]))}
          >
            {ler_dados.USERNAME == "Publicidade" ? null : (
              <i className="material-icons" id="font_dislike">
                thumb_down_off_alt
              </i>
            )}
          </button>
          <button
            className="reacao_btn"
            id={"btn_share_" + ler_dados.ID}
            onClick={async () => {
              const blob = await fetch(
                "https://bar-do-jeiz.onrender.com/share",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    query: `<div id='post_feed' class='posts'><div id='header'><div class='avatar'><img class='avatar_img' src='${ler_dados.USER_PIC}'></div><div class='MuiListItemText-root username_data_post MuiListItemText-multiline'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'><p class='username' style='cursor: pointer;'><b>${ler_dados.USERNAME}</b> - Via Bar do Jeiz</p></span><p class='MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock'><span class='MuiTypography-root nav__icon MuiTypography-body2 MuiTypography-colorTextPrimary'></span></p></div></div><img class='conteudo' src='${ler_dados.PIC_LOCAL}'><div class='MuiListItemText-root username_data_post_'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'><p class='descricao_post'>${ler_dados.POST_DESC}</p></span></div></div>`,
                  }),
                }
              ).then((r) => r.blob());

              const share = async (title, text, blob) => {
                const data = {
                  files: [
                    new File([blob], "file.png", {
                      type: blob.type,
                    }),
                  ],
                  title: title,
                  text: text,
                  url: "https://gui1949.github.io/BardoJeiz",
                };
                try {
                  if (!navigator.canShare(data)) {
                    throw new Error("Can't share data.", data);
                  }
                  await navigator.share(data);
                } catch (err) {
                  console.error(err.name, err.message);
                }
              };

              share(
                "Bar do Jeiz",
                `Olha essa merda que o ${ler_dados.USERNAME} postou no Bar do Jeiz: ${ler_dados.POST_DESC}`,
                blob
              );
            }}
          >
            {ler_dados.USERNAME == "Publicidade" ? null : (
              <i className="material-icons" id="font_dislike">
                share_icon
              </i>
            )}
          </button>
        </div>
      </div>
    ));
  } else {
    lista_feed = lerdados.map((ler_dados) =>
      ler_dados.USERNAME == user ? (
        <div id="post_feed" key={ler_dados} className="posts">
          <div id="header">
            <div className="avatar">
              <img className="avatar_img" src={ler_dados.USER_PIC} />
            </div>
            <ListItemText
              primary={
                <p className="username" style={{ cursor: "pointer" }}>
                  <b>{ler_dados.USERNAME}</b>
                </p>
              }
              className="username_data_post"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className="nav__icon"
                    color="textPrimary"
                  ></Typography>
                  <p className="data_post">{ler_dados.POST_DATA}</p>
                </React.Fragment>
              }
            />
          </div>
          <Conteudo foto={ler_dados.PIC_LOCAL} />
          <ListItemText
            primary={<p className="descricao_post">{ler_dados.POST_DESC}</p>}
            className="username_data_post_"
          />

          <div id="botoes_reacao">
            <button
              className="reacao_btn"
              id={"btn_dislike_" + ler_dados.ID}
              onClick={() => dislike(JSON.stringify(ler_dados, ["ID"]))}
            >
              <i className="material-icons" id="font_dislike">
                thumb_down
              </i>
            </button>
            <button
              className="reacao_btn"
              id={"btn_share_" + ler_dados.ID}
              onClick={() =>
                navigator.share({
                  title: `Bar do Jeiz`,
                  text: `Olha essa merda que o ${ler_dados.USERNAME} postou no Bar do Jeiz: ${ler_dados.POST_DESC}`,
                  url: ler_dados.PIC_LOCAL,
                })
              }
            >
              {ler_dados.USERNAME == "Publicidade" ? null : (
                <i className="material-icons" id="font_dislike">
                  share_icon
                </i>
              )}
            </button>
          </div>
        </div>
      ) : null
    );
  }

  return (
    <>
      <Navbar text={user} />
      <div id="master">
        <List className="lista_feed">
          <div className="post_timer posts">
            <div id="timer_header">
              <p className="nav_top_link" id="timer_title"></p>
              <span className="material-icons md-5" id="icon_dash"></span>
            </div>
            <hr></hr>
            <div className="timer_body">
              <p id="timer_clock">00:00</p>
              <div id="temp_dados">
                <p id="temp_lbl" className="nav_top_link">
                  No armário
                </p>
                <div id="temp_temperatura">
                  <p id="temp_num" className="nav_top_link">
                    24ºC
                  </p>
                  <span className="material-icons md-5" id="temp_ico">
                    looks
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="post_feed" className="posts">
            <br />
            <p className="username">
              <b>
                {puxandoNews == 1
                  ? // ? news.titulo + ": Noticias do Dia"
                    "Noticias do Dia - por BBC Brasil"
                  : "Carregando"}
              </b>
            </p>
            <br />
            {puxandoNews == 1
              ? news.data.map((noticia) => (
                  <p>
                    <br />
                    <a href={noticia.link} target="blank">
                      {noticia.title}
                    </a>
                    <br />
                    <br />
                    <hr></hr>
                  </p>
                ))
              : ""}
          </div>
          {lista_feed}
          <div
            // id="post_feed"
            className="post_header ver_mais"
            onClick={() => {
              let qtd_nova = posts_tela + 10;
              setLimit(lerdados.slice(0, qtd_nova));
              setPostsTela(qtd_nova);
            }}
          >
            <p className="nav_top_filter_title" id="title_navbar">
              Ver Mais
            </p>
            {/* <i className="material-icons" id="font_dislike">
              cached
            </i> */}
          </div>
        </List>

        {qtd_posts > lerdados.length ? (
          <div id="bottom_nav">
            <div class="chip" onClick={() => window.location.reload()}>
              <p className="nav_top_filter_title" id="title_navbar">
                Há novas postagens
              </p>
              <i className="material-icons" id="font_dislike">
                cached
              </i>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Feed;
