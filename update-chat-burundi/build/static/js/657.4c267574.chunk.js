"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[657],{367:function(e,s,n){n(2791);var r=n(184);s.Z=function(e){return document.title="Chat Burundi - "+e.title,(0,r.jsx)("div",{className:"w-100",children:e.children})}},2657:function(e,s,n){n.r(s),n.d(s,{default:function(){return N}});var r=n(4942),t=n(1413),a=n(9439),o=n(2791),i=n(367),c="styles_container_signup__lUPAv",d="styles_signup_form_container__dSvJw",l="styles_left__bhVDC",u="styles_right__LmyOv",p="styles_form_container__7nShI",h="styles_input__9PJxg",m="styles_error_msg__hIxyp",_="styles_checkbox__tA3fR",w="styles_green_btn__mprLP",x="styles_white_button__M22lK",f=n(1087),g=n(1440),j=n(1243),v=n(6463),y=n(4212),C=n(184),N=function(){var e=(0,o.useState)({pseudo:"",password:"",email:"",confirmnewpassword:""}),s=(0,a.Z)(e,2),n=s[0],N=s[1],k=(0,o.useState)(""),Z=(0,a.Z)(k,2),b=Z[0],S=Z[1],T=(0,o.useState)(!1),q=(0,a.Z)(T,2),A=q[0],L=q[1],P=(0,o.useState)(!1),U=(0,a.Z)(P,2),B=U[0],D=U[1],F=function(e){var s=e.currentTarget;N((0,t.Z)((0,t.Z)({},n),{},(0,r.Z)({},s.name,s.value)))},I=function(e){"checked"===e?L(!0):"notchecked"===e&&L(!1)};return(0,C.jsx)(i.Z,{title:"Signup",children:(0,C.jsx)("div",{className:c,children:(0,C.jsxs)("div",{className:d,children:[(0,C.jsxs)("div",{className:l,children:[(0,C.jsx)("h1",{children:"Welcome Back"}),(0,C.jsx)(f.rU,{to:"/login",children:(0,C.jsx)("button",{className:x,children:"Sign in"})})]}),(0,C.jsx)("div",{className:u,children:(0,C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),D(!0),n.password!==n.confirmnewpassword&&(S("password are not equal"),setTimeout((function(){S("")}),5e3)),n.password===n.confirmnewpassword&&(0,j.Z)({method:"post",url:"".concat(y.L,"/api/user/register"),withCredentials:!0,data:n}).then((function(e){e.data.errors&&(D(!1),e.data.errors.pseudo&&(S(e.data.errors.pseudo),console.log(e.data.errors.pseudo),setTimeout((function(){S("")}),5e3)),e.data.errors.email&&(S(e.data.errors.email),setTimeout((function(){S("")}),5e3)),e.data.errors.password&&(S(e.data.errors.password),setTimeout((function(){S("")}),5e3))),e.data.errors||setTimeout((function(){document.title="Redirecting.....",window.location="/login"}),5e3)})).catch((function(e){D(!1),S(e.message)}))},className:p,children:[(0,C.jsx)("h1",{children:"Create Account"}),(0,C.jsx)("input",{type:"text",placeholder:"User name",name:"pseudo",value:n.pseudo,required:!0,className:h,onChange:F}),(0,C.jsx)("input",{type:"email",placeholder:"Enter your email",name:"email",value:n.email,required:!0,className:h,onChange:F}),(0,C.jsx)("input",{type:A?"text":"password",placeholder:"Create password",name:"password",value:n.password,required:!0,className:h,onChange:F}),(0,C.jsx)("input",{type:A?"text":"password",placeholder:"Confirm your new password",name:"confirmnewpassword",value:n.confirmnewpassword,required:!0,className:h,onChange:F}),(0,C.jsx)("div",{className:_,children:A?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.Z,{checked:!0,onClick:function(){return I("notchecked")}}),(0,C.jsx)("p",{children:"hide password"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.Z,{onClick:function(){return I("checked")}}),(0,C.jsx)("p",{children:"show password"})]})}),b&&(0,C.jsx)("div",{className:m,children:b}),(0,C.jsx)("button",{type:"submit",className:w,children:(0,C.jsx)(v.Z,{loading:B,sx:{padding:"0px",height:"10px",color:"white",textTransform:"lowercase"},children:"Sign up"})})]})})]})})})}}}]);
//# sourceMappingURL=657.4c267574.chunk.js.map