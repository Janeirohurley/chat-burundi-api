"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[583],{367:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){return document.title="Chat Burundi - "+e.title,(0,r.jsx)("div",{className:"w-100",children:e.children})}},7583:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r,i=n(9439),o=n(2791),s=n(367),a=n(1933),c=n(4087),l=n(4165),u=n(3433),d=n(5861),h=n(9229),p=n(1243),f=n(3204),x=n(1295),m=n(7377),g=n(7034),v=n(6397),b=n(6796),j=n(8180),w=n(3722),C=n(2338),y=n(3380),Z=n(3763),k=n(7693),_=n(7521),S=n(5442),I=n(8348),z=n(7885),A=n(1820),N=n(2449),F=n(1461),L=n(8082),R=n(4653),O=n(184),q=function(e){var t=e.user,n=e.children,r=(0,I.q)(),i=r.isOpen,o=r.onOpen,s=r.onClose;return(0,O.jsxs)(O.Fragment,{children:[n?(0,O.jsx)("span",{onClick:o,children:n}):(0,O.jsx)(z.h,{background:"var(--color-white)",color:"var(--color-name)",_hover:{background:"var(--color-light)",color:"white",cursor:"pointer"},d:{base:"flex"},icon:(0,O.jsx)("i",{className:"ri-eye-line"}),onClick:o}),(0,O.jsxs)(A.u_,{size:"lg",isOpen:i,onClose:s,isCentered:!0,children:[(0,O.jsx)(y.Z,{}),(0,O.jsxs)(N.h,{background:"var(--color-white)",color:"var(--color-name)",height:"410px",children:[(0,O.jsx)(k.x,{sx:{display:"flex",justifyContent:"center",fontSize:"40px",fontFamily:"Work sans"},children:t.pseudo}),(0,O.jsx)(F.o,{}),(0,O.jsxs)(_.f,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",children:[(0,O.jsx)(L.E,{borderRadius:"full",boxSize:"150px",src:t.picture,alt:t.pseudo}),(0,O.jsxs)(h.x,{fontSize:{base:"1.5rem",md:"2rem"},children:["Email : ",t.email]})]}),(0,O.jsx)(R.m,{})]})]})]})},E=n(4224),G=n(8329),M=n(4212),D=function(){var e=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/user/logout"),withCredentials:!0}).then((function(){var e;e="jwt","undefined"!==window&&G.Z.remove(e,{expires:1}),localStorage.removeItem("token"),window.location.reload()})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()},W=n(9012),B=function(e){var t=e.handleFunction,n=e.user;return(0,O.jsxs)(c.xu,{onClick:t,background:"#E8E8E8",_hover:{background:"#38b2ac",color:"white",cursor:"pointer"},width:"100%",alignItems:"center",display:"flex",color:"black",px:3,py:2,mb:3,borderRadius:"lg",children:[(0,O.jsx)(b.q,{mr:2,size:"sm",cursor:"pointer",name:n.pseudo,src:n.picture}),(0,O.jsxs)(c.xu,{children:[(0,O.jsx)(h.x,{children:n.pseudo}),(0,O.jsxs)(h.x,{fontSize:"xs",children:[" ",(0,O.jsx)("b",{children:"Email :"})," ",n.email]})]})]})},T=function(){var e=(0,I.q)(),t=e.isOpen,n=e.onOpen,r=e.onClose,s=(0,o.useState)(""),z=(0,i.Z)(s,2),A=z[0],N=z[1],F=(0,o.useState)([]),L=(0,i.Z)(F,2),R=L[0],G=L[1],T=(0,o.useState)(!1),Y=(0,i.Z)(T,2),U=Y[0],X=Y[1],$=(0,o.useState)(),K=(0,i.Z)($,2),P=K[0],H=K[1],J=(0,a.g)(),Q=J.user,V=J.setSelectedChat,ee=J.chats,te=J.setChats,ne=(0,x.p)(),re=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H(!0),e.next=4,(0,p.Z)({method:"post",url:"".concat(M.L,"/api/chat"),withCredentials:!0,data:{userId:t}}).then((function(e){var t=e.data;ee.find((function(e){return e._id===t._id}))||te([t].concat((0,u.Z)(ee))),V(t),H(!1),r()})).catch((function(e){H(!1),ne({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),ne({title:"something went wrang try again",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=3;break}return ne({title:"Please enter something to search",status:"warning",duration:2e3,isClosable:!0,position:"bottom-left"}),e.abrupt("return");case 3:return e.prev=3,X(!0),e.next=7,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/user/search/user?search=").concat(A),withCredentials:!0}).then((function(e){var t=e.data;X(!1);var n=t.filter((function(e){var t;return null===(t=e.followers)||void 0===t?void 0:t.includes(Q._id)}));G(n),console.log(n)})).catch((function(e){X(!1),ne({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),ne({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(c.xu,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:" 5px 10px 5px 10px",background:"var(--color-white)"},children:[(0,O.jsx)(m.u,{hasArrow:!0,label:"Search user to chat",bg:"var(--color-white)",color:"var(--color-name)",children:(0,O.jsxs)(E.z,{_hover:{background:"var(--color-white)",color:"white",cursor:"pointer"},variant:"ghost",onClick:n,children:[(0,O.jsx)("i",{className:"ri ri-search-line",style:{color:"var(--color-name)"}}),(0,O.jsx)(h.x,{display:{base:"none",md:"flex"},px:"4",color:"var(--color-name)",children:"Search User"})]})}),(0,O.jsx)(h.x,{fontSize:"2xl",color:"var(--color-name)",children:"Chat burundi"}),(0,O.jsx)("div",{children:(0,O.jsxs)(g.v,{children:[(0,O.jsx)(v.j,{_hover:{background:"var(--color-light)",color:"white",cursor:"pointer"},bg:"var(--color-white)",as:E.z,rightIcon:(0,O.jsx)("i",{className:"ri-arrow-drop-down-line"}),children:(0,O.jsx)(b.q,{size:"sm",name:Q.pseudo,src:Q.picture})}),(0,O.jsxs)(j.q,{children:[(0,O.jsx)(q,{user:Q,children:(0,O.jsx)(w.s,{children:"profile"})}),(0,O.jsx)(w.s,{onClick:function(){return D()},children:"Logout"})]})]})})]}),(0,O.jsxs)(C.d,{placement:"left",onClose:r,isOpen:t,children:[(0,O.jsx)(y.Z,{}),(0,O.jsxs)(Z.s,{children:[(0,O.jsx)(k.x,{borderBottomWidth:"1px",children:" Search users"}),(0,O.jsxs)(_.f,{children:[(0,O.jsxs)(c.xu,{display:"flex",paddingBottom:2,children:[(0,O.jsx)(S.I,{placeholder:"Search by email or usename",mr:2,value:A,onChange:function(e){return N(e.target.value)}}),(0,O.jsx)(E.z,{onClick:ie,children:"Go"})]}),U?(0,O.jsx)(W.Z,{}):null===R||void 0===R?void 0:R.map((function(e){return(0,O.jsx)(B,{handleFunction:function(){return re(e._id)},user:e},e._id)})),P&&(0,O.jsx)(f.$,{ml:"auto",d:"flex"})]})]})]})]})},Y=n(2392),U=n(1896),X=function(e){var t=e.user,n=e.handleFunction;return(0,O.jsxs)(c.xu,{px:2,py:1,m:1,mb:2,variant:"solid",display:"flex",fontSize:12,cursor:"pointer",onClick:n,children:[(0,O.jsx)(b.q,{src:t.picture,size:"sm"}),(0,O.jsx)("i",{className:"ri ri-close-line",onClick:n})]})},$=function(e){var t=e.fetchAgain,n=e.setfetchAgain,r=e.fetchMessages,s=(0,I.q)(),u=s.isOpen,h=s.onOpen,m=s.onClose,g=(0,a.g)(),v=g.setSelectedChat,b=g.selectedChat,j=g.user,w=(0,o.useState)(""),C=(0,i.Z)(w,2),Z=C[0],L=C[1],q=(0,o.useState)([]),G=(0,i.Z)(q,2),D=G[0],W=G[1],T=(0,o.useState)(!1),U=(0,i.Z)(T,2),$=U[0],K=U[1],P=(0,o.useState)(),H=(0,i.Z)(P,2),J=H[0],Q=H[1],V=(0,o.useState)(!1),ee=(0,i.Z)(V,2),te=ee[0],ne=ee[1],re=(0,x.p)(),ie=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(i){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.groupAdmin._id===j._id||i._id===j._id){e.next=3;break}return re({title:"only admin can remove sommeone",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"}),e.abrupt("return");case 3:return K(!0),e.next=6,(0,p.Z)({method:"put",url:"".concat(M.L,"/api/chat/groupremove"),withCredentials:!0,data:{chatId:b._id,userId:i._id}}).then((function(e){var o=e.data;console.log(o),i._id===j._id?v():v(o),r(),n(!t),K(!1),re({title:"add removed successifull",status:"success",duration:2e3,isClosable:!0,position:"bottom-left"})})).catch((function(e){console.log(e),re({title:"something went wrong try again",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"})}));case 6:K(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.users.find((function(e){return e._id===r._id}))){e.next=3;break}return re({title:"".concat(r.pseudo," has already in group"),status:"warning",duration:2e3,isClosable:!0,position:"bottom-left"}),e.abrupt("return");case 3:return K(!0),e.next=6,(0,p.Z)({method:"put",url:"".concat(M.L,"/api/chat/addTogroup"),withCredentials:!0,data:{chatId:b._id,userId:r._id}}).then((function(e){var r=e.data;v(r),n(!t),K(!1),re({title:"add user successifull",status:"success",duration:2e3,isClosable:!0,position:"bottom-left"})})).catch((function(e){K(!1),re({title:"something went wrang try again",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J&&" "!==J){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,ne(!0),e.next=6,(0,p.Z)({method:"put",url:"".concat(M.L,"/api/chat/rename"),withCredentials:!0,data:{chatId:b._id,chatName:J}}).then((function(e){var r=e.data;v(r),n(!t),ne(!1),Q("")})).catch((function(e){ne(!1),re({title:"error occured",description:e.response.data.message,status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),re({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L(t),t){e.next=3;break}return e.abrupt("return");case 3:return K(!0),e.prev=4,e.next=7,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/user/search/user?search=").concat(Z),withCredentials:!0}).then((function(e){var t=e.data;K(!1);var n=t.filter((function(e){var t;return null===(t=e.following)||void 0===t?void 0:t.includes(j._id)}));W(n)})).catch((function(e){K(!1),re({title:"error occured",description:"error to load the search results",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),re({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(z.h,{d:{base:"flex"},icon:(0,O.jsx)("i",{className:"ri-eye-line"}),onClick:h}),(0,O.jsxs)(A.u_,{size:"lg",isOpen:u,onClose:m,isCentered:!0,children:[(0,O.jsx)(y.Z,{}),(0,O.jsxs)(N.h,{children:[(0,O.jsx)(k.x,{sx:{display:"flex",justifyContent:"center",fontSize:"20px"},children:b.chatName}),(0,O.jsx)(F.o,{}),(0,O.jsxs)(_.f,{children:[(0,O.jsx)(c.xu,{display:"flex",flexWrap:"wrap",width:"100%",children:b.users.map((function(e){return(0,O.jsx)(X,{user:e,handleFunction:function(){return ie(e)}},e._id)}))}),(0,O.jsx)(O.Fragment,{children:j._id===b.groupAdmin._id&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(Y.NI,{display:"flex",children:[(0,O.jsx)(S.I,{placeholder:"chat Name",mb:1,onChange:function(e){return Q(e.target.value)}}),(0,O.jsx)(E.z,{variant:"solid",ml:1,isLoading:te,onClick:se,colorScheme:"blue",children:"update"})]}),(0,O.jsx)(Y.NI,{d:"flex",children:(0,O.jsx)(S.I,{placeholder:"add a user to group",mb:1,onChange:function(e){return ae(e.target.value)}})})]})}),$?(0,O.jsx)(f.$,{size:"lg"}):null===D||void 0===D?void 0:D.slice(0,3).map((function(e){return(0,O.jsx)(B,{handleFunction:function(){return oe(e)},user:e},e._id)}))]}),(0,O.jsx)(R.m,{children:(0,O.jsx)(E.z,{colorScheme:"red",mr:3,onClick:function(){return ie(j)},children:"leave group"})})]})]})]})},K=n(9434),P=n(8385),H=function(e){var t=e.messages,n=(0,a.g)().user;return(0,O.jsx)(P.Z,{className:"messagesbody",children:t&&t.map((function(e,r){return(0,O.jsxs)("div",{style:{display:"flex"},children:[((0,U.Bs)(t,e,r,n._id)||(0,U.Iq)(t,r,n._id))&&(0,O.jsx)(m.u,{label:e.sender.pseudo,hasArrow:!0,children:(0,O.jsx)(b.q,{marginTop:"7px",marginRight:1,size:"sm",cursor:"pointer",name:"message.sender.name",src:e.sender.picture})}),(0,O.jsx)("span",{style:{backgroundColor:"".concat(e.sender._id===n._id?"var(--color-white)":"#B9F5D0"),borderRadius:"10px",padding:"5px 15px",maxWidth:"75%",minWidth:"60px",marginLeft:(0,U.o3)(t,e,r,n._id),marginTop:(0,U.ZW)(t,e,r,n._id)?3:10,color:"".concat(e.sender._id===n._id?"var(--color-name)":"black")},children:e.message})]},e._id)}))})},J=n(8789),Q=function(e){var t=e.fetchAgain,n=e.setfetchAgain,s=e.socket,m=(0,o.useState)([]),g=(0,i.Z)(m,2),v=g[0],j=g[1],w=(0,o.useState)(!1),C=(0,i.Z)(w,2),y=C[0],Z=C[1],k=(0,o.useState)(),_=(0,i.Z)(k,2),I=_[0],A=_[1],N=(0,o.useState)(!1),F=(0,i.Z)(N,2),L=F[0],R=F[1],G=(0,o.useState)(),D=(0,i.Z)(G,2),W=D[0],B=D[1],T=(0,K.I0)(),X=(0,K.v9)((function(e){return e.OnlineUsers})),P=(0,x.p)(),Q=(0,a.g)(),V=Q.setSelectedChat,ee=Q.selectedChat,te=Q.user,ne=Q.setChats,re=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee){e.next=2;break}return e.abrupt("return");case 2:return Z(!0),e.next=5,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/message/").concat(ee._id),withCredentials:!0}).then((function(e){var t=e.data;j(t),Z(!1),s.emit("join chat",ee._id,te._id)})).catch((function(e){Z(!1),P({title:"error occured",description:"fail to load the messages",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/chat"),withCredentials:!0}).then((function(e){var t=e.data;T(J.X.GetAll(t)),ne(t)})).catch((function(e){P({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){re(),B({user:te,selectedChatCompre:r=ee})}),[ee]),(0,o.useEffect)((function(){s.on("message received",(function(e){ie(),r&&r._id===e.chat._id&&e.sender._id!==te._id&&j([].concat((0,u.Z)(v),[e]))}))})),(0,o.useEffect)((function(){s.on("istyping",(function(e){var t;e.user._id!==te._id&&e.selectedChatCompre._id===(null===(t=r)||void 0===t?void 0:t._id)&&R(!0)})),s.on("isnottyping",(function(e){R(!1)}))}));var oe=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||!I){e.next=5;break}return s.emit("notyping",W),A(""),e.next=5,(0,p.Z)({method:"post",url:"".concat(M.L,"/api/message"),withCredentials:!0,data:{message:I,chatId:ee._id,type:"msg",incomming:!1}}).then((function(e){var t=e.data;s.emit("new message",t),j([].concat((0,u.Z)(v),[t])),ie()})).catch((function(e){P({title:"error occured",description:"fail to send the message",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(""),s.emit("notyping",W),e.next=4,(0,p.Z)({method:"post",url:"".concat(M.L,"/api/message"),withCredentials:!0,data:{message:I,chatId:ee._id,type:"msg",incomming:!1}}).then((function(e){var t=e.data;s.emit("new message",t),j([].concat((0,u.Z)(v),[t])),ie()})).catch((function(e){P({title:"warning",description:"can't send empty message ",status:"warning",duration:2e3,isClosable:!0,position:"bottom-left"})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,O.jsx)(O.Fragment,{children:ee?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(h.x,{fontSize:{base:"28px",md:"30px"},pb:3,px:2,width:"100%",display:"flex",justifyContent:{base:"space-between"},alignItems:"center",children:[(0,O.jsx)(z.h,{display:{base:"flex",md:"none"},icon:(0,O.jsx)("i",{className:"ri ri-arrow-left-line"}),onClick:function(){return V("")},color:"var(--color-name)",background:"var(--color-white)",_hover:{background:"var(--color-light)",color:"white",cursor:"pointer"}}),ee.isGroupChat?(0,O.jsxs)(O.Fragment,{children:[ee.chatName.toUpperCase(),(0,O.jsx)($,{fetchAgain:t,setfetchAgain:n,fetchMessages:re})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,O.jsx)(b.q,{src:(0,U.kR)(null===te||void 0===te?void 0:te._id,null===ee||void 0===ee?void 0:ee.users).picture}),(0,O.jsxs)("div",{children:[(0,O.jsx)(h.x,{fontSize:"1rem",color:"var(--color-name)",children:(0,U.kR)(null===te||void 0===te?void 0:te._id,null===ee||void 0===ee?void 0:ee.users).pseudo}),(0,U.Gg)((0,U.kR)(null===te||void 0===te?void 0:te._id,null===ee||void 0===ee?void 0:ee.users)._id,X)&&!L&&(0,O.jsx)(h.x,{fontSize:"0.7rem",color:"var(--color-name)",children:"Online"}),L&&(0,O.jsx)(h.x,{fontSize:"0.7rem",color:"blue",children:"Typing..."}),!L&&!(0,U.Gg)((0,U.kR)(null===te||void 0===te?void 0:te._id,null===ee||void 0===ee?void 0:ee.users)._id,X)&&(0,O.jsx)(h.x,{fontSize:"0.7rem",color:"var(--color-name)",children:(0,U.RX)(null===ee||void 0===ee?void 0:ee.updatedAt)})]})]}),(0,O.jsx)(q,{user:(0,U.kR)(null===te||void 0===te?void 0:te._id,null===ee||void 0===ee?void 0:ee.users)})]})]}),(0,O.jsxs)(c.xu,{display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:3,background:"var(--color-light)",width:"100%",height:"100%",overflowY:"hidden",children:[y?(0,O.jsx)(f.$,{size:"xl",alignSelf:"center",h:20,w:20,margin:"auto"}):(0,O.jsx)("div",{className:"messagesbody",children:(0,O.jsx)(H,{messages:v})}),!y&&(0,O.jsxs)(Y.NI,{onKeyDown:oe,isRequired:!0,mt:3,display:"flex",gap:2,children:[(0,O.jsx)(S.I,{variant:"filled",background:"var(--color-white)",placeholder:"enter a message .... ",onChange:function(e){A(e.target.value),s.emit("typing",W),setTimeout((function(){s.emit("notyping",W)}),3e3)},value:I,color:"var(--color-name)",_hover:{background:"var(--color-white)",color:"var(--color-name)"}}),(0,O.jsx)(E.z,{colorScheme:"blue",onClick:function(){return se()},children:"Send"})]})]})]}):(0,O.jsx)(c.xu,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:(0,O.jsx)(h.x,{fontSize:"2xl",color:"var(--color-name)",pb:3,children:"select chat to start chatting"})})})},V=function(e){var t=e.fetchAgain,n=e.setfetchAgain,r=e.socket,i=(0,a.g)().selectedChat;return(0,O.jsx)(c.xu,{display:{base:i?"flex":"none",md:"flex"},alignItems:"center",flexDirection:"column",p:3,background:"var(--color-white)",width:{base:"100%",md:"68%"},children:(0,O.jsx)(Q,{fetchAgain:t,setfetchAgain:n,socket:r})})},ee=n(3269),te=n(4706),ne=function(e){var t=e.children,n=(0,I.q)(),r=n.isOpen,s=n.onOpen,h=n.onClose,f=(0,o.useState)(),m=(0,i.Z)(f,2),g=m[0],v=m[1],b=(0,o.useState)([]),j=(0,i.Z)(b,2),w=j[0],C=j[1],Z=(0,o.useState)(""),z=(0,i.Z)(Z,2),L=z[0],q=z[1],G=(0,o.useState)([]),D=(0,i.Z)(G,2),W=D[0],T=D[1],U=(0,o.useState)(!1),$=(0,i.Z)(U,2),K=$[0],P=$[1],H=(0,x.p)(),J=(0,a.g)(),Q=J.user,V=J.chats,ee=J.setChats,te=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(t),t){e.next=3;break}return e.abrupt("return");case 3:return P(!0),e.prev=4,e.next=7,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/user/search/user?search=").concat(L),withCredentials:!0}).then((function(e){var t=e.data;P(!1);var n=t.filter((function(e){var t;return null===(t=e.following)||void 0===t?void 0:t.includes(Q._id)}));T(n)})).catch((function(e){P(!1),H({title:"error occured",description:"error to load the search results",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),H({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g&&0!==w.length){e.next=3;break}return H({title:"Please fill all the filds ",status:"warning",duration:5e3,isClosable:!0,position:"bottom-left"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,p.Z)({method:"post",url:"".concat(M.L,"/api/chat/group"),withCredentials:!0,data:{name:g,users:w}}).then((function(e){var t=e.data;ee([t].concat((0,u.Z)(V))),H({title:"Alert",description:"group create successfully ",status:"success",duration:5e3,isClosable:!0,position:"bottom-left"}),h()})).catch((function(e){var t=e.response;H({title:"error while creating group",description:t.data,status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),H({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(){return e.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("span",{onClick:s,children:t}),(0,O.jsxs)(A.u_,{isOpen:r,onClose:h,children:[(0,O.jsx)(y.Z,{}),(0,O.jsxs)(N.h,{children:[(0,O.jsx)(k.x,{sx:{display:"flex",justifyContent:"center",fontSize:"35px"},children:"create groupe chat"}),(0,O.jsx)(F.o,{}),(0,O.jsxs)(_.f,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,O.jsx)(Y.NI,{children:(0,O.jsx)(S.I,{placeholder:"Groupe name",mb:3,onChange:function(e){return v(e.target.value)}})}),(0,O.jsx)(Y.NI,{children:(0,O.jsx)(S.I,{placeholder:"users ex. janeiro ,mama,papa",mb:1,onChange:function(e){return te(e.target.value)}})}),(0,O.jsx)(c.xu,{display:"flex",flexWrap:"wrap",width:"100%",children:w.map((function(e){return(0,O.jsx)(X,{user:e,handleFunction:function(){return t=e,void C(w.filter((function(e){return e._id!==t._id})));var t}},e._id)}))}),K?(0,O.jsx)("div",{children:"Loading .... "}):null===W||void 0===W?void 0:W.slice(0,4).map((function(e){return(0,O.jsx)(B,{handleFunction:function(){return t=e,void(w.includes(t)?H({title:"".concat(t.pseudo," has already added"),status:"warning",duration:5e3,isClosable:!0,position:"bottom-left"}):(C([].concat((0,u.Z)(w),[t])),H({title:"".concat(t.pseudo," added"),status:"success",duration:5e3,isClosable:!0,position:"bottom-left"})));var t},user:e},e._id)}))]}),(0,O.jsx)(R.m,{children:(0,O.jsx)(E.z,{colorScheme:"blue",mr:3,onClick:ne,children:"Create Chat"})})]})]})]})},re=function(e){var t=e.fetchAgain,n=(0,K.v9)((function(e){return e.userInfo})),r=(0,o.useState)(),s=(0,i.Z)(r,2),u=s[0],f=s[1],m=(0,a.g)(),g=m.setSelectedChat,v=m.chats,j=m.setChats,w=m.selectedChat,C=(0,K.v9)((function(e){return e.OnlineUsers})),y=(0,x.p)(),Z=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Z)({method:"get",url:"".concat(M.L,"/api/chat"),withCredentials:!0}).then((function(e){var t=e.data;j(t)})).catch((function(e){y({title:"something went wrang try again",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),y({title:"something went wrang try again",status:"error",duration:2e3,isClosable:!0,position:"bottom-left"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){f(n),Z()}),[t]),(0,O.jsxs)(c.xu,{display:{base:w?"none":"flex",md:"flex"},flexDirection:"column",alignItems:"center",paddind:3,background:"var(--color-white)",width:{base:"100%",md:"31%"},overflowY:"hidden",children:[(0,O.jsxs)(c.xu,{px:3,pb:2,fontSize:{base:"20px",md:"25px"},display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"var(--color-name)",borderBottom:"1px solid var(--color-light)",children:["Chats",(0,O.jsx)(ne,{children:(0,O.jsx)(E.z,{h:"1.5rem",width:"0.5rem",fontSize:{base:"1rem",md:"1rem",lg:"1rem"},background:"var(--color-light)",_hover:{background:"var(--color-primary)",color:"white",cursor:"pointer"},children:(0,O.jsx)("i",{className:"ri ri-add-line"})})})]}),(0,O.jsx)(c.xu,{display:"flex",flexDirection:"column",paddind:3,width:"100%",height:"90%",borderRadius:"lg",overflowY:"hidden",children:v?(0,O.jsx)(ee.K,{overflowY:"scroll",className:"MyChats",padding:"5px",children:v.map((function(e){var t,r,i,o;return(0,O.jsxs)(c.xu,{onClick:function(){return g(e)},_hover:{background:"var(--color-primary)",color:"white",cursor:"pointer"},width:"100%",alignItems:"center",display:"flex",color:w===e?"white":"var(--color-name)",background:w===e?"#38b2ac":"var(--color-light)",px:3,py:2,mb:3,borderRadius:"lg",children:[(0,O.jsx)(b.q,{mr:2,size:"md",cursor:"pointer",name:e.isGroupChat?e.chatName:(0,U.kR)(null===u||void 0===u?void 0:u._id,null===e||void 0===e?void 0:e.users).pseudo,src:e.isGroupChat?" ":(0,U.kR)(null===u||void 0===u?void 0:u._id,null===e||void 0===e?void 0:e.users).picture,children:(0,O.jsx)(te.M,{boxSize:!e.isGroupChat&&(0,U.Gg)((0,U.kR)(null===u||void 0===u?void 0:u._id,null===e||void 0===e?void 0:e.users)._id,C)?"1rem":"0rem",bg:"green.500"})}),(0,O.jsxs)(c.xu,{width:"100%",children:[(0,O.jsxs)(c.xu,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,O.jsx)(h.x,{sx:{fontWeight:"bold",color:"var(--color-name)"},children:e.isGroupChat?e.chatName:(0,U.kR)(null===u||void 0===u?void 0:u._id,null===e||void 0===e?void 0:e.users).pseudo}),(0,O.jsx)("span",{style:{fontSize:"0.8rem"},children:(0,U.RX)(null===(t=e.latestMessage)||void 0===t?void 0:t.updatedAt)})]}),(0,O.jsxs)(c.xu,{display:"flex",fontSize:"sm",gap:1,children:[(0,O.jsx)(h.x,{children:(null===(r=e.latestMessage)||void 0===r?void 0:r.sender.pseudo)===n.pseudo?"You":null===(i=e.latestMessage)||void 0===i?void 0:i.sender.pseudo}),":",(0,O.jsx)(h.x,{children:(0,U.F8)(null===(o=e.latestMessage)||void 0===o?void 0:o.message)})]})]})]},e._id)}))}):(0,O.jsx)(W.Z,{})})]})},ie=n(2730),oe=n(4735),se=function(e){var t=e.socket;(0,o.useEffect)((function(){document.querySelector("body").removeAttribute("class"),localStorage.removeItem("chakra-ui-color-mode")}));var n=(0,a.g)().user,r=(0,o.useState)(!1),l=(0,i.Z)(r,2),u=l[0],d=l[1],h=(0,o.useState)(),p=(0,i.Z)(h,2),f=p[0],x=p[1];return(0,o.useEffect)((function(){var e=(0,ie.B1)({styles:{global:{body:{color:"var(--color-dark)",background:"var(--color-light)"}}},config:{initialColorMode:localStorage.getItem("chakra-ui-color-mode")||"var(--color-light)"}});x(e)}),[]),(0,o.useEffect)((function(){t&&n&&n.pseudo&&t.emit("newuser",n._id)}),[t,n.pseudo,n]),(0,O.jsx)(s.Z,{title:"messenger",children:(0,O.jsx)(oe.x,{theme:f,children:(0,O.jsxs)("div",{style:{width:"100%"},className:"messanger",children:[n&&(0,O.jsx)(T,{}),(0,O.jsxs)(c.xu,{sx:{display:"flex",justifyContent:"space-between",width:"100%",height:"91.5vh",background:"var(--color-light)",border:"2px solid var(--color-light)",gap:"0px"},children:[n&&(0,O.jsx)(re,{fetchAgain:u}),n&&(0,O.jsx)(V,{fetchAgain:u,setfetchAgain:d,socket:t})]})]})})})}}}]);
//# sourceMappingURL=583.1ff4be65.chunk.js.map