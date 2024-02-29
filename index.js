var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./database.db");
var express = require("express");
var cors = require("cors");
var restapi = express();
var bodyParser = require("body-parser");
const { exec } = require("child_process");
const fs = require("fs");
var https = require("https");
let Parser = require("rss-parser");
let parser = new Parser();
const request = require("request");
const fetch = require("node-fetch");

restapi.use(bodyParser.urlencoded({ extended: false }));
restapi.use(bodyParser.json());
restapi.use(cors());

balcao = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

restapi.get("/data", (req, res) => {
  var sql = "select * from POSTS order by id desc";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    console.log(req.ip);

    res.json({
      data: rows,
    });
  });
});

restapi.get("/data/:username", (req, res) => {
  let username = req.params.username;
  var sql = "select * from POSTS WHERE USERNAME LIKE ? order by id desc ";
  var params = [username];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

restapi.get("/news", (req, res) => {
  let links = [
    // "http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml",
    // "http://g1.globo.com/dynamo/economia/rss2.xml",
    // "http://g1.globo.com/dynamo/mundo/rss2.xml",
    // "https://rss.tecmundo.com.br/feed",
    // "http://www.valor.com.br/rss",
    // "http://rss.megacurioso.com.br/feed",
    // "https://www.noticiasaominuto.com.br/rss/ultima-hora",
    "http://www.bbc.co.uk/portuguese/index.xml",
    // "https://exame.com/rss",
    // "https://super.abril.com.br/rss",
    // "https://veja.abril.com.br/rss",
    // "https://vejasp.abril.com.br/rss",
    // "https://quatrorodas.abril.com.br/rss",
    // "https://www.techtudo.com.br/rss/techtudo/",
  ];

  let url = links[getRandomInt(0, links.length)];

  parser.parseURL(url).then((result) => {
    icone = result.image.url;
    titulo = result.title;

    noticias = result.items.slice(0, 5);

    res.json({
      icone: icone,
      titulo: titulo,
      data: noticias,
    });
  }).catch((e) => console.log(e))
});

restapi.get("/version", (req, res) => {
  versao = "0.1.1";
  res.json({
    data: versao,
  });
});

restapi.get("/data/video_file", (req, res) => {
  var sql =
    "select * from POSTS WHERE PIC_LOCAL LIKE '%.mov%' OR PIC_LOCAL LIKE '%.mp4%' order by id desc";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

restapi.get("/data/img_file", (req, res) => {
  var sql =
    "select * from POSTS WHERE PIC_LOCAL LIKE '%.jpg%' OR PIC_LOCAL LIKE '%.png%' order by ID desc";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

restapi.post("/data/like", function (req, res) {
  var errors = [];
  if (!req.body.ID) {
    errors.push("No ID specified");
  }
  var data = {
    ID: req.body.ID,
  };
  var sql = "UPDATE POSTS SET POST_LIKE = POST_LIKE+1 WHERE ID=?";
  var params = [data.ID];
  console.log("Like recebido no Post ", [data.ID]);
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log(data.ID);
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

restapi.post("/data/del_like", function (req, res) {
  var errors = [];
  if (!req.body.ID) {
    errors.push("No ID specified");
  }
  var data = {
    ID: req.body.ID,
  };
  var sql = "UPDATE POSTS SET POST_LIKE = POST_LIKE-1 WHERE ID=?";
  var params = [data.ID];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log(data.ID);
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

restapi.post("/data/dislike", function (req, res) {
  var errors = [];
  if (!req.body.ID) {
    errors.push("No ID specified");
  }
  var data = {
    ID: req.body.ID,
  };
  var sql = "UPDATE POSTS SET POST_DISLIKE = POST_DISLIKE+1 WHERE ID=?";
  var params = [data.ID];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log(data.ID);
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

restapi.post("/data/del_dislike", function (req, res) {
  var errors = [];
  if (!req.body.ID) {
    errors.push("No ID specified");
  }
  var data = {
    ID: req.body.ID,
  };
  var sql = "UPDATE POSTS SET POST_DISLIKE = POST_DISLIKE-1 WHERE ID=?";
  var params = [data.ID];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log(data.ID);
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

const multer = require("multer");
const path = require("path");
let cuiaba = "";

var storage = multer.diskStorage({
  destination: "./img/",
  filename: function (req, file, cb) {
    cuiaba = "upload" + "-" + Date.now() + path.extname(file.originalname);
    cb(null, cuiaba);
  },
});

restapi.use("/data/img", express.static("./img"));

var upload = multer({ storage: storage });

restapi.post("/data/upload", upload.single("photo"), (req, res) => {
  console.log(cuiaba);
  let date_ob = new Date();

  let day = ("0" + date_ob.getDate()).slice(-2);

  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  let year = date_ob.getFullYear();

  let hours = () => {
    switch (date_ob.getHours()) {
      case 0:
        return "21";
      case 1:
        return "22";
      case 2:
        return "23";
      case 3:
        return "00";
      case 4:
        return "01";
      case 5:
        return "02";
      case 6:
        return "03";
      case 7:
        return "04";
      case 8:
        return "05";
      case 9:
        return "06";
      case 10:
        return "07";
      case 11:
        return "08";
      case 12:
        return "09";
      case 13:
        return "10";
      default:
        return date_ob.getHours().toString().length < 2
          ? "0" + (date_ob.getHours() - 3)
          : date_ob.getHours() - 3;
    }
  };

  let minutes =
    date_ob.getMinutes().toString().length < 2
      ? "0" + date_ob.getMinutes()
      : date_ob.getMinutes();
  var data = {
    USERNAME: req.body.username,
    USER_PIC:
      "https://bardojeiz-server.herokuapp.com/data/img/" + req.body.photo_pic,
    POST_DATA: day + "/" + month + "/" + year + " - " + hours() + ":" + minutes,
    PIC_LOCAL: "https://bardojeiz-server.herokuapp.com/data/img/" + cuiaba,
    POST_DESC: req.body.description,
    POST_LIKE: 0,
    POST_DISLIKE: 0,
  };
  var sql =
    "INSERT INTO POSTS (USERNAME,USER_PIC,POST_DATA,PIC_LOCAL,POST_DESC,POST_LIKE,POST_DISLIKE) VALUES(?,?,?,?,?,?,?)";
  var params = [
    data.USERNAME,
    data.USER_PIC,
    data.POST_DATA,
    data.PIC_LOCAL,
    data.POST_DESC,
    data.POST_LIKE,
    data.POST_DISLIKE,
  ];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log(data.USERNAME);
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
    exec(
      "sudo convert ./img/" +
        cuiaba +
        " -scale 30% -auto-orient ./img/" +
        cuiaba,
      (error, stdout, stderr) => {
        if (error) {
          console.log(error.message);
        }
      }
    );
  });
  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic NmFmNmZhZTMtMzRlMC00MzFjLTk5MWUtMWI3NWY3ZThmMzMw",
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers,
    };

    var https = require("https");
    var req = https.request(options, function (res) {
      res.on("data", function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on("error", function (e) {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  var message = {
    app_id: "aeb277cc-35e9-4ec4-84a4-406fc5a78c34",
    contents: { en: data.USERNAME + " postou alguma merda" },
    web_url: "https://gui1949.github.io/BardoJeiz",
    included_segments: ["Subscribed Users"],
  };

  sendNotification(message);
});

restapi.post("/data/bot_upload", upload.single("photo"), (req, res) => {
  let date_ob = new Date();

  date_ob = date_ob.toLocaleString("pt-br", { timeZone: "America/Sao_Paulo" });

  var data = {
    USERNAME: req.body.username,
    USER_PIC: req.body.photo_pic,
    POST_DATA: date_ob,
    PIC_LOCAL: req.body.photo,
    POST_DESC: req.body.description,
    POST_LIKE: 0,
    POST_DISLIKE: 0,
    LINK: req.body.link,
  };

  if (data.PIC_LOCAL.includes("https://www.youtube.com")) {
    data.PIC_LOCAL = data.PIC_LOCAL.replace("watch?v=", "embed/");
    console.log(data.PIC_LOCAL);
  }

  var sql =
    "INSERT INTO POSTS (USERNAME,USER_PIC,POST_DATA,PIC_LOCAL,POST_DESC,POST_LIKE,POST_DISLIKE,LINK) VALUES(?,?,?,?,?,?,?,?)";
  var params = [
    data.USERNAME,
    data.USER_PIC,
    data.POST_DATA,
    data.PIC_LOCAL,
    data.POST_DESC,
    data.POST_LIKE,
    data.POST_DISLIKE,
    data.LINK,
  ];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log(data.USERNAME);
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic NmFmNmZhZTMtMzRlMC00MzFjLTk5MWUtMWI3NWY3ZThmMzMw",
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers,
    };

    var https = require("https");
    var req = https.request(options, function (res) {
      res.on("data", function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on("error", function (e) {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  if (
    data.USERNAME == "BTC by Mercado Bitcoin" ||
    data.USERNAME == "DOGE by CoinAPI" ||
    data.USERNAME == "Informes"
  ) {
    var message = {
      app_id: "aeb277cc-35e9-4ec4-84a4-406fc5a78c34",
      contents: { en: data.POST_DESC },
      web_url: "https://gui1949.github.io/BardoJeiz",
      included_segments: ["Subscribed Users"],
    };
    sendNotification(message);
  }

  // else{
  //   var message = {
  //     app_id: "aeb277cc-35e9-4ec4-84a4-406fc5a78c34",
  //     contents: { en: data.USERNAME + ", A LENDA, postou no Bar" },
  //     web_url: "https://gui1949.github.io/BardoJeiz",
  //     included_segments: ["Subscribed Users"],
  //   };
  // }
});

restapi.post("/share", (req, res) => {
  let query = req.body.query;

  // Define your HTML/CSS
  const data = {
    html: query,
    css: `/* *{
      color: #ffffff
    } */
    
    p {
      font-family: sans-serif;
      color: white;
    }
  
    .chip {
      margin: 20;
      width: 65%;
      height: 8vh;
      box-shadow: 0 0 2vh rgba(0, 0, 0, 0.2);
      border: 1px solid #f8f8f2;
      background-color: #0d0e11;
      display: flex;
      overflow-x: auto;
      align-items: center;
      flex-direction: row;
      border-radius: 1vh;
      justify-content: space-around;
    }
    
    .header_img {
      width: 14vh;
      height: auto;
    }
    
    #timer_title {
      font-weight: 700;
      padding-top: 1vh;
      padding-bottom: 1vh;
    }
    
    #temp_num,
    #temp_lbl {
      font-weight: 700;
    }
    
    #temp_lbl {
      padding-bottom: 0.5vh;
    }
    
    #temp_temperatura {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
    
    #temp_ico {
      padding-left: 0.5vh;
    }
    .nav_top_filter_title {
      font-family: sans-serif;
      font-size: 2.7vh;
      font-weight: bold;
    }
    
    #btn_filtro {
      position: absolute;
      height: 100%;
      margin-left: 1vh;
      left: 0;
    }
    
    .filtro {
      margin-top: 2.3vh;
    }
    
    #temp_dados {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      padding-bottom: 1vh;
    }
    
    #timer_clock {
      font-size: 8vh;
      padding-top: 1vh;
      font-weight: 700;
    }
    
    .timer_body {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
    
    hr {
      color: #bd93f9;
      background-color: #bd93f9;
    }
    
    .nav_top_link {
      font-size: 2.7vh;
    }
    
    .material-icons.md-5 {
      font-size: 3.2vh;
    }
    
    #timer_header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    
    .nav_top_link,
    #timer_clock {
      color: #f8f8f2;
      width: max-content;
      overflow: hidden;
      white-space: nowrap;
      font-family: sans-serif;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
      transition: background-color 0.1s ease-in-out;
    }
    
    #master {
      margin-bottom: 10vh;
      animation: fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      position: absolute;
      width: 100%;
      top: 10%;
      margin-top: 0vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
    }
    
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    .ver_mais {
      margin-top: 1vh;
      cursor: pointer;
    }
    
    .lista_feed {
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
    }
    
    html, body{
      background-color: #1d1b22;
    }
    
    #post_feed,
    .post_header,
    #post_merchan,
    .post_timer {
      background-color: #1d1b22;
      width: 90%;
      height:100%
      border-radius: 1vh;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
    
    #post_merchan {
      background-color: #1d1b22;
      border: 1px solid #ffb86c;
    }
    
    #post_feed,
    #post_merchan,
    .post_timer {
      padding: 1vh 3vh 2vh 3vh;
      align-items: center;
      margin-top: 2vh;
      overflow-wrap: break-word;
    }
    
    .post_header {
      margin-bottom: 2vh;
      padding: 1vh 3vh 1vh 3vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .conteudo {
      width: 100%;
      height: 30vh;
      margin-bottom: 1vh;
      border-radius: 1vh;
      background-color: #0d0e11;
      object-fit: contain;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .titulo_fb {
      background-color: #3b5998;
      font-size: 2vh;
      border-top-left-radius: 1vh;
      border-top-right-radius: 1vh;
      height: 5vh;
      padding-left: 2vh;
      display: flex;
      align-items: center;
    }
    
    .caixa_fb {
      background-color: #d8dfea;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      margin: auto;
      border-radius: 1vh;
      vertical-align: middle;
      width: 80%;
    }
    
    .desc_fb {
      padding: 1vh 2vh 1vh 2vh;
      background-color: #f8fbff;
    }
    
    .desc_fb_class {
      color: black;
      font-size: 1.8vh;
    }
    
    .btn_fb {
      width: 10vh;
      height: 4vh;
      font-size: 2vh;
      text-decoration: none;
      color: #f8fbff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1vh;
      float: right;
      right: 0%;
      background-color: #3b5998;
    }
    
    .avatar {
      margin-top: 1vh;
      height: 5vh;
      border-radius: 100%;
      width: 5vh;
      margin-right: 1.2vh;
      float: left;
    }
    
    .avatar_img {
      width: 5vh;
      height: 5vh;
      border-radius: 100%;
      object-fit: cover;
    }
    
    #header {
      margin-bottom: 7.5vh;
      margin-top: 0.1vh;
    }
    
    .username_data_post {
      float: left;
    }
    
    #botoes_reacao {
      width: 100%;
    }
    
    .username {
      font-size: 1.8vh;
      font-weight: 500;
      width: max-content;
      float: left;
    }
    
    .username:hover,
    #upload:hover,
    .nav_top_link:hover,
    .reacao_btn:hover {
      color: #ff79c6;
    }
    
    .descricao {
      font-size: 1.8vh;
    }
    
    .descricao_post {
      font-size: 1.8vh;
      padding: 0.5vh 0;
      width: 100%;
      float: left;
    }
    
    .data_post {
      font-size: 1.6vh;
      color: #f8f8f2;
      float: left;
    }
    
    .reacao_btn {
      margin-top: 1vh;
      width: 50%;
      height: 7vh;
      border: 0px;
      border-top: 1px solid #bd93f9;
      background-color: #1d1b22;
      color: #ffffff;
      cursor: pointer;
      outline: none;
    }
    
    #font_dislike,
    #font_like {
      font-size: 3vh;
      width: 3vh;
      height: 3vh;
    }
    
    #post_fixo {
      font-size: 1.5vh;
    }
    
    #txt_desc {
      width: 50vh;
    }
    
    input[type="file"] {
      display: none;
    }
    
    #upload {
      border: 0px;
      position: relative;
      top: 20%;
      margin: 10 auto;
      color: #ffffff;
      cursor: pointer;
      outline: none;
    }
    
    .modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: rgba(0, 0, 0, 0.8);
      z-index: 99999;
      opacity: 0;
      -webkit-transition: opacity 400ms ease-in;
      -moz-transition: opacity 400ms ease-in;
      transition: opacity 400ms ease-in;
      pointer-events: none;
    }
    
    .modal:target {
      opacity: 1;
      pointer-events: auto;
    }
    
    .modal_window {
      width: 80vw;
      height: 70vw;
      position: relative;
      padding-top: 5%;
      padding-bottom: 5%;
      border-radius: 1vh;
      margin: 10% auto;
      background: #0d0e11;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .fechar {
      position: absolute;
      width: 30px;
      font-weight: 700;
      right: -15px;
      top: -20px;
      text-align: center;
      line-height: 30px;
      margin-top: 5px;
      background-color: #1d1b22;
      border-radius: 50%;
      font-size: 16px;
      color: #0d0e11;
    }
    
    #txt_username,
    #txt_descricao {
      color: #0d0e11;
      font-family: Arial, Helvetica, sans-serif;
      width: 70vw;
      height: 100vw;
      display: table-cell;
      border: none;
      padding-left: 1vh;
      border-radius: 1vw;
      margin: 1vh 1vh 1vh 0vh;
    }
    
    #txt_descricao {
      padding-top: 1vw;
      height: 200vw;
    }
    
    a {
      text-decoration: none;
      color: #ff79c6;
    }
    
    #loading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      object-fit: contain;
      left: 0;
      right: 0;
      text-align: center;
      background-color: #0d0e11;
      color: #ffffff;
    }
    
    @media only screen and (orientation: landscape) {
      .modal_window {
        width: 55vh;
        height: 50vh;
      }
      .nav {
        display: none;
      }
      #txt_username,
      #txt_descricao {
        width: 40vh;
        padding-left: 1vh;
        border-radius: 1vh;
        margin: 1vh 1vh 1vh 0vh;
        height: 20vh;
      }
      .conteudo {
        width: 100%;
        height: 50vh;
      }
      #post_feed,
      .post_timer,
      #post_merchan,
      .post_header {
        width: 100%;
      }
      .reacao_btn {
        width: 50%;
        flex: auto;
        align-items: center;
        justify-content: center;
        justify-items: center;
      }
      /* .avatar {
        margin-top: 0.7vh;
        float: left;
      } */
      #txt_username {
        height: 20vh;
      }
    }
    `,
    google_fonts: "Roboto",
  };

  // Create an image by sending a POST to the API.
  // Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard
  request
    .post({ url: "https://hcti.io/v1/image", form: data })
    .auth(
      "65e90372-385e-4a86-b28d-3317924d60c4",
      "f8ccc94c-f36b-4999-bc3f-22752c877d22"
    )
    .on("data", function (data) {
      console.log(JSON.parse(data));
      let dados = JSON.parse(data);
      let url = dados.url;

      console.log(url);

      fetch(url)
        .then((r) => r.blob())
        .then((blob) => {
          res.type(blob.type);
          blob.arrayBuffer().then((buf) => {
            res.send(Buffer.from(buf));
          });
        });
    });

  // {"url": "https://hcti.io/v1/image/1113184e-419f-49f1-b231-2069942a186f"}
});

restapi.listen(process.env.PORT || 8180);

console.log("Submit GET or POST to http://localhost:80/data");
