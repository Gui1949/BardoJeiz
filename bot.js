const { response, json } = require("express");
const fs = require("fs");
const fetch = require("node-fetch");
const GoogleImages = require("google-images");
const { exception } = require("console");
const client = new GoogleImages(
  "partner-pub-4228098010894354:5271861158",
  "AIzaSyDyZJg8XvB8FtI40o8VDM7muck6fKUpnNY"
);
const { image_search } = require("duckduckgo-images-api");
const pasta_img = "./img/";
let imagens = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function bot_jeiz() {
  let artigos = ["o"];

  let sujeitos = [
    "bar",
    "jacksons",
    "koerano",
    "jogo do bicho",
    "cara",
    "cachaça",
    "faca enferrujada",
    "zap",
    "ponte preta",
    "fela da puta",
  ];

  let verb_lig = [
    "é",
    "ta",
    "parece",
    "anda",
    "vive",
    "fica",
    "continua",
    "gosta",
  ];

  let pron_adj = [
    "foda",
    "filho da puta",
    "corno",
    "parecido com o reginaldo rossi",
    "fi de rapariga",
    "sujo",
    "arrombado",
    "cachaceiro",
  ];

  let descricao = [
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
    "acordei do nada aqui, aonde eu to",
    "Pinga 24 horas, agora o bar ta outro nivel",
    "to servindo almoço a 3 real aqui, jacksons aprovou",
    "tomando uma glacial de boa no bar",
    "fazendo uma farmacia aqui pro Jacksons",
    "compro chevette 1992 só pra rodar",
    "ouvindo um modão aqui tranquilo",
    "to fazendo promoção de pitu hein",
    "tive um pequeno problema aqui no bar, coisa boba",
    "NÃO REALIZO MAIS APOSTAS DO BICHO (MOTIVO: BICHEIRO ESTÁ DESAPARECIDO)",
    "to comendo um frango que achei numa macumba, mt bom",
    "cabaré da leila ta fechado... COMO ASSIM? COMO ASSIM????????",
    "alguem tira o edinho do ponte preta, pelo amor de deus",
    "hoje aqui no la honda só tem tribufu...",
    "ATENÇÃO: JACKSONS ESTÁ ME DEVENDO 1700 REAIS DESDE AGOSTO DE 2018",
    "comprei um cavalo lindo aqui no leilão",
    "ganhei no bingo, foi roubado, mas foi honesto",
    "roubaram o premio que ganhei roubando no bingo. pequeno dia",
    "GLACIAL É A MELHOR CERVEJA DO MUNDO! QUEM NEGAR É MENTIROSO",
    "de boa aqui no lago dos patos ouvindo amado batista",
    "sonhei com o número 7 hj... vou jogar no jogo do bicho",
    "policia veio reclamar do bar só pq estavamos gritando no truco as três da manhã",
    "NÃO TENHO NADA A VER COM O SUMIÇO DO BICHEIRO. pq eu faria isso? só pq ele me deve?",
    "tive que ir no enterro do cara que me deve a quatro anos. obs: ele ainda não me pagou",
    "pesquei dez quilos de tilápia hj",
    "quase roubaram o meu vectra no pesqueiro hj, tive que deitar os caras na porrada",
    "EU QUERO LEVY FIDELIX PRESIDENTE! PARA UM BRASIL MAIS JUSTO",
    "hj eu não to bom pra beber... to EXCELENTE",
    "quero saber quem me denunciou por abrir na fase vermelha",
    "BAR É SERVIÇO ESSENCIAL SIM",
    "TO COMPRANDO OPALA HEIN, PRINCIPALMENTE SE FOR COMODORO",
    "fui no pesqueiro, peguei uma puta tilapia",
    "hoje tem torneio de sinuca com o baianinho de osasco",
    "coloquei uma maquina caça niquel aqui",
    "atenção: a partir de agora o roubo na sinuca vai ter PUNIÇÃO SEVERA",
    "FORAM ME DENUNCIAR PQ AGREDI UM IDOSO NO MEU BAR... ele roubou na sinuca, EU VI",
    "estou vendendo batata e cebola, pra virar serviço essencial, agora é MERCEARIA DO JEIZ",
    "#LULALIBERAARINHADEGALO",
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
    "ganhei no jogo do bicho online",
    "grande dia, grande dia",
    "um salve pro meu primo javier",
    "clonei o cartão do bicheiro fdp, hj tem rodada na conta desse CHIFRUDO!!!!!!",
    "quando fui pra portugal, arrumei uma briga muito feia com a mafia russa",
  ];

  tipo_frase = getRandomInt(0, 10);

  console.table(tipo_frase);

  if (tipo_frase <= 5) {
    desc =
      artigos[getRandomInt(0, artigos.length)] +
      " " +
      sujeitos[getRandomInt(0, sujeitos.length)] +
      " " +
      verb_lig[getRandomInt(0, verb_lig.length)] +
      " " +
      pron_adj[getRandomInt(0, pron_adj.length)];
  } else {
    desc = descricao[getRandomInt(0, descricao.length)];
  }

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
      console.log("Mudando para DuckDuckGo");

      image_search({ query: desc, moderate: false, iterations: 2 }).then(
        (results) => {
          console.log(results);
          let i = getRandomInt(0, 10);
          img_aleatoria = results[i].image;

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
        }
      );

      // input = imagem[getRandomInt(0, imagem.length)];
      // let userpic =
      //   "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127";
      // let name = "Jeiz";
      // let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

      // let FormData = require("form-data");
      // let data = new FormData();

      // data.append("photo", input);
      // data.append("photo_pic", userpic);
      // data.append("description", desc);
      // data.append("username", name);

      // fetch(apiUrl, {
      //   method: "POST",
      //   body: data,
      // }).then(function (response) {
      //   if (response.ok) {
      //     console.log("Bot JEIZ rodou");
      //   }
      // });
    }
  }
  puxar_img();
}

