import{c as n,k as o,h as s}from"./index.26709672.js";const i={xs:18,sm:24,md:32,lg:38,xl:46},f={size:String};function m(e,t=i){return n(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const c={size:{type:[String,Number],default:"1em"},color:String};function u(e){return{cSize:n(()=>e.size in i?`${i[e.size]}px`:e.size),classes:n(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var d=o({name:"QSpinner",props:{...c,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=u(e);return()=>s("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function z(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function a(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(r=>{a(e,r)}):e.add(t)}function p(e){const t=new Set;return e.forEach(r=>{a(t,r)}),Array.from(t)}function S(e){return e.appContext.config.globalProperties.$router!==void 0}function h(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{d as Q,m as a,h as b,p as c,z as g,f as u,S as v};
