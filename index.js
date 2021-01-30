var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./database.db");
var express = require("express");
var cors = require("cors");
var restapi = express();
var bodyParser = require("body-parser");
const { exec } = require("child_process");
const fs = require("fs");
var https = require("https");

restapi.use(bodyParser.urlencoded({ extended: false }));
restapi.use(bodyParser.json());
restapi.use(cors());

restapi.get("/data", (req, res) => {
  var sql = "select * from POSTS order by id desc";
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

restapi.get("/version", (req,res) =>{
  versao = "0.0.8"
  res.json({
    data: versao
  })
})

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
  destination: "../app/assets/uploads/",
  filename: function (req, file, cb) {
    cuiaba = "upload" + "-" + Date.now() + path.extname(file.originalname);
    cb(null, cuiaba);
  },
});

restapi.use("/data/img", express.static("../app/assets/uploads/"));

var upload = multer({ storage: storage });

restapi.post("/data/upload", upload.single("photo"), (req, res) => {
  console.log(cuiaba);
  let date_ob = new Date();

  let day = ("0" + date_ob.getDate()).slice(-2);

  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  let year = date_ob.getFullYear();

  let hours = date_ob.getHours();

  let minutes = date_ob.getMinutes();
  var data = {
    USERNAME: req.body.username,
    USER_PIC: "https://bardojeiz-server.herokuapp.com/data/img/" + cuiaba,
    POST_DATA: day + "/" + month + "/" + year + " - " + hours + ":" + minutes,
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
      "sudo convert ../app/assets/uploads/" +
        cuiaba +
        " -scale 30% -auto-orient ../app/assets/uploads/" +
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

  let day = ("0" + date_ob.getDate()).slice(-2);

  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  let year = date_ob.getFullYear();

  let hours = date_ob.getHours();

  let minutes = date_ob.getMinutes();
  var data = {
    USERNAME: req.body.username,
    USER_PIC: req.body.photo_pic,
    POST_DATA: day + "/" + month + "/" + year + " - " + hours + ":" + minutes,
    PIC_LOCAL: req.body.photo,
    POST_DESC: req.body.description,
    POST_LIKE: 0,
    POST_DISLIKE: 0,
  };

  if(data.PIC_LOCAL.includes("https://www.youtube.com")){
    data.PIC_LOCAL = data.PIC_LOCAL.replace("watch?v=", "embed/");
    console.log(data.PIC_LOCAL)
  }

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
    contents: { en: data.USERNAME + ", A LENDA, postou no Bar" },
    web_url: "https://gui1949.github.io/BardoJeiz",
    included_segments: ["Subscribed Users"],
  };

  sendNotification(message);
});

restapi.listen(process.env.PORT || 80);

console.log("Submit GET or POST to http://localhost:80/data");
