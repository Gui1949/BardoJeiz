const { response, json } = require("express");
const fs = require("fs");
const fetch = require("node-fetch");
const GoogleImages = require("google-images");
const { exception } = require("console");
const client = new GoogleImages(
  "partner-pub-4228098010894354:5271861158",
  "AIzaSyDyZJg8XvB8FtI40o8VDM7muck6fKUpnNY"
);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function bot_jeiz() {
  let artigos = [
    "o",
    "os",
    // "a",
    // "as",
    // "um",
    // "uns",
    // "uma",
    // "umas",
    // "a",
    // "ao",
    // "aos",
    // "à",
    // "às",
    // "em",
    // "no",
    // "nos",
    // "na",
    // "nas",
    // "num",
    // "nuns",
    // "numa",
    // "numas",
    // "por",
    // "pelo",
    // "pelos",
    // "pela",
    // "pelas",
  ];

  let sujeitos = [
    "bar",
    "jacksons",
    "koerano",
    "jogo do bicho",
    "cara",
    'cachaça',
    'faca enferrujada',
    'zap',
    'ponte preta'
  ];

  let verb_lig = [
    'é',
    'ta',
    'parece',
    'anda',
    'vive',
    'fica',
    'continua',
    'gosta',
    'quer',
    'fode'
  ]

  let pron_adj = [
    'meu',
    'nosso',
    'foda',
    'filho da puta',
    'corno',
    'parecido com o reginaldo rossi',
    'fi de rapariga',
    'sujo',
    'arrombado',
    'cachaceiro'
  ]
  // let descricao = [
  //   "hoje ta foda aqui rapaziada",
  //   "bar do jeiz é só maravilha",
  //   "tomando uma de boa",
  //   "bar ta estranho hj",
  //   "como pesquisar no google",
  //   "vender droga no bar é crime? google pesquisar",
  //   "converter dolar para real",
  //   "preço espingarda para bar",
  //   "tétano mata?",
  //   "como punir ladrões na sinuca?",
  //   "como roubar no truco?",
  //   "51 delivery com motoboy bebado, só aqui no bar do jeiz",
  //   "como ganhar no jogo do bicho?",
  //   "comprar papagaio é crime?",
  //   "qual é o número da policia?",
  //   "abrir o bar no natal é pecado?",
  //   "vou encher a cara, vou me embreagar",
  //   "grande noite hein, hj inauguro o pinga 24hrs",
  //   "cine florida fechou, estou de luto",
  //   "bar fechado hoje (roubaram meu bujão de gás)",
  //   "inferninho amostra gratis google pesquisar",
  //   "reginaldo rossi - garçom",
  //   "quero ver falar mal do ponte preta NA MINHA CARA",
  //   "HOJE SE O PONTE PRETA PERDER, O BAR NÃO ABRE",
  //   "acordei do nada aqui, aonde eu to",
  //   "Pinga 24 horas, agora o bar ta outro nivel",
  //   "to servindo almoço a 3 real aqui, jacksons aprovou",
  //   "tomando uma glacial de boa no bar",
  //   "fazendo uma farmacia aqui pro Jacksons",
  //   "compro chevette 1992 só pra rodar",
  //   "ouvindo um modão aqui tranquilo",
  //   "to fazendo promoção de pitu hein",
  //   "tive um pequeno problema aqui no bar, coisa boba",
  //   "NÃO REALIZO MAIS APOSTAS DO BICHO (MOTIVO: BICHEIRO ESTÁ DESAPARECIDO)",
  //   "to comendo um frango que achei numa macumba, mt bom",
  //   "cabaré da leila ta fechado... COMO ASSIM? COMO ASSIM????????",
  //   "alguem tira o edinho do ponte preta, pelo amor de deus",
  //   "hoje aqui no la honda só tem tribufu...",
  //   "ATENÇÃO: JACKSONS ESTÁ ME DEVENDO 1700 REAIS DESDE AGOSTO DE 2018",
  //   "comprei um cavalo lindo aqui no leilão",
  //   "ganhei no bingo, foi roubado, mas foi honesto",
  //   "roubaram o premio que ganhei roubando no bingo. pequeno dia",
  //   "GLACIAL É A MELHOR CERVEJA DO MUNDO! QUEM NEGAR É MENTIROSO",
  //   "de boa aqui no lago dos patos ouvindo amado batista",
  //   "sonhei com o número 7 hj... vou jogar no jogo do bicho",
  //   "policia veio reclamar do bar só pq estavamos gritando no truco as três da manhã",
  //   "NÃO TENHO NADA A VER COM O SUMIÇO DO BICHEIRO. pq eu faria isso? só pq ele me deve?",
  //   "tive que ir no enterro do cara que me deve a quatro anos. obs: ele ainda não me pagou",
  //   "pesquei dez quilos de tilápia hj",
  //   "quase roubaram o meu vectra no pesqueiro hj, tive que deitar os caras na porrada",
  //   "EU QUERO LEVY FIDELIX PRESIDENTE! PARA UM BRASIL MAIS JUSTO",
  //   "hj eu não to bom pra beber... to EXCELENTE",
  //   "quero saber quem me denunciou por abrir na fase vermelha",
  //   "BAR É SERVIÇO ESSENCIAL SIM",
  //   "TO COMPRANDO OPALA HEIN, PRINCIPALMENTE SE FOR COMODORO",
  //   "fui no pesqueiro, peguei uma puta tilapia",
  //   "hoje tem torneio de sinuca com o baianinho de osasco",
  //   "coloquei uma maquina caça niquel aqui",
  //   "atenção: a partir de agora o roubo na sinuca vai ter PUNIÇÃO SEVERA",
  //   "FORAM ME DENUNCIAR PQ AGREDI UM IDOSO NO MEU BAR... ele roubou na sinuca, EU VI",
  //   "estou vendendo batata e cebola, pra virar serviço essencial, agora é MERCEARIA DO JEIZ",
  //   "#BOLSONAROLIBERAARINHADEGALO",
  //   "ganhei no bicho, hj tem rodada na minha conta",
  //   "apostei tudo que ganhei no bicho no ponte preta e perdi",
  //   "jogos de azar são de azar mesmo, descobri aqui",
  //   "hoje teve porradaria na sinuca, tive que bater em todos",
  //   "proibido roubar na sinuca, sujeito a FACADA",
  //   "fiado só amanhã",
  //   "hoje tem churrasquinho de gato no bar",
  //   "ednaldo pereira é um dos melhores artistas vivos",
  //   "PESSOAL ME DERAM UM GOLPE AQUI, UMA NOTA DE 3 REAIS, CUIDADO",
  //   "fiz uma maquina caça niquel rapaziadaaaaaaaaa",
  //   "ganhei no jogo do bicho online",
  //   "grande dia, grande dia",
  //   "um salve pro meu primo javier",
  // ];

  // desc = descricao[getRandomInt(0, descricao.length)];
  desc = artigos[getRandomInt(0, artigos.length)] + ' ' + sujeitos[getRandomInt(0, sujeitos.length)] + ' ' + verb_lig[getRandomInt(0, verb_lig.length)] + ' ' + pron_adj[getRandomInt(0, pron_adj.length)]

  let img_aleatoria = "";

  async function puxar_img() {
    try {
      await client.search(desc).then((images) => {
        let i = getRandomInt(0, 10);
        img_aleatoria = images[i].url;
        let userpic =
          "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127";
        let name = "Jeiz";
        let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

        if (img_aleatoria.includes("x-raw-image")) {
          throw new Error("001 - X-RAW IMAGE");
        }

        let FormData = require("form-data");
        let data = new FormData();

        data.append("photo", img_aleatoria);
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
      });
    } catch (err) {
      console.log("Erro:", err);
      input = "https://picsum.photos/500/500?random=" + [getRandomInt(0, 999)];
      let userpic =
        "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127";
      let name = "Jeiz";
      let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

      let FormData = require("form-data");
      let data = new FormData();

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
  }
  puxar_img();
}

function bot_jacksons() {
  let Jimp = require("jimp");

  let superiorArray = [
    "vou falar só uma vez",
    "tem um viado me olhando",
    "todo mundo",
    "as vezes no silencio da noite",
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

  let inferiorArray = [
    "vai toma no cu aew",
    "tu eh korno que eu sei",
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

  let imagem = [
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
    "http://fetchrss.com/rss/606fa41e4881070fd7670d02607221d711e1091bbf7464a2.xml",
    "http://fetchrss.com/rss/607222b9c01aec5c3f6f24f2607222d8f8ddf451027515e2.xml",
    "https://veja.abril.com.br/blog/sensacionalista/rss",
    "https://vejasp.abril.com.br/rss",
    "https://quatrorodas.abril.com.br/rss",
    "https://www.techtudo.com.br/rss/techtudo/",
    "https://feeds.folha.uol.com.br/mundo/rss091.xml",
    "https://feeds.folha.uol.com.br/ilustrissima/rss091.xml",
    "https://feeds.folha.uol.com.br/colunas/reinaldoazevedo/rss091.xml",
    "https://feeds.folha.uol.com.br/cotidiano/rss091.xml",
    "http://g1.globo.com/dynamo/carros/rss2.xml",
  ];

  url = fontes_g1[getRandomInt(0, fontes_g1.length)];

  (async () => {
    let feed = await parser.parseURL(url);
    icone = feed.image.url;
    titulo = feed.title;

    feed.items.forEach((item) => {
      while (i < 1) {
        let head_noticia = titulo + ": " + item.title;
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
        console.log(img);

        if (img == "") {
          async function puxar_img() {
            try {
              await client.search(item.title).then((images) => {
                img_srch = images[0].url;
                console.log(img_srch);
                send_g1(img_srch, icone, head_noticia, "Informes");
              });
            } catch (err) {
              console.log("Erro:", err);
              input =
                "https://picsum.photos/500/500?random=" +
                [getRandomInt(0, 999)];
              send_g1(input, icone, head_noticia, "Informes");
            }
          }
          puxar_img();
        } else {
          send_g1(img, icone, head_noticia, "Informes");
        }

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

// function bot_dogecoin() {
//   let url =
//     "http://rest.coinapi.io/v1/assets/DOGE?apikey=27EAF079-A588-40DE-90EE-FCD5C5CE3720";
//   fetch(url)
//     .then((resp) => resp.json())
//     .then(function (data) {
//       let dados = data[0].price_usd;
//       console.log(dados);
//       dados = dados.toFixed(2);
//       let usd = 0;

//       fetch("https://economia.awesomeapi.com.br/usd-brl/1")
//         .then((resp) => resp.json())
//         .then(function (data) {
//           usd = data[0].high;
//           console.log(usd);
//           usd = parseFloat(usd).toFixed(2);
//           console.log(usd);
//           dados = dados * usd;
//           dados = parseFloat(dados).toFixed(2);
//           console.log(dados);

//           var FormData = require("form-data");
//           var data = new FormData();

//           let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

//           let picture =
//             "https://media.giphy.com/media/gRHn9ERANxrHiff73F/giphy.gif";

//           let icone = "https://dogechain.info/content/img/doge.png";

//           data.append("photo", picture);
//           data.append("photo_pic", icone);
//           data.append(
//             "description",
//             "O valor atual do Dogecoin é de: R$ " + dados
//           );
//           data.append("username", "DOGE by CoinAPI");

//           fetch(apiUrl, {
//             method: "POST",
//             body: data,
//           }).then(function (response) {
//             if (response.ok) {
//               console.log("Bot DOGE rodou");
//             }
//           });
//         });
//     });
// }

setInterval(bot_gringo, 6000000);

setInterval(bot_bitcoin, 800000);

// setInterval(bot_dogecoin, 800000);

setInterval(bot_jeiz, 700000);
// setInterval(bot_jeiz, 1000);

setInterval(bot_jacksons, 3000000);

setInterval(bot_g1, 800000);

// ffmpeg -i img/galo.jpeg -vf scale=276:183 img/galo.jpeg
