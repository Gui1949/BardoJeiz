import React, { useState } from "react";
import "./style.css";
import "../../assets/styles/global.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { render } from "@testing-library/react";

console.log("começando a putaria");
const puxar_api = axios.get(`http://34.95.243.9/data/img_file`).then((res) => {
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
}

function dislike(id_btn) {
  let id_trat = "";
  id_trat = id_btn.replace(/[^0-9\.]+/g, "");

  let objeto_desfazer = document.getElementById("btn_like_" + id_trat);
  objeto_desfazer.style.color = "#95a5a6";

  let objeto = document.getElementById("btn_dislike_" + id_trat);

  colorir(objeto);
}

function colorir(objeto) {
  if (objeto.style.color == "rgb(0, 149, 120)") {
    objeto.style.color = "#95a5a6";
  } else {
    objeto.style.color = "#009578";
  }
}

function upload() {
  var input = document.querySelector('input[type="file"]');
  let apiUrl = "http://34.95.243.9:80/data/upload";

  var data = new FormData();
  data.append("photo", input.files[0]);
  data.append("description", "Upload via site");
  data.append("username", "Testezao");

  fetch(apiUrl, {
    method: "POST",
    body: data,
  });
}

function Feed(ler_dados) {
  if (ler_dados[1] == undefined) {
    console.log("Não leu:", ler_dados[1]);
    return <p>Carregando...</p>;
  } else {
    let i = -1;
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
              <label for="btn_upload" className="material-icons" id="upload">
                publish
              </label>
              <input
                type="file"
                id="btn_upload"
                accept=".png,.jpg,.mp4"
                onChange={() => upload()}
              />
            </div>
            {ler_dados.map((ler_dados) => (
              <div id="post_feed">
                {(() => {
                  i++;
                  console.log("Leu:", ler_dados);
                  window["Object" + parseInt(i)] = new Object();
                  window["Object" + parseInt(i)] = Object.values(ler_dados);
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
                <img className="conteudo" src={window["Object" + i][4]} />
                <br />
                <ListItemText
                  primary={
                    <p className="descricao">{window["Object" + i][5]}</p>
                  }
                  className="username_data_post"
                />
                <button
                  className="reacao_btn"
                  id={"btn_like_" + window["Object" + i][0]}
                  onClick={() => like(JSON.stringify(ler_dados, ["ID"]))}
                >
                  <i
                    className="material-icons"
                    // className="material-icons nav__link--active"
                    id="font_like"
                  >
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
        <nav className="nav">
          <a href="#" className="nav__link nav__link--active">
            <i className="material-icons nav__icon">dashboard</i>
            <span className="nav__text">Feed</span>
          </a>
        </nav>
      </>
    );
  }
}

export default Feed;
