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
    "vou encher a cara, vou me embreagar"
    "grande noite hein, hj inauguro o pinga 24hrs"
    "cine florida fechou, estou de luto",
    "bar fechado hoje para fins pessoais (roubaram meu bujão de gás)",
    "inferninho amostra gratis google pesquisar",
    "reginaldo rossi - garçom",
    "fazendo uma farmacia aqui pro Jacksons",
    "compro chevette 1992 só pra rodar",
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
