import React, { useState } from "react";
import "./style.css";
import "../../assets/styles/global.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import useForceUpdate from "use-force-update";

console.log("começando a putaria");
const puxar_api = axios
  .get(`http://34.95.243.9:80/data/img_file`)
  .then((res) => {
    puxar_api.dados = res.data;
    puxar_api.leitura = Object.values(puxar_api.dados.data[1]);
    let ler_dados = puxar_api.leitura;
    Feed(ler_dados);
  });

function Feed(ler_dados) {
  if (ler_dados[1] == undefined) {
    console.log("Não leu", ler_dados[1]);
    return <p>Carregando...</p>;
  } else {
    console.log("Leu", ler_dados[1]);
    return (
      <>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <script src="https://use.fontawesome.com/1228e83c1c.js"></script>

        {/* Barra superior */}
        <nav className="top_nav">
          <a href="#" className="nav_top_link">
            Bar do Jeiz
          </a>
        </nav>

        <div id="master">
          <List className="lista_feed">
            <div id="post_feed">
              <div id="header">
                <Avatar
                  className="avatar"
                  alt={ler_dados[1]}
                  src="/static/images/avatar/2.jpg"
                />
                <ListItemText
                  primary={<p className="username">{ler_dados[1]}</p>}
                  className="username_data_post"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className="nav__icon"
                        color="textPrimary"
                      ></Typography>
                      <p className="data_post">{ler_dados[3]}</p>
                    </React.Fragment>
                  }
                />
              </div>
              <img className="conteudo" src={ler_dados[4]} />
              <br />
              <ListItemText
                primary={<p className="descricao">{ler_dados[5]}</p>}
                className="username_data_post"
              />
              <button className="reacao_btn" id="btn_like">
                <i className="material-icons nav__link--active" id="font_like">
                  thumb_up
                </i>
              </button>
              <button className="reacao_btn" id="btn_dislike">
                <i className="material-icons" id="font_dislike">
                  thumb_down
                </i>
              </button>
            </div>
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
