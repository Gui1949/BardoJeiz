import React from "react";
import "./style.css";
import "../../assets/styles/global.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { render } from "@testing-library/react";

let url = "https://bardojeiz-server.herokuapp.com/data";
let temp_atual = 0;

function puxar_api() {
  try {
    deletar_elementos();
  } catch {}

  axios.get(url).then((res) => {
    puxar_api.dados = res.data;
    puxar_api.leitura = puxar_api.dados.data;
    let ler_dados = Object.values(puxar_api.leitura);
    Feed(ler_dados);
  });
}

puxar_api();

function like(id_btn) {
  let id_trat = "";
  id_trat = id_btn.replace(/[^0-9\.]+/g, "");
  let objeto_desfazer = document.getElementById("btn_dislike_" + id_trat);
  objeto_desfazer.style.color = "#95a5a6";

  let objeto = document.getElementById("btn_like_" + id_trat);
  colorir(objeto);

  fetch("https://bardojeiz-server.herokuapp.com/data/like", {
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

function dislike(id_btn) {
  let id_trat = "";
  id_trat = id_btn.replace(/[^0-9\.]+/g, "");

  let objeto_desfazer = document.getElementById("btn_like_" + id_trat);
  objeto_desfazer.style.color = "#95a5a6";

  let objeto = document.getElementById("btn_dislike_" + id_trat);

  colorir(objeto);

  fetch("https://bardojeiz-server.herokuapp.com/data/dislike", {
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
    objeto.style.color = "#95a5a6";
  } else {
    objeto.style.color = "#ff79c6";
  }
}

function upload() {
  var input = document.querySelector('input[type="file"]');
  var name = document.getElementById("txt_username").value;
  var desc = document.getElementById("txt_descricao").value;
  let apiUrl = "https://bardojeiz-server.herokuapp.com/data/upload";

  var data = new FormData();
  data.append("photo", input.files[0]);
  data.append("description", desc);
  data.append("username", name);

  fetch(apiUrl, {
    method: "POST",
    body: data,
  }).then(function (response) {
    if (response.ok) {
      window.location.reload();
    }
  });
}

function deletar_elementos() {
  let elementos = document.getElementsByClassName("posts");
  while (elementos.length > 0) {
    elementos[0].parentNode.removeChild(elementos[0]);
  }
}

function username_unico(id) {
  deletar_elementos();
  id = JSON.parse(id);
  console.log(id.USERNAME);
  url = "https://bardojeiz-server.herokuapp.com/data/" + id.USERNAME;
  console.log(url);
  puxar_api();
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

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=GUARULHOS,SP,BR&appid=cc2a0c4ba3d95cc8c10568222f57d0be",
  {
    method: "POST",
  }
)
  .then((resp) => resp.text())
  .then(function (reqres) {
    reqres = JSON.parse(reqres);
    temp_atual = reqres.main.temp;
    temp_atual = temp_atual - 273;
    temp_atual = parseFloat(temp_atual).toFixed(1);
    console.log(temp_atual);
  });

function Feed(ler_dados) {
  if (ler_dados[0] == undefined) {
    return (
      <nav id="top_nav">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            url = "https://bardojeiz-server.herokuapp.com/data/";
            puxar_api();
          }}
          className="nav_top_link"
        >
          <b>Bar do Jeiz</b>
        </a>
      </nav>
    );
  } else {
    let i = 0;
    let conteudo;
    render(
      <>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>

        <nav id="top_nav">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              url = "https://bardojeiz-server.herokuapp.com/data/";
              puxar_api();
            }}
            className="nav_top_link"
          >
            <b>Bar do Jeiz</b>
          </a>
        </nav>

        <div id="master">
          <List className="lista_feed">
            <div class="post_header posts">
              <a href="#modal_upload" className="material-icons" id="upload">
                publish
              </a>

              <div id="modal_upload" class="modal">
                <div class="modal_window">
                  <a href="#fechar" title="Fechar" class="fechar">
                    x
                  </a>
                  Nome de Usuário:
                  <input type="text" id="txt_username" />
                  <br />
                  Descrição:
                  <textarea
                    name="Text1"
                    cols="40"
                    rows="5"
                    maxLength="70"
                    id="txt_descricao"
                  ></textarea>
                  <br />
                  <div>
                    <label
                      for="btn_upload"
                      className="material-icons"
                      id="upload"
                    >
                      publish
                    </label>
                    <input
                      type="file"
                      id="btn_upload"
                      accept=".png,.jpg,.mp4,.jpeg"
                      onChange={() => upload()}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="post_timer posts">
              <div id="timer_header">
                <p class="nav_top_link" id="timer_title"></p>
                <span class="material-icons md-5" id="icon_dash"></span>
              </div>
              <hr></hr>
              <div class="timer_body">
                <p id="timer_clock">00:00</p>
                <div id="temp_dados">
                  <p id="temp_lbl" class="nav_top_link">
                    Guarulhos - SP
                  </p>
                  <div id="temp_temperatura">
                    <p id="temp_num" class="nav_top_link">
                      24°C
                    </p>
                    <span class="material-icons md-5" id="temp_ico">cloud</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div id="post_feed" class="posts">
              <div id="header">
                <img
                  className="avatar"
                  alt="Desenvolvedor"
                  src="https://i.scdn.co/image/6761637ad5f57a7bbb34d00b6578811af27208db"
                />
                <ListItemText
                  primary={
                    <p className="username">
                      Desenvolvedor{" "}
                      <i className="material-icons" id="post_fixo">
                        push_pin
                      </i>
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
                      <p className="data_post">24/01/2021 - 22:00</p>
                    </React.Fragment>
                  }
                />
              </div>

              <iframe
                class="conteudo"
                src="https://www.youtube.com/embed/q-bl2O-KnQ8"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br />
              <ListItemText
                primary={
                  <p className="descricao">
                    Opa, salve! Você está nesse momento no Bar do Jeiz, o
                    Instagram se fosse bom! Em desenvolvimento desde Abril/2020,
                    o Bar do Jeiz nada mais é do que um beta gigante, um monstro
                    indomável... Nem eu sei aonde vai parar essa budega, mas
                    enfim, por enquanto os posts duram por tempo limitado,
                    então, aproveite enquanto é tempo...
                  </p>
                }
                className="username_data_post_"
              />
            </div> */}

            {ler_dados.map((ler_dados) => (
              <div id="post_feed" class="posts">
                {(() => {
                  i++;
                  window["Object" + parseInt(i)] = new Object();
                  window["Object" + parseInt(i)] = Object.values(ler_dados);

                  if (window["Object" + i][4].includes(".mp4", "mov") == true) {
                    conteudo = (
                      <video className="conteudo" controls>
                        <source
                          src={window["Object" + i][4]}
                          type="video/mp4"
                        />
                      </video>
                    );
                  } else {
                    conteudo = (
                      <img className="conteudo" src={window["Object" + i][4]} />
                    );
                  }
                  if (
                    window["Object" + i][4].includes(
                      "https://www.youtube.com"
                    ) == true
                  ) {
                    conteudo = (
                      <iframe
                        class="conteudo"
                        src={window["Object" + i][4]}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    );
                  }
                  if (
                    window["Object" + i][4].includes("fbsbx") == true ||
                    window["Object" + i][4].includes("fbcdn") == true
                  ) {
                    conteudo = (
                      <div class="conteudo">
                        <div class="caixa_fb">
                          <div class="titulo_fb">
                            <p>
                              <b>Publicação do FaceBook</b>
                            </p>
                          </div>
                          <div class="desc_fb">
                            <p class="desc_fb_class">
                              A postagem a seguir é proveniente do FaceBook. Não
                              me responsabilizo por nada de lá não.
                            </p>
                          </div>
                          <a class="btn_fb" href={window["Object" + i][4]}>
                            <b>Acessar</b>
                          </a>
                        </div>
                      </div>
                    );
                  }
                })()}
                <div id="header">
                  <div className="avatar">
                    <img className="avatar_img" src={window["Object" + i][2]} />
                  </div>
                  <ListItemText
                    primary={
                      <p
                        className="username"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          username_unico(
                            JSON.stringify(ler_dados, ["USERNAME"])
                          )
                        }
                      >
                        <b>{window["Object" + i][1]}</b>
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
                        <p className="data_post">{window["Object" + i][3]}</p>
                      </React.Fragment>
                    }
                  />
                </div>
                {conteudo}
                <ListItemText
                  primary={
                    <p className="descricao_post">
                      {window["Object" + i][5]} - {window["Object" + i][6]}{" "}
                      Likes, {window["Object" + i][7]} Dislikes
                    </p>
                  }
                  className="username_data_post_"
                />

                <div id="botoes_reacao">
                  <button
                    className="reacao_btn"
                    id={"btn_like_" + window["Object" + i][0]}
                    onClick={() => like(JSON.stringify(ler_dados, ["ID"]))}
                  >
                    <i className="material-icons" id="font_like">
                      thumb_up
                    </i>
                  </button>
                  <button
                    className="reacao_btn"
                    id={"btn_dislike_" + window["Object" + i][0]}
                    onClick={() => dislike(JSON.stringify(ler_dados, ["ID"]))}
                  >
                    <i className="material-icons" id="font_dislike">
                      thumb_down
                    </i>
                  </button>
                </div>
              </div>
            ))}
          </List>
        </div>
      </>
    );
  }
}

export default Feed;
