(this.webpackJsonpBarDoJeiz=this.webpackJsonpBarDoJeiz||[]).push([[0],{136:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},146:function(e,a,t){e.exports=t(449)},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},449:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),c=t.n(o),l=(t(150),t(143)),s=t(4),i=t(136),m=t.n(i);t(151);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"Feed",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},p=(t(152),t(153),t(462)),u=t(464),E=t(58),b=t(137),f=t.n(b),v=t(138),_="https://bardojeiz-server.herokuapp.com/data";function h(){try{w()}catch(e){}f.a.get(_).then((function(e){h.dados=e.data,h.leitura=h.dados.data,N(Object.values(h.leitura))}))}function g(e){"rgb(255, 121, 198)"===e.style.color?e.style.color="#95a5a6":e.style.color="#ff79c6"}function w(){for(var e=document.getElementsByClassName("posts");e.length>0;)e[0].parentNode.removeChild(e[0])}h();var y=function(){return r.a.createElement("nav",{id:"top_nav"},r.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){_="https://bardojeiz-server.herokuapp.com/data/",h()},className:"nav_top_link"},r.a.createElement("b",null,"Bar do Jeiz")))};setInterval((function(){var e=new Date,a=(("0"+e.getDate()).slice(-2),("0"+(e.getMonth()+1)).slice(-2),e.getFullYear(),e.getHours()),t=e.getMinutes(),n=e.getSeconds();function r(e,a,t){return(new Array(t+1).join(a)+e).slice(-t)}var o=r(a,"0",2)+":"+r(t,"0",2)+":"+r(n,"0",2);document.getElementById("timer_clock").innerHTML=o,a>=0&&a<=6&&(document.getElementById("timer_title").innerHTML="Vai dormir porra, ta loko?"),document.getElementById("timer_title").innerHTML=a>=7&&a<=12?"Eae cumpadi, bom dia":a>=12&&a<=18?"Boa tarde, meu consagrado":a>=18&&a<=22?"Boa noite e at\xe9 amanh\xe3":"Boa noite aew"}),1e3);function N(e){if(void 0==e[0])return r.a.createElement("nav",{id:"top_nav"},r.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){_="https://bardojeiz-server.herokuapp.com/data/",h()},className:"nav_top_link"},r.a.createElement("b",null,"Bar do Jeiz")));var a,t=0;Object(v.a)(r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),y,r.a.createElement("div",{id:"master"},r.a.createElement(p.a,{className:"lista_feed"},r.a.createElement("div",{class:"post_header posts"},r.a.createElement("a",{href:"#modal_upload",className:"material-icons",id:"upload"},"publish"),r.a.createElement("div",{id:"modal_upload",class:"modal"},r.a.createElement("div",{class:"modal_window"},r.a.createElement("a",{href:"#fechar",title:"Fechar",class:"fechar"},"x"),"Nome de Usu\xe1rio:",r.a.createElement("input",{type:"text",id:"txt_username"}),r.a.createElement("br",null),"Descri\xe7\xe3o:",r.a.createElement("textarea",{name:"Text1",cols:"40",rows:"5",maxLength:"70",id:"txt_descricao"}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{for:"btn_upload",className:"material-icons",id:"upload"},"publish"),r.a.createElement("input",{type:"file",id:"btn_upload",accept:".png,.jpg,.mp4,.jpeg",onChange:function(){return function(){var e=document.querySelector('input[type="file"]'),a=document.getElementById("txt_username").value,t=document.getElementById("txt_descricao").value,n=new FormData;n.append("photo",e.files[0]),n.append("description",t),n.append("username",a),fetch("https://bardojeiz-server.herokuapp.com/data/upload",{method:"POST",body:n}).then((function(e){e.ok&&window.location.reload()}))}()}}))))),r.a.createElement("div",{class:"post_timer posts"},r.a.createElement("p",{class:"nav_top_link",id:"timer_title"}),r.a.createElement("hr",null),r.a.createElement("div",{class:"timer_body"},r.a.createElement("p",{id:"timer_clock"},"00:00"))),r.a.createElement("div",{id:"post_feed",class:"posts"},r.a.createElement("div",{id:"header"},r.a.createElement("img",{className:"avatar",alt:"Desenvolvedor",src:"https://i.scdn.co/image/6761637ad5f57a7bbb34d00b6578811af27208db"}),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"username"},"Desenvolvedor"," ",r.a.createElement("i",{className:"material-icons",id:"post_fixo"},"push_pin")),className:"username_data_post",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),r.a.createElement("p",{className:"data_post"},"24/01/2021 - 22:00"))})),r.a.createElement("iframe",{class:"conteudo",src:"https://www.youtube.com/embed/q-bl2O-KnQ8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("br",null),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"descricao"},"Opa, salve! Voc\xea est\xe1 nesse momento no Bar do Jeiz, o Instagram se fosse bom! Em desenvolvimento desde Abril/2020, o Bar do Jeiz nada mais \xe9 do que um beta gigante, um monstro indom\xe1vel... Nem eu sei aonde vai parar essa budega, mas enfim, por enquanto os posts duram por tempo limitado, ent\xe3o, aproveite enquanto \xe9 tempo..."),className:"username_data_post_"})),e.map((function(e){return r.a.createElement("div",{id:"post_feed",class:"posts"},(t++,window["Object"+parseInt(t)]=new Object,window["Object"+parseInt(t)]=Object.values(e),a=1==window["Object"+t][4].includes(".mp4","mov")?r.a.createElement("video",{className:"conteudo",controls:!0},r.a.createElement("source",{src:window["Object"+t][4],type:"video/mp4"})):r.a.createElement("img",{className:"conteudo",src:window["Object"+t][4]}),1==window["Object"+t][4].includes("https://www.youtube.com")&&(a=r.a.createElement("iframe",{class:"conteudo",src:window["Object"+t][4],frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),void(1!=window["Object"+t][4].includes("fbsbx")&&1!=window["Object"+t][4].includes("fbcdn")||(a=r.a.createElement("div",{class:"conteudo"},r.a.createElement("div",{class:"caixa_fb"},r.a.createElement("div",{class:"titulo_fb"},r.a.createElement("p",null,r.a.createElement("b",null,"Publica\xe7\xe3o do FaceBook"))),r.a.createElement("div",{class:"desc_fb"},r.a.createElement("p",{class:"desc_fb_class"},"A postagem a seguir \xe9 proveniente do FaceBook. N\xe3o me responsabilizo por nada de l\xe1 n\xe3o.")),r.a.createElement("a",{class:"btn_fb",href:window["Object"+t][4]},r.a.createElement("b",null,"Acessar"))))))),r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar_img",src:window["Object"+t][2]})),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"username",style:{cursor:"pointer"},onClick:function(){return a=JSON.stringify(e,["USERNAME"]),w(),a=JSON.parse(a),console.log(a.USERNAME),_="https://bardojeiz-server.herokuapp.com/data/"+a.USERNAME,console.log(_),void h();var a}},r.a.createElement("b",null,window["Object"+t][1])),className:"username_data_post",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"span",variant:"body2",className:"nav__icon",color:"textPrimary"}),r.a.createElement("p",{className:"data_post"},window["Object"+t][3]))})),a,r.a.createElement("br",null),r.a.createElement(u.a,{primary:r.a.createElement("p",{className:"descricao"},window["Object"+t][5]," - ",window["Object"+t][6]," ","Likes, ",window["Object"+t][7]," Dislikes"),className:"username_data_post_"}),r.a.createElement("button",{className:"reacao_btn",id:"btn_like_"+window["Object"+t][0],onClick:function(){return function(e){var a;a=e.replace(/[^0-9\.]+/g,""),document.getElementById("btn_dislike_"+a).style.color="#95a5a6",g(document.getElementById("btn_like_"+a)),fetch("https://bardojeiz-server.herokuapp.com/data/like",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ID:a})})}(JSON.stringify(e,["ID"]))}},r.a.createElement("i",{className:"material-icons",id:"font_like"},"thumb_up")),r.a.createElement("button",{className:"reacao_btn",id:"btn_dislike_"+window["Object"+t][0],onClick:function(){return function(e){var a;a=e.replace(/[^0-9\.]+/g,""),document.getElementById("btn_like_"+a).style.color="#95a5a6",g(document.getElementById("btn_dislike_"+a)),fetch("https://bardojeiz-server.herokuapp.com/data/dislike",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ID:a})})}(JSON.stringify(e,["ID"]))}},r.a.createElement("i",{className:"material-icons",id:"font_dislike"},"thumb_down")))}))))))}var j=N;var k=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:j}),r.a.createElement(s.a,{path:"/login",component:d}))};var O=function(){return r.a.createElement(k,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.51c973a6.chunk.js.map