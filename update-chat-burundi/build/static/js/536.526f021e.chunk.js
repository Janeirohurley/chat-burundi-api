"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[536],{5392:function(e,t,s){s(2791);var n=s(184);t.Z=function(e){var t=e.text,s=e.type,i=e.color;return(0,n.jsxs)("div",{style:{backgroundImage:i||" linear-gradient(to right bottom, rgb(228, 64, 92), purple)"},className:"cardCanvas",children:["trending"===s&&(0,n.jsx)("p",{children:t}),"posts"===s&&(0,n.jsx)("h3",{children:t})]})}},4536:function(e,t,s){s.r(t),s.d(t,{default:function(){return O}});var n=s(9439),i=s(2791),c=s(367),r=s(7605),o=s(3044),a=s(1896),l=s(843),d=s(9434),u=s(1087),h=s(5392),m=s(184),p=function(){var e=(0,d.v9)((function(e){return e.Allpost})),t=(0,d.v9)((function(e){return e.getusers})),s=(0,d.v9)((function(e){return e.trending})),n=(0,d.I0)();return(0,i.useEffect)((function(){if(!(0,a.xb)(e[0])){var t=Object.keys(e).map((function(t){return e[t]})).sort((function(e,t){return t.likers.length-e.likers.length}));t.length=5,n(l.p.getTrending(t))}}),[e,n]),(0,i.useMemo)((function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{className:"logo",children:"Trendings posts this month"}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"stories",children:!(0,a.xb)(s[0])&&s.map((function(e){return(0,m.jsxs)("div",{className:"story",children:[(0,m.jsx)("div",{className:"profile-picture",children:(0,m.jsx)(o.Z,{src:!(0,a.xb)(t[0])&&t.map((function(t){return t._id===e.posterId?t.picture:null})).join(""),alt:"ss"})}),(0,m.jsxs)(u.rU,{to:"/trendings",children:[e.picture&&(0,m.jsx)("img",{src:e.picture,alt:"aa"}),e.video&&(0,m.jsx)("iframe",{width:"100",height:"250",src:e.video,title:Math.random()}),(0,a.xb)(e.picture)&&(0,a.xb)(e.video)&&(0,m.jsx)(h.Z,{type:"trending",text:e.message})]}),(0,m.jsx)("p",{className:"name",children:!(0,a.xb)(t[0])&&t.map((function(t){return t._id===e.posterId?t.pseudo:null})).join("")})]},Math.random())}))})]})}),[s,t])},f=s(4165),x=s(5861),g=s(1413),v=s(9165),j=s(6526),y=s(8818),N=s(1697),S=s(1243),Z=s(2010),b=s(4212),k=s(6151),L=s(3543),w=s(3400),z=s(9658),_=i.forwardRef((function(e,t){return(0,m.jsx)(z.Z,(0,g.Z)({elevation:6,ref:t,variant:"filled"},e))})),P=function(e){var t=e.user,s=e.socket,c=(0,i.useContext)(N.i),r=(0,i.useState)(!0),l=(0,n.Z)(r,2),u=l[0],p=l[1],g=(0,i.useState)(""),z=(0,n.Z)(g,2),P=z[0],E=z[1],I=(0,i.useState)(null),C=(0,n.Z)(I,2),q=C[0],O=C[1],J=(0,i.useState)(""),M=(0,n.Z)(J,2),A=M[0],F=M[1],H=(0,i.useState)(""),D=(0,n.Z)(H,2),T=D[0],U=D[1],R=(0,i.useState)(!1),G=(0,n.Z)(R,2),X=G[0],B=G[1],K=(0,d.I0)(),Q=(0,i.useState)(0),V=(0,n.Z)(Q,2),W=V[0],Y=V[1],$=(0,i.useState)(),ee=(0,n.Z)($,2),te=ee[0],se=ee[1],ne=(0,i.useState)(),ie=(0,n.Z)(ne,2),ce=ie[0],re=ie[1];(0,i.useEffect)((function(){c&&p(!1),function(){for(var e=P.split(" "),t=0;t<e.length;t++)if(e[t].includes("https://www.youtube.com")||e[t].includes("https://youtube.com")){var s=e[t].replace("watch?v=","embed/");F(s.split("&")[0]),e.splice(t,1),E(e.join(" ")),O("")}else if(e[t].includes("https://youtu.be/")){var n=e[t].replace("youtu.be/","www.youtube.com/embed/");F(n),e.splice(t,1),E(e.join(" ")),O("")}}()}),[c,P,A]);var oe=function(){E(""),F(""),O("")},ae=function(e,t){"clickaway"!==t&&B(!1)},le=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k.Z,{color:"secondary",size:"small",onClick:ae,children:"UNDO"}),(0,m.jsx)(w.Z,{size:"small","aria-label":"close",color:"inherit",onClick:ae})]}),de=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(n){var i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(P||T||A)){e.next=12;break}return(i=new FormData).append("file",T),i.append("posterId",c),i.append("message",P),i.append("video",A),i.append("color",ce||"radial-gradient(circle, #5c0067 0%, #00d4ff 100%)"),e.next=10,(0,S.Z)({method:"post",url:"".concat(b.L,"/api/post/"),withCredentials:!0,data:i,onUploadProgress:function(e){var t=Math.round(e.loaded/e.total*100);Y(t)}}).then((function(e){e.data;oe();var n=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.Z)({method:"GET",url:b.L+"/api/post/",withCredentials:!0}).then((function(e){var n=e.data,i=n.slice(0,5);if(K(Z.J.fetchAllPosts(i)),console.log("fetch again from create post"),s.emit("NewPost",{data:n}),0!==t.followers.length)for(var c=0;c<t.followers.length;c++)(0,S.Z)({method:"patch",url:"".concat(b.L,"/api/post/notification/").concat(t.followers[c]),data:{notifieId:t._id,notifiePseudo:t.pseudo,notification:"post a new post",status:"pending",pictureNotifie:t.picture},withCredentials:!0}).then((function(e){var n=e.data;s.emit("sendNotification",{senderName:t._id,resverName:n._id,timeNot:new Date})})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()})).catch((function(e){return console.log(e)}));case 10:e.next=13;break;case 12:B(!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ue(e){var t=e.progress;return(0,m.jsx)("div",{className:"progress-bar",children:(0,m.jsxs)("div",{className:"progress",style:{width:"".concat(t,"%"),backgroundColor:"red"},children:[t," %"]})})}return(0,i.useEffect)((function(){!function(){for(var e=[],t=0;t<8;t++){var s=["yellow","white","gray","gold","blue","silver","turquoise","cyan","brown","pink","purple","green"],n="linear-gradient(to bottom right, rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+"), "+s[Math.floor(Math.random()*s.length)]+")";e.push(n)}se(e)}()}),[]),(0,i.useEffect)((function(){document.querySelectorAll(".colorPallete span").forEach((function(e){e.addEventListener("click",(function(e){re(e.target.id)}))}))})),(0,m.jsxs)("div",{children:[u?(0,m.jsx)("h5",{children:"loading.........."}):(0,m.jsxs)("form",{onSubmit:function(e){return de(e)},children:[(0,m.jsxs)("div",{className:"create-post",children:[(0,m.jsx)("div",{className:"profile-picturem",children:(0,m.jsx)(o.Z,{src:t.picture,alt:"asa"})}),(0,m.jsx)("input",{type:"text",name:"",id:"create-post",placeholder:"whats something new ",onChange:function(e){return E(e.target.value)},value:P}),(0,m.jsx)("input",{type:"submit",value:"Post",className:"btn btn-primary"})]}),(0,m.jsxs)("div",{className:"vidoe_yt_img",children:[(0,m.jsx)("i",{children:(0,m.jsx)(w.Z,{children:(0,m.jsx)(v.Z,{})})}),(0,m.jsx)("span",{children:"video"}),(0,m.jsx)("i",{className:"fileSelecter",children:(0,m.jsxs)(w.Z,{children:[(0,m.jsx)(j.Z,{}),(0,m.jsx)("input",{type:"file",className:"inputPicture",name:"file",onChange:function(e){return function(e){e&&O(URL.createObjectURL(e.target.files[0])),F(""),U(e.target.files[0])}(e)},accept:".jpg,.jpeg,.png"})]})}),(0,m.jsx)("span",{children:"picture"}),(0,m.jsx)("i",{children:(0,m.jsx)(w.Z,{children:(0,m.jsx)(y.Z,{})})}),(0,m.jsx)("span",{children:"youtube"})]}),(0,m.jsx)(ue,{progress:W})]}),(0,m.jsxs)(m.Fragment,{children:[(P||q||A)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"feeds",children:(0,m.jsxs)("div",{className:"feed",children:[(0,m.jsxs)("div",{className:"head",children:[(0,m.jsxs)("div",{className:"user",children:[(0,m.jsx)("div",{className:"profile-picture",children:(0,m.jsx)(o.Z,{src:t.picture,alt:t.pseudo})}),(0,m.jsxs)("div",{className:"ingo",children:[(0,m.jsx)("span",{children:(0,m.jsx)("h4",{children:t.pseudo})}),(0,m.jsx)("small",{children:(0,a.RX)(Date.now())})]})]}),(0,m.jsx)("span",{className:"edit "})]}),!A&&!q&&(0,m.jsxs)("div",{className:"news ",children:[(0,m.jsx)(h.Z,{type:"posts",text:P,color:ce}),(0,m.jsxs)("div",{className:"colorPallete",children:[te&&te.map((function(e,t){return(0,m.jsx)("span",{id:e,style:{backgroundImage:e}},t)})),(0,m.jsx)("span",{children:(0,m.jsx)("input",{type:"color"})})]})]}),(A||q)&&(0,m.jsx)("div",{className:"news ",children:(0,m.jsx)("b",{children:P})}),A&&(0,m.jsx)("div",{className:"photo ",children:(0,m.jsx)("iframe",{height:"250",width:"400",src:A,title:Math.random()})}),q&&(0,m.jsx)("div",{className:"photo ",children:(0,m.jsx)("img",{src:q,alt:"abc"})})]})}),q||P||A.length>20?(0,m.jsx)("button",{className:"btn-new",onClick:oe,children:"annuler"}):null,A?(0,m.jsx)("button",{className:"btn-new",onClick:function(){F("")},children:"delete video"}):null,q?(0,m.jsx)("button",{className:"btn-new",onClick:function(){O("")},children:"delete picture"}):null]}),(0,m.jsx)(L.Z,{open:X,autoHideDuration:6e3,onClose:ae,action:le,children:(0,m.jsx)(_,{onClose:ae,severity:"warning",sx:{width:"100%"},children:"veuillez entrer un message pour poster"})})]})]})},E=s(8169),I=s(3821),C=function(e){var t=e.setcustomizeTheme,s=e.user;return(0,i.useEffect)((function(){var e,n,i,c,r,o,a=document.querySelector(":root"),l=document.querySelectorAll(".choose-color span"),d=document.querySelectorAll(".choose-size span"),u=document.querySelector(".customize-theme"),h=document.querySelector(".bg-1"),m=document.querySelector(".bg-2"),p=document.querySelector(".bg-3"),f=JSON.parse(localStorage.getItem("".concat(s._id)));u.addEventListener("click",(function(e){e.target.classList.contains("customize-theme")&&t(!1)}));function x(){a.style.setProperty("--light-color-lightness",i),a.style.setProperty("--white-color-lightness",r),a.style.setProperty("--dark-color-lightness",c),a.style.setProperty("--color-name-lightness",o);var e=JSON.parse(localStorage.getItem("".concat(s._id)));localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},e),{},{lightcolorlightness:i,whitecolorlightness:r,darkcolorlightness:c,colornamelightness:o})))}d.forEach((function(e){e.addEventListener("click",(function(){d.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),e.classList.contains("font-size-1")&&(n="10px",a.style.setProperty("--stick-top-left","5.4rem"),a.style.setProperty("--stick-top-right","5.4rem"),localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:n})))),e.classList.contains("font-size-2")&&(n="13px",a.style.setProperty("--stick-top-left","5.4rem"),a.style.setProperty("--stick-top-right","-7rem"),localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:n})))),e.classList.contains("font-size-3")&&(n="16px",a.style.setProperty("--stick-top-left","5.4rem"),a.style.setProperty("--stick-top-right","-10rem"),localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:n})))),e.classList.contains("font-size-4")&&(n="19px",a.style.setProperty("--stick-top-left","-5rem"),a.style.setProperty("--stick-top-right","-25rem"),localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:n})))),e.classList.contains("font-size-5")&&(n="22px",a.style.setProperty("--stick-top-left","-10rem"),a.style.setProperty("--stick-top-right","-30rem"),localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:n})))),document.querySelector("html").style.fontSize=n}))})),l.forEach((function(t){t.addEventListener("click",(function(){l.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),t.classList.contains("color-1")&&(e=252,localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),t.classList.contains("color-2")&&(e=52,localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),t.classList.contains("color-3")&&(e=352,localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),t.classList.contains("color-4")&&(e=152,localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),t.classList.contains("color-5")&&(e=202,localStorage.setItem("".concat(s._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),a.style.setProperty("--color-primary-hue",e)}))})),h.addEventListener("click",(function(){c="17%",r="100%",i="95%",o="0%",h.classList.add("active"),m.classList.remove("active"),p.classList.remove("active"),x()})),m.addEventListener("click",(function(){c="95%",r="20%",i="15%",o="80%",m.classList.add("active"),h.classList.remove("active"),p.classList.remove("active"),x()})),p.addEventListener("click",(function(){c="0%",r="10%",i="0%",o="100%",p.classList.add("active"),h.classList.remove("active"),m.classList.remove("active"),x()}));d.forEach((function(e){"10px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-1")&&e.classList.add("active"),"13px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-2")&&e.classList.add("active"),"16px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-3")&&e.classList.add("active"),"19px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-4")&&e.classList.add("active"),"22px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-5")&&e.classList.add("active")}))})),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:"customize-theme",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("h2",{className:"custom",children:"Customize your view"}),(0,m.jsx)("p",{className:"text-muted",children:"Manage your color,backaground and font size"}),(0,m.jsxs)("div",{className:"font-size",children:[(0,m.jsx)("h4",{className:"custom",children:"Font Size"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{className:"custom",children:"Aa"}),(0,m.jsxs)("div",{className:"choose-size",children:[(0,m.jsx)("span",{className:"font-size-1"}),(0,m.jsx)("span",{className:"font-size-2 "}),(0,m.jsx)("span",{className:"font-size-3"}),(0,m.jsx)("span",{className:"font-size-4"}),(0,m.jsx)("span",{className:"font-size-5"})]}),(0,m.jsx)("h3",{className:"custom",children:"Aa"})]})]}),(0,m.jsxs)("div",{className:"color",children:[(0,m.jsx)("h4",{className:"custom",children:"Color"}),(0,m.jsxs)("div",{className:"choose-color",children:[(0,m.jsx)("span",{className:"color-1 active"}),(0,m.jsx)("span",{className:"color-2"}),(0,m.jsx)("span",{className:"color-3"}),(0,m.jsx)("span",{className:"color-4"}),(0,m.jsx)("span",{className:"color-5"})]})]}),(0,m.jsxs)("div",{className:"background",children:[(0,m.jsx)("h4",{className:"custom",children:"backaground"}),(0,m.jsxs)("div",{className:"choose-bg",children:[(0,m.jsxs)("div",{className:"bg-1 active",children:[(0,m.jsx)("span",{}),(0,m.jsx)("h5",{htmlFor:"bg-1",children:"Light "})]}),(0,m.jsxs)("div",{className:"bg-2",children:[(0,m.jsx)("span",{}),(0,m.jsx)("h5",{htmlFor:"bg-2",children:"Dim"})]}),(0,m.jsxs)("div",{className:"bg-3",children:[(0,m.jsx)("span",{}),(0,m.jsx)("h5",{htmlFor:"bg-3",children:"Lights out"})]})]})]})]})})})},q=s(6816),O=function(e){var t=e.socket,s=(0,i.useState)(!1),o=(0,n.Z)(s,2),l=o[0],u=o[1],h=(0,d.v9)((function(e){return e.userInfo})),f=(0,d.v9)((function(e){return e.getusers})),x=(0,i.useContext)(N.i),g=(0,d.I0)();return(0,i.useEffect)((function(){g(q.c.GetAll((0,a.ge)(f,(0,a.uI)(x,f))))})),(0,i.useEffect)((function(){t&&h&&h.pseudo&&t.emit("newuser",h._id),"no token"===x&&(window.location="/login")}),[t,h.pseudo,h,x]),(0,i.useEffect)((function(){var e=document.querySelectorAll(".menu-item ");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}));var t=document.querySelector(":root"),s=JSON.parse(localStorage.getItem("".concat(h._id)));s&&(s.primaryHue&&t.style.setProperty("--color-primary-hue",s.primaryHue),s.font_size&&(document.querySelector("html").style.fontSize=s.font_size),s.lightcolorlightness&&t.style.setProperty("--light-color-lightness",s.lightcolorlightness),s.whitecolorlightness&&t.style.setProperty("--white-color-lightness",s.whitecolorlightness),s.darkcolorlightness&&t.style.setProperty("--dark-color-lightness",s.darkcolorlightness),s.colornamelightness&&t.style.setProperty("--color-name-lightness",s.colornamelightness))})),(0,m.jsx)(m.Fragment,{children:"no token"!==x&&null!==x&&(0,m.jsxs)(c.Z,{title:"Home",children:[(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(r.Z,{user:h,setcustomizeTheme:u,socket:t}),(0,m.jsxs)("div",{className:"middle",children:[(0,m.jsx)(p,{}),(0,m.jsx)(P,{user:h,socket:t}),(0,m.jsx)(E.Z,{socket:t,type:"home"})]}),(0,m.jsx)(I.Z,{user:h})]})}),l&&(0,m.jsx)(C,{setcustomizeTheme:u,user:h})]})})}}}]);
//# sourceMappingURL=536.526f021e.chunk.js.map