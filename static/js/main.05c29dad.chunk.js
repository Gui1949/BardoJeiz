(this.webpackJsonpBarDoJeiz=this.webpackJsonpBarDoJeiz||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r);a(29),a(19),a(30);var o=a(4),i=(a(31),a(32),a(54)),s=a(52),m=a(15),d=a(21),u=a(9),p=a(10),E=a(14),_=a(13),f=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state=Object(d.a)({},e),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.foto;return 1==e.includes(".mp4","mov")?c.a.createElement("video",{className:"conteudo",controls:!0},c.a.createElement("source",{src:e,type:"video/mp4"})):1==e.includes("https://www.youtube.com")?c.a.createElement("iframe",{className:"conteudo",src:e,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):1==e.includes("fbsbx")||1==e.includes("fbcdn")?c.a.createElement("div",{className:"conteudo"},c.a.createElement("div",{className:"caixa_fb"},c.a.createElement("div",{className:"titulo_fb"},c.a.createElement("p",null,c.a.createElement("b",null,"Publica\xe7\xe3o do FaceBook"))),c.a.createElement("div",{className:"desc_fb"},c.a.createElement("p",{className:"desc_fb_class"},"A postagem a seguir \xe9 proveniente do FaceBook. N\xe3o me responsabilizo por nada de l\xe1 n\xe3o.")),c.a.createElement("a",{className:"btn_fb",target:"_blank",href:e},c.a.createElement("b",null,"Acessar")))):c.a.createElement("img",{className:"conteudo",src:e})}}]),a}(c.a.Component),b=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){return console.log(this.props),c.a.createElement("nav",{id:"top_nav"},""!=this.props.text?c.a.createElement("div",{id:"btn_filtro"},c.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){window.location.reload()},className:"material-icons md-5 filtro"},"arrow_back")):null,c.a.createElement("a",{style:{cursor:"pointer"},className:"nav_top_link"},c.a.createElement("p",{className:"nav_top_filter_title",id:"title_navbar"},""==this.props.text?"Bar do Jeiz":this.props.text)))}}]),a}(c.a.Component);a(33);function h(e){var t;t=e.replace(/[^0-9\.]+/g,"");document.getElementById("btn_like_"+t);v(document.getElementById("btn_dislike_"+t)),fetch("https://bar-do-jeiz.onrender.com/data/dislike",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ID:t})})}function v(e){"rgb(255, 121, 198)"===e.style.color?e.style.color="#95a5a6":e.style.color="#ff79c6"}setInterval((function(){var e=new Date,t=(("0"+e.getDate()).slice(-2),("0"+(e.getMonth()+1)).slice(-2),e.getFullYear(),e.getHours()),a=e.getMinutes();function n(e,t,a){return(new Array(a+1).join(t)+e).slice(-a)}var c=n(t,"0",2)+":"+n(a,"0",2);try{document.getElementById("timer_clock").innerHTML=c,t>0&&t<=5?(document.getElementById("timer_title").innerHTML="Vai dormir porra, ta loko?",document.getElementById("icon_dash").innerHTML="psychology"):t>=6&&t<=12?(document.getElementById("timer_title").innerHTML="Eae cumpadi, bom dia!",document.getElementById("icon_dash").innerHTML="brightness_7"):t>12&&t<=17?(document.getElementById("timer_title").innerHTML="Boa tarde, meu consagrado",document.getElementById("icon_dash").innerHTML="brightness_medium"):t>17&&t<=21?(document.getElementById("timer_title").innerHTML="Boa noite e at\xe9 amanh\xe3.",document.getElementById("icon_dash").innerHTML="nights_stay"):t>21&&t<=23?(document.getElementById("timer_title").innerHTML="Bora dormir ou ta dificil?",document.getElementById("icon_dash").innerHTML="hotel"):0==t&&(document.getElementById("timer_title").innerHTML="CIRCULANDO, MEIA NOITE JAH",document.getElementById("icon_dash").innerHTML="local_police")}catch(r){}}),1e3);function g(){var e;navigator.geolocation.getCurrentPosition((function(t){var a=(e=t).coords.latitude,n=e.coords.longitude;!function(e){fetch(e,{method:"POST"}).then((function(e){return e.text()})).then((function(e){var t=(e=JSON.parse(e)).main.temp;t-=273,t=parseFloat(t).toFixed(1),document.getElementById("temp_num").innerHTML=t+"\xb0C",document.getElementById("temp_lbl").innerHTML=e.name,e.weather[0].description.includes("clear")?document.getElementById("temp_ico").innerHTML="wb_sunny":document.getElementById("temp_ico").innerHTML="cloud"}))}("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=cc2a0c4ba3d95cc8c10568222f57d0be"))}))}var N=function(){var e,t=c.a.useState([]),a=Object(o.a)(t,2),n=a[0],r=a[1],l=c.a.useState(0),d=Object(o.a)(l,2),u=d[0],p=d[1],E=c.a.useState(0),_=Object(o.a)(E,2),v=_[0],N=_[1],y=c.a.useState(""),I=Object(o.a)(y,2),T=I[0],k=I[1],j=c.a.useState({}),B=Object(o.a)(j,2),O=B[0],M=B[1],L=c.a.useState(0),S=Object(o.a)(L,2),C=S[0],A=S[1];return setTimeout((function(){setInterval((function(){fetch("https://bar-do-jeiz.onrender.com/data",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data.length;A(t)}))}),1e4)}),2e3),0==u&&fetch("https://bar-do-jeiz.onrender.com/data",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data;r(Object.values(t)),p(1),g()})),0==u&&fetch("https://bar-do-jeiz.onrender.com/news",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){M(e),N(1)})),void 0==n[0]?c.a.createElement("div",{id:"loading"},c.a.createElement("div",{class:"loader"},c.a.createElement("span",{className:"visually-hidden"},"Loading..."))):(e=""==T?n.map((function(e){return c.a.createElement("div",{id:"Publicidade"==e.USERNAME?"post_merchan":"post_feed",className:"posts"},c.a.createElement("div",{id:"header"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{className:"avatar_img",src:e.USER_PIC})),c.a.createElement(s.a,{primary:c.a.createElement("p",{className:"username",style:{cursor:"pointer"},onClick:function(){return k(e.USERNAME)}},c.a.createElement("b",null,e.USERNAME)),className:"username_data_post",secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),c.a.createElement("p",{className:"data_post"},"Publicidade"==e.USERNAME?"MATERIAL PUBLICIT\xc1RIO":e.POST_DATA))})),c.a.createElement(f,{foto:e.PIC_LOCAL}),c.a.createElement(s.a,{primary:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"descricao_post"},e.POST_DESC),e.LINK?c.a.createElement("a",{className:"descricao_post",href:e.LINK,target:"_blank"},"Ler artigo"):null),className:"username_data_post_"}),c.a.createElement("div",{id:"botoes_reacao"},c.a.createElement("button",{className:"reacao_btn",id:"btn_dislike_"+e.ID,onClick:function(){return h(JSON.stringify(e,["ID"]))}},"Publicidade"==e.USERNAME?null:c.a.createElement("i",{className:"material-icons",id:"font_dislike"},"thumb_down"))))})):n.map((function(e){return e.USERNAME==T?c.a.createElement("div",{id:"post_feed",className:"posts"},c.a.createElement("div",{id:"header"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{className:"avatar_img",src:e.USER_PIC})),c.a.createElement(s.a,{primary:c.a.createElement("p",{className:"username",style:{cursor:"pointer"}},c.a.createElement("b",null,e.USERNAME)),className:"username_data_post",secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),c.a.createElement("p",{className:"data_post"},e.POST_DATA))})),c.a.createElement(f,{foto:e.PIC_LOCAL}),c.a.createElement(s.a,{primary:c.a.createElement("p",{className:"descricao_post"},e.POST_DESC),className:"username_data_post_"}),c.a.createElement("div",{id:"botoes_reacao"},c.a.createElement("button",{className:"reacao_btn",id:"btn_dislike_"+e.ID,onClick:function(){return h(JSON.stringify(e,["ID"]))}},c.a.createElement("i",{className:"material-icons",id:"font_dislike"},"thumb_down")))):null})),c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{text:T}),c.a.createElement("div",{id:"master"},c.a.createElement(i.a,{className:"lista_feed"},c.a.createElement("div",{className:"post_timer posts"},c.a.createElement("div",{id:"timer_header"},c.a.createElement("p",{className:"nav_top_link",id:"timer_title"}),c.a.createElement("span",{className:"material-icons md-5",id:"icon_dash"})),c.a.createElement("hr",null),c.a.createElement("div",{className:"timer_body"},c.a.createElement("p",{id:"timer_clock"},"00:00"),c.a.createElement("div",{id:"temp_dados"},c.a.createElement("p",{id:"temp_lbl",className:"nav_top_link"},"No arm\xe1rio"),c.a.createElement("div",{id:"temp_temperatura"},c.a.createElement("p",{id:"temp_num",className:"nav_top_link"},"24\xbaC"),c.a.createElement("span",{className:"material-icons md-5",id:"temp_ico"},"looks"))))),c.a.createElement("div",{id:"post_feed",className:"posts"},c.a.createElement("br",null),c.a.createElement("p",{className:"username"},c.a.createElement("b",null,1==v?"Noticias do Dia - por BBC Brasil":"Carregando")),c.a.createElement("br",null),1==v?O.data.map((function(e){return c.a.createElement("p",null,c.a.createElement("br",null),c.a.createElement("a",{href:e.link,target:"blank"},e.title),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("hr",null))})):""),e),C>n.length?c.a.createElement("div",{id:"bottom_nav"},c.a.createElement("div",{class:"chip",onClick:function(){return window.location.reload()}},c.a.createElement("p",{className:"nav_top_filter_title",id:"title_navbar"},"H\xe1 novas postagens"),c.a.createElement("i",{className:"material-icons",id:"font_dislike"},"cached"))):null)))};var y=function(){return c.a.createElement(N,null)};var I=function(){return c.a.createElement(y,null)};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null),c.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.05c29dad.chunk.js.map