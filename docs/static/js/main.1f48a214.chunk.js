(this.webpackJsonpBarDoJeiz=this.webpackJsonpBarDoJeiz||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c);a(31),a(20),a(32);var i=a(16),l=a.n(i),s=a(21),m=a(4),d=(a(34),a(35),a(58)),u=a(56),p=a(15),E=a(23),_=a(9),f=a(10),b=a(14),h=a(13),v=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state=Object(E.a)({},e),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.foto;return 1==e.includes(".mp4","mov")?r.a.createElement("video",{className:"conteudo",controls:!0},r.a.createElement("source",{src:e,type:"video/mp4"})):1==e.includes("https://www.youtube.com")?r.a.createElement("iframe",{className:"conteudo",src:e,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):1==e.includes("fbsbx")||1==e.includes("fbcdn")?r.a.createElement("div",{className:"conteudo"},r.a.createElement("div",{className:"caixa_fb"},r.a.createElement("div",{className:"titulo_fb"},r.a.createElement("p",null,r.a.createElement("b",null,"Publica\xe7\xe3o do FaceBook"))),r.a.createElement("div",{className:"desc_fb"},r.a.createElement("p",{className:"desc_fb_class"},"A postagem a seguir \xe9 proveniente do FaceBook. N\xe3o me responsabilizo por nada de l\xe1 n\xe3o.")),r.a.createElement("a",{className:"btn_fb",target:"_blank",href:e},r.a.createElement("b",null,"Acessar")))):r.a.createElement("img",{className:"conteudo",src:e})}}]),a}(r.a.Component),g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(_.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("nav",{id:"top_nav"},""!=this.props.text?r.a.createElement("div",{id:"btn_filtro"},r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){window.location.reload()},className:"material-icons md-5 filtro"},"arrow_back")):null,r.a.createElement("a",{style:{cursor:"pointer"},className:"nav_top_link"},r.a.createElement("p",{className:"nav_top_filter_title",id:"title_navbar"},""==this.props.text?r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"Bar do",r.a.createElement("div",{style:{backgroundColor:"#FFB86C",color:"#000000",borderRadius:"1vh",marginLeft:5,padding:2}},"Jeiz")):this.props.text)))}}]),a}(r.a.Component);a(36),a(37);function y(e){var t;t=e.replace(/[^0-9\.]+/g,"");document.getElementById("btn_like_"+t);!function(e){"rgb(255, 121, 198)"===e.style.color?e.style.color="#ffffff":e.style.color="#ff79c6"}(document.getElementById("btn_dislike_"+t)),fetch("https://bar-do-jeiz.onrender.com/data/dislike",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ID:t})})}setInterval((function(){var e=new Date,t=(("0"+e.getDate()).slice(-2),("0"+(e.getMonth()+1)).slice(-2),e.getFullYear(),e.getHours()),a=e.getMinutes();function n(e,t,a){return(new Array(a+1).join(t)+e).slice(-a)}var r=n(t,"0",2)+":"+n(a,"0",2);try{document.getElementById("timer_clock").innerHTML=r,t>0&&t<=5?(document.getElementById("timer_title").innerHTML="Vai dormir porra, ta loko?",document.getElementById("icon_dash").innerHTML="psychology"):t>=6&&t<=12?(document.getElementById("timer_title").innerHTML="Eae cumpadi, bom dia!",document.getElementById("icon_dash").innerHTML="brightness_7"):t>12&&t<=17?(document.getElementById("timer_title").innerHTML="Boa tarde, meu consagrado",document.getElementById("icon_dash").innerHTML="brightness_medium"):t>17&&t<=21?(document.getElementById("timer_title").innerHTML="Boa noite e at\xe9 amanh\xe3.",document.getElementById("icon_dash").innerHTML="nights_stay"):t>21&&t<=23?(document.getElementById("timer_title").innerHTML="Bora dormir ou ta dificil?",document.getElementById("icon_dash").innerHTML="hotel"):0==t&&(document.getElementById("timer_title").innerHTML="CIRCULANDO, MEIA NOITE JAH",document.getElementById("icon_dash").innerHTML="local_police")}catch(c){}}),1e3);function N(){var e;navigator.geolocation.getCurrentPosition((function(t){var a=(e=t).coords.latitude,n=e.coords.longitude;!function(e){fetch(e,{method:"POST"}).then((function(e){return e.text()})).then((function(e){var t=(e=JSON.parse(e)).main.temp;t-=273,t=parseFloat(t).toFixed(1),document.getElementById("temp_num").innerHTML=t+"\xb0C",document.getElementById("temp_lbl").innerHTML=e.name,e.weather[0].description.includes("clear")?document.getElementById("temp_ico").innerHTML="wb_sunny":document.getElementById("temp_ico").innerHTML="cloud"}))}("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=cc2a0c4ba3d95cc8c10568222f57d0be"))}))}var I=function(){var e,t=r.a.useState([]),a=Object(m.a)(t,2),n=a[0],c=a[1],o=r.a.useState(0),i=Object(m.a)(o,2),E=i[0],_=i[1],f=r.a.useState(0),b=Object(m.a)(f,2),h=(b[0],b[1]),I=r.a.useState(""),k=Object(m.a)(I,2),O=k[0],S=k[1],T=r.a.useState({}),j=Object(m.a)(T,2),B=(j[0],j[1]),L=r.a.useState(0),C=Object(m.a)(L,2),M=C[0],w=C[1],A=r.a.useState([]),P=Object(m.a)(A,2),D=P[0],H=P[1],R=r.a.useState(10),x=Object(m.a)(R,2),U=x[0],J=x[1];return setTimeout((function(){setInterval((function(){fetch("https://bar-do-jeiz.onrender.com/data",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data.length;w(t)}))}),1e4)}),2e3),0==E&&fetch("https://bar-do-jeiz.onrender.com/data",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data;c(Object.values(t)),H(n.slice(0,U)),_(1),N()})),0==E&&fetch("https://bar-do-jeiz.onrender.com/news",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){B(e),h(1)})),void 0==n[0]?r.a.createElement("div",{id:"loading"},r.a.createElement("div",{class:"loader"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))):(e=""==O?D.map((function(e){return r.a.createElement("div",{id:"Publicidade"==e.USERNAME?"post_merchan":"post_feed_"+e.ID,key:e.ID,className:"posts post_feed"},r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar_img",src:e.USER_PIC})),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"username",style:{cursor:"pointer"},onClick:function(){return S(e.USERNAME)}},r.a.createElement("b",null,e.USERNAME)),className:"username_data_post",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),r.a.createElement("p",{className:"data_post"},"Publicidade"==e.USERNAME?"MATERIAL PUBLICIT\xc1RIO":e.POST_DATA))})),r.a.createElement(v,{foto:e.PIC_LOCAL}),r.a.createElement(u.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"descricao_post"},e.POST_DESC),e.LINK?r.a.createElement("a",{className:"descricao_post",href:e.LINK,target:"_blank"},"Ler artigo"):null),className:"username_data_post_"}),r.a.createElement("div",{id:"botoes_reacao"},r.a.createElement("button",{className:"reacao_btn",id:"btn_dislike_"+e.ID,onClick:function(){return y(JSON.stringify(e,["ID"]))}},"Publicidade"==e.USERNAME?null:r.a.createElement("i",{className:"material-icons",id:"font_dislike"},"thumb_down_off_alt")),r.a.createElement("button",{className:"reacao_btn",id:"btn_share_"+e.ID,onClick:function(){document.getElementById("post_feed_"+e.ID).outerHTML;fetch("https://bar-do-jeiz.onrender.com/share",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dados:e,nome:"post_feed_"+e.ID})}).then((function(e){return e.blob()})).then((function(t){try{(function(){var e=Object(s.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={files:[new File([n],"file.png",{type:n.type})],title:t,text:a,url:"https://gui1949.github.io/BardoJeiz"},e.prev=1,navigator.canShare(r)){e.next=4;break}throw new Error("Can't share data.",r);case 4:return e.next=6,navigator.share(r);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.name,e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a,n){return e.apply(this,arguments)}})()("Bar do Jeiz","Olha essa merda que o ".concat(e.USERNAME," postou no Bar do Jeiz: ").concat(e.POST_DESC),t)}catch(a){!function(e){var t=URL.createObjectURL(e),a=window.open("","_blank");a.document.write('<img src="'.concat(t,'" alt="Image from Blob">')),a.addEventListener("beforeunload",(function(){URL.revokeObjectURL(t)}))}(t)}}))}},"Publicidade"==e.USERNAME?null:r.a.createElement("i",{className:"material-icons",id:"font_dislike"},"share_icon"))))})):n.map((function(e){return e.USERNAME==O?r.a.createElement("div",{id:"post_feed",key:e,className:"posts"},r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar_img",src:e.USER_PIC})),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"username",style:{cursor:"pointer"}},r.a.createElement("b",null,e.USERNAME)),className:"username_data_post",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),r.a.createElement("p",{className:"data_post"},e.POST_DATA))})),r.a.createElement(v,{foto:e.PIC_LOCAL}),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"descricao_post"},e.POST_DESC),className:"username_data_post_"}),r.a.createElement("div",{id:"botoes_reacao"},r.a.createElement("button",{className:"reacao_btn",id:"btn_dislike_"+e.ID,onClick:function(){return y(JSON.stringify(e,["ID"]))}},r.a.createElement("i",{className:"material-icons",id:"font_dislike"},"thumb_down")),r.a.createElement("button",{className:"reacao_btn",id:"btn_share_"+e.ID,onClick:function(){return navigator.share({title:"Bar do Jeiz",text:"Olha essa merda que o ".concat(e.USERNAME," postou no Bar do Jeiz: ").concat(e.POST_DESC),url:e.PIC_LOCAL})}},"Publicidade"==e.USERNAME?null:r.a.createElement("i",{className:"material-icons",id:"font_dislike"},"share_icon")))):null})),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{text:O}),r.a.createElement("div",{id:"master"},r.a.createElement(d.a,{className:"lista_feed"},r.a.createElement("div",{className:"post_timer posts"},r.a.createElement("div",{id:"timer_header"},r.a.createElement("p",{className:"nav_top_link",id:"timer_title"}),r.a.createElement("span",{className:"material-icons md-5",id:"icon_dash"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"timer_body"},r.a.createElement("p",{id:"timer_clock"},"00:00"),r.a.createElement("div",{id:"temp_dados"},r.a.createElement("p",{id:"temp_lbl",className:"nav_top_link"},"No arm\xe1rio"),r.a.createElement("div",{id:"temp_temperatura"},r.a.createElement("p",{id:"temp_num",className:"nav_top_link"},"24\xbaC"),r.a.createElement("span",{className:"material-icons md-5",id:"temp_ico"},"looks"))))),e,r.a.createElement("div",{className:"post_header ver_mais",onClick:function(){var e=U+10;H(n.slice(0,e)),J(e)}},r.a.createElement("p",{className:"nav_top_filter_title",id:"title_navbar"},"Ver Mais"))),M>n.length?r.a.createElement("div",{id:"bottom_nav"},r.a.createElement("div",{class:"chip",onClick:function(){return window.location.reload()}},r.a.createElement("p",{className:"nav_top_filter_title",id:"title_navbar"},"H\xe1 novas postagens"),r.a.createElement("i",{className:"material-icons",id:"font_dislike"},"cached"))):null)))};var k=function(){return r.a.createElement(I,null)};var O=function(){return r.a.createElement(k,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null),r.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1f48a214.chunk.js.map