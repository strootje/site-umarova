import{m as l,p as v,e as h,b as m,t as g}from"./web-DaMsNJIW.js";import{u as d,h as C,i as f,j as u,l as L}from"./routing-BzQ-5Ukz.js";var N=g("<a>");function w(t){t=l({inactiveClass:"inactive",activeClass:"active"},t);const[,e]=v(t,["href","state","class","activeClass","inactiveClass","end"]),i=d(()=>t.href),a=C(i),o=f(),s=h(()=>{const n=i();if(n===void 0)return[!1,!1];const r=u(n.split(/[?#]/,1)[0]).toLowerCase(),c=decodeURI(u(o.pathname).toLowerCase());return[t.end?r===c:c.startsWith(r+"/")||c===r,r===c]});return(()=>{var n=N();return m(n,l(e,{get href(){return a()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!s()[0],[t.activeClass]:s()[0],...e.classList}},link:"",get"aria-current"(){return s()[1]?"page":void 0}}),!1,!1),n})()}function y(t){const e=L(),i=f(),{href:a,state:o}=t,s=typeof a=="function"?a({navigate:e,location:i}):a;return e(s,{replace:!0,state:o}),null}export{w as A,y as N};