import{Q as de,r as g,o as K,w as x,c as i,L as fe,g as E,t as Q,i as ce,ae as ve,I as pe,y as me,l as ge,n as be,A as he,K as ye,h as a,p as $,D as Ce,B as qe}from"./index.61b58967.js";import{Q as X}from"./QBtn.f9c0e7c0.js";import{Q as xe}from"./vm.97b19522.js";import{a as _e,u as Se}from"./use-dark.261c17f9.js";import{h as P}from"./render.58bf3a7a.js";let L,M=0;const d=new Array(256);for(let e=0;e<256;e++)d[e]=(e+256).toString(16).substring(1);const we=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let r=o;r>0;r--)t.push(Math.floor(Math.random()*256));return t}})(),Y=4096;function H(){(L===void 0||M+16>Y)&&(M=0,L=we(Y));const e=Array.prototype.slice.call(L,M,M+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,d[e[0]]+d[e[1]]+d[e[2]]+d[e[3]]+"-"+d[e[4]]+d[e[5]]+"-"+d[e[6]]+d[e[7]]+"-"+d[e[8]]+d[e[9]]+"-"+d[e[10]]+d[e[11]]+d[e[12]]+d[e[13]]+d[e[14]]+d[e[15]]}function Be(e){return e==null?null:e}function ee(e,o){return e==null?o===!0?`f_${H()}`:null:e}function Re({getValue:e,required:o=!0}={}){if(de.value===!0){const t=e!==void 0?g(Be(e())):g(null);return o===!0&&t.value===null&&K(()=>{t.value=`f_${H()}`}),e!==void 0&&x(e,r=>{t.value=ee(r,o)}),t}return e!==void 0?i(()=>ee(e(),o)):g(`f_${H()}`)}const oe=/^on[A-Z]/;function Fe(){const{attrs:e,vnode:o}=E(),t={listeners:g({}),attributes:g({})};function r(){const c={},s={};for(const u in e)u!=="class"&&u!=="style"&&oe.test(u)===!1&&(c[u]=e[u]);for(const u in o.props)oe.test(u)===!0&&(s[u]=o.props[u]);t.attributes.value=c,t.listeners.value=s}return fe(r),r(),t}function Ae({validate:e,resetValidation:o,requiresQForm:t}){const r=ce(ve,!1);if(r!==!1){const{props:c,proxy:s}=E();Object.assign(s,{validate:e,resetValidation:o}),x(()=>c.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),K(()=>{c.disable!==!0&&r.bindComponent(s)}),Q(()=>{c.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const te=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,le=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,re=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,O=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,D=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,j={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>te.test(e),hexaColor:e=>le.test(e),hexOrHexaColor:e=>re.test(e),rgbColor:e=>O.test(e),rgbaColor:e=>D.test(e),rgbOrRgbaColor:e=>O.test(e)||D.test(e),hexOrRgbColor:e=>te.test(e)||O.test(e),hexaOrRgbaColor:e=>le.test(e)||D.test(e),anyColor:e=>re.test(e)||O.test(e)||D.test(e)},Ve=[!0,!1,"ondemand"],$e={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ve.includes(e)}};function ke(e,o){const{props:t,proxy:r}=E(),c=g(!1),s=g(null),u=g(!1);Ae({validate:B,resetValidation:w});let v=0,b;const A=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),h=i(()=>t.disable!==!0&&A.value===!0&&o.value===!1),S=i(()=>t.error===!0||c.value===!0),z=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:s.value);x(()=>t.modelValue,()=>{u.value=!0,h.value===!0&&t.lazyRules===!1&&C()});function V(){t.lazyRules!=="ondemand"&&h.value===!0&&u.value===!0&&C()}x(()=>t.reactiveRules,y=>{y===!0?b===void 0&&(b=x(()=>t.rules,V,{immediate:!0,deep:!0})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),x(()=>t.lazyRules,V),x(e,y=>{y===!0?u.value=!0:h.value===!0&&t.lazyRules!=="ondemand"&&C()});function w(){v++,o.value=!1,u.value=!1,c.value=!1,s.value=null,C.cancel()}function B(y=t.modelValue){if(t.disable===!0||A.value===!1)return!0;const R=++v,T=o.value!==!0?()=>{u.value=!0}:()=>{},q=(f,p)=>{f===!0&&T(),c.value=f,s.value=p||null,o.value=!1},F=[];for(let f=0;f<t.rules.length;f++){const p=t.rules[f];let m;if(typeof p=="function"?m=p(y,j):typeof p=="string"&&j[p]!==void 0&&(m=j[p](y)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&F.push(m)}return F.length===0?(q(!1),!0):(o.value=!0,Promise.all(F).then(f=>{if(f===void 0||Array.isArray(f)===!1||f.length===0)return R===v&&q(!1),!0;const p=f.find(m=>m===!1||typeof m=="string");return R===v&&q(p!==void 0,p),p===void 0},f=>(R===v&&(console.error(f),q(!0)),!1)))}const C=pe(B,0);return Q(()=>{b!==void 0&&b(),C.cancel()}),Object.assign(r,{resetValidation:w,validate:B}),me(r,"hasError",()=>S.value),{isDirtyModel:u,hasRules:A,hasError:S,errorMessage:z,validate:B,resetValidation:w}}let _=[],k=[];function ne(e){k=k.filter(o=>o!==e)}function Qe(e){ne(e),k.push(e)}function Ne(e){ne(e),k.length===0&&_.length!==0&&(_[_.length-1](),_=[])}function Ee(e){k.length===0?e():_.push(e)}function Ie(e){_=_.filter(o=>o!==e)}function Pe(e){return e!=null&&(""+e).length!==0}const Me={...Se,...$e,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ze={...Me,maxlength:[Number,String]},We=["update:modelValue","clear","focus","blur"];function Je({requiredForAttr:e=!0,tagProp:o,changeEvent:t=!1}={}){const{props:r,proxy:c}=E(),s=_e(r,c.$q),u=Re({required:e,getValue:()=>r.for});return{requiredForAttr:e,changeEvent:t,tag:o===!0?i(()=>r.tag):{value:"label"},isDark:s,editable:i(()=>r.disable!==!0&&r.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Fe(),targetUid:u,rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Ge(e){const{props:o,emit:t,slots:r,attrs:c,proxy:s}=E(),{$q:u}=s;let v=null;e.hasValue===void 0&&(e.hasValue=i(()=>Pe(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:N,onFocusout:Z}),Object.assign(e,{clearValue:U,onControlFocusin:N,onControlFocusout:Z,focus:p}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:b,hasRules:A,hasError:h,errorMessage:S,resetValidation:z}=ke(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),w=i(()=>o.bottomSlots===!0||o.hint!==void 0||A.value===!0||o.counter===!0||o.error!==null),B=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=i(()=>`q-field row no-wrap items-start q-field--${B.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&w.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),y=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(h.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=i(()=>o.labelSlot===!0||o.label!==void 0),T=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&h.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:o.modelValue,emitValue:e.emitValue})),F=i(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});function f(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function p(){Ee(f)}function m(){Ie(f);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function N(l){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function Z(l,n){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function U(l){ge(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),e.changeEvent===!0&&t("change",null),t("clear",o.modelValue),be(()=>{const n=b.value;z(),b.value=n})}function ue(l){[13,32].includes(l.keyCode)&&U(l)}function ae(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:$},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ie())),h.value===!0&&o.noErrorIcon===!1&&l.push(I("error",[a(X,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(I("inner-loading-append",r.loading!==void 0?r.loading():[a(xe,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(I("inner-clearable-append",[a(X,{class:"q-field__focusable-action",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,role:"button","aria-label":u.lang.label.clear,onKeyup:ue,onClick:U})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:$},r.append())),e.getInnerAppend!==void 0&&l.push(I("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ie(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),R.value===!0&&l.push(a("div",{class:T.value},P(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(P(r.default))}function se(){let l,n;h.value===!0?S.value!==null?(l=[a("div",{role:"alert"},S.value)],n=`q--slot-error-${S.value}`):(l=P(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=P(r.hint),n="q--slot-hint"));const J=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&J===!1&&l===void 0)return;const G=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:$},[o.hideBottomSpace===!0?G:a(Ce,{name:"q-transition--field-message"},()=>G),J===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function I(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let W=!1;return he(()=>{W=!0}),ye(()=>{W===!0&&o.autofocus===!0&&s.focus()}),o.autofocus===!0&&K(()=>{s.focus()}),Q(()=>{v!==null&&clearTimeout(v)}),Object.assign(s,{focus:p,blur:m}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...F.value}:F.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,c.class],style:c.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:$},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},ae()),w.value===!0?se():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:$},r.after()):null])}}const Xe={name:String};function Ye(e){return i(()=>e.name||e.for)}const Oe=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,De=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ze=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Te=/[a-z0-9_ -]$/i;function eo(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(qe.is.firefox===!0?Te.test(t.data)===!1:Oe.test(t.data)===!0||De.test(t.data)===!0||ze.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{We as a,Ge as b,Je as c,Qe as d,Ee as e,Xe as f,Ye as g,Pe as h,eo as i,Ne as r,Ze as u};