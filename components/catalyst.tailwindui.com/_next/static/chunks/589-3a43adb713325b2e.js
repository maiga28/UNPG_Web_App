"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{9752:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(2265),l=n(2600);function o(e,t=!0){let n=(0,r.useRef)({left:0,top:0});if((0,l.e)(()=>{let t=e.current;if(!t)return;let r=t.getBoundingClientRect();r&&(n.current=r)},[t]),null==e.current||!t||e.current===document.activeElement)return!1;let o=e.current.getBoundingClientRect();return o.top!==n.current.top||o.left!==n.current.left}},7984:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(2265),l=n(2600);function o(e){if(null===e)return{width:0,height:0};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function i(e,t=!1){let[n,i]=(0,r.useState)(()=>o(e.current));return(0,l.e)(()=>{let t=e.current;if(!t)return;let n=new ResizeObserver(()=>{i(o(t))});return n.observe(t),()=>{n.disconnect()}},[e]),t?{width:`${n.width}px`,height:`${n.height}px`}:n}},8076:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(2265),l=n(2600);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function i(e,t){let[n,i]=(0,r.useState)(()=>o(e));return(0,l.e)(()=>{i(o(e))},[e.type,e.as]),(0,l.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")},[n,t]),n}},9426:function(e,t,n){n.d(t,{x:function(){return u}});var r=n(2265);let l=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var t,n;let r=null!=(t=e.innerText)?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let i=!1;for(let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),i=!0;let u=i?null!=(n=o.innerText)?n:"":r;return l.test(u)&&(u=u.replace(l,"")),u}var i=n(4623);function u(e){let t=(0,r.useRef)(""),n=(0,r.useRef)("");return(0,i.z)(()=>{let r=e.current;if(!r)return"";let l=r.innerText;if(t.current===l)return n.current;let i=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():o(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return o(e).trim()})(r).trim().toLowerCase();return t.current=l,n.current=i,i})}},3995:function(e,t,n){n.d(t,{g:function(){return o}});var r=n(2265);function l(e){return[e.screenX,e.screenY]}function o(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=l(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=l(t)}}}},9174:function(e,t,n){n.d(t,{HO:function(){return eH},ES:function(){return eP},U8:function(){return eA},AZ:function(){return eS},L:function(){return eL}});var r=n(2265),l=n.t(r,2);let o=Math.min,i=Math.max,u=Math.round,a=Math.floor,c=e=>({x:e,y:e}),f={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function m(e){return e.split("-")[0]}function p(e){return e.split("-")[1]}function g(e){return"x"===e?"y":"x"}function h(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(m(e))?"y":"x"}function v(e){return e.replace(/start|end/g,e=>s[e])}function x(e){return e.replace(/left|right|bottom|top/g,e=>f[e])}function b(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function w(e,t,n){let r,{reference:l,floating:o}=e,i=y(t),u=g(y(t)),a=h(u),c=m(t),f="y"===i,s=l.x+l.width/2-o.width/2,d=l.y+l.height/2-o.height/2,v=l[a]/2-o[a]/2;switch(c){case"top":r={x:s,y:l.y-o.height};break;case"bottom":r={x:s,y:l.y+l.height};break;case"right":r={x:l.x+l.width,y:d};break;case"left":r={x:l.x-o.width,y:d};break;default:r={x:l.x,y:l.y}}switch(p(t)){case"start":r[u]-=v*(n&&f?-1:1);break;case"end":r[u]+=v*(n&&f?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:l="absolute",middleware:o=[],platform:i}=n,u=o.filter(Boolean),a=await (null==i.isRTL?void 0:i.isRTL(t)),c=await i.getElementRects({reference:e,floating:t,strategy:l}),{x:f,y:s}=w(c,r,a),d=r,m={},p=0;for(let n=0;n<u.length;n++){let{name:o,fn:g}=u[n],{x:h,y:y,data:v,reset:x}=await g({x:f,y:s,initialPlacement:r,placement:d,strategy:l,middlewareData:m,rects:c,platform:i,elements:{reference:e,floating:t}});if(f=null!=h?h:f,s=null!=y?y:s,m={...m,[o]:{...m[o],...v}},x&&p<=50){p++,"object"==typeof x&&(x.placement&&(d=x.placement),x.rects&&(c=!0===x.rects?await i.getElementRects({reference:e,floating:t,strategy:l}):x.rects),{x:f,y:s}=w(c,d,a)),n=-1;continue}}return{x:f,y:s,placement:d,strategy:l,middlewareData:m}};async function E(e,t){var n;void 0===t&&(t={});let{x:r,y:l,platform:o,rects:i,elements:u,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:s="floating",altBoundary:m=!1,padding:p=0}=d(t,e),g="number"!=typeof p?{top:0,right:0,bottom:0,left:0,...p}:{top:p,right:p,bottom:p,left:p},h=u[m?"floating"===s?"reference":"floating":s],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(h)))||n?h:h.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(u.floating)),boundary:c,rootBoundary:f,strategy:a})),v="floating"===s?{...i.floating,x:r,y:l}:i.reference,x=await (null==o.getOffsetParent?void 0:o.getOffsetParent(u.floating)),w=await (null==o.isElement?void 0:o.isElement(x))&&await (null==o.getScale?void 0:o.getScale(x))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:x,strategy:a}):v);return{top:(y.top-R.top+g.top)/w.y,bottom:(R.bottom-y.bottom+g.bottom)/w.y,left:(y.left-R.left+g.left)/w.x,right:(R.right-y.right+g.right)/w.x}}async function C(e,t){let{placement:n,platform:r,elements:l}=e,o=await (null==r.isRTL?void 0:r.isRTL(l.floating)),i=m(n),u=p(n),a="y"===y(n),c=["left","top"].includes(i)?-1:1,f=o&&a?-1:1,s=d(t,e),{mainAxis:g,crossAxis:h,alignmentAxis:v}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...s};return u&&"number"==typeof v&&(h="end"===u?-1*v:v),a?{x:h*f,y:g*c}:{x:g*c,y:h*f}}let T=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:l,y:o,placement:i,middlewareData:u}=t,a=await C(t,e);return i===(null==(n=u.offset)?void 0:n.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:l+a.x,y:o+a.y,data:{...a,placement:i}}}}};function F(e){return L(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function S(e){var t;return null==(t=(L(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function L(e){return e instanceof Node||e instanceof M(e).Node}function A(e){return e instanceof Element||e instanceof M(e).Element}function P(e){return e instanceof HTMLElement||e instanceof M(e).HTMLElement}function H(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof M(e).ShadowRoot)}function k(e){let{overflow:t,overflowX:n,overflowY:r,display:l}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(l)}function D(e){let t=O(),n=B(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function O(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function N(e){return["html","body","#document"].includes(F(e))}function B(e){return M(e).getComputedStyle(e)}function I(e){return A(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function V(e){if("html"===F(e))return e;let t=e.assignedSlot||e.parentNode||H(e)&&e.host||S(e);return H(t)?t.host:t}function $(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let l=function e(t){let n=V(t);return N(n)?t.ownerDocument?t.ownerDocument.body:t.body:P(n)&&k(n)?n:e(n)}(e),o=l===(null==(r=e.ownerDocument)?void 0:r.body),i=M(l);return o?t.concat(i,i.visualViewport||[],k(l)?l:[],i.frameElement&&n?$(i.frameElement):[]):t.concat(l,$(l,[],n))}function W(e){let t=B(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,l=P(e),o=l?e.offsetWidth:n,i=l?e.offsetHeight:r,a=u(n)!==o||u(r)!==i;return a&&(n=o,r=i),{width:n,height:r,$:a}}function j(e){return A(e)?e:e.contextElement}function z(e){let t=j(e);if(!P(t))return c(1);let n=t.getBoundingClientRect(),{width:r,height:l,$:o}=W(t),i=(o?u(n.width):n.width)/r,a=(o?u(n.height):n.height)/l;return i&&Number.isFinite(i)||(i=1),a&&Number.isFinite(a)||(a=1),{x:i,y:a}}let q=c(0);function _(e){let t=M(e);return O()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:q}function Y(e,t,n,r){var l;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),i=j(e),u=c(1);t&&(r?A(r)&&(u=z(r)):u=z(e));let a=(void 0===(l=n)&&(l=!1),r&&(!l||r===M(i))&&l)?_(i):c(0),f=(o.left+a.x)/u.x,s=(o.top+a.y)/u.y,d=o.width/u.x,m=o.height/u.y;if(i){let e=M(i),t=r&&A(r)?M(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=z(n),t=n.getBoundingClientRect(),r=B(n),l=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;f*=e.x,s*=e.y,d*=e.x,m*=e.y,f+=l,s+=o,n=M(n).frameElement}}return b({width:d,height:m,x:f,y:s})}function U(e){return Y(S(e)).left+I(e).scrollLeft}function K(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=M(e),r=S(e),l=n.visualViewport,o=r.clientWidth,i=r.clientHeight,u=0,a=0;if(l){o=l.width,i=l.height;let e=O();(!e||e&&"fixed"===t)&&(u=l.offsetLeft,a=l.offsetTop)}return{width:o,height:i,x:u,y:a}}(e,n);else if("document"===t)r=function(e){let t=S(e),n=I(e),r=e.ownerDocument.body,l=i(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=i(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),u=-n.scrollLeft+U(e),a=-n.scrollTop;return"rtl"===B(r).direction&&(u+=i(t.clientWidth,r.clientWidth)-l),{width:l,height:o,x:u,y:a}}(S(e));else if(A(t))r=function(e,t){let n=Y(e,!0,"fixed"===t),r=n.top+e.clientTop,l=n.left+e.clientLeft,o=P(e)?z(e):c(1),i=e.clientWidth*o.x;return{width:i,height:e.clientHeight*o.y,x:l*o.x,y:r*o.y}}(t,n);else{let n=_(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return b(r)}function X(e,t){return P(e)&&"fixed"!==B(e).position?t?t(e):e.offsetParent:null}function G(e,t){let n=M(e);if(!P(e))return n;let r=X(e,t);for(;r&&["table","td","th"].includes(F(r))&&"static"===B(r).position;)r=X(r,t);return r&&("html"===F(r)||"body"===F(r)&&"static"===B(r).position&&!D(r))?n:r||function(e){let t=V(e);for(;P(t)&&!N(t);){if(D(t))return t;t=V(t)}return null}(e)||n}let J=async function(e){let{reference:t,floating:n,strategy:r}=e,l=this.getOffsetParent||G,o=this.getDimensions;return{reference:function(e,t,n){let r=P(t),l=S(t),o="fixed"===n,i=Y(e,!0,o,t),u={scrollLeft:0,scrollTop:0},a=c(0);if(r||!r&&!o){if(("body"!==F(t)||k(l))&&(u=I(t)),r){let e=Y(t,!0,o,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else l&&(a.x=U(l))}return{x:i.left+u.scrollLeft-a.x,y:i.top+u.scrollTop-a.y,width:i.width,height:i.height}}(t,await l(n),r),floating:{x:0,y:0,...await o(n)}}},Z={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,l=P(n),o=S(n);if(n===o)return t;let i={scrollLeft:0,scrollTop:0},u=c(1),a=c(0);if((l||!l&&"fixed"!==r)&&(("body"!==F(n)||k(o))&&(i=I(n)),P(n))){let e=Y(n);u=z(n),a.x=e.x+n.clientLeft,a.y=e.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-i.scrollLeft*u.x+a.x,y:t.y*u.y-i.scrollTop*u.y+a.y}},getDocumentElement:S,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:l}=e,u=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=$(e,[],!1).filter(e=>A(e)&&"body"!==F(e)),l=null,o="fixed"===B(e).position,i=o?V(e):e;for(;A(i)&&!N(i);){let t=B(i),n=D(i);n||"fixed"!==t.position||(l=null),(o?!n&&!l:!n&&"static"===t.position&&!!l&&["absolute","fixed"].includes(l.position)||k(i)&&!n&&function e(t,n){let r=V(t);return!(r===n||!A(r)||N(r))&&("fixed"===B(r).position||e(r,n))}(e,i))?r=r.filter(e=>e!==i):l=t,i=V(i)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=u[0],c=u.reduce((e,n)=>{let r=K(t,n,l);return e.top=i(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=i(r.left,e.left),e},K(t,a,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:G,getElementRects:J,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=W(e);return{width:t,height:n}},getScale:z,isElement:A,isRTL:function(e){return"rtl"===B(e).direction}};function Q(e,t,n,r){let l;void 0===r&&(r={});let{ancestorScroll:u=!0,ancestorResize:c=!0,elementResize:f="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,m=j(e),p=u||c?[...m?$(m):[],...$(t)]:[];p.forEach(e=>{u&&e.addEventListener("scroll",n,{passive:!0}),c&&e.addEventListener("resize",n)});let g=m&&s?function(e,t){let n,r=null,l=S(e);function u(){clearTimeout(n),r&&r.disconnect(),r=null}return!function c(f,s){void 0===f&&(f=!1),void 0===s&&(s=1),u();let{left:d,top:m,width:p,height:g}=e.getBoundingClientRect();if(f||t(),!p||!g)return;let h=a(m),y=a(l.clientWidth-(d+p)),v={rootMargin:-h+"px "+-y+"px "+-a(l.clientHeight-(m+g))+"px "+-a(d)+"px",threshold:i(0,o(1,s))||1},x=!0;function b(e){let t=e[0].intersectionRatio;if(t!==s){if(!x)return c();t?c(!1,t):n=setTimeout(()=>{c(!1,1e-7)},100)}x=!1}try{r=new IntersectionObserver(b,{...v,root:l.ownerDocument})}catch(e){r=new IntersectionObserver(b,v)}r.observe(e)}(!0),u}(m,n):null,h=-1,y=null;f&&(y=new ResizeObserver(e=>{let[r]=e;r&&r.target===m&&y&&(y.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),m&&!d&&y.observe(m),y.observe(t));let v=d?Y(e):null;return d&&function t(){let r=Y(e);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,l=requestAnimationFrame(t)}(),n(),()=>{p.forEach(e=>{u&&e.removeEventListener("scroll",n),c&&e.removeEventListener("resize",n)}),g&&g(),y&&y.disconnect(),y=null,d&&cancelAnimationFrame(l)}}let ee=(e,t,n)=>{let r=new Map,l={platform:Z,...n},o={...l.platform,_c:r};return R(e,t,{...l,platform:o})};var et=n(4887),en="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function er(e,t){let n,r,l;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!er(e[r],t[r]))return!1;return!0}if((n=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,l[r]))return!1;for(r=n;0!=r--;){let n=l[r];if(("_owner"!==n||!e.$$typeof)&&!er(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function el(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function eo(e,t){let n=el(e);return Math.round(t*n)/n}function ei(e){let t=r.useRef(e);return en(()=>{t.current=e}),t}let eu=l["useInsertionEffect".toString()]||(e=>e());function ea(e){let t=r.useRef(()=>{});return eu(()=>{t.current=e}),r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var ec="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;let ef=!1,es=0,ed=()=>"floating-ui-"+es++,em=l["useId".toString()]||function(){let[e,t]=r.useState(()=>ef?ed():void 0);return ec(()=>{null==e&&t(ed())},[]),r.useEffect(()=>{ef||(ef=!0)},[]),e},ep=r.createContext(null),eg=r.createContext(null),eh=()=>{var e;return(null==(e=r.useContext(ep))?void 0:e.id)||null},ey=()=>r.useContext(eg),ev="active",ex="selected";function eb(e,t,n){let r=new Map,l="item"===n,o=e;if(l&&e){let{[ev]:t,[ex]:n,...r}=e;o=r}return{..."floating"===n&&{tabIndex:-1},...o,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,o]=t;if(!(l&&[ev,ex].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof o){var i;null==(i=r.get(n))||i.push(o),e[n]=function(){for(var e,t=arguments.length,l=Array(t),o=0;o<t;o++)l[o]=arguments[o];return null==(e=r.get(n))?void 0:e.map(e=>e(...l)).find(e=>void 0!==e)}}}else e[n]=o}}),e),{})}}function ew(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}let eR=e=>({name:"inner",options:e,async fn(t){let{listRef:n,overflowRef:r,onFallbackChange:l,offset:o=0,index:i=0,minItemsVisible:u=4,referenceOverflowThreshold:a=0,scrollRef:c,...f}=e,{rects:s,elements:{floating:d}}=t,m=n.current[i];if(!m)return{};let p={...t,...await T(-m.offsetTop-d.clientTop-s.reference.height/2-m.offsetHeight/2-o).fn(t)},g=(null==c?void 0:c.current)||d,h=await E(ew(p,g.scrollHeight),f),y=await E(p,{...f,elementContext:"reference"}),v=Math.max(0,h.top),x=p.y+v,b=Math.max(0,g.scrollHeight-v-Math.max(0,h.bottom));return g.style.maxHeight=b+"px",g.scrollTop=v,l&&(g.offsetHeight<m.offsetHeight*Math.min(u,n.current.length-1)-1||y.top>=-a||y.bottom>=-a?(0,et.flushSync)(()=>l(!0)):(0,et.flushSync)(()=>l(!1))),r&&(r.current=await E(ew({...p,y:x},g.offsetHeight),f)),{y:x}}});var eE=n(2769),eC=n(4623),eT=n(2600);let eF=(0,r.createContext)({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});eF.displayName="FloatingContext";let eM=(0,r.createContext)(null);function eS(){return(0,r.useContext)(eF).setReference}function eL(){return(0,r.useContext)(eF).getReferenceProps}function eA(){let{getFloatingProps:e,slot:t}=(0,r.useContext)(eF);return(0,r.useCallback)((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function eP(e){let t=(0,r.useContext)(eM),n=(0,r.useMemo)(()=>e,[JSON.stringify(e,"undefined"!=typeof HTMLElement?(e,t)=>t instanceof HTMLElement?t.outerHTML:t:void 0)]);(0,eT.e)(()=>{null==t||t(null!=n?n:null)},[t,n]);let l=(0,r.useContext)(eF);return(0,r.useMemo)(()=>[l.setFloating,l.styles],[l.setFloating,l.styles])}function eH({children:e,enabled:t=!0}){var n,l,u;let a,c,f;let[s,b]=(0,r.useState)(null),[w,R]=(0,r.useState)(0),C=(0,r.useRef)(null),[F,M]=(0,r.useState)(null);(0,eT.e)(()=>{if(!F)return;let e=new MutationObserver(()=>{let e=F.style.maxHeight;parseFloat(e)!==parseInt(e)&&(F.style.maxHeight=`${Math.ceil(parseFloat(e))}px`)});return e.observe(F,{attributes:!0,attributeFilter:["style"]}),()=>{e.disconnect()}},[F]);let S=t&&null!==s&&null!==F,{to:L="bottom",gap:P=0,offset:H=0,padding:k=0,inner:D}=(a=ek(null==s?void 0:s.gap,F),c=ek(null==s?void 0:s.offset,F),f=ek(null==s?void 0:s.padding,F),{...s,gap:a,offset:c,padding:f}),[O,N="center"]=L.split(" ");(0,eT.e)(()=>{S&&R(0)},[S]);let{refs:B,floatingStyles:I,context:V}=function(e){var t;void 0===e&&(e={});let{open:n=!1,onOpenChange:l,nodeId:o}=e,[i,u]=r.useState(null),a=(null==(t=e.elements)?void 0:t.reference)||i,c=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:l=[],platform:o,elements:{reference:i,floating:u}={},transform:a=!0,whileElementsMounted:c,open:f}=e,[s,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,p]=r.useState(l);er(m,l)||p(l);let[g,h]=r.useState(null),[y,v]=r.useState(null),x=r.useCallback(e=>{e!=E.current&&(E.current=e,h(e))},[h]),b=r.useCallback(e=>{e!==C.current&&(C.current=e,v(e))},[v]),w=i||g,R=u||y,E=r.useRef(null),C=r.useRef(null),T=r.useRef(s),F=ei(c),M=ei(o),S=r.useCallback(()=>{if(!E.current||!C.current)return;let e={placement:t,strategy:n,middleware:m};M.current&&(e.platform=M.current),ee(E.current,C.current,e).then(e=>{let t={...e,isPositioned:!0};L.current&&!er(T.current,t)&&(T.current=t,et.flushSync(()=>{d(t)}))})},[m,t,n,M]);en(()=>{!1===f&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[f]);let L=r.useRef(!1);en(()=>(L.current=!0,()=>{L.current=!1}),[]),en(()=>{if(w&&(E.current=w),R&&(C.current=R),w&&R){if(F.current)return F.current(w,R,S);S()}},[w,R,S,F]);let A=r.useMemo(()=>({reference:E,floating:C,setReference:x,setFloating:b}),[x,b]),P=r.useMemo(()=>({reference:w,floating:R}),[w,R]),H=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!P.floating)return e;let t=eo(P.floating,s.x),r=eo(P.floating,s.y);return a?{...e,transform:"translate("+t+"px, "+r+"px)",...el(P.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,a,P.floating,s.x,s.y]);return r.useMemo(()=>({...s,update:S,refs:A,elements:P,floatingStyles:H}),[s,S,A,P,H])}(e),f=ey(),s=null!=eh(),d=ea((e,t,n)=>{e&&(p.current.openEvent=t),g.emit("openchange",{open:e,event:t,reason:n,nested:s}),null==l||l(e,t,n)}),m=r.useRef(null),p=r.useRef({}),g=r.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})())[0],h=em(),y=r.useCallback(e=>{let t=A(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c.refs.setReference(t)},[c.refs]),v=r.useCallback(e=>{(A(e)||null===e)&&(m.current=e,u(e)),(A(c.refs.reference.current)||null===c.refs.reference.current||null!==e&&!A(e))&&c.refs.setReference(e)},[c.refs]),x=r.useMemo(()=>({...c.refs,setReference:v,setPositionReference:y,domReference:m}),[c.refs,v,y]),b=r.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=r.useMemo(()=>({...c,refs:x,elements:b,dataRef:p,nodeId:o,floatingId:h,events:g,open:n,onOpenChange:d}),[c,o,h,g,n,d,x,b]);return ec(()=>{let e=null==f?void 0:f.nodesRef.current.find(e=>e.id===o);e&&(e.context=w)}),r.useMemo(()=>({...c,context:w,refs:x,elements:b}),[c,x,b,w])}({open:S,placement:"selection"===O?"center"===N?"bottom":`bottom-${N}`:"center"===N?`${O}`:`${O}-${N}`,strategy:"fixed",transform:!1,middleware:[T({mainAxis:"selection"===O?0:P,crossAxis:H}),{name:"shift",options:n={padding:k},async fn(e){let{x:t,y:r,placement:l}=e,{mainAxis:u=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...f}=d(n,e),s={x:t,y:r},p=await E(e,f),h=y(m(l)),v=g(h),x=s[v],b=s[h];if(u){let e="y"===v?"top":"left",t="y"===v?"bottom":"right",n=x+p[e],r=x-p[t];x=i(n,o(x,r))}if(a){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=b+p[e],r=b-p[t];b=i(n,o(b,r))}let w=c.fn({...e,[v]:x,[h]:b});return{...w,data:{x:w.x-t,y:w.y-r}}}},"selection"!==O&&(void 0===l&&(l={}),{name:"flip",options:l,async fn(e){var t,n,r,o,i;let{placement:u,middlewareData:a,rects:c,initialPlacement:f,platform:s,elements:b}=e,{mainAxis:w=!0,crossAxis:R=!0,fallbackPlacements:C,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:F="none",flipAlignment:M=!0,...S}=d(l,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let L=m(u),A=m(f)===f,P=await (null==s.isRTL?void 0:s.isRTL(b.floating)),H=C||(A||!M?[x(f)]:function(e){let t=x(e);return[v(e),t,v(t)]}(f));C||"none"===F||H.push(...function(e,t,n,r){let l=p(e),o=function(e,t,n){let r=["left","right"],l=["right","left"];switch(e){case"top":case"bottom":if(n)return t?l:r;return t?r:l;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(m(e),"start"===n,r);return l&&(o=o.map(e=>e+"-"+l),t&&(o=o.concat(o.map(v)))),o}(f,M,F,P));let k=[f,...H],D=await E(e,S),O=[],N=(null==(n=a.flip)?void 0:n.overflows)||[];if(w&&O.push(D[L]),R){let e=function(e,t,n){void 0===n&&(n=!1);let r=p(e),l=g(y(e)),o=h(l),i="x"===l?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(i=x(i)),[i,x(i)]}(u,c,P);O.push(D[e[0]],D[e[1]])}if(N=[...N,{placement:u,overflows:O}],!O.every(e=>e<=0)){let e=((null==(r=a.flip)?void 0:r.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let n=null==(o=N.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(T){case"bestFit":{let e=null==(i=N.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(n=e);break}case"initialPlacement":n=f}if(u!==n)return{reset:{placement:n}}}return{}}}),"selection"===O&&D?eR({...D,padding:k,overflowRef:C,offset:w,minItemsVisible:4,referenceOverflowThreshold:k,onFallbackChange(e){var t,n;if(!e)return;let r=V.elements.floating;if(!r)return;let l=parseFloat(getComputedStyle(r).scrollPaddingBottom)||0,o=Math.min(4,r.childElementCount),i=0,u=0;for(let e of null!=(n=null==(t=V.elements.floating)?void 0:t.childNodes)?n:[])if(e instanceof HTMLElement){let t=e.offsetTop,n=t+e.clientHeight+l,a=r.scrollTop,c=a+r.clientHeight;if(t>=a&&n<=c)o--;else{u=Math.max(0,Math.min(n,c)-Math.max(t,a)),i=e.clientHeight;break}}o>=1&&R(e=>{let t=i*o-u+l;return e>=t?e:t})}}):null,{name:"size",options:u={apply({availableWidth:e,availableHeight:t,elements:n}){Object.assign(n.floating.style,{maxWidth:`${e-k}px`,maxHeight:`${t-k}px`})}},async fn(e){let t,n;let{placement:r,rects:l,platform:a,elements:c}=e,{apply:f=()=>{},...s}=d(u,e),g=await E(e,s),h=m(r),v=p(r),x="y"===y(r),{width:b,height:w}=l.floating;"top"===h||"bottom"===h?(t=h,n=v===(await (null==a.isRTL?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):(n=h,t="end"===v?"top":"bottom");let R=w-g[t],C=b-g[n],T=!e.middlewareData.shift,F=R,M=C;if(x){let e=b-g.left-g.right;M=v||T?o(C,e):e}else{let e=w-g.top-g.bottom;F=v||T?o(R,e):e}if(T&&!v){let e=i(g.left,0),t=i(g.right,0),n=i(g.top,0),r=i(g.bottom,0);x?M=b-2*(0!==e||0!==t?e+t:i(g.left,g.right)):F=w-2*(0!==n||0!==r?n+r:i(g.top,g.bottom))}await f({...e,availableWidth:M,availableHeight:F});let S=await a.getDimensions(c.floating);return b!==S.width||w!==S.height?{reset:{rects:!0}}:{}}}].filter(Boolean),whileElementsMounted:Q}),[$=O,W=N]=V.placement.split("-");"selection"===O&&($="selection");let j=(0,r.useMemo)(()=>({anchor:[$,W].filter(Boolean).join(" ")}),[$,W]),{getReferenceProps:z,getFloatingProps:q}=function(e){void 0===e&&(e=[]);let t=e,n=r.useCallback(t=>eb(t,e,"reference"),t),l=r.useCallback(t=>eb(t,e,"floating"),t),o=r.useCallback(t=>eb(t,e,"item"),e.map(e=>null==e?void 0:e.item));return r.useMemo(()=>({getReferenceProps:n,getFloatingProps:l,getItemProps:o}),[n,l,o])}([function(e,t){let{open:n,elements:l}=e,{enabled:o=!0,overflowRef:i,scrollRef:u,onChange:a}=t,c=ea(a),f=r.useRef(!1),s=r.useRef(null),d=r.useRef(null);return r.useEffect(()=>{if(!o)return;function e(e){if(e.ctrlKey||!t||null==i.current)return;let n=e.deltaY,r=i.current.top>=-.5,l=i.current.bottom>=-.5,o=t.scrollHeight-t.clientHeight,u=n<0?-1:1,a=n<0?"max":"min";!(t.scrollHeight<=t.clientHeight)&&(!r&&n>0||!l&&n<0?(e.preventDefault(),(0,et.flushSync)(()=>{c(e=>e+Math[a](n,o*u))})):/firefox/i.test(function(){let e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(e=>{let{brand:t,version:n}=e;return t+"/"+n}).join(" "):navigator.userAgent}())&&(t.scrollTop+=n))}let t=(null==u?void 0:u.current)||l.floating;if(n&&t)return t.addEventListener("wheel",e),requestAnimationFrame(()=>{s.current=t.scrollTop,null!=i.current&&(d.current={...i.current})}),()=>{s.current=null,d.current=null,t.removeEventListener("wheel",e)}},[o,n,l.floating,i,u,c]),r.useMemo(()=>o?{floating:{onKeyDown(){f.current=!0},onWheel(){f.current=!1},onPointerMove(){f.current=!1},onScroll(){let e=(null==u?void 0:u.current)||l.floating;if(i.current&&e&&f.current){if(null!==s.current){let t=e.scrollTop-s.current;(i.current.bottom<-.5&&t<-1||i.current.top<-.5&&t>1)&&(0,et.flushSync)(()=>c(e=>e+t))}requestAnimationFrame(()=>{s.current=e.scrollTop})}}}}:{},[o,i,l.floating,u,c])}(V,{overflowRef:C,onChange:R})]),_=(0,eC.z)(e=>{M(e),B.setFloating(e)});return r.createElement(eM.Provider,{value:b},r.createElement(eF.Provider,{value:{setFloating:_,setReference:B.setReference,styles:S?I:{},getReferenceProps:z,getFloatingProps:q,slot:j}},e))}function ek(e,t,n){let l=(0,eE.G)(),o=(0,eC.z)((e,t)=>{if(null==e)return[n,null];if("number"==typeof e)return[e,null];if("string"==typeof e){if(!t)return[n,null];let r=eD(e,t);return[r,n=>{let o=function e(t){let n=/var\((.*)\)/.exec(t);if(n){let t=n[1].indexOf(",");if(-1===t)return[n[1]];let r=n[1].slice(0,t).trim(),l=n[1].slice(t+1).trim();return l?[r,...e(l)]:[r]}return[]}(e);{let i=o.map(e=>window.getComputedStyle(t).getPropertyValue(e));l.requestAnimationFrame(function u(){l.nextFrame(u);let a=!1;for(let[e,n]of o.entries()){let r=window.getComputedStyle(t).getPropertyValue(n);if(i[e]!==r){i[e]=r,a=!0;break}}if(!a)return;let c=eD(e,t);r!==c&&(n(c),r=c)})}return l.dispose}]}return[n,null]}),i=(0,r.useMemo)(()=>o(e,t)[0],[e,t]),[u=i,a]=(0,r.useState)();return(0,eT.e)(()=>{let[n,r]=o(e,t);if(a(n),r)return r(a)},[e,t]),u}function eD(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}eM.displayName="PlacementContext"},6308:function(e,t,n){n.d(t,{a:function(){return h},u:function(){return v}});var r,l=n(2265),o=n(8130),i=n(7250),u=n(2138),a=n(5606),c=n(2086),f=n(7728),s=n(9985),d=n(6618),m=n(1359),p=n(1931),g=n(4705),h=((r=h||{})[r.None=0]="None",r[r.Inert=1]="Inert",r[r.ScrollLock=2]="ScrollLock",r[r.FocusTrap=4]="FocusTrap",r[r.All=7]="All",r);let y=p.VN.RenderStrategy|p.VN.Static,v=Object.assign((0,p.yV)(function(e,t){let n=(0,a.M)(),{id:r=`headlessui-modal-${n}`,initialFocus:h,role:v="dialog",features:x=7,enabled:b=!0,focusTrapFeatures:w=o.v.All,...R}=e;b||(x=0);let E=(0,l.useRef)(!1);v="dialog"===v||"alertdialog"===v?v:(E.current||(E.current=!0,console.warn(`Invalid role [${v}] passed to <Modal />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog");let C=(0,l.useRef)(null),T=(0,d.T)(C,t),F=(0,f.i)(C),[M,S]=(0,i.kF)(),{resolveContainers:L,mainTreeNodeRef:A,MainTreeNode:P}=(0,s.v)({portals:M,defaultContainers:[{get current(){return C.current}}]}),H=(0,l.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==F?void 0:F.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(A.current)&&e instanceof HTMLElement))?t:null},[A]);(0,c.z)(H,!!(1&x));let k=(0,l.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==F?void 0:F.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(A.current)&&e instanceof HTMLElement))?t:null},[A]);(0,c.z)(k,!!(1&x)),function(e,t,n=()=>[document.body]){(0,u.I)(e,t,e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}})}(F,!!(2&x),L);let D=(0,l.useMemo)(()=>({}),[]),O={ref:T,id:r,role:v,"aria-modal":b||void 0};return l.createElement(l.Fragment,null,l.createElement(g.O,{force:!0},l.createElement(i.h_,null,l.createElement(o.i,{initialFocus:h,containers:L,features:4&x?w:o.v.None},l.createElement(g.O,{force:!1},l.createElement(S,null,(0,p.sY)({ourProps:O,theirProps:R,slot:D,defaultTag:"div",features:y,name:"Modal"})))))),l.createElement(m.yd,null,l.createElement(P,null)))}),{})},3891:function(e,t,n){n.d(t,{T:function(){return l},d:function(){return o}});var r,l=((r=l||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r);function o(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),l=null!=r?r:-1;switch(e.focus){case 0:for(let e=0;e<n.length;++e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 1:-1===l&&(l=n.length);for(let e=l-1;e>=0;--e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 2:for(let e=l+1;e<n.length;++e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 3:for(let e=n.length-1;e>=0;--e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 4:for(let r=0;r<n.length;++r)if(t.resolveId(n[r],r,n)===e.id)return r;return r;case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}}}}]);