(this.webpackJsonpBarDoJeiz=this.webpackJsonpBarDoJeiz||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},146:function(e,t,a){e.exports=a(449)},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},449:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(24),r=a.n(o),l=(a(150),a(143)),i=a(4),s=a(136),d=a.n(s);a(151);var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("a",{className:"Feed",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},u=(a(152),a(153),a(462)),p=a(464),E=a(58),b=a(137),_=a.n(b),h=a(138),f="https://bardojeiz-server.herokuapp.com/data";function g(){try{y()}catch(e){}_.a.get(f).then((function(e){g.dados=e.data,g.leitura=g.dados.data,w(Object.values(g.leitura))}))}function v(e){"rgb(255, 121, 198)"===e.style.color?e.style.color="#95a5a6":e.style.color="#ff79c6"}function y(){for(var e=document.getElementsByClassName("posts");e.length>0;)e[0].parentNode.removeChild(e[0])}g();setInterval((function(){var e=new Date,t=(("0"+e.getDate()).slice(-2),("0"+(e.getMonth()+1)).slice(-2),e.getFullYear(),e.getHours()),a=e.getMinutes(),n=e.getSeconds();function c(e,t,a){return(new Array(a+1).join(t)+e).slice(-a)}var o=c(t,"0",2)+":"+c(a,"0",2)+":"+c(n,"0",2);try{document.getElementById("timer_clock").innerHTML=o,t>0&&t<=5?(document.getElementById("timer_title").innerHTML="Vai dormir porra, ta loko?",document.getElementById("icon_dash").innerHTML="psychology"):t>=6&&t<=12?(document.getElementById("timer_title").innerHTML="Eae cumpadi, bom dia!",document.getElementById("icon_dash").innerHTML="brightness_7"):t>12&&t<=17?(document.getElementById("timer_title").innerHTML="Boa tarde, meu consagrado",document.getElementById("icon_dash").innerHTML="brightness_medium"):t>17&&t<=21?(document.getElementById("timer_title").innerHTML="Boa noite e at\xe9 amanh\xe3.",document.getElementById("icon_dash").innerHTML="nights_stay"):t>21&&t<=23?(document.getElementById("timer_title").innerHTML="Bora dormir ou ta dificil?",document.getElementById("icon_dash").innerHTML="hotel"):0==t&&(document.getElementById("timer_title").innerHTML="CIRCULANDO, MEIA NOITE JAH",document.getElementById("icon_dash").innerHTML="local_police")}catch(r){}}),1e3);function w(e){if(void 0==e[0])return c.a.createElement("nav",{id:"top_nav"},c.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){f="https://bardojeiz-server.herokuapp.com/data/",g()},className:"nav_top_link"},c.a.createElement("b",null,"Bar do Jeiz")));var t,a=0;Object(h.a)(c.a.createElement(c.a.Fragment,null,c.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),c.a.createElement("nav",{id:"top_nav"},c.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){f="https://bardojeiz-server.herokuapp.com/data/",g()},className:"nav_top_link"},c.a.createElement("b",null,"Bar do Jeiz"))),c.a.createElement("div",{id:"master"},c.a.createElement(u.a,{className:"lista_feed"},c.a.createElement("div",{class:"post_header posts"},c.a.createElement("a",{href:"#modal_upload",className:"material-icons",id:"upload"},"publish"),c.a.createElement("div",{id:"modal_upload",class:"modal"},c.a.createElement("div",{class:"modal_window"},c.a.createElement("a",{href:"#fechar",title:"Fechar",class:"fechar"},"x"),"Nome de Usu\xe1rio:",c.a.createElement("input",{type:"text",id:"txt_username"}),c.a.createElement("br",null),"Descri\xe7\xe3o:",c.a.createElement("textarea",{name:"Text1",cols:"40",rows:"5",maxLength:"70",id:"txt_descricao"}),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("label",{for:"btn_upload",className:"material-icons",id:"upload"},"publish"),c.a.createElement("input",{type:"file",id:"btn_upload",accept:".png,.jpg,.mp4,.jpeg",onChange:function(){return function(){var e=document.querySelector('input[type="file"]'),t=document.getElementById("txt_username").value,a=document.getElementById("txt_descricao").value,n=new FormData;n.append("photo",e.files[0]),n.append("description",a),n.append("username",t),fetch("https://bardojeiz-server.herokuapp.com/data/upload",{method:"POST",body:n}).then((function(e){e.ok&&window.location.reload()}))}()}}))))),c.a.createElement("div",{class:"post_timer posts"},c.a.createElement("div",{id:"timer_header"},c.a.createElement("p",{class:"nav_top_link",id:"timer_title"}),c.a.createElement("span",{class:"material-icons md-5",id:"icon_dash"})),c.a.createElement("hr",null),c.a.createElement("div",{class:"timer_body"},c.a.createElement("p",{id:"timer_clock"},"00:00"))),e.map((function(e){return c.a.createElement("div",{id:"post_feed",class:"posts"},(a++,window["Object"+parseInt(a)]=new Object,window["Object"+parseInt(a)]=Object.values(e),t=1==window["Object"+a][4].includes(".mp4","mov")?c.a.createElement("video",{className:"conteudo",controls:!0},c.a.createElement("source",{src:window["Object"+a][4],type:"video/mp4"})):c.a.createElement("img",{className:"conteudo",src:window["Object"+a][4]}),1==window["Object"+a][4].includes("https://www.youtube.com")&&(t=c.a.createElement("iframe",{class:"conteudo",src:window["Object"+a][4],frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),void(1!=window["Object"+a][4].includes("fbsbx")&&1!=window["Object"+a][4].includes("fbcdn")||(t=c.a.createElement("div",{class:"conteudo"},c.a.createElement("div",{class:"caixa_fb"},c.a.createElement("div",{class:"titulo_fb"},c.a.createElement("p",null,c.a.createElement("b",null,"Publica\xe7\xe3o do FaceBook"))),c.a.createElement("div",{class:"desc_fb"},c.a.createElement("p",{class:"desc_fb_class"},"A postagem a seguir \xe9 proveniente do FaceBook. N\xe3o me responsabilizo por nada de l\xe1 n\xe3o.")),c.a.createElement("a",{class:"btn_fb",href:window["Object"+a][4]},c.a.createElement("b",null,"Acessar"))))))),c.a.createElement("div",{id:"header"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{className:"avatar_img",src:window["Object"+a][2]})),c.a.createElement(p.a,{primary:c.a.createElement("p",{className:"username",style:{cursor:"pointer"},onClick:function(){return t=JSON.stringify(e,["USERNAME"]),y(),t=JSON.parse(t),console.log(t.USERNAME),f="https://bardojeiz-server.herokuapp.com/data/"+t.USERNAME,console.log(f),void g();var t}},c.a.createElement("b",null,window["Object"+a][1])),className:"username_data_post",secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),c.a.createElement("p",{className:"data_post"},window["Object"+a][3]))})),t,c.a.createElement(p.a,{primary:c.a.createElement("p",{className:"descricao_post"},window["Object"+a][5]," - ",window["Object"+a][6]," ","Likes, ",window["Object"+a][7]," Dislikes"),className:"username_data_post_"}),c.a.createElement("div",{id:"botoes_reacao"},c.a.createElement("button",{className:"reacao_btn",id:"btn_like_"+window["Object"+a][0],onClick:function(){return function(e){var t;t=e.replace(/[^0-9\.]+/g,""),document.getElementById("btn_dislike_"+t).style.color="#95a5a6",v(document.getElementById("btn_like_"+t)),fetch("https://bardojeiz-server.herokuapp.com/data/like",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ID:t})})}(JSON.stringify(e,["ID"]))}},c.a.createElement("i",{className:"material-icons",id:"font_like"},"thumb_up")),c.a.createElement("button",{className:"reacao_btn",id:"btn_dislike_"+window["Object"+a][0],onClick:function(){return function(e){var t;t=e.replace(/[^0-9\.]+/g,""),document.getElementById("btn_like_"+t).style.color="#95a5a6",v(document.getElementById("btn_dislike_"+t)),fetch("https://bardojeiz-server.herokuapp.com/data/dislike",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ID:t})})}(JSON.stringify(e,["ID"]))}},c.a.createElement("i",{className:"material-icons",id:"font_dislike"},"thumb_down"))))}))))))}var j=w;var N=function(){return c.a.createElement(l.a,null,c.a.createElement(i.a,{path:"/",exact:!0,component:j}),c.a.createElement(i.a,{path:"/login",component:m}))};var k=function(){return c.a.createElement(N,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.f4e3802d.chunk.js.map