import{m as c,p as h,e as m,b as g,t as i,k as o,c as f}from"./web-DaMsNJIW.js";import{u as C,h as x,i as _,j as u}from"./routing-CokHNnMg.js";var $=i("<a>");function L(e){e=c({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=h(e,["href","state","class","activeClass","inactiveClass","end"]),l=C(()=>e.href),v=x(l),d=_(),n=m(()=>{const s=l();if(s===void 0)return[!1,!1];const a=u(s.split(/[?#]/,1)[0]).toLowerCase(),r=decodeURI(u(d.pathname).toLowerCase());return[e.end?a===r:r.startsWith(a+"/")||r===a,a===r]});return(()=>{var s=$();return g(s,c(t,{get href(){return v()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!n()[0],[e.activeClass]:n()[0],...t.classList}},link:"",get"aria-current"(){return n()[1]?"page":void 0}}),!1,!1),s})()}var j=i('<header class="gap-2 grid grid-cols-[1fr_auto_1fr]"><div class="flex flex-col justify-end col-start-2 bg-min p-2 h-20 md:h-40"><img class="w-12 h-auto"src=/site-umarova/images/logo.svg></div><div class="sm:flex flex-col justify-end hidden col-start-3 mb-6 font-ro text-3 select-none line-height-tight"><h1>Ingevroren- Noodel Draagtas</h1><span class=font-italic>Ministerie van Jodelen en Vingerverf');const y=()=>j();var P=i('<div class="relative flex flex-col items-center gap-12 min-h-dvh font-rijksoverheid">');function w({children:e}){return(()=>{var t=P();return o(t,f(L,{href:"/",get children(){return f(y,{})}}),null),o(t,e,null),t})()}export{w as default};