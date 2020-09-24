import React from "react";
import "./style.css";
import "../../assets/styles/global.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

function Feed() {
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
                alt="Nome do caboclo"
                src="/static/images/avatar/2.jpg"
              />
              <ListItemText
                primary={<p className="username">Nome do caboclo</p>}
                className="username_data_post"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className="nav__icon"
                      color="textPrimary"
                    ></Typography>
                    {<p className="data_post">23/09/2020 - 18:01</p>}
                  </React.Fragment>
                }
              />
            </div>
            <img
              className="conteudo"
              src="https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/161cba3c8aaa9c200ac52aba7c8017d7.jpg"
            />
            <br />
            <button className="reacao_btn" id="btn_like">
              <i className="material-icons" id="font_like">
                thumb_up
              </i>
            </button>
            <button className="reacao_btn" id="btn_dislike">
              <i className="material-icons" id="font_dislike">
                thumb_down
              </i>
            </button>
          </div>
          <div id="post_feed">
            <div id="header">
              <Avatar
                className="avatar"
                alt="Nome do caboclo"
                src="/static/images/avatar/2.jpg"
              />
              <ListItemText
                primary={<p className="username">Nome do caboclo</p>}
                className="username_data_post"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className="nav__icon"
                      color="textPrimary"
                    ></Typography>
                    {<p className="data_post">23/09/2020 - 18:01</p>}
                  </React.Fragment>
                }
              />
            </div>
            <img
              className="conteudo"
              src="https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/161cba3c8aaa9c200ac52aba7c8017d7.jpg"
            />
            <br />
            <button className="reacao_btn" id="btn_like">
              <i className="material-icons" id="font_like">
                thumb_up
              </i>
            </button>
            <button className="reacao_btn" id="btn_dislike">
              <i className="material-icons" id="font_dislike">
                thumb_down
              </i>
            </button>
          </div>
          <div id="post_feed">
            <div id="header">
              <Avatar
                className="avatar"
                alt="Nome do caboclo"
                src="/static/images/avatar/2.jpg"
              />
              <ListItemText
                primary={<p className="username">Nome do caboclo</p>}
                className="username_data_post"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className="nav__icon"
                      color="textPrimary"
                    ></Typography>
                    {<p className="data_post">23/09/2020 - 18:01</p>}
                  </React.Fragment>
                }
              />
            </div>
            <img
              className="conteudo"
              src="https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/161cba3c8aaa9c200ac52aba7c8017d7.jpg"
            />
            <br />
            <button className="reacao_btn" id="btn_like">
              <i className="material-icons" id="font_like">
                thumb_up
              </i>
            </button>
            <button className="reacao_btn" id="btn_dislike">
              <i className="material-icons" id="font_dislike">
                thumb_down
              </i>
            </button>
          </div>
          <div id="post_feed">
            <div id="header">
              <Avatar
                className="avatar"
                alt="Nome do caboclo"
                src="/static/images/avatar/2.jpg"
              />
              <ListItemText
                primary={<p className="username">Nome do caboclo</p>}
                className="username_data_post"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className="nav__icon"
                      color="textPrimary"
                    ></Typography>
                    {<p className="data_post">23/09/2020 - 18:01</p>}
                  </React.Fragment>
                }
              />
            </div>
            <img
              className="conteudo"
              src="https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/161cba3c8aaa9c200ac52aba7c8017d7.jpg"
            />
            <br />
            <button className="reacao_btn" id="btn_like">
              <i className="material-icons" id="font_like">
                thumb_up
              </i>
            </button>
            <button className="reacao_btn" id="btn_dislike">
              <i className="material-icons" id="font_dislike">
                thumb_down
              </i>
            </button>
          </div>
          <div id="post_feed">
            <div id="header">
              <Avatar
                className="avatar"
                alt="Nome do caboclo"
                src="/static/images/avatar/2.jpg"
              />
              <ListItemText
                primary={<p className="username">Nome do caboclo</p>}
                className="username_data_post"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className="nav__icon"
                      color="textPrimary"
                    ></Typography>
                    {<p className="data_post">23/09/2020 - 18:01</p>}
                  </React.Fragment>
                }
              />
            </div>
            <img
              className="conteudo"
              src="https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/161cba3c8aaa9c200ac52aba7c8017d7.jpg"
            />
            <br />
            <button className="reacao_btn" id="btn_like">
              <i className="material-icons" id="font_like">
                thumb_up
              </i>
            </button>
            <button className="reacao_btn" id="btn_dislike">
              <i className="material-icons" id="font_dislike">
                thumb_down
              </i>
            </button>
          </div>
          <div id="post_feed">
            <div id="header">
              <Avatar
                className="avatar"
                alt="Nome do caboclo"
                src="/static/images/avatar/2.jpg"
              />
              <ListItemText
                primary={<p className="username">Nome do caboclo</p>}
                className="username_data_post"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className="nav__icon"
                      color="textPrimary"
                    ></Typography>
                    {<p className="data_post">23/09/2020 - 18:01</p>}
                  </React.Fragment>
                }
              />
            </div>
            <img
              className="conteudo"
              src="https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/161cba3c8aaa9c200ac52aba7c8017d7.jpg"
            />
            <br />
            <button className="reacao_btn" id="btn_like">
              <i className="material-icons" id="font_like">
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

export default Feed;
