"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[776],{4554:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(7462),r=t(3366),i=t(2791),a=t(8182),s=t(5917),l=t(104),u=t(8519),c=t(886),d=t(184),f=["className","component"];var p=t(5902),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,t=e.defaultClassName,p=void 0===t?"MuiBox-root":t,v=e.generateClassName,h=(0,s.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(l.Z);return i.forwardRef((function(e,t){var i=(0,c.Z)(n),s=(0,u.Z)(e),l=s.className,m=s.component,b=void 0===m?"div":m,g=(0,r.Z)(s,f);return(0,d.jsx)(h,(0,o.Z)({as:b,ref:t,className:(0,a.Z)(l,v?v(p):p),theme:i},g))}))}({defaultTheme:(0,t(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),h=v},6199:function(e,n,t){var o=t(2791).createContext({});n.Z=o},7527:function(e,n,t){t.d(n,{Z:function(){return ze}});var o=t(7462),r=t(3366),i=t(2791),a=(t(7441),t(8182)),s=t(4419),l=t(8301),u=t(6934),c=t(1402),d=t(6199),f=t(5878),p=t(1217);function v(e){return(0,p.Z)("MuiList",e)}(0,f.Z)("MuiList",["root","padding","dense","subheader"]);var h=t(184),m=["children","className","component","dense","disablePadding","subheader"],b=(0,u.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disablePadding&&n.padding,t.dense&&n.dense,t.subheader&&n.subheader]}})((function(e){var n=e.ownerState;return(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})})),g=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiList"}),l=t.children,u=t.className,f=t.component,p=void 0===f?"ul":f,g=t.dense,Z=void 0!==g&&g,y=t.disablePadding,E=void 0!==y&&y,x=t.subheader,P=(0,r.Z)(t,m),k=i.useMemo((function(){return{dense:Z}}),[Z]),w=(0,o.Z)({},t,{component:p,dense:Z,disablePadding:E}),R=function(e){var n=e.classes,t={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(t,v,n)}(w);return(0,h.jsx)(d.Z.Provider,{value:k,children:(0,h.jsxs)(b,(0,o.Z)({as:p,className:(0,a.Z)(R.root,u),ref:n,ownerState:w},P,{children:[x,l]}))})}));function Z(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}var y=Z,E=t(2071),x=t(162),P=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function k(e,n,t){return e===n?e.firstChild:n&&n.nextElementSibling?n.nextElementSibling:t?null:e.firstChild}function w(e,n,t){return e===n?t?e.firstChild:e.lastChild:n&&n.previousElementSibling?n.previousElementSibling:t?null:e.lastChild}function R(e,n){if(void 0===n)return!0;var t=e.innerText;return void 0===t&&(t=e.textContent),0!==(t=t.trim().toLowerCase()).length&&(n.repeating?t[0]===n.keys[0]:0===t.indexOf(n.keys.join("")))}function T(e,n,t,o,r,i){for(var a=!1,s=r(e,n,!!n&&t);s;){if(s===e.firstChild){if(a)return!1;a=!0}var l=!o&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&R(s,i)&&!l)return s.focus(),!0;s=r(e,s,t)}return!1}var M=i.forwardRef((function(e,n){var t=e.actions,a=e.autoFocus,s=void 0!==a&&a,u=e.autoFocusItem,c=void 0!==u&&u,d=e.children,f=e.className,p=e.disabledItemsFocusable,v=void 0!==p&&p,m=e.disableListWrap,b=void 0!==m&&m,Z=e.onKeyDown,M=e.variant,C=void 0===M?"selectedMenu":M,S=(0,r.Z)(e,P),F=i.useRef(null),N=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,x.Z)((function(){s&&F.current.focus()}),[s]),i.useImperativeHandle(t,(function(){return{adjustStyleForScrollbar:function(e,n){var t=!F.current.style.width;if(e.clientHeight<F.current.clientHeight&&t){var o="".concat(y((0,l.Z)(e)),"px");F.current.style["rtl"===n.direction?"paddingLeft":"paddingRight"]=o,F.current.style.width="calc(100% + ".concat(o,")")}return F.current}}}),[]);var A=(0,E.Z)(F,n),I=-1;i.Children.forEach(d,(function(e,n){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===C&&e.props.selected||-1===I)&&(I=n),I===n&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(I+=1)>=d.length&&(I=-1))}));var L=i.Children.map(d,(function(e,n){if(n===I){var t={};return c&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===C&&(t.tabIndex=0),i.cloneElement(e,t)}return e}));return(0,h.jsx)(g,(0,o.Z)({role:"menu",ref:A,className:f,onKeyDown:function(e){var n=F.current,t=e.key,o=(0,l.Z)(n).activeElement;if("ArrowDown"===t)e.preventDefault(),T(n,o,b,v,k);else if("ArrowUp"===t)e.preventDefault(),T(n,o,b,v,w);else if("Home"===t)e.preventDefault(),T(n,null,b,v,k);else if("End"===t)e.preventDefault(),T(n,null,b,v,w);else if(1===t.length){var r=N.current,i=t.toLowerCase(),a=performance.now();r.keys.length>0&&(a-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=a,r.keys.push(i);var s=o&&!r.repeating&&R(o,r);r.previousKeyMatched&&(s||T(n,o,!1,v,k,r))?e.preventDefault():r.previousKeyMatched=!1}Z&&Z(e)},tabIndex:s?0:-1},S,{children:L}))})),C=t(5527),S=t(9439),F=t(3981).Z,N=t(7979),A=N.Z,I=t(3208),L=t(7563),D=t(9723),O=t(8956);function j(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}}),(function(){}))}var B=t(4164),K=t(5721),z=t(2971);var H=i.forwardRef((function(e,n){var t=e.children,o=e.container,r=e.disablePortal,a=void 0!==r&&r,s=i.useState(null),l=(0,S.Z)(s,2),u=l[0],c=l[1],d=(0,L.Z)(i.isValidElement(t)?t.ref:null,n);if((0,K.Z)((function(){a||c(function(e){return"function"===typeof e?e():e}(o)||document.body)}),[o,a]),(0,K.Z)((function(){if(u&&!a)return(0,z.Z)(n,u),function(){(0,z.Z)(n,null)}}),[n,u,a]),a){if(i.isValidElement(t)){var f={ref:d};return i.cloneElement(t,f)}return(0,h.jsx)(i.Fragment,{children:t})}return(0,h.jsx)(i.Fragment,{children:u?B.createPortal(t,u):u})})),W=t(5671),U=t(3144),V=t(3433);function Y(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function _(e){return parseInt((0,N.Z)(e).getComputedStyle(e).paddingRight,10)||0}function q(e,n,t,o,r){var i=[n,t].concat((0,V.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===i.indexOf(e),t=!function(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}(e);n&&t&&Y(e,r)}))}function X(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function G(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,D.Z)(e);return n.body===e?(0,N.Z)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=Z((0,D.Z)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(_(o)+r,"px");var i=(0,D.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(i,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(_(e)+r,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=(0,D.Z)(o).body;else{var s=o.parentElement,l=(0,N.Z)(o);a="HTML"===(null==s?void 0:s.nodeName)&&"scroll"===l.getComputedStyle(s).overflowY?s:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var J=function(){function e(){(0,W.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,U.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&Y(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);q(n,e.mount,e.modalRef,o,!0);var r=X(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=X(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=G(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=X(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&Y(e.modalRef,n),q(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&Y(i.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),Q=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function $(e){var n=[],t=[];return Array.from(e.querySelectorAll(Q)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function ee(){return!0}var ne=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,a=void 0!==r&&r,s=e.disableRestoreFocus,l=void 0!==s&&s,u=e.getTabbable,c=void 0===u?$:u,d=e.isEnabled,f=void 0===d?ee:d,p=e.open,v=i.useRef(!1),m=i.useRef(null),b=i.useRef(null),g=i.useRef(null),Z=i.useRef(null),y=i.useRef(!1),E=i.useRef(null),x=(0,L.Z)(n.ref,E),P=i.useRef(null);i.useEffect((function(){p&&E.current&&(y.current=!o)}),[o,p]),i.useEffect((function(){if(p&&E.current){var e=(0,D.Z)(E.current);return E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),y.current&&E.current.focus()),function(){l||(g.current&&g.current.focus&&(v.current=!0,g.current.focus()),g.current=null)}}}),[p]),i.useEffect((function(){if(p&&E.current){var e=(0,D.Z)(E.current),n=function(n){var t=E.current;if(null!==t)if(e.hasFocus()&&!a&&f()&&!v.current){if(!t.contains(e.activeElement)){if(n&&Z.current!==n.target||e.activeElement!==Z.current)Z.current=null;else if(null!==Z.current)return;if(!y.current)return;var o=[];if(e.activeElement!==m.current&&e.activeElement!==b.current||(o=c(E.current)),o.length>0){var r,i,s=Boolean((null==(r=P.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=P.current)?void 0:i.key)),l=o[0],u=o[o.length-1];"string"!==typeof l&&"string"!==typeof u&&(s?u.focus():l.focus())}else t.focus()}}else v.current=!1},t=function(n){P.current=n,!a&&f()&&"Tab"===n.key&&e.activeElement===E.current&&n.shiftKey&&(v.current=!0,b.current&&b.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){e.activeElement&&"BODY"===e.activeElement.tagName&&n(null)}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,a,l,f,p,c]);var k=function(e){null===g.current&&(g.current=e.relatedTarget),y.current=!0};return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("div",{tabIndex:p?0:-1,onFocus:k,ref:m,"data-testid":"sentinelStart"}),i.cloneElement(n,{ref:x,onFocus:function(e){null===g.current&&(g.current=e.relatedTarget),y.current=!0,Z.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,h.jsx)("div",{tabIndex:p?0:-1,onFocus:k,ref:b,"data-testid":"sentinelEnd"})]})};function te(e){return(0,p.Z)("MuiModal",e)}(0,f.Z)("MuiModal",["root","hidden","backdrop"]);var oe=t(9732),re=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"];var ie=new J,ae=i.forwardRef((function(e,n){var t,a,l=e.children,u=e.closeAfterTransition,c=void 0!==u&&u,d=e.component,f=e.container,p=e.disableAutoFocus,v=void 0!==p&&p,m=e.disableEnforceFocus,b=void 0!==m&&m,g=e.disableEscapeKeyDown,Z=void 0!==g&&g,y=e.disablePortal,E=void 0!==y&&y,x=e.disableRestoreFocus,P=void 0!==x&&x,k=e.disableScrollLock,w=void 0!==k&&k,R=e.hideBackdrop,T=void 0!==R&&R,M=e.keepMounted,C=void 0!==M&&M,F=e.manager,N=void 0===F?ie:F,A=e.onBackdropClick,I=e.onClose,B=e.onKeyDown,K=e.open,z=e.onTransitionEnter,W=e.onTransitionExited,U=e.slotProps,V=void 0===U?{}:U,_=e.slots,q=void 0===_?{}:_,X=(0,r.Z)(e,re),G=i.useState(!K),J=(0,S.Z)(G,2),Q=J[0],$=J[1],ee=i.useRef({}),ae=i.useRef(null),se=i.useRef(null),le=(0,L.Z)(se,n),ue=function(e){return!!e&&e.props.hasOwnProperty("in")}(l),ce=null==(t=e["aria-hidden"])||t,de=function(){return ee.current.modalRef=se.current,ee.current.mountNode=ae.current,ee.current},fe=function(){N.mount(de(),{disableScrollLock:w}),se.current&&(se.current.scrollTop=0)},pe=(0,O.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(f)||(0,D.Z)(ae.current).body;N.add(de(),e),se.current&&fe()})),ve=i.useCallback((function(){return N.isTopModal(de())}),[N]),he=(0,O.Z)((function(e){ae.current=e,e&&se.current&&(K&&ve()?fe():Y(se.current,ce))})),me=i.useCallback((function(){N.remove(de(),ce)}),[N,ce]);i.useEffect((function(){return function(){me()}}),[me]),i.useEffect((function(){K?pe():ue&&c||me()}),[K,me,ue,c,pe]);var be=(0,o.Z)({},e,{closeAfterTransition:c,disableAutoFocus:v,disableEnforceFocus:b,disableEscapeKeyDown:Z,disablePortal:E,disableRestoreFocus:P,disableScrollLock:w,exited:Q,hideBackdrop:T,keepMounted:C}),ge=function(e){var n=e.open,t=e.exited,o={root:["root",!n&&t&&"hidden"],backdrop:["backdrop"]};return(0,s.Z)(o,te,void 0)}(be),Ze={};void 0===l.props.tabIndex&&(Ze.tabIndex="-1"),ue&&(Ze.onEnter=j((function(){$(!1),z&&z()}),l.props.onEnter),Ze.onExited=j((function(){$(!0),W&&W(),c&&me()}),l.props.onExited));var ye=null!=(a=null!=d?d:q.root)?a:"div",Ee=(0,oe.Z)({elementType:ye,externalSlotProps:V.root,externalForwardedProps:X,additionalProps:{ref:le,role:"presentation",onKeyDown:function(e){B&&B(e),"Escape"===e.key&&ve()&&(Z||(e.stopPropagation(),I&&I(e,"escapeKeyDown")))}},className:ge.root,ownerState:be}),xe=q.backdrop,Pe=(0,oe.Z)({elementType:xe,externalSlotProps:V.backdrop,additionalProps:{"aria-hidden":!0,onClick:function(e){e.target===e.currentTarget&&(A&&A(e),I&&I(e,"backdropClick"))},open:K},className:ge.backdrop,ownerState:be});return C||K||ue&&!Q?(0,h.jsx)(H,{ref:he,container:f,disablePortal:E,children:(0,h.jsxs)(ye,(0,o.Z)({},Ee,{children:[!T&&xe?(0,h.jsx)(xe,(0,o.Z)({},Pe)):null,(0,h.jsx)(ne,{disableEnforceFocus:b,disableAutoFocus:v,disableRestoreFocus:P,isEnabled:ve,open:K,children:i.cloneElement(l,Ze)})]}))}):null})),se=t(1503),le=t(627),ue=t(6752),ce=t(3967),de=t(4999),fe=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],pe={entering:{opacity:1},entered:{opacity:1}},ve=i.forwardRef((function(e,n){var t=(0,ce.Z)(),a={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=e.addEndListener,l=e.appear,u=void 0===l||l,c=e.children,d=e.easing,f=e.in,p=e.onEnter,v=e.onEntered,m=e.onEntering,b=e.onExit,g=e.onExited,Z=e.onExiting,y=e.style,x=e.timeout,P=void 0===x?a:x,k=e.TransitionComponent,w=void 0===k?ue.ZP:k,R=(0,r.Z)(e,fe),T=i.useRef(null),M=(0,E.Z)(T,c.ref,n),C=function(e){return function(n){if(e){var t=T.current;void 0===n?e(t):e(t,n)}}},S=C(m),F=C((function(e,n){(0,de.n)(e);var o=(0,de.C)({style:y,timeout:P,easing:d},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),p&&p(e,n)})),N=C(v),A=C(Z),I=C((function(e){var n=(0,de.C)({style:y,timeout:P,easing:d},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),b&&b(e)})),L=C(g);return(0,h.jsx)(w,(0,o.Z)({appear:u,in:f,nodeRef:T,onEnter:F,onEntered:N,onEntering:S,onExit:I,onExited:L,onExiting:A,addEndListener:function(e){s&&s(T.current,e)},timeout:P},R,{children:function(e,n){return i.cloneElement(c,(0,o.Z)({style:(0,o.Z)({opacity:0,visibility:"exited"!==e||f?void 0:"hidden"},pe[e],y,c.props.style),ref:M},n))}}))}));function he(e){return(0,p.Z)("MuiBackdrop",e)}(0,f.Z)("MuiBackdrop",["root","invisible"]);var me=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],be=(0,u.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,o.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),ge=i.forwardRef((function(e,n){var t,i,l,u=(0,c.Z)({props:e,name:"MuiBackdrop"}),d=u.children,f=u.className,p=u.component,v=void 0===p?"div":p,m=u.components,b=void 0===m?{}:m,g=u.componentsProps,Z=void 0===g?{}:g,y=u.invisible,E=void 0!==y&&y,x=u.open,P=u.slotProps,k=void 0===P?{}:P,w=u.slots,R=void 0===w?{}:w,T=u.TransitionComponent,M=void 0===T?ve:T,C=u.transitionDuration,S=(0,r.Z)(u,me),F=(0,o.Z)({},u,{component:v,invisible:E}),N=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,s.Z)(t,he,n)}(F),A=null!=(t=k.root)?t:Z.root;return(0,h.jsx)(M,(0,o.Z)({in:x,timeout:C},S,{children:(0,h.jsx)(be,(0,o.Z)({"aria-hidden":!0},A,{as:null!=(i=null!=(l=R.root)?l:b.Root)?i:v,className:(0,a.Z)(N.root,f,null==A?void 0:A.className),ownerState:(0,o.Z)({},F,null==A?void 0:A.ownerState),classes:N,ref:n,children:d}))}))})),Ze=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],ye=(0,u.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),Ee=(0,u.ZP)(ge,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),xe=i.forwardRef((function(e,n){var t,s,l,u,d,f,p=(0,c.Z)({name:"MuiModal",props:e}),v=p.BackdropComponent,m=void 0===v?Ee:v,b=p.BackdropProps,g=p.classes,Z=p.className,y=p.closeAfterTransition,E=void 0!==y&&y,x=p.children,P=p.component,k=p.components,w=void 0===k?{}:k,R=p.componentsProps,T=void 0===R?{}:R,M=p.disableAutoFocus,C=void 0!==M&&M,F=p.disableEnforceFocus,N=void 0!==F&&F,A=p.disableEscapeKeyDown,I=void 0!==A&&A,L=p.disablePortal,D=void 0!==L&&L,O=p.disableRestoreFocus,j=void 0!==O&&O,B=p.disableScrollLock,K=void 0!==B&&B,z=p.hideBackdrop,H=void 0!==z&&z,W=p.keepMounted,U=void 0!==W&&W,V=p.slotProps,Y=p.slots,_=p.theme,q=(0,r.Z)(p,Ze),X=i.useState(!0),G=(0,S.Z)(X,2),J=G[0],Q=G[1],$={closeAfterTransition:E,disableAutoFocus:C,disableEnforceFocus:N,disableEscapeKeyDown:I,disablePortal:D,disableRestoreFocus:j,disableScrollLock:K,hideBackdrop:H,keepMounted:U},ee=(0,o.Z)({},p,$,{exited:J}),ne=null!=(t=null!=(s=null==Y?void 0:Y.root)?s:w.Root)?t:ye,te=null!=(l=null!=(u=null==Y?void 0:Y.backdrop)?u:w.Backdrop)?l:m,oe=null!=(d=null==V?void 0:V.root)?d:T.root,re=null!=(f=null==V?void 0:V.backdrop)?f:T.backdrop;return(0,h.jsx)(ae,(0,o.Z)({slots:{root:ne,backdrop:te},slotProps:{root:function(){return(0,o.Z)({},(0,se.Z)(oe,ee),!(0,le.Z)(ne)&&{as:P,theme:_},{className:(0,a.Z)(Z,null==oe?void 0:oe.className,null==g?void 0:g.root,!ee.open&&ee.exited&&(null==g?void 0:g.hidden))})},backdrop:function(){return(0,o.Z)({},b,(0,se.Z)(re,ee),{className:(0,a.Z)(null==re?void 0:re.className,null==g?void 0:g.backdrop)})}},onTransitionEnter:function(){return Q(!1)},onTransitionExited:function(){return Q(!0)},ref:n},q,$,{children:x}))}));function Pe(e){return(0,p.Z)("MuiPopover",e)}(0,f.Z)("MuiPopover",["root","paper"]);var ke=["onEntering"],we=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function Re(e,n){var t=0;return"number"===typeof n?t=n:"center"===n?t=e.height/2:"bottom"===n&&(t=e.height),t}function Te(e,n){var t=0;return"number"===typeof n?t=n:"center"===n?t=e.width/2:"right"===n&&(t=e.width),t}function Me(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function Ce(e){return"function"===typeof e?e():e}var Se=(0,u.ZP)(xe,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),Fe=(0,u.ZP)(C.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,n){return n.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ne=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiPopover"}),u=t.action,d=t.anchorEl,f=t.anchorOrigin,p=void 0===f?{vertical:"top",horizontal:"left"}:f,v=t.anchorPosition,m=t.anchorReference,b=void 0===m?"anchorEl":m,g=t.children,Z=t.className,y=t.container,x=t.elevation,P=void 0===x?8:x,k=t.marginThreshold,w=void 0===k?16:k,R=t.open,T=t.PaperProps,M=void 0===T?{}:T,C=t.transformOrigin,N=void 0===C?{vertical:"top",horizontal:"left"}:C,L=t.TransitionComponent,D=void 0===L?I.Z:L,O=t.transitionDuration,j=void 0===O?"auto":O,B=t.TransitionProps,K=(void 0===B?{}:B).onEntering,z=(0,r.Z)(t.TransitionProps,ke),H=(0,r.Z)(t,we),W=i.useRef(),U=(0,E.Z)(W,M.ref),V=(0,o.Z)({},t,{anchorOrigin:p,anchorReference:b,elevation:P,marginThreshold:w,PaperProps:M,transformOrigin:N,TransitionComponent:D,transitionDuration:j,TransitionProps:z}),Y=function(e){var n=e.classes;return(0,s.Z)({root:["root"],paper:["paper"]},Pe,n)}(V),_=i.useCallback((function(){if("anchorPosition"===b)return v;var e=Ce(d),n=(e&&1===e.nodeType?e:(0,l.Z)(W.current).body).getBoundingClientRect();return{top:n.top+Re(n,p.vertical),left:n.left+Te(n,p.horizontal)}}),[d,p.horizontal,p.vertical,v,b]),q=i.useCallback((function(e){return{vertical:Re(e,N.vertical),horizontal:Te(e,N.horizontal)}}),[N.horizontal,N.vertical]),X=i.useCallback((function(e){var n={width:e.offsetWidth,height:e.offsetHeight},t=q(n);if("none"===b)return{top:null,left:null,transformOrigin:Me(t)};var o=_(),r=o.top-t.vertical,i=o.left-t.horizontal,a=r+n.height,s=i+n.width,l=A(Ce(d)),u=l.innerHeight-w,c=l.innerWidth-w;if(r<w){var f=r-w;r-=f,t.vertical+=f}else if(a>u){var p=a-u;r-=p,t.vertical+=p}if(i<w){var v=i-w;i-=v,t.horizontal+=v}else if(s>c){var h=s-c;i-=h,t.horizontal+=h}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:Me(t)}}),[d,b,_,q,w]),G=i.useState(R),J=(0,S.Z)(G,2),Q=J[0],$=J[1],ee=i.useCallback((function(){var e=W.current;if(e){var n=X(e);null!==n.top&&(e.style.top=n.top),null!==n.left&&(e.style.left=n.left),e.style.transformOrigin=n.transformOrigin,$(!0)}}),[X]);i.useEffect((function(){R&&ee()})),i.useImperativeHandle(u,(function(){return R?{updatePosition:function(){ee()}}:null}),[R,ee]),i.useEffect((function(){if(R){var e=F((function(){ee()})),n=A(d);return n.addEventListener("resize",e),function(){e.clear(),n.removeEventListener("resize",e)}}}),[d,R,ee]);var ne=j;"auto"!==j||D.muiSupportAuto||(ne=void 0);var te=y||(d?(0,l.Z)(Ce(d)).body:void 0);return(0,h.jsx)(Se,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(Y.root,Z),container:te,open:R,ref:n,ownerState:V},H,{children:(0,h.jsx)(D,(0,o.Z)({appear:!0,in:R,onEntering:function(e,n){K&&K(e,n),ee()},onExited:function(){$(!1)},timeout:ne},z,{children:(0,h.jsx)(Fe,(0,o.Z)({elevation:P},M,{ref:U,className:(0,a.Z)(Y.paper,M.className)},Q?void 0:{style:(0,o.Z)({},M.style,{opacity:0})},{ownerState:V,children:g}))}))}))}));function Ae(e){return(0,p.Z)("MuiMenu",e)}(0,f.Z)("MuiMenu",["root","paper","list"]);var Ie=["onEntering"],Le=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],De={vertical:"top",horizontal:"right"},Oe={vertical:"top",horizontal:"left"},je=(0,u.ZP)(Ne,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),Be=(0,u.ZP)(C.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,n){return n.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Ke=(0,u.ZP)(M,{name:"MuiMenu",slot:"List",overridesResolver:function(e,n){return n.list}})({outline:0}),ze=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiMenu"}),l=t.autoFocus,u=void 0===l||l,d=t.children,f=t.disableAutoFocusItem,p=void 0!==f&&f,v=t.MenuListProps,m=void 0===v?{}:v,b=t.onClose,g=t.open,Z=t.PaperProps,y=void 0===Z?{}:Z,E=t.PopoverClasses,x=t.transitionDuration,P=void 0===x?"auto":x,k=t.TransitionProps,w=(void 0===k?{}:k).onEntering,R=t.variant,T=void 0===R?"selectedMenu":R,M=(0,r.Z)(t.TransitionProps,Ie),C=(0,r.Z)(t,Le),S=(0,ce.Z)(),F="rtl"===S.direction,N=(0,o.Z)({},t,{autoFocus:u,disableAutoFocusItem:p,MenuListProps:m,onEntering:w,PaperProps:y,transitionDuration:P,TransitionProps:M,variant:T}),A=function(e){var n=e.classes;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},Ae,n)}(N),I=u&&!p&&g,L=i.useRef(null),D=-1;return i.Children.map(d,(function(e,n){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===T&&e.props.selected||-1===D)&&(D=n))})),(0,h.jsx)(je,(0,o.Z)({onClose:b,anchorOrigin:{vertical:"bottom",horizontal:F?"right":"left"},transformOrigin:F?De:Oe,PaperProps:(0,o.Z)({component:Be},y,{classes:(0,o.Z)({},y.classes,{root:A.paper})}),className:A.root,open:g,ref:n,transitionDuration:P,TransitionProps:(0,o.Z)({onEntering:function(e,n){L.current&&L.current.adjustStyleForScrollbar(e,S),w&&w(e,n)}},M),ownerState:N},C,{classes:E,children:(0,h.jsx)(Ke,(0,o.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),b&&b(e,"tabKeyDown"))},actions:L,autoFocus:u&&(-1===D||p),autoFocusItem:I,variant:T},m,{className:(0,a.Z)(A.list,m.className),children:d}))}))}))},8301:function(e,n,t){var o=t(9723);n.Z=o.Z},162:function(e,n,t){var o=t(5721);n.Z=o.Z},3981:function(e,n,t){function o(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){e.apply(o,i)}),t)}return o.clear=function(){clearTimeout(n)},o}t.d(n,{Z:function(){return o}})},7979:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(9723);function r(e){return(0,o.Z)(e).defaultView||window}}}]);
//# sourceMappingURL=776.de1457da.chunk.js.map