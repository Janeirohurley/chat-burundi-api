"use strict";(self.webpackChunkupdate_chat_burundi=self.webpackChunkupdate_chat_burundi||[]).push([[34],{1034:function(e,t,a){a.d(t,{Z:function(){return N}});var o=a(4942),n=a(3366),c=a(7462),r=a(2791),i=a(8182),d=a(4419),s=a(2065),l=a(4036),u=a(9439),h=a(6934),p=a(4556);var v=r.createContext(void 0);var m=a(3701),g=a(5878),f=a(1217);function b(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,g.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=a(184),k=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],w=(0,h.ZP)(m.Z)((function(e){var t=e.ownerState;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),S=(0,h.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=r.forwardRef((function(e,t){var a=e.autoFocus,o=e.checked,s=e.checkedIcon,h=e.className,m=e.defaultChecked,g=e.disabled,f=e.disableFocusRipple,x=void 0!==f&&f,y=e.edge,C=void 0!==y&&y,R=e.icon,z=e.id,B=e.inputProps,F=e.inputRef,P=e.name,I=e.onBlur,N=e.onChange,j=e.onFocus,M=e.readOnly,O=e.required,q=void 0!==O&&O,_=e.tabIndex,T=e.type,D=e.value,E=(0,n.Z)(e,k),A=(0,p.Z)({controlled:o,default:Boolean(m),name:"SwitchBase",state:"checked"}),L=(0,u.Z)(A,2),X=L[0],$=L[1],G=r.useContext(v),H=g;G&&"undefined"===typeof H&&(H=G.disabled);var J="checkbox"===T||"radio"===T,K=(0,c.Z)({},e,{checked:X,disabled:H,disableFocusRipple:x,edge:C}),Q=function(e){var t=e.classes,a=e.checked,o=e.disabled,n=e.edge,c={root:["root",a&&"checked",o&&"disabled",n&&"edge".concat((0,l.Z)(n))],input:["input"]};return(0,d.Z)(c,b,t)}(K);return(0,Z.jsxs)(w,(0,c.Z)({component:"span",className:(0,i.Z)(Q.root,h),centerRipple:!0,focusRipple:!x,disabled:H,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),G&&G.onFocus&&G.onFocus(e)},onBlur:function(e){I&&I(e),G&&G.onBlur&&G.onBlur(e)},ownerState:K,ref:t},E,{children:[(0,Z.jsx)(S,(0,c.Z)({autoFocus:a,checked:o,defaultChecked:m,className:Q.input,disabled:H,id:J?z:void 0,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;$(t),N&&N(e,t)}},readOnly:M,ref:F,required:q,ownerState:K,tabIndex:_,type:T},"checkbox"===T&&void 0===D?{}:{value:D},B)),X?s:R]}))})),y=a(1402);function C(e){return(0,f.Z)("MuiSwitch",e)}var R=(0,g.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),z=["className","color","edge","size","sx"],B=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat((0,l.Z)(a.edge))],t["size".concat((0,l.Z)(a.size))]]}})((function(e){var t,a=e.ownerState;return(0,c.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},(0,o.Z)(t,"& .".concat(R.thumb),{width:16,height:16}),(0,o.Z)(t,"& .".concat(R.switchBase),(0,o.Z)({padding:4},"&.".concat(R.checked),{transform:"translateX(16px)"})),t))})),F=(0,h.ZP)(x,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,(0,o.Z)({},"& .".concat(R.input),t.input),"default"!==a.color&&t["color".concat((0,l.Z)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat("light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},(0,o.Z)(t,"&.".concat(R.checked),{transform:"translateX(20px)"}),(0,o.Z)(t,"&.".concat(R.disabled),{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat("light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600])}),(0,o.Z)(t,"&.".concat(R.checked," + .").concat(R.track),{opacity:.5}),(0,o.Z)(t,"&.".concat(R.disabled," + .").concat(R.track),{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat("light"===a.palette.mode?.12:.2)}),(0,o.Z)(t,"& .".concat(R.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,n=e.ownerState;return(0,c.Z)({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,o.Z)(t,"&.".concat(R.checked),(0,o.Z)({color:(a.vars||a).palette[n.color].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[n.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(R.disabled),{color:a.vars?a.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===a.palette.mode?(0,s.$n)(a.palette[n.color].main,.62):(0,s._j)(a.palette[n.color].main,.55))})),(0,o.Z)(t,"&.".concat(R.checked," + .").concat(R.track),{backgroundColor:(a.vars||a).palette[n.color].main}),t))})),P=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),I=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),N=r.forwardRef((function(e,t){var a=(0,y.Z)({props:e,name:"MuiSwitch"}),o=a.className,r=a.color,s=void 0===r?"primary":r,u=a.edge,h=void 0!==u&&u,p=a.size,v=void 0===p?"medium":p,m=a.sx,g=(0,n.Z)(a,z),f=(0,c.Z)({},a,{color:s,edge:h,size:v}),b=function(e){var t=e.classes,a=e.edge,o=e.size,n=e.color,r=e.checked,i=e.disabled,s={root:["root",a&&"edge".concat((0,l.Z)(a)),"size".concat((0,l.Z)(o))],switchBase:["switchBase","color".concat((0,l.Z)(n)),r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,d.Z)(s,C,t);return(0,c.Z)({},t,u)}(f),k=(0,Z.jsx)(I,{className:b.thumb,ownerState:f});return(0,Z.jsxs)(B,{className:(0,i.Z)(b.root,o),sx:m,ownerState:f,children:[(0,Z.jsx)(F,(0,c.Z)({type:"checkbox",icon:k,checkedIcon:k,ref:t,ownerState:f},g,{classes:(0,c.Z)({},b,{root:b.switchBase})})),(0,Z.jsx)(P,{className:b.track,ownerState:f})]})}))},4556:function(e,t,a){var o=a(8959);t.Z=o.Z},8959:function(e,t,a){a.d(t,{Z:function(){return c}});var o=a(9439),n=a(2791);function c(e){var t=e.controlled,a=e.default,c=(e.name,e.state,n.useRef(void 0!==t).current),r=n.useState(a),i=(0,o.Z)(r,2),d=i[0],s=i[1];return[c?t:d,n.useCallback((function(e){c||s(e)}),[])]}}}]);
//# sourceMappingURL=34.fc53d50a.chunk.js.map