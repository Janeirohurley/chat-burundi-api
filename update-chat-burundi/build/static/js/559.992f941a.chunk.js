"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[559],{367:function(e,i,n){n(2791);var t=n(184);i.Z=function(e){return document.title="Chat Burundi - "+e.title,(0,t.jsx)("div",{className:"w-100",children:e.children})}},6587:function(e,i,n){var t=n(4165),s=n(5861),r=n(9439),c=n(1243),o=n(2791),a=n(9434),l=n(7498),d=n(1896),u=n(4212),p=n(184);i.Z=function(e){var i=e.idTofollow,n=e.type,h=e.socket,x=(0,o.useState)(!1),f=(0,r.Z)(x,2),m=f[0],j=f[1],Z=(0,a.I0)(),g=(0,a.v9)((function(e){return e.userInfo})),w=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(i,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,(0,c.Z)({method:"patch",url:"".concat(u.L,"/api/user/follow/").concat(i),withCredentials:!0,data:{idToFollow:n}}).then((function(e){Z(l.Z.Follow(n)),(0,c.Z)({method:"patch",url:"".concat(u.L,"/api/post/notification/").concat(n),data:{notifieId:g._id,notifiePseudo:g.pseudo,notification:"start following  u",status:"pending",pictureNotifie:g.picture},withCredentials:!0}).then((function(e){console.log(e),h.emit("sendNotification",{senderName:g._id,resverName:n,timeNot:new Date})})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(i,n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n,s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),e.next=3,(0,c.Z)({method:"patch",url:"".concat(u.L,"/api/user/unfollow/").concat(n),withCredentials:!0,data:{idToUnFollow:s}}).then((function(e){Z(l.Z.UnFollow(i))})).catch((function(e){console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(i,n){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){(0,d.xb)(g.following)||(g.following.includes(i)?j(!0):j(!1))}),[g,i]),(0,p.jsxs)(p.Fragment,{children:[!0===m&&(0,p.jsxs)("span",{onClick:function(){return b(g._id,i)},children:["suggestion"===n&&(0,p.jsx)("button",{className:"btn btn-primary",children:"UnFollow"}),"card"===n&&(0,p.jsx)("i",{className:"ri-checkbox-circle-fill"})]}),!1===m&&i!==g._id&&(0,p.jsxs)("span",{onClick:function(){return w(g._id,i)},children:["suggestion"===n&&(0,p.jsx)("button",{className:"btn btn-primary",children:"follow"}),"card"===n&&(0,p.jsx)("i",{className:"ri-checkbox-circle-line"})]}),!1===m&&i===g._id&&(0,p.jsxs)("span",{children:["suggestion"===n&&(0,p.jsx)("button",{className:"btn btn-primary disableButton",children:"follow"}),"card"===n&&(0,p.jsx)("i",{className:"ri-checkbox-circle-line"})]})]})}},7559:function(e,i,n){n.r(i),n.d(i,{default:function(){return I}});var t=n(2791),s=n(367),r=n(9439),c=n(5623),o=n(4554),a=n(1582),l=n(3044),d=n(890),u=n(3400),p=n(3466),h=n(4643),x=n(3482),f=n(5489),m=n(1896),j=n(3093),Z=n(3967),g=n(6934),w=n(7689),b=n(9434),v=n(9218),k=n(6587),N=n(184),y=function(){var e=(0,b.I0)(),i=(0,Z.Z)(),n=(0,w.UO)(),y=(0,b.v9)((function(e){return e.posts})),I=(0,b.v9)((function(e){return e.getusers})),C=(0,b.v9)((function(e){return e.userInfo}));console.log(n.id);var _=(0,g.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),pointerEvents:"none",display:"flex",alignItems:"center",width:"calc(100% - 50px)",borderRadius:"10px",minHeight:"50px",boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)",fontSize:"0.8rem",fontWeight:600}})),T=(0,g.ZP)(c.Z)((function(e){e.theme;return{"& .MuiInputBase-input":{paddingTop:"12px",paddingBottom:"12px"}}})),F=(0,b.v9)((function(e){return e.like.likes})),P=(0,t.useState)(!1),R=(0,r.Z)(P,2),L=R[0],U=R[1],q=function(i){"like"===i?(U(!0),e(v.N.increment())):"unlike"===i&&(U(!1),e(v.N.decrement()))};return(0,N.jsx)(s.Z,{title:"single post",children:y.map((function(e){return e._id===n.id&&(0,N.jsxs)(o.Z,{sx:{width:"100%",background:"white",borderRadius:"10px"},p:2,children:[(0,N.jsxs)(a.Z,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,N.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,N.jsx)(l.Z,{src:j,alt:"ss"}),(0,N.jsxs)(a.Z,{children:[(0,N.jsxs)(d.Z,{variant:"subtitle2",children:[!(0,m.xb)(I[0])&&I.map((function(i){return i._id===e.posterId?i.pseudo:null})).join("")," ",e.posterId!==C._id&&(0,N.jsx)(k.Z,{idTofollow:e.posterId,type:"card"})]}),(0,N.jsxs)(d.Z,{variant:"caption",children:[(0,m.RX)(e.createdAt)," "]})]})]}),(0,N.jsx)(a.Z,{children:(0,N.jsx)(u.Z,{children:(0,N.jsx)(h.Z,{})})})]}),(0,N.jsx)(a.Z,{marginTop:"10px",borderRadius:"10px",overflow:"hidden",children:(0,N.jsx)(d.Z,{variant:"caption",children:e.message})}),(0,N.jsxs)(a.Z,{marginTop:"10px",borderRadius:"10px",overflow:"hidden",children:[e.picture&&(0,N.jsx)("img",{src:e.picture,alt:"post-pict"}),e.video&&(0,N.jsx)("video",{src:e.video,alt:"post-pict"})]}),(0,N.jsxs)(a.Z,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,N.jsxs)(a.Z,{direction:"row",spacing:1,children:[L?(0,N.jsx)(u.Z,{onClick:function(){return q("unlike")},children:(0,N.jsx)("i",{className:"ri-heart-fill",title:"".concat(F)})}):(0,N.jsx)(u.Z,{onClick:function(){return q("like")},children:(0,N.jsx)("i",{className:"ri-heart-line",title:"".concat(F)})}),(0,N.jsx)(u.Z,{children:(0,N.jsx)("i",{className:"ri-chat-3-line"})}),(0,N.jsx)(u.Z,{children:(0,N.jsx)("i",{className:"ri-share-line"})})]}),(0,N.jsx)(a.Z,{children:(0,N.jsx)(u.Z,{children:(0,N.jsx)("i",{className:"ri-bookmark-line"})})})]}),(0,N.jsxs)(a.Z,{width:"100%",marginTop:"1rem",spacing:2,children:[(0,N.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,N.jsx)(l.Z,{}),(0,N.jsx)(_,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit Praesentium hic nisi dignissimos repellendus quaerat adipisci corporis distinctio et natus a minima minus culpa ad ex voluptatem nihil quidem ab inventore."})]}),(0,N.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,N.jsx)(l.Z,{}),(0,N.jsx)(_,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium hic nisi dignissimos repellendus quaerat adipisci corporis distinctio et natus a, minima minus culpa ad ex voluptatem nihil quidem ab inventore."})]}),(0,N.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,height:"100%",children:[(0,N.jsx)(l.Z,{}),(0,N.jsx)(T,{placeholder:"writte a comment....",fullWidth:!0,variant:"filled",InputProps:{disableUnderline:!0,endAdornment:(0,N.jsx)(p.Z,{children:(0,N.jsx)(u.Z,{children:(0,N.jsx)(x.Z,{})})})}}),(0,N.jsx)(o.Z,{sx:{width:"50px",height:"100%",background:i.palette.primary.main,borderRadius:"10px",display:"flex",justifyContent:"center"},alignItems:"center",children:(0,N.jsx)(u.Z,{color:"white",children:(0,N.jsx)(f.Z,{})})})]})]})]})}))})},I=function(){return(0,N.jsx)(s.Z,{title:"Image",children:(0,N.jsx)("main",{children:(0,N.jsx)("div",{className:"container",children:(0,N.jsx)("div",{className:"middle",children:(0,N.jsx)(y,{})})})})})}},3093:function(e,i,n){e.exports=n.p+"static/media/feed-1.58487fbb05a45c938f6a.jpg"}}]);
//# sourceMappingURL=559.992f941a.chunk.js.map