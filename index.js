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

    console.log(rows);

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
  });
});

restapi.get("/version", (req, res) => {
  versao = "0.1.1";
  res.json({
    data: versao,
  });
});

// restapi.get("/balcao", (req,res) =>{
//   res.json({
//     data: balcao
//   })
// })

// restapi.post("/balcao/send", function (req, res) {
//   var errors = [];
//   if (!req.body.username) {
//     errors.push("Username não especificado");
//   }
//   if (!req.body.msg) {
//     errors.push("Mensagem não especificada");
//   }
//   var data = {
//     USERNAME: req.body.username,
//     MENSAGEM: req.body.msg,
//   };
//   mensagem = data.USERNAME + ": " + data.MENSAGEM
//   console.log(mensagem)
//   balcao.push(mensagem);
//   res.json({
//     data: balcao,
//   });
// });

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

restapi.listen(process.env.PORT || 8180);

console.log("Submit GET or POST to http://localhost:80/data");
