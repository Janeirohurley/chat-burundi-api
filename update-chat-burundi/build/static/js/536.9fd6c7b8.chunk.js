"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[536],{5392:function(e,s,t){t(2791);var i=t(184);s.Z=function(e){var s=e.text,t=e.type,n=e.color;return(0,i.jsxs)("div",{style:{backgroundImage:n||" linear-gradient(to right bottom, rgb(228, 64, 92), purple)"},className:"cardCanvas",children:["trending"===t&&(0,i.jsx)("p",{children:s}),"posts"===t&&(0,i.jsx)("h3",{children:s})]})}},4536:function(e,s,t){t.r(s),t.d(s,{default:function(){return M}});var i=t(9439),n=t(2791),c=t(367),r=t(7605),o=t(3044),l=t(1896),a=t(843),d=t(9434),u=t(1087),h=t(5392),m=t(184),p=function(){var e=(0,d.v9)((function(e){return e.Allpost})),s=(0,d.v9)((function(e){return e.getusers})),t=(0,d.v9)((function(e){return e.trending})),i=(0,d.I0)();return(0,n.useEffect)((function(){if(!(0,l.xb)(e[0])&&e.length>5){var s=Object.keys(e).map((function(s){return e[s]})).sort((function(e,s){return s.likers.length-e.likers.length}));s.length=5,i(a.p.getTrending(s))}}),[e,i]),(0,n.useMemo)((function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{className:"logo",children:"Trendings posts this month"}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"stories",children:[!(0,l.xb)(t[0])&&5===t.length&&t.map((function(e){return(0,m.jsxs)("div",{className:"story",children:[(0,m.jsx)("div",{className:"profile-picture",children:(0,m.jsx)(o.Z,{src:!(0,l.xb)(s[0])&&s.map((function(s){return s._id===e.posterId?s.picture:null})).join(""),alt:"ss"})}),(0,m.jsxs)(u.rU,{to:"/trendings",children:[e.picture&&(0,m.jsx)("img",{src:e.picture,alt:"aa"}),e.video&&(0,m.jsx)("iframe",{width:"100",height:"250",src:e.video,title:Math.random()}),(0,l.xb)(e.picture)&&(0,l.xb)(e.video)&&(0,m.jsx)(h.Z,{type:"trending",text:e.message,color:e.color})]}),(0,m.jsx)("p",{className:"name",children:!(0,l.xb)(s[0])&&s.map((function(s){return s._id===e.posterId?s.pseudo:null})).join("")})]},Math.random())})),e.length<6&&(0,m.jsx)("h1",{children:"No tredings posts in this mounth"})]})]})}),[t,s])},f=t(4165),x=t(5861),g=t(1413),j=t(9165),v=t(6526),y=t(8818),N=t(1697),b=(t(3093),t(1243)),S=t(2010),k=t(4212),Z=t(6151),w=t(3543),L=t(3400),z=t(9658),C=n.forwardRef((function(e,s){return(0,m.jsx)(z.Z,(0,g.Z)({elevation:6,ref:s,variant:"filled"},e))})),P=function(e){var s=e.user,t=e.socket,c=(0,n.useContext)(N.i),r=(0,n.useState)(!0),a=(0,i.Z)(r,2),u=a[0],p=a[1],g=(0,n.useState)(""),z=(0,i.Z)(g,2),P=z[0],_=z[1],I=(0,n.useState)(null),E=(0,i.Z)(I,2),q=E[0],M=E[1],O=(0,n.useState)(""),J=(0,i.Z)(O,2),F=J[0],A=J[1],H=(0,n.useState)(""),D=(0,i.Z)(H,2),T=D[0],U=D[1],R=(0,n.useState)(!1),G=(0,i.Z)(R,2),B=G[0],X=G[1],K=(0,d.I0)(),Q=(0,n.useState)(0),V=(0,i.Z)(Q,2),W=V[0],Y=V[1],$=(0,n.useState)(),ee=(0,i.Z)($,2),se=ee[0],te=ee[1],ie=(0,n.useState)(),ne=(0,i.Z)(ie,2),ce=ne[0],re=ne[1],oe=(0,n.useState)(!1),le=(0,i.Z)(oe,2),ae=le[0],de=le[1];(0,n.useEffect)((function(){c&&p(!1),function(){for(var e=P.split(" "),s=0;s<e.length;s++)if(e[s].includes("https://www.youtube.com")||e[s].includes("https://youtube.com")){var t=e[s].replace("watch?v=","embed/");A(t.split("&")[0]),e.splice(s,1),_(e.join(" ")),M("")}else if(e[s].includes("https://youtu.be/")){var i=e[s].replace("youtu.be/","www.youtube.com/embed/");A(i),e.splice(s,1),_(e.join(" ")),M("")}}()}),[c,P,F]);var ue=function(){_(""),A(""),M("")},he=function(e,s){"clickaway"!==s&&X(!1)},me=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z.Z,{color:"secondary",size:"small",onClick:he,children:"UNDO"}),(0,m.jsx)(L.Z,{size:"small","aria-label":"close",color:"inherit",onClick:he})]}),pe=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(i){var n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.preventDefault(),!(P||T||F)){e.next=12;break}return(n=new FormData).append("file",T),n.append("posterId",c),n.append("message",P),n.append("video",F),n.append("color",ce||"radial-gradient(circle, #5c0067 0%, #00d4ff 100%)"),e.next=10,(0,b.Z)({method:"post",url:"".concat(k.L,"/api/post/"),withCredentials:!0,data:n,onUploadProgress:function(e){var s=Math.round(e.loaded/e.total*100);Y(s)}}).then((function(e){e.data;ue();var i=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)({method:"GET",url:k.L+"/api/post/",withCredentials:!0}).then((function(e){var i=e.data,n=i.slice(0,5);if(K(S.J.fetchAllPosts(n)),console.log("fetch again from create post"),t.emit("NewPost",{data:i}),0!==s.followers.length)for(var c=0;c<s.followers.length;c++)(0,b.Z)({method:"patch",url:"".concat(k.L,"/api/post/notification/").concat(s.followers[c]),data:{notifieId:s._id,notifiePseudo:s.pseudo,notification:"post a new post",status:"pending",pictureNotifie:s.picture},withCredentials:!0}).then((function(e){var i=e.data;t.emit("sendNotification",{senderName:s._id,resverName:i._id,timeNot:new Date})})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i()})).catch((function(e){return console.log(e)}));case 10:e.next=13;break;case 12:X(!0);case 13:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();function fe(e){var s=e.progress;return(0,m.jsx)("div",{className:"progress-bar",children:(0,m.jsxs)("div",{className:"progress",style:{width:"".concat(s,"%"),backgroundColor:"red"},children:[s," %"]})})}return(0,n.useEffect)((function(){!function(){for(var e=[],s=0;s<50;s++){var t=["yellow","white","gray","gold","blue","silver","turquoise","cyan","brown","pink","purple","green"],i="linear-gradient(to bottom right, rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+"), "+t[Math.floor(Math.random()*t.length)]+")";e.push(i)}te(e)}()}),[]),(0,n.useEffect)((function(){document.querySelectorAll(".colorPallete span").forEach((function(e){e.addEventListener("click",(function(e){re(e.target.id)}))}))})),(0,m.jsxs)("div",{children:[u?(0,m.jsx)("h5",{children:"loading.........."}):(0,m.jsxs)("form",{onSubmit:function(e){return pe(e)},children:[(0,m.jsxs)("div",{className:"create-post",children:[(0,m.jsx)("div",{className:"profile-picturem",children:(0,m.jsx)(o.Z,{src:s.picture,alt:"asa"})}),(0,m.jsx)("input",{type:"text",name:"",id:"create-post",placeholder:"whats something new ",onChange:function(e){return _(e.target.value)},value:P}),(0,m.jsx)("input",{type:"submit",value:"Post",className:"btn btn-primary"})]}),(0,m.jsxs)("div",{className:"vidoe_yt_img",children:[(0,m.jsx)("i",{children:(0,m.jsx)(L.Z,{children:(0,m.jsx)(j.Z,{onClick:function(){return de(!0)}})})}),(0,m.jsx)("span",{children:"video"}),(0,m.jsx)("i",{className:"fileSelecter",children:(0,m.jsx)(L.Z,{children:(0,m.jsx)(v.Z,{onClick:function(){return de(!0)}})})}),(0,m.jsx)("span",{children:"picture"}),(0,m.jsx)("i",{children:(0,m.jsx)(L.Z,{children:(0,m.jsx)(y.Z,{onClick:function(){return de(!0)}})})}),(0,m.jsx)("span",{children:"youtube"})]}),(0,m.jsx)(fe,{progress:W})]}),ae&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"popupCreatePost",children:[(0,m.jsx)("div",{className:"cancelPost",onClick:function(){return de(!1)},children:(0,m.jsx)("i",{className:"ri-close-fill"})}),(0,m.jsxs)("div",{className:"mainPost",children:[(0,m.jsxs)("div",{className:"middleMain",children:[(0,m.jsxs)("div",{className:"postLookLike",children:[(0,m.jsx)("p",{children:"Previsualization"}),!P&&!q&&!F&&(0,m.jsx)("div",{className:"Previsualization",children:"once your start creating post here will show your how post will look"}),(0,m.jsxs)(m.Fragment,{children:[(P||q||F)&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"feeds",children:(0,m.jsxs)("div",{className:"feed",children:[(0,m.jsxs)("div",{className:"head",children:[(0,m.jsxs)("div",{className:"user",children:[(0,m.jsx)("div",{className:"profile-picture",children:(0,m.jsx)(o.Z,{src:s.picture,alt:s.pseudo})}),(0,m.jsxs)("div",{className:"ingo",children:[(0,m.jsx)("span",{children:(0,m.jsx)("h4",{children:s.pseudo})}),(0,m.jsx)("small",{children:(0,l.RX)(Date.now())})]})]}),(0,m.jsx)("span",{className:"edit "})]}),!F&&!q&&(0,m.jsx)("div",{className:"news ",children:(0,m.jsx)(h.Z,{type:"posts",text:P,color:ce})}),(F||q)&&(0,m.jsx)("div",{className:"news ",children:(0,m.jsx)("b",{children:P})}),F&&(0,m.jsx)("div",{className:"photo ",children:(0,m.jsx)("iframe",{height:"250",width:"400",src:F,title:Math.random()})}),q&&(0,m.jsx)("div",{className:"photo ",children:(0,m.jsx)("img",{src:q,alt:"abc"})})]})})}),(0,m.jsx)(w.Z,{open:B,autoHideDuration:6e3,onClose:he,action:me,children:(0,m.jsx)(C,{onClose:he,severity:"warning",sx:{width:"100%"},children:"veuillez entrer un message pour poster"})})]})]}),(0,m.jsxs)("div",{className:"outils",children:[(0,m.jsx)("p",{children:"Creating post"}),!P&&!q&&!F&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"choose",children:(0,m.jsxs)("svg",{"aria-label":"Ic\xf4ne pour repr\xe9senter le contenu multim\xe9dia, comme les images ou les vid\xe9os",class:"x1lliihq x1n2onr6",color:"var(--color-name)",fill:"rgb(245, 245, 245)",height:"100",role:"img",viewBox:"0 0 97.6 77.3",width:"100",children:[(0,m.jsx)("title",{children:"Ic\xf4ne pour repr\xe9senter le contenu multim\xe9dia, comme les images ou les vid\xe9os"}),(0,m.jsx)("path",{d:"M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z",fill:"currentColor"})]})}),(0,m.jsx)("div",{className:"filechoose",onClick:function(){return _("\ud83d\udc47\ud83d\udc47\ud83d\udc47click to the icon bellow to choose a picture")},children:" Choose file in your device"}),(0,m.jsx)("div",{className:"textchoose",onClick:function(){return _("start writting whats in your mind")},children:" Create text post"})]}),(P||q||F)&&(0,m.jsxs)("div",{className:"inputpost",children:[(0,m.jsx)("input",{placeholder:"something new",onChange:function(e){return _(e.target.value)},value:P}),(0,m.jsx)("div",{className:"ri-fill-media",children:(0,m.jsx)("i",{className:"fileSelecter",children:(0,m.jsxs)(L.Z,{children:[(0,m.jsx)("i",{className:"ri ri-image-fill"}),(0,m.jsx)("input",{type:"file",className:"inputPicture",name:"file",onChange:function(e){return function(e){e&&M(URL.createObjectURL(e.target.files[0])),A(""),U(e.target.files[0])}(e)},accept:".jpg,.jpeg,.png",title:"choose your file "})]})})})]}),!F&&!q&&P&&(0,m.jsx)("div",{className:"news ",children:(0,m.jsxs)("div",{className:"colorPallete",children:[se&&se.map((function(e,s){return(0,m.jsx)("span",{id:e,style:{backgroundImage:e}},s)})),(0,m.jsx)("span",{children:(0,m.jsx)("input",{type:"color"})})]})}),q||P||F.length>20?(0,m.jsx)("button",{className:"btn-new",onClick:ue,children:"annuler"}):null,F?(0,m.jsx)("button",{className:"btn-new",onClick:function(){A("")},children:"delete video"}):null,q?(0,m.jsx)("button",{className:"btn-new",onClick:function(){M("")},children:"delete picture"}):null]})]}),(0,m.jsx)("div",{className:"partager",children:(0,m.jsx)("button",{className:"btn btn-primary",onClick:pe,children:"partager"})})]})]})})]})},_=t(8169),I=t(3821),E=function(e){var s=e.setcustomizeTheme,t=e.user;return(0,n.useEffect)((function(){var e,i,n,c,r,o,l=document.querySelector(":root"),a=document.querySelectorAll(".choose-color span"),d=document.querySelectorAll(".choose-size span"),u=document.querySelector(".customize-theme"),h=document.querySelector(".bg-1"),m=document.querySelector(".bg-2"),p=document.querySelector(".bg-3"),f=JSON.parse(localStorage.getItem("".concat(t._id)));u.addEventListener("click",(function(e){e.target.classList.contains("customize-theme")&&s(!1)}));function x(){l.style.setProperty("--light-color-lightness",n),l.style.setProperty("--white-color-lightness",r),l.style.setProperty("--dark-color-lightness",c),l.style.setProperty("--color-name-lightness",o);var e=JSON.parse(localStorage.getItem("".concat(t._id)));localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},e),{},{lightcolorlightness:n,whitecolorlightness:r,darkcolorlightness:c,colornamelightness:o})))}d.forEach((function(e){e.addEventListener("click",(function(){d.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),e.classList.contains("font-size-1")&&(i="10px",l.style.setProperty("--stick-top-left","5.4rem"),l.style.setProperty("--stick-top-right","5.4rem"),localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:i})))),e.classList.contains("font-size-2")&&(i="13px",l.style.setProperty("--stick-top-left","5.4rem"),l.style.setProperty("--stick-top-right","-7rem"),localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:i})))),e.classList.contains("font-size-3")&&(i="16px",l.style.setProperty("--stick-top-left","5.4rem"),l.style.setProperty("--stick-top-right","-10rem"),localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:i})))),e.classList.contains("font-size-4")&&(i="19px",l.style.setProperty("--stick-top-left","-5rem"),l.style.setProperty("--stick-top-right","-25rem"),localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:i})))),e.classList.contains("font-size-5")&&(i="22px",l.style.setProperty("--stick-top-left","-10rem"),l.style.setProperty("--stick-top-right","-30rem"),localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{font_size:i})))),document.querySelector("html").style.fontSize=i}))})),a.forEach((function(s){s.addEventListener("click",(function(){a.forEach((function(e){e.classList.remove("active")})),s.classList.add("active"),s.classList.contains("color-1")&&(e=252,localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),s.classList.contains("color-2")&&(e=52,localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),s.classList.contains("color-3")&&(e=352,localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),s.classList.contains("color-4")&&(e=152,localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),s.classList.contains("color-5")&&(e=202,localStorage.setItem("".concat(t._id),JSON.stringify((0,g.Z)((0,g.Z)({},f),{},{primaryHue:e})))),l.style.setProperty("--color-primary-hue",e)}))})),h.addEventListener("click",(function(){c="17%",r="100%",n="95%",o="0%",h.classList.add("active"),m.classList.remove("active"),p.classList.remove("active"),x()})),m.addEventListener("click",(function(){c="95%",r="20%",n="15%",o="80%",m.classList.add("active"),h.classList.remove("active"),p.classList.remove("active"),x()})),p.addEventListener("click",(function(){c="0%",r="10%",n="0%",o="100%",p.classList.add("active"),h.classList.remove("active"),m.classList.remove("active"),x()}));d.forEach((function(e){"10px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-1")&&e.classList.add("active"),"13px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-2")&&e.classList.add("active"),"16px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-3")&&e.classList.add("active"),"19px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-4")&&e.classList.add("active"),"22px"===document.querySelector("html").style.fontSize&&e.classList.contains("font-size-5")&&e.classList.add("active")}))})),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:"customize-theme",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("h2",{className:"custom",children:"Customize your view"}),(0,m.jsx)("p",{className:"text-muted",children:"Manage your color,backaground and font size"}),(0,m.jsxs)("div",{className:"font-size",children:[(0,m.jsx)("h4",{className:"custom",children:"Font Size"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{className:"custom",children:"Aa"}),(0,m.jsxs)("div",{className:"choose-size",children:[(0,m.jsx)("span",{className:"font-size-1"}),(0,m.jsx)("span",{className:"font-size-2 "}),(0,m.jsx)("span",{className:"font-size-3"}),(0,m.jsx)("span",{className:"font-size-4"}),(0,m.jsx)("span",{className:"font-size-5"})]}),(0,m.jsx)("h3",{className:"custom",children:"Aa"})]})]}),(0,m.jsxs)("div",{className:"color",children:[(0,m.jsx)("h4",{className:"custom",children:"Color"}),(0,m.jsxs)("div",{className:"choose-color",children:[(0,m.jsx)("span",{className:"color-1 active"}),(0,m.jsx)("span",{className:"color-2"}),(0,m.jsx)("span",{className:"color-3"}),(0,m.jsx)("span",{className:"color-4"}),(0,m.jsx)("span",{className:"color-5"})]})]}),(0,m.jsxs)("div",{className:"background",children:[(0,m.jsx)("h4",{className:"custom",children:"backaground"}),(0,m.jsxs)("div",{className:"choose-bg",children:[(0,m.jsxs)("div",{className:"bg-1 active",children:[(0,m.jsx)("span",{}),(0,m.jsx)("h5",{htmlFor:"bg-1",children:"Light "})]}),(0,m.jsxs)("div",{className:"bg-2",children:[(0,m.jsx)("span",{}),(0,m.jsx)("h5",{htmlFor:"bg-2",children:"Dim"})]}),(0,m.jsxs)("div",{className:"bg-3",children:[(0,m.jsx)("span",{}),(0,m.jsx)("h5",{htmlFor:"bg-3",children:"Lights out"})]})]})]})]})})})},q=t(6816),M=function(e){var s=e.socket,t=(0,n.useState)(!1),o=(0,i.Z)(t,2),a=o[0],u=o[1],h=(0,d.v9)((function(e){return e.userInfo})),f=(0,d.v9)((function(e){return e.getusers})),x=(0,n.useContext)(N.i),g=(0,d.I0)();return(0,n.useEffect)((function(){g(q.c.GetAll((0,l.ge)(f,(0,l.uI)(x,f))))})),(0,n.useEffect)((function(){s&&h&&h.pseudo&&s.emit("newuser",h._id),"no token"===x&&(window.location="/login")}),[s,h.pseudo,h,x]),(0,n.useEffect)((function(){var e=document.querySelectorAll(".menu-item ");e.forEach((function(s){s.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),s.classList.add("active")}))}));var s=document.querySelector(":root"),t=JSON.parse(localStorage.getItem("".concat(h._id)));t&&(t.primaryHue&&s.style.setProperty("--color-primary-hue",t.primaryHue),t.font_size&&(document.querySelector("html").style.fontSize=t.font_size),t.lightcolorlightness&&s.style.setProperty("--light-color-lightness",t.lightcolorlightness),t.whitecolorlightness&&s.style.setProperty("--white-color-lightness",t.whitecolorlightness),t.darkcolorlightness&&s.style.setProperty("--dark-color-lightness",t.darkcolorlightness),t.colornamelightness&&s.style.setProperty("--color-name-lightness",t.colornamelightness))})),(0,m.jsx)(m.Fragment,{children:"no token"!==x&&null!==x&&(0,m.jsxs)(c.Z,{title:"Home",children:[(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(r.Z,{user:h,setcustomizeTheme:u,socket:s}),(0,m.jsxs)("div",{className:"middle",children:[(0,m.jsx)(p,{}),(0,m.jsx)(P,{user:h,socket:s}),(0,m.jsx)(_.Z,{socket:s,type:"home"})]}),(0,m.jsx)(I.Z,{user:h})]})}),a&&(0,m.jsx)(E,{setcustomizeTheme:u,user:h})]})})}},3093:function(e,s,t){e.exports=t.p+"static/media/feed-1.58487fbb05a45c938f6a.jpg"}}]);
//# sourceMappingURL=536.9fd6c7b8.chunk.js.map