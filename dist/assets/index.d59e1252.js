var R=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var S=(e,s,t)=>s in e?R(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,T=(e,s)=>{for(var t in s||(s={}))D.call(s,t)&&S(e,t,s[t]);if(x)for(var t of x(s))F.call(s,t)&&S(e,t,s[t]);return e},g=(e,s)=>L(e,O(s));import{j as y,P as f,u as $,F as P,r as h,L as w,B as _,R as B,a as N,c as E,b as q}from"./vendor.6bd36663.js";const I=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};I();const r=y.exports.jsx,l=y.exports.jsxs,j=y.exports.Fragment,b=({color:e,text:s,onClick:t})=>r("button",{onClick:t,style:{backgroundColor:e},className:"btn",children:s});b.defaultProps={color:"steelBlue"};b.propTypes={text:f.string,color:f.string,onClick:f.func};const v=({title:e,onAdd:s,showAdd:t})=>{const n=$();return l("header",{className:"header",children:[r("h1",{children:e}),n.pathname==="/"&&r(b,{color:t?"red":"green",text:t?"Close":"Add",onClick:s})]})};v.defaultProps={title:"Task Tracker"};v.propTypes={title:f.string.isRequired};const V=({task:e,onDelete:s,onToggle:t})=>l("div",{className:`task ${e.reminder?"reminder":""}`,onDoubleClick:()=>t(e.id),children:[l("h3",{children:[e.text," ",r(P,{style:{color:"red",cursor:"pointer"},onClick:()=>s(e.id)})]}),r("p",{children:e.day})]}),J=({tasks:e,onDelete:s,onToggle:t})=>r(j,{children:e.map((n,o)=>r(V,{task:n,onDelete:s,onToggle:t},o))}),W=({onAdd:e})=>{const[s,t]=h.exports.useState(""),[n,o]=h.exports.useState(""),[a,c]=h.exports.useState(!1);return l("form",{className:"add-form",onSubmit:d=>{if(d.preventDefault(),!s){alert("Please add a Task");return}e({text:s,day:n,reminder:a}),t(""),o(""),c("")},children:[l("div",{className:"form-control",children:[r("label",{children:"Task"}),r("input",{type:"text",placeholder:"Add Task",value:s,onChange:d=>t(d.target.value)})]}),l("div",{className:"form-control form-control-check",children:[r("label",{children:"Day"}),r("input",{type:"text",placeholder:"Add Day & Time",value:n,onChange:d=>o(d.target.value)})]}),l("div",{className:"form-control",children:[r("label",{children:"Reminder"}),r("input",{type:"checkbox",checked:a,value:a,onChange:d=>c(d.currentTarget.checked)})]}),r("input",{type:"Submit",value:"Save Task",className:"btn btn-block"})]})},G=()=>l("footer",{children:[r("p",{children:"Copyright \xA9 2023"}),r(w,{to:"/about",children:"About"})]}),H=()=>l("div",{children:[r("h4",{children:"Version 1.0.0"}),r(w,{to:"/",children:"Go Back"})]});function K(){const[e,s]=h.exports.useState(!1),[t,n]=h.exports.useState([]);h.exports.useEffect(()=>{(async()=>{const u=await o();n(u)})()},[]);const o=async()=>await(await fetch("http://localhost:5000/tasks")).json(),a=async i=>await(await fetch(`http://localhost:5000/tasks/${i}`)).json(),c=async i=>{await fetch(`http://localhost:5000/tasks/${i}`,{method:"DELETE"}),n(t.filter(u=>u.id!==i))},p=async i=>{const u=await a(i),m=g(T({},u),{reminder:!u.reminder}),C=await(await fetch(`http://localhost:5000/tasks/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json();n(t.map(k=>k.id===i?g(T({},k),{reminder:!C.reminder}):k))};return r(_,{children:l("div",{className:"container",children:[r(v,{title:"Task Tracker",onAdd:()=>s(!e),showAdd:e}),l(B,{children:[r(N,{path:"/",element:l(j,{children:[e&&r(W,{onAdd:async i=>{const m=await(await fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(i)})).json();n([...t,m])}}),t.length>0?r(J,{tasks:t,onDelete:c,onToggle:p}):"No Tasks To Show"]})}),r(N,{path:"/about",element:r(H,{})})]}),r(G,{})]})})}const M="modulepreload",A={},U="/",z=function(s,t){return!t||t.length===0?s():Promise.all(t.map(n=>{if(n=`${U}${n}`,n in A)return;A[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":M,o||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),o)return new Promise((p,d)=>{c.addEventListener("load",p),c.addEventListener("error",d)})})).then(()=>s())},Q=e=>{e&&e instanceof Function&&z(()=>import("./web-vitals.67dce932.js"),[]).then(({getCLS:s,getFID:t,getFCP:n,getLCP:o,getTTFB:a})=>{s(e),t(e),n(e),o(e),a(e)})},X=E.createRoot(document.getElementById("root"));X.render(r(q.StrictMode,{children:r(K,{})}));Q();
