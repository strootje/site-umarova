const d={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return je(this.context.count)},getNextContextId(){return je(this.context.count++)}};function je(e){const t=String(e),n=t.length-1;return d.context.id+(n?String.fromCharCode(96+n):"")+t}function F(e){d.context=e}const ft=(e,t)=>e===t,he=Symbol("solid-proxy"),Ue=typeof Proxy=="function",ge={equals:ft};let re=null,qe=Je;const k=1,oe=2,Ge={owned:null,cleanups:null,context:null,owner:null},Pe={};var p=null;let u=null,ut=null,m=null,v=null,O=null,me=0;function He(e,t){const n=m,s=p,r=e.length===0,i=t===void 0?s:t,o=r?Ge:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=r?e:()=>e(()=>N(()=>_(o)));p=o,m=null;try{return R(l,!0)}finally{m=n,p=s}}function $(e,t){t=t?Object.assign({},ge,t):ge;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(u&&u.running&&u.sources.has(n)?r=r(n.tValue):r=r(n.value)),Qe(n,r));return[ze.bind(n),s]}function ke(e,t,n){const s=fe(e,t,!0,k);Z(s)}function B(e,t,n){const s=fe(e,t,!1,k);Z(s)}function yn(e,t,n){qe=bt;const s=fe(e,t,!1,k),r=G&&J(G);r&&(s.suspense=r),s.user=!0,O?O.push(s):Z(s)}function C(e,t,n){n=n?Object.assign({},ge,n):ge;const s=fe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Z(s),ze.bind(s)}function ct(e){return e&&typeof e=="object"&&"then"in e}function at(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i={}):(s=e,r=t,i={});let o=null,l=Pe,f=null,a=!1,c=!1,g="initialValue"in i,h=typeof s=="function"&&C(s);const y=new Set,[w,E]=(i.storage||$)(i.initialValue),[T,j]=$(void 0),[V,M]=$(void 0,{equals:!1}),[U,ee]=$(g?"ready":"unresolved");d.context&&(f=d.getNextContextId(),i.ssrLoadFrom==="initial"?l=i.initialValue:d.load&&d.has(f)&&(l=d.load(f)));function I(S,P,A,D){return o===S&&(o=null,D!==void 0&&(g=!0),(S===l||P===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(D,{value:P})),l=Pe,u&&S&&a?(u.promises.delete(S),a=!1,R(()=>{u.running=!0,te(P,A)},!1)):te(P,A)),P}function te(S,P){R(()=>{P===void 0&&E(()=>S),ee(P!==void 0?"errored":g?"ready":"unresolved"),j(P);for(const A of y.keys())A.decrement();y.clear()},!1)}function ne(){const S=G&&J(G),P=w(),A=T();if(A!==void 0&&!o)throw A;return m&&!m.user&&S&&ke(()=>{V(),o&&(S.resolved&&u&&a?u.promises.add(o):y.has(S)||(S.increment(),y.add(S)))}),P}function K(S=!0){if(S!==!1&&c)return;c=!1;const P=h?h():s;if(a=u&&u.running,P==null||P===!1){I(o,N(w));return}u&&o&&u.promises.delete(o);const A=l!==Pe?l:N(()=>r(P,{value:w(),refetching:S}));return ct(A)?(o=A,"value"in A?(A.status==="success"?I(o,A.value,void 0,P):I(o,void 0,Oe(A.value),P),A):(c=!0,queueMicrotask(()=>c=!1),R(()=>{ee(g?"refreshing":"pending"),M()},!1),A.then(D=>I(A,D,void 0,P),D=>I(A,void 0,Oe(D),P)))):(I(o,A,void 0,P),A)}return Object.defineProperties(ne,{state:{get:()=>U()},error:{get:()=>T()},loading:{get(){const S=U();return S==="pending"||S==="refreshing"}},latest:{get(){if(!g)return ne();const S=T();if(S&&!o)throw S;return w()}}}),h?ke(()=>K(!1)):K(!1),[ne,{refetch:K,mutate:E}]}function dt(e){return R(e,!1)}function N(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Ke(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(i)return i=!1,o;const f=N(()=>t(l,r,o));return r=l,f}}function We(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function ht(e,t){re||(re=Symbol("error")),p=fe(void 0,void 0,!0),p.context={...p.context,[re]:[t]},u&&u.running&&u.sources.add(p);try{return e()}catch(n){ue(n)}finally{p=p.owner}}function mn(){return m}function Xe(){return p}function Ye(e,t){const n=p,s=m;p=e,m=null;try{return R(t,!0)}catch(r){ue(r)}finally{p=n,m=s}}function gt(e){if(u&&u.running)return e(),u.done;const t=m,n=p;return Promise.resolve().then(()=>{m=t,p=n;let s;return G&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),R(e,!1),m=p=null,s?s.done:void 0})}const[wn,Ie]=$(!1);function pt(e){O.push.apply(O,e),e.length=0}function we(e,t){const n=Symbol("context");return{id:n,Provider:xt(n),defaultValue:e}}function J(e){let t;return p&&p.context&&(t=p.context[e.id])!==void 0?t:e.defaultValue}function yt(e){const t=C(e),n=C(()=>ve(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let G;function mt(){return G||(G=we())}function ze(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===k)Z(this);else{const t=v;v=null,R(()=>ye(this),!1),v=t}if(m){const t=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(t)):(m.sources=[this],m.sourceSlots=[t]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function Qe(e,t,n){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(u){const r=u.running;(r||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&R(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=u&&u.running;o&&u.disposed.has(i)||((o?!i.tState:!i.state)&&(i.pure?v.push(i):O.push(i),i.observers&&Ze(i)),o?i.tState=k:i.state=k)}if(v.length>1e6)throw v=[],new Error},!1)}return t}function Z(e){if(!e.fn)return;_(e);const t=me;Fe(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,t),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{R(()=>{u&&(u.running=!0),m=p=e,Fe(e,e.tValue,t),m=p=null},!1)})}function Fe(e,t,n){let s;const r=p,i=m;m=p=e;try{s=e.fn(t)}catch(o){return e.pure&&(u&&u.running?(e.tState=k,e.tOwned&&e.tOwned.forEach(_),e.tOwned=void 0):(e.state=k,e.owned&&e.owned.forEach(_),e.owned=null)),e.updatedAt=n+1,ue(o)}finally{m=i,p=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Qe(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function fe(e,t,n,s=k,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return u&&u.running&&(i.state=0,i.tState=s),p===null||p!==Ge&&(u&&u.running&&p.pure?p.tOwned?p.tOwned.push(i):p.tOwned=[i]:p.owned?p.owned.push(i):p.owned=[i]),i}function pe(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===oe)return ye(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<me);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(u.disposed.has(r))return}if((t?e.tState:e.state)===k)Z(e);else if((t?e.tState:e.state)===oe){const r=v;v=null,R(()=>ye(e,n[0]),!1),v=r}}}function R(e,t){if(v)return e();let n=!1;t||(v=[]),O?n=!0:O=[],me++;try{const s=e();return wt(n),s}catch(s){n||(O=null),v=null,ue(s)}}function wt(e){if(v&&(Je(v),v=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,r=u.disposed;O.push.apply(O,u.effects),t=u.resolve;for(const i of O)"tState"in i&&(i.state=i.tState),delete i.tState;u=null,R(()=>{for(const i of r)_(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let o=0,l=i.owned.length;o<l;o++)_(i.owned[o]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ie(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,O),O=null,Ie(!0);return}}const n=O;O=null,n.length&&R(()=>qe(n),!1),t&&t()}function Je(e){for(let t=0;t<e.length;t++)pe(e[t])}function bt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:pe(s)}if(d.context){if(d.count){d.effects||(d.effects=[]),d.effects.push(...e.slice(0,n));return}F()}for(d.effects&&(d.done||!d.count)&&(e=[...d.effects,...e],n+=d.effects.length,delete d.effects),t=0;t<n;t++)pe(e[t])}function ye(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===k?r!==t&&(!r.updatedAt||r.updatedAt<me)&&pe(r):i===oe&&ye(r,t)}}}function Ze(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=oe:s.state=oe,s.pure?v.push(s):O.push(s),s.observers&&Ze(s))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),o=n.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,n.observerSlots[s]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)_(e.tOwned[t]);delete e.tOwned}if(u&&u.running&&e.pure)et(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function et(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)et(e.owned[n])}function Oe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Me(e,t,n){try{for(const s of t)s(e)}catch(s){ue(s,n&&n.owner||null)}}function ue(e,t=p){const n=re&&t&&t.context&&t.context[re],s=Oe(e);if(!n)throw s;O?O.push({fn(){Me(s,n,t)},state:k}):Me(s,n,t)}function ve(e){if(typeof e=="function"&&!e.length)return ve(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ve(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function xt(e,t){return function(s){let r;return B(()=>r=N(()=>(p.context={...p.context,[e]:s.value},yt(()=>s.children))),void 0),r}}function tt(e,t){return N(()=>e(t||{}))}function ae(){return!0}const Ne={get(e,t,n){return t===he?n:e.get(t)},has(e,t){return t===he?!0:e.has(t)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)?e:{}}function St(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function bn(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&he in l,e[o]=typeof l=="function"?(t=!0,C(l)):l}if(Ue&&t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const f=Ae(e[l])[o];if(f!==void 0)return f}},has(o){for(let l=e.length-1;l>=0;l--)if(o in Ae(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(Ae(e[l])));return[...new Set(o)]}},Ne);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const f=Object.getOwnPropertyNames(l);for(let a=f.length-1;a>=0;a--){const c=f[a];if(c==="__proto__"||c==="constructor")continue;const g=Object.getOwnPropertyDescriptor(l,c);if(!s[c])s[c]=g.get?{enumerable:!0,configurable:!0,get:St.bind(n[c]=[g.get.bind(l)])}:g.value!==void 0?g:void 0;else{const h=n[c];h&&(g.get?h.push(g.get.bind(l)):g.value!==void 0&&h.push(()=>g.value))}}}const r={},i=Object.keys(s);for(let o=i.length-1;o>=0;o--){const l=i[o],f=s[l];f&&f.get?Object.defineProperty(r,l,f):r[l]=f?f.value:void 0}return r}function Pt(e,...t){if(Ue&&he in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},Ne));return i.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},Ne)),i}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,f=0;for(const a of t)a.includes(r)&&(l=!0,o?s[f][r]=i.value:Object.defineProperty(s[f],r,i)),++f;l||(o?n[r]=i.value:Object.defineProperty(n,r,i))}return[...s,n]}function xn(e){let t,n;const s=r=>{const i=d.context;if(i){const[l,f]=$();d.count||(d.count=0),d.count++,(n||(n=e())).then(a=>{!d.done&&F(i),d.count--,f(()=>a.default),F()}),t=l}else if(!t){const[l]=at(()=>(n||(n=e())).then(f=>f.default));t=l}let o;return C(()=>(o=t())?N(()=>{if(!i||d.done)return o(r);const l=d.context;F(i);const f=o(r);return F(l),f}):"")};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}const At=e=>`Stale read from <${e}>.`;function Sn(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return C(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?N(()=>r(t?s:()=>{if(!N(n))throw At("Show");return e.when})):r}return e.fallback},void 0,void 0)}let z;function Ct(){z&&[...z].forEach(e=>e())}function Pn(e){let t;d.context&&d.load&&(t=d.load(d.getContextId()));const[n,s]=$(t,void 0);return z||(z=new Set),z.add(s),We(()=>z.delete(s)),C(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?N(()=>i(r,()=>s())):i}return ht(()=>e.children,s)},void 0,void 0)}const Et=we();function An(e){let t=0,n,s,r,i,o;const[l,f]=$(!1),a=mt(),c={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:l,effects:[],resolved:!1},g=Xe();if(d.context&&d.load){const w=d.getContextId();let E=d.load(w);if(E&&(typeof E!="object"||E.status!=="success"?r=E:d.gather(w)),r&&r!=="$$f"){const[T,j]=$(void 0,{equals:!1});i=T,r.then(()=>{if(d.done)return j();d.gather(w),F(s),j(),F()},V=>{o=V,j()})}}const h=J(Et);h&&(n=h.register(c.inFallback));let y;return We(()=>y&&y()),tt(a.Provider,{value:c,get children(){return C(()=>{if(o)throw o;if(s=d.context,i)return i(),i=void 0;s&&r==="$$f"&&F();const w=C(()=>e.children);return C(E=>{const T=c.inFallback(),{showContent:j=!0,showFallback:V=!0}=n?n():{};if((!T||r&&r!=="$$f")&&j)return c.resolved=!0,y&&y(),y=s=r=void 0,pt(c.effects),w();if(V)return y?E:He(M=>(y=M,s&&(F({id:s.id+"F",count:0}),s=void 0),e.fallback),g)})})}})}const Ot=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],vt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ot]),Nt=new Set(["innerHTML","textContent","innerText","children"]),Tt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Lt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function $t(e,t){const n=Lt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Rt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),jt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),kt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function It(e,t,n){let s=n.length,r=t.length,i=s,o=0,l=0,f=t[r-1].nextSibling,a=null;for(;o<r||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===o){const c=i<s?l?n[l-1].nextSibling:n[i-l]:f;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<r;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!a){a=new Map;let g=l;for(;g<i;)a.set(n[g],g++)}const c=a.get(t[o]);if(c!=null)if(l<c&&c<i){let g=o,h=1,y;for(;++g<r&&g<i&&!((y=a.get(t[g]))==null||y!==c+h);)h++;if(h>c-l){const w=t[o];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const De="_$DX_DELEGATE";function Cn(e,t,n,s={}){let r;return He(i=>{r=i,t===document?e():Ht(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function En(e,t,n){let s;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function Ft(e,t=window.document){const n=t[De]||(t[De]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Yt))}}function Te(e,t,n){H(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Mt(e,t,n,s){H(e)||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function Dt(e,t,n){H(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function Bt(e,t){H(e)||(t==null?e.removeAttribute("class"):e.className=t)}function _t(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Vt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,o;for(i=0,o=r.length;i<o;i++){const l=r[i];!l||l==="undefined"||t[l]||(Be(e,l,!1),delete n[l])}for(i=0,o=s.length;i<o;i++){const l=s[i],f=!!t[l];!l||l==="undefined"||n[l]===f||!f||(Be(e,l,!0),n[l]=f)}return n}function Ut(e,t,n){if(!t)return n?Te(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function qt(e,t={},n,s){const r={};return s||B(()=>r.children=le(e,t.children,r.children)),B(()=>typeof t.ref=="function"&&Gt(t.ref,e)),B(()=>Kt(e,t,n,!0,r,!0)),r}function Gt(e,t,n){return N(()=>e(t,n))}function Ht(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return le(e,t,s,n);B(r=>le(e,t(),r,n),s)}function Kt(e,t,n,s,r={},i=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=_e(e,o,null,r[o],n,i,t)}for(const o in t){if(o==="children")continue;const l=t[o];r[o]=_e(e,o,l,r[o],n,i,t)}}function Wt(e){let t,n;return!H()||!(t=d.registry.get(n=zt()))?e():(d.completed&&d.completed.add(t),d.registry.delete(n),t)}function H(e){return!!d.context&&!d.done&&(!e||e.isConnected)}function Xt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Be(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function _e(e,t,n,s,r,i,o){let l,f,a,c,g;if(t==="style")return Ut(e,n,s);if(t==="classList")return Vt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s,typeof s!="function"&&s),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),y=Rt.has(h);if(!y&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(h,w)}(y||n)&&(_t(e,h,n,y),y&&Ft([h]))}else if(t.slice(0,5)==="attr:")Te(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Dt(e,t.slice(5),n);else if((g=t.slice(0,5)==="prop:")||(a=Nt.has(t))||!r&&((c=$t(t,e.tagName))||(f=vt.has(t)))||(l=e.nodeName.includes("-")||"is"in o)){if(g)t=t.slice(5),f=!0;else if(H(e))return n;t==="class"||t==="className"?Bt(e,n):l&&!f&&!a?e[Xt(t)]=n:e[c||t]=n}else{const h=r&&t.indexOf(":")>-1&&kt[t.split(":")[0]];h?Mt(e,h,t,n):Te(e,Tt[t]||t,n)}return n}function Yt(e){if(d.registry&&d.events&&d.events.find(([f,a])=>a===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,i=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),o=()=>{const f=t[n];if(f&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?f.call(t,a,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},l=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();i(f[0]);for(let a=0;a<f.length-2&&(t=f[a],!!o());a++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();i(s)}function le(e,t,n,s,r){const i=H(e);if(i){!n&&(n=[...e.childNodes]);let f=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():f.push(c)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(i||o==="number"&&(t=t.toString(),t===n))return n;if(l){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=Y(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(i)return n;n=Y(e,n,s)}else{if(o==="function")return B(()=>{let f=t();for(;typeof f=="function";)f=f();n=le(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],a=n&&Array.isArray(n);if(Le(f,t,n,r))return B(()=>n=le(e,f,n,s,!0)),()=>n;if(i){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let c=f[0];if(c.parentNode!==e)return n;const g=[c];for(;(c=c.nextSibling)!==s;)g.push(c);return n=g}if(f.length===0){if(n=Y(e,n,s),l)return n}else a?n.length===0?Ve(e,f,s):It(e,n,f):(n&&Y(e),Ve(e,f));n=f}else if(t.nodeType){if(i&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=Y(e,n,s,t);Y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Le(e,t,n,s){let r=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],f=n&&n[e.length],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Le(e,l,f)||r;else if(a==="function")if(s){for(;typeof l=="function";)l=l();r=Le(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||r}else e.push(l),r=!0;else{const c=String(l);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return r}function Ve(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function Y(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const f=l.parentNode===e;!i&&!o?f?e.replaceChild(r,l):e.insertBefore(r,n):f&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function zt(){return d.getNextContextId()}const Qt=!1,Jt="http://www.w3.org/2000/svg";function Zt(e,t=!1){return t?document.createElementNS(Jt,e):document.createElement(e)}function On(e){const[t,n]=Pt(e,["component"]),s=C(()=>t.component);return C(()=>{const r=s();switch(typeof r){case"function":return N(()=>r(n));case"string":const i=jt.has(r),o=d.context?Wt():Zt(r,i);return qt(o,n,i),o}})}function en(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const o={to:r,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:f=>{f&&(n=!0),l.navigate(r,{...i,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:s}}let $e;function nt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),$e=window.history.state._depth}nt();function vn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Nn(e,t){let n=!1;return()=>{const s=$e;nt();const r=s==null?null:$e-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const tn=/^(?:[a-z0-9]+:)?\/\//i,nn=/^\/+|(\/)\/+$/g,sn="http://sr";function ie(e,t=!1){const n=e.replace(nn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(tn.test(t))return;const s=ie(e),r=n&&ie(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+ie(t,!i)}function rn(e,t){if(e==null)throw new Error(t);return e}function on(e,t){return ie(e).replace(/\/*(\*.*)?$/g,"")+ie(t)}function st(e){const t={};return e.searchParams.forEach((n,s)=>{s in t?Array.isArray(t[s])?t[s].push(n):t[s]=[t[s],n]:t[s]=n}),t}function ln(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),o=i.length;return l=>{const f=l.split("/").filter(Boolean),a=f.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}},g=h=>n===void 0?void 0:n[h];for(let h=0;h<o;h++){const y=i[h],w=y[0]===":",E=w?f[h]:f[h].toLowerCase(),T=w?y.slice(1):y.toLowerCase();if(w&&Ce(E,g(T)))c.params[T]=E;else if(w||!Ce(E,T))return null;c.path+=`/${E}`}if(r){const h=a?f.slice(-a).join("/"):"";if(Ce(h,g(r)))c.params[r]=h;else return null}return c}}function Ce(e,t){const n=s=>s===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function fn(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function rt(e){const t=new Map,n=Xe();return new Proxy({},{get(s,r){return t.has(r)||Ye(n,()=>t.set(r,C(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function it(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return it(s).reduce((i,o)=>[...i,...r.map(l=>l+o)],[])}const un=100,cn=we(),ot=we(),be=()=>rn(J(cn),"<A> and 'use' router primitives can be only used inside a Route."),an=()=>J(ot)||be().base,Tn=e=>{const t=an();return C(()=>t.resolvePath(e()))},Ln=e=>{const t=be();return C(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},$n=()=>be().navigatorFactory(),Rn=()=>be().location;function dn(e,t=""){const{component:n,preload:s,load:r,children:i,info:o}=e,l=!i||Array.isArray(i)&&!i.length,f={key:e,component:n,preload:s||r,info:o};return lt(e.path).reduce((a,c)=>{for(const g of it(c)){const h=on(t,g);let y=l?h:h.split("/*",1)[0];y=y.split("/").map(w=>w.startsWith(":")||w.startsWith("*")?w:encodeURIComponent(w)).join("/"),a.push({...f,originalPath:c,pattern:y,matcher:ln(y,!l,e.matchFilters)})}return a},[])}function hn(e,t=0){return{routes:e,score:fn(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],o=i.matcher(n);if(!o)return null;s.unshift({...o,route:i})}return s}}}function lt(e){return Array.isArray(e)?e:[e]}function gn(e,t="",n=[],s=[]){const r=lt(e);for(let i=0,o=r.length;i<o;i++){const l=r[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const f=dn(l,t);for(const a of f){n.push(a);const c=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!c)gn(l.children,a.pattern,n,s);else{const g=hn([...n],s.length);s.push(g)}n.pop()}}}return n.length?s:s.sort((i,o)=>o.score-i.score)}function Ee(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function pn(e,t,n){const s=new URL(sn),r=C(c=>{const g=e();try{return new URL(g,s)}catch{return console.error(`Invalid path ${g}`),c}},s,{equals:(c,g)=>c.href===g.href}),i=C(()=>r().pathname),o=C(()=>r().search,!0),l=C(()=>r().hash),f=()=>"",a=Ke(o,()=>st(r()));return{get pathname(){return i()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return f()},query:n?n(a):rt(a)}}let q;function jn(){return q}let Q=!1;function kn(){return Q}function In(e){Q=e}function Fn(e,t,n,s={}){const{signal:[r,i],utils:o={}}=e,l=o.parsePath||(b=>b),f=o.renderPath||(b=>b),a=o.beforeLeave||en(),c=de("",s.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[g,h]=$(!1);let y;const w=(b,x)=>{x.value===E()&&x.state===j()||(y===void 0&&h(!0),q=b,y=x,gt(()=>{y===x&&(T(y.value),V(y.state),Ct(),ee[1](L=>L.filter(W=>W.pending)))}).finally(()=>{y===x&&dt(()=>{q=void 0,b==="navigate"&&A(y),h(!1),y=void 0})}))},[E,T]=$(r().value),[j,V]=$(r().state),M=pn(E,j,o.queryWrapper),U=[],ee=$([]),I=C(()=>typeof s.transformUrl=="function"?Ee(t(),s.transformUrl(M.pathname)):Ee(t(),M.pathname)),te=()=>{const b=I(),x={};for(let L=0;L<b.length;L++)Object.assign(x,b[L].params);return x},ne=o.paramsWrapper?o.paramsWrapper(te,t):rt(te),K={pattern:c,path:()=>c,outlet:()=>null,resolvePath(b){return de(c,b)}};return B(Ke(r,b=>w("native",b),{defer:!0})),{base:K,location:M,params:ne,isRouting:g,renderPath:f,parsePath:l,navigatorFactory:P,matches:I,beforeLeave:a,preloadRoute:D,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:ee};function S(b,x,L){N(()=>{if(typeof x=="number"){x&&(o.go?o.go(x):console.warn("Router integration does not support relative routing"));return}const W=!x||x[0]==="?",{replace:xe,resolve:X,scroll:Se,state:se}={replace:!1,resolve:!W,scroll:!0,...L},ce=X?b.resolvePath(x):de(W&&M.pathname||"",x);if(ce===void 0)throw new Error(`Path '${x}' is not a routable path`);if(U.length>=un)throw new Error("Too many redirects");const Re=E();(ce!==Re||se!==j())&&(Qt||a.confirm(ce,L)&&(U.push({value:Re,replace:xe,scroll:Se,state:j()}),w("navigate",{value:ce,state:se})))})}function P(b){return b=b||J(ot)||K,(x,L)=>S(b,x,L)}function A(b){const x=U[0];x&&(i({...b,replace:x.replace,scroll:x.scroll}),U.length=0)}function D(b,x){const L=Ee(t(),b.pathname),W=q;q="preload";for(let xe in L){const{route:X,params:Se}=L[xe];X.component&&X.component.preload&&X.component.preload();const{preload:se}=X;Q=!0,x&&se&&Ye(n(),()=>se({params:Se,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:st(b),state:null,key:""},intent:"preload"})),Q=!1}q=W}}function Mn(e,t,n,s){const{base:r,location:i,params:o}=e,{pattern:l,component:f,preload:a}=s().route,c=C(()=>s().path);f&&f.preload&&f.preload(),Q=!0;const g=a?a({params:o,location:i,intent:q||"initial"}):void 0;return Q=!1,{parent:t,pattern:l,path:c,outlet:()=>f?tt(f,{params:o,location:i,data:g,get children(){return n()}}):n(),resolvePath(y){return de(r.path(),y,c())}}}export{En as A,xn as B,An as C,Cn as D,Pn as E,Pt as F,Tn as G,Ln as H,Rn as I,ie as J,J as K,On as L,yn as M,at as N,B as O,Te as P,$n as Q,cn as R,Sn as S,mn as T,Qt as U,gt as V,kn as W,we as a,qt as b,tt as c,yt as d,C as e,gn as f,Fn as g,Xe as h,In as i,jn as j,ot as k,He as l,Mn as m,$ as n,Ke as o,We as p,Ft as q,sn as r,d as s,vn as t,N as u,nt as v,en as w,Nn as x,bn as y,Ht as z};