function bot_dona_sonia() {
  const date = new Date();
  let time = date.getHours() - 3;

  if (time >= 8 && time <= 12) {
    let descricao_ = [
      "BOM DIA ALEGRIA!",
      "BOM DIA FLORES DO CAMPO, AMO TODOS VOCÊS",
    ];

    desc__ = descricao_[getRandomInt(0, descricao_.length)];

    let img_aleatoria = "";

    async function puxar_img() {
      try {
        await client.search("bom dia gif").then((images) => {
          let i = getRandomInt(0, 10);
          img_aleatoria = images[i].url;
          let userpic =
            "https://www.bahianoticias.com.br/fotos/holofote_noticias/23237/IMAGEM_NOTICIA_5.jpg";
          let name = "Dona Sônia";
          let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

          if (img_aleatoria.includes("x-raw-image")) {
            throw new Error("001 - X-RAW IMAGE");
          }

          let FormData = require("form-data");
          let data = new FormData();

          data.append("photo", img_aleatoria);
          data.append("photo_pic", userpic);
          data.append("description", desc__);
          data.append("username", name);

          fetch(apiUrl, {
            method: "POST",
            body: data,
          }).then(function (response) {
            if (response.ok) {
              console.log("Bot sonia rodou");
            }
          });
        });
      } catch (err) {
        console.log("Erro:", err);
        console.log("Mudando para DuckDuckGo");

        image_search({ query: desc__, moderate: false, iterations: 2 }).then(
          (results) => {
            console.log(results);
            let i = getRandomInt(0, 10);
            img_aleatoria = results[i].image;

            let userpic =
              "https://www.bahianoticias.com.br/fotos/holofote_noticias/23237/IMAGEM_NOTICIA_5.jpg";
            let name = "Dona Sônia";
            let apiUrl =
              "https://bardojeiz-server.herokuapp.com/data/bot_upload";

            if (img_aleatoria.includes("x-raw-image")) {
              throw new Error("001 - X-RAW IMAGE");
            }

            let FormData = require("form-data");
            let data = new FormData();

            data.append("photo", img_aleatoria);
            data.append("photo_pic", userpic);
            data.append("description", desc__);
            data.append("username", name);

            fetch(apiUrl, {
              method: "POST",
              body: data,
            }).then(function (response) {
              if (response.ok) {
                console.log("Bot sonia rodou");
              }
            });
          }
        );
      }
    }
    puxar_img();
  }

  if (time >= 16 && time <= 19) {
    let descricao_ = [
      "BOA TARDE MEUS ANJOS!",
      "BOA TARDE QUE DEUS ABENSOE VCS",
    ];

    desc__ = descricao_[getRandomInt(0, descricao_.length)];

    let img_aleatoria = "";

    async function puxar_img() {
      try {
        await client.search("boa tarde gif").then((images) => {
          let i = getRandomInt(0, 10);
          img_aleatoria = images[i].url;
          let userpic =
            "https://www.bahianoticias.com.br/fotos/holofote_noticias/23237/IMAGEM_NOTICIA_5.jpg";
          let name = "Dona Sônia";
          let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

          if (img_aleatoria.includes("x-raw-image")) {
            throw new Error("001 - X-RAW IMAGE");
          }

          let FormData = require("form-data");
          let data = new FormData();

          data.append("photo", img_aleatoria);
          data.append("photo_pic", userpic);
          data.append("description", desc__);
          data.append("username", name);

          fetch(apiUrl, {
            method: "POST",
            body: data,
          }).then(function (response) {
            if (response.ok) {
              console.log("Bot sonia rodou");
            }
          });
        });
      } catch (err) {
        console.log("Erro:", err);

        image_search({ query: desc__, moderate: false, iterations: 2 }).then(
          (results) => {
            console.log(results);
            let i = getRandomInt(0, 10);
            img_aleatoria = results[i].image;

            let userpic =
              "https://www.bahianoticias.com.br/fotos/holofote_noticias/23237/IMAGEM_NOTICIA_5.jpg";
            let name = "Dona Sônia";
            let apiUrl =
              "https://bardojeiz-server.herokuapp.com/data/bot_upload";

            if (img_aleatoria.includes("x-raw-image")) {
              throw new Error("001 - X-RAW IMAGE");
            }

            let FormData = require("form-data");
            let data = new FormData();

            data.append("photo", img_aleatoria);
            data.append("photo_pic", userpic);
            data.append("description", desc__);
            data.append("username", name);

            fetch(apiUrl, {
              method: "POST",
              body: data,
            }).then(function (response) {
              if (response.ok) {
                console.log("Bot sonia rodou");
              }
            });
          }
        );
      }
    }
    puxar_img();
  }

  if (time >= 19 && time <= 23) {
    let descricao_ = [
      "BOA NOITE A TODOS, BONS SONHOS, QUE DEUS ELIMINE VOCES",
      "BOA NOITE MEUS ANJOS, DURMAM BEM",
    ];

    desc__ = descricao_[getRandomInt(0, descricao_.length)];

    let img_aleatoria = "";

    async function puxar_img() {
      try {
        await client.search("boa noite jesus gif").then((images) => {
          let i = getRandomInt(0, 10);
          img_aleatoria = images[i].url;
          let userpic =
            "https://www.bahianoticias.com.br/fotos/holofote_noticias/23237/IMAGEM_NOTICIA_5.jpg";
          let name = "Dona Sônia";
          let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

          if (img_aleatoria.includes("x-raw-image")) {
            throw new Error("001 - X-RAW IMAGE");
          }

          let FormData = require("form-data");
          let data = new FormData();

          data.append("photo", img_aleatoria);
          data.append("photo_pic", userpic);
          data.append("description", desc__);
          data.append("username", name);

          fetch(apiUrl, {
            method: "POST",
            body: data,
          }).then(function (response) {
            if (response.ok) {
              console.log("Bot sonia rodou");
            }
          });
        });
      } catch (err) {
        console.log("Erro:", err);

        image_search({ query: desc__, moderate: false, iterations: 2 }).then(
          (results) => {
            console.log(results);
            let i = getRandomInt(0, 10);
            img_aleatoria = results[i].image;

            let userpic =
              "https://www.bahianoticias.com.br/fotos/holofote_noticias/23237/IMAGEM_NOTICIA_5.jpg";
            let name = "Dona Sônia";
            let apiUrl =
              "https://bardojeiz-server.herokuapp.com/data/bot_upload";

            if (img_aleatoria.includes("x-raw-image")) {
              throw new Error("001 - X-RAW IMAGE");
            }

            let FormData = require("form-data");
            let data = new FormData();

            data.append("photo", img_aleatoria);
            data.append("photo_pic", userpic);
            data.append("description", desc__);
            data.append("username", name);

            fetch(apiUrl, {
              method: "POST",
              body: data,
            }).then(function (response) {
              if (response.ok) {
                console.log("Bot sonia rodou");
              }
            });
          }
        );
      }
    }
    puxar_img();
  }
}

