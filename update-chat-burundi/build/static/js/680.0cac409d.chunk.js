"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[680],{367:function(e,n,t){t(2791);var i=t(184);n.Z=function(e){return document.title="Chat Burundi - "+e.title,(0,i.jsx)("div",{className:"w-100",children:e.children})}},8169:function(e,n,t){var i=t(9439),s=t(4165),r=t(5861),a=t(2791),o=t(1243),l=t(2010),c=t(9434),u=t(1896),d=t(4212),h=t(5194),p=t(184),f=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout(e,3e3)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=(0,a.lazy)((function(){return f(Promise.all([t.e(463),t.e(79),t.e(815),t.e(102),t.e(263),t.e(429),t.e(752)]).then(t.bind(t,5752)))}));n.Z=function(e){var n=e.socket,t=e.type,f=e.paramsId,m=(e.hisprofile,(0,c.I0)()),v=(0,a.useState)(!0),g=(0,i.Z)(v,2),j=g[0],w=g[1],b=(0,a.useState)(5),Z=(0,i.Z)(b,2),N=Z[0],y=Z[1],k=(0,c.v9)((function(e){return e.posts})),C=(0,c.v9)((function(e){return e.userInfo})),L=function(){window.innerHeight+document.documentElement.scrollTop+1>document.scrollingElement.scrollHeight-50&&w(!0)};return(0,a.useEffect)((function(){if(j){var e=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:"GET",url:d.L+"/api/post/",withCredentials:!0}).then((function(e){var n=e.data;console.log("fetch again from posts");for(var t=(0,u.MN)(n,C.following,C._id).slice(0,N),i=0;i<t.length;i++)t[i].comments.reverse();m(l.J.fetchAllPosts(t)),w(!1),y((function(e){return e+5}))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[j]),(0,a.useEffect)((function(){return window.addEventListener("scroll",L),function(){return window.removeEventListener("scroll",L)}}),[]),(0,p.jsxs)("div",{className:f?"hisPosts":"feeds",children:["home"===t&&!(0,u.xb)(k[0])&&k.map((function(e){return(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(h.Z,{},Math.random()),children:(0,p.jsx)(x,{post:e,count:N,socket:n},e._id)})})),"profile"===t&&!(0,u.xb)(k[0])&&k.map((function(e){return(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(h.Z,{},Math.random()),children:e.posterId===C._id&&(0,p.jsx)(x,{post:e,count:N,socket:n},e._id)})})),"hisprofile"===t&&f&&!(0,u.xb)(k[0])&&k.map((function(e){return(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(h.Z,{},Math.random()),children:e.posterId===f&&(0,p.jsx)(x,{post:e,count:N,socket:n},e._id)})}))]})}},3821:function(e,n,t){var i=t(9439),s=t(2791),r=t(9434),a=t(7689),o=t(1087),l=t(1896),c=t(6587),u=t(3044),d=t(184),h=(0,s.memo)((function(){var e=(0,r.v9)((function(e){return e.getusers})),n=(0,r.v9)((function(e){return e.userInfo})),t=(0,s.useState)(!0),h=(0,i.Z)(t,2),p=h[0],f=h[1],x=(0,s.useState)(!0),m=(0,i.Z)(x,2),v=m[0],g=m[1],j=(0,s.useState)([]),w=(0,i.Z)(j,2),b=w[0],Z=w[1],N=(0,s.useState)([]),y=(0,i.Z)(N,2),k=y[0],C=y[1],L=(0,r.v9)((function(e){return e.AllChat})),P=(0,r.v9)((function(e){return e.OnlineUsers}));(0,a.s0)();return(0,s.useEffect)((function(){if(!(0,l.xb)(L[0])){var e=L.filter((function(e){return e.latestMessage})),n=Object.keys(e).map((function(n){return e[n]})).sort((function(e,n){var t,i;return(null===(t=n.latestMessage)||void 0===t?void 0:t.createdAt)-(null===(i=e.latestMessage)||void 0===i?void 0:i.createdAt)}));n.length=3,C(n)}}),[L]),(0,s.useEffect)((function(){!v||(0,l.xb)(e[0])||(0,l.xb)(n._id)||(!function(){for(var t=[],i=0;i<e.length;i++)e[i]===n._id||e[i].followers.includes(n._id)||t.push(e[i]._id);t.sort((function(){return.5-Math.random()})),window.innerHeight>70&&(t.length=5),Z(t)}(),f(!1),g(!1))}),[e,n,v]),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"right",children:[(0,d.jsx)(d.Fragment,{children:k&&(0,d.jsxs)("div",{className:"messages",children:[(0,d.jsx)("div",{className:"heading",children:(0,d.jsx)("h4",{children:"Latest Messages"})}),k&&k.map((function(e){var t,i,s,r,a;return(0,d.jsxs)("div",{className:"message",onClick:function(){return alert("helo this is a chat")},children:[(0,d.jsxs)("div",{className:"profile-picture",children:[(0,d.jsx)(u.Z,{src:null===(t=e.latestMessage)||void 0===t?void 0:t.sender.picture,alt:"aa"}),(0,d.jsx)("div",{className:(0,l.Gg)(null===(i=e.latestMessage)||void 0===i?void 0:i.sender._id,P)?"active":""})]}),(0,d.jsxs)("div",{className:"messge-body",children:[(0,d.jsx)("h5",{children:(null===(s=e.latestMessage)||void 0===s?void 0:s.sender.pseudo)===n.pseudo?"You":null===(r=e.latestMessage)||void 0===r?void 0:r.sender.pseudo}),(0,d.jsxs)("p",{className:"text-muted",children:[(0,l.F8)(null===(a=e.latestMessage)||void 0===a?void 0:a.message)," "]})]})]},e._id)}))]})}),(0,s.useMemo)((function(){return(0,d.jsxs)("div",{className:"freind-requests",children:[(0,d.jsx)("h4",{children:"Suggestions"}),p?(0,d.jsx)("div",{className:"feed",children:"Loading....."}):(0,d.jsxs)(d.Fragment,{children:[b&&b.map((function(t){for(var i=0;i<e.length;i++)if(t===e[i]._id&&t!==n._id)return(0,d.jsxs)("div",{className:"request",children:[(0,d.jsxs)("div",{className:"info",children:[(0,d.jsx)("div",{className:"profile-picture",children:(0,d.jsx)(u.Z,{src:e[i].picture,alt:"aa"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)(o.rU,{className:"linkProfile",to:"/profile/".concat(e[i]._id),children:(0,d.jsx)("h5",{className:"noum",children:e[i].pseudo})}),(0,d.jsxs)("p",{className:"text-muted",children:[e[i].following.length," following"]})]})]}),(0,d.jsxs)("div",{className:"action",children:[(0,d.jsx)(c.Z,{idTofollow:t,type:"suggestion"}),(0,d.jsx)("button",{className:" btn-new",children:"gretting"})]})]},Math.random())})),(0,d.jsx)("div",{className:"request",children:(0,d.jsx)("div",{className:"profile-picture-ab",children:"For Looking others......"})})]})]})}),[b,e,p,n._id])]})})}));n.Z=h},5194:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var i=t(7047),s=t(1582),r=t(184);function a(){return(0,r.jsxs)(s.Z,{spacing:1,sx:{backgroundColor:"var(--color-white)",margin:"1rem 0rem",padding:"1.1rem",borderRadius:"10px"},children:[(0,r.jsx)(i.Z,{variant:"circular",width:40,height:40,sx:{backgroundColor:"var(--color-light)"}}),(0,r.jsx)(i.Z,{variant:"text",sx:{fontSize:"1rem",backgroundColor:"var(--color-light)"}}),(0,r.jsx)(i.Z,{variant:"rectangular",width:"100%",height:200,sx:{backgroundColor:"var(--color-light)"}}),(0,r.jsx)(i.Z,{variant:"rounded",width:"100%",height:60,sx:{backgroundColor:"var(--color-light)"}})]})}},6587:function(e,n,t){var i=t(4165),s=t(5861),r=t(9439),a=t(1243),o=t(2791),l=t(9434),c=t(7498),u=t(1896),d=t(4212),h=t(184);n.Z=function(e){var n=e.idTofollow,t=e.type,p=e.socket,f=(0,o.useState)(!1),x=(0,r.Z)(f,2),m=x[0],v=x[1],g=(0,l.I0)(),j=(0,l.v9)((function(e){return e.userInfo})),w=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n,t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,a.Z)({method:"patch",url:"".concat(d.L,"/api/user/follow/").concat(n),withCredentials:!0,data:{idToFollow:t}}).then((function(e){g(c.Z.Follow(t)),(0,a.Z)({method:"patch",url:"".concat(d.L,"/api/post/notification/").concat(t),data:{notifieId:j._id,notifiePseudo:j.pseudo,notification:"start following  u",status:"pending",pictureNotifie:j.picture},withCredentials:!0}).then((function(e){console.log(e),p.emit("sendNotification",{senderName:j._id,resverName:t,timeNot:new Date})})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,s){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),e.next=3,(0,a.Z)({method:"patch",url:"".concat(d.L,"/api/user/unfollow/").concat(t),withCredentials:!0,data:{idToUnFollow:s}}).then((function(e){g(c.Z.UnFollow(n))})).catch((function(e){console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){(0,u.xb)(j.following)||(j.following.includes(n)?v(!0):v(!1))}),[j,n]),(0,h.jsxs)(h.Fragment,{children:[!0===m&&(0,h.jsxs)("span",{onClick:function(){return b(j._id,n)},children:["suggestion"===t&&(0,h.jsx)("button",{className:"btn btn-primary",children:"UnFollow"}),"card"===t&&(0,h.jsx)("i",{className:"ri-checkbox-circle-fill"})]}),!1===m&&n!==j._id&&(0,h.jsxs)("span",{onClick:function(){return w(j._id,n)},children:["suggestion"===t&&(0,h.jsx)("button",{className:"btn btn-primary",children:"follow"}),"card"===t&&(0,h.jsx)("i",{className:"ri-checkbox-circle-line"})]}),!1===m&&n===j._id&&(0,h.jsxs)("span",{children:["suggestion"===t&&(0,h.jsx)("button",{className:"btn btn-primary disableButton",children:"follow"}),"card"===t&&(0,h.jsx)("i",{className:"ri-checkbox-circle-line"})]})]})}},2680:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var i=t(1413),s=t(4165),r=t(5861),a=t(9439),o=t(2791),l=t(367),c=t(4938),u=t(6980),d=t(774),h=t(1147),p=t(5273),f=t(4131),x=t(4702),m=t(1353),v=t(3821),g=t(1697),j=t(6587),w=t(8169),b=t(1896),Z=t(3044),N=t(9445),y=t(9453),k=t(7498),C=t(1087),L=t(4212),P=t(9998),S=t(7005),_=t(4554),M=t(7123),I=t(890),U=t(3963),E=t(6151),T=function(e){return new Promise((function(n,t){var i=new Image;i.addEventListener("load",(function(){return n(i)})),i.addEventListener("error",(function(e){return t(e)})),i.setAttribute("crossOrigin","anonymous"),i.src=e}))};function F(e){return e*Math.PI/180}function A(e,n,t){var i=F(t);return{width:Math.abs(Math.cos(i)*e)+Math.abs(Math.sin(i)*n),height:Math.abs(Math.sin(i)*e)+Math.abs(Math.cos(i)*n)}}function R(e,n){return q.apply(this,arguments)}function q(){return q=(0,r.Z)((0,s.Z)().mark((function e(n,t){var i,r,a,o,l,c,u,d,h,p,f,x=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=x.length>2&&void 0!==x[2]?x[2]:0,r=x.length>3&&void 0!==x[3]?x[3]:{horizontal:!1,vertical:!1},e.next=4,T(n);case 4:if(a=e.sent,o=document.createElement("canvas"),l=o.getContext("2d")){e.next=9;break}return e.abrupt("return",null);case 9:if(c=F(i),u=A(a.width,a.height,i),d=u.width,h=u.height,o.width=d,o.height=h,l.translate(d/2,h/2),l.rotate(c),l.scale(r.horizontal?-1:1,r.vertical?-1:1),l.translate(-a.width/2,-a.height/2),l.drawImage(a,0,0),p=document.createElement("canvas"),f=p.getContext("2d")){e.next=22;break}return e.abrupt("return",null);case 22:return p.width=t.width,p.height=t.height,f.drawImage(o,t.x,t.y,t.width,t.height,0,0,t.width,t.height),e.abrupt("return",new Promise((function(e,n){p.toBlob((function(n){n.name="cropped.jpeg",e({file:n,url:URL.createObjectURL(n)})}),"image/jpeg")})));case 26:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function O(e){return z.apply(this,arguments)}function z(){return z=(0,r.Z)((0,s.Z)().mark((function e(n){var t,i,r,a,o=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:0,e.next=3,T(n);case 3:return i=e.sent,r=document.createElement("canvas"),a=r.getContext("2d"),90===t||-90===t||270===t||-270===t?(r.width=i.height,r.height=i.width):(r.width=i.width,r.height=i.height),a.translate(r.width/2,r.height/2),a.rotate(t*Math.PI/180),a.drawImage(i,-i.width/2,-i.height/2),e.abrupt("return",new Promise((function(e){r.toBlob((function(n){e(URL.createObjectURL(n))}),"image/png")})));case 12:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var D=t(3666),B=t(9434),G=t(184),H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",bgcolor:"var(--color-light)",border:"2px solid #000",boxShadow:24,p:4},X=function(e){var n=e.photoURL,t=e.setOpenCrop,i=(0,o.useState)({x:0,y:0}),l=(0,a.Z)(i,2),c=l[0],u=l[1],d=(0,o.useState)(1),h=(0,a.Z)(d,2),p=h[0],f=h[1],x=(0,o.useState)(0),m=(0,a.Z)(x,2),v=m[0],g=m[1],j=(0,o.useState)(null),w=(0,a.Z)(j,2),b=w[0],Z=w[1],N=(0,o.useState)(),y=(0,a.Z)(N,2),k=y[0],C=y[1],L=((0,B.I0)(),(0,o.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(n,b,v);case 3:t=e.sent,C(t),console.log("donee",{croppedImage:k}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[b,k,v,n]));return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(D.Z,{open:!0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,G.jsxs)(_.Z,{sx:H,children:[(0,G.jsx)(_.Z,{sx:{background:"white",position:"relative",height:300,width:"100%",minWidth:{sm:400}},children:(0,G.jsx)(S.ZP,{image:n,crop:c,rotation:v,zoom:p,aspect:"".concat(1),zoomWithScroll:!0,onZoomchange:f,onRotationChange:g,onCropChange:u,onCropComplete:function(e,n){Z(n),console.log(e,n)},objectFit:"contain"})}),(0,G.jsxs)(M.Z,{sx:{flexDirection:"column",nx:3,my:2},children:[(0,G.jsxs)(_.Z,{sx:{width:"100%",nb:1},children:[(0,G.jsxs)(_.Z,{children:[(0,G.jsxs)(I.Z,{children:["zoom : ",Y(p)]}),(0,G.jsx)(U.ZP,{valuelabledisplay:"auto",valuelablelformat:Y,min:1,max:3,step:.01,value:p,onChange:function(e,n){return f(n)}})]}),(0,G.jsxs)(_.Z,{children:[(0,G.jsxs)(I.Z,{children:["rotation : ",v]}),(0,G.jsx)(U.ZP,{valuelableldisplay:"auto",min:0,max:360,value:v,onChange:function(e,n){return g(n)}})]}),(0,G.jsxs)(_.Z,{children:[(0,G.jsxs)(I.Z,{children:["rotation : ",v]}),(0,G.jsx)(U.ZP,{valuelableldisplay:"auto",min:0,max:360,value:v,onChange:function(e,n){return g(n)}})]})]}),(0,G.jsxs)(_.Z,{sx:{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"space-between"},children:[(0,G.jsx)(E.Z,{variant:"outlined",onClick:function(){return t(!1)},children:"Cancel"}),(0,G.jsx)(E.Z,{variant:"contained",onClick:L,children:"Crop"})]})]})]})})})},Y=function(e){return"".concat(Math.round(100*e),"%")},J=t(1243),W=t(4290),K=function(e){var n,t,S,_,M,I,U,E,T=e.socket,F=(0,B.v9)((function(e){return e.userInfo})),A=(0,B.v9)((function(e){return e.userInfo})),R=(0,B.v9)((function(e){return e.getusers})),q=(0,B.v9)((function(e){return e.Allpost})),z=(0,o.useState)(),D=(0,a.Z)(z,2),H=D[0],Y=D[1],K=(0,o.useState)(),Q=(0,a.Z)(K,2),V=Q[0],$=Q[1],ee=(0,o.useState)(),ne=(0,a.Z)(ee,2),te=ne[0],ie=ne[1],se=(0,o.useState)(!1),re=(0,a.Z)(se,2),ae=re[0],oe=re[1],le=(0,o.useState)(null===F||void 0===F?void 0:F.picture),ce=(0,a.Z)(le,2),ue=ce[0],de=ce[1],he=(0,o.useState)(!1),pe=(0,a.Z)(he,2),fe=pe[0],xe=pe[1],me=(0,o.useState)(""),ve=(0,a.Z)(me,2),ge=ve[0],je=ve[1],we=(0,o.useState)(""),be=(0,a.Z)(we,2),Ze=be[0],Ne=be[1],ye=(0,o.useState)(""),ke=(0,a.Z)(ye,2),Ce=ke[0],Le=ke[1],Pe=(0,o.useState)(""),Se=(0,a.Z)(Pe,2),_e=Se[0],Me=Se[1],Ie=(0,o.useState)(!1),Ue=(0,a.Z)(Ie,2),Ee=Ue[0],Te=Ue[1],Fe=(0,B.I0)(),Ae=(0,o.useState)(0),Re=(0,a.Z)(Ae,2),qe=Re[0],Oe=Re[1],ze=(0,o.useState)(0),De=(0,a.Z)(ze,2),Be=De[0],Ge=De[1],He=(0,o.useContext)(g.i),Xe=(0,o.useState)({fileList:[],uploading:!1}),Ye=(0,a.Z)(Xe,2),Je=Ye[0],We=Ye[1],Ke=(0,o.useState)(!1),Qe=(0,a.Z)(Ke,2),Ve=Qe[0],$e=Qe[1],en={3:180,6:90,8:-90};function nn(e){return new Promise((function(n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)}),!1),t.readAsDataURL(e)}))}(0,o.useEffect)((function(){if((null===H||void 0===H?void 0:H.length)>0){var e=document.querySelector(".carousel");document.querySelectorAll(".himfollowers i").forEach((function(n){n.addEventListener("click",(function(n){"left"===n.target.id?e.scrollLeft-=10:e.scrollLeft+=10}))}));var n,t,i=!1;e.addEventListener("mousedown",(function(s){i=!0,e.classList.add("dragging"),n=s.pageX,t=e.scrollLeft})),e.addEventListener("mousemove",(function(s){i&&(e.scrollLeft=t-(s.pageX-n))})),document.addEventListener("mouseup",(function(){i=!1,e.classList.remove("dragging")}))}}),[null===H||void 0===H?void 0:H.length]);var tn=(0,x.ZF)({apiKey:"AIzaSyBTPpOH0XcHRsTIDe_gfaZzXLXM5ubYhAg",authDomain:"chat-burundi.firebaseapp.com",projectId:"chat-burundi",storageBucket:"chat-burundi.appspot.com",messagingSenderId:"735028236904",appId:"1:735028236904:web:d54558f034e3a639e361dd",measurementId:"G-DH7T4PP3N5"}),sn=(0,m.cF)(tn);(0,o.useEffect)((function(){if(He){var e=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("no token"===He){e.next=3;break}return e.next=3,(0,J.Z)({method:"get",url:"".concat(L.L,"/api/user/").concat(He),withCredentials:!0}).then((function(e){var n=e.data;Fe(k.Z.fetchUserInfo(n))})).catch((function(){return console.log("no data found")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}var n=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("no token"===He){e.next=3;break}return e.next=3,(0,J.Z)({method:"get",url:"".concat(L.L,"/api/user"),withCredentials:!0}).then((function(e){Fe(y.O.GetuAllsers(e.data))})).catch((function(){return Fe(y.O.GetuAllsers({message:"no user exist now"}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n();var t=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("no token"===He){e.next=3;break}return e.next=3,(0,J.Z)({method:"get",url:"".concat(L.L,"/api/post"),withCredentials:!0}).then((function(e){var n=e.data;Fe(N.s.GetAll(n))})).catch((function(){return Fe(N.s.GetAll({message:"no post exist now"}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}),[He]),(0,o.useEffect)((function(){if(("no token"!==He||q)&&!(0,b.xb)(R)){var e=null===R||void 0===R?void 0:R.filter((function(e){return e.following.includes(He)}));Y(e);var n=q.filter((function(e){return e.posterId===He}));ie(n);for(var t=0,i=0;i<(null===te||void 0===te?void 0:te.length);i++)t+=te[i].likers.length;$(t)}}),[He,q]);var rn=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t,i,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.files[0],$e(!1),!t){e.next=24;break}return We({fileList:[t]}),e.next=6,nn(t);case 6:return i=e.sent,e.prev=7,e.next=10,(0,P.getOrientation)(t);case 10:if(r=e.sent,!(a=en[r])){e.next=16;break}return e.next=15,O(i,a);case 15:i=e.sent;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),console.log("failed to detect the orientation");case 21:xe(!1),de(i),Fe(k.Z.ChangeProfile(i));case 24:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(n){return e.apply(this,arguments)}}(),an=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t,i,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.files[0],$e(!0),!t){e.next=24;break}return We({fileList:[t]}),e.next=6,nn(t);case 6:return i=e.sent,e.prev=7,e.next=10,(0,P.getOrientation)(t);case 10:if(r=e.sent,!(a=en[r])){e.next=16;break}return e.next=15,O(i,a);case 15:i=e.sent;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),console.log("failed to detect the orientation");case 21:xe(!1),de(i),Fe(k.Z.ChangeProfileThumber(i));case 24:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(n){return e.apply(this,arguments)}}(),on=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,b.xb)(ge)){e.next=4;break}c.ZP.error("empty full name"),e.next=6;break;case 4:return e.next=6,(0,J.Z)({method:"put",url:"".concat(L.L,"/api/user/").concat(He),withCredentials:!0,data:{fullName:ge}}).then((function(e){var n=e.data;console.log(n),c.ZP.success("fullName has been update successifull")})).catch((function(){return console.log("no data found")}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ln=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,b.xb)(Ze)){e.next=4;break}c.ZP.error("empty phone"),e.next=6;break;case 4:return e.next=6,(0,J.Z)({method:"put",url:"".concat(L.L,"/api/user/").concat(He),withCredentials:!0,data:{phone:Ze}}).then((function(e){var n=e.data;console.log(n),c.ZP.success("phone has been update successifull")})).catch((function(){return console.log("no data found")}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),cn=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,b.xb)(_e)){e.next=4;break}c.ZP.error("empty professionnal"),e.next=6;break;case 4:return e.next=6,(0,J.Z)({method:"put",url:"".concat(L.L,"/api/user/").concat(He),withCredentials:!0,data:{professionnal:_e}}).then((function(e){e.data;c.ZP.success("professionnal has been update successifull")})).catch((function(){return console.log("no data found")}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),un=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,b.xb)(Ce)){e.next=4;break}c.ZP.error("empty biographie"),e.next=6;break;case 4:return e.next=6,(0,J.Z)({method:"put",url:"".concat(L.L,"/api/user/").concat(He),withCredentials:!0,data:{bio:Ce}}).then((function(e){e.data;c.ZP.success("biographie has been update successifull")})).catch((function(){return console.log("no data found")}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),dn=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Je.fileList,(t=new FormData).append("userId",He),!(0,b.xb)(n)&&t.append("file",n[0]),We({uploading:!0}),e.next=7,(0,J.Z)({method:"post",url:"".concat(L.L,"/api/user/upload"),withCredentials:!0,data:t,onUploadProgress:function(e){console.log(e),Oe(e.progress),Ge(e.estimated)}}).then((function(e){var n=e.data;console.log(n),Fe(k.Z.ChangeProfile(n.picture)),We({fileList:[]}),c.ZP.success("upload successifull"),We({uploading:!1})})).catch((function(e){We({uploading:!1}),c.ZP.error(e.response.data.message)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),hn=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n,t,i,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Je.fileList,t=new Date,We({uploading:!0}),console.log(n[0]),n[0]){e.next=6;break}return e.abrupt("return");case 6:i=(0,W.iH)(sn,"profil/".concat(n[0].name)),(a=(0,W.B0)(i,n[0])).on("state_changed",(function(e){if(e.bytesTransferred){var n=e.bytesTransferred/e.totalBytes;Oe(n);var i=new Date-t,s=e.bytesTransferred/(i/1e3),r=(e.totalBytes-e.bytesTransferred)/s;Ge(r)}}),(function(e){console.log(e),We({uploading:!1})}),(function(){(0,W.Jt)(a.snapshot.ref).then(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={userId:He,file:n},e.next=3,(0,J.Z)({method:"post",url:"".concat(L.L,"/api/user/upload/thumber"),withCredentials:!0,data:t}).then((function(e){var n=e.data;Fe(k.Z.ChangeProfileThumber(n.thumber)),We({fileList:[]}),c.ZP.success("upload successifull"),We({uploading:!1}),Ge(0)})).catch((function(e){We({uploading:!1}),c.ZP.error(e.response.data.message)}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pn={multiple:!1,showUploadList:!0,onRemove:function(e){We((function(e){return{fileList:[]}}))},beforeUpload:function(e){return We((function(n){return{fileList:[e]}})),!1},fileList:Je.fileList};return(0,o.useEffect)((function(){if(T&&F&&F.pseudo){T.emit("newuser",F._id);var e=document.querySelector(":root"),n=JSON.parse(localStorage.getItem("".concat(F._id)));n&&(n.primaryHue&&e.style.setProperty("--color-primary-hue",n.primaryHue),n.font_size&&(document.querySelector("html").style.fontSize=n.font_size),n.lightcolorlightness&&e.style.setProperty("--light-color-lightness",n.lightcolorlightness),n.whitecolorlightness&&e.style.setProperty("--white-color-lightness",n.whitecolorlightness),n.darkcolorlightness&&e.style.setProperty("--dark-color-lightness",n.darkcolorlightness),n.colornamelightness&&e.style.setProperty("--color-name-lightness",n.colornamelightness))}"no token"===He&&(window.location="/login")}),[T,F.pseudo,F,He]),(0,G.jsxs)(l.Z,{title:null===F||void 0===F?void 0:F.pseudo,children:[(0,G.jsx)("div",{className:"container",children:(0,G.jsxs)("div",{className:"wrapper",children:[(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,G.jsxs)("div",{className:"profile",children:[(0,G.jsx)("div",{className:"image",children:(0,G.jsx)("img",{src:null===A||void 0===A?void 0:A.thumber,alt:A&&(null===A||void 0===A?void 0:A._id)})}),(0,G.jsxs)("div",{className:"wrapper-2",children:[(0,G.jsx)("div",{style:{width:"9rem",height:"9rem",overflow:"hidden",borderRadius:"50%",position:"relative",top:"-70px",left:"20px",border:"6px solid var(--color-white)"},children:(0,G.jsx)(Z.Z,{style:{display:"absolute",top:"0",left:"0",width:"100%",height:"100%"},src:null===A||void 0===A?void 0:A.picture,alt:null===A||void 0===A?void 0:A.pseudo})}),(0,G.jsxs)("div",{className:"infos",children:[(0,G.jsx)("h4",{children:null===A||void 0===A?void 0:A.pseudo}),(0,G.jsx)("span",{children:"\xc9tudiant(e) \xe0 univeriste polytechinique de gitega(UPG)"}),(0,G.jsx)("span",{children:null===A||void 0===A?void 0:A.professionnal}),(0,G.jsx)("small",{children:"kinyinya,ruyigi,burundi"}),(0,G.jsxs)("span",{children:["bio : ",null===A||void 0===A?void 0:A.bio]}),(0,G.jsxs)("div",{className:"followFollowing",children:[(0,G.jsxs)("span",{children:[(0,b.xb)(null===A||void 0===A||null===(n=A.followers)||void 0===n?void 0:n.length)?"0":null===A||void 0===A||null===(t=A.followers)||void 0===t?void 0:t.length," followers"]}),(0,G.jsxs)("span",{children:[(0,b.xb)(null===A||void 0===A||null===(S=A.following)||void 0===S?void 0:S.length)?"0":null===A||void 0===A||null===(_=A.following)||void 0===_?void 0:_.length," following"]}),(0,G.jsxs)("span",{children:[(0,b.xb)(null===te||void 0===te?void 0:te.length)?"0":null===te||void 0===te?void 0:te.length," Posts"]}),(0,G.jsxs)("span",{children:[V," Likes"]})]}),(0,G.jsxs)("div",{className:"action",children:[(0,G.jsx)(j.Z,{idTofollow:He,type:"suggestion"})," ",(0,G.jsx)("button",{className:" btn-new",onClick:function(){return oe(!0)},children:"Edit Profile"})]})]})]})]}),(null===H||void 0===H?void 0:H.length)>0&&(0,G.jsxs)("div",{className:"himfollowers",children:[(null===H||void 0===H?void 0:H.length)>3&&(0,G.jsx)("i",{className:"ri-arrow-drop-left-line",id:"left"}),(0,G.jsx)("div",{className:"carousel",children:null===H||void 0===H?void 0:H.map((function(e,n){return(0,G.jsxs)("div",{className:"request",children:[(0,G.jsxs)("div",{className:"info",children:[(0,G.jsx)("div",{className:"profile-picture",children:(0,G.jsx)(Z.Z,{src:null===e||void 0===e?void 0:e.picture,alt:"aa"})}),(0,G.jsxs)("div",{children:[(0,G.jsx)(C.rU,{className:"linkProfile",to:"/profile/".concat(null===e||void 0===e?void 0:e._id),children:(0,G.jsx)("h5",{className:"noum",children:null===e||void 0===e?void 0:e.pseudo})}),(0,G.jsxs)("p",{className:"text-muted",children:[null===e||void 0===e?void 0:e.following.length," following"]})]})]}),(0,G.jsxs)("div",{className:"action",children:[(0,G.jsx)(j.Z,{idTofollow:e._id,type:"suggestion"}),(0,G.jsx)("button",{className:" btn-new",children:"gretting"})]})]},n)}))}),(null===H||void 0===H?void 0:H.length)>3&&(0,G.jsx)("i",{className:"ri-arrow-drop-right-line",id:"right"})]}),(0,G.jsx)("div",{children:(0,G.jsx)(w.Z,{socket:T,type:"hisprofile",paramsId:He})})]}),(0,G.jsx)("div",{className:"leftProfile",children:F&&(0,G.jsx)(v.Z,{user:F})})]})}),fe&&(0,G.jsx)("div",{className:"popupUpdateProfileCrop",children:(0,G.jsx)(X,{photoURL:ue,setOpenCrop:xe})}),ae&&(0,G.jsxs)("div",{className:"popupUpdateProfile",children:[(0,G.jsxs)("div",{className:"un",children:[(0,G.jsx)("div",{className:"un-un",children:(0,G.jsx)("h3",{children:"User infos"})}),(0,G.jsxs)("div",{className:"un-deux",children:[(0,G.jsx)("input",{type:"text",placeholder:"full name",value:ge,onChange:function(e){return je(e.target.value)}}),(0,G.jsx)("button",{className:"btnprofile",onClick:on,children:"update"})]}),(0,G.jsxs)("div",{className:"un-trois",children:[(0,G.jsx)("input",{type:"text",placeholder:"number phone ie: +257 11449900",value:Ze,onChange:function(e){return Ne(e.target.value)}}),(0,G.jsx)("button",{className:"btnprofile",onClick:ln,children:"update"})]}),(0,G.jsxs)("div",{className:"un-quatre",children:[(0,G.jsx)("input",{type:"text",placeholder:"biographique",value:Ce,onChange:function(e){return Le(e.target.value)}}),(0,G.jsx)("button",{className:"btnprofile",onClick:un,children:"update"})]}),(0,G.jsxs)("div",{className:"un-cinq",children:[(0,G.jsx)("input",{type:"text",placeholder:"Your proffessional",value:_e,onChange:function(e){return Me(e.target.value)}}),(0,G.jsx)("button",{className:"btnprofile",onClick:cn,children:"update"})]}),(0,G.jsxs)("div",{className:"un-six",children:[(0,G.jsx)("input",{type:"text",placeholder:"Your country"}),(0,G.jsx)("button",{className:"btnprofile",children:"update"})]}),(0,G.jsxs)("div",{className:"un-six",children:[(0,G.jsx)("input",{type:"text",placeholder:"where didu study???"}),(0,G.jsx)("button",{className:"btnprofile",children:"update"})]}),(0,G.jsxs)("div",{className:"un-six",children:[(0,G.jsxs)("select",{children:[(0,G.jsx)("option",{children:"Masculin"}),(0,G.jsx)("option",{children:"feminin"})]}),(0,G.jsx)("button",{className:"btnprofile",children:"update"})]}),(0,G.jsx)("div",{className:"un-un",children:(0,G.jsx)("h3",{children:"Your social media"})}),(0,G.jsxs)("div",{className:"un-six",children:[(0,G.jsx)("input",{type:"text",placeholder:"Add link of your social media like ie: https://www.chatburundi.com/janeirohurley"}),(0,G.jsx)("button",{className:"btnprofile",children:"Add"}),(0,G.jsxs)("div",{className:"social-media",children:[(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-facebook-circle-fill"}),(0,G.jsx)(C.rU,{to:"profile",children:"facebook"}),(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-twitter-fill"}),"twitter ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-instagram-fill"}),"instagram ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-youtube-fill"}),"youtube",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-whatsapp-fill"}),"whatsapp ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-whatsapp-fill"}),"whatsapp ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]})]})]}),Ee&&(0,G.jsx)("div",{className:"suivante",children:(0,G.jsxs)("button",{className:"btnprofile precedente",onClick:function(){return Te(!1)},children:[(0,G.jsx)("i",{className:"ri-arrow-left-line"})," precedente"]})}),(0,G.jsxs)("button",{className:"btnprofile btnsuivante",onClick:function(){return Te(!0)},children:[" suivante ",(0,G.jsx)("i",{className:"ri-arrow-right-line"})]})]}),(0,G.jsxs)("div",{className:"deux",children:[(0,G.jsx)("div",{className:"deux-un",children:(0,G.jsx)("h3",{children:"Current profile"})}),(0,G.jsxs)("div",{className:"profile",children:[(0,G.jsxs)("div",{className:"image",children:[(0,G.jsx)("div",{className:"popounderphoto",children:(0,G.jsxs)("div",{className:"icon-input",children:[(0,G.jsx)("input",{type:"file",title:"update thumber",onChange:function(e){return an(e)}}),(0,G.jsx)("i",{className:"ri-pencil-line"})]})}),(0,G.jsx)("img",{src:null===A||void 0===A?void 0:A.thumber,alt:A&&(null===A||void 0===A?void 0:A._id)})]}),(0,G.jsxs)("div",{className:"wrapper-2",children:[(0,G.jsxs)("div",{style:{width:"9rem",height:"9rem",overflow:"hidden",borderRadius:"50%",position:"relative",top:"-70px",left:"20px",border:"6px solid var(--color-white)"},children:[(0,G.jsx)("div",{className:"popounderphoto roundprofile",children:(0,G.jsxs)("div",{className:"icon-input2",children:[(0,G.jsx)("input",{type:"file",title:"update picture",onChange:function(e){return rn(e)}}),(0,G.jsx)("i",{className:"ri-pencil-line"})]})}),(0,G.jsx)(Z.Z,{style:{display:"absolute",top:"0",left:"0",width:"100%",height:"100%"},src:null===A||void 0===A?void 0:A.picture,alt:null===A||void 0===A?void 0:A.pseudo})]}),(0,G.jsxs)("div",{className:"infos",children:[(0,G.jsx)(u.Z,(0,i.Z)({},pn)),0!==Be&&(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(d.Z,{direction:"column",style:{backgroundColor:"rgba(0,0,0,0.5)",padding:8,width:"100%",display:"flex",flexDirection:"column"},children:[(0,G.jsxs)(h.Z,{variant:"span",type:"secondary",children:["is being Uploaded in ",Be?function(e){var n=Math.floor(e/3600),t=Math.floor(e/60-60*n),i=Math.floor(e-60*t-3600*n),s="".concat(i," sec");return t&&(s="".concat(t," min ").concat(s)),t&&(s="".concat(n," hrs ").concat(s)),s}(Be):"calcurating.."]}),(0,G.jsx)(p.Z,{percent:Math.ceil(100*qe),style:{display:"flex",flexDirection:"row"}})]})}),!1===Ve&&(0,G.jsx)(f.ZP,{type:"primary",onClick:dn,disabled:(0,b.xb)(Je.fileList),loading:Je.uploading,style:{marginTop:16},children:Je.uploading?"Uploading....":"start Upload profil"}),!0===Ve&&(0,G.jsx)(f.ZP,{type:"primary",onClick:hn,disabled:(0,b.xb)(Je.fileList),loading:Je.uploading,style:{marginTop:16},children:Je.uploading?"Uploading....":"start Upload thumber"}),(0,G.jsx)("h4",{children:null===A||void 0===A?void 0:A.pseudo}),(0,G.jsxs)("span",{children:[(0,G.jsx)("i",{className:"ri-building-4-line"})," \xc9tudiant(e) \xe0 univeriste polytechinique de gitega(UPG)"]}),(0,G.jsxs)("span",{children:[(0,G.jsx)("i",{className:"ri-building-4-line"}),null===A||void 0===A?void 0:A.professionnal]}),(0,G.jsxs)("small",{children:[(0,G.jsx)("i",{className:"ri-map-pin-2-line"})," kinyinya,ruyigi,burundi"]}),(0,G.jsxs)("span",{children:[" bio : ",null===A||void 0===A?void 0:A.bio]}),(0,G.jsxs)("div",{className:"followFollowing",children:[(0,G.jsxs)("span",{children:[(0,b.xb)(null===A||void 0===A||null===(M=A.followers)||void 0===M?void 0:M.length)?"0":null===A||void 0===A||null===(I=A.followers)||void 0===I?void 0:I.length," followers"]}),(0,G.jsxs)("span",{children:[(0,b.xb)(null===A||void 0===A||null===(U=A.following)||void 0===U?void 0:U.length)?"0":null===A||void 0===A||null===(E=A.following)||void 0===E?void 0:E.length," following"]}),(0,G.jsxs)("span",{children:[(0,b.xb)(null===te||void 0===te?void 0:te.length)?"0":null===te||void 0===te?void 0:te.length," Posts"]}),(0,G.jsxs)("span",{children:[V," Likes"]})]}),(0,G.jsxs)("div",{className:"social-media",children:[(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-facebook-circle-fill"}),(0,G.jsx)(C.rU,{to:"profile",children:"facebook"}),(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-twitter-fill"}),"twitter ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-instagram-fill"}),"instagram ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-youtube-fill"}),"youtube",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-whatsapp-fill"}),"whatsapp ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]}),(0,G.jsxs)("div",{className:"media-1",children:[(0,G.jsx)("i",{className:"ri-whatsapp-fill"}),"whatsapp ",(0,G.jsx)("span",{children:(0,G.jsx)("i",{className:"ri-close-circle-fill"})})]})]})]})]})]})]})]})]})}}}]);
//# sourceMappingURL=680.0cac409d.chunk.js.map