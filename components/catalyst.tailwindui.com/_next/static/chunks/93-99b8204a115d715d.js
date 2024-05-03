"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{622:function(e,t,n){var r=n(2265),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,u={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:u,_owner:i.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},7437:function(e,t,n){e.exports=n(622)},1129:function(e,t,n){n.r(t),n.d(t,{Button:function(){return s}});var r=n(6014),o=n(8415),u=n(2265),l=n(7661),i=n(8279),a=n(1931);let s=(0,a.yV)(function(e,t){var n,s;let c=(0,i.B)(),{disabled:d=c||!1,...f}=e,{isFocusVisible:m,focusProps:v}=(0,r.Fx)({autoFocus:null!=(n=e.autoFocus)&&n}),{isHovered:p,hoverProps:h}=(0,o.XI)({isDisabled:d}),{pressed:E,pressProps:g}=(0,l.x)({disabled:d}),b=(0,a.dG)({ref:t,disabled:d||void 0,type:null!=(s=f.type)?s:"button"},v,h,g),w=(0,u.useMemo)(()=>{var t;return{disabled:d,hover:p,focus:m,active:E,autofocus:null!=(t=e.autoFocus)&&t}},[d,p,m,E,e.autoFocus]);return(0,a.sY)({ourProps:b,theirProps:f,slot:w,defaultTag:"button",name:"Button"})})},8056:function(e,t,n){n.r(t),n.d(t,{DataInteractive:function(){return s}});var r=n(6014),o=n(8415),u=n(2265),l=n(7661),i=n(1931);let a=u.Fragment,s=(0,i.yV)(function(e,t){let{...n}=e,{isFocusVisible:s,focusProps:c}=(0,r.Fx)(),{isHovered:d,hoverProps:f}=(0,o.XI)({isDisabled:!1}),{pressed:m,pressProps:v}=(0,l.x)({disabled:!1}),p=(0,i.dG)({ref:t},c,f,v),h=(0,u.useMemo)(()=>({hover:d,focus:s,active:m}),[d,s,m]);return(0,i.sY)({ourProps:p,theirProps:n,slot:h,defaultTag:a,name:"DataInteractive"})})},4523:function(e,t,n){n.r(t),n.d(t,{Description:function(){return m},useDescribedBy:function(){return d},useDescriptions:function(){return f}});var r=n(2265),o=n(4623),u=n(5606),l=n(2600),i=n(6618),a=n(8279),s=n(1931);let c=(0,r.createContext)(null);function d(){var e,t;return null!=(t=null==(e=(0,r.useContext)(c))?void 0:e.value)?t:void 0}function f(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,o.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),u=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props,value:e.value}),[n,e.slot,e.name,e.props,e.value]);return r.createElement(c.Provider,{value:u},e.children)},[t])]}c.displayName="DescriptionContext";let m=Object.assign((0,s.yV)(function(e,t){let n=(0,u.M)(),o=(0,a.B)(),{id:d=`headlessui-description-${n}`,...f}=e,m=function e(){let t=(0,r.useContext)(c);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),v=(0,i.T)(t);(0,l.e)(()=>m.register(d),[d,m.register]);let p=o||!1,h=(0,r.useMemo)(()=>({...m.slot,disabled:p}),[m.slot,p]),E={ref:v,...m.props,id:d};return(0,s.sY)({ourProps:E,theirProps:f,slot:h,defaultTag:"p",name:m.name||"Description"})}),{})},8130:function(e,t,n){n.d(t,{i:function(){return C},v:function(){return F}});var r,o,u=n(2265),l=n(2769),i=n(4623),a=n(6890),s=n(634),c=n(3051),d=n(7728),f=n(8957),m=n(6618),v=n(7976),p=((r=p||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function h(e,t){let n=(0,u.useRef)([]),r=(0,i.z)(e);(0,u.useEffect)(()=>{let e=[...n.current];for(let[o,u]of t.entries())if(n.current[o]!==u){let o=r(t,e);return n.current=t,o}},[r,...t])}var E=n(8227);let g=[];!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&g[0]!==e.target&&(g.unshift(e.target),(g=g.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var b=n(5410),w=n(597),y=n(5195),T=n(1931);function L(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var F=((o=F||{})[o.None=1]="None",o[o.InitialFocus=2]="InitialFocus",o[o.TabLock=4]="TabLock",o[o.FocusLock=8]="FocusLock",o[o.RestoreFocus=16]="RestoreFocus",o[o.AutoFocus=32]="AutoFocus",o[o.All=30]="All",o);let C=Object.assign((0,T.yV)(function(e,t){let n,r=(0,u.useRef)(null),o=(0,m.T)(r,t),{initialFocus:F,initialFocusFallback:C,containers:x,features:S=30,...O}=e;(0,f.H)()||(S=1);let M=(0,d.i)(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,u.useRef)(g.slice());return h(([e],[n])=>{!0===n&&!1===e&&(0,y.Y)(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=g.slice())},[e,g,t]),(0,i.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);h(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,b.C5)(n())},[t]),(0,c.L)(()=>{t&&(0,b.C5)(n())})}({ownerDocument:M},!!(16&S));let A=function({ownerDocument:e,container:t,initialFocus:n,initialFocusFallback:r},o){let l=!!(2&o),i=(0,u.useRef)(null),a=(0,s.t)();return h(()=>{if(!l){null!=r&&r.current&&(0,b.C5)(r.current);return}let u=t.current;u&&(0,y.Y)(()=>{if(!a.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){i.current=t;return}}else if(u.contains(t)){i.current=t;return}if(null!=n&&n.current)(0,b.C5)(n.current);else{if(32&o){if((0,b.jA)(u,b.TO.First|b.TO.AutoFocus)!==b.fE.Error)return}else if((0,b.jA)(u,b.TO.First)!==b.fE.Error)return;if(null!=r&&r.current&&((0,b.C5)(r.current),(null==e?void 0:e.activeElement)===r.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}i.current=null==e?void 0:e.activeElement})},[r,l,o]),i}({ownerDocument:M,container:r,initialFocus:F,initialFocusFallback:C},S);!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let u=(0,s.t)();(0,a.O)(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!u.current)return;let l=L(n);t.current instanceof HTMLElement&&l.add(t.current);let i=r.current;if(!i)return;let a=e.target;a&&a instanceof HTMLElement?P(l,a)?(r.current=a,(0,b.C5)(a)):(e.preventDefault(),e.stopPropagation(),(0,b.C5)(i)):(0,b.C5)(r.current)},!0)}({ownerDocument:M,container:r,containers:x,previousActiveElement:A},!!(8&S));let N=(n=(0,u.useRef)(0),(0,v.s)("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),k=(0,i.z)(e=>{let t=r.current;t&&(0,w.E)(N.current,{[p.Forwards]:()=>{(0,b.jA)(t,b.TO.First,{skipElements:[e.relatedTarget,C]})},[p.Backwards]:()=>{(0,b.jA)(t,b.TO.Last,{skipElements:[e.relatedTarget,C]})}})}),R=(0,l.G)(),H=(0,u.useRef)(!1);return u.createElement(u.Fragment,null,!!(4&S)&&u.createElement(E._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:k,features:E.x.Focusable}),(0,T.sY)({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(H.current=!0,R.requestAnimationFrame(()=>{H.current=!1}))},onBlur(e){if(!(8&S))return;let t=L(x);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(P(t,n)||(H.current?(0,b.jA)(r.current,(0,w.E)(N.current,{[p.Forwards]:()=>b.TO.Next,[p.Backwards]:()=>b.TO.Previous})|b.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,b.C5)(e.target)))}},theirProps:O,defaultTag:"div",name:"FocusTrap"}),!!(4&S)&&u.createElement(E._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:k,features:E.x.Focusable}))}),{features:F});function P(e,t){for(let n of e)if(n.contains(t))return!0;return!1}},3850:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},5555:function(e,t,n){n.r(t),n.d(t,{Label:function(){return p},useLabelContext:function(){return f},useLabelledBy:function(){return m},useLabels:function(){return v}});var r=n(2265),o=n(4623),u=n(5606),l=n(2600),i=n(6618),a=n(8279),s=n(7016),c=n(1931);let d=(0,r.createContext)(null);function f(){let e=(0,r.useContext)(d);if(null===e){let e=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return e}function m(e){var t,n,o;let u=null!=(n=null==(t=(0,r.useContext)(d))?void 0:t.value)?n:void 0;return(null!=(o=null==e?void 0:e.length)?o:0)>0?[u,...e].filter(Boolean).join(" "):u}function v({inherit:e=!1}={}){let t=m(),[n,u]=(0,r.useState)([]),l=e?[t,...n].filter(Boolean):n;return[l.length>0?l.join(" "):void 0,(0,r.useMemo)(()=>function(e){let t=(0,o.z)(e=>(u(t=>[...t,e]),()=>u(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),n=(0,r.useMemo)(()=>({register:t,slot:e.slot,name:e.name,props:e.props,value:e.value}),[t,e.slot,e.name,e.props,e.value]);return r.createElement(d.Provider,{value:n},e.children)},[u])]}d.displayName="LabelContext";let p=Object.assign((0,c.yV)(function(e,t){var n;let d=(0,u.M)(),m=f(),v=(0,s.Q)(),p=(0,a.B)(),{id:h=`headlessui-label-${d}`,htmlFor:E=null!=v?v:null==(n=m.props)?void 0:n.htmlFor,passive:g=!1,...b}=e,w=(0,i.T)(t);(0,l.e)(()=>m.register(h),[h,m.register]);let y=(0,o.z)(e=>{let t=e.currentTarget;if(t instanceof HTMLLabelElement&&e.preventDefault(),m.props&&"onClick"in m.props&&"function"==typeof m.props.onClick&&m.props.onClick(e),t instanceof HTMLLabelElement){let e=document.getElementById(t.htmlFor);if(e){let t=e.getAttribute("disabled");if("true"===t||""===t)return;let n=e.getAttribute("aria-disabled");if("true"===n||""===n)return;(e instanceof HTMLInputElement&&("radio"===e.type||"checkbox"===e.type)||"radio"===e.role||"checkbox"===e.role||"switch"===e.role)&&e.click(),e.focus({preventScroll:!0})}}}),T=p||!1,L=(0,r.useMemo)(()=>({...m.slot,disabled:T}),[m.slot,T]),F={ref:w,...m.props,id:h,htmlFor:E,onClick:y};return g&&("onClick"in F&&(delete F.htmlFor,delete F.onClick),"onClick"in b&&delete b.onClick),(0,c.sY)({ourProps:F,theirProps:b,slot:L,defaultTag:E?"label":"div",name:m.name||"Label"})}),{})},7250:function(e,t,n){n.d(t,{h_:function(){return b},kF:function(){return g}});var r=n(2265),o=n(4887),u=n(4623),l=n(2600),i=n(3051),a=n(7728),s=n(8957),c=n(6618),d=n(4705),f=n(2057),m=n(1931);let v=r.Fragment,p=r.Fragment,h=(0,r.createContext)(null),E=(0,r.createContext)(null);function g(){let e=(0,r.useContext)(E),t=(0,r.useRef)([]),n=(0,u.z)(n=>(t.current.push(n),e&&e.register(n),()=>o(n))),o=(0,u.z)(n=>{let r=t.current.indexOf(n);-1!==r&&t.current.splice(r,1),e&&e.unregister(n)}),l=(0,r.useMemo)(()=>({register:n,unregister:o,portals:t}),[n,o,t]);return[t,(0,r.useMemo)(()=>function({children:e}){return r.createElement(E.Provider,{value:l},e)},[l])]}let b=Object.assign((0,m.yV)(function(e,t){let n=(0,r.useRef)(null),u=(0,c.T)((0,c.h)(e=>{n.current=e}),t),p=(0,a.i)(n),g=function(e){let t=(0,d.n)(),n=(0,r.useContext)(h),o=(0,a.i)(e),[u,l]=(0,r.useState)(()=>{if(!t&&null!==n||f.O.isServer)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)});return(0,r.useEffect)(()=>{null!==u&&(null!=o&&o.body.contains(u)||null==o||o.body.appendChild(u))},[u,o]),(0,r.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),u}(n),[b]=(0,r.useState)(()=>{var e;return f.O.isServer?null:null!=(e=null==p?void 0:p.createElement("div"))?e:null}),w=(0,r.useContext)(E),y=(0,s.H)();return(0,l.e)(()=>{!g||!b||g.contains(b)||(b.setAttribute("data-headlessui-portal",""),g.appendChild(b))},[g,b]),(0,l.e)(()=>{if(b&&w)return w.register(b)},[w,b]),(0,i.L)(()=>{var e;g&&b&&(b instanceof Node&&g.contains(b)&&g.removeChild(b),g.childNodes.length<=0&&(null==(e=g.parentElement)||e.removeChild(g)))}),y&&g&&b?(0,o.createPortal)((0,m.sY)({ourProps:{ref:u},theirProps:e,slot:{},defaultTag:v,name:"Portal"}),b):null}),{Group:(0,m.yV)(function(e,t){let{target:n,...o}=e,u={ref:(0,c.T)(t)};return r.createElement(h.Provider,{value:n},(0,m.sY)({ourProps:u,theirProps:o,defaultTag:p,name:"Popover.Group"}))})})},2920:function(e,t,n){n.d(t,{u:function(){return N},x:function(){return A}});var r,o=n(2265),u=n(2769),l=n(4623),i=n(634),a=n(2600),s=n(1858),c=n(8957),d=n(6618),f=n(5390),m=n(597);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(5306),E=n(3960),g=n(1931);function b(e=""){return e.split(/\s+/).filter(e=>e.length>1)}let w=(0,o.createContext)(null);w.displayName="TransitionContext";var y=((r=y||{}).Visible="visible",r.Hidden="hidden",r);let T=(0,o.createContext)(null);function L(e){return"children"in e?L(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function F(e,t){let n=(0,s.E)(e),r=(0,o.useRef)([]),a=(0,i.t)(),c=(0,u.G)(),d=(0,l.z)((e,t=g.l4.Hidden)=>{let o=r.current.findIndex(({el:t})=>t===e);-1!==o&&((0,m.E)(t,{[g.l4.Unmount](){r.current.splice(o,1)},[g.l4.Hidden](){r.current[o].state="hidden"}}),c.microTask(()=>{var e;!L(r)&&a.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,l.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,g.l4.Unmount)}),v=(0,o.useRef)([]),p=(0,o.useRef)(Promise.resolve()),h=(0,o.useRef)({enter:[],leave:[],idle:[]}),E=(0,l.z)((e,n,r)=>{v.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{v.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(h.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?p.current=p.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,l.z)((e,t,n)=>{Promise.all(h.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=v.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:r,register:f,unregister:d,onStart:E,onStop:b,wait:p,chains:h}),[f,d,r,E,b,h,p])}function C(){}T.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function x(e){var t;let n={};for(let r of P)n[r]=null!=(t=e[r])?t:C;return n}let S=g.VN.RenderStrategy,O=(0,g.yV)(function(e,t){let{show:n,appear:r=!1,unmount:u=!0,...i}=e,s=(0,o.useRef)(null),f=(0,d.T)(s,t);(0,c.H)();let m=(0,h.oJ)();if(void 0===n&&null!==m&&(n=(m&h.ZM.Open)===h.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,p]=(0,o.useState)(n?"visible":"hidden"),E=F(()=>{p("hidden")}),[b,y]=(0,o.useState)(!0),C=(0,o.useRef)([n]);(0,a.e)(()=>{!1!==b&&C.current[C.current.length-1]!==n&&(C.current.push(n),y(!1))},[C,n]);let P=(0,o.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,a.e)(()=>{if(n)p("visible");else if(L(E)){let e=s.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&p("hidden")}else p("hidden")},[n,E]);let x={unmount:u},O=(0,l.z)(()=>{var t;b&&y(!1),null==(t=e.beforeEnter)||t.call(e)}),A=(0,l.z)(()=>{var t;b&&y(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(T.Provider,{value:E},o.createElement(w.Provider,{value:P},(0,g.sY)({ourProps:{...x,as:o.Fragment,children:o.createElement(M,{ref:f,...x,...i,beforeEnter:O,beforeLeave:A})},theirProps:{},defaultTag:o.Fragment,features:S,visible:"visible"===v,name:"Transition"})))}),M=(0,g.yV)(function(e,t){var n,r,y;let C;let{beforeEnter:P,afterEnter:O,beforeLeave:M,afterLeave:A,enter:N,enterFrom:k,enterTo:R,entered:H,leave:D,leaveFrom:_,leaveTo:I,...B}=e,z=(0,o.useRef)(null),V=(0,d.T)(z,t),j=null==(n=B.unmount)||n?g.l4.Unmount:g.l4.Hidden,{show:Y,appear:U,initial:G}=function(){let e=(0,o.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[W,Z]=(0,o.useState)(Y?"visible":"hidden"),q=function(){let e=(0,o.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:X,unregister:$}=q;(0,a.e)(()=>X(z),[X,z]),(0,a.e)(()=>{if(j===g.l4.Hidden&&z.current){if(Y&&"visible"!==W){Z("visible");return}return(0,m.E)(W,{hidden:()=>$(z),visible:()=>X(z)})}},[W,z,X,$,Y,j]);let K=(0,s.E)({base:b(B.className),enter:b(N),enterFrom:b(k),enterTo:b(R),entered:b(H),leave:b(D),leaveFrom:b(_),leaveTo:b(I)}),J=(y={beforeEnter:P,afterEnter:O,beforeLeave:M,afterLeave:A},C=(0,o.useRef)(x(y)),(0,o.useEffect)(()=>{C.current=x(y)},[y]),C),Q=(0,c.H)();(0,a.e)(()=>{if(Q&&"visible"===W&&null===z.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[z,W,Q]);let ee=U&&Y&&G,et=Q&&(!G||U)?Y?"enter":"leave":"idle",en=function(e=0){let[t,n]=(0,o.useState)(e),r=(0,i.t)(),u=(0,o.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),l=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:u,hasFlag:l,removeFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,l.z)(e=>(0,m.E)(e,{enter:()=>{en.addFlag(h.ZM.Opening),J.current.beforeEnter()},leave:()=>{en.addFlag(h.ZM.Closing),J.current.beforeLeave()},idle:()=>{}})),eo=(0,l.z)(e=>(0,m.E)(e,{enter:()=>{en.removeFlag(h.ZM.Opening),J.current.afterEnter()},leave:()=>{en.removeFlag(h.ZM.Closing),J.current.afterLeave()},idle:()=>{}})),eu=F(()=>{Z("hidden"),$(z)},q),el=(0,o.useRef)(!1);!function({immediate:e,container:t,direction:n,classes:r,onStart:o,onStop:l}){let c=(0,i.t)(),d=(0,u.G)(),h=(0,s.E)(n);(0,a.e)(()=>{e&&(h.current="enter")},[e]),(0,a.e)(()=>{let e=(0,f.k)();d.add(e.dispose);let n=t.current;if(n&&"idle"!==h.current&&c.current){var u,i,a;let t,s,c,d,E,g,b;return e.dispose(),o.current(h.current),e.add((u=r.current,i="enter"===h.current,a=()=>{e.dispose(),l.current(h.current)},s=i?"enter":"leave",c=(0,f.k)(),d=void 0!==a?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,a(...e)}):()=>{},"enter"===s&&(n.removeAttribute("hidden"),n.style.display=""),E=(0,m.E)(s,{enter:()=>u.enter,leave:()=>u.leave}),g=(0,m.E)(s,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),b=(0,m.E)(s,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),p(n,...u.base,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),v(n,...u.base,...E,...b),c.nextFrame(()=>{p(n,...u.base,...E,...b),v(n,...u.base,...E,...g),function(e,t){let n=(0,f.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[u,l]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),i=u+l;if(0!==i){let r=n.group(n=>{let o=n.setTimeout(()=>{t(),n.dispose()},i);n.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&(o(),n.addEventListener(e,"transitioncancel",e=>{e.target===e.currentTarget&&(t(),r())}))})});n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n.dispose())})}else t();n.add(()=>t()),n.dispose}(n,()=>(p(n,...u.base,...E),v(n,...u.base,...u.entered),d()))}),c.dispose)),e.dispose}},[n])}({immediate:ee,container:z,classes:K,direction:et,onStart:(0,s.E)(e=>{el.current=!0,eu.onStart(z,e,er)}),onStop:(0,s.E)(e=>{el.current=!1,eu.onStop(z,e,eo),"leave"!==e||L(eu)||(Z("hidden"),$(z))})});let ei=B;return ee?ei={...ei,className:(0,E.A)(B.className,...K.current.enter,...K.current.enterFrom)}:el.current&&(ei.className=(0,E.A)(B.className,null==(r=z.current)?void 0:r.className),""===ei.className&&delete ei.className),o.createElement(T.Provider,{value:eu},o.createElement(h.up,{value:(0,m.E)(W,{visible:h.ZM.Open,hidden:h.ZM.Closed})|en.flags},(0,g.sY)({ourProps:{ref:V},theirProps:ei,defaultTag:"div",features:S,visible:"visible"===W,name:"Transition.Child"})))}),A=(0,g.yV)(function(e,t){let n=null!==(0,o.useContext)(w),r=null!==(0,h.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(O,{ref:t,...e}):o.createElement(M,{ref:t,...e}))}),N=Object.assign(O,{Child:A,Root:O})},2138:function(e,t,n){let r,o;n.d(t,{I:function(){return E}});var u,l=n(2265),i=n.t(l,2);let{useState:a,useEffect:s,useLayoutEffect:c,useDebugValue:d}=i;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let f=i.useSyncExternalStore;var m=n(2600),v=n(5390),p=n(4644);let h=(u={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,v.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r;let o={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},u=[(0,p.gn)()?{before({doc:e,d:t,meta:n}){function r(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.microTask(()=>{var n;if("auto"!==window.getComputedStyle(e.documentElement).scrollBehavior){let n=(0,v.k)();n.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>n.dispose()))}let o=null!=(n=window.scrollY)?n:window.pageYOffset,u=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let n=t.target.closest("a");if(!n)return;let{hash:o}=new URL(n.href),l=e.querySelector(o);l&&!r(l)&&(u=l)}catch{}},!0),t.addEventListener(e,"touchstart",e=>{if(e.target instanceof HTMLElement){if(r(e.target)){let n=e.target;for(;n.parentElement&&r(n.parentElement);)n=n.parentElement;t.style(n,"overscrollBehavior","contain")}else t.style(e.target,"touchAction","none")}}),t.addEventListener(e,"touchmove",e=>{if(e.target instanceof HTMLElement){if(r(e.target)){let t=e.target;for(;t.parentElement&&""!==t.dataset.headlessuiPortal&&!(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth);)t=t.parentElement;""===t.dataset.headlessuiPortal&&e.preventDefault()}else e.preventDefault()}},{passive:!1}),t.add(()=>{var e;o!==(null!=(e=window.scrollY)?e:window.pageYOffset)&&window.scrollTo(0,o),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})})}}:{},{before({doc:e}){var t;let n=e.documentElement;r=Math.max(0,(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth)},after({doc:e,d:t}){let n=e.documentElement,o=Math.max(0,n.clientWidth-n.offsetWidth),u=Math.max(0,r-o);t.style(n,"paddingRight",`${u}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];u.forEach(({before:e})=>null==e?void 0:e(o)),u.forEach(({after:e})=>null==e?void 0:e(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=u[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});function E(e,t,n=()=>({containers:[]})){let r=f(h.subscribe,h.getSnapshot,h.getSnapshot),o=e?r.get(e):void 0,u=!!o&&o.count>0;return(0,m.e)(()=>{if(!(!e||!t))return h.dispatch("PUSH",e,n),()=>h.dispatch("POP",e,n)},[t,e]),u}h.subscribe(()=>{let e=h.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&h.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&h.dispatch("TEARDOWN",n)}})},7661:function(e,t,n){n.d(t,{x:function(){return i}});var r=n(2265),o=n(4851),u=n(2769),l=n(4623);function i({disabled:e=!1}={}){let t=(0,r.useRef)(null),[n,i]=(0,r.useState)(!1),a=(0,u.G)(),s=(0,l.z)(()=>{t.current=null,i(!1),a.dispose()}),c=(0,l.z)(e=>{if(a.dispose(),null===t.current){t.current=e.currentTarget,i(!0);{let n=(0,o.r)(e.currentTarget);a.addEventListener(n,"pointerup",s,!1),a.addEventListener(n,"pointermove",e=>{if(t.current){var n,r;let o,u;i((o=e.width/2,u=e.height/2,n={top:e.clientY-u,right:e.clientX+o,bottom:e.clientY+u,left:e.clientX-o},r=t.current.getBoundingClientRect(),!(!n||!r||n.right<r.left||n.left>r.right||n.bottom<r.top||n.top>r.bottom)))}},!1),a.addEventListener(n,"pointercancel",s,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:c,onPointerUp:s,onClick:s}}}},6890:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(2265),o=n(1858);function u(e,t,n,u){let l=(0,o.E)(n);(0,r.useEffect)(()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)},[e,t,u])}},5606:function(e,t,n){n.d(t,{M:function(){return a}});var r,o=n(2265),u=n(2057),l=n(2600),i=n(8957);let a=null!=(r=o.useId)?r:function(){let e=(0,i.H)(),[t,n]=o.useState(e?()=>u.O.nextId():null);return(0,l.e)(()=>{null===t&&n(u.O.nextId())},[t]),null!=t?""+t:void 0}},2086:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(2600);let o=new Map,u=new Map;function l(e,t=!0){(0,r.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let l=null!=(n=u.get(r))?n:0;return u.set(r,l+1),0!==l||(o.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=u.get(r))?e:1;if(1===t?u.delete(r):u.set(r,t-1),1!==t)return;let n=o.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,o.delete(r))}},[e,t])}},634:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(2265),o=n(2600);function u(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},3051:function(e,t,n){n.d(t,{L:function(){return l}});var r=n(2265),o=n(5195),u=n(4623);function l(e){let t=(0,u.z)(e),n=(0,r.useRef)(!1);(0,r.useEffect)(()=>(n.current=!1,()=>{n.current=!0,(0,o.Y)(()=>{n.current&&t()})}),[t])}},583:function(e,t,n){n.d(t,{O:function(){return s}});var r=n(2265),o=n(5410),u=n(4644),l=n(1858);function i(e,t,n){let o=(0,l.E)(t);(0,r.useEffect)(()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var a=n(7976);function s(e,t,n=!0){let l=(0,r.useRef)(!1);function s(n,r){if(!l.current||n.defaultPrevented)return;let u=r(n);if(null!==u&&u.getRootNode().contains(u)&&u.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(u)||n.composed&&n.composedPath().includes(e))return}return(0,o.sP)(u,o.tJ.Loose)||-1===u.tabIndex||n.preventDefault(),t(n,u)}}(0,r.useEffect)(()=>{requestAnimationFrame(()=>{l.current=n})},[n]);let c=(0,r.useRef)(null);i("pointerdown",e=>{var t,n;l.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),i("mousedown",e=>{var t,n;l.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),i("click",e=>{(0,u.tq)()||c.current&&(s(e,()=>c.current),c.current=null)},!0),i("touchend",e=>s(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,a.s)("blur",e=>s(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},7728:function(e,t,n){n.d(t,{i:function(){return u}});var r=n(2265),o=n(4851);function u(...e){return(0,r.useMemo)(()=>(0,o.r)(...e),[...e])}},9985:function(e,t,n){n.d(t,{v:function(){return i}});var r=n(2265),o=n(8227),u=n(4623),l=n(7728);function i({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var i;let a=(0,r.useRef)(null!=(i=null==n?void 0:n.current)?i:null),s=(0,l.i)(a),c=(0,u.z)(()=>{var n,r,o;let u=[];for(let t of e)null!==t&&(t instanceof HTMLElement?u.push(t):"current"in t&&t.current instanceof HTMLElement&&u.push(t.current));if(null!=t&&t.current)for(let e of t.current)u.push(e);for(let e of null!=(n=null==s?void 0:s.querySelectorAll("html > *, body > *"))?n:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(a.current)||e.contains(null==(o=null==(r=a.current)?void 0:r.getRootNode())?void 0:o.host)||u.some(t=>e.contains(t))||u.push(e));return u});return{resolveContainers:c,contains:(0,u.z)(e=>c().some(t=>t.contains(e))),mainTreeNodeRef:a,MainTreeNode:(0,r.useMemo)(()=>function(){return null!=n?null:r.createElement(o._,{features:o.x.Hidden,ref:a})},[a,n])}}},8957:function(e,t,n){n.d(t,{H:function(){return l}});var r,o=n(2265),u=n(2057);function l(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(o,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[l,i]=o.useState(u.O.isHandoffComplete);return l&&!1===u.O.isHandoffComplete&&i(!1),o.useEffect(()=>{!0!==l&&i(!0)},[l]),o.useEffect(()=>u.O.handoff(),[]),!t&&l}},6618:function(e,t,n){n.d(t,{T:function(){return i},h:function(){return l}});var r=n(2265),o=n(4623);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},7976:function(e,t,n){n.d(t,{s:function(){return u}});var r=n(2265),o=n(1858);function u(e,t,n){let u=(0,o.E)(t);(0,r.useEffect)(()=>{function t(e){u.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}},8279:function(e,t,n){n.d(t,{B:function(){return u},G:function(){return l}});var r=n(2265);let o=(0,r.createContext)(void 0);function u(){return(0,r.useContext)(o)}function l({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},1359:function(e,t,n){n.d(t,{Mt:function(){return f},wR:function(){return c},yd:function(){return d}});var r=n(2265),o=n(4887),u=n(2769),l=n(8871),i=n(1931),a=n(8227);let s=(0,r.createContext)(null);function c(e){let[t,n]=(0,r.useState)(null);return r.createElement(s.Provider,{value:{target:t}},e.children,r.createElement(a._,{features:a.x.Hidden,ref:n}))}function d({children:e}){let t=(0,r.useContext)(s);if(!t)return r.createElement(r.Fragment,null,e);let{target:n}=t;return n?(0,o.createPortal)(r.createElement(r.Fragment,null,e),n):null}function f({data:e,form:t,onReset:n}){let[o,s]=(0,r.useState)(null),c=(0,u.G)();return(0,r.useEffect)(()=>{if(n&&o)return c.addEventListener(o,"reset",n)},[o,t,n]),r.createElement(d,null,r.createElement(m,{setForm:s,formId:t}),(0,l.t)(e).map(([e,n])=>r.createElement(a._,{features:a.x.Hidden,...(0,i.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:t,name:e,value:n})})))}function m({setForm:e,formId:t}){return(0,r.useEffect)(()=>{if(t){let n=document.getElementById(t);n&&e(n)}},[e,t]),t?null:r.createElement(a._,{features:a.x.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:t=>{if(!t)return;let n=t.closest("form");n&&e(n)}})}},8227:function(e,t,n){n.d(t,{_:function(){return l},x:function(){return u}});var r,o=n(1931),u=((r=u||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let l=(0,o.yV)(function(e,t){var n;let{features:r=1,...u}=e,l={ref:t,"aria-hidden":(2&r)==2||(null!=(n=u["aria-hidden"])?n:void 0),style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:u,slot:{},defaultTag:"div",name:"Hidden"})})},7016:function(e,t,n){n.d(t,{Q:function(){return u},v:function(){return l}});var r=n(2265);let o=(0,r.createContext)(void 0);function u(){return(0,r.useContext)(o)}function l({id:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},5306:function(e,t,n){n.d(t,{ZM:function(){return l},oJ:function(){return i},up:function(){return a}});var r,o=n(2265);let u=(0,o.createContext)(null);u.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function i(){return(0,o.useContext)(u)}function a({value:e,children:t}){return o.createElement(u.Provider,{value:e},t)}},4705:function(e,t,n){n.d(t,{O:function(){return l},n:function(){return u}});var r=n(2265);let o=(0,r.createContext)(!1);function u(){return(0,r.useContext)(o)}function l(e){return r.createElement(o.Provider,{value:e.force},e.children)}},5863:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},5410:function(e,t,n){n.d(t,{C5:function(){return y},EO:function(){return L},TO:function(){return m},fE:function(){return v},jA:function(){return F},sP:function(){return g},tJ:function(){return E},wI:function(){return b},z2:function(){return T}});var r,o,u,l,i,a=n(5390),s=n(597),c=n(4851);let d=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),f=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var m=((r=m||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r[r.AutoFocus=64]="AutoFocus",r),v=((o=v||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),p=((u=p||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u);function h(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(d)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var E=((l=E||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function g(e,t=0){var n;return e!==(null==(n=(0,c.r)(e))?void 0:n.body)&&(0,s.E)(t,{0:()=>e.matches(d),1(){let t=e;for(;null!==t;){if(t.matches(d))return!0;t=t.parentElement}return!1}})}function b(e){let t=(0,c.r)(e);(0,a.k)().nextFrame(()=>{t&&!g(t.activeElement,0)&&y(e)})}var w=((i=w||{})[i.Keyboard=0]="Keyboard",i[i.Mouse=1]="Mouse",i);function y(e){null==e||e.focus({preventScroll:!0})}function T(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function L(e,t){return F(h(),t,{relativeTo:e})}function F(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var u,l,i;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?T(e):e:64&t?function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(f)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e):h(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.some(t=>null!=t&&"current"in t?(null==t?void 0:t.current)===e:t===e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=32&t?{preventScroll:!0}:{},v=0,p=s.length,E;do{if(v>=p||v+p<=0)return 0;let e=d+v;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(E=s[e])||E.focus(m),v+=c}while(E!==a.activeElement);return 6&t&&null!=(i=null==(l=null==(u=E)?void 0:u.matches)?void 0:l.call(u,"textarea,input"))&&i&&E.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},8871:function(e,t,n){function r(e,t){return e?e+"["+t+"]":t}function o(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}n.d(t,{g:function(){return o},t:function(){return function e(t={},n=null,o=[]){for(let[u,l]of Object.entries(t))!function t(n,o,u){if(Array.isArray(u))for(let[e,l]of u.entries())t(n,r(o,e.toString()),l);else u instanceof Date?n.push([o,u.toISOString()]):"boolean"==typeof u?n.push([o,u?"1":"0"]):"string"==typeof u?n.push([o,u]):"number"==typeof u?n.push([o,`${u}`]):null==u?n.push([o,""]):e(u,o,n)}(o,r(n,u),l);return o}}})},4851:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(2057);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},4644:function(e,t,n){function r(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function o(){return r()||/Android/gi.test(window.navigator.userAgent)}n.d(t,{gn:function(){return r},tq:function(){return o}})},7042:function(e,t,n){function r(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var u=t.length;for(n=0;n<u;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{W:function(){return r}}),t.Z=r}}]);