function bot_blogueirinha() {
  let descricao_ = [
    "Faça da tua alma teu próprio jardim.",
    "Quem foi que disse que é impossível ser feliz sozinho? Vivo tranquilo, a liberdade é quem me faz carinho.",
    "Viver, se envolver, se entregar, se encantar!",
    "O mundo está nas mãos daqueles que têm a coragem de sonhar e de correr o risco de viver seus sonhos. ",
    "Não pare até se orgulhar de você.",
    "Arriscar é ser feliz na tentativa.",
    "Na vida você sempre tem a oportunidade de transformar o mundo em um local mais bonito e alegre!",
    "Deus sabe quem coloca na sua vida, da mesma forma que sabe quem tira.",
    "Para quem acredita e persiste, um sonho nunca morre, ele apenas pode ser adiado.",
    "Tenha coragem para viver a vida do jeito que você quer.",
    "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
    "Alegria e tristeza caminham de mão dadas, por isso é necessário não priorizar nenhuma delas, apenas senti-las no momento em que vierem.",
    "Um dia você ainda vai olhar para trás e ver que os problemas eram apenas degraus que te levaram à vitória.",
    "Seja de verdade em tudo que você faz.",
    "A beleza começa quando você decide ser você mesmo.",
    "Todas as coisas encontram seu lugar quando a gente encontra o nosso!",
    "Não pergunte o porquê das coisas, apenas deixe que elas aconteçam.",
    "E você descobrirá que esperar não é a melhor maneira de ser livre.",
    "A vida começa no final da sua zona de conforto.",
    "A vida não é um problema para resolver, mas uma realidade para experimentar.",
    "Uma pequena mudança positiva pode mudar todo o seu dia – ou toda a sua vida.",
    "Nunca deixe suas memórias serem maiores que seus sonhos.",
    "Nunca deixe ninguém te fazer sentir que você não merece o que quer.",
    "Felicidade não é algo que já está feito. Isso vem de suas ações. ",
    "Os obstáculos na vida nos amadurecem, os sucessos nos fazem refletir e os fracassos nos fazem crescer.",
    "Esperar não é perder tempo! Esperar é fruto de uma escolha de quem prioriza o que é eterno e não passageiro.",
    "Espalhe coisa boa, porque a gente merece e o mundo precisa!",
    "Nenhum obstáculo é tão grande se sua vontade de vencer não for maior.",
    "Faça e refaça aquilo que te deixa feliz.",
    "Eu vos digo: é preciso, às vezes, ter um pouco de caos dentro de si, para poder dar a luz uma estrela dançante",
    "Ser, sobretudo, o melhor de mim!",
    "Estar preparado é importante, saber esperar é ainda mais, mas tirar proveito do momento certo é a chave para a vida.",
    "Não deixe a vida acabar com você; todo mundo que foi longe teve que começar do nada",
    "Ser feliz não significa que tudo está perfeito. Significa que você decidiu olhar além das imperfeições.",
    "Sempre parece impossível até estar feito.",
    "No final, só nos arrependemos das oportunidades que não aproveitamos.",
    "Tudo que temos é o agora.",
    "A vida não é um problema para ser resolvido, mas uma realidade para ser vivenciada.",
    "O silêncio fala quando as palavras não conseguem.",
    "Todo novo dia é uma chance para mudar a sua vida.",
    "Não tenha medo de falhar, tenha medo de não tentar.",
    "O melhor ainda está por vir.",
    "A vida não precisa ser perfeita para ser feliz",
    "Não precisa caçar muito pra encontrar a alegria, ela às vezes está escondida nas coisas do dia a dia.",
    "Seja livre da opinião alheia e de toda pressão para ser perfeita o tempo todo.",
    "Momentos especiais, esses valem a pena de serem lembrados e revividos no coração.",
    "Não fique esperando o futuro para ser feliz, faça do presente a sua alegria.",
    "Nunca saberemos o quão forte somos até que ser forte seja a única escolha.",
    "Por um instante, se deixe em paz.",
    "Dê mais valor para quem se importa realmente com você. Assim terá mais motivos para ser feliz!",
  ];

  desc_ = descricao_[getRandomInt(0, descricao_.length)];

  let img_aleatoria = "";

  async function puxar_img() {
    try {
      await client.search("girl summer vibes tumblr").then((images) => {
        let i = getRandomInt(0, 10);
        img_aleatoria = images[i].url;
        let userpic =
          "https://wp-cdn.etiquetaunica.com.br/blog/wp-content/uploads/2018/08/11122702/capa-post-top-blogueiras-brasileiras-compressed.jpg";
        let name = "Julcimara Blog";
        let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

        if (img_aleatoria.includes("x-raw-image")) {
          throw new Error("001 - X-RAW IMAGE");
        }

        let FormData = require("form-data");
        let data = new FormData();

        data.append("photo", img_aleatoria);
        data.append("photo_pic", userpic);
        data.append("description", desc_);
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
    "to felizao",
    "quer saber",
    "tua veia",
    "ei trosha",
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
    "comi seu pai",
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
    "teu cu eh meu trosha",
    "uma hora dessa ta dando na zona",
    "fecha o cu pra falar cmg porra",
  ];

  console.log(imagens);

  fs.readdir(pasta_img, (err, files) => {
    files.forEach((file) => {
      imagens.push(file);
    });
    var fileName = "./img/" + imagens[getRandomInt(0, imagens.length)];
    var topoImagem = superiorArray[getRandomInt(0, superiorArray.length)];
    var bottomImagem = inferiorArray[getRandomInt(0, inferiorArray.length)];
    let loadedImage;

    let nome_img = "bot" + "-" + Date.now() + ".jpeg";

    Jimp.read(fileName)
      .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
      })
      .then(function (font) {
        loadedImage.resize(276, 183);
        loadedImage.print(font, 10, 10, topoImagem).write(nome_img);
        loadedImage.print(font, 10, 150, bottomImagem).write(nome_img);

        var userpic = "tiozao.jpg";
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
  });
}

function bot_gringo() {
  let gringoArray = [
    `SO KOERANO
    E ODEIO BARZIL VOCES
    BRAZILEIRO É PORCO
    VOCE GOSTA DE FEIJOADA
    VOCE GOSTA DE CAIPIRINHA
    LULA DILMA ASASINO
    BRAIZL PORCOS
    CRIME OCORRE NADA ACONTECE FEIJOADA`,
  ];

  input = "https://bardojeiz-server.herokuapp.com/data/img/koerano.jpg";
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

function bot_merchan() {
  const merchanArray = [
    "Venha conhecer o Cabaré da Leila, o lugar perfeito para quem busca diversão e descontração! Aqui você encontra as mais belas dançarinas da região, bebidas de alta qualidade e um ambiente aconchegante e seguro. Não perca mais tempo e venha nos visitar!",
    "Quer sair da rotina e aproveitar uma noite incrível? Então venha para o Cabaré da Leila! Aqui você encontra as melhores atrações, incluindo shows de strip-tease, música ao vivo e muito mais. Nossa equipe de funcionários está pronta para recebê-lo e garantir que sua noite seja inesquecível!",
    "Se você procura um lugar onde possa se divertir sem preocupações, o Cabaré da Leila é o lugar certo! Aqui você encontra um ambiente seguro e discreto, com as melhores bebidas e as mais belas dançarinas da região. Venha nos visitar e descubra por que somos considerados o melhor cabaré da cidade!",
    "Não perca mais tempo procurando um lugar para se divertir! O Cabaré da Leila é o local perfeito para quem busca uma noite de pura diversão e prazer. Aqui você encontra tudo o que precisa para relaxar e aproveitar, incluindo bebidas de alta qualidade, música animada e um ambiente aconchegante e discreto.",
    "Se você quer viver uma experiência única e inesquecível, o Cabaré da Leila é o lugar certo! Aqui você encontra as mais belas dançarinas, shows incríveis e um ambiente seguro e discreto. Não importa se você está sozinho ou acompanhado, no Cabaré da Leila você sempre encontra diversão e prazer garantidos!",
    "Não pode faltar no seu rolê a música do momento: 'Gol Quadrado' do MC Floripão. Ouça agora mesmo!",
    "O hit que tá fazendo sucesso nas paradas é 'Gol Quadrado' do MC Floripão. Escute já!",
    "Não tem como ficar parado ao som de 'Gol Quadrado' do MC Floripão. Dê o play!",
    "A música que não sai da cabeça de ninguém é 'Gol Quadrado' do MC Floripão. Aperte o play e confira!",
    "Se você ainda não ouviu 'Gol Quadrado' do MC Floripão, não sabe o que está perdendo. Ouça agora mesmo!",
    "Cansado de bares lotados e sem graça? Venha para o Bar do Jeiz, onde a diversão é garantida! Aqui você encontra um ambiente acolhedor, drinks deliciosos e um atendimento impecável. Nada de filas intermináveis e bebidas mal feitas, aqui é só alegria!",
    "Se você quer beber em um lugar onde o atendimento é top e a qualidade das bebidas é garantida, o Bar do Jeiz é o seu lugar! Venha experimentar nossos drinks exclusivos e curtir um ambiente descontraído e aconchegante. Aqui você é tratado como um rei!",
    "No Bar do Jeiz, a diversão é levada a sério! Nossos drinks são preparados com os melhores ingredientes e nosso atendimento é incomparável. Aqui você se sente em casa e pode curtir um clima descontraído com os amigos. Venha conferir!",
    "Quer beber em um lugar onde a qualidade é garantida e o atendimento é de primeira? Então venha para o Bar do Jeiz, o lugar perfeito para quem sabe o que é bom! Aqui você encontra drinks exclusivos, petiscos deliciosos e um ambiente agradável e acolhedor. Não perca mais tempo no Bar do João, venha para o Bar do Jeiz!",
    "No Bar do Jeiz, você é tratado com respeito e atenção. Nossos drinks são preparados com esmero e nossos petiscos são deliciosos. Aqui você encontra um ambiente agradável e descontraído, perfeito para curtir um happy hour com os amigos. Venha experimentar e comprovar por que somos superiores ao Bar do João!",
    "Quer conhecer um lugar incrível? Então venha para o Inferninho La Honda! Aqui você encontra drinks deliciosos, música boa e um ambiente descontraído. Vem com a gente!",
    "No Inferninho La Honda, a diversão é garantida! Aqui você encontra um ambiente animado, drinks exclusivos e muita música boa. Vem curtir com a gente!",
    "Não perca mais tempo em lugares sem graça. Venha para o Inferninho La Honda, onde a festa não para! Aqui você encontra drinks especiais, petiscos deliciosos e um clima descontraído. Vem pra cá!",
    "O Inferninho La Honda é o lugar perfeito para quem sabe o que é bom! Aqui você encontra um ambiente agradável, drinks de qualidade e muita música boa. Não perca mais tempo, vem pra cá!",
    "Quer curtir uma noite incrível? Então venha para o Inferninho La Honda, o lugar onde a diversão não tem hora pra acabar! Aqui você encontra drinks exclusivos, petiscos deliciosos e um clima animado. Vem com a gente!",
    "Quer experimentar a cachaça mais autêntica do Brasil? Então vem provar a Pimba! Com sua mistura única de sabores, ela é perfeita para animar qualquer festa. Afim de dar uma pimbada? Cachaça Pimba!",
    "Não há nada melhor do que uma noite com os amigos e a cachaça Pimba! Com seu sabor único e envolvente, ela é ideal para deixar a festa ainda mais animada. Afim de dar uma pimbada? Cachaça Pimba!",
    "A cachaça Pimba é perfeita para quem sabe apreciar uma boa bebida. Seu sabor marcante e incomparável é o que a torna tão especial. Com ela, sua noite nunca mais será a mesma. Afim de dar uma pimbada? Cachaça Pimba!",
    "Quer experimentar uma cachaça que vai mudar sua vida? Então vem provar a Pimba! Com sua mistura de sabores exclusiva, ela é a escolha certa para quem quer animar a festa. Afim de dar uma pimbada? Cachaça Pimba!",
    "A cachaça Pimba é a escolha certa para quem quer experimentar o que há de melhor na cultura brasileira. Seu sabor marcante e único é o que a torna tão especial. Afim de dar uma pimbada? Cachaça Pimba!",
    "Precisando de ajuda para resolver aquele problema em casa? Marido de Aluguel Brandão está aqui para ajudá-lo! Com anos de experiência em reparos e manutenção, ele tem a solução perfeita para você. Gambiarra? Ta na mão, fale com Brandão!",
    "Quer resolver aquela gambiarra que você fez em casa e precisa de um especialista? Marido de Aluguel Brandão é o seu homem! Com rapidez e eficiência, ele vai deixar tudo funcionando novamente. Gambiarra? Ta na mão, fale com Brandão!",
    "Precisando de uma mãozinha para consertar aquele vazamento na torneira ou instalar uma prateleira? Marido de Aluguel Brandão está aqui para ajudá-lo! Com preços acessíveis e serviços de qualidade, ele é a escolha perfeita. Gambiarra? Ta na mão, fale com Brandão!",
    "Não sabe como resolver aquela situação complicada em casa? Marido de Aluguel Brandão é a resposta para todos os seus problemas! Com experiência em serviços de manutenção, ele tem a habilidade para consertar qualquer coisa. Gambiarra? Ta na mão, fale com Brandão!",
    "Quer consertar aquela porta que está emperrando ou precisando de ajuda para instalar uma nova fechadura? Marido de Aluguel Brandão está aqui para ajudá-lo! Com sua experiência e profissionalismo, ele garante um serviço de qualidade. Gambiarra? Ta na mão, fale com Brandão!",
    "Procurando por sinais de vida extraterrestre? O Caçador de Extraterrestres Juninho Cesar tem a habilidade e a tecnologia necessárias para encontrar os mistérios do universo. Vamos descobrir juntos o que há lá fora!",
    "Se você acredita em vida extraterrestre e quer descobrir os segredos do universo, o Caçador de Extraterrestres Juninho Cesar é o seu homem! Com anos de experiência em investigação alienígena, ele está pronto para ajudá-lo a encontrar a verdade. Vamos juntos nessa aventura!",
    "Você acredita em vida extraterrestre e quer descobrir se realmente existem seres de outro planeta aqui na Terra? O Caçador de Extraterrestres Juninho Cesar tem a técnica e o equipamento necessários para investigar e descobrir a verdade. Vamos juntos nessa missão!",
    "Já viu algo estranho no céu e acha que pode ter sido um OVNI? O Caçador de Extraterrestres Juninho Cesar é especialista em avistamentos de objetos voadores não identificados e pode ajudá-lo a desvendar esse mistério. Vamos juntos nessa investigação!",
    "Se você é um entusiasta de vida extraterrestre e quer explorar o universo com alguém que compartilha da mesma paixão, o Caçador de Extraterrestres Juninho Cesar é a pessoa certa! Com sua experiência e conhecimento, ele pode ajudá-lo a descobrir o que há além dos limites da Terra. Vamos nessa aventura juntos!",
    "Cansada de limpar a casa? Experimente a bebida Lustra Móveis! Criada especialmente para as donas de casa, ela vai deixar sua casa limpa e sua vida mais feliz. Com Lustra Móveis, limpar a casa nunca foi tão fácil!",
    "Se você é uma dona de casa que adora uma novidade, precisa experimentar a bebida Lustra Móveis! Além de deixar sua casa limpinha, ela tem um sabor incrível que vai deixar você com água na boca. Não perca mais tempo e experimente já!",
    "Já imaginou beber algo que além de delicioso, ainda ajuda a limpar a casa? A bebida Lustra Móveis faz exatamente isso! Com seu sabor único e sua fórmula exclusiva, ela é a escolha perfeita para quem quer ter uma casa limpa e uma vida cheia de sabor.",
    "Quer deixar sua casa limpinha e ainda aproveitar um sabor incrível? Então experimente a bebida Lustra Móveis! Criada especialmente para as donas de casa, ela é a escolha certa para quem busca praticidade e sabor em um só produto. Não perca mais tempo e experimente agora!",
    "Se você é uma dona de casa que está sempre procurando por produtos que facilitem a rotina, precisa conhecer a bebida Lustra Móveis! Com sua fórmula exclusiva e seu sabor delicioso, ela vai deixar sua casa limpa e sua vida muito mais prática. Experimente agora mesmo!",
  ];

  desc_merchan = merchanArray[getRandomInt(0, merchanArray.length)];

  async function puxar_img() {
    try {
      await client.search(desc_merchan).then((images) => {
        let i = getRandomInt(0, 10);
        img_aleatoria_ = images[i].url;
        var userpic_merchan =
          "https://bardojeiz-server.herokuapp.com/data/img/propaganda.png";
        var name1 = "Publicidade";
        let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

        if (img_aleatoria_.includes("x-raw-image")) {
          throw new Error("001 - X-RAW IMAGE");
        }

        let FormData = require("form-data");
        let data = new FormData();

        data.append("photo", img_aleatoria_);
        data.append("photo_pic", userpic_merchan);
        data.append("description", desc_merchan);
        data.append("username", name1);

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
      console.log("Mudando para DuckDuckGo");

      image_search({ query: desc_merchan, moderate: false, iterations: 2 }).then(
        (results) => {
          console.log(results);
          let i = getRandomInt(0, 10);
          img_aleatoria_ = results[i].image;

          var userpic_merchan =
            "https://bardojeiz-server.herokuapp.com/data/img/propaganda.png";
          var name1 = "Publicidade";
          let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

          if (img_aleatoria_.includes("x-raw-image")) {
            throw new Error("001 - X-RAW IMAGE");
          }

          let FormData = require("form-data");
          let data = new FormData();

          data.append("photo", img_aleatoria_);
          data.append("photo_pic", userpic_merchan);
          data.append("description", desc_merchan);
          data.append("username", name1);

          fetch(apiUrl, {
            method: "POST",
            body: data,
          }).then(function (response) {
            if (response.ok) {
              console.log("Bot PUBLICIDADE rodou");
            }
          });
        }
      );
    }
  }
  puxar_img();
}

function bot_g1() {
  let Parser = require("rss-parser");
  let parser = new Parser();
  let i = 0;

  let fontes_g1 = [
    "http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml",
    "http://g1.globo.com/dynamo/economia/rss2.xml",
    "http://g1.globo.com/dynamo/mundo/rss2.xml",
    "https://g1.globo.com/rss/g1/",
    "https://rss.tecmundo.com.br/feed",
    "http://www.valor.com.br/rss",
    "https://feeds.folha.uol.com.br/ilustrada/rss091.xml",
    "https://feeds.folha.uol.com.br/emcimadahora/rss091.xml",
    "https://feeds.folha.uol.com.br/opiniao/rss091.xml",
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
    "https://quatrorodas.abril.com.br/rss",
    "https://www.techtudo.com.br/rss/techtudo/",
    "https://feeds.folha.uol.com.br/mundo/rss091.xml",
    "https://feeds.folha.uol.com.br/ilustrissima/rss091.xml",
    "https://feeds.folha.uol.com.br/colunas/reinaldoazevedo/rss091.xml",
    "https://feeds.folha.uol.com.br/cotidiano/rss091.xml",
    "http://g1.globo.com/dynamo/carros/rss2.xml",
    "https://viatrolebus.com.br/rss",
    "https://www.metrocptm.com.br/rss",
    "https://www.ahnegao.com.br/rss",
    "https://www.guarulhoshoje.com.br/rss",
    "https://capricho.abril.com.br/rss",
    "https://www.ofuxico.com.br/rss",
    "https://www.marciafernandes.com.br/site/rss",
  ];

  url = fontes_g1[getRandomInt(0, fontes_g1.length)];

  (async () => {
    let feed = await parser.parseURL(url);
    try {
      icone = feed.image.url;
    } catch {
      icone =
        "https://thumbs.dreamstime.com/b/%C3%ADcone-liso-do-vetor-das-not%C3%ADcias-do-mundo-ilustra%C3%A7%C3%A3o-do-logotipo-do-s%C3%ADmbolo-da-not%C3%ADcia-95819924.jpg";
    }
    titulo = feed.title;
    // link = feed.link;

    feed.items.forEach((item) => {
      while (i < 1) {
        let head_noticia = titulo + ": " + item.title;
        let conteudo_bruto = item.content;
        link = item.link;
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
                send_g1(img_srch, icone, head_noticia, "Informes", link);
              });
            } catch (err) {
              console.log("Erro:", err);
              input =
                "https://picsum.photos/500/500?random=" +
                [getRandomInt(0, 999)];
              send_g1(input, icone, head_noticia, "Informes", link);
            }
          }
          puxar_img();
        } else {
          send_g1(img, icone, head_noticia, "Informes", link);
        }

        i++;
      }
    });

    async function send_g1(img, icone, head_noticia, titulo, link) {
      var FormData = require("form-data");
      var data = new FormData();

      let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

      data.append("photo", img);
      data.append("photo_pic", icone);
      data.append("description", head_noticia);
      data.append("username", titulo);
      data.append("link", link);

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

      let formatter = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      high = formatter.format(high);

      var FormData = require("form-data");
      var data = new FormData();

      let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

      let picture =
        "https://bardojeiz-server.herokuapp.com/data/img/bitcoin.jpeg";

      let icone =
        "https://bardojeiz-server.herokuapp.com/data/img/bitcoin.jpeg";

      data.append("photo", picture);
      data.append("photo_pic", icone);
      data.append("description", "O valor atual do Bitcoin é: " + high);
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

setInterval(bot_merchan, 600000);

setInterval(bot_gringo, 6000000);

setInterval(bot_bitcoin, 800000);

setInterval(bot_jeiz, 800000);

setInterval(bot_jacksons, 800000);

setInterval(bot_g1, 800000);

setInterval(bot_blogueirinha, 700000);

setInterval(bot_dona_sonia, 700000);

bot_merchan();
bot_dona_sonia();
bot_gringo();
bot_bitcoin();
bot_jeiz();
bot_jacksons();
bot_g1();
bot_blogueirinha();
bot_dona_sonia();
