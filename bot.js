function bot_jeiz() {
  var input = "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127"
  var userpic = "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127"
  var name = "Jeiz"
  var desc = "Hoje to feliz rapaziada, pique beiçola"
  let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

  var FormData = require('form-data');
  var data = new FormData();
  const fetch = require("node-fetch");

  data.append("photo", input);
  data.append("photo_pic", userpic);
  data.append("description", desc);
  data.append("username", name);

  fetch(apiUrl, {
    method: "POST",
    body: data,
  }).then(function (response) {
    if (response.ok) {
      console.log('Bot rodou')
    }
  });
}

setInterval(bot_jeiz, 100000);

