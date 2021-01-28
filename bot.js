function bot_jeiz() {
    var input = "https://img.estadao.com.br/thumbs/640/resources/jpg/0/4/1568918250040.jpg"    
    var name = "Jeiz";
    var desc = "Hoje to feliz rapaziada, pique beiçola";
    let apiUrl = "https://bardojeiz-server.herokuapp.com/data/upload_bot";

    var FormData = require("form-data");
    var data = new FormData();
    const fetch = require("node-fetch");

    data.append("photo", input);
    data.append("description", desc);
    data.append("username", name);

    fetch(apiUrl, {
      method: "POST",
      body: data,
    }).then(function (response) {
      if (response.ok) {
        console.log("Bot rodou");
      }
      else{
          console.log("Bot nao rodou")
      }
    });
}

// bot_jeiz();

setInterval(bot_jeiz, 30000);
// setInterval(bot_jeiz, 4000000);