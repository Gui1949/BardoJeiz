import React, { useState } from "react";
import "./style.css";
import "../../assets/styles/global.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { render } from "@testing-library/react";

// const puxar_api = axios.get(`http://34.95.243.9/data`).then((res) => {
const puxar_api = axios
  .get(`https://bardojeiz-server.herokuapp.com/data`)
  .then((res) => {
    puxar_api.dados = res.data;
    puxar_api.leitura = puxar_api.dados.data;
    let ler_dados = Object.values(puxar_api.leitura);
    Feed(ler_dados);
  });

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
  if (objeto.style.color == "rgb(255, 121, 198)") {
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

function Feed(ler_dados) {
  if (ler_dados[1] == undefined) {
    console.log("Não leu:", ler_dados[1]);
    return <p>Carregando...</p>;
  } else {
    let i = -1;
    let conteudo;
    render(
      <>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>

        {/* Barra superior */}
        <nav className="top_nav">
          <a href="#" className="nav_top_link">
            Bar do Jeiz
          </a>
        </nav>

        <div id="master">
          <List className="lista_feed">
            <div id="post_header">
              <a href="#modal_upload" className="material-icons" id="upload">
                publish
              </a>

              <div id="modal_upload" class="modal">
                <div class="modal_window">
                  <a href="#fechar" title="Fechar" class="fechar">
                    x
                  </a>
                  Username:
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
                  <div id="btn_upload_modal">
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

            <div id="post_feed">
              <div id="header">
                <Avatar
                  className="avatar"
                  alt="Desenvolvedor"
                  src="/static/images/avatar/2.jpg"
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
                className="username_data_post"
              />
            </div>
            {ler_dados.map((ler_dados) => (
              <div id="post_feed">
                {(() => {
                  i++;
                  console.log("Leu:", ler_dados);
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
                  }
                  else if (
                    window["Object" + i][4].includes(".png", ".jpg", ".jpeg") ==
                    true
                  ) {
                    conteudo = (
                      <img className="conteudo" src={window["Object" + i][4]} />
                    );
                  }
                  else{
                    
                  }
                })()}
                <div id="header">
                  <Avatar
                    className="avatar"
                    alt={window["Object" + i][1]}
                    src="/static/images/avatar/2.jpg"
                  />
                  <ListItemText
                    primary={
                      <p className="username">{window["Object" + i][1]}</p>
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
                <br />
                <ListItemText
                  primary={
                    <p className="descricao">
                      {window["Object" + i][5]} - {window["Object" + i][6]}{" "}
                      Likes, {window["Object" + i][7]} Dislikes
                    </p>
                  }
                  className="username_data_post"
                />

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
            ))}
          </List>
        </div>
        {/* Navigation bar inferior */}
        {/* <nav className="nav">
          <a href="#" className="nav__link nav__link--active">
            <i className="material-icons nav__icon">dashboard</i>
            <span className="nav__text">Feed</span>
          </a>
        </nav> */}
      </>
    );
  }
}

export default Feed;
