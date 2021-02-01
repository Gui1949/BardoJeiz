function bot_jeiz() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
    //23
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
    "ednaldo pereira é um dos melhores artistas vivos"
    "PESSOAL ME DERAM UM GOLPE AQUI, UMA NOTA DE 3 REAIS, CUIDADO",
    //23
  ];

  input = imagem[getRandomInt(0, imagem.length)];
  desc = descricao[getRandomInt(0, descricao.length)];

  var userpic =
    "https://www.osaogoncalo.com.br/img/Artigo-Destaque/80000/1_marcos_oliveira_como_beicola_em_a_grande_familia_00087132_0.jpg?xid=236127";
  var name = "Jeiz";
  let apiUrl = "https://bardojeiz-server.herokuapp.com/data/bot_upload";

  var FormData = require("form-data");
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
      console.log("Bot rodou");
    }
  });
}

setInterval(bot_jeiz, 600000);
