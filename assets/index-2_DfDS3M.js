var kj=Object.defineProperty;var Tj=(e,t,r)=>t in e?kj(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Sn=(e,t,r)=>Tj(e,typeof t!="symbol"?t+"":t,r);function F8(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(n,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M8(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ij(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}),r}var N_={exports:{}},Bp={},A_={exports:{}},an={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=Symbol.for("react.element"),jj=Symbol.for("react.portal"),Lj=Symbol.for("react.fragment"),Rj=Symbol.for("react.strict_mode"),Pj=Symbol.for("react.profiler"),Fj=Symbol.for("react.provider"),Mj=Symbol.for("react.context"),Oj=Symbol.for("react.forward_ref"),Dj=Symbol.for("react.suspense"),$j=Symbol.for("react.memo"),Bj=Symbol.for("react.lazy"),qv=Symbol.iterator;function Uj(e){return e===null||typeof e!="object"?null:(e=qv&&e[qv]||e["@@iterator"],typeof e=="function"?e:null)}var E_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S_=Object.assign,C_={};function h1(e,t,r){this.props=e,this.context=t,this.refs=C_,this.updater=r||E_}h1.prototype.isReactComponent={};h1.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};h1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k_(){}k_.prototype=h1.prototype;function O8(e,t,r){this.props=e,this.context=t,this.refs=C_,this.updater=r||E_}var D8=O8.prototype=new k_;D8.constructor=O8;S_(D8,h1.prototype);D8.isPureReactComponent=!0;var Zv=Array.isArray,T_=Object.prototype.hasOwnProperty,$8={current:null},I_={key:!0,ref:!0,__self:!0,__source:!0};function j_(e,t,r){var n,a={},s=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)T_.call(t,n)&&!I_.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var d=Array(c),f=0;f<c;f++)d[f]=arguments[f+2];a.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)a[n]===void 0&&(a[n]=c[n]);return{$$typeof:Th,type:e,key:s,ref:o,props:a,_owner:$8.current}}function Vj(e,t){return{$$typeof:Th,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function B8(e){return typeof e=="object"&&e!==null&&e.$$typeof===Th}function Hj(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Gv=/\/+/g;function Zx(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hj(""+e.key):t.toString(36)}function im(e,t,r,n,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Th:case jj:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+Zx(o,0):n,Zv(a)?(r="",e!=null&&(r=e.replace(Gv,"$&/")+"/"),im(a,t,r,"",function(f){return f})):a!=null&&(B8(a)&&(a=Vj(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Gv,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",Zv(e))for(var c=0;c<e.length;c++){s=e[c];var d=n+Zx(s,c);o+=im(s,t,r,d,a)}else if(d=Uj(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=n+Zx(s,c++),o+=im(s,t,r,d,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function m2(e,t,r){if(e==null)return e;var n=[],a=0;return im(e,n,"","",function(s){return t.call(r,s,a++)}),n}function zj(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ti={current:null},om={transition:null},Wj={ReactCurrentDispatcher:ti,ReactCurrentBatchConfig:om,ReactCurrentOwner:$8};function L_(){throw Error("act(...) is not supported in production builds of React.")}an.Children={map:m2,forEach:function(e,t,r){m2(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return m2(e,function(){t++}),t},toArray:function(e){return m2(e,function(t){return t})||[]},only:function(e){if(!B8(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};an.Component=h1;an.Fragment=Lj;an.Profiler=Pj;an.PureComponent=O8;an.StrictMode=Rj;an.Suspense=Dj;an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wj;an.act=L_;an.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=S_({},e.props),a=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$8.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)T_.call(t,d)&&!I_.hasOwnProperty(d)&&(n[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)n.children=r;else if(1<d){c=Array(d);for(var f=0;f<d;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:Th,type:e.type,key:a,ref:s,props:n,_owner:o}};an.createContext=function(e){return e={$$typeof:Mj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fj,_context:e},e.Consumer=e};an.createElement=j_;an.createFactory=function(e){var t=j_.bind(null,e);return t.type=e,t};an.createRef=function(){return{current:null}};an.forwardRef=function(e){return{$$typeof:Oj,render:e}};an.isValidElement=B8;an.lazy=function(e){return{$$typeof:Bj,_payload:{_status:-1,_result:e},_init:zj}};an.memo=function(e,t){return{$$typeof:$j,type:e,compare:t===void 0?null:t}};an.startTransition=function(e){var t=om.transition;om.transition={};try{e()}finally{om.transition=t}};an.unstable_act=L_;an.useCallback=function(e,t){return ti.current.useCallback(e,t)};an.useContext=function(e){return ti.current.useContext(e)};an.useDebugValue=function(){};an.useDeferredValue=function(e){return ti.current.useDeferredValue(e)};an.useEffect=function(e,t){return ti.current.useEffect(e,t)};an.useId=function(){return ti.current.useId()};an.useImperativeHandle=function(e,t,r){return ti.current.useImperativeHandle(e,t,r)};an.useInsertionEffect=function(e,t){return ti.current.useInsertionEffect(e,t)};an.useLayoutEffect=function(e,t){return ti.current.useLayoutEffect(e,t)};an.useMemo=function(e,t){return ti.current.useMemo(e,t)};an.useReducer=function(e,t,r){return ti.current.useReducer(e,t,r)};an.useRef=function(e){return ti.current.useRef(e)};an.useState=function(e){return ti.current.useState(e)};an.useSyncExternalStore=function(e,t,r){return ti.current.useSyncExternalStore(e,t,r)};an.useTransition=function(){return ti.current.useTransition()};an.version="18.3.1";A_.exports=an;var v=A_.exports;const Da=M8(v),qj=F8({__proto__:null,default:Da},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zj=v,Gj=Symbol.for("react.element"),Xj=Symbol.for("react.fragment"),Kj=Object.prototype.hasOwnProperty,Yj=Zj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jj={key:!0,ref:!0,__self:!0,__source:!0};function R_(e,t,r){var n,a={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Kj.call(t,n)&&!Jj.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Gj,type:e,key:s,ref:o,props:a,_owner:Yj.current}}Bp.Fragment=Xj;Bp.jsx=R_;Bp.jsxs=R_;N_.exports=Bp;var i=N_.exports,P_={exports:{}},zi={},F_={exports:{}},M_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(te,X){var Ne=te.length;te.push(X);e:for(;0<Ne;){var _e=Ne-1>>>1,F=te[_e];if(0<a(F,X))te[_e]=X,te[Ne]=F,Ne=_e;else break e}}function r(te){return te.length===0?null:te[0]}function n(te){if(te.length===0)return null;var X=te[0],Ne=te.pop();if(Ne!==X){te[0]=Ne;e:for(var _e=0,F=te.length,J=F>>>1;_e<J;){var Z=2*(_e+1)-1,ee=te[Z],ie=Z+1,Se=te[ie];if(0>a(ee,Ne))ie<F&&0>a(Se,ee)?(te[_e]=Se,te[ie]=Ne,_e=ie):(te[_e]=ee,te[Z]=Ne,_e=Z);else if(ie<F&&0>a(Se,Ne))te[_e]=Se,te[ie]=Ne,_e=ie;else break e}}return X}function a(te,X){var Ne=te.sortIndex-X.sortIndex;return Ne!==0?Ne:te.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var d=[],f=[],h=1,x=null,b=3,w=!1,_=!1,N=!1,S=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(te){for(var X=r(f);X!==null;){if(X.callback===null)n(f);else if(X.startTime<=te)n(f),X.sortIndex=X.expirationTime,t(d,X);else break;X=r(f)}}function R(te){if(N=!1,C(te),!_)if(r(d)!==null)_=!0,pe(V);else{var X=r(f);X!==null&&be(R,X.startTime-te)}}function V(te,X){_=!1,N&&(N=!1,k(U),U=-1),w=!0;var Ne=b;try{for(C(X),x=r(d);x!==null&&(!(x.expirationTime>X)||te&&!D());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,b=x.priorityLevel;var F=_e(x.expirationTime<=X);X=e.unstable_now(),typeof F=="function"?x.callback=F:x===r(d)&&n(d),C(X)}else n(d);x=r(d)}if(x!==null)var J=!0;else{var Z=r(f);Z!==null&&be(R,Z.startTime-X),J=!1}return J}finally{x=null,b=Ne,w=!1}}var P=!1,I=null,U=-1,M=5,W=-1;function D(){return!(e.unstable_now()-W<M)}function H(){if(I!==null){var te=e.unstable_now();W=te;var X=!0;try{X=I(!0,te)}finally{X?Q():(P=!1,I=null)}}else P=!1}var Q;if(typeof T=="function")Q=function(){T(H)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ae=le.port2;le.port1.onmessage=H,Q=function(){ae.postMessage(null)}}else Q=function(){S(H,0)};function pe(te){I=te,P||(P=!0,Q())}function be(te,X){U=S(function(){te(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(te){te.callback=null},e.unstable_continueExecution=function(){_||w||(_=!0,pe(V))},e.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<te?Math.floor(1e3/te):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(te){switch(b){case 1:case 2:case 3:var X=3;break;default:X=b}var Ne=b;b=X;try{return te()}finally{b=Ne}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(te,X){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var Ne=b;b=te;try{return X()}finally{b=Ne}},e.unstable_scheduleCallback=function(te,X,Ne){var _e=e.unstable_now();switch(typeof Ne=="object"&&Ne!==null?(Ne=Ne.delay,Ne=typeof Ne=="number"&&0<Ne?_e+Ne:_e):Ne=_e,te){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Ne+F,te={id:h++,callback:X,priorityLevel:te,startTime:Ne,expirationTime:F,sortIndex:-1},Ne>_e?(te.sortIndex=Ne,t(f,te),r(d)===null&&te===r(f)&&(N?(k(U),U=-1):N=!0,be(R,Ne-_e))):(te.sortIndex=F,t(d,te),_||w||(_=!0,pe(V))),te},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(te){var X=b;return function(){var Ne=b;b=X;try{return te.apply(this,arguments)}finally{b=Ne}}}})(M_);F_.exports=M_;var Qj=F_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eL=v,Vi=Qj;function tr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O_=new Set,Mf={};function jd(e,t){Ku(e,t),Ku(e+"Capture",t)}function Ku(e,t){for(Mf[e]=t,e=0;e<t.length;e++)O_.add(t[e])}var i0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sg=Object.prototype.hasOwnProperty,tL=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xv={},Kv={};function rL(e){return Sg.call(Kv,e)?!0:Sg.call(Xv,e)?!1:tL.test(e)?Kv[e]=!0:(Xv[e]=!0,!1)}function nL(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function aL(e,t,r,n){if(t===null||typeof t>"u"||nL(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ri(e,t,r,n,a,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var vs={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vs[e]=new ri(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vs[t]=new ri(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vs[e]=new ri(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vs[e]=new ri(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vs[e]=new ri(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vs[e]=new ri(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vs[e]=new ri(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vs[e]=new ri(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vs[e]=new ri(e,5,!1,e.toLowerCase(),null,!1,!1)});var U8=/[\-:]([a-z])/g;function V8(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(U8,V8);vs[t]=new ri(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(U8,V8);vs[t]=new ri(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(U8,V8);vs[t]=new ri(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vs[e]=new ri(e,1,!1,e.toLowerCase(),null,!1,!1)});vs.xlinkHref=new ri("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vs[e]=new ri(e,1,!1,e.toLowerCase(),null,!0,!0)});function H8(e,t,r,n){var a=vs.hasOwnProperty(t)?vs[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(aL(t,r,a,n)&&(r=null),n||a===null?rL(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var h0=eL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,p2=Symbol.for("react.element"),gu=Symbol.for("react.portal"),vu=Symbol.for("react.fragment"),z8=Symbol.for("react.strict_mode"),Cg=Symbol.for("react.profiler"),D_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),W8=Symbol.for("react.forward_ref"),kg=Symbol.for("react.suspense"),Tg=Symbol.for("react.suspense_list"),q8=Symbol.for("react.memo"),O0=Symbol.for("react.lazy"),B_=Symbol.for("react.offscreen"),Yv=Symbol.iterator;function P1(e){return e===null||typeof e!="object"?null:(e=Yv&&e[Yv]||e["@@iterator"],typeof e=="function"?e:null)}var oa=Object.assign,Gx;function K1(e){if(Gx===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Gx=t&&t[1]||""}return`
`+Gx+e}var Xx=!1;function Kx(e,t){if(!e||Xx)return"";Xx=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var n=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){n=f}e.call(t.prototype)}else{try{throw Error()}catch(f){n=f}e()}}catch(f){if(f&&n&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),s=n.stack.split(`
`),o=a.length-1,c=s.length-1;1<=o&&0<=c&&a[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(a[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||a[o]!==s[c]){var d=`
`+a[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=c);break}}}finally{Xx=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?K1(e):""}function sL(e){switch(e.tag){case 5:return K1(e.type);case 16:return K1("Lazy");case 13:return K1("Suspense");case 19:return K1("SuspenseList");case 0:case 2:case 15:return e=Kx(e.type,!1),e;case 11:return e=Kx(e.type.render,!1),e;case 1:return e=Kx(e.type,!0),e;default:return""}}function Ig(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vu:return"Fragment";case gu:return"Portal";case Cg:return"Profiler";case z8:return"StrictMode";case kg:return"Suspense";case Tg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $_:return(e.displayName||"Context")+".Consumer";case D_:return(e._context.displayName||"Context")+".Provider";case W8:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q8:return t=e.displayName||null,t!==null?t:Ig(e.type)||"Memo";case O0:t=e._payload,e=e._init;try{return Ig(e(t))}catch{}}return null}function iL(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ig(t);case 8:return t===z8?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mc(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function U_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oL(e){var t=U_(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function x2(e){e._valueTracker||(e._valueTracker=oL(e))}function V_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=U_(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Tm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jg(e,t){var r=t.checked;return oa({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Jv(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=mc(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function H_(e,t){t=t.checked,t!=null&&H8(e,"checked",t,!1)}function Lg(e,t){H_(e,t);var r=mc(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rg(e,t.type,r):t.hasOwnProperty("defaultValue")&&Rg(e,t.type,mc(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qv(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Rg(e,t,r){(t!=="number"||Tm(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Y1=Array.isArray;function Pu(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+mc(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Pg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(tr(91));return oa({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(tr(92));if(Y1(r)){if(1<r.length)throw Error(tr(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:mc(r)}}function z_(e,t){var r=mc(t.value),n=mc(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function tw(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function W_(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fg(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?W_(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var g2,q_=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(g2=g2||document.createElement("div"),g2.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=g2.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Of(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var df={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lL=["Webkit","ms","Moz","O"];Object.keys(df).forEach(function(e){lL.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),df[t]=df[e]})});function Z_(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||df.hasOwnProperty(e)&&df[e]?(""+t).trim():t+"px"}function G_(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Z_(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var cL=oa({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mg(e,t){if(t){if(cL[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(tr(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(tr(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(tr(61))}if(t.style!=null&&typeof t.style!="object")throw Error(tr(62))}}function Og(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dg=null;function Z8(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $g=null,Fu=null,Mu=null;function rw(e){if(e=Lh(e)){if(typeof $g!="function")throw Error(tr(280));var t=e.stateNode;t&&(t=Wp(t),$g(e.stateNode,e.type,t))}}function X_(e){Fu?Mu?Mu.push(e):Mu=[e]:Fu=e}function K_(){if(Fu){var e=Fu,t=Mu;if(Mu=Fu=null,rw(e),t)for(e=0;e<t.length;e++)rw(t[e])}}function Y_(e,t){return e(t)}function J_(){}var Yx=!1;function Q_(e,t,r){if(Yx)return e(t,r);Yx=!0;try{return Y_(e,t,r)}finally{Yx=!1,(Fu!==null||Mu!==null)&&(J_(),K_())}}function Df(e,t){var r=e.stateNode;if(r===null)return null;var n=Wp(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(tr(231,t,typeof r));return r}var Bg=!1;if(i0)try{var F1={};Object.defineProperty(F1,"passive",{get:function(){Bg=!0}}),window.addEventListener("test",F1,F1),window.removeEventListener("test",F1,F1)}catch{Bg=!1}function dL(e,t,r,n,a,s,o,c,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(r,f)}catch(h){this.onError(h)}}var uf=!1,Im=null,jm=!1,Ug=null,uL={onError:function(e){uf=!0,Im=e}};function fL(e,t,r,n,a,s,o,c,d){uf=!1,Im=null,dL.apply(uL,arguments)}function hL(e,t,r,n,a,s,o,c,d){if(fL.apply(this,arguments),uf){if(uf){var f=Im;uf=!1,Im=null}else throw Error(tr(198));jm||(jm=!0,Ug=f)}}function Ld(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function eN(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nw(e){if(Ld(e)!==e)throw Error(tr(188))}function mL(e){var t=e.alternate;if(!t){if(t=Ld(e),t===null)throw Error(tr(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return nw(a),e;if(s===n)return nw(a),t;s=s.sibling}throw Error(tr(188))}if(r.return!==n.return)r=a,n=s;else{for(var o=!1,c=a.child;c;){if(c===r){o=!0,r=a,n=s;break}if(c===n){o=!0,n=a,r=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===r){o=!0,r=s,n=a;break}if(c===n){o=!0,n=s,r=a;break}c=c.sibling}if(!o)throw Error(tr(189))}}if(r.alternate!==n)throw Error(tr(190))}if(r.tag!==3)throw Error(tr(188));return r.stateNode.current===r?e:t}function tN(e){return e=mL(e),e!==null?rN(e):null}function rN(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rN(e);if(t!==null)return t;e=e.sibling}return null}var nN=Vi.unstable_scheduleCallback,aw=Vi.unstable_cancelCallback,pL=Vi.unstable_shouldYield,xL=Vi.unstable_requestPaint,ka=Vi.unstable_now,gL=Vi.unstable_getCurrentPriorityLevel,G8=Vi.unstable_ImmediatePriority,aN=Vi.unstable_UserBlockingPriority,Lm=Vi.unstable_NormalPriority,vL=Vi.unstable_LowPriority,sN=Vi.unstable_IdlePriority,Up=null,gl=null;function wL(e){if(gl&&typeof gl.onCommitFiberRoot=="function")try{gl.onCommitFiberRoot(Up,e,void 0,(e.current.flags&128)===128)}catch{}}var Vo=Math.clz32?Math.clz32:_L,bL=Math.log,yL=Math.LN2;function _L(e){return e>>>=0,e===0?32:31-(bL(e)/yL|0)|0}var v2=64,w2=4194304;function J1(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rm(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var c=o&~a;c!==0?n=J1(c):(s&=o,s!==0&&(n=J1(s)))}else o=r&~a,o!==0?n=J1(o):s!==0&&(n=J1(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Vo(t),a=1<<r,n|=e[r],t&=~a;return n}function NL(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AL(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Vo(s),c=1<<o,d=a[o];d===-1?(!(c&r)||c&n)&&(a[o]=NL(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function Vg(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iN(){var e=v2;return v2<<=1,!(v2&4194240)&&(v2=64),e}function Jx(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ih(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vo(t),e[t]=r}function EL(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vo(r),s=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~s}}function X8(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Vo(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var Tn=0;function oN(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lN,K8,cN,dN,uN,Hg=!1,b2=[],Q0=null,ec=null,tc=null,$f=new Map,Bf=new Map,$0=[],SL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sw(e,t){switch(e){case"focusin":case"focusout":Q0=null;break;case"dragenter":case"dragleave":ec=null;break;case"mouseover":case"mouseout":tc=null;break;case"pointerover":case"pointerout":$f.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bf.delete(t.pointerId)}}function M1(e,t,r,n,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Lh(t),t!==null&&K8(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function CL(e,t,r,n,a){switch(t){case"focusin":return Q0=M1(Q0,e,t,r,n,a),!0;case"dragenter":return ec=M1(ec,e,t,r,n,a),!0;case"mouseover":return tc=M1(tc,e,t,r,n,a),!0;case"pointerover":var s=a.pointerId;return $f.set(s,M1($f.get(s)||null,e,t,r,n,a)),!0;case"gotpointercapture":return s=a.pointerId,Bf.set(s,M1(Bf.get(s)||null,e,t,r,n,a)),!0}return!1}function fN(e){var t=zc(e.target);if(t!==null){var r=Ld(t);if(r!==null){if(t=r.tag,t===13){if(t=eN(r),t!==null){e.blockedOn=t,uN(e.priority,function(){cN(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lm(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=zg(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Dg=n,r.target.dispatchEvent(n),Dg=null}else return t=Lh(r),t!==null&&K8(t),e.blockedOn=r,!1;t.shift()}return!0}function iw(e,t,r){lm(e)&&r.delete(t)}function kL(){Hg=!1,Q0!==null&&lm(Q0)&&(Q0=null),ec!==null&&lm(ec)&&(ec=null),tc!==null&&lm(tc)&&(tc=null),$f.forEach(iw),Bf.forEach(iw)}function O1(e,t){e.blockedOn===t&&(e.blockedOn=null,Hg||(Hg=!0,Vi.unstable_scheduleCallback(Vi.unstable_NormalPriority,kL)))}function Uf(e){function t(a){return O1(a,e)}if(0<b2.length){O1(b2[0],e);for(var r=1;r<b2.length;r++){var n=b2[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Q0!==null&&O1(Q0,e),ec!==null&&O1(ec,e),tc!==null&&O1(tc,e),$f.forEach(t),Bf.forEach(t),r=0;r<$0.length;r++)n=$0[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<$0.length&&(r=$0[0],r.blockedOn===null);)fN(r),r.blockedOn===null&&$0.shift()}var Ou=h0.ReactCurrentBatchConfig,Pm=!0;function TL(e,t,r,n){var a=Tn,s=Ou.transition;Ou.transition=null;try{Tn=1,Y8(e,t,r,n)}finally{Tn=a,Ou.transition=s}}function IL(e,t,r,n){var a=Tn,s=Ou.transition;Ou.transition=null;try{Tn=4,Y8(e,t,r,n)}finally{Tn=a,Ou.transition=s}}function Y8(e,t,r,n){if(Pm){var a=zg(e,t,r,n);if(a===null)l4(e,t,n,Fm,r),sw(e,n);else if(CL(a,e,t,r,n))n.stopPropagation();else if(sw(e,n),t&4&&-1<SL.indexOf(e)){for(;a!==null;){var s=Lh(a);if(s!==null&&lN(s),s=zg(e,t,r,n),s===null&&l4(e,t,n,Fm,r),s===a)break;a=s}a!==null&&n.stopPropagation()}else l4(e,t,n,null,r)}}var Fm=null;function zg(e,t,r,n){if(Fm=null,e=Z8(n),e=zc(e),e!==null)if(t=Ld(e),t===null)e=null;else if(r=t.tag,r===13){if(e=eN(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fm=e,null}function hN(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gL()){case G8:return 1;case aN:return 4;case Lm:case vL:return 16;case sN:return 536870912;default:return 16}default:return 16}}var W0=null,J8=null,cm=null;function mN(){if(cm)return cm;var e,t=J8,r=t.length,n,a="value"in W0?W0.value:W0.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[s-n];n++);return cm=a.slice(e,1<n?1-n:void 0)}function dm(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function y2(){return!0}function ow(){return!1}function Wi(e){function t(r,n,a,s,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?y2:ow,this.isPropagationStopped=ow,this}return oa(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=y2)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=y2)},persist:function(){},isPersistent:y2}),t}var m1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Q8=Wi(m1),jh=oa({},m1,{view:0,detail:0}),jL=Wi(jh),Qx,e4,D1,Vp=oa({},jh,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e3,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==D1&&(D1&&e.type==="mousemove"?(Qx=e.screenX-D1.screenX,e4=e.screenY-D1.screenY):e4=Qx=0,D1=e),Qx)},movementY:function(e){return"movementY"in e?e.movementY:e4}}),lw=Wi(Vp),LL=oa({},Vp,{dataTransfer:0}),RL=Wi(LL),PL=oa({},jh,{relatedTarget:0}),t4=Wi(PL),FL=oa({},m1,{animationName:0,elapsedTime:0,pseudoElement:0}),ML=Wi(FL),OL=oa({},m1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),DL=Wi(OL),$L=oa({},m1,{data:0}),cw=Wi($L),BL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HL(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=VL[e])?!!t[e]:!1}function e3(){return HL}var zL=oa({},jh,{key:function(e){if(e.key){var t=BL[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dm(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?UL[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e3,charCode:function(e){return e.type==="keypress"?dm(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dm(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WL=Wi(zL),qL=oa({},Vp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dw=Wi(qL),ZL=oa({},jh,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e3}),GL=Wi(ZL),XL=oa({},m1,{propertyName:0,elapsedTime:0,pseudoElement:0}),KL=Wi(XL),YL=oa({},Vp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),JL=Wi(YL),QL=[9,13,27,32],t3=i0&&"CompositionEvent"in window,ff=null;i0&&"documentMode"in document&&(ff=document.documentMode);var eR=i0&&"TextEvent"in window&&!ff,pN=i0&&(!t3||ff&&8<ff&&11>=ff),uw=" ",fw=!1;function xN(e,t){switch(e){case"keyup":return QL.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gN(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wu=!1;function tR(e,t){switch(e){case"compositionend":return gN(t);case"keypress":return t.which!==32?null:(fw=!0,uw);case"textInput":return e=t.data,e===uw&&fw?null:e;default:return null}}function rR(e,t){if(wu)return e==="compositionend"||!t3&&xN(e,t)?(e=mN(),cm=J8=W0=null,wu=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pN&&t.locale!=="ko"?null:t.data;default:return null}}var nR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nR[e.type]:t==="textarea"}function vN(e,t,r,n){X_(n),t=Mm(t,"onChange"),0<t.length&&(r=new Q8("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var hf=null,Vf=null;function aR(e){TN(e,0)}function Hp(e){var t=_u(e);if(V_(t))return e}function sR(e,t){if(e==="change")return t}var wN=!1;if(i0){var r4;if(i0){var n4="oninput"in document;if(!n4){var mw=document.createElement("div");mw.setAttribute("oninput","return;"),n4=typeof mw.oninput=="function"}r4=n4}else r4=!1;wN=r4&&(!document.documentMode||9<document.documentMode)}function pw(){hf&&(hf.detachEvent("onpropertychange",bN),Vf=hf=null)}function bN(e){if(e.propertyName==="value"&&Hp(Vf)){var t=[];vN(t,Vf,e,Z8(e)),Q_(aR,t)}}function iR(e,t,r){e==="focusin"?(pw(),hf=t,Vf=r,hf.attachEvent("onpropertychange",bN)):e==="focusout"&&pw()}function oR(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hp(Vf)}function lR(e,t){if(e==="click")return Hp(t)}function cR(e,t){if(e==="input"||e==="change")return Hp(t)}function dR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zo=typeof Object.is=="function"?Object.is:dR;function Hf(e,t){if(Zo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Sg.call(t,a)||!Zo(e[a],t[a]))return!1}return!0}function xw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gw(e,t){var r=xw(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xw(r)}}function yN(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yN(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _N(){for(var e=window,t=Tm();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Tm(e.document)}return t}function r3(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uR(e){var t=_N(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&yN(r.ownerDocument.documentElement,r)){if(n!==null&&r3(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(n.start,a);n=n.end===void 0?s:Math.min(n.end,a),!e.extend&&s>n&&(a=n,n=s,s=a),a=gw(r,s);var o=gw(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fR=i0&&"documentMode"in document&&11>=document.documentMode,bu=null,Wg=null,mf=null,qg=!1;function vw(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qg||bu==null||bu!==Tm(n)||(n=bu,"selectionStart"in n&&r3(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mf&&Hf(mf,n)||(mf=n,n=Mm(Wg,"onSelect"),0<n.length&&(t=new Q8("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=bu)))}function _2(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yu={animationend:_2("Animation","AnimationEnd"),animationiteration:_2("Animation","AnimationIteration"),animationstart:_2("Animation","AnimationStart"),transitionend:_2("Transition","TransitionEnd")},a4={},NN={};i0&&(NN=document.createElement("div").style,"AnimationEvent"in window||(delete yu.animationend.animation,delete yu.animationiteration.animation,delete yu.animationstart.animation),"TransitionEvent"in window||delete yu.transitionend.transition);function zp(e){if(a4[e])return a4[e];if(!yu[e])return e;var t=yu[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in NN)return a4[e]=t[r];return e}var AN=zp("animationend"),EN=zp("animationiteration"),SN=zp("animationstart"),CN=zp("transitionend"),kN=new Map,ww="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yc(e,t){kN.set(e,t),jd(t,[e])}for(var s4=0;s4<ww.length;s4++){var i4=ww[s4],hR=i4.toLowerCase(),mR=i4[0].toUpperCase()+i4.slice(1);yc(hR,"on"+mR)}yc(AN,"onAnimationEnd");yc(EN,"onAnimationIteration");yc(SN,"onAnimationStart");yc("dblclick","onDoubleClick");yc("focusin","onFocus");yc("focusout","onBlur");yc(CN,"onTransitionEnd");Ku("onMouseEnter",["mouseout","mouseover"]);Ku("onMouseLeave",["mouseout","mouseover"]);Ku("onPointerEnter",["pointerout","pointerover"]);Ku("onPointerLeave",["pointerout","pointerover"]);jd("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jd("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jd("onBeforeInput",["compositionend","keypress","textInput","paste"]);jd("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jd("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jd("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Q1="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Q1));function bw(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,hL(n,t,void 0,e),e.currentTarget=null}function TN(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var c=n[o],d=c.instance,f=c.currentTarget;if(c=c.listener,d!==s&&a.isPropagationStopped())break e;bw(a,c,f),s=d}else for(o=0;o<n.length;o++){if(c=n[o],d=c.instance,f=c.currentTarget,c=c.listener,d!==s&&a.isPropagationStopped())break e;bw(a,c,f),s=d}}}if(jm)throw e=Ug,jm=!1,Ug=null,e}function Wn(e,t){var r=t[Yg];r===void 0&&(r=t[Yg]=new Set);var n=e+"__bubble";r.has(n)||(IN(t,e,2,!1),r.add(n))}function o4(e,t,r){var n=0;t&&(n|=4),IN(r,e,n,t)}var N2="_reactListening"+Math.random().toString(36).slice(2);function zf(e){if(!e[N2]){e[N2]=!0,O_.forEach(function(r){r!=="selectionchange"&&(pR.has(r)||o4(r,!1,e),o4(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[N2]||(t[N2]=!0,o4("selectionchange",!1,t))}}function IN(e,t,r,n){switch(hN(t)){case 1:var a=TL;break;case 4:a=IL;break;default:a=Y8}r=a.bind(null,t,r,e),a=void 0,!Bg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function l4(e,t,r,n,a){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var c=n.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;o=o.return}for(;c!==null;){if(o=zc(c),o===null)return;if(d=o.tag,d===5||d===6){n=s=o;continue e}c=c.parentNode}}n=n.return}Q_(function(){var f=s,h=Z8(r),x=[];e:{var b=kN.get(e);if(b!==void 0){var w=Q8,_=e;switch(e){case"keypress":if(dm(r)===0)break e;case"keydown":case"keyup":w=WL;break;case"focusin":_="focus",w=t4;break;case"focusout":_="blur",w=t4;break;case"beforeblur":case"afterblur":w=t4;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=lw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=RL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=GL;break;case AN:case EN:case SN:w=ML;break;case CN:w=KL;break;case"scroll":w=jL;break;case"wheel":w=JL;break;case"copy":case"cut":case"paste":w=DL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=dw}var N=(t&4)!==0,S=!N&&e==="scroll",k=N?b!==null?b+"Capture":null:b;N=[];for(var T=f,C;T!==null;){C=T;var R=C.stateNode;if(C.tag===5&&R!==null&&(C=R,k!==null&&(R=Df(T,k),R!=null&&N.push(Wf(T,R,C)))),S)break;T=T.return}0<N.length&&(b=new w(b,_,null,r,h),x.push({event:b,listeners:N}))}}if(!(t&7)){e:{if(b=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",b&&r!==Dg&&(_=r.relatedTarget||r.fromElement)&&(zc(_)||_[o0]))break e;if((w||b)&&(b=h.window===h?h:(b=h.ownerDocument)?b.defaultView||b.parentWindow:window,w?(_=r.relatedTarget||r.toElement,w=f,_=_?zc(_):null,_!==null&&(S=Ld(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(w=null,_=f),w!==_)){if(N=lw,R="onMouseLeave",k="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(N=dw,R="onPointerLeave",k="onPointerEnter",T="pointer"),S=w==null?b:_u(w),C=_==null?b:_u(_),b=new N(R,T+"leave",w,r,h),b.target=S,b.relatedTarget=C,R=null,zc(h)===f&&(N=new N(k,T+"enter",_,r,h),N.target=C,N.relatedTarget=S,R=N),S=R,w&&_)t:{for(N=w,k=_,T=0,C=N;C;C=Yd(C))T++;for(C=0,R=k;R;R=Yd(R))C++;for(;0<T-C;)N=Yd(N),T--;for(;0<C-T;)k=Yd(k),C--;for(;T--;){if(N===k||k!==null&&N===k.alternate)break t;N=Yd(N),k=Yd(k)}N=null}else N=null;w!==null&&yw(x,b,w,N,!1),_!==null&&S!==null&&yw(x,S,_,N,!0)}}e:{if(b=f?_u(f):window,w=b.nodeName&&b.nodeName.toLowerCase(),w==="select"||w==="input"&&b.type==="file")var V=sR;else if(hw(b))if(wN)V=cR;else{V=oR;var P=iR}else(w=b.nodeName)&&w.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(V=lR);if(V&&(V=V(e,f))){vN(x,V,r,h);break e}P&&P(e,b,f),e==="focusout"&&(P=b._wrapperState)&&P.controlled&&b.type==="number"&&Rg(b,"number",b.value)}switch(P=f?_u(f):window,e){case"focusin":(hw(P)||P.contentEditable==="true")&&(bu=P,Wg=f,mf=null);break;case"focusout":mf=Wg=bu=null;break;case"mousedown":qg=!0;break;case"contextmenu":case"mouseup":case"dragend":qg=!1,vw(x,r,h);break;case"selectionchange":if(fR)break;case"keydown":case"keyup":vw(x,r,h)}var I;if(t3)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else wu?xN(e,r)&&(U="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(U="onCompositionStart");U&&(pN&&r.locale!=="ko"&&(wu||U!=="onCompositionStart"?U==="onCompositionEnd"&&wu&&(I=mN()):(W0=h,J8="value"in W0?W0.value:W0.textContent,wu=!0)),P=Mm(f,U),0<P.length&&(U=new cw(U,e,null,r,h),x.push({event:U,listeners:P}),I?U.data=I:(I=gN(r),I!==null&&(U.data=I)))),(I=eR?tR(e,r):rR(e,r))&&(f=Mm(f,"onBeforeInput"),0<f.length&&(h=new cw("onBeforeInput","beforeinput",null,r,h),x.push({event:h,listeners:f}),h.data=I))}TN(x,t)})}function Wf(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Mm(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Df(e,r),s!=null&&n.unshift(Wf(e,s,a)),s=Df(e,t),s!=null&&n.push(Wf(e,s,a))),e=e.return}return n}function Yd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yw(e,t,r,n,a){for(var s=t._reactName,o=[];r!==null&&r!==n;){var c=r,d=c.alternate,f=c.stateNode;if(d!==null&&d===n)break;c.tag===5&&f!==null&&(c=f,a?(d=Df(r,s),d!=null&&o.unshift(Wf(r,d,c))):a||(d=Df(r,s),d!=null&&o.push(Wf(r,d,c)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var xR=/\r\n?/g,gR=/\u0000|\uFFFD/g;function _w(e){return(typeof e=="string"?e:""+e).replace(xR,`
`).replace(gR,"")}function A2(e,t,r){if(t=_w(t),_w(e)!==t&&r)throw Error(tr(425))}function Om(){}var Zg=null,Gg=null;function Xg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kg=typeof setTimeout=="function"?setTimeout:void 0,vR=typeof clearTimeout=="function"?clearTimeout:void 0,Nw=typeof Promise=="function"?Promise:void 0,wR=typeof queueMicrotask=="function"?queueMicrotask:typeof Nw<"u"?function(e){return Nw.resolve(null).then(e).catch(bR)}:Kg;function bR(e){setTimeout(function(){throw e})}function c4(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Uf(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Uf(t)}function rc(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Aw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var p1=Math.random().toString(36).slice(2),ml="__reactFiber$"+p1,qf="__reactProps$"+p1,o0="__reactContainer$"+p1,Yg="__reactEvents$"+p1,yR="__reactListeners$"+p1,_R="__reactHandles$"+p1;function zc(e){var t=e[ml];if(t)return t;for(var r=e.parentNode;r;){if(t=r[o0]||r[ml]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Aw(e);e!==null;){if(r=e[ml])return r;e=Aw(e)}return t}e=r,r=e.parentNode}return null}function Lh(e){return e=e[ml]||e[o0],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _u(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(tr(33))}function Wp(e){return e[qf]||null}var Jg=[],Nu=-1;function _c(e){return{current:e}}function Xn(e){0>Nu||(e.current=Jg[Nu],Jg[Nu]=null,Nu--)}function Un(e,t){Nu++,Jg[Nu]=e.current,e.current=t}var pc={},Os=_c(pc),mi=_c(!1),ud=pc;function Yu(e,t){var r=e.type.contextTypes;if(!r)return pc;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function pi(e){return e=e.childContextTypes,e!=null}function Dm(){Xn(mi),Xn(Os)}function Ew(e,t,r){if(Os.current!==pc)throw Error(tr(168));Un(Os,t),Un(mi,r)}function jN(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(tr(108,iL(e)||"Unknown",a));return oa({},r,n)}function $m(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pc,ud=Os.current,Un(Os,e),Un(mi,mi.current),!0}function Sw(e,t,r){var n=e.stateNode;if(!n)throw Error(tr(169));r?(e=jN(e,t,ud),n.__reactInternalMemoizedMergedChildContext=e,Xn(mi),Xn(Os),Un(Os,e)):Xn(mi),Un(mi,r)}var Gl=null,qp=!1,d4=!1;function LN(e){Gl===null?Gl=[e]:Gl.push(e)}function NR(e){qp=!0,LN(e)}function Nc(){if(!d4&&Gl!==null){d4=!0;var e=0,t=Tn;try{var r=Gl;for(Tn=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Gl=null,qp=!1}catch(a){throw Gl!==null&&(Gl=Gl.slice(e+1)),nN(G8,Nc),a}finally{Tn=t,d4=!1}}return null}var Au=[],Eu=0,Bm=null,Um=0,ro=[],no=0,fd=null,Yl=1,Jl="";function Fc(e,t){Au[Eu++]=Um,Au[Eu++]=Bm,Bm=e,Um=t}function RN(e,t,r){ro[no++]=Yl,ro[no++]=Jl,ro[no++]=fd,fd=e;var n=Yl;e=Jl;var a=32-Vo(n)-1;n&=~(1<<a),r+=1;var s=32-Vo(t)+a;if(30<s){var o=a-a%5;s=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Yl=1<<32-Vo(t)+a|r<<a|n,Jl=s+e}else Yl=1<<s|r<<a|n,Jl=e}function n3(e){e.return!==null&&(Fc(e,1),RN(e,1,0))}function a3(e){for(;e===Bm;)Bm=Au[--Eu],Au[Eu]=null,Um=Au[--Eu],Au[Eu]=null;for(;e===fd;)fd=ro[--no],ro[no]=null,Jl=ro[--no],ro[no]=null,Yl=ro[--no],ro[no]=null}var Ui=null,Di=null,ea=!1,Do=null;function PN(e,t){var r=so(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Cw(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ui=e,Di=rc(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ui=e,Di=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=fd!==null?{id:Yl,overflow:Jl}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=so(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ui=e,Di=null,!0):!1;default:return!1}}function Qg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function e5(e){if(ea){var t=Di;if(t){var r=t;if(!Cw(e,t)){if(Qg(e))throw Error(tr(418));t=rc(r.nextSibling);var n=Ui;t&&Cw(e,t)?PN(n,r):(e.flags=e.flags&-4097|2,ea=!1,Ui=e)}}else{if(Qg(e))throw Error(tr(418));e.flags=e.flags&-4097|2,ea=!1,Ui=e}}}function kw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ui=e}function E2(e){if(e!==Ui)return!1;if(!ea)return kw(e),ea=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xg(e.type,e.memoizedProps)),t&&(t=Di)){if(Qg(e))throw FN(),Error(tr(418));for(;t;)PN(e,t),t=rc(t.nextSibling)}if(kw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tr(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Di=rc(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Di=null}}else Di=Ui?rc(e.stateNode.nextSibling):null;return!0}function FN(){for(var e=Di;e;)e=rc(e.nextSibling)}function Ju(){Di=Ui=null,ea=!1}function s3(e){Do===null?Do=[e]:Do.push(e)}var AR=h0.ReactCurrentBatchConfig;function $1(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(tr(309));var n=r.stateNode}if(!n)throw Error(tr(147,e));var a=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var c=a.refs;o===null?delete c[s]:c[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(tr(284));if(!r._owner)throw Error(tr(290,e))}return e}function S2(e,t){throw e=Object.prototype.toString.call(t),Error(tr(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tw(e){var t=e._init;return t(e._payload)}function MN(e){function t(k,T){if(e){var C=k.deletions;C===null?(k.deletions=[T],k.flags|=16):C.push(T)}}function r(k,T){if(!e)return null;for(;T!==null;)t(k,T),T=T.sibling;return null}function n(k,T){for(k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function a(k,T){return k=ic(k,T),k.index=0,k.sibling=null,k}function s(k,T,C){return k.index=C,e?(C=k.alternate,C!==null?(C=C.index,C<T?(k.flags|=2,T):C):(k.flags|=2,T)):(k.flags|=1048576,T)}function o(k){return e&&k.alternate===null&&(k.flags|=2),k}function c(k,T,C,R){return T===null||T.tag!==6?(T=g4(C,k.mode,R),T.return=k,T):(T=a(T,C),T.return=k,T)}function d(k,T,C,R){var V=C.type;return V===vu?h(k,T,C.props.children,R,C.key):T!==null&&(T.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===O0&&Tw(V)===T.type)?(R=a(T,C.props),R.ref=$1(k,T,C),R.return=k,R):(R=gm(C.type,C.key,C.props,null,k.mode,R),R.ref=$1(k,T,C),R.return=k,R)}function f(k,T,C,R){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=v4(C,k.mode,R),T.return=k,T):(T=a(T,C.children||[]),T.return=k,T)}function h(k,T,C,R,V){return T===null||T.tag!==7?(T=Qc(C,k.mode,R,V),T.return=k,T):(T=a(T,C),T.return=k,T)}function x(k,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=g4(""+T,k.mode,C),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case p2:return C=gm(T.type,T.key,T.props,null,k.mode,C),C.ref=$1(k,null,T),C.return=k,C;case gu:return T=v4(T,k.mode,C),T.return=k,T;case O0:var R=T._init;return x(k,R(T._payload),C)}if(Y1(T)||P1(T))return T=Qc(T,k.mode,C,null),T.return=k,T;S2(k,T)}return null}function b(k,T,C,R){var V=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return V!==null?null:c(k,T,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case p2:return C.key===V?d(k,T,C,R):null;case gu:return C.key===V?f(k,T,C,R):null;case O0:return V=C._init,b(k,T,V(C._payload),R)}if(Y1(C)||P1(C))return V!==null?null:h(k,T,C,R,null);S2(k,C)}return null}function w(k,T,C,R,V){if(typeof R=="string"&&R!==""||typeof R=="number")return k=k.get(C)||null,c(T,k,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case p2:return k=k.get(R.key===null?C:R.key)||null,d(T,k,R,V);case gu:return k=k.get(R.key===null?C:R.key)||null,f(T,k,R,V);case O0:var P=R._init;return w(k,T,C,P(R._payload),V)}if(Y1(R)||P1(R))return k=k.get(C)||null,h(T,k,R,V,null);S2(T,R)}return null}function _(k,T,C,R){for(var V=null,P=null,I=T,U=T=0,M=null;I!==null&&U<C.length;U++){I.index>U?(M=I,I=null):M=I.sibling;var W=b(k,I,C[U],R);if(W===null){I===null&&(I=M);break}e&&I&&W.alternate===null&&t(k,I),T=s(W,T,U),P===null?V=W:P.sibling=W,P=W,I=M}if(U===C.length)return r(k,I),ea&&Fc(k,U),V;if(I===null){for(;U<C.length;U++)I=x(k,C[U],R),I!==null&&(T=s(I,T,U),P===null?V=I:P.sibling=I,P=I);return ea&&Fc(k,U),V}for(I=n(k,I);U<C.length;U++)M=w(I,k,U,C[U],R),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?U:M.key),T=s(M,T,U),P===null?V=M:P.sibling=M,P=M);return e&&I.forEach(function(D){return t(k,D)}),ea&&Fc(k,U),V}function N(k,T,C,R){var V=P1(C);if(typeof V!="function")throw Error(tr(150));if(C=V.call(C),C==null)throw Error(tr(151));for(var P=V=null,I=T,U=T=0,M=null,W=C.next();I!==null&&!W.done;U++,W=C.next()){I.index>U?(M=I,I=null):M=I.sibling;var D=b(k,I,W.value,R);if(D===null){I===null&&(I=M);break}e&&I&&D.alternate===null&&t(k,I),T=s(D,T,U),P===null?V=D:P.sibling=D,P=D,I=M}if(W.done)return r(k,I),ea&&Fc(k,U),V;if(I===null){for(;!W.done;U++,W=C.next())W=x(k,W.value,R),W!==null&&(T=s(W,T,U),P===null?V=W:P.sibling=W,P=W);return ea&&Fc(k,U),V}for(I=n(k,I);!W.done;U++,W=C.next())W=w(I,k,U,W.value,R),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?U:W.key),T=s(W,T,U),P===null?V=W:P.sibling=W,P=W);return e&&I.forEach(function(H){return t(k,H)}),ea&&Fc(k,U),V}function S(k,T,C,R){if(typeof C=="object"&&C!==null&&C.type===vu&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case p2:e:{for(var V=C.key,P=T;P!==null;){if(P.key===V){if(V=C.type,V===vu){if(P.tag===7){r(k,P.sibling),T=a(P,C.props.children),T.return=k,k=T;break e}}else if(P.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===O0&&Tw(V)===P.type){r(k,P.sibling),T=a(P,C.props),T.ref=$1(k,P,C),T.return=k,k=T;break e}r(k,P);break}else t(k,P);P=P.sibling}C.type===vu?(T=Qc(C.props.children,k.mode,R,C.key),T.return=k,k=T):(R=gm(C.type,C.key,C.props,null,k.mode,R),R.ref=$1(k,T,C),R.return=k,k=R)}return o(k);case gu:e:{for(P=C.key;T!==null;){if(T.key===P)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){r(k,T.sibling),T=a(T,C.children||[]),T.return=k,k=T;break e}else{r(k,T);break}else t(k,T);T=T.sibling}T=v4(C,k.mode,R),T.return=k,k=T}return o(k);case O0:return P=C._init,S(k,T,P(C._payload),R)}if(Y1(C))return _(k,T,C,R);if(P1(C))return N(k,T,C,R);S2(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(r(k,T.sibling),T=a(T,C),T.return=k,k=T):(r(k,T),T=g4(C,k.mode,R),T.return=k,k=T),o(k)):r(k,T)}return S}var Qu=MN(!0),ON=MN(!1),Vm=_c(null),Hm=null,Su=null,i3=null;function o3(){i3=Su=Hm=null}function l3(e){var t=Vm.current;Xn(Vm),e._currentValue=t}function t5(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Du(e,t){Hm=e,i3=Su=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ui=!0),e.firstContext=null)}function uo(e){var t=e._currentValue;if(i3!==e)if(e={context:e,memoizedValue:t,next:null},Su===null){if(Hm===null)throw Error(tr(308));Su=e,Hm.dependencies={lanes:0,firstContext:e}}else Su=Su.next=e;return t}var Wc=null;function c3(e){Wc===null?Wc=[e]:Wc.push(e)}function DN(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,c3(t)):(r.next=a.next,a.next=r),t.interleaved=r,l0(e,n)}function l0(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var D0=!1;function d3(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $N(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function t0(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nc(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,gn&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,l0(e,r)}return a=n.interleaved,a===null?(t.next=t,c3(n)):(t.next=a.next,a.next=t),n.interleaved=t,l0(e,r)}function um(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,X8(e,r)}}function Iw(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function zm(e,t,r,n){var a=e.updateQueue;D0=!1;var s=a.firstBaseUpdate,o=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,f=d.next;d.next=null,o===null?s=f:o.next=f,o=d;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==o&&(c===null?h.firstBaseUpdate=f:c.next=f,h.lastBaseUpdate=d))}if(s!==null){var x=a.baseState;o=0,h=f=d=null,c=s;do{var b=c.lane,w=c.eventTime;if((n&b)===b){h!==null&&(h=h.next={eventTime:w,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var _=e,N=c;switch(b=t,w=r,N.tag){case 1:if(_=N.payload,typeof _=="function"){x=_.call(w,x,b);break e}x=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=N.payload,b=typeof _=="function"?_.call(w,x,b):_,b==null)break e;x=oa({},x,b);break e;case 2:D0=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[c]:b.push(c))}else w={eventTime:w,lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(f=h=w,d=x):h=h.next=w,o|=b;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;b=c,c=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(h===null&&(d=x),a.baseState=d,a.firstBaseUpdate=f,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);md|=o,e.lanes=o,e.memoizedState=x}}function jw(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(tr(191,a));a.call(n)}}}var Rh={},vl=_c(Rh),Zf=_c(Rh),Gf=_c(Rh);function qc(e){if(e===Rh)throw Error(tr(174));return e}function u3(e,t){switch(Un(Gf,t),Un(Zf,e),Un(vl,Rh),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fg(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fg(t,e)}Xn(vl),Un(vl,t)}function e1(){Xn(vl),Xn(Zf),Xn(Gf)}function BN(e){qc(Gf.current);var t=qc(vl.current),r=Fg(t,e.type);t!==r&&(Un(Zf,e),Un(vl,r))}function f3(e){Zf.current===e&&(Xn(vl),Xn(Zf))}var sa=_c(0);function Wm(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var u4=[];function h3(){for(var e=0;e<u4.length;e++)u4[e]._workInProgressVersionPrimary=null;u4.length=0}var fm=h0.ReactCurrentDispatcher,f4=h0.ReactCurrentBatchConfig,hd=0,ia=null,Ga=null,rs=null,qm=!1,pf=!1,Xf=0,ER=0;function As(){throw Error(tr(321))}function m3(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Zo(e[r],t[r]))return!1;return!0}function p3(e,t,r,n,a,s){if(hd=s,ia=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fm.current=e===null||e.memoizedState===null?TR:IR,e=r(n,a),pf){s=0;do{if(pf=!1,Xf=0,25<=s)throw Error(tr(301));s+=1,rs=Ga=null,t.updateQueue=null,fm.current=jR,e=r(n,a)}while(pf)}if(fm.current=Zm,t=Ga!==null&&Ga.next!==null,hd=0,rs=Ga=ia=null,qm=!1,t)throw Error(tr(300));return e}function x3(){var e=Xf!==0;return Xf=0,e}function dl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rs===null?ia.memoizedState=rs=e:rs=rs.next=e,rs}function fo(){if(Ga===null){var e=ia.alternate;e=e!==null?e.memoizedState:null}else e=Ga.next;var t=rs===null?ia.memoizedState:rs.next;if(t!==null)rs=t,Ga=e;else{if(e===null)throw Error(tr(310));Ga=e,e={memoizedState:Ga.memoizedState,baseState:Ga.baseState,baseQueue:Ga.baseQueue,queue:Ga.queue,next:null},rs===null?ia.memoizedState=rs=e:rs=rs.next=e}return rs}function Kf(e,t){return typeof t=="function"?t(e):t}function h4(e){var t=fo(),r=t.queue;if(r===null)throw Error(tr(311));r.lastRenderedReducer=e;var n=Ga,a=n.baseQueue,s=r.pending;if(s!==null){if(a!==null){var o=a.next;a.next=s.next,s.next=o}n.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,n=n.baseState;var c=o=null,d=null,f=s;do{var h=f.lane;if((hd&h)===h)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),n=f.hasEagerState?f.eagerState:e(n,f.action);else{var x={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(c=d=x,o=n):d=d.next=x,ia.lanes|=h,md|=h}f=f.next}while(f!==null&&f!==s);d===null?o=n:d.next=c,Zo(n,t.memoizedState)||(ui=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=d,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do s=a.lane,ia.lanes|=s,md|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function m4(e){var t=fo(),r=t.queue;if(r===null)throw Error(tr(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do s=e(s,o.action),o=o.next;while(o!==a);Zo(s,t.memoizedState)||(ui=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function UN(){}function VN(e,t){var r=ia,n=fo(),a=t(),s=!Zo(n.memoizedState,a);if(s&&(n.memoizedState=a,ui=!0),n=n.queue,g3(WN.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||rs!==null&&rs.memoizedState.tag&1){if(r.flags|=2048,Yf(9,zN.bind(null,r,n,a,t),void 0,null),as===null)throw Error(tr(349));hd&30||HN(r,t,a)}return a}function HN(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ia.updateQueue,t===null?(t={lastEffect:null,stores:null},ia.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function zN(e,t,r,n){t.value=r,t.getSnapshot=n,qN(t)&&ZN(e)}function WN(e,t,r){return r(function(){qN(t)&&ZN(e)})}function qN(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Zo(e,r)}catch{return!0}}function ZN(e){var t=l0(e,1);t!==null&&Ho(t,e,1,-1)}function Lw(e){var t=dl();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kf,lastRenderedState:e},t.queue=e,e=e.dispatch=kR.bind(null,ia,e),[t.memoizedState,e]}function Yf(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ia.updateQueue,t===null?(t={lastEffect:null,stores:null},ia.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function GN(){return fo().memoizedState}function hm(e,t,r,n){var a=dl();ia.flags|=e,a.memoizedState=Yf(1|t,r,void 0,n===void 0?null:n)}function Zp(e,t,r,n){var a=fo();n=n===void 0?null:n;var s=void 0;if(Ga!==null){var o=Ga.memoizedState;if(s=o.destroy,n!==null&&m3(n,o.deps)){a.memoizedState=Yf(t,r,s,n);return}}ia.flags|=e,a.memoizedState=Yf(1|t,r,s,n)}function Rw(e,t){return hm(8390656,8,e,t)}function g3(e,t){return Zp(2048,8,e,t)}function XN(e,t){return Zp(4,2,e,t)}function KN(e,t){return Zp(4,4,e,t)}function YN(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function JN(e,t,r){return r=r!=null?r.concat([e]):null,Zp(4,4,YN.bind(null,t,e),r)}function v3(){}function QN(e,t){var r=fo();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&m3(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function eA(e,t){var r=fo();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&m3(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function tA(e,t,r){return hd&21?(Zo(r,t)||(r=iN(),ia.lanes|=r,md|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ui=!0),e.memoizedState=r)}function SR(e,t){var r=Tn;Tn=r!==0&&4>r?r:4,e(!0);var n=f4.transition;f4.transition={};try{e(!1),t()}finally{Tn=r,f4.transition=n}}function rA(){return fo().memoizedState}function CR(e,t,r){var n=sc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},nA(e))aA(t,r);else if(r=DN(e,t,r,n),r!==null){var a=Js();Ho(r,e,n,a),sA(r,t,n)}}function kR(e,t,r){var n=sc(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(nA(e))aA(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,c=s(o,r);if(a.hasEagerState=!0,a.eagerState=c,Zo(c,o)){var d=t.interleaved;d===null?(a.next=a,c3(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}r=DN(e,t,a,n),r!==null&&(a=Js(),Ho(r,e,n,a),sA(r,t,n))}}function nA(e){var t=e.alternate;return e===ia||t!==null&&t===ia}function aA(e,t){pf=qm=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function sA(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,X8(e,r)}}var Zm={readContext:uo,useCallback:As,useContext:As,useEffect:As,useImperativeHandle:As,useInsertionEffect:As,useLayoutEffect:As,useMemo:As,useReducer:As,useRef:As,useState:As,useDebugValue:As,useDeferredValue:As,useTransition:As,useMutableSource:As,useSyncExternalStore:As,useId:As,unstable_isNewReconciler:!1},TR={readContext:uo,useCallback:function(e,t){return dl().memoizedState=[e,t===void 0?null:t],e},useContext:uo,useEffect:Rw,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,hm(4194308,4,YN.bind(null,t,e),r)},useLayoutEffect:function(e,t){return hm(4194308,4,e,t)},useInsertionEffect:function(e,t){return hm(4,2,e,t)},useMemo:function(e,t){var r=dl();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=dl();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=CR.bind(null,ia,e),[n.memoizedState,e]},useRef:function(e){var t=dl();return e={current:e},t.memoizedState=e},useState:Lw,useDebugValue:v3,useDeferredValue:function(e){return dl().memoizedState=e},useTransition:function(){var e=Lw(!1),t=e[0];return e=SR.bind(null,e[1]),dl().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ia,a=dl();if(ea){if(r===void 0)throw Error(tr(407));r=r()}else{if(r=t(),as===null)throw Error(tr(349));hd&30||HN(n,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Rw(WN.bind(null,n,s,e),[e]),n.flags|=2048,Yf(9,zN.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=dl(),t=as.identifierPrefix;if(ea){var r=Jl,n=Yl;r=(n&~(1<<32-Vo(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Xf++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ER++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},IR={readContext:uo,useCallback:QN,useContext:uo,useEffect:g3,useImperativeHandle:JN,useInsertionEffect:XN,useLayoutEffect:KN,useMemo:eA,useReducer:h4,useRef:GN,useState:function(){return h4(Kf)},useDebugValue:v3,useDeferredValue:function(e){var t=fo();return tA(t,Ga.memoizedState,e)},useTransition:function(){var e=h4(Kf)[0],t=fo().memoizedState;return[e,t]},useMutableSource:UN,useSyncExternalStore:VN,useId:rA,unstable_isNewReconciler:!1},jR={readContext:uo,useCallback:QN,useContext:uo,useEffect:g3,useImperativeHandle:JN,useInsertionEffect:XN,useLayoutEffect:KN,useMemo:eA,useReducer:m4,useRef:GN,useState:function(){return m4(Kf)},useDebugValue:v3,useDeferredValue:function(e){var t=fo();return Ga===null?t.memoizedState=e:tA(t,Ga.memoizedState,e)},useTransition:function(){var e=m4(Kf)[0],t=fo().memoizedState;return[e,t]},useMutableSource:UN,useSyncExternalStore:VN,useId:rA,unstable_isNewReconciler:!1};function Po(e,t){if(e&&e.defaultProps){t=oa({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function r5(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:oa({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Gp={isMounted:function(e){return(e=e._reactInternals)?Ld(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Js(),a=sc(e),s=t0(n,a);s.payload=t,r!=null&&(s.callback=r),t=nc(e,s,a),t!==null&&(Ho(t,e,a,n),um(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Js(),a=sc(e),s=t0(n,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=nc(e,s,a),t!==null&&(Ho(t,e,a,n),um(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Js(),n=sc(e),a=t0(r,n);a.tag=2,t!=null&&(a.callback=t),t=nc(e,a,n),t!==null&&(Ho(t,e,n,r),um(t,e,n))}};function Pw(e,t,r,n,a,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!Hf(r,n)||!Hf(a,s):!0}function iA(e,t,r){var n=!1,a=pc,s=t.contextType;return typeof s=="object"&&s!==null?s=uo(s):(a=pi(t)?ud:Os.current,n=t.contextTypes,s=(n=n!=null)?Yu(e,a):pc),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gp,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Fw(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Gp.enqueueReplaceState(t,t.state,null)}function n5(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},d3(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=uo(s):(s=pi(t)?ud:Os.current,a.context=Yu(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(r5(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Gp.enqueueReplaceState(a,a.state,null),zm(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function t1(e,t){try{var r="",n=t;do r+=sL(n),n=n.return;while(n);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function p4(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function a5(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var LR=typeof WeakMap=="function"?WeakMap:Map;function oA(e,t,r){r=t0(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Xm||(Xm=!0,m5=n),a5(e,t)},r}function lA(e,t,r){r=t0(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){a5(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){a5(e,t),typeof n!="function"&&(ac===null?ac=new Set([this]):ac.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Mw(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new LR;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=qR.bind(null,e,t,r),t.then(e,e))}function Ow(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dw(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=t0(-1,1),t.tag=2,nc(r,t,1))),r.lanes|=1),e)}var RR=h0.ReactCurrentOwner,ui=!1;function Zs(e,t,r,n){t.child=e===null?ON(t,null,r,n):Qu(t,e.child,r,n)}function $w(e,t,r,n,a){r=r.render;var s=t.ref;return Du(t,a),n=p3(e,t,r,n,s,a),r=x3(),e!==null&&!ui?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,c0(e,t,a)):(ea&&r&&n3(t),t.flags|=1,Zs(e,t,n,a),t.child)}function Bw(e,t,r,n,a){if(e===null){var s=r.type;return typeof s=="function"&&!S3(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,cA(e,t,s,n,a)):(e=gm(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Hf,r(o,n)&&e.ref===t.ref)return c0(e,t,a)}return t.flags|=1,e=ic(s,n),e.ref=t.ref,e.return=t,t.child=e}function cA(e,t,r,n,a){if(e!==null){var s=e.memoizedProps;if(Hf(s,n)&&e.ref===t.ref)if(ui=!1,t.pendingProps=n=s,(e.lanes&a)!==0)e.flags&131072&&(ui=!0);else return t.lanes=e.lanes,c0(e,t,a)}return s5(e,t,r,n,a)}function dA(e,t,r){var n=t.pendingProps,a=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Un(ku,Pi),Pi|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Un(ku,Pi),Pi|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,Un(ku,Pi),Pi|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,Un(ku,Pi),Pi|=n;return Zs(e,t,a,r),t.child}function uA(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function s5(e,t,r,n,a){var s=pi(r)?ud:Os.current;return s=Yu(t,s),Du(t,a),r=p3(e,t,r,n,s,a),n=x3(),e!==null&&!ui?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,c0(e,t,a)):(ea&&n&&n3(t),t.flags|=1,Zs(e,t,r,a),t.child)}function Uw(e,t,r,n,a){if(pi(r)){var s=!0;$m(t)}else s=!1;if(Du(t,a),t.stateNode===null)mm(e,t),iA(t,r,n),n5(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var d=o.context,f=r.contextType;typeof f=="object"&&f!==null?f=uo(f):(f=pi(r)?ud:Os.current,f=Yu(t,f));var h=r.getDerivedStateFromProps,x=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==n||d!==f)&&Fw(t,o,n,f),D0=!1;var b=t.memoizedState;o.state=b,zm(t,n,o,a),d=t.memoizedState,c!==n||b!==d||mi.current||D0?(typeof h=="function"&&(r5(t,r,h,n),d=t.memoizedState),(c=D0||Pw(t,r,c,n,b,d,f))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),o.props=n,o.state=d,o.context=f,n=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,$N(e,t),c=t.memoizedProps,f=t.type===t.elementType?c:Po(t.type,c),o.props=f,x=t.pendingProps,b=o.context,d=r.contextType,typeof d=="object"&&d!==null?d=uo(d):(d=pi(r)?ud:Os.current,d=Yu(t,d));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==x||b!==d)&&Fw(t,o,n,d),D0=!1,b=t.memoizedState,o.state=b,zm(t,n,o,a);var _=t.memoizedState;c!==x||b!==_||mi.current||D0?(typeof w=="function"&&(r5(t,r,w,n),_=t.memoizedState),(f=D0||Pw(t,r,f,n,b,_,d)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,_,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,_,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=_),o.props=n,o.state=_,o.context=d,n=f):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return i5(e,t,r,n,s,a)}function i5(e,t,r,n,a,s){uA(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&Sw(t,r,!1),c0(e,t,s);n=t.stateNode,RR.current=t;var c=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Qu(t,e.child,null,s),t.child=Qu(t,null,c,s)):Zs(e,t,c,s),t.memoizedState=n.state,a&&Sw(t,r,!0),t.child}function fA(e){var t=e.stateNode;t.pendingContext?Ew(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ew(e,t.context,!1),u3(e,t.containerInfo)}function Vw(e,t,r,n,a){return Ju(),s3(a),t.flags|=256,Zs(e,t,r,n),t.child}var o5={dehydrated:null,treeContext:null,retryLane:0};function l5(e){return{baseLanes:e,cachePool:null,transitions:null}}function hA(e,t,r){var n=t.pendingProps,a=sa.current,s=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Un(sa,a&1),e===null)return e5(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,s?(n=t.mode,s=t.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yp(o,n,0,null),e=Qc(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=l5(r),t.memoizedState=o5,e):w3(t,o));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return PR(e,t,o,n,c,a,r);if(s){s=n.fallback,o=t.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=d,t.deletions=null):(n=ic(a,d),n.subtreeFlags=a.subtreeFlags&14680064),c!==null?s=ic(c,s):(s=Qc(s,o,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,o=e.child.memoizedState,o=o===null?l5(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=o5,n}return s=e.child,e=s.sibling,n=ic(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function w3(e,t){return t=Yp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function C2(e,t,r,n){return n!==null&&s3(n),Qu(t,e.child,null,r),e=w3(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function PR(e,t,r,n,a,s,o){if(r)return t.flags&256?(t.flags&=-257,n=p4(Error(tr(422))),C2(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,a=t.mode,n=Yp({mode:"visible",children:n.children},a,0,null),s=Qc(s,a,o,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Qu(t,e.child,null,o),t.child.memoizedState=l5(o),t.memoizedState=o5,s);if(!(t.mode&1))return C2(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var c=n.dgst;return n=c,s=Error(tr(419)),n=p4(s,n,void 0),C2(e,t,o,n)}if(c=(o&e.childLanes)!==0,ui||c){if(n=as,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,l0(e,a),Ho(n,e,a,-1))}return E3(),n=p4(Error(tr(421))),C2(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ZR.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Di=rc(a.nextSibling),Ui=t,ea=!0,Do=null,e!==null&&(ro[no++]=Yl,ro[no++]=Jl,ro[no++]=fd,Yl=e.id,Jl=e.overflow,fd=t),t=w3(t,n.children),t.flags|=4096,t)}function Hw(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),t5(e.return,t,r)}function x4(e,t,r,n,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=a)}function mA(e,t,r){var n=t.pendingProps,a=n.revealOrder,s=n.tail;if(Zs(e,t,n.children,r),n=sa.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hw(e,r,t);else if(e.tag===19)Hw(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Un(sa,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Wm(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),x4(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wm(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}x4(t,!0,r,null,s);break;case"together":x4(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mm(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function c0(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),md|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(tr(153));if(t.child!==null){for(e=t.child,r=ic(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ic(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function FR(e,t,r){switch(t.tag){case 3:fA(t),Ju();break;case 5:BN(t);break;case 1:pi(t.type)&&$m(t);break;case 4:u3(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;Un(Vm,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Un(sa,sa.current&1),t.flags|=128,null):r&t.child.childLanes?hA(e,t,r):(Un(sa,sa.current&1),e=c0(e,t,r),e!==null?e.sibling:null);Un(sa,sa.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return mA(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Un(sa,sa.current),n)break;return null;case 22:case 23:return t.lanes=0,dA(e,t,r)}return c0(e,t,r)}var pA,c5,xA,gA;pA=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};c5=function(){};xA=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,qc(vl.current);var s=null;switch(r){case"input":a=jg(e,a),n=jg(e,n),s=[];break;case"select":a=oa({},a,{value:void 0}),n=oa({},n,{value:void 0}),s=[];break;case"textarea":a=Pg(e,a),n=Pg(e,n),s=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Om)}Mg(r,n);var o;r=null;for(f in a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var c=a[f];for(o in c)c.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mf.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in n){var d=n[f];if(c=a!=null?a[f]:void 0,n.hasOwnProperty(f)&&d!==c&&(d!=null||c!=null))if(f==="style")if(c){for(o in c)!c.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in d)d.hasOwnProperty(o)&&c[o]!==d[o]&&(r||(r={}),r[o]=d[o])}else r||(s||(s=[]),s.push(f,r)),r=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mf.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Wn("scroll",e),s||c===d||(s=[])):(s=s||[]).push(f,d))}r&&(s=s||[]).push("style",r);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};gA=function(e,t,r,n){r!==n&&(t.flags|=4)};function B1(e,t){if(!ea)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Es(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function MR(e,t,r){var n=t.pendingProps;switch(a3(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Es(t),null;case 1:return pi(t.type)&&Dm(),Es(t),null;case 3:return n=t.stateNode,e1(),Xn(mi),Xn(Os),h3(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(E2(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Do!==null&&(g5(Do),Do=null))),c5(e,t),Es(t),null;case 5:f3(t);var a=qc(Gf.current);if(r=t.type,e!==null&&t.stateNode!=null)xA(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(tr(166));return Es(t),null}if(e=qc(vl.current),E2(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[ml]=t,n[qf]=s,e=(t.mode&1)!==0,r){case"dialog":Wn("cancel",n),Wn("close",n);break;case"iframe":case"object":case"embed":Wn("load",n);break;case"video":case"audio":for(a=0;a<Q1.length;a++)Wn(Q1[a],n);break;case"source":Wn("error",n);break;case"img":case"image":case"link":Wn("error",n),Wn("load",n);break;case"details":Wn("toggle",n);break;case"input":Jv(n,s),Wn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Wn("invalid",n);break;case"textarea":ew(n,s),Wn("invalid",n)}Mg(r,s),a=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?n.textContent!==c&&(s.suppressHydrationWarning!==!0&&A2(n.textContent,c,e),a=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&A2(n.textContent,c,e),a=["children",""+c]):Mf.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&Wn("scroll",n)}switch(r){case"input":x2(n),Qv(n,s,!0);break;case"textarea":x2(n),tw(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Om)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=W_(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[ml]=t,e[qf]=n,pA(e,t,!1,!1),t.stateNode=e;e:{switch(o=Og(r,n),r){case"dialog":Wn("cancel",e),Wn("close",e),a=n;break;case"iframe":case"object":case"embed":Wn("load",e),a=n;break;case"video":case"audio":for(a=0;a<Q1.length;a++)Wn(Q1[a],e);a=n;break;case"source":Wn("error",e),a=n;break;case"img":case"image":case"link":Wn("error",e),Wn("load",e),a=n;break;case"details":Wn("toggle",e),a=n;break;case"input":Jv(e,n),a=jg(e,n),Wn("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=oa({},n,{value:void 0}),Wn("invalid",e);break;case"textarea":ew(e,n),a=Pg(e,n),Wn("invalid",e);break;default:a=n}Mg(r,a),c=a;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?G_(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&q_(e,d)):s==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Of(e,d):typeof d=="number"&&Of(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mf.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Wn("scroll",e):d!=null&&H8(e,s,d,o))}switch(r){case"input":x2(e),Qv(e,n,!1);break;case"textarea":x2(e),tw(e);break;case"option":n.value!=null&&e.setAttribute("value",""+mc(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Pu(e,!!n.multiple,s,!1):n.defaultValue!=null&&Pu(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Om)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Es(t),null;case 6:if(e&&t.stateNode!=null)gA(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(tr(166));if(r=qc(Gf.current),qc(vl.current),E2(t)){if(n=t.stateNode,r=t.memoizedProps,n[ml]=t,(s=n.nodeValue!==r)&&(e=Ui,e!==null))switch(e.tag){case 3:A2(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&A2(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ml]=t,t.stateNode=n}return Es(t),null;case 13:if(Xn(sa),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ea&&Di!==null&&t.mode&1&&!(t.flags&128))FN(),Ju(),t.flags|=98560,s=!1;else if(s=E2(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(tr(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tr(317));s[ml]=t}else Ju(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Es(t),s=!1}else Do!==null&&(g5(Do),Do=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||sa.current&1?Xa===0&&(Xa=3):E3())),t.updateQueue!==null&&(t.flags|=4),Es(t),null);case 4:return e1(),c5(e,t),e===null&&zf(t.stateNode.containerInfo),Es(t),null;case 10:return l3(t.type._context),Es(t),null;case 17:return pi(t.type)&&Dm(),Es(t),null;case 19:if(Xn(sa),s=t.memoizedState,s===null)return Es(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)B1(s,!1);else{if(Xa!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Wm(e),o!==null){for(t.flags|=128,B1(s,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Un(sa,sa.current&1|2),t.child}e=e.sibling}s.tail!==null&&ka()>r1&&(t.flags|=128,n=!0,B1(s,!1),t.lanes=4194304)}else{if(!n)if(e=Wm(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),B1(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ea)return Es(t),null}else 2*ka()-s.renderingStartTime>r1&&r!==1073741824&&(t.flags|=128,n=!0,B1(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ka(),t.sibling=null,r=sa.current,Un(sa,n?r&1|2:r&1),t):(Es(t),null);case 22:case 23:return A3(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Pi&1073741824&&(Es(t),t.subtreeFlags&6&&(t.flags|=8192)):Es(t),null;case 24:return null;case 25:return null}throw Error(tr(156,t.tag))}function OR(e,t){switch(a3(t),t.tag){case 1:return pi(t.type)&&Dm(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return e1(),Xn(mi),Xn(Os),h3(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return f3(t),null;case 13:if(Xn(sa),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tr(340));Ju()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xn(sa),null;case 4:return e1(),null;case 10:return l3(t.type._context),null;case 22:case 23:return A3(),null;case 24:return null;default:return null}}var k2=!1,Rs=!1,DR=typeof WeakSet=="function"?WeakSet:Set,pr=null;function Cu(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){va(e,t,n)}else r.current=null}function d5(e,t,r){try{r()}catch(n){va(e,t,n)}}var zw=!1;function $R(e,t){if(Zg=Pm,e=_N(),r3(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,c=-1,d=-1,f=0,h=0,x=e,b=null;t:for(;;){for(var w;x!==r||a!==0&&x.nodeType!==3||(c=o+a),x!==s||n!==0&&x.nodeType!==3||(d=o+n),x.nodeType===3&&(o+=x.nodeValue.length),(w=x.firstChild)!==null;)b=x,x=w;for(;;){if(x===e)break t;if(b===r&&++f===a&&(c=o),b===s&&++h===n&&(d=o),(w=x.nextSibling)!==null)break;x=b,b=x.parentNode}x=w}r=c===-1||d===-1?null:{start:c,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gg={focusedElem:e,selectionRange:r},Pm=!1,pr=t;pr!==null;)if(t=pr,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pr=e;else for(;pr!==null;){t=pr;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var N=_.memoizedProps,S=_.memoizedState,k=t.stateNode,T=k.getSnapshotBeforeUpdate(t.elementType===t.type?N:Po(t.type,N),S);k.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(tr(163))}}catch(R){va(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,pr=e;break}pr=t.return}return _=zw,zw=!1,_}function xf(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&d5(t,r,s)}a=a.next}while(a!==n)}}function Xp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function u5(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function vA(e){var t=e.alternate;t!==null&&(e.alternate=null,vA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ml],delete t[qf],delete t[Yg],delete t[yR],delete t[_R])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wA(e){return e.tag===5||e.tag===3||e.tag===4}function Ww(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function f5(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Om));else if(n!==4&&(e=e.child,e!==null))for(f5(e,t,r),e=e.sibling;e!==null;)f5(e,t,r),e=e.sibling}function h5(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(h5(e,t,r),e=e.sibling;e!==null;)h5(e,t,r),e=e.sibling}var us=null,Fo=!1;function I0(e,t,r){for(r=r.child;r!==null;)bA(e,t,r),r=r.sibling}function bA(e,t,r){if(gl&&typeof gl.onCommitFiberUnmount=="function")try{gl.onCommitFiberUnmount(Up,r)}catch{}switch(r.tag){case 5:Rs||Cu(r,t);case 6:var n=us,a=Fo;us=null,I0(e,t,r),us=n,Fo=a,us!==null&&(Fo?(e=us,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):us.removeChild(r.stateNode));break;case 18:us!==null&&(Fo?(e=us,r=r.stateNode,e.nodeType===8?c4(e.parentNode,r):e.nodeType===1&&c4(e,r),Uf(e)):c4(us,r.stateNode));break;case 4:n=us,a=Fo,us=r.stateNode.containerInfo,Fo=!0,I0(e,t,r),us=n,Fo=a;break;case 0:case 11:case 14:case 15:if(!Rs&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var s=a,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&d5(r,t,o),a=a.next}while(a!==n)}I0(e,t,r);break;case 1:if(!Rs&&(Cu(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){va(r,t,c)}I0(e,t,r);break;case 21:I0(e,t,r);break;case 22:r.mode&1?(Rs=(n=Rs)||r.memoizedState!==null,I0(e,t,r),Rs=n):I0(e,t,r);break;default:I0(e,t,r)}}function qw(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new DR),t.forEach(function(n){var a=GR.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function ko(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var s=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:us=c.stateNode,Fo=!1;break e;case 3:us=c.stateNode.containerInfo,Fo=!0;break e;case 4:us=c.stateNode.containerInfo,Fo=!0;break e}c=c.return}if(us===null)throw Error(tr(160));bA(s,o,a),us=null,Fo=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(f){va(a,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yA(t,e),t=t.sibling}function yA(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ko(t,e),nl(e),n&4){try{xf(3,e,e.return),Xp(3,e)}catch(N){va(e,e.return,N)}try{xf(5,e,e.return)}catch(N){va(e,e.return,N)}}break;case 1:ko(t,e),nl(e),n&512&&r!==null&&Cu(r,r.return);break;case 5:if(ko(t,e),nl(e),n&512&&r!==null&&Cu(r,r.return),e.flags&32){var a=e.stateNode;try{Of(a,"")}catch(N){va(e,e.return,N)}}if(n&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&H_(a,s),Og(c,o);var f=Og(c,s);for(o=0;o<d.length;o+=2){var h=d[o],x=d[o+1];h==="style"?G_(a,x):h==="dangerouslySetInnerHTML"?q_(a,x):h==="children"?Of(a,x):H8(a,h,x,f)}switch(c){case"input":Lg(a,s);break;case"textarea":z_(a,s);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Pu(a,!!s.multiple,w,!1):b!==!!s.multiple&&(s.defaultValue!=null?Pu(a,!!s.multiple,s.defaultValue,!0):Pu(a,!!s.multiple,s.multiple?[]:"",!1))}a[qf]=s}catch(N){va(e,e.return,N)}}break;case 6:if(ko(t,e),nl(e),n&4){if(e.stateNode===null)throw Error(tr(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(N){va(e,e.return,N)}}break;case 3:if(ko(t,e),nl(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Uf(t.containerInfo)}catch(N){va(e,e.return,N)}break;case 4:ko(t,e),nl(e);break;case 13:ko(t,e),nl(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(_3=ka())),n&4&&qw(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(Rs=(f=Rs)||h,ko(t,e),Rs=f):ko(t,e),nl(e),n&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(pr=e,h=e.child;h!==null;){for(x=pr=h;pr!==null;){switch(b=pr,w=b.child,b.tag){case 0:case 11:case 14:case 15:xf(4,b,b.return);break;case 1:Cu(b,b.return);var _=b.stateNode;if(typeof _.componentWillUnmount=="function"){n=b,r=b.return;try{t=n,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(N){va(n,r,N)}}break;case 5:Cu(b,b.return);break;case 22:if(b.memoizedState!==null){Gw(x);continue}}w!==null?(w.return=b,pr=w):Gw(x)}h=h.sibling}e:for(h=null,x=e;;){if(x.tag===5){if(h===null){h=x;try{a=x.stateNode,f?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=x.stateNode,d=x.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Z_("display",o))}catch(N){va(e,e.return,N)}}}else if(x.tag===6){if(h===null)try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(N){va(e,e.return,N)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;h===x&&(h=null),x=x.return}h===x&&(h=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ko(t,e),nl(e),n&4&&qw(e);break;case 21:break;default:ko(t,e),nl(e)}}function nl(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(wA(r)){var n=r;break e}r=r.return}throw Error(tr(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Of(a,""),n.flags&=-33);var s=Ww(e);h5(e,s,a);break;case 3:case 4:var o=n.stateNode.containerInfo,c=Ww(e);f5(e,c,o);break;default:throw Error(tr(161))}}catch(d){va(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function BR(e,t,r){pr=e,_A(e)}function _A(e,t,r){for(var n=(e.mode&1)!==0;pr!==null;){var a=pr,s=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||k2;if(!o){var c=a.alternate,d=c!==null&&c.memoizedState!==null||Rs;c=k2;var f=Rs;if(k2=o,(Rs=d)&&!f)for(pr=a;pr!==null;)o=pr,d=o.child,o.tag===22&&o.memoizedState!==null?Xw(a):d!==null?(d.return=o,pr=d):Xw(a);for(;s!==null;)pr=s,_A(s),s=s.sibling;pr=a,k2=c,Rs=f}Zw(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,pr=s):Zw(e)}}function Zw(e){for(;pr!==null;){var t=pr;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Rs||Xp(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Rs)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Po(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&jw(t,s,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}jw(t,o,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var x=h.dehydrated;x!==null&&Uf(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(tr(163))}Rs||t.flags&512&&u5(t)}catch(b){va(t,t.return,b)}}if(t===e){pr=null;break}if(r=t.sibling,r!==null){r.return=t.return,pr=r;break}pr=t.return}}function Gw(e){for(;pr!==null;){var t=pr;if(t===e){pr=null;break}var r=t.sibling;if(r!==null){r.return=t.return,pr=r;break}pr=t.return}}function Xw(e){for(;pr!==null;){var t=pr;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xp(4,t)}catch(d){va(t,r,d)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(d){va(t,a,d)}}var s=t.return;try{u5(t)}catch(d){va(t,s,d)}break;case 5:var o=t.return;try{u5(t)}catch(d){va(t,o,d)}}}catch(d){va(t,t.return,d)}if(t===e){pr=null;break}var c=t.sibling;if(c!==null){c.return=t.return,pr=c;break}pr=t.return}}var UR=Math.ceil,Gm=h0.ReactCurrentDispatcher,b3=h0.ReactCurrentOwner,oo=h0.ReactCurrentBatchConfig,gn=0,as=null,$a=null,ps=0,Pi=0,ku=_c(0),Xa=0,Jf=null,md=0,Kp=0,y3=0,gf=null,ci=null,_3=0,r1=1/0,ql=null,Xm=!1,m5=null,ac=null,T2=!1,q0=null,Km=0,vf=0,p5=null,pm=-1,xm=0;function Js(){return gn&6?ka():pm!==-1?pm:pm=ka()}function sc(e){return e.mode&1?gn&2&&ps!==0?ps&-ps:AR.transition!==null?(xm===0&&(xm=iN()),xm):(e=Tn,e!==0||(e=window.event,e=e===void 0?16:hN(e.type)),e):1}function Ho(e,t,r,n){if(50<vf)throw vf=0,p5=null,Error(tr(185));Ih(e,r,n),(!(gn&2)||e!==as)&&(e===as&&(!(gn&2)&&(Kp|=r),Xa===4&&B0(e,ps)),xi(e,n),r===1&&gn===0&&!(t.mode&1)&&(r1=ka()+500,qp&&Nc()))}function xi(e,t){var r=e.callbackNode;AL(e,t);var n=Rm(e,e===as?ps:0);if(n===0)r!==null&&aw(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&aw(r),t===1)e.tag===0?NR(Kw.bind(null,e)):LN(Kw.bind(null,e)),wR(function(){!(gn&6)&&Nc()}),r=null;else{switch(oN(n)){case 1:r=G8;break;case 4:r=aN;break;case 16:r=Lm;break;case 536870912:r=sN;break;default:r=Lm}r=IA(r,NA.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function NA(e,t){if(pm=-1,xm=0,gn&6)throw Error(tr(327));var r=e.callbackNode;if($u()&&e.callbackNode!==r)return null;var n=Rm(e,e===as?ps:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ym(e,n);else{t=n;var a=gn;gn|=2;var s=EA();(as!==e||ps!==t)&&(ql=null,r1=ka()+500,Jc(e,t));do try{zR();break}catch(c){AA(e,c)}while(!0);o3(),Gm.current=s,gn=a,$a!==null?t=0:(as=null,ps=0,t=Xa)}if(t!==0){if(t===2&&(a=Vg(e),a!==0&&(n=a,t=x5(e,a))),t===1)throw r=Jf,Jc(e,0),B0(e,n),xi(e,ka()),r;if(t===6)B0(e,n);else{if(a=e.current.alternate,!(n&30)&&!VR(a)&&(t=Ym(e,n),t===2&&(s=Vg(e),s!==0&&(n=s,t=x5(e,s))),t===1))throw r=Jf,Jc(e,0),B0(e,n),xi(e,ka()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(tr(345));case 2:Mc(e,ci,ql);break;case 3:if(B0(e,n),(n&130023424)===n&&(t=_3+500-ka(),10<t)){if(Rm(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Js(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Kg(Mc.bind(null,e,ci,ql),t);break}Mc(e,ci,ql);break;case 4:if(B0(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-Vo(n);s=1<<o,o=t[o],o>a&&(a=o),n&=~s}if(n=a,n=ka()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*UR(n/1960))-n,10<n){e.timeoutHandle=Kg(Mc.bind(null,e,ci,ql),n);break}Mc(e,ci,ql);break;case 5:Mc(e,ci,ql);break;default:throw Error(tr(329))}}}return xi(e,ka()),e.callbackNode===r?NA.bind(null,e):null}function x5(e,t){var r=gf;return e.current.memoizedState.isDehydrated&&(Jc(e,t).flags|=256),e=Ym(e,t),e!==2&&(t=ci,ci=r,t!==null&&g5(t)),e}function g5(e){ci===null?ci=e:ci.push.apply(ci,e)}function VR(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],s=a.getSnapshot;a=a.value;try{if(!Zo(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function B0(e,t){for(t&=~y3,t&=~Kp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vo(t),n=1<<r;e[r]=-1,t&=~n}}function Kw(e){if(gn&6)throw Error(tr(327));$u();var t=Rm(e,0);if(!(t&1))return xi(e,ka()),null;var r=Ym(e,t);if(e.tag!==0&&r===2){var n=Vg(e);n!==0&&(t=n,r=x5(e,n))}if(r===1)throw r=Jf,Jc(e,0),B0(e,t),xi(e,ka()),r;if(r===6)throw Error(tr(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mc(e,ci,ql),xi(e,ka()),null}function N3(e,t){var r=gn;gn|=1;try{return e(t)}finally{gn=r,gn===0&&(r1=ka()+500,qp&&Nc())}}function pd(e){q0!==null&&q0.tag===0&&!(gn&6)&&$u();var t=gn;gn|=1;var r=oo.transition,n=Tn;try{if(oo.transition=null,Tn=1,e)return e()}finally{Tn=n,oo.transition=r,gn=t,!(gn&6)&&Nc()}}function A3(){Pi=ku.current,Xn(ku)}function Jc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,vR(r)),$a!==null)for(r=$a.return;r!==null;){var n=r;switch(a3(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Dm();break;case 3:e1(),Xn(mi),Xn(Os),h3();break;case 5:f3(n);break;case 4:e1();break;case 13:Xn(sa);break;case 19:Xn(sa);break;case 10:l3(n.type._context);break;case 22:case 23:A3()}r=r.return}if(as=e,$a=e=ic(e.current,null),ps=Pi=t,Xa=0,Jf=null,y3=Kp=md=0,ci=gf=null,Wc!==null){for(t=0;t<Wc.length;t++)if(r=Wc[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=a,n.next=o}r.pending=n}Wc=null}return e}function AA(e,t){do{var r=$a;try{if(o3(),fm.current=Zm,qm){for(var n=ia.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}qm=!1}if(hd=0,rs=Ga=ia=null,pf=!1,Xf=0,b3.current=null,r===null||r.return===null){Xa=1,Jf=t,$a=null;break}e:{var s=e,o=r.return,c=r,d=t;if(t=ps,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,h=c,x=h.tag;if(!(h.mode&1)&&(x===0||x===11||x===15)){var b=h.alternate;b?(h.updateQueue=b.updateQueue,h.memoizedState=b.memoizedState,h.lanes=b.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ow(o);if(w!==null){w.flags&=-257,Dw(w,o,c,s,t),w.mode&1&&Mw(s,f,t),t=w,d=f;var _=t.updateQueue;if(_===null){var N=new Set;N.add(d),t.updateQueue=N}else _.add(d);break e}else{if(!(t&1)){Mw(s,f,t),E3();break e}d=Error(tr(426))}}else if(ea&&c.mode&1){var S=Ow(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Dw(S,o,c,s,t),s3(t1(d,c));break e}}s=d=t1(d,c),Xa!==4&&(Xa=2),gf===null?gf=[s]:gf.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var k=oA(s,d,t);Iw(s,k);break e;case 1:c=d;var T=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ac===null||!ac.has(C)))){s.flags|=65536,t&=-t,s.lanes|=t;var R=lA(s,c,t);Iw(s,R);break e}}s=s.return}while(s!==null)}CA(r)}catch(V){t=V,$a===r&&r!==null&&($a=r=r.return);continue}break}while(!0)}function EA(){var e=Gm.current;return Gm.current=Zm,e===null?Zm:e}function E3(){(Xa===0||Xa===3||Xa===2)&&(Xa=4),as===null||!(md&268435455)&&!(Kp&268435455)||B0(as,ps)}function Ym(e,t){var r=gn;gn|=2;var n=EA();(as!==e||ps!==t)&&(ql=null,Jc(e,t));do try{HR();break}catch(a){AA(e,a)}while(!0);if(o3(),gn=r,Gm.current=n,$a!==null)throw Error(tr(261));return as=null,ps=0,Xa}function HR(){for(;$a!==null;)SA($a)}function zR(){for(;$a!==null&&!pL();)SA($a)}function SA(e){var t=TA(e.alternate,e,Pi);e.memoizedProps=e.pendingProps,t===null?CA(e):$a=t,b3.current=null}function CA(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=OR(r,t),r!==null){r.flags&=32767,$a=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xa=6,$a=null;return}}else if(r=MR(r,t,Pi),r!==null){$a=r;return}if(t=t.sibling,t!==null){$a=t;return}$a=t=e}while(t!==null);Xa===0&&(Xa=5)}function Mc(e,t,r){var n=Tn,a=oo.transition;try{oo.transition=null,Tn=1,WR(e,t,r,n)}finally{oo.transition=a,Tn=n}return null}function WR(e,t,r,n){do $u();while(q0!==null);if(gn&6)throw Error(tr(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(tr(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(EL(e,s),e===as&&($a=as=null,ps=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||T2||(T2=!0,IA(Lm,function(){return $u(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=oo.transition,oo.transition=null;var o=Tn;Tn=1;var c=gn;gn|=4,b3.current=null,$R(e,r),yA(r,e),uR(Gg),Pm=!!Zg,Gg=Zg=null,e.current=r,BR(r),xL(),gn=c,Tn=o,oo.transition=s}else e.current=r;if(T2&&(T2=!1,q0=e,Km=a),s=e.pendingLanes,s===0&&(ac=null),wL(r.stateNode),xi(e,ka()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Xm)throw Xm=!1,e=m5,m5=null,e;return Km&1&&e.tag!==0&&$u(),s=e.pendingLanes,s&1?e===p5?vf++:(vf=0,p5=e):vf=0,Nc(),null}function $u(){if(q0!==null){var e=oN(Km),t=oo.transition,r=Tn;try{if(oo.transition=null,Tn=16>e?16:e,q0===null)var n=!1;else{if(e=q0,q0=null,Km=0,gn&6)throw Error(tr(331));var a=gn;for(gn|=4,pr=e.current;pr!==null;){var s=pr,o=s.child;if(pr.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var f=c[d];for(pr=f;pr!==null;){var h=pr;switch(h.tag){case 0:case 11:case 15:xf(8,h,s)}var x=h.child;if(x!==null)x.return=h,pr=x;else for(;pr!==null;){h=pr;var b=h.sibling,w=h.return;if(vA(h),h===f){pr=null;break}if(b!==null){b.return=w,pr=b;break}pr=w}}}var _=s.alternate;if(_!==null){var N=_.child;if(N!==null){_.child=null;do{var S=N.sibling;N.sibling=null,N=S}while(N!==null)}}pr=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pr=o;else e:for(;pr!==null;){if(s=pr,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xf(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,pr=k;break e}pr=s.return}}var T=e.current;for(pr=T;pr!==null;){o=pr;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,pr=C;else e:for(o=T;pr!==null;){if(c=pr,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Xp(9,c)}}catch(V){va(c,c.return,V)}if(c===o){pr=null;break e}var R=c.sibling;if(R!==null){R.return=c.return,pr=R;break e}pr=c.return}}if(gn=a,Nc(),gl&&typeof gl.onPostCommitFiberRoot=="function")try{gl.onPostCommitFiberRoot(Up,e)}catch{}n=!0}return n}finally{Tn=r,oo.transition=t}}return!1}function Yw(e,t,r){t=t1(r,t),t=oA(e,t,1),e=nc(e,t,1),t=Js(),e!==null&&(Ih(e,1,t),xi(e,t))}function va(e,t,r){if(e.tag===3)Yw(e,e,r);else for(;t!==null;){if(t.tag===3){Yw(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ac===null||!ac.has(n))){e=t1(r,e),e=lA(t,e,1),t=nc(t,e,1),e=Js(),t!==null&&(Ih(t,1,e),xi(t,e));break}}t=t.return}}function qR(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Js(),e.pingedLanes|=e.suspendedLanes&r,as===e&&(ps&r)===r&&(Xa===4||Xa===3&&(ps&130023424)===ps&&500>ka()-_3?Jc(e,0):y3|=r),xi(e,t)}function kA(e,t){t===0&&(e.mode&1?(t=w2,w2<<=1,!(w2&130023424)&&(w2=4194304)):t=1);var r=Js();e=l0(e,t),e!==null&&(Ih(e,t,r),xi(e,r))}function ZR(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),kA(e,r)}function GR(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(tr(314))}n!==null&&n.delete(t),kA(e,r)}var TA;TA=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||mi.current)ui=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ui=!1,FR(e,t,r);ui=!!(e.flags&131072)}else ui=!1,ea&&t.flags&1048576&&RN(t,Um,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;mm(e,t),e=t.pendingProps;var a=Yu(t,Os.current);Du(t,r),a=p3(null,t,n,e,a,r);var s=x3();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pi(n)?(s=!0,$m(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,d3(t),a.updater=Gp,t.stateNode=a,a._reactInternals=t,n5(t,n,e,r),t=i5(null,t,n,!0,s,r)):(t.tag=0,ea&&s&&n3(t),Zs(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(mm(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=KR(n),e=Po(n,e),a){case 0:t=s5(null,t,n,e,r);break e;case 1:t=Uw(null,t,n,e,r);break e;case 11:t=$w(null,t,n,e,r);break e;case 14:t=Bw(null,t,n,Po(n.type,e),r);break e}throw Error(tr(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Po(n,a),s5(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Po(n,a),Uw(e,t,n,a,r);case 3:e:{if(fA(t),e===null)throw Error(tr(387));n=t.pendingProps,s=t.memoizedState,a=s.element,$N(e,t),zm(t,n,null,r);var o=t.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=t1(Error(tr(423)),t),t=Vw(e,t,n,r,a);break e}else if(n!==a){a=t1(Error(tr(424)),t),t=Vw(e,t,n,r,a);break e}else for(Di=rc(t.stateNode.containerInfo.firstChild),Ui=t,ea=!0,Do=null,r=ON(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ju(),n===a){t=c0(e,t,r);break e}Zs(e,t,n,r)}t=t.child}return t;case 5:return BN(t),e===null&&e5(t),n=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,o=a.children,Xg(n,a)?o=null:s!==null&&Xg(n,s)&&(t.flags|=32),uA(e,t),Zs(e,t,o,r),t.child;case 6:return e===null&&e5(t),null;case 13:return hA(e,t,r);case 4:return u3(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Qu(t,null,n,r):Zs(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Po(n,a),$w(e,t,n,a,r);case 7:return Zs(e,t,t.pendingProps,r),t.child;case 8:return Zs(e,t,t.pendingProps.children,r),t.child;case 12:return Zs(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,s=t.memoizedProps,o=a.value,Un(Vm,n._currentValue),n._currentValue=o,s!==null)if(Zo(s.value,o)){if(s.children===a.children&&!mi.current){t=c0(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var d=c.firstContext;d!==null;){if(d.context===n){if(s.tag===1){d=t0(-1,r&-r),d.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?d.next=d:(d.next=h.next,h.next=d),f.pending=d}}s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),t5(s.return,r,t),c.lanes|=r;break}d=d.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(tr(341));o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),t5(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zs(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Du(t,r),a=uo(a),n=n(a),t.flags|=1,Zs(e,t,n,r),t.child;case 14:return n=t.type,a=Po(n,t.pendingProps),a=Po(n.type,a),Bw(e,t,n,a,r);case 15:return cA(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Po(n,a),mm(e,t),t.tag=1,pi(n)?(e=!0,$m(t)):e=!1,Du(t,r),iA(t,n,a),n5(t,n,a,r),i5(null,t,n,!0,e,r);case 19:return mA(e,t,r);case 22:return dA(e,t,r)}throw Error(tr(156,t.tag))};function IA(e,t){return nN(e,t)}function XR(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function so(e,t,r,n){return new XR(e,t,r,n)}function S3(e){return e=e.prototype,!(!e||!e.isReactComponent)}function KR(e){if(typeof e=="function")return S3(e)?1:0;if(e!=null){if(e=e.$$typeof,e===W8)return 11;if(e===q8)return 14}return 2}function ic(e,t){var r=e.alternate;return r===null?(r=so(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function gm(e,t,r,n,a,s){var o=2;if(n=e,typeof e=="function")S3(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case vu:return Qc(r.children,a,s,t);case z8:o=8,a|=8;break;case Cg:return e=so(12,r,t,a|2),e.elementType=Cg,e.lanes=s,e;case kg:return e=so(13,r,t,a),e.elementType=kg,e.lanes=s,e;case Tg:return e=so(19,r,t,a),e.elementType=Tg,e.lanes=s,e;case B_:return Yp(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D_:o=10;break e;case $_:o=9;break e;case W8:o=11;break e;case q8:o=14;break e;case O0:o=16,n=null;break e}throw Error(tr(130,e==null?e:typeof e,""))}return t=so(o,r,t,a),t.elementType=e,t.type=n,t.lanes=s,t}function Qc(e,t,r,n){return e=so(7,e,n,t),e.lanes=r,e}function Yp(e,t,r,n){return e=so(22,e,n,t),e.elementType=B_,e.lanes=r,e.stateNode={isHidden:!1},e}function g4(e,t,r){return e=so(6,e,null,t),e.lanes=r,e}function v4(e,t,r){return t=so(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function YR(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jx(0),this.expirationTimes=Jx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jx(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function C3(e,t,r,n,a,s,o,c,d){return e=new YR(e,t,r,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=so(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},d3(s),e}function JR(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gu,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function jA(e){if(!e)return pc;e=e._reactInternals;e:{if(Ld(e)!==e||e.tag!==1)throw Error(tr(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(tr(171))}if(e.tag===1){var r=e.type;if(pi(r))return jN(e,r,t)}return t}function LA(e,t,r,n,a,s,o,c,d){return e=C3(r,n,!0,e,a,s,o,c,d),e.context=jA(null),r=e.current,n=Js(),a=sc(r),s=t0(n,a),s.callback=t??null,nc(r,s,a),e.current.lanes=a,Ih(e,a,n),xi(e,n),e}function Jp(e,t,r,n){var a=t.current,s=Js(),o=sc(a);return r=jA(r),t.context===null?t.context=r:t.pendingContext=r,t=t0(s,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=nc(a,t,o),e!==null&&(Ho(e,a,o,s),um(e,a,o)),o}function Jm(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jw(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function k3(e,t){Jw(e,t),(e=e.alternate)&&Jw(e,t)}function QR(){return null}var RA=typeof reportError=="function"?reportError:function(e){console.error(e)};function T3(e){this._internalRoot=e}Qp.prototype.render=T3.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tr(409));Jp(e,t,null,null)};Qp.prototype.unmount=T3.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pd(function(){Jp(null,e,null,null)}),t[o0]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=dN();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$0.length&&t!==0&&t<$0[r].priority;r++);$0.splice(r,0,e),r===0&&fN(e)}};function I3(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ex(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qw(){}function eP(e,t,r,n,a){if(a){if(typeof n=="function"){var s=n;n=function(){var f=Jm(o);s.call(f)}}var o=LA(t,n,e,0,null,!1,!1,"",Qw);return e._reactRootContainer=o,e[o0]=o.current,zf(e.nodeType===8?e.parentNode:e),pd(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var c=n;n=function(){var f=Jm(d);c.call(f)}}var d=C3(e,0,!1,null,null,!1,!1,"",Qw);return e._reactRootContainer=d,e[o0]=d.current,zf(e.nodeType===8?e.parentNode:e),pd(function(){Jp(t,d,r,n)}),d}function tx(e,t,r,n,a){var s=r._reactRootContainer;if(s){var o=s;if(typeof a=="function"){var c=a;a=function(){var d=Jm(o);c.call(d)}}Jp(t,o,e,a)}else o=eP(r,t,e,a,n);return Jm(o)}lN=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=J1(t.pendingLanes);r!==0&&(X8(t,r|1),xi(t,ka()),!(gn&6)&&(r1=ka()+500,Nc()))}break;case 13:pd(function(){var n=l0(e,1);if(n!==null){var a=Js();Ho(n,e,1,a)}}),k3(e,1)}};K8=function(e){if(e.tag===13){var t=l0(e,134217728);if(t!==null){var r=Js();Ho(t,e,134217728,r)}k3(e,134217728)}};cN=function(e){if(e.tag===13){var t=sc(e),r=l0(e,t);if(r!==null){var n=Js();Ho(r,e,t,n)}k3(e,t)}};dN=function(){return Tn};uN=function(e,t){var r=Tn;try{return Tn=e,t()}finally{Tn=r}};$g=function(e,t,r){switch(t){case"input":if(Lg(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Wp(n);if(!a)throw Error(tr(90));V_(n),Lg(n,a)}}}break;case"textarea":z_(e,r);break;case"select":t=r.value,t!=null&&Pu(e,!!r.multiple,t,!1)}};Y_=N3;J_=pd;var tP={usingClientEntryPoint:!1,Events:[Lh,_u,Wp,X_,K_,N3]},U1={findFiberByHostInstance:zc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rP={bundleType:U1.bundleType,version:U1.version,rendererPackageName:U1.rendererPackageName,rendererConfig:U1.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:h0.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tN(e),e===null?null:e.stateNode},findFiberByHostInstance:U1.findFiberByHostInstance||QR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var I2=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!I2.isDisabled&&I2.supportsFiber)try{Up=I2.inject(rP),gl=I2}catch{}}zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tP;zi.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!I3(t))throw Error(tr(200));return JR(e,t,null,r)};zi.createRoot=function(e,t){if(!I3(e))throw Error(tr(299));var r=!1,n="",a=RA;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=C3(e,1,!1,null,null,r,!1,n,a),e[o0]=t.current,zf(e.nodeType===8?e.parentNode:e),new T3(t)};zi.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tr(188)):(e=Object.keys(e).join(","),Error(tr(268,e)));return e=tN(t),e=e===null?null:e.stateNode,e};zi.flushSync=function(e){return pd(e)};zi.hydrate=function(e,t,r){if(!ex(t))throw Error(tr(200));return tx(null,e,t,!0,r)};zi.hydrateRoot=function(e,t,r){if(!I3(e))throw Error(tr(405));var n=r!=null&&r.hydratedSources||null,a=!1,s="",o=RA;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=LA(t,null,e,1,r??null,a,!1,s,o),e[o0]=t.current,zf(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Qp(t)};zi.render=function(e,t,r){if(!ex(t))throw Error(tr(200));return tx(null,e,t,!1,r)};zi.unmountComponentAtNode=function(e){if(!ex(e))throw Error(tr(40));return e._reactRootContainer?(pd(function(){tx(null,null,e,!1,function(){e._reactRootContainer=null,e[o0]=null})}),!0):!1};zi.unstable_batchedUpdates=N3;zi.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ex(r))throw Error(tr(200));if(e==null||e._reactInternals===void 0)throw Error(tr(38));return tx(e,t,r,!1,n)};zi.version="18.3.1-next-f1338f8080-20240426";function PA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PA)}catch(e){console.error(e)}}PA(),P_.exports=zi;var rx=P_.exports;const nP=M8(rx),aP=F8({__proto__:null,default:nP},[rx]);var FA,eb=rx;FA=eb.createRoot,eb.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yn(){return Yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Yn.apply(null,arguments)}var Oa;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Oa||(Oa={}));const tb="popstate";function sP(e){e===void 0&&(e={});function t(n,a){let{pathname:s,search:o,hash:c}=n.location;return Qf("",{pathname:s,search:o,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:gd(a)}return oP(t,r,null,e)}function tn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function iP(){return Math.random().toString(36).substr(2,8)}function rb(e,t){return{usr:e.state,key:e.key,idx:t}}function Qf(e,t,r,n){return r===void 0&&(r=null),Yn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ac(t):t,{state:r,key:t&&t.key||n||iP()})}function gd(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ac(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function oP(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:s=!1}=n,o=a.history,c=Oa.Pop,d=null,f=h();f==null&&(f=0,o.replaceState(Yn({},o.state,{idx:f}),""));function h(){return(o.state||{idx:null}).idx}function x(){c=Oa.Pop;let S=h(),k=S==null?null:S-f;f=S,d&&d({action:c,location:N.location,delta:k})}function b(S,k){c=Oa.Push;let T=Qf(N.location,S,k);f=h()+1;let C=rb(T,f),R=N.createHref(T);try{o.pushState(C,"",R)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;a.location.assign(R)}s&&d&&d({action:c,location:N.location,delta:1})}function w(S,k){c=Oa.Replace;let T=Qf(N.location,S,k);f=h();let C=rb(T,f),R=N.createHref(T);o.replaceState(C,"",R),s&&d&&d({action:c,location:N.location,delta:0})}function _(S){let k=a.location.origin!=="null"?a.location.origin:a.location.href,T=typeof S=="string"?S:gd(S);return T=T.replace(/ $/,"%20"),tn(k,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,k)}let N={get action(){return c},get location(){return e(a,o)},listen(S){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(tb,x),d=S,()=>{a.removeEventListener(tb,x),d=null}},createHref(S){return t(a,S)},createURL:_,encodeLocation(S){let k=_(S);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:b,replace:w,go(S){return o.go(S)}};return N}var Cn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cn||(Cn={}));const lP=new Set(["lazy","caseSensitive","path","id","index","children"]);function cP(e){return e.index===!0}function Qm(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((a,s)=>{let o=[...r,String(s)],c=typeof a.id=="string"?a.id:o.join("-");if(tn(a.index!==!0||!a.children,"Cannot specify children on an index route"),tn(!n[c],'Found a route id collision on id "'+c+`".  Route id's must be globally unique within Data Router usages`),cP(a)){let d=Yn({},a,t(a),{id:c});return n[c]=d,d}else{let d=Yn({},a,t(a),{id:c,children:void 0});return n[c]=d,a.children&&(d.children=Qm(a.children,t,o,n)),d}})}function $c(e,t,r){return r===void 0&&(r="/"),vm(e,t,r,!1)}function vm(e,t,r,n){let a=typeof t=="string"?Ac(t):t,s=d0(a.pathname||"/",r);if(s==null)return null;let o=MA(e);uP(o);let c=null,d=_P(s);for(let f=0;c==null&&f<o.length;++f)c=bP(o[f],d,n);return c}function dP(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function MA(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(s,o,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};d.relativePath.startsWith("/")&&(tn(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let f=r0([n,d.relativePath]),h=r.concat(d);s.children&&s.children.length>0&&(tn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),MA(s.children,t,h,f)),!(s.path==null&&!s.index)&&t.push({path:f,score:vP(f,s.index),routesMeta:h})};return e.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))a(s,o);else for(let d of OA(s.path))a(s,o,d)}),t}function OA(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let o=OA(n.join("/")),c=[];return c.push(...o.map(d=>d===""?s:[s,d].join("/"))),a&&c.push(...o),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function uP(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:wP(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const fP=/^:[\w-]+$/,hP=3,mP=2,pP=1,xP=10,gP=-2,nb=e=>e==="*";function vP(e,t){let r=e.split("/"),n=r.length;return r.some(nb)&&(n+=gP),t&&(n+=mP),r.filter(a=>!nb(a)).reduce((a,s)=>a+(fP.test(s)?hP:s===""?pP:xP),n)}function wP(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function bP(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,a={},s="/",o=[];for(let c=0;c<n.length;++c){let d=n[c],f=c===n.length-1,h=s==="/"?t:t.slice(s.length)||"/",x=ep({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},h),b=d.route;if(!x&&f&&r&&!n[n.length-1].route.index&&(x=ep({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},h)),!x)return null;Object.assign(a,x.params),o.push({params:a,pathname:r0([s,x.pathname]),pathnameBase:SP(r0([s,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(s=r0([s,x.pathnameBase]))}return o}function ep(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=yP(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],o=s.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((f,h,x)=>{let{paramName:b,isOptional:w}=h;if(b==="*"){let N=c[x]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const _=c[x];return w&&!_?f[b]=void 0:f[b]=(_||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:o,pattern:e}}function yP(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function _P(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function d0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const NP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AP=e=>NP.test(e);function EP(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Ac(e):e,s;if(r)if(AP(r))s=r;else{if(r.includes("//")){let o=r;r=j3(r),xd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?s=ab(r.substring(1),"/"):s=ab(r,t)}else s=t;return{pathname:s,search:CP(n),hash:kP(a)}}function ab(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function w4(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DA(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function nx(e,t){let r=DA(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ax(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Ac(e):(a=Yn({},e),tn(!a.pathname||!a.pathname.includes("?"),w4("?","pathname","search",a)),tn(!a.pathname||!a.pathname.includes("#"),w4("#","pathname","hash",a)),tn(!a.search||!a.search.includes("#"),w4("#","search","hash",a)));let s=e===""||a.pathname==="",o=s?"/":a.pathname,c;if(o==null)c=r;else{let x=t.length-1;if(!n&&o.startsWith("..")){let b=o.split("/");for(;b[0]==="..";)b.shift(),x-=1;a.pathname=b.join("/")}c=x>=0?t[x]:"/"}let d=EP(a,c),f=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(f||h)&&(d.pathname+="/"),d}const j3=e=>e.replace(/\/\/+/g,"/"),r0=e=>j3(e.join("/")),SP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),CP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class tp{constructor(t,r,n,a){a===void 0&&(a=!1),this.status=t,this.statusText=r||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $A=["post","put","patch","delete"],TP=new Set($A),IP=["get",...$A],jP=new Set(IP),LP=new Set([301,302,303,307,308]),RP=new Set([307,308]),b4={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},PP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},V1={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},L3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,FP=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),BA="remix-router-transitions";function MP(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;tn(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let Me=e.detectErrorBoundary;a=qe=>({hasErrorBoundary:Me(qe)})}else a=FP;let s={},o=Qm(e.routes,a,void 0,s),c,d=e.basename||"/",f=e.dataStrategy||BP,h=e.patchRoutesOnNavigation,x=Yn({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),b=null,w=new Set,_=null,N=null,S=null,k=e.hydrationData!=null,T=$c(o,e.history.location,d),C=!1,R=null;if(T==null&&!h){let Me=oi(404,{pathname:e.history.location.pathname}),{matches:qe,route:ne}=pb(o);T=qe,R={[ne.id]:Me}}T&&!e.hydrationData&&Ct(T,o,e.history.location.pathname).active&&(T=null);let V;if(T)if(T.some(Me=>Me.route.lazy))V=!1;else if(!T.some(Me=>Me.route.loader))V=!0;else if(x.v7_partialHydration){let Me=e.hydrationData?e.hydrationData.loaderData:null,qe=e.hydrationData?e.hydrationData.errors:null;if(qe){let ne=T.findIndex(oe=>qe[oe.route.id]!==void 0);V=T.slice(0,ne+1).every(oe=>!w5(oe.route,Me,qe))}else V=T.every(ne=>!w5(ne.route,Me,qe))}else V=e.hydrationData!=null;else if(V=!1,T=[],x.v7_partialHydration){let Me=Ct(null,o,e.history.location.pathname);Me.active&&Me.matches&&(C=!0,T=Me.matches)}let P,I={historyAction:e.history.action,location:e.history.location,matches:T,initialized:V,navigation:b4,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},U=Oa.Pop,M=!1,W,D=!1,H=new Map,Q=null,le=!1,ae=!1,pe=[],be=new Set,te=new Map,X=0,Ne=-1,_e=new Map,F=new Set,J=new Map,Z=new Map,ee=new Set,ie=new Map,Se=new Map,Ce;function Le(){if(b=e.history.listen(Me=>{let{action:qe,location:ne,delta:oe}=Me;if(Ce){Ce(),Ce=void 0;return}xd(Se.size===0||oe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ae=We({currentLocation:I.location,nextLocation:ne,historyAction:qe});if(Ae&&oe!=null){let q=new Promise(G=>{Ce=G});e.history.go(oe*-1),xt(Ae,{state:"blocked",location:ne,proceed(){xt(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:ne}),q.then(()=>e.history.go(oe))},reset(){let G=new Map(I.blockers);G.set(Ae,V1),ce({blockers:G})}});return}return dt(qe,ne)}),r){eF(t,H);let Me=()=>tF(t,H);t.addEventListener("pagehide",Me),Q=()=>t.removeEventListener("pagehide",Me)}return I.initialized||dt(Oa.Pop,I.location,{initialHydration:!0}),P}function Oe(){b&&b(),Q&&Q(),w.clear(),W&&W.abort(),I.fetchers.forEach((Me,qe)=>zt(qe)),I.blockers.forEach((Me,qe)=>ct(qe))}function lt(Me){return w.add(Me),()=>w.delete(Me)}function ce(Me,qe){qe===void 0&&(qe={}),I=Yn({},I,Me);let ne=[],oe=[];x.v7_fetcherPersist&&I.fetchers.forEach((Ae,q)=>{Ae.state==="idle"&&(ee.has(q)?oe.push(q):ne.push(q))}),ee.forEach(Ae=>{!I.fetchers.has(Ae)&&!te.has(Ae)&&oe.push(Ae)}),[...w].forEach(Ae=>Ae(I,{deletedFetchers:oe,viewTransitionOpts:qe.viewTransitionOpts,flushSync:qe.flushSync===!0})),x.v7_fetcherPersist?(ne.forEach(Ae=>I.fetchers.delete(Ae)),oe.forEach(Ae=>zt(Ae))):oe.forEach(Ae=>ee.delete(Ae))}function Qe(Me,qe,ne){var oe,Ae;let{flushSync:q}=ne===void 0?{}:ne,G=I.actionData!=null&&I.navigation.formMethod!=null&&Mo(I.navigation.formMethod)&&I.navigation.state==="loading"&&((oe=Me.state)==null?void 0:oe._isRedirect)!==!0,re;qe.actionData?Object.keys(qe.actionData).length>0?re=qe.actionData:re=null:G?re=I.actionData:re=null;let se=qe.loaderData?hb(I.loaderData,qe.loaderData,qe.matches||[],qe.errors):I.loaderData,fe=I.blockers;fe.size>0&&(fe=new Map(fe),fe.forEach((Ye,Ze)=>fe.set(Ze,V1)));let xe=M===!0||I.navigation.formMethod!=null&&Mo(I.navigation.formMethod)&&((Ae=Me.state)==null?void 0:Ae._isRedirect)!==!0;c&&(o=c,c=void 0),le||U===Oa.Pop||(U===Oa.Push?e.history.push(Me,Me.state):U===Oa.Replace&&e.history.replace(Me,Me.state));let Ve;if(U===Oa.Pop){let Ye=H.get(I.location.pathname);Ye&&Ye.has(Me.pathname)?Ve={currentLocation:I.location,nextLocation:Me}:H.has(Me.pathname)&&(Ve={currentLocation:Me,nextLocation:I.location})}else if(D){let Ye=H.get(I.location.pathname);Ye?Ye.add(Me.pathname):(Ye=new Set([Me.pathname]),H.set(I.location.pathname,Ye)),Ve={currentLocation:I.location,nextLocation:Me}}ce(Yn({},qe,{actionData:re,loaderData:se,historyAction:U,location:Me,initialized:!0,navigation:b4,revalidation:"idle",restoreScrollPosition:De(Me,qe.matches||I.matches),preventScrollReset:xe,blockers:fe}),{viewTransitionOpts:Ve,flushSync:q===!0}),U=Oa.Pop,M=!1,D=!1,le=!1,ae=!1,pe=[]}async function pt(Me,qe){if(typeof Me=="number"){e.history.go(Me);return}let ne=v5(I.location,I.matches,d,x.v7_prependBasename,Me,x.v7_relativeSplatPath,qe==null?void 0:qe.fromRouteId,qe==null?void 0:qe.relative),{path:oe,submission:Ae,error:q}=sb(x.v7_normalizeFormMethod,!1,ne,qe),G=I.location,re=Qf(I.location,oe,qe&&qe.state);re=Yn({},re,e.history.encodeLocation(re));let se=qe&&qe.replace!=null?qe.replace:void 0,fe=Oa.Push;se===!0?fe=Oa.Replace:se===!1||Ae!=null&&Mo(Ae.formMethod)&&Ae.formAction===I.location.pathname+I.location.search&&(fe=Oa.Replace);let xe=qe&&"preventScrollReset"in qe?qe.preventScrollReset===!0:void 0,Ve=(qe&&qe.flushSync)===!0,Ye=We({currentLocation:G,nextLocation:re,historyAction:fe});if(Ye){xt(Ye,{state:"blocked",location:re,proceed(){xt(Ye,{state:"proceeding",proceed:void 0,reset:void 0,location:re}),pt(Me,qe)},reset(){let Ze=new Map(I.blockers);Ze.set(Ye,V1),ce({blockers:Ze})}});return}return await dt(fe,re,{submission:Ae,pendingError:q,preventScrollReset:xe,replace:qe&&qe.replace,enableViewTransition:qe&&qe.viewTransition,flushSync:Ve})}function ge(){if(sr(),ce({revalidation:"loading"}),I.navigation.state!=="submitting"){if(I.navigation.state==="idle"){dt(I.historyAction,I.location,{startUninterruptedRevalidation:!0});return}dt(U||I.historyAction,I.navigation.location,{overrideNavigation:I.navigation,enableViewTransition:D===!0})}}async function dt(Me,qe,ne){W&&W.abort(),W=null,U=Me,le=(ne&&ne.startUninterruptedRevalidation)===!0,Ut(I.location,I.matches),M=(ne&&ne.preventScrollReset)===!0,D=(ne&&ne.enableViewTransition)===!0;let oe=c||o,Ae=ne&&ne.overrideNavigation,q=ne!=null&&ne.initialHydration&&I.matches&&I.matches.length>0&&!C?I.matches:$c(oe,qe,d),G=(ne&&ne.flushSync)===!0;if(q&&I.initialized&&!ae&&qP(I.location,qe)&&!(ne&&ne.submission&&Mo(ne.submission.formMethod))){Qe(qe,{matches:q},{flushSync:G});return}let re=Ct(q,oe,qe.pathname);if(re.active&&re.matches&&(q=re.matches),!q){let{error:ze,notFoundMatches:$e,route:He}=st(qe.pathname);Qe(qe,{matches:$e,loaderData:{},errors:{[He.id]:ze}},{flushSync:G});return}W=new AbortController;let se=Jd(e.history,qe,W.signal,ne&&ne.submission),fe;if(ne&&ne.pendingError)fe=[Bc(q).route.id,{type:Cn.error,error:ne.pendingError}];else if(ne&&ne.submission&&Mo(ne.submission.formMethod)){let ze=await at(se,qe,ne.submission,q,re.active,{replace:ne.replace,flushSync:G});if(ze.shortCircuited)return;if(ze.pendingActionResult){let[$e,He]=ze.pendingActionResult;if(Fi(He)&&eh(He.error)&&He.error.status===404){W=null,Qe(qe,{matches:ze.matches,loaderData:{},errors:{[$e]:He.error}});return}}q=ze.matches||q,fe=ze.pendingActionResult,Ae=y4(qe,ne.submission),G=!1,re.active=!1,se=Jd(e.history,se.url,se.signal)}let{shortCircuited:xe,matches:Ve,loaderData:Ye,errors:Ze}=await Et(se,qe,q,re.active,Ae,ne&&ne.submission,ne&&ne.fetcherSubmission,ne&&ne.replace,ne&&ne.initialHydration===!0,G,fe);xe||(W=null,Qe(qe,Yn({matches:Ve||q},mb(fe),{loaderData:Ye,errors:Ze})))}async function at(Me,qe,ne,oe,Ae,q){q===void 0&&(q={}),sr();let G=JP(qe,ne);if(ce({navigation:G},{flushSync:q.flushSync===!0}),Ae){let fe=await Ge(oe,qe.pathname,Me.signal);if(fe.type==="aborted")return{shortCircuited:!0};if(fe.type==="error"){let xe=Bc(fe.partialMatches).route.id;return{matches:fe.partialMatches,pendingActionResult:[xe,{type:Cn.error,error:fe.error}]}}else if(fe.matches)oe=fe.matches;else{let{notFoundMatches:xe,error:Ve,route:Ye}=st(qe.pathname);return{matches:xe,pendingActionResult:[Ye.id,{type:Cn.error,error:Ve}]}}}let re,se=ef(oe,qe);if(!se.route.action&&!se.route.lazy)re={type:Cn.error,error:oi(405,{method:Me.method,pathname:qe.pathname,routeId:se.route.id})};else if(re=(await St("action",I,Me,[se],oe,null))[se.route.id],Me.signal.aborted)return{shortCircuited:!0};if(Zc(re)){let fe;return q&&q.replace!=null?fe=q.replace:fe=db(re.response.headers.get("Location"),new URL(Me.url),d,e.history)===I.location.pathname+I.location.search,await rr(Me,re,!0,{submission:ne,replace:fe}),{shortCircuited:!0}}if(Z0(re))throw oi(400,{type:"defer-action"});if(Fi(re)){let fe=Bc(oe,se.route.id);return(q&&q.replace)!==!0&&(U=Oa.Push),{matches:oe,pendingActionResult:[fe.route.id,re]}}return{matches:oe,pendingActionResult:[se.route.id,re]}}async function Et(Me,qe,ne,oe,Ae,q,G,re,se,fe,xe){let Ve=Ae||y4(qe,q),Ye=q||G||gb(Ve),Ze=!le&&(!x.v7_partialHydration||!se);if(oe){if(Ze){let or=Ue(xe);ce(Yn({navigation:Ve},or!==void 0?{actionData:or}:{}),{flushSync:fe})}let Ar=await Ge(ne,qe.pathname,Me.signal);if(Ar.type==="aborted")return{shortCircuited:!0};if(Ar.type==="error"){let or=Bc(Ar.partialMatches).route.id;return{matches:Ar.partialMatches,loaderData:{},errors:{[or]:Ar.error}}}else if(Ar.matches)ne=Ar.matches;else{let{error:or,notFoundMatches:Er,route:Cr}=st(qe.pathname);return{matches:Er,loaderData:{},errors:{[Cr.id]:or}}}}let ze=c||o,[$e,He]=ob(e.history,I,ne,Ye,qe,x.v7_partialHydration&&se===!0,x.v7_skipActionErrorRevalidation,ae,pe,be,ee,J,F,ze,d,xe);if(bt(Ar=>!(ne&&ne.some(or=>or.route.id===Ar))||$e&&$e.some(or=>or.route.id===Ar)),Ne=++X,$e.length===0&&He.length===0){let Ar=Be();return Qe(qe,Yn({matches:ne,loaderData:{},errors:xe&&Fi(xe[1])?{[xe[0]]:xe[1].error}:null},mb(xe),Ar?{fetchers:new Map(I.fetchers)}:{}),{flushSync:fe}),{shortCircuited:!0}}if(Ze){let Ar={};if(!oe){Ar.navigation=Ve;let or=Ue(xe);or!==void 0&&(Ar.actionData=or)}He.length>0&&(Ar.fetchers=Xt(He)),ce(Ar,{flushSync:fe})}He.forEach(Ar=>{Ht(Ar.key),Ar.controller&&te.set(Ar.key,Ar.controller)});let nt=()=>He.forEach(Ar=>Ht(Ar.key));W&&W.signal.addEventListener("abort",nt);let{loaderResults:Nt,fetcherResults:jt}=await Pt(I,ne,$e,He,Me);if(Me.signal.aborted)return{shortCircuited:!0};W&&W.signal.removeEventListener("abort",nt),He.forEach(Ar=>te.delete(Ar.key));let kt=j2(Nt);if(kt)return await rr(Me,kt.result,!0,{replace:re}),{shortCircuited:!0};if(kt=j2(jt),kt)return F.add(kt.key),await rr(Me,kt.result,!0,{replace:re}),{shortCircuited:!0};let{loaderData:er,errors:gt}=fb(I,ne,Nt,xe,He,jt,ie);ie.forEach((Ar,or)=>{Ar.subscribe(Er=>{(Er||Ar.done)&&ie.delete(or)})}),x.v7_partialHydration&&se&&I.errors&&(gt=Yn({},I.errors,gt));let cr=Be(),nr=Fe(Ne),Rr=cr||nr||He.length>0;return Yn({matches:ne,loaderData:er,errors:gt},Rr?{fetchers:new Map(I.fetchers)}:{})}function Ue(Me){if(Me&&!Fi(Me[1]))return{[Me[0]]:Me[1].data};if(I.actionData)return Object.keys(I.actionData).length===0?null:I.actionData}function Xt(Me){return Me.forEach(qe=>{let ne=I.fetchers.get(qe.key),oe=H1(void 0,ne?ne.data:void 0);I.fetchers.set(qe.key,oe)}),new Map(I.fetchers)}function ht(Me,qe,ne,oe){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ht(Me);let Ae=(oe&&oe.flushSync)===!0,q=c||o,G=v5(I.location,I.matches,d,x.v7_prependBasename,ne,x.v7_relativeSplatPath,qe,oe==null?void 0:oe.relative),re=$c(q,G,d),se=Ct(re,q,G);if(se.active&&se.matches&&(re=se.matches),!re){Dt(Me,qe,oi(404,{pathname:G}),{flushSync:Ae});return}let{path:fe,submission:xe,error:Ve}=sb(x.v7_normalizeFormMethod,!0,G,oe);if(Ve){Dt(Me,qe,Ve,{flushSync:Ae});return}let Ye=ef(re,fe),Ze=(oe&&oe.preventScrollReset)===!0;if(xe&&Mo(xe.formMethod)){Vt(Me,qe,fe,Ye,re,se.active,Ae,Ze,xe);return}J.set(Me,{routeId:qe,path:fe}),Yt(Me,qe,fe,Ye,re,se.active,Ae,Ze,xe)}async function Vt(Me,qe,ne,oe,Ae,q,G,re,se){sr(),J.delete(Me);function fe(jr){if(!jr.route.action&&!jr.route.lazy){let Mn=oi(405,{method:se.formMethod,pathname:ne,routeId:qe});return Dt(Me,qe,Mn,{flushSync:G}),!0}return!1}if(!q&&fe(oe))return;let xe=I.fetchers.get(Me);Jt(Me,QP(se,xe),{flushSync:G});let Ve=new AbortController,Ye=Jd(e.history,ne,Ve.signal,se);if(q){let jr=await Ge(Ae,new URL(Ye.url).pathname,Ye.signal,Me);if(jr.type==="aborted")return;if(jr.type==="error"){Dt(Me,qe,jr.error,{flushSync:G});return}else if(jr.matches){if(Ae=jr.matches,oe=ef(Ae,ne),fe(oe))return}else{Dt(Me,qe,oi(404,{pathname:ne}),{flushSync:G});return}}te.set(Me,Ve);let Ze=X,$e=(await St("action",I,Ye,[oe],Ae,Me))[oe.route.id];if(Ye.signal.aborted){te.get(Me)===Ve&&te.delete(Me);return}if(x.v7_fetcherPersist&&ee.has(Me)){if(Zc($e)||Fi($e)){Jt(Me,F0(void 0));return}}else{if(Zc($e))if(te.delete(Me),Ne>Ze){Jt(Me,F0(void 0));return}else return F.add(Me),Jt(Me,H1(se)),rr(Ye,$e,!1,{fetcherSubmission:se,preventScrollReset:re});if(Fi($e)){Dt(Me,qe,$e.error);return}}if(Z0($e))throw oi(400,{type:"defer-action"});let He=I.navigation.location||I.location,nt=Jd(e.history,He,Ve.signal),Nt=c||o,jt=I.navigation.state!=="idle"?$c(Nt,I.navigation.location,d):I.matches;tn(jt,"Didn't find any matches after fetcher action");let kt=++X;_e.set(Me,kt);let er=H1(se,$e.data);I.fetchers.set(Me,er);let[gt,cr]=ob(e.history,I,jt,se,He,!1,x.v7_skipActionErrorRevalidation,ae,pe,be,ee,J,F,Nt,d,[oe.route.id,$e]);cr.filter(jr=>jr.key!==Me).forEach(jr=>{let Mn=jr.key,la=I.fetchers.get(Mn),Pr=H1(void 0,la?la.data:void 0);I.fetchers.set(Mn,Pr),Ht(Mn),jr.controller&&te.set(Mn,jr.controller)}),ce({fetchers:new Map(I.fetchers)});let nr=()=>cr.forEach(jr=>Ht(jr.key));Ve.signal.addEventListener("abort",nr);let{loaderResults:Rr,fetcherResults:Ar}=await Pt(I,jt,gt,cr,nt);if(Ve.signal.aborted)return;Ve.signal.removeEventListener("abort",nr),_e.delete(Me),te.delete(Me),cr.forEach(jr=>te.delete(jr.key));let or=j2(Rr);if(or)return rr(nt,or.result,!1,{preventScrollReset:re});if(or=j2(Ar),or)return F.add(or.key),rr(nt,or.result,!1,{preventScrollReset:re});let{loaderData:Er,errors:Cr}=fb(I,jt,Rr,void 0,cr,Ar,ie);if(I.fetchers.has(Me)){let jr=F0($e.data);I.fetchers.set(Me,jr)}Fe(kt),I.navigation.state==="loading"&&kt>Ne?(tn(U,"Expected pending action"),W&&W.abort(),Qe(I.navigation.location,{matches:jt,loaderData:Er,errors:Cr,fetchers:new Map(I.fetchers)})):(ce({errors:Cr,loaderData:hb(I.loaderData,Er,jt,Cr),fetchers:new Map(I.fetchers)}),ae=!1)}async function Yt(Me,qe,ne,oe,Ae,q,G,re,se){let fe=I.fetchers.get(Me);Jt(Me,H1(se,fe?fe.data:void 0),{flushSync:G});let xe=new AbortController,Ve=Jd(e.history,ne,xe.signal);if(q){let $e=await Ge(Ae,new URL(Ve.url).pathname,Ve.signal,Me);if($e.type==="aborted")return;if($e.type==="error"){Dt(Me,qe,$e.error,{flushSync:G});return}else if($e.matches)Ae=$e.matches,oe=ef(Ae,ne);else{Dt(Me,qe,oi(404,{pathname:ne}),{flushSync:G});return}}te.set(Me,xe);let Ye=X,ze=(await St("loader",I,Ve,[oe],Ae,Me))[oe.route.id];if(Z0(ze)&&(ze=await R3(ze,Ve.signal,!0)||ze),te.get(Me)===xe&&te.delete(Me),!Ve.signal.aborted){if(ee.has(Me)){Jt(Me,F0(void 0));return}if(Zc(ze))if(Ne>Ye){Jt(Me,F0(void 0));return}else{F.add(Me),await rr(Ve,ze,!1,{preventScrollReset:re});return}if(Fi(ze)){Dt(Me,qe,ze.error);return}tn(!Z0(ze),"Unhandled fetcher deferred data"),Jt(Me,F0(ze.data))}}async function rr(Me,qe,ne,oe){let{submission:Ae,fetcherSubmission:q,preventScrollReset:G,replace:re}=oe===void 0?{}:oe;qe.response.headers.has("X-Remix-Revalidate")&&(ae=!0);let se=qe.response.headers.get("Location");tn(se,"Expected a Location header on the redirect Response"),se=db(se,new URL(Me.url),d,e.history);let fe=Qf(I.location,se,{_isRedirect:!0});if(r){let $e=!1;if(qe.response.headers.has("X-Remix-Reload-Document"))$e=!0;else if(L3.test(se)){const He=e.history.createURL(se);$e=He.origin!==t.location.origin||d0(He.pathname,d)==null}if($e){re?t.location.replace(se):t.location.assign(se);return}}W=null;let xe=re===!0||qe.response.headers.has("X-Remix-Replace")?Oa.Replace:Oa.Push,{formMethod:Ve,formAction:Ye,formEncType:Ze}=I.navigation;!Ae&&!q&&Ve&&Ye&&Ze&&(Ae=gb(I.navigation));let ze=Ae||q;if(RP.has(qe.response.status)&&ze&&Mo(ze.formMethod))await dt(xe,fe,{submission:Yn({},ze,{formAction:se}),preventScrollReset:G||M,enableViewTransition:ne?D:void 0});else{let $e=y4(fe,Ae);await dt(xe,fe,{overrideNavigation:$e,fetcherSubmission:q,preventScrollReset:G||M,enableViewTransition:ne?D:void 0})}}async function St(Me,qe,ne,oe,Ae,q){let G,re={};try{G=await UP(f,Me,qe,ne,oe,Ae,q,s,a)}catch(se){return oe.forEach(fe=>{re[fe.route.id]={type:Cn.error,error:se}}),re}for(let[se,fe]of Object.entries(G))if(ZP(fe)){let xe=fe.result;re[se]={type:Cn.redirect,response:zP(xe,ne,se,Ae,d,x.v7_relativeSplatPath)}}else re[se]=await HP(fe);return re}async function Pt(Me,qe,ne,oe,Ae){let q=Me.matches,G=St("loader",Me,Ae,ne,qe,null),re=Promise.all(oe.map(async xe=>{if(xe.matches&&xe.match&&xe.controller){let Ye=(await St("loader",Me,Jd(e.history,xe.path,xe.controller.signal),[xe.match],xe.matches,xe.key))[xe.match.route.id];return{[xe.key]:Ye}}else return Promise.resolve({[xe.key]:{type:Cn.error,error:oi(404,{pathname:xe.path})}})})),se=await G,fe=(await re).reduce((xe,Ve)=>Object.assign(xe,Ve),{});return await Promise.all([KP(qe,se,Ae.signal,q,Me.loaderData),YP(qe,fe,oe)]),{loaderResults:se,fetcherResults:fe}}function sr(){ae=!0,pe.push(...bt()),J.forEach((Me,qe)=>{te.has(qe)&&be.add(qe),Ht(qe)})}function Jt(Me,qe,ne){ne===void 0&&(ne={}),I.fetchers.set(Me,qe),ce({fetchers:new Map(I.fetchers)},{flushSync:(ne&&ne.flushSync)===!0})}function Dt(Me,qe,ne,oe){oe===void 0&&(oe={});let Ae=Bc(I.matches,qe);zt(Me),ce({errors:{[Ae.route.id]:ne},fetchers:new Map(I.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function Wt(Me){return Z.set(Me,(Z.get(Me)||0)+1),ee.has(Me)&&ee.delete(Me),I.fetchers.get(Me)||PP}function zt(Me){let qe=I.fetchers.get(Me);te.has(Me)&&!(qe&&qe.state==="loading"&&_e.has(Me))&&Ht(Me),J.delete(Me),_e.delete(Me),F.delete(Me),x.v7_fetcherPersist&&ee.delete(Me),be.delete(Me),I.fetchers.delete(Me)}function dr(Me){let qe=(Z.get(Me)||0)-1;qe<=0?(Z.delete(Me),ee.add(Me),x.v7_fetcherPersist||zt(Me)):Z.set(Me,qe),ce({fetchers:new Map(I.fetchers)})}function Ht(Me){let qe=te.get(Me);qe&&(qe.abort(),te.delete(Me))}function wt(Me){for(let qe of Me){let ne=Wt(qe),oe=F0(ne.data);I.fetchers.set(qe,oe)}}function Be(){let Me=[],qe=!1;for(let ne of F){let oe=I.fetchers.get(ne);tn(oe,"Expected fetcher: "+ne),oe.state==="loading"&&(F.delete(ne),Me.push(ne),qe=!0)}return wt(Me),qe}function Fe(Me){let qe=[];for(let[ne,oe]of _e)if(oe<Me){let Ae=I.fetchers.get(ne);tn(Ae,"Expected fetcher: "+ne),Ae.state==="loading"&&(Ht(ne),_e.delete(ne),qe.push(ne))}return wt(qe),qe.length>0}function et(Me,qe){let ne=I.blockers.get(Me)||V1;return Se.get(Me)!==qe&&Se.set(Me,qe),ne}function ct(Me){I.blockers.delete(Me),Se.delete(Me)}function xt(Me,qe){let ne=I.blockers.get(Me)||V1;tn(ne.state==="unblocked"&&qe.state==="blocked"||ne.state==="blocked"&&qe.state==="blocked"||ne.state==="blocked"&&qe.state==="proceeding"||ne.state==="blocked"&&qe.state==="unblocked"||ne.state==="proceeding"&&qe.state==="unblocked","Invalid blocker state transition: "+ne.state+" -> "+qe.state);let oe=new Map(I.blockers);oe.set(Me,qe),ce({blockers:oe})}function We(Me){let{currentLocation:qe,nextLocation:ne,historyAction:oe}=Me;if(Se.size===0)return;Se.size>1&&xd(!1,"A router only supports one blocker at a time");let Ae=Array.from(Se.entries()),[q,G]=Ae[Ae.length-1],re=I.blockers.get(q);if(!(re&&re.state==="proceeding")&&G({currentLocation:qe,nextLocation:ne,historyAction:oe}))return q}function st(Me){let qe=oi(404,{pathname:Me}),ne=c||o,{matches:oe,route:Ae}=pb(ne);return bt(),{notFoundMatches:oe,route:Ae,error:qe}}function bt(Me){let qe=[];return ie.forEach((ne,oe)=>{(!Me||Me(oe))&&(ne.cancel(),qe.push(oe),ie.delete(oe))}),qe}function ft(Me,qe,ne){if(_=Me,S=qe,N=ne||null,!k&&I.navigation===b4){k=!0;let oe=De(I.location,I.matches);oe!=null&&ce({restoreScrollPosition:oe})}return()=>{_=null,S=null,N=null}}function Rt(Me,qe){return N&&N(Me,qe.map(oe=>dP(oe,I.loaderData)))||Me.key}function Ut(Me,qe){if(_&&S){let ne=Rt(Me,qe);_[ne]=S()}}function De(Me,qe){if(_){let ne=Rt(Me,qe),oe=_[ne];if(typeof oe=="number")return oe}return null}function Ct(Me,qe,ne){if(h)if(Me){if(Object.keys(Me[0].params).length>0)return{active:!0,matches:vm(qe,ne,d,!0)}}else return{active:!0,matches:vm(qe,ne,d,!0)||[]};return{active:!1,matches:null}}async function Ge(Me,qe,ne,oe){if(!h)return{type:"success",matches:Me};let Ae=Me;for(;;){let q=c==null,G=c||o,re=s;try{await h({signal:ne,path:qe,matches:Ae,fetcherKey:oe,patch:(xe,Ve)=>{ne.aborted||cb(xe,Ve,G,re,a)}})}catch(xe){return{type:"error",error:xe,partialMatches:Ae}}finally{q&&!ne.aborted&&(o=[...o])}if(ne.aborted)return{type:"aborted"};let se=$c(G,qe,d);if(se)return{type:"success",matches:se};let fe=vm(G,qe,d,!0);if(!fe||Ae.length===fe.length&&Ae.every((xe,Ve)=>xe.route.id===fe[Ve].route.id))return{type:"success",matches:null};Ae=fe}}function _t(Me){s={},c=Qm(Me,a,void 0,s)}function Zt(Me,qe){let ne=c==null;cb(Me,qe,c||o,s,a),ne&&(o=[...o],ce({}))}return P={get basename(){return d},get future(){return x},get state(){return I},get routes(){return o},get window(){return t},initialize:Le,subscribe:lt,enableScrollRestoration:ft,navigate:pt,fetch:ht,revalidate:ge,createHref:Me=>e.history.createHref(Me),encodeLocation:Me=>e.history.encodeLocation(Me),getFetcher:Wt,deleteFetcher:dr,dispose:Oe,getBlocker:et,deleteBlocker:ct,patchRoutes:Zt,_internalFetchControllers:te,_internalActiveDeferreds:ie,_internalSetRoutes:_t},P}function OP(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function v5(e,t,r,n,a,s,o,c){let d,f;if(o){d=[];for(let x of t)if(d.push(x),x.route.id===o){f=x;break}}else d=t,f=t[t.length-1];let h=ax(a||".",nx(d,s),d0(e.pathname,r)||e.pathname,c==="path");if(a==null&&(h.search=e.search,h.hash=e.hash),(a==null||a===""||a===".")&&f){let x=P3(h.search);if(f.route.index&&!x)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&x){let b=new URLSearchParams(h.search),w=b.getAll("index");b.delete("index"),w.filter(N=>N).forEach(N=>b.append("index",N));let _=b.toString();h.search=_?"?"+_:""}}return n&&r!=="/"&&(h.pathname=h.pathname==="/"?r:r0([r,h.pathname])),gd(h)}function sb(e,t,r,n){if(!n||!OP(n))return{path:r};if(n.formMethod&&!XP(n.formMethod))return{path:r,error:oi(405,{method:n.formMethod})};let a=()=>({path:r,error:oi(400,{type:"invalid-body"})}),s=n.formMethod||"get",o=e?s.toUpperCase():s.toLowerCase(),c=HA(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Mo(o))return a();let b=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((w,_)=>{let[N,S]=_;return""+w+N+"="+S+`
`},""):String(n.body);return{path:r,submission:{formMethod:o,formAction:c,formEncType:n.formEncType,formData:void 0,json:void 0,text:b}}}else if(n.formEncType==="application/json"){if(!Mo(o))return a();try{let b=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:o,formAction:c,formEncType:n.formEncType,formData:void 0,json:b,text:void 0}}}catch{return a()}}}tn(typeof FormData=="function","FormData is not available in this environment");let d,f;if(n.formData)d=b5(n.formData),f=n.formData;else if(n.body instanceof FormData)d=b5(n.body),f=n.body;else if(n.body instanceof URLSearchParams)d=n.body,f=ub(d);else if(n.body==null)d=new URLSearchParams,f=new FormData;else try{d=new URLSearchParams(n.body),f=ub(d)}catch{return a()}let h={formMethod:o,formAction:c,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:f,json:void 0,text:void 0};if(Mo(h.formMethod))return{path:r,submission:h};let x=Ac(r);return t&&x.search&&P3(x.search)&&d.append("index",""),x.search="?"+d,{path:gd(x),submission:h}}function ib(e,t,r){r===void 0&&(r=!1);let n=e.findIndex(a=>a.route.id===t);return n>=0?e.slice(0,r?n+1:n):e}function ob(e,t,r,n,a,s,o,c,d,f,h,x,b,w,_,N){let S=N?Fi(N[1])?N[1].error:N[1].data:void 0,k=e.createURL(t.location),T=e.createURL(a),C=r;s&&t.errors?C=ib(r,Object.keys(t.errors)[0],!0):N&&Fi(N[1])&&(C=ib(r,N[0]));let R=N?N[1].statusCode:void 0,V=o&&R&&R>=400,P=C.filter((U,M)=>{let{route:W}=U;if(W.lazy)return!0;if(W.loader==null)return!1;if(s)return w5(W,t.loaderData,t.errors);if(DP(t.loaderData,t.matches[M],U)||d.some(Q=>Q===U.route.id))return!0;let D=t.matches[M],H=U;return lb(U,Yn({currentUrl:k,currentParams:D.params,nextUrl:T,nextParams:H.params},n,{actionResult:S,actionStatus:R,defaultShouldRevalidate:V?!1:c||k.pathname+k.search===T.pathname+T.search||k.search!==T.search||UA(D,H)}))}),I=[];return x.forEach((U,M)=>{if(s||!r.some(le=>le.route.id===U.routeId)||h.has(M))return;let W=$c(w,U.path,_);if(!W){I.push({key:M,routeId:U.routeId,path:U.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(M),H=ef(W,U.path),Q=!1;b.has(M)?Q=!1:f.has(M)?(f.delete(M),Q=!0):D&&D.state!=="idle"&&D.data===void 0?Q=c:Q=lb(H,Yn({currentUrl:k,currentParams:t.matches[t.matches.length-1].params,nextUrl:T,nextParams:r[r.length-1].params},n,{actionResult:S,actionStatus:R,defaultShouldRevalidate:V?!1:c})),Q&&I.push({key:M,routeId:U.routeId,path:U.path,matches:W,match:H,controller:new AbortController})}),[P,I]}function w5(e,t,r){if(e.lazy)return!0;if(!e.loader)return!1;let n=t!=null&&t[e.id]!==void 0,a=r!=null&&r[e.id]!==void 0;return!n&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!n&&!a}function DP(e,t,r){let n=!t||r.route.id!==t.route.id,a=e[r.route.id]===void 0;return n||a}function UA(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function lb(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}function cb(e,t,r,n,a){var s;let o;if(e){let f=n[e];tn(f,"No route found to patch children into: routeId = "+e),f.children||(f.children=[]),o=f.children}else o=r;let c=t.filter(f=>!o.some(h=>VA(f,h))),d=Qm(c,a,[e||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],n);o.push(...d)}function VA(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((r,n)=>{var a;return(a=t.children)==null?void 0:a.some(s=>VA(r,s))}):!1}async function $P(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let a=r[e.id];tn(a,"No route found in manifest");let s={};for(let o in n){let d=a[o]!==void 0&&o!=="hasErrorBoundary";xd(!d,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!d&&!lP.has(o)&&(s[o]=n[o])}Object.assign(a,s),Object.assign(a,Yn({},t(a),{lazy:void 0}))}async function BP(e){let{matches:t}=e,r=t.filter(a=>a.shouldLoad);return(await Promise.all(r.map(a=>a.resolve()))).reduce((a,s,o)=>Object.assign(a,{[r[o].route.id]:s}),{})}async function UP(e,t,r,n,a,s,o,c,d,f){let h=s.map(w=>w.route.lazy?$P(w.route,d,c):void 0),x=s.map((w,_)=>{let N=h[_],S=a.some(T=>T.route.id===w.route.id);return Yn({},w,{shouldLoad:S,resolve:async T=>(T&&n.method==="GET"&&(w.route.lazy||w.route.loader)&&(S=!0),S?VP(t,n,w,N,T,f):Promise.resolve({type:Cn.data,result:void 0}))})}),b=await e({matches:x,request:n,params:s[0].params,fetcherKey:o,context:f});try{await Promise.all(h)}catch{}return b}async function VP(e,t,r,n,a,s){let o,c,d=f=>{let h,x=new Promise((_,N)=>h=N);c=()=>h(),t.signal.addEventListener("abort",c);let b=_=>typeof f!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+r.route.id+"]"))):f({request:t,params:r.params,context:s},..._!==void 0?[_]:[]),w=(async()=>{try{return{type:"data",result:await(a?a(N=>b(N)):b())}}catch(_){return{type:"error",result:_}}})();return Promise.race([w,x])};try{let f=r.route[e];if(n)if(f){let h,[x]=await Promise.all([d(f).catch(b=>{h=b}),n]);if(h!==void 0)throw h;o=x}else if(await n,f=r.route[e],f)o=await d(f);else if(e==="action"){let h=new URL(t.url),x=h.pathname+h.search;throw oi(405,{method:t.method,pathname:x,routeId:r.route.id})}else return{type:Cn.data,result:void 0};else if(f)o=await d(f);else{let h=new URL(t.url),x=h.pathname+h.search;throw oi(404,{pathname:x})}tn(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(f){return{type:Cn.error,result:f}}finally{c&&t.signal.removeEventListener("abort",c)}return o}async function HP(e){let{result:t,type:r}=e;if(zA(t)){let x;try{let b=t.headers.get("Content-Type");b&&/\bapplication\/json\b/.test(b)?t.body==null?x=null:x=await t.json():x=await t.text()}catch(b){return{type:Cn.error,error:b}}return r===Cn.error?{type:Cn.error,error:new tp(t.status,t.statusText,x),statusCode:t.status,headers:t.headers}:{type:Cn.data,data:x,statusCode:t.status,headers:t.headers}}if(r===Cn.error){if(xb(t)){var n,a;if(t.data instanceof Error){var s,o;return{type:Cn.error,error:t.data,statusCode:(s=t.init)==null?void 0:s.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:Cn.error,error:new tp(((n=t.init)==null?void 0:n.status)||500,void 0,t.data),statusCode:eh(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:Cn.error,error:t,statusCode:eh(t)?t.status:void 0}}if(GP(t)){var c,d;return{type:Cn.deferred,deferredData:t,statusCode:(c=t.init)==null?void 0:c.status,headers:((d=t.init)==null?void 0:d.headers)&&new Headers(t.init.headers)}}if(xb(t)){var f,h;return{type:Cn.data,data:t.data,statusCode:(f=t.init)==null?void 0:f.status,headers:(h=t.init)!=null&&h.headers?new Headers(t.init.headers):void 0}}return{type:Cn.data,data:t}}function zP(e,t,r,n,a,s){let o=e.headers.get("Location");if(tn(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!L3.test(o)){let c=n.slice(0,n.findIndex(d=>d.route.id===r)+1);o=v5(new URL(t.url),c,a,!0,o,s),e.headers.set("Location",o)}return e}function db(e,t,r,n){let a=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(L3.test(e)){let s=e,o=s.startsWith("//")?new URL(t.protocol+s):new URL(s);if(a.includes(o.protocol))throw new Error("Invalid redirect location");let c=d0(o.pathname,r)!=null;if(o.origin===t.origin&&c)return j3(o.pathname)+o.search+o.hash}try{let s=n.createURL(e);if(a.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return e}function Jd(e,t,r,n){let a=e.createURL(HA(t)).toString(),s={signal:r};if(n&&Mo(n.formMethod)){let{formMethod:o,formEncType:c}=n;s.method=o.toUpperCase(),c==="application/json"?(s.headers=new Headers({"Content-Type":c}),s.body=JSON.stringify(n.json)):c==="text/plain"?s.body=n.text:c==="application/x-www-form-urlencoded"&&n.formData?s.body=b5(n.formData):s.body=n.formData}return new Request(a,s)}function b5(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function ub(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function WP(e,t,r,n,a){let s={},o=null,c,d=!1,f={},h=r&&Fi(r[1])?r[1].error:void 0;return e.forEach(x=>{if(!(x.route.id in t))return;let b=x.route.id,w=t[b];if(tn(!Zc(w),"Cannot handle redirect results in processLoaderData"),Fi(w)){let _=w.error;h!==void 0&&(_=h,h=void 0),o=o||{};{let N=Bc(e,b);o[N.route.id]==null&&(o[N.route.id]=_)}s[b]=void 0,d||(d=!0,c=eh(w.error)?w.error.status:500),w.headers&&(f[b]=w.headers)}else Z0(w)?(n.set(b,w.deferredData),s[b]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!d&&(c=w.statusCode),w.headers&&(f[b]=w.headers)):(s[b]=w.data,w.statusCode&&w.statusCode!==200&&!d&&(c=w.statusCode),w.headers&&(f[b]=w.headers))}),h!==void 0&&r&&(o={[r[0]]:h},s[r[0]]=void 0),{loaderData:s,errors:o,statusCode:c||200,loaderHeaders:f}}function fb(e,t,r,n,a,s,o){let{loaderData:c,errors:d}=WP(t,r,n,o);return a.forEach(f=>{let{key:h,match:x,controller:b}=f,w=s[h];if(tn(w,"Did not find corresponding fetcher result"),!(b&&b.signal.aborted))if(Fi(w)){let _=Bc(e.matches,x==null?void 0:x.route.id);d&&d[_.route.id]||(d=Yn({},d,{[_.route.id]:w.error})),e.fetchers.delete(h)}else if(Zc(w))tn(!1,"Unhandled fetcher revalidation redirect");else if(Z0(w))tn(!1,"Unhandled fetcher deferred data");else{let _=F0(w.data);e.fetchers.set(h,_)}}),{loaderData:c,errors:d}}function hb(e,t,r,n){let a=Yn({},t);for(let s of r){let o=s.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&s.route.loader&&(a[o]=e[o]),n&&n.hasOwnProperty(o))break}return a}function mb(e){return e?Fi(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Bc(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function pb(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function oi(e,t){let{pathname:r,routeId:n,method:a,type:s,message:o}=t===void 0?{}:t,c="Unknown Server Error",d="Unknown @remix-run/router error";return e===400?(c="Bad Request",a&&r&&n?d="You made a "+a+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":s==="defer-action"?d="defer() is not supported in actions":s==="invalid-body"&&(d="Unable to encode submission body")):e===403?(c="Forbidden",d='Route "'+n+'" does not match URL "'+r+'"'):e===404?(c="Not Found",d='No route matches URL "'+r+'"'):e===405&&(c="Method Not Allowed",a&&r&&n?d="You made a "+a.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":a&&(d='Invalid request method "'+a.toUpperCase()+'"')),new tp(e||500,c,new Error(d),!0)}function j2(e){let t=Object.entries(e);for(let r=t.length-1;r>=0;r--){let[n,a]=t[r];if(Zc(a))return{key:n,result:a}}}function HA(e){let t=typeof e=="string"?Ac(e):e;return gd(Yn({},t,{hash:""}))}function qP(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ZP(e){return zA(e.result)&&LP.has(e.result.status)}function Z0(e){return e.type===Cn.deferred}function Fi(e){return e.type===Cn.error}function Zc(e){return(e&&e.type)===Cn.redirect}function xb(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function GP(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function zA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function XP(e){return jP.has(e.toLowerCase())}function Mo(e){return TP.has(e.toLowerCase())}async function KP(e,t,r,n,a){let s=Object.entries(t);for(let o=0;o<s.length;o++){let[c,d]=s[o],f=e.find(b=>(b==null?void 0:b.route.id)===c);if(!f)continue;let h=n.find(b=>b.route.id===f.route.id),x=h!=null&&!UA(h,f)&&(a&&a[f.route.id])!==void 0;Z0(d)&&x&&await R3(d,r,!1).then(b=>{b&&(t[c]=b)})}}async function YP(e,t,r){for(let n=0;n<r.length;n++){let{key:a,routeId:s,controller:o}=r[n],c=t[a];e.find(f=>(f==null?void 0:f.route.id)===s)&&Z0(c)&&(tn(o,"Expected an AbortController for revalidating fetcher deferred result"),await R3(c,o.signal,!0).then(f=>{f&&(t[a]=f)}))}}async function R3(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Cn.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Cn.error,error:a}}return{type:Cn.data,data:e.deferredData.data}}}function P3(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ef(e,t){let r=typeof t=="string"?Ac(t).search:t.search;if(e[e.length-1].route.index&&P3(r||""))return e[e.length-1];let n=DA(e);return n[n.length-1]}function gb(e){let{formMethod:t,formAction:r,formEncType:n,text:a,formData:s,json:o}=e;if(!(!t||!r||!n)){if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:r,formEncType:n,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:o,text:void 0}}}function y4(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function JP(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function H1(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function QP(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function F0(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function eF(e,t){try{let r=e.sessionStorage.getItem(BA);if(r){let n=JSON.parse(r);for(let[a,s]of Object.entries(n||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function tF(e,t){if(t.size>0){let r={};for(let[n,a]of t)r[n]=[...a];try{e.sessionStorage.setItem(BA,JSON.stringify(r))}catch(n){xd(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rp(){return rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rp.apply(null,arguments)}const Ph=v.createContext(null),F3=v.createContext(null),m0=v.createContext(null),M3=v.createContext(null),p0=v.createContext({outlet:null,matches:[],isDataRoute:!1}),WA=v.createContext(null);function rF(e,t){let{relative:r}=t===void 0?{}:t;x1()||tn(!1);let{basename:n,navigator:a}=v.useContext(m0),{hash:s,pathname:o,search:c}=sx(e,{relative:r}),d=o;return n!=="/"&&(d=o==="/"?n:r0([n,o])),a.createHref({pathname:d,search:c,hash:s})}function x1(){return v.useContext(M3)!=null}function Al(){return x1()||tn(!1),v.useContext(M3).location}function qA(e){v.useContext(m0).static||v.useLayoutEffect(e)}function Fh(){let{isDataRoute:e}=v.useContext(p0);return e?xF():nF()}function nF(){x1()||tn(!1);let e=v.useContext(Ph),{basename:t,future:r,navigator:n}=v.useContext(m0),{matches:a}=v.useContext(p0),{pathname:s}=Al(),o=JSON.stringify(nx(a,r.v7_relativeSplatPath)),c=v.useRef(!1);return qA(()=>{c.current=!0}),v.useCallback(function(f,h){if(h===void 0&&(h={}),!c.current)return;if(typeof f=="number"){n.go(f);return}let x=ax(f,JSON.parse(o),s,h.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:r0([t,x.pathname])),(h.replace?n.replace:n.push)(x,h.state,h)},[t,n,o,s,e])}const aF=v.createContext(null);function sF(e){let t=v.useContext(p0).outlet;return t&&v.createElement(aF.Provider,{value:e},t)}function sx(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(m0),{matches:a}=v.useContext(p0),{pathname:s}=Al(),o=JSON.stringify(nx(a,n.v7_relativeSplatPath));return v.useMemo(()=>ax(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function iF(e,t,r,n){x1()||tn(!1);let{navigator:a}=v.useContext(m0),{matches:s}=v.useContext(p0),o=s[s.length-1],c=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let f=Al(),h;h=f;let x=h.pathname||"/",b=x;if(d!=="/"){let N=d.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(N.length).join("/")}let w=$c(e,{pathname:b});return uF(w&&w.map(N=>Object.assign({},N,{params:Object.assign({},c,N.params),pathname:r0([d,a.encodeLocation?a.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?d:r0([d,a.encodeLocation?a.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,r,n)}function oF(){let e=pF(),t=eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:a},r):null,null)}const lF=v.createElement(oF,null);class cF extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(p0.Provider,{value:this.props.routeContext},v.createElement(WA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dF(e){let{routeContext:t,match:r,children:n}=e,a=v.useContext(Ph);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(p0.Provider,{value:t},n)}function uF(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,c=(a=r)==null?void 0:a.errors;if(c!=null){let h=o.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);h>=0||tn(!1),o=o.slice(0,Math.min(o.length,h+1))}let d=!1,f=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<o.length;h++){let x=o[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=h),x.route.id){let{loaderData:b,errors:w}=r,_=x.route.loader&&b[x.route.id]===void 0&&(!w||w[x.route.id]===void 0);if(x.route.lazy||_){d=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((h,x,b)=>{let w,_=!1,N=null,S=null;r&&(w=c&&x.route.id?c[x.route.id]:void 0,N=x.route.errorElement||lF,d&&(f<0&&b===0?(_=!0,S=null):f===b&&(_=!0,S=x.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,b+1)),T=()=>{let C;return w?C=N:_?C=S:x.route.Component?C=v.createElement(x.route.Component,null):x.route.element?C=x.route.element:C=h,v.createElement(dF,{match:x,routeContext:{outlet:h,matches:k,isDataRoute:r!=null},children:C})};return r&&(x.route.ErrorBoundary||x.route.errorElement||b===0)?v.createElement(cF,{location:r.location,revalidation:r.revalidation,component:N,error:w,children:T(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):T()},null)}var ZA=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ZA||{}),np=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(np||{});function fF(e){let t=v.useContext(Ph);return t||tn(!1),t}function hF(e){let t=v.useContext(F3);return t||tn(!1),t}function mF(e){let t=v.useContext(p0);return t||tn(!1),t}function GA(e){let t=mF(),r=t.matches[t.matches.length-1];return r.route.id||tn(!1),r.route.id}function pF(){var e;let t=v.useContext(WA),r=hF(np.UseRouteError),n=GA(np.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function xF(){let{router:e}=fF(ZA.UseNavigateStable),t=GA(np.UseNavigateStable),r=v.useRef(!1);return qA(()=>{r.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,rp({fromRouteId:t},s)))},[e,t])}function gF(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function XA(e){let{to:t,replace:r,state:n,relative:a}=e;x1()||tn(!1);let{future:s,static:o}=v.useContext(m0),{matches:c}=v.useContext(p0),{pathname:d}=Al(),f=Fh(),h=ax(t,nx(c,s.v7_relativeSplatPath),d,a==="path"),x=JSON.stringify(h);return v.useEffect(()=>f(JSON.parse(x),{replace:r,state:n,relative:a}),[f,x,a,r,n]),null}function KA(e){return sF(e.context)}function vF(e){let{basename:t="/",children:r=null,location:n,navigationType:a=Oa.Pop,navigator:s,static:o=!1,future:c}=e;x1()&&tn(!1);let d=t.replace(/^\/*/,"/"),f=v.useMemo(()=>({basename:d,navigator:s,static:o,future:rp({v7_relativeSplatPath:!1},c)}),[d,c,s,o]);typeof n=="string"&&(n=Ac(n));let{pathname:h="/",search:x="",hash:b="",state:w=null,key:_="default"}=n,N=v.useMemo(()=>{let S=d0(h,d);return S==null?null:{location:{pathname:S,search:x,hash:b,state:w,key:_},navigationType:a}},[d,h,x,b,w,_,a]);return N==null?null:v.createElement(m0.Provider,{value:f},v.createElement(M3.Provider,{children:r,value:N}))}new Promise(()=>{});function wF(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function n1(){return n1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n1.apply(null,arguments)}function YA(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function bF(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yF(e,t){return e.button===0&&(!t||t==="_self")&&!bF(e)}const _F=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],NF=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],AF="6";try{window.__reactRouterVersion=AF}catch{}function JA(e,t){return MP({basename:void 0,future:n1({},void 0,{v7_prependBasename:!0}),history:sP({window:void 0}),hydrationData:EF(),routes:e,mapRouteProperties:wF,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function EF(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=n1({},t,{errors:SF(t.errors)})),t}function SF(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,a]of t)if(a&&a.__type==="RouteErrorResponse")r[n]=new tp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let o=new s(a.message);o.stack="",r[n]=o}catch{}}if(r[n]==null){let s=new Error(a.message);s.stack="",r[n]=s}}else r[n]=a;return r}const QA=v.createContext({isTransitioning:!1}),CF=v.createContext(new Map),kF="startTransition",vb=qj[kF],TF="flushSync",wb=aP[TF];function IF(e){vb?vb(e):e()}function z1(e){wb?wb(e):e()}let jF=class{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",t(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",r(n))}})}};function eE(e){let{fallbackElement:t,router:r,future:n}=e,[a,s]=v.useState(r.state),[o,c]=v.useState(),[d,f]=v.useState({isTransitioning:!1}),[h,x]=v.useState(),[b,w]=v.useState(),[_,N]=v.useState(),S=v.useRef(new Map),{v7_startTransition:k}=n||{},T=v.useCallback(U=>{k?IF(U):U()},[k]),C=v.useCallback((U,M)=>{let{deletedFetchers:W,flushSync:D,viewTransitionOpts:H}=M;U.fetchers.forEach((le,ae)=>{le.data!==void 0&&S.current.set(ae,le.data)}),W.forEach(le=>S.current.delete(le));let Q=r.window==null||r.window.document==null||typeof r.window.document.startViewTransition!="function";if(!H||Q){D?z1(()=>s(U)):T(()=>s(U));return}if(D){z1(()=>{b&&(h&&h.resolve(),b.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:H.currentLocation,nextLocation:H.nextLocation})});let le=r.window.document.startViewTransition(()=>{z1(()=>s(U))});le.finished.finally(()=>{z1(()=>{x(void 0),w(void 0),c(void 0),f({isTransitioning:!1})})}),z1(()=>w(le));return}b?(h&&h.resolve(),b.skipTransition(),N({state:U,currentLocation:H.currentLocation,nextLocation:H.nextLocation})):(c(U),f({isTransitioning:!0,flushSync:!1,currentLocation:H.currentLocation,nextLocation:H.nextLocation}))},[r.window,b,h,S,T]);v.useLayoutEffect(()=>r.subscribe(C),[r,C]),v.useEffect(()=>{d.isTransitioning&&!d.flushSync&&x(new jF)},[d]),v.useEffect(()=>{if(h&&o&&r.window){let U=o,M=h.promise,W=r.window.document.startViewTransition(async()=>{T(()=>s(U)),await M});W.finished.finally(()=>{x(void 0),w(void 0),c(void 0),f({isTransitioning:!1})}),w(W)}},[T,o,h,r.window]),v.useEffect(()=>{h&&o&&a.location.key===o.location.key&&h.resolve()},[h,b,a.location,o]),v.useEffect(()=>{!d.isTransitioning&&_&&(c(_.state),f({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),N(void 0))},[d.isTransitioning,_]),v.useEffect(()=>{},[]);let R=v.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:U=>r.navigate(U),push:(U,M,W)=>r.navigate(U,{state:M,preventScrollReset:W==null?void 0:W.preventScrollReset}),replace:(U,M,W)=>r.navigate(U,{replace:!0,state:M,preventScrollReset:W==null?void 0:W.preventScrollReset})}),[r]),V=r.basename||"/",P=v.useMemo(()=>({router:r,navigator:R,static:!1,basename:V}),[r,R,V]),I=v.useMemo(()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath}),[r.future.v7_relativeSplatPath]);return v.useEffect(()=>gF(n,r.future),[n,r.future]),v.createElement(v.Fragment,null,v.createElement(Ph.Provider,{value:P},v.createElement(F3.Provider,{value:a},v.createElement(CF.Provider,{value:S.current},v.createElement(QA.Provider,{value:d},v.createElement(vF,{basename:V,location:a.location,navigationType:a.historyAction,navigator:R,future:I},a.initialized||r.future.v7_partialHydration?v.createElement(LF,{routes:r.routes,future:r.future,state:a}):t))))),null)}const LF=v.memo(RF);function RF(e){let{routes:t,future:r,state:n}=e;return iF(t,void 0,n,r)}const PF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MF=v.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:s,replace:o,state:c,target:d,to:f,preventScrollReset:h,viewTransition:x}=t,b=YA(t,_F),{basename:w}=v.useContext(m0),_,N=!1;if(typeof f=="string"&&FF.test(f)&&(_=f,PF))try{let C=new URL(window.location.href),R=f.startsWith("//")?new URL(C.protocol+f):new URL(f),V=d0(R.pathname,w);R.origin===C.origin&&V!=null?f=V+R.search+R.hash:N=!0}catch{}let S=rF(f,{relative:a}),k=DF(f,{replace:o,state:c,target:d,preventScrollReset:h,relative:a,viewTransition:x});function T(C){n&&n(C),C.defaultPrevented||k(C)}return v.createElement("a",n1({},b,{href:_||S,onClick:N||s?n:T,ref:r,target:d}))}),Ql=v.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:s="",end:o=!1,style:c,to:d,viewTransition:f,children:h}=t,x=YA(t,NF),b=sx(d,{relative:x.relative}),w=Al(),_=v.useContext(F3),{navigator:N,basename:S}=v.useContext(m0),k=_!=null&&$F(b)&&f===!0,T=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,C=w.pathname,R=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;a||(C=C.toLowerCase(),R=R?R.toLowerCase():null,T=T.toLowerCase()),R&&S&&(R=d0(R,S)||R);const V=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let P=C===T||!o&&C.startsWith(T)&&C.charAt(V)==="/",I=R!=null&&(R===T||!o&&R.startsWith(T)&&R.charAt(T.length)==="/"),U={isActive:P,isPending:I,isTransitioning:k},M=P?n:void 0,W;typeof s=="function"?W=s(U):W=[s,P?"active":null,I?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(U):c;return v.createElement(MF,n1({},x,{"aria-current":M,className:W,ref:r,style:D,to:d,viewTransition:f}),typeof h=="function"?h(U):h)});var y5;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(y5||(y5={}));var bb;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bb||(bb={}));function OF(e){let t=v.useContext(Ph);return t||tn(!1),t}function DF(e,t){let{target:r,replace:n,state:a,preventScrollReset:s,relative:o,viewTransition:c}=t===void 0?{}:t,d=Fh(),f=Al(),h=sx(e,{relative:o});return v.useCallback(x=>{if(yF(x,r)){x.preventDefault();let b=n!==void 0?n:gd(f)===gd(h);d(e,{replace:b,state:a,preventScrollReset:s,relative:o,viewTransition:c})}},[f,d,h,n,a,r,e,s,o,c])}function $F(e,t){t===void 0&&(t={});let r=v.useContext(QA);r==null&&tn(!1);let{basename:n}=OF(y5.useViewTransitionState),a=sx(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=d0(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=d0(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ep(a.pathname,o)!=null||ep(a.pathname,s)!=null}const BF="modulepreload",UF=function(e){return"/"+e},yb={},gi=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(r.map(d=>{if(d=UF(d),d in yb)return;yb[d]=!0;const f=d.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":BF,f||(x.as="script"),x.crossOrigin="",x.href=d,c&&x.setAttribute("nonce",c),document.head.appendChild(x),f)return new Promise((b,w)=>{x.addEventListener("load",b),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},VF=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>gi(async()=>{const{default:n}=await Promise.resolve().then(()=>g1);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class O3 extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class HF extends O3{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class _b extends O3{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class Nb extends O3{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var _5;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(_5||(_5={}));var zF=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};class WF{constructor(t,{headers:r={},customFetch:n,region:a=_5.Any}={}){this.url=t,this.headers=r,this.region=a,this.fetch=VF(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return zF(this,void 0,void 0,function*(){try{const{headers:a,method:s,body:o}=r;let c={},{region:d}=r;d||(d=this.region);const f=new URL(`${this.url}/${t}`);d&&d!=="any"&&(c["x-region"]=d,f.searchParams.set("forceFunctionRegion",d));let h;o&&(a&&!Object.prototype.hasOwnProperty.call(a,"Content-Type")||!a)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(c["Content-Type"]="application/octet-stream",h=o):typeof o=="string"?(c["Content-Type"]="text/plain",h=o):typeof FormData<"u"&&o instanceof FormData?h=o:(c["Content-Type"]="application/json",h=JSON.stringify(o)));const x=yield this.fetch(f.toString(),{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},c),this.headers),a),body:h}).catch(N=>{throw new HF(N)}),b=x.headers.get("x-relay-error");if(b&&b==="true")throw new _b(x);if(!x.ok)throw new Nb(x);let w=((n=x.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),_;return w==="application/json"?_=yield x.json():w==="application/octet-stream"?_=yield x.blob():w==="text/event-stream"?_=x:w==="multipart/form-data"?_=yield x.formData():_=yield x.text(),{data:_,error:null,response:x}}catch(a){return{data:null,error:a,response:a instanceof Nb||a instanceof _b?a.context:void 0}}})}}var di={},D3={},ix={},Mh={},ox={},lx={},qF=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},a1=qF();const ZF=a1.fetch,tE=a1.fetch.bind(a1),rE=a1.Headers,GF=a1.Request,XF=a1.Response,g1=Object.freeze(Object.defineProperty({__proto__:null,Headers:rE,Request:GF,Response:XF,default:tE,fetch:ZF},Symbol.toStringTag,{value:"Module"})),KF=Ij(g1);var cx={};Object.defineProperty(cx,"__esModule",{value:!0});let YF=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};cx.default=YF;var nE=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lx,"__esModule",{value:!0});const JF=nE(KF),QF=nE(cx);let eM=class{constructor(t){var r,n;this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(r=t.shouldThrowOnError)!==null&&r!==void 0?r:!1,this.signal=t.signal,this.isMaybeSingle=(n=t.isMaybeSingle)!==null&&n!==void 0?n:!1,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=JF.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=new Headers(this.headers),this.headers.set(t,r),this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const n=this.fetch;let a=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var o,c,d,f;let h=null,x=null,b=null,w=s.status,_=s.statusText;if(s.ok){if(this.method!=="HEAD"){const T=await s.text();T===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((o=this.headers.get("Accept"))===null||o===void 0)&&o.includes("application/vnd.pgrst.plan+text"))?x=T:x=JSON.parse(T))}const S=(c=this.headers.get("Prefer"))===null||c===void 0?void 0:c.match(/count=(exact|planned|estimated)/),k=(d=s.headers.get("content-range"))===null||d===void 0?void 0:d.split("/");S&&k&&k.length>1&&(b=parseInt(k[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(x)&&(x.length>1?(h={code:"PGRST116",details:`Results contain ${x.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},x=null,b=null,w=406,_="Not Acceptable"):x.length===1?x=x[0]:x=null)}else{const S=await s.text();try{h=JSON.parse(S),Array.isArray(h)&&s.status===404&&(x=[],h=null,w=200,_="OK")}catch{s.status===404&&S===""?(w=204,_="No Content"):h={message:S}}if(h&&this.isMaybeSingle&&(!((f=h==null?void 0:h.details)===null||f===void 0)&&f.includes("0 rows"))&&(h=null,w=200,_="OK"),h&&this.shouldThrowOnError)throw new QF.default(h)}return{error:h,data:x,count:b,status:w,statusText:_}});return this.shouldThrowOnError||(a=a.catch(s=>{var o,c,d;return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(c=s==null?void 0:s.stack)!==null&&c!==void 0?c:""}`,hint:"",code:`${(d=s==null?void 0:s.code)!==null&&d!==void 0?d:""}`},data:null,count:null,status:0,statusText:""}})),a.then(t,r)}returns(){return this}overrideTypes(){return this}};lx.default=eM;var tM=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ox,"__esModule",{value:!0});const rM=tM(lx);let nM=class extends rM.default{select(t){let r=!1;const n=(t??"*").split("").map(a=>/\s/.test(a)&&!r?"":(a==='"'&&(r=!r),a)).join("");return this.url.searchParams.set("select",n),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:a,referencedTable:s=a}={}){const o=s?`${s}.order`:"order",c=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${c?`${c},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const a=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(a,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:a=n}={}){const s=typeof a>"u"?"offset":`${a}.offset`,o=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(o,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:a=!1,wal:s=!1,format:o="text"}={}){var c;const d=[t?"analyze":null,r?"verbose":null,n?"settings":null,a?"buffers":null,s?"wal":null].filter(Boolean).join("|"),f=(c=this.headers.get("Accept"))!==null&&c!==void 0?c:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${o}; for="${f}"; options=${d};`),o==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};ox.default=nM;var aM=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mh,"__esModule",{value:!0});const sM=aM(ox);let iM=class extends sM.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(a=>typeof a=="string"&&new RegExp("[,()]").test(a)?`"${a}"`:`${a}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:a}={}){let s="";a==="plain"?s="pl":a==="phrase"?s="ph":a==="websearch"&&(s="w");const o=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${s}fts${o}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const a=n?`${n}.or`:"or";return this.url.searchParams.append(a,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};Mh.default=iM;var oM=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ix,"__esModule",{value:!0});const W1=oM(Mh);let lM=class{constructor(t,{headers:r={},schema:n,fetch:a}){this.url=t,this.headers=new Headers(r),this.schema=n,this.fetch=a}select(t,{head:r=!1,count:n}={}){const a=r?"HEAD":"GET";let s=!1;const o=(t??"*").split("").map(c=>/\s/.test(c)&&!s?"":(c==='"'&&(s=!s),c)).join("");return this.url.searchParams.set("select",o),n&&this.headers.append("Prefer",`count=${n}`),new W1.default({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(t,{count:r,defaultToNull:n=!0}={}){var a;const s="POST";if(r&&this.headers.append("Prefer",`count=${r}`),n||this.headers.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((c,d)=>c.concat(Object.keys(d)),[]);if(o.length>0){const c=[...new Set(o)].map(d=>`"${d}"`);this.url.searchParams.set("columns",c.join(","))}}return new W1.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:a,defaultToNull:s=!0}={}){var o;const c="POST";if(this.headers.append("Prefer",`resolution=${n?"ignore":"merge"}-duplicates`),r!==void 0&&this.url.searchParams.set("on_conflict",r),a&&this.headers.append("Prefer",`count=${a}`),s||this.headers.append("Prefer","missing=default"),Array.isArray(t)){const d=t.reduce((f,h)=>f.concat(Object.keys(h)),[]);if(d.length>0){const f=[...new Set(d)].map(h=>`"${h}"`);this.url.searchParams.set("columns",f.join(","))}}return new W1.default({method:c,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}update(t,{count:r}={}){var n;const a="PATCH";return r&&this.headers.append("Prefer",`count=${r}`),new W1.default({method:a,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch})}delete({count:t}={}){var r;const n="DELETE";return t&&this.headers.append("Prefer",`count=${t}`),new W1.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}};ix.default=lM;var aE=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D3,"__esModule",{value:!0});const cM=aE(ix),dM=aE(Mh);let uM=class sE{constructor(t,{headers:r={},schema:n,fetch:a}={}){this.url=t,this.headers=new Headers(r),this.schemaName=n,this.fetch=a}from(t){const r=new URL(`${this.url}/${t}`);return new cM.default(r,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new sE(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:a=!1,count:s}={}){var o;let c;const d=new URL(`${this.url}/rpc/${t}`);let f;n||a?(c=n?"HEAD":"GET",Object.entries(r).filter(([x,b])=>b!==void 0).map(([x,b])=>[x,Array.isArray(b)?`{${b.join(",")}}`:`${b}`]).forEach(([x,b])=>{d.searchParams.append(x,b)})):(c="POST",f=r);const h=new Headers(this.headers);return s&&h.set("Prefer",`count=${s}`),new dM.default({method:c,url:d,headers:h,schema:this.schemaName,body:f,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}};D3.default=uM;var v1=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(di,"__esModule",{value:!0});di.PostgrestError=di.PostgrestBuilder=di.PostgrestTransformBuilder=di.PostgrestFilterBuilder=di.PostgrestQueryBuilder=di.PostgrestClient=void 0;const iE=v1(D3);di.PostgrestClient=iE.default;const oE=v1(ix);di.PostgrestQueryBuilder=oE.default;const lE=v1(Mh);di.PostgrestFilterBuilder=lE.default;const cE=v1(ox);di.PostgrestTransformBuilder=cE.default;const dE=v1(lx);di.PostgrestBuilder=dE.default;const uE=v1(cx);di.PostgrestError=uE.default;var fM=di.default={PostgrestClient:iE.default,PostgrestQueryBuilder:oE.default,PostgrestFilterBuilder:lE.default,PostgrestTransformBuilder:cE.default,PostgrestBuilder:dE.default,PostgrestError:uE.default};const{PostgrestClient:hM,PostgrestQueryBuilder:Jse,PostgrestFilterBuilder:Qse,PostgrestTransformBuilder:eie,PostgrestBuilder:tie,PostgrestError:rie}=fM;class mM{static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const r=process.versions;if(r&&r.node){const n=r.node,a=parseInt(n.replace(/^v/,"").split(".")[0]);return a>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${a} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${a} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const pM="2.15.5",xM=`realtime-js/${pM}`,gM="1.0.0",N5=1e4,vM=1e3,wM=100;var wf;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(wf||(wf={}));var Wa;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Wa||(Wa={}));var Oo;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(Oo||(Oo={}));var A5;(function(e){e.websocket="websocket"})(A5||(A5={}));var Uc;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(Uc||(Uc={}));class bM{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const a=r.getUint8(1),s=r.getUint8(2);let o=this.HEADER_LENGTH+2;const c=n.decode(t.slice(o,o+a));o=o+a;const d=n.decode(t.slice(o,o+s));o=o+s;const f=JSON.parse(n.decode(t.slice(o,t.byteLength)));return{ref:null,topic:c,event:d,payload:f}}}class fE{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var $n;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})($n||($n={}));const Ab=(e,t,r={})=>{var n;const a=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((s,o)=>(s[o]=yM(o,e,t,a),s),{})},yM=(e,t,r,n)=>{const a=t.find(c=>c.name===e),s=a==null?void 0:a.type,o=r[e];return s&&!n.includes(s)?hE(s,o):E5(o)},hE=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return EM(t,r)}switch(e){case $n.bool:return _M(t);case $n.float4:case $n.float8:case $n.int2:case $n.int4:case $n.int8:case $n.numeric:case $n.oid:return NM(t);case $n.json:case $n.jsonb:return AM(t);case $n.timestamp:return SM(t);case $n.abstime:case $n.date:case $n.daterange:case $n.int4range:case $n.int8range:case $n.money:case $n.reltime:case $n.text:case $n.time:case $n.timestamptz:case $n.timetz:case $n.tsrange:case $n.tstzrange:return E5(t);default:return E5(t)}},E5=e=>e,_M=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},NM=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},AM=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},EM=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let s;const o=e.slice(1,r);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(c=>hE(t,c))}return e},SM=e=>typeof e=="string"?e.replace(" ","T"):e,mE=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"};class _4{constructor(t,r,n={},a=N5){this.channel=t,this.event=r,this.payload=n,this.timeout=a,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var Eb;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(Eb||(Eb={}));class bf{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},a=>{const{onJoin:s,onLeave:o,onSync:c}=this.caller;this.joinRef=this.channel._joinRef(),this.state=bf.syncState(this.state,a,s,o),this.pendingDiffs.forEach(d=>{this.state=bf.syncDiff(this.state,d,s,o)}),this.pendingDiffs=[],c()}),this.channel._on(n.diff,{},a=>{const{onJoin:s,onLeave:o,onSync:c}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(a):(this.state=bf.syncDiff(this.state,a,s,o),c())}),this.onJoin((a,s,o)=>{this.channel._trigger("presence",{event:"join",key:a,currentPresences:s,newPresences:o})}),this.onLeave((a,s,o)=>{this.channel._trigger("presence",{event:"leave",key:a,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,a){const s=this.cloneDeep(t),o=this.transformState(r),c={},d={};return this.map(s,(f,h)=>{o[f]||(d[f]=h)}),this.map(o,(f,h)=>{const x=s[f];if(x){const b=h.map(S=>S.presence_ref),w=x.map(S=>S.presence_ref),_=h.filter(S=>w.indexOf(S.presence_ref)<0),N=x.filter(S=>b.indexOf(S.presence_ref)<0);_.length>0&&(c[f]=_),N.length>0&&(d[f]=N)}else c[f]=h}),this.syncDiff(s,{joins:c,leaves:d},n,a)}static syncDiff(t,r,n,a){const{joins:s,leaves:o}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),a||(a=()=>{}),this.map(s,(c,d)=>{var f;const h=(f=t[c])!==null&&f!==void 0?f:[];if(t[c]=this.cloneDeep(d),h.length>0){const x=t[c].map(w=>w.presence_ref),b=h.filter(w=>x.indexOf(w.presence_ref)<0);t[c].unshift(...b)}n(c,h,d)}),this.map(o,(c,d)=>{let f=t[c];if(!f)return;const h=d.map(x=>x.presence_ref);f=f.filter(x=>h.indexOf(x.presence_ref)<0),t[c]=f,a(c,f,d),f.length===0&&delete t[c]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const a=t[n];return"metas"in a?r[n]=a.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):r[n]=a,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Sb;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(Sb||(Sb={}));var yf;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(yf||(yf={}));var Zl;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(Zl||(Zl={}));class $3{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=Wa.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new _4(this,Oo.join,this.params,this.timeout),this.rejoinTimer=new fE(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Wa.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Wa.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=Wa.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Wa.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=Wa.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Oo.reply,{},(a,s)=>{this._trigger(this._replyEventName(s),a)}),this.presence=new bf(this),this.broadcastEndpointURL=mE(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,a,s;if(this.socket.isConnected()||this.socket.connect(),this.state==Wa.closed){const{config:{broadcast:o,presence:c,private:d}}=this.params,f=(a=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(w=>w.filter))!==null&&a!==void 0?a:[],h=!!this.bindings[yf.PRESENCE]&&this.bindings[yf.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,x={},b={broadcast:o,presence:Object.assign(Object.assign({},c),{enabled:h}),postgres_changes:f,private:d};this.socket.accessTokenValue&&(x.access_token=this.socket.accessTokenValue),this._onError(w=>t==null?void 0:t(Zl.CHANNEL_ERROR,w)),this._onClose(()=>t==null?void 0:t(Zl.CLOSED)),this.updateJoinPayload(Object.assign({config:b},x)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:w})=>{var _;if(this.socket.setAuth(),w===void 0){t==null||t(Zl.SUBSCRIBED);return}else{const N=this.bindings.postgres_changes,S=(_=N==null?void 0:N.length)!==null&&_!==void 0?_:0,k=[];for(let T=0;T<S;T++){const C=N[T],{filter:{event:R,schema:V,table:P,filter:I}}=C,U=w&&w[T];if(U&&U.event===R&&U.schema===V&&U.table===P&&U.filter===I)k.push(Object.assign(Object.assign({},C),{id:U.id}));else{this.unsubscribe(),this.state=Wa.errored,t==null||t(Zl.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=k,t&&t(Zl.SUBSCRIBED);return}}).receive("error",w=>{this.state=Wa.errored,t==null||t(Zl.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(w).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(Zl.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===Wa.joined&&t===yf.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(t,r,n)}async send(t,r={}){var n,a;if(!this._canPush()&&t.type==="broadcast"){const{event:s,payload:o}=t,d={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o,private:this.private}]})};try{const f=await this._fetchWithTimeout(this.broadcastEndpointURL,d,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((a=f.body)===null||a===void 0?void 0:a.cancel()),f.ok?"ok":"error"}catch(f){return f.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,c,d;const f=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((d=(c=(o=this.params)===null||o===void 0?void 0:o.config)===null||c===void 0?void 0:c.broadcast)===null||d===void 0)&&d.ack)&&s("ok"),f.receive("ok",()=>s("ok")),f.receive("error",()=>s("error")),f.receive("timeout",()=>s("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Wa.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Oo.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(a=>{n=new _4(this,Oo.leave,{},t),n.receive("ok",()=>{r(),a("ok")}).receive("timeout",()=>{r(),a("timed out")}).receive("error",()=>{a("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Wa.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const a=new AbortController,s=setTimeout(()=>a.abort(),n),o=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:a.signal}));return clearTimeout(s),o}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let a=new _4(this,t,r,n);return this._canPush()?a.send():this._addToPushBuffer(a),a}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>wM){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var a,s;const o=t.toLocaleLowerCase(),{close:c,error:d,leave:f,join:h}=Oo;if(n&&[c,d,f,h].indexOf(o)>=0&&n!==this._joinRef())return;let b=this._onMessage(o,r,n);if(r&&!b)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(a=this.bindings.postgres_changes)===null||a===void 0||a.filter(w=>{var _,N,S;return((_=w.filter)===null||_===void 0?void 0:_.event)==="*"||((S=(N=w.filter)===null||N===void 0?void 0:N.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===o}).map(w=>w.callback(b,n)):(s=this.bindings[o])===null||s===void 0||s.filter(w=>{var _,N,S,k,T,C;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in w){const R=w.id,V=(_=w.filter)===null||_===void 0?void 0:_.event;return R&&((N=r.ids)===null||N===void 0?void 0:N.includes(R))&&(V==="*"||(V==null?void 0:V.toLocaleLowerCase())===((S=r.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const R=(T=(k=w==null?void 0:w.filter)===null||k===void 0?void 0:k.event)===null||T===void 0?void 0:T.toLocaleLowerCase();return R==="*"||R===((C=r==null?void 0:r.event)===null||C===void 0?void 0:C.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===o}).map(w=>{if(typeof b=="object"&&"ids"in b){const _=b.data,{schema:N,table:S,commit_timestamp:k,type:T,errors:C}=_;b=Object.assign(Object.assign({},{schema:N,table:S,commit_timestamp:k,eventType:T,new:{},old:{},errors:C}),this._getPayloadRecords(_))}w.callback(b,n)})}_isClosed(){return this.state===Wa.closed}_isJoined(){return this.state===Wa.joined}_isJoining(){return this.state===Wa.joining}_isLeaving(){return this.state===Wa.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const a=t.toLocaleLowerCase(),s={type:a,filter:r,callback:n};return this.bindings[a]?this.bindings[a].push(s):this.bindings[a]=[s],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(a=>{var s;return!(((s=a.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===n&&$3.isEqual(a.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(Oo.close,{},t)}_onError(t){this._on(Oo.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Wa.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=Ab(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=Ab(t.columns,t.old_record)),r}}const N4=()=>{},L2={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},CM=[1e3,2e3,5e3,1e4],kM=1e4,TM=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class IM{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=N5,this.transport=null,this.heartbeatIntervalMs=L2.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=N4,this.ref=0,this.reconnectTimer=null,this.logger=N4,this.conn=null,this.sendBuffer=[],this.serializer=new bM,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=a=>{let s;return a?s=a:typeof fetch>"u"?s=(...o)=>gi(async()=>{const{default:c}=await Promise.resolve().then(()=>g1);return{default:c}},void 0).then(({default:c})=>c(...o)).catch(c=>{throw new Error(`Failed to load @supabase/node-fetch: ${c.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):s=fetch,(...o)=>s(...o)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${A5.websocket}`,this.httpEndpoint=mE(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=mM.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:gM}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},t?this.conn.close(t,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case wf.connecting:return Uc.Connecting;case wf.open:return Uc.Open;case wf.closing:return Uc.Closing;default:return Uc.Closed}}isConnected(){return this.connectionState()===Uc.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,a=this.getChannels().find(s=>s.topic===n);if(a)return a;{const s=new $3(`realtime:${t}`,r,this);return this.channels.push(s),s}}push(t){const{topic:r,event:n,payload:a,ref:s}=t,o=()=>{this.encode(t,c=>{var d;(d=this.conn)===null||d===void 0||d.send(c)})};this.log("push",`${r} ${n} (${s})`,a),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var t;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(vM,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},L2.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{if(r.topic==="phoenix"&&r.event==="phx_reply")try{this.heartbeatCallback(r.payload.status==="ok"?"ok":"error")}catch(f){this.log("error","error in heartbeat callback",f)}r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:a,payload:s,ref:o}=r,c=o?`(${o})`:"",d=s.status||"";this.log("receive",`${d} ${n} ${a} ${c}`.trim(),s),this.channels.filter(f=>f._isMember(n)).forEach(f=>f._trigger(a,s,o)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(Oo.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",a=new URLSearchParams(r);return`${t}${n}${a}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([TM],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r;t?r=t:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const a={access_token:r,version:xM};r&&n.updateJoinPayload(a),n.joinedOnce&&n._isJoined()&&n._push(Oo.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(a){this.log("error",`error in ${t} callback`,a)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new fE(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},L2.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,a,s,o,c,d,f,h;if(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:N5,this.heartbeatIntervalMs=(a=t==null?void 0:t.heartbeatIntervalMs)!==null&&a!==void 0?a:L2.HEARTBEAT_INTERVAL,this.worker=(s=t==null?void 0:t.worker)!==null&&s!==void 0?s:!1,this.accessToken=(o=t==null?void 0:t.accessToken)!==null&&o!==void 0?o:null,this.heartbeatCallback=(c=t==null?void 0:t.heartbeatCallback)!==null&&c!==void 0?c:N4,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(d=t==null?void 0:t.reconnectAfterMs)!==null&&d!==void 0?d:x=>CM[x-1]||kM,this.encode=(f=t==null?void 0:t.encode)!==null&&f!==void 0?f:(x,b)=>b(JSON.stringify(x)),this.decode=(h=t==null?void 0:t.decode)!==null&&h!==void 0?h:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}class B3 extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function qa(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class jM extends B3{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class S5 extends B3{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var LM=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};const pE=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>gi(async()=>{const{default:n}=await Promise.resolve().then(()=>g1);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},RM=()=>LM(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield gi(()=>Promise.resolve().then(()=>g1),void 0)).Response:Response}),C5=e=>{if(Array.isArray(e))return e.map(r=>C5(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const a=r.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));t[a]=C5(n)}),t},PM=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Rd=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};const A4=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),FM=(e,t,r)=>Rd(void 0,void 0,void 0,function*(){const n=yield RM();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(a=>{const s=e.status||500,o=(a==null?void 0:a.statusCode)||s+"";t(new jM(A4(a),s,o))}).catch(a=>{t(new S5(A4(a),a))}):t(new S5(A4(e),e))}),MM=(e,t,r,n)=>{const a={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?a:(PM(n)?(a.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),a.body=JSON.stringify(n)):a.body=n,t!=null&&t.duplex&&(a.duplex=t.duplex),Object.assign(Object.assign({},a),r))};function Oh(e,t,r,n,a,s){return Rd(this,void 0,void 0,function*(){return new Promise((o,c)=>{e(r,MM(t,n,a,s)).then(d=>{if(!d.ok)throw d;return n!=null&&n.noResolveJson?d:d.json()}).then(d=>o(d)).catch(d=>FM(d,c,n))})})}function ap(e,t,r,n){return Rd(this,void 0,void 0,function*(){return Oh(e,"GET",t,r,n)})}function ul(e,t,r,n,a){return Rd(this,void 0,void 0,function*(){return Oh(e,"POST",t,n,a,r)})}function k5(e,t,r,n,a){return Rd(this,void 0,void 0,function*(){return Oh(e,"PUT",t,n,a,r)})}function OM(e,t,r,n){return Rd(this,void 0,void 0,function*(){return Oh(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function xE(e,t,r,n,a){return Rd(this,void 0,void 0,function*(){return Oh(e,"DELETE",t,n,a,r)})}var Ws=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};const DM={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Cb={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class $M{constructor(t,r={},n,a){this.shouldThrowOnError=!1,this.url=t,this.headers=r,this.bucketId=n,this.fetch=pE(a)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(t,r,n,a){return Ws(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},Cb),a);let c=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(o.upsert)});const d=o.metadata;typeof Blob<"u"&&n instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),d&&s.append("metadata",this.encodeMetadata(d)),s.append("",n)):typeof FormData<"u"&&n instanceof FormData?(s=n,s.append("cacheControl",o.cacheControl),d&&s.append("metadata",this.encodeMetadata(d))):(s=n,c["cache-control"]=`max-age=${o.cacheControl}`,c["content-type"]=o.contentType,d&&(c["x-metadata"]=this.toBase64(this.encodeMetadata(d)))),a!=null&&a.headers&&(c=Object.assign(Object.assign({},c),a.headers));const f=this._removeEmptyFolders(r),h=this._getFinalPath(f),x=yield(t=="PUT"?k5:ul)(this.fetch,`${this.url}/object/${h}`,s,Object.assign({headers:c},o!=null&&o.duplex?{duplex:o.duplex}:{}));return{data:{path:f,id:x.Id,fullPath:x.Key},error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(qa(s))return{data:null,error:s};throw s}})}upload(t,r,n){return Ws(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,a){return Ws(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(t),o=this._getFinalPath(s),c=new URL(this.url+`/object/upload/sign/${o}`);c.searchParams.set("token",r);try{let d;const f=Object.assign({upsert:Cb.upsert},a),h=Object.assign(Object.assign({},this.headers),{"x-upsert":String(f.upsert)});typeof Blob<"u"&&n instanceof Blob?(d=new FormData,d.append("cacheControl",f.cacheControl),d.append("",n)):typeof FormData<"u"&&n instanceof FormData?(d=n,d.append("cacheControl",f.cacheControl)):(d=n,h["cache-control"]=`max-age=${f.cacheControl}`,h["content-type"]=f.contentType);const x=yield k5(this.fetch,c.toString(),d,{headers:h});return{data:{path:s,fullPath:x.Key},error:null}}catch(d){if(this.shouldThrowOnError)throw d;if(qa(d))return{data:null,error:d};throw d}})}createSignedUploadUrl(t,r){return Ws(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const a=Object.assign({},this.headers);r!=null&&r.upsert&&(a["x-upsert"]="true");const s=yield ul(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:a}),o=new URL(this.url+s.url),c=o.searchParams.get("token");if(!c)throw new B3("No token returned by API");return{data:{signedUrl:o.toString(),path:t,token:c},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(qa(n))return{data:null,error:n};throw n}})}update(t,r,n){return Ws(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return Ws(this,void 0,void 0,function*(){try{return{data:yield ul(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qa(a))return{data:null,error:a};throw a}})}copy(t,r,n){return Ws(this,void 0,void 0,function*(){try{return{data:{path:(yield ul(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qa(a))return{data:null,error:a};throw a}})}createSignedUrl(t,r,n){return Ws(this,void 0,void 0,function*(){try{let a=this._getFinalPath(t),s=yield ul(this.fetch,`${this.url}/object/sign/${a}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const o=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qa(a))return{data:null,error:a};throw a}})}createSignedUrls(t,r,n){return Ws(this,void 0,void 0,function*(){try{const a=yield ul(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:a.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qa(a))return{data:null,error:a};throw a}})}download(t,r){return Ws(this,void 0,void 0,function*(){const a=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),o=s?`?${s}`:"";try{const c=this._getFinalPath(t);return{data:yield(yield ap(this.fetch,`${this.url}/${a}/${c}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(c){if(this.shouldThrowOnError)throw c;if(qa(c))return{data:null,error:c};throw c}})}info(t){return Ws(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield ap(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:C5(n),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(qa(n))return{data:null,error:n};throw n}})}exists(t){return Ws(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield OM(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(qa(n)&&n instanceof S5){const a=n.originalError;if([400,404].includes(a==null?void 0:a.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),a=[],s=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";s!==""&&a.push(s);const c=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",d=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});d!==""&&a.push(d);let f=a.join("&");return f!==""&&(f=`?${f}`),{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${n}${f}`)}}}remove(t){return Ws(this,void 0,void 0,function*(){try{return{data:yield xE(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qa(r))return{data:null,error:r};throw r}})}list(t,r,n){return Ws(this,void 0,void 0,function*(){try{const a=Object.assign(Object.assign(Object.assign({},DM),r),{prefix:t||""});return{data:yield ul(this.fetch,`${this.url}/object/list/${this.bucketId}`,a,{headers:this.headers},n),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qa(a))return{data:null,error:a};throw a}})}listV2(t,r){return Ws(this,void 0,void 0,function*(){try{const n=Object.assign({},t);return{data:yield ul(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(qa(n))return{data:null,error:n};throw n}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const BM="2.12.1",UM={"X-Client-Info":`storage-js/${BM}`};var Qd=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};class VM{constructor(t,r={},n,a){this.shouldThrowOnError=!1;const s=new URL(t);a!=null&&a.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase.")),this.url=s.href,this.headers=Object.assign(Object.assign({},UM),r),this.fetch=pE(n)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(){return Qd(this,void 0,void 0,function*(){try{return{data:yield ap(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(qa(t))return{data:null,error:t};throw t}})}getBucket(t){return Qd(this,void 0,void 0,function*(){try{return{data:yield ap(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qa(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Qd(this,void 0,void 0,function*(){try{return{data:yield ul(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(qa(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Qd(this,void 0,void 0,function*(){try{return{data:yield k5(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(qa(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Qd(this,void 0,void 0,function*(){try{return{data:yield ul(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qa(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Qd(this,void 0,void 0,function*(){try{return{data:yield xE(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qa(r))return{data:null,error:r};throw r}})}}class HM extends VM{constructor(t,r={},n,a){super(t,r,n,a)}from(t){return new $M(this.url,this.headers,t,this.fetch)}}const zM="2.57.4";let tf="";typeof Deno<"u"?tf="deno":typeof document<"u"?tf="web":typeof navigator<"u"&&navigator.product==="ReactNative"?tf="react-native":tf="node";const WM={"X-Client-Info":`supabase-js-${tf}/${zM}`},qM={headers:WM},ZM={schema:"public"},GM={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},XM={};var KM=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};const YM=e=>{let t;return e?t=e:typeof fetch>"u"?t=tE:t=fetch,(...r)=>t(...r)},JM=()=>typeof Headers>"u"?rE:Headers,QM=(e,t,r)=>{const n=YM(r),a=JM();return(s,o)=>KM(void 0,void 0,void 0,function*(){var c;const d=(c=yield t())!==null&&c!==void 0?c:e;let f=new a(o==null?void 0:o.headers);return f.has("apikey")||f.set("apikey",e),f.has("Authorization")||f.set("Authorization",`Bearer ${d}`),n(s,Object.assign(Object.assign({},o),{headers:f}))})};var eO=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};function tO(e){return e.endsWith("/")?e:e+"/"}function rO(e,t){var r,n;const{db:a,auth:s,realtime:o,global:c}=e,{db:d,auth:f,realtime:h,global:x}=t,b={db:Object.assign(Object.assign({},d),a),auth:Object.assign(Object.assign({},f),s),realtime:Object.assign(Object.assign({},h),o),storage:{},global:Object.assign(Object.assign(Object.assign({},x),c),{headers:Object.assign(Object.assign({},(r=x==null?void 0:x.headers)!==null&&r!==void 0?r:{}),(n=c==null?void 0:c.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>eO(this,void 0,void 0,function*(){return""})};return e.accessToken?b.accessToken=e.accessToken:delete b.accessToken,b}function nO(e){const t=e==null?void 0:e.trim();if(!t)throw new Error("supabaseUrl is required.");if(!t.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(tO(t))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const gE="2.71.1",uu=30*1e3,T5=3,E4=T5*uu,aO="http://localhost:9999",sO="supabase.auth.token",iO={"X-Client-Info":`gotrue-js/${gE}`},I5="X-Supabase-Api-Version",vE={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},oO=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,lO=10*60*1e3;class U3 extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function Xr(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class cO extends U3{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function dO(e){return Xr(e)&&e.name==="AuthApiError"}class wE extends U3{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class Ec extends U3{constructor(t,r,n,a){super(t,n,a),this.name=r,this.status=n}}class M0 extends Ec{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function uO(e){return Xr(e)&&e.name==="AuthSessionMissingError"}class R2 extends Ec{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class P2 extends Ec{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class F2 extends Ec{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function fO(e){return Xr(e)&&e.name==="AuthImplicitGrantRedirectError"}class kb extends Ec{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class j5 extends Ec{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function S4(e){return Xr(e)&&e.name==="AuthRetryableFetchError"}class Tb extends Ec{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class L5 extends Ec{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ib=` 	
\r=`.split(""),hO=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<Ib.length;t+=1)e[Ib[t].charCodeAt(0)]=-2;for(let t=0;t<sp.length;t+=1)e[sp[t].charCodeAt(0)]=t;return e})();function jb(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(sp[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(sp[n]),t.queuedBits-=6}}function bE(e,t,r){const n=hO[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function Lb(e){const t=[],r=o=>{t.push(String.fromCodePoint(o))},n={utf8seq:0,codepoint:0},a={queue:0,queuedBits:0},s=o=>{xO(o,n,r)};for(let o=0;o<e.length;o+=1)bE(e.charCodeAt(o),a,s);return t.join("")}function mO(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function pO(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const a=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|a)+65536,r+=1}mO(n,t)}}function xO(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function gO(e){const t=[],r={queue:0,queuedBits:0},n=a=>{t.push(a)};for(let a=0;a<e.length;a+=1)bE(e.charCodeAt(a),r,n);return new Uint8Array(t)}function vO(e){const t=[];return pO(e,r=>t.push(r)),new Uint8Array(t)}function wO(e){const t=[],r={queue:0,queuedBits:0},n=a=>{t.push(a)};return e.forEach(a=>jb(a,r,n)),jb(null,r,n),t.join("")}function bO(e){return Math.round(Date.now()/1e3)+e}function yO(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const Lo=()=>typeof window<"u"&&typeof document<"u",Lc={tested:!1,writable:!1},yE=()=>{if(!Lo())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Lc.tested)return Lc.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Lc.tested=!0,Lc.writable=!0}catch{Lc.tested=!0,Lc.writable=!1}return Lc.writable};function _O(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((a,s)=>{t[s]=a})}catch{}return r.searchParams.forEach((n,a)=>{t[a]=n}),t}const _E=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>gi(async()=>{const{default:n}=await Promise.resolve().then(()=>g1);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},NO=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",fu=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},Rc=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},j0=async(e,t)=>{await e.removeItem(t)};class dx{constructor(){this.promise=new dx.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}dx.promiseConstructor=Promise;function C4(e){const t=e.split(".");if(t.length!==3)throw new L5("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!oO.test(t[n]))throw new L5("JWT not in base64url format");return{header:JSON.parse(Lb(t[0])),payload:JSON.parse(Lb(t[1])),signature:gO(t[2]),raw:{header:t[0],payload:t[1]}}}async function AO(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function EO(e,t){return new Promise((n,a)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await e(s);if(!t(s,null,o)){n(o);return}}catch(o){if(!t(s,o)){a(o);return}}})()})}function SO(e){return("0"+e.toString(16)).substr(-2)}function CO(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let a="";for(let s=0;s<56;s++)a+=r.charAt(Math.floor(Math.random()*n));return a}return crypto.getRandomValues(t),Array.from(t,SO).join("")}async function kO(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),a=new Uint8Array(n);return Array.from(a).map(s=>String.fromCharCode(s)).join("")}async function TO(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await kO(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function eu(e,t,r=!1){const n=CO();let a=n;r&&(a+="/PASSWORD_RECOVERY"),await fu(e,`${t}-code-verifier`,a);const s=await TO(n);return[s,n===s?"plain":"s256"]}const IO=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function jO(e){const t=e.headers.get(I5);if(!t||!t.match(IO))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function LO(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function RO(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const PO=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function tu(e){if(!PO.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function k4(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Rb(e){return JSON.parse(JSON.stringify(e))}var FO=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Oc=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),MO=[502,503,504];async function Pb(e){var t;if(!NO(e))throw new j5(Oc(e),0);if(MO.includes(e.status))throw new j5(Oc(e),e.status);let r;try{r=await e.json()}catch(s){throw new wE(Oc(s),s)}let n;const a=jO(e);if(a&&a.getTime()>=vE["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new Tb(Oc(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new M0}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((s,o)=>s&&typeof o=="string",!0))throw new Tb(Oc(r),e.status,r.weak_password.reasons);throw new cO(Oc(r),e.status||500,n)}const OO=(e,t,r,n)=>{const a={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),a.body=JSON.stringify(n),Object.assign(Object.assign({},a),r))};async function nn(e,t,r,n){var a;const s=Object.assign({},n==null?void 0:n.headers);s[I5]||(s[I5]=vE["2024-01-01"].name),n!=null&&n.jwt&&(s.Authorization=`Bearer ${n.jwt}`);const o=(a=n==null?void 0:n.query)!==null&&a!==void 0?a:{};n!=null&&n.redirectTo&&(o.redirect_to=n.redirectTo);const c=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",d=await DO(e,t,r+c,{headers:s,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(d):{data:Object.assign({},d),error:null}}async function DO(e,t,r,n,a,s){const o=OO(t,n,a,s);let c;try{c=await e(r,Object.assign({},o))}catch(d){throw console.error(d),new j5(Oc(d),0)}if(c.ok||await Pb(c),n!=null&&n.noResolveJson)return c;try{return await c.json()}catch(d){await Pb(d)}}function zl(e){var t;let r=null;VO(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=bO(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function Fb(e){const t=zl(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function U0(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function $O(e){return{data:e,error:null}}function BO(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:a,verification_type:s}=e,o=FO(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),c={action_link:t,email_otp:r,hashed_token:n,redirect_to:a,verification_type:s},d=Object.assign({},o);return{data:{properties:c,user:d},error:null}}function UO(e){return e}function VO(e){return e.access_token&&e.refresh_token&&e.expires_in}const T4=["global","local","others"];var HO=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};class zO{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=_E(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=T4[0]){if(T4.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${T4.join(", ")}`);try{return await nn(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(Xr(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await nn(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:U0})}catch(n){if(Xr(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=HO(t,["options"]),a=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(a.new_email=n==null?void 0:n.newEmail,delete a.newEmail),await nn(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:a,headers:this.headers,xform:BO,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(Xr(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await nn(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:U0})}catch(r){if(Xr(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,a,s,o,c,d;try{const f={nextPage:null,lastPage:0,total:0},h=await nn(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(s=(a=t==null?void 0:t.perPage)===null||a===void 0?void 0:a.toString())!==null&&s!==void 0?s:""},xform:UO});if(h.error)throw h.error;const x=await h.json(),b=(o=h.headers.get("x-total-count"))!==null&&o!==void 0?o:0,w=(d=(c=h.headers.get("link"))===null||c===void 0?void 0:c.split(","))!==null&&d!==void 0?d:[];return w.length>0&&(w.forEach(_=>{const N=parseInt(_.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(_.split(";")[1].split("=")[1]);f[`${S}Page`]=N}),f.total=parseInt(b)),{data:Object.assign(Object.assign({},x),f),error:null}}catch(f){if(Xr(f))return{data:{users:[]},error:f};throw f}}async getUserById(t){tu(t);try{return await nn(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:U0})}catch(r){if(Xr(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){tu(t);try{return await nn(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:U0})}catch(n){if(Xr(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){tu(t);try{return await nn(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:U0})}catch(n){if(Xr(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){tu(t.userId);try{const{data:r,error:n}=await nn(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:a=>({data:{factors:a},error:null})});return{data:r,error:n}}catch(r){if(Xr(r))return{data:null,error:r};throw r}}async _deleteFactor(t){tu(t.userId),tu(t.id);try{return{data:await nn(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(Xr(r))return{data:null,error:r};throw r}}}function Mb(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function WO(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const ru={debug:!!(globalThis&&yE()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class NE extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class qO extends NE{}async function ZO(e,t,r){ru.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),ru.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async a=>{if(a){ru.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,a.name);try{return await r()}finally{ru.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,a.name)}}else{if(t===0)throw ru.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new qO(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(ru.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}WO();const GO={url:aO,storageKey:sO,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:iO,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Ob(e,t,r){return await r()}const nu={};class th{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=th.nextInstanceID,th.nextInstanceID+=1,this.instanceID>0&&Lo()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const a=Object.assign(Object.assign({},GO),t);if(this.logDebugMessages=!!a.debug,typeof a.debug=="function"&&(this.logger=a.debug),this.persistSession=a.persistSession,this.storageKey=a.storageKey,this.autoRefreshToken=a.autoRefreshToken,this.admin=new zO({url:a.url,headers:a.headers,fetch:a.fetch}),this.url=a.url,this.headers=a.headers,this.fetch=_E(a.fetch),this.lock=a.lock||Ob,this.detectSessionInUrl=a.detectSessionInUrl,this.flowType=a.flowType,this.hasCustomAuthorizationHeader=a.hasCustomAuthorizationHeader,a.lock?this.lock=a.lock:Lo()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=ZO:this.lock=Ob,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(a.storage?this.storage=a.storage:yE()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Mb(this.memoryStorage)),a.userStorage&&(this.userStorage=a.userStorage)):(this.memoryStorage={},this.storage=Mb(this.memoryStorage)),Lo()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(s){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",s)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async s=>{this._debug("received broadcast notification from other tab or client",s),await this._notifyAllSubscribers(s.data.event,s.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=nu[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){nu[this.storageKey]=Object.assign(Object.assign({},nu[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=nu[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){nu[this.storageKey]=Object.assign(Object.assign({},nu[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${gE}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=_O(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),Lo()&&this.detectSessionInUrl&&n!=="none"){const{data:a,error:s}=await this._getSessionFromURL(r,n);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),fO(s)){const d=(t=s.details)===null||t===void 0?void 0:t.code;if(d==="identity_already_exists"||d==="identity_not_found"||d==="single_identity_not_deletable")return{error:s}}return await this._removeSession(),{error:s}}const{session:o,redirectType:c}=a;return this._debug("#_initialize()","detected session in URL",o,"redirect type",c),await this._saveSession(o),setTimeout(async()=>{c==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return Xr(r)?{error:r}:{error:new wE("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,a;try{const s=await nn(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(a=t==null?void 0:t.options)===null||a===void 0?void 0:a.captchaToken}},xform:zl}),{data:o,error:c}=s;if(c||!o)return{data:{user:null,session:null},error:c};const d=o.session,f=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",d)),{data:{user:f,session:d},error:null}}catch(s){if(Xr(s))return{data:{user:null,session:null},error:s};throw s}}async signUp(t){var r,n,a;try{let s;if("email"in t){const{email:h,password:x,options:b}=t;let w=null,_=null;this.flowType==="pkce"&&([w,_]=await eu(this.storage,this.storageKey)),s=await nn(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:b==null?void 0:b.emailRedirectTo,body:{email:h,password:x,data:(r=b==null?void 0:b.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:b==null?void 0:b.captchaToken},code_challenge:w,code_challenge_method:_},xform:zl})}else if("phone"in t){const{phone:h,password:x,options:b}=t;s=await nn(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:x,data:(n=b==null?void 0:b.data)!==null&&n!==void 0?n:{},channel:(a=b==null?void 0:b.channel)!==null&&a!==void 0?a:"sms",gotrue_meta_security:{captcha_token:b==null?void 0:b.captchaToken}},xform:zl})}else throw new P2("You must provide either an email or phone number and a password");const{data:o,error:c}=s;if(c||!o)return{data:{user:null,session:null},error:c};const d=o.session,f=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",d)),{data:{user:f,session:d},error:null}}catch(s){if(Xr(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(t){try{let r;if("email"in t){const{email:s,password:o,options:c}=t;r=await nn(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:Fb})}else if("phone"in t){const{phone:s,password:o,options:c}=t;r=await nn(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:Fb})}else throw new P2("You must provide either an email or phone number and a password");const{data:n,error:a}=r;return a?{data:{user:null,session:null},error:a}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new R2}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:a})}catch(r){if(Xr(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,a,s;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(a=t.options)===null||a===void 0?void 0:a.queryParams,skipBrowserRedirect:(s=t.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,a,s,o,c,d,f,h,x,b,w;let _,N;if("message"in t)_=t.message,N=t.signature;else{const{chain:S,wallet:k,statement:T,options:C}=t;let R;if(Lo())if(typeof k=="object")R=k;else{const P=window;if("solana"in P&&typeof P.solana=="object"&&("signIn"in P.solana&&typeof P.solana.signIn=="function"||"signMessage"in P.solana&&typeof P.solana.signMessage=="function"))R=P.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof k!="object"||!(C!=null&&C.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");R=k}const V=new URL((r=C==null?void 0:C.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in R&&R.signIn){const P=await R.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},C==null?void 0:C.signInWithSolana),{version:"1",domain:V.host,uri:V.href}),T?{statement:T}:null));let I;if(Array.isArray(P)&&P[0]&&typeof P[0]=="object")I=P[0];else if(P&&typeof P=="object"&&"signedMessage"in P&&"signature"in P)I=P;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in I&&"signature"in I&&(typeof I.signedMessage=="string"||I.signedMessage instanceof Uint8Array)&&I.signature instanceof Uint8Array)_=typeof I.signedMessage=="string"?I.signedMessage:new TextDecoder().decode(I.signedMessage),N=I.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in R)||typeof R.signMessage!="function"||!("publicKey"in R)||typeof R!="object"||!R.publicKey||!("toBase58"in R.publicKey)||typeof R.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");_=[`${V.host} wants you to sign in with your Solana account:`,R.publicKey.toBase58(),...T?["",T,""]:[""],"Version: 1",`URI: ${V.href}`,`Issued At: ${(a=(n=C==null?void 0:C.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&a!==void 0?a:new Date().toISOString()}`,...!((s=C==null?void 0:C.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${C.signInWithSolana.notBefore}`]:[],...!((o=C==null?void 0:C.signInWithSolana)===null||o===void 0)&&o.expirationTime?[`Expiration Time: ${C.signInWithSolana.expirationTime}`]:[],...!((c=C==null?void 0:C.signInWithSolana)===null||c===void 0)&&c.chainId?[`Chain ID: ${C.signInWithSolana.chainId}`]:[],...!((d=C==null?void 0:C.signInWithSolana)===null||d===void 0)&&d.nonce?[`Nonce: ${C.signInWithSolana.nonce}`]:[],...!((f=C==null?void 0:C.signInWithSolana)===null||f===void 0)&&f.requestId?[`Request ID: ${C.signInWithSolana.requestId}`]:[],...!((x=(h=C==null?void 0:C.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||x===void 0)&&x.length?["Resources",...C.signInWithSolana.resources.map(I=>`- ${I}`)]:[]].join(`
`);const P=await R.signMessage(new TextEncoder().encode(_),"utf8");if(!P||!(P instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");N=P}}try{const{data:S,error:k}=await nn(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:_,signature:wO(N)},!((b=t.options)===null||b===void 0)&&b.captchaToken?{gotrue_meta_security:{captcha_token:(w=t.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:zl});if(k)throw k;return!S||!S.session||!S.user?{data:{user:null,session:null},error:new R2}:(S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("SIGNED_IN",S.session)),{data:Object.assign({},S),error:k})}catch(S){if(Xr(S))return{data:{user:null,session:null},error:S};throw S}}async _exchangeCodeForSession(t){const r=await Rc(this.storage,`${this.storageKey}-code-verifier`),[n,a]=(r??"").split("/");try{const{data:s,error:o}=await nn(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:zl});if(await j0(this.storage,`${this.storageKey}-code-verifier`),o)throw o;return!s||!s.session||!s.user?{data:{user:null,session:null,redirectType:null},error:new R2}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign(Object.assign({},s),{redirectType:a??null}),error:o})}catch(s){if(Xr(s))return{data:{user:null,session:null,redirectType:null},error:s};throw s}}async signInWithIdToken(t){try{const{options:r,provider:n,token:a,access_token:s,nonce:o}=t,c=await nn(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:a,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:zl}),{data:d,error:f}=c;return f?{data:{user:null,session:null},error:f}:!d||!d.session||!d.user?{data:{user:null,session:null},error:new R2}:(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),{data:d,error:f})}catch(r){if(Xr(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,a,s,o;try{if("email"in t){const{email:c,options:d}=t;let f=null,h=null;this.flowType==="pkce"&&([f,h]=await eu(this.storage,this.storageKey));const{error:x}=await nn(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:c,data:(r=d==null?void 0:d.data)!==null&&r!==void 0?r:{},create_user:(n=d==null?void 0:d.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:f,code_challenge_method:h},redirectTo:d==null?void 0:d.emailRedirectTo});return{data:{user:null,session:null},error:x}}if("phone"in t){const{phone:c,options:d}=t,{data:f,error:h}=await nn(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:c,data:(a=d==null?void 0:d.data)!==null&&a!==void 0?a:{},create_user:(s=d==null?void 0:d.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},channel:(o=d==null?void 0:d.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:f==null?void 0:f.message_id},error:h}}throw new P2("You must provide either an email or phone number.")}catch(c){if(Xr(c))return{data:{user:null,session:null},error:c};throw c}}async verifyOtp(t){var r,n;try{let a,s;"options"in t&&(a=(r=t.options)===null||r===void 0?void 0:r.redirectTo,s=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:o,error:c}=await nn(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:s}}),redirectTo:a,xform:zl});if(c)throw c;if(!o)throw new Error("An error occurred on token verification.");const d=o.session,f=o.user;return d!=null&&d.access_token&&(await this._saveSession(d),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",d)),{data:{user:f,session:d},error:null}}catch(a){if(Xr(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithSSO(t){var r,n,a;try{let s=null,o=null;return this.flowType==="pkce"&&([s,o]=await eu(this.storage,this.storageKey)),await nn(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((a=t==null?void 0:t.options)===null||a===void 0)&&a.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:o}),headers:this.headers,xform:$O})}catch(s){if(Xr(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new M0;const{error:a}=await nn(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:a}})}catch(t){if(Xr(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:a,options:s}=t,{error:o}=await nn(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in t){const{phone:n,type:a,options:s}=t,{data:o,error:c}=await nn(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:c}}throw new P2("You must provide either an email or phone number and a type")}catch(r){if(Xr(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),a=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await a}catch{}})()),a}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const a=[...this.pendingInLock];await Promise.all(a),this.pendingInLock.splice(0,a.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await Rc(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<E4:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const o=await Rc(this.userStorage,this.storageKey+"-user");o!=null&&o.user?t.user=o.user:t.user=k4()}if(this.storage.isServer&&t.user){let o=this.suppressGetSessionWarning;t=new Proxy(t,{get:(d,f,h)=>(!o&&f==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),o=!0,this.suppressGetSessionWarning=!0),Reflect.get(d,f,h))})}return{data:{session:t},error:null}}const{session:a,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{session:null},error:s}:{data:{session:a},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await nn(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:U0}):await this._useSession(async r=>{var n,a,s;const{data:o,error:c}=r;if(c)throw c;return!(!((n=o.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new M0}:await nn(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(a=o.session)===null||a===void 0?void 0:a.access_token)!==null&&s!==void 0?s:void 0,xform:U0})})}catch(r){if(Xr(r))return uO(r)&&(await this._removeSession(),await j0(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:a,error:s}=n;if(s)throw s;if(!a.session)throw new M0;const o=a.session;let c=null,d=null;this.flowType==="pkce"&&t.email!=null&&([c,d]=await eu(this.storage,this.storageKey));const{data:f,error:h}=await nn(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:c,code_challenge_method:d}),jwt:o.access_token,xform:U0});if(h)throw h;return o.user=f.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(n){if(Xr(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new M0;const r=Date.now()/1e3;let n=r,a=!0,s=null;const{payload:o}=C4(t.access_token);if(o.exp&&(n=o.exp,a=n<=r),a){const{session:c,error:d}=await this._callRefreshToken(t.refresh_token);if(d)return{data:{user:null,session:null},error:d};if(!c)return{data:{user:null,session:null},error:null};s=c}else{const{data:c,error:d}=await this._getUser(t.access_token);if(d)throw d;s={access_token:t.access_token,refresh_token:t.refresh_token,user:c.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(r){if(Xr(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:o,error:c}=r;if(c)throw c;t=(n=o.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new M0;const{session:a,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{user:null,session:null},error:s}:a?{data:{user:a.user,session:a},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(Xr(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!Lo())throw new F2("No browser detected.");if(t.error||t.error_description||t.error_code)throw new F2(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new kb("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new F2("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new kb("No code detected.");const{data:T,error:C}=await this._exchangeCodeForSession(t.code);if(C)throw C;const R=new URL(window.location.href);return R.searchParams.delete("code"),window.history.replaceState(window.history.state,"",R.toString()),{data:{session:T.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:a,access_token:s,refresh_token:o,expires_in:c,expires_at:d,token_type:f}=t;if(!s||!c||!o||!f)throw new F2("No session defined in URL");const h=Math.round(Date.now()/1e3),x=parseInt(c);let b=h+x;d&&(b=parseInt(d));const w=b-h;w*1e3<=uu&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${x}s`);const _=b-x;h-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,b,h):h-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,b,h);const{data:N,error:S}=await this._getUser(s);if(S)throw S;const k={provider_token:n,provider_refresh_token:a,access_token:s,expires_in:x,expires_at:b,refresh_token:o,token_type:f,user:N.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:k,redirectType:t.type},error:null}}catch(n){if(Xr(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await Rc(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:a,error:s}=r;if(s)return{error:s};const o=(n=a.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:c}=await this.admin.signOut(o,t);if(c&&!(dO(c)&&(c.status===404||c.status===401||c.status===403)))return{error:c}}return t!=="others"&&(await this._removeSession(),await j0(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=yO(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,a;try{const{data:{session:s},error:o}=r;if(o)throw o;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",t,"session",s)}catch(s){await((a=this.stateChangeEmitters.get(t))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",s),console.error(s)}})}async resetPasswordForEmail(t,r={}){let n=null,a=null;this.flowType==="pkce"&&([n,a]=await eu(this.storage,this.storageKey,!0));try{return await nn(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:a,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(s){if(Xr(s))return{data:null,error:s};throw s}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(Xr(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:a}=await this._useSession(async s=>{var o,c,d,f,h;const{data:x,error:b}=s;if(b)throw b;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(o=t.options)===null||o===void 0?void 0:o.redirectTo,scopes:(c=t.options)===null||c===void 0?void 0:c.scopes,queryParams:(d=t.options)===null||d===void 0?void 0:d.queryParams,skipBrowserRedirect:!0});return await nn(this.fetch,"GET",w,{headers:this.headers,jwt:(h=(f=x.session)===null||f===void 0?void 0:f.access_token)!==null&&h!==void 0?h:void 0})});if(a)throw a;return Lo()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(Xr(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,a;const{data:s,error:o}=r;if(o)throw o;return await nn(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(a=(n=s.session)===null||n===void 0?void 0:n.access_token)!==null&&a!==void 0?a:void 0})})}catch(r){if(Xr(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await EO(async a=>(a>0&&await AO(200*Math.pow(2,a-1)),this._debug(r,"refreshing attempt",a),await nn(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:zl})),(a,s)=>{const o=200*Math.pow(2,a);return s&&S4(s)&&Date.now()+o-n<uu})}catch(n){if(this._debug(r,"error",n),Xr(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),Lo()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const a=await Rc(this.storage,this.storageKey);if(a&&this.userStorage){let o=await Rc(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!o&&(o={user:a.user},await fu(this.userStorage,this.storageKey+"-user",o)),a.user=(t=o==null?void 0:o.user)!==null&&t!==void 0?t:k4()}else if(a&&!a.user&&!a.user){const o=await Rc(this.storage,this.storageKey+"-user");o&&(o!=null&&o.user)?(a.user=o.user,await j0(this.storage,this.storageKey+"-user"),await fu(this.storage,this.storageKey,a)):a.user=k4()}if(this._debug(n,"session from storage",a),!this._isValidSession(a)){this._debug(n,"session is not valid"),a!==null&&await this._removeSession();return}const s=((r=a.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<E4;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${E4}s`),s){if(this.autoRefreshToken&&a.refresh_token){const{error:o}=await this._callRefreshToken(a.refresh_token);o&&(console.error(o),S4(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else if(a.user&&a.user.__isUserNotAvailableProxy===!0)try{const{data:o,error:c}=await this._getUser(a.access_token);!c&&(o!=null&&o.user)?(a.user=o.user,await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(o){console.error("Error getting user data:",o),this._debug(n,"error getting user data, skipping SIGNED_IN notification",o)}else await this._notifyAllSubscribers("SIGNED_IN",a)}catch(a){this._debug(n,"error",a),console.error(a);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new M0;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const a=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(a,"begin");try{this.refreshingDeferred=new dx;const{data:s,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!s.session)throw new M0;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const c={session:s.session,error:null};return this.refreshingDeferred.resolve(c),c}catch(s){if(this._debug(a,"error",s),Xr(s)){const o={session:null,error:s};return S4(s)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(o),o}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(s),s}finally{this.refreshingDeferred=null,this._debug(a,"end")}}async _notifyAllSubscribers(t,r,n=!0){const a=`#_notifyAllSubscribers(${t})`;this._debug(a,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async c=>{try{await c.callback(t,r)}catch(d){s.push(d)}});if(await Promise.all(o),s.length>0){for(let c=0;c<s.length;c+=1)console.error(s[c]);throw s[0]}}finally{this._debug(a,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await fu(this.userStorage,this.storageKey+"-user",{user:r.user});const a=Object.assign({},r);delete a.user;const s=Rb(a);await fu(this.storage,this.storageKey,s)}else{const a=Rb(r);await fu(this.storage,this.storageKey,a)}}async _removeSession(){this._debug("#_removeSession()"),await j0(this.storage,this.storageKey),await j0(this.storage,this.storageKey+"-code-verifier"),await j0(this.storage,this.storageKey+"-user"),this.userStorage&&await j0(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&Lo()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),uu);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const a=Math.floor((n.expires_at*1e3-t)/uu);this._debug("#_autoRefreshTokenTick()",`access token expires in ${a} ticks, a tick lasts ${uu}ms, refresh threshold is ${T5} ticks`),a<=T5&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof NE)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Lo()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const a=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&a.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&a.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[s,o]=await eu(this.storage,this.storageKey),c=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});a.push(c.toString())}if(n!=null&&n.queryParams){const s=new URLSearchParams(n.queryParams);a.push(s.toString())}return n!=null&&n.skipBrowserRedirect&&a.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${a.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:a,error:s}=r;return s?{data:null,error:s}:await nn(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=a==null?void 0:a.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(Xr(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,a;const{data:s,error:o}=r;if(o)return{data:null,error:o};const c=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:d,error:f}=await nn(this.fetch,"POST",`${this.url}/factors`,{body:c,headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token});return f?{data:null,error:f}:(t.factorType==="totp"&&(!((a=d==null?void 0:d.totp)===null||a===void 0)&&a.qr_code)&&(d.totp.qr_code=`data:image/svg+xml;utf-8,${d.totp.qr_code}`),{data:d,error:null})})}catch(r){if(Xr(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:a,error:s}=r;if(s)return{data:null,error:s};const{data:o,error:c}=await nn(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=a==null?void 0:a.session)===null||n===void 0?void 0:n.access_token});return c?{data:null,error:c}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:c})})}catch(r){if(Xr(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:a,error:s}=r;return s?{data:null,error:s}:await nn(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=a==null?void 0:a.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(Xr(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],a=n.filter(o=>o.factor_type==="totp"&&o.status==="verified"),s=n.filter(o=>o.factor_type==="phone"&&o.status==="verified");return{data:{all:n,totp:a,phone:s},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:a},error:s}=t;if(s)return{data:null,error:s};if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:o}=C4(a.access_token);let c=null;o.aal&&(c=o.aal);let d=c;((n=(r=a.user.factors)===null||r===void 0?void 0:r.filter(x=>x.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(d="aal2");const h=o.amr||[];return{data:{currentLevel:c,nextLevel:d,currentAuthenticationMethods:h},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(c=>c.kid===t);if(n)return n;const a=Date.now();if(n=this.jwks.keys.find(c=>c.kid===t),n&&this.jwks_cached_at+lO>a)return n;const{data:s,error:o}=await nn(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(o)throw o;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=a,n=s.keys.find(c=>c.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:w,error:_}=await this.getSession();if(_||!w.session)return{data:null,error:_};n=w.session.access_token}const{header:a,payload:s,signature:o,raw:{header:c,payload:d}}=C4(n);r!=null&&r.allowExpired||LO(s.exp);const f=!a.alg||a.alg.startsWith("HS")||!a.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(a.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!f){const{error:w}=await this.getUser(n);if(w)throw w;return{data:{claims:s,header:a,signature:o},error:null}}const h=RO(a.alg),x=await crypto.subtle.importKey("jwk",f,h,!0,["verify"]);if(!await crypto.subtle.verify(h,x,o,vO(`${c}.${d}`)))throw new L5("Invalid JWT signature");return{data:{claims:s,header:a,signature:o},error:null}}catch(n){if(Xr(n))return{data:null,error:n};throw n}}}th.nextInstanceID=0;const XO=th;class KO extends XO{constructor(t){super(t)}}var YO=function(e,t,r,n){function a(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(h){try{f(n.next(h))}catch(x){o(x)}}function d(h){try{f(n.throw(h))}catch(x){o(x)}}function f(h){h.done?s(h.value):a(h.value).then(c,d)}f((n=n.apply(e,t||[])).next())})};class JO{constructor(t,r,n){var a,s,o;this.supabaseUrl=t,this.supabaseKey=r;const c=nO(t);if(!r)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const d=`sb-${c.hostname.split(".")[0]}-auth-token`,f={db:ZM,realtime:XM,auth:Object.assign(Object.assign({},GM),{storageKey:d}),global:qM},h=rO(n??{},f);this.storageKey=(a=h.auth.storageKey)!==null&&a!==void 0?a:"",this.headers=(s=h.global.headers)!==null&&s!==void 0?s:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(x,b)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(b)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((o=h.auth)!==null&&o!==void 0?o:{},this.headers,h.global.fetch),this.fetch=QM(r,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.rest=new hM(new URL("rest/v1",c).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new HM(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new WF(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return YO(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:a,userStorage:s,storageKey:o,flowType:c,lock:d,debug:f},h,x){const b={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new KO({url:this.authUrl.href,headers:Object.assign(Object.assign({},b),h),storageKey:o,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:a,userStorage:s,flowType:c,lock:d,debug:f,fetch:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new IM(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const QO=(e,t,r)=>new JO(e,t,r);function eD(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}eD()&&console.warn("âš ï¸  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");let AE=typeof window<"u"&&window.location.hash.includes("type=recovery");function tD(){return AE}function rD(){AE=!1}const nD="https://wrxemcfhootgfnowxlov.supabase.co",aD="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeGVtY2Zob290Z2Zub3d4bG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwMjI1NDMsImV4cCI6MjEwMzU5ODU0M30.NBQNUnMdE3E0tznBeejwg2yh96DVC4ptCFPSvZKHOEk",tt=QO(nD,aD,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),ed="argon2id",td=65536,rd=3,nd=1,ad=6e5,sD=16,V3=12,ux=256,iD=ux/8;function vd(e){return e.normalize("NFC").replace(/[\u2018\u2019\u02BC]/g,"'").replace(/[\u201C\u201D\u00AB\u00BB]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\u2026/g,"...").replace(/[\u00A0\u202F]/g," ").replace(/[\u200B\u200C\u200D\uFEFF]/g,"")}function wd(e){const t=new Uint8Array(e);let r="";for(let n=0;n<t.length;n++)r+=String.fromCharCode(t[n]);return btoa(r)}function xc(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r.buffer}function w1(e){const t=new Uint8Array(e);return crypto.getRandomValues(t),t}function ip(){return wd(w1(sD).buffer)}async function EE(e,t,r,n,a,s){const{argon2id:o}=await gi(async()=>{const{argon2id:d}=await import("./index.esm-c5goIuFU.js");return{argon2id:d}},[]),c=await o({password:e,salt:new Uint8Array(xc(t)),memorySize:r,iterations:n,parallelism:a,hashLength:iD,outputType:"binary"});return crypto.subtle.importKey("raw",c,{name:"AES-GCM",length:ux},s,["encrypt","decrypt","wrapKey","unwrapKey"])}async function SE(e,t,r,n){const a=new TextEncoder,s=await crypto.subtle.importKey("raw",a.encode(e),{name:"PBKDF2"},!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:xc(t),iterations:r,hash:"SHA-256"},s,{name:"AES-GCM",length:ux},n,["encrypt","decrypt","wrapKey","unwrapKey"])}async function Dh(e,t,r,n,a,s,o){const c=vd(e);return r==="pbkdf2"?SE(c,t,o,!0):EE(c,t,n,a,s,!0)}async function fx(e,t,r,n,a,s,o){return r==="pbkdf2"?SE(e,t,o,!1):EE(e,t,n,a,s,!1)}async function Hr(e,t){const r=w1(V3),n=new TextEncoder,a=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},e,n.encode(t));return{ciphertext:wd(a),iv:wd(r.buffer)}}async function _n(e,t,r){const n=new TextDecoder,a=await crypto.subtle.decrypt({name:"AES-GCM",iv:new Uint8Array(xc(r))},e,xc(t));return n.decode(a)}const Db=/^[A-Za-z0-9+/]+={0,2}$/;function hx(e){const t=e.indexOf(".");if(t<=0)return!1;const r=e.slice(0,t),n=e.slice(t+1);return Db.test(r)&&r.length>=12&&Db.test(n)&&n.length>=16}async function H3(e,t){const r=w1(V3);return{ciphertext:await crypto.subtle.encrypt({name:"AES-GCM",iv:r},e,t),iv:wd(r.buffer)}}async function z3(e,t,r){return crypto.subtle.decrypt({name:"AES-GCM",iv:new Uint8Array(xc(r))},e,t)}async function W3(e,t){const r=w1(V3),n=await crypto.subtle.wrapKey("raw",e,t,{name:"AES-GCM",iv:r});return{wrappedKey:wd(n),wrapIv:wd(r.buffer)}}async function CE(e,t,r){return crypto.subtle.unwrapKey("raw",xc(e),r,{name:"AES-GCM",iv:new Uint8Array(xc(t))},{name:"AES-GCM",length:ux},!0,["encrypt","decrypt"])}const kE="aion-verification";async function q3(e){const{ciphertext:t,iv:r}=await Hr(e,kE);return{checkValue:t,checkIv:r}}async function R5(e,t,r){try{return await _n(e,t,r)===kE}catch{return!1}}function Z3(){const e=w1(24);return(Array.from(e).map(r=>r.toString(16).padStart(2,"0")).join("").match(/.{1,4}/g)??[]).join("-").toUpperCase()}async function oD(e,t,r,n){const{data:a,error:s}=await e.from("products").select("id, nom, photo_path, photo_iv").eq("user_id",t).not("photo_path","is",null);if(s)throw new Error(`Impossible de lister les photos de produits : ${s.message}`);const o=a??[];let c=0;for(const d of o){const f=d.nom||d.id;if(d.photo_iv==null)return{migrated:c,total:o.length,failedAt:f};const{data:h,error:x}=await e.storage.from("product-photos").download(d.photo_path);if(x||!h)return{migrated:c,total:o.length,failedAt:f};let b;try{b=await z3(r,await h.arrayBuffer(),d.photo_iv)}catch{return{migrated:c,total:o.length,failedAt:f}}const{ciphertext:w,iv:_}=await H3(n,b),{error:N}=await e.storage.from("product-photos").upload(d.photo_path,w,{contentType:"application/octet-stream",upsert:!0});if(N)return{migrated:c,total:o.length,failedAt:f};const{error:S}=await e.from("products").update({photo_iv:_}).eq("id",d.id);if(S)return{migrated:c,total:o.length,failedAt:f};c++}return{migrated:c,total:o.length,failedAt:null}}async function TE(e,t,r,n){const{data:a,error:s}=await e.from("user_secrets").select("salt").eq("user_id",t).maybeSingle();if(s)throw new Error(`Impossible de rÃ©cupÃ©rer vos paramÃ¨tres de chiffrement : ${s.message}`);if(!a)throw new Error("Aucun paramÃ¨tre de chiffrement trouvÃ© pour cet utilisateur.");const{salt:o}=a,c=await Dh(n,o,ed,td,rd,nd,ad),d=500;async function f(_e,F){const{count:J,error:Z}=await e.from(_e).select("id",{count:"exact",head:!0}).eq("user_id",t);if(Z)throw new Error(`Impossible de compter les lignes de la table ${_e} : ${Z.message}`);const ee=J??0,ie=[];for(let Se=0;;Se+=d){const{data:Ce,error:Le}=await e.from(_e).select(F).eq("user_id",t).order("id",{ascending:!0}).range(Se,Se+d-1);if(Le)throw new Error(`Impossible de rÃ©cupÃ©rer les donnÃ©es de la table ${_e} : ${Le.message}`);const Oe=Ce??[];if(ie.push(...Oe),Oe.length<d)break}if(ie.length!==ee)throw new Error(`Lecture incomplÃ¨te de la table ${_e} : ${ie.length} ligne(s) lue(s) sur ${ee}. Abandon â€” aucune donnÃ©e n'a Ã©tÃ© modifiÃ©e. RÃ©essayez avec une connexion stable.`);return ie}async function h(_e,F,J,Z,ee){if(_e==null)return{ciphertext:null,iv:null};if(F==null)throw new Error(`IV manquant pour ${J}.${ee} (ligne ${Z}). Abandon â€” aucune donnÃ©e n'a Ã©tÃ© modifiÃ©e.`);let ie;try{ie=await _n(r,_e,F)}catch{throw new Error(`Ã‰chec du dÃ©chiffrement de ${J}.${ee} (ligne ${Z}). Abandon â€” aucune donnÃ©e n'a Ã©tÃ© modifiÃ©e.`)}const{ciphertext:Se,iv:Ce}=await Hr(c,ie);return{ciphertext:Se,iv:Ce}}async function x(_e,F,J,Z){if(_e==null)return null;const ee=_e.indexOf(".");if(ee===-1)throw new Error(`Format invalide pour ${F}.${Z} (ligne ${J}). Abandon â€” aucune donnÃ©e n'a Ã©tÃ© modifiÃ©e.`);const ie=await h(_e.slice(ee+1),_e.slice(0,ee),F,J,Z);return`${ie.iv}.${ie.ciphertext}`}const b=await f("people","id, name_ciphertext, name_iv, phone_ciphertext, phone_iv, reference_ciphertext, reference_iv, instagram_ciphertext, instagram_iv, snapchat_ciphertext, snapchat_iv"),w=[];for(const _e of b){const F=_e.id,J=await h(_e.name_ciphertext,_e.name_iv,"people",F,"name"),Z=await h(_e.phone_ciphertext,_e.phone_iv,"people",F,"phone"),ee=await h(_e.reference_ciphertext,_e.reference_iv,"people",F,"reference"),ie=await h(_e.instagram_ciphertext,_e.instagram_iv,"people",F,"instagram"),Se=await h(_e.snapchat_ciphertext,_e.snapchat_iv,"people",F,"snapchat");w.push({id:F,name_ciphertext:J.ciphertext,name_iv:J.iv,phone_ciphertext:Z.ciphertext,phone_iv:Z.iv,reference_ciphertext:ee.ciphertext,reference_iv:ee.iv,instagram_ciphertext:ie.ciphertext,instagram_iv:ie.iv,snapchat_ciphertext:Se.ciphertext,snapchat_iv:Se.iv})}const _=await f("schedules","id, label"),N=[];for(const _e of _){const F=_e.id;N.push({id:F,label:await x(_e.label,"schedules",F,"label")})}const S=await f("schools","id, label"),k=[];for(const _e of S){const F=_e.id;k.push({id:F,label:await x(_e.label,"schools",F,"label")})}const T=await f("debtors","id, last_reminder_at"),C=[];for(const _e of T){const F=_e.id;_e.last_reminder_at!=null&&C.push({id:F,last_reminder_at:await x(_e.last_reminder_at,"debtors",F,"last_reminder_at")})}const R=await f("payments","id, reference_ciphertext, reference_iv"),V=[];for(const _e of R){const F=_e.id;if(_e.reference_ciphertext==null)continue;const J=await h(_e.reference_ciphertext,_e.reference_iv,"payments",F,"reference");V.push({id:F,reference_ciphertext:J.ciphertext,reference_iv:J.iv})}const P=await f("orders","id, adresse_livraison_ciphertext, adresse_livraison_iv, numero_suivi_ciphertext, numero_suivi_iv"),I=[];for(const _e of P){const F=_e.id,J=await h(_e.adresse_livraison_ciphertext,_e.adresse_livraison_iv,"orders",F,"adresse_livraison"),Z=await h(_e.numero_suivi_ciphertext,_e.numero_suivi_iv,"orders",F,"numero_suivi");I.push({id:F,adresse_livraison_ciphertext:J.ciphertext,adresse_livraison_iv:J.iv,numero_suivi_ciphertext:Z.ciphertext,numero_suivi_iv:Z.iv})}const U=await f("contacts","id, ciphertext, iv"),M=[];for(const _e of U){const F=_e.id,J=await h(_e.ciphertext,_e.iv,"contacts",F,"contenu");M.push({id:F,ciphertext:J.ciphertext,iv:J.iv})}const W=await f("user_settings","id, structure_name, label_debtor, label_school, message_template_1, message_template_2, message_template_3, message_template_4");let D={};if(W.length>0){const _e=W[0],F=_e.id,J=["structure_name","label_debtor","label_school","message_template_1","message_template_2","message_template_3","message_template_4"],Z={};for(const ee of J){const ie=_e[ee];if(ie==null||ie.trim().length===0){Z[ee]=null;continue}if(hx(ie))Z[ee]=await x(ie,"user_settings",F,ee);else{const{ciphertext:Se,iv:Ce}=await Hr(c,ie.trim());Z[ee]=`${Ce}.${Se}`}}D=Z}const H=Z3(),Q=ip(),le=await fx(H,Q,ed,td,rd,nd,ad),{wrappedKey:ae,wrapIv:pe}=await W3(c,le),{checkValue:be,checkIv:te}=await q3(c),{error:X}=await e.rpc("rotate_encrypted_data",{p_people:w,p_schedules:N,p_schools:k,p_debtors:C,p_payments:V,p_orders:I,p_contacts:M,p_settings:D,p_secrets:{kdf_algorithm:ed,kdf_memory:td,kdf_time:rd,kdf_parallelism:nd,kdf_iterations:ad,recovery_salt:Q,wrapped_key:ae,wrap_iv:pe,check_value:be,check_iv:te}});if(X)throw new Error(`Le changement de phrase secrÃ¨te a Ã©tÃ© refusÃ© et AUCUNE de vos donnÃ©es n'a Ã©tÃ© modifiÃ©e. Votre ancienne phrase secrÃ¨te reste valide. DÃ©tail : ${X.message}`);let Ne=null;try{const _e=await oD(e,t,r,c);if(_e.failedAt!==null){const F=_e.total-_e.migrated;Ne=`${F} photo${F>1?"s":""} de produit sur ${_e.total} n'${F>1?"ont":"a"} pas pu Ãªtre convertie${F>1?"s":""}, Ã  partir de Â« ${_e.failedAt} Â». Ces photos ne s'afficheront plus : supprimez-les puis rÃ©importez-les depuis le Studio Commerce. Toutes vos autres donnÃ©es sont intactes.`}}catch(_e){Ne=`Les photos de produits n'ont pas pu Ãªtre converties (${_e instanceof Error?_e.message:String(_e)}). Si certaines ne s'affichent plus, supprimez-les puis rÃ©importez-les depuis le Studio Commerce. Toutes vos autres donnÃ©es sont intactes.`}return{newMainKey:c,newRecoveryCode:H,photoWarning:Ne}}async function IE(e,t,r,n){const{data:a,error:s}=await e.from("user_secrets").select("salt, kdf_iterations").eq("user_id",t).maybeSingle();if(s)throw new Error(`Impossible de rÃ©cupÃ©rer vos paramÃ¨tres de chiffrement : ${s.message}`);if(!a)throw new Error("Aucun paramÃ¨tre de chiffrement trouvÃ© pour cet utilisateur.");const o=await Dh(n,a.salt,"pbkdf2",0,0,0,a.kdf_iterations),c=[{table:"schedules",column:"label"},{table:"schools",column:"label"},{table:"debtors",column:"last_reminder_at"}],d=["structure_name","label_debtor","label_school","message_template_1","message_template_2","message_template_3","message_template_4"],f=[],h=[];let x=0;const b=[];for(const{table:w,column:_}of c){const{data:N,error:S}=await e.from(w).select(`id, ${_}`).eq("user_id",t);if(S)throw new Error(`Impossible de rÃ©cupÃ©rer les donnÃ©es de la table ${w} : ${S.message}`);for(const k of N??[]){const T=k[_];if(T==null)continue;const C=T.indexOf(".");if(C===-1){h.push({table:w,id:k.id});continue}const R=T.slice(0,C),V=T.slice(C+1);let P=!1;try{await _n(r,V,R),x++,P=!0}catch{}if(P)continue;let I;try{I=await _n(o,V,R)}catch{h.push({table:w,id:k.id});continue}const{ciphertext:U,iv:M}=await Hr(r,I);b.push({table:w,id:k.id,fields:{[_]:`${M}.${U}`}}),f.push({table:w,column:_})}}{const{data:w,error:_}=await e.from("user_settings").select(`id, ${d.join(", ")}`).eq("user_id",t).maybeSingle();if(_)throw new Error(`Impossible de rÃ©cupÃ©rer les rÃ©glages : ${_.message}`);if(w){const N=w,S={};for(const k of d){const T=N[k];if(T==null||!hx(T))continue;const C=T.indexOf("."),R=T.slice(0,C),V=T.slice(C+1);let P=!1;try{await _n(r,V,R),x++,P=!0}catch{}if(P)continue;let I;try{I=await _n(o,V,R)}catch{h.push({table:"user_settings",id:N.id});continue}const{ciphertext:U,iv:M}=await Hr(r,I);S[k]=`${M}.${U}`,f.push({table:"user_settings",column:k})}Object.keys(S).length>0&&b.push({table:"user_settings",id:N.id,fields:S})}}for(const{table:w,id:_,fields:N}of b){const{error:S}=await e.from(w).update(N).eq("id",_);if(S)throw new Error(`Ã‰chec de la mise Ã  jour de ${w} (ligne ${_}). DÃ©tail : ${S.message}`)}return{recovered:f,alreadyOk:x,unrecoverable:h}}const $b=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_KDF_ALGORITHM:ed,DEFAULT_KDF_ITERATIONS:ad,DEFAULT_KDF_MEMORY:td,DEFAULT_KDF_PARALLELISM:nd,DEFAULT_KDF_TIME:rd,base64ToBuf:xc,bufToBase64:wd,changePassphrase:TE,createCheckValue:q3,decryptBytes:z3,decryptString:_n,deriveMainKey:Dh,deriveRecoveryKey:fx,encryptBytes:H3,encryptString:Hr,generateRecoveryCode:Z3,generateSalt:ip,isPackedEncryptedValue:hx,normalizePassphrase:vd,randomBytes:w1,repairPackedFields:IE,unwrapMainKey:CE,verifyKey:R5,wrapMainKey:W3},Symbol.toStringTag,{value:"Module"})),G3=["structure_name","label_debtor","label_school","label_school_gender","label_debtor_gender","message_template_1","message_template_2","message_template_3","message_template_4"],X3=hx;async function fl(e,t){if(t==null)return null;const r=t.trim();if(r.length===0)return null;const{ciphertext:n,iv:a}=await Hr(e,r);return`${a}.${n}`}async function jE(e,t){if(t==null)return null;if(!X3(t))return t;const r=t.indexOf(".");try{return await _n(e,t.slice(r+1),t.slice(0,r))}catch{return t}}async function LE(e,t){if(t==null)return null;const r={...t};for(const n of G3){const a=await jE(e,t[n]);a!==null&&(r[n]=a)}return r}function RE(e){if(e==null)return[];const t=[];for(const r of G3){const n=e[r];n!=null&&n.trim().length!==0&&(X3(n)||t.push(r))}return t}async function PE(e,t,r){const n=RE(r);if(r==null||n.length===0)return!1;const a={};for(const s of n)a[s]=await fl(t,r[s]);try{const{error:s}=await e.from("user_settings").update(a).eq("id",r.id);return!s}catch{return!1}}const lD=Object.freeze(Object.defineProperty({__proto__:null,ENCRYPTED_SETTINGS_FIELDS:G3,decryptSettingValue:jE,decryptSettingsRow:LE,encryptSettingValue:fl,findPlaintextSettings:RE,isEncryptedValue:X3,migratePlaintextSettings:PE},Symbol.toStringTag,{value:"Module"})),cD=864e5;function Bb(e,t){const r=new Date(e+"T00:00:00Z").getTime(),n=new Date(t+"T00:00:00Z").getTime();return Math.max(0,Math.round((n-r)/cD))}function dD(e,t,r,n){const a=t.filter(T=>T.debtor_id===e.id).sort((T,C)=>T.due_date.localeCompare(C.due_date)),s=r.filter(T=>T.debtor_id===e.id).sort((T,C)=>T.received_at.localeCompare(C.received_at)),o=s.filter(T=>T.payment_type!=="enrollment"&&T.payment_type!=="overpayment"),c=a.reduce((T,C)=>T+Number(C.amount_expected),0),d=o.reduce((T,C)=>T+Number(C.amount_received),0);let f=0,h=0,x=0,b=0,w=0,_=null,N=0;const S=[];for(const T of a){const C=f;for(f+=Number(T.amount_expected);N<o.length&&h<f;)h+=Number(o[N].amount_received),N++;const R=Math.max(0,f-h),V=Math.max(0,Math.min(Number(T.amount_expected),h-C)),P=T.due_date>n,I=P?R>0?"upcoming":"paid":R>0?"late":"paid";if(S.push({id:T.id,amount:Number(T.amount_expected),paidAmount:V,dueDate:T.due_date,status:I,paidInAdvance:P&&I==="paid"}),!P&&R>0){x=R;const U=Bb(T.due_date,n);U>b&&(b=U),w+=1,_??(_=T.due_date)}}let k=null;return e.lastReminderAt&&(k=Bb(e.lastReminderAt.slice(0,10),n)),{...e,totalExpected:c,totalReceived:d,balance:Math.max(0,c-d),lateAmount:x,lateDays:b,daysSinceReminder:k,lateInstallmentCount:w,oldestLateDate:_,installments:S,payments:s.map(T=>({id:T.id,amount:Number(T.amount_received),receivedAt:T.received_at,paymentType:T.payment_type,refundMethod:T.refund_method,refundedAt:T.refunded_at}))}}function rh(e){const t=e.lateInstallmentCount,r=e.daysSinceReminder!==null,n=e.daysSinceReminder??0,a=r&&!e.payments.some(s=>s.receivedAt.slice(0,10)>(e.lastReminderAt??"").slice(0,10));return t>=2?r&&n>=7&&a?6:5:r?n>=7&&a?3:1:e.lateDays>=7?4:2}function K3(e){return e.filter(t=>t.lateAmount>0).sort((t,r)=>{const n=rh(r)-rh(t);if(n!==0)return n;const a=r.lateAmount-t.lateAmount;return a!==0?a:(t.oldestLateDate??"").localeCompare(r.oldestLateDate??"")})}const uD=7;function FE(e){return e.daysSinceReminder===null||e.daysSinceReminder>=uD}function ME(e){const t=new Map;for(const r of e){const n=t.get(r.person_id);n?(n.sessionCount+=1,n.mergedLateAmount+=r.lateAmount,r.lateDays>n.mergedLateDays&&(n.mergedLateDays=r.lateDays)):t.set(r.person_id,{primary:r,sessionCount:1,mergedLateAmount:r.lateAmount,mergedLateDays:r.lateDays})}return[...t.values()]}function ir(e){return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:2}).format(e)}function Bn(){return new Date().toISOString().slice(0,10)}const OE=v.createContext(null);function fD({key_:e,secrets:t,children:r}){const[n,a]=v.useState({settings:null,schedules:[],schools:[],people:[],debtors:[],debtorsRaw:[],installments:[],payments:[],tasks:[],loading:!0,error:null,skippedCount:0}),s=v.useCallback(async()=>{a(c=>({...c,loading:!0,error:null}));try{const[c,d,f,h,x,b,w,_]=await Promise.all([tt.from("user_settings").select("*").maybeSingle(),tt.from("schedules").select("*").order("created_at",{ascending:!1}),tt.from("schools").select("*").order("created_at",{ascending:!1}),tt.from("people").select("*").order("created_at",{ascending:!1}),tt.from("debtors").select("*").order("created_at",{ascending:!1}),tt.from("installments").select("*"),tt.from("payments").select("*"),tt.from("tasks").select("*").order("due_date",{ascending:!0})]);if(c.error)throw c.error;let S=c.data??null;if(await PE(tt,e,S)){const{data:pe}=await tt.from("user_settings").select("*").maybeSingle();pe&&(S=pe)}const k=await LE(e,S);let T=0;const C=[];for(const pe of d.data??[])try{const[be,te]=pe.label.split(".",2),X=await _n(e,te,be);C.push({id:pe.id,label:X,horaire:pe.horaire,start_date:pe.start_date,end_date:pe.end_date,total_amount:pe.total_amount,deposit_amount:pe.deposit_amount,installment_count:pe.installment_count,first_due_date:pe.first_due_date,frequency:pe.frequency,use_periodicity:pe.use_periodicity,installment_dates:pe.installment_dates,archived_at:pe.archived_at,school_id:pe.school_id,whatsapp_group_link:pe.whatsapp_group_link})}catch{T++}let R=0;const V=[];for(const pe of f.data??[])try{const[be,te]=pe.label.split(".",2),X=await _n(e,te,be);V.push({id:pe.id,label:X,archived_at:pe.archived_at})}catch{R++}let P=0;const I=[];for(const pe of _.data??[])try{const be=await _n(e,pe.text_ciphertext,pe.text_iv);I.push({id:pe.id,studio:pe.studio,text:be,dueDate:pe.due_date,doneAt:pe.done_at})}catch{P++}let U=0;const M=[];for(const pe of h.data??[])try{const[be,te,X,Ne,_e]=await Promise.all([_n(e,pe.name_ciphertext,pe.name_iv),_n(e,pe.phone_ciphertext,pe.phone_iv),pe.reference_ciphertext?_n(e,pe.reference_ciphertext,pe.reference_iv??""):Promise.resolve(""),pe.instagram_ciphertext?_n(e,pe.instagram_ciphertext,pe.instagram_iv??""):Promise.resolve(""),pe.snapchat_ciphertext?_n(e,pe.snapchat_ciphertext,pe.snapchat_iv??""):Promise.resolve("")]);M.push({...pe,name:be,phone:te,reference:X,instagram:Ne,snapchat:_e})}catch{U++}const W=b.data??[],D=w.data??[],H=x.data??[],Q=Bn();let le=0;const ae=[];for(const pe of H)try{const be=M.find(F=>F.id===pe.person_id);if(!be){le++;continue}const{name:te,phone:X,reference:Ne}=be;let _e=null;if(pe.last_reminder_at)try{const[F,J]=pe.last_reminder_at.split(".",2);_e=await _n(e,J,F)}catch{}ae.push(dD({id:pe.id,person_id:pe.person_id,schedule_id:pe.schedule_id,reference:Ne,name:te,phone:X,lastReminderAt:_e,depositAmount:pe.deposit_amount,totalAmount:pe.total_amount},W,D,Q))}catch{le++}a({settings:k,schedules:C,schools:V,people:M,debtors:ae,debtorsRaw:H,installments:W,payments:D,tasks:I,loading:!1,error:null,skippedCount:T+R+U+le+P})}catch{a(c=>({...c,loading:!1,error:"Impossible de charger vos donnÃ©es."}))}},[e]);v.useEffect(()=>{s()},[s]);const o=v.useMemo(()=>({key:e,secrets:t,settings:n.settings,schedules:n.schedules,schools:n.schools,people:n.people,debtors:n.debtors,debtorsRaw:n.debtorsRaw,installments:n.installments,payments:n.payments,tasks:n.tasks,loading:n.loading,error:n.error,skippedCount:n.skippedCount,reload:s}),[e,t,n,s]);return i.jsx(OE.Provider,{value:o,children:r})}function $s(){const e=v.useContext(OE);if(!e)throw new Error("useData must be used within a DataProvider");return e}const hD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),v.createElement("path",{d:"M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z"}))]]),mD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),v.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),pD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M184,80V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H176A8,8,0,0,1,184,80Z",opacity:"0.2"}),v.createElement("path",{d:"M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M222,104a6,6,0,0,1-12,0V54.49l-69.75,69.75a6,6,0,0,1-8.48-8.48L201.51,46H152a6,6,0,0,1,0-12h64a6,6,0,0,1,6,6Zm-38,26a6,6,0,0,0-6,6v72a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,80V208a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V136A6,6,0,0,0,184,130Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220,104a4,4,0,0,1-8,0V49.66l-73.16,73.17a4,4,0,0,1-5.66-5.66L206.34,44H152a4,4,0,0,1,0-8h64a4,4,0,0,1,4,4Zm-36,28a4,4,0,0,0-4,4v72a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V136A4,4,0,0,0,184,132Z"}))]]),xD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220,48V96a12,12,0,0,1-24,0V77l-35.51,35.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM95.51,143.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l35.52-35.51a12,12,0,0,0-17-17ZM208,148a12,12,0,0,0-12,12v19l-35.51-35.52a12,12,0,0,0-17,17L179,196H160a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM77,60H96a12,12,0,0,0,0-24H48A12,12,0,0,0,36,48V96a12,12,0,0,0,24,0V77l35.51,35.52a12,12,0,0,0,17-17Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,48V208H48V48Z",opacity:"0.2"}),v.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M109.66,146.34a8,8,0,0,1,0,11.32L83.31,184l18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l26.34-26.35A8,8,0,0,1,109.66,146.34ZM83.31,72l18.35-18.34A8,8,0,0,0,96,40H48a8,8,0,0,0-8,8V96a8,8,0,0,0,13.66,5.66L72,83.31l26.34,26.35a8,8,0,0,0,11.32-11.32ZM208,40H160a8,8,0,0,0-5.66,13.66L172.69,72,146.34,98.34a8,8,0,0,0,11.32,11.32L184,83.31l18.34,18.35A8,8,0,0,0,216,96V48A8,8,0,0,0,208,40Zm3.06,112.61a8,8,0,0,0-8.72,1.73L184,172.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L172.69,184l-18.35,18.34A8,8,0,0,0,160,216h48a8,8,0,0,0,8-8V160A8,8,0,0,0,211.06,152.61Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M214,48V96a6,6,0,0,1-12,0V62.48l-45.76,45.76a6,6,0,0,1-8.48-8.48L193.52,54H160a6,6,0,0,1,0-12h48A6,6,0,0,1,214,48ZM99.76,147.76,54,193.52V160a6,6,0,0,0-12,0v48a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12H62.48l45.76-45.76a6,6,0,0,0-8.48-8.48ZM208,154a6,6,0,0,0-6,6v33.52l-45.76-45.76a6,6,0,0,0-8.48,8.48L193.52,202H160a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,208,154ZM62.48,54H96a6,6,0,0,0,0-12H48a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l45.76,45.76a6,6,0,0,0,8.48-8.48Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M212,48V96a4,4,0,0,1-8,0V57.66l-49.17,49.17a4,4,0,0,1-5.66-5.66L198.34,52H160a4,4,0,0,1,0-8h48A4,4,0,0,1,212,48ZM101.17,149.17,52,198.34V160a4,4,0,0,0-8,0v48a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8H57.66l49.17-49.17a4,4,0,0,0-5.66-5.66ZM208,156a4,4,0,0,0-4,4v38.34l-49.17-49.17a4,4,0,0,0-5.66,5.66L198.34,204H160a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,208,156ZM57.66,52H96a4,4,0,0,0,0-8H48a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l49.17,49.17a4,4,0,0,0,5.66-5.66Z"}))]]),gD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,60H179.83A52,52,0,0,0,76.17,60H40A20,20,0,0,0,20,80V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm84,160H44V84H76V96a12,12,0,0,0,24,0V84h56V96a12,12,0,0,0,24,0V84h32Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,80V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H216A8,8,0,0,1,224,80Z",opacity:"0.2"}),v.createElement("path",{d:"M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-72a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm48,72a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,66H174V64a46,46,0,0,0-92,0v2H40A14,14,0,0,0,26,80V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM94,64a34,34,0,0,1,68,0v2H94ZM218,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H82V96a6,6,0,0,0,12,0V78h68V96a6,6,0,0,0,12,0V78h42a2,2,0,0,1,2,2Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,68H172V64a44,44,0,0,0-88,0v4H40A12,12,0,0,0,28,80V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM92,64a36,36,0,0,1,72,0v4H92ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H84V96a4,4,0,0,0,8,0V76h72V96a4,4,0,0,0,8,0V76h44a4,4,0,0,1,4,4Z"}))]]),vD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),v.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),wD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm112-52a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V164H104a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,152Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),v.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,160H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-50-58a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V158H104a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,152Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-52-60a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V156H104a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,152Z"}))]]),bD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",opacity:"0.2"}),v.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z"}))]]),yD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),v.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),_D=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),v.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),ND=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0ZM228,48V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48Zm-24,4H52V204H204Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),v.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM222,48V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM220,48V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z"}))]]),AD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),v.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),ED=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),v.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),SD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),v.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),CD=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),v.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82lÛ^¹ïİ›Ê×¬¢h­µçJ^İ˜\ˆOQVÚ‹^—KYOQVÚŠÌKÙOLÊŠYKVJJÚÌLŒ
ÑVÚ‹LŠ—KQVÚŠŞ—WKYORšÌLLŠÊÙJÍŒÊWNÑVÚ‹^—OPZVÌMJÖJÒšÌLLŠÊÙJÌÏŒÊWWKVÚŠÌOPZVÌMJÛYK^YW_Y[˜İ[ÛˆŒ
K‹‹J^İ˜\ˆYOQVÚŠÌKÙOQVÚŠŞ—NÜ™]\›ˆÚVÌMJÑVÚ‹LŠ—KQVÚ‹^—WO–_ÚVÌMJİÙK[YWO–_Y[˜İ[Ûˆ[
K‹‹J^Ü™]\›ˆ
’ÚVÌMJÑVÚ‹^—KQVÚŠÌWJÒÚVÌMJÑVÚ‹LŠ—KQVÚŠŞ—WOV_Y[˜İ[ÛˆÌ
K‹‹KYJ^İ˜\ˆÙOQVÚ‹LÊ—KYOQVÚ‹LŠ—KYOQVÚ‹^—KÙOQVÚŠÌK™OQVÚŠŞ—KQVÚŠÌŠ—K]QVÚŠÌÊ—NÜ™]\›ˆ
’ÚVÌMJÑYKZÙWJÒÚVÌMJŞYKT™WO–OÌ’ÚVÌMJÑVÚ‹M
—K]ÙWO[YI‰’ÚVÌMJİÙK^YWO[YI‰’ÚVÌMJŞYKQYWO[YI‰’ÚVÌMJĞ]\O[YI‰’ÚVÌMJÜT™WO[YI‰’ÚVÌMJÔ™KZÙWO[Y_Y[˜İ[ÛˆŒ
K‹‹J^İ˜\ˆYOLŠ–JÌNÙ›ÜŠOLÌM–NÊÊÖJY[
KŠÖK‹YJI‰›˜JKŠÖKŠ_Y[˜İ[ÛˆØÊK‹‹J^İ˜\ˆYOLŠ–JÌNÙ›ÜŠOLÌM–NÊÊÖJY[
KŠÖJ‹KYJI‰›˜JKŠÖJ‹J_Y[˜İ[ÛˆL
K‹‹J^İ˜\ˆYNÙ›ÜŠYOLÎÌYNËK[YJXŒ
KŠÏM
‹‹J_Y[˜İ[Ûˆ[ŠK‹‹J^İ˜\ˆYNÙ›ÜŠYOLÎÌYNËK[YJZØÊKŠÏM‹J_Y[˜İ[ÛˆJK‹‹KYKÙKYKYJ^Ù›ÜŠÙOLŠÙJÌNÌYKKNÊ^ÚYŠÌ
K‹‹ÙKYJJZYŠŒ
K‹‹YJJ[˜JK‹ŠNÙ[Ù^İ˜\ˆÙOQK™OZ‹^‹]ZÙVÔ™KLŠœKOZÙVÔ™K\K]ZÙVÔ™JÌKZÙVÔ™JÜK]ZÙVÔ™JÌŠœK]LÊŠZÌLŒ
ÌÊŠ]TJJÚÌLŒ
Ğ]]WJJÍŒÏË	LN

ÍŒÏËNJ
ÍŒÏÎÚÙVÔ™KLÊœOPZVÌMJÚÙVÔ™KLÊœJĞKÙVÔ™KLŠœOPZVÌMJĞ]
ÉKÙVÔ™K\OPZVÌMJÔJŞ]KÙVÔ™JÌOPZVÌMJÚ]^]KÙVÔ™JÜOPZVÌMJİIKÙVÔ™JÌŠœOPZVÌMJÓ]P_ZŠÏV__Y[˜İ[ÛˆšJK‹‹KYKÙKYKYJ^Ù›ÜŠÙOLŠÙJÌNÌYKKNÊ^ÚYŠÌ
K‹‹ÙKYJJZYŠŒ
K‹‹YJJ[˜JK‹ŠNÙ[Ù^İ˜\ˆÙOQK™OZ‹^‹]ZÙVÔ™K\KOZÙVÔ™JÌK]ZÙVÔ™JÜKRšÌLLŠÊ
Ê]LÊŠKP]
JOŒÊWK]RšÌLLŠÊ]
ÌÏŒÊWK]]
ÌOŒNÚÙVÔ™KLŠœOPZVÌMJÚÙVÔ™KLŠœJŞ]KÙVÔ™K\OPZVÌMJĞ]
Ó]KÙVÔ™JÌOPZVÌMJÔK]KÙVÔ™JÜOPZVÌMJÚ]^]_ZŠÏV__Y[˜İ[ÛˆšJK‹‹KYKÙJ^ÖJK‹‹KM‹KYKÙJ_Y[˜İ[ÛˆÙ
K‹‹KYKÙJ^ÖJK‹K‹M‹KYKÙJ_Y[˜İ[Ûˆ]
K‹‹KYKÙJ^İ˜\ˆYNÙ›ÜŠYOLÎÌYNËK^YJ[šJKŠÏM
‹‹KM‹KYKÙJ_Y[˜İ[Ûˆ\ŠK‹‹KYKÙJ^İ˜\ˆYNÙ›ÜŠYOLÎÌYNËK^YJ[šJKŠÏMK‹M‹KYKÙJ_Y[˜İ[ÛˆXJK‹‹KYKÙKYKYJ^ÖJK‹YKKÙKYKYJKJ‹KYKKÙKYKYJ_Y[˜İ[ÛˆŠK‹‹KYKÙKYKYJ^ÖJK‹KYKÙKYKYJKJ‹KKYKÙKYKYJ_Y[˜İ[ÛˆJK‹‹KYKÙKYKYJ^ÛšJKŠÍ
›YKYKKÙKYKYJKšJ‹JÍ
›YKYKKÙKYKYJ_Y[˜İ[ÛˆYJK‹‹KYKÙKYKYJ^ÛšJKŠÍKYKÙKYKYJKšJ‹JÍKYKÙKYKYJ_Y[˜İ[ÛˆÙJ
^İ\Ë˜˜O[™]È\Ë™XÏV×K\Ë˜ØÏV×K\Ë“XÏV×K\Ë‘Ï]\Ë“˜Ï]\Ë™Ï]\Ë™˜ÏL\Ë“ØO[™]È\Ë›Y[[ÜOL\Ë’XH“İ]][˜È‹\Ë’˜H“İ]][Q[˜È‹\Ë“™H“İ]]›İÑ[˜ÈŸY[˜İ[Ûˆİ

^İ\Ë™]OV×K\Ë›Ù™œÙ]]\ËšÙ]\ËšO]\ËÏL\Ë›˜OV×K\ËO]\Ë™Ø]\Ë’˜O]\Ë”ØO]\Ë”LY[˜İ[Ûˆ

^İ\Ë›˜Ï]\Ë‘XO]\Ë˜]\ËšÏL\Ë’ÏV×K\ËÏLY[˜İ[Ûˆ

^İ\ËXOL\Ë•ØO[™]È]\Ë˜[™]È]\Ë›Y]\ËÏ]\ËØÏL\Ë˜ÏV×K\Ë•ØL\Ë–XO[™]ÈYK\ËXÏ[™]È_Y[˜İ[Ûˆ\Š
^İ\Ë]\Ë˜OL\Ë›[™]È[‹\Ë˜ØO[™]È\Ë•V×K\Ë˜OL\Ë•OV×K\Ë•XOL\Ë›O[™]È‹\Ë”L\ËÙ[™]È‹\Ë“XO]\Ë‰]\ËÏ]\ËšO]\Ë˜Ï]\ËL\ËœÏ[™]È\Ë˜XL\Ë™ØÏ[Ê
K\Ë“ØÏLY[˜İ[Ûˆ\Š
^İ\Ë“Ï]\Ë–]\Ë‰O]\ËšO]\Ë˜ÏL\Ë›[™]È[‹\ËšXÏL\Ë˜ØOV×K\ËL\ËœY[[\Ëœ™LY[˜İ[ÛˆŠK‹‹KYKÙKYJ^Ù›ÜŠOQOO[[Ì‘VÚŠÌKLÚYNÊÊÚŠ[YVİÙJÚ—OQJŞ–ÖJÚ—IŒMKO[YVİÙJÚ—_Y[˜İ[ÛˆÜŠK‹‹KYKÙKYJ^İ˜\ˆYNÚYŠOO[[
QŠ[[‹KYKÙKYJNÙ[ÙH›ÜŠYOLÑYOYNÊÊÑYJ[YVİÙJÑYWOQVÚŠÑYWJŞ–ÖJÑYWIŒM_Y[˜İ[Ûˆ\ŠK‹‹KYKÙKYJ^ÚYŠOO[[
QŠ[[‹KYKÙKYJNÙ[Ù^İ˜\ˆYKÙOQVÚŠÌK™OZÙKZÙNÙ›ÜŠYOLÑYOYNÊÊÑYJT™O\
ÊÙOQVÚŠÑYWJKT™K^–ÖJÑYWJÊLM‰”™OÌ”™OÌŒMN”™JIŒMK™OZÙKYVİÙJÑYWO\_Y[˜İ[Ûˆ\ŠK‹‹J^İ˜\ˆYOZ‹ÚYÙOZ‹›ÎÚYŠ
HO[[	‰šˆO[[
KŸV_ŠÖOÙJ\™]\›ˆ[ÚYŠQKØÊ^ÚYŠK™ØOO[[
^İ˜\ˆYNÚYŠK™ØO[™]È\‹
YOQK™ØOO[[
_
YOZ‹ÚY
š‹›Ë
K‘Ø‹›[™İOL
KK‘Ø\ÊYJKK•XÏLK‘ØO[[ŞYOLŠK›XQK‘Ø‹K›˜QK•XËKœ˜Ï[[YOLJKYOH^YJK^YJ^ŞYOQK™ØNİ˜\ˆYOQK‘˜KÙOQK”™OQKœXËQK›X‹]QK›˜‹OZÙJÌK]T™KLK^YK›ÚYŠ
YHO[[	‰œO[[	‰šˆO[[
KLÌO[[LÌWOQ‹LÌ—OSÜ‹LÌ×O^\‹YK˜ØO\YKP]YK˜ÏZ‹ÚYYKšOZ‹šZYÚ
YK˜É‰ŒYKšJKOT™JZLÙ[ÙHYŠYK‰OLÉ‘YVÚÙJÌKYK–QYVÚÙJÌOŒ‰ŒËYK“ÏQYVÚÙJÌO	ŒËÙOQYVÚÙJÌO‰ŒËYK‰_OYK‰_^YK–ŸOYK“ßÙJZLÙ[ÙHYŠœ]Wİ˜XÏQÙK˜˜ÏV›XO^YKÚYZ‹ÚYšZYÚZ‹šZYÚ‘OZ‹‘KZ‹‹˜OZ‹˜KšZ‹š‹›ÏZ‹›ËYK‰JYNİ
YK‰OOLJKV™J
Nİ™›ÜŠÎÊ^ÚYŠO[[
^ÚLØœ™XZÈ_ZYŠ
YHO[[
KYK›XÏZ‹‹˜Ï^YK˜Ë‹šO^YKšK‹›^YK›‹››XO^YK‹›ÚY^YK˜Ë‹›šZYÚ^YKšK‹˜OL
‹›KYKK]
K^™JYK˜ËYKšKK‹[
_
‹˜XOLI‰š‹™ØÖÌKšÏOLÉ‰œÙJ‹œÊOÊYKšXÏLKYOZ‹˜Êš‹šK‹•O[[‹•XOL‹•\ÊYJK‹˜OL‹•O[[Ê‹˜OLKL
NšLJNŠYKšXÏLIJ‹YK˜ÊJKZŠJXœ™XZÈÚLNØœ™XZÈ_^YK›XÏ[[LY[ÙHZ]^YK˜ÊYKšNŞYOHZŸZYŠYJ\™]\›ˆ[ÑK™ØK“ÈOLOÑK‘ØOL–O]ÙK^Ÿ]
K™ØHO[[
K
ŠÖO]ÙJNÙNÚYŠJYOQK™ØJK˜ËÙOQYK››ËYK‰OOL
^ÚYŠOQKœ˜Ë]QK•˜ËQK‘˜KÙOQK”
ÌJŞŠš‹™OQK›X‹QK›˜ŠŞŠš‹
ÙOQK”
ÑKœXÊKYK–ˆOL
Y›ÜŠ
LÑYK–—HO[[
KYOLŞYONÊÊŞYJQLÑYK–—JK]ÙK™KŠKOT™K]\
ÏZ‹ÙJÏZÙ[ÙH›ÜŠYOLŞYONÊÊŞYJ[Š™KÙKŠKOT™K]\
ÏZ‹ÙJÏZÑKœ˜ÏTKK•˜ÏZ]Y[Ù^ÚYŠ
YK›XÈO[[
K^ŠÖK

YOQYK›XÊHO[[
K
^YKšJKYKÏZŠZLNÙ[ÙHYŠYKšXßŠ
KYKšXÊ^ÑYO^YK•‹O^YK˜K]^YK˜Îİ˜\ˆ]^YKšK]JLKÙO^YK‰Ú]™O^YK‰	Z]^YK›K]^YKœËYK‰
K	Z]
“]Z]
š‹]P]ØËİ^]ÜJ]™KÙJN›[İ
]I
K
S]
K
ÙJ]
JNİ™›ÜŠÎÊ^Ù›ÜŠÈ\š	‰]Ê^ÚYŠ™I”]
İ\J]™KÙJJK
İO[[
KÙJ
KMŠ][ÙJİ‘ÖÌKİ’ÌK
JJQYVÔJŞ]OS]
ÊŞ]
ÊÔ™OZ]	‰Š™OL
ÊÚÙOZ‰‰ˆJÙILMŠI‰JYKÙJJNÙ[Ù^ÚYŠJ“]
J^İLØœ™XZÈS]\YJ]LM‹
Nİ˜\ˆ‹[ÙJİ‘ÖÍKİ’ÍK
NÚYŠÙJ
KJ]J[™J]\YJ‹
JJI‰‰^]S]
J^İLØœ™XZÈY›ÜŠLÕ]ÊÊÕŠQYVÔJŞ]
Õ—OQYVÔJŞ]
Õ‹^—NÙ›ÜŠ]
ÏS]™JÏS]Ô™OZ]ÊT™KOZ]
ÊÚÙOZ‰‰ˆJÙILMŠI‰JYKÙJNŞ]	‰”™I”]	‰Šİ\J]™KÙJJ_]
šOYYJ
J_^JYKÙOšÚšÙJNØœ™XZÈH]š	‰]	ÊLYK˜O\šÍNŒÊNYK‰^]]Y[ÙHU™JYKYK•‹YK˜KYK˜ËYKšK‹JNÚYŠZŠ^ÖOLØœ™XZÈ__^ŠÖO]ÙI‰ŠKØÏLJKOL_ZYŠVJ\™]\›ˆ[ÚYŠKØÉ‰Š
OQK™ØJHO[[	‰ŠK›XÏ[[
KK™ØO[[K‘ØJJ\™]\›ˆ[\
ÙÎ•ÙX”\]X[^™S]™[ÈŠK[\™]\›ˆK›˜ŠŞŠ›Y_Y[˜İ[Ûˆ›ŠK‹‹KYKÙJ^Ù›ÜŠÌYKKNÊ^İ˜\ˆYKYOQKÙOZŠÊÌNŒ
K™OQKZŠÊÌŒÊNÙ›ÜŠYOLŞYONÊÊŞYJ^İ˜\ˆ]T™VÜ
Í
YWNĞ]OLMI‰Š]
LÌMËYVÚÙJÍ
YJÌOQYVÚÙJÍ
YJÌJ]ŒŒËYVÚÙJÍ
YJÌWOQYVÚÙJÍ
YJÌWJ]ŒŒËYVÚÙJÍ
YJÌ—OQYVÚÙJÍ
YJÌ—J]ŒŒÊ_ZŠÏ]Ù__Y[˜İ[ÛˆŠK‹‹KYJ^Ù›ÜŠÌKKNÊ^İ˜\ˆÙNÙ›ÜŠÙOLİÙOÊÊİÙJ^İ˜\ˆYOQVÚŠÌŠÙJÌKYOLMIŠ™OQVÚŠÌŠÙJÌWJKÙOMÍJ‘YK™OJ	”™_™O
JšÙOŒMÑVÚŠÌŠÙJÌOJ	Y_YO
JšÙOŒM‰Œ
MIY_YO
JšÙOŒM	ŒMKVÚŠÌŠÙJÌWOL	”™_Y_ZŠÏ[Y__Y[˜İ[ÛˆŠK‹‹KYKÙKYKYJ^İ˜\ˆÙK™KLMNÙ›ÜŠ™OLÔ™OYNÊÊÔ™J^Ù›ÜŠÙOLÚÙONÊÊÚÙJ^İ˜\ˆ]QVÚŠÚÙWNİÙVŞYJÍ
šÙWOP]	P]ZŠÏ^‹YJÏQY_\™]\›ˆOLM_Y[˜İ[Ûˆ[ŠK‹‹KYJ^İ˜\ˆÙNÙ›ÜŠÙOLİÙOYNÊÊİÙJ^–ÖJİÙWOQVÚŠİÙWOY[˜İ[ÛˆŠ
^ÒXÏS›‹]S‹\‹^[ŸY[˜İ[ÛˆŠK‹Š^ÓVÑWOY[˜İ[ÛŠKYKÙKYKYKÙK™K]K]]]	]
^İ˜\ˆİT]LOŒKQYVÚÙJÌ_™VÜ
ÌOM‹\P]ÔJÌ_]İ
ÌOMİ
HO[[
Nİ˜\ˆÜLÊŠÔ\ŠÌLÌLÍŒÙ›ÜŠŠVÛYJÌKMI—Ü‹ÜŒM‹]]
KÙHO[[	‰ŠÜLÊ”\ŠŞŠÌLÌLÍŒ‹ŠÙVŞYJÌKMI—Ü‹ÜŒM‹	
JKİLNÑİUÊÊÑİ
^İ˜\ˆÛQYVÚÙJÑİ_™VÜ
ÑİOM‹˜OP]ÔJÑİ_]İ
ÑİOM‹[^ŠÜÛŠÔ\ŠÕ˜JÍLM‹œY[ŠÌŠŠÛŠÔ\ŠOŒÎ×ÜSœŠŞŒKJ[Y[ŠÌŠŠŠÕ˜JOŒÊJÜÛŒKŠVÛYJÌŠ‘İLWKMI—Ü‹ÜŒM‹]]
ÊŠ‘İLJJŠKŠVÛYJÌŠ‘İLKMI‹ŒM‹]]
ÊŠ‘İL
JŠKÙHO[[	‰ŠÜY[ŠÔ\ŒKSœŠÕ˜OŒKŠÙVŞYJÌŠ‘İLWKMI—Ü‹ÜŒM‹	
ÊŠ‘İLJJŠKŠÙVŞYJÌŠ‘İ
ÌKMI‹ŒM‹	
ÊŠ‘İ
Ì
JŠJK\Û‹\U˜_LI”]
ÜLÊŠÔ\ŠÌLÌLÍŒ‹ŠVÛYJÔ]LWKMI—Ü‹ÜŒM‹]]
Ê]LJJŠKÙHO[[	‰ŠÜLÊ”\ŠŞŠÌLÌLÍŒ‹ŠÙVŞYJÔ]LWKMI—Ü‹ÜŒM‹	
Ê]LJJŠJJ__Y[˜İ[ÛˆZJ
^ÖZVÔZO\Ú‹ZVÙL—OPİ‹ZV×İ—OZZ‹ZVİ—OZİ‹ZVÜŒ—OU‹ZVÓOR]‹ZVÓ—O[Ú‹ZVÔOPİ‹ZVÔOZİ‹ZVÛŒ—OU‹ZVÑOR]ŸY[˜İ[ÛˆÌ
J^Ü™]\›ˆIŸ›Ì‘OÌŒMN‘OšŸY[˜İ[ÛˆÛÊKŠ^Ü™]\›ˆÌ

NLÍÊ‘O
JÊŒMJš
KLMŒÍ
_Y[˜İ[Ûˆ
K‹Š^Ü™]\›ˆÌ

NLÍÊ‘O
KJNJš
KJLÌÌŒ

JÎÌ
_Y[˜İ[Ûˆ›ÊKŠ^Ü™]\›ˆÌ

NLÍÊ‘O
JÊÌÌL
š
KLMÍJ_Y[˜İ[Ûˆ
K‹‹KYJ^ÖVÛYJÌOWÛÊKŠKVÛYJÌWO]
K‹ŠKVÛYJÌ—OS›ÊKŠ_Y[˜İ[ÛˆÚJK‹‹KYJ^ÖVÛYJÌOS›ÊKŠKVÛYJÌWO]
K‹ŠKVÛYJÌ—OWÛÊKŠ_Y[˜İ[Ûˆ›
K‹‹KYJ^İ˜\ˆÙO]
K‹ŠNÚ]ÙOÉŒŒ›ÊKŠOŒËVÛYJÌOL	—ÛÊKŠ_ÙOKVÛYJÌWOZŸY[˜İ[ÛˆXJK‹‹KYJ^İ˜\ˆÙOL	“›ÊKŠ_MNÖVÛYJÌOL	—ÛÊKŠ_
K‹ŠOVÛYJÌWO]Ù_Y[˜İ[ÛˆšJK‹‹KYJ^ÖVÛYJÌOLMK
K‹‹KYJÌJ_Y[˜İ[Ûˆ›
K‹‹KYJ^×ÚJK‹‹KYJKVÛYJÌ×OLM_Y[˜İ[ÛˆZJK‹‹KYJ^Ó
K‹‹KYJKVÛYJÌ×OLM_Y[˜İ[Ûˆ\ÊK‹Š^ÓVÑWOY[˜İ[ÛŠKYKÙKYKYKÙK™K]
^Ù›ÜŠ˜\ˆO\
ÊL‰]
JÜOTNÊZŠVÛYJÌKÙVŞYJÌKYVÚÙJÌK™K
KŠVÛYJÌWKÙVŞYJÌKYVÚÙJÌK™K
ŞŠKYJÏL‹
ÊŞYK
ÊÚÙK
ÏLŠÌI]	‰šŠVÛYJÌKÙVŞYJÌKYVÚÙJÌK™K
__Y[˜İ[Ûˆ[ŠK‹Š^Ü™]\›ˆOLÑOOLÚOLÍNšOLÍŒŸY[˜İ[ÛˆÊK‹‹KYJ^ÜİÚ]Ú
OŒÌ
^ØØ\ÙHÎ’™J‹‹KYK
NØœ™XZÎØØ\ÙH›]
‹‹KYJNØœ™XZÎØØ\ÙHNœ]
‹‹KYJ__Y[˜İ[Ûˆ\ÊKŠ^İ˜\ˆ‹KYOZ‹“KÙOZ‹“˜‹YOQK›ØËYOQKœÊÍÙOQK›ØË™OQKœÊÍNQK›ØË]QKœÊÍŒÙ›ÜŠLÌMÊÊŞŠ^YVÑYJÌÌŠ‹LWOLLNÙ›ÜŠLÎÊÊŞŠZÙVÔ™JÌÌŠ‹LWOLLKĞ]
ÌÌŠ‹LWOLLNÙ›ÜŠYOŞYVÑYKLKLÌ—OZÙVÔ™KLKLÌ—O\Ğ]LKLÌ—OLLNŠJYKYKLÌ‹LKLËŒJKJÙK™KLÌ‹LKLËJKJ]LÌ‹LKLËJJKOLÖOK˜NÊÊÖJ^İ˜\ˆOZ‹XVÚ‹˜XJÖWNÚYŠJ^Ù›ÜŠKLNÌMÊÊŞŠ[ŠYKYJÌÌŠ‹MYKYJÌÌŠŠÌL‹
NÙ›ÜŠKLNÎÊÊŞŠ[ŠÙK™JÌÌŠ‹MÙK™JÌÌŠŠÍ
KŠ]
ÌÌŠ‹M]
ÌÌŠŠÍ
_]˜\ˆ]QK‘ÙQK’
ÖK]TK˜Y]TK’ÎÚYŠYI‰ŠŠYKYKLÌ‹]İKKMŠKŠÙK™KLÌ‹]İK™‹
KŠ]LÌ‹]İK™XK
JKK–˜J^İ˜\ˆ	^YKQYKLÌŠÌMÙ›ÜŠYI‰ŠOQK˜KLOØJ	]İKVÌMWK
N›Š	]İ
ÌWKK
JKLÍŞŠÊÊIĞ
ÌL
Ş—OIĞ
ÌMŠŞ—OIĞ
ÌÎ
Ş—OIĞ
Ì
Ş—NÙ›ÜŠLÌMÊÊŞ‹]LŠI^YKQYJÔ–Ş—K[ÖÔK“Ø–Ş—WJ	
KÊ]]MŠŠŞ‹	
_Y[ÙHYŠ	R[ŠKYKK“Ø–ÌJKLÉJYKYJK]OL
Y›ÜŠLÌMÊÊŞ‹]LŠUÊ]]MŠŠŞ‹YKYJÔ–Ş—JNÙ›ÜŠTK‘ØË	R[ŠKYKK‘
K	ÉJÙK™JK	ÉJ]
K]S]	ZÙKT™KMIŠOLŠI‰ŠMÌ	”OÕ
]M‹	
N’İ
]M‹	
JKO\]P]MIŠN
I‰ŠMÌ	Õ
]ÌŒK]
N’İ
]ÌŒK]
JKYOK•X‹LI‰ŠŠ]İKKYKYJÍMŠKŠ]İK™‹ÙK™JÌŒ
KŠ]İK™XK]
ÌŒ
JKN
ÙJ‘K‹]QKœØKQKJÌMŠ–JÌMŠÙJ‘K”‹]QKœXKOQKœ˜JÎ
–JŞ‹]QK’K	QK’XJÎ
–JŞ‹LÌMÊÊŞŠ[Š]
ŞŠ‘K”‹YKYJÌÌŠ‹MŠNÙ›ÜŠLÎÊÊŞŠ[Š]JŞŠ‘K‹ÙK™JÌÌŠ‹
KŠ]	
ŞŠ‘K‹]
ÌÌŠ‹
__Y[˜İ[Ûˆ
K‹‹KYKÙKYKYKÙJ^İ˜\ˆ™OVÌKVÌK]LOZÙHO[[ÚÙKšÙŒ]ZÙOÏÛ™]ÈİÚYŠOO[[LŠ\™]\›ˆÎÚ]™]OQK]ÏZ‹]šO^‹VÚ—KVŞ—K]™ØVÚ]™Ø—NÙNİ˜\ˆZ‹]^‹]Z]™ØÚYŠ
HO[[
K
]O[[
K
]O[[
K]ÌOLLS]ÌI‰ˆ\ŠKÌK”’Q‘ˆŠJ^ÚYŠŠKÌJÎ•ÑP”ŠJ^Ş]LÎØœ™XZÈ_]˜\ˆ	\
KÌJÍ
NÚYŠL‰MMÌ	
^Ş]LÎØœ™XZÈ_ZYŠI‰‰“]ÌKN
^Ş]MÎØœ™XZÈ_^]ÌOIÌJÏLL‹]ÌKOLLŸ^]LZYŠ]OL
\™]\›ˆ]Ù›ÜŠ	L]™Ø–ÌK^–ÌNÎÊ^ÙNİ˜\ˆQNÓ]Z‹]^İ˜\ˆ]T™Kİ\]VÌNÚYŠ
ÜP]VĞ]JVÌOL]ÌJ^]MÎÙ[Ù^ÚYŠ\Š]ÌK•”ŠJ^ÚYŠ
]ÌJÍ
HOLL
^Ş]LÎØœ™XZÈ_ZYŠN]ÌJ^Ş]MÎØœ™XZÈ_]˜\ˆ\
]ÌJÎ
K\LJÔYJ]ÌJÌLŠNÚYŠŒMÍÍT\ŠŠLJÔYJ]ÌJÌMJJJ^Ş]LÎØœ™XZÈ_UˆO[[	‰Š–ÌO^ŠK]O[[	‰Š]ÌOT\ŠKİO[[	‰ŠİÌOP
K]ÌJÏLN]ÌKOLNÜ–ÌOL_^]L_ZYŠ]P]ÌK]ÌK]OL
\™]\›ˆ]ÚYŠ]HHJ‰
KI	‰]
\™]\›ˆÎÚYŠÙHO[[	‰ŠÙVÌOHHJM‰
JKYHO[[	‰ŠYVÌOS]
KYHO[[	‰ŠYVÌOL
KYOT™VÌK\ÌK]	‰“]	‰šÙOO[[
^Ş]LØœ™XZßZYŠŠ^Ş]MÎØœ™XZßZYŠ		‰]I	‰ˆP]	‰ˆ\ŠK–ÌKSŠJ^ŞVŞ—K]›˜OVÚ]›˜WK]”VÚ]”K]”ØOVÚ]”ØWNÙNŞQK]Z‹	^İ˜\ˆÜZ]™ØÔ]Z]›˜KİZ]”Z]”ØK\LŒ‹
ˆO[[
K
	O[[
K^]ÌNİ˜\ˆÛIÌNÙ›ÜŠ
]O[[
K
ˆO[[
K]ÌO[[İÌO[[–ÌOLÎÊ^ÚYŠ]ÌOP	ÌO\Û‹œÛŠ^Ş]MÎØœ™XZÈ_]˜\ˆ˜O\
‹
Í
NÚYŠMMÌ˜J^Ş]LÎØœ™XZÈ_]˜\ˆ[N
Õ˜JÌI‹LÚYŠ\ŠÏY[‹Ü‰‰”\—ÜŠ^Ş]LÎØœ™XZÈ_ZYŠ\Š‹•”Š_\Š‹•”ŠJ^Ş]LØœ™XZÈ_ZYŠÛ–ÌO[Š^Ş]MÎØœ™XZÈ_\Š‹SŠ_
]ÌO^‹İÌOP
Î–ÌOU˜JK
ÏY[‹Û‹OY[Ÿ_ZYŠ^–ÌK]›˜OZ]›˜VÌK]”Z]”ÌK]”ØOZ]”ØVÌK]OL
Xœ™XZß^VŞ—K]’˜OVÚ]’˜WK]OVÚ]WNÙNšYŠÜQK]Z‹	^‹]Z]™Ø–ÌKİZ]’˜KZ]K^]ÌKH\ŠÜ‹‹•”ŠK\H\ŠÜ‹‹•”ŠK
ÜˆO[[
K
	O[[
K
İO[[
K
ˆO[[
K‰ÌJ^]MÎÙ[Ù^ÚYŠ\Š^ÚYŠÜ\
Ü‹ŠÍ
KLT]	‰—Ü”]LLŠ^Ş]LÎØœ™XZÈ_ZYŠI‰—Ü‰ÌKN
^Ş]MÎØœ™XZÈ_QİÌOWÜ‹]ÌJÏN	ÌKON–ÌOT\ŸY[ÙH–ÌOMOIÌI‰—Ü–ŞŠÌOOMÉ‰ˆJÜ–ŞŠÍOJKİÌOIÌNŞ]LZYŠ^–ÌK]’˜OZ]’˜VÌK]OZ]VÌKZ–ÌK]OL
Xœ™XZÎÚYŠMMÌ]’˜J\™]\›ˆÎÚYŠYOO[[]
YVÌOZ]OÌŒJKYOVŞYWKVİK]J^ÚYŠOŠ^Ş]MÎØœ™XZßQYO^YKO]]]ÙKOO[[OÑOLO^‰‰‘VÚŠÌOOMÉ‰ˆJVÚŠÍOJOÊ	VÌKÜVÌK]VÌK
İ[™]È‹K‹ŠKYJİ	Ü‹]
OÊYHO[[	‰ŠYVÌOIÌJKHO[[	‰ŠVÌOWÜ–ÌJK]O[[	‰Š]ÌOT]ÌJKOLJN‘OL
N‘OLY[Ù^ÚYŠLŠ^Ş]MÎØœ™XZßQYO]OO[[LŸ]JKŠÌË‹LÊOÑOLŠOQVÚŠÌ_VÚŠÌWOVÚŠÌ—OM‹]LMŒÎÉŠVÚŠÍ×OVÚŠÍ—JKOLMŒÎÉŠVÚŠÎWOVÚŠÎJKI”_Ï
OŒIÊ_JO	ŒJ_OOZ]’˜_S]QOÑOLŠYI‰ŠYVÌOS]
KYI‰ŠYVÌOQJKOLJJ_ZYŠQ_
YO^YVÌK]ÌK]	‰Š™VÌHO^Y_ÌHO]
JJ\™]\›ˆÎÚÙHO[[	‰ŠÙVÌOZ]ÙK›Ù™œÙ]Z‹ZÙKË
MMÌš‹ZÙKÊK
ÙK›Ù™œÙ]OZÙKšK^ŠJNØœ™XZß\™]\›ˆ]OL]OMÉ‰]	‰šÙOO[[ÊÙHO[[	‰ŠÙVÌ_Z]›˜HO[[	‰Œ]›˜K›[™İ
KHO[[	‰ŠVÌO^YJKYHO[[	‰ŠYVÌO]
K
N]Y[˜İ[Ûˆ\ÊK‹Š^İ˜\ˆOZ‹ÚYYOZ‹šZYÚÙOLYOLYOVKÙO[YNÚYŠ‹‘OQHO[[	‰ŒK‘K‹‘I‰ŠYOQK˜ÙÙOQK˜™ÙOQK‹YOQKš‹LOŸ
ÙIKL‹YIKLŠKÙ_Y_QY_ZÙ_ÙJÑYO–_YJÚÙO›YJJ\™]\›ˆÚYŠ‹]ÙK‹š^YK‹˜O]ÙJÑYK‹›Ï^YJÚÙK‹•OQYK‹•ZÙK‹™OQHO[[	‰ŒK™K‹™J^ÚYŠQ]
YKÙKVÑKšX—KÙOVÑKš—JJ\™]\›ˆÚ‹šX^–ÌK‹š]ÙVÌ_\™]\›ˆ‹›ØQHO[[	‰‘K›Ø‹‹’ØQOO[[QK”Ù‹™I‰Š‹›ØZ‹šXÊ–KÍ	‰š‹šÊ›YKÍ‹’ØL
K_Y[˜İ[Ûˆ
J^ÚYŠOO[[
\™]\›ˆÚYŠLO‘K”Ê^İ˜\ˆQK™‹”‘ĞNÚ‹™˜ŠÏJKšZYÚLJJš‹K‹OKZ‹_Y[ÙHQK™‹šØ‹OQKšZYÚ‹“ÊÏJKLJJš‹™˜K‹™˜OKZ‹™˜K‹“ŠÏJKLOŒJJš‹X‹‹XKZ‹X‹‹•ÊÏJKLOŒJJš‹‘‹‹‘KZ‹‘‹‹‘ˆO[[	‰Š‹’ŠÏJKLJJš‹›‹‹›KZ‹›ŠNÜ™]\›ˆY[˜İ[ÛˆŒ
K‹‹J^ÚYŠOO[[Q_ZŠ\™]\›ˆÚYŠˆO[[
^ÚYŠ‹‘J^İ˜\ˆYO^‹˜ÙÙO^‹˜™YOKL‰‹‹YOKL‰‹šÚYŠY_‘Y_[Y_]Ù_YJÛYO‘_YJİÙOšŠ\™]\›ˆÑO[YK]Ù_ZYŠ‹™J^ÚYŠQ]
K‹YOVŞ‹šX—KÙOVŞ‹š—JJ\™]\›ˆÑO[YVÌK]ÙVÌ__VKÚYQKKšZYÚZÙNİ˜\ˆÙOVKÚY™OVKšZYÚÚYŠOVK”ËZÙ_T™_JOTZ	‰ŒLÏ‘JJQOLÙ[Ù^ÚYŠVK”™	‰–KœÙO[[
^ŞYO]ÙO[YOZLİ˜\ˆJYOZÙJ”–ÑWJJ”™NÚYŠLO‘_
ÙOJ™JÌJKÌŠŠJÙJÌJKÌŠKOOLL‰‰ŠYOJYOZÙJJ”™JJK
™O\Ê
ÌŠÙJŞYJJOO[[
^ÑOLNØœ™XZÈ_VKœÙT™KLO‘OÊ
ÙOVK™‹”‘ĞJK™XT™KÙK™˜LÙKOQYKÙKœÚ^™O\
NŠ
ÙOVK™‹šØŠKOT™KÙK“ÏLÙK™˜OQYKÙK‘™\ÙK™T™KÙK“L
ÜÙKXZ‹ÙKÙ]ÙKÙK™XOT™KÙK•ÏL
Ü
İÙKÙK‘Z‹ÙK‘Y]ÙKOOLL‰‰ŠÙK‘T™KÙK’L
Ü
ÌŠÙJKÙK•Ï^YKÙK›[YJ_ZYŠLKYOVK”ËÙOVKÚYYOVKšZYÚYOTZ	‰ŒLÏ›YJZYŠLO›YJQOVK™‹”‘ĞK‰JYOSX]˜XœÊKJJJŠYKLJJİÙOQKœÚ^™K‰QYO]ÙJ”–ÛYWK‰QK™XˆO[[Ù[Ù^ÑOVK™‹šØ‹YOJÙJÌJKÌ‹JYJÌJKÌ‹ÙOSX]˜XœÊK™˜JK™OSX]˜XœÊKXŠNİ˜\ˆ]SX]˜XœÊK‘ŠKOSX]˜XœÊK›ŠK]TJŠYKLJJİÙNÚ‰ZÙJŠYKLJJİÙOQK‘™‰T™JŠLJJÑYOQKÙJ‰P]
ŠLJJÑYOQK‘Y
IšÙO]ÙI”™OQYI]QYK‰QKHO[[‰QK™ˆO[[‰QK™XHO[[YOOLL‰‰Š‰TO]ÙK‰Z]QK•Ë‰QK‘ˆO[[
_Y[ÙHLÑOZÌŒŸ_\™]\›ˆHOLˆO[[	‰‹™™	‰ŠOT
JJK_]˜\ˆÜÏM›VÌKËËMKÌKŒËLËMKLLKLŒËŒËMKNLKMŒÎËÌÍËMLÍKLÌLÌKŒŒMËLËLMÍKŒMÌMLKNMÌËÎŒËMÍÍÌŒMWK[L˜OLÌ‹	N[ÏVÌKK‹‹‹‹ËËËËËËËËKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹ËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËËË×NÚ
”™YXİÜŒ‹”™YXİÜYŠKK”™YXİÜŒY[˜İ[ÛŠ
^Ü™]\›ˆÎNLKK”™YXİÜŒOY[˜İ[ÛŠJ^Ü™]\›ˆ_KK”™YXİÜŒY[˜İ[ÛŠK‹Š^Ü™]\›ˆ–ŞŠÌ_KK”™YXİÜŒÏY[˜İ[ÛŠK‹Š^Ü™]\›ˆ–ŞŠÌW_KK”™YXİÜY[˜İ[ÛŠK‹Š^Ü™]\›ˆ–Ş‹LW_KK”™YXİÜOY[˜İ[ÛŠK‹Š^Ü™]\›ˆ]
]
K–ŞŠÌWJK–ŞŠÌJ_KK”™YXİÜY[˜İ[ÛŠK‹Š^Ü™]\›ˆ]
K–Ş‹LWJ_KK”™YXİÜÏY[˜İ[ÛŠK‹Š^Ü™]\›ˆ]
K–ŞŠÌJ_KK”™YXİÜY[˜İ[ÛŠK‹Š^Ü™]\›ˆ]
–Ş‹LWK–ŞŠÌJ_KK”™YXİÜOY[˜İ[ÛŠK‹Š^Ü™]\›ˆ]
–ŞŠÌK–ŞŠÌWJ_KK”™YXİÜŒLY[˜İ[ÛŠK‹Š^Ü™]\›ˆ]
]
K–Ş‹LWJK]
–ŞŠÌK–ŞŠÌWJJ_KK”™YXİÜŒLOY[˜İ[ÛŠK‹Š^İ˜\ˆOZ–ŞŠÌNÜ™]\›ˆT
OŒ	ŒMKOŒ	ŒMK
Z–Ş‹LWJOŒ	ŒMJJÔ
OŒM‰ŒMKOŒM‰ŒMKŒM‰ŒMJJÔ
O	ŒMKO	ŒMK	ŒMJJÔ
MI–KMI‘KMIšŠOÖN‘_KK”™YXİÜŒLY[˜İ[ÛŠK‹Š^İ˜\ˆOZ–ŞŠÌNÜ™]\›ŠœŠ
OŒ	ŒMJJÊOŒ	ŒMJKJ
Z–Ş‹LWJOŒ	ŒMJJOœŠ
OŒM‰ŒMJJÊOŒM‰ŒMJKJŒM‰ŒMJJOMŸœŠ
O	ŒMJJÊO	ŒMJKJ	ŒMJJOœŠ
MI‘JJÊMI–JKJMIšŠJJOŒKK”™YXİÜŒLÏY[˜İ[ÛŠK‹Š^İ˜\ˆOZ–Ş‹LWNÜ™]\›Šİ

OV]
K–ŞŠÌJJOŒ	ŒMKOŒ	ŒMJOİ
OŒM‰ŒMKOŒM‰ŒMJOMŸİ
O	ŒMKO	ŒMJOİ
MI‘KMI–JJOŒNİ˜\ˆOSK”™YXİÜYÓK”™YXİÜYO\Ü‹
”™YXİÜŒˆ‹”™YXİÜYˆŠK
”™YXİÜŒÈ‹”™YXİÜYÈŠK
”™YXİÜ‹”™YXİÜYŠK
”™YXİÜH‹”™YXİÜYHŠK
”™YXİÜˆ‹”™YXİÜYˆŠK
”™YXİÜÈ‹”™YXİÜYÈŠK
”™YXİÜ‹”™YXİÜYŠK
”™YXİÜH‹”™YXİÜYHŠK
”™YXİÜŒL‹”™YXİÜYLŠK
”™YXİÜŒLH‹”™YXİÜYLHŠK
”™YXİÜŒLˆ‹”™YXİÜYLˆŠK
”™YXİÜŒLÈ‹”™YXİÜYLÈŠNİ˜\ˆSK”™YXİÜYŞ
ÛÛÜ’[™^[™\œÙU˜[œÙ›Ü›H‹“X\T‘Ğˆ‹ŒÌ˜ˆ‹[˜İ[ÛŠJ^Ü™]\›ˆO	ŒM_K[˜İ[ÛŠJ^Ü™]\›ˆ_JK
•”ÛÛÜ’[™^[™\œÙU˜[œÙ›Ü›P[H‹“X\[H‹ˆ‹[˜İ[ÛŠJ^Ü™]\›ˆ_K[˜İ[ÛŠJ^Ü™]\›ˆO	ŒM_JNİ˜\ˆKOSKÛÛÜ’[™^[™\œÙU˜[œÙ›Ü›KSK“X\T‘Ğ‹ÏSK•”ÛÛÜ’[™^[™\œÙU˜[œÙ›Ü›P[KOSK“X\[KOSK•”™YXİÜœĞYV×NĞK›[™İLM‹
K•”™YXİÜœÏV×JK›[™İLM‹
K•”™YXİÜœĞYĞÏV×JK›[™İLM‹
K•”™YXİÜœ×ĞÏV×JK›[™İLMİ˜\ˆËËYK™K™KK™K]]İİœ‹œ‹Û‹XK˜K‹˜KÜËÛZXË]‹‹‹İ\ÊLLJK\ÊŒJKİ\ÊŒJK\ÊÍÊK]L]‹š]İ‹ZOX‹ÚOYİ‹ZLLLKİL‹LËŒMMKM‹MËNŒNKLLÒOVÌ‹Ë×KROVÌËËLWK]VÌM‹M‹M‹K’OVÌKKKKÒOVÌMËNK‹ËKM‹‹ËKLLKL‹LËMMWKOVÌËŒËK‹ÎKKŒ‹‹Î‹M‹KMKMËŒKËMNÍËËÌ‹ÌKÌËŒLËNKÌÍÍ‹KÍKL‹ŒËËKNKK‹LÍKKÍ‹KLKLKŒKL‹LËLKNÌL‹L‹Í‹L‹ËÍËLKLËLŒ‹LŒKLNKLŒKËLËMËÌKLL‹ÎLNLŒ‹ÌËËLMËLŒËKŒËNKLK‹MLM‹LKÎKM‹Ì‹NLLLMKLKKMKLML‹MËLLKLLËLËM‹LL—KÒOVÌMMMM‹MNMŒ‹MÌN‹ÌNÌ‹ÌŒL‹ÍÎNLKRON^VÍK‹ËKLLLKL‹LËMMKM‹MËMËNNKŒŒŒKŒKŒ‹Œ‹ŒËŒËKK‹ËKÌÌKÌ‹ÌËÍÍKÍ‹ÍËÍËÎÎKK‹ËK‹‹ËKLLKL‹LËMMKM‹MËNNKŒŒKŒ‹ŒËK‹ËKÌÌKÌ‹ÌËÍÍKÍ‹Í‹ÍËÎÎKK‹ËK‹ËKLKLËMKM‹NLLKL‹LL‹LLLLL‹LMLM‹LNLŒ‹LL‹LLÌLÌ‹LÍLÍ‹LÎMMËMKMMLKMMMM×KŞVÍK‹ËKLLKL‹LËMMKM‹MËNNKŒŒKŒ‹ŒËK‹ËKÌÌKÌ‹ÌËÍÍKÍ‹ÍËÎÎKK‹ËK‹ËKLLKL‹LËMMKM‹MËNŒŒ‹‹ÌÌ‹ÍÍ‹Î‹‹LL‹MM‹NLL‹LL‹LLLLL‹LMLM‹LNKLŒ‹LKLLÌKLÍLÍËMMËM‹MKML‹MMKMNMŒKMMËMÌMÌËMÍËNKNKNKNLËNMËŒKŒKŒKŒLËŒMËŒŒKŒKŒKŒÍŒÎKKKMNKKÍÎKKO[[’OVÖÌMÌËMMKÌMÍ‹MMKMLÍKKÌNMMËMKLÍLÌKÌMMËŒÌNM‹MÍËMLËMLÌËLÌLKWKROVÌKK‹Ë‹KL‹LËLËLKMMWK]VËLKLK‹L‹Ë‹LËKMMKM‹ËMËNNWKZVÖÖÖÌLLLLLLLLLLLKÌLLLLLLLLLLLKÌLLLLLLLLLLLWKÖÌLËLÍ‹MMKŒŒNKLLLLLKÌNKLK‹MKŒËŒLËMKŒNKLLLKÌL‹L‹ŒËL‹ŒMŒKMKMKLLLWKÖÌKNMKŒÍ‹Œ‹MKMKLLLKÌNKLÌËŒÎMŒŒKŒÍMKMMLLLKÍÎLÍŒ‹ËNNNMKŒNKLLLWKÖÌKNKKMKËMKLLLLLKÌNMLËMKŒÍ‹ŒLLLLLKÍÍËLLŒM‹MKŒÍ‹ŒÌLLLLLWKÖÌKLKLKMKKMKLLLLLKÌMÌLÎKKL‹ŒÍ‹ŒKMKMKLLLKÌÍËLM‹NM‹ËŒMKMKMKLLLWKÖÌKŒMMKKMKLLLLLKÌŒËMŒLMKŒÎLLLLLLKÌL‹LËŒÌKMKŒLKMÌKLLLLLWKÖÌKML‹L‹MKMKLLLLLKÌMÍËLÍKËMKŒÍŒKLLLLLKÎLKŒLKMKNMŒLLLLLWKÖÌKKMKLLLLLLLLKÌ‹KMKLLLLLLLLKÌMKLLLLLLLLLLWWKÖÖÌNNÍKŒÍËŒŒËNLËNËMŒ‹MŒMKMMKŒ—KÌLÌKKNNŒŒKMÌ‹MÍ‹ŒŒMMËL‹ŒŒKWKÍËM‹ŒMKMËŒŒKMŒ‹MKŒŒËLWKÖÌKMKKMKŒŒKŒMKMKLLLKÌNMKŒÍLËŒŒ‹ŒŒMKNNKLLLKÎKNKNK‹MÍ‹NLKŒ‹MKMKLWKÖÌKLKŒÌ‹LËŒMNMË‹NM‹MKMKLKÎNKLŒKŒLLŒKNNMKŒ‹LLLKÌŒËLKMŒË‹MÌNËËŒLMKMKLWKÖÌKŒ‹MKŒÍMKLLLLLKÌLKMÎKMKŒÌKKMKMKLLLKÍLÌŒKLËŒKNL‹MKMKLLLWKÖÌKLÌ‹ŒÎKLKŒNKŒKMKMKLLLKÎMLÍ‹ŒKLKŒNNLMKMKLLLKÌŒ‹LMÍKN‹MŒKMKNNKLLLWKÖÌKN‹KMKŒÌ‹ŒÍKLLLLLKÌLMËKMKŒËŒÍLLLLLKÌÍKÍËNKLKNLËŒLKMKŒKLLLWKÖÌKMMËËMKŒÍ‹ŒÌKMKMKLLLKÌLŒKMKŒÍKMKŒKŒËMKMKLLLKÍKNKNLKNMKŒMËMKŒLLLWKÖÌKKLKMKŒLËMKLLLLLKÌŒËKMKMKLLLLLLKÌLÍËKMÍËMKŒMKLLLLLWWKÖÖÌLËKLKŒËŒMKNL‹LLLKÌMÍKLËŒËNLËNKKNNMKMKLKÍÌËMËMÌKŒŒKMŒKMÎKŒÍ‹MËMKŒÍLWKÖÌKMKËLËŒL‹NËMKMKLLLKÌŒÎKLLŒLKŒKMKMKLLLKÌMMKÍËNMKNNMKMKMKLLLWKÖÌKŒÎKLKŒNŒNKMKŒKLLLKÌŒKLKŒNKMKNM‹N‹LLLLLKÍK‹NLŒÎKŒKŒNMKŒLLLWKÖÌKNLKLKMKMKLLLLLLKÌŒŒËMKKMKŒLËMKLLLLLKÌMKLMKMKLLLLLLWKÖÌKM‹MKMKLLLLLLKÌNLÍ‹ŒÌMKŒÍ‹MKLLLLLKÌMKKMKLLLLLLLLWKÖÌKŒ‹MKLLLLLLLLKÌËNL‹MKLLLLLLLLKÌLMKLLLLLLLLWKÖÌKLÍL‹MKMKLLLLLLKÌŒLËŒ‹LMKMKLLLLLLKÍMKLËMKLLLLLLLLWKÖÌLLLLLLLLLLLKÌLLLLLLLLLLLKÌLLLLLLLLLLLWWKÖÖÌŒ‹ŒLËŒÍKN‹NLKŒŒMŒMÍKMWKÌL‹ÎN‹ŒÌ‹MKNŒMÍMKNËLKÍŒK‹LÎŒNKMLKMÎMÌMKŒM‹LWKÖÌKLL‹ŒÌLNNKNLKËMNKMKMKLKÌM‹LKŒL‹ŒLKŒMKMKMÍLLLKÌÎKÍËMŒ‹ŒÌ‹MÌ‹NKMÎMKMKLWKÖÌKL‹ŒŒ‹NNNNKKŒŒMKMKLKÌLÍNLKËNËNLËLŒŒKMKMKLKÌÌKLÌŒNKMMMÌËN‹MKMKLWKÖÌKN‹ŒKKŒNKMKŒLLLKÌMKMLŒ‹L‹ŒM‹ŒKMKMÌKLLLKÌLMÌ‹NËNMMŒŒËMKMKLWKÖÌKKŒÌL‹ŒŒËMKNL‹LLLKÌLŒËL‹ŒKËNNM‹MKŒÌËLLLKÌŒMKMLËËMMÌËMKŒËLLLWKÖÌKŒŒ‹MKŒM‹ŒLËLLLLLKÌMMÍK‹L‹ŒÍKŒKMKMKLLLKÍËLM‹ŒMKMKŒLKŒL‹MKMKLLLWKÖÌKLŒKŒÍ‹LËŒL‹ŒMMKMKLLLKÌMKŒLËL‹ŒKŒ‹MKŒNKLLLKÍ‹MŒMŒ‹NKMKŒKLLLWKÖÌKKMKLLLLLLLLKÌKMKLLLLLLLLKÌŒÎKMKLLLLLLLLWWWKVÖÖÌŒÌKLŒKLMKLLËLŒML‹LL—KÌML‹MÎKL‹MÌLN‹ÌMWKÌMÍKKMËK‹Ì‹MMKL×KÍM‹NLMÌKŒNNKMËLËML—KÌLM‹MËMŒËNMKŒKLMÌ×KÌLŒKNMK‹Œ‹WKÌMÌKLÎMÌKŒLËMÍ—KÌMÌ‹MKNKLÍ‹MŒÌËŒ‹ÌWKÍŒËŒLMLMŒL‹KŒ—KÎKLKM‹N‹KM‹Í—WKÖÌLÍNËKLÍËNLKL‹MKMKÍÌ‹NËLLÌMMËLLKÌ‹ÍKKÍ‹L‹MËNKÍŒ‹ŒÍLKÍKLËKMÎKMK‹L×KÍÍË‹M‹ÌËM‹KŒËMM×KÍKÎLKMŒLKL‹ÌKLMKLKÌLÎKL‹ËŒMËMKËMË×KÎËÌKLMLKMKN‹Œ×KÍËKMLLN‹NËŒKMËNMKÍ‹KKL‹NMËNKŒËNŒ—WKÖÎMËML‹‹KNM‹ŒWKÍËMËNËLMËKÎÍKMÎKŒWKÌÎKLËŒË‹ŒKËŒÌ‹MÌWKÍM‹ÍLKLLML‹KLËÍ×KÌÎKKMÌKNMKLNKÌÍŒ‹LM‹Œ‹ŒËÍËM‹Ì×KÌLËMÌ‹‹LKKKËÌWKÍKL‹Œ‹MÌKÍ‹ŒKLMKÌÍNKŒKL‹LÌ‹NM‹Í‹LKÍŒ‹NÎMKKMËLLWWKÖÌNLËLKÍKMNKŒMKLLKK‹LLWKÍŒMÌKMÌ‹ŒNKŒŒKNLLWKÌLL‹LLËÍËKMÎKMKÎLŒLMKÍ‹KNM‹KŒKLKLWKÎËKMM‹ŒLËÍËËMMKÍŒKŒËÌMMKËKKŒWKÌLËMMKLK‹ÌWKÌM‹ÎÎM‹MKLÍNMËMÌWKÍKKL‹ŒLKNËKŒŒWKÍLKLMËMŒKNL‹ŒËK—WKÖÌLÎÌKÍ‹MÌKËM‹ÎŒWKÍËËNMK‹LMK‹NKMÎWKÍŒËNKLNNKM‹LËÌËMMKÍŒKLM‹MËŒKÍÎKMÍWKÍËMKM‹NËÍŒŒËKKN×KÍ‹MËÌËNË‹NMKÌ‹N×KÍMË‹Œ‹LKMMËÍ×KÍKÌ‹ÌËLMKLŒËLŒWKÍËKLMKLKNL‹N‹ŒŒ×KÎËÍËKLMKNKÍËŒK×WKÖÌLMKŒNKMLËLÌŒ—KÍLÌŒKKŒË‹M×KÍMMËLL‹NKKÎM‹ŒL×KÌÌÍ‹LÌËML‹LM‹LÌ‹LÍKÌÎKNKLËŒŒK‹LMÌ‹ÌËMWKÌÌKKKŒÍ‹MKKLNÌ×KÍÍKÌ‹L‹LKNL‹MKMŒËLWKÎÌKÍKËL‹KMKN‹WKÍM‹ŒKŒËLLKNKŒKKÍËNL—KÍMKÎÌLÌËL‹KÍNWKÖÌLKN‹LKLMËMÍK—KÎMKLËKLLLLËLKWKÍÍKÎKLŒËËLKLKMÌKWKÍMËMËKÌKL‹MËLËKWKÌÎÌËLËLŒKMËÌË‹KWKÍKLËLÎÍËLLLËLMKÌLMKŒK‹LL‹MKM‹ŒË—KÌLKKM‹LKLLKNM‹—KÍMËNLL‹L‹ŒLËÍŒ×KÌLMËŒMKÍ‹MŒËLK—WKÖÌL‹ŒKÌKÍËÍLËÌKËNL—KÍKŒÌKÎÌËLNKŒŒ‹Í×KÍKLÍKËLKKMÌWKÍŒ‹MËNKÌM‹KMKŒ‹ÌKÌÍËËÍËMMLMŒËKMŒWKÍŒËKL‹LÍ‹Ì‹ŒKWKÍÍKMKKKMKNLNKM—KÎ‹‹KMKKWKÍM‹MËLÌ‹LÍËMKMKLM‹LKÍNMKŒ‹LÍKMË‹LŒKWKÖÌMLÌKLÍËMMLÌËKÍKŒNKÍLKLËLÌKLÌKLŒËÌK‹MNKÎ‹LÍKMŒKNËLKÌŒ‹‹MËLÌKMMMKŒWKÍKM‹ŒKLKŒŒ‹ËKNM×KÍM‹ŒKÎKMMKŒLÎŒËL‹ŒL×KÎËL‹LËMNL‹MKËKÎK‹KKLLÌ‹M‹MÌWKÌNLKËŒËMMÌK—KÌÍKËLM‹MÍMÌKL‹‹LWKÖÌNLÍKNKNL‹MWKÎKL‹ËËMÍ‹LKKŒÌ—KÌLKÍKLLÎKLNM‹LM‹LWKÍM‹KMKMÍ‹ŒÍ‹KÍËKŒ—KÍÌKÌMËLNKLNMKMËNLÎKÌLKÎŒLÎMKÌË‹M—KÌM‹Í‹NKÌMÌKMKMËËŒKÌLÎKŒKŒ‹ŒNKKKNKÌÌ‹KŒLMËMLKM‹ŒŒKMŒ×KÌLL‹NKL‹ŒKNMKLWWKšVÖÖÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMÍ‹‹MKMKMKMKMKMKMKMKMWKÌŒŒËKL‹MKMKMKMKMKMKMKMWKÌKLËLËMKMKMKMKMKMKMKMWWKÖÌMKL‹MKMKMKMKMKMKMKMWKÌŒÍMMMKMKMKMKMKMKMKMWKÌLËMKMKMKMKMKMKMKMKMKMWWKÖÌMK‹MMKMKMKMKMKMKMKMWKÌŒÎKLËMMKMKMKMKMKMKMKMWKÌMMKMMKMKMKMKMKMKMKMWWKÖÌMKMMKMKMKMKMKMKMKMWKÌLKMKMMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKLËMMKMKMKMKMKMKMKMWKÌLKMMMKMKMKMKMKMKMKMWKÌMMKMMKMKMKMKMKMKMKMWWKÖÌMKMLËMKMMKMKMKMKMKMWKÌLMKMMKMMKMKMKMKMKMWKÌMMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWWKÖÖÌŒMËMKMKMKMKMKMKMKMKMKMWKÌŒKL‹KLËMKMKMMKMKMKMWKÌŒÍLKLLËMKLËMMKMKMWWKÖÌMKMMKMKMKMKMKMKMKMKMWKÌŒŒËMMMKMKMKMKMKMKMKMWKÌŒÎLËMMMKMKMKMKMKMKMWWKÖÌMKMMKMKMKMKMKMKMKMWKÌKMMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKLËMKMKMKMKMKMKMKMKMWKÌËMMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKLËMMKMKMKMKMKMKMKMWKÌL‹MKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMMMKMKMKMKMKMKMKMWKÌLËMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMLËMKMKMKMKMKMKMKMWKÌLMKMKMKMKMKMKMKMKMKMWKÌMMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWWKÖÖÌN‹LKLMKMKMKMKMKMKMKMWKÌŒÍLKMMKMKMKMKMKMKMWKÌLKLKËLËMMKMMKMKMKMWWKÖÌMKLËMMKMKMKMKMKMKMKMWKÌŒÍ‹LËMMKMKMKMKMKMKMKMWKÌLKLËLËMMMKMKMKMKMKMWWKÖÌMKMMMKMKMKMKMKMKMKMWKÌMMMMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMMKMKMKMKMKMKMKMKMWKÌMMMKMKMKMKMKMKMKMKMWKÌMMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWWKÖÖÌMKMKMKMKMKMKMKMKMKMWKÌLML‹MMKMKMKMKMKMKMWKÌMKLËMKMKMKMKMKMKMWWKÖÌMKLËLËMKMKMKMKMKMKMKMWKÌ‹LËLËMKMKMKMKMKMKMKMWKÌL‹MLKMMMKMKMKMKMKMWWKÖÌMKML‹MKMKMKMKMKMKMKMWKÌMLËMKMKMKMKMKMKMKMWKÌLËMKMMMKMKMKMKMKMKMWWKÖÌMKLKMMKMKMKMKMKMKMKMWKÌKLKMMKMKMKMKMKMKMKMWKÌLËLËMMKMKMKMKMKMKMKMWWKÖÌMKLKLËMKMKMKMKMKMKMKMWKÌL‹LËMMKMKMKMKMKMKMKMWKÌMKMMKMKMKMKMKMKMKMKMWWKÖÌMKL‹MKMKMKMKMKMKMKMKMWKÌKMKMMKMKMKMKMKMKMKMWKÌMKMKMMKMKMKMKMKMKMKMWWKÖÌMKMKLËMKMKMKMKMKMKMKMWKÌLMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWKÖÌMKMKMKMKMKMKMKMKMKMKMWKÌMMKMKMKMKMKMKMKMKMKMWKÌMKMKMKMKMKMKMKMKMKMKMWWWWKšVÌK‹Ë‹K‹‹‹‹‹‹‹‹ËKLV×K[ÏV×K	V×KZLKİL‹LV×KZOV×NÓŠ•\Ø[\T™Ø“[™TZ\ˆ‹ÊKŠ•\Ø[\P™Ü“[™TZ\ˆ‹ÚKÊKŠ•\Ø[\T™Ø˜S[™TZ\ˆ‹ZK
KŠ•\Ø[\P™Ü˜S[™TZ\ˆ‹›
KŠ•\Ø[\P\™Ø“[™TZ\ˆ‹šK
KŠ•\Ø[\T™Ø˜M[™TZ\ˆ‹XKŠKŠ•\Ø[\T™ØMS[™TZ\ˆ‹›ŠNİ˜\ˆÚSK•\Ø[\T™Ø“[™TZ\‹ZSK•\Ø[\P™Ü“[™TZ\‹İSK•\Ø[\T™Ø˜S[™TZ\‹İSK•\Ø[\P™Ü˜S[™TZ\‹SK•\Ø[\P\™Ø“[™TZ\‹]SK•\Ø[\T™Ø˜M[™TZ\‹ÚSK•\Ø[\T™ØMS[™TZ\‹LLM‹ÌLOL‹LKLOKLŒËM‹M‹JMŠKLKLÚ\ÊMŠK\ÊMŠKZ\ÊMŠKš\ÊMŠK\ÊRLJKZ\ÊRLJNÕ\Ê–]]•Ô™Ø”›İÈ‹ÊK\Ê–]]•Ğ™Ü”›İÈ‹ÚKÊK\Ê–]]•Ô™Ø˜T›İÈ‹ZK
K\Ê–]]•Ğ™Ü˜T›İÈ‹›
K\Ê–]]•Ğ\™Ø”›İÈ‹šK
K\Ê–]]•Ô™Ø˜M›İÈ‹XKŠK\Ê–]]•Ô™ØMT›İÈ‹›ŠNİ˜\ˆVÌL‹LLÌ‹LÍ‹MM‹ŒÎÎÎL‹ÎM—KLVÌ‹KVÎË‹‹‹‹KKKWKLNİ\Ë•ÙX”XÛÙT‘ĞOY[˜İ[ÛŠK‹‹KYJ^İ˜\ˆÙOYL‹YO[™]ÈÙKYO[™]ÈŞYK˜˜OQYKYK”Ï]ÙKYKÚYVÑYKÚYKYKšZYÚVÑYKšZYÚNİ˜\ˆÙOQYKÚY™OQYKšZYÚ[™]ÈÚYŠO[[OO[[
]˜\ˆ]LÙ[ÙH
O[[
K]V
K‹‹ÚYšZYÚ””Y™›Ü›X][
NÚYŠ]OLÚÙOLŠÙHO[[	‰ŠÙVÌO\ÚYÌJK™HO[[	‰Š™VÌO\šZYÚÌJKÙOLJKÙJ^ÑYKÚYQYKÚYÌKYKšZYÚQYKšZYÚÌKHO[[	‰ŠVÌOQYKÚY
KYHO[[	‰ŠYVÌOQYKšZYÚ
NÙNÚYŠO[™]È[‹
YO[™]Èİ
K™]OQKYKÏZ‹YKšO^‹YKšÙLKVÌK
YHO[[
K

OV
YK™]KYKËYKšK[[[‹[YJJOOLOOMÊI‰š–ÌI‰ŠOM
K
QJOOL
^ÚYŠ
YHO[[
KK™]O[YK™]KKÏ[YKÊÛYK›Ù™œÙ]KšO[YKšK[YK›Ù™œÙ]Kœ]WİK˜XÏQÙKK˜˜ÏVK›XO^YKYKJ^ÚYŠ
OV™J
JOO[[
^ŞYOLNØœ™XZÈ_ZYŠ[˜İ[ÛŠK]
^İ˜\ˆVÌK]VÌK]VÌNİ™›ÜŠÎÊ^ÚYŠOO[[
\™]\›ˆÚYŠ]O[[
\™]\›ˆK˜OL‹ÚYŠK›Z]K˜OL
K›K]™]K]Ë]šJKSYJK›K]]
J^ÔK˜OLÎØœ™XZÈZYŠKTİ‹]ÚY]ÌK]šZYÚS]ÌK^™JÌK]ÌKKK[
JXœ™XZÈÜ™]\›ˆ_\™]\›ˆ
K˜HOL
KJKJJ^ÚYŠOJSŒ
KÚYKšZYÚYK“ØKYK˜˜JJOOL
^İÖOQNÜ™›ÜŠÎÊ^ÚYŠOO[[
^ÖOLØœ™XZÈZYŠ
KœËXÈO[[
K
KœË–XHO[[
K
KœË•ØŠK

VK›
HO[[
K

YO^‹›XJHO[[
KKˆOL
^ÚYŠK˜ØO[YK˜˜KK[YK‹
K˜ØHO[[
K^\ÊYK“ØK‹ŠJ^ÖK˜OLØœ™XZÈŸZYŠIJK‹ÚY
_‹™JXœ™XZÈÚYŠ
‹™_
K˜ØK”ÊJI‰’Š
KLO–K˜ØK”ß
[\
ÙÎ•ÙX”[š]ÛÛ™\T‘Ğ•ÖUUˆŠKK˜ØK™‹šØ‹‘ˆO[[	‰’Š
JKK”‰‰ŒKœËXI‰–KœË˜‹–O[[	‰ˆYÙJKœË˜‹KœË•ØK–JJ^ÖK˜OLNØœ™XZÈŸVKLZYŠU™JKK•‹K˜KK˜ËKšK‹›Ë™JJXœ™XZÈÛYK‘ÏVK“XKOLNØœ™XZÈ]
K˜HOL
KOLVOHV_VI‰ŠQK˜J_Y[ÙHQK˜_Y[Ù^ÚYŠ
O[™]ÈJOO[[
^ŞYOLNØœ™XZÈ_ZYŠK‘˜O[YK›˜KK”[YK”KœXÏ[YK”ØKXJKJJ^ÚYŠ
SŒ
KÚYKšZYÚYK“ØKYK˜˜JJOOL
^ÚYŠKXOL^YK“ØK

YOQJHO[[
KˆO[[
^ÚYŠ
ÙOLŠÙO^‹“Y
OÌŒLÙOÌMNŒMJšÙKÌL
J^Ù›ÜŠ™O\LÍ”™NÊÊÔ™JLLŠ][YKœ–Ô™WJK›É‰Š]šXOZÙJœ–Ì]›ÏÌ]›×OŒÊKP]šXNÜ	‰Š[\
ÙÎ•”[š]˜[™ÛHŠKYKšXOLJ_[YK‘ØO^‹’YLYK‘ØOÛYK‘ØOLLŒ›YK‘ØI‰ŠYK‘ØOL
_J[˜İ[ÛŠK]
^ÚYŠOO[[
\™]\›ˆÚYŠ]O[[
\™]\›ˆŠK‹“•S”[È\˜[Y]\ˆ[ˆ”XÛÙJ
KˆŠNÚYŠTK˜Ø‰‰ˆ^XJK]
J\™]\›ˆÚYŠ
K˜ØŠK]˜XÏO[[]˜XÊ]
J^Ú]›Ø‰‰ŠK“L
Nİ˜\ˆZL–ÔK“NÚYŠK“OLÊKXLK˜L
NŠKXZ]‹]K˜Z]š‹]”KX‰‰ŠKXL
K”K˜‰‰ŠK˜L
JKK•˜OZ]›ÊÌMJİK’Z]˜JÌMJİK’”K˜I‰ŠK’TK˜JKK•˜O”K•X‰‰ŠK•˜OTK•XŠKK“
^İ˜\ˆ]TK™YÙ›ÜŠLÍÊÊİ
^İ˜\ˆ]ÚYŠK”XKØŠ^İ˜\ˆ	TK”XK“–İNÔK”XK‘˜Ÿ
	
ÏS]•Š_Y[ÙH	S]•Ù›ÜŠ]LÌO^]ÊÊŞ]
^İ˜\ˆTK™ÙİVŞ]K]IÚYŠ]”É‰Š]
ÏS]™ÌK]	‰Š]
ÏS]›ÙÌJJK
]L”]ÌŒÏ]ÍŒÎ”]
J^İ˜\ˆİT]Ì]Ø‰‰ŠİM]ØÑİŒ‘İŒJOKS]Ø‰‰ŠİNKS]ØŠKO‘İ	‰ŠİLJK™QİÏLŠ”]
Ñİ›MT]ÌŒMOT]ÌNŒY[ÙHÏLĞ“O^]__]LY[ÙHŠK‹‘œ˜[YHÙ]\˜Z[YŠKTK˜NÚYŠ]OL
^ÚYŠ
^ÔK‰ÏLKX_
K’XÏ^ŠNİİTK’XË]M
ŠİTK˜JNİ˜\ˆLÌŠ‘İQİ
ÌK\LK“Ñİ
ŠKXOÌŒJNŒÜJKXOOLÌŒJJ‘İÚYŠ
S]
ÎÌŠÊ]LÊŠMŠ
ÚL–ÔK“JKÌŠ•ŠJÊ	TK‘˜HO[[	‰ŒK‘˜K›[™İÔK’ØË˜Ê”K’ØËšNŒ
JHOP
]LÙ[Ù^ÚYŠ”K•˜Š^ÚYŠK•˜LK‘XÏ\Ê
KK‘˜ÏLK‘XÏO[[
^İTŠKK››ÈY[[ÜH\š[™Èœ˜[YH[š]X[^˜][Û‹ˆŠNØœ™XZÈTK•˜PPTK‘XË]TK‘˜ËKXÏPK˜ÏT]]
ÏS]K‘Ù[Ê‹\ŠKK’LKœ˜[ÊŠÌKœŠKKœØLKKØOT\ÛÊ\‹ÜŠN›[K–OLK‘“˜LK‘ØOTKØKK‘–OTK–KKXI‰ŠK‘–JÏQİ
K
L
KK›ØÏPKœÏT]]
ÏNÌ‹KXO[ÊÜ‹\ŠKK˜XOLK‘XOTKXKK‘˜XOTK˜XKKXOOL‰‰ŠK‘˜XJÏQİ
KK”LMŠ‘İKN
‘İİJZL–ÔK“JJ”K”‹U‹ÌŠ”K‹KœØOPKOT]
ÑİKœXOTKœØKKœ˜OTKJÌMŠ
”K”ŠÕ‹K’OTKœXKK’XOTKœ˜JÎ

”KŠÕ‹K‰ÏL]
Ï^]K›XIĞ›[K›˜IÔ]›[
]
ÉTK‘˜ÊÔK•˜ŠKØJJKJKXËK˜Ë]
KL__ZYŠ
^ÚYŠ]šØOL]OTKœØK]“ÏTKK]™TKœXK]“TKœ˜K]™XOTK’K]•™TK’XK]™˜OTK”‹]”˜ÏTK‹]‘[[]’L^]Š^Ù›ÜŠKLMNÌMO]ÊÊİ
Yİ–ÌMJİOLË]Ù›ÜŠKLLŒÌLŒ]ÊÊİ
]–ÌLŒ
İOKLLËLLŒLÏÌLÎÙ›ÜŠKLLLÌLL]ÊÊİ
]İ–ÌLLŠİOKLMËLMŒMOÌMNÙ›ÜŠKLMNÍLL]ÊÊİ
X–ÌMJİOLÌŒMOÌMNŞ]L_VOUÙ™OUKYÜ‹]YKİ\˜K]]]İXšKœQÙœ]XKÛP‹XOR]˜OU\‹ZK˜ORYKÜÏXŒÛZØË^LZ[[‹[ÖÌOZÌK[ÖÌWOUXK[ÖÌ—OQÚK[ÖÌ×OS\‹[ÖÍO^œ‹[ÖÍWO]›Ë[ÖÍ—OWØK[ÖÍ×O]ÚK[ÖÎO]ÛË[ÖÎWOV™LÌOZÛLÌWOZ›‹LÌ—O\YLÌ×OTÌKLÍOVšKLÍWOPÌKLÍ—OSÛ‹	ÌOU	ÌWOZÜ‹	Ì—OYÌ	Ì×OX›Ë	ÍOZ›	ÍWOR[	Í—O^[ËL_Y[ÙHL]	‰ŠY[˜İ[ÛŠÛ‹˜J^Ù›ÜŠÛ‹“OLÜÛ‹“OÛ‹•˜NÊÊÜÛ‹“J^İ˜\ˆ[‹œ\Û‹’˜ÖÜÛ‹“IœÛ‹–—K\Û‹›KXO\ÛÙ›ÜŠ[LÙ[XK˜NÊÊÙ[Š^İ˜\ˆœ[‹[QXK›][‹XËÏ][‹˜ÊÍ
™[‹œÏ][‹˜ËO][‹XVİ[‹˜XJÙ[—NÚYŠ[‹”XK˜ÚK‰SÙJœ‹[‹”Kš˜–ÌJOÌŠÓÙJœ‹[‹”Kš˜–Ì—JN“ÙJœ‹[‹”Kš˜–ÌWJNšK‰L[‹šØÉ‰ŠKYSÙJœ‹[‹™
JKK–˜OHSÙJœ‹MJJÌK–˜J^İ˜\ˆœÏZK“Ø‹ÏLÙ›ÜŠ[LÍ[ÊÊİ[Š^İ˜\ˆKUœÖÌ
İ[—NÙ›ÜŠOLÍ’NÊÊÒJ^Ş]–Ş›–ÛÊÒWWVŞ—NÙ›ÜŠ˜\ˆ[Q]–ÓÙJœ‹–ÌJWNÌ[ÊP[Q]–ÌŠ[ŠÓÙJœ‹–Ğ[—JWNŞKP[‹›–ÛÊÒWO^Ÿ[ŠœËË›‹Ë
KÊÏMœÖÌ
İ[—O^Ÿ_Y[ÙHSÙJœ‹MMŠOÓÙJœ‹L
OÌNŒÎ“ÙJœ‹MŒÊOÌŒK“Ø–ÌO^‹J›‹Ë‹
KJœË‹
NÚK‘SÙJœ‹MŠOÓÙJœ‹LM
OÓÙJœ‹NÊOÌNŒÎŒŒZYŠXK›K’ØJ\™]\›ˆŠÛ‹Ë”™[X]\™H[™[Ù‹\\][ÛŒ[˜Ûİ[\™YˆŠNÙ›ÜŠÜÛ‹š˜OÛ‹˜NÊÊÜÛ‹š˜J^ÚYŠXOSœ‹œJ\ÛŠKœ˜–Û‹œØ‹LWK›[‹œ˜–Û‹œØŠÛ‹š˜WK[[‹XVÛ‹˜XJÛ‹š˜WKÏ[‹šØÏÙ[‹YŒ
Vœ‹›O^›‹›OL[‹–˜_
œ‹“˜O^›‹“˜OL
K[‹’ÏL[‹‘ØÏL[‹šXOLÙ[Ù^İ˜\ˆXK[ÚYŠœ^›‹›QXKÏ[‹”K–ËœÏ[‹XVÛ‹˜XJÛ‹š˜WKO[‹œ–ÕœË‰—K[UœË˜YœÏLÏ[‹œ˜–Û‹œØ‹LWKROLJ[‹œËÎ
KœË–˜J]˜\ˆÜÏLÛÏ[ÖÌ×NÙ[Ù^Ğ[\ÊMŠNİ˜\ˆØOVœ‹“˜JÒË“˜NÚYŠØOUJ›‹ÖÌWKØKK‘X‹[‹
Kœ‹“˜ORË“˜OJØJJÌOØJVJ[‹[‹œÊNÙ[Ù^İ˜\ˆÚOP[–ÌJÌÏŒÎÙ›ÜŠ[LÌM[Ğ[ŠÏLMŠ][–ÓœÊĞ[—O\Ú_XÜÏLKÛÏ[ÖÌ_]˜\ˆ›LMI–œ‹›K˜OLMI’Ë›NÙ›ÜŠ[LÍ[ÊÊĞ[Š^İ˜\ˆZOLI˜NÙ›ÜŠÚOQ[LÍœÚNÊÊÜÚJT›T›Œ_
ZOJØOUJ›‹ÛËØOQZJÊI”›ŠKK”ØËÜË[‹œÊJO˜ÜÊOË[Q[Ÿ
ÏØOÌÎŒOØOÌ[–ÓœÊÌHOL
KœÊÏLMÔ›M˜O^˜OŒ_ZOËOJO[ŠOŒY›ÜŠÛÏT›‹ÜÏ^˜OXOLÍ›XNÛXJÏLŠ^Ù›ÜŠ[L›Vœ‹›O
ÛXK˜ORË›O
ÛXK[LÌ[ÊÊĞ[Š^Ù›ÜŠZOLI˜KÚOLÌœÚNÊÊÜÚJTØOQZJÊI”›ŠK›T›Œ_
ZOL
ØOUJ›‹ÖÌ—KØKK”XË[‹œÊJJOË[Q[Ÿ
ÏØOÌÎŒOØOÌ[–ÓœÊÌHOL
KœÊÏLMÔ›L‹˜O^˜OŒ_ZO_^ŸQ[
›XKÛßT›XKÜßJ	˜JOX_Vœ‹›OTÛËË›OXÜËœË’ÏRKœË‘ØÏ^‹œËšXOMÍL	ÌšKšXKÏHJ_Š_ZYŠ‹“	‰Š‹ØVÛ‹–JÛ‹š˜WO[‹™ÙÙ[‹‰—VÙ[‹–˜WK‹ØVÛ‹–JÛ‹š˜WK“_H[ÊKXK’ØJ\™]\›ˆŠÛ‹Ë”™[X]\™H[™[Ù‹Yš[H[˜Ûİ[\™YˆŠ_ZYŠØJÛŠKU˜KXOLK[Jœ\ÛŠK‘œLœ‹“	‰“œ‹“OSœ‹˜‰‰“œ‹“OSœ‹•˜Kœ‹XOOL
]ÚYŠ[‹“OSœ‹“K[‹XÏVœ‹\Êœ‹[ŠKXOLK[J[Sœ‹‘
K“˜‹œJZL–Óœ‹“JJ“œ‹”‹›^‹ÌŠ“œ‹‹[LMŠ™[Š“œ‹”‹ÚON
™[Š“œ‹‹ÏSœ‹œØKœÏSœ‹KVœŠĞ[‹OSœ‹œXK[Sœ‹œ˜K^›ŠÜÚKœÏSœ‹’KÏSœ‹’XK^›ŠÜÚK˜OJ›Q[‹“JOOLOT›Sœ‹•˜KLKœ‹XOOL‰‰š\Êœ‹[ŠK[‹XÊY›ÜŠZOJØOSœŠK‘“K
ØK‘XÊK[TØKXÑ[ØK’ÊÊÑ[Š^ØÜÏQ[‹ÛÏQZNİ˜\ˆœÏJÚOJÏTØJK‘
K“˜ÛXOYË”İ˜\ˆÚOTÚKØVÔÚK–JØÜ×KÚOYËœØKZOYËJÌMŠœÊ›XJÌMŠ˜ÜËÚOTÚK™TÚKÎÚYŠˆOL
ZYŠ
ÏQŠKË“OLJLÜÉ‰“Û
ÚKZKXKŠÍ
KÚK“I‰–Z
ÚKZKXKŠKÛÉ‰—ÜÊÚKZKXKŠÍ
KÚK“I‰‘
ÚKZKXKŠNÙ[Ù^İ˜\ˆOYË‹ÛÏYËœXK˜ÏYËœ˜JÎ
œÊ•JÎ
˜ÜË›YË’KÏYË’XJÎ
œÊ•JÎ
˜ÜÎŞœÏTÚK›ÜÉ‰ŠœŠÚKZKXKŠÍÚKœÊKÛŠÛË˜Ë›ËKŠÍÚKœÊJKÚK“I‰Š˜JÚKZKXK‹ÚKœÊK˜JÛË˜Ë›ËK‹ÚKœÊJKÛÉ‰Šİ
ÚKZKXKŠÍÚKœÊKœŠÛË˜Ë›ËKŠÍÚKœÊJKÚK“I‰ŠXJÚKZKXK‹ÚKœÊKŠÛË˜Ë›ËK‹ÚKœÊJ__ZYŠœ‹šXI‰˜[\
ÙÎ‘]\”›İÈŠK‹œ]O[[
^ÚYŠ[LMŠ”›‹›LMŠŠ›ŠÌJK˜OÊ‹OSœ‹œØK‹“ÏSœ‹JĞ[‹‹™Sœ‹œXK‹“Sœ‹œ˜JÜÚK‹™XOSœ‹’K‹•ÏSœ‹’XJÜÚJNŠ[‹O^‹‹O[Ë‹“ÏUœË‹™ZK‹“][‹‹™XOSœË‹•ÏRÊK_
›‹O^ŠK››‹›É‰Š›[‹›ÊK‹‘[[‹’[[œ‹‘˜HO[[	‰Œœ‹‘˜K›[™İ	‰‘[›‰‰Š‹’]\Šœ‹‹[‹›‹Q[ŠK‹‘Sœ‹›X‹‹‘O[[	‰›‹‘‹›[™İOL
J^ÑXOTŠœ‹ËÛİ[›İXÛÙH[H]KˆŠNØœ™XZÈQ[‹š‰‰Š[‹š‹Q[‹[[‹š‹
JIŠJK‹“ÊÏSœ‹”Š‹‹“ŠÏSœ‹ŠŠŒJK‹•ÊÏSœ‹ŠŠŒJK‹‘ˆO[[	‰Š‹’ŠÏ[‹ÚY
ŠJK[›‰‰Š‹“ÊÏ[‹‹‹“ŠÏ[‹ŒK‹•ÊÏ[‹ŒK‹‘ˆO[[	‰Š‹’ŠÏ[‹ŠK‹šØOQ[‹[‹š‹‹•O[‹˜K[‹‹‹•T›‹Q[‹XO[‹œ]
ŠJ_Y[ŠÌHOSœ‹’Xß_
Šœ‹œØKœ‹KVœ‹ËœÊÌMŠ“œ‹”‹œŠKŠœ‹œXKœ‹œ˜K^›‹K[ŠÎ
“œ‹‹›ŠKŠœ‹’Kœ‹’XK^›‹œËÊÎ
“œ‹‹›ŠJ_ZYŠQXJ\™]\›ˆŠÛ‹‹“İ]]X›ÜYˆŠ_\™]\›ˆ_JK]
JK]˜˜ÈO[[	‰š]˜˜Ê]
K	L_\™]\›ˆÊK˜ØL
NŒJJKJ_
QK˜J__Y[ÙHQK˜_ZOL	‰YK“ØHO[[	‰YK“ØK™™	‰ŠT
YK˜˜JJ_^YOZŸ]ÙO^YHOLÛ[ŒLOÙOÑYK™‹”‘ĞK™X‘YK™‹šØ‹_Y[ÙHÙO[[Ü™]\›ˆÙ_Nİ˜\ˆVÌËË‹‹‹KW_NÙ[˜İ[ÛˆŠKÊ^Ù›ÜŠ˜\ˆHˆ‹LÒÒ
ÊÊQ
ÏTİš[™Ë™œ›ÛPÚ\ÛÙJVÕÊÊ×JNÜ™]\›ˆY[˜İ[Ûˆ
KÊ^Ü™]\›ˆVÕÊÌ_VÕÊÌWOY[˜İ[Ûˆ
KÊ^Ü™]\›ŠVÕÊÌ_VÕÊÌWOVÕÊÌ—OMŠOŒY[˜İ[ÛˆŠKÊ^Ü™]\›ŠVÕÊÌ_VÕÊÌWOVÕÊÌ—OMŸVÕÊÌ×O
OŒ[™]Èİ˜\ˆÏVÌKÏVÌKV×KÏ[™]ÈÏYKY[˜İ[ÛŠKÊ^İ˜\ˆ^ßKLOHLKOLYOLÚYŠ™œ˜[Y\ÏV×KY[˜İ[ÛŠ‹Š^Ù›ÜŠ˜\ˆLÖÖŠÊÊZYŠ–ÒŠÖ—HOH”’Q‘ˆ‹˜Ú\ÛÙP]
ŠJ\™]\›ˆLÜ™]\›ˆL_JKÊJ^Ù›ÜŠŠKÊÏM
KÊÏNÕÏK›[™İÊ^İ˜\ˆOYŠKÊK™OXŠKÊÏM
NÕÊÏMİ˜\ˆOX™JÊI˜™JNÜİÚ]Ú
J^ØØ\ÙH•”˜Ø\ÙH•”‘™œ˜[Y\ÖÒOOO]›ÚY	‰Š™œ˜[Y\ÖÒO^ßJK
ÙOQ™œ˜[Y\ÖÒJKœÜ˜×ÛÙ™TOØYN•ËNÙKœÜ˜×ÜÚ^™O[JØ™JÎ
ÊËI‰ŠOHLKOLYOL
NØœ™XZÎØØ\ÙH•”ŠÙOQšXY\^ßJK™™X]\™WÙ›YÜÏSVÕ×Nİ˜\ˆUÊÍ×ÙK˜Ø[˜\×İÚYLJŞ
K
K
ÏLËÙK˜Ø[˜\×ÚZYÚLJŞ
K
K
ÏLÎØœ™XZÎØØ\ÙHS”OHLO]JÎYOUËNØœ™XZÎØØ\ÙHS’SHŠÙOQšXY\ŠK˜™ØÛÛÜXŠKÊKUÊÍÙK›ÛÜØÛİ[Z
K
K
ÏLØœ™XZÎØØ\ÙHS“Qˆ˜\ˆ™KÙNÊÙOQ™œ˜[Y\ÖÒO^ßJK›Ù™œÙ]ŞLŠ
KÊKÊÏLËÙK›Ù™œÙ]ŞOLŠ
KÊKÊÏLËÙKÚYLJŞ
KÊKÊÏLËÙKšZYÚLJŞ
KÊKÊÏLËÙK™\˜][Û^
KÊKÊÏLË™OSVÕÊÊ×KÙK™\ÜÜÙOLI“™KÙK˜›[™S™OŒIŒ_\HOHS“Qˆ‰‰ŠÊÏ]J_\™]\›ˆ_JË
NÕœ™\ÜÛœÙOZËœ™Ø˜[İ]]HL™]]\›HLNİ˜\ˆÏUšXY\ÕšXY\›[U™œ˜[Y\ÏÕ™œ˜[Y\Î›[ÚYŠÊ^ĞË›ÛÜØÛİ[\PË›ÛÜØÛİ[ÏVĞË˜Ø[˜\×ÚZYÚKÏVĞË˜Ø[˜\×İÚYNÙ›ÜŠ˜\ˆLÕ‹›[™İ	‰”–Õ—K˜›[™OLÕŠÊÊNß]˜\ˆT–ÌKOTË•ÙX”XÛÙT‘ĞJËœÜ˜×ÛÙ™‹œÜ˜×ÜÚ^™KËÊNÔœ™Ø˜ORKš[YİÚYWÖÌKš[YÚZYÚ]ÖÌNÙ›ÜŠ˜\ˆOLÕOÖÌJÖÌJÕJÊÊS–ÕWORVÕWNÜ™]\›ˆ\ËÚYWË\ËšZYÚ]Ë\Ë™]OS‹\ßKÊŠˆOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOBˆ
ˆXÙ[œÙBˆ
ˆœÔˆTY]Y]HYÚ[‚ˆ
ˆÛÜ\šYÚ
ÊHŒMˆ\ÜÚH][™[‹KZ\ÜÚPİ[ÛZL™šBˆ
‚ˆ
ˆ\›Z\ÜÚ[Ûˆ\È\™XHÜ˜[Yœ™YHÙˆÚ\™ÙKÈ[H\œÛÛˆØZ[š[™Âˆ
ˆHÛÜHÙˆ\ÈÛÙØ\™H[™\ÜÛØÚX]YØİ[Y[][Ûˆš[\È
Bˆ
ˆ”ÛÙØ\™HŠKÈX[[ˆHÛÙØ\™HÚ]İ]™\İšXİ[Û‹[˜ÛY[™Âˆ
ˆÚ]İ][Z]][ÛˆHšYÚÈÈ\ÙKÛÜK[ÙYKY\™ÙKX›\Úˆ
ˆ\İšX]KİX›XÙ[œÙK[™ÛÜˆÙ[ÛÜY\ÈÙˆHÛÙØ\™K[™Âˆ
ˆ\›Z]\œÛÛœÈÈÚÛHHÛÙØ\™H\È\›š\ÚYÈÈÛËİXš™XİÂˆ
ˆH›ÛİÚ[™ÈÛÛ™][ÛœÎ‚ˆ
‚ˆ
ˆHX›İ™HÛÜ\šYÚ›İXÙH[™\È\›Z\ÜÚ[Ûˆ›İXÙHÚ[™Bˆ
ˆ[˜ÛYY[ˆ[ÛÜY\ÈÜˆİXœİ[X[Ü[ÛœÈÙˆHÛÙØ\™K‚ˆ
‚ˆ
ˆHÓÑ•ĞT‘HTÈ“Õ’QQTÈTÈ‹ÒUÕUĞT”S•HÑˆS–HÒS‘ˆ
ˆV‘TÔÈÔˆSTQQSÓQS‘È•U“ÕSRUQÈHĞT”S•QTÈÑ‚ˆ
ˆQTÒS•P’SUK’U‘TÔÈ“ÔˆHT•PÕSTˆT”ÔÑHS‘ˆ
ˆ“Ó’S‘”’S‘ÑSQS•ˆSˆ“ÈU‘S•ÒSHUUÔ”ÈÔˆÓÔT’QÒÓT”È‘Bˆ
ˆPP“H“ÔˆS–HÓRSKSPQÑTÈÔˆÕTˆPP’SUKÒUTˆSˆSˆPÕSÓ‚ˆ
ˆÑˆÓÓ•PÕÔ•ÔˆÕT•ÒTÑKT’TÒS‘È”“ÓKÕUÑˆÔˆSˆÓÓ“‘PÕSÓ‚ˆ
ˆÒUHÓÑ•ĞT‘HÔˆHTÑHÔˆÕTˆPSS‘ÔÈSˆHÓÑ•ĞT‘K‚ˆ
ˆOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOBˆ
‹Ù[˜İ[ÛˆÛ™J
^İ˜\ˆK]\Ëš[\›˜[—×ÛY]Y]W×Ë›Y]Y]K][™\ØØ\J[˜ÛÙUT’PÛÛ\Û™[

JNÙO]\Ëš[\›˜[—×ÛY]Y]W×Ëœ˜]Ö[Ü‰Ï\Y]H[œÎH˜YØ™N›œÎ›Y]KÈ™”‘ˆ[œÎœ™Hš‹ËİİİËÌË›Ü™ËÌNNNKÌ‹ÌŒ‹\™‹\Ş[^[œÈÈ™‘\ØÜš\[Ûˆ™˜X›İ]Hˆˆ[œÎšœÜH‰Êİ\Ëš[\›˜[—×ÛY]Y]W×Ë›˜[Y\ÜXÙU\šJÉÈœÜ›Y]Y]O‰ÊÜ‹œ™\XÙJÉ‹ÙË‰˜[\ÈŠKœ™\XÙJÏÙË‰›ÈŠKœ™\XÙJÏ‹ÙË‰™İÈŠKœ™\XÙJÈ‹ÙË‰œ][İÈŠKœ™\XÙJÉËÙË‰˜\ÜÎÈŠJÈÚœÜ›Y]Y]OÜ™‘\ØÜš\[ÛÜ™”‘Ş\Y]Oˆ‹\Ëš[\›˜[—×ÛY]Y]W×Ë›Y]Y]SØš™Xİ[X™\]\Ëš[\›˜[›™]ÓØš™Xİ

K\Ëš[\›˜[Üš]JÕ\HÓY]Y]HÔİX\HÖSÓ[™İŠÙK›[™İ
ÈˆˆŠK\Ëš[\›˜[Üš]Jœİ™X[HŠK\Ëš[\›˜[Üš]JJK\Ëš[\›˜[Üš]J™[™İ™X[HŠK\Ëš[\›˜[Üš]J™[™ØšˆŠ_Y[˜İ[Ûˆ[™J
^İ\Ëš[\›˜[—×ÛY]Y]W×Ë›Y]Y]SØš™Xİ[X™\‰‰\Ëš[\›˜[Üš]J‹ÓY]Y]HŠİ\Ëš[\›˜[—×ÛY]Y]W×Ë›Y]Y]SØš™Xİ[X™\ŠÈˆˆŠ_J[˜İ[ÛŠJ^İ˜\ˆ‹‹KËËË‹Y[˜İ[ÛŠŠ^Ü™]\›ˆQŸßK\Ëš\Ôİ›ÚÙU˜[œÜ\™[Q‹š\Ôİ›ÚÙU˜[œÜ\™[LK\Ëœİ›ÚÙSÜXÚ]OQ‹œİ›ÚÙSÜXÚ]_K\Ëœİ›ÚÙTİ[OQ‹œİ›ÚÙTİ[_ˆÌ‹\Ë™š[İ[OQ‹™š[İ[_ˆÌ‹\Ëš\Ñš[˜[œÜ\™[Q‹š\Ñš[˜[œÜ\™[LK\Ë™š[ÜXÚ]OQ‹™š[ÜXÚ]_K\Ë™›ÛQ‹™›ÛŒLØ[œË\Ù\šYˆ‹\Ë^˜\Ù[[™OQ‹^˜\Ù[[™_˜[X™]XÈ‹\Ë^[YÛQ‹^[YÛŸ›Y‹\Ë›[™UÚYQ‹›[™UÚYK\Ë›[™R›Ú[Q‹›[™R›Ú[Ÿ›Z]\ˆ‹\Ë›[™PØ\Q‹›[™PØ\˜]‹\Ëœ]Q‹œ]×K\Ë˜[œÙ›Ü›OQ‹˜[œÙ›Ü›HOO]›ÚYÑ‹˜[œÙ›Ü›K˜ÛÛ™J
N›™]È\Ë™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][ÛQ‹™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][ÛŸ››Ü›X[‹\Ë™ÛØ˜[[OQ‹™ÛØ˜[[_K\Ë˜Û\Ü]Q‹˜Û\Ü]×K\Ë˜İ\œ™[Ú[Q‹˜İ\œ™[Ú[™]ÈË\Ë›Z]\“[Z]Q‹›Z]\“[Z]L\Ë›\İÚ[Q‹›\İÚ[™]ÈË\Ë›[™Q\ÚÙ™œÙ]Q‹›[™Q\ÚÙ™œÙ]\Ë›[™Q\ÚQ‹›[™Q\Ú×K\Ë›X\™Ú[Q‹›X\™Ú[ŸÌK\Ëœ™]”YÙS\İ[[SÙ™œÙ]Q‹œ™]”YÙS\İ[[SÙ™œÙ]\ËšYÛ›Ü™PÛX\”™Xİ]\[Ùˆ‹šYÛ›Ü™PÛX\”™XİOH˜›ÛÛX[ˆŸ‹šYÛ›Ü™PÛX\”™Xİ\ßNÙK™]™[Ëœ\Ú
Èš[š]X[^™Y‹[˜İ[ÛŠ
^İ\Ë˜ÛÛ^™[™]È
\ÊK]\Ëš[\›˜[™Œ‹]\Ëš[\›˜[™Ù]ÛÛÜ™[˜]Tİš[™Ë]\Ëš[\›˜[™Ù]™\XØ[ÛÛÜ™[˜]Tİš[™ËO]\Ëš[\›˜[™Ù]Üš^›Û[ÛÛÜ™[˜]KÏ]\Ëš[\›˜[™Ù]™\XØ[ÛÛÜ™[˜]KÏ]\Ëš[\›˜[”Ú[Ï]\Ëš[\›˜[”™Xİ[™ÛK]\Ëš[\›˜[“X]š^[™]ÈWJNİ˜\ˆY[˜İ[ÛŠŠ^ÓØš™Xİ™Yš[™T›Ü\J\Ë˜Ø[˜\È‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›Ü\™[›ÙNˆLKİ[NˆL___JNİ˜\ˆQÓØš™Xİ™Yš[™T›Ü\J\Ëœˆ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆŸ_JNİ˜\ˆHLNÓØš™Xİ™Yš[™T›Ü\J\ËœYÙUÜ˜\[˜X›Y‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆŸKÙ]™[˜İ[ÛŠÙJ^ÖHHYÙ__JNİ˜\ˆYOHLNÓØš™Xİ™Yš[™T›Ü\J\ËœYÙUÜ˜\Q[˜X›Y‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆY_KÙ]™[˜İ[ÛŠÙJ^ÙYOHHYÙ__JNİ˜\ˆYOLÓØš™Xİ™Yš[™T›Ü\J\ËœÜÖ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆY_KÙ]™[˜İ[ÛŠÙJ^Ú\Ó˜SŠÙJ_
YOYÙJ__JNİ˜\ˆÙOLÓØš™Xİ™Yš[™T›Ü\J\ËœÜÖH‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆÙ_KÙ]™[˜İ[ÛŠÙJ^Ú\Ó˜SŠÙJ_
ÙOYÙJ__JKØš™Xİ™Yš[™T›Ü\J\Ë›X\™Ú[ˆ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ‹›X\™Ú[ŸKÙ]™[˜İ[ÛŠÙJ^İ˜\ˆİ\[ÙˆÙOOH›[X™\ˆÙVÙÙKÙKÙKÙWNŠ
[™]È\œ˜^J
JVÌOYÙVÌKÌWOYÙK›[™İLÙÙVÌWN™ÌKÌ—OYÙK›[™İLÏÙÙVÌ—N™ÌKÌ×OYÙK›[™İMÙÙVÌ×N™ÌWJK‹›X\™Ú[Y_JNİ˜\ˆÙOHLNÓØš™Xİ™Yš[™T›Ü\J\Ë˜]]ÔYÚ[™È‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆÙ_KÙ]™[˜İ[ÛŠÙJ^ĞÙOYÙ__JNİ˜\ˆOLÓØš™Xİ™Yš[™T›Ü\J\Ë›\İœ™XZÈ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ_KÙ]™[˜İ[ÛŠÙJ^ÓOYÙ__JNİ˜\ˆÙOV×NÓØš™Xİ™Yš[™T›Ü\J\ËœYÙPœ™XZÜÈ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆÙ_KÙ]™[˜İ[ÛŠÙJ^ÓÙOYÙ__JKØš™Xİ™Yš[™T›Ü\J\Ë˜İ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆŸKÙ]™[˜İ[ÛŠÙJ^ÙÙH[œİ[˜Ù[Ùˆ	‰ŠYÙJ__JKØš™Xİ™Yš[™T›Ü\J\Ëœ]‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ‹œ]KÙ]™[˜İ[ÛŠÙJ^Ù‹œ]YÙ__JNİ˜\ˆV×NÓØš™Xİ™Yš[™T›Ü\J\Ë˜İİXÚÈ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆKÙ]™[˜İ[ÛŠÙJ^ÛYÙ__JKØš™Xİ™Yš[™T›Ü\J\Ë™š[İ[H‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ™š[İ[_KÙ]™[˜İ[ÛŠÙJ^İ˜\ˆÙXŠÙJK\Ë˜İ™š[İ[OYœİ[K\Ë˜İš\Ñš[˜[œÜ\™[Y˜OOOL\Ë˜İ™š[ÜXÚ]OY˜K\Ëœ‹œÙ]š[ÛÛÜŠœ‹™Ë˜‹ØN™˜_JK\Ëœ‹œÙ]^ÛÛÜŠœ‹™Ë˜‹ØN™˜_J__JKØš™Xİ™Yš[™T›Ü\J\Ëœİ›ÚÙTİ[H‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İœİ›ÚÙTİ[_KÙ]™[˜İ[ÛŠÙJ^İ˜\ˆXŠÙJNİ\Ë˜İœİ›ÚÙTİ[OYœİ[K\Ë˜İš\Ôİ›ÚÙU˜[œÜ\™[Y˜OOOL\Ë˜İœİ›ÚÙSÜXÚ]OY˜K˜OOOLİ\Ëœ‹œÙ]˜]ĞÛÛÜŠMKMKMJNŠ˜K\Ëœ‹œÙ]˜]ĞÛÛÜŠœ‹™Ë˜ŠJ__JKØš™Xİ™Yš[™T›Ü\J\Ë›[™PØ\‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ›[™PØ\KÙ]™[˜İ[ÛŠÙJ^ÖÈ˜]‹œ›İ[™‹œÜ]X\™H—Kš[™^ÙŠÙJHOOKLI‰Š\Ë˜İ›[™PØ\YÙK\Ëœ‹œÙ][™PØ\
ÙJJ__JKØš™Xİ™Yš[™T›Ü\J\Ë›[™UÚY‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ›[™UÚYKÙ]™[˜İ[ÛŠÙJ^Ú\Ó˜SŠÙJ_
\Ë˜İ›[™UÚYYÙK\Ëœ‹œÙ][™UÚY
ÙJJ__JKØš™Xİ™Yš[™T›Ü\J\Ë›[™R›Ú[ˆ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ›[™R›Ú[ŸKÙ]™[˜İ[ÛŠÙJ^ÖÈ˜™]™[‹œ›İ[™‹›Z]\ˆ—Kš[™^ÙŠÙJHOOKLI‰Š\Ë˜İ›[™R›Ú[YÙK\Ëœ‹œÙ][™R›Ú[ŠÙJJ__JKØš™Xİ™Yš[™T›Ü\J\Ë›Z]\“[Z]‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ›Z]\“[Z]KÙ]™[˜İ[ÛŠÙJ^Ú\Ó˜SŠÙJ_
\Ë˜İ›Z]\“[Z]YÙK\Ëœ‹œÙ]Z]\“[Z]
ÙJJ__JKØš™Xİ™Yš[™T›Ü\J\Ë^˜\Ù[[™H‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ^˜\Ù[[™_KÙ]™[˜İ[ÛŠÙJ^İ\Ë˜İ^˜\Ù[[™OYÙ__JKØš™Xİ™Yš[™T›Ü\J\Ë^[YÛˆ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ^[YÛŸKÙ]™[˜İ[ÛŠÙJ^ÖÈœšYÚ‹™[™‹˜Ù[\ˆ‹›Y‹œİ\—Kš[™^ÙŠÙJHOOKLI‰Š\Ë˜İ^[YÛYÙJ__JNİ˜\ˆÙO[[YO[[[[ÓØš™Xİ™Yš[™T›Ü\J\Ë™›Û˜XÙ\È‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆKÙ]™[˜İ[ÛŠÙJ^ØÙO[[YO[[YÙ__JKØš™Xİ™Yš[™T›Ü\J\Ë™›Û‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ™›ÛKÙ]™[˜İ[ÛŠÙJ^İ˜\ˆÚYŠ\Ë˜İ™›ÛYÙK
K×—ÊŠÏJÎŠÎ–ËXK^—J×ÊŠ^ÌŸJ][XßØ›\]YJJOÊJÏJÎŠÎ–ËXK^—J×ÊŠ^ÌŸJÛX[XØ\ÊJOÊJÏJÎŠÎ–ËXK^—J×ÊŠ^ÌŸJ›Û
Î™\ŠOßYÚ\ŸÌKNWL
JOÊJÎŠÎ››Ü›X[_ŸÊWÊŠ^ÌßJ
ÎËJOÊÎœÛX[\™ÙJ_YY][_ÛX[\Ÿ\™Ù\ŸË—JÊÎ—	_[ŸØÙ[W[_^ØİJJJÎ—Ê—×ÊŠ›Ü›X[Ë—JÊÎ—	_[ŸØÙ[W[_^ØİJJJO×ÊŠËWË—	×ØK^ŒNWJÏÊWÊ‰ÚK™^XÊÙJJHOO[[
^İ˜\ˆ]YÌWNÙÌ—Nİ˜\ˆ]YÌ×KYOYÍNÙÍWNİ˜\ˆYÍ—KK×ŠË—JÊJ
Î‰_[ŸØÙ[W[_^ØİJJIÚK™^XÊYJVÌ—NÕYOSX]™›ÛÜŠOOHœÜ\œÙQ›Ø]
YJJ\Ëœ‹š[\›˜[œØØ[Q˜XİÜšOOH™[HÜ\œÙQ›Ø]
YJJ\Ëœ‹™Ù]›ÛÚ^™J
Nœ\œÙQ›Ø]
YJJ\Ëœ‹š[\›˜[œØØ[Q˜XİÜŠK\Ëœ‹œÙ]›ÛÚ^™JYJNİ˜\ˆY[˜İ[ÛŠ
^İ˜\ˆ‹İV×K™O^š[J
NÚYŠ™OOOHˆŠ\™]\›ˆÎÚYŠ™H[ˆ^J\™]\›–Ô^VĞ™WWNÙ›ÜŠĞ™HOOHˆÊ^ÜİÚ]Ú
[[J™O]Ê™JJK˜Ú\]

J^ØØ\ÙIÈ‰Î˜Ø\ÙH‰È’^›™J™KœİXœİš[™ÊJKŠNØœ™XZÎÙY˜][’UÛ™J™J_ZYŠOO[[
İœ\Ú
ÌJK
™O]ÊÌWJJHOOHˆ‰‰™K˜Ú\]

HOOH‹ŠJ\™]\›ˆÎĞ™OP™Kœ™\XÙJ×‹ËˆŠ_\™]\›ˆİJ
NÚYŠ\Ë™›Û˜XÙ\Ê^İ˜\ˆ]Y[˜İ[ÛŠŠ^İ˜\ˆ^™Ù]›Û\İ

KİR”ÓÓ‹œİš[™ÚYJ
NÚYŠÙOOO[[YHOO]İ
^İ˜\ˆ™OY[˜İ[ÛŠ™J^İ˜\ˆ]V×NÜ™]\›ˆØš™XİšÙ^\Ê™JK™›Ü‘XXÚ
[˜İ[ÛŠİ
^Ñ™VØİK™›Ü‘XXÚ
[˜İ[ÛŠ
^İ˜\ˆÙO[[ÜİÚ]Ú

^ØØ\ÙH˜›Û•ÙO^Ù˜[Z[N˜İÙZYÚˆ˜›ÛŸNØœ™XZÎØØ\ÙHš][XÈ•ÙO^Ù˜[Z[N˜İİ[Nˆš][XÈŸNØœ™XZÎØØ\ÙH˜›Û][XÈ•ÙO^Ù˜[Z[N˜İÙZYÚˆ˜›Û‹İ[Nˆš][XÈŸNØœ™XZÎØØ\ÙHˆ˜Ø\ÙH››Ü›X[•ÙO^Ù˜[Z[N˜İ_UÙHOO[[	‰ŠÙKœ™Y^Û˜[YN˜İİ[NK]œ\Ú
ÙJJ_J_JK]J
NØÙOY[˜İ[ÛŠ™J^Ù›ÜŠ˜\ˆ]^ßKİLØİ™K›[™İÊÊØİ
^İ˜\ˆ\Ê™VØİJKÙO^™˜[Z[Kİ^œİ™]Ú^œİ[K^ÙZYÚÙ]ÕÙWOY]ÕÙW_ßK]ÕÙWVÜİOY]ÕÙWVÜİ_ßK]ÕÙWVÜİVØOY]ÕÙWVÜİVØ_ßK]ÕÙWVÜİVØVÙO^\™]\›ˆ]J™K˜ÛÛ˜Ø]
ŠJKYO]İ\™]\›ˆÙ_J\Ëœ‹\Ë™›Û˜XÙ\ÊKœU›X\
[˜İ[ÛŠ
^Ü™]\›Ù˜[Z[Nİ™]Úˆ››Ü›X[‹ÙZYÚ‘]İ[N˜]_JKİY[˜İ[ÛŠ‹
^Ù›ÜŠ˜\ˆİJRßJK™Y˜][›Û˜[Z[_[Y\È‹™OSØš™Xİ˜\ÜÚYÛŠßK™K™Ù[™\šXÑ›Û˜[Z[Y\ßßJK™O[[][[İLØİ‹›[™İÊÊØİ
ZYŠ™VÊ™O\Ê–ØİJJK™˜[Z[WI‰Š™K™˜[Z[OP™VÑ™K™˜[Z[WJKš\ÓİÛ”›Ü\J™K™˜[Z[JJ^Ù]^Ñ™K™˜[Z[WNØœ™XZßZYŠJ]Y]İİJJ]›İÈ™]È\œ›ÜŠÛİ[›İš[™H›ÛY˜[Z[H›ÜˆH[H	ÈŠÙWÊ™JJÈ‰È[™Y˜][˜[Z[H	ÈŠİİ
È‰ËˆŠNÚYŠ]Y[˜İ[ÛŠÙJ^ÚYŠÙVŞJ\™]\›ˆÙVŞNİ˜\ˆİTÎŞK\İTÎ››Ü›X[ËLNŒKRJÙK’Kİ
NÚYŠY
]›İÈ™]È\œ›ÜŠÛİ[›İš[™HX]Ú[™È›Û\İ™]Ú˜[YH›ÜˆŠŞ
NÜ™]\›ˆJ™Kœİ™]Ú]
K]Y[˜İ[ÛŠÙJ^ÚYŠÙVŞJ\™]\›ˆÙVŞNÙ›ÜŠ˜\ˆİRRVŞKLØİ›[™İÊÊØ
ZYŠÙVÜİØWJ\™]\›ˆÙVÜİØWNİ›İÈ™]È\œ›ÜŠÛİ[›İš[™HX]Ú[™È›Û\İ[H›ÜˆŠŞ
_J™Kœİ[K]
KJ]Y[˜İ[ÛŠÙJ^ÚYŠÙVŞJ\™]\›ˆÙVŞNÚYŠOOM	‰•ÙVÍLJ\™]\›ˆÙVÍLNÚYŠOOML	‰•ÙVÍJ\™]\›ˆÙVÍNİ˜\ˆİU›™VŞKRJÙKKİËLNŒJNÚYŠX
]›İÈ™]È\œ›ÜŠÛİ[›İš[™HX]Ú[™È›Û]ÙZYÚ›Üˆ˜[YHŠŞ
NÜ™]\›ˆJ™KÙZYÚ]
JJ]›İÈ™]È\œ›ÜŠ‘˜Z[YÈ™\ÛÛ™HH›Û›ÜˆH[H	ÈŠÙWÊ™JJÈ‰ËˆŠNÜ™]\›ˆ]J]œŠNİ\Ëœ‹œÙ]›Û
İœ™Y‹›˜[YKİœ™Y‹œİ[J_Y[Ù^İ˜\ˆHˆÊ]OOH˜›ÛŸ\œÙR[
]L
OMÌ]OOH˜›ÛŠI‰ŠH˜›ÛŠK]OOHš][XÈ‰‰Š
ÏHš][XÈŠK›[™İOOL	‰ŠH››Ü›X[ŠNÙ›ÜŠ˜\ˆÜHˆ‹^Ø\šX[ˆ’[™]XØH‹\šX[ˆ’[™]XØH‹™\™[˜Nˆ’[™]XØH‹™\™[˜Nˆ’[™]XØH‹[™]XØNˆ’[™]XØH‹[™]XØNˆ’[™]XØH‹œØ[œË\Ù\šYˆˆ’[™]XØH‹š^YˆÛİ\šY\ˆ‹[Û›ÜÜXÙNˆÛİ\šY\ˆ‹\›Z[˜[ˆÛİ\šY\ˆ‹İ\œÚ]™Nˆ•[Y\È‹˜[\ŞNˆ•[Y\È‹Ù\šYˆ•[Y\ÈŸKLÑ›[™İÑ
ÊÊ^ÚYŠ\Ëœ‹š[\›˜[™Ù]›Û
ÑKÛ›Ñ˜[˜XÚÎˆL\ØX›UØ\›š[™ÎˆLJHOO]›ÚY
^ÜÜUÑNØœ™XZßZYŠOOH˜›Û][XÈ‰‰\Ëœ‹š[\›˜[™Ù]›Û
ÑK˜›Û‹Û›Ñ˜[˜XÚÎˆL\ØX›UØ\›š[™ÎˆLJHOO]›ÚY
\ÜUÑKH˜›ÛÙ[ÙHYŠ\Ëœ‹š[\›˜[™Ù]›Û
ÑK››Ü›X[‹Û›Ñ˜[˜XÚÎˆL\ØX›UØ\›š[™ÎˆLJHOO]›ÚY
^ÜÜUÑKH››Ü›X[Øœ™XZß_ZYŠÜOOHˆŠ^Ù›ÜŠ˜\ˆİLÕİ›[™İÕİ
ÊÊZYŠÕÕİWJ^ÜÜRÕÕİWNØœ™XZß_\Ü\ÜOOHˆÈ•[Y\ÈœÜ‹\Ëœ‹œÙ]›Û
Ü‹
____JKØš™Xİ™Yš[™T›Ü\J\Ë™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][Ûˆ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][ÛŸKÙ]™[˜İ[ÛŠÙJ^İ\Ë˜İ™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][ÛYÙ__JKØš™Xİ™Yš[™T›Ü\J\Ë™ÛØ˜[[H‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ™ÛØ˜[[_KÙ]™[˜İ[ÛŠÙJ^İ\Ë˜İ™ÛØ˜[[OYÙ__JKØš™Xİ™Yš[™T›Ü\J\Ë›[™Q\ÚÙ™œÙ]‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ›[™Q\ÚÙ™œÙ]KÙ]™[˜İ[ÛŠÙJ^İ\Ë˜İ›[™Q\ÚÙ™œÙ]YÙKÙK˜Ø[
\Ê__JKØš™Xİ™Yš[™T›Ü\J\Ë›[™Q\Ú‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ›[™Q\ÚKÙ]™[˜İ[ÛŠÙJ^İ\Ë˜İ›[™Q\ÚYÙKÙK˜Ø[
\Ê__JKØš™Xİ™Yš[™T›Ü\J\ËšYÛ›Ü™PÛX\”™Xİ‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İšYÛ›Ü™PÛX\”™XİKÙ]™[˜İ[ÛŠÙJ^İ\Ë˜İšYÛ›Ü™PÛX\”™XİHHYÙ__J_NŞœ›İİ\KœÙ][™Q\ÚY[˜İ[ÛŠŠ^İ\Ë›[™Q\ÚQŸKœ›İİ\K™Ù][™Q\ÚY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›[™Q\Ú›[™İ	Lİ\Ë›[™Q\Ú˜ÛÛ˜Ø]
\Ë›[™Q\Ú
N\Ë›[™Q\ÚœÛXÙJ
_Kœ›İİ\K™š[Y[˜İ[ÛŠ
^Ô‹˜Ø[
\Ë™š[‹LJ_Kœ›İİ\Kœİ›ÚÙOY[˜İ[ÛŠ
^Ô‹˜Ø[
\Ëœİ›ÚÙH‹LJ_Kœ›İİ\K˜™YÚ[”]Y[˜İ[ÛŠ
^İ\Ëœ]VŞİ\Nˆ˜™YÚ[ˆŸW_Kœ›İİ\K›[İ™UÏY[˜İ[ÛŠ‹Š^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™›[İ™UÎˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™›[İ™UÈŠNİ˜\ˆ]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹ŠJNİ\Ëœ]œ\Ú
İ\Nˆ›]‹–‹N–‹_JK\Ë˜İ›\İÚ[[™]ÈÊ‹Š_Kœ›İİ\K˜ÛÜÙT]Y[˜İ[ÛŠ
^İ˜\ˆ[™]ÈÊ
KLÙ›ÜŠ]\Ëœ]›[™İLNÒˆOOKLNÒ‹KJZYŠ\Ëœ]Ò—K\OOOH˜™YÚ[ˆ‰‰šÛŠ\Ëœ]ÒŠÌWJOOOH›Øš™Xİ‰‰\[Ùˆ\Ëœ]ÒŠÌWKOH›[X™\ˆŠ^Ñ[™]ÈÊ\Ëœ]ÒŠÌWK\Ëœ]ÒŠÌWKJNØœ™XZß]\Ëœ]œ\Ú
İ\Nˆ˜ÛÜÙHŸJK\Ë˜İ›\İÚ[[™]ÈÊ‹‹J_Kœ›İİ\K›[™UÏY[˜İ[ÛŠ‹Š^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™›[™UÎˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™›[™UÈŠNİ˜\ˆ]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹ŠJNİ\Ëœ]œ\Ú
İ\Nˆ›‹–‹N–‹_JK\Ë˜İ›\İÚ[[™]ÈÊ‹‹J_Kœ›İİ\K˜Û\Y[˜İ[ÛŠ
^İ\Ë˜İ˜Û\Ü]R”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ\Ëœ]
JK‹˜Ø[
\Ë[L
_Kœ›İİ\Kœ]XY˜]XĞİ\™UÏY[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠYJ_\Ó˜SŠŠ_\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™œ]XY˜]XĞİ\™UÎˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™œ]XY˜]XĞİ\™UÈŠNİ˜\ˆYO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹YJJKÙO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹ŠJNİ\Ëœ]œ\Ú
İ\NˆœXİ‹N”ÙKLN”ÙKKšYKNšYK_JK\Ë˜İ›\İÚ[[™]ÈÊYKYKJ_Kœ›İİ\K˜™^šY\İ\™UÏY[˜İ[ÛŠ‹‹‹YKYKÙJ^ÚYŠ\Ó˜SŠYJ_\Ó˜SŠÙJ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™˜™^šY\İ\™UÎˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™˜™^šY\İ\™UÈŠNİ˜\ˆÙO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊYKÙJJKO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹ŠJKÙO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹YJJNİ\Ëœ]œ\Ú
İ\Nˆ˜˜İ‹N“KLN“KK“ÙKL“ÙKKÙKNÙK_JK\Ë˜İ›\İÚ[[™]ÈÊÙKÙKJ_Kœ›İİ\K˜\˜ÏY[˜İ[ÛŠ‹‹‹YKYKÙJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJ_\Ó˜SŠYJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™˜\˜Îˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™˜\˜ÈŠNÚYŠÙOHHTÙK]\Ë˜İ˜[œÙ›Ü›Kš\ÒY[]J^İ˜\ˆÙO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹ŠJNÑPÙKPÙKNİ˜\ˆO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊŠJKÙO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ
JNÖSX]œÜ\
X]œİÊKSÙKŠJÓX]œİÊKKSÙKKŠJ_SX]˜XœÊYKYYJOLŠ“X]”I‰ŠYOLYOLŠ“X]”JK\Ëœ]œ\Ú
İ\Nˆ˜\˜È‹‘‹N’‹˜Y]\Î–‹İ\[™ÛN™YK[™[™ÛNšYKÛİ[\˜ÛØÚİÚ\ÙN”Ù_J_Kœ›İİ\K˜\˜ÕÏY[˜İ[ÛŠ‹‹‹YKYJ^İ›İÈ™]È\œ›ÜŠ˜\˜ÕÈ›İ[\[Y[YˆŠ_Kœ›İİ\Kœ™XİY[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™œ™Xİˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™œ™XİŠNİ\Ë›[İ™UÊ‹ŠK\Ë›[™UÊŠÖ‹ŠK\Ë›[™UÊŠÖ‹ŠÙYJK\Ë›[™UÊ‹ŠÙYJK\Ë›[™UÊ‹ŠK\Ë›[™UÊŠÖ‹ŠK\Ë›[™UÊ‹Š_Kœ›İİ\K™š[™XİY[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™™š[™Xİˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™™š[™XİŠNÚYŠ]Ë˜Ø[
\ÊJ^İ˜\ˆYO^ßNİ\Ë›[™PØ\OOH˜]‰‰ŠYK›[™PØ\]\Ë›[™PØ\\Ë›[™PØ\H˜]ŠK\Ë›[™R›Ú[ˆOOH›Z]\ˆ‰‰ŠYK›[™R›Ú[]\Ë›[™R›Ú[‹\Ë›[™R›Ú[H›Z]\ˆŠK\Ë˜™YÚ[”]

K\Ëœ™Xİ
‹‹‹YJK\Ë™š[

KYKš\ÓİÛ”›Ü\J›[™PØ\ŠI‰Š\Ë›[™PØ\ZYK›[™PØ\
KYKš\ÓİÛ”›Ü\J›[™R›Ú[ˆŠI‰Š\Ë›[™R›Ú[ZYK›[™R›Ú[Š__Kœ›İİ\Kœİ›ÚÙT™XİY[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™œİ›ÚÙT™Xİˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™œİ›ÚÙT™XİŠN×Ë˜Ø[
\Ê_
\Ë˜™YÚ[”]

K\Ëœ™Xİ
‹‹‹YJK\Ëœİ›ÚÙJ
J_Kœ›İİ\K˜ÛX\”™XİY[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™˜ÛX\”™Xİˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™˜ÛX\”™XİŠNİ\ËšYÛ›Ü™PÛX\”™Xİ
\Ë™š[İ[OHˆÙ™™™™™ˆ‹\Ë™š[™Xİ
‹‹‹YJJ_Kœ›İİ\KœØ]™OY[˜İ[ÛŠŠ^Ñ]\[ÙˆˆOH˜›ÛÛX[ˆŸÙ›ÜŠ˜\ˆ]\Ëœ‹š[\›˜[™Ù]İ\œ™[YÙR[™›Ê
KœYÙS[X™\‹LÖ\Ëœ‹š[\›˜[™Ù][X™\“Ù”YÙ\Ê
NÖŠÊÊ]\Ëœ‹œÙ]YÙJŠÌJK\Ëœ‹š[\›˜[›İ]
œHŠNÚYŠ\Ëœ‹œÙ]YÙJŠKŠ^İ\Ë˜İ™›ÛÚ^™O]\Ëœ‹š[\›˜[™Ù]›ÛÚ^™J
Nİ˜\ˆYO[™]È
\Ë˜İ
Nİ\Ë˜İİXÚËœ\Ú
\Ë˜İ
K\Ë˜İYY__Kœ›İİ\Kœ™\İÜ™OY[˜İ[ÛŠŠ^Ñ]\[ÙˆˆOH˜›ÛÛX[ˆŸÙ›ÜŠ˜\ˆ]\Ëœ‹š[\›˜[™Ù]İ\œ™[YÙR[™›Ê
KœYÙS[X™\‹LÖ\Ëœ‹š[\›˜[™Ù][X™\“Ù”YÙ\Ê
NÖŠÊÊ]\Ëœ‹œÙ]YÙJŠÌJK\Ëœ‹š[\›˜[›İ]
”HŠNİ\Ëœ‹œÙ]YÙJŠK‰‰\Ë˜İİXÚË›[™İOOL	‰Š\Ë˜İ]\Ë˜İİXÚËœÜ

K\Ë™š[İ[O]\Ë˜İ™š[İ[K\Ëœİ›ÚÙTİ[O]\Ë˜İœİ›ÚÙTİ[K\Ë™›Û]\Ë˜İ™›Û\Ë›[™PØ\]\Ë˜İ›[™PØ\\Ë›[™UÚY]\Ë˜İ›[™UÚY\Ë›[™R›Ú[]\Ë˜İ›[™R›Ú[‹\Ë›[™Q\Ú]\Ë˜İ›[™Q\Ú\Ë›[™Q\ÚÙ™œÙ]]\Ë˜İ›[™Q\ÚÙ™œÙ]
_Kœ›İİ\KÑ]UT“Y[˜İ[ÛŠ
^İ›İÈ™]È\œ›ÜŠÑ]U\››İ[\[Y[YˆŠ_Nİ˜\ˆY[˜İ[ÛŠŠ^İ˜\ˆ‹‹YKYNÚYŠ‹š\ĞØ[˜\ÑÜ˜YY[OOHL	‰ŠQ‹™Ù]ÛÛÜŠ
JKQŠ\™]\›ÜŒÎŒŒNŒİ[N‘ŸNÚYŠİ˜[œÜ\™[™Ø˜WÊ—
ÊŠ
ÊWÊ‹ÊŠ
ÊWÊ‹ÊŠ
ÊWÊ‹ÊŒ
×Ê—
KË\İ
ŠJRLLYOLYOLÙ[Ù^İ˜\ˆÙOKÜ™Ø—Ê—
ÊŠ
ÊWÊ‹ÊŠ
ÊWÊ‹ÊŠ
ÊWÊ—
KË™^XÊŠNÚYŠÙHOO[[
R\\œÙR[
ÙVÌWJK\\œÙR[
ÙVÌ—JKYO\\œÙR[
ÙVÌ×JKYOLNÙ[ÙHYŠ
ÙOKÜ™Ø˜WÊ—
ÊŠ
ÊWÊ‹ÊŠ
ÊWÊ‹ÊŠ
ÊWÊ‹ÊŠ×—JÊWÊ—
KË™^XÊŠJHOO[[
R\\œÙR[
ÙVÌWJK\\œÙR[
ÙVÌ—JKYO\\œÙR[
ÙVÌ×JKYO\\œÙQ›Ø]
ÙVÍJNÙ[Ù^ÚYŠYOLK\[ÙˆOHœİš[™È‰‰‘‹˜Ú\]

HOOHˆÈŠ^İ˜\ˆÙO[™]È’JŠNÑPÙK›ÚÏĞÙKÒ^

NˆˆÌŸQ‹›[™İOOMÊQ‹œİXœİš[™ÊKŠKŠÏR‹Q‹œİXœİš[™Ê‹ÊKŠÏV‹YOQ‹œİXœİš[™ÊË
KYJÏYYJNŠQ‹œİXœİš[™ÊKÊKQ‹œİXœİš[™ÊËJKYOQ‹œİXœİš[™ÊKÊJK\\œÙR[
‹MŠK\\œÙR[
‹MŠKYO\\œÙR[
YKMŠ__\™]\›Ü’‹Î–‹™YKNšYKİ[N‘Ÿ_KÏY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İš\Ñš[˜[œÜ\™[\Ë™ÛØ˜[[OOLKÏY[˜İ[ÛŠ
^Ü™]\›ˆHJ\Ë˜İš\Ôİ›ÚÙU˜[œÜ\™[\Ë™ÛØ˜[[OOL
_NŞœ›İİ\K™š[^Y[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\[ÙˆˆOHœİš[™ÈŠ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™™š[^ˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™™š[^ŠNÚYŠYOZ\Ó˜SŠYJOİ›ÚY™YK]Ë˜Ø[
\ÊJ^İ˜\ˆYO]J\Ë˜İ˜[œÙ›Ü›Kœ›İ][ÛŠKÙO]\Ë˜İ˜[œÙ›Ü›KœØØ[VÒ˜Ø[
\Ëİ^‘‹’‹N–‹ØØ[N”ÙK[™ÛNšYK[YÛ\Ë^[YÛ‹X^ÚY™Y_J__Kœ›İİ\Kœİ›ÚÙU^Y[˜İ[ÛŠ‹‹‹YJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\[ÙˆˆOHœİš[™ÈŠ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™œİ›ÚÙU^ˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™œİ›ÚÙU^ŠNÚYŠWË˜Ø[
\ÊJ^ÙYOZ\Ó˜SŠYJOİ›ÚY™YNİ˜\ˆYO]J\Ë˜İ˜[œÙ›Ü›Kœ›İ][ÛŠKÙO]\Ë˜İ˜[œÙ›Ü›KœØØ[VÒ˜Ø[
\Ëİ^‘‹’‹N–‹ØØ[N”ÙK™[™\š[™Ó[ÙNˆœİ›ÚÙH‹[™ÛNšYK[YÛ\Ë^[YÛ‹X^ÚY™Y_J__Kœ›İİ\K›YX\İ\™U^Y[˜İ[ÛŠŠ^ÚYŠ\[ÙˆˆOHœİš[™ÈŠ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™›YX\İ\™U^ˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™›YX\İ\™U^ŠNİ˜\ˆ]\Ëœ‹]\Ëœ‹š[\›˜[œØØ[Q˜XİÜ‹YOR‹š[\›˜[™Ù]›ÛÚ^™J
KYOR‹™Ù]İš[™Õ[š]ÚY
ŠJ™YKÒ‹š[\›˜[œØØ[Q˜XİÜÜ™]\›ˆ™]È[˜İ[ÛŠÙJ^İ˜\ˆÙOJÙOTÙ_ßJKÚYÜ™]\›ˆØš™Xİ™Yš[™T›Ü\J\ËÚY‹ÙÙ]™[˜İ[ÛŠ
^Ü™]\›ˆÙ__JK\ßJİÚYšYJSX]œ›İ[™
MŠ–‹ÍÌŠŒYM
KÌYMJ_Kœ›İİ\KœØØ[OY[˜İ[ÛŠ‹Š^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™œØØ[Nˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™œØØ[HŠNİ˜\ˆ[™]È
‹‹
Nİ\Ë˜İ˜[œÙ›Ü›O]\Ë˜İ˜[œÙ›Ü›K›][\JŠ_Kœ›İİ\Kœ›İ]OY[˜İ[ÛŠŠ^ÚYŠ\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™œ›İ]Nˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™œ›İ]HŠNİ˜\ˆ[™]È
X]˜ÛÜÊŠKX]œÚ[ŠŠKSX]œÚ[ŠŠKX]˜ÛÜÊŠK
Nİ\Ë˜İ˜[œÙ›Ü›O]\Ë˜İ˜[œÙ›Ü›K›][\JŠ_Kœ›İİ\K˜[œÛ]OY[˜İ[ÛŠ‹Š^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™˜[œÛ]Nˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™˜[œÛ]HŠNİ˜\ˆ[™]È
KK‹ŠNİ\Ë˜İ˜[œÙ›Ü›O]\Ë˜İ˜[œÙ›Ü›K›][\JŠ_Kœ›İİ\K˜[œÙ›Ü›OY[˜İ[ÛŠ‹‹‹YKYKÙJ^ÚYŠ\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠŠ_\Ó˜SŠYJ_\Ó˜SŠYJ_\Ó˜SŠÙJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜ÛÛ^™˜[œÙ›Ü›Nˆ[˜[Y\™İ[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[Y\™İ[Y[È\ÜÙYÈœÔ‹˜ÛÛ^™˜[œÙ›Ü›HŠNİ˜\ˆÙO[™]È
‹‹‹YKYKÙJNİ\Ë˜İ˜[œÙ›Ü›O]\Ë˜İ˜[œÙ›Ü›K›][\JÙJ_Kœ›İİ\KœÙ]˜[œÙ›Ü›OY[˜İ[ÛŠ‹‹‹YKYKÙJ^ÑZ\Ó˜SŠŠOÌN‘‹Z\Ó˜SŠŠOÌ’‹Z\Ó˜SŠŠOÌ–‹YOZ\Ó˜SŠYJOÌN™YKYOZ\Ó˜SŠYJOÌšYKÙOZ\Ó˜SŠÙJOÌ”ÙK\Ë˜İ˜[œÙ›Ü›O[™]È
‹‹‹YKYKÙJ_Nİ˜\ˆY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›X\™Ú[–ÌOŒ\Ë›X\™Ú[–ÌWOŒ\Ë›X\™Ú[–Ì—OŒ\Ë›X\™Ú[–Ì×OŒNŞœ›İİ\K™˜]Ò[XYÙOY[˜İ[ÛŠ‹‹‹YKYKÙKÙKKÙJ^İ˜\ˆ]\Ëœ‹™Ù][XYÙT›Ü\Y\ÊŠKÙOLKYOLKLKÙOLNÙYHOO]›ÚY	‰“HOO]›ÚY	‰ŠSKÙYKÙOSÙKÚYKÙO[ÚYÙYJ“KÙYKYO[šZYÚÚYJ“ÙKÚYJKÙOOO]›ÚY	‰ŠÙOR‹ÙOV‹LL
KYHOO]›ÚY	‰“OOO]›ÚY	‰ŠOYYKÙOZYJKYOOO]›ÚY	‰“OOO]›ÚY	‰ŠO[ÚYÙO[šZYÚ
Nİ˜\ˆ]\Ë˜İ˜[œÙ›Ü›K™XÛÛ\ÜÙJ
K]]Jœ›İ]KœÚ
K][™]ÈYOJ]J]J]Q]›][\J˜[œÛ]JJK›][\JœÚÙ]ÊJK›][\JœØØ[JJK˜\UÔ™Xİ[™ÛJ™]ÈÊÙKRŠœÙKVŠ™ÙKYJ˜ÙKYJ”YJJNÚYŠ\Ë˜]]ÔYÚ[™Ê^Ù›ÜŠ˜\ˆTË˜Ø[
\ËYJKV×K]LÖ]›[™İÖ]
ÏLJUš[™^ÙŠÖ]JOOOKLI‰•œ\Ú
Ö]JNĞÊ
NÙ›ÜŠ˜\ˆœUÌKİUÕ›[™İLWK\œÔİ
ÌNÔ
ÊÊ^İ\Ëœ‹œÙ]YÙJ
Nİ˜\ˆÜ]\Ëœ‹š[\›˜[œYÙTÚ^™KÚY]\Ë›X\™Ú[–Ì×K]\Ë›X\™Ú[–ÌWKTOOLOİ\ËœÜÖJİ\Ë›X\™Ú[–ÌN\Ë›X\™Ú[–ÌK]\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\ËœÜÖK]\Ë›X\™Ú[–ÌK]\Ë›X\™Ú[–Ì—Kİ]\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\Ë›X\™Ú[–ÌK]\Ë›X\™Ú[–Ì—KTOOLOÌ‘
ÊLŠJ•İÚYŠ\Ë˜İ˜Û\Ü]›[™İOOL
^İ˜\ˆ]\Ëœ]ÖR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ\Ë˜İ˜Û\Ü]
JK\Ëœ]U
\ËœÜÖ
İ\Ë›X\™Ú[–Ì×K^
Ò
İ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
K‹˜Ø[
\Ë™š[‹L
K\Ëœ]YŸ]˜\ˆR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJYJJNÒU
ÒK\ËœÜÖ
İ\Ë›X\™Ú[–Ì×K^
Ò
İ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
VÌNİ˜\ˆİJœœŸİ
I‰“‹˜Ø[
\ÊNİİ	‰Š\Ëœ‹œØ]™QÜ˜\XÜÔİ]J
K\Ëœ‹œ™Xİ
\Ë›X\™Ú[–Ì×K\Ë›X\™Ú[–ÌKÜ‹İ[
K˜Û\

K™\ØØ\™]

JK\Ëœ‹˜Y[XYÙJ‹’”QÈ‹KËš[[]
Kİ	‰\Ëœ‹œ™\İÜ™QÜ˜\XÜÔİ]J
__Y[ÙH\Ëœ‹˜Y[XYÙJ‹’”QÈ‹YKYKKYKËYKš[[]
_Nİ˜\ˆÏY[˜İ[ÛŠ‹‹Š^İ˜\ˆYOV×NÒRŸ\Ëœ‹š[\›˜[œYÙTÚ^™KÚYVŸ\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\Ë›X\™Ú[–ÌK]\Ë›X\™Ú[–Ì—Nİ˜\ˆYO]\ËœÜÖJİ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]ÜİÚ]Ú
‹\J^ÙY˜][˜Ø\ÙH›]˜Ø\ÙH›™YKœ\Ú
X]™›ÛÜŠ
‹JÚYJKÖŠJÌJNØœ™XZÎØØ\ÙH˜\˜È™YKœ\Ú
X]™›ÛÜŠ
‹JÚYKQ‹œ˜Y]\ÊKÖŠJÌJKYKœ\Ú
X]™›ÛÜŠ
‹JÚYJÑ‹œ˜Y]\ÊKÖŠJÌJNØœ™XZÎØØ\ÙHœXİ˜\ˆÙOV
\Ë˜İ›\İÚ[\Ë˜İ›\İÚ[K‹K‹LK‹‹JNÙYKœ\Ú
X]™›ÛÜŠ
ÙKJÚYJKÖŠJÌJKYKœ\Ú
X]™›ÛÜŠ
ÙKJÔÙKš
ÚYJKÖŠJÌJNØœ™XZÎØØ\ÙH˜˜İ˜\ˆÙOS™J\Ë˜İ›\İÚ[\Ë˜İ›\İÚ[K‹K‹LK‹‹‹L‹‹‹JNÙYKœ\Ú
X]™›ÛÜŠ
ÙKJÚYJKÖŠJÌJKYKœ\Ú
X]™›ÛÜŠ
ÙKJĞÙKš
ÚYJKÖŠJÌJNØœ™XZÎØØ\ÙHœ™Xİ™YKœ\Ú
X]™›ÛÜŠ
‹JÚYJKÖŠJÌJKYKœ\Ú
X]™›ÛÜŠ
‹JÑ‹š
ÚYJKÖŠJÌJ_Y›ÜŠ˜\ˆOLÓOYK›[™İÓJÏLJY›ÜŠİ\Ëœ‹š[\›˜[™Ù][X™\“Ù”YÙ\Ê
OYVÓWNÊZË˜Ø[
\ÊNÜ™]\›ˆY_KÏY[˜İ[ÛŠ
^İ˜\ˆ]\Ë™š[İ[K]\Ëœİ›ÚÙTİ[K]\Ë™›ÛYO]\Ë›[™PØ\YO]\Ë›[™UÚYÙO]\Ë›[™R›Ú[İ\Ëœ‹˜YYÙJ
K\Ë™š[İ[OQ‹\Ëœİ›ÚÙTİ[OR‹\Ë™›ÛV‹\Ë›[™PØ\YYK\Ë›[™UÚYZYK\Ë›[™R›Ú[TÙ_KY[˜İ[ÛŠ‹‹Š^Ù›ÜŠ˜\ˆYOLÙYO‹›[™İÙYJÊÊ\İÚ]Ú
–ÙYWK\J^ØØ\ÙH˜˜İ‘–ÙYWKŠÏR‹–ÙYWKLŠÏVØØ\ÙHœXİ‘–ÙYWKJÏR‹–ÙYWKLJÏVÙY˜][‘–ÙYWK
ÏR‹–ÙYWKJÏVŸ\™]\›ˆŸKÏY[˜İ[ÛŠŠ^Ü™]\›ˆ‹œÛÜ
[˜İ[ÛŠ‹Š^Ü™]\›ˆ‹VŸJ_KY[˜İ[ÛŠ‹Š^İ˜\ˆ]\Ë™š[İ[KYO]\Ëœİ›ÚÙTİ[KYO]\Ë›[™PØ\ÙO]\Ë›[™UÚYÙOSX]˜XœÊÙJ\Ë˜İ˜[œÙ›Ü›KœØØ[V
KO]\Ë›[™R›Ú[ÚYŠ\Ë˜]]ÔYÚ[™Ê^Ù›ÜŠ˜\ˆÙKÙOR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ\Ëœ]
JKYOR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ\Ëœ]
JKV×KÙOLÙÙOYK›[™İÙÙJÊÊZYŠYVÙÙWKOO]›ÚY
Y›ÜŠ˜\ˆTË˜Ø[
\ËYVÙÙWJK]LØ]›[™İØ]
ÏLJ\š[™^ÙŠØ]JOOOKLI‰œœ\Ú
Ø]JNÙ›ÜŠ˜\ˆ]LÑ]›[™İÑ]
ÊÊY›ÜŠİ\Ëœ‹š[\›˜[™Ù][X™\“Ù”YÙ\Ê
OÑ]NÊZË˜Ø[
\ÊNĞÊ
NÙ›ÜŠ˜\ˆYO\ÌK\Ü›[™İLWKUYNÚ
ÌNÚ
ÊÊ^İ\Ëœ‹œÙ]YÙJ
K\Ë™š[İ[OV‹\Ëœİ›ÚÙTİ[OYYK\Ë›[™PØ\ZYK\Ë›[™UÚYPÙK\Ë›[™R›Ú[SNİ˜\ˆ]\Ëœ‹š[\›˜[œYÙTÚ^™KÚY]\Ë›X\™Ú[–Ì×K]\Ë›X\™Ú[–ÌWK]ZOOLOİ\ËœÜÖJİ\Ë›X\™Ú[–ÌN\Ë›X\™Ú[–ÌKœ]\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\ËœÜÖK]\Ë›X\™Ú[–ÌK]\Ë›X\™Ú[–Ì—Kİ]\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\Ë›X\™Ú[–ÌK]\Ë›X\™Ú[–Ì—KZOOLOÌœœŠÊLŠJ”İÚYŠ\Ë˜İ˜Û\Ü]›[™İOOL
^İ˜\ˆÜ]\Ëœ]ÓÙOR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ\Ë˜İ˜Û\Ü]
JK\Ëœ]U
ÙK\ËœÜÖ
İ\Ë›X\™Ú[–Ì×KT
Ö]
İ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
K‹˜Ø[
\Ë‹L
K\Ëœ]\ÜŸZYŠR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJÙJJK\Ëœ]U
\ËœÜÖ
İ\Ë›X\™Ú[–Ì×KT
Ö]
İ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
KOOHL_OOL
^İ˜\ˆJ•Y_
I‰“‹˜Ø[
\ÊNÒ	‰Š\Ëœ‹œØ]™QÜ˜\XÜÔİ]J
K\Ëœ‹œ™Xİ
\Ë›X\™Ú[–Ì×K\Ë›X\™Ú[–ÌKİ[
K˜Û\

K™\ØØ\™]

JK‹˜Ø[
\Ë‹ŠK	‰\Ëœ‹œ™\İÜ™QÜ˜\XÜÔİ]J
_]\Ë›[™UÚYTÙ_]\Ëœ]XÙ_Y[ÙH\Ë›[™UÚYPÙK‹˜Ø[
\Ë‹ŠK\Ë›[™UÚYTÙ_KY[˜İ[ÛŠ‹Š^ÚYŠ
ˆOOHœİ›ÚÙHŸŸWË˜Ø[
\ÊJI‰ŠOOHœİ›ÚÙHŸŸ]Ë˜Ø[
\ÊJJ^Ù›ÜŠ˜\ˆ‹YKYOV×KÙO]\Ëœ]ÙOLĞÙOÙK›[™İĞÙJÊÊ^İ˜\ˆOTÙVĞÙWNÜİÚ]Ú
K\J^ØØ\ÙH˜™YÚ[ˆšYKœ\Ú
Ø™YÚ[ˆLJNØœ™XZÎØØ\ÙH˜ÛÜÙHšYKœ\Ú
ØÛÜÙNˆLJNØœ™XZÎØØ\ÙH›]šYKœ\Ú
Üİ\“K[\Î–×KXœÎ–×_JNØœ™XZÎØØ\ÙH›˜\ˆÙOZYK›[™İÚYŠÙVĞÙKLWI‰ˆZ\Ó˜SŠÙVĞÙKLWK
I‰ŠVÓKTÙVĞÙKLWKKKTÙVĞÙKLWKWKÙOŒ
J^Ù›ÜŠÓÙOLÓÙKKJZYŠYVÓÙKLWK˜ÛÜÙHOOHL	‰šYVÓÙKLWK˜™YÚ[ˆOOHL
^ÚYVÓÙKLWK™[\Ëœ\Ú
ŠKYVÓÙKLWK˜XœËœ\Ú
JNØœ™XZß_Xœ™XZÎØØ\ÙH˜˜İ–VÓKKTÙVĞÙKLWKKLKTÙVĞÙKLWKKK‹TÙVĞÙKLWKKL‹TÙVĞÙKLWKKKTÙVĞÙKLWKKKTÙVĞÙKLWKWKYVÚYK›[™İLWK™[\Ëœ\Ú
ŠNØœ™XZÎØØ\ÙHœXİ˜\ˆTÙVĞÙKLWK
Ì‹ÌÊŠKKTÙVĞÙKLWK
KÙOTÙVĞÙKLWKJÌ‹ÌÊŠKLKTÙVĞÙKLWKJKYOSK
Ì‹ÌÊŠKKSK
KSKJÌ‹ÌÊŠKLKSKJKÙOSKSKNÖVÛTÙVĞÙKLWKÙKTÙVĞÙKLWKKYKTÙVĞÙKLWKTÙVĞÙKLWKKÙKTÙVĞÙKLWKTÙVĞÙKLWKWKYVÚYK›[™İLWK™[\Ëœ\Ú
ŠNØœ™XZÎØØ\ÙH˜\˜ÈšYKœ\Ú
Ù[\Î–×KXœÎ–×K\˜ÎˆLJK\œ˜^Kš\Ğ\œ˜^JYVÚYK›[™İLWK˜XœÊI‰šYVÚYK›[™İLWK˜XœËœ\Ú
J__YYORÛ[‘OOHœİ›ÚÙHÈœİ›ÚÙHˆ™š[Ù›ÜŠ˜\ˆ]HLK]LÑ]YK›[™İÑ]
ÊÊZYŠYVÑ]K˜\˜ÊY›ÜŠ˜\ˆYOZYVÑ]K˜XœËLÖYK›[™İÖ
ÊÊ^İ˜\ˆUYVÖNÚ\OOOH˜\˜ÈÕK˜Ø[
\ËKœ˜Y]\Ëœİ\[™ÛK™[™[™ÛK˜Ûİ[\˜ÛØÚİÚ\ÙK›ÚY‹X]
N”K˜Ø[
\ËJK]HLY[ÙHYŠYVÑ]K˜ÛÜÙOOOHL
]\Ëœ‹š[\›˜[›İ]
šŠK]HLNÙ[ÙHYŠYVÑ]K˜™YÚ[ˆOOHL
^İ˜\ˆZYVÑ]Kœİ\]ZYVÑ]Kœİ\NÛK˜Ø[
\ËYVÑ]K™[\Ë]
K]HLYYI‰“K˜Ø[
\ËYJK‰‰•Ë˜Ø[
\Ê__KY[˜İ[ÛŠŠ^İ˜\ˆ]\Ëœ‹š[\›˜[™Ù]›ÛÚ^™J
Kİ\Ëœ‹š[\›˜[œØØ[Q˜XİÜ‹RŠŠ\Ëœ‹š[\›˜[™Ù][™RZYÚ˜XİÜŠ
KLJNÜİÚ]Ú
\Ë˜İ^˜\Ù[[™J^ØØ\ÙH˜›İÛHœ™]\›ˆ‹VØØ\ÙHÜœ™]\›ˆŠÒ‹VØØ\ÙHš[™Ú[™Èœ™]\›ˆŠÒ‹LŠ–ØØ\ÙH›ZYHœ™]\›ˆŠÒ‹Ì‹VÙY˜][œ™]\›ˆŸ_KOY[˜İ[ÛŠŠ^Ü™]\›ˆŠİ\Ëœ‹š[\›˜[™Ù]›ÛÚ^™J
Kİ\Ëœ‹š[\›˜[œØØ[Q˜XİÜŠŠ\Ëœ‹š[\›˜[™Ù][™RZYÚ˜XİÜŠ
KLJ_NŞœ›İİ\K˜Ü™X]S[™X\‘Ü˜YY[Y[˜İ[ÛŠ
^İ˜\ˆY[˜İ[ÛŠ
^ßNÜ™]\›ˆ‹˜ÛÛÜ”İÜÏV×K‹˜YÛÛÜ”İÜY[˜İ[ÛŠ‹Š^İ\Ë˜ÛÛÜ”İÜËœ\Ú
Ò‹—J_K‹™Ù]ÛÛÜY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜ÛÛÜ”İÜË›[™İOOLÈˆÌ\Ë˜ÛÛÜ”İÜÖÌVÌW_K‹š\ĞØ[˜\ÑÜ˜YY[HLŸKœ›İİ\K˜Ü™X]T]\›Y[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜Ü™X]S[™X\‘Ü˜YY[

_Kœ›İİ\K˜Ü™X]T˜YX[Ü˜YY[Y[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜Ü™X]S[™X\‘Ü˜YY[

_Nİ˜\ˆOY[˜İ[ÛŠ‹‹‹YKYKÙKÙKKÙJ^Ù›ÜŠ˜\ˆ\K˜Ø[
\Ë‹YKYKÙJKÙOLØÙO›[™İØÙJÊÊ^İ˜\ˆYO[ØÙWNØÙOOOL	‰ŠÙOÑ˜Ø[
\ËYKJÑ‹YKLJÒŠN”K˜Ø[
\ËYKJÑ‹YKLJÒŠJKYK˜Ø[
\Ë‹‹YK‹YKL‹YKËYKLËYKYKM
_SOÕË˜Ø[
\ÊN“K˜Ø[
\ËÙJ_KOY[˜İ[ÛŠŠ^ÜİÚ]Ú
Š^ØØ\ÙHœİ›ÚÙH\Ëœ‹š[\›˜[›İ]
”ÈŠNØœ™XZÎØØ\ÙH™š[\Ëœ‹š[\›˜[›İ]
™ˆŠ__KÏY[˜İ[ÛŠ
^İ\Ëœ‹˜Û\

K\Ëœ‹™\ØØ\™]

_KY[˜İ[ÛŠ‹Š^İ\Ëœ‹š[\›˜[›İ]
ŠŠJÈˆŠÛŠŠJÈˆHŠ_KY[˜İ[ÛŠŠ^İ˜\ˆÜİÚ]Ú
‹˜[YÛŠ^ØØ\ÙHœšYÚ˜Ø\ÙH™[™’HœšYÚØœ™XZÎØØ\ÙH˜Ù[\ˆ’H˜Ù[\ˆØœ™XZÎÙY˜][’H›YŸ]˜\ˆ‹YKYKÙO]\Ëœ‹™Ù]^[Y[œÚ[ÛœÊ‹^
KÙOT˜Ø[
\Ë‹JKORK˜Ø[
\ËÙJKTÙKšÙO]\Ë˜İ˜[œÙ›Ü›K˜\UÔÚ[
™]ÈÊ‹ÙJJNÚYŠ\Ë˜]]ÔYÚ[™Ê^İ˜\ˆ]\Ë˜İ˜[œÙ›Ü›K™XÛÛ\ÜÙJ
KÙO[™]ÈØÙOJÙOJÙOXÙK›][\J˜[œÛ]JJK›][\JœÚÙ]ÊJK›][\JœØØ[JNÙ›ÜŠ˜\ˆYO]\Ë˜İ˜[œÙ›Ü›K˜\UÔ™Xİ[™ÛJ™]ÈÊ‹ÙKÙKËÙKš
JKXÙK˜\UÔ™Xİ[™ÛJ™]ÈÊ‹KÙKËÙKš
JKÙOTË˜Ø[
\Ë
KV×K]LØ]ÙK›[™İØ]
ÏLJYš[™^ÙŠÙVØ]JOOOKLI‰™œ\Ú
ÙVØ]JNĞÊ
NÙ›ÜŠ˜\ˆ]YÌKYOYÙ›[™İLWKQ]ÖYJÌNÖ
ÊÊ^İ\Ëœ‹œÙ]YÙJ
Nİ˜\ˆVOOLOİ\ËœÜÖJİ\Ë›X\™Ú[–ÌN\Ë›X\™Ú[–ÌK]\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\ËœÜÖK]\Ë›X\™Ú[–ÌK]\Ë›X\™Ú[–Ì—K]]\Ëœ‹š[\›˜[œYÙTÚ^™KšZYÚ]\Ë›X\™Ú[–Ì—KœV]]\Ë›X\™Ú[–ÌKİ]\Ëœ‹š[\›˜[œYÙTÚ^™KÚY]\Ë›X\™Ú[–ÌWKTİ]\Ë›X\™Ú[–Ì×KÜVOOLOÌ•
ÊLŠJœœÚYŠ\Ë˜İ˜Û\Ü]›[™İOOL
^İ˜\ˆ]\Ëœ]ÖR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ\Ë˜İ˜Û\Ü]
JK\Ëœ]U
‹\ËœÜÖ
İ\Ë›X\™Ú[–Ì×KLJœÜŠÚ
K‹˜Ø[
\Ë™š[‹L
K\Ëœ]R]˜\ˆU
Ò”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJ
JWK\ËœÜÖ
İ\Ë›X\™Ú[–Ì×K\ÜŠÚ
İ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
VÌNÑ‹œØØ[OKŒI‰ŠYO]\Ëœ‹š[\›˜[™Ù]›ÛÚ^™J
K\Ëœ‹œÙ]›ÛÚ^™JYJ‘‹œØØ[JKYO]\Ë›[™UÚY\Ë›[™UÚYZYJ‘‹œØØ[JNİ˜\ˆİ]\Ë˜]]ÔYÚ[™ÈOOH^ÚYŠİJÑšV]
^ÚYŠİOZ	‰‘Tİ
^İ˜\ˆUİÑ‹^\Ëœ‹œÜ]^ÔÚ^™J‹^‹›X^ÚYİQ
VÌKU
Ò”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJYJJWK\ËœÜÖ
İ\Ë›X\™Ú[–Ì×K\ÜŠÚ
İ\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
VÌKUİ	‰Š‘]YJI‰“‹˜Ø[
\ÊNÒ	‰Š\Ëœ‹œØ]™QÜ˜\XÜÔİ]J
K\Ëœ‹œ™Xİ
\Ë›X\™Ú[–Ì×K\Ë›X\™Ú[–ÌKœ‹[
K˜Û\

K™\ØØ\™]

JK\Ëœ‹^
‹‹KØ[™ÛN‘‹˜[™ÛK[YÛ’‹™[™\š[™Ó[ÙN‘‹œ™[™\š[™Ó[Ù_JK	‰\Ëœ‹œ™\İÜ™QÜ˜\XÜÔİ]J
__Y[ÙHO]	‰Š\Ë˜İœ™]”YÙS\İ[[SÙ™œÙ]
ÏV]QJNÑ‹œØØ[OKŒI‰Š\Ëœ‹œÙ]›ÛÚ^™JYJK\Ë›[™UÚYZYJ__Y[ÙH‹œØØ[OKŒI‰ŠYO]\Ëœ‹š[\›˜[™Ù]›ÛÚ^™J
K\Ëœ‹œÙ]›ÛÚ^™JYJ‘‹œØØ[JKYO]\Ë›[™UÚY\Ë›[™UÚYZYJ‘‹œØØ[JK\Ëœ‹^
‹^ÙK
İ\ËœÜÖÙKJİ\ËœÜÖKØ[™ÛN‘‹˜[™ÛK[YÛ’‹™[™\š[™Ó[ÙN‘‹œ™[™\š[™Ó[ÙKX^ÚY‘‹›X^ÚYJK‹œØØ[OKŒI‰Š\Ëœ‹œÙ]›ÛÚ^™JYJK\Ë›[™UÚYZYJ_KOY[˜İ[ÛŠ‹‹‹YJ^ÖVŸYOYY_\Ëœ‹š[\›˜[›İ]
ŠŠÖŠJÈˆŠÛŠŠÙYJJÈˆŠ_KOY[˜İ[ÛŠ‹‹Š^Ü™]\›ˆ\Ëœ‹›[™\Ê‹‹‹[[
_KYOY[˜İ[ÛŠ‹‹‹YKYKÙKÙKJ^İ\Ëœ‹š[\›˜[›İ]
İ
JŠÑŠJK
ÊYJÒŠJK
JYJÑŠJK
ÊÙJÒŠJK
JÙJÑŠJK
ÊJÒŠJK˜È—Kš›Ú[ŠˆŠJ_KOY[˜İ[ÛŠ‹‹‹YJ^Ù›ÜŠ˜\ˆYOLŠ“X]”KÙOSX]”KÌÒ–ÊR‹OZYNİ˜\ˆÙOSX]˜XœÊ‹RŠNĞÙOYI‰™YI‰ŠÙOZYKPÙJNÙ›ÜŠ˜\ˆOV×KÙOYYOËLNŒKRĞÙOŒYKMNÊ^İ˜\ˆÙO[
ÓÙJ“X]›Z[ŠÙKÙJNÓKœ\Ú
™K˜Ø[
\Ë‹ÙJJKÙKOSX]˜XœÊÙK[
KXÙ_\™]\›ˆ_K™OY[˜İ[ÛŠ‹‹Š^İ˜\ˆYOJ‹RŠKÌ‹YOQŠ“X]˜ÛÜÊYJKÙOQŠ“X]œÚ[ŠYJKÙOZYKOKTÙKÙOPÙJÙJÓJ“KSÙJĞÙJšYJÓJ”ÙKÙOMÌÊŠX]œÜ\
Š“ÙJ›
K[
KÊÙJ”ÙKSJšYJKYOPÙKXÙJ“KSJØÙJÙKÙOTYKK\]YYJÒ‹]SX]˜ÛÜÊ]
KYOSX]œÚ[Š]
NÜ™]\›ŞN‘Š“X]˜ÛÜÊŠKLN‘Š“X]œÚ[ŠŠK”YJ‘]\
•YKL”YJ•YJÜ
‘]Î™ÙJ‘]Y
•YKLÎ™ÙJ•YJÙ
‘]‘Š“X]˜ÛÜÊŠKM‘Š“X]œÚ[ŠŠ__KOY[˜İ[ÛŠŠ^Ü™]\›ˆN
‘‹ÓX]”_KY[˜İ[ÛŠ‹‹‹YKYKÙJ^İ˜\ˆÙOQŠËJŠ‹QŠKORŠËJŠYKRŠKÙOZYJËJŠ‹ZYJKTÙJËJŠYKTÙJKÙOSX]›Z[Š‹YKÙKÙJKYOSX]›X^
‹YKÙKÙJKSX]›Z[Š‹ÙKK
KÙOSX]›X^
‹ÙKK
NÜ™]\›ˆ™]ÈÊÙKYKXÙKÙK\
_K™OY[˜İ[ÛŠ‹‹‹YKYKÙKÙKJ^İ˜\ˆÙKÙKYKÙK]]YK]œV‹Q‹İYYKR‹ZYKV‹ÜTÙKYYKPÙKZYKSKTÙNÙ›ÜŠLÛNÛ
ÊÊQ]JJÙOQŠÊÙO[Í
JœœŠJÓÙJŠ
VŠÓÙJ”
KXÙJJJÓÙJŠ
ÓÙJŠYJÓÙJ’\
KY
KYOJ]JYORŠÓÙJ”İ
JÓÙJŠ
ÙOYYJÓÙJœÜŠKTYJJJÓÙJŠÙJÓÙJŠÙJÓÙJ‘YÙJKX]
KOLÊQ]UYKQ]]UYJNŠSX]›Z[Š]
KSX]›Z[ŠYJKSX]›X^
]
K]SX]›X^
]YJJNÜ™]\›ˆ™]ÈÊX]œ›İ[™

KX]œ›İ[™

KX]œ›İ[™
V
KX]œ›İ[™
]Z
J_KÙOY[˜İ[ÛŠ
^ÚYŠ\Ëœ™]“[™Q\Ú\Ë˜İ›[™Q\Ú›[™İ\Ë˜İ›[™Q\ÚÙ™œÙ]
^İ˜\ˆ‹‹J]\Ë˜İ›[™Q\Ú]\Ë˜İ›[™Q\ÚÙ™œÙ]”ÓÓ‹œİš[™ÚYJÛ[™Q\Ú‘‹[™Q\ÚÙ™œÙ]’ŸJJNİ\Ëœ™]“[™Q\ÚOOV‰‰Š\Ëœ‹œÙ][™Q\Ú
\Ë˜İ›[™Q\Ú\Ë˜İ›[™Q\ÚÙ™œÙ]
K\Ëœ™]“[™Q\ÚVŠ___JJ\‹TJK[˜İ[ÛŠJ^İ˜\ˆY[˜İ[ÛŠÊ^İ˜\ˆË‹‹ËË‹ÎÙ›ÜŠV×KLJÊÏXÏH—‹œÛXÙJË›[™İ	M
JK›[™İÚ™ÙŠÏM
JJË˜Ú\ÛÙP]
ŠO
JÊË˜Ú\ÛÙP]
ŠÌJOMŠJÊË˜Ú\ÛÙP]
ŠÌŠO
JÛË˜Ú\ÛÙP]
ŠÌÊJHOOLÊJJ
J
J
JJÏ^	NJJKÎJKJ^	NJJKÎJKJÏ^	NJJKÎJKJÏ^	NJJKÎJINKœ\Ú
ŠÌÌËÊÌÌËÊÌÌËŠÌÌËÊÌÌÊJN™œ\Ú
LŒŠNÜ™]\›ˆ[˜İ[ÛŠË
^Ù›ÜŠ˜\ˆÏUĞÏŒĞËKJZËœÜ

_JË›[™İ
Kİš[™Ë™œ›ÛPÚ\ÛÙK˜\Jİš[™Ë
JÈŸˆŸKY[˜İ[ÛŠÊ^İ˜\ˆË‹Tİš[™ËÏH›[™İ‹ÏLMKH˜Ú\ÛÙP]‹ÏHœÛXÙH‹ÏHœ™\XÙHÙ›ÜŠÖÔ×JLŠKÏ[ÖÔ×JLŠVÚ×J×ËÙËˆŠVÚ×Jˆ‹ˆHHHHHŠKV×KLJÊÏXÏH]]]]H–Ô×JÖİ×IM_JJVİ×NŞšÚ
ÏMJYMLŒŒŒJŠÖÓ—J
KLÌÊJÍŒMLJŠÖÓ—J
ÌJKLÌÊJÍÌŒJŠÖÓ—J
ÌŠKLÌÊJÎJŠÖÓ—J
ÌÊKLÌÊJÊÖÓ—J
Í
KLÌÊK‹œ\Ú
É™ŒÉ™ŒM‹É™É™
NÜ™]\›ˆ[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆPÎÔŒÔ‹KJUœÜ

_J‹Öİ×JK‹™œ›ÛPÚ\ÛÙK˜\J‹Š_KY[˜İ[ÛŠÊ^Ü™]\›ˆËœÜ]
ˆŠK›X\
[˜İ[ÛŠÊ^Ü™]\›ŠŒŠØË˜Ú\ÛÙP]

KÔİš[™ÊMŠJKœÛXÙJLŠ_JKš›Ú[ŠˆŠJÈˆŸKOY[˜İ[ÛŠÊ^İ˜\ˆÏ[™]È™YÑ^
×ŠÌNPKQ˜KY—^ÌŸJJÉÊNÚYŠ
Ï[Ëœ™\XÙJ×ËÙËˆŠJKš[™^ÙŠˆŠHOOKLI‰ŠÏ[ËœİXœİŠËš[™^ÙŠˆŠJJKË›[™İ	L‰‰ŠÊÏHŒŠKË\İ
ÊOOOHLJ\™]\›ˆˆÙ›ÜŠ˜\ˆHˆ‹LÙË›[™İÙŠÏLŠY
ÏTİš[™Ë™œ›ÛPÚ\ÛÙJŒŠÊÖÙ—JÛÖÙŠÌWJJNÜ™]\›ˆKÏY[˜İ[ÛŠÊ^Ù›ÜŠ˜\ˆÏ[™]ÈZ[\œ˜^JË›[™İ
K[Ë›[™İÙKNÊXÖÙO[Ë˜Ú\ÛÙP]

NÜ™]\›ŠÏZ
ÊJKœ™YXÙJ[˜İ[ÛŠ‹
^Ü™]\›ˆŠÔİš[™Ë™œ›ÛPÚ\ÛÙJ
_KˆŠ_NÙKœ›ØÙ\ÜÑ]PQš[\œÏY[˜İ[ÛŠËÊ^İ˜\ˆL[ßˆ‹V×NÙ›ÜŠ\[ÙŠÏXß×JOOHœİš[™È‰‰ŠÏVØ×JKLÙË›[™İÙ
ÏLJ\İÚ]Ú
ÖÙJ^ØØ\ÙHTĞÒRNQXÛÙH˜Ø\ÙH‹ĞTĞÒRNQXÛÙH™\ŠŠKœ\Ú
‹ĞTĞÒRNQ[˜ÛÙHŠNØœ™XZÎØØ\ÙHTĞÒRNQ[˜ÛÙH˜Ø\ÙH‹ĞTĞÒRNQ[˜ÛÙH™]
ŠKœ\Ú
‹ĞTĞÒRNQXÛÙHŠNØœ™XZÎØØ\ÙHTĞÒRR^XÛÙH˜Ø\ÙH‹ĞTĞÒRR^XÛÙH™XJŠKœ\Ú
‹ĞTĞÒRR^[˜ÛÙHŠNØœ™XZÎØØ\ÙHTĞÒRR^[˜ÛÙH˜Ø\ÙH‹ĞTĞÒRR^[˜ÛÙH™[ŠŠKœ\Ú
‹ĞTĞÒRR^XÛÙHŠNØœ™XZÎØØ\ÙH‘›]Q[˜ÛÙH˜Ø\ÙH‹Ñ›]Q[˜ÛÙH™\ÊŠKœ\Ú
‹Ñ›]QXÛÙHŠNØœ™XZÎÙY˜][›İÈ™]È\œ›ÜŠ	ÕHš[\ˆ‰ÊØÖÙJÉÈˆ\È›İ[\[Y[Y	Ê_\™]\›Ù]N™‹™]™\œÙPÚZ[šœ™]™\œÙJ
Kš›Ú[ŠˆŠ___J\‹TJK[˜İ[ÛŠJ^ÙK›ØYš[OY[˜İ[ÛŠ‹Š^Ü™]\›ˆ[˜İ[ÛŠKËÊ^ÜÏ\ÈOOHLKÏ]\[ÙˆÏOH™[˜İ[ÛˆÛÎ™[˜İ[ÛŠ
^ßNİ˜\ˆÏ]›ÚYİ^ØÏY[˜İ[ÛŠ‹
^İ˜\ˆ[™]ÈS™\]Y\İLÏY[˜İ[ÛŠÊ^İ˜\ˆWË›[™İÏV×KÏTİš[™Ë™œ›ÛPÚ\ÛÙNÙ›ÜŠLØØŠÏLJTËœ\Ú
ÊMI—Ë˜Ú\ÛÙP]
ŠJJNÜ™]\›ˆËš›Ú[ŠˆŠ_NÚYŠ›Ü[Š‘ÑU‹YŠK›İ™\œšYSZ[YU\J^ÜZ[ÈÚ\œÙ]^]\Ù\‹YYš[™YŠKOOHLI‰Š›Û›ØYY[˜İ[ÛŠ
^Şœİ]\ÏOOLŒÚ
Ê\Ëœ™\ÜÛœÙU^
JNš
›ÚY
_JKœÙ[™
[
K‰‰œİ]\ÏOOLŒ
\™]\›ˆÊœ™\ÜÛœÙU^
_JKËÊ_XØ]Úß\™]\›ˆßJ‹Š_KK˜[İÑœÔ™XY]›ÚYK›ØY[XYÙQš[OYK›ØYš[_J\‹TJK[˜İ[ÛŠJ^Ù[˜İ[Ûˆ

^Ü™]\›Šœ‹š[˜Ø[˜\ÏÔ›ÛZ\ÙKœ™\ÛÛ™Jœ‹š[˜Ø[˜\ÊN™ÚJ

OOš[\Ü
‹‹Ú[˜Ø[˜\Ë™\ÛKPĞœ”Ñ\KšœÈŠK×JJK˜Ø]Ú
[˜İ[ÛŠÊ^Ü™]\›ˆ›ÛZ\ÙKœ™Z™Xİ
™]È\œ›ÜŠÛİ[›İØY[˜Ø[˜\ÎˆŠØÊJ_JK[Š[˜İ[ÛŠÊ^Ü™]\›ˆË™Y˜][ØË™Y˜][˜ßJ_Y[˜İ[ÛˆŠ
^Ü™]\›Šœ‹‘ÓT\šYOÔ›ÛZ\ÙKœ™\ÛÛ™Jœ‹‘ÓT\šYJN™ÚJ

OOš[\Ü
‹‹Ü\šYK™\ËQUN\ØËšœÈŠK×JJK˜Ø]Ú
[˜İ[ÛŠÊ^Ü™]\›ˆ›ÛZ\ÙKœ™Z™Xİ
™]È\œ›ÜŠÛİ[›İØYÛ\\šYNˆŠØÊJ_JK[Š[˜İ[ÛŠÊ^Ü™]\›ˆË™Y˜][ØË™Y˜][˜ßJ_]˜\ˆY[˜İ[ÛŠÊ^İ˜\ˆZÛŠÊNÜ™]\›ˆOOH[™Yš[™YÈ[™Yš[™Y™OOHœİš[™ÈŸÈ[œİ[˜Ù[Ùˆİš[™ÏÈœİš[™È™OOH›[X™\ˆŸÈ[œİ[˜Ù[Ùˆ[X™\È›[X™\ˆ™OOH™[˜İ[ÛˆŸÈ[œİ[˜Ù[Ùˆ[˜İ[ÛÈ™[˜İ[Ûˆ˜É‰˜Ë˜ÛÛœİXİÜOOP\œ˜^OÈ˜\œ˜^H˜É‰˜Ë››ÙU\OOOLOÈ™[[Y[™OOH›Øš™XİÈ›Øš™Xİˆ[šÛ›İÛˆŸKOY[˜İ[ÛŠË
^İ˜\ˆYØİ[Y[˜Ü™X]Q[[Y[
ÊNÙ›ÜŠ˜\ˆ[ˆ˜Û\ÜÓ˜[YI‰Š‹˜Û\ÜÓ˜[YOY˜Û\ÜÓ˜[YJKš[›™\’S	‰™™Û\\šYI‰Š‹š[›™\’SY™Û\\šYKœØ[š]^™Jš[›™\’S
JKœİ[JY‹œİ[VÚOYœİ[VÚNÜ™]\›ˆŸKÏY[˜İ[ÛˆÊŠ^Ù›ÜŠ˜\ˆY››ÙU\OOOLÏÙØİ[Y[˜Ü™X]U^›ÙJ››ÙU˜[YJN™˜ÛÛ™S›ÙJLJKY™š\œİÚ[ŞŞ^›™^ÚX›[™ÊYˆOOHL	‰››ÙU\OOOLI‰››ÙS˜[YOOOH”ĞÔ’TŸ˜\[™Ú[
ÊŠJNÜ™]\›ˆ››ÙU\OOOLI‰Š››ÙS˜[YOOOHĞS•TÈÊÚYYÚYšZYÚYšZYÚ™Ù]ÛÛ^
Œ™ŠK™˜]Ò[XYÙJ
JN™››ÙS˜[YHOOH•VT‘PH‰‰™››ÙS˜[YHOOH”ÑSPÕŸ
˜[YOY˜[YJK˜Y]™[\İ[™\Š›ØY‹[˜İ[ÛŠ
^ÚœØÜ›ÛÜYœØÜ›ÛÜœØÜ›ÛYYœØÜ›ÛYKL
JKKÏY[˜İ[ÛˆÊ
^İ˜\ˆSØš™Xİ˜\ÜÚYÛŠË˜ÛÛ™\
›ÛZ\ÙKœ™\ÛÛ™J
JK”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJË[\]JJJKXË˜ÛÛ™\
›ÛZ\ÙKœ™\ÛÛ™J
KŠNÜ™]\›ŠZœÙ]›ÙÜ™\ÜÊKËKØ×JJKœÙ]

_NÊËœ›İİ\OSØš™Xİ˜Ü™X]J›ÛZ\ÙKœ›İİ\JJK˜ÛÛœİXİÜ[ËË˜ÛÛ™\Y[˜İ[ÛŠË
^Ü™]\›ˆË—×Ü›İ××ÏYËœ›İİ\KßKË[\]O^Ü›ÜÜÜ˜Î›[ÛÛZ[™\›[İ™\›^N›[Ø[˜\Î›[[YÎ›[›[YÙTÚ^™N›[Ø[˜XÚÎ™[˜İ[ÛŠ
^ß_K›ÙÜ™\ÜÎİ˜[Œİ]N›[ŒİXÚÎ–×_KÜÙš[[˜[YNˆ™š[Kœˆ‹X\™Ú[–ÌK[˜X›S[šÜÎˆLŒNŒ[˜Ø[˜\ÎßKœÔßK˜XÚÙÜ›İ[™ÛÛÜˆ˜[œÜ\™[Ÿ_KËœ›İİ\K™œ›ÛOY[˜İ[ÛŠË
^Ü™]\›ˆ\Ë[Š[˜İ[ÛŠ
^ÜİÚ]Ú
Y[˜İ[ÛŠŠ^ÜİÚ]Ú
ŠŠJ^ØØ\ÙHœİš[™Èœ™]\›ˆœİš[™ÈØØ\ÙH™[[Y[œ™]\›ˆ‹››ÙS˜[YKÓİÙ\Ø\ÙJ
OOOH˜Ø[˜\ÈÈ˜Ø[˜\Èˆ™[[Y[ÙY˜][œ™]\›ˆ[šÛ›İÛˆŸ_JÊK
^ØØ\ÙHœİš[™Èœ™]\›ˆ\Ë[ŠŠK[Š[˜İ[ÛŠŠ^Ü™]\›ˆ\ËœÙ]
ÜÜ˜Î˜J™]ˆ‹Ú[›™\’S˜ËÛ\\šYN™ŸJ_J_JNØØ\ÙH™[[Y[œ™]\›ˆ\ËœÙ]
ÜÜ˜Î˜ßJNØØ\ÙH˜Ø[˜\Èœ™]\›ˆ\ËœÙ]
ØØ[˜\Î˜ßJNØØ\ÙHš[YÈœ™]\›ˆ\ËœÙ]
Ú[YÎ˜ßJNÙY˜][œ™]\›ˆ\Ë™\œ›ÜŠ•[šÛ›İÛˆÛİ\˜ÙH\KˆŠ__J_KËœ›İİ\KÏY[˜İ[ÛŠÊ^ÜİÚ]Ú
Ê^ØØ\ÙH˜ÛÛZ[™\ˆœ™]\›ˆ\ËĞÛÛZ[™\Š
NØØ\ÙH˜Ø[˜\Èœ™]\›ˆ\ËĞØ[˜\Ê
NØØ\ÙHš[YÈœ™]\›ˆ\ËÒ[YÊ
NØØ\ÙHœˆœ™]\›ˆ\ËÔŠ
NÙY˜][œ™]\›ˆ\Ë™\œ›ÜŠ’[˜[Y\™Ù]ˆŠ__KËœ›İİ\KĞÛÛZ[™\Y[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›ÜœÜ˜ß\Ë™\œ›ÜŠØ[››İ\XØ]HH›ÈÛİ\˜ÙHSˆŠ_K[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›ÜœYÙTÚ^™_\ËœÙ]YÙTÚ^™J
_WJK[Š[˜İ[ÛŠ
^İ˜\ˆÏ^ÜÜÚ][Ûˆœ™[]]™H‹\Ü^Nˆš[›[™KX›ØÚÈ‹ÚYŠ\[Ùˆ\Ë›ÜÚYOH›[X™\ˆŸ\Ó˜SŠ\Ë›ÜÚY
_\[Ùˆ\Ë›ÜÚ[™İÕÚYOH›[X™\ˆŸ\Ó˜SŠ\Ë›ÜÚ[™İÕÚY
OÓX]›X^
\Ëœ›ÜœÜ˜Ë˜ÛY[ÚY\Ëœ›ÜœÜ˜ËœØÜ›ÛÚY\Ëœ›ÜœÜ˜Ë›Ù™œÙ]ÚY
N\Ë›ÜÚ[™İÕÚY
JÈœ‹YŒšYÚŒÜŒX\™Ú[ˆ˜]]È‹˜XÚÙÜ›İ[™ÛÛÜ\Ë›Ü˜˜XÚÙÜ›İ[™ÛÛÜŸK\Ê\Ëœ›ÜœÜ˜Ë\Ë›Üš[˜Ø[˜\Ëš˜]˜\ØÜš\[˜X›Y
NÙYÓ˜[YOOOH“ÑH‰‰ŠËšZYÚSX]›X^
Øİ[Y[˜›ÙKœØÜ›ÛZYÚØİ[Y[˜›ÙK›Ù™œÙ]ZYÚØİ[Y[™Øİ[Y[[[Y[˜ÛY[ZYÚØİ[Y[™Øİ[Y[[[Y[œØÜ›ÛZYÚØİ[Y[™Øİ[Y[[[Y[›Ù™œÙ]ZYÚ
JÈœŠK\Ëœ›Ü›İ™\›^OXJ™]ˆ‹ØÛ\ÜÓ˜[YNˆš[œ—×Ûİ™\›^H‹İ[NÜÜÚ][Ûˆ™š^Y‹İ™\™›İÎˆšY[ˆ‹’[™^ŒYLËYˆ‹LL‹šYÚŒ›İÛNŒÜŒ_JK\Ëœ›Ü˜ÛÛZ[™\XJ™]ˆ‹ØÛ\ÜÓ˜[YNˆš[œ—×ØÛÛZ[™\ˆ‹İ[N˜ßJK\Ëœ›Ü˜ÛÛZ[™\‹˜\[™Ú[

K\Ëœ›Ü˜ÛÛZ[™\‹™š\œİÚ[˜\[™Ú[
J™]ˆ‹Üİ[NØÛX\ˆ˜›İ‹›Ü™\ˆŒ›Û™H˜[œÜ\™[‹X\™Ú[ŒY[™ÎŒZYÚŒ_JJK\Ëœ›Ü˜ÛÛZ[™\‹œİ[K™›Ø]H››Û™H‹\Ëœ›Ü›İ™\›^K˜\[™Ú[
\Ëœ›Ü˜ÛÛZ[™\ŠKØİ[Y[˜›ÙK˜\[™Ú[
\Ëœ›Ü›İ™\›^JK\Ëœ›Ü˜ÛÛZ[™\‹™š\œİÚ[œİ[KœÜÚ][ÛHœ™[]]™H‹\Ëœ›Ü˜ÛÛZ[™\‹šZYÚSX]›X^
\Ëœ›Ü˜ÛÛZ[™\‹™š\œİÚ[˜ÛY[ZYÚ\Ëœ›Ü˜ÛÛZ[™\‹™š\œİÚ[œØÜ›ÛZYÚ\Ëœ›Ü˜ÛÛZ[™\‹™š\œİÚ[›Ù™œÙ]ZYÚ
JÈœŸJ_KËœ›İİ\KĞØ[˜\ÏY[˜İ[ÛŠ
^İ˜\ˆÏVÙ[˜İ[ÛŠ
^Ü™]\›ˆØİ[Y[˜›ÙK˜ÛÛZ[œÊ\Ëœ›Ü˜ÛÛZ[™\Š_\ËĞÛÛZ[™\Š
_WNÜ™]\›ˆ\Ë[“\İ
ÊK[Š
K[Š[˜İ[ÛŠ
^İ˜\ˆSØš™Xİ˜\ÜÚYÛŠßK\Ë›Üš[˜Ø[˜\ÊNÜ™]\›ˆ[]H‹›Ûœ™[™\™Y
\Ëœ›Ü˜ÛÛZ[™\‹Š_JK[Š[˜İ[ÛŠ
^Ê\Ë›Üš[˜Ø[˜\Ë›Ûœ™[™\™Y[˜İ[ÛŠ
^ßJJ
K\Ëœ›Ü˜Ø[˜\ÏYØİ[Y[˜›ÙKœ™[[İ™PÚ[
\Ëœ›Ü›İ™\›^J_J_KËœ›İİ\KĞÛÛ^™Y[˜İ[ÛŠ
^İ˜\ˆÏVÙ[˜İ[ÛŠ
^Ü™]\›ˆØİ[Y[˜›ÙK˜ÛÛZ[œÊ\Ëœ›Ü˜ÛÛZ[™\Š_\ËĞÛÛZ[™\Š
_WNÜ™]\›ˆ\Ë[“\İ
ÊK[Š
K[Š[˜İ[ÛŠ
^İ˜\ˆ]\Ë›ÜšœÔ‹]\Ë›Ü™›Û˜XÙ\Ë]\[Ùˆ\Ë›ÜÚYOH›[X™\ˆŸ\Ó˜SŠ\Ë›ÜÚY
_\[Ùˆ\Ë›ÜÚ[™İÕÚYOH›[X™\ˆŸ\Ó˜SŠ\Ë›ÜÚ[™İÕÚY
OÌN\Ë›ÜÚYİ\Ë›ÜÚ[™İÕÚYSØš™Xİ˜\ÜÚYÛŠØ\Ş[˜ÎˆL[İÕZ[ˆLØØ[NØÜ›Û\Ë›ÜœØÜ›ÛØÜ›ÛN\Ë›ÜœØÜ›Û_˜XÚÙÜ›İ[™ÛÛÜˆˆÙ™™™™™ˆ‹[XYÙU[Y[İ]ŒMYLËÙÙÚ[™ÎˆL›ŞN›[™[[İ™PÛÛZ[™\ˆL›Ü™ZYÛ“Øš™Xİ™[™\š[™ÎˆLK\ÙPÓÔ”ÎˆL_K\Ë›Üš[˜Ø[˜\ÊNÚYŠ[]H‹›Ûœ™[™\™Y‹˜ÛÛ^™˜]]ÔYÚ[™Ï]\Ë›Ü˜]]ÔYÚ[™ÏOO]›ÚY\Ë›Ü˜]]ÔYÚ[™Ë‹˜ÛÛ^™œÜÖ]\Ë›Ü‹˜ÛÛ^™œÜÖO]\Ë›ÜK‹˜ÛÛ^™›X\™Ú[]\Ë›Ü›X\™Ú[‹‹˜ÛÛ^™™›Û˜XÙ\ÏZ
Y›ÜŠ˜\ˆÏLİÏ›[™İÊÊİÊ^İ˜\ˆÏZİ×KWËœÜ˜Ë™š[™
[˜İ[ÛŠÊ^Ü™]\›ˆË™›Ü›X]OOHY]\HŸJNÓ‰‰™‹˜Y›Û
‹\›Ëœ™Y‹›˜[YKËœ™Y‹œİ[J_\™]\›ˆ‹Ú[™İÒZYÚX‹Ú[™İÒZYÚ‹Ú[™İÒZYÚX‹Ú[™İÒZYÚOLÓX]›X^
\Ëœ›Ü˜ÛÛZ[™\‹˜ÛY[ZYÚ\Ëœ›Ü˜ÛÛZ[™\‹œØÜ›ÛZYÚ\Ëœ›Ü˜ÛÛZ[™\‹›Ù™œÙ]ZYÚ
N˜‹Ú[™İÒZYÚ‹˜ÛÛ^™œØ]™JL
K
\Ëœ›Ü˜ÛÛZ[™\‹Š_JK[Š[˜İ[ÛŠ
^İ\Ë›ÜšœÔ‹˜ÛÛ^™œ™\İÜ™JL
K
\Ë›Üš[˜Ø[˜\Ë›Ûœ™[™\™Y[˜İ[ÛŠ
^ßJJ
K\Ëœ›Ü˜Ø[˜\ÏYØİ[Y[˜›ÙKœ™[[İ™PÚ[
\Ëœ›Ü›İ™\›^J_J_KËœ›İİ\KÒ[YÏY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›Ü˜Ø[˜\ß\ËĞØ[˜\Ê
_WJK[Š[˜İ[ÛŠ
^İ˜\ˆÏ]\Ëœ›Ü˜Ø[˜\ËÑ]UT“
š[XYÙKÈŠİ\Ë›Üš[XYÙK\K\Ë›Üš[XYÙKœ]X[]JNİ\Ëœ›Üš[YÏYØİ[Y[˜Ü™X]Q[[Y[
š[YÈŠK\Ëœ›Üš[YËœÜ˜ÏXßJ_KËœ›İİ\KÔY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\ËĞÛÛ^™

_WJK[Š[˜İ[ÛŠ
^İ\Ëœ›Üœ]\Ëœ›ÜœŸ\Ë›ÜšœÔŸJ_KËœ›İİ\K›İ]]Y[˜İ[ÛŠËŠ^Ü™]\›ŠYŸœˆŠKÓİÙ\Ø\ÙJ
OOOHš[YÈŸ‹ÓİÙ\Ø\ÙJ
OOOHš[XYÙHİ\Ë›İ]][YÊË
N\Ë›İ]]ŠË
_KËœ›İİ\K›İ]]Y[˜İ[ÛŠË
^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›ÜœŸ\ËÔŠ
_WJK[Š[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›Üœ‹›İ]]
Ë
_J_KËœ›İİ\K›İ]][YÏY[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›Üš[Yß\ËÒ[YÊ
_WJK[Š[˜İ[ÛŠ
^ÜİÚ]Ú
Ê^ØØ\ÙH›ÚY˜Ø\ÙHš[YÈœ™]\›ˆ\Ëœ›Üš[YÎØØ\ÙH™]]\š\İš[™È˜Ø\ÙH™]]\›İš[™Èœ™]\›ˆ\Ëœ›Üš[YËœÜ˜ÎØØ\ÙH™]]\šH˜Ø\ÙH™]]\›œ™]\›ˆØİ[Y[›ØØ][Û‹š™Y]\Ëœ›Üš[YËœÜ˜ÎÙY˜][›İÉÒ[XYÙHİ]]\H‰ÊØÊÉÈˆ\È›İİ\ÜY‰ß_J_KËœ›İİ\KœØ]™OY[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›ÜœŸ\ËÔŠ
_WJKœÙ]
ÏŞÙš[[˜[YN˜ßN›[
K[Š[˜İ[ÛŠ
^İ\Ëœ›Üœ‹œØ]™J\Ë›Ü™š[[˜[YJ_J_KËœ›İİ\K™ĞØ[˜XÚÏY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[“\İ
Ù[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ›ÜœŸ\ËÔŠ
_WJK[Š[˜İ[ÛŠ
^İ\Ëœ›Ü˜Ø[˜XÚÊ\Ëœ›ÜœŠ_J_KËœ›İİ\KœÙ]Y[˜İ[ÛŠÊ^ÚYŠŠÊHOOH›Øš™XİŠ\™]\›ˆ\Îİ˜\ˆSØš™XİšÙ^\ÊßßJK›X\
[˜İ[ÛŠŠ^ÚYŠˆ[ˆË[\]Kœ›Ü
\™]\›ˆ[˜İ[ÛŠ
^İ\Ëœ›ÜÙ—OXÖÙ—_NÜİÚ]Ú
Š^ØØ\ÙH›X\™Ú[ˆœ™]\›ˆ\ËœÙ]X\™Ú[‹˜š[™
\ËË›X\™Ú[ŠNØØ\ÙHšœÔˆœ™]\›ˆ[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›ÜšœÔXËšœÔ‹\ËœÙ]YÙTÚ^™J
_NØØ\ÙHœYÙTÚ^™Hœ™]\›ˆ\ËœÙ]YÙTÚ^™K˜š[™
\ËËœYÙTÚ^™JNÙY˜][œ™]\›ˆ[˜İ[ÛŠ
^İ\Ë›ÜÙ—OXÖÙ—___K\ÊNÜ™]\›ˆ\Ë[Š[˜İ[ÛŠ
^Ü™]\›ˆ\Ë[“\İ

_J_KËœ›İİ\K™Ù]Y[˜İ[ÛŠË
^Ü™]\›ˆ\Ë[Š[˜İ[ÛŠ
^İ˜\ˆXÈ[ˆË[\]Kœ›Üİ\Ëœ›ÜØ×N\Ë›ÜØ×NÜ™]\›ˆÙ
ŠN™ŸJ_KËœ›İİ\KœÙ]X\™Ú[Y[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë[Š[˜İ[ÛŠ
^ÜİÚ]Ú
ŠÊJ^ØØ\ÙH›[X™\ˆ˜ÏVØËËË×NØØ\ÙH˜\œ˜^HšYŠË›[™İOOL‰‰ŠÏVØÖÌKÖÌWKÖÌKÖÌWWJKË›[™İOOM
Xœ™XZÎÙY˜][œ™]\›ˆ\Ë™\œ›ÜŠ’[˜[YX\™Ú[ˆ\œ˜^KˆŠ_]\Ë›Ü›X\™Ú[XßJK[Š\ËœÙ]YÙTÚ^™J_KËœ›İİ\KœÙ]YÙTÚ^™OY[˜İ[ÛŠÊ^Ù[˜İ[Ûˆ
‹
^Ü™]\›ˆX]™›ÛÜŠŠšÍÌŠMŠ_\™]\›ˆ\Ë[Š[˜İ[ÛŠ
^ÊÏXß\‹™Ù]YÙTÚ^™J\Ë›ÜšœÔŠJKš\ÓİÛ”›Ü\Jš[›™\ˆŠ_
Ëš[›™\^İÚY˜ËÚY]\Ë›Ü›X\™Ú[–ÌWK]\Ë›Ü›X\™Ú[–Ì×KZYÚ˜ËšZYÚ]\Ë›Ü›X\™Ú[–ÌK]\Ë›Ü›X\™Ú[–Ì—_KËš[›™\‹œ^İÚY™
Ëš[›™\‹ÚYËšÊKZYÚ™
Ëš[›™\‹šZYÚËšÊ_KËš[›™\‹œ˜][ÏXËš[›™\‹šZYÚØËš[›™\‹ÚY
K\Ëœ›ÜœYÙTÚ^™OXßJ_KËœ›İİ\KœÙ]›ÙÜ™\ÜÏY[˜İ[ÛŠË‹
^Ü™]\›ˆÈO[[	‰Š\Ëœ›ÙÜ™\ÜË˜[XÊKO[[	‰Š\Ëœ›ÙÜ™\ÜËœİ]OY
KˆO[[	‰Š\Ëœ›ÙÜ™\ÜË›YŠKO[[	‰Š\Ëœ›ÙÜ™\ÜËœİXÚÏZ
K\Ëœ›ÙÜ™\ÜËœ˜][Ï]\Ëœ›ÙÜ™\ÜË˜[İ\Ëœ›ÙÜ™\ÜËœİ]K\ßKËœ›İİ\K\]T›ÙÜ™\ÜÏY[˜İ[ÛŠË‹
^Ü™]\›ˆ\ËœÙ]›ÙÜ™\ÜÊÏİ\Ëœ›ÙÜ™\ÜË˜[
ØÎ›[[İ\Ëœ›ÙÜ™\ÜË›ŠÙ›[İ\Ëœ›ÙÜ™\ÜËœİXÚË˜ÛÛ˜Ø]

N›[
_KËœ›İİ\K[Y[˜İ[ÛŠË
^İ˜\ˆ]\ÎÜ™]\›ˆ\Ë[ÛÜ™JË[˜İ[ÛŠ
^Ü™]\›ˆ‹\]T›ÙÜ™\ÜÊ[[KÚJK›ÛZ\ÙKœ›İİ\K[‹˜Ø[
\Ë[˜İ[ÛŠŠ^Ü™]\›ˆ‹\]T›ÙÜ™\ÜÊ[
KŸJK[Š
K[Š[˜İ[ÛŠŠ^Ü™]\›ˆ‹\]T›ÙÜ™\ÜÊJKŸJ_J_KËœ›İİ\K[ÛÜ™OY[˜İ[ÛŠËŠ^ÙYŸ›ÛZ\ÙKœ›İİ\K[İ˜\ˆ]\ÎØÉ‰ŠÏXË˜š[™

JK	‰ŠY˜š[™

JNİ˜\ˆT›ÛZ\ÙKÔİš[™Ê
Kš[™^ÙŠ–Û˜]]™HÛÙWHŠHOOKLI‰”›ÛZ\ÙK›˜[YOOOH”›ÛZ\ÙHÚ›Ë˜ÛÛ™\
Øš™Xİ˜\ÜÚYÛŠßK
K›ÛZ\ÙKœ›İİ\JKY‹˜Ø[
Ë
NÜ™]\›ˆË˜ÛÛ™\
‹—×Ü›İ××Ê_KËœ›İİ\K[‘^\›˜[Y[˜İ[ÛŠË
^Ü™]\›ˆ›ÛZ\ÙKœ›İİ\K[‹˜Ø[
\ËË
_KËœ›İİ\K[“\İY[˜İ[ÛŠÊ^İ˜\ˆ]\ÎÜ™]\›ˆË™›Ü‘XXÚ
[˜İ[ÛŠŠ^ÙY[ÛÜ™JŠ_JKKËœ›İİ\K˜Ø]ÚY[˜İ[ÛŠÊ^ØÉ‰ŠÏXË˜š[™
\ÊJNİ˜\ˆT›ÛZ\ÙKœ›İİ\K˜Ø]Ú˜Ø[
\ËÊNÜ™]\›ˆË˜ÛÛ™\
\Ê_KËœ›İİ\K˜Ø]Ú^\›˜[Y[˜İ[ÛŠÊ^Ü™]\›ˆ›ÛZ\ÙKœ›İİ\K˜Ø]Ú˜Ø[
\ËÊ_KËœ›İİ\K™\œ›ÜY[˜İ[ÛŠÊ^Ü™]\›ˆ\Ë[Š[˜İ[ÛŠ
^İ›İÈ™]È\œ›ÜŠÊ_J_KËœ›İİ\K\Ú[™Ï[Ëœ›İİ\KœÙ]Ëœ›İİ\KœØ]™P\Ï[Ëœ›İİ\KœØ]™KËœ›İİ\K™^Ü[Ëœ›İİ\K›İ]]Ëœ›İİ\Kœ[[Ëœ›İİ\K[‹\‹™Ù]YÙTÚ^™OY[˜İ[ÛŠËŠ^ÚYŠÛŠÊOOOH›Øš™XİŠ^İ˜\ˆXÎØÏZ›ÜšY[][Û‹Z[š]Z™›Ü›X]ŸYY›[H‹YŸ˜M‹ÏJˆŠÊß”ŠJKÓİÙ\Ø\ÙJ
Nİ˜\ˆJˆŠÙŠKÓİÙ\Ø\ÙJ
KÏ^ØL–ÌŒÎËMÌÍÌŒÎWKLN–ÌMËÎŒÎËMKL–ÌLNLMKMËÎKLÎ–ÎKKLNLMWKM–ÍNMKŒKWKMN–ÍNKLËNMKŒKM–ÌMËNKL×KMÎ–ÌŒKÍ‹MËKN–ÌMËŒKÍ—KNN–ÌLMËKLL–ÍÌËËLKŒ–ÌÍKŒNWKŒN–ÌŒŒKÍWKŒ–ÌMMËŒÌ‹ŒŒWKŒÎ–ÌLŒËMMËŒÌ—K–ÍÌ‹LŒ×KN–ÍNKÌ—K–ÌÍMŒÌËNWKÎ–ÌKKÍMŒÌ×K–ÌMÍKÍKKWKN–ÌLÌ‹MÍKÍWKŒL–ÎËËLÌ—KÌ–ÌNNKŒÍËÍÍ‹MKÌN–ÌNÍ‹KNNKŒÍ×KÌ–ÌLNŒËNÍ‹WKÌÎ–ÎLNËLNŒ×KÍ–ÍKŒLËLN×KÍN–ÍNKŒŒKKŒL×KÍ–ÌÌŒËŒMKNKŒŒWKÍÎ–ÌŒKŒKÌŒËŒMWKÎ–ÌMŒKMËŒKŒWKÎN–ÌLLËŒÎKMŒKM×KÌL–ÍÎKŒÍËLLËŒÎWK–ÌÌLKKŒŒËŒ—K]\–ÍŒL‹ÎL—K™Ûİ™\››Y[[]\ˆ–ÍMÍ‹ÍM—KYØ[–ÍŒL‹LKš[š[Ü‹[YØ[–ÍMÍ‹ÍŒKYÙ\–ÌLŒÎL—KX›ÚY–ÍÎL‹LŒK˜Ü™Y]XØ\™–ÌMLË×_NÜİÚ]Ú

^ØØ\ÙHœLNØœ™XZÎØØ\ÙH›[HMÌ‹ÌKØœ™XZÎØØ\ÙH˜ÛHMÌ‹Ì‹MØœ™XZÎØØ\ÙHš[ˆMÌØœ™XZÎØØ\ÙHœKÍNØœ™XZÎØØ\ÙHœÈ˜Ø\ÙH™[HLLØœ™XZÎØØ\ÙH™^MØœ™XZÎÙY˜][›İÈ’[˜[Y[š]ˆŠÙ]˜\ˆËLÏLÚYŠËš\ÓİÛ”›Ü\JŠJS]ÖØ—VÌWKŞÏ]ÖØ—VÌKŞÙ[ÙH^ÓY–ÌWKÏY–Ì_XØ]Úİ›İÈ™]È\œ›ÜŠ’[˜[Y›Ü›X]ˆŠÙŠ_ZYŠÏOOHœŸÏOOHœÜ˜Z]ŠXÏHœ‹Ï“‰‰ŠÏTËÏS‹WÊNÙ[Ù^ÚYŠÈOOH›‰‰˜ÈOOH›[™ØØ\HŠ]›İÈ’[˜[YÜšY[][ÛˆŠØÎØÏH›‹”É‰ŠÏTËÏS‹WÊ_\™]\›İÚY”ËZYÚ“‹[š]™ÎÜšY[][Û˜ß_KKš[Y[˜İ[ÛŠË
^ÊYßJK˜Ø[˜XÚÏY˜Ø[˜XÚß[˜İ[ÛŠ
^ßKš[˜Ø[˜\ÏYš[˜Ø[˜\ßßKš[˜Ø[˜\Ë˜Ø[˜\ÏYš[˜Ø[˜\Ë˜Ø[˜\ß\Ë˜Ø[˜\ËšœÔYšœÔŸ\Ë™›Û˜XÙ\ÏY™›Û˜XÙ\ÏÙ™›Û˜XÙ\Ë›X\
ÊN›[İ˜\ˆ[™]ÈÊ
NÜ™]\›ˆÛÜšÙ\Ù™‹™œ›ÛJÊK™ĞØ[˜XÚÊ
__J\‹TJK\‹TK˜Y”ÏY[˜İ[ÛŠJ^İ˜\ˆ‹Y[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆÏHˆ‹ÏLÛÏK›[™İÛÊÊÊ^İ˜\ˆÏXVÛ×NÚYŠÏOOHŠŸÏOOHŠHŠ^Ù›ÜŠ˜\ˆL[ËLNÙL	‰˜VÙ—OOOH—Ù‹KJY
ÊÎÜÊÏY	LOLÈ—ŠØÎ˜ßY[ÙHÊÏXß\™]\›ˆßJJNÜ™]\›ˆ\Ëš[\›˜[™]™[ËœİXœØÜšX™JœÜİ]™\Ûİ\˜Ù\È‹[˜İ[ÛŠ
^İ]\Ëš[\›˜[›™]ÓØš™Xİ

K\Ëš[\›˜[›İ]
ŠK\Ëš[\›˜[›İ]
‹Ó˜[Y\ÈÊ[X™YY”ÊHŠÊ
ÌJJÈˆ—HŠK\Ëš[\›˜[›İ]
ˆŠK\Ëš[\›˜[›İ]
™[™ØšˆŠK]\Ëš[\›˜[›™]ÓØš™Xİ

K\Ëš[\›˜[›İ]
ŠK\Ëš[\›˜[›İ]
‹ÔÈÒ˜]˜TØÜš\ŠK\Ëš[\›˜[›İ]
‹Ò”È
ŠÛŠÈŠHŠK\Ëš[\›˜[›İ]
ˆŠK\Ëš[\›˜[›İ]
™[™ØšˆŠ_JK\Ëš[\›˜[™]™[ËœİXœØÜšX™Jœ]Ø][ÙÈ‹[˜İ[ÛŠ
^İOO]›ÚY	‰œˆOO]›ÚY	‰\Ëš[\›˜[›İ]
‹Ó˜[Y\ÈÒ˜]˜TØÜš\Šİ
ÈˆˆŠ_JK\ßK[˜İ[ÛŠJ^İ˜\ˆÙK™]™[Ëœ\Ú
ÈœÜİ]™\Ûİ\˜Ù\È‹[˜İ[ÛŠ
^İ˜\ˆ]\ËK×Š
ÊHØš‰ÎÚYŠ\Ë›İ][™Kœ›Ûİ˜Ú[™[‹›[™İŒ
Y›ÜŠ˜\ˆO\‹›İ][™Kœ™[™\Š
KœÜ]
×—‹ÊKÏLÜÏK›[™İÜÊÊÊ^İ˜\ˆÏXVÜ×KÏ[‹™^XÊÊNÚYŠÈO[[
^İ˜\ˆXÖÌWNÜ‹š[\›˜[›™]ÓØš™XİY™\œ™Y™YÚ[ŠLJ_\‹š[\›˜[Üš]JÊ_ZYŠ\Ë›İ][™K˜Ü™X]S˜[YY\İ[˜][ÛœÊ^İ˜\ˆ]\Ëš[\›˜[œYÙ\Ë›[™İV×NÙ›ÜŠÏLÜÏÜÊÊÊ^İ˜\ˆ\‹š[\›˜[›™]ÓØš™Xİ

NÚœ\Ú

Nİ˜\ˆ\‹š[\›˜[™Ù]YÙR[™›ÊÊÌJNÜ‹š[\›˜[Üš]JÑÈŠØ‹›Øš’Y
ÈˆˆÖVˆ[[[Oˆ[™ØšˆŠ_]˜\ˆÏ\‹š[\›˜[›™]ÓØš™Xİ

NÙ›ÜŠ‹š[\›˜[Üš]JÓ˜[Y\ÈÈŠKÏLÜÏ›[™İÜÊÊÊ\‹š[\›˜[Üš]JŠYÙWÈŠÊÊÌJJÈŠHŠÚÜ×JÈˆˆŠNÜ‹š[\›˜[Üš]JˆHˆ‹™[™ØšˆŠK\‹š[\›˜[›™]ÓØš™Xİ

K‹š[\›˜[Üš]JÑ\İÈŠİÊÈˆˆŠK‹š[\›˜[Üš]Jˆ‹™[™ØšˆŠ__WJKK™]™[Ëœ\Ú
Èœ]Ø][ÙÈ‹[˜İ[ÛŠ
^İ˜\ˆ]\ÎÜ‹›İ][™Kœ›Ûİ˜Ú[™[‹›[™İŒ	‰Š‹š[\›˜[Üš]J‹Óİ][™\È‹\Ë›İ][™K›XZÙT™YŠ\Ë›İ][™Kœ›Ûİ
JK\Ë›İ][™K˜Ü™X]S˜[YY\İ[˜][ÛœÉ‰œ‹š[\›˜[Üš]J‹Ó˜[Y\ÈŠİ
ÈˆˆŠJ_WJKK™]™[Ëœ\Ú
Èš[š]X[^™Y‹[˜İ[ÛŠ
^İ˜\ˆ]\ÎÜ‹›İ][™O^ØÜ™X]S˜[YY\İ[˜][ÛœÎˆLK›ÛİØÚ[™[–×__K‹›İ][™K˜YY[˜İ[ÛŠ‹KÊ^İ˜\ˆÏ^İ]N˜KÜ[ÛœÎœËÚ[™[–×_NÜ™]\›ˆO[[	‰Š]\Ëœ›Ûİ
K‹˜Ú[™[‹œ\Ú
ÊKßK‹›İ][™Kœ™[™\Y[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜İ^ßK\Ë˜İ˜[Hˆ‹\Ë˜İœ\‹\Ë™Ù[’Y×ÜŠ\Ëœ›Ûİ
K\Ëœ™[™\”›Ûİ
\Ëœ›Ûİ
K\Ëœ™[™\’][\Ê\Ëœ›Ûİ
K\Ë˜İ˜[K‹›İ][™K™Ù[’Y×ÜY[˜İ[ÛŠŠ^Û‹šY\‹š[\›˜[›™]ÓØš™XİY™\œ™Y

NÙ›ÜŠ˜\ˆOLØO‹˜Ú[™[‹›[™İØJÊÊ]\Ë™Ù[’Y×ÜŠ‹˜Ú[™[–ØWJ_K‹›İ][™Kœ™[™\”›ÛİY[˜İ[ÛŠŠ^İ\Ë›Øš”İ\
ŠK\Ë›[™J‹Õ\HÓİ][™\ÈŠK‹˜Ú[™[‹›[™İŒ	‰Š\Ë›[™J‹Ñš\œİŠİ\Ë›XZÙT™YŠ‹˜Ú[™[–ÌJJK\Ë›[™J‹Ó\İŠİ\Ë›XZÙT™YŠ‹˜Ú[™[–Û‹˜Ú[™[‹›[™İLWJJJK\Ë›[™J‹ĞÛİ[Šİ\Ë˜Ûİ[ÜŠØÛİ[ŒKŠJK\Ë›Øš‘[™

_K‹›İ][™Kœ™[™\’][\ÏY[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆO]\Ë˜İœ‹š[\›˜[™Ù]™\XØ[ÛÛÜ™[˜]Tİš[™ËÏLÜÏ‹˜Ú[™[‹›[™İÜÊÊÊ^İ˜\ˆÏ[‹˜Ú[™[–Ü×Nİ\Ë›Øš”İ\
ÊK\Ë›[™J‹Õ]HŠİ\Ë›XZÙTİš[™ÊË]JJK\Ë›[™J‹Ô\™[Šİ\Ë›XZÙT™YŠŠJKÏŒ	‰\Ë›[™J‹Ô™]ˆŠİ\Ë›XZÙT™YŠ‹˜Ú[™[–ÜËLWJJKÏ‹˜Ú[™[‹›[™İLI‰\Ë›[™J‹Ó™^Šİ\Ë›XZÙT™YŠ‹˜Ú[™[–ÜÊÌWJJKË˜Ú[™[‹›[™İŒ	‰Š\Ë›[™J‹Ñš\œİŠİ\Ë›XZÙT™YŠË˜Ú[™[–ÌJJK\Ë›[™J‹Ó\İŠİ\Ë›XZÙT™YŠË˜Ú[™[–ÛË˜Ú[™[‹›[™İLWJJJNİ˜\ˆÏ]\Ë˜Ûİ[]\Ë˜Ûİ[ÜŠØÛİ[ŒKÊNÚYŠÏŒ	‰\Ë›[™J‹ĞÛİ[ŠØÊKË›Ü[ÛœÉ‰›Ë›Ü[ÛœËœYÙS[X™\Š^İ˜\ˆ\‹š[\›˜[™Ù]YÙR[™›ÊË›Ü[ÛœËœYÙS[X™\ŠNİ\Ë›[™J‹Ñ\İÈŠÙ›Øš’Y
ÈˆˆÖVˆŠØJ
JÈˆHŠ_]\Ë›Øš‘[™

_Y›ÜŠ˜\ˆLÙ‹˜Ú[™[‹›[™İÙŠÊÊ]\Ëœ™[™\’][\Ê‹˜Ú[™[–Ù—J_K‹›İ][™K›[™OY[˜İ[ÛŠŠ^İ\Ë˜İ˜[
Ï[ŠØ‚˜K‹›İ][™K›XZÙT™YY[˜İ[ÛŠŠ^Ü™]\›ˆ‹šY
ÈˆˆŸK‹›İ][™K›XZÙTİš[™ÏY[˜İ[ÛŠŠ^Ü™]\›ˆŠŠÜ‹š[\›˜[œ‘\ØØ\JŠJÈŠHŸK‹›İ][™K›Øš”İ\Y[˜İ[ÛŠŠ^İ\Ë˜İ˜[
ÏX‚˜
Û‹šY
ØØš—‚‚˜K‹›İ][™K›Øš‘[™Y[˜İ[ÛŠ
^İ\Ë˜İ˜[
ÏXˆ‚™[™Øš—‚˜K‹›İ][™K˜Ûİ[ÜY[˜İ[ÛŠ‹J^Ù›ÜŠ˜\ˆÏLÜÏK˜Ú[™[‹›[™İÜÊÊÊ[‹˜Ûİ[
ÊË\Ë˜Ûİ[ÜŠ‹K˜Ú[™[–Ü×JNÜ™]\›ˆ‹˜Ûİ[_WJ_J\‹TJK[˜İ[ÛŠJ^İ˜\ˆVÌNL‹NLËNMNMKNM‹NMËNNNNWNÙKœ›ØÙ\ÜÒ”QÏY[˜İ[ÛŠ‹‹KËËÊ^İ˜\ˆ]\Ë™XÛÙK‘ÕÑPÓÑK[[ÚYŠ\[ÙˆOHœİš[™ÈŸ\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\ŠŠ_\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\•šY]ÊŠJ^ÜİÚ]Ú
[ß‹]\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\ŠŠOÛ™]ÈZ[\œ˜^JŠNœ‹Y[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆ‹ÏLMŠ˜Ú\ÛÙP]

JŞ˜Ú\ÛÙP]
JKÏ^›[™İ^İÚYŒZYÚŒ[XÛÛ\Û™[ÎŒ_KÏMÔÏÎÔÊÏLŠ^ÚYŠÊÏ]Ëš[™^ÙŠ˜Ú\ÛÙP]
ÊÌJJHOOKLJ^ØLMŠ˜Ú\ÛÙP]
ÊÍJJŞ˜Ú\ÛÙP]
ÊÍŠK^İÚYŒMŠ˜Ú\ÛÙP]
ÊÍÊJŞ˜Ú\ÛÙP]
ÊÎ
KZYÚ˜‹[XÛÛ\Û™[Î˜Ú\ÛÙP]
ÊÎJ_NØœ™XZß]ÏLMŠ˜Ú\ÛÙP]
ÊÌŠJŞ˜Ú\ÛÙP]
ÊÌÊ_\™]\›ˆŸJ]\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\•šY]ÊŠOİ\Ë—×ØY[XYÙW×Ë˜\œ˜^PY™™\•Ğš[˜\Tİš[™ÊŠNœŠK›[XÛÛ\Û™[Ê^ØØ\ÙHN˜Ï]\Ë˜ÛÛÜ—ÜÜXÙ\Ë‘U’PÑWÑÔVNØœ™XZÎØØ\ÙH˜Ï]\Ë˜ÛÛÜ—ÜÜXÙ\Ë‘U’PÑWĞÓVRÎØœ™XZÎØØ\ÙHÎ˜Ï]\Ë˜ÛÛÜ—ÜÜXÙ\Ë‘U’PÑWÔ‘ĞŸZ^Ù]Nœ‹ÚY™ÚYZYÚ™šZYÚÛÛÜ”ÜXÙN˜Ëš]Ô\ÛÛ\Û™[š[\™‹[™^›‹[X\Î˜__\™]\›ˆ_J\‹TJK\‹TKœ›ØÙ\ÜÔ‘ÏY[˜İ[ÛŠK‹Š^ÚYŠ\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\ŠJI‰ŠO[™]ÈZ[\œ˜^JJJK\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\•šY]ÊJJ^İ˜\ˆKÏZÛ™JKØÚXÚĞÜ˜ÎˆLJKÏ\ËÚYÏ\ËšZYÚ\Ë˜Ú[›™[Ë\Ëœ[]K\Ë™\ØOY‰‰™OOLOÙ[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆOUKÚYÏUKšZYÚUK™]KUKœ[]KOUK™\OHLKYOV×KOV×K™O]›ÚYOHLKL™OLÓ™O›[™İÓ™JÊÊ^İ˜\ˆÙOVJÓ™WK
KWÙVÌKWÙVÌWKWÙVÌ—KYOWÙVÌ×NØYKœ\Ú
‹‹ŠKYHO[[	‰ŠYOOOLÊ
ÊËK›[™İI‰œKœ\Ú
™JJN™YOMI‰ŠOHL
J_ZYŠ_ŒJ^ÛOHLO]›ÚYİ˜\ˆYOSJ•ÎØ™O[™]ÈZ[\œ˜^JYJNÙ›ÜŠ˜\ˆÙO[™]È]UšY]Ê˜Y™™\ŠKÙOLĞÙOYNĞÙJÊÊ^İ˜\ˆOYÙÊÙKÙKJKÙOVJÓWK
VÌ×NØ™VĞÙWOSÙ__Y[ÙHOOL	‰ŠO]›ÚY
NÜ™]\›ØÛÛÜ”ÜXÙNˆ’[™^Y‹ÛÛÜœÔ\”^[ŒKÓX\ÚĞš]Ô\ÛÛ\Û™[›OÎ›ÚYÛÛÜ]\Î‘[P]\Î˜™K™YYÓX\ÚÎ›K[]N˜YKX\ÚÎœ__JÊN™OOLŸOOMÙ[˜İ[ÛŠJ^Ù›ÜŠ˜\ˆOUK™]KÏUKÚYUKšZYÚUK˜Ú[›™[ËOUK™\OROOLÈ‘]šXÙQÜ˜^Hˆ‘]šXÙT‘Ğˆ‹YORLKOUÊ‘™OXYKO\J˜™KLJœK™OSX]˜ÙZ[
J”KÎ
KÙOSX]˜ÙZ[

”KÎ
K[™]ÈZ[\œ˜^J™JK[™]ÈZ[\œ˜^JÙJK[™]È]UšY]ÊK˜Y™™\ŠKYO[™]È]UšY]Ê‹˜Y™™\ŠKYO[™]È]UšY]Ê‹˜Y™™\ŠKÙOHLKÙOLĞÙONĞÙJÊÊ^Ù›ÜŠ˜\ˆOPÙJ’ÙOLÓÙO™NÓÙJÊÊYÊYKÙÊ‹JÓÙKJKÙJ˜™JÓÙKJNİ˜\ˆYÙÊ‹JØ™KJNÛ
OJKLI‰ŠÙOHL
KÊYKJÙKJ_\™]\›ØÛÛÜ”ÜXÙN›KÛÛÜœÔ\”^[˜YKÓX\ÚĞš]Ô\ÛÛ\Û™[”ÙOÔN›ÚYÛÛÜ]\Î‘‹[P]\Î’‹™YYÓX\ÚÎ”Ù__JÊN™[˜İ[ÛŠJ^İ˜\ˆOUK™]KÏUK˜Ú[›™[ÏOOLOÈ‘]šXÙQÜ˜^Hˆ‘]šXÙT‘ĞˆÜ™]\›ØÛÛÜ”ÜXÙN•ËÛÛÜœÔ\”^[•ÏOOH‘]šXÙQÜ˜^HÌNŒËÛÛÜ]\Î“H[œİ[˜Ù[ÙˆZ[M\œ˜^OÙ[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆQ›[™İO[™]ÈZ[\œ˜^JŠ’
KO[™]È]UšY]ÊK˜Y™™\‹K˜]SÙ™œÙ]K˜]S[™İ
KYOLØYOØYJÊÊ[KœÙ]Z[MŠŠ˜YKØYWKLJNÜ™]\›ˆ_JJN“K™YYÓX\ÚÎˆL__JÊNİ˜\ˆ‹ËÏXKWË˜ÛÛÜ”ÜXÙKÏWË˜ÛÛÜœÔ\”^[ÏWËœÓX\ÚĞš]Ô\ÛÛ\Û™[WË˜ÛÛÜ]\ËÏWË˜[P]\ËWË›™YYÓX\ÚËWËœ[]KWË›X\ÚËO[[Ü™]\›ˆˆOOR\‹TKš[XYÙWØÛÛ\™\ÜÚ[Û‹““Ó‘I‰\[ÙˆOH™[˜İ[ÛˆÊOY[˜İ[ÛŠJ^İ˜\ˆNÜİÚ]Ú
J^ØØ\ÙH\‹TKš[XYÙWØÛÛ\™\ÜÚ[Û‹‘TÕ“OLLNØœ™XZÎØØ\ÙH\‹TKš[XYÙWØÛÛ\™\ÜÚ[Û‹“QQUSN“OLLÎØœ™XZÎØØ\ÙH\‹TKš[XYÙWØÛÛ\™\ÜÚ[Û‹”ÓÕÎ“OLMØœ™XZÎÙY˜][“OLLŸ\™]\›ˆ_JŠK]\Ë™XÛÙK‘“UWÑPÓÑKH‹Ô™YXİÜˆ‹˜ÛÛ˜Ø]
KˆĞÛÛÜœÈŠK˜ÛÛ˜Ø]
ËˆĞš]Ô\ÛÛ\Û™[ŠK˜ÛÛ˜Ø]
ˆĞÛÛ[[œÈŠK˜ÛÛ˜Ø]
ÊKO\×ÊX]˜ÙZ[
Ê”ÊšÎ
KËŠK‰‰ŠÏ\×ÊËX]˜ÙZ[
ÊšËÎ
KKËŠJJNŠ]›ÚY]›ÚYOU‰‰ŠÏPÊJK
\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\ŠJ_\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\•šY]ÊJJI‰ŠO]\Ë—×ØY[XYÙW×Ë˜\œ˜^PY™™\•Ğš[˜\Tİš[™ÊJJK
É‰\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\ŠÊ_\Ë—×ØY[XYÙW×Ëš\Ğ\œ˜^PY™™\•šY]ÊÊJI‰ŠÏ]\Ë—×ØY[XYÙW×Ë˜\œ˜^PY™™\•Ğš[˜\Tİš[™ÊÊJKØ[X\Îœ‹]N™K[™^š[\XÛÙT\˜[Y]\œÎ˜‹˜[œÜ\™[˜ŞN”[]N•‹ÓX\ÚÎË™YXİÜ’KÚY›ËZYÚ˜Ëš]Ô\ÛÛ\Û™[šÓX\ÚĞš]Ô\ÛÛ\Û™[šËÛÛÜ”ÜXÙN“Ÿ__K[˜İ[ÛŠJ^ÙKœ›ØÙ\ÜÑÒQPOY[˜İ[ÛŠ‹‹J^İ˜\ˆÏ[™]È™J
KÏ\ËÚYÏ\ËšZYÚV×NÜË™XÛÙP[™›]œ˜[YT‘ĞJ
Nİ˜\ˆ^Ù]N™ÚY›ËZYÚ˜ßK[™]È™ÊL
K™[˜ÛÙJ‹L
NÜ™]\›ˆKœ›ØÙ\ÜÒ”QË˜Ø[
\Ë‹‹J_KKœ›ØÙ\ÜÑÒQĞOYKœ›ØÙ\ÜÑÒQP_J\‹TJK›Ëœ›İİ\Kœ\œÙRXY\Y[˜İ[ÛŠ
^ÚYŠ\Ë™š[TÚ^™O]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ëœ™\Ù\™Y]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ë›Ù™œÙ]]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\ËšXY\”Ú^™O]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\ËÚY]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\ËšZYÚ]\Ë™]]‹™Ù][ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ëœ[™\Ï]\Ë™]]‹™Ù]Z[MŠ\ËœÜËL
K\ËœÜÊÏL‹\Ë˜š]]\Ë™]]‹™Ù]Z[MŠ\ËœÜËL
K\ËœÜÊÏL‹\Ë˜ÛÛ\™\ÜÏ]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ëœ˜]ÔÚ^™O]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ëš]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ëœ]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ë˜ÛÛÜœÏ]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ëš[\Ü[ÛÛÜœÏ]\Ë™]]‹™Ù]Z[ÌŠ\ËœÜËL
K\ËœÜÊÏM\Ë˜š]OOLM‰‰\Ëš\×İÚ]Ø[I‰Š\Ë˜š]LMJK\Ë˜š]MJ^İ˜\ˆO]\Ë˜ÛÛÜœÏOOLÌO\Ë˜š]\Ë˜ÛÛÜœÎİ\Ëœ[]O[™]È\œ˜^JJNÙ›ÜŠ˜\ˆLİNİ
ÊÊ^İ˜\ˆ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
K]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KO]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
Nİ\Ëœ[]VİO^Ü™Y˜KÜ™Y[›‹›YNœ‹]XYœß__]\ËšZYÚ	‰Š\ËšZYÚ
KLK\Ë˜›İÛWİ\HLJ_K›Ëœ›İİ\Kœ\œÙP‘ÔY[˜İ[ÛŠ
^İ\ËœÜÏ]\Ë›Ù™œÙ]İ˜\ˆOH˜š]Šİ\Ë˜š]]\ËÚY
\ËšZYÚ
ÚYŠLÍÌLLŠ]›İÈ™]È\œ›ÜŠ’[XYÙH[Y[œÚ[ÛœÈ^ÙYYLL“P‹ÚXÚ\ÈÛÈ\™ÙKˆŠNİ\Ë™]O[™]ÈZ[\œ˜^J
Nİ^İ\ÖÙWJ
_XØ]Ú
Š^Ô‹›ÙÊ˜š]XÛÙH\œ›ÜˆŠÜŠ__K›Ëœ›İİ\K˜š]OY[˜İ[ÛŠ
^İ˜\ˆKSX]˜ÙZ[
\ËÚYÎ
K]	MÙ›ÜŠO]\ËšZYÚLNÙOLÙKKJ^Ù›ÜŠ˜\ˆ]\Ë˜›İÛWİ\ÙN\ËšZYÚLKYKOLØOØJÊÊY›ÜŠ˜\ˆÏ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ[Š\ËÚY

Î
˜JÏLØÏ	‰
˜JØÏ\ËÚYØÊÊÊ^İ˜\ˆ]\Ëœ[]VÜÏËXÉŒWNİ\Ë™]VÛÊÍ
˜×OY˜›YK\Ë™]VÛÊÍ
˜ÊÌWOY™Ü™Y[‹\Ë™]VÛÊÍ
˜ÊÌ—OYœ™Y\Ë™]VÛÊÍ
˜ÊÌ×OLM_\ˆOOL	‰Š\ËœÜÊÏM\Š__K›Ëœ›İİ\K˜š]Y[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆOSX]˜ÙZ[
\ËÚYÌŠKYIM]\ËšZYÚLNÜLÜ‹KJ^Ù›ÜŠ˜\ˆ]\Ë˜›İÛWİ\Ü\ËšZYÚLK\‹OLØONØJÊÊ^İ˜\ˆÏ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ[Š\ËÚY

ÌŠ˜JÏ\ÏLMIœË]\Ëœ[]VØ×NÚYŠ\Ë™]VÛ×OY‹˜›YK\Ë™]VÛÊÌWOY‹™Ü™Y[‹\Ë™]VÛÊÌ—OY‹œ™Y\Ë™]VÛÊÌ×OLMKŠ˜JÌO]\ËÚY
Xœ™XZÎÙ]\Ëœ[]VÙK\Ë™]VÛÊÍOY‹˜›YK\Ë™]VÛÊÍ
ÌWOY‹™Ü™Y[‹\Ë™]VÛÊÍ
Ì—OY‹œ™Y\Ë™]VÛÊÍ
Ì×OLM_]OOL	‰Š\ËœÜÊÏM]
__K›Ëœ›İİ\K˜š]Y[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\ËÚY	M]\ËšZYÚLNİLİKJ^Ù›ÜŠ˜\ˆ]\Ë˜›İÛWİ\İ\ËšZYÚLK]LÛ\ËÚYÛŠÊÊ^İ˜\ˆO]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ\Š\ËÚY

Í
›ÚYŠO\Ëœ[]K›[™İ
^İ˜\ˆÏ]\Ëœ[]VØWNİ\Ë™]VÜ×O[Ëœ™Y\Ë™]VÜÊÌWO[Ë™Ü™Y[‹\Ë™]VÜÊÌ—O[Ë˜›YK\Ë™]VÜÊÌ×OLM_Y[ÙH\Ë™]VÜ×OLMK\Ë™]VÜÊÌWOLMK\Ë™]VÜÊÌ—OLMK\Ë™]VÜÊÌ×OLM_YHOOL	‰Š\ËœÜÊÏMYJ__K›Ëœ›İİ\K˜š]MOY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\ËÚY	LË\\œÙR[
ŒLLLLH‹ŠK]\ËšZYÚLNÜLÜ‹KJ^Ù›ÜŠ˜\ˆ]\Ë˜›İÛWİ\Ü\ËšZYÚLK\‹OLØO\ËÚYØJÊÊ^İ˜\ˆÏ]\Ë™]]‹™Ù]Z[MŠ\ËœÜËL
Nİ\ËœÜÊÏLİ˜\ˆÏJÉ
Kİ
ŒM_ÏJÏI
Kİ
ŒM_JÏŒL	
Kİ
ŒM_\ÏŒMOÌMNŒ[Š\ËÚY

Í
˜Nİ\Ë™]VÚOY\Ë™]VÚ
ÌWOXË\Ë™]VÚ
Ì—O[Ë\Ë™]VÚ
Ì×OYŸ]\ËœÜÊÏY__K›Ëœ›İİ\K˜š]MY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\ËÚY	LË\\œÙR[
ŒLLLLH‹ŠK\\œÙR[
ŒLLLLLH‹ŠK]\ËšZYÚLNÛLÛ‹KJ^Ù›ÜŠ˜\ˆO]\Ë˜›İÛWİ\Û\ËšZYÚLK[‹ÏLÜÏ\ËÚYÜÊÊÊ^İ˜\ˆÏ]\Ë™]]‹™Ù]Z[MŠ\ËœÜËL
Nİ\ËœÜÊÏLİ˜\ˆÏJÉ
Kİ
ŒM_JÏIœŠKÜŠŒM_JÏŒLJKİ
ŒM_XJ\ËÚY

Í
œÎİ\Ë™]VÚOY‹\Ë™]VÚ
ÌWOY\Ë™]VÚ
Ì—OXË\Ë™]VÚ
Ì×OLM_]\ËœÜÊÏY__K›Ëœ›İİ\K˜š]Y[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\ËšZYÚLNÙOLÙKKJ^Ù›ÜŠ˜\ˆ]\Ë˜›İÛWİ\ÙN\ËšZYÚLKYKLÜ\ËÚYÜŠÊÊ^İ˜\ˆ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KO]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ]
\ËÚY

Í
œİ\Ë™]VÛ×O\Ë\Ë™]VÛÊÌWOXK\Ë™]VÛÊÌ—O[‹\Ë™]VÛÊÌ×OLM_]\ËœÜÊÏ]\ËÚY	M_K›Ëœ›İİ\K˜š]ÌY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆO]\ËšZYÚLNÙOLÙKKJY›ÜŠ˜\ˆ]\Ë˜›İÛWİ\ÙN\ËšZYÚLKYKLÜ\ËÚYÜŠÊÊ^İ˜\ˆ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KO]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ]\Ë™]]‹™Ù]Z[
\ËœÜÊÊËL
KÏ]
\ËÚY

Í
œİ\Ë™]VØ×O\Ë\Ë™]VØÊÌWOXK\Ë™]VØÊÌ—O[‹\Ë™]VØÊÌ×O[ß_K›Ëœ›İİ\K™Ù]]OY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]_K[˜İ[ÛŠJ^ÙKœ›ØÙ\ÜĞ“TY[˜İ[ÛŠ‹‹J^İ˜\ˆÏ[™]È›ÊLJKÏ\ËÚYÏ\ËšZYÚ^Ù]NœË™Ù]]J
KÚY›ËZYÚ˜ßK[™]È™ÊL
K™[˜ÛÙJL
NÜ™]\›ˆKœ›ØÙ\ÜÒ”QË˜Ø[
\Ë‹‹‹J__J\‹TJK—Ëœ›İİ\K™Ù]]OY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]_K[˜İ[ÛŠJ^ÙKœ›ØÙ\ÜÕÑP”Y[˜İ[ÛŠ‹‹J^İ˜\ˆÏ[™]È—Ê
KÏ\ËÚYÏ\ËšZYÚ^Ù]NœË™Ù]]J
KÚY›ËZYÚ˜ßK[™]È™ÊL
K™[˜ÛÙJL
NÜ™]\›ˆKœ›ØÙ\ÜÒ”QË˜Ø[
\Ë‹‹‹J__J\‹TJK\‹TKœ›ØÙ\ÜÔ‘ĞOY[˜İ[ÛŠKŠ^Ù›ÜŠ˜\ˆYK™]KO[‹›[™İÏ[™]ÈZ[\œ˜^JKÍ
ŒÊKÏ[™]ÈZ[\œ˜^JKÍ
KÏLLLÙNÙŠÏM
^İ˜\ˆ[–Ù—K[–ÙŠÌWK[–ÙŠÌ—KÏ[–ÙŠÌ×NÜÖØÊÊ×OZÖØÊÊ×O^ÖØÊÊ×OX‹ÖÙ
Ê×O]ß]˜\ˆÏ]\Ë—×ØY[XYÙW×Ë˜\œ˜^PY™™\•Ğš[˜\Tİš[™ÊÊNÜ™]\›Ø[N\Ë—×ØY[XYÙW×Ë˜\œ˜^PY™™\•Ğš[˜\Tİš[™ÊÊK]N—Ë[™^[X\Îœ‹ÛÛÜ”ÜXÙNˆ‘]šXÙT‘Ğˆ‹š]Ô\ÛÛ\Û™[ÚY™KÚYZYÚ™KšZYÚ_K\‹TKœÙ][™İXYÙOY[˜İ[ÛŠJ^Ü™]\›ˆ\Ëš[\›˜[›[™İXYÙTÙ][™ÜÏOO]›ÚY	‰Š\Ëš[\›˜[›[™İXYÙTÙ][™ÜÏ^ßK\Ëš[\›˜[›[™İXYÙTÙ][™ÜËš\ÔİXœØÜšX™YHLJKØYˆYœšZØX[œÈ‹ÜNˆ[˜[šX[ˆ‹\ˆ\˜XšXÈ
İ[™\™
H‹˜\‹Qˆˆ\˜XšXÈ
[Ù\šXJH‹˜\‹P’ˆ\˜XšXÈ
˜Z˜Z[ŠH‹˜\‹QQÈˆ\˜XšXÈ
YŞ\
H‹˜\‹RTHˆ\˜XšXÈ
\˜\JH‹˜\‹R“Èˆ\˜XšXÈ
›Ü™[ŠH‹˜\‹RÕÈˆ\˜XšXÈ
İ]ØZ]
H‹˜\‹Sˆˆ\˜XšXÈ
X˜[›ÛŠH‹˜\‹SHˆ\˜XšXÈ
XXJH‹˜\‹SPHˆ\˜XšXÈ
[Ü›ØØÛÊH‹˜\‹SÓHˆ\˜XšXÈ
ÛX[ŠH‹˜\‹TPHˆ\˜XšXÈ
X]\ŠH‹˜\‹TĞHˆ\˜XšXÈ
Ø]YH\˜XšXJH‹˜\‹TÖHˆ\˜XšXÈ
Ş\šXJH‹˜\‹Uˆˆ\˜XšXÈ
[š\ÚXJH‹˜\‹PQHˆ\˜XšXÈ
KK‘KŠH‹˜\‹VQHˆ\˜XšXÈ
Y[Y[ŠH‹[ˆ\˜YÛÛ™\ÙH‹Nˆ\›Y[šX[ˆ‹\Îˆ\ÜØ[Y\ÙH‹\İˆ\İ\šX[ˆ‹^ˆ^™\˜˜ZZ˜[šH‹]Nˆ˜\Ü]YH‹™Nˆ™[\\ÚX[ˆ‹›ˆ™[™Ø[H‹œÎˆ›ÜÛšX[ˆ‹œˆœ™]Ûˆ‹™Îˆ[Ø\šX[ˆ‹^Nˆ\›Y\ÙH‹ØNˆØ][[ˆ‹ÚˆÚ[[Üœ›È‹ÙNˆÚXÚ[ˆ‹šˆÚ[™\ÙH‹šRÈˆÚ[™\ÙH
Û™ÈÛÛ™ÊH‹šPÓˆˆÚ[™\ÙH
ÊH‹šTÑÈˆÚ[™\ÙH
Ú[™Ø\Ü™JH‹šUÈˆÚ[™\ÙH
Z]Ø[ŠH‹İˆÚ]˜\Ú‹ÛÎˆÛÜœÚXØ[ˆ‹ÜˆÜ™YH‹ˆÜ›Ø]X[ˆ‹ÜÎˆŞ™XÚ‹Nˆ‘[š\Ú‹›ˆ‘]Ú
İ[™\™
H‹››P‘Hˆ‘]Ú
™[ÚX[ŠH‹[ˆ‘[™Û\Ú‹™[‹PUHˆ‘[™Û\Ú
]\İ˜[XJH‹™[‹P–ˆˆ‘[™Û\Ú
™[^™JH‹™[‹PĞHˆ‘[™Û\Ú
Ø[˜YJH‹™[‹RQHˆ‘[™Û\Ú
\™[[™
H‹™[‹R“Hˆ‘[™Û\Ú
˜[XZXØJH‹™[‹S–ˆˆ‘[™Û\Ú
™]È™X[[™
H‹™[‹Tˆ‘[™Û\Ú
[\[™\ÊH‹™[‹VHˆ‘[™Û\Ú
Ûİ]YœšXØJH‹™[‹Uˆ‘[™Û\Ú
š[šYY	ˆØ˜YÛÊH‹™[‹QĞˆˆ‘[™Û\Ú
[š]YÚ[™ÙÛJH‹™[‹UTÈˆ‘[™Û\Ú
[š]Yİ]\ÊH‹™[‹V•Èˆ‘[™Û\Ú
š[X˜XÙJH‹[Îˆ‘\Ü\˜[È‹]ˆ‘\İÛšX[ˆ‹›Îˆ‘˜Y\›Ù\ÙH‹šˆ‘šZšX[ˆ‹šNˆ‘š[›š\Ú‹œˆ‘œ™[˜Ú
İ[™\™
H‹™œ‹P‘Hˆ‘œ™[˜Ú
™[Ú][JH‹™œ‹PĞHˆ‘œ™[˜Ú
Ø[˜YJH‹™œ‹Q”ˆˆ‘œ™[˜Ú
œ˜[˜ÙJH‹™œ‹SHˆ‘œ™[˜Ú
^[X›İ\™ÊH‹™œ‹SPÈˆ‘œ™[˜Ú
[Û˜XÛÊH‹™œ‹PÒˆ‘œ™[˜Ú
İÚ]™\›[™
H‹Nˆ‘œš\ÚX[ˆ‹\ˆ‘œš][X[ˆ‹Ùˆ‘ØY[XÈ
ØÛİÊH‹™ÙRQHˆ‘ØY[XÈ
\š\Ú
H‹Ûˆ‘Ø[XÚX[ˆ‹ØNˆ‘Ù[Ü™ÚX[ˆ‹Nˆ‘Ù\›X[ˆ
İ[™\™
H‹™KPUˆ‘Ù\›X[ˆ
]\İšXJH‹™KQHˆ‘Ù\›X[ˆ
Ù\›X[JH‹™KSHˆ‘Ù\›X[ˆ
YXÚ[œİZ[ŠH‹™KSHˆ‘Ù\›X[ˆ
^[X›İ\™ÊH‹™KPÒˆ‘Ù\›X[ˆ
İÚ]™\›[™
H‹[ˆ‘Ü™YZÈ‹İNˆ‘İZ\˜]H‹ˆ’Z]X[ˆ‹Nˆ’Xœ™]È‹Nˆ’[™H‹Nˆ’[™Ø\šX[ˆ‹\Îˆ’XÙ[[™XÈ‹Yˆ’[™Û™\ÚX[ˆ‹]Nˆ’[Zİ]]‹ØNˆ’\š\Ú‹]ˆ’][X[ˆ
İ[™\™
H‹š]PÒˆ’][X[ˆ
İÚ]™\›[™
H‹˜Nˆ’˜\[™\ÙH‹Ûˆ’Ø[›˜YH‹ÜÎˆ’Ø\ÚZ\šH‹ÚÎˆ’Ø^˜ZÚ‹ÛNˆ’ÚY\ˆ‹ŞNˆ’Ú\™Ú^ˆ‹ˆ’Û[™ÛÛˆ‹ÛÎˆ’ÛÜ™X[ˆ‹šÛËRÔˆ’ÛÜ™X[ˆ
›ÜÛÜ™XJH‹šÛËRÔˆˆ’ÛÜ™X[ˆ
Ûİ]ÛÜ™XJH‹Nˆ“][ˆ‹ˆ“]šX[ˆ‹ˆ“]X[šX[ˆ‹ˆ“^[X›İ\™Ú\Ú‹ZÎˆ“›ÜXXÙYÛšXH‹\Îˆ“X[^H‹[ˆ“X[^X[[H‹]ˆ“X[\ÙH‹ZNˆ“X[ÜšH‹\ˆ“X\˜]H‹[Îˆ“[Û]šX[ˆ‹ˆ“˜]˜Z›È‹™Îˆ“™Û™ØH‹™Nˆ“™\[H‹›Îˆ“›ÜÙYÚX[ˆ‹˜ˆ“›ÜÙYÚX[ˆ
›ÚÛX[
H‹›ˆ“›ÜÙYÚX[ˆ
[›ÜœÚÊH‹ØÎˆ“ØØÚ][ˆ‹Üˆ“Üš^XH‹ÛNˆ“Ü›Û[È‹˜Nˆ”\œÚX[ˆ‹™˜KRTˆˆ”\œÚX[‹Ò\˜[ˆ‹ˆ”Û\Ú‹ˆ”ÜYİY\ÙH‹œP”ˆˆ”ÜYİY\ÙH
œ˜^š[
H‹Nˆ”[š˜XšH‹œKRSˆˆ”[š˜XšH
[™XJH‹œKTÈˆ”[š˜XšH
ZÚ\İ[ŠH‹]Nˆ”]YXÚXH‹›Nˆ”šY]ËT›ÛX[šXÈ‹›Îˆ”›ÛX[šX[ˆ‹œ›ËSSÈˆ”›ÛX[šX[ˆ
[Û]šXJH‹Nˆ”\ÜÚX[ˆ‹œKSSÈˆ”\ÜÚX[ˆ
[Û]šXJH‹Şˆ”Ø[ZH
\\Ú
H‹ÙÎˆ”Ø[™ÛÈ‹ØNˆ”Ø[œÚÜš]‹ØÎˆ”Ø\™[šX[ˆ‹Ùˆ”Ú[™H‹ÚNˆ”Ú[™Ú[\ÙH‹Üˆ”Ù\˜šX[ˆ‹ÚÎˆ”Ûİ˜ZÈ‹Ûˆ”Ûİ™[šX[ˆ‹ÛÎˆ”ÛÛX[šH‹Øˆ”ÛÜ˜šX[ˆ‹\Îˆ”Ü[š\Ú‹™\ËPTˆˆ”Ü[š\Ú
\™Ù[[˜JH‹™\ËP“Èˆ”Ü[š\Ú
›Û]šXJH‹™\ËPÓˆ”Ü[š\Ú
Ú[JH‹™\ËPÓÈˆ”Ü[š\Ú
ÛÛÛXšXJH‹™\ËPÔˆˆ”Ü[š\Ú
ÛÜİHšXØJH‹™\ËQÈˆ”Ü[š\Ú
ÛZ[šXØ[ˆ™\X›XÊH‹™\ËQPÈˆ”Ü[š\Ú
XİXYÜŠH‹™\ËTÕˆˆ”Ü[š\Ú
[Ø[˜YÜŠH‹™\ËQÕˆ”Ü[š\Ú
İX][X[JH‹™\ËRˆˆ”Ü[š\Ú
Û™\˜\ÊH‹™\ËSVˆ”Ü[š\Ú
Y^XÛÊH‹™\ËS’Hˆ”Ü[š\Ú
šXØ\˜YİXJH‹™\ËTHˆ”Ü[š\Ú
[˜[XJH‹™\ËTHˆ”Ü[š\Ú
\˜YİX^JH‹™\ËTHˆ”Ü[š\Ú
\JH‹™\ËTˆˆ”Ü[š\Ú
Y\ÈšXÛÊH‹™\ËQTÈˆ”Ü[š\Ú
ÜZ[ŠH‹™\ËUVHˆ”Ü[š\Ú
\YİX^JH‹™\ËU‘Hˆ”Ü[š\Ú
™[™^Y[JH‹Şˆ”İ]H‹İÎˆ”İØZ[H‹İˆ”İÙY\Ú‹œİ‹Q’Hˆ”İÙY\Ú
š[›[™
H‹œİ‹TÕˆˆ”İÙY\Ú
İÙY[ŠH‹Nˆ•[Z[‹ˆ•]\ˆ‹Nˆ•[YØH‹ˆ•ZH‹YÎˆ•YÜ™H‹Îˆ•ÛÛ™ØH‹ˆ•İØ[˜H‹ˆ•\šÚ\Ú‹Îˆ•\šÛY[ˆ‹ZÎˆ•ZÜ˜Z[šX[ˆ‹Øˆ•\\ˆÛÜ˜šX[ˆ‹\ˆ•\™H‹™Nˆ•™[™H‹šNˆ•šY]˜[Y\ÙH‹›Îˆ•›Û\ZÈ‹ØNˆ•Ø[ÛÛˆ‹ŞNˆ•Ù[Ú‹ˆ–ÜØH‹šNˆ–ZY\Ú‹Nˆ–[HŸVÙWHOO]›ÚY	‰Š\Ëš[\›˜[›[™İXYÙTÙ][™ÜË›[™İXYÙPÛÙOYK\Ëš[\›˜[›[™İXYÙTÙ][™ÜËš\ÔİXœØÜšX™YOOHLI‰Š\Ëš[\›˜[™]™[ËœİXœØÜšX™Jœ]Ø][ÙÈ‹[˜İ[ÛŠ
^İ\Ëš[\›˜[Üš]J‹Ó[™È
Šİ\Ëš[\›˜[›[™İXYÙTÙ][™ÜË›[™İXYÙPÛÙJÈŠHŠ_JK\Ëš[\›˜[›[™İXYÙTÙ][™ÜËš\ÔİXœØÜšX™YHL
JK\ßKOR\‹TK›OYK™Ù]Ú\•ÚYĞ\œ˜^OY[˜İ[ÛŠK
^İ˜\ˆ‹‹OJ]ßJK™›Û\Ëš[\›˜[™Ù]›Û

KÏ]™›ÛÚ^™_\Ëš[\›˜[™Ù]›ÛÚ^™J
KÏ]˜Ú\”ÜXÙ_\Ëš[\›˜[™Ù]Ú\”ÜXÙJ
KÏ]ÚYÏİÚYÎ˜K›Y]Y]K•[šXÛÙKÚYËXË™›ÙØË™›ÙŒK]šÙ\›š[™ÏİšÙ\›š[™Î˜K›Y]Y]K•[šXÛÙKšÙ\›š[™ËY‹™›ÙÙ‹™›ÙŒK]™ÒÙ\›š[™ÈOOHLKLÏYK›[™İÏLXÖÌ_ÏV×NÙ›ÜŠLÜÎÜŠÊÊ[YK˜Ú\ÛÙP]
ŠK\[ÙˆK›Y]Y]KÚYÙ”İš[™ÏOH™[˜İ[ÛˆÔËœ\Ú

K›Y]Y]KÚYÙ‘Û\
K›Y]Y]K˜Ú\˜Xİ\•ÑÛ\
ŠJJÛÊŠYLËÜÊ_
KÌYLÊNŠ^	‰šÛŠ–Û—JOOOH›Øš™Xİ‰‰ˆZ\Ó˜SŠ\œÙR[
–Û—V××KL
JOÙ–Û—V××KÚŒËœ\Ú

ÖÛ—_ŠKÙ
ØŠJKÏ[Ü™]\›ˆßK—ÏYK™Ù]İš[™Õ[š]ÚYY[˜İ[ÛŠK
^İ˜\ˆJ]ßJK™›ÛÚ^™_\Ëš[\›˜[™Ù]›ÛÚ^™J
K]™›Û\Ëš[\›˜[™Ù]›Û

KO]˜Ú\”ÜXÙ_\Ëš[\›˜[™Ù]Ú\”ÜXÙJ
NÜ™]\›ˆKœ›ØÙ\ÜĞ\˜XšXÉ‰ŠOYKœ›ØÙ\ÜĞ\˜XšXÊJJK\[Ùˆ‹›Y]Y]KÚYÙ”İš[™ÏOH™[˜İ[ÛˆÛ‹›Y]Y]KÚYÙ”İš[™ÊK‹JKÜœ›K˜\J\Ë\™İ[Y[ÊKœ™YXÙJ[˜İ[ÛŠËÊ^Ü™]\›ˆÊÛßK
_K—ÏY[˜İ[ÛŠK‹Š^Ù›ÜŠ˜\ˆOV×KÏLÏYK›[™İÏLÜÈOO[É‰˜ÊİÜ×OÊXÊÏ]Ü×KÊÊÎØKœ\Ú
KœÛXÙJÊJNİ˜\ˆ\ÎÙ›ÜŠÏLÜÈOO[ÎÊXÊİÜ×O›‰‰ŠKœ\Ú
KœÛXÙJÊJKÏL\ÊKÊÏ]Ü×KÊÊÎÜ™]\›ˆOO\É‰˜Kœ\Ú
KœÛXÙJÊJK_KWÏY[˜İ[ÛŠKŠ^ÜŸ
^ßJNİ˜\ˆ‹KËËË‹V×KVÚK\‹^[™[ÏLÏLYKœÜ]
ˆŠKÏ\›K˜\J\ËÈˆ‹—JVÌNÚYŠ\‹›[™R[™[OOKLOÓ–ÌK›[™İ
Ìœ‹›[™R[™[
^İ˜\ˆÏP\œ˜^J
Kš›Ú[ŠˆŠKV×NÓ‹›X\
[˜İ[ÛŠŠ^ÊT‹œÜ]
×Ê—‹ÊJK›[™İŒOÕU˜ÛÛ˜Ø]
‹›X\
[˜İ[ÛŠ‹
^Ü™]\›Š	‰•‹›[™İØ˜ˆˆŠJÕŸJJN•œ\Ú
–ÌJ_JKU\—Ë˜\J\ËÚË—J_Y›ÜŠÏLÏS‹›[™İÜÏÎÜÊÊÊ^İ˜\ˆÏLÚYŠS–Ü×K	‰›–ÌOOX˜	‰Š[‹œİXœİŠJKÏLJKŠİÊÊÏJO\›K˜\J\ËÛ‹—JJKœ™YXÙJ[˜İ[ÛŠ‹Š^Ü™]\›ˆŠÕŸK
JOÊ^ÚYŠÏ
^Ù›ÜŠÏ[—Ë˜\J\ËÛ‹KJŠİÊKJKœ\Ú
ËœÚY

JKVØËœÜ

WNØË›[™İÊ^œ\Ú
ØËœÚY

WJN×ÏXKœÛXÙJ‹›[™İJÌOÚÌK›[™İŒ
JKœ™YXÙJ[˜İ[ÛŠ‹Š^Ü™]\›ˆŠÕŸK
_Y[ÙHVÛ—NŞœ\Ú

KWÊÙÏTßY[ÙHœ\Ú
ŠKŠÏ]Ê×ËÏTß\™]\›ˆYÙ[˜İ[ÛŠ‹Š^Ü™]\›ŠÚÎˆˆŠJÔ‹š›Ú[ŠˆŠ_N™[˜İ[ÛŠŠ^Ü™]\›ˆ‹š›Ú[ŠˆŠ_K›X\
Š_KKœÜ]^ÔÚ^™OY[˜İ[ÛŠKŠ^İ˜\ˆ‹OJ\ŸßJK™›ÛÚ^™_\Ëš[\›˜[™Ù]›ÛÚ^™J
KÏJ[˜İ[ÛŠ
^ÚYŠÚYÉ‰ššÙ\›š[™Ê\™]\›İÚYÎšÚYËÙ\›š[™ÎššÙ\›š[™ßNİ˜\ˆ]\Ëš[\›˜[™Ù]›Û
™›Û˜[YK™›Ûİ[JKH•[šXÛÙHÜ™]\›ˆ›Y]Y]VØ—OŞİÚYÎ›Y]Y]VØ—KÚYßÌŒ_KÙ\›š[™Î›Y]Y]VØ—KšÙ\›š[™ßß_NÙ›Û›Y]Y]K›ÛÚ^™N\Ëš[\›˜[™Ù]›ÛÚ^™J
KÚ\”ÜXÙN\Ëš[\›˜[™Ù]Ú\”ÜXÙJ
__JK˜Ø[
\ËŠNÛP\œ˜^Kš\Ğ\œ˜^JJOÙN”İš[™ÊJKœÜ]
××‹ÊNİ˜\ˆÏLJ\Ëš[\›˜[œØØ[Q˜XİÜŠØNÜË^[™[\‹^[™[ÌJœ‹^[™[
\Ëš[\›˜[œØØ[Q˜XİÜ‹ØNŒË›[™R[™[\‹›[™R[™[İ˜\ˆËV×NÙ›ÜŠÏL[‹›[™İØÏØÊÊÊYY‹˜ÛÛ˜Ø]
WË˜\J\ËÛ–Ø×KË×JJNÜ™]\›ˆŸK[˜İ[ÛŠJ^ÙK—×Ù›ÛY]šXÜ××ÏYK—×Ù›ÛY]šXÜ××ßßNÙ›ÜŠ˜\ˆHŒLŒÍMÎXX˜ÙYˆ‹HšÛ[›Ü\œİ]Ş^ˆ‹^ßKO^ßKÏLÜÏMÜÊÊÊ[–Ü–Ü×WO]Ü×KVİÜ×WO\–Ü×Nİ˜\ˆÏY[˜İ[ÛŠŠ^Ü™]\›ˆŒŠÜ\œÙR[
‹L
KÔİš[™ÊMŠ_KÏYK—×Ù›ÛY]šXÜ××Ë˜ÛÛ\™\ÜÏY[˜İ[ÛŠŠ^İ˜\ˆËË‹ËÏVÈÈ—NÙ›ÜŠ˜\ˆ[ˆŠ^ÚYŠÏX–ÕK\Ó˜SŠ\œÙR[
L
JO×ÏH‰ÈŠÕ
È‰ÈŠ\\œÙR[
L
KÏJÏ[Ê
KœÛXÙJŠJKœÛXÙJLJJØV×ËœÛXÙJLJWJK\[ÙˆÏOH›[X™\ˆŠ]ÏÊ[ÊÊKœÛXÙJÊKÏH‹HŠNŠ[ÊÊKœÛXÙJŠKÏHˆŠKTÊÓ‹œÛXÙJLJJØVÓ‹œÛXÙJLJWNÙ[Ù^ÚYŠÛŠÊHOOH›Øš™XİŠ]›İÈ™]È\œ›ÜŠ‘Û‰İÛ›İÈÚ]ÈÈÚ]˜[YH\HŠÚÛŠÊJÈ‹ˆŠNÓXÊÊ_ZËœ\Ú
ÊÓŠ_\™]\›ˆËœ\Ú
ŸHŠKËš›Ú[ŠˆŠ_KYK—×Ù›ÛY]šXÜ××Ë[˜ÛÛ\™\ÜÏY[˜İ[ÛŠŠ^ÚYŠ\[ÙˆˆOHœİš[™ÈŠ]›İÈ™]È\œ›ÜŠ’[˜[Y\™İ[Y[\ÜÙYÈ[˜ÛÛ\™\ÜËˆŠNÙ›ÜŠ˜\ˆËË‹ËÏ^ßKLKÏZËV×KHˆ‹Hˆ‹OX‹›[™İLKOLNÕONÕJÏLJJÏX–ÕWJOOH‰ÈİÏÊ]Ëš›Ú[ŠˆŠKÏ]›ÚY
NÏV×NÏİËœ\Ú
ÊN”ÏOHÈÊ‹œ\Ú
ĞË—JKÏ^ßK]›ÚY
N”ÏOHŸHÊ
ÏT‹œÜ

JVÌV×ÖÌWWOPË]›ÚYÏWÖÌJN”ÏOH‹HÕKLN“OO]›ÚYÛ‹š\ÓİÛ”›Ü\JÊOÊŠÏ[–Ô×K\\œÙR[
‹MŠJ•LKHˆŠN•ŠÏTÎ›‹š\ÓİÛ”›Ü\JÊOÊ
Ï[–Ô×KÖÓ—O\\œÙR[
MŠJ•LK]›ÚYHˆŠN”
ÏTÎÜ™]\›ˆßK^ØÛÙTYÙ\Î–È•Ú[[œÚQ[˜ÛÙ[™È—KÚ[[œÚQ[˜ÛÙ[™Î™
ÌN[NŒŒ[\LŒ[Î\ŒŒ\Î[Œ][LŒ]NLŒ]Î[ŒŒ^[ÌŒ^NÌŒšÎLŒ›ŒŒ›N\ŒœNŒ]ÎÌŒÚÎŒİŒŒİN]Œ˜ÜNÌŒL›N]M[NÌM[]Ì™Î\ÌMšÎLM›]LMÜÎ^ŒMŞLMŞN^_HŠ_K^Õ[šXÛÙNĞÛİ\šY\™‹Ûİ\šY\‹P›Û™‹Ûİ\šY\‹P›ÛØ›\]YH™‹Ûİ\šY\‹SØ›\]YH™‹[™]XØN™‹’[™]XØKP›Û™‹’[™]XØKP›ÛØ›\]YH™‹’[™]XØKSØ›\]YH™‹•[Y\ËT›ÛX[ˆ™‹•[Y\ËP›Û™‹•[Y\ËP›Û][XÈ™‹•[Y\ËR][XÈ™Ÿ_K^Õ[šXÛÙNÈÛİ\šY\‹SØ›\]YH™
ÉİÚYÉŞÚÌİÉÙ›Ù‰Í›ßIÚÙ\›š[™ÉŞÉÙ›Ù‰ËM›ß_HŠK•[Y\ËP›Û][XÈ™
ÉİÚYÉŞÚÌÛÌœMXŞœŒŒ[ŒÛLŒ[Í›ÌŒ\Ì›Œ]›Œ]L›Œ]ÌÛLŒ^ÛLŒ^LÛLšÌ]›œŒŒ›L›Œ›ŒÛL›ÌÛLœ[ŒŒœM›ÌœŒ]ÌœÌ››LÛLŒİÌ]›L]Œ]ÌÚÌÛLÛÛLÛLÛLÛŒÛLÛÌÛLÜÛLÜLÛLÜŒÛLÜÌÛLŒİ›ŒİL›İŒ›İÌİŞİŞLİŞŒÛMÍ[MMMMÍÍMMMÍÍMœLÛMMÌŞ]MÍÍZÌŞ[Í[MM[ŒÜ[ÌŞ\Í\MM\]\ÍM]Ş]LŞ]Œ›]Ì]Í^›^Lİ^ŒÛMšÌ››ÛM›LÛM›ŒÍ›ÌÛMœÍœL›œŒÛMœÌÜ]ÍL]ÍŒÛMÌ]ÍMLÜŒÛMÚÌÛMÛÛMÛLœÛŒœÛÌ]ÍÜÜÜLÍÜMÜÌÛMİÍİLœİŒ›İÌ\MŞ›ŞLİŒ›ÛXÛX[œ˜[LÛX[ŒÛX[ÌÛX\ÛX\ŒÛX\Ì›]X]L]X]ŒÛX]ÌİØ^MX^Œ›šÌœØ›İ	Ù›Ù‰Í›Ø›Ì›œİœLÛXœŒ]œÌ›L^XŒÛXŒÛXÚÍLŒšÌÛXÛMXÛXÛÍXÜXÜM^XÜXÜÍXİXİMXİXİÌœŒ›LÜ˜ŞLœ˜ŞŒœ™ÙMÙÙÍÙÙMÙÍÙÙMÙÙÍÙŒÛYZÌÛY[ÛY[LÛY[ŒÛY[ÌÛY\ÛY\MÙ\ŒÙ\ÌÙ]Ù]LÙ]ŒÙ]Ì]Ù^]Ù^L]Ù^Œ]Ù›Ü™›LÛY›ŒÛY›ÌÛYœÛYœLÛYœŒİœÌÛYÜ™LÜ™ŒÜ™ÌÜ™ŒÌŒÚÍ›ÌŒL›M›Ì™Ì›˜ÜL›İÛLİL›MÜÌŞN[LÛ_IÚÙ\›š[™ÉŞØÛÍ]MZİ\]\œÌMÜÜÍ]ßLŒ\ŞÌŒ\ÜßLŒ]ØÚÜÍØÛ\ØÛœØÛÜØÜØÛÌİL]LŒ]ßLŒ^ÌİL]_LšŞÌŒ]ßLŞÍ^ZŞ[İM\^\œÌMÜİM]_LÌMÜİM]M[İ_L^Í^ZŞ[İM\^\œÌMÜÜÍ]ßIÙ›Ù‰ËM›Ù›ÌMÜİÍ]Í[İM\]Í\œßMİØÚÜØÛØÛ\ØÛœØÛÜØÜÍßLİ^ÌMÜİM]M[ÜÍ\\ßLİÌMÜİM]M[ÜÍ\\ßMÜÌMÜİM]_XÚŞÍ]MZİ\]\œÌMÜÜÍ]ßMÍ]MZİ\]\œÌMÜÜÍ]ßXÛ^Í]MZİ\]\œÌMÜÜÍ]ßXÛÍ]MZİ\]\œÌMÜÜÍ]ßXÛŞÍ]MZİ\]\œÌMÜÜÍ]ßXÜÍ]MZİ\]\œÌMÜÜÍ]ßM›Í]M[İM\]Í\MÜİM]_M\^ØÚİXÛXÛ]XÛXÛİXÜM_M\ØÚİXÛXÛ]XÛXÛİXÜM_MÜ^ØÚÜØÛØÛ\ØÛœØÛÜØÜÍßMœÍ]M[İM\]Í\MÜİÍ]ßYZŞÍ]M[İM\]Í\MÜİM]_Y[Í]M[İM\]Í\MÜİM]_Y[^Í]M[İM\]Í\MÜİM]_Y[Í]M[İM\]Í\MÜİM]_Y[ŞÍ]M[İM\]Í\MÜİM]_Y\Í]M[İM\]Í\MÜİM]_Y\ŞÌMÜÜÍ]Í\\Í]_Y]Í]M[İM\]Í\MÜİÍ]ßY]^Í]M[İM\]Í\MÜÜÍ]ßY]ÌMÜÜÍ]Í\\Í]_MÌMÜİÍ]Í[İM\]Í\œßY›^ÌMÜİÍ]Í[İM\]Í\œßMÛÌŒ]ßY›ŞÌMÜİÍ]Í[İM\]Í\œßYœÌMÜİÍ]Í[İM\]Í\œßYœ^ÌMÜİÍ]Í[İM\]Í\œßMÜØÚÜØÛØÛ\ØÛœØÛÜØÜÍßYœŞÌMÜİÍ]Í[İM\]Í\œßYÌMÜİM]_Y^ÌMÜİM]_YÌMÜİM]_YŞÌMÜİM]_YØÚÜØÛØÛ\ØÛœØÛÜØÜÍß__HŠK’[™]XØKP›Û™
ÉİÚYÉŞÚÌÜÌœMØŞ]ÌŒ[ŒÜŒŒ[Í›ÌŒ\Ì]ÌŒ]]ÌŒ]L]ÌŒ]ÌÛLŒ^ÛLŒ^LÛLšÌ]Ì››Œ›L›Œ›ŒÜŒ›ÌÜŒœ]ŒœM›ÌœŒ\ÌœÌ››LœŒŒİLÌ]Ì›L]ÌŒ]ÌÚÌÜŒÛÜŒÛLÜŒÛŒÜŒÛÌÜŒÜÜŒÜLÜŒÜŒÜŒÜÌÜŒŒİ›ŒİL›İŒ›İÌİLŞİLŞLİLŞŒŞÍ›ÍMÍÍÍÍMLŞMÍÍ]ÍLÜÍÌŞ[MÍMZÍM[M[MÍ[M[ÌŞ\Í\MM\^M\ÍM]M]LŞ]Œ›]Ì]Í^›^LİM^ŒÜšÌ››Ü›LŞ›ŒÜ›ÌŞœÜœL›œŒŞœÌŞ]ÍL]ÍŒÜÌ]Í]LŞŒŞÚÌŞÛŞÛLœÛŒÜÛÌ›ÜŞÜLÜÜMÜÌÜİÜİLÛMİŒœİÌ]ÍŞœŞLİLŒ›Ü˜ÛØ[›[LÜ˜[ŒÜ˜[ÌÜ˜\Ü˜\ŒÜ˜\Ì›]]Lœ]ŒÜ˜]ÌİX^M^Œ›šÌœØ›İIÙ›Ù‰Í›Ø›Ì›œŞœLÜ˜œŒ]ØœÌ›L›ØŒÜ˜ŒŞÚÍÌŒšÌÜ˜ÛMØÛØÛÍØÜØÜM›ØÜØÜÍXİXİMXİXİÌ]Ì›L˜ŞL]ØŞŒ]ÙÙMYYÍYYMYÍYÙMÙÙÍÙŒŞZÌÜ™[Ü™[LÜ™[ŒÜ™[ÌÜ™\Ü™\M]\ŒÜ™\ÌÜ™]Ü™]LÜ™]ŒÜ™]Ì]Ù^]Ù^L]Ù^Œ]Ù›Ş›LŞ›ŒŞ›ÌŞœŞœLŞœŒİYœÌŞŞLŞŒŞÌŞŒÜŒŒÚÍ›ÌŒL›M›Ì™Ì›˜ÜL›İÜŒİL›MÜÍLN[LÜŸIÚÙ\›š[™ÉŞØÛÍ\ÍZİM[İ\\ÌMÜİ]ŸLŒ]ÌİÍŞL]ßLŒ]ŞÌšÜßLŒ^ÌİÍŞL]ßLšŞÌŒ]ÌŒ^ßLŞÍÜ\Í]MZİÍ[ÜÍ\]Í\œÌMÜİM]MİÙœßLÍ[İÍ\\ßL^ÍÜ\Í]MZİÍ[ÜÍ\]Í\œÌMÜİM]MİÙœßIÙ›Ù‰ËM›ÍÜÌMÜİM]M[İXÚŞÍ\ÍZİM[İ\\ÌMÜİ]ŸMÍ\ÍZİM[İ\\ÌMÜİ]ŸXÛ^Í\ÍZİM[İ\\ÌMÜİ]ŸXÛÍ\ÍZİM[İ\\ÌMÜİ]ŸXÛŞÍ\ÍZİM[İ\\ÌMÜİ]ŸXÜÍ\ÍZİM[İ\\ÌMÜİ]ŸM›ÌMÜİ][ÜßLMÜŞÌšİØÛ˜Û]˜Û˜Ûİ˜ÜİØÚİŸM[ŞÌšİXÛÛ]ÛÛİÜİÚİM\^ÌšÜØÛØÛ\ØÛœØÛÜØÜÍÍİ˜ÚÜßM\ÌšÜÍÜßM]ÌšİØÛ˜Û]˜Û˜Ûİ˜ÜİØÚİŸY[ŞÌMÜİ][ÜßY^ÌMÜİM]M[İMœÌMÜÜÍ]ßYZŞÌMÜİ][ÜßY[ÌMÜİ][ÜßY[^ÌMÜİ][ÜßY[ÌMÜİ][ÜßM›ŞÌŒ]ßY\ÌMÜİ][ÜßY\ŞÌMÜÜÍ]ßY]ÌMÜÜÍ]ßY]^ÌMÜÜÍ]ßY]ÌMÜÜÍ]ßMÌMÜİM]M[ÜÍ\]Y›^ÌMÜİM]M[ÜÍ\]Y›ÌMÜİM]M[ÜÍ\]Y›ŞÌMÜİM]M[ÜÍ\]YœÌMÜİM]M[ÜÍ\]Yœ^ÌMÜİM]M[ÜÍ\]YœŞÌMÜİM]M[ÜÍ\]YÌMÜİM]M[İMÛ^Í[ÜßYÌMÜİM]M[İYŞÌMÜİM]M[İ__HŠKÛİ\šY\™
ÉİÚYÉŞÚÌİÉÙ›Ù‰Í›ßIÚÙ\›š[™ÉŞÉÙ›Ù‰ËM›ß_HŠKÛİ\šY\‹P›ÛØ›\]YH™
ÉİÚYÉŞÚÌİÉÙ›Ù‰Í›ßIÚÙ\›š[™ÉŞÉÙ›Ù‰ËM›ß_HŠK•[Y\ËP›Û™
ÉİÚYÉŞÚÌÜLœM[˜ŞœŒŒ[ŒÛLŒ[Í›ÌŒ\Ì›Œ]›Œ]L›Œ]ÌÛLŒ^ÛLŒ^LÛLšÌ]››Œ›L›Œ›ŒÛL›ÌÛLœ›ÌŒœM›ÌœŒ]ÌœÌ››LÛLŒİÌ]›L]Œ]ÌÚÌÛLÛÛLÛLÛLÛŒÛLÛÌÛLÜÛLÜLÛLÜŒÛLÜÌÛLŒİ›ŒİL›İŒ›İÌİŞİŞLİŞŒÛMÍ^ÍMMÍÍÍMLŞMÍMœLÛMMÍM^MMÍMZÌŞ[M[MÍ[ŒÜ[ÍM\Í\MÍ\›Í\ÍÍ]Í]MM]Œ›]Ì]Í^›^LİM^ŒÛMšÌ››ÛM›LÜ›ŒÍ›ÌÜœÍœL›œŒÛMœÌÜ]ÍL›ŒÜÌ]Í[LÜŒÛMÚÌÜÛÜÛLÍÛŒœÛÌ›ÜÜÜLÛMÜÍÜÌÛMİÛMİLÍİŒœİÌ\MŞœŞLÛÌŒ›ÛXÛØ[›[LÛX[ŒÛX[ÌÛX\ÛX\ŒÛX\Ì›]X]L^X]ŒÛX]Ìİ^MX^Œ›šÌœØ›İ	Ù›Ù‰Í›Ø›Ì›œÜ˜œŒ]œÌ›L›ŒÛXŒÛXÚÍÌŒšÌÛXÛMØÛØÛÍØÜØÜM›ØÜØÜÍXİXİMXİXİÌœŒ›LÜ˜ŞLœ˜ŞŒœ™ÙMYYÍYYMYÍYÙMÙÙÍÙŒÜ™ZÌÛY[ÛY[LÛY[ŒÛY[ÌÛY\ÛY\MÙ\ŒÙ\ÌÙ]Ù]LÙ]ŒÙ]Ì]Ù^]Ù^L]Ù^Œ]Ù›Ü™›LÛY›ŒÛY›ÌÛYœÛYœLÛYœŒİœÌÛYÜ™LÜ™ŒÜ™ÌÜ™ŒÛLŒÚÍ›ÌŒL›M›Ì™Ì›˜ÜL›İÛLİL›MÜÍÌN[LÛ_IÚÙ\›š[™ÉŞØÛÍ]ZÜÍ[İ\^M\ÌMÜİ]ŸLŒ]ØÚÜÍØÛ\ØÛœØÛÜØÜØÛÍİŸLšŞÌŒ]ßLŞÍ]MZİMÛ]M[ÜÍ\^\LMÜİM]_LÌMÜİM]M[İM\\ßL^Í]ZİÛ]M[İ\^\LMÜİM]_IÙ›Ù‰ËM›ÍİØÚÜØÛØÛ\ØÛœØÛÜØÜÍßLİ^ÌMÜİM]M[ÜÍ\]_LİÌMÜİM]M[ÜÍ\]_Y^ÌMÜİM]M[İM\]_MÜÌMÜİM]M[İM\]_XÚŞÍ]ZÜÍ[İ\^M\ÌMÜİ]ŸMÍ]ZÜÍ[İ\^M\ÌMÜİ]ŸXÛ^Í]ZÜÍ[İ\^M\ÌMÜİ]ŸXÛÍ]ZÜÍ[İ\^M\ÌMÜİ]ŸXÛŞÍ]ZÜÍ[İ\^M\ÌMÜİ]ŸXÜÍ]ZÜÍ[İ\^M\ÌMÜİ]ŸM›ÌMÜİ][İM\]_LMÜŞØÚİXÛXÛ]XÛXÛİXÜMMİ_M[ŞØÚİXÛXÛ]XÛXÛİXÜMMİ_M\^ØÚŞ˜Û˜Û^˜Û˜ÛŞ˜Üİ_M\ØÚŞÛÛ^ÛÛŞÜİ_M]ØÚİXÛXÛ]XÛXÛİXÜMMİ_MÜ^ØÚİXÛXÛ]XÛXÛİXÜM_MœÌMÜİÍ]Í[İM\]_YZŞÌMÜİ]\]_Y[ÌMÜİ][İM\]_Y[^ÌMÜİ]\]_Y[ÌMÜİ]\]_Y[ŞÌMÜİ]\]_Y\ÌMÜİ][İM\]_Y\ŞÌMÜÜÍ]Í\]_Y]ÌMÜİÍ]Í[İM\]_Y]^ÌMÜİÍ]Í[İM\]_Y]ÌMÜÜÍ]Í\]_MÌMÜİÍ]Í[İM\]M\œßY›^ÌMÜİÍ]Í[İM\]M\œßY›ÌMÜİÍ]Í[İM\]M\œßY›ŞÌMÜİÍ]Í[İM\]M\œßYœÌMÜİÍ]Í[İM\]M\œßYœ^ÌMÜİÍ]Í[İM\]M\œßMÜØÚİÛÛ]ÛÛİÜ[ÜßYœŞÌMÜİÍ]Í[İM\]M\œßYÌMÜİM]M[İM\]_MÛ^Í[ÜßYÌMÜİM]M[İM\]_YŞÌMÜİM]M[İM\]_YØÚÜØÛØÛ\ØÛœØÛÜØÜÍß__HŠKŞ[X›Û™
ÉİÚYÉŞÚÌİX]ÍŒN[LÛLšÌ]››Œ›LL›ŒÛLœ[ŒŒœM›ÌÚÌÛLœÌ››ŒÜŒÌ]ÛLÛLL]Œ]ØšÌœØ›Ü‰Ù›Ù‰Í›ÌÛŒÛLÛÌÛLÜÛLÜLÛLÜŒÛLÜÌÛLİÛLİL]ÌİŒ]ÌİÌÜŒŞÜŒŞLÜŒŞŒØœİÛÛM]Œ›^›^ŒÛLœMYœŒÜİŒÚÍİÌ[ÍŞÚßIÚÙ\›š[™ÉŞÉÙ›Ù‰ËM›ß_HŠK[™]XØN™
ÉİÚYÉŞÚÌÜœMXŞ]ÌŒ[ŒÜŒŒ[Í›ÌŒ\Ì\LŒ]\LŒ]L\LŒ]Ì›Œ^›Œ^L›šÌ]Ì›]ÌŒ›L›Œ›ŒÜŒ›ÌÜŒœ]ŒœM›ÌœŒ[ŒœÌ››LœŒŒİLÌ]Ì›L]ÌŒ]ÌÚÌÜŒÛÜŒÛLÜŒÛŒÜŒÛÌÜŒÜÜŒÜLÜŒÜŒÜŒÜÌÜŒŒİ›ŒİL›İŒ]ÌİÌİLŞİLŞLİLŞŒÜÍœMMMÍÍÍMLŞMÍÍ]ÍLÛMMÌÜ[MÍMZÍM[M[MÍ[M[ÌŞ\Í\MM\^M\ÍM]M]LŞ]Œ]Í]Ì]Í^]Í^L^ŒÜšÌ››Ü›LÜ›ŒÛM›ÌÜœÜœL]ÍœŒÜœÌÜ\ML\MŒÛMÌ\M[LÜŒÜÚÌÜÛÜÛL›ÛŒÛMÛÌ]ÍÜÜÜLÛMÜÍÜÌÛMİÛMİLÛMİŒ›İÌ]MŞ›ŞLİLŒ›Ü˜ÛX[›[LÜ˜[ŒÜ˜[ÌÜ˜\Ü˜\ŒÜ˜\Ì›]]Lœ]ŒÜ˜]ÌİX^M^Œ›šÌœØ›İIÙ›Ù‰Í›Ø›Ì›œÜ˜œŒ]ØœÌ›L›ØŒÜ˜ŒŞÚÍLŒšÌÜ˜ÛMXÛXÛÍXÜXÜM›ØÜØÜÍXİXİMXİXİÌ]Ì›L›˜ŞL]ØŞŒ]ÙÙMYYÍYYMYÍYÙMÙÙÍÙŒŞZÌÜ™[Ü™[LÜ™[ŒÜ™[ÌÜ™\Ü™\M]\ŒÛY\ÌÜ™]Ü™]LÜ™]ŒÜ™]Ì]Ù^]Ù^L]Ù^Œ]Ù›Ü™›LÜ™›ŒÜ™›ÌÜ™œÜ™œLÜ™œŒİYœÌŞÜ™LÜ™ŒÜ™ÌÜ™ŒÛLŒÚÍ›ÌŒL›M›Ì™Ì›˜ÜL›İÜŒİL]ÌMÜÍLN[LÜŸIÚÙ\›š[™ÉŞÍ\^ÍİŸXÛÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸLŒ]ÌİMÌZÌ]_LŒ^ÌİMŞL]_LMÜŞÌšİÛXÛ]XÛMİÜMMŞXÛİXÚİ_LŞÍÜ\Í^ZÌ[LMÜŞM[İÍ\^\œÙœİM]MİY_LÌMÜŞM]M[ŞM\\ßL^ÍÜ\Í^ZÌ[LMÜŞM[İÍ\^\œÙœİM]MİY_IÙ›Ù‰ËM›ÍÜÌMÜİ][İßXÚŞÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸMÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÛ^Í\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÛÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÛŞÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÜÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸM›ÌMÜŞM]M[İßYŞÌMÜİ]MÌMÜİ]MÜŞÙœİY^ÌMÜİ]YÌMÜİ]M[ŞØÚİØÛØÛ]ØÛØÛİØÜÍÍİŸYÌMÜİ]Y^ÌMÜİ]MİÍ[İßYŞÌMÜİ]M]ÌšİÛXÛ]XÛMİÜMMŞXÛİXÚİ_Y^ÌMÜİ][İßMœÌMÜŞM]M[İÍ\\ßYZŞÌMÜŞM]M[İßY[ÌMÜŞM]M[İßY[^ÌMÜŞM]M[İßY[Í]_Y[ŞÌMÜŞM]M[İßY\ÌMÜŞM]M[İßY\ŞÌMÜŞM]M\\ßY]ÌMÜŞM]M[İÍ\\ßY]^ÌMÜŞM]M[İÍ\\ßY]ÌMÜŞM]M[İÍ\\ßMÌMÜŞM]M[İÍ\\ßY›^ÌMÜŞM]M[İÍ\\ßY›ÌMÜŞM]M[İÍ\\ßY›ŞÌMÜŞM]M[İÍ\\ßYœÌMÜŞM]M\\ßYœ^ÌMÜŞM]M[İÍ\\ßMÜÍ[İßYœŞÌMÜŞM]M[İÍ\\ßYÌMÜİ][İßMÛ^Í[İßYÌMÜİ][İßYŞÌMÜİ][İß__HŠK’[™]XØKP›ÛØ›\]YH™
ÉİÚYÉŞÚÌÜÌœMØŞ]ÌŒ[ŒÜŒŒ[Í›ÌŒ\Ì]ÌŒ]]ÌŒ]L]ÌŒ]ÌÛLŒ^ÛLŒ^LÛLšÌ]Ì››Œ›L›Œ›ŒÜŒ›ÌÜŒœ]ŒœM›ÌœŒ\ÌœÌ››LœŒŒİLÌ]Ì›L]ÌŒ]ÌÚÌÜŒÛÜŒÛLÜŒÛŒÜŒÛÌÜŒÜÜŒÜLÜŒÜŒÜŒÜÌÜŒŒİ›ŒİL›İŒ›İÌİLŞİLŞLİLŞŒŞÍ›ÍMÍÍÍÍMLŞMÍÍ]ÍLÜÍÌŞ[MÍMZÍM[M[MÍ[M[ÌŞ\Í\MM\^M\ÍM]M]LŞ]Œ›]Ì]Í^›^LİM^ŒÜšÌ››Ü›LŞ›ŒÜ›ÌŞœÜœL›œŒŞœÌŞ]ÍL]ÍŒÜÌ]Í]LŞŒŞÚÌŞÛŞÛLœÛŒÜÛÌ›ÜŞÜLÜÜMÜÌÜİÜİLÛMİŒœİÌ]ÍŞœŞLİLŒ›Ü˜ÛØ[›[LÜ˜[ŒÜ˜[ÌÜ˜\Ü˜\ŒÜ˜\Ì›]]Lœ]ŒÜ˜]ÌİX^M^Œ›šÌœØ›İIÙ›Ù‰Í›Ø›Ì›œŞœLÜ˜œŒ]ØœÌ›L›ØŒÜ˜ŒŞÚÍÌŒšÌÜ˜ÛMØÛØÛÍØÜØÜM›ØÜØÜÍXİXİMXİXİÌ]Ì›L˜ŞL]ØŞŒ]ÙÙMYYÍYYMYÍYÙMÙÙÍÙŒŞZÌÜ™[Ü™[LÜ™[ŒÜ™[ÌÜ™\Ü™\M]\ŒÜ™\ÌÜ™]Ü™]LÜ™]ŒÜ™]Ì]Ù^]Ù^L]Ù^Œ]Ù›Ş›LŞ›ŒŞ›ÌŞœŞœLŞœŒİYœÌŞŞLŞŒŞÌŞŒÜŒŒÚÍ›ÌŒL›M›Ì™Ì›˜ÜL›İÜŒİL›MÜÍLN[LÜŸIÚÙ\›š[™ÉŞØÛÍ\ÍZİM[İ\\ÌMÜİ]ŸLŒ]ÌİÍŞL]ßLŒ]ŞÌšÜßLŒ^ÌİÍŞL]ßLšŞÌŒ]ÌŒ^ßLŞÍÜ\Í]MZİÍ[ÜÍ\]Í\œÌMÜİM]MİÙœßLÍ[İÍ\\ßL^ÍÜ\Í]MZİÍ[ÜÍ\]Í\œÌMÜİM]MİÙœßIÙ›Ù‰ËM›ÍÜÌMÜİM]M[İXÚŞÍ\ÍZİM[İ\\ÌMÜİ]ŸMÍ\ÍZİM[İ\\ÌMÜİ]ŸXÛ^Í\ÍZİM[İ\\ÌMÜİ]ŸXÛÍ\ÍZİM[İ\\ÌMÜİ]ŸXÛŞÍ\ÍZİM[İ\\ÌMÜİ]ŸXÜÍ\ÍZİM[İ\\ÌMÜİ]ŸM›ÌMÜİ][ÜßLMÜŞÌšİØÛ˜Û]˜Û˜Ûİ˜ÜİØÚİŸM[ŞÌšİXÛÛ]ÛÛİÜİÚİM\^ÌšÜØÛØÛ\ØÛœØÛÜØÜÍÍİ˜ÚÜßM\ÌšÜÍÜßM]ÌšİØÛ˜Û]˜Û˜Ûİ˜ÜİØÚİŸY[ŞÌMÜİ][ÜßY^ÌMÜİM]M[İMœÌMÜÜÍ]ßYZŞÌMÜİ][ÜßY[ÌMÜİ][ÜßY[^ÌMÜİ][ÜßY[ÌMÜİ][ÜßM›ŞÌŒ]ßY\ÌMÜİ][ÜßY\ŞÌMÜÜÍ]ßY]ÌMÜÜÍ]ßY]^ÌMÜÜÍ]ßY]ÌMÜÜÍ]ßMÌMÜİM]M[ÜÍ\]Y›^ÌMÜİM]M[ÜÍ\]Y›ÌMÜİM]M[ÜÍ\]Y›ŞÌMÜİM]M[ÜÍ\]YœÌMÜİM]M[ÜÍ\]Yœ^ÌMÜİM]M[ÜÍ\]YœŞÌMÜİM]M[ÜÍ\]YÌMÜİM]M[İMÛ^Í[ÜßYÌMÜİM]M[İYŞÌMÜİM]M[İ__HŠK˜\‘[™Ø˜]Î™
ÉİÚYÉŞÚÍLšÌ]ÉÙ›Ù‰Í›ßIÚÙ\›š[™ÉŞÉÙ›Ù‰ËM›ß_HŠKÛİ\šY\‹P›Û™
ÉİÚYÉŞÚÌİÉÙ›Ù‰Í›ßIÚÙ\›š[™ÉŞÉÙ›Ù‰ËM›ß_HŠK•[Y\ËR][XÈ™
ÉİÚYÉŞÚÌÛŒœMXŞ›Œ[ŒÛLŒ[Í]Œ\Ì›Œ]›Œ]L›Œ]ÌÜŒŒ^ÜŒŒ^LÜŒšÌ]››Œ›L›Œ›ŒÛL›ÌÛLœ[ŒŒœM]œŒ\œÌ››LÛLŒÌ]›L]Œ]ÌÚÌÛLÛÛLÛLÛLÛŒÛLÛÌÛLÜÛLÜLÛLÜŒÛLÜÌÛLŒİ›ŒİL›İŒ›İÍŒŞŒŞMŒŞŒÛMÍ]ÍŞLŞMÍÍŞLŞÍÍÍ›LÍMÌÜ[MMÍZÌŞ[Í[LŞ[ŒÛM[ÌÜ\Í\LŞ\[\ÌŞ]Ü]LÜ]Œœ]Ì]Í^œ^LM^ŒÛMšÌ››ÛM›LÛM›ŒÍ›ÌÛMœÍœL]ÍœŒÛMœÌÛM]ÍL]ÍŒÍÌ]ÍÍLÛMŒÛMÚÌÛMÛÛMÛLœÛŒœÛÌ]ÍÜÛMÜLÍÜMÜÌÍİÍİLœİŒœÍİÌ]ŞœÍŞLÜLŒ›ÛXÛŞ[œ˜[LÛX[ŒÛX[ÌÛX\ÛX\ŒÛX\Ì›]Ø]L]˜]ŒÛX]Í˜^MØ^Œ›šÌœØ›‰Ù›Ù‰Í›Ø›Ì›œÛXœLÛØœŒ]œÌ›L^˜ŒÛXŒÛXÚÌŞŒšÌÛXÛLŞÛŒŞÛÌŞÜŞÜM]ÜXÜÌŞİŞİLŞİŒŞİÌ››LXŞL›ŞŒ›YMÙÙÍÙÙMÙÍÙÙMÙÙÍÙŒÛYZÌÛY[ÛY[LÛY[ŒÛY[ÌÛY\ÛY\MY\ŒÙ\ÌÙ]Ù]LÙ]ŒÙ]Ì]Ù^]Ù^L]Ù^Œ]Ù›ÛY›LÛY›ŒÛY›ÌÛYœÛYœLÛYœ™œÌÛYÛYLÛYŒÛYÌÛYŒÌŒÚÍ›ÌŒL›M›L™Ì›˜ÜL›İÛLİL›MÜÌÜŒN[LÛ_IÚÙ\›š[™ÉŞØÛÍZİ]ßLŒ\ŞÌŒ\İßLŒ]ÌŒ]ÌŞL^MœK]LŒ^ÌŞL^_LšŞÌŒ]ßLŞÍÜ\Í^MÜœÍZŞMÛ]Í[ÜÍ\^\LMÜİM]_LÌMÜÜÍ]Í[ÜßL^ÍÜ\Í^MÜœÍZŞMÛ]Í[ÜÍ\^\LMÜİM]_IÙ›Ù‰ËM›ÍÌMÜÜÍ]Í\\ßMİÍ[ÜßLİÍ\\ßMÜÌMÜİM]M\\ßXÚŞÍZİ]ßMÍZİ]ßXÛ^ÍZİ]ßXÛÍZİ]ßXÛŞÍZİ]ßXÜÍZİ]ßM›Í\ÍZÜÍ[İM\]Í\LMÜİM]_LMÜŞÌšÜßM\^ØÚİ˜Û˜Û]˜Û˜Ûİ˜ÜŸM\ØÚİXÛXÛ]XÛXÛİXÜM_M]ÌšÜßMœÍ\ÍZÜÍ[İM\]Í\LMÜİM]_YZŞÍ\ÍZÜÍ[İM\]Í\LMÜİM]_Y[Í\ÍZÜÍ[İM\]Í\LMÜİM]_Y[^Í\ÍZÜÍ[İM\]Í\LMÜİM]_Y[Í\ÍZÜÍ[İM\]Í\LMÜİM]_Y[ŞÍ\ÍZÜÍ[İM\]Í\LMÜİM]_Y\Í\ÍZÜÍ[İM\]Í\LMÜİM]_Y\ŞÍZÜÍ\\Í\ßY]Í\ÍZÜÍ[İM\]Í\LMÜİM]_Y]^Í\ÍZÜÍ\]Í\LMÜİM]_Y]ÍZÜÍ\\Í\ßY^ÌMÜÜÍ]Í\\ßMÍ]ZÜÍ[İM\]Í\LMÜİM]_Y›^Í]ZÜÍ[İM\]Í\LMÜİM]_Y›Í]ZÜÍ[İM\]Í\LMÜİM]_Y›ŞÍ]ZÜÍ[İM\]Í\LMÜİM]_YœÍ]ZÜÍ[İM\]Í\LMÜİM]_Yœ^Í]ZÜÍ[İM\]Í\LMÜİM]_MÜÍ[ÜßYœŞÍ]ZÜÍ[İM\]Í\LMÜİM]_YÌMÜİM]M\\ßY^ÌMÜİM]M\\ßYÌMÜİM]M\\ßYŞÌMÜİM]M\\ß__HŠK•[Y\ËT›ÛX[ˆ™
ÉİÚYÉŞÚÌÛŒœMXŞ›Œ[ŒÛLŒ[Í›ÌŒ\Ì›Œ]›Œ]L›Œ]ÌÌŒ^ÌŒ^LÌšÌ]››Œ›L›Œ›ŒÛL›ÌÛLœ[ŒŒœM›ÌœŒ[LœÌ››LÛLŒÜÌÌ]›L]Œ]ÌÚÌÛLÛÛLÛLÛLÛŒÛLÛÌÛLÜÛLÜLÛLÜŒÛLÜÌÛLŒİ›ŒİL›İŒ]ÌİÌÜÌŞÜÌŞLÜÌŞŒÍÍ]ÍÍMMMÍÍŞLÜÍÍÍ›LœÍÌŞ]MÍÍZÌÜ[Í[MM[ŒÜ[ÌŞ\Í\MÍ\^M\ÍÍ]Í]LŞ]Œ›]Ì]Í^›^L^ŒÛMšÌ››Í›LÛM›ŒÍ›ÌÛMœÍœL›œŒÛMœÌÛM]ÍL]ÍŒÛMÌ]ÍMLÛMŒÛMÚÌÛMÛÛMÛL›ÛŒœÛÌ]ÍÜÛMÜLÛMÜÍÜÌÛMİÛMİLÍİŒÚÍİÌ[ÍŞÚÍŞLÜLŒ›ÛXÛØ[›[LÛX[ŒÛX[ÌÛX\ÛX\ŒÛX\Ì›]Ø]L]˜]ŒÛX]ÌÜØ^MØ^Œ›šÌœØ›ÜÉÙ›Ù‰Í›Ø›Ì›œÛXœLœŒ]œÌ›L^˜ŒÛXŒØÚÍÌŒšÌÛXÛMØÛØÛÍØÜØÜM]ÜXÜÌŞİŞİLŞİŒŞİÌ››LŞL›ŞŒ›ÙMÙÙÍÙÙMÙÍÙÙMÙÙÍÙŒÛYZÌÙ[Ù[LÙ[ŒÙ[ÌÙ\Ù\MY\ŒÙ\ÌÙ]Ù]LÙ]ŒÙ]Ì]Ù^]Ù^L]Ù^Œ]Ù›ÛY›LÛY›ŒÛY›ÌÛYœÛYœLÛYœŒÜÙœÌÛYÛYLÛYŒÛYÌÛYŒÛLŒÚÍ›ÌŒL›M›L™Ì›˜ÜL›İÛLİL]ÌMÜÍÌN[LÛ_IÚÙ\›š[™ÉŞØÛÍ\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßLŒ\ŞÌŒ\ÜßLŒ]ØÚİÍØÛ]ØÛØÛİØÜØÛÍİLŒ]ßLšŞÌŒ]ßLŞÍ\ÍZİÍ[ÜÍ\^\LMÜŞ]LÌMÜİÍ]Í[İM\]_L^Í\ÍZİÍ[ÜÍ\^\LMÜŞ]IÙ›Ù‰ËM›ÍİØÚİXÛXÛ]XÛXÛİXÜMM[ÜÍ\œßLİ^ÌMÜİM]M\\ßLİÌMÜİM]M\\ßMÜÌMÜİÍ]Í\\ßXÚŞÍ\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßMÍ\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßXÛ^Í\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßXÛÍ\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßXÛŞÍ\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßXÜÍ\ÍZİLMÜİÍ[İM\^M\ÌŒ\ÜÍ]ÌŒ]ÜßM›ÌMÜİM]M[ÜÍ\]Í\œßLMÜŞÌšİÛ˜Û]˜Û˜Ûİ˜ÜİXÚİŸM[ŞØÚİØÛØÛ]ØÛØÛİØÜÍÍİ_M\^ØÚŞXÛXÛ^XÛXÛŞXÜMMİM[\ßM\ØÚİÛÛ]ÛÛİÜÜßM]ÌšİÛ˜Û]˜Û˜Ûİ˜ÜİXÚİŸMÜ^ØÚÜØÛØÛ\ØÛœØÛÜØÜÍßMœÌMÜİM]M\]Í\œßYZŞÍ\\Í\œßY[ÌMÜİM]M[ÜÍ\]Í\œßY[^ÌMÜİM]M[ÜÍ\\Í\œßY[ÌMÜİM\\Í\œßY[ŞÍ\\Í\œßY\ÌMÜİM]M[ÜÍ\]Í\œßY\ŞÍ\\ßY]ÌMÜİM]M\]Í\œßY]^ÌMÜİM]M\\Í\œßY]Í\\ßMÌMÜİ][ÜÍ\^\œßY›^Í[ÜÍ\]\œßY›ÌMÜİ][ÜÍ\^\œßY›ŞÌMÜİ][ÜÍ\^\œßYœÍ[ÜÍ\]\œßYœ^Í[ÜÍ\]\œßMÜØÚİXÛXÛ]XÛXÛİXÜMM[ÜßYœŞÌMÜİ][ÜÍ\^\œßYÌMÜÜÍ]Í\\ßY^ÌMÜİÍ]Í\\ßYÌMÜİÍ]Í\\ßYŞÌMÜÜÍ]Í\\ßYØÚİXÛXÛ]XÛXÛİXÜMM[ÜÍ\œß__HŠK’[™]XØKSØ›\]YH™
ÉİÚYÉŞÚÌÜœMXŞ]ÌŒ[ŒÜŒŒ[Í›ÌŒ\Ì\LŒ]\LŒ]L\LŒ]Ì›Œ^›Œ^L›šÌ]Ì›]ÌŒ›L›Œ›ŒÜŒ›ÌÜŒœ]ŒœM›ÌœŒ[ŒœÌ››LœŒŒİLÌ]Ì›L]ÌŒ]ÌÚÌÜŒÛÜŒÛLÜŒÛŒÜŒÛÌÜŒÜÜŒÜLÜŒÜŒÜŒÜÌÜŒŒİ›ŒİL›İŒ]ÌİÌİLŞİLŞLİLŞŒÜÍœMMMÍÍÍMLŞMÍÍ]ÍLÛMMÌÜ[MÍMZÍM[M[MÍ[M[ÌŞ\Í\MM\^M\ÍM]M]LŞ]Œ]Í]Ì]Í^]Í^L^ŒÜšÌ››Ü›LÜ›ŒÛM›ÌÜœÜœL]ÍœŒÜœÌÜ\ML\MŒÛMÌ\M[LÜŒÜÚÌÜÛÜÛL›ÛŒÛMÛÌ]ÍÜÜÜLÛMÜÍÜÌÛMİÛMİLÛMİŒ›İÌ]MŞ›ŞLİLŒ›Ü˜ÛX[›[LÜ˜[ŒÜ˜[ÌÜ˜\Ü˜\ŒÜ˜\Ì›]]Lœ]ŒÜ˜]ÌİX^M^Œ›šÌœØ›İIÙ›Ù‰Í›Ø›Ì›œÜ˜œŒ]ØœÌ›L›ØŒÜ˜ŒŞÚÍLŒšÌÜ˜ÛMXÛXÛÍXÜXÜM›ØÜØÜÍXİXİMXİXİÌ]Ì›L›˜ŞL]ØŞŒ]ÙÙMYYÍYYMYÍYÙMÙÙÍÙŒŞZÌÜ™[Ü™[LÜ™[ŒÜ™[ÌÜ™\Ü™\M]\ŒÛY\ÌÜ™]Ü™]LÜ™]ŒÜ™]Ì]Ù^]Ù^L]Ù^Œ]Ù›Ü™›LÜ™›ŒÜ™›ÌÜ™œÜ™œLÜ™œŒİYœÌŞÜ™LÜ™ŒÜ™ÌÜ™ŒÛLŒÚÍ›ÌŒL›M›Ì™Ì›˜ÜL›İÜŒİL]ÌMÜÍLN[LÜŸIÚÙ\›š[™ÉŞÍ\^ÍİŸXÛÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸLŒ]ÌİMÌZÌ]_LŒ^ÌİMŞL]_LMÜŞÌšİÛXÛ]XÛMİÜMMŞXÛİXÚİ_LŞÍÜ\Í^ZÌ[LMÜŞM[İÍ\^\œÙœİM]MİY_LÌMÜŞM]M[ŞM\\ßL^ÍÜ\Í^ZÌ[LMÜŞM[İÍ\^\œÙœİM]MİY_IÙ›Ù‰ËM›ÍÜÌMÜİ][İßXÚŞÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸMÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÛ^Í\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÛÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÛŞÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸXÜÍ\ÍZİÍ[İÍ\\ÌMÜİ]ŸM›ÌMÜŞM]M[İßYŞÌMÜİ]MÌMÜİ]MÜŞÙœİY^ÌMÜİ]YÌMÜİ]M[ŞØÚİØÛØÛ]ØÛØÛİØÜÍÍİŸYÌMÜİ]Y^ÌMÜİ]MİÍ[İßYŞÌMÜİ]M]ÌšİÛXÛ]XÛMİÜMMŞXÛİXÚİ_Y^ÌMÜİ][İßMœÌMÜŞM]M[İÍ\\ßYZŞÌMÜŞM]M[İßY[ÌMÜŞM]M[İßY[^ÌMÜŞM]M[İßY[Í]_Y[ŞÌMÜŞM]M[İßY\ÌMÜŞM]M[İßY\ŞÌMÜŞM]M\\ßY]ÌMÜŞM]M[İÍ\\ßY]^ÌMÜŞM]M[İÍ\\ßY]ÌMÜŞM]M[İÍ\\ßMÌMÜŞM]M[İÍ\\ßY›^ÌMÜŞM]M[İÍ\\ßY›ÌMÜŞM]M[İÍ\\ßY›ŞÌMÜŞM]M[İÍ\\ßYœÌMÜŞM]M\\ßYœ^ÌMÜŞM]M[İÍ\\ßMÜÍ[İßYœŞÌMÜŞM]M[İÍ\\ßYÌMÜİ][İßMÛ^Í[İßYÌMÜİ][İßYŞÌMÜİ][İß__HŠ__NÙK™]™[Ëœ\Ú
È˜Y›Û‹[˜İ[ÛŠŠ^İ˜\ˆÏX‹™›ÛÏ^•[šXÛÙVİËœÜİØÜš\˜[YWN×É‰ŠË›Y]Y]K•[šXÛÙO^ßKË›Y]Y]K•[šXÛÙKÚYÏWËÚYËË›Y]Y]K•[šXÛÙKšÙ\›š[™ÏWËšÙ\›š[™ÊNİ˜\ˆZ•[šXÛÙVİËœÜİØÜš\˜[YWNÓ‰‰ŠË›Y]Y]K•[šXÛÙK™[˜ÛÙ[™ÏS‹Ë™[˜ÛÙ[™ÏS‹˜ÛÙTYÙ\ÖÌJ_WJ_J\‹TJK[˜İ[ÛŠJ^İ˜\ˆY[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆ\‹›[™İO[™]ÈZ[\œ˜^JŠKÏLÜÏÜÊÊÊXVÜ×O\‹˜Ú\ÛÙP]
ÊNÜ™]\›ˆ_NÙKTK™]™[Ëœ\Ú
È˜Y›Û‹[˜İ[ÛŠŠ^İ˜\ˆ]›ÚYO\‹™›ÛÏ\‹š[œİ[˜ÙNÚYŠXKš\Ôİ[™\™›Û
^ÚYŠÏOO]›ÚY
]›İÈ™]È\œ›ÜŠ‘›ÛÙ\È›İ^\İ[ˆ‘”Ë[\Ü›ÛÈÜˆ™[[İ™HXÛ\˜][ÛˆØË˜Y›Û
	ÈŠØKœÜİØÜš\˜[YJÈ‰ÊKˆŠNÚYŠ\[ÙŠ\Ë™^\İÑš[R[•‘”ÊKœÜİØÜš\˜[YJOOOHLOÜË›ØYš[JKœÜİØÜš\˜[YJNœË™Ù]š[Qœ›ÛU‘”ÊKœÜİØÜš\˜[YJJHOHœİš[™ÈŠ]›İÈ™]È\œ›ÜŠ‘›Û\È›İİÜ™Y\Èİš[™ËY]H[ˆ‘”Ë[\Ü›ÛÈÜˆ™[[İ™HXÛ\˜][ÛˆØË˜Y›Û
	ÈŠØKœÜİØÜš\˜[YJÈ‰ÊKˆŠNÊ[˜İ[ÛŠËÊ^ØÏK×—WË\İ
ÊOİ
ÊN
›JÊJKË›Y]Y]OYKTK•‘›Û›Ü[ŠÊKË›Y]Y]K•[šXÛÙO[Ë›Y]Y]K•[šXÛÙ_Ù[˜ÛÙ[™ÎßKÙ\›š[™ÎßKÚYÎ–×_KË›Y]Y]K™ÛRYÕ\ÙYVÌ_JJKŠ__WJ_J\ŠK\‹TK˜Yİ™Ğ\Ò[XYÙOY[˜İ[ÛŠK‹‹KËËÊ^ÚYŠ\Ó˜SŠ
_\Ó˜SŠŠJ]›İÈ‹™\œ›ÜŠšœÔ‹˜Yİ™Ğ\Ò[XYÙNˆ[˜[YÛÛÜ™[˜]\È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[YÛÛÜ™[˜]\È\ÜÙYÈœÔ‹˜Yİ™Ğ\Ò[XYÙHŠNÚYŠ\Ó˜SŠŠ_\Ó˜SŠJJ]›İÈ‹™\œ›ÜŠšœÔ‹˜Yİ™Ğ\Ò[XYÙNˆ[˜[YYX\İ\™[Y[È‹\™İ[Y[ÊK™]È\œ›ÜŠ’[˜[YYX\İ\™[Y[È
ÚY[™ÛÜˆZYÚ
H\ÜÙYÈœÔ‹˜Yİ™Ğ\Ò[XYÙHŠNİ˜\ˆYØİ[Y[˜Ü™X]Q[[Y[
˜Ø[˜\ÈŠNÙÚY[‹šZYÚXNİ˜\ˆY™Ù]ÛÛ^
Œ™ŠNÙ‹™š[İ[OHˆÙ™™ˆ‹‹™š[™Xİ
ÚYšZYÚ
Nİ˜\ˆ^ÚYÛ›Ü™S[İ\ÙNˆLYÛ›Ü™P[š[X][ÛˆLYÛ›Ü™Q[Y[œÚ[ÛœÎˆLK]\ÎÜ™]\›Šœ‹˜Ø[™ÏÔ›ÛZ\ÙKœ™\ÛÛ™Jœ‹˜Ø[™ÊN™ÚJ

OOš[\Ü
‹‹Ú[™^™\ËP”İ[ÛÌYšœÈŠK×JJK˜Ø]Ú
[˜İ[ÛŠŠ^Ü™]\›ˆ›ÛZ\ÙKœ™Z™Xİ
™]È\œ›ÜŠÛİ[›İØYØ[™ÎˆŠØŠJ_JK[Š[˜İ[ÛŠŠ^Ü™]\›ˆ‹™Y˜][Ø‹™Y˜][˜ŸJK[Š[˜İ[ÛŠŠ^Ü™]\›ˆ‹™œ›ÛTİš[™Ê‹K
_K[˜İ[ÛŠ
^Ü™]\›ˆ›ÛZ\ÙKœ™Z™Xİ
™]È\œ›ÜŠÛİ[›İØYØ[™ËˆŠJ_JK[Š[˜İ[ÛŠŠ^Ü™]\›ˆ‹œ™[™\Š
_JK[Š[˜İ[ÛŠ
^Ş˜Y[XYÙJÑ]UT“
š[XYÙKÚœYÈ‹JK‹‹KËÊ_J_K\‹TKœ]İ[YÙ\ÏY[˜İ[ÛŠJ^İ˜\ˆLÜ\œÙR[
\Ëš[\›˜[™Ù]›Û

KšYœİXœİŠJKL
OMOÊ[™]È™YÑ^
K™ÈŠK]\Ëš[\›˜[™Ù][X™\“Ù”YÙ\Ê
JNŠ[™]È™YÑ^
\Ëœ‘\ØØ\LMŠK\Ëš[\›˜[™Ù]›Û

JK™ÈŠK]\Ëœ‘\ØØ\LMŠ\Ëš[\›˜[™Ù][X™\“Ù”YÙ\Ê
JÈˆ‹\Ëš[\›˜[™Ù]›Û

JJNÙ›ÜŠ˜\ˆLNÛ]\Ëš[\›˜[™Ù][X™\“Ù”YÙ\Ê
NÛŠÊÊY›ÜŠ˜\ˆOLØO\Ëš[\›˜[œYÙ\ÖÛ—K›[™İØJÊÊ]\Ëš[\›˜[œYÙ\ÖÛ—VØWO]\Ëš[\›˜[œYÙ\ÖÛ—VØWKœ™\XÙJŠNÜ™]\›ˆ\ßK\‹TKšY]Ù\”™Y™\™[˜Ù\ÏY[˜İ[ÛŠK
^İ˜\ˆÙOY_ßK]LNİ˜\ˆ‹KËÏ^ÒYUÛÛ˜\ÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKŒßKYSY[X˜\ÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKŒßKYUÚ[™İÕRNÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKŒßKš]Ú[™İÎÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKŒßKÙ[\•Ú[™İÎÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKŒßK\Ü^QØÕ]NÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKK›Û‘[ØÜ™Y[”YÙS[ÙNÙY˜][˜[YNˆ•\ÙS›Û™H‹˜[YNˆ•\ÙS›Û™H‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È•\ÙS›Û™H‹•\ÙSİ][™\È‹•\ÙU[XœÈ‹•\ÙSĞÈ—K•™\œÚ[ÛŒKŒßK\™Xİ[ÛÙY˜][˜[YNˆ“”ˆ‹˜[YNˆ“”ˆ‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È“”ˆ‹”Œ“—K•™\œÚ[ÛŒKŒßKšY]Ğ\™XNÙY˜][˜[YNˆÜ›Ü›Ş‹˜[YNˆÜ›Ü›Ş‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È“YYXP›Ş‹Ü›Ü›Ş‹•š[P›Ş‹›YY›Ş‹\›Ş—K•™\œÚ[ÛŒKKšY]ĞÛ\ÙY˜][˜[YNˆÜ›Ü›Ş‹˜[YNˆÜ›Ü›Ş‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È“YYXP›Ş‹Ü›Ü›Ş‹•š[P›Ş‹›YY›Ş‹\›Ş—K•™\œÚ[ÛŒKKš[\™XNÙY˜][˜[YNˆÜ›Ü›Ş‹˜[YNˆÜ›Ü›Ş‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È“YYXP›Ş‹Ü›Ü›Ş‹•š[P›Ş‹›YY›Ş‹\›Ş—K•™\œÚ[ÛŒKKš[Û\ÙY˜][˜[YNˆÜ›Ü›Ş‹˜[YNˆÜ›Ü›Ş‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È“YYXP›Ş‹Ü›Ü›Ş‹•š[P›Ş‹›YY›Ş‹\›Ş—K•™\œÚ[ÛŒKKš[ØØ[[™ÎÙY˜][˜[YNˆ\Y˜][‹˜[YNˆ\Y˜][‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È\Y˜][‹“›Û™H—K•™\œÚ[ÛŒKŸK\^ÙY˜][˜[YNˆˆ‹˜[YNˆ››Û™H‹\Nˆ›˜[YH‹^XÚ]Ù]ˆLK˜[YTÙ]–È”Ú[\^‹‘\^›\ÚÜYÙH‹‘\^›\Û™ÑYÙH‹››Û™H—K•™\œÚ[ÛŒKßKXÚÕ˜^PT”Ú^™NÙY˜][˜[YNˆLK˜[YNˆLK\Nˆ˜›ÛÛX[ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]–ÈLLWK•™\œÚ[ÛŒKßKš[YÙT˜[™ÙNÙY˜][˜[YNˆˆ‹˜[YNˆˆ‹\Nˆ˜\œ˜^H‹^XÚ]Ù]ˆLK˜[YTÙ]›[•™\œÚ[ÛŒKßK[PÛÜY\ÎÙY˜][˜[YNŒK˜[YNŒK\Nˆš[YÙ\ˆ‹^XÚ]Ù]ˆLK˜[YTÙ]›[•™\œÚ[ÛŒKß_KÏSØš™XİšÙ^\ÊÊKV×KLLLÙ[˜İ[ÛˆŠËŠ^İ˜\ˆËÏHLNÙ›ÜŠÏLÔÏË›[™İÔÊÏLJWÖÔ×OOOS‰‰ŠÏHL
NÜ™]\›ˆßZYŠ\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\ÏOO]›ÚY	‰Š\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ï^ßK\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ë˜ÛÛ™šYİ\˜][ÛR”ÓÓ‹œ\œÙJ”ÓÓ‹œİš[™ÚYJÊJK\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ëš\ÔİXœØÜšX™YHLJK]\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ë˜ÛÛ™šYİ\˜][Û‹OOOHœ™\Ù]ŸOOHL
^İ˜\ˆÏXË›[™İÙ›ÜŠLŞÎŞ
ÏLJ\–ØÖŞWK˜[YO\–ØÖŞWK™Y˜][˜[YK–ØÖŞWK™^XÚ]Ù]HL_ZYŠÛŠJOOOH›Øš™XİŠ^Ù›ÜŠH[ˆJZYŠÏYVØWKŠËJI‰œÈOO]›ÚY
^ÚYŠ–ØWK\OOOH˜›ÛÛX[ˆ‰‰\[ÙˆÏOH˜›ÛÛX[ˆŠ\–ØWK˜[YO\ÎÙ[ÙHYŠ–ØWK\OOOH›˜[YH‰‰˜Š–ØWK˜[YTÙ]ÊJ\–ØWK˜[YO\ÎÙ[ÙHYŠ–ØWK\OOOHš[YÙ\ˆ‰‰“[X™\‹š\Ò[YÙ\ŠÊJ\–ØWK˜[YO\ÎÙ[ÙHYŠ–ØWK\OOOH˜\œ˜^HŠ^Ù›ÜŠLÙË›[™İÙŠÏLJZYŠHLÖÙ—K›[™İOOLI‰\[ÙˆÖÙ—VÌOOH›[X™\ˆŠYœ\Ú
İš[™ÊÖÙ—KLJJNÙ[ÙHYŠÖÙ—K›[™İŒJ^Ù›ÜŠLÚÖÙ—K›[™İÚ
ÏLJ]\[ÙˆÖÙ—VÚHOH›[X™\ˆ‰‰ŠHLJNÛOOHL	‰™œ\Ú
ÜÖÙ—VÌKLKÖÙ—VÌWKLWKš›Ú[ŠˆŠJ_\–ØWK˜[YOH–ÈŠÙš›Ú[ŠˆŠJÈ—HŸY[ÙH–ØWK˜[YO\–ØWK™Y˜][˜[YNÜ–ØWK™^XÚ]Ù]HL_\™]\›ˆ\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ëš\ÔİXœØÜšX™YOOHLI‰Š\Ëš[\›˜[™]™[ËœİXœØÜšX™Jœ]Ø][ÙÈ‹[˜İ[ÛŠ
^İ˜\ˆËV×NÙ›ÜŠÈ[ˆŠ\–××K™^XÚ]Ù]OOHL	‰Š–××K\OOOH›˜[YHÓ‹œ\Ú
‹ÈŠ×ÊÈˆÈŠÜ–××K˜[YJN“‹œ\Ú
‹ÈŠ×ÊÈˆŠÜ–××K˜[YJJNÓ‹›[™İOOL	‰\Ëš[\›˜[Üš]JÕšY]Ù\”™Y™\™[˜Ù\Â˜
Ó‹š›Ú[Š˜
JØ˜
_JK\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ëš\ÔİXœØÜšX™YHL
K\Ëš[\›˜[šY]Ù\œ™Y™\™[˜Ù\Ë˜ÛÛ™šYİ\˜][Û\‹\ßK\‹TK˜YY]Y]OY[˜İ[ÛŠK
^Ü™]\›ˆ\Ëš[\›˜[—×ÛY]Y]W×ÏOO]›ÚY	‰Š\Ëš[\›˜[—×ÛY]Y]W×Ï^ÛY]Y]N™K˜[Y\ÜXÙU\šNÏÈš‹ËÚœÜ‹™Y˜][›˜[Y\ÜXÙ]\šKÈ‹˜]Ö[\[ÙˆOH˜›ÛÛX[ˆ‰‰K\Ëš[\›˜[™]™[ËœİXœØÜšX™Jœ]Ø][ÙÈ‹[™JK\Ëš[\›˜[™]™[ËœİXœØÜšX™JœÜİ]™\Ûİ\˜Ù\È‹Û™JJK\ßK[˜İ[ÛŠJ^İ˜\ˆYKTK]œ‘\ØØ\LMY[˜İ[ÛŠËÊ^Ù›ÜŠ˜\ˆË[Ë›Y]Y]K•[šXÛÙKÚYËVÈˆ‹Œ‹Œ‹Œ‹Œ—KVÈˆ—KL\Ë›[™İŞÊÊŞ
^ÚYŠÏ[Ë›Y]Y]K˜Ú\˜Xİ\•ÑÛ\
Ë˜Ú\ÛÙP]

JKË›Y]Y]K™ÛRYÕ\ÙYœ\Ú
ÊKË›Y]Y]KÕ[šXÛÙVØ×O\Ë˜Ú\ÛÙP]

Kš[™^ÙŠÊOOKLI‰Šœ\Ú
ÊKœ\Ú
Ü\œÙR[
Ë›Y]Y]KÚYÙ‘Û\
ÊKL
WJJKÏOHŒŠ\™]\›ˆš›Ú[ŠˆŠNØÏXËÔİš[™ÊMŠKœ\Ú
–ÍXË›[™İKÊ_\™]\›ˆš›Ú[ŠˆŠ_KY[˜İ[ÛŠÊ^İ˜\ˆËË‹Ù›ÜŠXĞÒQ[š]Ô›ØÔÙ]š[™™\Ûİ\˜ÙH™YÚ[‚ŒLˆXİ™YÚ[‚˜™YÚ[˜ÛX\‹ĞÒQŞ\İ[R[™›ÈˆÔ™YÚ\İH
YØ™JBˆÓÜ™\š[™È
PÔÊBˆÔİ\[Y[ˆY‚‹ĞÓX\˜[YHĞYØ™KRY[]KUPÔÈY‚‹ĞÓX\\HˆY‚ŒH™YÚ[˜ÛÙ\ÜXÙ\˜[™ÙB™™™‚™[™ÛÙ\ÜXÙ\˜[™ÙXV×KLJÏSØš™XİšÙ^\ÊÊKœÛÜ
[˜İ[ÛŠËÊ^Ü™]\›ˆËWßJJK›[™İŞŞ
ÊÊ[ÏXÖŞK›[™İLL	‰Š
ÏX˜
Ù›[™İ
Ø™YÚ[˜™˜Ú\‚˜
Ùš›Ú[Š˜
JØ™[™™˜Ú\˜V×JKÖÛ×HOO]›ÚY	‰œÖÛ×HOO[[	‰\[ÙˆÖÛ×KÔİš[™ÏOH™[˜İ[Ûˆ‰‰ŠJŒŠÜÖÛ×KÔİš[™ÊMŠJKœÛXÙJM
KÏJŒŠÊ
ÛÊKÔİš[™ÊMŠJKœÛXÙJM
Kœ\Ú
ŠÛÊÈŠÙŠÈˆŠJNÜ™]\›ˆ›[™İ	‰Š
ÏX˜
Ù›[™İ
Ø™YÚ[˜™˜Ú\‚˜
Ùš›Ú[Š˜
JØ™[™™˜Ú\‚˜
K
Ø[™ÛX\ÓX\˜[YHİ\œ™[XİĞÓX\Yš[™\™\Ûİ\˜ÙHÜ™[™™[™Nİ™]™[Ëœ\Ú
Èœ]›Û‹[˜İ[ÛŠÊ^Ê[˜İ[ÛŠÊ^İ˜\ˆÏ[Ë™›Û[Ë›İ][Ë›™]ÓØš™Xİ[Ëœ]İ™X[NÚYŠË›Y]Y]H[œİ[˜Ù[ÙˆKTK•‘›Û	‰˜Ë™[˜ÛÙ[™ÏOOH’Y[]KRŠ^Ù›ÜŠ˜\ˆXË›Y]Y]K•[šXÛÙKÚYËXË›Y]Y]KœİXœÙ]™[˜ÛÙJË›Y]Y]K™ÛRYÕ\ÙYJKÏHˆ‹ÏL×Ï‹›[™İ×ÊÊÊ]ÊÏTİš[™Ë™œ›ÛPÚ\ÛÙJ–××JNİ˜\ˆYŠ
NÚ
Ù]NËY[™İNˆLØš™XİY“ŸJK
™[™ØšˆŠNİ˜\ˆÏYŠ
NÚ
Ù]N›ŠË›Y]Y]KÕ[šXÛÙJKY[™İNˆLØš™XİY”ßJK
™[™ØšˆŠNİ˜\ˆÏYŠ
NÙ
ŠK
‹Õ\HÑ›Û\ØÜš\ÜˆŠK
‹Ñ›Û˜[YHÈŠŞJË™›Û˜[YJJK
‹Ñ›Ûš[LˆŠÓŠÈˆˆŠK
‹Ñ›Û›ŞŠÙKTK”“Øš™Xİ˜ÛÛ™\
Ë›Y]Y]K˜˜›Ş
JK
‹Ñ›YÜÈŠØË›Y]Y]K™›YÜÊK
‹Ôİ[UˆŠØË›Y]Y]Kœİ[UŠK
‹Ò][XĞ[™ÛHŠØË›Y]Y]Kš][XĞ[™ÛJK
‹Ğ\ØÙ[ŠØË›Y]Y]K˜\ØÙ[™\ŠK
‹Ñ\ØÙ[ŠØË›Y]Y]K™XÙ[™\ŠK
‹ĞØ\ZYÚŠØË›Y]Y]K˜Ø\ZYÚ
K
ˆŠK
™[™ØšˆŠNİ˜\ˆYŠ
NÙ
ŠK
‹Õ\HÑ›ÛŠK
‹Ğ˜\ÙQ›ÛÈŠŞJË™›Û˜[YJJK
‹Ñ›Û\ØÜš\ÜˆŠÚÊÈˆˆŠK
‹ÕÈŠÙKTK”“Øš™Xİ˜ÛÛ™\

JK
‹ĞÒQÑÒQX\ÒY[]HŠK
‹ÑÈLŠK
‹ÔİX\HĞÒQ›Û\LˆŠK
‹ĞÒQŞ\İ[R[™›ÈŠK
ŠK
‹Ôİ\[Y[ŠK
‹Ô™YÚ\İH
YØ™JHŠK
‹ÓÜ™\š[™È
ŠØË™[˜ÛÙ[™ÊÈŠHŠK
ˆŠK
ˆŠK
™[™ØšˆŠKË›Øš™Xİ[X™\YŠ
K
ŠK
‹Õ\HÑ›ÛŠK
‹ÔİX\HÕ\LŠK
‹ÕÕ[šXÛÙHŠÔÊÈˆˆŠK
‹Ğ˜\ÙQ›ÛÈŠŞJË™›Û˜[YJJK
‹Ñ[˜ÛÙ[™ÈÈŠØË™[˜ÛÙ[™ÊK
‹Ñ\ØÙ[™[›ÛÈÈŠÕ
Èˆ—HŠK
ˆŠK
™[™ØšˆŠKËš\Ğ[™XYT]YHL_JJÊ_WJK™]™[Ëœ\Ú
Èœ]›Û‹[˜İ[ÛŠÊ^Ê[˜İ[ÛŠÊ^İ˜\ˆÏ[Ë™›Û[Ë›İ][Ë›™]ÓØš™Xİ[Ëœ]İ™X[NÚYŠË›Y]Y]H[œİ[˜Ù[ÙˆKTK•‘›Û	‰˜Ë™[˜ÛÙ[™ÏOOH•Ú[[œÚQ[˜ÛÙ[™ÈŠ^Ù›ÜŠ˜\ˆXË›Y]Y]Kœ˜]Ñ]KHˆ‹ÏLİÏ›[™İİÊÊÊXŠÏTİš[™Ë™œ›ÛPÚ\ÛÙJİ×JNİ˜\ˆÏYŠ
NÚ
Ù]N˜‹Y[™İNˆLØš™XİY—ßJK
™[™ØšˆŠNİ˜\ˆYŠ
NÚ
Ù]N›ŠË›Y]Y]KÕ[šXÛÙJKY[™İNˆLØš™XİY“ŸJK
™[™ØšˆŠNİ˜\ˆÏYŠ
NÙ
ŠK
‹Ñ\ØÙ[ŠØË›Y]Y]K™XÙ[™\ŠK
‹ĞØ\ZYÚŠØË›Y]Y]K˜Ø\ZYÚ
K
‹Ôİ[UˆŠØË›Y]Y]Kœİ[UŠK
‹Õ\HÑ›Û\ØÜš\ÜˆŠK
‹Ñ›Ûš[LˆŠ×ÊÈˆˆŠK
‹Ñ›YÜÈMˆŠK
‹Ñ›Û›ŞŠÙKTK”“Øš™Xİ˜ÛÛ™\
Ë›Y]Y]K˜˜›Ş
JK
‹Ñ›Û˜[YHÈŠŞJË™›Û˜[YJJK
‹Ò][XĞ[™ÛHŠØË›Y]Y]Kš][XĞ[™ÛJK
‹Ğ\ØÙ[ŠØË›Y]Y]K˜\ØÙ[™\ŠK
ˆŠK
™[™ØšˆŠKË›Øš™Xİ[X™\YŠ
NÙ›ÜŠ˜\ˆÏLÚÏË›Y]Y]Kš]ÚYË›[™İÚÊÊÊXË›Y]Y]Kš]ÚYÖÚ×O\\œÙR[
Ë›Y]Y]Kš]ÚYÖÚ×JŠYLËØË›Y]Y]KšXY[š]Ô\‘[JJNÙ
ÔİX\KÕYU\KÕ\KÑ›ÛÕÕ[šXÛÙHŠÓŠÈˆ‹Ğ˜\ÙQ›ÛÈŠŞJË™›Û˜[YJJÈ‹Ñ›Û\ØÜš\ÜˆŠÔÊÈˆ‹Ñ[˜ÛÙ[™ËÈŠØË™[˜ÛÙ[™ÊÈˆÑš\œİÚ\ˆHÓ\İÚ\ˆMHÕÚYÈŠÙKTK”“Øš™Xİ˜ÛÛ™\
Ë›Y]Y]Kš]ÚYÊJÈˆŠK
™[™ØšˆŠKËš\Ğ[™XYT]YHL_JJÊ_WJNİ˜\ˆOY[˜İ[ÛŠÊ^İ˜\ˆËÏ\Ë^ˆ‹\Ë\ËK\Ë›Ü[ÛœßßK\Ë›]]^ßK^œ‘\ØØ\KÏ^˜Xİ]™Q›ÛÙ^KÏ^™›ÛË]ËÏHˆ‹ÏLHˆ‹ÏWÖÓ—K™[˜ÛÙ[™ÎÚYŠÖÓ—K™[˜ÛÙ[™ÈOOH’Y[]KRŠ\™]\›İ^˜Ë™N™‹Ü[ÛœÎš]]^NÙ›ÜŠXË]Ë\œ˜^Kš\Ğ\œ˜^JÊI‰ŠXÖÌJKÏLÚÏ›[™İÚÊÏLJWÖÓ—K›Y]Y]Kš\ÓİÛ”›Ü\J˜ÛX\ŠI‰ŠÏWÖÓ—K›Y]Y]K˜ÛX\[šXÛÙK˜ÛÙSX\ÕÚ×K˜Ú\ÛÙP]

WJKßÚ×K˜Ú\ÛÙP]

OM‰‰—ÖÓ—K›Y]Y]Kš\ÓİÛ”›Ü\J•[šXÛÙHŠOÔÊÏUÚ×N”ÊÏHˆİ˜\ˆHˆÜ™]\›ˆ\œÙR[
‹œÛXÙJJJOMÏOOH•Ú[[œÚQ[˜ÛÙ[™ÈÔXŠËŠKœÜ]
ˆŠK›X\
[˜İ[ÛŠŠ^Ü™]\›ˆ‹˜Ú\ÛÙP]

KÔİš[™ÊMŠ_JKš›Ú[ŠˆŠNÏOOH’Y[]KR‰‰Š\ŠËÖÓ—JJKš\Ò^HLİ^”‹™N™‹Ü[ÛœÎš]]^_Nİ™]™[Ëœ\Ú
ÈœÜİ›ØÙ\ÜÕ^‹[˜İ[ÛŠÊ^İ˜\ˆÏ\Ë^ˆ‹ÏV×K^İ^›ËœËNœËKÜ[ÛœÎœË›Ü[ÛœË]]^œË›]]^NÚYŠ\œ˜^Kš\Ğ\œ˜^JÊJ^İ˜\ˆLÙ›ÜŠLÙË›[™İÙŠÏLJP\œ˜^Kš\Ğ\œ˜^JÖÙ—JI‰›ÖÙ—K›[™İOOLÏØËœ\Ú
ØJØš™Xİ˜\ÜÚYÛŠßKİ^›ÖÙ—VÌ_JJK^ÖÙ—VÌWKÖÙ—VÌ—WJN˜Ëœ\Ú
JØš™Xİ˜\ÜÚYÛŠßKİ^›ÖÙ—_JJK^
NÜË^XßY[ÙHË^XJØš™Xİ˜\ÜÚYÛŠßKİ^›ßJJK^WJ_J\ŠK[˜İ[ÛŠJ^İ˜\ˆY[˜İ[ÛŠ
^Ü™]\›ˆ\Ëš[\›˜[‘”ÏOO]›ÚY	‰Š\Ëš[\›˜[‘”Ï^ßJKLNÙK™^\İÑš[R[•‘”ÏY[˜İ[ÛŠŠ^Ü™]\›ˆ˜Ø[
\ÊK\Ëš[\›˜[‘”ÖÜ—HOO]›ÚYKK˜Yš[UÕ‘”ÏY[˜İ[ÛŠ‹Š^Ü™]\›ˆ˜Ø[
\ÊK\Ëš[\›˜[‘”ÖÜ—O[‹\ßKK™Ù]š[Qœ›ÛU‘”ÏY[˜İ[ÛŠŠ^Ü™]\›ˆ˜Ø[
\ÊK\Ëš[\›˜[‘”ÖÜ—HOO]›ÚYİ\Ëš[\›˜[‘”ÖÜ—N›[_J\‹TJK[˜İ[ÛŠJ^ÙK—×ØšYQ[™Ú[™W×ÏYKœ›İİ\K—×ØšYQ[™Ú[™W×ÏY[˜İ[ÛŠŠ^İ˜\ˆKËËË‹]VÖÌËKKÌËK‹‹KÌËMË‹WKÌËKKKKÌËŒKŒKWKÌËKK‹WKÏVÖÌ‹KKKKÌ‹KK‹KÌ‹‹KË‹KÌ‹‹ÌËËKWWKÏ^ÓŒŒKSŒ‹SŒËKÎŸK^ÌŒNŒKŒ‹ÎŒËÌLNKM‹MNßKÏVÈŠ‹ŠH‹Š‹‹ˆ‹‹–È‹—H‹–È‹È‹ŸH‹È‹°ªÈ‹°®È‹°ªÈ‹¸ .H‹¸ .ˆ‹¸ .H‹¸ aH‹¸ aˆ‹¸ aH‹¸ oH‹¸ oˆ‹¸ oH‹¸ £H‹¸ £ˆ‹¸ £H‹¸¢i‹¸¢iH‹¸¢i‹¸£*H‹¸£*ˆ‹¸£*H‹»îfH‹»îfˆ‹»îfH‹»îfÈ‹»îg‹»îfÈ‹»îgH‹»îgˆ‹»îgH‹»îi‹»îiH‹»îi—KÏ[™]È™YÑ^
×ŠÌKMW_VÌNW_–ÌNW_ÖÌM_ÌNW_VÌL—_ÖÍÎ_MN_M–ÌNW_MÖÌL—_ŒVÍMW_Œ–ÌÍW_L
IÊKHLKÏLİ\Ë—×ØšYQ[™Ú[™W×Ï^ßNİ˜\ˆY[˜İ[ÛŠ
^İ˜\ˆQ˜Ú\ÛÙP]

KOROS–ÔWNÜ™]\›ˆHOO]›ÚYŞÌMŠ›JÊMI’
WN”OOOLLŸOOOLLÏÈSšË\İ
JOÈ“”OOONÈ”ˆˆ“ˆŸKY[˜İ[ÛŠ
^Ù›ÜŠ˜\ˆOLÔO›[™İÔJÊÊ^ÚYŠ
TŠ˜Ú\]
JJJOOOH“Š\™]\›ˆLNÚYŠOOH”ˆŠ\™]\›ˆL\™]\›ˆL_KY[˜İ[ÛŠKJ^İ˜\ˆYKK™KKRÛWNÜİÚ]Ú

^ØØ\ÙH“˜Ø\ÙH”ˆ˜Ø\ÙH“‘H˜Ø\ÙH”“H˜Ø\ÙH““È˜Ø\ÙH”“È˜Ø\ÙH”ˆ•HLNØœ™XZÎØØ\ÙH“ˆ˜Ø\ÙHSˆ˜œ™XZÎØØ\ÙH‘Sˆ•	‰ŠHSˆŠNØœ™XZÎØØ\ÙHS•HLH”ˆØœ™XZÎØØ\ÙH•ÔÈ˜Ø\ÙH“ˆ–H“ˆØœ™XZÎØØ\ÙHÔÈ›O_JÌOR›[™İ
YOTVÛKLWJHOOH‘Sˆ‰‰˜YHOOHSˆŸ
ORÛJÌWJHOOH‘Sˆ‰‰œHOOHSˆÖH“ˆ•	‰ŠOHSˆŠK\OOOXYOÜNˆ“ˆØœ™XZÎØØ\ÙH‘TÈ–JYO[OŒÔVÛKLWNˆˆŠOOOH‘Sˆ‰‰›JÌO›[™İ	‰’ÛJÌWOOOH‘SˆÈ‘Sˆˆ“ˆØœ™XZÎØØ\ÙH‘UšYŠOŒ	‰”VÛKLWOOOH‘SˆŠ^ÖH‘SˆØœ™XZßZYŠ
^ÖH“ˆØœ™XZßY›ÜŠ™O[JÌKOR›[™İØ™OI‰’Ø™WOOOH‘UÊX™JÊÎÖX™OI‰’Ø™WOOOH‘SˆÈ‘Sˆˆ“ˆØœ™XZÎØØ\ÙH“”ÓHšYŠÉ‰ˆXÊ^Ù›ÜŠOR›[™İ™O[JÌNØ™OI‰’Ø™WOOOH“”ÓHÊX™JÊÎÚYŠ™OJ^İ˜\ˆ™OQÛWKÙOS™OLMI‰“™OLŒÌß™OOOMÚYŠYORØ™WKÙI‰ŠYOOOH”ˆŸYOOOHSŠJ^ÖH”ˆØœ™XZß__V[O_
YORÛKLWJOOOHˆÈ“ˆ”VÛKLWNØœ™XZÎØØ\ÙHˆ•HLKOHLPÎØœ™XZÎØØ\ÙH”ÈœÏHLH“ˆŸ\™]\›ˆKOY[˜İ[ÛŠJ^İ˜\ˆOQœÜ]
ˆŠNÜ™]\›ˆI‰•JKKÚS]™[ßJKKœ™]™\œÙJ
K	‰’œ™]™\œÙJ
KKš›Ú[ŠˆŠ_KOY[˜İ[ÛŠJ^İ˜\ˆKYKK™KKKLK™OQ›[™İÙOLV×KPÏİÎ˜‹V×NÙ›ÜŠHLKOHLKÏHLKYOLØYO™NØYJÊÊV–ØYWOTŠØYWJNÙ›ÜŠOLÜO™NÜJÊÊ^ÚYŠOWÙK–ÜWOT
‹‹JKOL	ŠÙOR–İWV×ÖÑ–ÜWWWJKÙILMKÜWOX™OR–×ÙWVÍWKOŒ
ZYŠOOOLMŠ^Ù›ÜŠYOVØYONØYJÊÊRØYWOLNÖKL_Y[ÙHKLNÚYŠ–×ÙWVÍ—JVOOKLI‰Š\JNÙ[ÙHYŠ‹LJ^Ù›ÜŠYOVØYONØYJÊÊRØYWOX™NÖKL_V–ÜWOOOHˆ‰‰ŠÜWOL
KKšS]™[X™_\É‰™[˜İ[ÛŠYKYKÙJ^Ù›ÜŠ˜\ˆÙOLĞÙOÙNĞÙJÊÊZYŠYVĞÙWOOOH”ÈŠ^ÚYVĞÙWOPÎÙ›ÜŠ˜\ˆOPÙKLNÓOL	‰™YVÓWOOOH•ÔÈÓKKJZYVÓWOPß_J‹™J_KOY[˜İ[ÛŠKKYJ^ÚYŠJYKšS]™[
J^ÚYŠOOLI‰ÏOOLI‰ˆXJ\™]\›ˆœ™]™\œÙJ
K›ÚY
I‰”Kœ™]™\œÙJ
JNÙ›ÜŠ˜\ˆK™KK™OR›[™İÙOL×ÙO™NÊ^ÚYŠV×ÙWOQ
^Ù›ÜŠOWÙJÌNİO™I‰›VİWOQÊ]JÊÎÙ›ÜŠWÙK™O]KLNÖ™NÖ
ÊË™KKJ\ORÖKÖORØ™WKØ™WO\KI‰ŠOTVÖKVÖOTVØ™WKVØ™WO\JN×ÙO]_WÙJÊß__KÏY[˜İ[ÛŠJ^İ˜\ˆOQœÜ]
ˆŠKYO^ÚS]™[ßNÜ™]\›ˆ_
OV×JKJKKYJK[˜İ[ÛŠK™KJ^ÚYŠKšS]™[OOL	‰š
Y›ÜŠ˜\ˆ™OLÓ™OK›[™İÓ™JÊÊX™VÓ™WOOOLI‰ŠTËš[™^ÙŠVÓ™WJJOL	‰ŠVÓ™WOTÖÖ
ÌWJ_JKKYJKJ‹KKYJKJKKKYJKKš›Ú[ŠˆŠ_NÜ™]\›ˆ\Ë—×ØšYQ[™Ú[™W×Ë™ĞšYT™[Ü™\Y[˜İ[ÛŠJ^ÚYŠ[˜İ[ÛŠYKJ^ÚYŠJY›ÜŠ˜\ˆ™OLØ™OYK›[™İØ™JÊÊ\VØ™WOX™NØÏOO]›ÚY	‰ŠÏUŠYJJKOO]›ÚY	‰ŠUŠYJJ_J
KßYŠZYŠÉ‰™	‰˜×™ŠPÏXÏÌNŒRJJNÙ[ÙHYŠ[É‰™	‰™ŠPÏXÏÌNŒUÊJKRJ
NÙ[ÙHYŠ[ßßŠ^ÚYŠÉ‰ˆY	‰˜×™ŠQRJ
KÏÊÏLUÊJJNŠÏLKUÊJKRJ
JNÙ[ÙHYŠÉ‰˜É‰ˆY	‰™ŠPÏLKUÊJKRJ
NÙ[ÙHYŠ[É‰ˆY	‰˜×™Š^İ˜\ˆOZØÏÊÏLKUÊJKÏLHLKUÊJK[JNŠÏLUÊJKRJ
KÏLKHLKUÊJK[KRJ
J__Y[ÙHÏLUÊJNÙ[ÙHÏXÏÌNŒUÊJNÜ™]\›ˆK\Ë—×ØšYQ[™Ú[™W×ËœÙ]Ü[ÛœÏY[˜İ[ÛŠ
^Ñ	‰ŠÏQš\Ò[œ]š\İX[Qš\Óİ]]š\İX[ÏQš\Ò[œ]Qš\Óİ]]Qš\ÔŞ[[Y]šXÔİØ\[™Ê_K\Ë—×ØšYQ[™Ú[™W×ËœÙ]Ü[ÛœÊŠK\Ë—×ØšYQ[™Ú[™W×ßNİ˜\ˆVÈ“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹”È‹ˆ‹”È‹•ÔÈ‹ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹ˆ‹ˆ‹ˆ‹”È‹•ÔÈ‹“ˆ‹“ˆ‹‘U‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘TÈ‹ÔÈ‹‘TÈ‹ÔÈ‹ÔÈ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹ÔÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹ÔÈ‹“ˆ‹‘U‹‘U‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘U‹‘U‹‘Sˆ‹‘Sˆ‹“ˆ‹“‹“ˆ‹“ˆ‹“ˆ‹‘Sˆ‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘U‹“ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹”ˆ‹“”ÓH‹”ˆ‹“”ÓH‹“”ÓH‹”ˆ‹“”ÓH‹“”ÓH‹”ˆ‹“”ÓH‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹“ˆ‹“ˆ‹S‹‘U‹‘U‹S‹ÔÈ‹S‹“ˆ‹“ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹S‹S‹“ˆ‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹Sˆ‹‘U‹Sˆ‹Sˆ‹S‹S‹S‹“”ÓH‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹Sˆ‹“ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹S‹S‹“”ÓH‹“”ÓH‹“ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹S‹S‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“ˆ‹S‹S‹“”ÓH‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“ˆ‹“ˆ‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹S‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹”ˆ‹”ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹”ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹•ÔÈ‹“ˆ‹“ˆ‹“ˆ‹“‹”ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹•ÔÈ‹ˆ‹“‘H‹”“H‹”ˆ‹““È‹”“È‹ÔÈ‹‘U‹‘U‹‘U‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹ÔÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹•ÔÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“’H‹”“H‹‘”ÒH‹”H‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘Sˆ‹“‹“ˆ‹“ˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘TÈ‹‘TÈ‹“ˆ‹“ˆ‹“ˆ‹“‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘TÈ‹‘TÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹”ˆ‹“”ÓH‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹‘TÈ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹“ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹“ˆ‹”ˆ‹“ˆ‹”ˆ‹”ˆ‹“ˆ‹”ˆ‹”ˆ‹“ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹”ˆ‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“”ÓH‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹ÔÈ‹“ˆ‹ÔÈ‹“ˆ‹“ˆ‹ÔÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘U‹“ˆ‹“ˆ‹‘TÈ‹‘TÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹S‹S‹S‹S‹S‹“ˆ‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹S‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘U‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹‘TÈ‹ÔÈ‹‘TÈ‹ÔÈ‹ÔÈ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹‘Sˆ‹ÔÈ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“‹“‹“‹“‹“‹“‹“ˆ‹“ˆ‹“‹“‹“‹“ˆ‹“ˆ‹“ˆ‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹‘U‹‘U‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ‹“ˆ—K[™]ÈK—×ØšYQ[™Ú[™W×ÊÚ\Ò[œ]š\İX[ˆLJNÙKTK™]™[Ëœ\Ú
ÈœÜİ›ØÙ\ÜÕ^‹[˜İ[ÛŠŠ^İ˜\ˆO[‹^Û‹‹Nİ˜\ˆÏ[‹›Ü[ÛœßßNÛ‹›]]^Ë›[™Îİ˜\ˆÏV×NÚYŠËš\Ò[œ]š\İX[]\[ÙˆËš\Ò[œ]š\İX[OH˜›ÛÛX[ˆŸËš\Ò[œ]š\İX[‹œÙ]Ü[ÛœÊÊKØš™Xİœ›İİ\KÔİš[™Ë˜Ø[
JOOOH–ÛØš™Xİ\œ˜^WHŠ^İ˜\ˆÏLÙ›ÜŠÏV×KÏLØÏK›[™İØÊÏLJSØš™Xİœ›İİ\KÔİš[™Ë˜Ø[
VØ×JOOOH–ÛØš™Xİ\œ˜^WHÛËœ\Ú
Ü‹™ĞšYT™[Ü™\ŠVØ×VÌJKVØ×VÌWKVØ×VÌ—WJN›Ëœ\Ú
Ü‹™ĞšYT™[Ü™\ŠVØ×JWJNÛ‹^[ßY[ÙH‹^\‹™ĞšYT™[Ü™\ŠJNÜ‹œÙ]Ü[ÛœÊÚ\Ò[œ]š\İX[ˆLJ_WJ_J\ŠK\‹TK•‘›ÛY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^İ˜\ˆÚYŠ\Ëœ˜]Ñ]O]]\Ë˜ÛÛ[Ï[™]È˜Ê
K\Ë˜ÛÛ[ËœÜÏM‹œ™XYİš[™Ê
OOOHÙˆŠ]›İÈ™]È\œ›ÜŠ•Ñˆ›İİ\ÜYˆŠNÜ‹œÜÏL\Ëœ\œÙJ
K\ËœİXœÙ][™]È˜YJ\ÊK\Ëœ™YÚ\İ\•Š
_\™]\›ˆK›Ü[Y[˜İ[ÛŠ
^Ü™]\›ˆ™]ÈJ
_KKœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™\™XİÜO[™]È›™J\Ë˜ÛÛ[ÊK\ËšXY[™]ÈXYJ\ÊK\Ë›˜[YO[™]ÈØYJ\ÊK\Ë˜ÛX\[™]ÈJ\ÊK\ËÕ[šXÛÙO^ßK\ËšXO[™]ÈYJ\ÊK\Ë›X^[™]ÈXYJ\ÊK\Ëš][™]ÈØYJ\ÊK\ËœÜİ[™]È˜YJ\ÊK\Ë›ÜÌ[™]È˜YJ\ÊK\Ë›ØØO[™]ÈXYJ\ÊK\Ë™ÛY[™]ÈYJ\ÊK\Ë˜\ØÙ[™\]\Ë›ÜÌ‹™^\İÉ‰\Ë›ÜÌ‹˜\ØÙ[™\Ÿ\ËšXK˜\ØÙ[™\‹\Ë™XÙ[™\]\Ë›ÜÌ‹™^\İÉ‰\Ë›ÜÌ‹™XÙ[™\Ÿ\ËšXK™XÙ[™\‹\Ë›[™QØ\]\Ë›ÜÌ‹™^\İÉ‰\Ë›ÜÌ‹›[™QØ\\ËšXK›[™QØ\\Ë˜˜›ŞVİ\ËšXYZ[‹\ËšXYSZ[‹\ËšXYX^\ËšXYSX^_KKœ›İİ\Kœ™YÚ\İ\•Y[˜İ[ÛŠ
^İ˜\ˆ‹‹KÎÚYŠ\ËœØØ[Q˜XİÜLYLËİ\ËšXY[š]Ô\‘[K\Ë˜˜›ŞJ[˜İ[ÛŠ
^İ˜\ˆËËÙ›ÜŠV×KÏLÏJ]\Ë˜˜›Ş
K›[™İÛÏÎÛÊÊÊ]YÛ×K‹œ\Ú
X]œ›İ[™

\ËœØØ[Q˜XİÜŠJNÜ™]\›ˆŸJK˜Ø[
\ÊK\Ëœİ[UL\ËœÜİ™^\İÏÊLMIŠO]\ËœÜİš][X×Ø[™ÛJKÌÍ	ŠXOŒMŠI‰ŠKJJÊMLÍWœŠJJK\Ëš][XĞ[™ÛOJÊŠÈ‹ˆŠÛŠJN\Ëš][XĞ[™ÛOL\Ë˜\ØÙ[™\SX]œ›İ[™
\Ë˜\ØÙ[™\Š\ËœØØ[Q˜XİÜŠK\Ë™XÙ[™\SX]œ›İ[™
\Ë™XÙ[™\Š\ËœØØ[Q˜XİÜŠK\Ë›[™QØ\SX]œ›İ[™
\Ë›[™QØ\
\ËœØØ[Q˜XİÜŠK\Ë˜Ø\ZYÚ]\Ë›ÜÌ‹™^\İÉ‰\Ë›ÜÌ‹˜Ø\ZYÚ\Ë˜\ØÙ[™\‹\ËZYÚ]\Ë›ÜÌ‹™^\İÉ‰\Ë›ÜÌ‹ZYÚ\Ë™˜[Z[PÛ\ÜÏJ\Ë›ÜÌ‹™^\İÉ‰\Ë›ÜÌ‹™˜[Z[PÛ\Üß
O\Ëš\ÔÙ\šYJÏ]\Ë™˜[Z[PÛ\ÜÊOOOL_ÏOOLŸÏOOLßÏOOMÏOOM_ÏOOMË\Ëš\ÔØÜš\]\Ë™˜[Z[PÛ\ÜÏOOLL\Ë™›YÜÏL\ËœÜİš\Ñš^Y]Ú	‰Š\Ë™›YÜßLJK\Ëš\ÔÙ\šY‰‰Š\Ë™›YÜßLŠK\Ëš\ÔØÜš\	‰Š\Ë™›YÜßN
K\Ëš][XĞ[™ÛHOOL	‰Š\Ë™›YÜßM
K\Ë™›YÜßLÌ‹]\Ë˜ÛX\[šXÛÙJ]›İÈ™]È\œ›ÜŠ“›È[šXÛÙHÛX\›Üˆ›ÛŠ_KKœ›İİ\K˜Ú\˜Xİ\•ÑÛ\Y[˜İ[ÛŠ
^İ˜\ˆÜ™]\›Š
]\Ë˜ÛX\[šXÛÙJHO[[Ü‹˜ÛÙSX\İN›ÚY
_KKœ›İİ\KÚYÙ‘Û\Y[˜İ[ÛŠ
^İ˜\ˆÜ™]\›ˆLYLËİ\ËšXY[š]Ô\‘[K\Ëš]™›Ü‘Û\

K˜Y˜[˜ÙJœŸKKœ›İİ\KÚYÙ”İš[™ÏY[˜İ[ÛŠ‹Š^İ˜\ˆKËËÎÙ›ÜŠÏLÏLÏJHˆŠİ
K›[™İÌXÏÜÏÎœÏ˜ÎÜÏLXÏÊÊÜÎ‹K\ÊXO]˜Ú\ÛÙP]
ÊKÊÏ]\ËÚYÙ‘Û\
\Ë˜Ú\˜Xİ\•ÑÛ\
JJJÛŠŠYLËÜŠ_Ü™]\›ˆÊŠ‹ÌYLÊ_KKœ›İİ\K›[™RZYÚY[˜İ[ÛŠŠ^İ˜\ˆÜ™]\›ˆO[[	‰ŠHLJK\İ\Ë›[™QØ\Œ
\Ë˜\ØÙ[™\ŠÛ‹]\Ë™XÙ[™\ŠKÌYLÊK_J
Nİ˜\ˆ›Ë˜ÏY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^İ\Ë™]O]ÏÖ×K\ËœÜÏL\Ë›[™İ]\Ë™]K›[™İ\™]\›ˆKœ›İİ\Kœ™XY]OY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]Vİ\ËœÜÊÊ×_KKœ›İİ\KÜš]P]OY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™]Vİ\ËœÜÊÊ×O]KKœ›İİ\Kœ™XYR[ÌY[˜İ[ÛŠ
^Ü™]\›ˆMÍÍÌŒMŠ\Ëœ™XY]J
JÊ\Ëœ™XY]J
OMŠJÊ\Ëœ™XY]J
O
Jİ\Ëœ™XY]J
_KKœ›İİ\KÜš]UR[ÌY[˜İ[ÛŠ
^Ü™]\›ˆ\ËÜš]P]JŒ	ŒMJK\ËÜš]P]JŒM‰ŒMJK\ËÜš]P]J	ŒMJK\ËÜš]P]JMI
_KKœ›İİ\Kœ™XY[ÌY[˜İ[ÛŠ
^İ˜\ˆÜ™]\›Š]\Ëœ™XYR[ÌŠ
JOLŒMÍÍİMMMÌMKKœ›İİ\KÜš]R[ÌY[˜İ[ÛŠ
^Ü™]\›ˆ	‰Š
ÏMMMÌMŠK\ËÜš]UR[ÌŠ
_KKœ›İİ\Kœ™XYR[MY[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ™XY]J
O\Ëœ™XY]J
_KKœ›İİ\KÜš]UR[MY[˜İ[ÛŠ
^Ü™]\›ˆ\ËÜš]P]J	ŒMJK\ËÜš]P]JMI
_KKœ›İİ\Kœ™XY[MY[˜İ[ÛŠ
^İ˜\ˆÜ™]\›Š]\Ëœ™XYR[MŠ
JOLÌÍİMMLÍKKœ›İİ\KÜš]R[MY[˜İ[ÛŠ
^Ü™]\›ˆ	‰Š
ÏMMLÍŠK\ËÜš]UR[MŠ
_KKœ›İİ\Kœ™XYİš[™ÏY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KLÌ]ÜœÜL]ÊÊÜ‹K\Š[–Ü—OTİš[™Ë™œ›ÛPÚ\ÛÙJ\Ëœ™XY]J
JNÜ™]\›ˆ‹š›Ú[ŠˆŠ_KKœ›İİ\KÜš]Tİš[™ÏY[˜İ[ÛŠ
^İ˜\ˆ‹‹NÙ›ÜŠOV×KL]›[™İÌ[Üœ›ÜL[ÊÊÜ‹K\ŠXKœ\Ú
\ËÜš]P]J˜Ú\ÛÙP]
ŠJJNÜ™]\›ˆ_KKœ›İİ\Kœ™XYÚÜY[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ™XY[MŠ
_KKœ›İİ\KÜš]TÚÜY[˜İ[ÛŠ
^Ü™]\›ˆ\ËÜš]R[MŠ
_KKœ›İİ\Kœ™XYÛ™ÓÛ™ÏY[˜İ[ÛŠ
^İ˜\ˆ‹‹KËËËÜ™]\›ˆ]\Ëœ™XY]J
K]\Ëœ™XY]J
K]\Ëœ™XY]J
KO]\Ëœ™XY]J
KÏ]\Ëœ™XY]J
KÏ]\Ëœ™XY]J
KÏ]\Ëœ™XY]J
K]\Ëœ™XY]J
KL	ËLJŠÌŒMÍNMÍÎLÎM
ŠMW
JÌMÍMÍÌLMŠŠMWœŠJÌLNMLLMŒÍÍÍŠŠMW›ŠJÍMMÌMŠŠMW˜JJÌMÍÍÌŒMŠŠMWœÊJÍMLÍŠŠMW›ÊJÌMŠŠMW˜ÊJÊMW™
JÌJNÌŒMÍNMÍÎLÎM

ÌMÍMÍÌLMŠœŠÌLNMLLMŒÍÍÍŠ›ŠÍMMÌMŠ˜JÌMÍÍÌŒMŠœÊÍMLÍŠ›ÊÌMŠ˜ÊÙKKœ›İİ\KÜš]SÛ™ÓÛ™ÏY[˜İ[ÛŠ
^İ˜\ˆ‹Ü™]\›ˆSX]™›ÛÜŠÍMMÌMŠKMMMÌMI\ËÜš]P]JŒ	ŒMJK\ËÜš]P]JŒM‰ŒMJK\ËÜš]P]J	ŒMJK\ËÜš]P]JMIœŠK\ËÜš]P]JŒ	ŒMJK\ËÜš]P]JŒM‰ŒMJK\ËÜš]P]J	ŒMJK\ËÜš]P]JMI›Š_KKœ›İİ\Kœ™XY[Y[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ™XY[ÌŠ
_KKœ›İİ\KÜš]R[Y[˜İ[ÛŠ
^Ü™]\›ˆ\ËÜš]R[ÌŠ
_KKœ›İİ\Kœ™XYY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KLÌ]Û›ÛL]ÊÊÛ‹K[Š\‹œ\Ú
\Ëœ™XY]J
JNÜ™]\›ˆŸKKœ›İİ\KÜš]OY[˜İ[ÛŠ
^İ˜\ˆ‹‹KÎÙ›ÜŠÏV×KLO]›[™İÛNÛŠÊÊ\]Û—KËœ\Ú
\ËÜš]P]JŠJNÜ™]\›ˆßK_J
K›™OY[˜İ[ÛŠ
^İ˜\ˆNÙ[˜İ[Ûˆ
Š^İ˜\ˆ‹KÎÙ›ÜŠ\ËœØØ[\•\O\‹œ™XY[

K\ËX›PÛİ[\‹œ™XYÚÜ

K\ËœÙX\˜Ú˜[™ÙO\‹œ™XYÚÜ

K\Ë™[TÙ[XİÜ\‹œ™XYÚÜ

K\Ëœ˜[™ÙTÚY\‹œ™XYÚÜ

K\ËX›\Ï^ßKOLÏ]\ËX›PÛİ[Ì\ÏØOÎ˜OœÎØOL\ÏÊÊØN‹KXJ[^İYÎœ‹œ™XYİš[™Ê
KÚXÚÜİ[Nœ‹œ™XY[

KÙ™œÙ]œ‹œ™XY[

K[™İœ‹œ™XY[

_K\ËX›\ÖÛ‹Y×O[Ÿ\™]\›ˆœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠŠ^İ˜\ˆ‹KËËË‹‹ËËÙ›ÜŠˆ[ˆÏSØš™XİšÙ^\ÊŠK›[™İSX]›ÙÊŠKLMŠ“X]™›ÛÜŠX]›ÙÊÊKÙ
KÏSX]™›ÛÜŠÙ
KLMŠË^
O[™]È˜ÊKÜš]R[
\ËœØØ[\•\JKKÜš]TÚÜ
ÊKKÜš]TÚÜ

KKÜš]TÚÜ
ÊKKÜš]TÚÜ

KÏLMŠËXKœÜÊÜËÏ[[ÏV×KŠY›ÜŠ\–Ó—KKÜš]Tİš[™ÊŠKKÜš]R[
JŠJKKÜš]R[
ŠKKÜš]R[
‹›[™İ
KÏWË˜ÛÛ˜Ø]
ŠKOOHšXY‰‰ŠÏYŠKŠÏX‹›[™İÙ‰MÊWËœ\Ú

KŠÊÎÜ™]\›ˆKÜš]JÊKLNLMMMYJK™]JKKœÜÏXÊÎKÜš]UR[ÌŠŠKK™]_KOY[˜İ[ÛŠŠ^İ˜\ˆ‹KËÎÙ›ÜŠQ’K˜Ø[
ŠNÜ‹›[™İ	MÊ\‹œ\Ú

NÙ›ÜŠÏ[™]È˜ÊŠKOLLÏ\‹›[™İÛÎÛ[ŠÏM
XJÏ\Ëœ™XYR[ÌŠ
NÜ™]\›ˆMMÌMI˜_KJ
K[™O^ßKš\ÓİÛ”›Ü\KÛY[˜İ[ÛŠK
^Ù›ÜŠ˜\ˆˆ[ˆ
T[™K˜Ø[
ŠI‰ŠVÜ—O]Ü—JNÙ[˜İ[ÛˆŠ
^İ\Ë˜ÛÛœİXİÜY_\™]\›ˆ‹œ›İİ\O]œ›İİ\KKœ›İİ\O[™]È‹K—×Üİ\\—×Ï]œ›İİ\K_NÒ›ÏY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^İ˜\ˆİ\Ë™š[O]]\Ë™š[K™\™XİÜKX›\Öİ\ËY×K\Ë™^\İÏHH\‹‰‰Š\Ë›Ù™œÙ]\‹›Ù™œÙ]\Ë›[™İ\‹›[™İ\Ëœ\œÙJ\Ë™š[K˜ÛÛ[ÊJ_\™]\›ˆKœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^ßKKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠ
^ßKKœ›İİ\Kœ˜]ÏY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë™^\İÏÊ\Ë™š[K˜ÛÛ[ËœÜÏ]\Ë›Ù™œÙ]\Ë™š[K˜ÛÛ[Ëœ™XY
\Ë›[™İ
JN›[K_J
Nİ˜\ˆXYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏHšXY‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^Ü™]\›ˆœÜÏ]\Ë›Ù™œÙ]\Ë™\œÚ[Û]œ™XY[

K\Ëœ™]š\Ú[Û]œ™XY[

K\Ë˜ÚXÚÔİ[PY\İY[]œ™XY[

K\Ë›XYÚXÓ[X™\]œ™XY[

K\Ë™›YÜÏ]œ™XYÚÜ

K\Ë[š]Ô\‘[O]œ™XYÚÜ

K\Ë˜Ü™X]Y]œ™XYÛ™ÓÛ™Ê
K\Ë›[ÙYšYY]œ™XYÛ™ÓÛ™Ê
K\ËZ[]œ™XYÚÜ

K\ËSZ[]œ™XYÚÜ

K\ËX^]œ™XYÚÜ

K\ËSX^]œ™XYÚÜ

K\Ë›XXÔİ[O]œ™XYÚÜ

K\Ë›İÙ\İ™XÔSO]œ™XYÚÜ

K\Ë™›Û\™Xİ[Û’[]œ™XYÚÜ

K\Ëš[™^ÓØÑ›Ü›X]]œ™XYÚÜ

K\Ë™Û\]Q›Ü›X]]œ™XYÚÜ

_KKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠ
^İ˜\ˆÜ™]\›Š[™]È˜ÊKÜš]R[
\Ë™\œÚ[ÛŠK‹Üš]R[
\Ëœ™]š\Ú[ÛŠK‹Üš]R[
\Ë˜ÚXÚÔİ[PY\İY[
K‹Üš]R[
\Ë›XYÚXÓ[X™\ŠK‹Üš]TÚÜ
\Ë™›YÜÊK‹Üš]TÚÜ
\Ë[š]Ô\‘[JK‹Üš]SÛ™ÓÛ™Ê\Ë˜Ü™X]Y
K‹Üš]SÛ™ÓÛ™Ê\Ë›[ÙYšYY
K‹Üš]TÚÜ
\ËZ[ŠK‹Üš]TÚÜ
\ËSZ[ŠK‹Üš]TÚÜ
\ËX^
K‹Üš]TÚÜ
\ËSX^
K‹Üš]TÚÜ
\Ë›XXÔİ[JK‹Üš]TÚÜ
\Ë›İÙ\İ™XÔSJK‹Üš]TÚÜ
\Ë™›Û\™Xİ[Û’[
K‹Üš]TÚÜ

K‹Üš]TÚÜ
\Ë™Û\]Q›Ü›X]
K‹™]_K_J
KÏY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJŠ^İ˜\ˆ‹KËËË‹‹ËË‹ËËÎÜİÚ]Ú
\Ëœ]›Ü›RQ]œ™XYR[MŠ
K\Ë™[˜ÛÙ[™ÒQ]œ™XYÚÜ

K\Ë›Ù™œÙ]\Šİœ™XY[

K]œÜËœÜÏ]\Ë›Ù™œÙ]\Ë™›Ü›X]]œ™XYR[MŠ
K\Ë›[™İ]œ™XYR[MŠ
K\Ë›[™İXYÙO]œ™XYR[MŠ
K\Ëš\Õ[šXÛÙO]\Ëœ]›Ü›RQOOLÉ‰\Ë™[˜ÛÙ[™ÒQOOLI‰\Ë™›Ü›X]OOM\Ëœ]›Ü›RQOOL	‰\Ë™›Ü›X]OOM\Ë˜ÛÙSX\^ßK\Ë™›Ü›X]
^ØØ\ÙH™›ÜŠLÙMÊÊÙ
]\Ë˜ÛÙSX\ÙO]œ™XY]J
NØœ™XZÎØØ\ÙH™›ÜŠÏ]œ™XYR[MŠ
K]ËÌ‹œÜÊÏM‹ÏY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KTLÌXÔ”˜ÙLXÊÊÔ‹KTŠU‹œ\Ú
œ™XYR[MŠ
JNÜ™]\›ˆŸJ
KœÜÊÏL‹Y[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KTLÌXÔ”˜ÙLXÊÊÔ‹KTŠU‹œ\Ú
œ™XYR[MŠ
JNÜ™]\›ˆŸJ
KY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KTLÌXÔ”˜ÙLXÊÊÔ‹KTŠU‹œ\Ú
œ™XYR[MŠ
JNÜ™]\›ˆŸJ
KY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KTLÌXÔ”˜ÙLXÊÊÔ‹KTŠU‹œ\Ú
œ™XYR[MŠ
JNÜ™]\›ˆŸJ
KOJ\Ë›[™İ]œÜÊİ\Ë›Ù™œÙ]
KÌ‹ÏY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KTLÌXOÔN”˜NÙLXOÊÊÔ‹KTŠU‹œ\Ú
œ™XYR[MŠ
JNÜ™]\›ˆŸJ
KZÏLÏ\Ë›[™İÚÏÎÙJÊÚÊY›ÜŠÏ\ÖÙKUWÏS–ÙN×ÏTÏÕTÎ•TÎÛWÏTÏÊÊÕ‹KU
ZÙOOOLÛÏ[ŠÙ–ÙNŠÏXÖÚÙKÌŠÊ‹WÊKJ‹Y
W_
HOOL	‰ŠÊÏY–ÙJK\Ë˜ÛÙSX\Û—OMMLÍI›ß]œÜÏ^\™]\›ˆK™[˜ÛÙOY[˜İ[ÛŠŠ^İ˜\ˆ‹KËËË‹‹ËË‹ËËË‹‹KKKËKKYKK™KK™KÙK‹‹‹YKYKÙKÙKKÙKÙNÜİÚ]Ú
O[™]È˜ËÏSØš™XİšÙ^\Ê
KœÛÜ
[˜İ[ÛŠYK
^Ü™]\›ˆYK\JKŠ^ØØ\ÙH›XXÜ›ÛX[ˆ™›ÜŠLÏY[˜İ[ÛŠ
^İ˜\ˆYOV×NÙ›ÜŠÏL×ÏMÊÊ×ÊTYKœ\Ú

NÜ™]\›ˆY_J
K^ÌŒKÏ^ßKYOL[Ë›[™İØYOØYJÊÊUÓO]ØO[ÖØYWWWOO[[	‰ŠÓWOJÊÓŠKÖØWO^ÛÛØWK™]Î•İØWW_KÖØWOUİØWWNÜ™]\›ˆKÜš]UR[MŠJKKÜš]UR[MŠ
KKÜš]UR[ÌŠLŠKKÜš]UR[MŠ
KKÜš]UR[MŠŒŠKKÜš]UR[MŠ
KKÜš]JÊKØÚ\“X\œËİXX›N›K™]KX^Û\Q“ŠÌ_NØØ\ÙH[šXÛÙH™›ÜŠV×KV×KÏL^ßK^ßKÏY[[OL™O[Ë›[™İÜO™NÜJÊÊUÕ]ØO[ÖÜWWWOO[[	‰ŠÕ—OJÊĞÊK–ØWO^ÛÛ•‹™]Î•Õ—_KÏUÕ—KXKÈO[[	‰˜ÏOOYŸ
É‰œ\Ú
ÊKœ\Ú
JKXÊKÏXNÙ›ÜŠÉ‰œ\Ú
ÊKœ\Ú
MLÍJKœ\Ú
MLÍJKÏLŠŠOR›[™İ
KOLŠ“X]œİÊX]›ÙÊJKÓX]“Œ‹ŠKSX]›ÙÊKÌŠKÓX]“Œ‹OLŠ“KUKV×KV×KÏV×KÏX™OLÙOR›[™İØ™OÙN×ÏJÊØ™J^ÚYŠR××K^××KOOMMLÍJ^Ùœ\Ú

Kœ\Ú

NØœ™XZßZYŠJO[–ÑK›™]ÊOLÌÍ
Y›ÜŠœ\Ú

Kœ\Ú
ŠŠË›[™İ
ÓKWÊJKO]OQÑZİOZOZØOQZÊÊİN‹K]J]Ëœ\Ú
–ØWK›™]ÊNÙ[ÙHœ\Ú
KQ
Kœ\Ú

_Y›ÜŠKÜš]UR[MŠÊKKÜš]UR[MŠJKKÜš]UR[ÌŠLŠKKÜš]UR[MŠ
KKÜš]UR[MŠMŠÎ
“JÌŠË›[™İ
KKÜš]UR[MŠ
KKÜš]UR[MŠÊKKÜš]UR[MŠJKKÜš]UR[MŠŠKKÜš]UR[MŠJKÙOL^›[™İÔÙOÔÙJÊÊXO^ÔÙWKKÜš]UR[MŠJNÙ›ÜŠKÜš]UR[MŠ
KÙOLR›[™İĞÙOĞÙJÊÊXORĞÙWKKÜš]UR[MŠJNÙ›ÜŠÙOLY›[™İÓÙOÓÙJÊÊXÏYÓÙWKKÜš]UR[MŠÊNÙ›ÜŠLYOT›[™İÛYNÛ
ÊÊTTÛKKÜš]UR[MŠŠNÙ›ÜŠÙOLYO]Ë›[™İØÙOYNØÙJÊÊS]ÖØÙWKKÜš]UR[MŠŠNÜ™]\›ØÚ\“X\›‹İXX›N›K™]KX^Û\QÊÌ___K_J
KOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏH˜ÛX\‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^İ˜\ˆ‹‹NÙ›ÜŠœÜÏ]\Ë›Ù™œÙ]\Ë™\œÚ[Û]œ™XYR[MŠ
KO]œ™XYR[MŠ
K\ËX›\ÏV×K\Ë[šXÛÙO[[LÌXOÛN›˜NÛLXOÊÊÛ‹K[Š\[™]ÈÊ\Ë›Ù™œÙ]
K\ËX›\Ëœ\Ú
ŠK‹š\Õ[šXÛÙI‰\Ë[šXÛÙOO[[	‰Š\Ë[šXÛÙO\ŠNÜ™]\›ˆLKK™[˜ÛÙOY[˜İ[ÛŠŠ^İ˜\ˆ‹NÜ™]\›ˆO[[	‰ŠH›XXÜ›ÛX[ˆŠKZË™[˜ÛÙJŠK
O[™]È˜ÊKÜš]UR[MŠ
KKÜš]UR[MŠJK‹X›OXK™]K˜ÛÛ˜Ø]
‹œİXX›JKŸK_J
KYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏHšXH‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^Ü™]\›ˆœÜÏ]\Ë›Ù™œÙ]\Ë™\œÚ[Û]œ™XY[

K\Ë˜\ØÙ[™\]œ™XYÚÜ

K\Ë™XÙ[™\]œ™XYÚÜ

K\Ë›[™QØ\]œ™XYÚÜ

K\Ë˜Y˜[˜ÙUÚYX^]œ™XYÚÜ

K\Ë›Z[“YÚYP™X\š[™Ï]œ™XYÚÜ

K\Ë›Z[”šYÚÚYP™X\š[™Ï]œ™XYÚÜ

K\ËX^^[]œ™XYÚÜ

K\Ë˜Ø\™]ÛÜTš\ÙO]œ™XYÚÜ

K\Ë˜Ø\™]ÛÜT[]œ™XYÚÜ

K\Ë˜Ø\™]Ù™œÙ]]œ™XYÚÜ

KœÜÊÏN\Ë›Y]šXÑ]Q›Ü›X]]œ™XYÚÜ

K\Ë›[X™\“Ù“Y]šXÜÏ]œ™XYR[MŠ
_K_J
K˜YOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏH“ÔËÌˆ‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^ÚYŠœÜÏ]\Ë›Ù™œÙ]\Ë™\œÚ[Û]œ™XYR[MŠ
K\Ë˜]™\˜YÙPÚ\•ÚY]œ™XYÚÜ

K\ËÙZYÚÛ\ÜÏ]œ™XYR[MŠ
K\ËÚYÛ\ÜÏ]œ™XYR[MŠ
K\Ë\O]œ™XYÚÜ

K\ËTİXœØÜš\Ú^™O]œ™XYÚÜ

K\ËTİXœØÜš\TÚ^™O]œ™XYÚÜ

K\ËTİXœØÜš\Ù™œÙ]]œ™XYÚÜ

K\ËTİXœØÜš\SÙ™œÙ]]œ™XYÚÜ

K\ËTİ\\œØÜš\Ú^™O]œ™XYÚÜ

K\ËTİ\\œØÜš\TÚ^™O]œ™XYÚÜ

K\ËTİ\\œØÜš\Ù™œÙ]]œ™XYÚÜ

K\ËTİ\\œØÜš\SÙ™œÙ]]œ™XYÚÜ

K\ËTİšZÙ[İ]Ú^™O]œ™XYÚÜ

K\ËTİšZÙ[İ]ÜÚ][Û]œ™XYÚÜ

K\Ë™˜[Z[PÛ\ÜÏ]œ™XYÚÜ

K\Ëœ[›ÜÙOY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KLÜLÊÊÜŠ[‹œ\Ú
œ™XY]J
JNÜ™]\›ˆŸJ
K\Ë˜Ú\”˜[™ÙOY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KLÜÊÊÜŠ[‹œ\Ú
œ™XY[

JNÜ™]\›ˆŸJ
K\Ë™[™Ü’Q]œ™XYİš[™Ê
K\ËœÙ[Xİ[Û]œ™XYÚÜ

K\Ë™š\œİÚ\’[™^]œ™XYÚÜ

K\Ë›\İÚ\’[™^]œ™XYÚÜ

K\Ë™\œÚ[ÛŒ	‰Š\Ë˜\ØÙ[]œ™XYÚÜ

K\Ë™\ØÙ[]œ™XYÚÜ

K\Ë›[™QØ\]œ™XYÚÜ

K\ËÚ[\ØÙ[]œ™XYÚÜ

K\ËÚ[‘\ØÙ[]œ™XYÚÜ

K\Ë˜ÛÙTYÙT˜[™ÙOY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KLÜÜJÊÜŠ[‹œ\Ú
œ™XY[

JNÜ™]\›ˆŸJ
K\Ë™\œÚ[ÛŒJJ\™]\›ˆ\ËZYÚ]œ™XYÚÜ

K\Ë˜Ø\ZYÚ]œ™XYÚÜ

K\Ë™Y˜][Ú\]œ™XYÚÜ

K\Ë˜œ™XZĞÚ\]œ™XYÚÜ

K\Ë›X^ÛÛ^]œ™XYÚÜ

_K_J
K˜YOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏHœÜİ‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^İ˜\ˆ‹‹NÜİÚ]Ú
œÜÏ]\Ë›Ù™œÙ]\Ë™›Ü›X]]œ™XY[

K\Ëš][XĞ[™ÛO]œ™XY[

K\Ë[™\›[™TÜÚ][Û]œ™XYÚÜ

K\Ë[™\›[™UXÚÛ™\ÜÏ]œ™XYÚÜ

K\Ëš\Ñš^Y]Ú]œ™XY[

K\Ë›Z[“Y[U\M]œ™XY[

K\Ë›X^Y[U\M]œ™XY[

K\Ë›Z[“Y[U\LO]œ™XY[

K\Ë›X^Y[U\LO]œ™XY[

K\Ë™›Ü›X]
^ØØ\ÙHMLÍ˜Ø\ÙHNMŒ˜œ™XZÎØØ\ÙHLÌLÌ˜\ˆÎÙ›ÜŠ]œ™XYR[MŠ
K\Ë™Û\˜[YR[™^V×KÏLÌ[ÜÏœÏ›ÜÏL[ÊÊÜÎ‹K\Ê]\Ë™Û\˜[YR[™^œ\Ú
œ™XYR[MŠ
JNÙ›ÜŠ\Ë›˜[Y\ÏV×KOV×NİœÜÏ\Ë›Ù™œÙ]
İ\Ë›[™İÊ\]œ™XY]J
KKœ\Ú
\Ë›˜[Y\Ëœ\Ú
œ™XYİš[™ÊŠJJNÜ™]\›ˆNØØ\ÙHMLMMLœ™]\›ˆ]œ™XYR[MŠ
K\Ë›Ù™œÙ]Ï]œ™XY
ŠNØØ\ÙHŒŒMœ™]\›ˆ\Ë›X\J[˜İ[ÛŠ
^İ˜\ˆËËÙ›ÜŠV×KÏ[ÏLÏ]\Ë™š[K›X^›[QÛ\ÎÌXÏÛÏÎ›Ï˜ÎÜÏLXÏÊÊÛÎ‹K[ÊYœ\Ú
œ™XYR[ÌŠ
JNÜ™]\›ˆJK˜Ø[
\Ê__K_J
KXYOY[˜İ[ÛŠK
^İ\Ëœ˜]ÏYK\Ë›[™İYK›[™İ\Ëœ]›Ü›RQ]œ]›Ü›RQ\Ë™[˜ÛÙ[™ÒQ]™[˜ÛÙ[™ÒQ\Ë›[™İXYÙRQ]›[™İXYÙRQKØYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏH›˜[YH‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^İ˜\ˆ‹‹KËËË‹Ù›ÜŠœÜÏ]\Ë›Ù™œÙ]œ™XYÚÜ

K]œ™XYÚÜ

KÏ]œ™XYÚÜ

KV×KÏLÌ\ÜÏœÏœÜÏL\ÊÊÜÎ‹K\Ê[‹œ\Ú
Ü]›Ü›RQœ™XYÚÜ

K[˜ÛÙ[™ÒQœ™XYÚÜ

K[™İXYÙRQœ™XYÚÜ

K˜[YRQœ™XYÚÜ

K[™İœ™XYÚÜ

KÙ™œÙ]\Ë›Ù™œÙ]
ØÊİœ™XYÚÜ

_JNÙ›ÜŠ^ßKÏZL[‹›[™İÚÜÏJÊÚ
XO[–Ü×KœÜÏXK›Ù™œÙ]]œ™XYİš[™ÊK›[™İ
KÏ[™]ÈXYJ‹JKØXK›˜[YRQOO[[	‰ŠØ—OV×JKØK›˜[YRQKœ\Ú
ÊNİ\Ëœİš[™ÜÏY\Ë˜ÛÜ\šYÚYÌK\Ë™›Û˜[Z[OYÌWK\Ë™›ÛİX™˜[Z[OYÌ—K\Ë[š\]YTİX™˜[Z[OYÌ×K\Ë™›Û˜[YOYÍK\Ë™\œÚ[ÛYÍWNİ^İ\ËœÜİØÜš\˜[YOYÍ—VÌKœ˜]Ëœ™\XÙJÖ×WNWW™—KÙËˆŠ_XØ]Úİ\ËœÜİØÜš\˜[YOYÍVÌKœ˜]Ëœ™\XÙJÖ×WNWW™—KÙËˆŠ_\™]\›ˆ\Ë˜Y[X\šÏYÍ×K\Ë›X[Y˜Xİ\™\YÎK\Ë™\ÚYÛ™\YÎWK\Ë™\ØÜš\[ÛYÌLK\Ë™[™Ü•\›YÌLWK\Ë™\ÚYÛ™\•\›YÌL—K\Ë›XÙ[œÙOYÌL×K\Ë›XÙ[œÙU\›YÌMK\Ëœ™Y™\œ™Y˜[Z[OYÌMWK\Ëœ™Y™\œ™YİX™˜[Z[OYÌM×K\Ë˜ÛÛ\]X›Q[YÌNK\ËœØ[\U^YÌNW_K_J
KXYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏH›X^‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^Ü™]\›ˆœÜÏ]\Ë›Ù™œÙ]\Ë™\œÚ[Û]œ™XY[

K\Ë›[QÛ\Ï]œ™XYR[MŠ
K\Ë›X^Ú[Ï]œ™XYR[MŠ
K\Ë›X^ÛÛİ\œÏ]œ™XYR[MŠ
K\Ë›X^ÛÛ\ÜÚ]TÚ[Ï]œ™XYR[MŠ
K\Ë›X^ÛÛ\Û™[ÛÛİ\œÏ]œ™XYR[MŠ
K\Ë›X^›Û™\Ï]œ™XYR[MŠ
K\Ë›X^Ú[YÚÚ[Ï]œ™XYR[MŠ
K\Ë›X^İÜ˜YÙO]œ™XYR[MŠ
K\Ë›X^[˜İ[Û‘YœÏ]œ™XYR[MŠ
K\Ë›X^[œİXİ[Û‘YœÏ]œ™XYR[MŠ
K\Ë›X^İXÚÑ[[Y[Ï]œ™XYR[MŠ
K\Ë›X^Ú^™SÙ’[œİXİ[ÛœÏ]œ™XYR[MŠ
K\Ë›X^ÛÛ\Û™[[[Y[Ï]œ™XYR[MŠ
K\Ë›X^ÛÛ\Û™[\]œ™XYR[MŠ
_K_J
KØYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏHš]‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^İ˜\ˆ‹‹KËËËÙ›ÜŠœÜÏ]\Ë›Ù™œÙ]\Ë›Y]šXÜÏV×KLÏ]\Ë™š[KšXK›[X™\“Ù“Y]šXÜÎÌXÏÜÎœ˜ÎÜLXÏÊÊÜ‹K\Š]\Ë›Y]šXÜËœ\Ú
ØY˜[˜ÙNœ™XYR[MŠ
KØœ™XY[MŠ
_JNÙ›ÜŠO]\Ë™š[K›X^›[QÛ\Ë]\Ë™š[KšXK›[X™\“Ù“Y]šXÜË\Ë›YÚYP™X\š[™ÜÏY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KYLÌXOÙN™˜NÜLXOÊÊÙ‹KYŠZœ\Ú
œ™XY[MŠ
JNÜ™]\›ˆJ
K\ËÚYÏJ[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠV×KLJ]\Ë›Y]šXÜÊK›[™İÙÙŠÊÊ\Ï^Ù—K‹œ\Ú
Ë˜Y˜[˜ÙJNÜ™]\›ˆŸJK˜Ø[
\ÊK]\ËÚYÖİ\ËÚYË›[™İLWKV×K[ÏLÌXOÛÏN›Ï˜NÜLXOÊÊÛÎ‹K[ÊYœ\Ú
\ËÚYËœ\Ú
ŠJNÜ™]\›ˆKKœ›İİ\K™›Ü‘Û\Y[˜İ[ÛŠ
^Ü™]\›ˆ[ˆ\Ë›Y]šXÜÏİ\Ë›Y]šXÜÖİNØY˜[˜ÙN\Ë›Y]šXÜÖİ\Ë›Y]šXÜË›[™İLWK˜Y˜[˜ÙKØ\Ë›YÚYP™X\š[™ÜÖİ]\Ë›Y]šXÜË›[™İ__K_J
K’OV×KœÛXÙKYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏH™ÛYˆ‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë˜ØXÚO^ß_KKœ›İİ\K™Û\›ÜY[˜İ[ÛŠ
^İ˜\ˆ‹‹KËËË‹Ü™]\›ˆ[ˆ\Ë˜ØXÚOİ\Ë˜ØXÚVİNŠÏ]\Ë™š[K›ØØK]\Ë™š[K˜ÛÛ[Ë\Ëš[™^ÙŠ
K
O\Ë›[™İÙŠ
JOOOLİ\Ë˜ØXÚVİO[[Š‹œÜÏ]\Ë›Ù™œÙ]
Û‹ÏJÏ[™]È˜Ê‹œ™XY
JJJKœ™XYÚÜ

KXËœ™XYÚÜ

KXËœ™XYÚÜ

KXËœ™XYÚÜ

KXËœ™XYÚÜ

K\Ë˜ØXÚVİO[ÏOOKLOÛ™]ÈYJË‹
N›™]ÈØYJËË‹
K\Ë˜ØXÚVİJJ_KKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠ‹Š^İ˜\ˆKËËËÙ›ÜŠÏV×KÏV×KÏL\‹›[™İØÏØÊÊÊXO]Ü–Ø×WKËœ\Ú
Ë›[™İ
KI‰ŠÏ[Ë˜ÛÛ˜Ø]
K™[˜ÛÙJŠJJNÜ™]\›ˆËœ\Ú
Ë›[™İ
KİX›N›ËÙ™œÙ]Îœß_K_J
KØYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ‹‹KËÊ^İ\Ëœ˜]Ï]\Ë›[X™\“ÙÛÛİ\œÏ\‹\ËZ[[‹\ËSZ[XK\ËX^\Ë\ËSX^[Ë\Ë˜ÛÛ\İ[™HL_\™]\›ˆKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠ
^Ü™]\›ˆ\Ëœ˜]Ë™]_K_J
KYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ‹‹KÊ^İ˜\ˆËÎÙ›ÜŠ\Ëœ˜]Ï]\ËZ[\‹\ËSZ[[‹\ËX^XK\ËSX^\Ë\Ë˜ÛÛ\İ[™HL\Ë™Û\QÏV×K\Ë™Û\Ù™œÙ]ÏV×KÏ]\Ëœ˜]ÎØÏ[Ëœ™XYÚÜ

K\Ë™Û\Ù™œÙ]Ëœ\Ú
ËœÜÊK\Ë™Û\QËœ\Ú
Ëœ™XYR[MŠ
JKÌ‰˜ÎÊ[ËœÜÊÏLI˜ÏÍŒ‹L	˜ÏÛËœÜÊÏN	˜ÏÛËœÜÊÏM	˜É‰ŠËœÜÊÏLŠ_\™]\›ˆKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠ
^İ˜\ˆ‹Ù›ÜŠ[™]È˜Ê’K˜Ø[
\Ëœ˜]Ë™]JJKL]\Ë™Û\QË›[™İİÊÊİ
\‹œÜÏ]\Ë™Û\Ù™œÙ]ÖİNÜ™]\›ˆ‹™]_K_J
KXYOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^Ü™]\›ˆK—×Üİ\\—×Ë˜ÛÛœİXİÜ‹˜\J\Ë\™İ[Y[Ê_\™]\›ˆÛ
K›ÊKKœ›İİ\KYÏH›ØØH‹Kœ›İİ\Kœ\œÙOY[˜İ[ÛŠ
^İ˜\ˆ‹Ü™]\›ˆœÜÏ]\Ë›Ù™œÙ]]\Ë™š[KšXYš[™^ÓØÑ›Ü›X]\Ë›Ù™œÙ]Ï\OOLÊ[˜İ[ÛŠ
^İ˜\ˆKÎÙ›ÜŠÏV×KLO]\Ë›[™İÛNÛŠÏLŠ\Ëœ\Ú
Šœ™XYR[MŠ
JNÜ™]\›ˆßJK˜Ø[
\ÊNŠ[˜İ[ÛŠ
^İ˜\ˆKÎÙ›ÜŠÏV×KLO]\Ë›[™İÛNÛŠÏM
\Ëœ\Ú
œ™XYR[ÌŠ
JNÜ™]\›ˆßJK˜Ø[
\Ê_KKœ›İİ\Kš[™^ÙY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›Ù™œÙ]Öİ_KKœ›İİ\K›[™İÙY[˜İ[ÛŠ
^Ü™]\›ˆ\Ë›Ù™œÙ]Öİ
ÌWK]\Ë›Ù™œÙ]Öİ_KKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠŠ^Ù›ÜŠ˜\ˆ[™]ÈZ[Ì\œ˜^J\Ë›Ù™œÙ]Ë›[™İ
KOLÏLÏLÛÏ‹›[™İÊÊÛÊZYŠ–Û×OXKÏ‹›[™İ	‰œ–Ü×OO[Ê^ÊÊÜË–Û×OXNİ˜\ˆÏ]\Ë›Ù™œÙ]ÖÛ×K]\Ë›Ù™œÙ]ÖÛÊÌWKXÎÙŒ	‰ŠJÏY
_Y›ÜŠ˜\ˆ[™]È\œ˜^J
›‹›[™İ
KLÚ‹›[™İÊÊÚ
Y–Í
š
Ì×OLMI›–ÚK–Í
š
Ì—OJL	›–ÚJO–Í
š
ÌWOJMÌLM	›–ÚJOŒM‹–Í
šOJÎNL	›–ÚJOŒÜ™]\›ˆŸK_J
K˜YOY[˜İ[ÛŠ
^Ù[˜İ[ÛˆJ
^İ\Ë™›Û]\ËœİXœÙ]^ßK\Ë[šXÛÙ\Ï^ßK\Ë›™^LÌß\™]\›ˆKœ›İİ\K™Ù[™\˜]PÛX\Y[˜İ[ÛŠ
^İ˜\ˆ‹‹KÎÙ›ÜŠˆ[ˆO]\Ë™›Û˜ÛX\X›\ÖÌK˜ÛÙSX\^ßKÏ]\ËœİXœÙ]
[\ÖÜ—KÜ—OXVÛ—NÜ™]\›ˆKKœ›İİ\K™Û\Ñ›ÜY[˜İ[ÛŠ
^İ˜\ˆ‹‹KËËËÙ›ÜŠO^ßKÏLÏ]›[™İÛÏÎÛÊÊÊXVÜÏ]Û×WO]\Ë™›Û™ÛY‹™Û\›ÜŠÊNÙ›ÜŠÈ[ˆV×KJJXVÜ×JHO[[	‰›‹˜ÛÛ\İ[™	‰œ‹œ\Ú˜\J‹‹™Û\QÊNÚYŠ‹›[™İŒ
Y›ÜŠÈ[ˆ]\Ë™Û\Ñ›ÜŠŠJ[YÜ×KVÜ×O[Ü™]\›ˆ_KKœ›İİ\K™[˜ÛÙOY[˜İ[ÛŠŠ^İ˜\ˆ‹KËËË‹‹ËË‹ËÎÙ›ÜŠH[ˆTK™[˜ÛÙJ\Ë™Ù[™\˜]PÛX\

K[šXÛÙHŠKÏ]\Ë™Û\Ñ›ÜŠ
KÏ^ÌŒKÏ[‹˜Ú\“X\
]ÖÊZÖØWJK›ÛOY›™]ÎÙ›ÜŠÈ[ˆ[‹›X^Û\QÊWÈ[ˆß
Ö××OXŠÊÊNÜ™]\›ˆY[˜İ[ÛŠ
^İ˜\ˆËÙ›ÜŠÈ[ˆ^ßK
T–ÕĞ×WOPÎÜ™]\›ˆŸJÊKSØš™XİšÙ^\Ê
KœÛÜ
[˜İ[ÛŠÊ^Ü™]\›ˆPßJKY[˜İ[ÛŠ
^İ˜\ˆËÙ›ÜŠV×KLÏ^›[™İÕÎÕ
ÊÊXÏ^ÕK‹œ\Ú
Ø×JNÜ™]\›ˆŸJ
KÏ]\Ë™›Û™ÛY‹™[˜ÛÙJË‹ÊK]\Ë™›Û›ØØK™[˜ÛÙJË›Ù™œÙ]ËŠKÏ^ØÛX\\Ë™›Û˜ÛX\œ˜]Ê
KÛYœËX›KØØN™‹]\Ë™›Ûš]œ˜]Ê
KXN\Ë™›ÛšXKœ˜]Ê
KX^\Ë™›Û›X^œ˜]Ê
KÜİ\Ë™›ÛœÜİœ˜]Ê
K˜[YN\Ë™›Û›˜[YKœ˜]Ê
KXY\Ë™›ÛšXY™[˜ÛÙJŠ_K\Ë™›Û›ÜÌ‹™^\İÉ‰ŠÖÈ“ÔËÌˆ—O]\Ë™›Û›ÜÌ‹œ˜]Ê
JK\Ë™›Û™\™XİÜK™[˜ÛÙJÊ_K_J
NÒ\‹TK”“Øš™XİY[˜İ[ÛŠ
^İ˜\ˆNÙ[˜İ[Ûˆ

^ß\™]\›ˆOY[˜İ[ÛŠ‹Š^Ü™]\›Š\œ˜^JŠÌJKš›Ú[ŠŒŠJÜŠKœÛXÙJ[Š_K˜ÛÛ™\Y[˜İ[ÛŠŠ^İ˜\ˆ‹KËÎÚYŠ\œ˜^Kš\Ğ\œ˜^JŠJ\™]\›ˆ–ÈŠÙ[˜İ[ÛŠ
^İ˜\ˆËÙ›ÜŠV×KÏL\‹›[™İØÏØÊÊÊ[\–Ø×K‹œ\Ú
˜ÛÛ™\
ŠJNÜ™]\›ˆŸJ
Kš›Ú[ŠˆŠJÈ—HÚYŠ\[ÙˆOHœİš[™ÈŠ\™]\›ˆ‹ÈŠÜÚYŠˆO[[	‰œ‹š\Ôİš[™Ê\™]\›ˆŠŠÜŠÈŠHÚYŠˆ[œİ[˜Ù[Ùˆ]J\™]\›ˆŠˆŠÙJ‹™Ù]UÑ[YX\Š
K
JÙJ‹™Ù]UÓ[Û

KŠJÙJ‹™Ù]UÑ]J
KŠJÙJ‹™Ù]UÒİ\œÊ
KŠJÙJ‹™Ù]UÓZ[]\Ê
KŠJÙJ‹™Ù]UÔÙXÛÛ™Ê
KŠJÈ–ŠHÚYŠßKÔİš[™Ë˜Ø[
ŠOOOH–ÛØš™XİØš™XİHŠ^Ù›ÜŠH[ˆÏVÈ—KŠ[Ï\–ØWKËœ\Ú
‹ÈŠØJÈˆŠİ˜ÛÛ™\
ÊJNÜ™]\›ˆËœ\Ú
ˆŠKËš›Ú[Š˜
_\™]\›ˆˆŠÜŸKJ
NØÛÛœİOLLKROLMœÏLLÙ[˜İ[ÛˆYJJ^ĞÎ
ÒJ
KJKœØ]™J]\]Y]KIÙKœ™Y™\™[˜Ù_Kœ˜
_Y[˜İ[ÛˆXYJJ^ÚYŠK›[™İOOL
\™]\›Û]SÒJ
NİPÎ
VÌJNÙ›ÜŠ]LNÜK›[™İÜŠÊÊ]]˜YYÙJÔKRWKœŠKPÎ
VÜ—JNİœØ]™J™]\]Y]\ËœˆŠ_Y[˜İ[ÛˆÒJ
^Ü™]\›ˆ™]È\Šİ[š]ˆ›[H‹›Ü›X]–ÔKRWKÜšY[][ÛˆœÜ˜Z]ŸJ_Y[˜İ[ÛˆÎ
K
^ØÛÛœİTKZœÊŒÛ]ZœÎÙKœÙ]›Û
š[™]XØH‹˜›ÛŠKKœÙ]›ÛÚ^™JL
KK^
°âUTUQUH	ÑV0âQUSÓˆ‹œËŠKŠÏM‹KœÙ]˜]ĞÛÛÜŠŒ
KKœÙ][™UÚY
ŒÊKK›[™JœË‹KZœËŠKŠÏMKKœÙ]›Û
š[™]XØH‹˜›ÛŠKKœÙ]›ÛÚ^™JJKK^
‘\İ[˜]Z\™H‹œËŠKŠÏMKKœÙ]›Û
š[™]XØH‹˜›ÛŠKKœÙ]›ÛÚ^™JLÊNØÛÛœİOYKœÜ]^ÔÚ^™Jœ™XÚ\Y[˜[YKŠNÙK^
KœËŠKŠÏXK›[™İ
KKKœÙ]›Û
š[™]XØH‹››Ü›X[ŠKKœÙ]›ÛÚ^™JL
NØÛÛœİÏYKœÜ]^ÔÚ^™J˜Y™\ÜËŠNÙK^
ËœËŠKŠÏ\Ë›[™İ
KŠÏMKœÙ]˜]ĞÛÛÜŠŒ
KK›[™JœË‹KZœËŠKŠÏMKKœÙ]›Û
š[™]XØH‹››Ü›X[ŠKKœÙ]›ÛÚ^™JJKK^
°êY‹ˆÛÛ[X[™Hˆ	İœ™Y™\™[˜Ù_XœËŠKŠÏMKÙZYÚO[[	‰ŠK^
ÚYÈˆ	İÙZYÚHØœËŠKŠÏMJKŠÏLËKœÙ]˜]ĞÛÛÜŠŒ
KK›[™JœË‹KZœËŠKŠÏMKKœÙ]›Û
š[™]XØH‹˜›ÛŠKKœÙ]›ÛÚ^™JJKK^
‘^0êY]šXÙH‹œËŠKŠÏMKKœÙ]›Û
š[™]XØH‹››Ü›X[ŠKKœÙ]›ÛÚ^™JL
NØÛÛœİÏYKœÜ]^ÔÚ^™JœÙ[™\“˜[YKŠNÜ™]\›ˆK^
ËœËŠK_Y[˜İ[ÛˆJK
^ØÛÛœİV×NÚYŠ™›Ü‘XXÚ
ÏOØÛÛœİSX]›X^
X]™›ÛÜŠËœ]JJNÙ›ÜŠ]LÙÙŠÊÊ\‹œ\Ú
Ê_JK‹›[™İOOL
\™]\›ˆ[ØÛÛœİYKœYÙS\™Ù]\“[O™KœYÙR]]]\“[OÈ›ˆœ‹OVÙKœYÙS\™Ù]\“[KKœYÙR]]]\“[WKÏ[™]È\Šİ[š]ˆ›[H‹›Ü›X]˜KÜšY[][Û›ŸJKÏSX]›X^
KK˜ÛÛÛ›™\Ê™K›YÛ™\ÊNÜ™]\›ˆ‹™›Ü‘XXÚ

Ë
OOØÛÛœİY	[ÎÙŒ	‰™OOL	‰œË˜YYÙJKŠNØÛÛœİY‰YK˜ÛÛÛ›™\ËSX]™›ÛÜŠ‹ÙK˜ÛÛÛ›™\ÊKYK›X\™ÙQØ]XÚS[JÚ
ŠK™]\]Y]S\™Ù]\“[JÙK™\ÜXÙRÜš^›Û[[JKÏYK›X\™ÙR]][JŞ
ŠK™]\]Y]R]]]\“[JÙK™\ÜXÙU™\XØ[[JNİ˜YJËË‹ËK™]\]Y]S\™Ù]\“[KK™]\]Y]R]]]\“[J_JKßY[˜İ[ÛˆYJK
^İ^ØÛÛœİYK›İ]]
˜›Ø\›ŠNİÚ[™İË›Ü[Š‹Ôİš[™Ê
K—Ø›[šÈŠ_KœØ]™J
_XØ]ÚÙKœØ]™J
__Y[˜İ[Ûˆ	JKH™]\]Y]\ËœˆŠ^ØÛÛœİQJK
NÛ‰‰›‹œØ]™JŠ_Y[˜İ[Ûˆ’JKH™]\]Y]\ËœˆŠ^ØÛÛœİQJK
NÛ‰‰œYJ‹Š_XÛÛœİRO^ÜYÙS\™Ù]\“[NŒŒLYÙR]]]\“[NŒMËX\™ÙR]][NŒLX\™ÙQØ]XÚS[NŒL]\]Y]S\™Ù]\“[NŒË]\]Y]R]]]\“[NŒÎÛÛÛ›™\ÎŒËYÛ™\ÎË\ÜXÙRÜš^›Û[[NŒ\ÜXÙU™\XØ[[NŒNÙ[˜İ[ÛˆYJKH›\İKY\ËXÛÙ\ËœˆŠ^ÉJRKK›X\
OŠË‹‹œ‹]NŒ_JJK
_Y[˜İ[ÛˆØYJKH›\İKY\ËXÛÙ\ËœˆŠ^Ğ’JRKK›X\
OŠË‹‹œ‹]NŒ_JJK
_Y[˜İ[Ûˆ˜YJK‹‹KÊ^ÙKœØ]™QÜ˜\XÜÔİ]J
KKœÙ]˜]ĞÛÛÜŠŒL
KKœÙ][™UÚY
ŒJKKœ™Xİ
‹‹KË”ÈŠKKœ™Xİ
‹‹KË[
KK˜Û\

KK™\ØØ\™]

NØÛÛœİÏSX]›X^
X]›Z[ŠKÊJ‹ŒŠKÏXK[ÊŒ‹\Ë[ÊŒÚYŠÏŒ‰‰™ŒŠZYŠO\ÊŒKŒMJ^ØÛÛœİSX]›X^
KX]›Z[ŠÊ‹JJK\ŠÛË[ŠÊËZ
KÌÙK˜Y[XYÙJœ\‘]U\›”‘È‹‹
NØÛÛœİÏ^
Ú
ÛËÏ\ŠØK[Ë]ÎÛWÊKËŠÛËË›YŠ_Y[Ù^ØÛÛœİSX]›X^
KX]›Z[ŠË
‹ŒŠJK\ŠÊKZ
KÌ‹[ŠÛÎÙK˜Y[XYÙJœ\‘]U\›”‘È‹‹
NØÛÛœİÏXŠÚ
ÛÊ‹‹Ï[ŠÜË[Ë]Î×ÏŒKI‰›WÊKŠÛËËËË˜Ù[\ˆŠ_YKœ™\İÜ™QÜ˜\XÜÔİ]J
_Y[˜İ[ÛˆWÊK‹‹KËÊ^ÚYŠOL_ÏLJ\™]\›ØÛÛœİÏ[ÏOOH˜Ù[\ˆÜŠØKÌœ‹SX]›X^
KX]›Z[ŠKÊŒ‹ŠJKY
‹‹SX]›X^
KX]™›ÛÜŠËÙŠKLJNÙKœÙ]›Û
š[™]XØH‹˜›ÛŠKKœÙ]›ÛÚ^™J
NØÛÛœİYKœÜ]^ÔÚ^™J]KJK^œÛXÙJ
NÚYŠ›[™İš	‰˜‹›[™İŒ
^Û]ÏX–Ø‹›[™İLWNÙ›ÜŠ×Ë›[™İŒI‰™K™Ù]^ÚY
	×ßx )˜
O˜NÊWÏWËœÛXÙJLJKš[Q[™

NØ–Ø‹›[™İLWOX	×ßx )˜[]Ï[ŠÙŠ‹ÚYŠ‹™›Ü‘XXÚ
ÏOÙK^
ËËËØ[YÛ›ËX^ÚY˜_JKÊÏYŸJKœİX]I‰ÊÙ[ŠÜËYŠ^ÙKœÙ]›Û
š[™]XØH‹››Ü›X[ŠKKœÙ]›ÛÚ^™J
‹JNØÛÛœİ××OYKœÜ]^ÔÚ^™JœİX]KJN×É‰ŠK^
ËËËØ[YÛ›ËX^ÚY˜_JKÊÏYŠ_YKœÙ]›Û
š[™]XØH‹››Ü›X[ŠKKœÙ]›ÛÚ^™JX]›X^
K
‹
JKKœÙ]^ÛÛÜŠLŒ
KK^
œ™YÛÙKËX]›Z[ŠËŠÜËLJKØ[YÛ›ßJKKœÙ]^ÛÛÜŠ
_XÛÛœİVÈ™[ˆ°ê\\˜][Ûˆ‹™ğê[°ê\°êYH‹™^0êYpêYH‹›]œ°êYH—KÎ^È™[ˆ°ê\\˜][Ûˆˆ‘[ˆ°ê\\˜][Ûˆ‹ğê[°ê\°êYNˆ‘ğê[°ê\°êYH‹^0êYpêYNˆ‘^0êYpêYH‹]œ°êYNˆ“]œ°êYHŸK^È™[ˆ°ê\\˜][Ûˆˆ^VÈĞÎPLŒ×H™ËVÈÑQŒ×H›Ü™\‹VÈÙXÙM—H‹ğê[°ê\°êYNˆ^]š[Û]MŒ™Ë]š[Û]ML›Ü™\‹]š[Û]LŒ‹^0êYpêYNˆ^X›YKMŒ™ËX›YKML›Ü™\‹X›YKLŒ‹]œ°êYNˆ^YÜ™Y[‹MŒ™ËYÜ™Y[‹ML›Ü™\‹YÜ™Y[‹LŒŸK’O^È™[ˆ°ê\\˜][Ûˆ—Õ‹ğê[°ê\°êYN“•‹^0êYpêYN‘•‹]œ°êYN˜›NÙ[˜İ[ÛˆØYJJ^ØÛÛœİYš[™^ÙŠJNÜ™]\›ˆL	‰›[™İLOÙİ
ÌWN›[Y[˜İ[Ûˆ˜YJJ^ØÛÛœİYš[™^ÙŠJNÜ™]\›ˆŒÙİLWN›[XÛÛœİNMKÚ^Û›Û™Nˆ^XZ[Û‹[]]YÍÌ‹ÚÎˆ^YÜ™Y[‹MÌ‹İÎˆ^\›ÜÙKMÌ‹İ]ˆ^XZ[Û‹[]]YŸKXYO^Û›Û™Nˆ^XZ[Û‹[]]YÍÌ™ËXZ[Û‹\İ\™˜XÙH›Ü™\‹XZ[Û‹X›Ü™\ˆ‹ÚÎˆ^YÜ™Y[‹MÌ™ËYÜ™Y[‹ML›Ü™\‹YÜ™Y[‹LŒ‹İÎˆ^\›ÜÙKMÌ™Ë\›ÜÙKML›Ü™\‹\›ÜÙKLŒ‹İ]ˆ^XZ[Û‹[]]Y™ËXZ[Û‹X›Ü™\‹ÍL›Ü™\‹XZ[Û‹X›Ü™\ˆŸNÙ[˜İ[ÛˆŠİÛ™N™KX™[J^Ü™]\›ˆKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YN˜[›[™KY›^Úš[šËL][\ËXÙ[\ˆØ\LH›İ[™YY[›Ü™\ˆLˆKLH^VÌL\H›Û[YY][H	ŞXYVÙW_XÚ[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆšLKHËLKH›İ[™YY[™ËXİ\œ™[ŸJK_J_Y[˜İ[ÛˆJJ^Ü™]\›ˆK˜[]\œË›[™İŒ	‰™K˜[]\œË™]™\JO‹×—
ÉË\İ

J_Y[˜İ[ÛˆÌ
J^ØÛÛœİYK™š[\ŠOœ‹›X™[š[J
JNÜ™]\›ˆ™š[™
OˆRJŠJOÏİÌ_Y[˜İ[Ûˆ˜ÊK
^İ˜\ˆÚYŠ
^ØÛÛœİYK˜]šX]ÖİšYKO[Ê]˜[]\”İÜÊOO[[İ›ÚYœ–Û—N›ÚYÚYŠJ\™]\›Üİ×Ü]˜Kœİ×Ü]İ×Ú]˜Kœİ×Ú]‹İ×ÛZ[YN˜Kœİ×ÛZ[Y__\™]\›Üİ×Ü]™Kœİ×Ü]İ×Ú]™Kœİ×Ú]‹İ×ÛZ[YN™Kœİ×ÛZ[Y__Y[˜İ[Ûˆ’JK
^ÚYŠ™š[\ŠÏO›Ë›X™[š[J
JK›[™İŠ\™]\›ˆ[ØÛÛœİ\Ì

NÚYŠ[Š\™]\›ˆ[ØÛÛœİO[™]ÈX\ÙK™›Ü‘XXÚ
ÏOØÛÛœİÏ[Ë˜]šX]ÖÛ‹šYNØÈOO]›ÚY	‰ŠKš\ÊÊ_KœÙ]
Ë×JKK™Ù]
ÊKœ\Ú
ÊJ_JNØÛÛœİÏ[‹˜[]\œË™š[\ŠÏO˜Kš\ÊÊJK›X\
ÏOŠİ˜[YN›Ë][\Î˜K™Ù]
Ê_JJNÜ™]\›ˆË›[™İŒŞØ^\Î›‹[šY\ÎœßN›[Y[˜İ[ÛˆØYJJ^ØÛÛœİ\Ì
JNÜ™]\›ˆO[[	‰˜[]\”İÜÏİ˜[]\œË›X\
O˜[]\”İÜÖÜ—JK™š[\ŠOˆH\ŠN–×_Y[˜İ[Ûˆ˜YJÜİÜÎ™KÙ^WÎJ^ÚYŠK›[™İOOLJ\™]\›ˆKšœŞ
ËÜ]™VÌKœİ×Ü]]™VÌKœİ×Ú]‹Z[YN™VÌKœİ×ÛZ[YKÙ^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMˆËMˆ‹˜[˜XÚÒXÛÛ•ÛßJNØÛÛœİYK›[™İ\ÙKœÛXÙJÊN™KOYK›[™İ[‹›[™İÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYY[ËY[ÜšYXÛÛËLˆÜšY\›İÜËLˆØ\LH™ËXZ[Û‹\İ\™˜XÙHLH‹Ú[™[–Û‹›X\

ËÊOOšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›İ™\™›İËZY[ˆ›İ[™YVÌÜH™ËXZ[Û‹X™È‹Ú[™[šKšœŞ
ËÜ]œËœİ×Ü]]œËœİ×Ú]‹Z[YNœËœİ×ÛZ[YKÙ^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšLÈËLÈ‹˜[˜XÚÒXÛÛ•ÛßJ_KÊJK‰‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YVÌÜH™ËXZ[Û‹]^Î^VÌLH›Û\Ù[ZX›Û^]Ú]H‹Ú[™[–ÈŠÈ‹W_JW_J_Y[˜İ[ÛˆÊJ^Ü™]\›˜	ÙKœ›ÙXİYN‰ÙK˜\šX[RYÏÈˆŸXX\Ş[˜È[˜İ[Ûˆ
K
^ØÛÛœİ[™]ÈX\İ™›Ü‘XXÚ
OÛ‹™[HOOL	‰Š‹š\Ê‹œ›ÙXİY
_‹œÙ]
‹œ›ÙXİY×JK‹™Ù]
‹œ›ÙXİY
Kœ\Ú
İ˜\šX[RY›‹˜\šX[RY[N›‹™[_JJ_JK]ØZ]›ÛZ\ÙK˜[
\œ˜^K™œ›ÛJ‹™[šY\Ê
JK›X\
\Ş[˜ÊÛ‹WJOOØÛÛœİÏYK™š[™
ÏO›ËšYOO[ŠNÚYŠÊ]^ÚYŠË˜\šX[\Ë›[™İŒ
^Û]ÏHLNØÛÛœİÏ\Ë˜\šX[\Ë›X\
OØÛÛœİXK™š[™
Oš˜\šX[RYOOYšY
NÜ™]\›ˆYŸœİØÚÏOO[[ÙŠÏHLË‹‹™İØÚÎ“X]›X^
œİØÚËY‹™[J_J_JNÛÉ‰˜]ØZ]™œ›ÛJœ›ÙXİÈŠK\]Jİ˜\šX[\Î˜ßJK™\JšY‹Š_Y[Ù^ØÛÛœİÏXK™š[™
ÏO˜Ë˜\šX[RYOO[[
NÛÉ‰œËœİØÚÈOO[[	‰˜]ØZ]™œ›ÛJœ›ÙXİÈŠK\]JÜİØÚÎ“X]›X^
ËœİØÚË[Ë™[J_JK™\JšY‹Š__XØ]Úß_JJ_Y[˜İ[Ûˆ
J^Ü™]\›˜Z[Ûœ›ÙZ]‰Ù_XY[˜İ[ÛˆÛJJ^Ü™]\›˜Z[Û˜\šX[N‰Ù_XY[˜İ[Ûˆ
J^Ü™]\›ˆKœ™\XÙJÖ×˜K^KVŒNWKÙËˆŠKœÛXÙJ
KÕ\\Ø\ÙJ
_Y[˜İ[ÛˆÙÊİ˜[YN™KÛÛXÚÎJ^Ü™]\›ˆKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLH˜[œÚ][Û‹XÛÛÜœÈİ™\˜›Ü™\‹XZ[Û‹YÛÛ‹˜\šXK[X™[ˆ•›Ú\ˆHÛÙH‹Ú[™[šKšœŞ
^İ˜[YN™KÚ^™NŒJ_J_Y[˜İ[ÛˆXYJÜ\•˜[YN™K™YÛÙN]Nœ‹İX]N›‹šXÙN˜KİÎœËİØÚÕÛ™N›ËİØÚÓX™[˜ËÙ^WÎ™ÛÛÜÙN™ŸJ^Ü™]\›ˆKšœŞ
‹İ]NˆÛÙH›ÙZ]‹ÛÛÜÙN™‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆØ\M‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLÈ‹Ú[™[šKšœŞ
^İ˜[YN™KÚ^™NŒMÍŸJ_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ™›Û[[Û›È^^È˜XÚÚ[™Ë]ÚY\ˆ^XZ[Û‹[]]Y‹Ú[™[JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞ
Ëİ˜\šX[NœËÙ^WÎ™Ú^™NˆšLLHËLLHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[œŸJK‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È^XZ[Û‹[]]Y‹Ú[™[›ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[˜ÛÊJ_JW_JKKšœŞ
‹İÛ™N›ËX™[˜ßJW_JW_J_J_XÛÛœİ™ÏH˜Z[Û‹\ØØ[‹\™YÚ[ÛˆÙ[˜İ[ÛˆXYJJ^ØÛÛœİYK›X]Ú
×˜Z[ÛŠ›ÙZ]˜\šX[JNŠŠÊIÊNÜ™]\›ˆŞÚÚ[™ÌWKYÌ—_N›[Y[˜İ[ÛˆØYJÜ›ÙXİÎ™KÙ^WÎÛY\İİØÚÎœ‹ÛÛÜÙN›ŸJ^ØÛÛœİØK×O]‹\ÙTİ]Jœİ\[™ÈŠKÛË×O]‹\ÙTİ]JˆŠKÙ—O]‹\ÙTİ]J[
KÚO]‹\ÙTİ]JLJKØ‹×O]‹\ÙTİ]J[
K×Ë—O]‹\ÙTİ]JLJKÏ]‹\ÙT™YŠ[
KÏ]‹\ÙT™YŠJNÚË˜İ\œ™[YNØÛÛœİ]‹\ÙT™YŠLJKÏ]‹\ÙT™YŠ[
NÙ[˜İ[ÛˆŠ
^Ş
L
KË˜İ\œ™[	‰Ú[™İË˜ÛX\•[Y[İ]
Ë˜İ\œ™[
KË˜İ\œ™[]Ú[™İËœÙ][Y[İ]


OO
LJKML
_XÛÛœİ]‹\ÙT™YŠ›ÛZ\ÙKœ™\ÛÛ™J
JNİ‹\ÙQY™™Xİ


OOØÛÛœİÏ[™]ÈÙYJ™ËÙ›Ü›X]ÕÔİ\Ü–Ú‹”T—ĞÓÑWK™\˜›ÜÙNˆL_JNÔË˜İ\œ™[UÎØÛÛœİTOOÚYŠ˜İ\œ™[
\™]\›ØÛÛœİOQXYJJNÚYŠ[J^ÔŠ
NÜ™]\›ŸXÛÛœİYOZË˜İ\œ™[Û]O[[ÚYŠKšÚ[™OOHœ›ÙZ]Š^ØÛÛœİ™OXYK™š[™
OOKšYOO[KšY
NØ™I‰ŠO^Ü›ÙXİY˜™KšY˜\šX[RY›[J_Y[ÙH›ÜŠÛÛœİ™HÙˆYJ^ØÛÛœİOX™K˜\šX[\Ë™š[™
O–šYOO[KšY
NÚYŠJ^ÜO^Ü›ÙXİY˜™KšY˜\šX[RYKšYNØœ™XZß_ZYŠ\J^ÔŠ
NÜ™]\›ŸU˜İ\œ™[HLİ^ØÛÛœİ™OYØİ[Y[œ]Y\TÙ[XİÜŠÉØ™ßHØ[˜\Ø
NØ™I‰Ê™KÑ]UT“
š[XYÙKÜ™ÈŠJ_XØ]ÚßUËœ]\ÙJL
KŠJKÊœ™\İ[Š_KJ
OOßNÜ™]\›ˆ‹˜İ\œ™[J\Ş[˜Ê
OOİ^Ø]ØZ]Ëœİ\
Ù˜XÚ[™Ó[ÙNˆ™[š\›Û›Y[ŸKÙœÎŒL\˜›ŞŠKJOOØÛÛœİYOSX]œ›İ[™
X]›Z[ŠKJJ‹MJKOSX]›X^
MŒX]›Z[ŠYKŒ
JNÜ™]\›İÚYœKZYÚœ___K
KÊœØØ[›š[™ÈŠ_XØ]Ú
J^ØÛÛœİO]\[ÙˆOOHœİš[™ÈÔN”H[œİ[˜Ù[Ùˆ\œ›ÜÔK›Y\ÜØYÙNˆˆ‹YOKÓ›İ[İÙY\›Z\ÜÚ[Û‹ÚK\İ
JNØÊYOÈXØğêÈØ[pê\˜H™Y\ğêKˆ]]Üš\Ù^ˆHØ[pê\˜Hİ\ˆÙHÚ]H[œÈ\È°êYÛYÙ\ÈH˜]šYØ]]\‹Z\È°êY\ÜØ^Y^‹ˆˆ’[\ÜÜÚX›H	ØXØğêY\ˆ0èHØ[pê\˜Hİ\ˆÙ]\\™Z[ˆŠKÊ˜Ø[Y\˜KY\œ›ÜˆŠ__JJ
K

OOĞË˜İ\œ™[	‰Ú[™İË˜ÛX\•[Y[İ]
Ë˜İ\œ™[
K‹˜İ\œ™[[Š

OOÚYŠËš\ÔØØ[›š[™Ê\™]\›ˆËœİÜ

_JK˜Ø]Ú


OOßJK[Š

OOİ^ÕË˜ÛX\Š
_XØ]Úß_J__K×JNÙ[˜İ[Ûˆ

^İ˜\ˆÎÕ˜İ\œ™[HLKŠ[
KÊ[
KÊœØØ[›š[™ÈŠK
ÏTË˜İ\œ™[
OO[[Ëœ™\İ[YJ
_XÛÛœİO]‹\ÙT™YŠLJNØ\Ş[˜È[˜İ[ÛˆJ
^ÚYŠRK˜İ\œ™[
^ÒK˜İ\œ™[HLİ^Ø]ØZ]‹˜İ\œ™[ØÛÛœİÏTË˜İ\œ™[ÕÈO[[	‰•Ëš\ÔØØ[›š[™É‰˜]ØZ]ËœİÜ

K˜Ø]Ú


OOßJNİ^ÕÏO[[Ë˜ÛX\Š
_XØ]Úß_Yš[˜[^ÛŠ
___X\Ş[˜È[˜İ[ÛˆJÊ^ÚYŠY
\™]\›ØÛÛœİZË˜İ\œ™[™š[™
O’šYOOYœ›ÙXİY
NÚYŠ
^ÓŠL
Nİ^Ø]ØZ]Š˜\šX[RYÊ_Yš[˜[^ÓŠLJ___\™]\›ˆKšœŞ
‹İ]Nˆ”ØØ[›™\ˆ[ˆÛÙH‹ÛÛÜÙN•KÚ[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HZ[‹ZVÌÌŒHİ™\™›İËZY[ˆ›İ[™YXˆ™ËX›XÚÈ‹Ú[™[–ÚKšœŞ
™]ˆ‹ÚY˜™ËÛ\ÜÓ˜[YNˆËY[ŸJKOOOHœİ\[™È‰‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H[œÙ]L›^][\ËXÙ[\ˆ\İYKXÙ[\ˆ™ËX›XÚËÍŒ^\ÛH^]Ú]H‹Ú[™[ˆ“İ]™\\™HHHØ[pê\˜x )ˆŸJKOOOH˜Ø[Y\˜KY\œ›Üˆ‰‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H[œÙ]L›^›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆØ\Lˆ™ËX›XÚËÎHM^XÙ[\ˆ^\ÛH^]Ú]H‹Ú[™[–ÚKšœŞ
ÙØÛ\ÜÓ˜[YNˆšMˆËMˆ‹İ›ÚÙUÚYŒK_JKKšœŞ
œ‹ØÚ[™[›ßJW_JKOOOHœØØ[›š[™È‰‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]H[œÙ]L›^][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšMMˆËMMˆ›İ[™YXˆ›Ü™\‹Lˆ›Ü™\‹]Ú]KÎŸJ_JK	‰˜OOOHœØØ[›š[™È‰‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H[œÙ]^LÈ›İÛKLÈ›İ[™YXˆ™Ë\›ÜÙKMŒÎLLÈKLˆ^XÙ[\ˆ^^È›Û[YY][H^]Ú]H‹Ú[™[ˆÛÙH›Ûˆ™XÛÛ›HŸJKOOOHœ™\İ[‰‰˜‰‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H[œÙ]L‹LL›^][\ËXÙ[\ˆ\İYKXÙ[\ˆ™Ë]Ú]HMˆ‹Ú[™[šKšœŞ
š[YÈ‹ÜÜ˜Î˜‹[ˆÛÙHØØ[›°êH‹Û\ÜÓ˜[YNˆ›X^ZY[X^]ËY[Øš™XİXÛÛZ[ˆŸJ_JW_JKOOOHœ™\İ[‰‰™	‰Š

OOØÛÛœİÏYK™š[™
OOœKšYOOYœ›ÙXİY
NÚYŠUÊ\™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆØ\LÈKM^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
ÙØÛ\ÜÓ˜[YNˆšMˆËMˆ^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆÙH›ÙZ]‰Ù^\İH\ËˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ”Û\ÜÓ˜[YNˆ˜‹YÚÜİ‹Ú[™[ˆ”ØØ[›™\ˆ[ˆ]]™H\XÛHŸJW_JNØÛÛœİY˜\šX[RYÕË˜\šX[\Ë™š[™
OOœKšYOOY˜\šX[RY
OÏÛ[›[QÙ˜ÊÌ
Ë›Ü[Û—ÙÜ›İ\ÊJNÜİ×Ü]•Ëœİ×Ü]İ×Ú]•Ëœİ×Ú]‹İ×ÛZ[YN•Ëœİ×ÛZ[Y_KOQÑœİØÚÎ•ËœİØÚËORŒ
OOO[[Èˆ”İš[™ÊJJKYOTOOOLÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\LÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞ
Ëİ˜\šX[N’Ù^WÎÚ^™NˆšLMËLMŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H›Û[YY][H^XZ[Û‹]^‹Ú[™[‘Ñ›X™[N•Ë››Û_JK	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È^XZ[Û‹[]]Y‹Ú[™[•Ë››Û_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[˜ÛÊËœš^
_JW_JW_JKYI‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\›ÜÙKLŒ™Ë\›ÜÙKMLLÈKLˆ^\ÛH›Û[YY][H^\›ÜÙKMÌ‹Ú[™[–ÚKšœŞ
ÙØÛ\ÜÓ˜[YNˆšMËMÚš[šËL‹İ›ÚÙUÚYŒK_JK”\\™HHİØÚÈ—_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^^È^XZ[Û‹[]]Y‹Ú[™[ˆ”İØÚÈ\ÜÛšX›HŸJKKšœŞ
‹İÛ™N›KÛ™KX™[›K^JW_JKHOO[[	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y—ËÛÛXÚÎŠ
OO“JLJKÛ\ÜÓ˜[YNˆ™›^NËN][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH\ØX›Y›ÜXÚ]KML‹˜\šXK[X™[ˆ”™]\™\ˆ[™H[š]0êHHİØÚÈ‹Ú[™[ˆ¸¢$ˆŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆËMˆ^XÙ[\ˆ›Û[[Û›È^\ÛH^XZ[Û‹]^‹Ú[™[”_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y—ËÛÛXÚÎŠ
OO“JJKÛ\ÜÓ˜[YNˆ™›^NËN][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH\ØX›Y›ÜXÚ]KML‹˜\šXK[X™[ˆZ›İ]\ˆ[™H[š]0êH]HİØÚÈ‹Ú[™[ˆŠÈŸJW_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ”Û\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ”ØØ[›™\ˆ[ˆ]]™H\XÛHŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ•KÛ\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[ˆ•\›Z[™\ˆŸJW_JW_J_JJ
W_J_J_Y[˜İ[ÛˆØYJİ˜[Y\Î™KÛ”™XYNJ^ØÛÛœİ]‹\ÙT™YŠ™]ÈX\
K]‹\ÙT™YŠ
NÜ™]\›ˆ‹˜İ\œ™[]‹\ÙQY™™Xİ


OOÛ]OHLKÏLØÛÛœİÏ\™\]Y\İ[š[X][Û‘œ˜[YJ

OOÜÏ\™\]Y\İ[š[X][Û‘œ˜[YJ

OOÚYŠJ\™]\›ØÛÛœİÏ[™]ÈX\ÙK™›Ü‘XXÚ
OØÛÛœİ\‹˜İ\œ™[™Ù]

NÚYŠŠ]^ØËœÙ]
‹Ñ]UT“
š[XYÙKÜ™ÈŠJ_XØ]Úß_JK‹˜İ\œ™[
Ê_J_JNÜ™]\›Š
OOØOHLØ[˜Ù[[š[X][Û‘œ˜[YJÊKØ[˜Ù[[š[X][Û‘œ˜[YJÊ__KÙWJKKšœŞ
™]ˆ‹È˜\šXKZY[ˆˆLİ[NÜÜÚ][Ûˆ™š^Y‹Ü‹NNNNKY‹NNNNKÚYŒZYÚŒİ™\™›İÎˆšY[ˆŸKÚ[™[™K›X\
OOšKšœŞ
Uİ˜[YN˜KÚ^™NŒ]™[ˆ“H‹X\™Ú[”Ú^™NŒK™YœÏOÜ‹˜İ\œ™[œÙ]
KÊ__KJJ_J_Y[˜İ[ÛˆØYJJ^ØÛÛœİV×NÜ™]\›ˆK™›Ü‘XXÚ
OÜ‹˜\šX[\Ë›[™İOOLİœ\Ú
ÚÙ^Nœ‹šY\•˜[YN“
‹šY
K™YÛÙN”
‹šY
K]Nœ‹››ÛKİØÚÎœ‹œİØÚßJNœ‹˜\šX[\Ë™›Ü‘XXÚ
Oİœ\Ú
ÚÙ^N˜	Ü‹šYN‰Û‹šYX\•˜[YNšÛJ‹šY
K™YÛÙN”
‹šY
K]N›‹›X™[KİX]Nœ‹››ÛKİØÚÎ›‹œİØÚßJ_J_JKY[˜İ[ÛˆYJÜ›ÙXİÎ™K™\Ù]ÎÛ“X[˜YÙT™\Ù]Îœ‹Û”™\Ù]\ÙY›‹ÛÛÜÙN˜_J^ØÛÛœİÏ]‹\ÙSY[[Ê

OOšØYJJKÙWJKÏ]‹\ÙSY[[Ê

OOœË›X\
ÏO•Ëœ\•˜[YJKÜ×JKØËO]‹\ÙTİ]J™]ÈX\
K]‹\ÙPØ[˜XÚÊÏO™
ÊK×JKÚO]‹\ÙTİ]J

OO“Øš™Xİ™œ›ÛQ[šY\ÊË›X\
ÏO–ÕËšÙ^KWJJJKØ‹×O]‹\ÙTİ]J

OO›[™İOOLÛ[–Ë‹‹KœÛÜ


OOØÛÛœİOQ™\›šY\™Wİ][\Ø][Û—Ø]Û™]È]J™\›šY\™Wİ][\Ø][Û—Ø]
K™Ù][YJ
NŒÜ™]\›Š™\›šY\™Wİ][\Ø][Û—Ø]Û™]È]J™\›šY\™Wİ][\Ø][Û—Ø]
K™Ù][YJ
NŒ
KT_JVÌKšY
K×Ë—O]‹\ÙTİ]JLJKÔË×O]‹\ÙTİ]JLJKXËœÚ^™O[Ë›[™İÙ[˜İ[ÛˆÊË
^Ş
OŠË‹‹’Õ×N“X]›X^
X]™›ÛÜŠ[X™\‹š\Ñš[š]J
OÑŒ
J_JJ_Y[˜İ[ÛˆŠ
^Ş
ÏOØÛÛœİ^Ë‹‹•ßNÜ™]\›ˆË™›Ü‘XXÚ
OÒœİØÚÈOO[[	‰ŠÒšÙ^WOSX]›X^
œİØÚÊJ_JKJ_Y[˜İ[ÛˆŠ
^Ş
Øš™Xİ™œ›ÛQ[šY\ÊË›X\
ÏO–ÕËšÙ^KWJJJ_Y[˜İ[Ûˆ
Ê^ØÛÛœİXË™Ù]
Ëœ\•˜[YJNÜ™]\›ˆŞÜ\‘]U\›‘™YÛÙN•Ëœ™YÛÙK]N•Ë]KİX]N•ËœİX]_N›[Y[˜İ[ÛˆJÊ^ÓŠL
Nİ^ØÛÛœİ\Ë›X\

K™š[\ŠO’OO[[
NÕÏOOHœš[ÙØYJ
NYJ
_Yš[˜[^ÓŠLJ__X\Ş[˜È[˜İ[ÛˆJÊ^ØÛÛœİ]™š[™
O’šYOOXŠNÚYŠ
^ÚÊL
Nİ^ØÛÛœİ\Ë›X\
YOOØÛÛœİOT
YJNÜ™]\›ˆOŞË‹‹œK]NšØYKšÙ^WOÏÌN›[JK™š[\ŠYOO˜YHOO[[	‰˜YKœ]OŒ
KO^ÜYÙS\™Ù]\“[N‘œYÙWÛ\™Ù]\—Û[KYÙR]]]\“[N‘œYÙWÚ]]]\—Û[KX\™ÙR]][N‘›X\™ÙWÚ]]Û[KX\™ÙQØ]XÚS[N‘›X\™ÙWÙØ]XÚWÛ[K]\]Y]S\™Ù]\“[N‘™]\]Y]WÛ\™Ù]\—Û[K]\]Y]R]]]\“[N‘™]\]Y]WÚ]]]\—Û[KÛÛÛ›™\Î‘˜ÛÛÛ›™\ËYÛ™\Î‘›YÛ™\Ë\ÜXÙRÜš^›Û[[N‘™\ÜXÙWÚÜš^›Û[Û[K\ÜXÙU™\XØ[[N‘™\ÜXÙWİ™\XØ[Û[_KOX]\]Y]\ËIÑ››ÛKœ™\XÙJÖ×˜K^ŒNWJËÙÚK‹HŠKÓİÙ\Ø\ÙJ
_œ[˜ÚHŸKœ˜ÕÏOOHœš[Ğ’JKJN‰JKJK]ØZ]™œ›ÛJ›X™[Ü™\Ù]ÈŠK\]JÙ\›šY\™Wİ][\Ø][Û—Ø]›™]È]J
KÒTÓÔİš[™Ê
_JK™\JšY‹šY
K]ØZ]Š
_Yš[˜[^ÚÊLJ___XÛÛœİO\Ëœ™YXÙJ
Ë
OO•ÊÊÑšÙ^WOÏÌ
K
NÜ™]\›ˆKšœŞÊ‹İ]NˆÛÙ\È	ˆ0ê]\]Y]\È‹ÛÛÜÙN˜KÚ[™[–ÚKšœŞ
ØYKİ˜[Y\Î›ËÛ”™XYN™ŸJKË›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y\ÚY›Ü™\‹XZ[Û‹X›Ü™\ˆMKMˆ^XÙ[\ˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆZ›İ]^ˆ	ØX›Ü™\È›ÙZ]Èİ\ˆğê[°ê\™\ˆ\ÈÛÙ\ËˆŸJNšKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMH‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ“\İHH°êY°ê\™[˜ÙHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^^È^XZ[Û‹[]]Y‹Ú[™[ˆ•[ˆˆ]™XÈHÛÙHHÚ\]YHÛÛXš[˜Z\ÛÛ‹[™HÙ][H›Ú\È8 %0èØ\™\ˆÛİ\ÈHXZ[ˆİ\ˆÛÛœİZ\™H[™HÛÛ[X[™H[ˆØØ[›˜[ˆŸJKÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO’Jœš[ŠK\ØX›Y—ËÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[–ÚKšœŞ
KØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK’[\š[Y\ˆ—_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO’J™İÛ›ØYŠK\ØX›Y—ËÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[–ÚKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK•0ê[0êXÚ\™Ù\ˆ—_JW_JNšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›YˆLÛ\ÜÓ˜[YNˆ˜‹YÚÜİËY[‹Ú[™[–ÚKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK”°ê\\˜][Ûˆ\ÈÛÙ\ø )ˆ—_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”[˜ÚH0è[\š[Y\ˆ]ÛÛ\ˆŸJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœ‹Û\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\LH^^È›Û[YY][H^XZ[Û‹[]]Yİ™\^XZ[Û‹YÛÛ‹Ú[™[–ÚKšœŞ
•‹ØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JK‘ğê\™\ˆ\È›Ü›X]È—_JW_JK›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y\ÚY›Ü™\‹XZ[Û‹X›Ü™\ˆLÈKM^XÙ[\ˆ^^È^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›Ü›X][œ™YÚ\İ°êKˆÜ°êY^‹Y[ˆ[ˆİ\ˆ[\š[Y\ˆ[™H[˜ÚH8 %[Y[œÚ[ÛœÈXœ™\ËšY[ˆ‰Ù\İ[\ÜğêKˆŸJNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^^È^XZ[Û‹[]]Y‹Ú[™[ˆ‘›Ü›X]ŸJKKšœŞ
œÙ[Xİ‹İ˜[YN˜ÏÈˆ‹ÛÚ[™ÙN•ÏOÊË\™Ù]˜[Y_[
KÛ\ÜÓ˜[YNˆ™šY[Z[œ]X‹LÈ‹Ú[™[›X\
ÏOšKšœŞÊ›Ü[Ûˆ‹İ˜[YN•ËšYÚ[™[–ÕË››ÛKˆ
‹Ë˜ÛÛÛ›™\Ë°åÈ‹Ë›YÛ™\ËŠH—_KËšY
J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ›^›^]Ü˜\Ø\Lˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ”‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆL‹HKLH^VÌL\H›Û[YY][H^XZ[Û‹[]]Yİ™\^XZ[Û‹]^‹Ú[™[ˆ”™[\\ˆ]™XÈHİØÚÈ\ÜÛšX›HŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ•‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆL‹HKLH^VÌL\H›Û[YY][H^XZ[Û‹[]]Yİ™\^XZ[Û‹]^‹Ú[™[ˆŒH^[\Z\™HÚXİ[ˆŸJW_JKKšœŞ
[‹ØÛ\ÜÓ˜[YNˆ›X^ZMÜXÙK^KLHİ™\™›İË^KX]]È›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLKH‹Ú[™[œË›X\
ÏOšKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆLKHKLH‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È›Û[YY][H^XZ[Û‹]^‹Ú[™[•Ë]_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^VÌL\H^XZ[Û‹[]]Y‹Ú[™[–ÕËœİX]OØ	ÕËœİX]_H0­Èˆˆ‹ËœİØÚÏOO[[È››ÛˆİZ]šH˜	ÕËœİØÚßH[ˆİØÚØ_JW_JKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YNšÕËšÙ^WOÏÌÛÚ[™ÙN‘OÊËšÙ^K\œÙR[
\™Ù]˜[YKL
JKÛ\ÜÓ˜[YNˆ™šY[Z[œ]ËLMˆÚš[šËLLˆKLH^\šYÚ^^ÈŸJW_KËšÙ^JJ_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LÈX‹LKH^VÌL\H^XZ[Û‹[]]Y‹Ú[™[–ÓKˆ0ê]\]Y]H‹OŒOÈœÈˆˆ‹ˆ]Hİ[—_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO•Jœš[ŠK\ØX›YˆUßOOOLÛ\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[–ÚKšœŞ
KØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JKÏÈ‘ğê[°ê\˜][Û¸ )ˆˆ’[\š[Y\ˆ—_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO•J™İÛ›ØYŠK\ØX›YˆUßOOOLÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[–ÚKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK•0ê[0êXÚ\™Ù\ˆ—_JW_JW_JW_JW_JW_J_XÛÛœİÏ^Û›ÛNˆˆ‹]\]Y]S\™Ù]\“[NˆŒÈ‹]\]Y]R]]]\“[NˆŒÎ‹ÛÛÛ›™\ÎˆŒÈ‹YÛ™\ÎˆÈ‹X\™ÙR]][Nˆ‹X\™ÙQØ]XÚS[Nˆ‹\ÜXÙRÜš^›Û[[NˆŒ‹\ÜXÙU™\XØ[[NˆŒ‹YÙS\™Ù]\“[NˆŒŒL‹YÙR]]]\“[NˆŒMÈŸKXYOVŞÛX™[ˆŒŒH0ê]\]Y]\È8 %ŒËH0åÈÎH[H
›Ü›X]Mİ[™\™
H‹˜[Y\ÎÛ›ÛNˆŒŒH0ê]\]Y]\È
ŒËH0åÈÎH[JH‹]\]Y]S\™Ù]\“[NˆŒËH‹]\]Y]R]]]\“[NˆŒÎŒH‹ÛÛÛ›™\ÎˆŒÈ‹YÛ™\ÎˆÈ‹X\™ÙR]][NˆŒMKŒMH‹X\™ÙQØ]XÚS[NˆKÍH‹\ÜXÙRÜš^›Û[[NˆŒ‹\ÜXÙU™\XØ[[NˆŒ‹YÙS\™Ù]\“[NˆŒŒL‹YÙR]]]\“[NˆŒMÈŸ_KÛX™[ˆHZ[šKpê]\]Y]\È8 %ÎH0åÈŒKˆ[H
›Ü›X]Mİ[™\™
H‹˜[Y\ÎÛ›ÛNˆHZ[šKpê]\]Y]\È
ÎH0åÈŒKˆ[JH‹]\]Y]S\™Ù]\“[NˆŒÎŒH‹]\]Y]R]]]\“[NˆŒŒKŒˆ‹ÛÛÛ›™\ÎˆH‹YÛ™\ÎˆŒLÈ‹X\™ÙR]][NˆŒLÈ‹X\™ÙQØ]XÚS[NˆKÍH‹\ÜXÙRÜš^›Û[[NˆŒ‹\ÜXÙU™\XØ[[NˆŒ‹YÙS\™Ù]\“[NˆŒŒL‹YÙR]]]\“[NˆŒMÈŸ_WNÙ[˜İ[Ûˆ˜YJJ^Ü™]\›Û›ÛN™K››ÛK]\]Y]S\™Ù]\“[N”İš[™ÊK™]\]Y]WÛ\™Ù]\—Û[JK]\]Y]R]]]\“[N”İš[™ÊK™]\]Y]WÚ]]]\—Û[JKÛÛÛ›™\Î”İš[™ÊK˜ÛÛÛ›™\ÊKYÛ™\Î”İš[™ÊK›YÛ™\ÊKX\™ÙR]][N”İš[™ÊK›X\™ÙWÚ]]Û[JKX\™ÙQØ]XÚS[N”İš[™ÊK›X\™ÙWÙØ]XÚWÛ[JK\ÜXÙRÜš^›Û[[N”İš[™ÊK™\ÜXÙWÚÜš^›Û[Û[JK\ÜXÙU™\XØ[[N”İš[™ÊK™\ÜXÙWİ™\XØ[Û[JKYÙS\™Ù]\“[N”İš[™ÊKœYÙWÛ\™Ù]\—Û[JKYÙR]]]\“[N”İš[™ÊKœYÙWÚ]]]\—Û[J__Y[˜İ[Ûˆ[
ÛX™[™K˜[YNÛÚ[™ÙNœ‹[YÙ\›HL_J^Ü™]\›ˆKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LH›ØÚÈ^^È^XZ[Û‹[]]Y‹Ú[™[™_JKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹İ\›ÈŒHˆ˜[H‹™\]Z\™YˆL˜[YNÛÚ[™ÙN˜OOœŠK\™Ù]˜[YJKÛ\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_J_Y[˜İ[ÛˆYJÜ™\Ù]Î™KÛÚ[™ÙYÛÛÜÙNœŸJ^ØÛÛœİÛ‹WO]‹\ÙTİ]J›\İŠKÜË×O]‹\ÙTİ]J[
KØËO]‹\ÙTİ]JÊKÙ‹O]‹\ÙTİ]JLJKŞ—O]‹\ÙTİ]J[
KİË×O]‹\ÙTİ]J[
NÙ[˜İ[ÛˆŠ
^ÛÊ[
K
ÊKŠ[
KJ™›Ü›HŠ_Y[˜İ[ÛˆÊŠ^ÛÊŠK
˜YJŠJKŠ[
KJ™›Ü›HŠ_Y[˜İ[ÛˆÊŠ^ÛÊ[
K
‹˜[Y\ÊKŠ[
KJ™›Ü›HŠ_Y[˜İ[Ûˆ
‹
^Ù
OOŠË‹‹’KÕ—N”JJ_X\Ş[˜È[˜İ[ÛˆÊŠ^Õ‹œ™]™[Y˜][

NØÛÛœİXË››ÛKš[J
NÚYŠT
^ØŠ‘Û›™^ˆ[ˆ›ÛH0èÙH›Ü›X]ˆŠNÜ™]\›ŸXÛÛœİOROØÛÛœİO\\œÙQ›Ø]
œ™\XÙJ‹‹‹ˆŠJNÜ™]\›ˆ[X™\‹š\Ñš[š]JJOÔN“˜SŸKO^Û›ÛN”]\]Y]WÛ\™Ù]\—Û[N’JË™]\]Y]S\™Ù]\“[JK]\]Y]WÚ]]]\—Û[N’JË™]\]Y]R]]]\“[JKÛÛÛ›™\Î“X]œ›İ[™
JË˜ÛÛÛ›™\ÊJKYÛ™\Î“X]œ›İ[™
JË›YÛ™\ÊJKX\™ÙWÚ]]Û[N’JË›X\™ÙR]][JKX\™ÙWÙØ]XÚWÛ[N’JË›X\™ÙQØ]XÚS[JK\ÜXÙWÚÜš^›Û[Û[N’JË™\ÜXÙRÜš^›Û[[JK\ÜXÙWİ™\XØ[Û[N’JË™\ÜXÙU™\XØ[[JKYÙWÛ\™Ù]\—Û[N’JËœYÙS\™Ù]\“[JKYÙWÚ]]]\—Û[N’JËœYÙR]]]\“[J_KOVÕK™]\]Y]WÛ\™Ù]\—Û[KK™]\]Y]WÚ]]]\—Û[KK˜ÛÛÛ›™\ËK›YÛ™\ËKœYÙWÛ\™Ù]\—Û[KKœYÙWÚ]]]\—Û[WKÏVÕK›X\™ÙWÚ]]Û[KK›X\™ÙWÙØ]XÚWÛ[KK™\ÜXÙWÚÜš^›Û[Û[KK™\ÜXÙWİ™\XØ[Û[WNÚYŠKœÛÛYJOˆS[X™\‹š\Ñš[š]J
_L
_ËœÛÛYJOˆS[X™\‹š\Ñš[š]J
_
J^ØŠ•°ê\šYšY^ˆ\È[Y[œÚ[ÛœÈØZ\ÚY\È
›ÛXœ™\ÈÜÚ]YœÈÈ\È\ÜXÙ[Y[È]X\™Ù\È]]™[0ê™H0è
KˆŠNÜ™]\›ŸZ
L
KŠ[
Nİ^ÚYŠÊ^ØÛÛœİÙ\œ›Ü’OX]ØZ]™œ›ÛJ›X™[Ü™\Ù]ÈŠK\]JJK™\JšY‹ËšY
NÚYŠ
]›İÈY[Ù^ØÛÛœİÙ\œ›Ü’OX]ØZ]™œ›ÛJ›X™[Ü™\Ù]ÈŠKš[œÙ\
JNÚYŠ
]›İÈX]ØZ]

KJ›\İŠ_XØ]ÚØŠ’[\ÜÜÚX›H	Ù[œ™YÚ\İ™\ˆÙH›Ü›X]ˆŠ_Yš[˜[^Ú
LJ__X\Ş[˜È[˜İ[ÛˆŠŠ^×Ê‹šY
KŠ[
Nİ^ØÛÛœİÙ\œ›Ü”OX]ØZ]™œ›ÛJ›X™[Ü™\Ù]ÈŠK™[]J
K™\JšY‹‹šY
NÚYŠ
]›İÈØ]ØZ]

_XØ]ÚØŠ’[\ÜÜÚX›HHİ\š[Y\ˆÙH›Ü›X]ˆŠ_Yš[˜[^×Ê[
__\™]\›ˆOOH™›Ü›HÚKšœŞ
‹İ]NœÏÈ“[ÙYšY\ˆH›Ü›X]ˆ“›İ]™X]H›Ü›X]	ğê]\]Y]H‹ÛÛÜÙNŠ
OO˜J›\İŠKÚ[™[šKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]ËÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ“›ÛHH›Ü›X]ŸJKKšœŞ
š[œ]‹İ\Nˆ^‹™\]Z\™YˆL˜[YN˜Ë››ÛKÛÚ[™ÙN•O•
››ÛH‹‹\™Ù]˜[YJKXÙZÛ\ˆ‘^ˆ[˜ÚHğåÍË0ê]\]Y]\È›Û™\È[x )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]‹]]Ñ›Øİ\ÎˆLJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ‘[Y[œÚ[ÛœÈ	İ[™H0ê]\]Y]H
[JHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[–ÚKšœŞ
[ÛX™[ˆ“\™Ù]\ˆ‹˜[YN˜Ë™]\]Y]S\™Ù]\“[KÛÚ[™ÙN•O•
™]\]Y]S\™Ù]\“[H‹Š_JKKšœŞ
[ÛX™[ˆ’]]]\ˆ‹˜[YN˜Ë™]\]Y]R]]]\“[KÛÚ[™ÙN•O•
™]\]Y]R]]]\“[H‹Š_JW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ‘Üš[Hİ\ˆH[˜ÚHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[–ÚKšœŞ
[ÛX™[ˆÛÛÛ›™\È‹˜[YN˜Ë˜ÛÛÛ›™\ËÛÚ[™ÙN•O•
˜ÛÛÛ›™\È‹ŠK[YÙ\ˆLJKKšœŞ
[ÛX™[ˆ“YÛ™\È‹˜[YN˜Ë›YÛ™\ËÛÚ[™ÙN•O•
›YÛ™\È‹ŠK[YÙ\ˆLJW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ“X\™Ù\ÈHHYÙH
[JHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[–ÚKšœŞ
[ÛX™[ˆ’]]‹˜[YN˜Ë›X\™ÙR]][KÛÚ[™ÙN•O•
›X\™ÙR]][H‹Š_JKKšœŞ
[ÛX™[ˆ‘Ø]XÚH‹˜[YN˜Ë›X\™ÙQØ]XÚS[KÛÚ[™ÙN•O•
›X\™ÙQØ]XÚS[H‹Š_JW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ‘\ÜXÙ[Y[[™H0ê]\]Y]\È
[JHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[–ÚKšœŞ
[ÛX™[ˆ’Üš^›Û[‹˜[YN˜Ë™\ÜXÙRÜš^›Û[[KÛÚ[™ÙN•O•
™\ÜXÙRÜš^›Û[[H‹Š_JKKšœŞ
[ÛX™[ˆ•™\XØ[‹˜[YN˜Ë™\ÜXÙU™\XØ[[KÛÚ[™ÙN•O•
™\ÜXÙU™\XØ[[H‹Š_JW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ‘›Ü›X]HHYÙH
[JHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LKH‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÕ
œYÙS\™Ù]\“[H‹ŒŒLŠK
œYÙR]]]\“[H‹ŒMÈŠ_KÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆLˆKLH^VÌL\H^XZ[Û‹[]]Yİ™\^XZ[Û‹]^‹Ú[™[ˆMŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÕ
œYÙS\™Ù]\“[H‹ŒŒMKHŠK
œYÙR]]]\“[H‹ŒÎKŠ_KÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆLˆKLH^VÌL\H^XZ[Û‹[]]Yİ™\^XZ[Û‹]^‹Ú[™[ˆ“]\ˆŸJW_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[–ÚKšœŞ
[ÛX™[ˆ“\™Ù]\ˆ‹˜[YN˜ËœYÙS\™Ù]\“[KÛÚ[™ÙN•O•
œYÙS\™Ù]\“[H‹Š_JKKšœŞ
[ÛX™[ˆ’]]]\ˆ‹˜[YN˜ËœYÙR]]]\“[KÛÚ[™ÙN•O•
œYÙR]]]\“[H‹Š_JW_JW_JK	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ™Ë\™YMLMKLÈ^\ÛH^\™YMÌ‹Ú[™[JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈLˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO˜J›\İŠKÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y™‹Û\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[™È‘[œ™YÚ\İ™[Y[8 )ˆˆ‘[œ™YÚ\İ™\ˆŸJW_JW_J_JNšKšœŞ
‹İ]Nˆ‘›Ü›X]È	ğê]\]Y]\È‹ÛÛÜÙNœ‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[ˆÚ\]YH›Ü›X]0êXÜš][™H[˜ÚH\Ú\]YHˆ[Y[œÚ[ÛœÈ	İ[™H0ê]\]Y]KÛÛÛ›™\ËÛYÛ™\ËX\™Ù\È]\ÜXÙ[Y[ˆ[œ™YÚ\İ™^‹Y[ˆ\ÚY]\œÈİ\ˆÚ[™Ù\ˆH\Y\ˆØ[œÈİ]™\ÜØZ\Ú\‹ˆŸJKK›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y\ÚY›Ü™\‹XZ[Û‹X›Ü™\ˆMKMˆ^XÙ[\ˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›Ü›X][œ™YÚ\İ°êHİ\ˆ	Ú[œİ[ˆŸJNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[™K›X\
OšKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[•‹››Û_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[–Õ‹˜ÛÛÛ›™\Ëˆ0åÈ‹‹›YÛ™\Ëˆ0­È0ê]\]Y]H‹‹™]\]Y]WÛ\™Ù]\—Û[Kˆ0åÈ‹‹™]\]Y]WÚ]]]\—Û[K°¨[H0­ÈYÙH‹‹œYÙWÛ\™Ù]\—Û[Kˆ0åÈ‹‹œYÙWÚ]]]\—Û[K°¨[H—_JW_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”ÊŠKÛ\ÜÓ˜[YNˆ™›^NËNÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹YÛÛÌLİ™\^XZ[Û‹YÛÛYY\‹˜\šXK[X™[ˆ“[ÙYšY\ˆH›Ü›X]‹Ú[™[šKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_J_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”ŠŠK\ØX›YÏOOU‹šYÛ\ÜÓ˜[YNˆ™›^NËNÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ\ØX›Y›ÜXÚ]KML‹˜\šXK[X™[ˆ”İ\š[Y\ˆH›Ü›X]‹Ú[™[šKšœŞ
ÌKØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_J_JW_K‹šY
J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLKH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆÛÛ[Y[˜Ù\ˆ]™XÈ[ˆ[Ù0êHÛİ\˜[ŸJKXYK›X\
OšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOšÊŠKÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y\ÚY›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLÈKLˆ^[Y^^È^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜›Ü™\‹XZ[Û‹YÛÛİ™\^XZ[Û‹]^‹Ú[™[–Õ‹›X™[KšœŞ
ËØÛ\ÜÓ˜[YNˆšLËHËLËHÚš[šËL‹İ›ÚÙUÚYŒŸJW_K‹›X™[
JW_JK	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ™Ë\™YMLMKLÈ^\ÛH^\™YMÌ‹Ú[™[JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ“‹Û\ÜÓ˜[YNˆ˜‹\š[X\HËY[‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒŸJK“›İ]™X]H›Ü›X]—_JW_J_J_Y[˜İ[Ûˆ˜YJÚÙ^WÎ™KÛ“ØÚÎJ^ØÛÛœİÜ‹—O]‹\ÙTİ]J›Ü™\œÈŠKØK×O]‹\ÙTİ]J×JKÛË×O]‹\ÙTİ]J×JKÙ—O]‹\ÙTİ]J×JKÚO]‹\ÙTİ]JL
KØ‹×O]‹\ÙTİ]J[
K×Ë—O]‹\ÙTİ]J
KÔË×O]‹\ÙTİ]J˜[ŠKÕ×O]‹\ÙTİ]J˜[ŠKÔ‹—O]‹\ÙTİ]J[
KÔWO]‹\ÙTİ]J[
KÕKWO]‹\ÙTİ]J[
KÕËO]‹\ÙTİ]J×JKÒWO]‹\ÙTİ]J˜ÛÜÙYŠKÛKYWO]‹\ÙTİ]JLJKÜK™WO]‹\ÙTİ]JˆŠKİKO]‹\ÙTİ]JLJKÓ™KÙWO]‹\ÙTİ]JLJKÑ‹—O]‹\ÙTİ]J[
KÖ‹YWO]‹\ÙTİ]J[
KÚYKÙWO]‹\ÙTİ]J[
KĞÙKWO]‹\ÙTİ]J™]ÈÙ]
KÓÙKO]‹\ÙTİ]JLJKØÙKYWO]‹\ÙTİ]JˆŠKÜÙWO]‹\ÙTİ]JLJKÙ]O]‹\ÙTİ]JLJKÑ]YWO]‹\ÙTİ]JLJKÖO]‹\ÙTİ]JLJNİ‹\ÙQY™™Xİ


OOİ˜]]™Ù]Ù\ÜÚ[ÛŠ
K[Š
Ù]N™_JOOİ˜\ˆ™K]Ê]J™OP™KœÙ\ÜÚ[ÛŠOO[[İ›ÚY‘™K\Ù\ŠHO[[	‰™]™[XZ[	‰”YJ™KœÙ\ÜÚ[Û‹\Ù\‹™[XZ[
_J_K×JNØÛÛœİ]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOŞ
L
KÊ[
Nİ^ØÛÛœİĞ™K™K]İOX]ØZ]›ÛZ\ÙK˜[
İ™œ›ÛJ›Ü™\œÈŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]‹Ø\ØÙ[™[™ÎˆL_JK™œ›ÛJœ›ÙXİÈŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]‹Ø\ØÙ[™[™ÎˆL_JK™œ›ÛJœ[ÜHŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]‹Ø\ØÙ[™[™ÎˆL_JK™œ›ÛJ›Ü™\—Ú][\ÈŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]‹Ø\ØÙ[™[™ÎˆLJK™œ›ÛJ›X™[Ü™\Ù]ÈŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]‹Ø\ØÙ[™[™ÎˆL_JWJNÚYŠ™K™\œ›ÜŠ]›İÈ™K™\œ›ÜÚYŠ™K™\œ›ÜŠ]›İÈ™K™\œ›ÜÚYŠ]™\œ›ÜŠ]›İÈ]™\œ›ÜÚYŠİ™\œ›ÜŠ]›İÈİ™\œ›ÜÑ
™\œ›ÜÖ×N™]OÏÖ×JNØÛÛœİÙOJ™K™]OÏÖ×JK›X\
ÙOOŠË‹‹‘ÙKÜ[Û—ÙÜ›İ\Î‘ÙK›Ü[Û—ÙÜ›İ\ÏÏÖ×K˜\šX[\ÎŠÙK˜\šX[\ÏÏÖ×JK›X\
İOŠË‹‹—İİ×Ü]—İœİ×Ü]ÏÛ[İ×Ú]—İœİ×Ú]ÏÛ[İ×ÛZ[YN—İœİ×ÛZ[YOÏÛ[JJKİØÚÎ‘ÙKœİØÚÏÏÛ[JJKİ[™]ÈX\Ù›ÜŠÛÛœİÙHÙˆÙJ\İœÙ]
ÙKšYÙJNÛ]LØÛÛœİ[™]ÈX\V×NÙ›ÜŠÛÛœİÙHÙˆ]™]OÏÖ×J]^ØÛÛœİ×İYKYK™WOX]ØZ]›ÛZ\ÙK˜[
×ÛŠKÙK›˜[YWØÚ\\^ÙK›˜[YWÚ]ŠKÛŠKÙKœÛ™WØÚ\\^ÙKœÛ™WÚ]ŠKÙKœ™Y™\™[˜ÙWØÚ\\^×ÛŠKÙKœ™Y™\™[˜ÙWØÚ\\^ÙKœ™Y™\™[˜ÙWÚ]ÏÈˆŠN”›ÛZ\ÙKœ™\ÛÛ™JˆŠKÙKš[œİYÜ˜[WØÚ\\^×ÛŠKÙKš[œİYÜ˜[WØÚ\\^ÙKš[œİYÜ˜[WÚ]ÏÈˆŠN”›ÛZ\ÙKœ™\ÛÛ™JˆŠKÙKœÛ˜\Ú]ØÚ\\^×ÛŠKÙKœÛ˜\Ú]ØÚ\\^ÙKœÛ˜\Ú]Ú]ÏÈˆŠN”›ÛZ\ÙKœ™\ÛÛ™JˆŠWJKÙO^Ë‹‹‘ÙK˜[YN—İÛ™N–™Y™\™[˜ÙN“YK[œİYÜ˜[NœYKÛ˜\Ú]›™_NÔœ\Ú
ÙJKœÙ]
ÙKšYÙJ_XØ]ÚØ
ÊßYŠ
NØÛÛœİ][™]ÈX\Ù›ÜŠÛÛœİÙHÙˆİ™]OÏÖ×J^ØÛÛœİİQÙKœ›ÙXİÚYÜİ™Ù]
ÙKœ›ÙXİÚY
N›ÚY^Ë‹‹‘ÙK›ÙXİ˜[YNŠİO[[İ›ÚY—İ››ÛJOÏÑÙK™\ØÜš\[Û—Ü\œÛÛ›˜[\ÙYOÏÈ”›ÙZ]İ\š[pêH‹›ÙXİİÔ]ŠİO[[İ›ÚY—İœİ×Ü]
OÏÛ[›ÙXİİÒ]ŠİO[[İ›ÚY—İœİ×Ú]ŠOÏÛ[›ÙXİİÓZ[YNŠİO[[İ›ÚY—İœİ×ÛZ[YJOÏÛ[KYOU]™Ù]
ÙK›Ü™\—ÚY
OÏÖ×NÓYKœ\Ú

K]œÙ]
ÙK›Ü™\—ÚYYJ_[]OLØÛÛœİİV×NÙ›ÜŠÛÛœİÙHÙˆ™K™]OÏÖ×J]^ØÛÛœİİX]ØZ]ÛŠKÙK˜Y™\ÜÙWÛ]œ˜Z\ÛÛ—ØÚ\\^ÙK˜Y™\ÜÙWÛ]œ˜Z\ÛÛ—Ú]ŠKQÙK›[Y\›×ÜİZ]šWØÚ\\^Ø]ØZ]ÛŠKÙK›[Y\›×ÜİZ]šWØÚ\\^ÙK›[Y\›×ÜİZ]šWÚ]ÏÈˆŠNˆˆ‹YOY™Ù]
ÙKœ\œÛÛ—ÚY
KYOU]™Ù]
ÙKšY
OÏÖ×K™O\YKœ™YXÙJ
ÙKYJOO›ÙJĞYKœ]X[]JYKœš^İ[š]Z\™K
NĞİœ\Ú
Ë‹‹‘ÙK\œÛÛ“˜[YNŠYOO[[İ›ÚY“YK›˜[YJOÏÈ¸ %‹][\ÎœYK[Û[›™KY™\ÜÎ—İ[Y\›×ÜİZ]šN–J_XØ]ÚÑJÊß\Êİ
KÊÙJKŠ
ÑJ_XØ]ÚİÊ’[\ÜÜÚX›HHÚ\™Ù\ˆ›ÜÈÛ›°êY\ÈÛÛ[Y\˜ÙKˆŠ_Yš[˜[^Ş
LJ__KÙWJNİ‹\ÙQY™™Xİ


OOÕ

_KÕJNØÛÛœİ]]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOØÛÛœİÙ]N™K\œ›Ü‘™_OX]ØZ]™œ›ÛJ›X™[Ü™\Ù]ÈŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]‹Ø\ØÙ[™[™ÎˆL_JNÑ™_
™OÏÖ×J_K×JNİ‹\ÙQY™™Xİ


OOÛËœ™YÚ\İ\ŠØÜ™X]TØÚY[NŠ
OOßKÜ™X]QXÜŠ
OOßKÜ™X]T›ÙXİŠ
OOÒŠ[
KÙJL
_KÜ™X]SÜ™\Š
OO–
L
KÜ™X]T^[Y[Ø\\™NŠ
OOßKÜ™X]R[\ÜŠ
OOßKÜ™X]PÛÛXİŠ
OOßKÜ™X]U\ÚÎŠ
OOß_JNØÛÛœİ™O[Ë˜ÛÛœİ[YT[™[™Ê
NÜ™]\›ˆ™OOOHœ›ÙXİ‰‰—ÙJL
K™OOOH›Ü™\ˆ‰‰–
L
K

OO›Ë[œ™YÚ\İ\Š
_K×JNØÛÛœİœXK™š[\Š™OOÚYŠÈOOH˜[‰‰™Kœİ]]OOTÊ\™]\›ˆLNØÛÛœİ™O\KÓİÙ\Ø\ÙJ
Kš[J
NÜ™]\›ˆ™OĞ™Kœ\œÛÛ“˜[YKÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê™J_™Kš][\ËœÛÛYJ]O™]œ›ÙXİ˜[YKÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê™JJ_™K›[Y\›×ÜİZ]šKÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê™JNˆLJKİ]‹\ÙSY[[Ê

OOœœ‹›X\
™OO™KšY
KÜœ—JKSÙI‰”İ›[™İŒ	‰”İ™]™\J™OOÙKš\Ê™JJKÜSÙI‰ÙKœÚ^™OŒ	‰ˆTÙ[˜İ[Ûˆ
™J^Ü™]\›ˆ™K˜\šX[\Ë›[™İŒĞ™K˜\šX[\ËœÛÛYJ™OO‘™KœİØÚÏOOL
N™KœİØÚÏOOLY[˜İ[Ûˆ
™J^ÚYŠ™K˜\šX[\Ë›[™İŒ
^ØÛÛœİ™OP™K˜\šX[\Ë™š[\ŠOœİØÚÈOO[[
NÚYŠ™K›[™İOOL
\™]\›ÛX™[ˆ”İØÚÈ›ÛˆİZ]šH‹Û™Nˆ››Û™HŸNØÛÛœİ]Q™K™š[\ŠOœİØÚÏOOL
K›[™İÚYŠ]Œ
\™]\›ÛX™[˜	Ù]H˜\šX[IÙ]ŒOÈœÈˆˆŸH[ˆ\\™XÛ™Nˆ›İ]ŸNØÛÛœİİQ™K™š[\ŠOœİØÚÏŒ	‰œİØÚÏRN
K›[™İÜ™]\›ˆİŒŞÛX™[˜	ØİH˜\šX[IØİŒOÈœÈˆˆŸH[ˆİØÚÈ˜\ØÛ™Nˆ›İÈŸNÛX™[ˆ‘[ˆİØÚÈ‹Û™Nˆ›ÚÈŸ_\™]\›ˆ™KœİØÚÏOO[[ŞÛX™[ˆ”İØÚÈ›ÛˆİZ]šH‹Û™Nˆ››Û™HŸN™KœİØÚÏOOLŞÛX™[ˆ”\\™HHİØÚÈ‹Û™Nˆ›İ]ŸN™KœİØÚÏRNŞÛX™[˜	Ğ™KœİØÚßH[ˆİØÚØÛ™Nˆ›İÈŸNÛX™[˜	Ğ™KœİØÚßH[ˆİØÚØÛ™Nˆ›ÚÈŸ_X\Ş[˜È[˜İ[Ûˆİ
™K™J^ÚYŠ™K˜\šX[\Ë›[™İŒ™KœİØÚÏOO[[
\™]\›ØÛÛœİ]SX]›X^
™KœİØÚÊÑ™JKÙ\œ›Ü˜İOX]ØZ]™œ›ÛJœ›ÙXİÈŠK\]JÜİØÚÎ™]JK™\JšY‹™KšY
NØİÊO›X\
ÙOO•ÙKšYOOP™KšYŞË‹‹•ÙKİØÚÎ™]N•ÙJJ_X\Ş[˜È[˜İ[Ûˆ
™K™K]
^ÚYŠ™J^ØÛÛœİÙOP™K˜\šX[\Ë™š[™
O”šYOOQ™JNÚYŠUÙ_ÙKœİØÚÏOO[[
\™]\›ˆ[ØÛÛœİİSX]›X^
ÙKœİØÚÊÙ]
KP™K˜\šX[\Ë›X\
O”šYOOQ™OŞË‹‹”İØÚÎœİN”
KÙ\œ›Ü™OX]ØZ]™œ›ÛJœ›ÙXİÈŠK\]Jİ˜\šX[\Î˜JK™\JšY‹™KšY
NÜ™]\›ˆÛ[ŠÊO”›X\
]O•]šYOOP™KšYŞË‹‹•]˜\šX[\Î˜N•]
JKİ
_ZYŠ™KœİØÚÏOO[[
\™]\›ˆ[ØÛÛœİİSX]›X^
™KœİØÚÊÙ]
KÙ\œ›ÜOX]ØZ]™œ›ÛJœ›ÙXİÈŠK\]JÜİØÚÎ˜İJK™\JšY‹™KšY
NÜ™]\›ˆÛ[ŠÊÙOO•ÙK›X\
İOœİšYOOP™KšYŞË‹‹œİİØÚÎ˜İNœİ
JKİ
_XÛÛœİ[Ë™š[\Š™OO•OOH˜[Ÿ
™JJK]‹\ÙSY[[Ê

OOØÛÛœİ™OV×NÙ›ÜŠÛÛœİ™HÙˆÊZYŠ™K˜\šX[\Ë›[™İŒ
Y›ÜŠÛÛœİ]Ùˆ™K˜\šX[\ÊY]œİØÚÏOOL	‰™Kœ\Ú
ÚÙ^N˜	Ñ™KšYN‰Ù]šYX›ÙXİ‘™K˜\šX[N™]JNÙ[ÙH™KœİØÚÏOOL	‰™Kœ\Ú
ÚÙ^N‘™KšY›ÙXİ‘™K˜\šX[N›[JNÜ™]\›ˆ™_KÛ×JNÙ[˜İ[Ûˆİ
™J^ÒŠ™JKÙJL
_\™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹ZVÌLšH‹Ú[™[–ÚKšœŞ
™Ù^YXœ›İÎˆ”İY[È‹]NšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÈÛÛ[Y\˜ÙH‹ˆ‹KšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ^VÌL‹\H›Û\Ø[œÈ][XÈ^]Ú]KÍÌY^VÌLÜH‹Ú[™[ˆœ›Ü[ÙYHZ[ÛˆÔÈŸJW_JK]P\šXSX™[ˆÛÛ[Y\˜ÙH‹İX]N˜	ØK›[™İHÛÛ[X[™IØK›[™İŒOÈœÈˆˆŸH0­È	ÛË›[™İH›ÙZ]	ÛË›[™İŒOÈœÈˆˆŸXJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›^Ø\LˆMH‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹ÛÛÛXÚÎŠ
OO›Š›Ü™\œÈŠKÛ\ÜÓ˜[YN˜›İ[™YXˆ›Ü™\ˆLÈKLKH^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÜOOH›Ü™\œÈÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛˆ˜›Ü™\‹XZ[Û‹YÛÛÌŒ™ËXZ[Û‹YÛÛÍH^XZ[Û‹YÛÛÍHİ™\^XZ[Û‹YÛÛÍÌŸXÚ[™[ˆÛÛ[X[™\ÈŸJKKšœŞ
˜]Ûˆ‹ÛÛÛXÚÎŠ
OO›Šœ›ÙXİÈŠKÛ\ÜÓ˜[YN˜›İ[™YXˆ›Ü™\ˆLÈKLKH^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÜOOHœ›ÙXİÈÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛˆ˜›Ü™\‹XZ[Û‹YÛÛÌŒ™ËXZ[Û‹YÛÛÍH^XZ[Û‹YÛÛÍHİ™\^XZ[Û‹YÛÛÍÌŸXÚ[™[ˆØ][ÙİYHŸJW_JKKšœŞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆœMH‹LMH‹Ú[™[–ÈZ	‰ˆX‰‰—ÏŒ	‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ^^È^VÈĞÎPLŒ×H‹Ú[™[–È¸¦¨‹Ëˆ0ê[0ê[Y[‹ÏŒOÈœÈˆˆ‹ˆ‰È‹ÏŒOÈ›Ûˆ˜H‹ˆ\ÈH0ê™HÚ\™ğêH‹ÏŒOÈœÈˆˆ‹ˆ
Û›°êY\È[\ÚX›\ÊKˆ—_JKÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[–ÌK—K›X\
™OOšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™LŒ[š[X]K\[ÙHŸK™JJ_JN˜ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™Mˆ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^\™YMŒ‹Ú[™[˜ŸJKKšœŞ
˜]Ûˆ‹ÛÛÛXÚÎ•Û\ÜÓ˜[YNˆ˜‹YÚÜİ]M‹Ú[™[ˆ”°êY\ÜØ^Y\ˆŸJW_JNœOOH›Ü™\œÈÚKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HX‹M‹Ú[™[–ÚKšœŞ
ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YNœKÛÚ[™ÙN™OO˜™J™K\™Ù]˜[YJKXÙZÛ\ˆ”™XÚ\˜Ú\ˆ[™HÛÛ[X[™x )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]LLHŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹M›^Ø\Lˆİ™\™›İË^X]]È‹LH‹Ú[™[–ÚKšœŞ
›KÛX™[ˆ•İ]\È‹Xİ]™N”ÏOOH˜[‹ÛÛXÚÎŠ
OOšÊ˜[Š_JK›X\
™OOšKšœŞ
›KÛX™[šÎĞ™WKXİ]™N”ÏOOP™KÛÛXÚÎŠ
OOšÊ™JKXİ]™PÛ\ÜÓ˜[YN•Ğ™W_K™JJW_JKœ‹›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ›^›^XÛÛØ\LˆÛN™›^\›İÈÛN™›^]Ü˜\ÛNš][\ËXÙ[\ˆÛNš\İYKX™]ÙY[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆØ\LÈ‹Ú[™[–ÓÙI‰šKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ™›^İ\œÛÜ‹\Ú[\ˆ][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ˜ÚXÚØ›Ş‹ÚXÚÙY”™Y™OOĞ™I‰Š™Kš[™]\›Z[˜]O\Ü‰‰ˆT
_KÛÚ[™ÙNŠ
OOÓJ™OOØÛÛœİ™O[™]ÈÙ]
™JNÜ™]\›ˆÔİ™›Ü‘XXÚ
]O‘™K™[]J]
JN”İ™›Ü‘XXÚ
]O‘™K˜Y
]
JK™_J_KÛ\ÜÓ˜[YNˆšMËMİ\œÛÜ‹\Ú[\ˆ›İ[™Y›Ü™\‹XZ[Û‹X›Ü™\ˆXØÙ[XZ[Û‹\š[X\HŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^XZ[Û‹[]]Y‹Ú[™[ˆ•İ]ğê[Xİ[Û›™\ˆŸJW_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛ
™OOˆP™JKJ™]ÈÙ]
K
LJ_KÛ\ÜÓ˜[YN˜›İ[™YXˆ›Ü™\ˆLÈKLˆ^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÓÙOÈ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹]^ˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[“ÙOÈ[›[\ˆHğê[Xİ[Ûˆˆ”ğê[Xİ[Û›™\ˆŸJW_JKÙI‰ÙKœÚ^™OŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HËY[ÛNËX]]È‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOš
™OOˆP™JKÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈKLˆ^^È›Û[YY][H^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙKÍŒÛNËX]]È‹Ú[™[–ÚKšœŞÊœÜ[ˆ‹ØÚ[™[–ÈXİ[ÛœÈ
‹ÙKœÚ^™KŠH—_JKKšœŞ
KØÛ\ÜÓ˜[YN˜LËHËLËH^XZ[Û‹[]]Y˜[œÚ][Û‹]˜[œÙ›Ü›H	ÖÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JK	‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š^Y[œÙ]L‹LŒ‹ÛÛXÚÎŠ
OOš
LJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]HYLšYÚL‹LÌ]LHİ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHÚYİË\ÛÙ[ÈÛN›YX]]ÈÛNœšYÚLÛNËM‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y™]ÛÛXÚÎ˜\Ş[˜Ê
OOÚ
LJK]
L
Nİ^ØÛÛœİ™O\œ‹™š[\Š™OOÙKš\Ê™KšY
JNØ]ØZ]›ÛZ\ÙK˜[
™K›X\
™OOØÛÛœİ]]ØYJ™Kœİ]]
NÜ™]\›ˆ]İ™œ›ÛJ›Ü™\œÈŠK\]JÜİ]]™]JK™\JšY‹™KšY
N”›ÛZ\ÙKœ™\ÛÛ™JÙ\œ›Ü›[J_JJK]ØZ]

KJ™]ÈÙ]
_Yš[˜[^Ø]
LJ__KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LˆLÈKL‹H^[Y^^È›Û[YY][H^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹YÛÛÍH\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
Õ‹ØÛ\ÜÓ˜[YNˆšMËMÚš[šËL^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JKÈ“Z\ÙH0è›İ\¸ )ˆˆ”\ÜÙ\ˆ0è	ğê]]İZ]˜[—_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y™]ÛÛXÚÎ˜\Ş[˜Ê
OOÚ
LJKYJL
Nİ^ØÛÛœİ™O\œ‹™š[\Š™OOÙKš\Ê™KšY
JNØ]ØZ]›ÛZ\ÙK˜[
™K›X\
™OOØÛÛœİ]X˜YJ™Kœİ]]
NÜ™]\›ˆ]İ™œ›ÛJ›Ü™\œÈŠK\]JÜİ]]™]JK™\JšY‹™KšY
N”›ÛZ\ÙKœ™\ÛÛ™JÙ\œ›Ü›[J_JJK]ØZ]

KJ™]ÈÙ]
_Yš[˜[^ÕYJLJ__KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LˆLÈKL‹H^[Y^^È›Û[YY][H^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹YÛÛÍH\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
•‹ØÛ\ÜÓ˜[YNˆšMËMÚš[šËL^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JK]È“Z\ÙH0è›İ\¸ )ˆˆ”™]™[š\ˆ0è	ğê]]°êXğêY[—_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^LÈ›Ü™\‹]›Ü™\‹XZ[Û‹X›Ü™\ˆŸJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y™]ÛÛXÚÎ˜\Ş[˜Ê
OOÚ
LJKÙJL
Nİ^ØÛÛœİ™O\œ‹™š[\ŠİOÙKš\ÊİšY
JK™O[™]ÈX\
›X\
İO–ØİšYİJJK]P™K›X\
İOØÛÛœİQ™K™Ù]
İœ\œÛÛ—ÚY
NÜ™]\›Ü™XÚ\Y[˜[YN˜İœ\œÛÛ“˜[YKY™\ÜÎ˜İ˜Y™\ÜË™Y™\™[˜ÙNŠO[[İ›ÚYœ™Y™\™[˜ÙJOÏØİšYœÛXÙJ
KÙZYÚ˜İœÚYËÙ[™\“˜[YN˜Ù_¸ %Ÿ_JNÛXYJ]
K]ØZ]›ÛZ\ÙK˜[
™K›X\
İO™œ›ÛJ›Ü™\œÈŠK\]JÜİ]]ˆ™ğê[°ê\°êYHŸJK™\JšY‹İšY
JJK]ØZ]

_Yš[˜[^ÙÙJLJ__KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LˆLÈKL‹H^[Y^^È›Û[YY][H^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹YÛÛÍH\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
YØÛ\ÜÓ˜[YNˆšMËMÚš[šËL^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JKÈ‘ğê[°ê\˜][Û¸ )ˆˆ‘ğê[°ê\™\ˆ\È0ê]\]Y]\È—_JW_JW_JW_JW_JKœ‹›[™İOOLÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆKLŒ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MH›^LŒËLŒ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXØ\™™ËXZ[Û‹\İ\™˜XÙHÚYİË\ÛÙ‹Ú[™[šKšœŞ
‹ØÛ\ÜÓ˜[YNˆšLLËLL^XZ[Û‹YÛÛÍL‹İ›ÚÙUÚYŒK_J_JKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^[È›Û\Ù[ZX›Û^XZ[Û‹]^‹Ú[™[ˆ]Xİ[™HÛÛ[X[™HŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKHX^]Ë^È^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆÜ°êY^ˆ›İ™H™[Zpê™HÛÛ[X[™Hİ\ˆİZ]œ™H›ÜÈ™[\È]^0êY][ÛœËˆŸJKKšœŞÊ˜]Ûˆ‹ÛÛÛXÚÎŠ
OO–
L
KÛ\ÜÓ˜[YNˆ˜‹\š[X\H]Mˆ‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒŸJK“›İ]™[HÛÛ[X[™H—_JW_JNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[œœ‹›X\
™OOØÛÛœİ™OU’VĞ™Kœİ]]K]PÙKš\Ê™KšY
KİP™Kš][\Ë›[™İOOLÈ]Xİ[ˆ›ÙZ]™Kš][\Ë›[™İOOLOÉ
™Kš][\ÖÌJN˜	É
™Kš][\ÖÌJ_H
ÉĞ™Kš][\Ë›[™İL_H]]™IĞ™Kš][\Ë›[™İLOŒOÈœÈˆˆŸXÜ™]\›ˆKšœŞ
›H‹ØÛ\ÜÓ˜[YNˆ˜Ø\™M‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\İ\\İYKX™]ÙY[ˆØ\LÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Z[‹]ËL›^LH][\Ë\İ\Ø\LÈ‹Ú[™[–ÓÙI‰šKšœŞ
š[œ]‹İ\Nˆ˜ÚXÚØ›Ş‹ÚXÚÙY™]ÛÛXÚÎOœİÜ›ÜYØ][ÛŠ
KÛÚ[™ÙNŠ
OOÓJOØÛÛœİÙO[™]ÈÙ]

NÜ™]\›ˆÙKš\Ê™KšY
OÕÙK™[]J™KšY
N•ÙK˜Y
™KšY
KÙ_J_KÛ\ÜÓ˜[YNˆ›]LHMËMÚš[šËLİ\œÛÜ‹\Ú[\ˆ›İ[™Y›Ü™\‹XZ[Û‹X›Ü™\ˆXØÙ[XZ[Û‹\š[X\H‹˜\šXK[X™[™]È‘0ê\ğê[Xİ[Û›™\ˆˆ”ğê[Xİ[Û›™\ˆŸJKKšœŞ
ØYKÚ][\Î™Kš][\ËÙ^WÎ™_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOˆSÙI‰™YJ™JKÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH^[Y‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H›Û[YY][H^XZ[Û‹]^‹Ú[™[™Kœ\œÛÛ“˜[Y_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH^XZ[Û‹[]]Y‹Ú[™[˜İJKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^XZ[Û‹[]]Y‹Ú[™[–ØÛÊ™K›[Û[
K™KœÚYÏØ0­È	Ğ™KœÚYßHØˆˆ—_JW_JW_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÚš[šËL^\šYÚ‹Ú[™[šKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YN˜[›[™KY›^][\ËXÙ[\ˆØ\LH›İ[™YY[›Ü™\ˆL‹HKLH^^È›Û[YY][H	ÕĞ™Kœİ]]_XÚ[™[–ÚKšœŞ
™KØÛ\ÜÓ˜[YNˆšLÈËLÈ‹İ›ÚÙUÚYŒK_JKÎĞ™Kœİ]]W_J_JW_J_K™KšY
_J_JW_JNšKšœŞ
K‘œ˜YÛY[ØÚ[™[›Ë›[™İOOLÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆKLŒ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MH›^LŒËLŒ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXØ\™™ËXZ[Û‹\İ\™˜XÙHÚYİË\ÛÙ‹Ú[™[šKšœŞ
ÛËØÛ\ÜÓ˜[YNˆšLLËLL^XZ[Û‹YÛÛÍL‹İ›ÚÙUÚYŒK_J_JKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^[È›Û\Ù[ZX›Û^XZ[Û‹]^‹Ú[™[ˆ]Xİ[ˆ›ÙZ]ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKHX^]Ë^È^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆZ›İ]^ˆ›İ™H™[ZY\ˆ›ÙZ]]™XÈ[™HİÈİ\ˆÛÛ[Y[˜Ù\ˆ0è™[™™KˆŸJKKšœŞÊ˜]Ûˆ‹ÛÛÛXÚÎŠ
OOÒŠ[
KÙJL
_KÛ\ÜÓ˜[YNˆ˜‹\š[X\H]Mˆ‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒŸJKZ›İ]\ˆ[ˆ›ÙZ]—_JW_JNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ›^›^]Ü˜\][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\Lˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[–ÚKšœŞ
›KÛX™[ˆ•İ\È‹Xİ]™N•OOH˜[‹ÛÛXÚÎŠ
OOÊ˜[Š_JKKšœŞ
›KÛX™[ˆ‘[ˆ\\™H‹Xİ]™N•OOHœ\\™H‹ÛÛXÚÎŠ
OOÊœ\\™HŠ_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËLØ\Lˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO˜YJL
KÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈKLKH^^È›Û[YY][H^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜›Ü™\‹XZ[Û‹YÛÛ‹Ú[™[–ÚKšœŞ
‹ØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JK”ØØ[›™\ˆ—_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”Jœš[ŠKÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈKLKH^^È›Û[YY][H^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜›Ü™\‹XZ[Û‹YÛÛ‹Ú[™[–ÚKšœŞ
KØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JKÛÙ\È	ˆ0ê]\]Y]\È—_JW_JW_JKOOHœ\\™HÒ›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœKLL^XÙ[\ˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›ÙZ][ˆ\\™HHİØÚËˆŸJNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[’›X\
™OOšKšœŞ
›H‹ØÚ[™[šKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOİ
™Kœ›ÙXİ
KÛ\ÜÓ˜[YNˆ˜Ø\™›^ËY[][\ËXÙ[\ˆØ\LÈLÈ^[Y‹Ú[™[–Ğ™K˜\šX[OÚKšœŞ
Ëİ˜\šX[N™˜Ê™K˜\šX[KÌ
™Kœ›ÙXİ›Ü[Û—ÙÜ›İ\ÊJKÙ^WÎ™KÚ^™NˆšLLHËLLHŸJNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLLHËLLHÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[šKšœŞ
ËÜ]™Kœ›ÙXİœİ×Ü]]™Kœ›ÙXİœİ×Ú]‹Z[YN™Kœ›ÙXİœİ×ÛZ[YKÙ^WÎ™KÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMHËMHŸJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^X[X™\‹MÌ[™K]›İYÚ‹Ú[™[™K˜\šX[OĞ™K˜\šX[K›X™[N™Kœ›ÙXİ››Û_JK™K˜\šX[I‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È^XZ[Û‹[]]Y‹Ú[™[™Kœ›ÙXİ››Û_JW_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÚš[šËL^^È›Û[YY][H^X[X™\‹MÌ‹Ú[™[ˆ”\\™HŸJW_J_K™KšÙ^JJ_JN™‹›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœKLL^XÙ[\ˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›ÙZ]ˆŸJNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[™‹›X\
™OOØÛÛœİ™OQ
™JK]TOOP™KšYİP™K˜\šX[\Ë›[™İŒXİ×ØYJ™K›Ü[Û—ÙÜ›İ\ÊN–×KÙOXİŞ’J™K˜\šX[\Ë™K›Ü[Û—ÙÜ›İ\ÊN›[Ü™]\›ˆKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ˜Ø\™İ™\™›İËZY[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO˜İ	‰•ŠİOœİOOP™KšYÛ[™KšY
K\ØX›YˆXİ˜\šXKY^[™Y™]Û\ÜÓ˜[YNˆ™›^Z[‹]ËL›^LH][\ËXÙ[\ˆØ\M^[Y‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLMËLMÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[›[™İŒÚKšœŞ
˜YKÜİÜÎÙ^WÎ™_JNšKšœŞ
ËÜ]™Kœİ×Ü]]™Kœİ×Ú]‹Z[YN™Kœİ×ÛZ[YKÙ^WÎ™KÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMˆËMˆŸJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H›Û[YY][H^XZ[Û‹]^‹Ú[™[™K››Û_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[˜ÛÊ™Kœš^
_JW_JKİ	‰šKšœŞ
KØÛ\ÜÓ˜[YN˜MËMÚš[šËL^XZ[Û‹[]]Y˜[œÚ][Û‹]˜[œÙ›Ü›H	Ù]Èœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JKKšœŞ
˜]Ûˆ‹ÛÛÛXÚÎŠ
OOİ
™JKÛ\ÜÓ˜[YNˆ™›^NHËNHÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹YÛÛÌLİ™\^XZ[Û‹YÛÛYY\‹˜\šXK[X™[ˆ“[ÙYšY\ˆH›ÙZ]‹]Nˆ“[ÙYšY\ˆH›ÙZ]‹Ú[™[šKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_J_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›^›^]Ü˜\][\ËXÙ[\ˆØ\LˆVÍ\™[WH‹Ú[™[–ÚKšœŞ
‹İÛ™N‘™KÛ™KX™[‘™K›X™[JK™K˜\šX[\Ë›[™İOOL	‰™KœİØÚÈOO[[	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\LH‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO•İ
™KLJKÛ\ÜÓ˜[YNˆ™›^MˆËMˆ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH‹˜\šXK[X™[ˆ”™]\™\ˆ[™H[š]0êHHİØÚÈ‹Ú[™[ˆ¸¢$ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO•İ
™KJKÛ\ÜÓ˜[YNˆ™›^MˆËMˆ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH‹˜\šXK[X™[ˆZ›İ]\ˆ[™H[š]0êH]HİØÚÈ‹Ú[™[ˆŠÈŸJW_JK™K˜\šX[\Ë›[™İOOL	‰šKšœŞ
ÙËİ˜[YN“
™KšY
KÛÛXÚÎŠ
OO“JÜ›ÙXİ™K˜\šX[N›[J_JW_JW_JK]	‰˜İ	‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLKH›Ü™\‹]›Ü™\‹XZ[Û‹X›Ü™\ˆM‹MLÈ‹Ú[™[•ÙOÕÙK™[šY\Ë›X\

İ˜[YNœİ][\Î˜JOOİ˜\ˆİØÛÛœİX	Ğ™KšYN‰ÜİXTOOY]JİUÙK˜^\Ë˜[]\”İÜÊOO[[İ›ÚYİÜİKOP™K›Ü[Û—ÙÜ›İ\Ë™š[\ŠÙOO‘ÙK›X™[š[J
I‰‘ÙKšYOOUÙK˜^\ËšY
NÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›İ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO’JÙOO‘ÙOOOYÛ[™
KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LÈLˆKLKH^[Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[–ÚKšœŞ
Ëİ˜\šX[NÜİ×Ü]Š]O[[İ›ÚY•]œİ×Ü]
OÏÛ[İ×Ú]Š]O[[İ›ÚY•]œİ×Ú]ŠOÏÛ[İ×ÛZ[YNŠ]O[[İ›ÚY•]œİ×ÛZ[YJOÏÛ[KÙ^WÎ™KÚ^™NˆšNËNŸJKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH[˜Ø]H^\ÛH^XZ[Û‹]^‹Ú[™[–ÕÙK˜^\Ë›X™[ˆˆ‹İ_JKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÚš[šËL^^È^XZ[Û‹[]]Y‹Ú[™[–Ø›[™İˆ‹›[™İŒOÈ˜[]\œÈˆ˜[]\ˆ—_JKKšœŞ
KØÛ\ÜÓ˜[YN˜LËHËLËHÚš[šËL^XZ[Û‹[]]Y˜[œÚ][Û‹]˜[œÙ›Ü›H	ÔÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JK	‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLH›Ü™\‹]›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙKÍŒLKH‹Ú[™[˜›X\
ÙOOØÛÛœİİQÙKœİØÚÏOOLRŒ
ÙKœİØÚÏOO[[Èˆ”İš[™ÊÙKœİØÚÊJKYOZÚÖÛ™WKYOQK›X\
™OO‘ÙK˜]šX]ÖÛ™KšYJK™š[\Š›ÛÛX[ŠKš›Ú[Šˆ0­ÈŠ_ÙK›X™[NÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LH‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOİ
™JKÛ\ÜÓ˜[YNˆ™›^Z[‹]ËL›^LH][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆLˆKLKH^[Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë]Ú]H‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜Z[‹]ËL›^LH[˜Ø]H^\ÛH	×İÈ^XZ[Û‹[]]Y[™K]›İYÚˆ^XZ[Û‹]^ŸXÚ[™[œY_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜Úš[šËL^^È	ÓY_XÚ[™[–^JW_JKKšœŞ
ÙËİ˜[YNšÛJÙKšY
KÛÛXÚÎŠ
OO“JÜ›ÙXİ™K˜\šX[N‘Ù_J_JW_KÙKšY
_J_JW_Kİ
_JN™K˜\šX[\Ë›X\
İOØÛÛœİ\İœİØÚÏOOLRŒ
İœİØÚÏOO[[Èˆ”İš[™ÊİœİØÚÊJKZÚÙÛ™WNÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LH‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOİ
™JKÛ\ÜÓ˜[YNˆ™›^Z[‹]ËL›^LH][\ËXÙ[\ˆØ\LÈ›İ[™YXˆLˆKLKH^[Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[–ÚKšœŞ
Ëİ˜\šX[N™˜ÊİÌ
™K›Ü[Û—ÙÜ›İ\ÊJKÙ^WÎ™KÚ^™NˆšNËNŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜Z[‹]ËL›^LH[˜Ø]H^\ÛH	ØÈ^XZ[Û‹[]]Y[™K]›İYÚˆ^XZ[Û‹]^ŸXÚ[™[œİ›X™[_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜Úš[šËL^^È	ÔXÚ[™[™^JW_JKKšœŞ
ÙËİ˜[YNšÛJİšY
KÛÛXÚÎŠ
OO“JÜ›ÙXİ™K˜\šX[NœİJ_JW_KİšY
_J_JW_K™KšY
_J_JW_J_JW_JKI‰šKšœŞ
XYKÜ[ÜN™›ÙXİÎ›ËÜ™\œÎ˜KÙ^WÎ™KY][™ÓÜ™\šYKÛÛÜÙNŠ
OOÖ
LJKÙJ[
_KÛ”Ø]™Y˜\Ş[˜Ê
OOÖ
LJKÙJ[
K]ØZ]

_KÛ”›ÙXİĞÚ[™ÙY•JK™I‰šKšœŞ
XYKÚÙ^WÎ™K›ÙXİ‘‹ÛÛÜÙNŠ
OO×ÙJLJKŠ[
_KÛ”Ø]™Y˜\Ş[˜Ê
OO×ÙJLJKŠ[
K]ØZ]

__JKI‰Š

OOØÛÛœİÜ›ÙXİ™K˜\šX[N‘™_OUK]Q™OÑ™KšY™KšYİQ™OÚÛJ™KšY
N“
™KšY
KQ™OÙ˜Ê™KÌ
™K›Ü[Û—ÙÜ›İ\ÊJNÜİ×Ü]™Kœİ×Ü]İ×Ú]™Kœİ×Ú]‹İ×ÛZ[YN™Kœİ×ÛZ[Y_KÙORŒ
™OÑ™KœİØÚÏOO[[Èˆ”İš[™Ê™KœİØÚÊN™KœİØÚÏOO[[Èˆ”İš[™Ê™KœİØÚÊJNÜ™]\›ˆKšœŞ
XYKÜ\•˜[YN˜İ™YÛÙN”
]
K]N‘™OÑ™K›X™[N™K››ÛKİX]N‘™OĞ™K››ÛN›ÚYšXÙN™Kœš^İÎİØÚÕÛ™N•ÙKÛ™KİØÚÓX™[•ÙK^Ù^WÎ™KÛÛÜÙNŠ
OO“J[
_J_JJ
KI‰šKšœŞ
ØYKÜ›ÙXİÎ›ËÙ^WÎ™KÛY\İİØÚÎÛÛÜÙNŠ
OO˜YJLJ_JKOOHœš[‰‰šKšœŞ
YKÜ›ÙXİÎ›Ë™\Ù]Î•ËÛ“X[˜YÙT™\Ù]ÎŠ
OO”Jœ™\Ù]ÈŠKÛ”™\Ù]\ÙY–]ÛÛÜÙNŠ
OO”J˜ÛÜÙYŠ_JKOOHœ™\Ù]È‰‰šKšœŞ
YKÜ™\Ù]Î•ËÛÚ[™ÙY–]ÛÛÜÙNŠ
OO”Jœš[Š_JK‰‰šKšœŞ
˜YKÛÜ™\–‹Ù^WÎ™K[ÜN™›ÙXİÎ›ËÙ[™\‘[XZ[˜ÙKÛÛÜÙNŠ
OO™YJ[
KÛ”Ø]™Y˜\Ş[˜Ê
OOØ]ØZ]

KYJ[
_KÛ‘Y]Š
OOÔÙJŠKYJ[
K
L
__JW_J_Y[˜İ[Ûˆ›JÛX™[™KXİ]™NÛÛXÚÎœ‹Xİ]™PÛ\ÜÓ˜[YN›ŸJ^Ü™]\›ˆKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœ‹Û\ÜÓ˜[YN˜Úš[šËL›İ[™YY[›Ü™\ˆLÈKLKH^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	İÛÏÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\ˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[™_J_Y[˜İ[ÛˆYJÜ[ÜN™K\İÜ™\Y™\ÜĞT\œÛÛ˜[YNœ‹ÛÚ[™ÙN›ŸJ^ØÛÛœİØK×O]‹\ÙTİ]JLJKÛË×O]‹\ÙTİ]JˆŠKYK™š[™
OšYOO\ŠK[ËÓİÙ\Ø\ÙJ
Kš[J
KYÙK™š[\ŠO›˜[YKÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊŠJN™NÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOœÊOˆ^
KÛ\ÜÓ˜[YNˆ™šY[Z[œ]›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ^[Y‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN™È^XZ[Û‹]^ˆ^XZ[Û‹[]]Y‹Ú[™[™Ø	Ù›˜[Y_H0­È	Ùœ™Y™\™[˜Ù_Xˆ”ğê[Xİ[Û›™\¸ )ˆŸJKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–Ù	‰šKšœŞ
œÜ[ˆ‹Ü›ÛNˆ˜]Ûˆ‹X’[™^ŒÛÛXÚÎOŞœİÜ›ÜYØ][ÛŠ
KŠˆŠ_KÛ’Ù^QİÛOÊšÙ^OOOH‘[\ˆŸšÙ^OOOHˆŠI‰ŠœİÜ›ÜYØ][ÛŠ
KŠˆŠJ_KÛ\ÜÓ˜[YNˆ™›^MHËMHÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[ˆ‘Y™˜XÙ\ˆHğê[Xİ[Ûˆ‹]Nˆ‘Y™˜XÙ\ˆHğê[Xİ[Ûˆ‹Ú[™[ˆ°åÈŸJKKšœŞ
KØÛ\ÜÓ˜[YNˆšMËMÚš[šËL^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JW_JW_JKI‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š^Y[œÙ]L‹M‹ÛÛXÚÎŠ
OOœÊLJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H‹ML]LHX^ZMÌˆËY[İ™\™›İË^KX]]È›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HÚYİË[È‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœİXÚŞHÜL›Ü™\‹Xˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLˆ‹Ú[™[šKšœŞ
š[œ]‹İ\Nˆ^‹]]Ñ›Øİ\ÎˆL˜[YN›ËÛÚ[™ÙNO˜Ê\™Ù]˜[YJKXÙZÛ\ˆ”™XÚ\˜Ú\ˆ\ˆ›Ûx )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJ_JK›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœLÈ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[™HÛY[H›İ]°êYKˆŸJNš›X\
OØÛÛœİ]™Ù]
šY
KÏVŞœÛ™K—K™š[\Š›ÛÛX[ŠKš›Ú[Šˆ0­ÈŠNÜ™]\›ˆKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛŠšY
KÊLJKÊˆŠ_KÛ\ÜÓ˜[YN˜›ØÚÈËY[›Ü™\‹Xˆ›Ü™\‹XZ[Û‹X›Ü™\ˆLÈKLˆ^[Y\İ˜›Ü™\‹X‹Lİ™\˜™ËXZ[Û‹\İ\™˜XÙH	ŞšYOO\È˜™ËXZ[Û‹YÛÛÌLˆˆŸXÚ[™[–ÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[–Ş›˜[YKˆ0­È‹œ™Y™\™[˜ÙW_JKÉ‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH[˜Ø]H^^È^XZ[Û‹[]]Y‹Ú[™[ßJW_KšY
_JW_JW_JW_J_Y[˜İ[Ûˆ˜YJÜ›ÙXİÎ™KÙ^WÎ˜[YNœ‹ÛÚ[™ÙN›ŸJ^ØÛÛœİØK×O]‹\ÙTİ]JLJKÛË×O]‹\ÙTİ]JˆŠKYK™š[™
OšYOO\ŠK[ËÓİÙ\Ø\ÙJ
Kš[J
KYÙK™š[\ŠO››ÛKÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊŠJN™NÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H›^LH‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOœÊOˆ^
KÛ\ÜÓ˜[YNˆ™šY[Z[œ]›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ^[Y‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN™È^XZ[Û‹]^ˆ^XZ[Û‹[]]Y‹Ú[™[™Ø	Ù››Û_H0­È	ØÛÊœš^
_Xˆ”ğê[Xİ[Û›™\ˆ[ˆ›ÙZ]8 )ˆŸJKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–Ù	‰šKšœŞ
œÜ[ˆ‹Ü›ÛNˆ˜]Ûˆ‹X’[™^ŒÛÛXÚÎOŞœİÜ›ÜYØ][ÛŠ
KŠˆŠ_KÛ’Ù^QİÛOÊšÙ^OOOH‘[\ˆŸšÙ^OOOHˆŠI‰ŠœİÜ›ÜYØ][ÛŠ
KŠˆŠJ_KÛ\ÜÓ˜[YNˆ™›^MHËMHÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[ˆ‘Y™˜XÙ\ˆHğê[Xİ[Ûˆ‹]Nˆ‘Y™˜XÙ\ˆHğê[Xİ[Ûˆ‹Ú[™[ˆ°åÈŸJKKšœŞ
KØÛ\ÜÓ˜[YNˆšMËMÚš[šËL^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JW_JW_JKI‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š^Y[œÙ]L‹M‹ÛÛXÚÎŠ
OOœÊLJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H‹ML]LHX^ZMÌˆËY[İ™\™›İË^KX]]È›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HÚYİË[È‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœİXÚŞHÜL›Ü™\‹Xˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HLˆ‹Ú[™[šKšœŞ
š[œ]‹İ\Nˆ^‹]]Ñ›Øİ\ÎˆL˜[YN›ËÛÚ[™ÙNO˜Ê\™Ù]˜[YJKXÙZÛ\ˆ”™XÚ\˜Ú\ˆ\ˆ›Ûx )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJ_JK›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœLÈ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›ÙZ]›İ]°êKˆŸJNš›X\
OšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛŠšY
KÊLJKÊˆŠ_KÛ\ÜÓ˜[YN˜›^ËY[][\ËXÙ[\ˆØ\LÈ›Ü™\‹Xˆ›Ü™\‹XZ[Û‹X›Ü™\ˆLÈKLˆ^[Y\İ˜›Ü™\‹X‹Lİ™\˜™ËXZ[Û‹\İ\™˜XÙH	ŞšYOO\È˜™ËXZ[Û‹YÛÛÌLˆˆŸXÚ[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšNHËNHÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ™ËXZ[Û‹X™È‹Ú[™[šKšœŞ
ËÜ]œİ×Ü]]œİ×Ú]‹Z[YNœİ×ÛZ[YKÙ^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMËM‹˜[˜XÚÒXÛÛ•ÛßJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[››Û_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[˜ÛÊœš^
_JW_JW_KšY
JW_JW_JW_J_Y[˜İ[ÛˆXYJÜ[ÜN™K›ÙXİÎÜ™\œÎœ‹Ù^WÎ›‹Y][™ÓÜ™\˜KÛÛÜÙNœËÛ”Ø]™Y›ËÛ”›ÙXİĞÚ[™ÙY˜ßJ^İ˜\ˆ]ØÛÛœİHHXKÙ‹O]‹\ÙTİ]J_K›[™İŒÈ™^\İ[™Èˆ›™]ÈŠKŞ—O]‹\ÙTİ]J
OO[[İ›ÚY˜Kœ\œÛÛ—ÚY
OÏÈˆŠKİË×O]‹\ÙTİ]JˆŠKÓ‹×O]‹\ÙTİ]JˆŠKÚËO]‹\ÙTİ]JˆŠKĞË—O]‹\ÙTİ]JˆŠKÕ‹O]‹\ÙTİ]JˆŠKÒKWO]‹\ÙTİ]JˆŠKÓK×O]‹\ÙTİ]JˆŠKÑO]‹\ÙTİ]J[
KÔKWO]‹\ÙTİ]J

OO˜OØKš][\Ë›X\
OOØÛÛœİİQKœ›ÙXİÚYİ™š[™
ÙOO‘ÙKšYOOQKœ›ÙXİÚY
OÏŞÚY‘Kœ›ÙXİÚY\Ù\—ÚY˜K\Ù\—ÚY›ÛN‘Kœ›ÙXİ˜[YKš^‘Kœš^İ[š]Z\™Kİ×Ü]‘Kœ›ÙXİİÔ]İ×Ú]‘Kœ›ÙXİİÒ]‹İ×ÛZ[YN‘Kœ›ÙXİİÓZ[YKÜ[Û—ÙÜ›İ\Î–×K˜\šX[\Î–×KİØÚÎ›[Ü™X]YØ]˜K˜Ü™X]YØ]N›[Ü™]\›ÚÙ^N˜	ÑKœ›ÙXİÚYÏÈ˜İ\İÛHŸKIÑ]K››İÊ
_KIÓX]œ˜[™ÛJ
_X›ÙXİİ\ØÜš\[Û”\œÛÛ›˜[\ÙYN‘K™\ØÜš\[Û—Ü\œÛÛ›˜[\ÙYOÏÛ[]X[]N‘Kœ]X[]K˜\šX[RY‘K˜\šX[WÚYÏÛ[˜\šX[PÚÚ\ÚYN‘K˜\šX[WØÚÚ\ÚYOÏÛ[š^[š]Z\™T\œÛÛ›˜[\ÙNİÛ[‘Kœš^İ[š]Z\™__JN–×JKØYKWO]‹\ÙTİ]JˆŠKØ™KWO]‹\ÙTİ]JŒHŠKÖ™WO]‹\ÙTİ]JˆŠK×ÙK—O]‹\ÙTİ]JLJKÒ‹—O]‹\ÙTİ]JˆŠKÙYKYWO]‹\ÙTİ]JˆŠKÔÙKÙWO]‹\ÙTİ]JLJKÓKÙWO]‹\ÙTİ]JßJKÛÙWO]‹\ÙTİ]JLJKÔYKO]‹\ÙTİ]JˆŠKÙÙKO]‹\ÙTİ]JˆŠKØ]]O]‹\ÙTİ]J
OO[[İ›ÚY˜K˜Y™\ÜÊOÏÈˆŠKÕYKO]‹\ÙTİ]JLJKÚO]‹\ÙTİ]J
OO[[İ›ÚY˜KœÚYÊHO[[Ôİš[™ÊKœÚYÊNˆˆŠKÖ]œ—O]‹\ÙTİ]JLJKÔİO]‹\ÙTİ]J[
KÜTKœ™YXÙJ
Kİ
OO‘JĞİœ]X[]JŠİœ›ÙXİĞİœ›ÙXİœš^İœš^[š]Z\™T\œÛÛ›˜[\ÙOÏÌ
K
K]‹\ÙSY[[Ê

OOØÛÛœİO[™]ÈX\Ù›ÜŠÛÛœİİÙˆŠHQKš\Êİœ\œÛÛ—ÚY
I‰İ˜Y™\ÜËš[J
I‰‘KœÙ]
İœ\œÛÛ—ÚYİ˜Y™\ÜÊNÜ™]\›ˆ_KÜ—JK]‹\ÙSY[[Ê

OOØÛÛœİO[™]ÈX\İVË‹‹œ—KœÛÜ

ÙKİ
OO›™]È]Jİ˜Ü™X]YØ]
K™Ù][YJ
K[™]È]JÙK˜Ü™X]YØ]
K™Ù][YJ
JNÙ›ÜŠÛÛœİÙHÙˆİ
^ØÛÛœİİQÙK˜Y™\ÜËš[J
NÚYŠWİ
XÛÛ[YNØÛÛœİQK™Ù]
ÙKœ\œÛÛ—ÚY
OÏÖ×NÖœÛÛYJYOO“YK˜Y™\ÜÏOOWİ
_œ\Ú
ØY™\ÜÎ—İ]N’YJÙK˜Ü™X]YØ]
Kİ[[X\N˜YJÙKš][\Ê_JKKœÙ]
ÙKœ\œÛÛ—ÚY
_\™]\›ˆ_KÜ—JKİ]‹\ÙSY[[Ê

OOØÛÛœİO]Ëš[J
KÓİÙ\Ø\ÙJ
NÜ™]\›ˆK›[™İÖ×N™K™š[\ŠİOİ›˜[YKÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊJJKœÛXÙJJ_KİËWJK]‹\ÙT™YŠ
Nİ‹\ÙQY™™Xİ


OOÚYŠˆOOH™^\İ[™ÈŸ^
\™]\›ØÛÛœİOYK™š[™
İOİšYOO^
NÕJ
OO[[İ›ÚY‘Kš[œİYÜ˜[JOÏÈˆŠKÊ
OO[[İ›ÚY‘KœÛ˜\Ú]
OÏÈˆŠK
[
K˜İ\œ™[Ş˜İ\œ™[HLNŠ]
ˆŠK
LJJ_KÙ‹WJNØÛÛœİ]™š[™
OO‘KšYOOXYJOÏÛ[J
O[[İ›ÚY™‹˜\šX[\Ë›[™İ
OÏÌ
OŒÙ[˜İ[Ûˆİ
Kİ
^ØÛÛœİÙOPİØ˜\šX[N‰ĞİX˜›ÙZ]‰ÑKšYXÚYŠÙH[ˆJ\™]\›ˆVÑÙWNÚYŠİ
^ØÛÛœİİQK˜\šX[\Ë™š[™
O–šYOOPİ
NÜ™]\›ˆİ×İœİØÚÎ›[\™]\›ˆKœİØÚßXÛÛœİ™OTK™š[\ŠOOÚYŠQKœ›ÙXİ
\™]\›ˆLNØÛÛœİİ]İ
Kœ›ÙXİK˜\šX[RY
NÚYŠİOO[[
\™]\›ˆLNØÛÛœİÙOY	‰˜OØKš][\Ë™š[\ŠİO—İœ›ÙXİÚYOOQKœ›ÙXİšY	‰—İ˜\šX[WÚYOOQK˜\šX[RY
Kœ™YXÙJ
İ
OO—İ
Öœ]X[]K
NŒÜ™]\›ˆKœ]X[]Oİ
ÑÙ_JK™OYÒÖİİ
‹
N›[İ
‹[
N›[]HHY‰‰ˆWÙI‰ŠÈHVˆL
I‰‘™OOOLİ[ÈHTYKš[J
I‰ˆHYÙNˆHXYI‰Š×ÙOÈHR‹š[J
NˆHVˆL
NØ\Ş[˜È[˜İ[Ûˆ

^ÚYŠYŠ\™]\›ØÛÛœİO\\œÙR[
YKL
NÚYŠJ[X™\‹š\Ó˜SŠJ_O
J^ĞÙJL
K
[
Nİ^ÚYŠ	‰–
^ØÛÛœİİY‹˜\šX[\Ë›X\
İO—İšYOOVŞË‹‹—İİØÚÎ‘_N—İ
KÙ\œ›Ü‘Ù_OX]ØZ]™œ›ÛJœ›ÙXİÈŠK\]Jİ˜\šX[\ÎİJK™\JšY‹‹šY
NÚYŠÙJ]›İÈÙNÓÙJİOŠË‹‹—İØ˜\šX[N‰ÖXN‘_JJ_Y[ÙHYŠR
^ØÛÛœİÙ\œ›ÜİOX]ØZ]™œ›ÛJœ›ÙXİÈŠK\]JÜİØÚÎ‘_JK™\JšY‹‹šY
NÚYŠİ
]›İÈİÓÙJÙOOŠË‹‹‘ÙKØ›ÙZ]‰Ù‹šYXN‘_JJ_ZYJˆŠK]ØZ]
ÏO[[İ›ÚY˜Ê
J_XØ]ÚÔ
’[\ÜÜÚX›HHÛÜœšYÙ\ˆHİØÚËˆŠ_Yš[˜[^ĞÙJLJ___X\Ş[˜È[˜İ[ÛˆÙJ
^ØÛÛœİOSX]›X^
K\œÙR[
™J_JNÚYŠ
^ØÛÛœİTYKš[J
KYO\\œÙQ›Ø]
ÙJ_ÚYŠV
\™]\›ÛJYOO–Ë‹‹œYKÚÙ^N˜İ\İÛKIÑ]K››İÊ
_X›ÙXİ›[\ØÜš\[Û”\œÛÛ›˜[\ÙYN–]X[]N‘K˜\šX[RY›[˜\šX[PÚÚ\ÚYN›[š^[š]Z\™T\œÛÛ›˜[\ÙN“Y_WJK
ˆŠK
ˆŠKJŒHŠNÜ™]\›ŸXÛÛœİİ]™š[™
O–šYOOXYJNÚYŠPİ
\™]\›Û]ÙO[[İ[[ÚYŠ
ZYŠÙJ^ØÛÛœİR‹š[J
NÚYŠV
\™]\›×İVY[Ù^ØÛÛœİPİ˜\šX[\Ë™š[™
YOO“YKšYOOV
NÚYŠV
\™]\›ÑÙOVšYİV›X™[_[JO–Ë‹‹–ÚÙ^N˜	ĞİšYKIÑ]K››İÊ
_X›ÙXİİ\ØÜš\[Û”\œÛÛ›˜[\ÙYN›[]X[]N‘K˜\šX[RY‘ÙK˜\šX[PÚÚ\ÚYN—İš^[š]Z\™T\œÛÛ›˜[\ÙN›[WJKJˆŠKJŒHŠK™JˆŠKŠLJKŠˆŠKYJˆŠ_Y[˜İ[Ûˆİ
J^ÛJİOİ™š[\ŠÙOO‘ÙKšÙ^HOOQJJ_Y[˜İ[Ûˆ
Kİ
^ÛJÙOO‘ÙK›X\
İO—İšÙ^OOOQOŞË‹‹—İ]X[]N“X]›X^
Kİ
_N—İ
J_Y[˜İ[Ûˆ
J^ÚYŠKœ™]™[Y˜][

KOOH™^\İ[™È‰‰ˆ^
^Ô
”ğê[Xİ[Û›™^ˆ[™HÛY[KˆŠNÜ™]\›ŸZYŠK›[™İOOL
^Ô
LJNÜ™]\›ŸZYŠOOH™^\İ[™È‰‰
^ØÛÛœİİYK™š[™
YOOœYKšYOO^
KÙORKš[J
KİSKš[J
KQÙHOOJ
İO[[İ›ÚYİš[œİYÜ˜[JOÏÈˆŠKYOWİOOJ
İO[[İ›ÚYİœÛ˜\Ú]
OÏÈˆŠNÚYŠYJ^Ò
İš[[YY[œİYÜ˜[N‘ÙKš[[YYÛ˜\Ú]—İ[œİYÜ˜[PÚ[™ÙY–Û˜\Ú]Ú[™ÙY“Y_JNÜ™]\›Ÿ_T
LJ_X\Ş[˜È[˜İ[Ûˆ
J^ÜœŠL
K
[
Nİ^ÚYŠK›[™İOOL
]›İÈ™]È\œ›ÜŠ››×Ú][\ÈŠNÛ]İ^ÚYŠOOH›™]ÈŠ^ÚYŠ]Ëš[J
J]›İÈ™]È\œ›ÜŠ›˜[YWÜ™\]Z\™YŠNÚYŠ‹š[J
I‰ˆV›Š‹š[J
JK˜ÛÛ\]J^Ô
“H[pê\›ÈH0ê[0ê\Û™HÚ][˜Û\™H[ˆ[™XØ]Yˆ[\›˜][Û˜[
^ˆ
ÌÌÊKˆŠKœŠLJNÜ™]\›ŸXÛÛœİ™OZËš[J
_ÓQIÑ]K››İÊ
KÔİš[™ÊÍŠKÕ\\Ø\ÙJ
KœÛXÙJMJ_XØÚ\\^›ÙK]Y_OX]ØZ]Š‹Ëš[J
JKØÚ\\^œK]‘ßOX]ØZ]Š‹‹š[J
JKØÚ\\^œ™K]œÙ_OX]ØZ]Š‹™JK™O^Ü™Y™\™[˜ÙWØÚ\\^œ™K™Y™\™[˜ÙWÚ]œÙK˜[YWØÚ\\^›ÙK˜[YWÚ]YKÛ™WØÚ\\^œKÛ™WÚ]‘ßKOPËš[J
NÚYŠJ^ØÛÛœİØÚ\\^™K]‰_OX]ØZ]Š‹JNÙ™Kš[œİYÜ˜[WØÚ\\^^™K™Kš[œİYÜ˜[WÚ]I_XÛÛœİ™OU‹š[J
NÚYŠ™J^ØÛÛœİØÚ\\^™K]‰_OX]ØZ]Š‹™JNÙ™KœÛ˜\Ú]ØÚ\\^^™K™KœÛ˜\Ú]Ú]I_XÛÛœİÙ]N–YK\œ›Ü–™_OX]ØZ]™œ›ÛJœ[ÜHŠKš[œÙ\
™JKœÙ[Xİ
šYŠKœÚ[™ÛJ
NÚYŠ™_VYJ]›İÈ™OÏÛ™]È\œ›ÜŠœ\œÛÛ—Ú[œÙ\Ù˜Z[YŠNĞİVYKšYY[ÙHYŠOOH™^\İ[™È‰‰	‰‘I‰‘
^ØÛÛœİİš[[YY[œİYÜ˜[N›™Kš[[YYÛ˜\Ú]›ÙK[œİYÜ˜[PÚ[™ÙYYKÛ˜\Ú]Ú[™ÙYœ_OQÏ^ßNÚYŠYJZYŠ™J^ØÛÛœİØÚ\\^œÙK]™™_OX]ØZ]Š‹™JNÑËš[œİYÜ˜[WØÚ\\^\ÙKËš[œİYÜ˜[WÚ]Y™_Y[ÙHËš[œİYÜ˜[WØÚ\\^[[Ëš[œİYÜ˜[WÚ][[ÚYŠJZYŠÙJ^ØÛÛœİØÚ\\^œÙK]™™_OX]ØZ]Š‹ÙJNÑËœÛ˜\Ú]ØÚ\\^\ÙKËœÛ˜\Ú]Ú]Y™_Y[ÙHËœÛ˜\Ú]ØÚ\\^[[ËœÛ˜\Ú]Ú][[ØÛÛœİÙ\œ›Üœ™_OX]ØZ]™œ›ÛJœ[ÜHŠK\]JÊK™\JšY‹
NÚYŠ™J]›İÈ™_ZYŠPİ
]›İÈ™]È\œ›ÜŠœ\œÛÛ—Ü™\]Z\™YŠNØÛÛœİØÚ\\^‘ÙK]—İOX]ØZ]Š‹]š[J
JNÛ]ÚYŠ	‰˜J^ØÛÛœİÙ\œ›Ü›™_OX]ØZ]™œ›ÛJ›Ü™\œÈŠK\]JÜ\œÛÛ—ÚYİY™\ÜÙWÛ]œ˜Z\ÛÛ—ØÚ\\^‘ÙKY™\ÜÙWÛ]œ˜Z\ÛÛ—Ú]—İÚYÎšÜ\œÙQ›Ø]

N›[JK™\JšY‹KšY
NÚYŠ™J]›İÈ™NÖXKšYØÛÛœİÙ\œ›Ü›Ù_OX]ØZ]™œ›ÛJ›Ü™\—Ú][\ÈŠK™[]J
K™\J›Ü™\—ÚY‹
NÚYŠÙJ]›İÈÙ_Y[Ù^ØÛÛœİÙ]N›™K\œ›Ü›Ù_OX]ØZ]™œ›ÛJ›Ü™\œÈŠKš[œÙ\
Ü\œÛÛ—ÚYİİ]]ˆ™[ˆ°ê\\˜][Ûˆ‹Y™\ÜÙWÛ]œ˜Z\ÛÛ—ØÚ\\^‘ÙKY™\ÜÙWÛ]œ˜Z\ÛÛ—Ú]—İÚYÎšÜ\œÙQ›Ø]

N›[[Y\›×ÜİZ]šWØÚ\\^›[[Y\›×ÜİZ]šWÚ]›[JKœÙ[Xİ
šYŠKœÚ[™ÛJ
NÚYŠÙ_[™J]›İÈÙOÏÛ™]È\œ›ÜŠ›Ü™\—Ú[œÙ\Ù˜Z[YŠNÖ[™KšYXÛÛœİYOTK›X\
™OOİ˜\ˆÙNÜ™]\›ÛÜ™\—ÚY–›ÙXİÚYŠ
ÙO[™Kœ›ÙXİ
OO[[İ›ÚY›ÙKšY
OÏÛ[]X[]N›™Kœ]X[]Kš^İ[š]Z\™N›™Kœ›ÙXİÛ™Kœ›ÙXİœš^›™Kœš^[š]Z\™T\œÛÛ›˜[\ÙOÏÌ\ØÜš\[Û—Ü\œÛÛ›˜[\ÙYN›™Kœ›ÙXİÛ[›™K™\ØÜš\[Û”\œÛÛ›˜[\ÙYK˜\šX[WÚY›™K˜\šX[RY˜\šX[WØÚÚ\ÚYN›™K˜\šX[PÚÚ\ÚY__JKÙ\œ›ÜœY_OX]ØZ]™œ›ÛJ›Ü™\—Ú][\ÈŠKš[œÙ\
YJNÚYŠYJ]›İÈYNÚYŠ	‰˜J^ØÛÛœİ™O[™]ÈX\ØKš][\Ë™›Ü‘XXÚ
ÏOÚYŠQËœ›ÙXİÚY
\™]\›ØÛÛœİ™O\ÊÜ›ÙXİY‘Ëœ›ÙXİÚY˜\šX[RY‘Ë˜\šX[WÚYJNÛ™KœÙ]
™K
™K™Ù]
™JOÏÌ
JÑËœ]X[]J_JNØÛÛœİÙO[™]ÈX\ÔK™›Ü‘XXÚ
ÏOÚYŠQËœ›ÙXİ
\™]\›ØÛÛœİ™O\ÊÜ›ÙXİY‘Ëœ›ÙXİšY˜\šX[RY‘Ë˜\šX[RYJNÛÙKœÙ]
™K
ÙK™Ù]
™JOÏÌ
JÑËœ]X[]J_JNØÛÛœİYO[™]ÈÙ]
Ë‹‹›™KšÙ^\Ê
K‹‹›ÙKšÙ^\Ê
WJKOP\œ˜^K™œ›ÛJYJK›X\
ÏOØÛÛœİÜ™KÙWOQËœÜ]
ˆŠNÜ™]\›Ü›ÙXİYœ™K˜\šX[RYœÙOOOHˆÛ[œÙK[NŠÙK™Ù]
ÊOÏÌ
KJ™K™Ù]
ÊOÏÌ
__JNØ]ØZ]
J_Y[Ù^ØÛÛœİ™OTK™š[\ŠÙOO›ÙKœ›ÙXİ
K›X\
ÙOOŠÜ›ÙXİY›ÙKœ›ÙXİšY˜\šX[RY›ÙK˜\šX[RY[N›ÙKœ]X[]_JJNØ]ØZ]
™J_X]ØZ]Ê
_XØ]ÚÔ
È’[\ÜÜÚX›H	Ù[œ™YÚ\İ™\ˆ\È[ÙYšXØ][ÛœËˆˆ’[\ÜÜÚX›HHÜ°êY\ˆHÛÛ[X[™KˆŠ_Yš[˜[^ÜœŠLJK
[
__\™]\›ˆKšœŞ
‹İ]N™È“[ÙYšY\ˆHÛÛ[X[™Hˆ“›İ]™[HÛÛ[X[™H‹ÛÛÜÙNœËÚ[™[šKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]™Û\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”\œÛÛ›™HŸJKK›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOš
™^\İ[™ÈŠKÛ\ÜÓ˜[YN˜›^LH›İ[™YXˆ›Ü™\ˆLÈKLˆ^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÙOOH™^\İ[™ÈÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\ˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]YŸXÚ[™[ˆ‘^\İ[ŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOš
›™]ÈŠKÛ\ÜÓ˜[YN˜›^LH›İ[™YXˆ›Ü™\ˆLÈKLˆ^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÙOOH›™]ÈÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\ˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]YŸXÚ[™[ˆ“›İ]™[HŸJW_JKOOH™^\İ[™ÈÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[–ÚKšœŞ
YKÜ[ÜN™K\İÜ™\Y™\ÜĞT\œÛÛ’˜[YNÛÚ[™ÙN˜ŸJK	‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN’KÛÚ[™ÙN‘OO•JK\™Ù]˜[YJKXÙZÛ\ˆ’[œİYÜ˜[H
Ü[Û›™[
H‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN“KÛÚ[™ÙN‘OO•ÊK\™Ù]˜[YJKXÙZÛ\ˆ”Û˜\Ú]
Ü[Û›™[
H‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_JW_JNšKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ^‹™\]Z\™YˆL˜[YNËÛÚ[™ÙN‘OO—ÊK\™Ù]˜[YJKXÙZÛ\ˆ“›ÛH‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJKİ›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLH›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍ™ËXZ[Û‹YÛÛÍHLˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœLH^^È›Û[YY][H^XZ[Û‹YÛÛYY\‹Ú[™[ˆÙ]HÛY[H^\İH]]pê™H0êZ°èˆŸJKİ›X\
OOØÛÛœİİR™Ù]
KšY
NÜ™]\›ˆKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÚ
™^\İ[™ÈŠKŠKšY
KÊˆŠKÊˆŠK
ˆŠKŠˆŠK
ˆŠ_KÛ\ÜÓ˜[YNˆ˜›ØÚÈËY[›İ[™YXˆLˆKLKH^[Y^^È^XZ[Û‹]^˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë]Ú]H‹Ú[™[–ÚKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›Û[YY][H‹Ú[™[–ÑK›˜[YKˆ0­È‹Kœ™Y™\™[˜ÙW_JKKœÛ™I‰šKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^XZ[Û‹[]]Y‹Ú[™[–Èˆ0­È‹KœÛ™W_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^VÌL\H^XZ[Û‹[]]Y‹Ú[™[İ]Xİ[™HÛÛ[X[™H\ÜğêYH8 %›Ø˜X›[Y[[™H0ê[0ê™HØ[œÈY[ˆ]™XÈÛÛ[Y\˜ÙHŸJW_KKšY
_JW_JKKšœŞ
šİ˜[YN“‹İ\œ™[Û™Nˆˆ‹ÛÚ[™ÙN”ËÚİÓX™[ˆL_JKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YNšËÛÚ[™ÙN‘OO•
K\™Ù]˜[YJKXÙZÛ\ˆ”°êY°ê\™[˜ÙH
Ü[Û›™[
H‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YNËÛÚ[™ÙN‘OO”ŠK\™Ù]˜[YJKXÙZÛ\ˆ’[œİYÜ˜[H
Ü[Û›™[
H‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN•‹ÛÚ[™ÙN‘OO”
K\™Ù]˜[YJKXÙZÛ\ˆ”Û˜\Ú]
Ü[Û›™[
H‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”›ÙZ]ÈŸJK›[™İŒÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOØÙJOOˆQJKJˆŠK™JˆŠKŠLJKŠˆŠKYJˆŠK
ˆŠK
ˆŠ_KÛ\ÜÓ˜[YN˜›^][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆLÈKLˆ^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÛÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\ˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[–ÚKšœŞ
ÛËØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JKÈ“[ÙHØ][ÙİYHˆ\XÛH\œÛÛ›˜[\ğêH
ÜœÈØ][ÙİYJH—_JKÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN”YKÛÚ[™ÙN‘OOœ
K\™Ù]˜[YJKXÙZÛ\ˆ“›ÛHH	Ø\XÛH‹Û\ÜÓ˜[YNˆ™šY[Z[œ]›^LH‹™\]Z\™YˆLJKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹İ\ˆŒŒH‹Z[ˆŒ‹˜[YN™ÙKÛÚ[™ÙN‘OO™
K\™Ù]˜[YJKXÙZÛ\ˆ”š^
8 «
H‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËL‹™\]Z\™YˆLJKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒH‹˜[YN˜™KÛÚ[™ÙN‘OOJK\™Ù]˜[YJKÛ\ÜÓ˜[YNˆ™šY[Z[œ]ËLŒ‹XÙZÛ\ˆ”]0êHŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ•ÙK\ØX›YˆXİÛ\ÜÓ˜[YNˆ˜‹\š[X\HÚš[šËLLÈ‹˜\šXK[X™[ˆZ›İ]\ˆ	Ø\XÛH‹]NˆZ›İ]\ˆ	Ø\XÛH‹Ú[™[šKšœŞ
ËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒŸJ_JW_JNšKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
˜YKÜ›ÙXİÎÙ^WÎ›‹˜[YN˜YKÛÚ[™ÙN‘OOÜJJK™JˆŠKŠLJKŠˆŠKYJˆŠ__JKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒH‹˜[YN˜™KÛÚ[™ÙN‘OOJK\™Ù]˜[YJKÛ\ÜÓ˜[YNˆ™šY[Z[œ]ËLŒ‹XÙZÛ\ˆ”]0êHŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ•ÙK\ØX›YˆXİÛ\ÜÓ˜[YNˆ˜‹\š[X\HÚš[šËLLÈ‹˜\šXK[X™[ˆZ›İ]\ˆH›ÙZ]‹]NˆZ›İ]\ˆH›ÙZ]‹Ú[™[šKšœŞ
ËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒŸJ_JW_JK‰‰Š]
I‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[–Ò	‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÈWÙI‰šKšœŞ
YKİ˜\šX[\Î™‹˜\šX[\ËÜ[Û‘Ü›İ\Î™‹›Ü[Û—ÙÜ›İ\Ë˜[YN–ÛÚ[™ÙN‘OOÓ™JJKYJˆŠ_KİØÚÑ›Ü‘OOİ
‹JKÙ^WÎ›ŸJKKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËLİ\œÛÜ‹\Ú[\ˆ][\ËXÙ[\ˆØ\LKH^^È^XZ[Û‹[]]Y‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ˜ÚXÚØ›Ş‹ÚXÚÙY—ÙKÛÚ[™ÙN‘OOÑŠK\™Ù]˜ÚXÚÙY
K™JˆŠKŠˆŠKYJˆŠ_KÛ\ÜÓ˜[YNˆšLËHËLËH›İ[™Y›Ü™\‹XZ[Û‹X›Ü™\ˆXØÙ[XZ[Û‹\š[X\HŸJK”\œÛÛ›˜[\ğêH—_JKÙI‰šKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN’‹ÛÚ[™ÙN‘OO–ŠK\™Ù]˜[YJKXÙZÛ\ˆ‘\ØÜš\[ÛˆHH˜\šX[x )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËY[‹]]Ñ›Øİ\ÎˆLJW_JK]	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹X[X™\‹LÌ™ËX[X™\‹MLL‹H‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^X[X™\‹N‹Ú[™[ˆ”\\™HHİØÚÈ8 %›İ\Èİ]™^ˆÛÛ[X[™\ˆ]X[™pê›YKˆŸJKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YN™YKÛÚ[™ÙN‘OOšYJK\™Ù]˜[YJKXÙZÛ\ˆ“›İ]™X]HİØÚÈ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËLŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ\ØX›Y”Ù_YKš[J
OOOHˆŸ[X™\‹š\Ó˜SŠ\œÙR[
YKL
JKÛ\ÜÓ˜[YNˆ˜‹YÚÜİÚš[šËLLÈ^^È\ØX›Y˜İ\œÛÜ‹[›İX[İÙY\ØX›Y›ÜXÚ]KM‹Ú[™[”ÙOÈÛÜœ™Xİ[Û¸ )ˆˆÛÜœšYÙ\ˆHİØÚÈŸJW_JW_JW_JW_JNšKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›ÙZ]\ÜÛšX›KˆZ›İ]^‹Y[ˆ	ØX›Ü™[œÈ	ÛÛ™Û]Ø][ÙİYKİH][\Ù^ˆ[ˆ\XÛH\œÛÛ›˜[\ğêKˆŸJKK›[™İŒ	‰šKšœŞ
[‹ØÛ\ÜÓ˜[YNˆ›]LÈÜXÙK^KLˆ‹Ú[™[”K›X\
OOØÛÛœİİQKœ›ÙXİÜXYJJN‘K™\ØÜš\[Û”\œÛÛ›˜[\ÙYOÏÈˆ‹ÙOQKœ›ÙXİÑKœ›ÙXİœš^‘Kœš^[š]Z\™T\œÛÛ›˜[\ÙOÏÌÜ™]\›ˆKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLLËLLÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ™ËXZ[Û‹X™È‹Ú[™[‘Kœ›ÙXİÊ

OOØÛÛœİİQK˜\šX[RYÑKœ›ÙXİ˜\šX[\Ë™š[™
ÙOO›ÙKšYOOQK˜\šX[RY
N›[WİÙ˜ÊİÌ
Kœ›ÙXİ›Ü[Û—ÙÜ›İ\ÊJN›[YOJO[[İ›ÚY–œİ×Ü]
OÏÑKœ›ÙXİœİ×Ü]YOJO[[İ›ÚY–œİ×Ú]ŠOÏÑKœ›ÙXİœİ×Ú]‹™OJO[[İ›ÚY–œİ×ÛZ[YJOÏÑKœ›ÙXİœİ×ÛZ[YNÜ™]\›ˆKšœŞ
ËÜ]“YK]œYKZ[YN›™KÙ^WÎ›‹Û\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMHËMH‹˜[˜XÚÒXÛÛ•ÛßJ_JJ
NšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Y[ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
ÛËØÛ\ÜÓ˜[YNˆšMHËMH^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_J_J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[–ĞİQKœ›ÙXİ	‰šKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›[LKH[›[™KY›^][\ËXÙ[\ˆ›İ[™YY[›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÌÌ™ËXZ[Û‹YÛÛÍHLKHKLH^VÌLH›Û[YY][H^XZ[Û‹YÛÛYY\‹Ú[™[ˆ”\œÛÛ›˜[\ğêHŸJW_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[–ØÛÊÙJKˆÈ[š]0êH—_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LH‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO˜
KšÙ^KKœ]X[]KLJKÛ\ÜÓ˜[YNˆ™›^MÈËMÈ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹[]]Yİ™\^XZ[Û‹]^‹Ú[™[ˆ¸¢$ˆŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆËN^XÙ[\ˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[‘Kœ]X[]_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO˜
KšÙ^KKœ]X[]JÌJKÛ\ÜÓ˜[YNˆ™›^MÈËMÈ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹[]]Yİ™\^XZ[Û‹]^‹Ú[™[ˆŠÈŸJW_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆËLŒ^\šYÚ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[˜ÛÊKœ]X[]J‘ÙJ_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOœİ
KšÙ^JKÛ\ÜÓ˜[YNˆ™›^MÈËMÈÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[ˆ”™]\™\ˆ‹]Nˆ”™]\™\ˆ‹Ú[™[šKšœŞ
ÌKØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_J_JW_KKšÙ^J_J_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ“[Û[İ[ŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^^›Û\Ù[ZX›Û^XZ[Û‹YÛÛYY\‹Ú[™[˜ÛÊÜŠ_JW_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^XZ[Û‹[]]Y‹Ú[™[ˆØ[İ[0êH]]ÛX]\]Y[Y[0è\\ˆ\È›ÙZ]ÈZ›İ]0ê\ËˆŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ‹Ú[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆY™\ÜÙHH]œ˜Z\ÛÛˆŸJK]	‰šKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO‘]
ˆŠKÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^XZ[Û‹[]]Yİ™\^\™YMŒ‹Ú[™[ˆ‘Y™˜XÙ\ˆŸJW_JKOOH™^\İ[™È‰‰	‰Š

]Q™Ù]

JOO[[İ›ÚY•]›[™İ
OÏÌ
OŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO–
OOˆQJKÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^XZ[Û‹YÛÛYY\[™\›[™K[Ù™œÙ]Lˆİ™\[™\›[™H‹Ú[™[–ÕYOÈ“X\Ü]Y\ˆˆ•›Ú\ˆ‹ˆ\ÈY™\ÜÙ\È°êXğêY[\È
‹™Ù]

K›[™İŠH—_JKYI‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LˆX^ZMÜXÙK^KLKHİ™\™›İË^KX]]È›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLˆ‹Ú[™[‘™Ù]

K›X\

Kİ
OOšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÑ]
K˜Y™\ÜÊK
LJ_KÛ\ÜÓ˜[YNˆ˜›ØÚÈËY[›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HL‹HKLKH^[Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜›Ü™\‹XZ[Û‹YÛÛİ™\˜™ËXZ[Û‹YÛÛÍH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È›Û[YY][H^XZ[Û‹]^‹Ú[™[‘K˜Y™\ÜßJKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LH[˜Ø]H^VÌL\H^XZ[Û‹[]]Y‹Ú[™[–ÑK™]KKœİ[[X\OØ0­È	ÑKœİ[[X\_Xˆˆ—_JW_Kİ
J_JW_JKKšœŞ
^\™XH‹Ü™\]Z\™YˆL˜[YN˜]ÛÚ[™ÙN‘OO‘]
K\™Ù]˜[YJKXÙZÛ\ˆY™\ÜÙHÛÛ\0êH‹Û\ÜÓ˜[YNˆ™šY[Z[œ]Z[‹ZVÎH™\Ú^™K^HŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”ÚYÈ
ÊHŸJKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YNšÛÚ[™ÙN‘OO•
K\™Ù]˜[YJKXÙZÛ\ˆ“Ü[Û›™[‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_JK™K›[™İŒ	‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHMKLÈ^^È^\›ÜÙKMÌ‹Ú[™[–È”İØÚÈ[œİY™š\Ø[İ\ˆ‹™K›X\
OO‘K˜\šX[PÚÚ\ÚYOØ	ÑKœ›ÙXİ››Û_H
	ÑK˜\šX[PÚÚ\ÚY_JX‘Kœ›ÙXİ››ÛJKš›Ú[Š‹ŠKˆ8 %HÛÛ[X[™H]]0ê™HÜ°êpêYH]X[™pê›YKHİØÚÈ\˜H0èˆ—_JKİ	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ™Ë\™YMLMKLÈ^\ÛH^\™YMÌ‹Ú[™[”İJKÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍ™ËXZ[Û‹YÛÛÍHM‹Ú[™[–ÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹]^‹Ú[™[–È“\È[™›Ü›X][ÛœÈHÙ]HÛY[HÛÚ[™ğêH‹š[œİYÜ˜[PÚ[™ÙY	‰‘œÛ˜\Ú]Ú[™ÙYÈˆ
[œİYÜ˜[H]Û˜\Ú]
H‘š[œİYÜ˜[PÚ[™ÙYÈˆ
[œİYÜ˜[JHˆˆ
Û˜\Ú]
H‹‹ˆY]™H0è›İ\ˆØHšXÚH]™XÈÙ\È›İ]™[\È[™›Ü›X][ÛœÈÈ—_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”
LJK\ØX›Y–]Û\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ“›Û‹Ø\™\ˆ[\È]Y[\ÈŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”
L
K\ØX›Y–]Û\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[–]È‘[œ™YÚ\İ™[Y[8 )ˆˆ“İZKY]™H0è›İ\ˆŸJW_JW_JNšKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈLˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœËÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y–]K›[™İOOLÛ\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[–]È‘[œ™YÚ\İ™[Y[8 )ˆ™È‘[œ™YÚ\İ™\ˆ\È[ÙYšXØ][ÛœÈˆÜ°êY\ˆHÛÛ[X[™HŸJW_JW_J_J_Y[˜İ[ÛˆØYJÚ][\Î™KÙ^WÎJ^İ˜\ˆËËÎÚYŠK›[™İLJ\™]\›ˆKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLLˆËLLˆÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[šKšœŞ
ËÜ]Š
ÏYVÌJOO[[İ›ÚYœËœ›ÙXİİÔ]
OÏÛ[]Š
ÏYVÌJOO[[İ›ÚY›Ëœ›ÙXİİÒ]ŠOÏÛ[Z[YNŠ
ÏYVÌJOO[[İ›ÚY˜Ëœ›ÙXİİÓZ[YJOÏÛ[Ù^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMHËMH‹˜[˜XÚÒXÛÛ•ÛßJ_JNØÛÛœİYK›[™İ\ÙKœÛXÙJÊN™KOYK›[™İ[‹›[™İÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYLLˆËLLˆÚš[šËLÜšYXÛÛËLˆÜšY\›İÜËLˆØ\LH›İ[™YXˆ™ËXZ[Û‹\İ\™˜XÙHLH‹Ú[™[–Û‹›X\
OšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›İ™\™›İËZY[ˆ›İ[™YVÌÜH™ËXZ[Û‹X™È‹Ú[™[šKšœŞ
ËÜ]™œ›ÙXİİÔ]]™œ›ÙXİİÒ]‹Z[YN™œ›ÙXİİÓZ[YKÙ^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšLÈËLÈ‹˜[˜XÚÒXÛÛ•ÛßJ_KšY
JK‰‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YVÌÜH™ËXZ[Û‹]^Î^VÌLH›Û\Ù[ZX›Û^]Ú]H‹Ú[™[–ÈŠÈ‹W_JW_J_X\Ş[˜È[˜İ[Ûˆ×ÊK
^İ˜\ˆØÛÛœİYK\OOOHš[XYÙKÜ™ÈÈœ™ÈˆšœÈ‹X	Ñ]K››İÊ
_KIÓX]œ˜[™ÛJ
KÔİš[™ÊÍŠKœÛXÙJ‹
_K‰ÜŸXÙ]N˜_OX]ØZ]˜]]™Ù]\Ù\Š
KÏJXK\Ù\ŠOO[[İ›ÚYšYÚYŠ\Ê]›İÈ™]È\œ›ÜŠ››×İ\Ù\ˆŠNØÛÛœİÏX	ÜßKÉÛŸXÏX]ØZ]K˜\œ˜^PY™™\Š
KØÚ\\^™]™ŸOX]ØZ]ÊÊKÙ\œ›ÜšOX]ØZ]œİÜ˜YÙK™œ›ÛJœ›ÙXİ\İÜÈŠK\ØY
ËØÛÛ[\Nˆ˜\XØ][Û‹ÛØİ]\İ™X[HŸJNÚYŠ
]›İÈÜ™]\›Üİ×Ü]›Ëİ×Ú]™‹İ×ÛZ[YN™K\__Y[˜İ[ÛˆÊİ˜\šX[N™KÙ^WÎÚ^™NœHšMÈËMÈŸJ^Ü™]\›ˆKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YN˜	ÜŸHÚš[šËLİ™\™›İËZY[ˆ›İ[™Y™ËXZ[Û‹X™ØÚ[™[šKšœŞ
ËÜ]™Kœİ×Ü]]™Kœİ×Ú]‹Z[YN™Kœİ×ÛZ[YKÙ^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšLËHËLËH‹˜[˜XÚÒXÛÛ•ÛßJ_J_Y[˜İ[ÛˆYJİ˜\šX[\Î™KÜ[Û‘Ü›İ\Î˜[YNœ‹ÛÚ[™ÙN›‹İØÚÑ›Ü˜KÙ^WÎœßJ^ØÛÛœİÏ\Ì

KØËO]‹\ÙTİ]JLJK]‹\ÙT™YŠ[
Nİ‹\ÙQY™™Xİ


OOÚYŠXÊ\™]\›Ù[˜İ[Ûˆ
Š^Ù‹˜İ\œ™[	‰ˆY‹˜İ\œ™[˜ÛÛZ[œÊ‹\™Ù]
I‰™
LJ_\™]\›ˆØİ[Y[˜Y]™[\İ[™\Š›[İ\ÙYİÛˆ‹
K

OO™Øİ[Y[œ™[[İ™Q]™[\İ[™\Š›[İ\ÙYİÛˆ‹
_KØ×JNØÛÛœİYK™š[™
OšYOO\ŠOÏÛ[Ü™]\›ˆKšœŞÊ™]ˆ‹Ü™Y™‹Û\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™
Oˆ^
K˜\šXKY^[™Y˜ËÛ\ÜÓ˜[YNˆ™šY[Z[œ]›^ËY[][\ËXÙ[\ˆØ\Lˆ^[Y‹Ú[™[–ÚÚKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
Ëİ˜\šX[N™˜ÊÊKÙ^WÎœËÚ^™NˆšMˆËMˆŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H‹Ú[™[š›X™[_JW_JNšKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^XZ[Û‹[]]Y‹Ú[™[ˆÚÚ\Ú\ˆ[™H˜\šX[x )ˆŸJKKšœŞ
KØÛ\ÜÓ˜[YN˜[X]]ÈMËMÚš[šËL^XZ[Û‹[]]Y˜[œÚ][Û‹]˜[œÙ›Ü›H	ØÏÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JKÉ‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H‹LŒ]LHX^ZMËY[İ™\™›İË^KX]]È›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™Ë]Ú]HÚYİË[È‹Ú[™[™K›X\
OØÛÛœİÏXJšY
OOOLÜ™]\›ˆKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛŠšY
K
LJ_KÛ\ÜÓ˜[YN˜›^ËY[][\ËXÙ[\ˆØ\LˆLÈKLˆ^[Y^\ÛHİ™\˜™ËXZ[Û‹\İ\™˜XÙH	İÏÈ^XZ[Û‹[]]YÍÌ[™K]›İYÚˆ^XZ[Û‹]^ŸXÚ[™[–ÚKšœŞ
Ëİ˜\šX[N™˜ÊÊKÙ^WÎœËÚ^™NˆšMˆËMˆŸJKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H‹Ú[™[–Ş›X™[KÏÈˆ8 %\\™HHİØÚÈˆˆ—_JW_KšY
_J_JW_J_Y[˜İ[ÛˆÊÜ]™K]Z[YNœ‹Ù^WÎ›‹Û\ÜÓ˜[YN˜K˜[˜XÚĞÛ\ÜÓ˜[YNœË˜[˜XÚÒXÛÛ›ÏX›_J^ØÛÛœİØËO]‹\ÙTİ]J[
KÙ‹O]‹\ÙTİ]JLJNÜ™]\›ˆ‹\ÙQY™™Xİ


OOÚYŠY_]
^Ù
[
K
LJNÜ™]\›Ÿ[]HLK[[Ü™]\›ˆ
LJK
\Ş[˜Ê
OOİ^ØÛÛœİÙ]NË\œ›Ü—ßOX]ØZ]œİÜ˜YÙK™œ›ÛJœ›ÙXİ\İÜÈŠK™İÛ›ØY
JNÚYŠß]Ê]›İÈÏÏÛ™]È\œ›ÜŠ™İÛ›ØYÙ˜Z[YŠNØÛÛœİX]ØZ]Ë˜\œ˜^PY™™\Š
KÏX]ØZ]ŒÊ‹‹
KÏ[™]È›ØŠÔ×Kİ\NœŸš[XYÙKÚœYÈŸJNØUT“˜Ü™X]SØš™XİT“
ÊK
Š_XØ]ÚŞ
L
__JJ
K

OOŞHL‰‰•T“œ™]›ÚÙSØš™XİT“
ŠK
[
__KÙK‹—JKY_]ŸXÏÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Y[ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
ËØÛ\ÜÓ˜[YNœÏÏÈšMˆËMˆ‹İ›ÚÙUÚYŒK_J_JNšKšœŞ
š[YÈ‹ÜÜ˜Î˜Ë[ˆˆ‹Û\ÜÓ˜[YN˜_J_Y[˜İ[ÛˆŒ
J^ÚYŠKš[J
OOOHˆŠ\™]\›İ^ˆ“›ÛˆİZ]šH
˜Xœš\]pêH0èH[X[™JH‹Û™Nˆ››Û™HŸNØÛÛœİ\\œÙR[
KL
NÜ™]\›ˆ[X™\‹š\Ó˜SŠ
OŞİ^ˆ“›ÛˆİZ]šH
˜Xœš\]pêH0èH[X[™JH‹Û™Nˆ››Û™HŸNLŞİ^ˆ”\\™HHİØÚÈ‹Û™Nˆ›İ]ŸNRNŞİ^˜	İH[ˆİØÚÈ
˜\ÊXÛ™Nˆ›İÈŸNİ^˜	İH[ˆİØÚØÛ™Nˆ›ÚÈŸ_Y[˜İ[Ûˆ	YJJ^Û]YKœ™\XÙJÖ×ŒNK‹KÙËˆŠNØÛÛœİ]œÙX\˜Ú
ÖË‹KÊNÜ™]\›ˆˆOOKLI‰Š]œÛXÙJŠÌJJİœÛXÙJŠÌJKœ™\XÙJÖË‹KÙËˆŠJKY[˜İ[Ûˆ—ÊJ^ØÛÛœİ\\œÙQ›Ø]
Kš[J
Kœ™\XÙJ‹‹‹ˆŠJNÜ™]\›ˆ[X™\‹š\Ñš[š]J
OİŒY[˜İ[Ûˆ˜YJÜİÎ™KX™[Ù^WÎœ‹İØÚÕ˜[YN›‹Û”İØÚĞÚ[™ÙN˜KÛ”™[[İ™NœßJ^ØÛÛœİÏ[OO[[Èˆ”İš[™ÊŠKÏRŒ
ÊKZÚØËÛ™WNÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHL‹H‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
Ëİ˜\šX[N™KÙ^WÎœ‹Ú^™NˆšNHËNHŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH[˜Ø]H^\ÛH^XZ[Û‹]^‹Ú[™[JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœËÛ\ÜÓ˜[YNˆ™›^NËNÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[ˆ”™]\™\ˆH˜\šX[H‹Ú[™[šKšœŞ
ÌKØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_J_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›^›^]Ü˜\][\ËXÙ[\ˆØ\LˆLLH‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YN›ËÛÚ[™ÙN™O˜J‹\™Ù]˜[YJKXÙZÛ\ˆ”İØÚÈ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËLŒŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜^^È	ÙXÚ[™[˜Ë^JW_JW_J_Y[˜İ[ÛˆXYJÚÙ^WÎ™K›ÙXİÛÛÜÙNœ‹Û”Ø]™Y›ŸJ^ØÛÛœİØK×O]‹\ÙTİ]J
O[[İ›ÚY››ÛJOÏÈˆŠKÛË×O]‹\ÙTİ]JÔİš[™Êœš^
NˆˆŠKÙ—O]‹\ÙTİ]J
O[[İ›ÚY›Ü[Û—ÙÜ›İ\ÊOÏÖ×JKÚO]‹\ÙTİ]J
O[[İ›ÚY˜\šX[\ÊOÏÖ×JKØ‹×O]‹\ÙTİ]Jİ›Ü[Û—ÙÜ›İ\ËœÛÛYJ™OO‘™K›X™[š[J
J_˜\šX[\Ë›[™İŒˆLJK×Ë—O]‹\ÙTİ]Jš[™›ÜÈŠKÔË×O]‹\ÙTİ]JˆŠKÕ×O]‹\ÙTİ]JßJKÔ‹—O]‹\ÙTİ]JßJKÔWO]‹\ÙTİ]JˆŠKÕKWO]‹\ÙTİ]JßJKÕËO]‹\ÙTİ]JßJKÒWO]‹\ÙTİ]J[
KÛKYWO]‹\ÙTİ]J	‰œİØÚÈOO[[	‰œİØÚÈOO]›ÚYÔİš[™ÊœİØÚÊNˆˆŠKÜK™WO]‹\ÙTİ]J[
KİKO]‹\ÙTİ]J[
KÓ™KÙWO]‹\ÙTİ]JLJKÑ‹—O]‹\ÙTİ]JLJKÖ‹YWO]‹\ÙTİ]J[
KÚYKÙWO]‹\ÙTİ]JLJKĞÙKWO]‹\ÙTİ]J[
KÓÙKO]‹\ÙTİ]JLJKØÙKYWO]‹\ÙTİ]JLJNØ\Ş[˜È[˜İ[Ûˆ
™J^ØÛÛœİ]X]ØZ]˜YJ™JNÜ™]\›ˆ™]Èš[JÙ]K™K›˜[YKİ\N™]\_™K\K\İ[ÙYšYY‘™K›\İ[ÙYšYYJ_X\Ş[˜È[˜İ[ÛˆÙJ™J^İ˜\ˆİØÛÛœİ]JİQ™K\™Ù]™š[\ÊOO[[İ›ÚY˜İÌNÚYŠ]
]^ØÛÛœİX]ØZ]
]
NØ™J
K
T“˜Ü™X]SØš™XİT“

J_XØ]ÚÙYJ’[\ÜÜÚX›HH˜Z]\ˆÙ]H[XYÙKˆŠ__Y[˜İ[Ûˆ
™K]
^Ü™]\›˜	Ñ™_N‰Ù]XX\Ş[˜È[˜İ[Ûˆ]
™K]İ
^İ˜\ˆÙNØÛÛœİJÙOXİ\™Ù]™š[\ÊOO[[İ›ÚY•ÙVÌNÚYŠ
]^ØÛÛœİİX]ØZ]

KY
™K]
NÓJOŠË‹‹™ØNœİJJK
OŠË‹‹™ØN•T“˜Ü™X]SØš™XİT“
İ
_JJ_XØ]ÚÙYJ’[\ÜÜÚX›HH˜Z]\ˆÙ]H[XYÙKˆŠ__Y[˜İ[Ûˆ]
™K]
^ØÛÛœİİY
™K]
NÓJOØÛÛœİÙO^Ë‹‹NÜ™]\›ˆ[]HÙVØİKÙ_JK
OØÛÛœİÙO^Ë‹‹NÜ™]\›ˆ[]HÙVØİKÙ_JKŠO›X\
ÙOOİ˜\ˆÚYŠÙKšYOOQ™_J
UÙK˜[]\”İÜÊHO[[	‰˜Ù]JJ\™]\›ˆÙNØÛÛœİİ^Ë‹‹•ÙK˜[]\”İÜßNÜ™]\›ˆ[]HİÙ]KË‹‹•ÙK˜[]\”İÜÎœİ_JJ_XÛÛœİYOY™š[\Š™OO‘™K›X™[š[J
JK^’J
NÙ[˜İ[Ûˆ
™J^ØÛÛœİ]Q™Kš[J
NÚYŠ]
^ÚYŠœÛÛYJİO˜İ›X™[š[J
KÓİÙ\Ø\ÙJ
OOOY]ÓİÙ\Ø\ÙJ
JJ^ÚÊˆŠNÜ™]\›ŸYŠİO–Ë‹‹˜İÚY˜ÉÑ]K››İÊ
_IØİ›[™İXX™[™]˜[]\œÎ–×_WJKÊˆŠ__Y[˜İ[Ûˆ
™K]
^ØÛÛœİİJÑ™KšYOÏÈˆŠKš[J
NÛ]ØİOOHˆ‰‰‹×—
ÉË\İ
İ
OŞ\\œÙR[
İL
JÙ]J™K˜[]\œË›[™İŒÓX]›X^
‹‹‘™K˜[]\œË›X\
İOœ\œÙR[
İL
JJNŒ
JÊ]ŒÌNŒ
KÊÙOOŠË‹‹•ÙKÑ™KšYN”İš[™ÊX]›X^

J_JJ_Y[˜İ[Ûˆ]
™K]
^ØÛÛœİİY]š[J
NØİ	‰ŠŠO›X\
ÙOO•ÙKšYOOQ™I‰ˆUÙK˜[]\œËš[˜ÛY\Êİ
OŞË‹‹•ÙK˜[]\œÎ–Ë‹‹•ÙK˜[]\œËİ_N•ÙJJKÊOŠË‹‹Ñ™WNˆˆŸJJJ_Y[˜İ[ÛˆœŠ™K]
^ØÛÛœİİY
™K]
NÙŠO›X\
ÙOO•ÙKšYOOQ™OŞË‹‹•ÙK˜[]\œÎ•ÙK˜[]\œË™š[\ŠİOœİOOY]
_N•ÙJJK
O™š[\ŠÙOO•ÙK˜]šX]ÖÑ™WHOOY]
JKJOÚYŠJİ[ˆ
J\™]\›ˆØÛÛœİÙO^Ë‹‹NÜ™]\›ˆ[]HÙVØİKÙ_JK
OÚYŠJİ[ˆ
J\™]\›ˆØÛÛœİÙO^Ë‹‹NÜ™]\›ˆ[]HÙVØİKÙ_J_Y[˜İ[Ûˆİ
™J^ØÛÛœİ]Y™š[™
İO˜İšYOOQ™JNÚYŠŠİO˜İ™š[\ŠOšYOOQ™JJK
İO˜İ™š[\ŠOˆJ™H[ˆ˜]šX]ÊJJK]
^ØÛÛœİİX	Ñ™_N˜ÓJOØÛÛœİÙO^Ë‹‹NÜ™]\›ˆØš™XİšÙ^\ÊÙJK™›Ü‘XXÚ
İOÜİœİ\ÕÚ]
İ
I‰™[]HÙVÜİ_JKÙ_JK
OØÛÛœİÙO^Ë‹‹NÜ™]\›ˆØš™XİšÙ^\ÊÙJK™›Ü‘XXÚ
İOÜİœİ\ÕÚ]
İ
I‰™[]HÙVÜİ_JKÙ_J__XÛÛœİUYK™š[\Š™OOˆT–Ñ™KšYJKÜ^ßNÕYK™›Ü‘XXÚ
™OOÔ–Ñ™KšYI‰ŠÜ–Ñ™KšYOT–Ñ™KšYJ_JNØÛÛœİUYK›X\
™OO”–Ñ™KšYJK™š[\Š›ÛÛX[ŠKš›Ú[Šˆ0­ÈŠKT›[™İOOL	‰šœÛÛYJ™OO•YK™]™\J]O‘™K˜]šX]ÖÙ]šYOOO\Ü–Ù]šYJI‰“Øš™XİšÙ^\Ê™K˜]šX]ÊK›[™İOOUYK›[™İ
KİUYK›[™İŒ	‰”›[™İOOL	‰ˆQÙ[˜İ[Ûˆ

^ÚYŠUİ
\™]\›ØÛÛœİ™O^ßNÕYK™›Ü‘XXÚ
]OÑ™VÙ]šYOT–Ù]šY_JK
]O–Ë‹‹™]ÚY˜‰Ñ]K››İÊ
_IÙ]›[™İX]šX]Î‘™KX™[N’İØÚÎ”š[J
OOOHˆÛ[“X]›X^
\œÙR[
L
_
Kİ×Ü]›[İ×Ú]›[İ×ÛZ[YN›[WJKŠßJKJˆŠ_Y[˜İ[ÛˆŠ™J^Ş
]O™]™š[\ŠİO˜İšYOOQ™JJ_X\Ş[˜È[˜İ[Ûˆ
™J^Ñ™Kœ™]™[Y˜][

KŠL
KYJ[
NØÛÛœİ]HH\_Øš™XİšÙ^\ÊJK›[™İŒÙ]	‰—ÙJL
Nİ^ØÛÛœİİ\OØ]ØZ]×ÊKJN›[X]ØZ]›ÛZ\ÙK˜[
Øš™Xİ™[šY\ÊJK›X\
\Ş[˜ÊÕ]WJOO–Õ]]ØZ]×ÊKJWJJKÙO[™]ÈX\

KİY›X\
]OØÛÛœİOU]˜[]\œË›X\
ÙOO–ÑÙKÙK™Ù]

]šYÙJJWJK™š[\ŠÙOOˆHQÙVÌWJNÚYŠK›[™İOOL
\™]\›ˆ]ØÛÛœİİ^Ë‹‹•]˜[]\”İÜÏÏŞß_NÜ™]\›ˆK™›Ü‘XXÚ

ÑÙKİJOOĞİÑÙWOWİJKË‹‹•]˜[]\”İÜÎİ_JKXÕØYJİ
N–×KXÚ–×KXŸKš[J
OOOHˆÛ[“X]›X^
\œÙR[
KL
_
NÚYŠ
^ØÛÛœİ]^Û›ÛN˜Kš[J
Kš^—ÊÊKÜ[Û—ÙÜ›İ\Î˜˜\šX[\Î™İØÚÎ”NØİ	‰Š]œİ×Ü]Xİœİ×Ü]]œİ×Ú]Xİœİ×Ú]‹]œİ×ÛZ[YOXİœİ×ÛZ[YJNØÛÛœİÙ\œ›Ü‘_OX]ØZ]™œ›ÛJœ›ÙXİÈŠK\]J]
K™\JšY‹šY
NÚYŠJ]›İÈ_Y[Ù^ØÛÛœİÙ\œ›Ü•]OX]ØZ]™œ›ÛJœ›ÙXİÈŠKš[œÙ\
Û›ÛN˜Kš[J
Kš^—ÊÊKÜ[Û—ÙÜ›İ\Î˜˜\šX[\Î™İØÚÎ”İ×Ü]ŠİO[[İ›ÚY˜İœİ×Ü]
OÏÛ[İ×Ú]ŠİO[[İ›ÚY˜İœİ×Ú]ŠOÏÛ[İ×ÛZ[YNŠİO[[İ›ÚY˜İœİ×ÛZ[YJOÏÛ[JNÚYŠ]
]›İÈ]X]ØZ]Š
_XØ]ÚÙYJ’[\ÜÜÚX›H	Ù[œ™YÚ\İ™\ˆH›ÙZ]ˆŠ_Yš[˜[^ÒŠLJK]	‰—ÙJLJ__X\Ş[˜È[˜İ[Ûˆİ

^ÚYŠ]
\™]\›Û
L
NØÛÛœİØÛİ[‘™_OX]ØZ]™œ›ÛJ›Ü™\—Ú][\ÈŠKœÙ[Xİ
šY‹ØÛİ[ˆ™^Xİ‹XYˆLJK™\Jœ›ÙXİÚY‹šY
NÓJ™OÏÌ
K
LJKÙJL
_X\Ş[˜È[˜İ[Ûˆ™J
^ÚYŠ
^ÔYJL
Nİ^ØÛÛœİÙ\œ›Ü‘™_OX]ØZ]™œ›ÛJœ›ÙXİÈŠK™[]J
K™\JšY‹šY
NÚYŠ™J]›İÈ™NØ]ØZ]Š
_XØ]ÚÙYJ’[\ÜÜÚX›HHİ\š[Y\ˆÙH›ÙZ]ˆŠKYJLJ___\™]\›ˆKšœŞ
‹İ]NÈ“[ÙYšY\ˆH›ÙZ]ˆ“›İ]™X]H›ÙZ]‹ÛÛÜÙNœ‹Ú[™[šKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]’Û\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–Ø‰‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÖÈš[™›ÜÈ‹’[™›ÜÈ—KÈ›ØØX[Z\™H‹•\\È	ˆ˜[]\œÈ—KÈœİØÚÈ‹”İØÚÈ—WK›X\

Ñ™K]JOOšKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO“Š™JKÛ\ÜÓ˜[YN˜›İ[™YXˆ›Ü™\ˆLÈKLKH^^È›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	×ÏOOQ™OÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛˆ˜›Ü™\‹XZ[Û‹YÛÛÌŒ™ËXZ[Û‹YÛÛÍH^XZ[Û‹YÛÛÍHİ™\^XZ[Û‹YÛÛÍÌŸXÚ[™[™]K™JJ_JK
XŸÏOOHš[™›ÜÈŠI‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”İÈŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\M‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLŒËLŒÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[OÚKšœŞ
š[YÈ‹ÜÜ˜ÎK[ˆ\\°éİH‹Û\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆŸJNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Y[ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
›KØÛ\ÜÓ˜[YNˆšNËN^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_J_J_JKKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ˜‹YÚÜİİ\œÛÜ‹\Ú[\ˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ™š[H‹XØÙ\ˆš[XYÙKÚœYË[XYÙKÜ™Ë[XYÙKİÙXœ‹ÛÚ[™ÙN™ÙKÛ\ÜÓ˜[YNˆšY[ˆŸJKO[[	‰œİ×Ü]È“[ÙYšY\ˆHİÈˆÚÚ\Ú\ˆ[™HİÈ—_JW_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKH^^È^XZ[Û‹[]]Y‹Ú[™[˜ØİÈH›ÙZ][ˆğê[°ê\˜[ˆÚ\]YH˜[]\ˆ	İ[ˆ\HÛİ[]\‹Üİ[H]]]›Ú\ˆØH›Ü™HİËZ›İ]0êYH0è	ğê]\H•\\È	ˆ˜[]\œÈˆ8 %[][H	Ù[ˆZ›İ]\ˆ[™H\ˆZ[K˜ˆ“\Èpê]YÛ›°êY\ÈVQˆ
›İ[[Y[HØØ[\Ø][ÛŠHÛÛ]]ÛX]\]Y[Y[İ\š[pêY\ËˆŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ“›ÛHH›ÙZ]ŸJKKšœŞ
š[œ]‹İ\Nˆ^‹™\]Z\™YˆL˜[YN˜KÛÚ[™ÙN‘™OOœÊ™K\™Ù]˜[YJKXÙZÛ\ˆ‘^ˆ\Ú\ÛİÛˆš[È‹Û\ÜÓ˜[YNˆ™šY[Z[œ]‹]]Ñ›Øİ\ÎˆLJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”š^
8 «
HŸJKKšœŞ
š[œ]‹İ\Nˆ^‹[œ][ÙNˆ™XÚ[X[‹™\]Z\™YˆL˜[YN›ËÛÚ[™ÙN‘™OO˜Ê	YJ™K\™Ù]˜[YJJKXÙZÛ\ˆŒ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆÙH›ÙZ]H\È˜\šX[\È
Ûİ[]\‹Z[x )ŠHÈŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÊLJKÛ\ÜÓ˜[YN˜›İ[™YXˆ›Ü™\ˆMKLˆ^\ÛH›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ØÈ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ˆ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\ŸXÚ[™[ˆ“›ÛˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOİÊL
KŠ›ØØX[Z\™HŠ_KÛ\ÜÓ˜[YN˜›İ[™YXˆ›Ü™\ˆMKLˆ^\ÛH›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ØÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\ˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[ˆ“İZHŸJW_JW_JKX‰‰šKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”İØÚÈŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YN›KÛÚ[™ÙN‘™OO˜YJ™K\™Ù]˜[YJKXÙZÛ\ˆ”İØÚÈ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËLŸJK


OOØÛÛœİ™ORŒ
JK]ZÚÑ™KÛ™WNÜ™]\›ˆKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜^^È	Ù]XÚ[™[‘™K^J_JJ
W_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKH^^È^XZ[Û‹[]]Y‹Ú[™[ˆ“HİØÚÈ‰Ù\İ˜[XZ\È›Ü]X[ˆZ\ÜÙ\ˆšYH
›ÛˆİZ]šJH™\İHÛÛ[X[™X›H›Ü›X[[Y[ˆŸJW_JW_JK‰‰—ÏOOH›ØØX[Z\™H‰‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ•\\È	ÛÜ[ÛœÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^^È^XZ[Û‹[]]Y‹Ú[™[ˆ‘^ˆÛİ[]\‹Z[KÚ[\™KX]pê™x )ˆŸJK›[™İŒ	‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ›^›^]Ü˜\Ø\Lˆ‹Ú[™[™›X\
™OOšKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆš[›[™KY›^][\ËXÙ[\ˆØ\LKH›İ[™YY[›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHL‹HKLH^^È›Û[YY][H^XZ[Û‹]^‹Ú[™[–Ñ™K›X™[KšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”İ
™KšY
KÛ\ÜÓ˜[YNˆ™›^MËM][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YY[^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[˜İ\š[Y\ˆH\H	Ñ™K›X™[XÚ[™[šKšœŞ
ËØÛ\ÜÓ˜[YNˆšLÈËLÈ‹İ›ÚÙUÚYŒŸJ_JW_K™KšY
J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN”ËÛÚ[™ÙN‘™OOšÊ™K\™Ù]˜[YJKÛ’Ù^QİÛ‘™OOÑ™KšÙ^OOOH‘[\ˆ‰‰Š™Kœ™]™[Y˜][

K
ÊJ_KXÙZÛ\ˆ‘^ˆÛİ[]\‹Z[KÚ[\™KX]pê™x )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]›^LHŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOš
ÊKÛ\ÜÓ˜[YNˆ˜‹YÚÜİÚš[šËLLÈ‹Ú[™[ˆZ›İ]\ˆŸJW_JW_JK›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ•˜[]\œÈ\ˆ\HŸJK›X\
™OOØÛÛœİ]UÑ™KšYOÏÈˆ‹İRJ™JNÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[‘™K›X™[JK™K˜[]\œË›[™İŒ	‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ›^›^]Ü˜\Ø\Lˆ‹Ú[™[‘™K˜[]\œË›X\
Oİ˜\ˆØÛÛœİÙOY
™KšY
KİUÖÕÙWKJQ™K˜[]\”İÜÊOO[[İ›ÚY”ŞKHH\İHXÜ™]\›ˆKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆš[›[™KY›^][\ËXÙ[\ˆØ\LKH›İ[™YY[›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹X™ÈKLHLH‹L‹H^^È›Û[YY][H^XZ[Û‹]^‹Ú[™[–ÈXİ	‰šKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HÚš[šËL‹Ú[™[–ÚKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈMHËMHİ\œÛÜ‹\Ú[\ˆİ™\™›İËZY[ˆ›İ[™YY[›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[–ÜİÚKšœŞ
š[YÈ‹ÜÜ˜Îœİ[ˆˆ‹Û\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆŸJN˜ÚKšœŞ
ËÜ]˜œİ×Ü]]˜œİ×Ú]‹Z[YN˜œİ×ÛZ[YKÙ^WÎ™KÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšL‹HËL‹HŸJNšKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Y[ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
›KØÛ\ÜÓ˜[YNˆšL‹HËL‹H^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_J_JKKšœŞ
š[œ]‹İ\Nˆ™š[H‹XØÙ\ˆš[XYÙKÚœYË[XYÙKÜ™Ë[XYÙKİÙXœ‹Û\ÜÓ˜[YNˆšY[ˆ‹ÛÚ[™ÙN•]O˜]
™KšY]
_JW_JK	‰šKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO‘]
™KšY
KÛ\ÜÓ˜[YNˆ˜XœÛÛ]H\šYÚLH]ÜLH›^LÈËLÈ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YY[™Ë]Ú]H^XZ[Û‹[]]YÚYİÈš[™ËLHš[™ËXZ[Û‹X›Ü™\ˆİ™\^\™YMŒ‹˜\šXK[X™[˜™]\™\ˆHİÈH	ŞXÚ[™[šKšœŞ
ËØÛ\ÜÓ˜[YNˆšLˆËLˆ‹İ›ÚÙUÚYŒ‹_J_JW_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOœœŠ™KšY
KÛ\ÜÓ˜[YNˆ™›^MËM][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YY[^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[˜™]\™\ˆ	ŞXÚ[™[šKšœŞ
ËØÛ\ÜÓ˜[YNˆšLÈËLÈ‹İ›ÚÙUÚYŒŸJ_JW_K
_J_JKXİ	‰‘™K˜[]\œË›[™İŒ	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^VÌL\H^XZ[Û‹[]]Y‹Ú[™[ˆ”İÈ\ˆ˜[]\ˆÜ[Û›™[H
^ˆ[™HİÈ\ˆÛİ[]\ŠH8 %Û\]Y^ˆİ\ˆH›Û™0èØ]XÚHHÚ\]YH˜[]\‹ˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ^‹[œ][ÙN˜İÈ›[Y\šXÈˆ^‹˜[YN™]ÛÚ[™ÙNOÊÙOOŠË‹‹•ÙKÑ™KšYN\™Ù]˜[Y_JJKÛ’Ù^QİÛOŞšÙ^OOOH‘[\ˆ‰‰Šœ™]™[Y˜][

K]
™KšY]
J_KXÙZÛ\ˆ‘^ˆ›İYÙKÎ8 )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]›^LHŸJKİ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\LH‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO•
™KLJKÛ\ÜÓ˜[YNˆ™›^NHËNH][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹X™È^XZ[Û‹]^İ™\˜™ËXZ[Û‹\İ\™˜XÙH‹˜\šXK[X™[ˆ‘[Z[Y\ˆ‹Ú[™[ˆ¸¢$ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO•
™KJKÛ\ÜÓ˜[YNˆ™›^NHËNH][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹X™È^XZ[Û‹]^İ™\˜™ËXZ[Û‹\İ\™˜XÙH‹˜\šXK[X™[ˆ]YÛY[\ˆ‹Ú[™[ˆŠÈŸJW_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO–]
™KšY]
KÛ\ÜÓ˜[YNˆ˜‹YÚÜİÚš[šËLLÈ‹Ú[™[ˆZ›İ]\ˆŸJW_JW_K™KšY
_JW_JKœÛÛYJ™OO‘™K˜[]\œË›[™İŒ
I‰šKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆ˜‹\š[X\HËY[‹ÛÛXÚÎŠ
OO“ŠœİØÚÈŠKÚ[™[ˆÜ°êY\ˆ[ÛˆİØÚÈŸJW_JK‰‰—ÏOOHœİØÚÈ‰‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆÛÛœİZ\™HHİØÚÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^^È^XZ[Û‹[]]Y‹Ú[™[ˆÚÚ\Ú\ÜÙ^ˆ[™H˜[]\ˆ\ˆ\Hİ\ˆÜ°êY\ˆ[™HÛÛXš[˜Z\ÛÛˆ°êXÚ\ÙKZ\È[™\]Y^ˆÛÛˆİØÚËˆ[™HÛÛXš[˜Z\ÛÛˆ›ÛˆÜ°êpêYHXÚH‰Ù\İ\È›ÜÜğêYH0èHÛÛ[X[™KˆİØÚÈšYHH›ÛˆİZ]šH
^ˆ˜Xœš\]pêH0èH[X[™JK˜[XZ\È›Ü]X[ˆŸJKYK›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y\ÚY›Ü™\‹XZ[Û‹X›Ü™\ˆLÈ^\ÛH^XZ[Û‹[]]Y‹Ú[™[˜Z›İ]^ˆ	ØX›Ü™]H[Ú[œÈ[ˆ\H][™H˜[]\ˆ[œÈ	ÛÛ™Û]•\\È	ˆ˜[]\œÈ‹˜JNšKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y\ÚY›Ü™\‹XZ[Û‹X›Ü™\ˆL‹H‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÕYK›X\
™OOšKšœŞÊœÙ[Xİ‹İ˜[YN”–Ñ™KšYOÏÈˆ‹ÛÚ[™ÙN™]O•ŠİOŠË‹‹˜İÑ™KšYN™]\™Ù]˜[Y_JJKÛ\ÜÓ˜[YNˆ™šY[Z[œ]ËLÌˆ‹Ú[™[–ÚKšœŞÊ›Ü[Ûˆ‹İ˜[YNˆˆ‹Ú[™[–Ñ™K›X™[¸ )ˆ—_JK™K˜[]\œË›X\
]OšKšœŞ
›Ü[Ûˆ‹İ˜[YN™]Ú[™[™]K]
JW_K™KšY
JKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YN”ÛÚ[™ÙN‘™OO’J™K\™Ù]˜[YJKXÙZÛ\ˆ”İØÚÈ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËLŸJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›YˆUİÛÛXÚÎÛ\ÜÓ˜[YNˆ˜‹YÚÜİÚš[šËLLÈ\ØX›Y˜İ\œÛÜ‹[›İX[İÙY\ØX›Y›ÜXÚ]KM‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JKZ›İ]\ˆ—_JW_JK›[™İŒ	‰”›[™İYK›[™İ	‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LKH^^È^X[X™\‹MÌ‹Ú[™[–ÈÚÚ\Ú\ÜÙ^ˆ]\ÜÚH[™H˜[]\ˆİ\ˆˆ‹›X\
™OO‘™K›X™[
Kš›Ú[Š‹ŠK‹ˆ—_JK	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKH^^È^X[X™\‹MÌ‹Ú[™[ˆÙ]HÛÛXš[˜Z\ÛÛˆ^\İH0êZ°èÚKY\ÜÛİ\ËˆŸJW_JW_JK›[™İŒ	‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[–Ö™[šY\Ë›X\

İ˜[YN‘™K][\Î™]JOOİ˜\ˆØÛÛœİİY
˜^\ËšY™JKROOXİÙOUÖØİKİJV˜^\Ë˜[]\”İÜÊOO[[İ›ÚY™Ñ™WKUYK™š[\ŠO”šYOOV˜^\ËšY
NÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›İ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”JO”OOXİÛ[˜İ
KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LˆL‹H^[Y‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšNHËNHÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹X™È‹Ú[™[•ÙOÚKšœŞ
š[YÈ‹ÜÜ˜Î•ÙK[ˆˆ‹Û\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆŸJNœİÚKšœŞ
ËÜ]œİœİ×Ü]]œİœİ×Ú]‹Z[YNœİœİ×ÛZ[YKÙ^WÎ™KÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMËMŸJNšKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Y[ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
›KØÛ\ÜÓ˜[YNˆšMËM^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_J_J_JKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[–Ö˜^\Ë›X™[ˆˆ‹™W_JKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÚš[šËL^^È^XZ[Û‹[]]Y‹Ú[™[–Ù]›[™İˆ‹]›[™İŒOÈ˜[]\œÈˆ˜[]\ˆ—_JKKšœŞ
KØÛ\ÜÓ˜[YN˜MËMÚš[šËL^XZ[Û‹[]]Y˜[œÚ][Û‹]˜[œÙ›Ü›H	ŞÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JK	‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLKH›Ü™\‹]›Ü™\‹XZ[Û‹X›Ü™\ˆL‹H‹Ú[™[™]›X\
OØÛÛœİ]X›X\
İO”˜]šX]Ö×İšYJK™š[\Š›ÛÛX[ŠKš›Ú[Šˆ0­ÈŠ_›X™[KOTœİØÚÏOO[[Èˆ”İš[™ÊœİØÚÊKİRŒ
JKÙOZÚĞİÛ™WNÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆ™ËXZ[Û‹X™ÈL‹HKLKH‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH[˜Ø]H^\ÛH^XZ[Û‹]^‹Ú[™[•]JKKšœŞ
š[œ]‹İ\Nˆ›[X™\ˆ‹Z[ˆŒ‹˜[YN‘KÛÚ[™ÙN—İO
O–›X\
YOO“YKšYOOTšYŞË‹‹“YKİØÚÎ—İ\™Ù]˜[YKš[J
OOOHˆÛ[“X]›X^
\œÙR[
İ\™Ù]˜[YKL
_
_N“YJJKXÙZÛ\ˆ”İØÚÈ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ËLŒŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜^^È	ÑÙ_XÚ[™[İ^JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™ŠšY
KÛ\ÜÓ˜[YNˆ™›^MÈËMÈÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™Y^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMLİ™\^\™YMŒ‹˜\šXK[X™[ˆ”™]\™\ˆHÛÛXš[˜Z\ÛÛˆ‹Ú[™[šKšœŞ
ÌKØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_J_JW_KšY
_J_JW_K™J_JNš›X\
™OOšKšœŞ
˜YKÜİÎ™˜Ê™KÌ

JKX™[‘™K›X™[KÙ^WÎ™KİØÚÕ˜[YN‘™KœİØÚËÛ”İØÚĞÚ[™ÙN™]O
İO˜İ›X\
OšYOOQ™KšYŞË‹‹İØÚÎ™]š[J
OOOHˆÛ[“X]›X^
\œÙR[
]L
_
_N
JKÛ”™[[İ™NŠ
OO™Š™KšY
_K™KšY
J_JW_JK‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ™Ë\™YMLMKLÈ^\ÛH^\™YMÌ‹Ú[™[–ŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈLˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœ‹Û\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y‘Ÿ™KÛ\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[‘Ÿ™OÈ‘[œ™YÚ\İ™[Y[8 )ˆÈ‘[œ™YÚ\İ™\ˆˆZ›İ]\ˆŸJW_JK	‰ŠYOÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLŒ™Ë\™YMLM‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^\™YMÌ‹Ú[™[ÙI‰ÙOŒØ][[Ûˆˆ	ĞÙ_HYÛ™IĞÙOŒOÈœÈˆˆŸHHÛÛ[X[™H][\Ù[ÙH›ÙZ]ˆ\Èİ\š[Y\ˆ]™XÈZH™]\™\˜H]\ÜÚHÙ\ÈYÛ™\È\ÈÛÛ[X[™\ÈÛÛ˜Ù\›°êY\ËH˜péÛÛˆ0êYš[š]]™K˜ˆÙH›ÙZ]Ù\˜H0êYš[š]]™[Y[İ\š[pêKˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈ›^Ø\LÈ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹ÛÛXÚÎŠ
OO”ÙJLJK\ØX›Y˜ÙKÚ[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆ™›^LH›İ[™YXˆ™Ë\™YMŒMKL‹H^\ÛH›Û[YY][H^]Ú]H˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMÌ\ØX›Y›ÜXÚ]KML‹ÛÛXÚÎ™K\ØX›Y˜ÙKÚ[™[˜ÙOÈ”İ\™\ÜÚ[Û¸ )ˆˆÛÛ™š\›Y\ˆŸJW_JW_JNšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆ˜‹YÚÜİËY[^\™YMŒ‹ÛÛXÚÎİ\ØX›Y“ÙKÚ[™[–ÚKšœŞ
ÌKØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JKÙOÈ•°ê\šYšXØ][Û¸ )ˆˆ”İ\š[Y\ˆH›ÙZ]—_JJW_J_J_Y[˜İ[Ûˆ˜YJÛÜ™\™KÙ^WÎ[ÜNœ‹›ÙXİÎ›‹Ù[™\‘[XZ[˜KÛÛÜÙNœËÛ”Ø]™Y›ËÛ‘Y]˜ßJ^İ˜\ˆ™KNØÛÛœİÙ—O]‹\ÙTİ]JKœİ]]
KÚO]‹\ÙTİ]JK›[Y\›×ÜİZ]šJKØ‹×O]‹\ÙTİ]JLJK×Ë—O]‹\ÙTİ]J[
KÔË×O]‹\ÙTİ]JLJKÕ×O]‹\ÙTİ]JLJKÔ‹—O]‹\ÙTİ]JLJK\‹™š[™
O–šYOOYKœ\œÛÛ—ÚY
KOHYK˜Y™\ÜËš[J
KÕKWO]‹\ÙTİ]J›Ûš›İ\ˆHY\˜ÚHİ\ˆ›İ™HÛÛ[X[™K[YHX[œ]YH›İ™HY™\ÜÙHH]œ˜Z\ÛÛˆİ\ˆİ]›Ú\ˆ	Ù^0êYY\ˆ<'æ`ˆŠKÕËO]‹\ÙTİ]JLJKJ
™OTO[[İ›ÚY”š[œİYÜ˜[JOO[[İ›ÚY˜™Kš[J
JOÏÈˆ‹OJ
OTO[[İ›ÚY”œÛ˜\Ú]
OO[[İ›ÚYKš[J
JOÏÈˆØ\Ş[˜È[˜İ[ÛˆJ
^İ^Ø]ØZ]˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
JK
L
KÙ][Y[İ]


OO‘
LJK™LÊ_XØ]Úß_X\Ş[˜È[˜İ[ÛˆYJ
^İÊL
KŠ[
Nİ^ØÛÛœİZš[J
NÛ]™O[[ÙO[[ÚYŠ
^ØÛÛœİX]ØZ]Š
NÓ™OR‹˜Ú\\^ÙOR‹š]ŸXÛÛœİÙ\œ›Ü‘ŸOX]ØZ]™œ›ÛJ›Ü™\œÈŠK\]JÜİ]]™[Y\›×ÜİZ]šWØÚ\\^“™K[Y\›×ÜİZ]šWÚ]—Ù_JK™\JšY‹KšY
NÚYŠŠ]›İÈØ]ØZ]Ê
_XØ]ÚÓŠ’[\ÜÜÚX›H	Ù[œ™YÚ\İ™\ˆ\È[ÙYšXØ][ÛœËˆŠ_Yš[˜[^İÊLJ__X\Ş[˜È[˜İ[ÛˆJ
^ÕŠL
KŠ[
Nİ^ØÛÛœİÙ\œ›Ü–OX]ØZ]™œ›ÛJ›Ü™\—Ú][\ÈŠK™[]J
K™\J›Ü™\—ÚY‹KšY
NÚYŠ
]›İÈØÛÛœİÙ\œ›Ü“™_OX]ØZ]™œ›ÛJ›Ü™\œÈŠK™[]J
K™\JšY‹KšY
NÚYŠ™J]›İÈ™NØÛÛœİÙOYKš][\Ë™š[\ŠO‘‹œ›ÙXİÚY
K›X\
OŠÜ›ÙXİY‘‹œ›ÙXİÚY˜\šX[RY‘‹˜\šX[WÚY[N‹Q‹œ]X[]_JJNØ]ØZ]
‹ÙJK]ØZ]Ê
_XØ]ÚÓŠ’[\ÜÜÚX›HHİ\š[Y\ˆHÛÛ[X[™KˆŠKŠLJKÊLJ__\™]\›ˆKšœŞ
‹İ]N˜ÛÛ[X[™H0­È	ÙKœ\œÛÛ“˜[Y_XÛÛÜÙNœËÚ[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”›ÙZ]ÈŸJKKš][\Ë›[™İOOLÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ^\ÛH^XZ[Û‹[]]Y‹Ú[™[ˆ]Xİ[ˆ›ÙZ][œÈÙ]HÛÛ[X[™KˆŸJNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[™Kš][\Ë›X\
OšKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLLËLLÚš[šËLİ™\™›İËZY[ˆ›İ[™YXˆ™ËXZ[Û‹X™È‹Ú[™[šKšœŞ
ËÜ]–œ›ÙXİİÔ]]–œ›ÙXİİÒ]‹Z[YN–œ›ÙXİİÓZ[YKÙ^WÎÛ\ÜÓ˜[YNˆšY[ËY[Øš™XİXÛİ™\ˆ‹˜[˜XÚĞÛ\ÜÓ˜[YNˆšMHËMH‹˜[˜XÚÒXÛÛ•ÛßJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[‰

_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È^XZ[Û‹[]]Y‹Ú[™[–Öœ]X[]Kˆ0åÈ‹ÛÊœš^İ[š]Z\™JW_JW_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[˜ÛÊœ]X[]J–œš^İ[š]Z\™J_JW_KšY
J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈ›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹X™ËÍLLÈ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ•İ[ŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^[È›Û\Ù[ZX›Û^XZ[Û‹YÛÛYY\‹Ú[™[˜ÛÊK›[Û[
_JW_JKKœÚYÏÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^^È^XZ[Û‹[]]Y‹Ú[™[–È”ÚYÈˆ‹KœÚYËˆÈ—_JN›[_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆY™\ÜÙHH]œ˜Z\ÛÛˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆÚ]\ÜXÙK\™K[[™H›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈ^\ÛH^XZ[Û‹]^‹Ú[™[™K˜Y™\ÜßJW_JKI‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹VÈÙXÙM—H›Ü™\‹[VÌÜH›Ü™\‹[VÈĞÎPLŒ×H™ËVÈÑQŒ×HM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
ÙØÛ\ÜÓ˜[YNˆšMHËMHÚš[šËL^VÈĞÎPLŒ×H‹İ›ÚÙUÚYŒK_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û\Ù[ZX›Û^VÈÍ˜XLŒH‹Ú[™[ˆ’[™›Ü›X][ÛœÈX[œ]X[\ÈŸJW_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ^\ÛH^VÈÍ˜XLŒH‹Ú[™[ˆ“	ØY™\ÜÙHH]œ˜Z\ÛÛˆ‰Ù\İ\È™[œÙZYÛ°êYKˆÛÛXİ^ˆÙ]H\œÛÛ›™Hİ\ˆ	ÛØ[š\‹ˆŸJKKšœŞ
^\™XH‹İ˜[YN•KÛÚ[™ÙN–O“J\™Ù]˜[YJKÛ\ÜÓ˜[YNˆ™šY[Z[œ]Z[‹ZVÍÌœH™\Ú^™K^H‹XÙZÛ\ˆ•›İ™HY\ÜØYÙx )ˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈ›^›^]Ü˜\Ø\Lˆ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ›KÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹VÈÙXÙM—H™Ë]Ú]HLÈKLˆ^^È›Û[YY][H^VÈÍ˜XLŒH˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËVÈÑQŒ×H‹Ú[™[–ÚKšœŞ
PËØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JKÏÈÛÜpêHHˆÛÜY\ˆHY\ÜØYÙH—_JK	‰šKšœŞÊ˜H‹Ú™Y˜Î‹ËÚYË›YKÛKÉÙ[˜ÛÙUT’PÛÛ\Û™[

_X\™Ù]ˆ—Ø›[šÈ‹™[ˆ››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹VÈÙXÙM—H™Ë]Ú]HLÈKLˆ^^È›Û[YY][H^VÈÍ˜XLŒH˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËVÈÑQŒ×H‹Ú[™[–ÚKšœŞ
ÍËØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JK“İ]œš\ˆ[œİYÜ˜[H—_JKI‰šKšœŞÊ˜H‹Ú™Y˜Î‹ËİİİËœÛ˜\Ú]˜ÛÛKØYÉÙ[˜ÛÙUT’PÛÛ\Û™[
J_X\™Ù]ˆ—Ø›[šÈ‹™[ˆ››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹VÈÙXÙM—H™Ë]Ú]HLÈKLˆ^^È›Û[YY][H^VÈÍ˜XLŒH˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËVÈÑQŒ×H‹Ú[™[–ÚKšœŞ
ÍËØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JK“İ]œš\ˆÛ˜\Ú]—_JW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”İ]]ŸJKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LˆÛN™ÜšYXÛÛËM‹Ú[™[™›X\
OØÛÛœİ™OU’VÖNÜ™]\›ˆKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™Š
KÛ\ÜÓ˜[YN˜›^›^XÛÛ][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆLˆKLÈ^^È›Û[YY][H˜[œÚ][Û‹X[	ÙOOVÕÖJÈˆš[™ËLHš[™Ë[Ù™œÙ]LHˆ˜›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙH^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[–ÚKšœŞ
™KØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JKÎÖW_K
_J_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ“[pê\›ÈHİZ]šHŸJKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YNšÛÚ[™ÙN–O
\™Ù]˜[YJKXÙZÛ\ˆ‘^ˆÔÌLŒÍMÎL‹Û\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_JKÉ‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ™Ë\™YMLMKLÈ^\ÛH^\™YMÌ‹Ú[™[—ßJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y”ËÛÛXÚÎ˜\Ş[˜Ê
OOÚÊL
Nİ^ÚYJÜ™XÚ\Y[˜[YN™Kœ\œÛÛ“˜[YKY™\ÜÎ™K˜Y™\ÜË™Y™\™[˜ÙNŠO[[İ›ÚY”œ™Y™\™[˜ÙJOÏÙKšYœÛXÙJ
KÙZYÚ™KœÚYËÙ[™\“˜[YN˜_¸ %ŸJNØÛÛœİÙ\œ›Ü–OX]ØZ]™œ›ÛJ›Ü™\œÈŠK\]JÜİ]]ˆ™ğê[°ê\°êYHŸJK™\JšY‹KšY
NÖÓŠ’[\ÜÜÚX›HHY]™H0è›İ\ˆHİ]]ˆŠN˜]ØZ]Ê
_Yš[˜[^ÚÊLJ__KÛ\ÜÓ˜[YNˆ˜‹YÚÜİËY[‹Ú[™[–ÚKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JKÏÈ‘ğê[°ê\˜][Û¸ )ˆˆ‘ğê[°ê\™\ˆ	ğê]\]Y]H—_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ˜ËÛ\ÜÓ˜[YNˆ˜‹YÚÜİËY[‹Ú[™[–ÚKšœŞ
YØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK“[ÙYšY\ˆHÛÛ[X[™H—_JKÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLÌ™Ë\™YMLM‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^\™YN‹Ú[™[ˆ”İ\š[Y\ˆ0êYš[š]]™[Y[Ù]HÛÛ[X[™HÈÙ]HXİ[Ûˆ\İ\œ°ê]™\œÚX›KˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÊLJK\ØX›Y”‹Û\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœK\ØX›Y”‹Û\ÜÓ˜[YNˆ™›^LH›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMŒ™Ë\™YMŒMKL‹H^\ÛH›Û[YY][H^]Ú]H˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YMÌ\ØX›Y›ÜXÚ]KMŒ‹Ú[™[”È”İ\™\ÜÚ[Û¸ )ˆˆ”İ\š[Y\ˆŸJW_JW_JNšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÊL
KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLŒ™Ë\™YMLMKL‹H^\ÛH›Û[YY][H^\™YMÌ˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YLL‹Ú[™[–ÚKšœŞ
ÌKØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK”İ\š[Y\ˆHÛÛ[X[™H—_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈLˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎœËÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ˜YK\ØX›Y˜‹Û\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[˜È‘[œ™YÚ\İ™[Y[8 )ˆˆ‘[œ™YÚ\İ™\ˆŸJW_JW_J_J_Y[˜İ[ÛˆYJJ^Ü™]\›ˆ™]È]JJKÓØØ[Q]Tİš[™Ê™œ‹Q”ˆ‹Ù^Nˆ›[Y\šXÈ‹[ÛˆœÚÜ‹YX\ˆ›[Y\šXÈŸJ_Y[˜İ[Ûˆ˜YJJ^ØÛÛœİYK›X\
O‰
ŠJK™š[\Š›ÛÛX[ŠNÚYŠ›[™İOOL
\™]\›ˆˆØÛÛœİ]š›Ú[Š‹ŠNÜ™]\›ˆ‹›[™İOØ	Ü‹œÛXÙJŠ_x )˜œŸY[˜İ[Ûˆ	
J^ØÛÛœİVÙKœ›ÙXİÚYÙKœ›ÙXİ˜[YN™K™\ØÜš\[Û—Ü\œÛÛ›˜[\ÙYOÏÙKœ›ÙXİ˜[YWNÜ™]\›ˆKœ›ÙXİÚY‹œ\Ú
Š\œÛÛ›˜[\ğêJHŠKK˜\šX[WØÚÚ\ÚYI‰œ‹œ\Ú
K˜\šX[WØÚÚ\ÚYJK‹š›Ú[Šˆ0­ÈŠ_Y[˜İ[ÛˆØYJJ^Ü™]\›ˆK™š[\ŠO›X™[š[J
I‰˜[]\œË›[™İŒ
K›X\
OØÛÛœİ]˜[]\œË›X\
OO˜Kš[J
JK™š[\Š›ÛÛX[ŠNÛ]ÚYŠ˜[]\”İÜÊ^ØÛÛœİO^ßNÜ‹™›Ü‘XXÚ
ÏOİ˜\ˆÎØÛÛœİÏJÏ]˜[]\”İÜÊOO[[İ›ÚY˜ÖÜ×NÛÉ‰ŠVÜ×O[Ê_JKØš™XİšÙ^\ÊJK›[™İŒ	‰ŠXJ_\™]\›ÚYšYX™[›X™[š[J
K˜[]\œÎœ‹‹‹›Şİ˜[]\”İÜÎ›ŸNß__JK™š[\ŠO˜[]\œË›[™İŒ
_Y[˜İ[ÛˆXYJJ^ÚYŠYKœ›ÙXİ
\™]\›ˆK™\ØÜš\[Û”\œÛÛ›˜[\ÙYOÏÈˆØÛÛœİVÙKœ›ÙXİ››ÛWNÜ™]\›ˆK˜\šX[PÚÚ\ÚYI‰œ\Ú
K˜\šX[PÚÚ\ÚYJKš›Ú[Šˆ0­ÈŠ_Y[˜İ[ÛˆÛÊJ^Ü™]\›ˆ™]È[“[X™\‘›Ü›X]
™œ‹Q”ˆ‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ‘UTˆŸJK™›Ü›X]
J_X\Ş[˜È[˜İ[Ûˆ˜YJJ^ØÛÛœİX]ØZ]Ü™X]R[XYÙPš]X\
KÚ[XYÙSÜšY[][Ûˆ™œ›ÛKZ[XYÙHŸJKYØİ[Y[˜Ü™X]Q[[Y[
˜Ø[˜\ÈŠNÜ‹ÚY]ÚY‹šZYÚ]šZYÚØÛÛœİ\‹™Ù]ÛÛ^
Œ™ŠNÚYŠ[Š]›İÈ™]È\œ›ÜŠ˜Ø[˜\×ØÛÛ^Ù˜Z[YŠNÛ‹™˜]Ò[XYÙJ
K˜ÛÜÙJ
NØÛÛœİOYK\OOOHš[XYÙKÜ™È‹ÏXOÈš[XYÙKÜ™Èˆš[XYÙKÚœYÈ‹ÏXOİ›ÚY‹LÜ™]\›ˆ™]È›ÛZ\ÙJ
Ë
OOÜ‹Ğ›ØŠOÙØÊŠN™
™]È\œ›ÜŠ˜›Ø—Ù˜Z[YŠJ_KËÊ_J_Y[˜İ[Ûˆ×ÊJ^Ü™]\›–Ë‹‹™WKœÛÜ

ŠOO™YQ]K›ØØ[PÛÛ\\™J‹™YQ]JJ_Y[˜İ[ÛˆØYJK
^Ü™]\›ˆOOO]È]Z›İ\™8 &ZZH›™]È]JJÈ•ŒŒŠKÓØØ[Q]Tİš[™Ê™œ‹Q”ˆ‹Ù^Nˆ›[Y\šXÈ‹[ÛˆœÚÜŸJ_Y[˜İ[ÛˆYJÙÜ›İ\™KÛ•šY]ÎJ^Ü™]\›ˆKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLŒ™Ë\™YMLLÈKL‹H‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[™Kœš[X\K›˜[Y_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È^\™YMÌ‹Ú[™[–È‘[ˆ™]\™H‹\ŠK›Y\™ÙY]P[[İ[
KK›Y\™ÙY]Q^\ÏŒØ0­È	ÙK›Y\™ÙY]Q^\ßH›İ\‰ÙK›Y\™ÙY]Q^\ÏŒOÈœÈˆˆŸXˆˆ‹KœÙ\ÜÚ[ÛÛİ[ŒOØ0­È	ÙKœÙ\ÜÚ[ÛÛİ[HÙ\ÜÚ[ÛœØˆˆ—_JW_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO
Kœš[X\JKÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\LH›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛL‹HKLKH^^È›Û[YY][H^XZ[Û‹YÛÛYY\˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹YÛÛÌL‹Ú[™[–È”™[[˜Ù\ˆ‹KšœŞ
LËİÙZYÚˆ˜›Û‹Û\ÜÓ˜[YNˆšLËHËLËHŸJW_JW_J_Y[˜İ[ÛˆØYJİ\ÚÎ™KÙ^NÛ•ÙÙÛNœ‹Û‘Y]›‹Û‘[]N˜_J^ØÛÛœİÏHHYK™Û™P]ÏH\É‰™K™YQ]O]ØËO]‹\ÙTİ]JLJNÜ™]\›ˆKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\İ\Ø\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙHLÈKL‹H‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ˜ÚXÚØ›Ş‹ÚXÚÙYœËÛÚ[™ÙNœ‹Û\ÜÓ˜[YNˆ›]LHMËMÚš[šËLİ\œÛÜ‹\Ú[\ˆ›İ[™Y›Ü™\‹XZ[Û‹X›Ü™\ˆXØÙ[XZ[Û‹\š[X\H‹˜\šXK[X™[œÏÈ“X\œ]Y\ˆÛÛ[YH0è˜Z\™Hˆ“X\œ]Y\ˆÛÛ[YH˜Z]HŸJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ›‹Û\ÜÓ˜[YNˆ›Z[‹]ËL›^LH^[Y‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YN˜[˜Ø]H^\ÛH›Û[YY][H	ÜÏÈ^XZ[Û‹[]]Y[™K]›İYÚˆ^XZ[Û‹]^ŸXÚ[™[™K^JKKšœŞ
œ‹ØÛ\ÜÓ˜[YN˜^^È	ÛÏÈ™›Û[YY][H^\™YMŒˆ^XZ[Û‹[]]YŸXÚ[™[‘ØYJK™YQ]K
_JW_JKÏÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\LH‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™
LJKÛ\ÜÓ˜[YNˆœ›İ[™YXˆLˆKLH^^È›Û[YY][H^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹]^‹Ú[™[ˆ[›[\ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ˜KÛ\ÜÓ˜[YNˆœ›İ[™YXˆLˆKLH^^È›Û[YY][H^\™YMÌ˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë\™YLL‹Ú[™[ˆÛÛ™š\›Y\ˆŸJW_JNšKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™
L
K˜\šXK[X™[ˆ”İ\š[Y\ˆH0è˜ÚH‹Û\ÜÓ˜[YNˆœÚš[šËL›İ[™YXˆLKH^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\^\™YMŒ‹Ú[™[šKšœŞ
ÛËİÙZYÚˆœ™Yİ[\ˆ‹Û\ÜÓ˜[YNˆšMËMŸJ_JW_J_Y[˜İ[ÛˆXYJİ\ÚÎ™KÛÛÜÙNÛ”Ø]™YœŸJ^ØÛÛœİÚÙ^N›ŸOIÊ
KØK×O]‹\ÙTİ]J
OO[[İ›ÚY™K^
OÏÈˆŠKÛË×O]‹\ÙTİ]J
OO[[İ›ÚY™K™YQ]JOÏĞ›Š
JKÙ—O]‹\ÙTİ]J
OO[[İ›ÚY™KœİY[ÊOÏÈ™›Ü›X][ÛˆŠKÚO]‹\ÙTİ]JLJKØ‹×O]‹\ÙTİ]J[
K×Ë—O]‹\ÙTİ]JLJKÔË×O]‹\ÙTİ]JLJNØ\Ş[˜È[˜İ[Ûˆ
Š^ÚYŠ‹œ™]™[Y˜][

KH[Š^Ş
L
KÊ[
Nİ^ØÛÛœİØÚ\\^•‹]”OX]ØZ]Š‹Kš[J
JNÚYŠJ^ØÛÛœİÙ\œ›Ü’_OX]ØZ]™œ›ÛJ\ÚÜÈŠK\]Jİ^ØÚ\\^•‹^Ú]”YWÙ]N›ËİY[Î™JK™\JšY‹KšY
NÚYŠJ]›İÈ_Y[Ù^ØÛÛœİÙ\œ›Ü’_OX]ØZ]™œ›ÛJ\ÚÜÈŠKš[œÙ\
İ^ØÚ\\^•‹^Ú]”YWÙ]N›ËİY[Î™JNÚYŠJ]›İÈ_X]ØZ]Š
K

_XØ]ÚİÊ’[\ÜÜÚX›H	Ù[œ™YÚ\İ™\ˆÙ]H0è˜ÚKˆŠ_Yš[˜[^Ş
LJ___X\Ş[˜È[˜İ[ÛˆÊ
^ÚYŠJ^ÚÊL
KÊ[
Nİ^ØÛÛœİÙ\œ›Ü”ŸOX]ØZ]™œ›ÛJ\ÚÜÈŠK™[]J
K™\JšY‹KšY
NÚYŠŠ]›İÈØ]ØZ]Š
K

_XØ]ÚİÊ’[\ÜÜÚX›HHİ\š[Y\ˆÙ]H0è˜ÚKˆŠKÊLJ___\™]\›ˆKšœŞ
‹İ]N™OÈ“[ÙYšY\ˆH0è˜ÚHˆ“›İ]™[H0è˜ÚH‹ÛÛÜÙNÚ[™[šKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]•Û\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ•^HŸJKKšœŞ
^\™XH‹İ˜[YN˜KÛÚ[™ÙN”OœÊ‹\™Ù]˜[YJK™\]Z\™YˆL›İÜÎŒËÛ\ÜÓ˜[YNˆ™šY[Z[œ]™\Ú^™K[›Û™H‹XÙZÛ\ˆ‘^ˆ°ê\\™\ˆ\È™péİ\ÈH[Ú\ÈŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ°âXÚ0êX[˜ÙHŸJKKšœŞ
š[œ]‹İ\Nˆ™]H‹˜[YN›ËÛÚ[™ÙN”O˜Ê‹\™Ù]˜[YJK™\]Z\™YˆLÛ\ÜÓ˜[YNˆ™šY[Z[œ]ŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ”İY[ÈŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™Š™›Ü›X][ÛˆŠKÛ\ÜÓ˜[YN˜›^LH›İ[™YXˆLÈKLˆ^\ÛH›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÙOOH™›Ü›X][ÛˆÈ˜™ËXZ[Û‹YÛÛ^]Ú]Hˆ˜›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[ˆ‘›Ü›X][ÛˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™Š˜ÛÛ[Y\˜ÙHŠKÛ\ÜÓ˜[YN˜›^LH›İ[™YXˆLÈKLˆ^\ÛH›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ	ÙOOH˜ÛÛ[Y\˜ÙHÈ˜™ËXZ[Û‹YÛÛ^]Ú]Hˆ˜›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ^XZ[Û‹[]]Yİ™\^XZ[Û‹]^ŸXÚ[™[ˆÛÛ[Y\˜ÙHŸJW_JW_JK‰‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^\™YMÌ‹Ú[™[–È¸¦¨‹—_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\LÈLˆ‹Ú[™[–ÙI‰ŠÏÚKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎË\ØX›Y”ËÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH^\™YMŒ‹Ú[™[”ÏÈ”İ\™\ÜÚ[Û¸ )ˆˆÛÛ™š\›Y\ˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO“ŠLJKÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH‹Ú[™[ˆ[›[\ˆŸJW_JNšKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO“ŠL
KÛ\ÜÓ˜[YNˆ˜‹YÚÜİ›^LH^\™YMŒ‹Ú[™[ˆ”İ\š[Y\ˆŸJJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›YšÛ\ÜÓ˜[YNˆ˜‹\š[X\H›^LH‹Ú[™[šÈ‘[œ™YÚ\İ™[Y[8 )ˆˆ‘[œ™YÚ\İ™\ˆŸJW_JW_J_J_Y[˜İ[Ûˆ—Êİ]N™K]QÜ›İ\ÎÛ•šY]Ó]Nœ‹\ÚÜÎ›‹Ù^N˜KÛ•ÙÙÛNœËÛ‘Y]›ËÛ‘[]N˜ßJ^Ü™]\›ˆ›[™İOOL	‰›‹›[™İOOLÛ[šKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Mˆ‹Ú[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^\ÛH›Û\Ù[ZX›Û^XZ[Û‹]^‹Ú[™[™_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Y™ÜšYY™ÜšYXÛÛËLˆY™Ø\M‹Ú[™[–İ›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MY›X‹L‹Ú[™[–ÚKšœŞ
šÈ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^^È›Û[YY][H\\˜Ø\ÙH˜XÚÚ[™Ë]ÚYH^XZ[Û‹[]]Y‹Ú[™[ˆ”™[[˜Ù\È0è˜Z\™HŸJKKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[›X\
OšKšœŞ
YKÙÜ›İ\™Û•šY]ÎœÏÊ

OOßJ_Kœš[X\Kœ\œÛÛ—ÚY
J_JW_JK‹›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
šÈ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^^È›Û[YY][H\\˜Ø\ÙH˜XÚÚ[™Ë]ÚYH^XZ[Û‹[]]Y‹Ú[™[ˆ•0è˜Ú\ÈX[Y[\ÈŸJKKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[›‹›X\
OšKšœŞ
ØYKİ\ÚÎ™Ù^N˜KÛ•ÙÙÛNŠ
OOœÊ
KÛ‘Y]Š
OO›Ê
KÛ‘[]NŠ
OO˜Ê
_KšY
J_JW_JW_JW_J_Y[˜İ[Ûˆ˜YJ
^İ˜\ˆNØÛÛœİÚÙ^N™K\ÚÜÎXÜœÎœ‹ØÚY[\Î›‹[ÜN˜KÙ][™ÜÎœË™[ØY›ßOIÊ
KØËO]‹\ÙTİ]JLJKÙ‹O]‹\ÙTİ]J[
KŞ—O]‹\ÙTİ]J[
KİË×O]‹\ÙTİ]J[
KJÏO[[İ›ÚYœË›X™[ÙXÜŠOÏÈ˜ÛY[‹ÏP›Š
KÏSQJÌÊŠK™š[\ŠOO‘‘JJJJK]×Ê™š[\ŠOO•KœİY[ÏOOH™›Ü›X][ÛˆŠJKÏ]×Ê™š[\ŠOO•KœİY[ÏOOH˜ÛÛ[Y\˜ÙHŠJNİ‹\ÙQY™™Xİ


OOŠËœ™YÚ\İ\ŠØÜ™X]TØÚY[NŠ
OOßKÜ™X]QXÜŠ
OOßKÜ™X]T›ÙXİŠ
OOßKÜ™X]SÜ™\Š
OOßKÜ™X]T^[Y[Ø\\™NŠ
OOßKÜ™X]R[\ÜŠ
OOßKÜ™X]PÛÛXİŠ
OOßKÜ™X]U\ÚÎŠ
OOÚ
[
K
L
__JKË˜ÛÛœİ[YT[™[™Ê
OOOH\ÚÈ‰‰Š
[
K
L
JK

OO›Ë[œ™YÚ\İ\Š
JK×JNØ\Ş[˜È[˜İ[ÛˆŠJ^ØŠ[
Nİ^ØÛÛœİÙ\œ›Ü“_OX]ØZ]™œ›ÛJ\ÚÜÈŠK\]JÙÛ™WØ]•K™Û™P]Û[›™]È]J
KÒTÓÔİš[™Ê
_JK™\JšY‹KšY
NÚYŠJ]›İÈNØ]ØZ]Ê
_XØ]ÚØŠ’[\ÜÜÚX›HHY]™H0è›İ\ˆÙ]H0è˜ÚKˆŠ__X\Ş[˜È[˜İ[ÛˆŠJ^ØŠ[
Nİ^ØÛÛœİÙ\œ›Ü“_OX]ØZ]™œ›ÛJ\ÚÜÈŠK™[]J
K™\JšY‹KšY
NÚYŠJ]›İÈNØ]ØZ]Ê
_XØ]ÚØŠ’[\ÜÜÚX›HHİ\š[Y\ˆÙ]H0è˜ÚKˆŠ__XÛÛœİZË›[™İOOL	‰›[™İOOLÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹ZVÌLšH‹Ú[™[–ÚKšœŞ
™İ]Nˆ•0è˜Ú\È‹İX]Nˆ‘›Ü›X][Ûˆ]ÛÛ[Y\˜ÙHŸJKKšœŞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆœMHMH‹LYœ‹LL‹İ[NÜY[™Ğ›İÛNˆ˜Ø[Êœ™[H
È[ŠØY™KX\™XKZ[œÙ]X›İÛJJHŸKÚ[™[–Ş	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ^^È^\™YMŒ‹Ú[™[JKÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆKLMˆ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[ˆ]Xİ[™H0è˜ÚHİ\ˆ8 &Z[œİ[ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹MˆX^]Ë^È^^È^XZ[Û‹[]]Y‹Ú[™[ˆZ›İ]^ˆ[™H›İH]™XÈ[™H0êXÚ0êX[˜ÙKİH™]™[™^ˆ\È\™ˆ\È0ê[0ê™\È[ˆ™]\™HZY[Y[\\˜pë›ÛXÚH]]ÛX]\]Y[Y[ˆŸJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÚ
[
K
L
_KÛ\ÜÓ˜[YNˆ˜‹\š[X\H‹Ú[™[–ÚKšœŞ
ŒËİÙZYÚˆ˜›Û‹Û\ÜÓ˜[YNˆšMHËMHŸJKZ›İ]\ˆ[™H0è˜ÚH—_JW_JNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
—Ëİ]Nˆ”İY[È›Ü›X][Ûˆ‹]QÜ›İ\ÎšËÛ•šY]Ó]N—Ë\ÚÜÎ•Ù^N”ËÛ•ÙÙÛN”‹Û‘Y]•OOÚ
JK
L
_KÛ‘[]N•ŸJKKšœŞ
—Ëİ]Nˆ”İY[ÈÛÛ[Y\˜ÙH‹]QÜ›İ\Î–×K\ÚÜÎËÙ^N”ËÛ•ÙÙÛN”‹Û‘Y]•OOÚ
JK
L
_KÛ‘[]N•ŸJW_JW_JKÉ‰™I‰šKšœŞ
XYKİ\ÚÎ™‹ÛÛÜÙNŠ
OO™
LJKÛ”Ø]™Y›ßJKÉ‰™I‰šKšœŞ
M‹ÙXÜËX™[XÜ“‹ØÚY[SX™[Š
O[‹™š[™
OO•KšYOO]ËœØÚY[WÚY
JOO[[İ›ÚY’K›X™[
OÏÈ”Ù\ÜÚ[Ûˆ[˜ÛÛ›YH‹ØÚY[\Î›‹XÜœÎœ‹[ÜN˜KÙ^WÎ™KÙ][™ÜÎœËÛ”Ø]™Y›ËÛÛÜÙNŠ
OO—Ê[
_JW_J_Y[˜İ[ÛˆWÊK
^Ü™]\›ˆK›˜[YKÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê
_KœÛ™KÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê
_Kœ™Y™\™[˜ÙKÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê
_Y[˜İ[ÛˆXYJ
^ØÛÛœİÜ[ÜN™KXÜœÎØÚY[\Îœ‹Ù][™ÜÎ›‹ØY[™Î˜K\œ›ÜœßOIÊ
KÛË×O]‹\ÙTİ]JˆŠKÙ—O]‹\ÙTİ]J[
KÚO]‹\ÙTİ]JLJKJO[[İ›ÚY›‹›X™[ÙXÜŠOÏÈ˜ÛY[‹ÏX	ØŸ\ØÏ]‹\ÙSY[[Ê

OO™K™š[\ŠOOœÛÛYJOO•Kœ\œÛÛ—ÚYOORKšY
JKÙKJK]‹\ÙSY[[Ê

OO›™]ÈÙ]
‹™š[\ŠOOˆRK˜\˜Ú]™YØ]
K›X\
OO’KšY
JKÜ—JKÏ]‹\ÙSY[[Ê

OO›™]ÈÙ]
™š[\ŠOO“‹š\ÊKœØÚY[WÚY
JK›X\
OO’Kœ\œÛÛ—ÚY
JKİ—JKÏ]‹\ÙSY[[Ê

OO—Ë™š[\ŠOO”Ëš\ÊKšY
JK×Ë×JK]‹\ÙSY[[Ê

OO—Ë™š[\ŠOOˆTËš\ÊKšY
JK×Ë×JKÏ]‹\ÙSY[[Ê

OOØÛÛœİO[ËÓİÙ\Ø\ÙJ
Kš[J
NÜ™]\›ˆOÚË™š[\ŠOOWÊKJJNšßKÚË×JK]‹\ÙSY[[Ê

OOØÛÛœİO[ËÓİÙ\Ø\ÙJ
Kš[J
NÜ™]\›ˆOÕ™š[\ŠOOWÊKJJN•KÕ×JK]‹\ÙSY[[Ê

OO—Ë™š[™
OO’KšYOOY
OÏÛ[×ËJK]‹\ÙSY[[Ê

OO™İ™š[\ŠOO’Kœ\œÛÛ—ÚYOOY
K›X\
OOŠÙXÜ’KØÚY[Nœ‹™š[™
OO•KšYOORKœØÚY[WÚY
OÏÛ[JJKœÛÜ

KJOOİ˜\ˆØÛÛœİOJ
RKœØÚY[JOO[[İ›ÚY‘œİ\Ù]JOÏÈˆÜ™]\›Š

UKœØÚY[JOO[[İ›ÚY’œİ\Ù]JOÏÈˆŠK›ØØ[PÛÛ\\™JJ_JN–×Kİ‹JNÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹ZVÌLšH‹Ú[™[–ÚKšœŞ
™İ]NË˜Ú\]

KÕ\\Ø\ÙJ
JİËœÛXÙJJKİX]N˜	ÚË›[™İH	ÚË›[™İŒOİÎ˜ŸXXœÎœÌK™›Ü›X][ÛŸJKKšœŞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆœMHMH‹LYœ‹LL‹İ[NÜY[™Ğ›İÛNˆ˜Ø[Êœ™[H
È[ŠØY™KX\™XKZ[œÙ]X›İÛJJHŸKÚ[™[–×Ë›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HX‹M‹Ú[™[–ÚKšœŞ
ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^XZ[Û‹[]]Y‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\Nˆ^‹˜[YN›ËÛÚ[™ÙN’OO˜ÊK\™Ù]˜[YJKXÙZÛ\ˆ”™XÚ\˜Ú\ˆ\ˆ›ÛK0ê[0ê\Û™HİH°êY°ê\™[˜Ùx )ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]LLHŸJW_JKOÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[–ÌK—K›X\
OOšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™LŒ[š[X]K\[ÙHŸKJJ_JNœÏÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™Mˆ^XÙ[\ˆ‹Ú[™[šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^\™YMŒ‹Ú[™[œßJ_JN—Ë›[™İOOLÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆKLŒ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MH›^LŒËLŒ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXØ\™™ËXZ[Û‹\İ\™˜XÙHÚYİË\ÛÙ‹Ú[™[šKšœŞ
ÔËİÙZYÚˆ™š[‹Û\ÜÓ˜[YNˆšLLËLL^XZ[Û‹YÛÛÍLŸJ_JKKšœŞÊšˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^[È›Û\Ù[ZX›Û^XZ[Û‹]^‹Ú[™[–È]Xİ[ˆ‹‹ˆİ\ˆ	Ú[œİ[—_JW_JNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ĞË›[™İOOLÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœKLL^XÙ[\ˆ‹Ú[™[šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[›ÏÚKšœŞÊK‘œ˜YÛY[ØÚ[™[–È]Xİ[ˆ°ê\İ[]İ\ˆ0ªÈ‹Ëˆ0®È\›ZH\È‹ËˆXİYœËˆ—_JNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–È]Xİ[ˆ‹‹ˆXİYˆİ\ˆ	Ú[œİ[ˆ—_J_J_JNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[Ë›X\
OOšKšœŞ
›H‹ØÚ[™[šKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™ŠKšY
KÛ\ÜÓ˜[YNˆ˜Ø\™Ü›İ\›^ËY[][\ËXÙ[\ˆØ\MM^[Y˜[œÚ][Û‹\ÚYİÈİ™\œÚYİË\ÛÙ[È‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LLˆËLLˆÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YY[™ËXZ[Û‹YÛÛÌL^XZ[Û‹YÛÛYY\‹Ú[™[šKšœŞ
ØÛ\ÜÓ˜[YNˆšMˆËMˆ‹İ›ÚÙUÚYŒK_J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H›Û[YY][H^XZ[Û‹]^‹Ú[™[’K›˜[Y_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH[˜Ø]H^\ÛH^XZ[Û‹[]]Y‹Ú[™[–ÚKšœŞ
\ØÛ\ÜÓ˜[YNˆšLËHËLËHÚš[šËL‹İ›ÚÙUÚYŒK_JKKœÛ™KKœ™Y™\™[˜ÙI‰šKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^XZ[Û‹[]]YÍÌ‹Ú[™[–È°­È‹Kœ™Y™\™[˜ÙW_JW_JW_JW_J_KKšY
J_JK›[™İŒ	‰šKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO
OOˆRJKÛ\ÜÓ˜[YNˆ›]MH›^ËY[][\ËXÙ[\ˆØ\LˆLH^^È^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹]^‹Ú[™[–ÚKšœŞ
ÛØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JKÈ“X\Ü]Y\ˆˆY™šXÚ\ˆ‹ˆ\È‹Ëˆ\˜Ú]°ê\È
‹›[™İŠH‹KšœŞ
KØÛ\ÜÓ˜[YN˜LËHËLËH˜[œÚ][Û‹]˜[œÙ›Ü›H	ÚÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JK	‰•›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈÜXÙK^KLˆ‹Ú[™[–ÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆœLH^^È›Û[YY][H^XZ[Û‹[]]Y‹Ú[™[–İËˆ\˜Ú]°ê\È—_JK‹›[™İOOLÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆœLH^^È^XZ[Û‹[]]Y‹Ú[™[–È]Xİ[ˆ°ê\İ[]İ\ˆ0ªÈ‹Ëˆ0®È\›ZH\È\˜Ú]°ê\Ëˆ—_JNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™]šYK^H]šYKXZ[Û‹X›Ü™\ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙKÍL‹Ú[™[”‹›X\
OOšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO™ŠKšY
KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆØ\LÈMKLÈ^[Y˜[œÚ][Û‹XÛÛÜœÈİ™\˜™ËXZ[Û‹\İ\™˜XÙH‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^NHËNHÚš[šËL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YY[™ËXZ[Û‹X›Ü™\‹Í^XZ[Û‹[]]Y‹Ú[™[šKšœŞ
ØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH^XZ[Û‹[]]Y‹Ú[™[’K›˜[Y_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È^XZ[Û‹[]]YÍÌ‹Ú[™[–ÒKœÛ™KKœ™Y™\™[˜ÙI‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–Èˆ0­È‹Kœ™Y™\™[˜ÙW_JW_JW_JW_KKšY
J_JW_JW_JW_JK‰‰šKšœŞ
‹İ]N•‹›˜[YKÛÛÜÙNŠ
OO™Š[
KÚ[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ™ËXZ[Û‹\İ\™˜XÙHM‹Ú[™[–ÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH^\ÛH^XZ[Û‹[]]Y‹Ú[™[–ÚKšœŞ
\ØÛ\ÜÓ˜[YNˆšLËHËLËHÚš[šËL‹İ›ÚÙUÚYŒK_JK‹œÛ™W_JK‹œ™Y™\™[˜ÙI‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LH^\ÛH^XZ[Û‹[]]Y‹Ú[™[–È”°êY°ê\™[˜ÙHˆ‹‹œ™Y™\™[˜ÙW_JW_JKKšœŞÊšÈ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û\Ù[ZX›Û^XZ[Û‹]^‹Ú[™[–È’\İÜš\]YH8 %‹›[™İˆ‹›[™İŒOÈœÙ\ÜÚ[ÛœÈˆœÙ\ÜÚ[Ûˆ—_JK›[™İOOLÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[–È]Xİ[™HÙ\ÜÚ[Ûˆ[œ™YÚ\İ°êYHİ\ˆ‹‹›˜[YK‹ˆ—_JNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[”›X\

ÙXÜ’KØÚY[N•_JOOšKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\İ\\İYKX™]ÙY[ˆØ\LÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL‹Ú[™[–ÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LKH[˜Ø]H›Û[YY][H^XZ[Û‹]^‹Ú[™[–ÚKšœŞ
ÛKØÛ\ÜÓ˜[YNˆšMËMÚš[šËL^XZ[Û‹[]]YŸJK
OO[[İ›ÚY•K›X™[
OÏÈ”Ù\ÜÚ[Ûˆİ\š[pêYH—_JKI‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^XZ[Û‹[]]Y‹Ú[™[–È‘H‹Kœİ\Ù]Kˆ]H‹K™[™Ù]W_JW_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜Úš[šËL›İ[™YY[L‹HKLH^^È›Û[YY][H	ÒK˜˜[[˜ÙOŒÈ˜™Ë\™YML^\™YMŒˆ˜™ËYÜ™Y[‹ML^YÜ™Y[‹MÌŸXÚ[™[’K˜˜[[˜ÙOŒØ™\İH	Ú\ŠK˜˜[[˜ÙJ_Xˆ”ÛÛ0êHŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈÜšYÜšYXÛÛËLˆØ\Lˆ^^È^XZ[Û‹[]]Y‹Ú[™[–ÚKšœŞÊœ‹ØÚ[™[–È][™Hˆ‹\ŠKİ[^XİY
W_JKKšœŞÊœ‹ØÚ[™[–È”™péİHˆ‹\ŠKİ[™XÙZ]™Y
W_JW_JW_KKšY
J_JW_J_JW_J_Y[˜İ[Ûˆ\ÙJ
^ØÛÛœİÜØÚY[\Î™KXÜœÎÙ][™ÜÎœ‹ØY[™Î›‹\œ›Ü˜_OIÊ
KÜË×O]‹\ÙTİ]JLJKØËO]‹\ÙTİ]J[
KJO[[İ›ÚYœ‹›X™[ÙXÜŠOÏÈ˜ÛY[‹JO[[İ›ÚYœ‹›X™[ÜØÚY[JOÏÈœÙ\ÜÚ[Ûˆ‹X	Ú\Ø]‹\ÙSY[[Ê

OO™K™š[\ŠOˆU‹˜\˜Ú]™YØ]
KÙWJKÏ]‹\ÙSY[[Ê

OO™K™š[\ŠOˆHU‹˜\˜Ú]™YØ]
KÙWJKÏ]‹\ÙSY[[Ê

OOØÛÛœİ[™]ÈX\Ù›ÜŠÛÛœİÙˆ
T˜˜[[˜ÙOL‹œÙ]
œØÚY[WÚY
‹™Ù]
œØÚY[WÚY
OÏÌ
JÔ˜˜[[˜ÙJNÜ™]\›ˆŸKİJK]‹\ÙSY[[Ê

OO–Ë‹‹˜—KœÛÜ

‹
OOŠË™Ù]
šY
OÏÌ
KJË™Ù]
‹šY
OÏÌ
JKØ‹×JKÏ]‹\ÙSY[[Ê

OOË™š[\ŠOŠË™Ù]
‹šY
OÏÌ
OŒ
KœÛÜ

‹
OOŠË™Ù]
šY
OÏÌ
KJË™Ù]
‹šY
OÏÌ
JKİË×JKÏ]‹\ÙSY[[Ê

OO“‹œ™YXÙJ
‹
OO•ŠÊË™Ù]
šY
OÏÌ
K
KÓ‹×JK]‹\ÙSY[[Ê

OO”Ëœ™YXÙJ
‹
OO•ŠÊË™Ù]
šY
OÏÌ
K
KÔË×JKÏ]‹\ÙSY[[Ê

OOØÛÛœİV×KV×NÙ›ÜŠÛÛœİHÙˆ
^Ù›ÜŠÛÛœİHÙˆKš[œİ[Y[ÊU‹œ\Ú
Ù]N“K™YQ]K[[İ[“K˜[[İ[š[\•˜[YN•KœØÚY[WÚYJNÙ›ÜŠÛÛœİHÙˆKœ^[Y[ÊTœ\Ú
Ù]N“Kœ™XÙZ]™Y][[İ[“K˜[[İ[š[\•˜[YN•KœØÚY[WÚYJ_XÛÛœİOX‹›X\
OOŠÚY•KšYX™[•K›X™[JJNÜ™]\›Ù^XİY•‹™XÙZ]™Y”š[\“Ü[ÛœÎ’Kš[\‘šY[ˆœØÚY[HŸ_Kİ—JNÙ[˜İ[ÛˆŠŠ^Ù
O”OOUÛ[•Š_\™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹ZVÌLšH‹Ú[™[–ÚKšœŞ
™İ]Nˆ‘š[˜[˜ÙH‹İX]N˜	Ú\ŠÊ_H™\İ[0è[˜ØZ\ÜÙ\˜XœÎœÌK™›Ü›X][ÛŸJKKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆœMHMH‹LYœ‹LL‹İ[NÜY[™Ğ›İÛNˆ˜Ø[Êœ™[H
È[ŠØY™KX\™XKZ[œÙ]X›İÛJJHŸKÚ[™[›ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[–ÌK—K›X\
OšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™LMˆ[š[X]K\[ÙHŸKŠJ_JN˜OÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™Mˆ^XÙ[\ˆ‹Ú[™[šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^\™YMŒ‹Ú[™[˜_J_JNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X‹MˆM‹Ú[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LKH^VÌL\H›ÛX›Û\\˜Ø\ÙH˜XÚÚ[™Ë]ÚY\ˆ‹İ[NØÛÛÜˆˆØÍ˜LMXˆŸKÚ[™[ˆ•˜Z™XİÚ\™HŸJKKšœŞ
ÕÙ]NËš[\“X™[š˜Ú\]

KÕ\\Ø\ÙJ
JÚœÛXÙJJK[X™[˜İ]\È\È	ŞXJW_JKKšœŞÊœÙXİ[Ûˆ‹ØÚ[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ^\ÛH›Û\Ù[ZX›Û^XZ[Û‹]^‹Ú[™[ˆ”™\İH0è[˜ØZ\ÜÙ\ˆŸJK‹›[™İOOLÚKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹[]]Y‹Ú[™[–È]Xİ[™H‹ˆİ\ˆ	Ú[œİ[ˆ—_JNšKšœŞ
[‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[“‹›X\
OØÛÛœİWË™Ù]
‹šY
OÏÌOXÏOOU‹šYÜ™]\›ˆKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ›İ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙKÍ‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”Š‹šY
K˜\šXKY^[™Y’KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\LÈMKLÈ^[Y‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL[˜Ø]H^\ÛH›Û[YY][H^XZ[Û‹]^‹Ú[™[•‹›X™[JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜^\ÛH›Û[YY][H	ÔŒÈ^\™YMŒˆ^XZ[Û‹[]]YŸXÚ[™[”ŒÚ\Š
Nˆ”ÛÛ0êHŸJKKšœŞ
KØÛ\ÜÓ˜[YN˜LËHËLËH^XZ[Û‹[]]Y˜[œÚ][Û‹]˜[œÙ›Ü›H	ÒOÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JW_JKI‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹]›Ü™\‹XZ[Û‹X›Ü™\‹ÍŒM‹LÈLˆ‹Ú[™[šKšœŞ
ÜØÚY[RY•‹šYØÚY[SX™[•‹›X™[X™[XÜ™ŸJ_JW_K‹šY
_J_JKË›[™İŒ	‰šKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÊOˆUŠKÛ\ÜÓ˜[YNˆ›]MH›^ËY[][\ËXÙ[\ˆØ\LˆLH^^È^XZ[Û‹[]]Y˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹]^‹Ú[™[–ÚKšœŞ
ÛØÛ\ÜÓ˜[YNˆšLËHËLËH‹İ›ÚÙUÚYŒK_JKÏÈ“X\Ü]Y\ˆˆY™šXÚ\ˆ‹ˆ\È‹ˆ\˜Ú]°êY\È]™XÈÛÛH
‹Ë›[™İŠH8 %‹\Š
KKšœŞ
KØÛ\ÜÓ˜[YN˜LËHËLËH˜[œÚ][Û‹]˜[œÙ›Ü›H	ÜÏÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JKÉ‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈÜXÙK^KLˆ‹Ú[™[”Ë›X\
OØÛÛœİWË™Ù]
‹šY
OÏÌOXÏOOU‹šYÜ™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›İ™\™›İËZY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹X›Ü™\ˆ™ËXZ[Û‹\İ\™˜XÙKÍL‹Ú[™[–ÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO”Š‹šY
K˜\šXKY^[™Y’KÛ\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\LÈMKLÈ^[Y‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL[˜Ø]H^\ÛH^XZ[Û‹[]]Y‹Ú[™[•‹›X™[JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Úš[šËL][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^\™YMŒ‹Ú[™[š\Š
_JKKšœŞ
KØÛ\ÜÓ˜[YN˜LËHËLËH^XZ[Û‹[]]YÍÌ˜[œÚ][Û‹]˜[œÙ›Ü›H	ÒOÈœ›İ]KLNˆˆŸXİ›ÚÙUÚYŒK_JW_JW_JKI‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹]›Ü™\‹XZ[Û‹X›Ü™\‹ÍŒM‹LÈLˆ‹Ú[™[šKšœŞ
ÜØÚY[RY•‹šYØÚY[SX™[•‹›X™[X™[XÜ™ŸJ_JW_K‹šY
_J_JW_JW_JW_J_JW_J_Y[˜İ[ÛˆÙJ
^ØÛÛœİØÛX\™_OI

NÜ™]\›ˆKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™^X]]È›^Z[‹ZVØØ[ÊLšN™[JWHX^]ËLŞ›^XÛÛİ™\™›İËZY[ˆ™ËXZ[Û‹\İ\™˜XÙKÎ‹Ú[™[–ÚKšœŞÊšXY\ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ›Ü™\‹Xˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌXŒÌ×HMHKM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›ÛY\Ü^H^L›Û\Ù[ZX›Û‹Ú[™[ˆ\ÜÚ\İ[RSÓˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆ‘›Ü›X][Ûˆ0­È˜Z][Y[ØØ[0­È]Xİ[™HXİ[Ûˆ]]ÛX]\]YHŸJW_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎ™K˜\šXK[X™[ˆ‘Y™˜XÙ\ˆHÛÛ™\œØ][Ûˆ‹Û\ÜÓ˜[YNˆœ›İ[™YXˆLˆ^]Ú]KÍMH˜[œÚ][Û‹XÛÛÜœÈİ™\˜™Ë]Ú]KÍHİ™\^XZ[Û‹YÛÛ‹Ú[™[šKšœŞ
ÛËØÛ\ÜÓ˜[YNˆšMHËMHŸJ_JW_JKKšœŞ
ËßJKKšœŞ
PËßJKKšœŞ
TËßJW_J_Y[˜İ[ÛˆœÙJKŠ^Ü™]\›ˆJŞÜ]ˆ‹È‹[[Y[šKšœŞ
ÉØÚ[™[šKšœŞ
”KÛÛ“ØÚÎÙ^WÎ™KÛ’Ù^PÚ[™ÙYœŸJ_JKÚ[™[–ŞÚ[™^ˆL[[Y[šKšœŞ
KÚÙ^WÎ™KÛ“ØÚÎJ_KÜ]ˆ˜ÛÛXİÈ‹[[Y[šKšœŞ
”KÚÙ^WÎ™_J_KÜ]ˆ™XÛÛ\È‹[[Y[šKšœŞ
‹ßJ_KÜ]ˆ™[]™\È‹[[Y[šKšœŞ
XYKßJ_KÜ]ˆ™š[˜[˜ÙH‹[[Y[šKšœŞ
\ÙKßJ_KÜ]ˆ˜ÛÛ[Y\˜ÙH‹[[Y[šKšœŞ
˜YKÚÙ^WÎ™KÛ“ØÚÎJ_KÜ]ˆXÚ\È‹[[Y[šKšœŞ
˜YKßJ_KÜ]ˆ˜\ÜÚ\İ[‹[[Y[šKšœŞ
ÙKßJ_KÜ]ˆŠˆ‹[[Y[šKšœŞ
KİÎˆ‹È‹™\XÙNˆLJ_W_WJ_Y[˜İ[ÛˆŠÙY˜][[ÙN™OHœÚYÛš[ˆ‹˜[›™\[š]X[[XZ[œHˆ‹[XZ[™Y\™XİÎ›‹[XZ[™XYÛ›N˜OHL_J^ØÛÛœİÜË×O]‹\ÙTİ]JJKØËO]‹\ÙTİ]JŠKÙ‹O]‹\ÙTİ]JˆŠKŞ—O]‹\ÙTİ]JLJKİË×O]‹\ÙTİ]JLJKÓ‹×O]‹\ÙTİ]J[
KÚËO]‹\ÙTİ]JLJKĞË—O]‹\ÙTİ]J[
KÕ‹O]‹\ÙTİ]JLJKÒKWO]‹\ÙTİ]J[
KO]‹\ÙSY[[Ê

OOİ˜\ˆYNØÛÛœİOJ
YOPÏO[[İ›ÚYËœÜ]
ŠVÌWJOO[[İ›ÚY˜YKÓİÙ\Ø\ÙJ
JOÏÈˆÜ™]\›ˆOOOH™ÛXZ[˜ÛÛHŸOOOH™ÛÛÙÛ[XZ[˜ÛÛHÈšÎ‹ËÛXZ[™ÛÛÙÛK˜ÛÛKÈ›Kš[˜ÛY\Ê›İ]ÛÚËˆŠ_Kš[˜ÛY\ÊšİXZ[ˆŠ_Kš[˜ÛY\Ê›]™KˆŠOÈšÎ‹ËÛİ]ÛÚË›]™K˜ÛÛKÛXZ[È›[KĞ×JKÏ[ÏØ	İÚ[™İË›ØØ][Û‹›ÜšYÚ[ŸIİÚ[™İË›ØØ][Û‹œ]˜[Y_IİÚ[™İË›ØØ][Û‹œÙX\˜ÚXØ\Ş[˜È[˜İ[Ûˆ
J^İ˜\ˆYNÛKœ™]™[Y˜][

KÊ[
KJ[
KÊL
Nİ^ÚYŠÏOOH™›Ü™ÛİŠX]ØZ]˜]]œ™\Ù]\ÜİÛÜ™›Ü‘[XZ[
ËÜ™Y\™XİÎÚ[™İË›ØØ][Û‹›ÜšYÚ[ŸJK
L
NÙ[ÙHYŠÏOOHœÚYÛ\Š^ØÛÛœİÙ]NœK\œ›Ü˜™_OX]ØZ]˜]]œÚYÛ•\
Ù[XZ[˜Ë\ÜİÛÜ™™‹Ü[ÛœÎÙ[XZ[™Y\™XİÎ•ß_JNÚYŠ™J]›İÈ™NÚYŠ\K\Ù\Š]›İÈ™]È\œ›ÜŠ’[œØÜš\[Ûˆ0êXÚİpêYKˆ°êY\ÜØ^Y^‹ˆŠNÚYŠ\KœÙ\ÜÚ[Û‰‰Š
YO\K\Ù\‹šY[]Y\ÊOO[[İ›ÚY˜YK›[™İ
OOOL
^ÛÊœÚYÛš[ˆŠKÊÙ]HY™\ÜÙHÜÜğêH0êZ°è[ˆÛÛ\HÛÛ™š\›pêKˆÛÛ›™XİK]ÚH]™XÈÛˆ[İH\ÜÙHXš]Y[İH][\ÙH0ªÈ[İH\ÜÙHİX›pêHÈ0®ËˆŠNÜ™]\›Ÿ\KœÙ\ÜÚ[ÛŸŠËš[J
KÓİÙ\Ø\ÙJ
J_Y[Ù^ØÛÛœİÙ\œ›Üœ_OX]ØZ]˜]]œÚYÛ’[•Ú]\ÜİÛÜ™
Ù[XZ[˜Ë\ÜİÛÜ™™ŸJNÚYŠJ^ÚYŠ×ÊK›Y\ÜØYÙJJ^ÔŠËš[J
KÓİÙ\Ø\ÙJ
JNÜ™]\›Ÿ]›İÈ___XØ]Ú
J^ØÛÛœİ™O\H[œİ[˜Ù[Ùˆ\œ›ÜÜK›Y\ÜØYÙNˆ•[™H\œ™]\ˆ\İİ\™[YHÔÊYÊ™JJ_Yš[˜[^×ÊLJ__X\Ş[˜È[˜İ[Ûˆ

^ÚYŠPÊ\™]\›Ô
L
KÊ[
KJ[
NØÛÛœİÙ\œ›Ü›_OX]ØZ]˜]]œ™\Ù[™
İ\NˆœÚYÛ\‹[XZ[ËÜ[ÛœÎÙ[XZ[™Y\™XİÎ•ß_JNÚYŠ
LJKJ^ÔÊYÊK›Y\ÜØYÙJJNÜ™]\›ŸUJ•[ˆ›İ]™X]HY[ˆšY[8 &pê™H[›ŞpêKˆ][\ÙH[š\]Y[Y[H\È°êXÙ[ˆŠ_X\Ş[˜È[˜İ[ÛˆJ
^×ÊL
KÊ[
NØÛÛœİÙ\œ›Ü›_OX]ØZ]˜]]œÚYÛ’[•Ú]\ÜİÛÜ™
Ù[XZ[ÏÏØË\ÜİÛÜ™™ŸJN×ÊLJKI‰”Ê×ÊK›Y\ÜØYÙJOÈ“8 &XY™\ÜÙH¸ &Y\İ\È[˜ÛÜ™HÛÛ™š\›pêYKˆİ]œ™HH\›šY\ˆK[XZ[™péİH]Û\]YHİ\ˆÛÛˆ›İ]ÛˆHÛÛ™š\›X][Û‹ˆYÊK›Y\ÜØYÙJJ_\™]\›ˆKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ‹Ú[™[–İKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LL^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆˆ‹˜\šXKZY[ˆˆYH‹Û\ÜÓ˜[YNˆ˜[š[X]K[ÙÛË\Ü[ˆ^X]]ÈX‹MHLŒËLŒØš™XİXÛÛZ[ˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹˜\šXK[X™[ˆRSÓˆÔÈ‹Ú[™[ˆ³¦ÒSÓˆÔÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆØ\›™]HÛÛXİÈÚY™œ°êHŸJW_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X]]‹Ú[™[ÏÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
•‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈLLËLL^Y[Y\˜[LÌ‹İ›ÚÙUÚYŒKJKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ›]M›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆÛÛ™š\›YHÛˆY™\ÜÙHK[XZ[ŸJKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍH›Ë][™\›[™H‹Ú[™[–È•[ˆK[XZ[šY[8 &pê™H[›ŞpêH0èˆ‹KšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›]LH›ØÚÈœ™XZËX[›Û\Ù[ZX›Û^]Ú]H›Ë][™\›[™H‹İ[Nİ^XÛÜ˜][Ûˆ››Û™HŸKÚ[™[ßJW_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[ˆ“İ]œ™K[H]Û\]YHİ\ˆH›İ]ÛˆHÛÛ™š\›X][Ûˆİ\ˆXİ]™\ˆÛˆXØğêÈRSÓˆÔËˆ°ê\šYšYH]\ÜÚH\ÈÛİ\œšY\œÈ[™0ê\Ú\˜X›\ËˆŸJKI‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]M›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y[Y\˜[LÌÌH™ËY[Y\˜[LÌÌLMKLÈ^\ÛH^Y[Y\˜[LL‹Ú[™[’_JK‰‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›]M›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^\ÛH^\™YLŒ‹Ú[™[“ŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MˆÜXÙK^KLÈ‹Ú[™[–ÓI‰šKšœŞ
˜H‹Ú™Y“K\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[ˆ“İ]œš\ˆXHY\ÜØYÙ\šYHŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚYJ
K\ØX›YËÛ\ÜÓ˜[YN“OÈËY[›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍHMKLÈ^\ÛH›Û\Ù[ZX›Û^XZ[Û‹YÛÛˆ˜‹YÛÛ‹Ú[™[ÏÈ•°ê\šYšXØ][Û¸ )ˆˆ’¸ &XZHÛÛ™š\›pêH[ÛˆY™\ÜÙHŸJKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚY

K\ØX›Y•‹Û\ÜÓ˜[YNˆ™›^ËY[][\ËXÙ[\ˆ\İYKXÙ[\ˆØ\LˆKLˆ^\ÛH^]Ú]KÍMHİ™\^]Ú]H‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YN˜MËM	ÕÈ˜[š[X]K\Ü[ˆˆˆŸXJKÈ‘[›ÚH[ˆÛİ\œø )ˆˆ”™[›ŞY\ˆ8 &YK[XZ[—_JW_JW_JNšKšœŞÊK‘œ˜YÛY[ØÚ[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^^›Û\Ù[ZX›Û^]Ú]H‹Ú[™[œÏOOHœÚYÛ\ÈÜ°êY\ˆ[ˆÛÛ\HœÏOOH™›Ü™ÛİÈ“[İH\ÜÙHİX›pêHˆ”ÙHÛÛ›™Xİ\ˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKH^\ÛH^]Ú]KÍMH‹Ú[™[œÏOOHœÚYÛ\È’[œØÜš\[Ûˆ\ˆK[XZ[][İH\ÜÙHœÏOOH™›Ü™ÛİÈ”™péÛÚ\È[ˆY[ˆİ\ˆ0êYš[š\ˆ[ˆ›İ]™X]H[İH\ÜÙHˆÛÛ›™^[Ûˆ0èÛˆØ\›™]ğêXİ\š\ğêHŸJKÏOOH™›Ü™Ûİ‰‰šÏÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MˆÜXÙK^KM‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌL™Ë]Ú]KÍHMKLÈ^\ÛH^]Ú]KÍÍH‹Ú[™[ˆ”ÚH[ˆÛÛ\H^\İH]™XÈÙ]K[XZ[[ˆY[ˆH°êZ[š]X[\Ø][ÛˆšY[HZH0ê™H[›ŞpêKˆ°ê\šYšYHH›ğëHH°êXÙ\[Ûˆ]\È[™0ê\Ú\˜X›\ËˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛÊœÚYÛš[ˆŠK
LJKÊ[
_KÛ\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[ˆ”™]İ\ˆ0èHÛÛ›™^[ÛˆŸJW_JNšKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]‘Û\ÜÓ˜[YNˆ›]MˆÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆ‘K[XZ[ŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
ĞËØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍ‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\Nˆ™[XZ[‹™\]Z\™YˆL˜[YN˜Ë™XYÛ›N˜K˜\šXK\™XYÛ›H˜KÛÚ[™ÙN›OO™
K\™Ù]˜[YJKXÙZÛ\ˆ›İ\Ğ^[\K˜ÛÛH‹Û\ÜÓ˜[YN˜šY[Z[œ]X]]LLH	ØOÈ˜İ\œÛÜ‹[›İX[İÙYÜXÚ]KMÍHˆˆŸX]]ĞÛÛ\]Nˆ™[XZ[‹]]Ñ›Øİ\ÎœÏOOH™›Ü™ÛİŸJW_JW_JKÈOOH™›Ü™Ûİ‰‰šKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆ“[İH\ÜÙHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍ‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\NÈ^ˆœ\ÜİÛÜ™‹™\]Z\™YˆLZ[“[™İ‹˜[YN™‹ÛÚ[™ÙN›OOš
K\™Ù]˜[YJKXÙZÛ\ˆ¸ (¸ (¸ (¸ (¸ (¸ (¸ (¸ (ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLH‹LLH‹]]ĞÛÛ\]NœÏOOHœÚYÛ\È›™]Ë\\ÜİÛÜ™ˆ˜İ\œ™[\\ÜİÛÜ™ŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO˜ŠOOˆ[JKÛ\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚLËHÜLKÌˆ]˜[œÛ]K^KLKÌˆ^]Ú]KÍ˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹˜\šXK[X™[È“X\Ü]Y\ˆˆY™šXÚ\ˆ‹Ú[™[ÚKšœŞ
™ØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_JNšKšœŞ
ØËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_J_JW_JW_JKÏOOHœÚYÛš[ˆ‰‰šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ^\šYÚ‹Ú[™[šKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛÊ™›Ü™ÛİŠKÊ[
_KÛ\ÜÓ˜[YNˆ^^È^]Ú]KÍ˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹Ú[™[ˆ“[İH\ÜÙHİX›pêHÈŸJ_JK‰‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^\ÛH^\™YLŒ‹Ú[™[“ŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›YËÛ\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[ÏÈ•™]Z[^ˆ]Y[\¸ )ˆœÏOOHœÚYÛ\ÈÜ°êY\ˆ[ÛˆÛÛ\HœÏOOH™›Ü™ÛİÈ‘[›ŞY\ˆHY[ˆˆ”ÙHÛÛ›™Xİ\ˆŸJW_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH^XÙ[\ˆ‹Ú[™[œÏOOH™›Ü™ÛİÈZÉ‰šKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛÊœÚYÛš[ˆŠK
LJKÊ[
_KÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍMH˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹Ú[™[ˆ”™]İ\ˆ0èHÛÛ›™^[ÛˆŸJNšKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOÛÊÏOOHœÚYÛ\ÈœÚYÛš[ˆˆœÚYÛ\ŠKÊ[
_KÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍMH˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹Ú[™[œÏOOHœÚYÛ\È‘0êZ°è[ˆÛÛ\HÈÙHÛÛ›™Xİ\ˆˆ”\È[˜ÛÜ™HHÛÛ\HÈø &Z[œØÜš\™HŸJ_JW_J_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Mˆ^XÙ[\ˆ^^È^]Ú]KÍ‹Ú[™[ˆ•\ÈÛÛXİÈÛÛÚY™œ°ê\Èİ\ˆÛˆ\\™Z[ˆŸJW_J_J_Y[˜İ[Ûˆ×ÊJ^Ü™]\›‹Ù[XZ[›İÛÛ™š\›YYÚK\İ
J_Y[˜İ[ÛˆYÊJ^ØÛÛœİYKÓİÙ\Ø\ÙJ
NÜ™]\›ˆš[˜ÛY\Ê™[XZ[›İÛÛ™š\›YYŠOÈ•ÛˆY™\ÜÙHK[XZ[¸ &Y\İ\È[˜ÛÜ™HÛÛ™š\›pêYKˆš[˜ÛY\Ê˜[™XYH™YÚ\İ\™YŠ_š[˜ÛY\Ê\Ù\ˆ[™XYHŠOÈ•[ˆÛÛ\H^\İH0êZ°è]™XÈÙ]K[XZ[ˆš[˜ÛY\Êš[˜[YÙÚ[ˆŠ_š[˜ÛY\Êš[˜[YÜ™Y[X[ÈŠOÈ‘K[XZ[İH[İH\ÜÙH[˜ÛÜœ™Xİˆš[˜ÛY\Êœ˜]H[Z]ŠOÈ•›ÜH[]]™\Ëˆ]Y[H]Y[]Y\È[œİ[È]˜[H°êY\ÜØ^Y\‹ˆš[˜ÛY\Êœ\ÜİÛÜ™ŠI‰š[˜ÛY\ÊÙXZÈŠOÈ“H[İH\ÜÙHÚ]ÛÛ[š\ˆ]H[Ú[œÈˆØ\˜Xİ0ê™\Ëˆ™_Y[˜İ[ÛˆœÙJÛÛ‘Û™N™_J^ØÛÛœİİ—O]‹\ÙTİ]JˆŠKÛ‹WO]‹\ÙTİ]JˆŠKÜË×O]‹\ÙTİ]JLJKØËO]‹\ÙTİ]JLJKÙ‹O]‹\ÙTİ]J[
NØ\Ş[˜È[˜İ[Ûˆ
Š^ÚYŠ‹œ™]™[Y˜][

K
[
K›[™İŠ^Ú
“H[İH\ÜÙHÚ]ÛÛ[š\ˆ]H[Ú[œÈˆØ\˜Xİ0ê™\ËˆŠNÜ™]\›ŸZYŠOO[Š^Ú
“\È]^[İÈH\ÜÙH™HÛÜœ™\ÜÛ™[\ËˆŠNÜ™]\›ŸY
L
Nİ^ØÛÛœİÙ\œ›ÜßOX]ØZ]˜]]\]U\Ù\ŠÜ\ÜİÛÜ™JNÚYŠÊ]›İÈÎÙJ
_XØ]Ú
Ê^ØÛÛœİÏ]È[œİ[˜Ù[Ùˆ\œ›ÜİË›Y\ÜØYÙNˆ•[™H\œ™]\ˆ\İİ\™[YHÚ
\ÙJÊJ_Yš[˜[^Ù
LJ__\™]\›ˆKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LL^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆˆ‹˜\šXKZY[ˆˆYH‹Û\ÜÓ˜[YNˆ˜[š[X]K[ÙÛË\Ü[ˆ^X]]ÈX‹MHLŒËLŒØš™XİXÛÛZ[ˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹˜\šXK[X™[ˆRSÓˆÔÈ‹Ú[™[ˆ³¦ÒSÓˆÔÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆØ\›™]HÛÛXİÈÚY™œ°êHŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X]]‹Ú[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^^›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆ“›İ]™X]H[İH\ÜÙHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKH^\ÛH^]Ú]KÍMH‹Ú[™[ˆÚÚ\Ú\ÜÙ^ˆ[ˆ›İ]™X]H[İH\ÜÙHİ\ˆ›İ™HÛÛ\HŸJKKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]Û\ÜÓ˜[YNˆ›]MˆÜXÙK^KM‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆ“›İ]™X]H[İH\ÜÙHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍ‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\NœÏÈ^ˆœ\ÜİÛÜ™‹™\]Z\™YˆLZ[“[™İ‹˜[YNÛÚ[™ÙN˜OœŠ‹\™Ù]˜[YJKXÙZÛ\ˆ¸ (¸ (¸ (¸ (¸ (¸ (¸ (¸ (ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLH‹LLH‹]]ĞÛÛ\]Nˆ›™]Ë\\ÜİÛÜ™‹]]Ñ›Øİ\ÎˆLJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÊOˆXŠKÛ\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚLËHÜLKÌˆ]˜[œÛ]K^KLKÌˆ^]Ú]KÍ˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹˜\šXK[X™[œÏÈ“X\Ü]Y\ˆˆY™šXÚ\ˆ‹Ú[™[œÏÚKšœŞ
™ØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_JNšKšœŞ
ØËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_J_JW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆÛÛ™š\›Y\ˆH[İH\ÜÙHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍ‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\NœÏÈ^ˆœ\ÜİÛÜ™‹™\]Z\™YˆLZ[“[™İ‹˜[YN›‹ÛÚ[™ÙN˜O˜J‹\™Ù]˜[YJKXÙZÛ\ˆ¸ (¸ (¸ (¸ (¸ (¸ (¸ (¸ (ˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLH‹]]ĞÛÛ\]Nˆ›™]Ë\\ÜİÛÜ™ŸJW_JW_JK‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^\ÛH^\™YLÌ‹Ú[™[™ŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y˜ËÛ\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[˜ÏÈ•™]Z[^ˆ]Y[\¸ )ˆˆ‘0êYš[š\ˆ[Ûˆ›İ]™X]H[İH\ÜÙHŸJW_JW_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]Mˆ^XÙ[\ˆ^^ÈXY[™Ë\™[^Y^]Ú]KÍH‹Ú[™[–È•›ÜÈÛÛXİÈÛÛÚY™œ°ê\Èİ\ˆ›İ™H\\™Z[ˆ‹KšœŞ
˜œˆ‹ßJK“HÙ\™]\ˆ™H›Ú]˜[XZ\È›ÜÈÛ›°êY\È[ˆÛZ\‹ˆ—_JW_J_J_Y[˜İ[Ûˆ\ÙJJ^ØÛÛœİYKÓİÙ\Ø\ÙJ
NÜ™]\›ˆš[˜ÛY\Êœ\ÜİÛÜ™ŠI‰š[˜ÛY\ÊÙXZÈŠOÈ“H[İH\ÜÙHÚ]ÛÛ[š\ˆ]H[Ú[œÈˆØ\˜Xİ0ê™\Ëˆš[˜ÛY\Êœ˜]H[Z]ŠOÈ•›ÜH[]]™\Ëˆ°êY\ÜØ^Y^ˆ[œÈ[ˆ[œİ[ˆ™_Y[˜İ[ÛˆÜÙJÛÛ‘Û™N™_J^ØÛÛœİİ—O]‹\ÙTİ]JˆŠKÛ‹WO]‹\ÙTİ]JˆŠKÜË×O]‹\ÙTİ]JLJKØËO]‹\ÙTİ]JLJKÙ‹O]‹\ÙTİ]J[
KŞ—O]‹\ÙTİ]J[
KİË×O]‹\ÙTİ]JLJK]‹\ÙSY[[Ê

OO›[™İOOLÛ[

KİJNØ\Ş[˜È[˜İ[ÛˆÊ
^ÚYŠœ™]™[Y˜][

K
[
K›[™İ
^Ú
•›İ™H˜\ÙHÙXÜ°êHÚ]ÛÛ[š\ˆ]H[Ú[œÈØ\˜Xİ0ê™\ËˆŠNÜ™]\›ŸXÛÛœİÏ^

NÚYŠËœØÛÜ™OÊ^ØÛÛœİV×NĞËØ\›š[™É‰”‹œ\Ú
ËØ\›š[™ÊKËœİYÙÙ\İ[ÛœË›[™İŒ	‰”‹œ\Ú
ËœİYÙÙ\İ[ÛœËš›Ú[ŠˆŠJNØÛÛœİT‹›[™İŒØ	Ô‹š›Ú[Šˆ8 %Š_XˆˆÚ
Ù]H˜\ÙHÙXÜ°êH\İ›Ü°ê]š\ÚX›K‰ÕŸX
NÜ™]\›ŸZYŠOO[Š^Ú
“\È]^˜\Ù\ÈÙXÜ°ê\È™HÛÜœ™\ÜÛ™[\ËˆŠNÜ™]\›ŸY
L
Nİ^ØÛÛœİVŒÊ
NØŠŠ_XØ]ÚÚ
•[™H\œ™]\ˆ\İİ\™[YKˆ°êY\ÜØ^Y^‹ˆŠ_Yš[˜[^Ù
LJ__X\Ş[˜È[˜İ[ÛˆÊ
^İ˜\ˆÚYŠ
^×ÊL
K
[
Nİ^ØÛÛœİÙ]NßOX]ØZ]˜]]™Ù]\Ù\Š
KJPË\Ù\ŠOO[[İ›ÚY•šYÚYŠTŠ]›İÈ™]È\œ›ÜŠ”Ù\ÜÚ[Ûˆ[›İ]˜X›HŠNØÛÛœİZ\

KZ\

KOX]ØZ]
‹Y™™Y
KOX]ØZ]
Y™™Y
KİÜ˜\YÙ^N“KÜ˜\]•ßOX]ØZ]ÌÊKJKØÚXÚÕ˜[YN‘ÚXÚÒ]’OX]ØZ]LÊJKÙ\œ›Ü”_OX]ØZ]™œ›ÛJ\Ù\—ÜÙXÜ™]ÈŠKš[œÙ\
İ\Ù\—ÚY”‹Ø[•‹™XÛİ™\WÜØ[”Ü˜\YÚÙ^N“KÜ˜\Ú]•ËÚXÚ×İ˜[YN‘ÚXÚ×Ú]’Ù—Ø[ÛÜš]N™YÙ—ÛY[[ÜNÙ—İ[YNœ™Ù—Ü\˜[[\ÛN›™Ù—Ú]\˜][ÛœÎ˜YJNÚYŠJ]›İÈNØÛÛœİÙ]N›K\œ›Ü˜Y_OX]ØZ]™œ›ÛJ\Ù\—ÜÙXÜ™]ÈŠKœÙ[Xİ
šY\Ù\—ÚYØ[™XÛİ™\WÜØ[Ü˜\YÚÙ^KÜ˜\Ú]‹ÚXÚ×İ˜[YKÚXÚ×Ú]‹Ù—Ø[ÛÜš]KÙ—ÛY[[ÜKÙ—İ[YKÙ—Ü\˜[[\ÛKÙ—Ú]\˜][ÛœËÜ™X]YØ]ŠK™\J\Ù\—ÚY‹ŠK›X^X™TÚ[™ÛJ
NÚYŠY_[J]›İÈ™]È\œ›ÜŠ’[\ÜÜÚX›HH°êXİ\0ê\™\ˆ›ÜÈ\˜[pê™\ÈHÚY™œ™[Y[ˆŠNÙJJ_XØ]Ú
Ê^ØÛÛœİPÈ[œİ[˜Ù[Ùˆ\œ›ÜĞË›Y\ÜØYÙNˆ•[™H\œ™]\ˆ\İİ\™[YHÚ
Š_Yš[˜[^×ÊLJ___\™]\›ˆÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹N^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MH›^LMˆËLMˆ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌMH™Ë]Ú]KÌL‹Ú[™[šKšœŞ
^İÙZYÚˆ™š[‹Û\ÜÓ˜[YNˆšNËN^XZ[Û‹YÛÛŸJ_JKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆÛÙHH°êXİ\0ê\˜][ÛˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛHXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[ˆY™šXÚ0êH[™HÙ][H›Ú\Ëˆ[\š[Y^‹[HİH›İ^‹[H[ˆY]HğîÜ‹ˆ[\›Y]H°êXİ\0ê\™\ˆ›ÜÈÛÛXİÈÚH›İ\ÈİX›Y^ˆ›İ™H˜\ÙHÙXÜ°êKˆŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X]]‹Ú[™[–ÚKšœŞ
UØÛÙNÛÛÛ™š\›YYšËÛÛ™š\›SX™[ÏÈ”ğêXİ\š\Ø][Û¸ )ˆˆ’‰ØZH›İ0êH[ÛˆÛÙH8 %ÛÛ[Y\ˆ‹\ŞNË\šÎˆLJK‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]M›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^\ÛH^\™YLÌ‹Ú[™[™ŸJW_JW_J_JNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹N^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MH›^LMˆËLMˆ][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌMH™Ë]Ú]KÌL‹Ú[™[šKšœŞ
KİÙZYÚˆ™š[‹Û\ÜÓ˜[YNˆšNËN^XZ[Û‹YÛÛŸJ_JKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆ”˜\ÙHÙXÜ°êHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛHXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[ˆÚÚ\Ú\ÜÙ^ˆ[™H˜\ÙHÙXÜ°êH\İ[˜İHH›İ™H[İH\ÜÙKˆ[HÚY™œ™H›ÜÈÛÛXİÈ]‰Ù\İ˜[XZ\È[›ŞpêYH]HÙ\™]\‹ˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛHXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[ˆ•›ÜÈ[™›Ü›X][ÛœÈÙ[œÚX›\ÈÛÛÚY™œ°êY\Èİ\ˆ›İ™H\\™Z[]™\İ[[\ÚX›\ÈØ[œÈ›İ™H˜\ÙHÙXÜ°êKˆŸJW_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X]]‹Ú[™[šKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]”ËÛ”™\Ù]•O•œ™]™[Y˜][

KÛ\ÜÓ˜[YNˆœÜXÙK^KM‹]]ĞÛÛ\]Nˆ›Ù™ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆ”˜\ÙHÙXÜ°êHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
KİÙZYÚˆ™š[‹Û\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍŸJKKšœŞ
š[œ]‹İ\NœÏÈ^ˆœ\ÜİÛÜ™‹™\]Z\™YˆLZ[“[™İ˜[YNÛÚ[™ÙN•OœŠ™
\™Ù]˜[YJJKXÙZÛ\ˆ•[™H˜\ÙH˜XÚ[H0è™][š\ˆİ\ˆ›İ\È‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLH‹LLH‹]]ĞÛÛ\]Nˆ›™]Ë\\ÜİÛÜ™‹]]ĞÛÜœ™Xİˆ›Ù™ˆ‹]]ĞØ\][^™Nˆ›Ù™ˆ‹Ü[ÚXÚÎˆL_JKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÊOˆU
KÛ\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚLËHÜLKÌˆ]˜[œÛ]K^KLKÌˆ^]Ú]KÍ˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹˜\šXK[X™[œÏÈ“X\Ü]Y\ˆˆY™šXÚ\ˆ‹Ú[™[œÏÚKšœŞ
™ØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_JNšKšœŞ
ØËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_J_JW_JK‰‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ‹[]LH‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LKH›^LHØ\LH‹Ú[™[–ÌK‹ËK›X\
OšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YN˜Y[›^LH›İ[™YY[˜[œÚ][Û‹XÛÛÜœÈ	ÕS‹œØÛÜ™OÚ–Ó‹œØÛÜ™WNˆ˜™Ë]Ú]KÌMHŸXK
J_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜^^È›Û[YY][H	ÛM–Ó‹œØÛÜ™W_XÚ[™[™–Ó‹œØÛÜ™W_JW_JK‹Ø\›š[™É‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^]Ú]KÍMH‹Ú[™[“‹Ø\›š[™ßJW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆÛÛ™š\›Y\ˆH˜\ÙHÙXÜ°êHŸJKKšœŞ
š[œ]‹İ\NœÏÈ^ˆœ\ÜİÛÜ™‹™\]Z\™YˆLZ[“[™İ˜[YN›‹ÛÚ[™ÙN•O˜J™
\™Ù]˜[YJJKXÙZÛ\ˆ”ØZ\Ú\ÜÙ^ˆ0è›İ]™X]H›İ™H˜\ÙH‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]‹]]ĞÛÛ\]Nˆ›™]Ë\\ÜİÛÜ™‹]]ĞÛÜœ™Xİˆ›Ù™ˆ‹]]ĞØ\][^™Nˆ›Ù™ˆ‹Ü[ÚXÚÎˆL_JW_JK‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^\ÛH^\™YLÌ‹Ú[™[™ŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y˜ËÛ\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[˜ÏÈ‘ğê[°ê\˜][Û¸ )ˆˆ‘ğê[°ê\™\ˆ[ÛˆÛÙHH°êXİ\0ê\˜][ÛˆŸJW_J_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]MH^XÙ[\ˆ^^ÈXY[™Ë\™[^Y^]Ú]KÍH‹Ú[™[ˆ”ÚH›İ\ÈİX›Y^ˆÙ]H˜\ÙHÙXÜ°êK›ÜÈÛÛXİÈÙ\›Û\œ°êXİ\0ê\˜X›\È8 %Ø]YˆÚH›İ\ÈÛÛœÙ\™^ˆ›İ™HÛÙHH°êXİ\0ê\˜][Û‹ˆŸJW_J_J_XÛÛœİ\ÙOLM‹ÜÙOLÌÙ[˜İ[ÛˆÙJJ^ØÛÛœİX]ØŠJK[™]ÈZ[\œ˜^J›[™İ
NÙ›ÜŠ]LÛ›[™İÛŠÊÊ\–Û—O]˜Ú\ÛÙP]
ŠNÜ™]\›ˆ‹˜Y™™\ŸY[˜İ[ÛˆÜÙJÜÙXÜ™]Î™KÛ•[›ØÚÎÛ”ÚYÛ“İ]œŸJ^ØÛÛœİÛ‹WO]‹\ÙTİ]JˆŠKÜË×O]‹\ÙTİ]JLJKØËO]‹\ÙTİ]JLJKÙ‹O]‹\ÙTİ]J[
KŞ—O]‹\ÙTİ]JLJKİË×O]‹\ÙTİ]JˆŠKÓ‹×O]‹\ÙTİ]J™]È]JNİ‹\ÙQY™™Xİ


OOØÛÛœİO\Ù][\˜[


OO”Ê™]È]JKYLÊNÜ™]\›Š
OO˜ÛX\’[\˜[
J_K×JNØÛÛœİÏS‹ÓØØ[Q]Tİš[™Ê™œ‹Q”ˆ‹İÙYZÙ^Nˆ›Û™È‹^Nˆ›[Y\šXÈ‹[Ûˆ›Û™È‹YX\ˆ›[Y\šXÈŸJKÕO]‹\ÙTİ]J

OO›™]ÈT“ÙX\˜Ú\˜[\ÊÚ[™İË›ØØ][Û‹œÙX\˜Ú
K™Ù]
™XYÈŠOOOHŒHŠKĞË—O]‹\ÙTİ]J×JK]‹\ÙT™YŠ[
NÙ[˜İ[Ûˆ
J^ÚYŠU
\™]\›ØÛÛœİÏ[™]È]KTİš[™ÊË™Ù]İ\œÊ
JKœYİ\
‹ŒŠJÈˆŠÔİš[™ÊË™Ù]Z[]\Ê
JKœYİ\
‹ŒŠJÈˆŠÔİš[™ÊË™Ù]ÙXÛÛ™Ê
JKœYİ\
‹ŒŠJÈ‹ˆŠÔİš[™ÊË™Ù]Z[\ÙXÛÛ™Ê
JKœYİ\
ËŒŠNÔŠO–Ë‹‹’ÉÑWH	Ó_XJ_]‹\ÙQY™™Xİ


OOÕ‹˜İ\œ™[	‰Š‹˜İ\œ™[œØÜ›ÛÜU‹˜İ\œ™[œØÜ›ÛZYÚ
_KĞ×JNØ\Ş[˜È[˜İ[ÛˆJKËKJ^Ô
™0êX][\Ü\Ú]Ø\ÛHŠNØÛÛœİØ\™ÛÛŒšY˜Y_OX]ØZ]ÚJ\Ş[˜Ê
OOØÛÛœİØ\™ÛÛŒšY_OX]ØZ][\Ü
‹‹Ú[™^™\ÛKXÍYÛÒ]Q•KšœÈŠNÜ™]\›Ø\™ÛÛŒšY__K×JNÔ
š\Ú]Ø\ÛH[\Ü0êHŠK
™0êX]\™ÛÛŒšYŠNØÛÛœİOX]ØZ]YJÜ\ÜİÛÜ™“KØ[›™]ÈZ[\œ˜^JÙJÊJKY[[ÜTÚ^™N‘]\˜][ÛœÎ’\˜[[\ÛN”K\Ú[™İ›ÜÙKİ]]\Nˆ˜š[˜\HŸJNÔ
˜\™ÛÛŒšY\›Z[°êHŠNØÛÛœİ™O]\[ÙŠÚ[™İË˜Ü\É‰Ú[™İË˜Ü\ËœİXJNÔ
\[ÙˆÜ\ËœİXH]˜[[\ÜÙ^Nˆ	Ø™_X
K
˜\[[\ÜÙ^HŠNİ^ØÛÛœİOX]ØZ]Ü\ËœİXKš[\ÜÙ^Jœ˜]È‹KÛ˜[YNˆQTËQĞÓH‹[™İš\Ù_KKÈ™[˜Ü\‹™XÜ\‹Ü˜\Ù^H‹[Ü˜\Ù^H—JNÜ™]\›ˆ
š[\ÜÙ^H°ê]\ÜÚHŠK_XØ]Ú
J^ØÛÛœİ]H[œİ[˜Ù[Ùˆ\œ›ÜØ	İK›˜[Y_Nˆ	İK›Y\ÜØYÙ_X”İš[™ÊJNİ›İÈ
[\ÜÙ^H\œ™]\ˆ	ÖX
K__X\Ş[˜È[˜İ[ÛˆJJ^ÓKœ™]™[Y˜][

K
[
K
L
Nİ^ÚYŠ
^Û]ÎÙKšÙ—Ø[ÛÜš]OOOHœšÙŒˆÕÏX]ØZ]
ËKœ™XÛİ™\WÜØ[KšÙ—Ø[ÛÜš]KKšÙ—ÛY[[ÜKKšÙ—İ[YKKšÙ—Ü\˜[[\ÛKKšÙ—Ú]\˜][ÛœÊN•ÏX]ØZ]JËKœ™XÛİ™\WÜØ[KšÙ—ÛY[[ÜKKšÙ—İ[YKKšÙ—Ü\˜[[\ÛKLJNØÛÛœİX]ØZ]ÑJKÜ˜\YÚÙ^KKÜ˜\Ú]‹ÊNÚYŠX]ØZ]JK˜ÚXÚ×İ˜[YKK˜ÚXÚ×Ú]ŠJ]›İÈ™]È\œ›ÜŠš[˜[YŠNİ
L
_Y[Ù^Û]ÎÚYŠKšÙ—Ø[ÛÜš]OOOHœšÙŒˆÕÏX]ØZ]
‹KœØ[KšÙ—Ø[ÛÜš]KKšÙ—ÛY[[ÜKKšÙ—İ[YKKšÙ—Ü\˜[[\ÛKKšÙ—Ú]\˜][ÛœÊN•ÏX]ØZ]J‹KœØ[KšÙ—ÛY[[ÜKKšÙ—İ[YKKšÙ—Ü\˜[[\ÛKL
KX]ØZ]JËK˜ÚXÚ×İ˜[YKK˜ÚXÚ×Ú]ŠJ]›İÈ™]È\œ›ÜŠš[˜[YŠNİ
ËLJ__XØ]Ú
Ê^ÚYŠÈ[œİ[˜Ù[Ùˆ\œ›Ü‰‰ŠË›Y\ÜØYÙOOOHš[˜[YŸË›Y\ÜØYÙKš[˜ÛY\Ê™XÜ\Š_Ë›Y\ÜØYÙKš[˜ÛY\Ê“Ü\˜][ÛˆŠJ_È[œİ[˜Ù[ÙˆÓQ^Ù\[Û‰‰ŠË›˜[YOOOH“Ü\˜][Û‘\œ›ÜˆŸË›˜[YOOOH’[˜[YXØÙ\ÜÑ\œ›ÜˆŠJZ
ÈÛÙHH°êXİ\0ê\˜][Ûˆ[˜ÛÜœ™Xİˆˆ”˜\ÙHÙXÜ°êH[˜ÛÜœ™XİKˆŠNÙ[Ù^ØÛÛœÛÛK™\œ›ÜŠ•[›ØÚÈ\œ›Üˆ‹È[œİ[˜Ù[Ùˆ\œ›ÜØ	ÕË›˜[Y_Nˆ	ÕË›Y\ÜØYÙ_X”İš[™ÊÊKÈ[œİ[˜Ù[Ùˆ\œ›ÜÕËœİXÚÎ›ÚY
NØÛÛœİUÈ[œİ[˜Ù[Ùˆ\œ›ÜÕË›˜[YNˆ‘\œ›Üˆ‹OUÈ[œİ[˜Ù[Ùˆ\œ›Ü‰‰•Ë›Y\ÜØYÙOØˆ	ÕË›Y\ÜØYÙ_XˆˆÚ
[™H\œ™]\ˆ\İİ\™[YH
	ÒIÔ_JKˆ°êY\ÜØ^Y^‹˜
__Yš[˜[^Ù
LJ__\™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛMHKMˆ‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYMHÜLM^\ÛHXY[™Ë]YÚ^]Ú]KÍMH‹Ú[™[šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ˜Ø\][^™H‹Ú[™[šßJ_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^LH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹N^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆˆ‹˜\šXKZY[ˆˆYH‹Û\ÜÓ˜[YNˆ˜[š[X]K[ÙÛË\Ü[ˆ^X]]ÈX‹MLMˆËLMˆØš™XİXÛÛZ[ˆÛN›X‹MHÛNšLŒÛNËLŒŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û˜XÚÚ[™Ë]ÚYH‹˜\šXK[X™[ˆRSÓˆÔÈ‹Ú[™[ˆ³¦ÒSÓˆÔÈŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X]]‹Ú[™[–ÚKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]•KÛ”™\Ù]“OO“Kœ™]™[Y˜][

KÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[–ŞÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆÛÙHH°êXİ\0ê\˜][ÛˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
Õ‹ØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍ‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹İ\Nˆ^‹™\]Z\™YˆL˜[YNËÛÚ[™ÙN“OO—ÊK\™Ù]˜[YJKXÙZÛ\ˆ–VVVVV‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLH›Û[[Û›È‹]]ĞÛÛ\]Nˆ›Ù™ˆ‹]]ĞÛÜœ™Xİˆ›Ù™ˆ‹]]ĞØ\][^™Nˆ›Ù™ˆ‹Ü[ÚXÚÎˆLK]]Ñ›Øİ\ÎˆLJW_JW_JNšKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
›X™[‹ØÛ\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆ”˜\ÙHÙXÜ°êHŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
KİÙZYÚˆ™š[‹Û\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍŸJKKšœŞ
š[œ]‹İ\NœÏÈ^ˆœ\ÜİÛÜ™‹™\]Z\™YˆL˜[YN›‹ÛÚ[™ÙN“OO˜J™
K\™Ù]˜[YJJKXÙZÛ\ˆ•›İ™H˜\ÙHÙXÜ°êH‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLH‹LLH‹]]ĞÛÛ\]Nˆ›™]Ë\\ÜİÛÜ™‹]]ĞÛÜœ™Xİˆ›Ù™ˆ‹]]ĞØ\][^™Nˆ›Ù™ˆ‹Ü[ÚXÚÎˆLK]]Ñ›Øİ\ÎˆLJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÊOOˆSJKÛ\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚLËHÜLKÌˆ]˜[œÛ]K^KLKÌˆ^]Ú]KÍ˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹˜\šXK[X™[œÏÈ“X\Ü]Y\ˆˆY™šXÚ\ˆ‹Ú[™[œÏÚKšœŞ
™ØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_JNšKšœŞ
ØËØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK_J_JW_JW_JK‰‰šKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^\ÛH^\™YLÌ‹Ú[™[–ÚKšœŞ
›‹ØÛ\ÜÓ˜[YNˆšMËMÚš[šËL‹İ›ÚÙUÚYŒK_JK—_JKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y˜ËÛ\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[˜ÏÈ‘0ê]™\œ›İZ[YÙx )ˆˆ‘0ê]™\œ›İZ[\ˆŸJW_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH^XÙ[\ˆ‹Ú[™[šKšœŞ
˜]Ûˆ‹ÛÛÛXÚÎŠ
OOØŠOOˆSJK
[
KJˆŠKÊˆŠ_KÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍMH˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹Ú[™[È•][\Ù\ˆXH˜\ÙHÙXÜ°êHˆ”˜\ÙHÙXÜ°êHİX›pêYHÈŸJ_JW_JK	‰Ë›[™İŒ	‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]M‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^^È›Û[YY][H^]Ú]KÍH‹Ú[™[ˆ’›İ\›˜[H›ÙÜ™\ÜÚ[ÛˆŸJKKšœŞ
™]ˆ‹Ü™Y•‹Û\ÜÓ˜[YNˆ›X^ZMŒİ™\™›İË^KX]]È›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™Ë]Ú]KÍHLÈ‹Ú[™[Ë›X\

KÊOOšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›Û[[Û›È^^ÈXY[™Ë\™[^Y^]Ú]KÎ‹Ú[™[“_KÊJ_JW_JW_J_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœ‹Lˆ^XÙ[\ˆ^^ÈXY[™Ë\™[^Y^]Ú]KÍH‹Ú[™[ˆ•›İ™HÛ0êHHÚY™œ™[Y[š][š\]Y[Y[[ˆpê[[Ú\™Kˆ[H\İY™˜XğêYH0èÚ\]YH™\›Y]\™HHHYÙKˆŸJKKšœŞÊ˜]Ûˆ‹ÛÛÛXÚÎœ‹Û\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚMHÜLM›^][\ËXÙ[\ˆØ\LKH›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™Ë]Ú]KÍHLÈKLˆ^\ÛH^]Ú]KÍMH˜[œÚ][Û‹XÛÛÜœÈİ™\^XZ[Û‹YÛÛ‹˜\šXK[X™[ˆ‘0êXÛÛ›™^[Ûˆ‹]Nˆ‘0êXÛÛ›™^[Ûˆ‹Ú[™[–ÚKšœŞ
Õ‹ØÛ\ÜÓ˜[YNˆšMËM‹İ›ÚÙUÚYŒK_JK‘0êXÛÛ›™^[Ûˆ—_JW_J_X\Ş[˜È[˜İ[ÛˆÙÊJ^ØÛÛœİÙ]N\œ›ÜœŸOX]ØZ]™[˜İ[ÛœËš[›ÚÙJ˜[X˜\ÜØYÜ‹Z[š]\È‹Ø›ÙN™_JNÚYŠŠ]›İÈ™]È\œ›ÜŠ‹›Y\ÜØYÙJNÚYŠO[[	‰™\œ›ÜŠ]›İÈ™]È\œ›ÜŠ™\œ›ÜŠNÜ™]\›ˆY[˜İ[Ûˆ™ÊJ^Ü™]\›ˆOÛ™]È[‘]U[YQ›Ü›X]
™œ‹Q”ˆ‹Ù]Tİ[Nˆ›YY][HŸJK™›Ü›X]
™]È]JJJNˆ¸ %ŸY[˜İ[ÛˆÙJ
^ØÛÛœİÙKO]‹\ÙTİ]J×JKÜ‹—O]‹\ÙTİ]JˆŠKØK×O]‹\ÙTİ]JˆŠKÛË×O]‹\ÙTİ]JLJKÙ—O]‹\ÙTİ]JˆŠKÚO]‹\ÙTİ]JLJK]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOİ^ØÛÛœİÏX]ØZ]ÙÊØXİ[Ûˆ›\İŸJNİ
Ëš[š]\Ê_XØ]Ú
Ê^ÙŠÈ[œİ[˜Ù[Ùˆ\œ›ÜÔË›Y\ÜØYÙNˆÚ\™Ù[Y[[\ÜÜÚX›KˆŠ__K×JNİ‹\ÙQY™™Xİ


OOØŠ
_KØ—JNØ\Ş[˜È[˜İ[ÛˆÊ
^ÚYŠ‹š[J
J^ØÊL
KŠˆŠKÊˆŠNİ^ØÛÛœİÏX]ØZ]ÙÊØXİ[Ûˆ˜Ü™X]H‹X™[œ‹š[J
_JNÜÊË\›
KŠˆŠK]ØZ]Š
_XØ]Ú
Ê^ÙŠÈ[œİ[˜Ù[Ùˆ\œ›ÜÔË›Y\ÜØYÙNˆÜ°êX][Ûˆ[\ÜÜÚX›KˆŠ_Yš[˜[^ØÊLJ___X\Ş[˜È[˜İ[ÛˆÊÊ^ØÊL
KŠˆŠNİ^Ø]ØZ]ÙÊØXİ[Ûˆœ™]›ÚÙH‹[š]RY”ßJK]ØZ]Š
_XØ]Ú
Ê^ÙŠÈ[œİ[˜Ù[Ùˆ\œ›ÜÚË›Y\ÜØYÙNˆ”°ê]›ØØ][Ûˆ[\ÜÜÚX›KˆŠ_Yš[˜[^ØÊLJ__X\Ş[˜È[˜İ[ÛˆŠ
^Ø]ØZ]˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
JK
L
KÚ[™İËœÙ][Y[İ]


OO
LJKN
_\™]\›ˆKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›X^]ËM‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈX‹Lˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒN[WH‹Ú[™[ˆYZ[š\İ˜][ÛˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹Ú[™[ˆ“Y[œÈ[X˜\ÜØY]\ˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^]Ú]KÍŒ‹Ú[™[ˆ•[ˆY[ˆ\œÛÛ›™[][\ØX›H\ˆ[™HÙ][H\œÛÛ›™H]°ê]›ØØX›H0èİ][ÛY[ˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÈ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆÜ°êY\ˆ[ˆY[ˆ\œÛÛ›™[ŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÜšYØ\LÈY™ÜšYXÛÛËVÌYœ—Ø]]×H‹Ú[™[–ÚKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\Lˆ^\ÛH^]Ú]KÍÌ‹Ú[™[–È“›ÛHH™\0ê™H‹KšœŞ
š[œ]‹İ˜[YNœ‹ÛÚ[™ÙN”ÏO›ŠË\™Ù]˜[YJKX^[™İŒLŒXÙZÛ\ˆ”™[Zpê™H[X˜\ÜØYšXÙH‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™ËVÈÌÌYÍWHMKLÈ^X˜\ÙH^]Ú]Hİ][™K[›Û™H›Øİ\Î˜›Ü™\‹XZ[Û‹YÛÛŸJW_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y›ß\‹š[J
KÛÛXÚÎŠ
OO›ÚYÊ
KÛ\ÜÓ˜[YNˆœÙ[‹Y[™›İ[™YXˆ™ËXZ[Û‹YÛÛMHKLÈ›Û\Ù[ZX›Û^VÈÌÌNL™—H\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
ŒËØÛ\ÜÓ˜[YNˆ›\‹Lˆ[›[™HMHËMHŸJK‘ğê[°ê\™\ˆHY[ˆ—_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÜšYØ\Lˆ^\ÛH^]Ú]KÍŒÛN™ÜšYXÛÛËLÈ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ¸§$ÈXİ]˜][Ûˆ]H™[ZY\ˆÛÛ\HŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ¸§$ÈXØğêÈ[™[ˆ[Ú\ÈŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ¸§$Èİ\È\ÈİY[ÜÈŸJW_JKI‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍ™ËVÈÌÌYÍWHM‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XZ[Û‹YÛÛ‹Ú[™[ˆ“Y[ˆ°ê0è[›ŞY\ˆİ\ˆÚ]Ğ\ŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›^›^XÛÛØ\LÈÛN™›^\›İÈÛNš][\ËXÙ[\ˆ‹Ú[™[–ÚKšœŞ
˜ÛÙH‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LHœ™XZËX[^\ÛH^]Ú]KÍÍH‹Ú[™[˜_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚYŠ
KÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍLMKLˆ^XZ[Û‹YÛÛ‹Ú[™[–ÚÚKšœŞ
ÜØÛ\ÜÓ˜[YNˆ›\‹Lˆ[›[™HŸJNšKšœŞ
”ËØÛ\ÜÓ˜[YNˆ›\‹Lˆ[›[™HŸJKÈÛÜpêHˆÛÜY\ˆ—_JW_JW_JK	‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›]M^\ÛH^\™YLÌ‹Ú[™[™JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MHİ™\™›İËZY[ˆ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎL‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹Xˆ›Ü™\‹]Ú]KÌLMH‹Ú[™[šKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆ“Y[œÈÜ°êpê\ÈŸJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™]šYK^H]šYK]Ú]KÌL‹Ú[™[–ÙK›X\
ÏOšKšœŞÊ˜\XÛH‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LÈMHY™ÜšYXÛÛËVÌYœ—Ø]]×Ø]]×HYš][\ËXÙ[\ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
IØÛ\ÜÓ˜[YNˆ^XZ[Û‹YÛÛŸJKKšœŞ
œİ›Û™È‹ØÚ[™[”Ë›X™[JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YY[™Ë]Ú]KÌLLˆKLH^^È^]Ú]KÍŒ‹Ú[™[”Ëœİ]\ÏOOH˜Xİ]™HÈ“›Ûˆİ]™\”Ëœİ]\ÏOOH˜ÛZ[YYÈXİ]°êHˆ”°ê]›Ü]pêHŸJW_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍL‹Ú[™[–ÈÜ°êpêHH‹™ÊË˜Ü™X]YØ]
Kˆ0­È^\˜][Ûˆ‹Ë˜XØÙ\Ü×Ù^\™\×Ø]Ó™ÊË˜XØÙ\Ü×Ù^\™\×Ø]
Nˆˆ[Ú\È\°êÈXİ]˜][Ûˆ—_JW_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍL‹Ú[™[”Ë˜ÛZ[YYØ]ØXİ]°êHH	Ó™ÊË˜ÛZ[YYØ]
_XˆˆŸJKËœİ]\ÈOOHœ™]›ÚÙY‰‰šKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Y›ËÛÛXÚÎŠ
OO›ÚYÊËšY
KÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLÌÌÌLÈKLˆ^\ÛH^\™YLŒ‹Ú[™[–ÚKšœŞ
TËØÛ\ÜÓ˜[YNˆ›\‹Lˆ[›[™HŸJK”°ê]›Ü]Y\ˆ—_JW_KËšY
JKYK›[™İ	‰ˆY	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœMH^\ÛH^]Ú]KÍL‹Ú[™[ˆ]Xİ[ˆY[ˆÜ°êpêKˆŸJW_JW_JW_J_X\Ş[˜È[˜İ[Ûˆ\ÙJ
^ØÛÛœİÙ]N™K\œ›ÜOX]ØZ]™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹XXØÙ\ÜÈ‹Ø›ÙNØXİ[Ûˆ›\İÜ™Y™\œ˜[È‹YÙNŒK\”YÙNŒL_JNÚYŠ
^Û]]›Y\ÜØYÙNØÛÛœİ]˜ÛÛ^ÚYŠŠ]^ØÛÛœİOX]ØZ]‹˜ÛÛ™J
KšœÛÛŠ
Nİ\[ÙˆK™\œ›ÜOHœİš[™È‰‰ŠXK™\œ›ÜŠ_XØ]Úß]›İÈ™]È\œ›ÜŠŠ_ZYŠHO[[	‰™K™\œ›ÜŠ]›İÈ™]È\œ›ÜŠK™\œ›ÜŠNÜ™]\›ŠOO[[İ›ÚY™Kœ™Y™\œ˜[ÊOÏÖ×_Y[˜İ[ÛˆœÙJJ^Ü™]\›ˆ™]È[‘]U[YQ›Ü›X]
™œ‹Q”ˆ‹Ù]Tİ[Nˆ›YY][H‹[YTİ[NˆœÚÜŸJK™›Ü›X]
™]È]JJJ_Y[˜İ[ÛˆÙJJ^Ü™]\›ØÛZ[YYˆÛÛ\H˜]XÚ0êH‹ÚXÚÛİ]ØÛÛ\]Yˆ”ZY[Y[˜[Y0êH‹[™[™Îˆ‘[ˆ][H‹^\™Yˆ‘^\°êH‹Ø[˜Ù[Yˆ[›[0êHŸVÙWOÏÙ_Y[˜İ[Ûˆ\ÙJ
^ØÛÛœİÙKO]‹\ÙTİ]J×JKÜ‹—O]‹\ÙTİ]JL
KØK×O]‹\ÙTİ]JˆŠKÛË×O]‹\ÙTİ]JLJKÙ—O]‹\ÙTİ]JˆŠKÚO]‹\ÙTİ]JˆŠKØ‹×O]‹\ÙTİ]JLJKÏ]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOÛŠL
KÊˆŠNİ^İ
]ØZ]\ÙJ
J_XØ]Ú
Ê^ÜÊÈ[œİ[˜Ù[Ùˆ\œ›ÜÚË›Y\ÜØYÙNˆÚ\™Ù[Y[[\ÜÜÚX›KˆŠ_Yš[˜[^ÛŠLJ__K×JK]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOÛŠL
KÊˆŠNØÛÛœİÙ]NšË\œ›Ü•OX]ØZ]˜]]›Y˜K™Ù]]][XØ]Ü\Üİ\˜[˜ÙS]™[

NÚYŠ
^ÜÊ’[\ÜÜÚX›HH°ê\šYšY\ˆHğêXİ\š]0êHHHÙ\ÜÚ[Û‹ˆ™XÛÛ›™XİK]ÚKˆŠKŠLJNÜ™]\›ŸZYŠË˜İ\œ™[]™[OOH˜X[ˆŠ^ØÊLJK]ØZ]Ê
NÜ™]\›ŸZYŠË›™^]™[OOH˜X[ˆŠ^ØÛÛœİÙ]NË\œ›Ü”ŸOX]ØZ]˜]]›Y˜K›\İ˜XİÜœÊ
KPÏO[[İ›ÚYËİ™š[™
O”œİ]\ÏOOH™\šYšYYŠNÚYŠŸUŠ^ÜÊ“H[ŞY[ˆHİX›H]][YšXØ][Ûˆ\İ[›İ]˜X›Kˆ™XÛÛ›™XİK]ÚHZ\È°êY\ÜØZYKˆŠKŠLJNÜ™]\›ŸYŠ‹šY
KÊL
KŠLJNÜ™]\›Ÿ\Ê“HİX›H]][YšXØ][ÛˆÚ]0ê™HXİ]°êYHİ\ˆÛÛœİ[\ˆÙ\ÈÛ›°êY\ËˆŠKŠLJ_K××JNİ‹\ÙQY™™Xİ


OOÓŠ
_KÓ—JNØ\Ş[˜È[˜İ[ÛˆÊÊ^ÚYŠËœ™]™[Y˜][

KY›[™İOOMŠ\™]\›İÊL
KÊˆŠNØÛÛœİÙ]N•\œ›ÜßOX]ØZ]˜]]›Y˜K˜Ú[[™ÙJÙ˜XİÜ’Y™JNÚYŠßU
^ÜÊ“H°ê\šYšXØ][Ûˆ¸ &XH\ÈH0ê[X\œ™\‹ˆ°êY\ÜØZYKˆŠKÊLJNÜ™]\›ŸXÛÛœİÙ\œ›Ü”ŸOX]ØZ]˜]]›Y˜K™\šYJÙ˜XİÜ’Y™Ú[[™ÙRY•šYÛÙNšJNÚYŠŠ^ÜÊÛÙH[˜ÛÜœ™XİİH^\°êKˆ][\ÙHHÛÙHXİY[[Y[Y™šXÚ0êH[œÈÛˆ\XØ][Ûˆ8 &X]][YšXØ][Û‹ˆŠK
ˆŠKÊLJNÜ™]\›ŸXÊLJK
ˆŠKÊLJK]ØZ]Ê
_\™]\›ˆKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›X^]ËMŞ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\MÛN™›^\›İÈÛNš][\ËY[™ÛNš\İYKX™]ÙY[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈX‹Lˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒN[WH‹Ú[™[ˆYZ[š\İ˜][ÛˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹Ú[™[ˆ”\œ˜Z[˜YÙ\ÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^]Ú]KÍŒ‹Ú[™[ˆ•˜péØXš[]0êHš]°êYH\ÈÛÛ\\ÈÜ°êpê\È\Z\È[ˆTˆÛÙH\œÛÛ›™[ˆŸJW_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚYŠ
K\ØX›YœŸ‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍLMKLˆ^\ÛH^XZ[Û‹YÛÛ\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
	KØÛ\ÜÓ˜[YN˜\‹Lˆ[›[™HMËM	ÜÈ˜[š[X]K\Ü[ˆˆˆŸXJKXİX[\Ù\ˆ—_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÈÜšYØ\MÛN™ÜšYXÛÛËLˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆ”\œ˜Z[˜YÙ\ÈÛÛ™š\›pê\ÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^LŞ›Û\Ù[ZX›Û^XZ[Û‹YÛÛ‹Ú[™[™K›[™İJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆ”š[˜Ú\HHÛÛ™šY[X[]0êHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍÍH‹Ú[™[ˆ“HTˆÛÙHX›XÈ™HÛÛY[]Xİ[™HY[]0êKˆHÛÜœ™\ÜÛ™[˜ÙH™\İHš\ÚX›HXÚH[š\]Y[Y[ˆŸJW_JW_JKI‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›]MH›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLÌÌÌ™Ë\™YNMLÌŒM^\ÛH^\™YLŒ‹Ú[™[˜_JKÉ‰šKšœŞ
™›Ü›H‹ÛÛ”İX›Z]šÏO›ÚYÊÊKÛ\ÜÓ˜[YNˆ›]MH›İ[™YXØ\™›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÌÍH™ËVÈÌÌ˜ÍWKÎMHMHÛNœMˆ‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\İ\Ø\M‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YY[™ËXZ[Û‹YÛÛÌLLÈ^XZ[Û‹YÛÛ‹Ú[™[šKšœŞ
^ØÛ\ÜÓ˜[YNˆšMÈËMÈ‹ÙZYÚˆ™š[ŸJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^^›Û\Ù[ZX›Û‹Ú[™[ˆÛÛ™š\›YHÛˆXØğêÈYZ[š\İ˜]]\ˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛHXY[™Ë\™[^Y^]Ú]KÍŒ‹Ú[™[ˆ”ØZ\Ú\ÈHÛÙH0èˆÚY™œ™\ÈXİY[[Y[Y™šXÚ0êH[œÈÛˆ\XØ][Ûˆ8 &X]][YšXØ][Û‹ˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH›^X^]Ë[Y›^XÛÛØ\LÈÛN™›^\›İÈ‹Ú[™[–ÚKšœŞ
š[œ]‹İ˜[YNšÛÚ[™ÙNšÏO
Ë\™Ù]˜[YKœ™\XÙJ×ÙËˆŠKœÛXÙJŠJK[œ][ÙNˆ›[Y\šXÈ‹]]ĞÛÛ\]Nˆ›Û™K][YKXÛÙH‹]\›ˆ–ÌNW^ÍŸH‹™\]Z\™YˆL]]Ñ›Øİ\ÎˆL˜\šXK[X™[ˆÛÙHHİX›H]][YšXØ][Ûˆ‹XÙZÛ\ˆŒ‹Û\ÜÓ˜[YNˆ›Z[‹]ËL›^LH›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™ËVÈÌÌYÍWHMKLÈ^XÙ[\ˆ^^˜XÚÚ[™ËVÌŒÍY[WH^]Ú]Hİ][™K[›Û™H›Øİ\Î˜›Ü™\‹XZ[Û‹YÛÛŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y˜Ÿ›[™İOOM‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ™ËXZ[Û‹YÛÛMHKLÈ›Û\Ù[ZX›Û^VÈÌÌNL™—H\ØX›Y›ÜXÚ]KML‹Ú[™[˜È•°ê\šYšXØ][Û¸ )ˆˆ•˜[Y\ˆHÛÙHŸJW_JW_JW_J_JK[É‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MHİ™\™›İËZY[ˆ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎL‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹Xˆ›Ü™\‹]Ú]KÌLMH‹Ú[™[šKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆ”]ZHH\œ˜Z[°êH]ZHŸJ_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆšY[ˆÜšYXÛÛËVÌYœ—ÌYœ—Ìœ—ÌKŒ™œ—HØ\M›Ü™\‹Xˆ›Ü™\‹]Ú]KÌLMHKLÈ^^È\\˜Ø\ÙH˜XÚÚ[™Ë]ÚYH^]Ú]KÍY™ÜšY‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ”\œ˜Z[ˆŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ‘š[][ŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ‘]H]İ]]ŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ”°êY°ê\™[˜ÙHİš\H\İŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™]šYK^H]šYK]Ú]KÌL‹Ú[™[–ÙK›X\
ÏOšKšœŞÊ˜\XÛH‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MMHY™ÜšYXÛÛËVÌYœ—ÌYœ—Ìœ—ÌKŒ™œ—HYš][\ËXÙ[\ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^^È\\˜Ø\ÙH^]Ú]KÍYšY[ˆ‹Ú[™[ˆ”\œ˜Z[ˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ˜œ™XZËX[›Û[YY][H‹Ú[™[šËœ™Y™\œ™\‘[XZ[‘K[XZ[[™\ÜÛšX›HŸJKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^]Ú]KÌÍH‹Ú[™[–ÈÛÙH‹Ëœ™Y™\œ˜[ÛÙW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^^È\\˜Ø\ÙH^]Ú]KÍYšY[ˆ‹Ú[™[ˆ‘š[][ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ˜œ™XZËX[^]Ú]KÎ‹Ú[™[šËœ™Y™\œ™Y[XZ[‘K[XZ[[™\ÜÛšX›HŸJW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^^È\\˜Ø\ÙH^]Ú]KÍYšY[ˆ‹Ú[™[ˆ‘]H]İ]]ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍÌ‹Ú[™[™œÙJË˜Ü™X]Y]
_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ[›[™KX›ØÚÈ›İ[™YY[™ËY[Y\˜[LÌÌLLˆKLH^^È^Y[Y\˜[LŒ‹Ú[™[šÙJËœİ]\Ê_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^^È\\˜Ø\ÙH^]Ú]KÍYšY[ˆ‹Ú[™[ˆ”°êY°ê\™[˜ÙHİš\H\İŸJKKšœŞ
˜ÛÙH‹ØÛ\ÜÓ˜[YNˆ˜œ™XZËX[^^È^]Ú]KÍMH‹Ú[™[šËœİš\PÚXÚÛİ]Ù\ÜÚ[Û’YÏÈ¸ %ŸJW_JW_KËšY
JK\‰‰ˆYK›[™İ	‰ˆXI‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœN^XÙ[\ˆ^]Ú]KÍL‹Ú[™[–ÚKšœŞ
LËØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹LÈNËN^XZ[Û‹YÛÛŸJKKšœŞ
œ‹ØÚ[™[ˆ]Xİ[ˆ\œ˜Z[˜YÙHÛÛ™š\›pêHİ\ˆH[ÛY[ˆŸJW_JK‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœN^XÙ[\ˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆÚ\™Ù[Y[\È\œ˜Z[˜YÙ\ø )ˆŸJW_JW_JW_J_X\Ş[˜È[˜İ[ÛˆYÊJ^ØÛÛœİÙ]N\œ›ÜœŸOX]ØZ]™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹XXØÙ\ÜÈ‹Ø›ÙN™_JNÚYŠŠ^Û]\‹›Y\ÜØYÙNØÛÛœİO\‹˜ÛÛ^ÚYŠJ]^ØÛÛœİÏX]ØZ]K˜ÛÛ™J
KšœÛÛŠ
Nİ\[ÙˆË™\œ›ÜOHœİš[™È‰‰Š\Ë™\œ›ÜŠ_XØ]Úß]›İÈ™]È\œ›ÜŠŠ_ZYŠO[[	‰™\œ›ÜŠ]›İÈ™]È\œ›ÜŠ™\œ›ÜŠNÜ™]\›ˆY[˜İ[ÛˆYÊJ^Ü™]\›ˆOÛ™]È[‘]U[YQ›Ü›X]
™œ‹Q”ˆ‹Ù]Tİ[Nˆ›YY][H‹[YTİ[NˆœÚÜŸJK™›Ü›X]
™]È]JJJNˆ’˜[XZ\ÈŸY[˜İ[ÛˆÙJJ^Ü™]\›İ\İˆXØğêÈ\İ‹[X˜\ÜØYÜˆ[X˜\ÜØY]\ˆ‹İš\Wİ\İˆX›Û›™[Y[İš\H\İ‹İš\WÛ]™NˆX›Û›™[Y[‹ÛÛ[Y\˜ÚX[ˆX›Û›™[Y[İš\H\İŸVÙWOÏÙ_Y[˜İ[ÛˆÙJJ^Ü™]\›ØXİ]™NˆXİYˆ‹™]›ÚÙYˆ”°ê]›Ü]pêH‹^\™Yˆ‘^\°êH‹™XYÛÛ›Nˆ“Xİ\™HÙ][HŸVÙWOÏÙ_Y[˜İ[ÛˆÜÙJ
^ØÛÛœİÙKO]‹\ÙTİ]J×JKÜ‹—O]‹\ÙTİ]JˆŠKØK×O]‹\ÙTİ]JˆŠKÛË×O]‹\ÙTİ]JˆŠKÙ—O]‹\ÙTİ]JL
KÚO]‹\ÙTİ]JˆŠKØ‹×O]‹\ÙTİ]JLJK×Ë—O]‹\ÙTİ]JˆŠKÔË×O]‹\ÙTİ]JˆŠK]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOÙŠL
KŠˆŠNİ^ØÛÛœİX]ØZ]YÊØXİ[Ûˆ›\İŸJNİ
\Ù\œÏÏÖ×J_XØ]Ú

^ÓŠ[œİ[˜Ù[Ùˆ\œ›ÜÔ›Y\ÜØYÙNˆÚ\™Ù[Y[[\ÜÜÚX›KˆŠ_Yš[˜[^ÙŠLJ__K×JNİ‹\ÙQY™™Xİ


OOÕ

_KÕJNØÛÛœİÏ]‹\ÙSY[[Ê

OOØÛÛœİ\‹š[J
KÓİÙ\Ø\ÙJ
NÜ™]\›ˆÙK™š[\ŠOO’K™[XZ[ÓİÙ\Ø\ÙJ
Kš[˜ÛY\Ê
JN™_KÜ‹WJNØ\Ş[˜È[˜İ[ÛˆŠJ^ÚYŠJOOOHœ™]›ÚÙWİ\İ‰‰ˆ]Ú[™İË˜ÛÛ™š\›J°ê]›Ü]Y\ˆ8 &XXØğêÈ\İH	Ô™[XZ[HØ
JJ^Ş
šY
KŠˆŠKÊˆŠNİ^Ø]ØZ]YÊØXİ[Û’K\Ù\’Y”šYJKÊOOOH™Ü˜[İ\İØXØğêÈ\İ]šXpêH0è	Ô™[XZ[K˜˜XØğêÈ\İ°ê]›Ü]pêHİ\ˆ	Ô™[XZ[K˜
K]ØZ]

_XØ]Ú
J^ÓŠH[œİ[˜Ù[Ùˆ\œ›ÜÕK›Y\ÜØYÙNˆ“[ÙYšXØ][Ûˆ[\ÜÜÚX›KˆŠ_Yš[˜[^Ş
ˆŠ___X\Ş[˜È[˜İ[ÛˆŠ
^ÚYŠœ™]™[Y˜][

KHXKš[J
J^İÊL
KŠˆŠKÊˆŠNİ^Ø]ØZ]YÊØXİ[Ûˆš[š]Wİ\İ‹[XZ[˜Kš[J
K›İN›Ëš[J
_[JKÊ[š]][Ûˆ[›ŞpêYH0è	ØKš[J
_H]™XÈ[ˆXØğêÈ\İXİY‹˜
KÊˆŠKÊˆŠK]ØZ]

_XØ]Ú
J^ÓŠH[œİ[˜Ù[Ùˆ\œ›ÜÒK›Y\ÜØYÙNˆ’[š]][Ûˆ[\ÜÜÚX›KˆŠ_Yš[˜[^İÊLJ___\™]\›ˆKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›X^]ËMŞ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\MÛN™›^\›İÈÛNš][\ËY[™ÛNš\İYKX™]ÙY[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈX‹Lˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒN[WH‹Ú[™[ˆYZ[š\İ˜][ÛˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹Ú[™[ˆ•][\Ø]]\œÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^]Ú]KÍŒ‹Ú[™[ˆÛÛœİ[H\ÈÛÛ\\È]ğê™H[š\]Y[Y[]\œÈXØğêÈ\İRSÓˆÔËˆŸJW_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚY

K\ØX›Y™Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍLMKLˆ^\ÛH^XZ[Û‹YÛÛ\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
	KØÛ\ÜÓ˜[YN˜\‹Lˆ[›[™HMËM	ÙÈ˜[š[X]K\Ü[ˆˆˆŸXJKXİX[\Ù\ˆ—_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÈÜšYØ\MÛN™ÜšYXÛÛËLÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆÛÛ\\È[œ™YÚ\İ°ê\ÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^LŞ›Û\Ù[ZX›Û^XZ[Û‹YÛÛ‹Ú[™[™K›[™İJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆXØğêÈXİYœÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^LŞ›Û\Ù[ZX›Û^Y[Y\˜[LŒ‹Ú[™[™K™š[\ŠO”™[][Y[ËœÛÛYJOO’Kœİ]\ÏOOH˜Xİ]™HŠJK›[™İJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆYZ[š\İ˜]]\œÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^LŞ›Û\Ù[ZX›Û^XZ[Û‹YÛÛ‹Ú[™[™K™š[\ŠO”œ›ÛOOOH˜YZ[ˆŠK›[™İJW_JW_JKKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]”O›ÚYŠ
KÛ\ÜÓ˜[YNˆ›]MH›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ‹Ú[™[–ÚKšœŞ
M‹ØÛ\ÜÓ˜[YNˆšMˆËMˆ^XZ[Û‹YÛÛ‹ÙZYÚˆ™š[ŸJKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆ’[š]\ˆ[ˆÛÛ\H\İŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^\ÛH^]Ú]KÍL‹Ú[™[ˆ“8 &Z[š]][ÛˆÜ°êYH[ˆXØğêÈ\İXİY‹ˆ]Xİ[ˆXØğêÈ^\İ[¸ &Y\İ™[\XğêKˆŸJW_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÜšYØ\LÈÎ™ÜšYXÛÛËVÌYœ—ÌYœ—Ø]]×H‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ™[XZ[‹™\]Z\™YˆL˜[YN˜KÛÚ[™ÙN”OœÊ\™Ù]˜[YJKXÙZÛ\ˆ˜Y™\ÜÙP[XZ[™œˆ‹˜\šXK[X™[ˆY™\ÜÙHK[XZ[0è[š]\ˆ‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™ËVÈÌÌYÍWHMKLÈ^]Ú]Hİ][™K[›Û™H›Øİ\Î˜›Ü™\‹XZ[Û‹YÛÛŸJKKšœŞ
š[œ]‹İ˜[YN›ËÛÚ[™ÙN”O˜Ê\™Ù]˜[YJKX^[™İŒXÙZÛ\ˆ“›İH˜Xİ[]]™H‹˜\šXK[X™[ˆ“›İH˜Xİ[]]™H‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™ËVÈÌÌYÍWHMKLÈ^]Ú]Hİ][™K[›Û™H›Øİ\Î˜›Ü™\‹XZ[Û‹YÛÛŸJKKšœŞ
˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›Y˜ŸXKš[J
KÛ\ÜÓ˜[YNˆ˜‹YÛÛ\İYKXÙ[\ˆ\ØX›Y›ÜXÚ]KML‹Ú[™[˜È’[š]][Û¸ )ˆˆ’[š]\ˆŸJW_JW_JKÉ‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›]MH›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLÌÌÌ™Ë\™YNMLÌŒM^\ÛH^\™YLŒ‹Ú[™[—ßJKÉ‰šKšœŞ
œ‹Ü›ÛNˆœİ]\È‹Û\ÜÓ˜[YNˆ›]MH›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y[Y\˜[LÌÌÌ™ËY[Y\˜[NMLÌŒM^\ÛH^Y[Y\˜[LŒ‹Ú[™[”ßJKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLM‹Ú[™[šKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆœ™[]]™H›ØÚÈ‹Ú[™[–ÚKšœŞ
MKØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYMÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍŸJKKšœŞ
š[œ]‹İ\NˆœÙX\˜Ú‹˜[YNœ‹ÛÚ[™ÙN”O›Š\™Ù]˜[YJKXÙZÛ\ˆ”™XÚ\˜Ú\ˆ[™HY™\ÜÙHK[XZ[‹Û\ÜÓ˜[YNˆËY[›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™ËVÈÌÌYÍWHKLÈLLˆ‹M^]Ú]Hİ][™K[›Û™H›Øİ\Î˜›Ü™\‹XZ[Û‹YÛÛŸJW_J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MHİ™\™›İËZY[ˆ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎL‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆšY[ˆÜšYXÛÛËVÌKŒ™œ—Ìœ—ÌKœ—Ø]]×HØ\M›Ü™\‹Xˆ›Ü™\‹]Ú]KÌLMHKLÈ^^È\\˜Ø\ÙH˜XÚÚ[™Ë]ÚYH^]Ú]KÍÎ™ÜšY‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÚ[™[ˆÛÛ\HŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆÛÛ›™^[ÛˆŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆXØğêÈŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[ˆXİ[Ûˆ\İŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™]šYK^H]šYK]Ú]KÌL‹Ú[™[–ĞË›X\
OØÛÛœİOT™[][Y[ËœÛÛYJÏO•ËœÛİ\˜ÙOOOH\İ‰‰•Ëœİ]\ÏOOH˜Xİ]™HŠKOTœ›ÛOOOH˜YZ[ˆ‹OVË‹‹›™]ÈX\
™[][Y[Ë›X\
ÏO–Ø	ÕËœÛİ\˜Ù_N‰ÕËœİ]\ßX×JJK˜[Y\Ê
WNÜ™]\›ˆKšœŞÊ˜\XÛH‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MMHÎ™ÜšYXÛÛËVÌKŒ™œ—Ìœ—ÌKœ—Ø]]×HÎš][\ËXÙ[\ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ˜œ™XZËX[›Û[YY][H‹Ú[™[”™[XZ[‘K[XZ[[™\ÜÛšX›HŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›^›^]Ü˜\Ø\Lˆ‹Ú[™[–ÕI‰šKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆš[›[™KY›^][\ËXÙ[\ˆØ\LH›İ[™YY[™ËXZ[Û‹YÛÛÌLLˆKLH^^È^XZ[Û‹YÛÛ‹Ú[™[–ÚKšœŞ
^İÙZYÚˆ™š[ŸJKYZ[š\İ˜]]\ˆ—_JKKšœŞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YY[™Ë]Ú]KÌLLˆKLH^^È^]Ú]KÍL‹Ú[™[–ÈÜ°êpêHH‹YÊ˜Ü™X]Y]
W_JW_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LH^^È\\˜Ø\ÙH^]Ú]KÍÎšY[ˆ‹Ú[™[ˆ‘\›špê™HÛÛ›™^[ÛˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍH‹Ú[™[‘YÊ›\İÚYÛ’[]
_JW_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ^^È\\˜Ø\ÙH^]Ú]KÍÎšY[ˆ‹Ú[™[ˆXØğêÈŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[–ÓK›X\
ÏOšKšœŞÊœÜ[ˆ‹İ]N•Ë™^\™\×Ø]Ø^\™HH	ÑYÊË™^\™\×Ø]
_Xˆ”Ø[œÈ^\˜][Ûˆ‹Û\ÜÓ˜[YN˜›İ[™YY[LˆKLH^^È	ÕËœİ]\ÏOOH˜Xİ]™HÈ˜™ËY[Y\˜[LÌÌL^Y[Y\˜[LŒˆ˜™Ë]Ú]KÌL^]Ú]KÍHŸXÚ[™[–ÜÙJËœÛİ\˜ÙJKˆ0­È‹ÙJËœİ]\ÊW_K	ÕËœÛİ\˜Ù_N‰ÕËœİ]\ßX
JKT™[][Y[Ë›[™İ	‰šKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍ‹Ú[™[ˆ]Xİ[ˆXØğêÈŸJW_JW_JKKšœŞ
™]ˆ‹ØÚ[™[•OÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^]Ú]KÌÍH‹Ú[™[ˆÛÛ\H›İ0êYğêHŸJN’OÚKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›YšOOTšYÛÛXÚÎŠ
OO›ÚYŠœ™]›ÚÙWİ\İŠKÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YLÌÌÌLÈKLˆ^\ÛH^\™YLŒ\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
TËØÛ\ÜÓ˜[YNˆ›\‹Lˆ[›[™HŸJK”°ê]›Ü]Y\ˆ8 &XXØğêÈ\İ—_JNšKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›YšOOTšYÛÛXÚÎŠ
OO›ÚYŠ™Ü˜[İ\İŠKÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y[Y\˜[LÌÌÌLÈKLˆ^\ÛH^Y[Y\˜[LŒ\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
ØËØÛ\ÜÓ˜[YNˆ›\‹Lˆ[›[™HŸJKZ›İ]\ˆ8 &XXØğêÈ\İ—_J_JW_KšY
_JK	‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆœN^XÙ[\ˆ^\ÛH^]Ú]KÍL‹Ú[™[ˆÚ\™Ù[Y[\ÈÛÛ\\ø )ˆŸJKY	‰ˆPË›[™İ	‰ˆWÉ‰šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœN^XÙ[\ˆ^]Ú]KÍL‹Ú[™[–ÚKšœŞ
‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹LÈNËN^XZ[Û‹YÛÛŸJKKšœŞ
œ‹ØÚ[™[œÈ]Xİ[ˆÛÛ\H™HÛÜœ™\ÜÛ™0èÙ]H™XÚ\˜ÚKˆˆ]Xİ[ˆÛÛ\H[œ™YÚ\İ°êKˆŸJW_JW_JW_JW_J_XÛÛœİœÙOVŞİÎˆ‹ØYZ[ˆ‹X™[ˆ•YHğê[°ê\˜[H‹XÛÛ™Ë[™ˆLKİÎˆ‹ØYZ[‹Ø[X˜\ÜØY]\œÈ‹X™[ˆ[X˜\ÜØY]\œÈ‹XÛÛšTßKİÎˆ‹ØYZ[‹Ü\œ˜Z[˜YÙ\È‹X™[ˆ”\œ˜Z[˜YÙ\È‹XÛÛ”LßKİÎˆ‹ØYZ[‹Ø\ÜÚ\İ[˜ÙH‹X™[ˆ\ÜÚ\İ[˜ÙH‹XÛÛ›ßKİÎˆ‹ØYZ[‹İ][\Ø]]\œÈ‹X™[ˆ•][\Ø]]\œÈ‹XÛÛŸWNÙ[˜İ[ÛˆÜÙJ
^Ü™]\›ˆKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HZ[‹ZVÌLšHİ™\™›İËZY[ˆ™ËVÈÌÌYÍWH^]Ú]H‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆˆ‹˜\šXKZY[ˆˆYH‹Û\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™Hš^YYLKÌˆÜLKÌˆVÌML›X^HËVÌML›X^H]˜[œÛ]K^LKÌˆ]˜[œÛ]K^KLKÌˆØš™XİXÛÛZ[ˆÜXÚ]KVÌŒHŸJKKšœŞÊ˜\ÚYH‹ØÛ\ÜÓ˜[YNˆ™š^Y[œÙ]^KLYL‹LŒY[ˆËM›Ü™\‹\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌN™KÎMHMHY™›^Y™›^XÛÛ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Mˆ›^][\ËXÙ[\ˆØ\LÈ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆˆ‹Û\ÜÓ˜[YNˆšLMËLMØš™XİXÛÛZ[ˆŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›ÛY\Ü^H^^›Û\Ù[ZX›Û‹Ú[™[ˆRSÓˆÔÈŸJW_JKKšœŞÊ˜H‹Ú™Yˆ‹È‹Û\ÜÓ˜[YNˆ›X‹Mˆ›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍL™ËVÈÌÌMM×HLÈKLÈ^\ÛH^XZ[Û‹YÛÛ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÚ[™[ˆ“[Ûˆ\ÜXÙHRSÓˆÔÈŸJKKšœŞ
LËØÛ\ÜÓ˜[YNˆšMËMŸJW_JKKšœŞ
›˜]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LHÜXÙK^KLH‹Ú[™[œÙK›X\

İÎ™KX™[XÛÛœ‹‹‹›ŸJOOšKšœŞÊ[İÎ™K[™ˆ™[™š[ˆÛ‹™[™ˆLKÛ\ÜÓ˜[YNŠÚ\ĞXİ]™N˜_JOO˜›^][\ËXÙ[\ˆØ\LÈ›İ[™YXˆMKLÈ^\ÛH	ØOÈ˜™Ë]Ú]KÌL^XZ[Û‹YÛÛˆ^]Ú]KÍMHİ™\˜™Ë]Ú]KÍHİ™\^]Ú]HŸXÚ[™[–ÚKšœŞ
‹ØÛ\ÜÓ˜[YNˆšMHËMH‹ÙZYÚˆ™š[ŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[JW_KJJ_JKKšœŞÊ˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚY˜]]œÚYÛ“İ]

KÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ›Ü™\‹]›Ü™\‹]Ú]KÌLMMH^\ÛH^]Ú]KÍH‹Ú[™[–ÚKšœŞ
IØÛ\ÜÓ˜[YNˆšMHËMHŸJKˆÙH0êXÛÛ›™Xİ\ˆ—_JW_JKKšœŞÊšXY\ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹LL›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆ›Ü™\‹Xˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌN™KÎLˆMKLÈYšY[ˆ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆˆ‹Û\ÜÓ˜[YNˆšLLHËLLHŸJKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›Û\Ù[ZX›Û‹Ú[™[ˆRSÓˆÔÈŸJW_JKKšœŞ
˜H‹Ú™Yˆ‹È‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍLLÈKLˆ^\ÛH^XZ[Û‹YÛÛ‹Ú[™[ˆ“[Ûˆ\ÜXÙHŸJW_JKKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹LLMHY›[MYœN‹Ú[™[šKšœŞ
ĞKßJ_JW_J_Y[˜İ[ÛˆœÙJ
^Ü™]\›ˆKšœŞÊœÙXİ[Ûˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈX‹Lˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒN[WH‹Ú[™[ˆYZ[š\İ˜][ÛˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹Ú[™[ˆ”[İYÙHRSÓˆÔÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LˆX^]ËL^]Ú]KÍŒ‹Ú[™[ˆ“\È›Û˜İ[ÛœÈYZ[š\İ˜]]™\ÈÙ\›ÛZ›İ]0êY\ÈXÚHØ[œÈ^ÜÙ\ˆ\ÈÛ›°êY\ÈÚY™œ°êY\È\È][\Ø]]\œËˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MÈÜšYØ\MÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËLÈ‹Ú[™[–ÚKšœŞÊ[İÎˆ‹ØYZ[‹Ø[X˜\ÜØY]\œÈ‹Û\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
TËØÛ\ÜÓ˜[YNˆ›X‹MMÈËMÈ^XZ[Û‹YÛÛ‹ÙZYÚˆ™š[ŸJKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆ[X˜\ÜØY]\œÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆÜ°êY\ˆ]°ê]›Ü]Y\ˆ\ÈY[œÈ\œÛÛ›™[ËˆŸJW_JKKšœŞÊ[İÎˆ‹ØYZ[‹Ü\œ˜Z[˜YÙ\È‹Û\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
LËØÛ\ÜÓ˜[YNˆ›X‹MMÈËMÈ^XZ[Û‹YÛÛ‹ÙZYÚˆ™š[ŸJKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆ”\œ˜Z[˜YÙ\ÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆ•›Ú\ˆ]ZHH\œ˜Z[°êH]Y[ÛÛ\KˆŸJW_JKKšœŞÊ[İÎˆ‹ØYZ[‹Ø\ÜÚ\İ[˜ÙH‹Û\ÜÓ˜[YNˆœ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌ˜ÍWKÎLMH‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YNˆ›X‹MMÈËMÈ^XZ[Û‹YÛÛ‹ÙZYÚˆ™š[ŸJKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ˆ\ÜÚ\İ[˜ÙHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆXØğêY\ˆ[š\]Y[Y[]^\ÜXÙ\È]]Üš\ğê\ËˆŸJW_JW_JW_J_Y[˜İ[Ûˆ\ÙJİ]N™K\ØÜš\[ÛJ^Ü™]\›ˆKšœŞÊœÙXİ[Ûˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈX‹Lˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒN[WH‹Ú[™[ˆYZ[š\İ˜][ÛˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^LŞ›Û\Ù[ZX›Û‹Ú[™[™_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^]Ú]KÍŒ‹Ú[™[JW_J_XÛÛœİÜÙORJŞÜ]ˆ‹ØYZ[ˆ‹[[Y[šKšœŞ
ÜÙKßJKÚ[™[–ŞÚ[™^ˆL[[Y[šKšœŞ
œÙKßJ_KÜ]ˆ˜[X˜\ÜØY]\œÈ‹[[Y[šKšœŞ
ÙKßJ_KÜ]ˆœ\œ˜Z[˜YÙ\È‹[[Y[šKšœŞ
\ÙKßJ_KÜ]ˆ˜\ÜÚ\İ[˜ÙH‹[[Y[šKšœŞ
\ÙKİ]Nˆ\ÜÚ\İ[˜ÙH‹\ØÜš\[Ûˆ“\ÈÙ\ÜÚ[ÛœÈ^XÚ][Y[]]Üš\ğêY\ÈÙ\›Û\ÜÛšX›\ÈXÚKˆŸJ_KÜ]ˆ][\Ø]]\œÈ‹[[Y[šKšœŞ
ÜÙKßJ_KÜ]ˆŠˆ‹[[Y[šKšœŞ
KİÎˆ‹ØYZ[ˆ‹™\XÙNˆLJ_W_WJNÙ[˜İ[ÛˆœÙJ
^Ü™]\›ˆKšœŞ
QKÜ›İ]\—ÜÙ_J_Y[˜İ[Ûˆ\ÙJØÚ[™[™_J^ØÛÛœİİ—O]‹\ÙTİ]JLJKÛ‹WO]‹\ÙTİ]J[
KÜË×O]‹\ÙTİ]JˆŠKØËO]‹\ÙTİ]JˆŠKÙ‹O]‹\ÙTİ]JˆŠKŞ—O]‹\ÙTİ]JLJNİ‹\ÙQY™™Xİ


OOÊ\Ş[˜Ê
OOØÛÛœİŞÙ]N—Ë\œ›Ü“ŸKÙ]N”Ë\œ›ÜšßWOX]ØZ]›ÛZ\ÙK˜[
İ˜]]›Y˜K™Ù]]][XØ]Ü\Üİ\˜[˜ÙS]™[

K˜]]›Y˜K›\İ˜XİÜœÊ
WJNÚYŠŸÊ\™]\›ˆ
“H°ê\šYšXØ][ÛˆHğêXİ\š]0êH\İ[™\ÜÛšX›KˆŠNÚYŠË˜İ\œ™[]™[OOH˜X[ˆŠ\™]\›ˆŠL
NØÛÛœİTËİ™š[™
O•‹œİ]\ÏOOH™\šYšYYŠNÚYŠ
\™]\›ˆJÚY•šYJNØÛÛœİÙ]NË\œ›Ü”ŸOX]ØZ]˜]]›Y˜K™[œ›Û
Ù˜XİÜ•\Nˆİ‹œšY[™S˜[YNˆRSÓˆÔÈYZ[ˆŸJNÚYŠŠ\™]\›ˆ
‹›Y\ÜØYÙJNØJÚYËšYJKÊËİœ\—ØÛÙJ_JJ
_K×JNØ\Ş[˜È[˜İ[ÛˆÊ
^ÚYŠ[ŸK×–ÌNW^ÍŸIË\İ
ÊJ\™]\›ˆ
”ØZ\Ú\ÈHÛÙH0èˆÚY™œ™\ËˆŠNØŠL
K
ˆŠNØÛÛœİÙ]N—Ë\œ›Ü“ŸOX]ØZ]˜]]›Y˜K˜Ú[[™ÙJÙ˜XİÜ’Y›‹šYJNÚYŠŠ\™]\›ˆŠLJK
‹›Y\ÜØYÙJNØÛÛœİÙ\œ›Ü”ßOX]ØZ]˜]]›Y˜K™\šYJÙ˜XİÜ’Y›‹šYÚ[[™ÙRY—ËšYÛÙN˜ßJNÚYŠÊ\™]\›ˆŠLJK
ÛÙH[˜ÛÜœ™XİİH^\°êKˆŠNØ]ØZ]˜]]œ™Yœ™\ÚÙ\ÜÚ[ÛŠ
KŠL
KŠLJ_\™]\›ˆÚKšœŞ
K‘œ˜YÛY[ØÚ[™[™_JNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH][\ËXÙ[\ˆ\İYKXÙ[\ˆMH‹Ú[™[šKšœŞÊ™›Ü›H‹ÛÛ”İX›Z]—ÏO×Ëœ™]™[Y˜][

KÊ
_KÛ\ÜÓ˜[YNˆËY[X^]Ë[Y›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌŒMKÎMHMÈ^XÙ[\ˆ^]Ú]HÚYİËL‹Ú[™[–ÚKšœŞ
^ØÛ\ÜÓ˜[YNˆ›^X]]ÈLMËLM^XZ[Û‹YÛÛ‹ÙZYÚˆ™š[ŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ›]M›ÛY\Ü^H^L›Û\Ù[ZX›Û‹Ú[™[ˆÛÛ™š\›YHÛˆXØğêÈYZ[š\İ˜]]\ˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍŒ‹Ú[™[œÏÈZ›İ]HRSÓˆÔÈ[œÈÛˆ\XØ][Ûˆ8 &X]][YšXØ][Û‹Z\ÈØZ\Ú\ÈHÛÙH0èÚ^ÚY™œ™\Ëˆˆ”ØZ\Ú\ÈHÛÙH0èÚ^ÚY™œ™\ÈXİY[[Y[Y™šXÚ0êH[œÈÛˆ\XØ][Ûˆ8 &X]][YšXØ][Û‹ˆŸJKÉ‰šKšœŞ
š[YÈ‹ÜÜ˜ÎœË[ˆ”TˆÛÙH8 &XXİ]˜][ÛˆHÙXÛÛ™˜Xİ]\ˆ‹Û\ÜÓ˜[YNˆ›^X]]È]MH›İ[™Y^™Ë]Ú]HLÈŸJKKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ›]MH›ØÚÈ^[Y^\ÛH^]Ú]KÍÌ‹Ú[™[–ÈÛÙHHğêXİ\š]0êH‹KšœŞ
š[œ]‹İ˜[YN˜ËÛÚ[™ÙN—ÏO™
Ë\™Ù]˜[YKœ™\XÙJ×ÙËˆŠKœÛXÙJŠJK[œ][ÙNˆ›[Y\šXÈ‹]]ĞÛÛ\]Nˆ›Û™K][YKXÛÙH‹]]Ñ›Øİ\ÎˆLÛ\ÜÓ˜[YNˆ›]LˆËY[›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™Ë]Ú]KÍHMKLÈ^XÙ[\ˆ^^˜XÚÚ[™ËVÌ[WHİ][™K[›Û™H›Øİ\Î˜›Ü™\‹XZ[Û‹YÛÛŸJW_JK‰‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›]LÈ^\ÛH^\™YLÌ‹Ú[™[™ŸJKKšœŞÊ˜]Ûˆ‹İ\NˆœİX›Z]‹\ØX›YË›[™İOOM‹Û\ÜÓ˜[YNˆ˜‹YÛÛ]MHËY[\ØX›Y›ÜXÚ]KML‹Ú[™[–ÚKšœŞ
ËØÛ\ÜÓ˜[YNˆšMHËMHŸJKÈ•°ê\šYšXØ][Û¸ )ˆˆ•˜[Y\ˆ]İ]œš\ˆ8 &XYZ[š\İ˜][Ûˆ—_JW_J_J_Y[˜İ[Ûˆ\ÙJ
^Ü™]\›ˆKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH][\ËXÙ[\ˆ\İYKXÙ[\ˆMH‹Ú[™[šKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë[Y›İ[™YXØ\™›Ü™\ˆ›Ü™\‹]Ú]KÌL™ËVÈÌÌWKÎMHMÈ^XÙ[\ˆÚYİËL‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆRSÓˆÔÈ‹Û\ÜÓ˜[YNˆ›^X]]ÈX‹MLŒËLŒØš™XİXÛÛZ[ˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ›ÛY\Ü^H^L›Û\Ù[ZX›Û‹Ú[™[ˆXØğêÈYZ[š\İ˜][Ûˆ™Y\ğêHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍH‹Ú[™[ˆÙHÛÛ\H™HÜÜğêH\ÈH°íHYZ[š\İ˜]]\ˆRSÓˆÔËˆŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MˆÜšYØ\LÈ‹Ú[™[–ÚKšœŞ
˜H‹Ú™Yˆ‹È‹Û\ÜÓ˜[YNˆœ›İ[™YXˆ™ËXZ[Û‹YÛÛMKLÈ›Û\Ù[ZX›Û^VÈÌÌNL™—H‹Ú[™[ˆ“İ]œš\ˆ[Ûˆ\ÜXÙHRSÓˆÔÈŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚY˜]]œÚYÛ“İ]

KÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMHMKLÈ^]Ú]KÍÌ‹Ú[™[ˆ”ÙH0êXÛÛ›™Xİ\ˆŸJW_JW_J_J_Y[˜İ[ÛˆÜÙJİÚÙ[™_J^ØÛÛœİİ—O]‹\ÙTİ]J˜ÚXÚÚ[™Ë\Ù\ÜÚ[ÛˆŠKÛ‹WO]‹\ÙTİ]JˆŠKÜË×O]‹\ÙTİ]J[
KÏ]‹\ÙT™YŠLJNÜ™]\›ˆ‹\ÙQY™™Xİ


OOÛ]HLØ\Ş[˜È[˜İ[ÛˆŠ
^ÚYŠË˜İ\œ™[
\™]\›ØË˜İ\œ™[HLŠ˜ÛZ[Z[™ÈŠNØÛÛœİÙ]N\œ›Ü˜ŸOX]ØZ]™[˜İ[ÛœËš[›ÚÙJ˜[X˜\ÜØYÜ‹Z[š]\È‹Ø›ÙNØXİ[Ûˆ˜ÛZ[H‹ÚÙ[™__JNÚYŠY
\™]\›ØÛÛœİÏX]ØZ]ÜÙJ‹
NÚYŠÊ^ØJÊKŠ™\œ›ÜˆŠKË˜İ\œ™[HLNÜ™]\›Ÿ[Ê
O[[İ›ÚY˜XØÙ\ÜÑ^\™\Ğ]
OÏÛ[
KŠ˜ÛZ[YYŠKÚ[™İËœÙ][Y[İ]


OOÙ	‰Ú[™İË›ØØ][Û‹˜\ÜÚYÛŠ‹ÈŠ_KL
_]˜]]™Ù]Ù\ÜÚ[ÛŠ
K[Š
Ù]NJOOÙ	‰ŠœÙ\ÜÚ[ÛÙŠ
NœŠ›™YYËX]]ŠJ_JNØÛÛœİÙ]NšO]˜]]›Û]]İ]PÚ[™ÙJ
ŠOOÙ	‰ŠOOH”ÒQÓ‘QÒSˆ‰‰˜ÙŠ
NOOH”ÒQÓ‘QÓÕU‰‰ŠË˜İ\œ™[HLKŠ›™YYËX]]ŠJJ_JNÜ™]\›Š
OOÙHLKœİXœØÜš\[Û‹[œİXœØÜšX™J
__KÙWJKOOH˜ÚXÚÚ[™Ë\Ù\ÜÚ[ÛˆŸOOH˜ÛZ[Z[™ÈÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆØ\MMH‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLLËLL[š[X]K\Ü[ˆ›İ[™YY[›Ü™\‹Lˆ›Ü™\‹]Ú]KÌŒ›Ü™\‹]XZ[Û‹YÛÛŸJKOOH˜ÛZ[Z[™È‰‰šKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆXİ]˜][ÛˆHÛˆXØğêÈ[X˜\ÜØY]\¸ )ˆŸJW_JNOOH›™YYËX]]ÚKšœŞ
‹ÙY˜][[ÙNˆœÚYÛ\‹˜[›™\šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹Mˆ›İ[™YXØ\™›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÍ™ËXZ[Û‹YÛÛÌLM^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^XZ[Û‹YÛÛ‹Ú[™[ˆ•H\È™péİH[ˆXØğêÈ[X˜\ÜØY]\ˆRSÓˆÔËˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^]Ú]KÍŒ‹Ú[™[ˆÜ°êYHÛˆÛÛ\KİHÛÛ›™XİK]ÚHÚHH[ˆ\È0êZ°è[‹İ\ˆ	ØXİ]™\‹ˆŸJW_J_JNOOH˜ÛZ[YYÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
ØËØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MHLMˆËLMˆ^XZ[Û‹YÛÛ‹ÙZYÚˆ™š[ŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆXØğêÈXİ]°êHŸJKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[–È•ÛˆXØğêÈ[X˜\ÜØY]\ˆRSÓˆÔÈ\İXİYˆ‹ÏØ\Ü]IØ]H	ÚÜÙJÊ_Xˆˆİ\ˆÚ^[Ú\È‹‹ˆ—_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^]Ú]KÍH‹Ú[™[ˆ”™Y\™Xİ[Ûˆ™\œÈÛˆ\ÜXÙx )ˆŸJKKšœŞ
˜H‹Ú™Yˆ‹È‹Û\ÜÓ˜[YNˆ˜‹YÛÛ]Mˆ[›[™KY›^‹Ú[™[ˆ“İ]œš\ˆ[Ûˆ\ÜXÙHRSÓˆÔÈŸJW_J_JNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH›^XÛÛ][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
šØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MHLMˆËLMˆ^\™YM‹ÙZYÚˆ™š[ŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆ“Y[ˆ›ÛˆXİ]°êHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[›ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]M^^È^]Ú]KÍH‹Ú[™[ˆ”ÚHH[œÙ\È]YHÉÙ\İ[™H\œ™]\‹İHÚHH\È0êZ°èXİ]°êHÙHY[ˆ°êXğêY[[Y[ÛÛXİHH\œÛÛ›™H]ZHH	ØH[›ŞpêKˆŸJKKšœŞ
˜H‹Ú™Yˆ‹È‹Û\ÜÓ˜[YNˆ˜‹YÛÛ]Mˆ[›[™KY›^‹Ú[™[ˆ“İ]œš\ˆ[Ûˆ\ÜXÙHRSÓˆÔÈŸJW_J_J_X\Ş[˜È[˜İ[ÛˆÜÙJK
^ÚYŠO[[	‰™\œ›ÜŠ\™]\›ˆ™\œ›ÜÚYŠYJ\™]\›ˆ[ØÛÛœİYK˜ÛÛ^ÚYŠˆ[œİ[˜Ù[Ùˆ™\ÜÛœÙJ]^ØÛÛœİX]ØZ]‹˜ÛÛ™J
KšœÛÛŠ
NÚYŠˆO[[	‰›‹™\œ›ÜŠ\™]\›ˆ‹™\œ›ÜŸXØ]Úß\™]\›ˆÙHY[ˆ‰ØH\ÈH0ê™HXİ]°êKˆ°ê\šYšYHHÛÛ›™^[Ûˆ]°êY\ÜØZYKˆŸY[˜İ[ÛˆÜÙJJ^Ü™]\›ˆ™]È[‘]U[YQ›Ü›X]
™œ‹Q”ˆ‹Ù]Tİ[Nˆ›Û™ÈŸJK™›Ü›X]
™]È]JJJ_XÛÛœİÙOHœİ[™\™‹\ÙOHKL8 «‹HšÎ‹ËİÜ[XÙšÛİÙ››İŞİ‹œİ\X˜\ÙK˜ÛÈ‹š[˜ÛY\Ê™[›ÚÛZ˜Üœ™]Ü[šœİ\X˜\ÙK˜ÛÈŠOÏÈLKœÙOTÈ˜Ü™X]K\İš\KXÚXÚÛİ][]™Hˆ˜Ü™X]K\İš\KXÚXÚÛİ]]\İ‹ÙOVŞİ]Nˆ”İZ]šH	ˆğêXİ\š]0êH‹İX]Nˆ•[™H˜\ÙHšXX›KİZ›İ\œÈ0è›İ\ˆ‹XÛÛ“Õ‹XØÙ[ˆ^XŞX[‹LŒ‹›Ü™\ˆ˜›Ü™\‹XŞX[‹LÌÌH‹˜XÚÙÜ›İ[™ˆ™œ›ÛKXŞX[‹LÌÖÌŒL—HËXŞX[‹LÌÖÌŒ×H‹][\Î–ÈÙ[˜[\ÙH0ê[0ê™\Ë[œØÜš\[ÛœÈ]\İÜš\]YH[œÈ[ˆÙ][\ÜXÙKˆ‹’[\ÜH[ˆšXÚY\ˆİH[ˆX›X]HÛÜpêKXÛÛ0êH]Ü°êYH]]ÛX]\]Y[Y[\ÈÜÜÚY\œËˆ‹]šXYH[™H°êY°ê\™[˜ÙH[š\]YH0èÚ\]YH0ê[0ê™Hİ\ˆHİZ]œ™H[œÈH\°êYKˆ‹”™\0ê™H[[pêYX][Y[\ÈÜÜÚY\œÈ]ZY[Y[È[ˆ™]\™ˆ‹”›İ0êÙH\ÈÛ›°êY\ÈÙ[œÚX›\È\ˆÚY™œ™[Y[]˜\ÙHÙXÜ°êKˆ—_Kİ]Nˆ”ZY[Y[È	ˆ™[][ÛœÈ‹İX]Nˆ“[Ú[œÈHØZ\ÚYK\È™[[˜Ù\È°ê\È‹XÛÛœ‹XØÙ[ˆ^Y[Y\˜[LŒ‹›Ü™\ˆ˜›Ü™\‹Y[Y\˜[LÌÌH‹˜XÚÙÜ›İ[™ˆ™œ›ÛKY[Y\˜[LÌÖÌŒL—HËY[Y\˜[LÌÖÌŒ×H‹][\Î–ÈÜ°êYH\È[œØÜš\[ÛœÈ\Z\È[™HØ\\™H^T[]][Û[]H]°êY°ê\™[˜ÙKˆ‹Ø[İ[H\È0êXÚ0êX[˜Ù\È]H™\İH0è^Y\ˆHÚ\]YHÜÜÚY\‹ˆ‹”˜\›ØÚH\ÈZY[Y[È˜[œÛZ\ÈH8 &pê[0ê™H]HÛÛˆÜÜÚY\‹ˆ‹”°ê\\™H\ÈÛÛ™š\›X][ÛœÈ]™XÈ\È[™›Ü›X][ÛœÈ][œİXİ[ÛœÈ][\Ëˆ‹“Ü™Ø[š\ÙH\È™[[˜Ù\ÈÚ]Ğ\[™]šYY[\ÈİH[ˆš[K]™XÈ›Ú\Èš]™X]^8 &]\™Ù[˜ÙKˆ—_Kİ]Nˆ”[İYÙH	ˆš\Ú[Ûˆ‹İX]NˆÚ\]YHš[Üš]0êH]šY[š\ÚX›H‹XÛÛ”ØËXØÙ[ˆ^]š[Û]LŒ‹›Ü™\ˆ˜›Ü™\‹]š[Û]LÌÌH‹˜XÚÙÜ›İ[™ˆ™œ›ÛK]š[Û]LÌÖÌŒL—HË]š[Û]LÌÖÌŒ×H‹][\Î–È”°ê\Ù[H[ˆœšYYˆÛZ\ˆ\È\™Ù[˜Ù\È]Xİ[ÛœÈ0è˜Z]\‹ˆ‹”[İH\È0êXÚ0êX[˜Ù\Èpê›YHÜœÜ]YHH¸ &Y\È\ÈÛÛ›™Xİ0êYKˆ‹”˜\[H\È0è˜Ú\È]™[[˜Ù\ÈØZ\ÚY\ÈX[Y[[Y[ˆ‹”°ê\Û™0è\È]Y\İ[ÛœÈÜ°è˜ÙH0è8 &X\ÜÚ\İ[RSÓˆÔÈ[0êYÜ°êKˆ‹ÛÛœÛÛYH][™K\°éİK™]\™È]°ê\\][Ûˆ\È™XÙ]\Ëˆ—_WKœÙOVÈ•İ]H8 &X\XØ][ÛˆRSÓˆÔÈ‹ŒHİY[È[˜Û\È‹“Z\Ù\È0è›İ\ˆHİY[ÈÛÛ\š\Ù\È—K[O^ØÙİNˆšÎ‹ËİİİË˜Z[Û›ÜËÙXœÚ]KÛYØ[ØÙİH‹ÙİˆšÎ‹ËİİİË˜Z[Û›ÜËÙXœÚ]KÛYØ[ØÙİˆ‹š]˜XŞNˆšÎ‹ËİİİË˜Z[Û›ÜËÙXœÚ]KÛYØ[ØÛÛ™šY[X[]H‹›İXÙ\ÎˆšÎ‹ËİİİË˜Z[Û›ÜËÙXœÚ]KÛYØ[ÛY[[ÛœË[YØ[\ÈŸNÙ[˜İ[ÛˆÛJJ^Ü™]\›ˆKš[J
KÓØØ[SİÙ\Ø\ÙJ™œ‹Q”ˆŠ_Y[˜İ[ÛˆÙJ
^ØÛÛœİO\ÛJ™]ÈT“ÙX\˜Ú\˜[\ÊÚ[™İË›ØØ][Û‹œÙX\˜Ú
K™Ù]
œ™YˆŠOÏÈˆŠKK×–ÌNXKY—^ÌMŸIË\İ
JOÙN›[Ü‹—O]‹\ÙTİ]JLJKØK×O]‹\ÙTİ]JLJKÛË×O]‹\ÙTİ]JˆŠKÙ—O]‹\ÙTİ]J×JKÚO]‹\ÙTİ]JˆŠKØ‹×O]‹\ÙTİ]JL
K×Ë—O]‹\ÙTİ]JLJKÔË×O]‹\ÙTİ]J[
Nİ‹\ÙQY™™Xİ


OOÛ]HLØ\Ş[˜È[˜İ[ÛˆŠ
^ØÛÛœİÙ]N”\œ›Ü’_OX]ØZ]™œ›ÛJœİY[×ØØ][ÙÈŠKœÙ[Xİ
œİY[×ÚÙ^K\Ü^WÛ˜[YKÚÜÙ\ØÜš\[Û‹™XÛÛ[Y[™][Û—İYÜÈŠK™\Jœİ]\È‹˜]˜Z[X›HŠK›Ü™\ŠœÛÜÛÜ™\ˆ‹Ø\ØÙ[™[™ÎˆLJNÚYŠTŠ\™]\›ÚYŠÊLJK_JO[[	‰”›[™İ
J^ÚÊ“\ÈİY[ÜÈ\ÜÛšX›\È™H]]™[\È0ê™HÚ\™ğê\Èİ\ˆH[ÛY[ˆŠNÜ™]\›ŸXÛÛœİOTÙŠJNØÛÛœİO[™]ÈT“ÙX\˜Ú\˜[\ÊÚ[™İË›ØØ][Û‹œÙX\˜Ú
KÏ\ÛJK™Ù]
œİY[ÈŠOÏÈˆŠK\ÛJK™Ù]
˜Xİ]š]HŠOÏÓK™Ù]
˜Xİ]š]HŠOÏÈˆŠKUK™š[™
OO”KœİY[×ÚÙ^OOOUÊOÏÕK™š[™
OO‘›[™İŒ	‰”Kœ™XÛÛ[Y[™][Û—İYÜËœÛÛYJOO‘š[˜ÛY\ÊÛJJJJJOÏÕVÌNŞ
œİY[×ÚÙ^J_\™]\›ˆŠ
K

OOÔHL__K×JNØÛÛœİ]‹\ÙSY[[Ê

OO™™š[™
O”‹œİY[×ÚÙ^OOOZ
OÏÛ[ÚJNØ\Ş[˜È[˜İ[ÛˆÊ
^ÚYŠ\ŸX_U[Ëš[J
J\™]\›ÚYŠI‰ˆ]
^ÚÊÙHY[ˆH\œ˜Z[˜YÙH\İ[˜[YKˆŠNÜ™]\›ŸSŠL
KÊ[
NØÛÛœİÙ]N”‹\œ›Ü•ŸOX]ØZ]™[˜İ[ÛœËš[›ÚÙJœÙKØ›ÙNÙ[XZ[›Ëš[J
KÓİÙ\Ø\ÙJ
K[’Ù^N•ÙKİY[ÒÙ^N•œİY[×ÚÙ^KYØ[XØÙ\YˆL™Y™\œ˜[ÛÙN_JNÚYŠŠLJKŸ\[ÙŠO[[İ›ÚY”‹˜ÚXÚÛİ]\›
HOHœİš[™ÈŠ^ØÛÛœİ]\[ÙŠO[[İ›ÚY”‹™\œ›ÜŠOOHœİš[™ÈÔ‹™\œ›ÜˆˆÚÊOOH˜ÚXÚÛİ]Ü™\]Y\İİÛ×Ùœ™\]Y[È•[™H[]]™HšY[8 &pê™HÜ°êpêYKˆ]Y[H[™HZ[]H]˜[H™XÛÛ[Y[˜Ù\‹ˆ”OOHœİY[×Û›İØ]˜Z[X›HÈÙHİY[È¸ &Y\İ\È[˜ÛÜ™H\ÜÛšX›H0èHÛİ\ØÜš\[Û‹ˆ”OOHš[˜[YÜ™Y™\œ˜[ØÛÙHÈÙHY[ˆH\œ˜Z[˜YÙH\İ[˜[YHİH¸ &Y\İ\È\ÜÛšX›Kˆ”OOHœÙ[—Ü™Y™\œ˜[Û›İØ[İÙYÈ•H™H]^\È][\Ù\ˆÛˆ›Ü™HY[ˆH\œ˜Z[˜YÙKˆˆ“HZY[Y[\İ\İ[ÛY[[°ê[Y[[™\ÜÛšX›KˆŠNÜ™]\›Ÿ\Ù\ÜÚ[Û”İÜ˜YÙKœÙ]][J˜Z[Û—Ü[™[™×ÜİXœØÜš\[Û—Ù[XZ[‹Ëš[J
KÓİÙ\Ø\ÙJ
JKÚ[™İË›ØØ][Û‹˜\ÜÚYÛŠ‹˜ÚXÚÛİ]\›
_\™]\›ˆKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]Z[‹ZVÌLšHİ™\™›İË^KX]]ÈMKMH^]Ú]HÛNœMˆÛNœKN‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX^]ËM[š[X]KY˜YKZ[ˆ‹Ú[™[–ÚKšœŞÊšXY\ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\M‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^^È›Û[YY][H˜XÚÚ[™ËVÌŒM™[WH^XZ[Û‹YÛÛ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆ“ÙÛÈRSÓˆÔÈ‹Û\ÜÓ˜[YNˆšLLËLLØš™XİXÛÛZ[ˆŸJKRSÓˆÔÈ—_JKKšœŞ
˜H‹Ú™Yˆ‹ÏØ]]\ÚYÛš[ˆ‹Û\ÜÓ˜[YNˆœKLÈ^^È^]Ú]KÍÌ[™\›[™H[™\›[™K[Ù™œÙ]Mİ™\^XZ[Û‹YÛÛÛN^\ÛH‹Ú[™[ˆ‘0êZ°è[ˆÛÛ\HÈÙHÛÛ›™Xİ\ˆŸJW_JKKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MÈ]MÈX^]ËLŞ^XÙ[\ˆÛN›X‹LLÛN›]LL‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H˜XÚÚ[™ËVÌŒM[WH^XZ[Û‹YÛÛ‹Ú[™[ˆ‘ĞT‘HHSÕQÑHPÕQˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›ÛY\Ü^H^LŞ›Û\Ù[ZX›ÛXY[™Ë]YÚ^]Ú]HÛN^M^‹Ú[™[ˆXİ]™HÛˆXØğêÈRSÓˆÔËˆŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›^X]]È]LÈX^]ËL^\ÛHXY[™Ë\™[^Y^]Ú]KÍHÛN^X˜\ÙH‹Ú[™[ˆÙ[˜[\ÙH\ÈÜÜÚY\œË]]ÛX]\ÙHHİZ]šH\ÈZY[Y[È]™]›İ]™H[™Hš\Ú[ÛˆÛZ\™HHÛˆXİ]š]0êH8 %[œÈİ]H8 &X\XØ][Û‹]™XÈ[ˆİY[È[˜Û\ËˆŸJW_JKKšœŞÊ˜\XÛH‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈÜšYX^]ËMØ\MH›İ[™YXØ\™›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÎ™ËYÜ˜YY[]ËXœˆœ›ÛKVÈÌNLWKÎMHËVÈÌYMKÎMHMHÚYİËVÌÌÌÌÜ™Ø˜JŒKMŒ‹ÎKŒŒŠWHÛN™ÜšYXÛÛËVÌYœ—Ø]]×HÛNš][\ËXÙ[\ˆÛNœMÈ‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^VÌL\H›Û\Ù[ZX›Û˜XÚÚ[™ËVÌŒN[WH^XZ[Û‹YÛÛ‹Ú[™[ˆ“8 &QTÔÑS•QSÕTˆSÕTˆÓˆPÕU’U0âHŸJKKšœŞ
šˆ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›ÛY\Ü^H^L›Û\Ù[ZX›Û‹Ú[™[ˆRSÓˆÔÈŸJKKšœŞ
[‹ØÛ\ÜÓ˜[YNˆ›]M›^›^]Ü˜\Ø\^MHØ\^KLˆ^\ÛH^]Ú]KÎ‹Ú[™[”œÙK›X\
OšKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[–ÚKšœŞ
šØÛ\ÜÓ˜[YNˆšMËM^Y[Y\˜[LÌ‹˜\šXKZY[ˆˆYHŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[”ŸJW_KŠJ_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌMH™ËVÈÌÌXLØ—KÍMHMHKM^[YÛN›Z[‹]ËMÛN^\šYÚ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›ÙÛË[Y][XÈ^LŞ›Û\Ù[ZX›Û‹Ú[™[’\Ù_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^]Ú]KÍMH‹Ú[™[ˆœ\ˆ[Ú\È0­ÈHİY[ÈŸJW_JW_JKKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›]MÈ‹˜\šXK[X™[YHˆ˜Ø\Xš[]Y\Ë]]H‹Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX^]ËLŞ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^VÌL\H›Û\Ù[ZX›Û˜XÚÚ[™ËVÌŒN[WH^XZ[Û‹YÛÛ‹Ú[™[ˆ’QSˆTÈUx &USˆÕUSŸJKKšœŞ
šˆ‹ÚYˆ˜Ø\Xš[]Y\Ë]]H‹Û\ÜÓ˜[YNˆ›]Lˆ›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]HÛN^LŞ‹Ú[™[ˆ•İ]ÙH]x &PRSÓˆÔÈ™[™[ˆÚ\™ÙHŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^]Ú]KÍMH‹Ú[™[ˆ“[Ú[œÈH0è˜Ú\È\Ü\œğêY\Ëˆ\ÈHš\ÚXš[]0êHİ\ˆ0êXÚY\ˆ]]˜[˜Ù\‹ˆŸJW_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MHÜšYØ\MÎ™ÜšYXÛÛËLÈ‹Ú[™[“ÙK›X\
OØÛÛœİT‹šXÛÛÜ™]\›ˆKšœŞÊ˜\XÛH‹ØÛ\ÜÓ˜[YN˜›İ[™YXØ\™›Ü™\ˆ™ËYÜ˜YY[]ËXœˆ	Ô‹˜›Ü™\ŸH	Ô‹˜˜XÚÙÜ›İ[™HMH˜XÚÙ›ÜX›\‹\ÛHÛNœM˜Ú[™[–ÚKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜›^LLËLL][\ËXÙ[\ˆ\İYKXÙ[\ˆ›İ[™YY[›Ü™\ˆ›Ü™\‹]Ú]KÌMH™Ë]Ú]KÖÌŒ×H	Ô‹˜XØÙ[XÚ[™[šKšœŞ
‹ØÛ\ÜÓ˜[YNˆšMHËMH‹İ›ÚÙUÚYŒK‹˜\šXKZY[ˆˆYHŸJ_JKKšœŞÊ™]ˆ‹ØÚ[™[–ÚKšœŞ
šÈ‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^[È›Û\Ù[ZX›Û^]Ú]H‹Ú[™[”‹]_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^VÌL\H^]Ú]KÍH‹Ú[™[”‹œİX]_JW_JW_JKKšœŞ
[‹ØÛ\ÜÓ˜[YNˆ›]MHÜXÙK^KLÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍÌˆ‹Ú[™[”‹š][\Ë›X\
OšKšœŞÊ›H‹ØÛ\ÜÓ˜[YNˆ™›^Ø\L‹H‹Ú[™[–ÚKšœŞ
‹ØÛ\ÜÓ˜[YNˆ›]LHMËMÚš[šËL^XZ[Û‹YÛÛ‹İ›ÚÙUÚYŒK˜\šXKZY[ˆˆYHŸJKKšœŞ
œÜ[ˆ‹ØÚ[™[”JW_K
J_JW_K‹]J_J_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]È]M›^X^]ËLŞ][\ËXÙ[\ˆ\İYKXÙ[\ˆØ\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹XZ[Û‹YÛÛÌH™ËXZ[Û‹YÛÛÖÌŒ×HMKLÈ^XÙ[\ˆ^\ÛH^]Ú]KÍÍH‹Ú[™[–ÚKšœŞ
M‹ØÛ\ÜÓ˜[YNˆšMHËMHÚš[šËL^Y[Y\˜[LÌ‹˜\šXKZY[ˆˆYHŸJKKšœŞÊœ‹ØÚ[™[–ÚKšœŞ
œİ›Û™È‹ØÛ\ÜÓ˜[YNˆ^]Ú]H‹Ú[™[ˆ”™]›İ]™HHÚ\™ÙHY[[H\ÜÛšX›HŸJKˆİ\ˆHÛÛ˜Ù[™\ˆİ\ˆ8 &pê]›Û][ÛˆHÛˆXİ]š]0êKˆ—_JW_JW_JKKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]È]NX^]ËLŞ‹˜\šXK[X™[YHˆœİY[ËXÚÚXÙK]]H‹Ú[™[–ÚKšœŞ
šˆ‹ÚYˆœİY[ËXÚÚXÙK]]H‹Û\ÜÓ˜[YNˆ™›ÛY\Ü^H^^›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆ•ÛˆİY[È[˜Û\ÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^ÈXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[ˆRSÓˆÔÈ°ê\ğê[Xİ[Û›™HHİY[ÈY\0êH]H\˜Ûİ\œËˆ°ê\šYšYHZ\ÈÛÛ™š\›YHÛˆÚÚ^ˆŸJKÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛH^]Ú]KÍMH‹Ú[™[ˆÚ\™Ù[Y[\ÈİY[ÜÈ\ÜÛšX›\ø )ˆŸJNšKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈÜXÙK^KLˆ‹Ú[™[™›X\
OØÛÛœİT‹œİY[×ÚÙ^OOOZÜ™]\›ˆKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YN˜›^İ\œÛÜ‹\Ú[\ˆ][\Ë\İ\Ø\LÈ›İ[™YXˆ›Ü™\ˆMKLÈ˜[œÚ][Û‹XÛÛÜœÈ	ÕÈ˜›Ü™\‹XZ[Û‹YÛÛ™ËXZ[Û‹YÛÛÌLˆ˜›Ü™\‹]Ú]KÌMH™Ë]Ú]KÖÌŒHİ™\˜›Ü™\‹XZ[Û‹YÛÛÍLŸXÚ[™[–ÚKšœŞ
š[œ]‹İ\Nˆœ˜Y[È‹˜[YNˆœİY[È‹˜[YN”‹œİY[×ÚÙ^KÚXÚÙY•‹ÛÚ[™ÙNŠ
OOŞ
‹œİY[×ÚÙ^JKÊLJKÊ[
_KÛ\ÜÓ˜[YNˆ›]LHMËMXØÙ[VÈĞÎPLŒ×HŸJKKšœŞÊœÜ[ˆ‹ØÚ[™[–ÚKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ^\ÛH›Û\Ù[ZX›Û^]Ú]H‹Ú[™[”‹™\Ü^WÛ˜[Y_JKKšœŞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›]LH›ØÚÈ^^ÈXY[™Ë\™[^Y^]Ú]KÍMH‹Ú[™[”‹œÚÜÙ\ØÜš\[ÛŸJW_JW_K‹œİY[×ÚÙ^J_J_JK	‰šKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ›]LÈ›^İ\œÛÜ‹\Ú[\ˆ][\Ë\İ\Ø\LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹Y[Y\˜[LÌÌH™ËY[Y\˜[LÌÖÌŒHMKLÈ^^ÈXY[™Ë\™[^Y^]Ú]KÍÍH‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ˜ÚXÚØ›Ş‹ÚXÚÙY˜KÛÚ[™ÙN”OœÊ‹\™Ù]˜ÚXÚÙY
KÛ\ÜÓ˜[YNˆ›]LHMHËMHÚš[šËLXØÙ[VÈĞÎPLŒ×HŸJKKšœŞÊœÜ[ˆ‹ØÚ[™[–È’™HÛÛ™š\›YH‹KšœŞ
œİ›Û™È‹ØÛ\ÜÓ˜[YNˆ^]Ú]H‹Ú[™[•™\Ü^WÛ˜[Y_JKˆÛÛ[YHİY[È[˜Û\È[œÈ[ÛˆX›Û›™[Y[ˆ—_JW_JW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹M]MˆX^]ËLŞ‹Ú[™[–ÚKšœŞ
›X™[‹Ú[›ÜˆœİXœØÜš\[Û‹Y[XZ[‹Û\ÜÓ˜[YNˆ›X‹LKH›ØÚÈ^\ÛH›Û[YY][H^]Ú]KÎH‹Ú[™[ˆY™\ÜÙHK[XZ[ŸJKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹Ú[™[–ÚKšœŞ
ĞËØÛ\ÜÓ˜[YNˆœÚ[\‹Y]™[Ë[›Û™HXœÛÛ]HYLËHÜLKÌˆMHËMH]˜[œÛ]K^KLKÌˆ^]Ú]KÍ‹İ›ÚÙUÚYŒK_JKKšœŞ
š[œ]‹ÚYˆœİXœØÜš\[Û‹Y[XZ[‹\Nˆ™[XZ[‹™\]Z\™YˆL]]ĞÛÛ\]Nˆ™[XZ[‹˜[YN›ËÛÚ[™ÙN”OØÊ‹\™Ù]˜[YJKÊ[
_KXÙZÛ\ˆÚP[™\š\ÙK™œˆ‹Û\ÜÓ˜[YNˆ™šY[Z[œ]X]]LLHŸJW_JKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LKH^^È^]Ú]KÍH‹Ú[™[ˆ•][\ğêYHİ\ˆİš\H\İ]İ\ˆ°ê\™[\\ˆHÜ°êX][ÛˆHÛÛ\KˆŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MX^]ËLŞ‹Ú[™[–ÚKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ^XÙ[\ˆ^VÌL\H^]Ú]KÍH‹Ú[™[ˆ”Ø[œÈ[™ØYÙ[Y[0­È°ê\Ú[X][Ûˆ0èİ][ÛY[0­È[Ú\ÈÛÛ[Y[˜ğêH0îÈŸJKKšœŞÊ™]Z[È‹ØÛ\ÜÓ˜[YNˆ™Ü›İ\]LÈ›İ[™YXˆ›Ü™\ˆ›Ü™\‹]Ú]KÌL™Ë]Ú]KÖÌŒÍWH^^È^]Ú]KÍMH‹Ú[™[–ÚKšœŞÊœİ[[X\H‹ØÛ\ÜÓ˜[YNˆ™›^İ\œÛÜ‹\Ú[\ˆ\İ[›Û™H][\ËXÙ[\ˆ\İYKX™]ÙY[ˆØ\LÈMKLÈ^]Ú]KÍH‹Ú[™[–ÚKšœŞ
œÜ[ˆ‹ØÚ[™[ˆÛÛ™][ÛœÈH8 &XX›Û›™[Y[ŸJKKšœŞ
KØÛ\ÜÓ˜[YNˆšMËM˜[œÚ][Û‹]˜[œÙ›Ü›HÜ›İ\[Ü[œ›İ]KLN‹˜\šXKZY[ˆˆYHŸJW_JKKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ›Ü™\‹]›Ü™\‹]Ú]KÌLMKLÈXY[™Ë\™[^Y‹Ú[™[–ÚKšœŞ
œ‹ØÚ[™[ˆX›Û›™[Y[Y[œİY[™[›İ]™[0êH]]ÛX]\]Y[Y[ˆ°ê\Ú[X][ÛˆY™™Xİ]™H0èHš[ˆHH0ê\š[ÙH[ˆÛİ\œÈÈH0ê\š[ÙHÛÛ[Y[˜ğêYH™\İHYKˆŸJKKšœŞ
œ‹ØÚ[™[ˆ•H›Ûˆ\XØX›K\XÛHLÈˆHÑÒKˆŸJKKšœŞ
œ‹ØÚ[™[ˆÛÛœÛÛ[X]]\œÈˆ›Ú]H°ê]˜Xİ][ÛˆHM›İ\œÈ0èÛÛ\\ˆHHÛİ\ØÜš\[Û‹Ù[Ûˆ\È[Ù[]0ê\È°ê]Y\È[œÈ\ÈÛÛ™][ÛœÈH™[KˆŸJW_JW_JW_JKKšœŞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ›^X]]È›^X^]ËLŞİ\œÛÜ‹\Ú[\ˆ][\Ë\İ\Ø\LÈ^^ÈXY[™Ë\™[^Y^]Ú]KÍHÛN^\ÛH‹Ú[™[–ÚKšœŞ
š[œ]‹İ\Nˆ˜ÚXÚØ›Ş‹ÚXÚÙYœ‹ÛÚ[™ÙN”O›Š‹\™Ù]˜ÚXÚÙY
KÛ\ÜÓ˜[YNˆ›]LHMHËMHÚš[šËLXØÙ[VÈĞÎPLŒ×HŸJKKšœŞÊœÜ[ˆ‹ØÚ[™[–È’¸ &XXØÙ\H\È‹ˆ‹KšœŞ
˜H‹Ú™Y˜[K˜Ùİ‹\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ^XZ[Û‹YÛÛ[™\›[™H‹Ú[™[ˆ˜ÛÛ™][ÛœÈH™[H]8 &XX›Û›™[Y[ŸJK‹\È‹ˆ‹KšœŞ
˜H‹Ú™Y˜[K˜ÙİK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ^XZ[Û‹YÛÛ[™\›[™H‹Ú[™[ˆÑÕHŸJKˆ\XØX›\È0èÙ]HÛİ\ØÜš\[Û‹ˆÚH™HÛİ\ØÜš\ÈÛÛ[YHÛÛœÛÛ[X]]\‹™H[X[™H8 &XXØğêÈ[[pêYX]0èRSÓˆÔÈ]˜[Hš[ˆH0ê[ZHH°ê]˜Xİ][Û‹ˆ[ˆØ\ÈH°ê]˜Xİ][Ûˆ\°êÈH0êX]HÙ\šXÙK[ˆ[Û[›ÜÜ[Û›™[]HÙ\šXÙH0êZ°è›İ\›šH]]™\İ\ˆ0îËˆ—_JW_JKKšœŞÊœ‹ØÛ\ÜÓ˜[YNˆ›^X]]È]LÈX^]ËLŞ^XÙ[\ˆ^^È^]Ú]KÍMH‹Ú[™[–ÈÛÛœİ[H]\ÜÚHH‹KšœŞ
˜H‹Ú™Y˜[Kœš]˜XŞK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ^XZ[Û‹YÛÛ[™\›[™H‹Ú[™[ˆœÛ]\]YHHÛÛ™šY[X[]0êHŸJKˆ]\È‹ˆ‹KšœŞ
˜H‹Ú™Y˜[K››İXÙ\Ë\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆ^XZ[Û‹YÛÛ[™\›[™H‹Ú[™[ˆ›Y[[ÛœÈ0êYØ[\ÈŸJK‹ˆ—_JKKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]È]MHX^]ËLŞ‹Ú[™[šKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹\ØX›Yˆ\ŸX_U[Ëš[J
_ŸËÛÛXÚÎËÛ\ÜÓ˜[YNˆ˜‹YÛÛ‹Ú[™[—ÏØ°ê\\˜][ÛˆHZY[Y[	ÔÈœğêXİ\š\ğêHˆ\İŸx )˜ˆÛÛ[Y\ˆ™\œÈHZY[Y[ğêXİ\š\ğêHŸJ_JKÉ‰šKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›^X]]È]LÈX^]Ë^›İ[™YXˆ›Ü™\ˆ›Ü™\‹\™YMLÌÌ™Ë\™YMLÌMHMKLÈ^XÙ[\ˆ^^È^\™YLŒ‹Ú[™[”ßJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^XÙ[\ˆ^VÌL\H^]Ú]KÍ‹Ú[™[”È”ZY[Y[ğêXİ\š\ğêH\ˆİš\Hˆ”İš\H[ˆ[ÙH\İ0­È]Xİ[ˆ0êXš]°êY[ŸJW_J_J_XÛÛœİ^HšÎ‹ËİÜ[XÙšÛİÙ››İŞİ‹œİ\X˜\ÙK˜ÛÈ‹š[˜ÛY\Ê™[›ÚÛZ˜Üœ™]Ü[šœİ\X˜\ÙK˜ÛÈŠOÏÈLKœÙOR^È›]™Hˆ\İ‹\ÙOR^È˜ÛZ[K\İš\KXÚXÚÛİ][]™Hˆ˜ÛZ[K\İš\KXÚXÚÛİ]]\İ‹ÜÙOR^È˜ÛZ[K[]\İ\İš\KXÚXÚÛİ][]™Hˆ˜ÛZ[K[]\İ\İš\KXÚXÚÛİ]]\İ‹ÙOR^Èœ™\İ[YK\İš\KXÚXÚÛİ][]™Hˆœ™\İ[YK\İš\KXÚXÚÛİ]]\İÙ[˜İ[Ûˆ	ÙJ
^ØÛÛœİO[™]ÈT“ÙX\˜Ú\˜[\ÊÚ[™İË›ØØ][Û‹œÙX\˜Ú
NÛ™]ÈT“ÙX\˜Ú\˜[\ÊÚ[™İË›ØØ][Û‹š\ÚœÛXÙJJJK™›Ü‘XXÚ

ËŠOOÙKš\ÊŠ_KœÙ]
‹Ê_JNØÛÛœİYK™Ù]
œ™\İ[YHŠOÏÈˆ‹YK™Ù]
œÙ\ÜÚ[Û—ÚYŠOÏÈˆ‹OK×–ÌNXKY—^ÍIË\İ
ŠI‰‹×˜Ü×İ\İÖĞKV˜K^ŒNW×JÉË\İ
ŠKÏYK™Ù]
˜ÛÛ™š\›YYŠOOOHŒH‹ÏJÙ\ÜÚ[Û”İÜ˜YÙK™Ù]][J˜Z[Û—Ü[™[™×ÜİXœØÜš\[Û—Ù[XZ[ŠOÏÈˆŠKš[J
KÓİÙ\Ø\ÙJ
KØËO]‹\ÙTİ]JLJKÙ‹O]‹\ÙTİ]J[
KŞ—O]‹\ÙTİ]J[
KİË×O]‹\ÙTİ]JLJK]‹\ÙT™YŠLJKÏ[™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠNÔËœÙX\˜Ú\˜[\ËœÙ]
˜ÛÛ™š\›YY‹ŒHŠKËš\ÚHˆØÛÛœİÏ]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOØÛÛœİÙ]NßOX]ØZ]˜]]™Ù]\Ù\Š
NÚYŠPË\Ù\Š\™]\›ˆLNØÛÛœİÙ]N”ŸOX]ØZ]™œ›ÛJ˜XØÛİ[ØXØÙ\Ü×Ù[][Y[ÈŠKœÙ[Xİ
šYŠK™\J\Ù\—ÚY‹Ë\Ù\‹šY
K™\JœÛİ\˜ÙH‹˜ÛÛ[Y\˜ÚX[ŠK™\Jœİ]\È‹˜Xİ]™HŠK›[Z]
JK›X^X™TÚ[™ÛJ
NÜ™]\›ˆHTŸK×JK]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOÚYŠ‹˜İ\œ™[
\™]\›Ó‹˜İ\œ™[HLÊL
NØÛÛœİÙ]NË\œ›Ü”ŸOX]ØZ]™[˜İ[ÛœËš[›ÚÙJOÓ\ÙN“ÜÙKØ›ÙN˜OŞÜ™\İ[YUÚÙ[œ‹Ù\ÜÚ[Û’Y›ŸNß_JNÚYŠŸ
ÏO[[İ›ÚYË˜ÛZ[YY
HOOHL
^ÚYŠ]ØZ]Ê
J^İÚ[™İË›ØØ][Û‹œ™\XÙJ‹ÈŠNÜ™]\›ŸS‹˜İ\œ™[HLKÊLJNØÛÛœİ]\[ÙŠÏO[[İ›ÚYË™\œ›ÜŠOOHœİš[™ÈĞË™\œ›ÜˆˆØŠOOH˜XØÛİ[Ù[XZ[ÛZ\ÛX]ÚÈÛÛ›™XİK]ÚH]™XÈHpê›YHY™\ÜÙHK[XZ[]YHÙ[H][\ğêYHİ\ˆHZY[Y[ˆ•OOH››×ØÛÛ\]YÜİXœØÜš\[ÛˆÈ]Xİ[ˆZY[Y[\›Z[°êH™HÛÜœ™\ÜÛ™0èÙ]HY™\ÜÙHK[XZ[ˆ][\ÙHHpê›YHY™\ÜÙH]YHÜœÈHZY[Y[ˆˆ“H˜]XÚ[Y[HÛˆXØğêÈ¸ &XH\ÈX›İ]Kˆ°êY\ÜØZYH[œÈ[ˆ[œİ[ˆŠNÜ™]\›Ÿ\Ù\ÜÚ[Û”İÜ˜YÙKœ™[[İ™R][J˜Z[Û—Ü[™[™×ÜİXœØÜš\[Û—Ù[XZ[ŠKÚ[™İË›ØØ][Û‹œ™\XÙJ‹ÈŠ_KÚËK‹—JNÜ™]\›ˆ‹\ÙQY™™Xİ


OOÛ]ÏHLØ\Ş[˜È[˜İ[ÛˆŠ
^İ˜\ˆKNÚYŠXJ^ÚYŠ[É‰ˆ\Ê^ĞÉ‰˜Š]Xİ[ˆZY[Y[˜[Y0êH™HÛÜœ™\ÜÛ™0èÙHY[‹ˆ™\™[™ÈH\˜Ûİ\œÈ\Z\È8 &[Ù™œ™KˆŠNÜ™]\›ŸPÉ‰™
L
NØÛÛœİÙ]N•ßOX]ØZ]˜]]™Ù]Ù\ÜÚ[ÛŠ
NÚYŠËœÙ\ÜÚ[ÛŠ^ØÛÛœİJ
OUËœÙ\ÜÚ[Û‹\Ù\‹™[XZ[
OO[[İ›ÚY•Kš[J
KÓİÙ\Ø\ÙJ
JOÏÈˆÚYŠÉ‰‘OO[Ê^Ø]ØZ]˜]]œÚYÛ“İ]

NÜ™]\›ŸX]ØZ]

_\™]\›Ÿ[][[Ù›ÜŠ]ÏLÕÏŒ	‰ÎÕÊÏLJ^ØÛÛœİÙ]N‘\œ›Ü’OX]ØZ]™[˜İ[ÛœËš[›ÚÙJÙKØ›ÙNÜ™\İ[YUÚÙ[œ‹Ù\ÜÚ[Û’Y›Ÿ_JNÚYŠR	‰\[ÙŠO[[İ›ÚY‘™[XZ[
OOHœİš[™È‰‰ŠO[[İ›ÚY‘™[š\›Û›Y[
OOOQœÙJ^ÔQØœ™XZßX]ØZ]™]È›ÛZ\ÙJOOÚ[™İËœÙ][Y[İ]
KML
J_ZYŠPÊ\™]\›ÚYŠT
^ØŠ“HÛÛ™š\›X][Ûˆİš\H\İ™[™\ÈH[\È]YH°ê]Kˆ°êY\ÜØZYH[œÈ[ˆ[œİ[ˆŠNÜ™]\›ŸZ

NØÛÛœİÙ]N’_OX]ØZ]˜]]™Ù]Ù\ÜÚ[ÛŠ
NÚYŠKœÙ\ÜÚ[ÛŠ^ÚYŠ


ORKœÙ\ÜÚ[Û‹\Ù\‹™[XZ[
OO[[İ›ÚY“Kš[J
KÓİÙ\Ø\ÙJ
JOÏÈˆŠHOOT™[XZ[š[J
KÓİÙ\Ø\ÙJ
J^Ø]ØZ]˜]]œÚYÛ“İ]

NÜ™]\›ŸX]ØZ]

__TŠ
NØÛÛœİÙ]N•ŸO]˜]]›Û]]İ]PÚ[™ÙJ
JOOÔOOH”ÒQÓ‘QÒSˆ‰‰’I‰•

_JNÜ™]\›Š
OOĞÏHLK‹œİXœØÜš\[Û‹[œİXœØÜšX™J
__KÕKË‹Ë—JKÚKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL^]Ú]H‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[X^]Ë\ÛH[š[X]KY˜YKZ[ˆ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆ“ÙÛÈRSÓˆÔÈ‹Û\ÜÓ˜[YNˆ›^X]]ÈX‹MHLŒËLŒØš™XİXÛÛZ[ˆŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^L›Û\Ù[ZX›Û‹Ú[™[ˆXØğêÈRSÓˆÔÈ[™\ÜÛšX›HŸJKKšœŞ
œ‹Ü›ÛNˆ˜[\‹Û\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍH‹Ú[™[JKKšœŞ
˜H‹Ú™Yˆ‹ÛÙ™œ™H‹Û\ÜÓ˜[YNˆ˜‹YÛÛ]Mˆ[›[™KY›^‹Ú[™[ˆ”™]™[š\ˆ0è8 &[Ù™œ™HŸJW_J_JNˆY‰‰ˆXßÏÚKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ^XÙ[\ˆ^]Ú]H‹Ú[™[–ÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈLLËLL[š[X]K\Ü[ˆ›İ[™YY[›Ü™\‹Lˆ›Ü™\‹]Ú]KÌŒ›Ü™\‹]XZ[Û‹YÛÛŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]M^\ÛH^]Ú]KÍŒ‹Ú[™[ÏÈXİ]˜][ÛˆHÛˆXØğêÈRSÓˆÔø )ˆˆ•˜[Y][ÛˆHÛˆZY[Y[İš\H\İ8 )ˆŸJW_J_JNšKšœŞ
‹ÙY˜][[ÙNˆœÚYÛ\‹[š]X[[XZ[ŠO[[İ›ÚY™‹™[XZ[
OÏÛË[XZ[™XYÛ›NˆHJˆO[[	‰™‹™[XZ[ÊK[XZ[™Y\™XİÎ”ËÔİš[™Ê
K˜[›™\šKšœŞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MH›İ[™YXØ\™›Ü™\ˆ›Ü™\‹Y[Y\˜[LÌÌÌ™ËY[Y\˜[LÌÌLMKLÈ^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
ØËØÛ\ÜÓ˜[YNˆ›^X]]ÈMˆËMˆ^Y[Y\˜[LÌ‹ÙZYÚˆ™š[ŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH›Û[YY][H^]Ú]H‹Ú[™[˜OÈ”ZY[Y[İš\H\İ˜[Y0êHˆ”™\™[™È8 &XXİ]˜][ÛˆHÛˆXØğêÈŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^È^]Ú]KÍŒ‹Ú[™[™ˆO[[	‰™‹™[XZ[ÏØ][\ÙH	ÊO[[İ›ÚY™‹™[XZ[
OÏÛßHİ\ˆXİ]™\ˆÛˆXØğêÈRSÓˆÔË˜ˆ•][\ÙHHpê›YHY™\ÜÙHK[XZ[]YHÙ[H™[œÙZYÛ°êYHÜœÈHZY[Y[ˆŸJW_J_J_Y[˜İ[ÛˆœÙJÜ™X\ÛÛ™_J^Ü™]\›ˆKšœŞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH][\ËXÙ[\ˆ\İYKXÙ[\ˆMHKLL‹Ú[™[šKšœŞÊœÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™X]]ËY[X^]Ë[Y^XÙ[\ˆ‹Ú[™[–ÚKšœŞ
š[YÈ‹ÜÜ˜Îˆ‹ØZ[Û‹[ÙÛËœ™È‹[ˆRSÓˆÔÈ‹Û\ÜÓ˜[YNˆ›^X]]ÈX‹MHLËLØš™XİXÛÛZ[ˆŸJKKšœŞ
ËØÛ\ÜÓ˜[YNˆ›^X]]ÈX‹MLLËLL^XZ[Û‹YÛÛ‹ÙZYÚˆ™[İÛ™HŸJKKšœŞ
šH‹ØÛ\ÜÓ˜[YNˆ™›ÛY\Ü^H^L›Û\Ù[ZX›Û^]Ú]H‹Ú[™[ˆXØğêÈRSÓˆÔÈ[™\ÜÛšX›HŸJKKšœŞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛHXY[™Ë\™[^Y^]Ú]KÍŒ‹Ú[™[™OOOHœ™]›ÚÙYÈÙ]XØğêÈ[X˜\ÜØY]\ˆH0ê]0êH°ê]›Ü]pêKˆ\ÈÛ›°êY\È™\İ[ÛÛœÙ\°êY\ÈÙ[Ûˆ\ÈÛÛ™][ÛœÈ\XØX›\Ëˆ™OOOH™^\™YÈ“H0ê\š[ÙH8 &XXØğêÈ]\ÈÌ›İ\œÈHÛÛœİ[][ÛˆÛÛ\›Z[°ê\Ëˆ™OOOH›Z\ÜÚ[™ÈÈ]Xİ[ˆXØğêÈXİYˆ¸ &Y\İ\ÜÛØÚpêH0èÙHÛÛ\Kˆ][\ÙHÛˆY[ˆ[X˜\ÜØY]\ˆİHÛİ\ØÜš\È[™HÙ™œ™Hİ\ˆÛÛ[Y\‹ˆˆ“H°ê\šYšXØ][ÛˆHÛˆXØğêÈ\İ[ÛY[[°ê[Y[[™\ÜÛšX›Kˆ°êY\ÜØZYH[œÈ]Y[]Y\È[œİ[ËˆŸJKKšœŞ
˜]Ûˆ‹İ\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OO›ÚY˜]]œÚYÛ“İ]

KÛ\ÜÓ˜[YNˆ˜‹YÛÛ]MˆËY[‹Ú[™[ˆ”ÙH0êXÛÛ›™Xİ\ˆŸJW_J_J_X\Ş[˜È[˜İ[Ûˆ\ÙJJ^ØÛÛœİÙ]N\œ›ÜœŸOX]ØZ]™œ›ÛJ˜XØÛİ[ØXØÙ\Ü×Ù[][Y[ÈŠKœÙ[Xİ
œİ]\Ëİ\×Ø]^\™\×Ø]Ü˜XÙWÜ™XYÛÛ›Wİ[[ŠK™\J\Ù\—ÚY‹JNÚYŠŠ]›İÈØÛÛœİ]ÏÖ×NÚYŠ[‹›[™İ
\™]\›Û[ÙNˆ˜›ØÚÙY‹™X\ÛÛˆ›Z\ÜÚ[™ÈŸNØÛÛœİOQ]K››İÊ
KÏ[‹™š[\ŠÏO˜Ëœİ]\ÏOOH˜Xİ]™H‰‰‘]Kœ\œÙJËœİ\×Ø]
OXJNÚYŠËœÛÛYJÏO˜Ë™^\™\×Ø]OO[[]Kœ\œÙJË™^\™\×Ø]
O˜JJ\™]\›Û[ÙNˆ™[ŸNØÛÛœİÏ\Ë™š[\ŠÏO˜Ë™^\™\×Ø]OO[[	‰‘]Kœ\œÙJË™^\™\×Ø]
OXJK›X\
ÏO˜Ë™Ü˜XÙWÜ™XYÛÛ›Wİ[[
K™š[\ŠÏO˜ÈOO[[	‰‘]Kœ\œÙJÊO˜JKœÛÜ

Ë
OO‘]Kœ\œÙJ
KQ]Kœ\œÙJÊJVÌNÜ™]\›ˆÏŞÛ[ÙNˆœ™XYÛÛ›H‹[[›ßNÛ[ÙNˆ˜›ØÚÙY‹™X\ÛÛ›‹œÛÛYJÏO˜Ëœİ]\ÏOOHœ™]›ÚÙYŠOÈœ™]›ÚÙYˆ™^\™YŸ_Y[˜İ[ÛˆœÙJ
^ØÛÛœİOSØš™XİšÙ^\ÊÙ\ÜÚ[Û”İÜ˜YÙJNÙ›ÜŠÛÛœİÙˆJJœİ\ÕÚ]
˜Z[Û‹YXÜ‹Y˜YˆŠ_œİ\ÕÚ]
˜Z[Û‹Z[\ÜY˜YˆŠ_œİ\ÕÚ]
˜Z[Û‹\^[Y[XØ\\™KY˜YˆŠJI‰œÙ\ÜÚ[Û”İÜ˜YÙKœ™[[İ™R][J
_Y[˜İ[ÛˆÙJ
^ØÛÛœİÙKO]‹\ÙTİ]JÜØÜ™Y[ˆ›ØY[™ÈŸJK]‹\ÙT™YŠJNÜ‹˜İ\œ™[YNØÛÛœİ]‹\ÙT™YŠ[
KO]‹\ÙT™YŠ
KÏ]Ú[™İË›ØØ][Û‹œ]˜[YOOOH‹ØYZ[ˆŸÚ[™İË›ØØ][Û‹œ]˜[YKœİ\ÕÚ]
‹ØYZ[‹ÈŠKÏ]Ú[™İË›ØØ][Û‹œ]˜[YK›X]Ú
×—Ø[X˜\ÜØY]\—Ê×‹×JÊWÏÉÊKÏ[ÈOO[[JÏO[[İ›ÚY›ÖÌWJOÏÈˆ‹K×—ÛÙ™œ™WÏÉË\İ
Ú[™İË›ØØ][Û‹œ]˜[YJKK×—Ú[œØÜš\[Û—ÏÉË\İ
Ú[™İË›ØØ][Û‹œ]˜[YJK]‹\ÙT™YŠ[
K]‹\ÙPØ[˜XÚÊ\Ş[˜Ê
OOØÛÛœİÙ]NË\œ›Ü—ßOX]ØZ]™œ›ÛJ\Ù\—ÜÙXÜ™]ÈŠKœÙ[Xİ
šY\Ù\—ÚYØ[™XÛİ™\WÜØ[Ü˜\YÚÙ^KÜ˜\Ú]‹ÚXÚ×İ˜[YKÚXÚ×Ú]‹Ù—Ø[ÛÜš]KÙ—ÛY[[ÜKÙ—İ[YKÙ—Ü\˜[[\ÛKÙ—Ú]\˜][ÛœËÜ™X]YØ]ŠK›X^X™TÚ[™ÛJ
N×ß]ß
O“‹œØÜ™Y[OOHšÛYH‰‰“‹œÙXÜ™]Ë\Ù\—ÚYOO]Ë\Ù\—ÚYŞË‹‹“‹ÙXÜ™]ÎßN“Š_K×JNÜ™]\›ˆ‹\ÙQY™™Xİ


OOÛ]ÏHLØ\Ş[˜È[˜İ[ÛˆÊÊ^ØÛÛœİJÊØK˜İ\œ™[ÏJ
OOÉ‰•OOXK˜İ\œ™[ÚYŠPÊ
J\™]\›ÚYŠ

I‰šÊ^İ
ÜØÜ™Y[ˆœ™\Ù]\\ÜİÛÜ™ŸJNÜ™]\›ŸZYŠÊ^İ
ÜØÜ™Y[ˆ˜[X˜\ÜØYÜˆ‹ÚÙ[™JNÜ™]\›ŸZYŠŠ^İ
ÜØÜ™Y[ˆœİXœØÜš\[ÛˆŸJNÜ™]\›ŸZYŠ
^İ
ÜØÜ™Y[ˆœİXœØÜš\[Û‹\™YÚ\İ˜][ÛˆŸJNÜ™]\›ŸZYŠZÊ^İ
ÜØÜ™Y[ˆ˜]]ŸJNÜ™]\›ŸZYŠÊ^İ
•
Ë\Ù\ŠOŞÜØÜ™Y[ˆ˜YZ[ˆŸNÜØÜ™Y[ˆ˜YZ[‹Y[šYYŸJNÜ™]\›Ÿ[]İ^ÔX]ØZ]\ÙJË\Ù\‹šY
_XØ]ÚÚYŠPÊ
J\™]\›İ
ÜØÜ™Y[ˆ˜XØÙ\ÜËX›ØÚÙY‹™X\ÛÛˆ[˜]˜Z[X›HŸJNÜ™]\›ŸZYŠPÊ
J\™]\›ÚYŠ‹›[ÙOOOH˜›ØÚÙYŠ^İ
ÜØÜ™Y[ˆ˜XØÙ\ÜËX›ØÚÙY‹™X\ÛÛ”‹œ™X\ÛÛŸJNÜ™]\›ŸXÛÛœİT‹›[ÙOOOHœ™XYÛÛ›HÔ‹[[›ÚYÙ]N”\œ›Ü’_OX]ØZ]™œ›ÛJ\Ù\—ÜÙXÜ™]ÈŠKœÙ[Xİ
šY\Ù\—ÚYØ[™XÛİ™\WÜØ[Ü˜\YÚÙ^KÜ˜\Ú]‹ÚXÚ×İ˜[YKÚXÚ×Ú]‹Ù—Ø[ÛÜš]KÙ—ÛY[[ÜKÙ—İ[YKÙ—Ü\˜[[\ÛKÙ—Ú]\˜][ÛœËÜ™X]YØ]ŠK›X^X™TÚ[™ÛJ
NÚYŠÊ
J^ÚYŠJ^İ
ÜØÜ™Y[ˆ˜]]ŸJNÜ™]\›Ÿ]
ŞÜØÜ™Y[ˆ[›ØÚÈ‹ÙXÜ™]Î”™XYÛ›U[[•ŸN•ŞÜØÜ™Y[ˆ˜XØÙ\ÜËX›ØÚÙY‹™X\ÛÛˆ™^\™YŸNÜØÜ™Y[ˆœÙ]\ŸJ__^˜İ\œ™[WÎÛ]HLNİ˜]]™Ù]Ù\ÜÚ[ÛŠ
K[Š
Ù]NšßJOOİ˜\ˆÎÓŸ]ß
‹˜İ\œ™[J
ÏJZËœÙ\ÜÚ[ÛŠOO[[İ›ÚY•\Ù\ŠOO[[İ›ÚYËšY
OÏÛ[ÊËœÙ\ÜÚ[ÛŞİ\Ù\šËœÙ\ÜÚ[Û‹\Ù\ŸN›[
J_JNØÛÛœİÙ]N”ßO]˜]]›Û]]İ]PÚ[™ÙJ
Ë
OOÓHL
\Ş[˜Ê
OOİ˜\ˆÚYŠÏOOH”TÔÕÓÔ‘Ô‘PÓÕ‘T–H‰‰•
^ØK˜İ\œ™[
ÏLK‹˜İ\œ™[U\Ù\‹šY
ÜØÜ™Y[ˆœ™\Ù]\\ÜİÛÜ™ŸJNÜ™]\›ŸXÛÛœİÏJ
UO[[İ›ÚY•\Ù\ŠOO[[İ›ÚY•‹šY
OÏÛ[PÈOO[‹˜İ\œ™[Ü‹˜İ\œ™[œØÜ™Y[OOHšÛYH‰‰œ‹˜İ\œ™[šÙ^I‰šÈOOH”ÒQÓ‘QÓÕU‰‰ˆTŸ‹˜İ\œ™[œØÜ™Y[OOHœ™\Ù]\\ÜİÛÜ™‰‰šÈOOH”ÒQÓ‘QÓÕUŸ
‹˜İ\œ™[PËÊŞİ\Ù\•\Ù\ŸN›[
J_JJ
_JNÜ™]\›Š
OOİÏHLKK˜İ\œ™[
ÏLKËœİXœØÜš\[Û‹[œİXœØÜšX™J
__KÜËË‹JKKœØÜ™Y[OOH›ØY[™ÈÚKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜XÚÙÜ›İ[™X]]›^Z[‹ZVÌLšH][\ËXÙ[\ˆ\İYKXÙ[\ˆ‹Ú[™[šKšœŞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšLLËLL[š[X]K\Ü[ˆ›İ[™YY[›Ü™\‹Lˆ›Ü™\‹]Ú]KÌŒ›Ü™\‹]XZ[Û‹YÛÛŸJ_JN™KœØÜ™Y[OOH˜]]ÚKšœŞ
‹ßJN™KœØÜ™Y[OOHœ™\Ù]\\ÜİÛÜ™ÚKšœŞ
œÙKÛÛ‘Û™NŠ
OOÜ‘

KÚ[™İËš\İÜKœ™\XÙTİ]J[ˆ‹Ú[™İË›ØØ][Û‹œ]˜[YJİÚ[™İË›ØØ][Û‹œÙX\˜Ú
K˜]]™Ù]Ù\ÜÚ[ÛŠ
K[Š
Ù]NßJOOİ˜\ˆÎÊÏ^˜İ\œ™[
OO[[Ë˜Ø[
ËœÙ\ÜÚ[ÛŞİ\Ù\ËœÙ\ÜÚ[Û‹\Ù\ŸN›[
_J__JN™KœØÜ™Y[OOH˜YZ[ˆÚKšœŞ
\ÙKØÚ[™[šKšœŞ
œÙKßJ_JN™KœØÜ™Y[OOH˜YZ[‹Y[šYYÚKšœŞ
\ÙKßJN™KœØÜ™Y[OOH˜[X˜\ÜØYÜˆÚKšœŞ
ÜÙKİÚÙ[™KÚÙ[ŸJN™KœØÜ™Y[OOHœİXœØÜš\[ÛˆÚKšœŞ
ÙKßJN™KœØÜ™Y[OOHœİXœØÜš\[Û‹\™YÚ\İ˜][ÛˆÚKšœŞ
	ÙKßJN™KœØÜ™Y[OOH˜XØÙ\ÜËX›ØÚÙYÚKšœŞ
œÙKÜ™X\ÛÛ™Kœ™X\ÛÛŸJN™KœØÜ™Y[OOHœÙ]\ÚKšœŞ
ÜÙKÛÛ‘Û™NÏOİ
ÜØÜ™Y[ˆ[›ØÚÈ‹ÙXÜ™]ÎßJ__JN™KœØÜ™Y[OOH[›ØÚÈÚKšœŞ
ÜÙKÜÙXÜ™]Î™KœÙXÜ™]ËÛ•[›ØÚÎŠËÊOO
ÜØÜ™Y[ˆšÛYH‹Ù^NËÙXÜ™]Î™KœÙXÜ™]Ë[›ØÚÙYšXT™XÛİ™\N—Ë™YYÒÙ•\Ü˜YNˆWÉ‰™KœÙXÜ™]ËšÙ—Ø[ÛÜš]OOOHœšÙŒˆ‹™XYÛ›U[[™Kœ™XYÛ›U[[JKÛ”ÚYÛ“İ]˜\Ş[˜Ê
OOØÛÛœİÙ\œ›ÜßOX]ØZ]˜]]œÚYÛ“İ]
ÜØÛÜNˆ›ØØ[ŸJNİÉ‰ˆKÜÙ\ÜÚ[Û—Û›İÙ›İ[™Ù\ÜÚ[Ûˆ›İ›İ[™ÚK\İ
Ë›Y\ÜØYÙJI‰˜ÛÛœÛÛK™\œ›ÜŠœÚYÛ“İ]\œ›Üˆ‹ÊKœÙJ
KK˜İ\œ™[
ÏLK‹˜İ\œ™[[[Ú[™İËš\İÜKœ™\XÙTİ]J[ˆ‹‹ÈŠK
ÜØÜ™Y[ˆ˜]]ŸJ__JNšKšœŞÊ‘ÚÙ^WÎ™KšÙ^KÙXÜ™]Î™KœÙXÜ™]ËÚ[™[–ÙKœ™XYÛ›U[[	‰šKšœŞÊ™]ˆ‹Ü›ÛNˆœİ]\È‹Û\ÜÓ˜[YNˆ™š^Y[œÙ]^LÜL‹VÌLH™ËXZ[Û‹YÛÛMKLˆ^XÙ[\ˆ^^È›Û\Ù[ZX›Û^VÈÌÌNL™—HÚYİË[È‹Ú[™[–ÈXØğêÈ[X˜\ÜØY]\ˆ[ˆÛÛœİ[][ÛˆÙ][H\Ü]x &X]H‹™]È[‘]U[YQ›Ü›X]
™œ‹Q”ˆ‹Ù]Tİ[Nˆ›Û™ÈŸJK™›Ü›X]
™]È]JKœ™XYÛ›U[[
JK‹ˆ—_JKKšœŞ
œÙKÚÙ^WÎ™KšÙ^KÛ“ØÚÎŠ
OO
ÜØÜ™Y[ˆ[›ØÚÈ‹ÙXÜ™]Î™KœÙXÜ™]Ë™XYÛ›U[[™Kœ™XYÛ›U[[JKÛ’Ù^PÚ[™ÙYÏOİ
ÏO—ËœØÜ™Y[OOHšÛYHŞË‹‹—ËÙ^NßN—ÊKŠ
__JK
K[›ØÚÙYšXT™XÛİ™\_K›™YYÒÙ•\Ü˜YJI‰šKšœŞ
ÕÚÙ^WÎ™KšÙ^KX[™]ÜNˆL™X\ÛÛ™K›™YYÒÙ•\Ü˜YOÈšÙ‹]\Ü˜YHˆœ™XÛİ™\H‹ÛÛÜÙNŠ
OO
ÏOËœØÜ™Y[OOHšÛYHŞË‹‹Ë[›ØÚÙYšXT™XÛİ™\NˆLK™YYÒÙ•\Ü˜YNˆL_NÊKÛ’Ù^PÚ[™ÙYÏOİ
ÏO—ËœØÜ™Y[OOHšÛYHŞË‹‹—ËÙ^NßN—ÊKŠ
__JW_KKœÙXÜ™]Ë\Ù\—ÚY
_Y[˜İ[ÛˆœÙJÚÙ^WÎ™KÛ“ØÚÎÛ’Ù^PÚ[™ÙYœŸJ^ØÛÛœİ]‹\ÙSY[[Ê

OOœœÙJKŠKÙK—JNÜ™]\›ˆKšœŞ
QKÜ›İ]\›ŸJ_]Ú[™İË˜Y]™[\İ[™\ŠœYÙ\ÚİÈ‹OOİ˜\ˆÙKœ\œÚ\İY	‰Š
]Ú[™İË˜Ü\ÊOO[[İ›ÚYœİXJOOO]›ÚY	‰Ú[™İË›ØØ][Û‹œ™[ØY

_JNÑJØİ[Y[™Ù][[Y[RY
œ›ÛİŠJKœ™[™\ŠKšœŞ
‹”İšXİ[ÙKØÚ[™[šKšœŞ
ÙKßJ_JJNÙ^ÜÚÛˆ\ÈË\È\ÈËN\ÈßNÂ