"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[875],{1875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var r=n(1292),o=n(5043),i=n(8387),s=n(8610),a=n(4535),d=n(6431);const l=o.createContext({});var c=n(2532),p=n(2372);function u(e){return(0,p.Ay)("MuiList",e)}(0,c.A)("MuiList",["root","padding","dense","subheader"]);var m=n(579);const y=(0,a.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:e=>{let{ownerState:t}=e;return!t.disablePadding},style:{paddingTop:8,paddingBottom:8}},{props:e=>{let{ownerState:t}=e;return t.subheader},style:{paddingTop:0}}]}),g=o.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiList"}),{children:r,className:a,component:c="ul",dense:p=!1,disablePadding:g=!1,subheader:h,...f}=n,b=o.useMemo((()=>({dense:p})),[p]),v={...n,component:c,dense:p,disablePadding:g},x=(e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e,i={root:["root",!n&&"padding",r&&"dense",o&&"subheader"]};return(0,s.A)(i,u,t)})(v);return(0,m.jsx)(l.Provider,{value:b,children:(0,m.jsxs)(y,{as:c,className:(0,i.A)(x.root,a),ref:t,ownerState:v,...f,children:[h,r]})})}));const h=function(e){return"string"===typeof e};var f=n(6262);function b(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)}const v=b;var x=n(5849);function A(e){return(0,p.Ay)("MuiListItem",e)}(0,c.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const S=(0,c.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function w(e){return(0,p.Ay)("MuiListItemSecondaryAction",e)}(0,c.A)("MuiListItemSecondaryAction",["root","disableGutters"]);const j=(0,a.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:e=>{let{ownerState:t}=e;return t.disableGutters},style:{right:0}}]}),k=o.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:r,...a}=n,c=o.useContext(l),p={...n,disableGutters:c.disableGutters},u=(e=>{const{disableGutters:t,classes:n}=e,r={root:["root",t&&"disableGutters"]};return(0,s.A)(r,w,n)})(p);return(0,m.jsx)(j,{className:(0,i.A)(u.root,r),ownerState:p,ref:t,...a})}));k.muiName="ListItemSecondaryAction";const $=k,N=(0,a.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.hasSecondaryAction&&t.secondaryAction]}})((0,f.A)((e=>{let{theme:t}=e;return{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:e=>{let{ownerState:t}=e;return!t.disablePadding},style:{paddingTop:8,paddingBottom:8}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&t.dense},style:{paddingTop:4,paddingBottom:4}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!!t.secondaryAction},style:{paddingRight:48}},{props:e=>{let{ownerState:t}=e;return!!t.secondaryAction},style:{[`& > .${S.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return t.button},style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:e=>{let{ownerState:t}=e;return t.hasSecondaryAction},style:{paddingRight:48}}]}}))),G=(0,a.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),I=o.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiListItem"}),{alignItems:r="center",children:a,className:c,component:p,components:u={},componentsProps:y={},ContainerComponent:g="li",ContainerProps:{className:f,...b}={},dense:S=!1,disableGutters:w=!1,disablePadding:j=!1,divider:k=!1,secondaryAction:I,slotProps:L={},slots:M={},...P}=n,R=o.useContext(l),C=o.useMemo((()=>({dense:S||R.dense||!1,alignItems:r,disableGutters:w})),[r,R.dense,S,w]),T=o.useRef(null),E=o.Children.toArray(a),D=E.length&&v(E[E.length-1],["ListItemSecondaryAction"]),O={...n,alignItems:r,dense:C.dense,disableGutters:w,disablePadding:j,divider:k,hasSecondaryAction:D},B=(e=>{const{alignItems:t,classes:n,dense:r,disableGutters:o,disablePadding:i,divider:a,hasSecondaryAction:d}=e,l={root:["root",r&&"dense",!o&&"gutters",!i&&"padding",a&&"divider","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction"],container:["container"]};return(0,s.A)(l,A,n)})(O),W=(0,x.A)(T,t),z=M.root||u.Root||N,F=L.root||y.root||{},_={className:(0,i.A)(B.root,F.className,c),...P};let V=p||"li";return D?(V=_.component||p?V:"div","li"===g&&("li"===V?V="div":"li"===_.component&&(_.component="div")),(0,m.jsx)(l.Provider,{value:C,children:(0,m.jsxs)(G,{as:g,className:(0,i.A)(B.container,f),ref:W,ownerState:O,...b,children:[(0,m.jsx)(z,{...F,...!h(z)&&{as:V,ownerState:{...O,...F.ownerState}},..._,children:E}),E.pop()]})})):(0,m.jsx)(l.Provider,{value:C,children:(0,m.jsxs)(z,{...F,as:V,ref:W,...!h(z)&&{ownerState:{...O,...F.ownerState}},..._,children:[E,I&&(0,m.jsx)($,{children:I})]})})}));var L=n(1640),M=n(2919),P=n(3693),R=n(8698),C=n(3216);const T=(e,t,n)=>{const r=e.keys[0];if(Array.isArray(t))t.forEach(((t,r)=>{n(((t,n)=>{r<=e.keys.length-1&&(0===r?Object.assign(t,n):t[e.up(e.keys[r])]=n)}),t)}));else if(t&&"object"===typeof t){(Object.keys(t).length>e.keys.length?e.keys:(o=e.keys,i=Object.keys(t),o.filter((e=>i.includes(e))))).forEach((o=>{if(e.keys.includes(o)){const i=t[o];void 0!==i&&n(((t,n)=>{r===o?Object.assign(t,n):t[e.up(o)]=n}),i)}}))}else"number"!==typeof t&&"string"!==typeof t||n(((e,t)=>{Object.assign(e,t)}),t);var o,i};function E(e){return`--Grid-${e}Spacing`}function D(e){return`--Grid-parent-${e}Spacing`}const O="--Grid-columns",B="--Grid-parent-columns",W=e=>{let{theme:t,ownerState:n}=e;const r={};return T(t.breakpoints,n.size,((e,t)=>{let n={};"grow"===t&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof t&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(${B}) - (var(${B}) - ${t}) * (var(${D("column")}) / var(${B})))`}),e(r,n)})),r},z=e=>{let{theme:t,ownerState:n}=e;const r={};return T(t.breakpoints,n.offset,((e,t)=>{let n={};"auto"===t&&(n={marginLeft:"auto"}),"number"===typeof t&&(n={marginLeft:0===t?"0px":`calc(100% * ${t} / var(${B}) + var(${D("column")}) * ${t} / var(${B}))`}),e(r,n)})),r},F=e=>{let{theme:t,ownerState:n}=e;if(!n.container)return{};const r={[O]:12};return T(t.breakpoints,n.columns,((e,t)=>{const n=t??12;e(r,{[O]:n,"> *":{[B]:n}})})),r},_=e=>{let{theme:t,ownerState:n}=e;if(!n.container)return{};const r={};return T(t.breakpoints,n.rowSpacing,((e,n)=>{const o="string"===typeof n?n:t.spacing?.(n);e(r,{[E("row")]:o,"> *":{[D("row")]:o}})})),r},V=e=>{let{theme:t,ownerState:n}=e;if(!n.container)return{};const r={};return T(t.breakpoints,n.columnSpacing,((e,n)=>{const o="string"===typeof n?n:t.spacing?.(n);e(r,{[E("column")]:o,"> *":{[D("column")]:o}})})),r},q=e=>{let{theme:t,ownerState:n}=e;if(!n.container)return{};const r={};return T(t.breakpoints,n.direction,((e,t)=>{e(r,{flexDirection:t})})),r},J=e=>{let{ownerState:t}=e;return{minWidth:0,boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",...t.wrap&&"wrap"!==t.wrap&&{flexWrap:t.wrap},gap:`var(${E("row")}) var(${E("column")})`}}},Q=e=>{const t=[];return Object.entries(e).forEach((e=>{let[n,r]=e;!1!==r&&void 0!==r&&t.push(`grid-${n}-${String(r)}`)})),t},U=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function n(e){return void 0!==e&&("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e&&e>0)}if(n(e))return[`spacing-${t}-${String(e)}`];if("object"===typeof e&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach((e=>{let[r,o]=e;n(o)&&t.push(`spacing-${r}-${String(o)}`)})),t}return[]},K=e=>void 0===e?[]:"object"===typeof e?Object.entries(e).map((e=>{let[t,n]=e;return`direction-${t}-${n}`})):[`direction-xs-${String(e)}`],Y=(0,C.A)(),H=(0,L.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function X(e){return(0,M.A)({props:e,name:"MuiGrid",defaultTheme:Y})}const Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=H,useThemeProps:n=X,componentName:r="MuiGrid"}=e;function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const r={};return null===e||(Array.isArray(e)?e.forEach(((e,o)=>{null!==e&&n(e)&&t.keys[o]&&(r[t.keys[o]]=e)})):"object"===typeof e?Object.keys(e).forEach((t=>{const o=e[t];null!==o&&void 0!==o&&n(o)&&(r[t]=o)})):r[t.keys[0]]=e),r}const d=t(F,V,_,W,q,J,z),l=o.forwardRef((function(e,t){const l=(0,P.A)(),c=n(e),u=(0,R.A)(c),{className:y,children:g,columns:h=12,container:f=!1,component:v="div",direction:x="row",wrap:A="wrap",size:S={},offset:w={},spacing:j=0,rowSpacing:k=j,columnSpacing:$=j,unstable_level:N=0,...G}=u,I=a(S,l.breakpoints,(e=>!1!==e)),L=a(w,l.breakpoints),M=e.columns??(N?void 0:h),C=e.spacing??(N?void 0:j),T=e.rowSpacing??e.spacing??(N?void 0:k),E=e.columnSpacing??e.spacing??(N?void 0:$),D={...u,level:N,columns:M,container:f,direction:x,wrap:A,spacing:C,rowSpacing:T,columnSpacing:E,size:I,offset:L},O=((e,t)=>{const{container:n,direction:o,spacing:i,wrap:a,size:d}=e,l={root:["root",n&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...K(o),...Q(d),...n?U(i,t.breakpoints.keys[0]):[]]};return(0,s.A)(l,(e=>(0,p.Ay)(r,e)),{})})(D,l);return(0,m.jsx)(d,{ref:t,as:v,ownerState:D,className:(0,i.A)(O.root,y),...G,children:o.Children.map(g,(e=>o.isValidElement(e)&&b(e,["Grid"])&&f&&e.props.container?o.cloneElement(e,{unstable_level:e.props?.unstable_level??N+1}):e))})}));return l.muiName="Grid",l}({createStyledComponent:(0,a.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,d.b)({props:e,name:"MuiGrid2"})});const ee=Z;var te=n(835),ne=n(5475),re=n(7353),oe=n(3618);function ie(e){return(0,p.Ay)("MuiListItemText",e)}const se=(0,c.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ae=(0,a.Ay)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${se.primary}`]:t.primary},{[`& .${se.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${oe.A.root}:where(& .${se.primary})`]:{display:"block"},[`.${oe.A.root}:where(& .${se.secondary})`]:{display:"block"},variants:[{props:e=>{let{ownerState:t}=e;return t.primary&&t.secondary},style:{marginTop:6,marginBottom:6}},{props:e=>{let{ownerState:t}=e;return t.inset},style:{paddingLeft:56}}]}),de=o.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiListItemText"}),{children:a,className:c,disableTypography:p=!1,inset:u=!1,primary:y,primaryTypographyProps:g,secondary:h,secondaryTypographyProps:f,...b}=n,{dense:v}=o.useContext(l);let x=null!=y?y:a,A=h;const S={...n,disableTypography:p,inset:u,primary:!!x,secondary:!!A,dense:v},w=(e=>{const{classes:t,inset:n,primary:r,secondary:o,dense:i}=e,a={root:["root",n&&"inset",i&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,s.A)(a,ie,t)})(S);return null==x||x.type===r.A||p||(x=(0,m.jsx)(r.A,{variant:v?"body2":"body1",className:w.primary,component:g?.variant?void 0:"span",...g,children:x})),null==A||A.type===r.A||p||(A=(0,m.jsx)(r.A,{variant:"body2",className:w.secondary,color:"textSecondary",...f,children:A})),(0,m.jsxs)(ae,{className:(0,i.A)(w.root,c),ownerState:S,ref:t,...b,children:[x,A]})})),le=()=>(0,m.jsx)(re.A,{children:(0,m.jsx)(g,{children:[{companyName:"Accenture Coimbatore",duration:"(March 2023 - Present)",role:"Data Engineer",position:"Application Development Analyst",description:"Working on data integration and analysis projects."},{companyName:"Accenture Coimbatore",duration:"(June 2021 - February 2023)",role:"Data Engineer",position:"Application Development Associate",description:"Developed ETL pipelines and data warehousing solutions."}].map(((e,t)=>(0,m.jsx)(I,{disablePadding:!0,children:(0,m.jsxs)(re.A,{sx:{width:"100%"},children:[(0,m.jsx)(de,{primary:(0,m.jsxs)(r.A,{children:[(0,m.jsxs)("b",{children:[e.companyName,":"]})," ",e.role," - ",e.position]}),secondary:e.duration}),e.description&&(0,m.jsx)(r.A,{variant:"body2",color:"textSecondary",sx:{mt:1},children:e.description})]})},t)))})}),ce=()=>(0,m.jsx)(re.A,{children:(0,m.jsx)(g,{children:[{title:"Banking Data Integration for BANK OF AMERICA",description:"Consolidated diverse datasets, ensuring they met stringent quality standards for high-impact banking projects."},{title:"SQL DDL Automation",description:"Achieved a 97% reduction in manual effort by automating SQL file generation for extensive databases, improving team efficiency and accuracy."},{title:"NiFi Data Pipelines",description:"Designed and managed data flows for historical and incremental loads, encompassing full data lifecycle processes like mapping, cleansing, and validation."},{title:"Vendor Collaboration",description:"Maintained clear communication with vendors, gathering requirements, providing updates, and promptly addressing project issues."}].map(((e,t)=>(0,m.jsx)(I,{children:(0,m.jsxs)(re.A,{sx:{width:"100%"},children:[(0,m.jsx)(de,{primary:(0,m.jsx)(r.A,{variant:"body1",fontWeight:"bold",children:e.title})}),e.description&&(0,m.jsx)(r.A,{variant:"body2",color:"textSecondary",sx:{mt:1},children:e.description})]})},t)))})});var pe=n(4899);const ue=()=>{const{pathname:e}=(0,te.zy)(),{ABOUT:t,PROJECTS:n}=pe.A.ROUTES,[i,s]=(0,o.useState)(e||t),a=[{label:"Work Experience",path:t},{label:"Projects",path:n}];console.log({currentPage:i,pathname:e}),(0,o.useEffect)((()=>{s(e)}),[e]);return(0,m.jsxs)(ee,{container:!0,spacing:2,children:[(0,m.jsxs)(ee,{sx:{flex:.3,display:{xs:"none",sm:"block"}},children:[(0,m.jsx)(r.A,{color:"textDisabled",fontWeight:700,variant:"h6",textAlign:"start",paddingLeft:2,paddingTop:1,children:"About"}),(0,m.jsx)(g,{children:a.map((e=>(0,m.jsx)(I,{sx:{py:0},children:(0,m.jsx)(ne.N_,{to:null===e||void 0===e?void 0:e.path,replace:!0,children:(0,m.jsx)(r.A,{sx:{py:.5,cursor:"pointer",color:(null===e||void 0===e?void 0:e.path)===i?"black":"GrayText",":hover":{color:"black"}},fontWeight:600,children:null===e||void 0===e?void 0:e.label})})})))})]}),(0,m.jsx)(ee,{sx:{flex:1},children:{[t]:(0,m.jsx)(le,{}),[n]:(0,m.jsx)(ce,{})}[i]})]})}}}]);
//# sourceMappingURL=875.5dcc10b3.chunk.js.map