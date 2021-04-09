const { response, json } = require("express");
const fs = require("fs");
const fetch = require("node-fetch");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function bot_jeiz() {
  var imagem = [
    "https://afabrica.bar/wp-content/uploads/2018/07/botequim-do-hugo.jpg",
    "https://www.youtube.com/watch?v=6xa6F7ntzJU",
    "https://www.clicrbs.com.br/imagesrc/5572057.jpg",
    "https://images.redetv.uol.com.br/public/jornalismo/redetvinoticias/20200110155648NqUiNaXlhR.png",
    "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2015/10/varzea.jpg",
    "https://imganuncios.mitula.net/chevrolet_chevette_1992_gasolina_chevrolet_chevette_lslsledlse_1_6_1992_gasolina_cinza_2490082599395995638.jpg",
    "https://i.ytimg.com/vi/ajyXB2eQd-0/hqdefault.jpg",
    "https://acervo.oglobo.globo.com/incoming/23270993-3db-b48/imagemVerticalFotogaleria/40380842_23061999DIVULGACAO-CROMOEXT-SXCANTOR-REGINALDO-ROSSI.jpg",
    "https://64.media.tumblr.com/0cabf68dfb6413acf75179c3850356e1/tumblr_ml442vIeZP1so06jbo1_1280.jpg",
    "https://4.bp.blogspot.com/-0ZoabEfNkCI/U5Nra3XaVRI/AAAAAAAAC0o/2bVy7OC1h5U/s1600/CINE+FLORIDA+-+GUARULHOS.jpg",
    "https://i.ytimg.com/vi/ZoAFngyIuZY/hqdefault.jpg",
    "https://i.ytimg.com/vi/StE0GLJmDu4/hqdefault.jpg",
    "https://i.ytimg.com/vi/YVcUBoxYx1w/sddefault.jpg",
    "https://vejario.abril.com.br/wp-content/uploads/2016/12/jboni1.jpg",
    "https://www.futebolinterior.com.br/Imagem/2050467195/727x489",
    "https://s2.glbimg.com/gedlN4QRYwb2srRKnG4dXBN-kUw=/s.glbimg.com/og/rg/f/original/2014/12/17/tv_de_tubo.jpg",
    "https://i.ytimg.com/vi/ZUUC3O8XZ5c/maxresdefault.jpg",
    "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127",
    "https://1.bp.blogspot.com/-KPMdzobvHtc/VziZKycsS2I/AAAAAAAADCE/ecYMC6knO80wD6dolQcjgOfkyTf9qpquwCLcB/s400/bebado.jpg",
    "https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/8044/3450347.jpg",
    "https://miro.medium.com/max/3838/1*2P9GSHpGl64ZLwrwnOn9hQ.jpeg",
    "https://pesqueiropontepreta.com.br/wp-content/uploads/2017/12/Peixe-Tambac%C3%BA.jpeg",
    "https://i.ytimg.com/vi/rWghZZ8y7i0/mqdefault.jpg",
    "https://www.youtube.com/watch?v=JyJfS7BpeDg",
    "https://www.youtube.com/watch?v=SjU4u6C-eaA",
    "https://www.youtube.com/watch?v=lR-kdXr9ZvM",
    "https://www.youtube.com/watch?v=jwI1j7sslYI",
    "https://www.youtube.com/watch?v=6a4pVMQ8pnY",
    "https://www.youtube.com/watch?v=wWUPdA9n01o",
    "https://www.youtube.com/watch?v=PpEABeH4dw8",
    "https://www.youtube.com/watch?v=QWVdyVd79HI",
    "https://www.youtube.com/watch?v=ZA5F2Z6gLzE",
    "https://www.youtube.com/watch?v=wAeejHGBazg",
    "https://www.youtube.com/watch?v=izGwDsrQ1eQ",
    "https://www.youtube.com/watch?v=wPh-MK_5k_k",
    "https://www.youtube.com/watch?v=CKTkigVUNBc",
    "https://www.youtube.com/watch?v=H6wl-EyhXl0",
    "https://www.youtube.com/watch?v=fUjOfsoBhMY",
    "https://www.youtube.com/watch?v=8_7qkRwcMFc",
    "https://www.youtube.com/watch?v=KRttQEyK4F8",
    "https://i.pinimg.com/564x/b6/74/5e/b6745ef924d75e11eb4af59c88a99355.jpg",
    "https://i.pinimg.com/736x/19/5f/0d/195f0dae8d35417d39cdf1ced4001f06.jpg",
    "https://images3.memedroid.com/images/UPLOADED465/5c1f0af23834a.jpeg",
    "https://images7.memedroid.com/images/UPLOADED598/57979854243c5.jpeg",
    "https://www.notibras.com/site/wp-content/uploads/2018/03/cerveja.jpg",
    "https://www.youtube.com/watch?v=KXkxznwWXug",
    "https://www.youtube.com/watch?v=4XKGfziuw5c",
    "https://www.youtube.com/watch?v=gbdqaDRhs84",
    "https://www.youtube.com/watch?v=BtKg458XAHk",
    "https://www.youtube.com/watch?v=Sc9j7YBcVO8",
    "https://www.youtube.com/watch?v=gbdqaDRhs84",
    "https://www.youtube.com/watch?v=bdXr_PiQoTc",
    "https://www.youtube.com/watch?v=9fMPltVszpQ",
    "https://www.youtube.com/watch?v=WUT6qnYw9Dc",
    "https://www.youtube.com/watch?v=3CQfom3ceCk",
    "https://www.youtube.com/watch?v=nXyHfv6XUSc",
    "https://www.youtube.com/watch?v=uK62BM7pnMA",
    "https://www.youtube.com/watch?v=qi0VCZhum2c",
    "https://www.youtube.com/watch?v=hyGfCUVpD_k",
    "https://www.youtube.com/watch?v=ItIMvLKeKME",
    "https://www.youtube.com/watch?v=PoLKlQwwQTg",
    "https://i.redd.it/u7rqhnmy7yc31.jpg",
    "https://www.youtube.com/watch?v=Yc3Hff6WL9k",
    "https://i.ytimg.com/vi/hyGfCUVpD_k/hqdefault.jpg",
    "https://media.tenor.com/images/cea228dc3a8012d41fa7e0373ddbce2b/tenor.gif",
  ];

  var descricao = [
    "hoje ta foda aqui rapaziada",
    "bar do jeiz é só maravilha",
    "tomando uma de boa",
    "bar ta estranho hj",
    "como pesquisar no google",
    "vender droga no bar é crime? google pesquisar",
    "converter dolar para real",
    "preço espingarda para bar",
    "tétano mata?",
    "como punir ladrões na sinuca?",
    "como roubar no truco?",
    "51 delivery com motoboy bebado, só aqui no bar do jeiz",
    "como ganhar no jogo do bicho?",
    "comprar papagaio é crime?",
    "qual é o número da policia?",
    "abrir o bar no natal é pecado?",
    "vou encher a cara, vou me embreagar",
    "grande noite hein, hj inauguro o pinga 24hrs",
    "cine florida fechou, estou de luto",
    "bar fechado hoje (roubaram meu bujão de gás)",
    "inferninho amostra gratis google pesquisar",
    "reginaldo rossi - garçom",
    "quero ver falar mal do ponte preta NA MINHA CARA",
    "HOJE SE O PONTE PRETA PERDER, O BAR NÃO ABRE",
    "Pinga 24 horas, agora o bar ta outro nivel",
    "to servindo almoço a 3 real aqui, jacksons aprovou",
    "tomando uma glacial de boa no bar",
    "fazendo uma farmacia aqui pro Jacksons",
    "compro chevette 1992 só pra rodar",
    "ouvindo um modão aqui tranquilo",
    "quero saber quem me denunciou por abrir na fase vermelha",
    "BAR É SERVIÇO ESSENCIAL SIM",
    "TO COMPRANDO OPALA HEIN, PRINCIPALMENTE SE FOR COMODORO",
    "fui no pesqueiro, peguei uma puta tilapia",
    "hoje tem torneio de sinuca com o baianinho de osasco",
    "coloquei uma maquina caça niquel aqui",
    "atenção: a partir de agora o roubo na sinuca vai ter PUNIÇÃO SEVERA",
    "#BOLSONAROLIBERAARINHADEGALO",
    "ganhei no bicho, hj tem rodada na minha conta",
    "apostei tudo que ganhei no bicho no ponte preta e perdi",
    "jogos de azar são de azar mesmo, descobri aqui",
    "hoje teve porradaria na sinuca, tive que bater em todos",
    "proibido roubar na sinuca, sujeito a FACADA",
    "fiado só amanhã",
    "hoje tem churrasquinho de gato no bar",
    "ednaldo pereira é um dos melhores artistas vivos",
    "PESSOAL ME DERAM UM GOLPE AQUI, UMA NOTA DE 3 REAIS, CUIDADO",
    "fiz uma maquina caça niquel rapaziadaaaaaaaaa",
    "ganhei no jogo do bicho online caraio",
    "grande dia, grande dia",
    "um salve pro meu primo javier",
  ];

  input = imagem[getRandomInt(0, imagem.length)];
  desc = descricao[getRandomInt(0, descricao.length)];

  var userpic =
    "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127";
  var name = "Jeiz";
  let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

  var FormData = require("form-data");
  var data = new FormData();

  data.append("photo", input);
  data.append("photo_pic", userpic);
  data.append("description", desc);
  data.append("username", name);

  fetch(apiUrl, {
    method: "POST",
    body: data,
  }).then(function (response) {
    if (response.ok) {
      console.log("Bot JEIZ rodou");
    }
  });
}

