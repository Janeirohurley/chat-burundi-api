"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[463],{6463:function(n,t,o){o.d(t,{Z:function(){return A}});var i=o(4942),a=o(3366),r=o(7462),e=o(2791),s=o(4036),c=o(6248).Z,d=o(4419),l=o(6934),u=o(1402),g=o(6151),v=o(168),f=o(8182),h=o(2554),Z=o(5878),m=o(1217);function p(n){return(0,m.Z)("MuiCircularProgress",n)}(0,Z.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var I,S,k,P,b,x,w,y,L=o(184),M=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,R=(0,h.F4)(b||(b=I||(I=(0,v.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),E=(0,h.F4)(x||(x=S||(S=(0,v.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=(0,l.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,t){var o=n.ownerState;return[t.root,t[o.variant],t["color".concat((0,s.Z)(o.color))]]}})((function(n){var t=n.ownerState,o=n.theme;return(0,r.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:o.transitions.create("transform")},"inherit"!==t.color&&{color:(o.vars||o).palette[t.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,h.iv)(w||(w=k||(k=(0,v.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),R)})),j=(0,l.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,t){return t.svg}})({display:"block"}),z=(0,l.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,t){var o=n.ownerState;return[t.circle,t["circle".concat((0,s.Z)(o.variant))],o.disableShrink&&t.circleDisableShrink]}})((function(n){var t=n.ownerState,o=n.theme;return(0,r.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:o.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var t=n.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,h.iv)(y||(y=P||(P=(0,v.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),E)})),B=e.forwardRef((function(n,t){var o=(0,u.Z)({props:n,name:"MuiCircularProgress"}),i=o.className,e=o.color,c=void 0===e?"primary":e,l=o.disableShrink,g=void 0!==l&&l,v=o.size,h=void 0===v?40:v,Z=o.style,m=o.thickness,I=void 0===m?3.6:m,S=o.value,k=void 0===S?0:S,P=o.variant,b=void 0===P?"indeterminate":P,x=(0,a.Z)(o,M),w=(0,r.Z)({},o,{color:c,disableShrink:g,size:h,thickness:I,value:k,variant:b}),y=function(n){var t=n.classes,o=n.variant,i=n.color,a=n.disableShrink,r={root:["root",o,"color".concat((0,s.Z)(i))],svg:["svg"],circle:["circle","circle".concat((0,s.Z)(o)),a&&"circleDisableShrink"]};return(0,d.Z)(r,p,t)}(w),R={},E={},B={};if("determinate"===b){var N=2*Math.PI*((C-I)/2);R.strokeDasharray=N.toFixed(3),B["aria-valuenow"]=Math.round(k),R.strokeDashoffset="".concat(((100-k)/100*N).toFixed(3),"px"),E.transform="rotate(-90deg)"}return(0,L.jsx)(D,(0,r.Z)({className:(0,f.Z)(y.root,i),style:(0,r.Z)({width:h,height:h},E,Z),ownerState:w,ref:t,role:"progressbar"},B,x,{children:(0,L.jsx)(j,{className:y.svg,ownerState:w,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,L.jsx)(z,{className:y.circle,style:R,ownerState:w,cx:C,cy:C,r:(C-I)/2,fill:"none",strokeWidth:I})})}))}));function N(n){return(0,m.Z)("MuiLoadingButton",n)}var F=(0,Z.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),W=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],_=(0,l.ZP)(g.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,i.Z)({},"& .".concat(F.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,i.Z)({},"& .".concat(F.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,o=n.theme;return(0,r.Z)((0,i.Z)({},"& .".concat(F.startIconLoadingStart,", & .").concat(F.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,i.Z)({transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short})},"&.".concat(F.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,i.Z)({},"& .".concat(F.startIconLoadingStart,", & .").concat(F.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,i.Z)({},"& .".concat(F.startIconLoadingStart,", & .").concat(F.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}))})),q=(0,l.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var o=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,s.Z)(o.loadingPosition))]]}})((function(n){var t=n.theme,o=n.ownerState;return(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{left:"small"===o.size?10:14},"start"===o.loadingPosition&&"text"===o.variant&&{left:6},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{right:"small"===o.size?10:14},"end"===o.loadingPosition&&"text"===o.variant&&{right:6},"start"===o.loadingPosition&&o.fullWidth&&{position:"relative",left:-10},"end"===o.loadingPosition&&o.fullWidth&&{position:"relative",right:-10})})),A=e.forwardRef((function(n,t){var o=(0,u.Z)({props:n,name:"MuiLoadingButton"}),i=o.children,e=o.disabled,l=void 0!==e&&e,g=o.id,v=o.loading,f=void 0!==v&&v,h=o.loadingIndicator,Z=o.loadingPosition,m=void 0===Z?"center":Z,p=o.variant,I=void 0===p?"text":p,S=(0,a.Z)(o,W),k=c(g),P=null!=h?h:(0,L.jsx)(B,{"aria-labelledby":k,color:"inherit",size:16}),b=(0,r.Z)({},o,{disabled:l,loading:f,loadingIndicator:P,loadingPosition:m,variant:I}),x=function(n){var t=n.loading,o=n.loadingPosition,i=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,s.Z)(o))],endIcon:[t&&"endIconLoading".concat((0,s.Z)(o))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,s.Z)(o))]},e=(0,d.Z)(a,N,i);return(0,r.Z)({},i,e)}(b),w=f?(0,L.jsx)(q,{className:x.loadingIndicator,ownerState:b,children:P}):null;return(0,L.jsxs)(_,(0,r.Z)({disabled:l||f,id:k,ref:t},S,{variant:I,classes:x,ownerState:b,children:["end"===b.loadingPosition?i:w,"end"===b.loadingPosition?w:i]}))}))},6248:function(n,t,o){var i;o.d(t,{Z:function(){return c}});var a=o(9439),r=o(2791),e=0;var s=(i||(i=o.t(r,2))).useId;function c(n){if(void 0!==s){var t=s();return null!=n?n:t}return function(n){var t=r.useState(n),o=(0,a.Z)(t,2),i=o[0],s=o[1],c=n||i;return r.useEffect((function(){null==i&&s("mui-".concat(e+=1))}),[i]),c}(n)}}}]);
//# sourceMappingURL=463.822d0de2.chunk.js.map