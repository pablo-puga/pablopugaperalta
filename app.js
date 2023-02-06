var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function a(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function d(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),g=f?t=>requestAnimationFrame(t):t;const m=new Set;function h(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&g(h)}function $(t){let e;return 0===m.size&&g(h),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}function w(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=C("style");return function(t,e){w(t.head||t,e),e.sheet}(x(t),e),e.sheet}function b(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function j(){return S(" ")}function L(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}const P=new Map;let T,I=0;function A(t,e,n,o,r,s,c,l=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*s(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=x(t),{stylesheet:p,rules:g}=P.get(f)||function(t,e){const n={stylesheet:y(e),rules:{}};return P.set(t,n),n}(f,t);g[d]||(g[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${r}ms 1 both`,I+=1,d}function G(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),I-=r,I||g((()=>{I||(P.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)})),P.clear())})))}function R(t){T=t}const N=[],V=[],B=[],Y=[],H=Promise.resolve();let O=!1;function U(t){B.push(t)}const J=new Set;let D,F=0;function W(){if(0!==F)return;const t=T;do{try{for(;F<N.length;){const t=N[F];F++,R(t),q(t.$$)}}catch(t){throw N.length=0,F=0,t}for(R(null),N.length=0,F=0;V.length;)V.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];J.has(e)||(J.add(e),e())}B.length=0}while(N.length);for(;Y.length;)Y.pop()();O=!1,J.clear(),R(t)}function q(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}function K(){return D||(D=Promise.resolve(),D.then((()=>{D=null}))),D}function Q(t,e,n){t.dispatchEvent(function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(`${e?"intro":"outro"}${n}`))}const X=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||s(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(X.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(X.has(t))return;X.add(t),Z.c.push((()=>{X.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const rt={duration:0};function st(n,o,r){const l={direction:"out"};let i,a=o(n,r,l),u=!0;const d=Z;function f(){const{delay:o=0,duration:r=300,easing:c=e,tick:l=t,css:f}=a||rt;f&&(i=A(n,1,0,r,o,c,f));const g=p()+o,m=g+r;U((()=>Q(n,!1,"start"))),$((t=>{if(u){if(t>=m)return l(0,1),Q(n,!1,"end"),--d.r||s(d.c),!1;if(t>=g){const e=c((t-g)/r);l(1-e,e)}}return u}))}return d.r+=1,c(a)?K().then((()=>{a=a(l),f()})):f(),{end(t){t&&a.tick&&a.tick(1,0),u&&(i&&G(n,i),u=!1)}}}function ct(t){t&&t.c()}function lt(t,e,n,r){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),r||U((()=>{const e=t.$$.on_mount.map(o).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),i.forEach(U)}function it(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(N.push(t),O||(O=!0,H.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,o,c,l,i,a,u=[-1]){const d=T;R(e);const f=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&at(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),W()}R(d)}class dt{$destroy(){it(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ft={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},pt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},gt={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},mt={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM104 432c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"]};function ht(t){let e,n;return{c(){e=C("h2"),n=S(t[0]),M(e,"class","text-2xl md:text-3xl font-medium mb-3")},m(t,o){b(t,e,o),w(e,n)},p(t,e){1&e&&z(n,t[0])},d(t){t&&v(e)}}}function $t(t){let e,n,o,r=t[0]&&ht(t);const s=t[4].default,c=function(t,e,n,o){if(t){const r=d(t,e,n,o);return t[0](r)}}(s,t,t[3],null);return{c(){var o;e=C("section"),r&&r.c(),n=j(),c&&c.c(),M(e,"class",(null==(o=t[1])?"":o)+" svelte-w6box8")},m(t,s){b(t,e,s),r&&r.m(e,null),w(e,n),c&&c.m(e,null),o=!0},p(t,[l]){t[0]?r?r.p(t,l):(r=ht(t),r.c(),r.m(e,n)):r&&(r.d(1),r=null),c&&c.p&&(!o||8&l)&&function(t,e,n,o,r,s){if(r){const c=d(e,n,o,s);t.p(c,r)}}(c,s,t,t[3],o?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(s,t[3],l,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[3]),null)},i(t){o||(nt(c,t),o=!0)},o(t){ot(c,t),o=!1},d(t){t&&v(e),r&&r.d(),c&&c.d(t)}}}function wt(t,e,n){let{$$slots:o={},$$scope:r}=e,{classes:s=""}=e,{title:c=""}=e;const l=s?`page-section md:mb-5 ${s.toString()}`:"page-section md:mb-5";return t.$$set=t=>{"classes"in t&&n(2,s=t.classes),"title"in t&&n(0,c=t.title),"$$scope"in t&&n(3,r=t.$$scope)},[c,l,s,r,o]}class xt extends dt{constructor(t){super(),ut(this,t,wt,$t,l,{classes:2,title:0})}}function yt(t,e,n){const o=t.slice();return o[5]=e[n],o}function bt(e){let n,o,r=e[5].text+"";return{c(){n=C("li"),o=S(r),M(n,"class",`px-2 shadow-sm rounded ${e[5].bgColor} ${e[5].fontWeight}`),M(n,"style",`font-size: ${e[5].fontSize}px`)},m(t,e){b(t,n,e),w(n,o)},p:t,d(t){t&&v(n)}}}function vt(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=bt(yt(t,n,e));return{c(){e=C("ul");for(let t=0;t<o.length;t+=1)o[t].c();M(e,"class","flex flex-row flex-wrap gap-3 items-center content-center justify-center font-mono")},m(t,n){b(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,r){if(1&r){let s;for(n=t[0],s=0;s<n.length;s+=1){const c=yt(t,n,s);o[s]?o[s].p(c,r):(o[s]=bt(c),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){t&&v(e),k(o,t)}}}function kt(t){let e,n;return e=new xt({props:{title:"Aptitudes",classes:"p-3 md:p-2 lg:p-0 md:w-2/4 max-w-screen-sm",$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){ct(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};256&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}const Ct=12;function _t(t,e,n){let{keywords:o=[]}=e;const r={red:"bg-red-200",yellow:"bg-yellow-200",green:"bg-green-200",blue:"bg-blue-200",indigo:"bg-indigo-200",purple:"bg-purple-200",pink:"bg-pink-200"},s=(()=>{let t;return()=>{const e=Object.assign({},r);t&&delete e[t];const n=Math.floor(Math.random()*Object.keys(e).length),o=Object.keys(e)[n];return t=o,e[o]}})(),c=t=>{const e=Math.floor(1e3*t);return e<=300?"font-thin":e<=600?"font-normal":"font-bold"},l=o.map((t=>({text:t.text,fontSize:Ct+Math.ceil(Ct*t.weight),fontWeight:c(t.weight),bgColor:s()})));return t.$$set=t=>{"keywords"in t&&n(1,o=t.keywords)},[l,o]}class St extends dt{constructor(t){super(),ut(this,t,_t,kt,l,{keywords:1})}}function jt(t){const e=t-1;return e*e*e+1}function Lt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Mt(t,{delay:e=0,duration:n=400,easing:o=jt,x:r=0,y:s=0,opacity:c=0}={}){const l=getComputedStyle(t),i=+l.opacity,a="none"===l.transform?"":l.transform,u=i*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${i-u*e}`}}const zt=[];const Et="G-F4YTG3EY7B",Pt=(()=>{const e=(t=>{if(null!=t)return"true"===t.toLocaleLowerCase()})(localStorage.getItem("cookie-consent")),{subscribe:n,set:o}=function(e,n=t){let o;const r=new Set;function s(t){if(l(e,t)&&(e=t,o)){const t=!zt.length;for(const t of r)t[1](),zt.push(t,e);if(t){for(let t=0;t<zt.length;t+=2)zt[t][0](zt[t+1]);zt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}(e);return{subscribe:n,accept:t=>{localStorage.setItem("cookie-consent","true"),window[`ga-disable-${Et}`]=!1,window.gtag&&window.gtag("consent","update",{analytics_storage:"granted"}),o(!0)},decline:t=>{localStorage.setItem("cookie-consent","false"),window.dataLayer&&Array.isArray(window.dataLayer)&&(window.dataLayer=[]),window[`ga-disable-${Et}`]=!0,window.gtag&&window.gtag("consent","update",{analytics_storage:"denied"}),document.cookie=Et.replace("G-","_ga_")+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT",document.cookie="_ga=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT",o(!1),window.location.reload()}}})();function Tt(e){let n,o,r,c,l,i,a,u,d,f,p,g,m;return{c(){n=C("article"),o=C("h3"),o.textContent="Cookie Consent",r=j(),c=C("p"),c.textContent="I use cookies to measure the performance of the web through Google Analytics.",l=j(),i=C("div"),a=C("button"),a.textContent="Accept",u=j(),d=C("button"),d.textContent="Reject",M(o,"class","mb-1 font-medium"),M(c,"class","text-sm mb-2"),M(a,"class","action hover:bg-green-300 mr-2 svelte-12xl933"),M(d,"class","action hover:bg-red-300 svelte-12xl933"),M(i,"class","flex flex-row justify-end text-sm"),M(n,"class","consent sm:max-w-sm svelte-12xl933")},m(t,e){b(t,n,e),w(n,o),w(n,r),w(n,c),w(n,l),w(n,i),w(i,a),w(i,u),w(i,d),p=!0,g||(m=[L(a,"click",Pt.accept),L(d,"click",Pt.decline)],g=!0)},p:t,i(t){p||(f&&f.end(1),p=!0)},o(t){f=st(n,Lt,{duration:250}),p=!1},d(t){t&&v(n),t&&f&&f.end(),g=!1,s(m)}}}class It extends dt{constructor(t){super(),ut(this,t,null,Tt,l,{})}}function At(e){let n,o,r;return{c(){n=_("svg"),o=_("path"),M(o,"fill","currentColor"),M(o,"d",e[2]),M(n,"aria-hidden","true"),M(n,"class","fa-icon svelte-9g6ekv"),M(n,"role","img"),M(n,"xmlns","http://www.w3.org/2000/svg"),M(n,"viewBox",r=`0 0 ${e[0]} ${e[1]}`)},m(t,e){b(t,n,e),w(n,o)},p(t,[e]){4&e&&M(o,"d",t[2]),3&e&&r!==(r=`0 0 ${t[0]} ${t[1]}`)&&M(n,"viewBox",r)},i:t,o:t,d(t){t&&v(n)}}}function Gt(t,e,n){let{width:o}=e,{height:r}=e,{path:s}=e;return t.$$set=t=>{"width"in t&&n(0,o=t.width),"height"in t&&n(1,r=t.height),"path"in t&&n(2,s=t.path)},[o,r,s]}class Rt extends dt{constructor(t){super(),ut(this,t,Gt,At,l,{width:0,height:1,path:2})}}function Nt(e){let n;return{c(){n=C("div"),n.innerHTML='<img src="intpowers.png" alt="Interactive Powers logo" class="hidden sm:inline-block w-36 h-auto bg-white rounded-md shadow self-center"/> \n        <div classe="self-stretch"><h2 class="text-lg md:text-2xl font-medium mb-1">Telecom Engineer at Interactive Powers</h2> \n            <p class="md:text-xl mb-3">We do awesome video and audio stuff with WebRTC and VoIP.</p> \n            <p class="text-sm md:text-base text-gray-600">Check our webpage <a class="font-medium svelte-h3a6e6" href="https://interactivepowers.com" title="Home page of Interactive Powers">interactivepowers.com</a> to find more about us!</p> \n            <p class="text-sm md:text-base text-gray-600">You can also reach us on Twitter at <a class="font-medium svelte-h3a6e6" href="https://twitter.com/ivrpowers" title="Interactive Powers Twitter">@ivrpowers</a></p></div>',M(n,"class","flex flex-row shadow rounded-md p-4 clipped-bg gap-4 items-stretch w-full svelte-h3a6e6")},m(t,e){b(t,n,e)},p:t,d(t){t&&v(n)}}}function Vt(t){let e,n;return e=new xt({props:{title:"Job",classes:"p-3 md:p-2 lg:p-0 w-full md:w-4/5 lg:w-3/5 max-w-screen-md",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){ct(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}class Bt extends dt{constructor(t){super(),ut(this,t,null,Vt,l,{})}}function Yt(e){let n,o,r,s,c,l,i,u,d,f,p,g,m,h,$,x,y;return{c(){n=C("article"),o=C("div"),r=C("img"),l=j(),i=C("section"),u=C("h1"),d=S(e[0]),f=j(),p=C("p"),g=S(e[2]),m=j(),h=C("small"),$=S("Visit at "),x=C("a"),y=S(e[4]),a(r.src,s=e[1])||M(r,"src",s),M(r,"alt",c=`${e[0]} logo`),M(r,"class","w-full h-auto"),M(o,"class","hidden sm:inline-block sm:w-1/3 self-start p-3"),M(u,"class","text-lg md:text-2xl font-medium drop-shadow-sm whitespace-nowrap overflow-ellipsis overflow-hidden"),M(p,"class","max-w-full text-sm"),M(i,"class","sm:w-2/3 p-2 self-start"),M(x,"href",e[3]),M(x,"class","font-medium hover:underline"),M(h,"class","w-full px-2 sm:pl-0 self-end"),M(n,"class","flex flex-row flex-wrap items-center shadow rounded-md p-4 bg-white h-full")},m(t,e){b(t,n,e),w(n,o),w(o,r),w(n,l),w(n,i),w(i,u),w(u,d),w(i,f),w(i,p),w(p,g),w(n,m),w(n,h),w(h,$),w(h,x),w(x,y)},p(t,[e]){2&e&&!a(r.src,s=t[1])&&M(r,"src",s),1&e&&c!==(c=`${t[0]} logo`)&&M(r,"alt",c),1&e&&z(d,t[0]),4&e&&z(g,t[2]),16&e&&z(y,t[4]),8&e&&M(x,"href",t[3])},i:t,o:t,d(t){t&&v(n)}}}function Ht(t,e,n){let{name:o}=e,{logo:r}=e,{description:s}=e,{url:c}=e,{displayURL:l}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"logo"in t&&n(1,r=t.logo),"description"in t&&n(2,s=t.description),"url"in t&&n(3,c=t.url),"displayURL"in t&&n(4,l=t.displayURL)},[o,r,s,c,l]}class Ot extends dt{constructor(t){super(),ut(this,t,Ht,Yt,l,{name:0,logo:1,description:2,url:3,displayURL:4})}}function Ut(t,e,n){const o=t.slice();return o[1]=e[n],o}function Jt(t){let e,o,r;const s=[t[1]];let c={};for(let t=0;t<s.length;t+=1)c=n(c,s[t]);return o=new Ot({props:c}),{c(){e=C("li"),ct(o.$$.fragment),M(e,"class","project-wrapper svelte-1bh5sm3")},m(t,n){b(t,e,n),lt(o,e,null),r=!0},p(t,e){const n=1&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[s]=l}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[(r=t[1],"object"==typeof r&&null!==r?r:{})]):{};var r;o.$set(n)},i(t){r||(nt(o.$$.fragment,t),r=!0)},o(t){ot(o.$$.fragment,t),r=!1},d(t){t&&v(e),it(o)}}}function Dt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=Jt(Ut(t,o,e));const s=t=>ot(r[t],1,1,(()=>{r[t]=null}));return{c(){e=C("ul");for(let t=0;t<r.length;t+=1)r[t].c();M(e,"class","flex flex-row flex-wrap gap-4 items-stretch justify-center")},m(t,o){b(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,n){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const s=Ut(t,o,c);r[c]?(r[c].p(s,n),nt(r[c],1)):(r[c]=Jt(s),r[c].c(),nt(r[c],1),r[c].m(e,null))}for(tt(),c=o.length;c<r.length;c+=1)s(c);et()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)nt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)ot(r[t]);n=!1},d(t){t&&v(e),k(r,t)}}}function Ft(t){let e,n;return e=new xt({props:{title:"Projects",classes:"p-3 md:p-2 lg:p-0 w-full md:w-4/5 lg:w-3/5 max-w-screen-md",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){ct(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};17&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function Wt(t,e,n){let{projects:o}=e;return t.$$set=t=>{"projects"in t&&n(0,o=t.projects)},[o]}class qt extends dt{constructor(t){super(),ut(this,t,Wt,Ft,l,{projects:0})}}function Kt(n){let o,r,l,i,a,u,d,f,g,m,h,x,y,k,_,S,z,P,T,I,R,N;return{c(){o=C("article"),r=C("h2"),r.textContent="Settings",l=j(),i=C("hr"),a=j(),u=C("section"),d=C("h3"),d.textContent="Cookies",f=j(),g=C("label"),m=C("span"),m.textContent="Allow Google Analytics",h=j(),x=C("select"),y=C("option"),y.textContent="--",k=C("option"),k.textContent="Yes",_=C("option"),_.textContent="No",S=j(),z=C("button"),z.textContent="Close",M(r,"class","text-center text-xl font-bold"),M(i,"class","mt-3 mb-1"),M(d,"class","text-lg font-medium"),M(m,"class","pl-4"),y.__value="-",y.value=y.__value,y.disabled=!0,M(y,"aria-disabled","true"),k.__value="yes",k.value=k.__value,_.__value="no",_.value=_.__value,M(x,"class","opt-select cursor-pointer svelte-8r01j1"),M(g,"class","flex flex-row justify-between items-center"),M(z,"class","action svelte-8r01j1"),M(o,"class","settings md:max-h-52 md:max-w-sm md:right-1 md:top-1 md:rounded-sm md:shadow-lg svelte-8r01j1")},m(t,e){b(t,o,e),w(o,r),w(o,l),w(o,i),w(o,a),w(o,u),w(u,d),w(u,f),w(u,g),w(g,m),w(g,h),w(g,x),w(x,y),w(x,k),w(x,_),E(x,n[1]),w(o,S),w(o,z),I=!0,R||(N=[L(x,"change",n[2]),L(z,"click",n[4])],R=!0)},p(t,[e]){(!I||2&e)&&E(x,t[1])},i(n){I||(U((()=>{T&&T.end(1),P=function(n,o,r){const s={direction:"in"};let l,i,a=o(n,r,s),u=!1,d=0;function f(){l&&G(n,l)}function g(){const{delay:o=0,duration:r=300,easing:s=e,tick:c=t,css:g}=a||rt;g&&(l=A(n,0,1,r,o,s,g,d++)),c(0,1);const m=p()+o,h=m+r;i&&i.abort(),u=!0,U((()=>Q(n,!0,"start"))),i=$((t=>{if(u){if(t>=h)return c(1,0),Q(n,!0,"end"),f(),u=!1;if(t>=m){const e=s((t-m)/r);c(e,1-e)}}return u}))}let m=!1;return{start(){m||(m=!0,G(n),c(a)?(a=a(s),K().then(g)):g())},invalidate(){m=!1},end(){u&&(f(),u=!1)}}}(o,Mt,{x:200,duration:400}),P.start()})),I=!0)},o(t){P&&P.invalidate(),T=st(o,Mt,{x:200,duration:250}),I=!1},d(t){t&&v(o),t&&T&&T.end(),R=!1,s(N)}}}function Qt(t,e,n){let o,r;u(t,Pt,(t=>n(3,r=t)));let{displaySettings:s=!1}=e;return t.$$set=t=>{"displaySettings"in t&&n(0,s=t.displaySettings)},t.$$.update=()=>{8&t.$$.dirty&&n(1,o=void 0===r?"-":r?"yes":"no")},[s,o,t=>{if("yes"===t.target.value.toLowerCase())return Pt.accept();Pt.decline()},r,()=>n(0,s=!1)]}class Xt extends dt{constructor(t){super(),ut(this,t,Qt,Kt,l,{displaySettings:0})}}function Zt(t,e,n){const o=t.slice();return o[1]=e[n],o}function te(t){let e,n,o,r,s,c,l,i,a,u,d,f=t[1].display+"";return n=new Rt({props:{path:t[1].icon[4],width:t[1].icon[0],height:t[1].icon[1]}}),{c(){e=C("li"),ct(n.$$.fragment),o=j(),r=C("h3"),s=C("a"),c=S(f),a=j(),M(s,"href",l=t[1].link),M(s,"title",i=t[1].name),M(r,"class","inline-block ml-1"),M(e,"class","social flex flex-row items-center transition-all duration-200 hover:underline svelte-kz1hhx"),M(e,"style",u=`--hover-color: ${t[1].color}`)},m(t,l){b(t,e,l),lt(n,e,null),w(e,o),w(e,r),w(r,s),w(s,c),w(e,a),d=!0},p(t,o){const r={};1&o&&(r.path=t[1].icon[4]),1&o&&(r.width=t[1].icon[0]),1&o&&(r.height=t[1].icon[1]),n.$set(r),(!d||1&o)&&f!==(f=t[1].display+"")&&z(c,f),(!d||1&o&&l!==(l=t[1].link))&&M(s,"href",l),(!d||1&o&&i!==(i=t[1].name))&&M(s,"title",i),(!d||1&o&&u!==(u=`--hover-color: ${t[1].color}`))&&M(e,"style",u)},i(t){d||(nt(n.$$.fragment,t),d=!0)},o(t){ot(n.$$.fragment,t),d=!1},d(t){t&&v(e),it(n)}}}function ee(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=te(Zt(t,o,e));const s=t=>ot(r[t],1,1,(()=>{r[t]=null}));return{c(){e=C("ul");for(let t=0;t<r.length;t+=1)r[t].c();M(e,"class","flex flex-row flex-wrap justify-center gap-5 text-xl")},m(t,o){b(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,n){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const s=Zt(t,o,c);r[c]?(r[c].p(s,n),nt(r[c],1)):(r[c]=te(s),r[c].c(),nt(r[c],1),r[c].m(e,null))}for(tt(),c=o.length;c<r.length;c+=1)s(c);et()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)nt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)ot(r[t]);n=!1},d(t){t&&v(e),k(r,t)}}}function ne(t){let e,n;return e=new xt({props:{title:"You can find me at",$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){ct(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};17&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function oe(t,e,n){let{rrss:o=[]}=e;return t.$$set=t=>{"rrss"in t&&n(0,o=t.rrss)},[o]}class re extends dt{constructor(t){super(),ut(this,t,oe,ne,l,{rrss:0})}}function se(e){let n,o,r,s,c;return o=new Rt({props:{path:mt.icon[4],width:mt.icon[0],height:mt.icon[1]}}),{c(){n=C("button"),ct(o.$$.fragment),M(n,"class","settings-icon hover:text-indigo-700 hover:filter hover:drop-shadow-lg")},m(t,l){b(t,n,l),lt(o,n,null),r=!0,s||(c=L(n,"click",e[8]),s=!0)},p:t,i(t){r||(nt(o.$$.fragment,t),r=!0)},o(t){ot(o.$$.fragment,t),r=!1},d(t){t&&v(n),it(o),s=!1,c()}}}function ce(t){let e,n,o;function r(e){t[7](e)}let s={};return void 0!==t[0]&&(s.displaySettings=t[0]),e=new Xt({props:s}),V.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"displaySettings",r))),{c(){ct(e.$$.fragment)},m(t,n){lt(e,t,n),o=!0},p(t,o){const r={};var s;!n&&1&o&&(n=!0,r.displaySettings=t[0],s=()=>n=!1,Y.push(s)),e.$set(r)},i(t){o||(nt(e.$$.fragment,t),o=!0)},o(t){ot(e.$$.fragment,t),o=!1},d(t){it(e,t)}}}function le(e){let n;return{c(){n=C("p"),n.textContent="I am a Telecom Engineer specialized on modern communication technologies. I like to develop things in TypeScript, PHP, C and C++ and I am a great fan of automatizing all possible tasks.",M(n,"class","text-base md:text-xl")},m(t,e){b(t,n,e)},p:t,d(t){t&&v(n)}}}function ie(t){let e,n;return e=new It({}),{c(){ct(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function ae(t){let e,n,o,r,s,c,l,i,u,d,f,p,g,m,h,$,x,y,k,_,S;const L=[ce,se],z=[];function E(t,e){return t[0]?0:1}c=E(t),l=z[c]=L[c](t),f=new xt({props:{title:"Who am I?",classes:"text-center p-3 md:p-2 lg:p-0 md:w-3/4 max-w-screen-md",$$slots:{default:[le]},$$scope:{ctx:t}}}),g=new qt({props:{projects:t[2]}}),h=new Bt({}),x=new St({props:{keywords:t[5](t[4])}}),k=new re({props:{rrss:t[3]}});let P=t[1]&&ie();return{c(){e=C("script"),o=C("script"),o.textContent="window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('consent', 'default', {\n            'ad_storage': 'denied',\n            'analytics_storage': 'denied',\n        })\n        dataLayer.push({\n            'event': 'default_consent'\n        });\n        \n        gtag('js', new Date());\n\n        gtag('config', 'G-F4YTG3EY7B');",r=j(),s=C("article"),l.c(),i=j(),u=C("h1"),u.textContent="Pablo Puga Peralta",d=j(),ct(f.$$.fragment),p=j(),ct(g.$$.fragment),m=j(),ct(h.$$.fragment),$=j(),ct(x.$$.fragment),y=j(),ct(k.$$.fragment),_=j(),P&&P.c(),e.async=!0,a(e.src,n="https://www.googletagmanager.com/gtag/js?id=G-F4YTG3EY7B")||M(e,"src","https://www.googletagmanager.com/gtag/js?id=G-F4YTG3EY7B"),M(u,"class","name text-4xl filter drop-shadow md:text-5xl font-bold text-center mt-16 mb-5 tracking-wider transition-all duration-100"),M(s,"class","font-sans text-gray-800 flex flex-col items-center gap-5 mb-20")},m(t,n){w(document.head,e),w(document.head,o),b(t,r,n),b(t,s,n),z[c].m(s,null),w(s,i),w(s,u),w(s,d),lt(f,s,null),w(s,p),lt(g,s,null),w(s,m),lt(h,s,null),w(s,$),lt(x,s,null),w(s,y),lt(k,s,null),w(s,_),P&&P.m(s,null),S=!0},p(t,[e]){let n=c;c=E(t),c===n?z[c].p(t,e):(tt(),ot(z[n],1,1,(()=>{z[n]=null})),et(),l=z[c],l?l.p(t,e):(l=z[c]=L[c](t),l.c()),nt(l,1),l.m(s,i));const o={};512&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o),t[1]?P?2&e&&nt(P,1):(P=ie(),P.c(),nt(P,1),P.m(s,null)):P&&(tt(),ot(P,1,1,(()=>{P=null})),et())},i(t){S||(nt(l),nt(f.$$.fragment,t),nt(g.$$.fragment,t),nt(h.$$.fragment,t),nt(x.$$.fragment,t),nt(k.$$.fragment,t),nt(P),S=!0)},o(t){ot(l),ot(f.$$.fragment,t),ot(g.$$.fragment,t),ot(h.$$.fragment,t),ot(x.$$.fragment,t),ot(k.$$.fragment,t),ot(P),S=!1},d(t){v(e),v(o),t&&v(r),t&&v(s),z[c].d(),it(f),it(g),it(h),it(x),it(k),P&&P.d()}}}function ue(t,e,n){let o,r;u(t,Pt,(t=>n(6,r=t)));const s=[{name:"Twitter",icon:gt.icon,display:"@Malevolo92",link:"https://twitter.com/Malevolo92",color:"#00acee"},{name:"Linkedin",icon:ft.icon,display:"Pablo Puga Peralta",link:"https://www.linkedin.com/in/pablopugaperalta",color:"#0e76a8"},{name:"GitHub",icon:pt.icon,display:"pablo-puga",link:"https://github.com/pablo-puga",color:"#6e5494"}];let c=!1;return t.$$.update=()=>{64&t.$$.dirty&&n(1,o=void 0===r)},[c,o,[{name:"Knowledge",logo:"project-pictures/knowledge.png",description:"Collection of commands, programming pieces or general technical concepts.",displayURL:"knowledge.pablopugaperalta.com",url:"https://knowledge.pablopugaperalta.com"},{name:"Recetas",logo:"project-pictures/recetas.png",description:"Collection (In Spanish) of some of my most used food recipes.",displayURL:"recetas.pablopugaperalta.com",url:"https://recetas.pablopugaperalta.com"},{name:"Pi Convergence",logo:"project-pictures/pi.png",description:"Showcase of different algorithms' convergence",displayURL:"pablopugaperalta.com/pi",url:"https://pablopugaperalta.com/pi"}],s,[{text:"PHP",weight:1},{text:"JavaScript",weight:1},{text:"TypeScript",weight:1},{text:"NodeJS",weight:1},{text:"Linux",weight:.6},{text:"Bash",weight:.6},{text:"HTML",weight:.5},{text:"SIP",weight:1},{text:"VoIP",weight:.7},{text:"Asterisk",weight:1},{text:"VoiceXML",weight:.6},{text:"C",weight:.6},{text:"C++",weight:.8},{text:"Git",weight:.2},{text:"MySQL",weight:.6},{text:"MongoDB",weight:.3},{text:"EC2",weight:.4},{text:"S3",weight:.2},{text:"Symfony",weight:.4},{text:"React",weight:.5},{text:"VueJS",weight:.2}],t=>{const e=Array.from(t);for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e},r,function(t){c=t,n(0,c)},()=>n(0,c=!c)]}return new class extends dt{constructor(t){super(),ut(this,t,ue,ae,l,{})}}({target:document.body})}();