function bot_jacksons() {
  var Jimp = require("jimp");

  var superiorArray = [
    "vou falar só uma vez",
    "tem um viado me olhando",
    "todo mundo",
    "ae, na moral",
    "fala aí",
    "só tem corno nesse porra",
    "ei gatinha",
    "me ve uma dose aí",
    "cara, se liga",
    "ei",
    "aew papito",
    "homem q eh homem",
    "to lendo aq",
    "PARA PARA PARA",
    "quando falarem mal de vc",
    "ei, tu foi no passeio?",
    "aí mermão",
    "as vezes eu fico pensando",
    "to felizão aqui",
    "ta vendo ali?",
    "ce ta ligado ne",
    "aew novinha",
    "beleza entao",
    "cara",
    "caralho mano",
    "ei pessoal, ei pessoal",
    "ae mermao",
  ];

  var inferiorArray = [
    "vai toma no cu aew",
    "agora ele ta disfarçando",
    "da muito eh o cu",
    "pega no meu pau",
    "como q tu eh tão corno?",
    "to mentindo?",
    "me da uma mamadinha",
    "caralho",
    "pega na minha pika",
    "vai se fude",
    "para de ser trosha",
    "sua mae sabe q tu eh?",
    "caga na mão e come",
    "q tu eh corno",
    "para de ser trosha",
    "foda-se porra",
    "passei o pal na tua cara",
    "porra, vai toma no cu porra",
    "sei la caralho",
    "tua mae eh minha",
    "ala teu pai",
    "pode passar o redondo",
    "toma no cu viu",
    "fica de boa aew porra",
    "tu eh mo trosha pqp",
    "pega no meu pal q te levo a portugal",
    "vai pra puta q te pariu",
  ];

  var imagem = [
    "img/britto.jpeg",
    "img/fallon.jpeg",
    "img/galo.jpeg",
    "img/gilberto.jpeg",
    "img/jackye.jpeg",
    "img/justus.jpeg",
    "img/nicolascage.jpeg",
    "img/ozzy.jpeg",
    "img/sara.jpeg",
    "img/fausto.jpeg",
    "img/jk.jpeg",
    "img/KOERANO.jpeg",
    "img/ranger.jpeg",
    "img/therock.jpeg",
    "img/chapola.jpeg",
    "img/carlos.jpeg",
    "img/chalie.jpeg",
    "img/maicou.jpeg",
    "img/esponja.jpeg",
    "img/ranger.jpg",
    "img/adam.jpg",
    "img/gozo.jpg",
    "img/joselito.jpeg",
    "img/vin.jpeg",
  ];

  var fileName = imagem[getRandomInt(0, imagem.length)];
  var topoImagem = superiorArray[getRandomInt(0, superiorArray.length)];
  var bottomImagem = inferiorArray[getRandomInt(0, inferiorArray.length)];
  var loadedImage;

  let nome_img = "bot" + "-" + Date.now() + ".jpeg";

  Jimp.read(fileName)
    .then(function (image) {
      loadedImage = image;
      return Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
    })
    .then(function (font) {
      loadedImage.print(font, 10, 10, topoImagem).write(nome_img);
      loadedImage.print(font, 10, 150, bottomImagem).write(nome_img);

      var userpic = "img/galo.jpeg";
      var name = "Jacksons";
      let apiUrl = "https://bardojeiz-server.herokuapp.com/data/upload";

      var FormData = require("form-data");
      var data = new FormData();
      const fetch = require("node-fetch");

      data.append("photo", fs.createReadStream(nome_img));
      data.append("photo_pic", userpic);
      data.append("description", "XD");
      data.append("username", name);

      fetch(apiUrl, {
        method: "POST",
        body: data,
      }).then(function (response) {
        if (response.ok) {
          console.log("Bot Jacksons rodou");
        }
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

function bot_gringo() {
  let gringoArray = [
    "SO KOERANO",
    "E ODEIO BARZIL VOCES",
    "BRAZILEIRO É PORCO",
    "VOCE GOSTA DE FEIJOADA",
    "VOCE GOSTA DE CAIPIRINHA",
    "LULA DILMA ASASINO",
    "BRAIZL PORCOS",
    "CRIME OCORRE NADA ACONTECE FEIJOADA",
  ];

  input = "https://picsum.photos/200/300?random=" + [getRandomInt(0, 999)];
  desc = gringoArray[getRandomInt(0, gringoArray.length)];

  var userpic = "https://bardojeiz-server.herokuapp.com/data/img/KOERANO.jpeg";
  var name = "KOERANO";
  let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

  var FormData = require("form-data");
  var data = new FormData();

  data.append("photo", input);
  data.append("photo_pic", userpic);
  data.append("description", desc);
  data.append("username", name);

  fetch(apiUrl, {
    method: "POST",
    body: data,
  }).then(function (response) {
    if (response.ok) {
      console.log("Bot KOERANO rodou");
    }
  });
}

function bot_g1() {
  let Parser = require("rss-parser");
  let parser = new Parser();
  let i = 0;

  let fontes_g1 = [
    "http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml",
    "http://g1.globo.com/dynamo/economia/rss2.xml",
    "http://g1.globo.com/dynamo/mundo/rss2.xml",
    "https://rss.tecmundo.com.br/feed",
    "http://www.valor.com.br/rss",
    "https://feeds.folha.uol.com.br/ilustrada/rss091.xml",
    "https://feeds.folha.uol.com.br/emcimadahora/rss091.xml",
    "https://feeds.folha.uol.com.br/opiniao/rss091.xml",
    "http://rss.home.uol.com.br/index.xml",
    "http://rss.megacurioso.com.br/feed",
    "https://www.noticiasaominuto.com.br/rss/ultima-hora",
    "http://www.bbc.co.uk/portuguese/index.xml",
    "https://atarde.uol.com.br/arquivos/rss/brasil.xml",
    "https://exame.com/rss",
    "https://super.abril.com.br/rss",
    "https://veja.abril.com.br/rss",
    "http://fetchrss.com/rss/606f9a52317c9e1b747d29d3606f9a5f5d23c430a739d4b2.xml",
    "http://fetchrss.com/rss/606f9a52317c9e1b747d29d3606fa0f7797cae06b75a6952.xml",
    "http://fetchrss.com/rss/606f9a52317c9e1b747d29d3606fa12374a0415a0b72f852.xml",
    "http://fetchrss.com/rss/606fa41e4881070fd7670d02606fa7bcc93ba434c901f6f2.xml",
    "http://fetchrss.com/rss/606f9a52317c9e1b747d29d3606fa16f06f25d059f216e22.xml",
    "http://fetchrss.com/rss/606f9a52317c9e1b747d29d3606fa1b92e38c201aa23d3f2.xml",
    "http://fetchrss.com/rss/606fa41e4881070fd7670d02606fa428c6a908778105abc2.xml",
    "http://fetchrss.com/rss/606fa41e4881070fd7670d02606fa5c1aac0bd619e61e6c3.xml",
    "http://fetchrss.com/rss/606fa41e4881070fd7670d02606fa7f3dbb5e51dae1f30e2.xml",
  ];

  url = fontes_g1[getRandomInt(0, fontes_g1.length)];

  (async () => {
    let feed = await parser.parseURL(url);
    icone = feed.image.url;
    titulo = feed.title;

    feed.items.forEach((item) => {
      while (i < 1) {
        let head_noticia = item.title;
        let conteudo_bruto = item.content;
        console.log(item);

        find_img_ini = conteudo_bruto.search("<img src=");
        find_img_fi = conteudo_bruto.search("/>");

        let img = conteudo_bruto.slice(find_img_ini, find_img_fi);
        img = img.replace('<img src="', "");
        img = img.replace('"', "");
        img = img.replace(/amp;/g, "");
        img = img.replace(/>/g, "");
        img = img.replace(/<br/g, "");
        console.log(img)

        if (img == "") {
          img = icone;
        }

        send_g1(img, icone, head_noticia, titulo);

        i++;
      }
    });

    async function send_g1(img, icone, head_noticia, titulo) {
      var FormData = require("form-data");
      var data = new FormData();

      let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

      data.append("photo", img);
      data.append("photo_pic", icone);
      data.append("description", head_noticia);
      data.append("username", titulo);

      await fetch(apiUrl, {
        method: "POST",
        body: data,
      }).then(function (response) {
        if (response.ok) {
          console.log("Bot G1 rodou");
        }
      });
    }
  })();
}

function bot_bitcoin() {
  let url = "https://www.mercadobitcoin.net/api/BTC/ticker";
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let dados = data.ticker;
      let high = dados.buy;
      high_virgula = high.slice(0, 3);
      high_dps_virgula = high.slice(3, 7);
      high = high_virgula + "," + high_dps_virgula;
      console.log(high_virgula);

      var FormData = require("form-data");
      var data = new FormData();

      let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

      let picture =
        "https://bardojeiz-server.herokuapp.com/data/img/bitcoin.jpeg";

      let icone =
        "https://pbs.twimg.com/profile_images/1307854653091196929/pFJRfkV6_400x400.jpg";

      data.append("photo", picture);
      data.append("photo_pic", icone);
      data.append("description", "O valor atual do Bitcoin é: R$ " + high);
      data.append("username", "BTC by Mercado Bitcoin");

      fetch(apiUrl, {
        method: "POST",
        body: data,
      }).then(function (response) {
        if (response.ok) {
          console.log("Bot BTC rodou");
        }
      });
    });
}

setInterval(bot_gringo, 6000000);

setInterval(bot_bitcoin, 800000);

setInterval(bot_jeiz, 4000000);

bot_g1()

setInterval(bot_jacksons, 3000000);

setInterval(bot_g1, 1000000);


// ffmpeg -i img/galo.jpeg -vf scale=276:183 img/galo.jpeg
