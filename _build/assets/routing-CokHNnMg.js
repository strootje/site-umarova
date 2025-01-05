import{H as T,e as v,g as oe,z as D,a as k,h as B,v as ce,o as G,G as ie,I as ue,J as le,u as fe,C as he,c as pe}from"./web-DaMsNJIW.js";function de(){let t=new Set;function e(s){return t.add(s),()=>t.delete(s)}let n=!1;function r(s,a){if(n)return!(n=!1);const o={to:s,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of t)i.listener({...o,from:i.location,retry:f=>{f&&(n=!0),i.navigate(s,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:e,confirm:r}}let M;function J(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),M=window.history.state._depth}J();function je(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function Be(t,e){let n=!1;return()=>{const r=M;J();const s=r==null?null:M-r;if(n){n=!1;return}s&&e(s)?(n=!0,window.history.go(-s)):t()}}const me=/^(?:[a-z0-9]+:)?\/\//i,ge=/^\/+|(\/)\/+$/g,ye="http://sr";function E(t,e=!1){const n=t.replace(ge,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function I(t,e,n){if(me.test(e))return;const r=E(t),s=n&&E(n);let a="";return!s||e.startsWith("/")?a=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+s:a=s,(a||"/")+E(e,!a)}function ve(t,e){if(t==null)throw new Error(e);return t}function we(t,e){return E(t).replace(/\/*(\*.*)?$/g,"")+E(e)}function X(t){const e={};return t.searchParams.forEach((n,r)=>{r in e?Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]:e[r]=n}),e}function Pe(t,e,n){const[r,s]=t.split("/*",2),a=r.split("/").filter(Boolean),o=a.length;return i=>{const f=i.split("/").filter(Boolean),h=f.length-o;if(h<0||h>0&&s===void 0&&!e)return null;const l={path:o?"":"/",params:{}},m=d=>n===void 0?void 0:n[d];for(let d=0;d<o;d++){const p=a[d],y=p[0]===":",w=y?f[d]:f[d].toLowerCase(),C=y?p.slice(1):p.toLowerCase();if(y&&$(w,m(C)))l.params[C]=w;else if(y||!$(w,C))return null;l.path+=`/${w}`}if(s){const d=h?f.slice(-h).join("/"):"";if($(d,m(s)))l.params[s]=d;else return null}return l}}function $(t,e){const n=r=>r===t;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function Re(t){const[e,n]=t.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,a)=>s+(a.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Q(t){const e=new Map,n=oe();return new Proxy({},{get(r,s){return e.has(s)||T(n,()=>e.set(s,v(()=>t()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function V(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),r=t.slice(e.index+e[0].length);const s=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=e[1]),r=r.slice(e[0].length);return V(r).reduce((a,o)=>[...a,...s.map(i=>i+o)],[])}const xe=100,be=k(),Y=k(),S=()=>ve(D(be),"<A> and 'use' router primitives can be only used inside a Route."),Ce=()=>D(Y)||S().base,Ie=t=>{const e=Ce();return v(()=>e.resolvePath(t()))},_e=t=>{const e=S();return v(()=>{const n=t();return n!==void 0?e.renderPath(n):n})},We=()=>S().navigatorFactory(),$e=()=>S().location,qe=()=>S().params;function Ae(t,e=""){const{component:n,preload:r,load:s,children:a,info:o}=t,i=!a||Array.isArray(a)&&!a.length,f={key:t,component:n,preload:r||s,info:o};return Z(t.path).reduce((h,l)=>{for(const m of V(l)){const d=we(e,m);let p=i?d:d.split("/*",1)[0];p=p.split("/").map(y=>y.startsWith(":")||y.startsWith("*")?y:encodeURIComponent(y)).join("/"),h.push({...f,originalPath:l,pattern:p,matcher:Pe(p,!i,t.matchFilters)})}return h},[])}function Ee(t,e=0){return{routes:t,score:Re(t[t.length-1])*1e4-e,matcher(n){const r=[];for(let s=t.length-1;s>=0;s--){const a=t[s],o=a.matcher(n);if(!o)return null;r.unshift({...o,route:a})}return r}}}function Z(t){return Array.isArray(t)?t:[t]}function Se(t,e="",n=[],r=[]){const s=Z(t);for(let a=0,o=s.length;a<o;a++){const i=s[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const f=Ae(i,e);for(const h of f){n.push(h);const l=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!l)Se(i.children,h.pattern,n,r);else{const m=Ee([...n],r.length);r.push(m)}n.pop()}}}return n.length?r:r.sort((a,o)=>o.score-a.score)}function q(t,e){for(let n=0,r=t.length;n<r;n++){const s=t[n].matcher(e);if(s)return s}return[]}function Fe(t,e,n){const r=new URL(ye),s=v(l=>{const m=t();try{return new URL(m,r)}catch{return console.error(`Invalid path ${m}`),l}},r,{equals:(l,m)=>l.href===m.href}),a=v(()=>s().pathname),o=v(()=>s().search,!0),i=v(()=>s().hash),f=()=>"",h=G(o,()=>X(s()));return{get pathname(){return a()},get search(){return o()},get hash(){return i()},get state(){return e()},get key(){return f()},query:n?n(h):Q(h)}}let P;function Me(){return P}let b=!1;function De(){return b}function Ue(t){b=t}function ze(t,e,n,r={}){const{signal:[s,a],utils:o={}}=t,i=o.parsePath||(c=>c),f=o.renderPath||(c=>c),h=o.beforeLeave||de(),l=I("",r.base||"");if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!s().value&&a({value:l,replace:!0,scroll:!1});const[m,d]=B(!1);let p;const y=(c,u)=>{u.value===w()&&u.state===F()||(p===void 0&&d(!0),P=c,p=u,ie(()=>{p===u&&(C(p.value),ee(p.state),ue(),U[1](g=>g.filter(R=>R.pending)))}).finally(()=>{p===u&&le(()=>{P=void 0,c==="navigate"&&se(p),d(!1),p=void 0})}))},[w,C]=B(s().value),[F,ee]=B(s().state),L=Fe(w,F,o.queryWrapper),O=[],U=B([]),z=v(()=>typeof r.transformUrl=="function"?q(e(),r.transformUrl(L.pathname)):q(e(),L.pathname)),K=()=>{const c=z(),u={};for(let g=0;g<c.length;g++)Object.assign(u,c[g].params);return u},te=o.paramsWrapper?o.paramsWrapper(K,e):Q(K),H={pattern:l,path:()=>l,outlet:()=>null,resolvePath(c){return I(l,c)}};return ce(G(s,c=>y("native",c),{defer:!0})),{base:H,location:L,params:te,isRouting:m,renderPath:f,parsePath:i,navigatorFactory:re,matches:z,beforeLeave:h,preloadRoute:ae,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:U};function ne(c,u,g){fe(()=>{if(typeof u=="number"){u&&(o.go?o.go(u):console.warn("Router integration does not support relative routing"));return}const R=!u||u[0]==="?",{replace:_,resolve:x,scroll:W,state:A}={replace:!1,resolve:!R,scroll:!0,...g},j=x?c.resolvePath(u):I(R&&L.pathname||"",u);if(j===void 0)throw new Error(`Path '${u}' is not a routable path`);if(O.length>=xe)throw new Error("Too many redirects");const N=w();(j!==N||A!==F())&&(he||h.confirm(j,g)&&(O.push({value:N,replace:_,scroll:W,state:F()}),y("navigate",{value:j,state:A})))})}function re(c){return c=c||D(Y)||H,(u,g)=>ne(c,u,g)}function se(c){const u=O[0];u&&(a({...c,replace:u.replace,scroll:u.scroll}),O.length=0)}function ae(c,u){const g=q(e(),c.pathname),R=P;P="preload";for(let _ in g){const{route:x,params:W}=g[_];x.component&&x.component.preload&&x.component.preload();const{preload:A}=x;b=!0,u&&A&&T(n(),()=>A({params:W,location:{pathname:c.pathname,search:c.search,hash:c.hash,query:X(c),state:null,key:""},intent:"preload"})),b=!1}P=R}}function Ke(t,e,n,r){const{base:s,location:a,params:o}=t,{pattern:i,component:f,preload:h}=r().route,l=v(()=>r().path);f&&f.preload&&f.preload(),b=!0;const m=h?h({params:o,location:a,intent:P||"initial"}):void 0;return b=!1,{parent:e,pattern:i,path:l,outlet:()=>f?pe(f,{params:o,location:a,data:m,get children(){return n()}}):n(),resolvePath(p){return I(s.path(),p,l())}}}export{be as R,ze as a,Y as b,Se as c,Ke as d,J as e,de as f,Me as g,_e as h,$e as i,E as j,je as k,qe as l,ye as m,Be as n,We as o,De as p,Ue as s,Ie as u};
