function O_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function k_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Am={exports:{}},Cl={},Cm={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),B_=Symbol.for("react.portal"),z_=Symbol.for("react.fragment"),H_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),X_=Symbol.for("react.suspense"),q_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),oh=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,bm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Rm}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lm(){}Lm.prototype=Ls.prototype;function Gd(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Rm}var Wd=Gd.prototype=new Lm;Wd.constructor=Gd;Pm(Wd,Ls.prototype);Wd.isPureReactComponent=!0;var lh=Array.isArray,Nm=Object.prototype.hasOwnProperty,jd={current:null},Dm={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Nm.call(e,i)&&!Dm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Na,type:t,key:s,ref:a,props:r,_owner:jd.current}}function K_(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function Z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ch=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z_(""+t.key):e.toString(36)}function No(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Na:case B_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ec(a,0):i,lh(r)?(n="",t!=null&&(n=t.replace(ch,"$&/")+"/"),No(r,e,n,"",function(c){return c})):r!=null&&(Xd(r)&&(r=K_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ec(s,o);a+=No(s,e,n,l,r)}else if(l=Y_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ec(s,o++),a+=No(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return No(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Q_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Do={transition:null},J_={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Do,ReactCurrentOwner:jd};function Im(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Ls;Fe.Fragment=z_;Fe.Profiler=V_;Fe.PureComponent=Gd;Fe.StrictMode=H_;Fe.Suspense=X_;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_;Fe.act=Im;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Nm.call(e,l)&&!Dm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Na,type:t.type,key:r,ref:s,props:i,_owner:a}};Fe.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G_,_context:t},t.Consumer=t};Fe.createElement=Um;Fe.createFactory=function(t){var e=Um.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:j_,render:t}};Fe.isValidElement=Xd;Fe.lazy=function(t){return{$$typeof:$_,_payload:{_status:-1,_result:t},_init:Q_}};Fe.memo=function(t,e){return{$$typeof:q_,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Do.transition;Do.transition={};try{t()}finally{Do.transition=e}};Fe.unstable_act=Im;Fe.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Fe.useContext=function(t){return Wt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Fe.useId=function(){return Wt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Wt.current.useRef(t)};Fe.useState=function(t){return Wt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Wt.current.useTransition()};Fe.version="18.3.1";Cm.exports=Fe;var ie=Cm.exports;const Fm=k_(ie),e0=O_({__proto__:null,default:Fm},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=ie,n0=Symbol.for("react.element"),i0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,s0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)r0.call(e,i)&&!a0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:n0,type:t,key:s,ref:a,props:r,_owner:s0.current}}Cl.Fragment=i0;Cl.jsx=Om;Cl.jsxs=Om;Am.exports=Cl;var _=Am.exports,ru={},km={exports:{}},hn={},Bm={exports:{}},zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,X){var K=N.length;N.push(X);e:for(;0<K;){var ae=K-1>>>1,Te=N[ae];if(0<r(Te,X))N[ae]=X,N[K]=Te,K=ae;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var X=N[0],K=N.pop();if(K!==X){N[0]=K;e:for(var ae=0,Te=N.length,Oe=Te>>>1;ae<Oe;){var j=2*(ae+1)-1,ne=N[j],fe=j+1,ce=N[fe];if(0>r(ne,K))fe<Te&&0>r(ce,ne)?(N[ae]=ce,N[fe]=K,ae=fe):(N[ae]=ne,N[j]=K,ae=j);else if(fe<Te&&0>r(ce,K))N[ae]=ce,N[fe]=K,ae=fe;else break e}}return X}function r(N,X){var K=N.sortIndex-X.sortIndex;return K!==0?K:N.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,x=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=N)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(N){if(S=!1,g(N),!x)if(n(l)!==null)x=!0,V(P);else{var X=n(c);X!==null&&Q(M,X.startTime-N)}}function P(N,X){x=!1,S&&(S=!1,u(b),b=-1),m=!0;var K=h;try{for(g(X),f=n(l);f!==null&&(!(f.expirationTime>X)||N&&!T());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var Te=ae(f.expirationTime<=X);X=t.unstable_now(),typeof Te=="function"?f.callback=Te:f===n(l)&&i(l),g(X)}else i(l);f=n(l)}if(f!==null)var Oe=!0;else{var j=n(c);j!==null&&Q(M,j.startTime-X),Oe=!1}return Oe}finally{f=null,h=K,m=!1}}var R=!1,A=null,b=-1,H=5,y=-1;function T(){return!(t.unstable_now()-y<H)}function W(){if(A!==null){var N=t.unstable_now();y=N;var X=!0;try{X=A(!0,N)}finally{X?z():(R=!1,A=null)}}else R=!1}var z;if(typeof v=="function")z=function(){v(W)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=W,z=function(){J.postMessage(null)}}else z=function(){p(W,0)};function V(N){A=N,R||(R=!0,z())}function Q(N,X){b=p(function(){N(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,V(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var K=h;h=X;try{return N()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=h;h=N;try{return X()}finally{h=K}},t.unstable_scheduleCallback=function(N,X,K){var ae=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ae+K:ae):K=ae,N){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=K+Te,N={id:d++,callback:X,priorityLevel:N,startTime:K,expirationTime:Te,sortIndex:-1},K>ae?(N.sortIndex=K,e(c,N),n(l)===null&&N===n(c)&&(S?(u(b),b=-1):S=!0,Q(M,K-ae))):(N.sortIndex=Te,e(l,N),x||m||(x=!0,V(P))),N},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(N){var X=h;return function(){var K=h;h=X;try{return N.apply(this,arguments)}finally{h=K}}}})(zm);Bm.exports=zm;var o0=Bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=ie,fn=o0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,da={};function Cr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(da[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},dh={};function u0(t){return su.call(dh,t)?!0:su.call(uh,t)?!1:c0.test(t)?dh[t]=!0:(uh[t]=!0,!1)}function d0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f0(t,e,n,i){if(e===null||typeof e>"u"||d0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,$d);Nt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,$d);Nt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,$d);Nt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f0(e,n,r,i)&&(n=null),i||r===null?u0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),lu=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,tc;function Ks(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function ic(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function h0(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case Yr:return"Portal";case au:return"Profiler";case Kd:return"StrictMode";case ou:return"Suspense";case lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Vm:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:cu(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return cu(t(e))}catch{}}return null}function p0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cu(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=m0(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function du(t,e){qm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&fu(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fu(t,e,n){(e!=="number"||Qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Zs(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function $m(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){g0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var v0=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mu(t,e){if(e){if(v0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vu=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _u=null,cs=null,us=null;function vh(t){if(t=Ia(t)){if(typeof _u!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Nl(e),_u(t.stateNode,t.type,e))}}function Jm(t){cs?us?us.push(t):us=[t]:cs=t}function eg(){if(cs){var t=cs,e=us;if(us=cs=null,vh(t),e)for(t=0;t<e.length;t++)vh(e[t])}}function tg(t,e){return t(e)}function ng(){}var rc=!1;function ig(t,e,n){if(rc)return t(e,n);rc=!0;try{return tg(t,e,n)}finally{rc=!1,(cs!==null||us!==null)&&(ng(),eg())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var xu=!1;if(ui)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{xu=!1}function _0(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ia=!1,Jo=null,el=!1,yu=null,x0={onError:function(t){ia=!0,Jo=t}};function y0(t,e,n,i,r,s,a,o,l){ia=!1,Jo=null,_0.apply(x0,arguments)}function S0(t,e,n,i,r,s,a,o,l){if(y0.apply(this,arguments),ia){if(ia){var c=Jo;ia=!1,Jo=null}else throw Error(te(198));el||(el=!0,yu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(Rr(t)!==t)throw Error(te(188))}function M0(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _h(r),t;if(s===i)return _h(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function sg(t){return t=M0(t),t!==null?ag(t):null}function ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ag(t);if(e!==null)return e;t=t.sibling}return null}var og=fn.unstable_scheduleCallback,xh=fn.unstable_cancelCallback,E0=fn.unstable_shouldYield,T0=fn.unstable_requestPaint,mt=fn.unstable_now,w0=fn.unstable_getCurrentPriorityLevel,ef=fn.unstable_ImmediatePriority,lg=fn.unstable_UserBlockingPriority,tl=fn.unstable_NormalPriority,A0=fn.unstable_LowPriority,cg=fn.unstable_IdlePriority,Rl=null,Xn=null;function C0(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:b0,R0=Math.log,P0=Math.LN2;function b0(t){return t>>>=0,t===0?32:31-(R0(t)/P0|0)|0}var Za=64,Qa=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Qs(o):(s&=a,s!==0&&(i=Qs(s)))}else a=n&~r,a!==0?i=Qs(a):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function L0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=L0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ug(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function D0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fg,nf,hg,pg,mg,Mu=!1,Ja=[],Ui=null,Ii=null,Fi=null,pa=new Map,ma=new Map,Ri=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function I0(t,e,n,i,r){switch(e){case"focusin":return Ui=ks(Ui,t,e,n,i,r),!0;case"dragenter":return Ii=ks(Ii,t,e,n,i,r),!0;case"mouseover":return Fi=ks(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,ks(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,ks(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=fr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vu=i,n.target.dispatchEvent(i),vu=null}else return e=Ia(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Sh(t,e,n){Uo(t)&&n.delete(e)}function F0(){Mu=!1,Ui!==null&&Uo(Ui)&&(Ui=null),Ii!==null&&Uo(Ii)&&(Ii=null),Fi!==null&&Uo(Fi)&&(Fi=null),pa.forEach(Sh),ma.forEach(Sh)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Mu||(Mu=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,F0)))}function ga(t){function e(r){return Bs(r,t)}if(0<Ja.length){Bs(Ja[0],t);for(var n=1;n<Ja.length;n++){var i=Ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Bs(Ui,t),Ii!==null&&Bs(Ii,t),Fi!==null&&Bs(Fi,t),pa.forEach(e),ma.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Ri.shift()}var ds=vi.ReactCurrentBatchConfig,il=!0;function O0(t,e,n,i){var r=Ze,s=ds.transition;ds.transition=null;try{Ze=1,rf(t,e,n,i)}finally{Ze=r,ds.transition=s}}function k0(t,e,n,i){var r=Ze,s=ds.transition;ds.transition=null;try{Ze=4,rf(t,e,n,i)}finally{Ze=r,ds.transition=s}}function rf(t,e,n,i){if(il){var r=Eu(t,e,n,i);if(r===null)mc(t,e,i,rl,n),yh(t,i);else if(I0(r,t,e,n,i))i.stopPropagation();else if(yh(t,i),e&4&&-1<U0.indexOf(t)){for(;r!==null;){var s=Ia(r);if(s!==null&&fg(s),s=Eu(t,e,n,i),s===null&&mc(t,e,i,rl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mc(t,e,i,null,n)}}var rl=null;function Eu(t,e,n,i){if(rl=null,t=Jd(i),t=fr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w0()){case ef:return 1;case lg:return 4;case tl:case A0:return 16;case cg:return 536870912;default:return 16}default:return 16}}var Li=null,sf=null,Io=null;function _g(){if(Io)return Io;var t,e=sf,n=e.length,i,r="value"in Li?Li.value:Li.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Io=r.slice(t,1<i?1-i:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function Mh(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eo:Mh,this.isPropagationStopped=Mh,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=pn(Ns),Ua=dt({},Ns,{view:0,detail:0}),B0=pn(Ua),ac,oc,zs,Pl=dt({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(ac=t.screenX-zs.screenX,oc=t.screenY-zs.screenY):oc=ac=0,zs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Eh=pn(Pl),z0=dt({},Pl,{dataTransfer:0}),H0=pn(z0),V0=dt({},Ua,{relatedTarget:0}),lc=pn(V0),G0=dt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=pn(G0),j0=dt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X0=pn(j0),q0=dt({},Ns,{data:0}),Th=pn(q0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function of(){return Z0}var Q0=dt({},Ua,{key:function(t){if(t.key){var e=$0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=pn(Q0),ex=dt({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=pn(ex),tx=dt({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),nx=pn(tx),ix=dt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=pn(ix),sx=dt({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=pn(sx),ox=[9,13,27,32],lf=ui&&"CompositionEvent"in window,ra=null;ui&&"documentMode"in document&&(ra=document.documentMode);var lx=ui&&"TextEvent"in window&&!ra,xg=ui&&(!lf||ra&&8<ra&&11>=ra),Ah=" ",Ch=!1;function yg(t,e){switch(t){case"keyup":return ox.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function cx(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(Ch=!0,Ah);case"textInput":return t=e.data,t===Ah&&Ch?null:t;default:return null}}function ux(t,e){if(Zr)return t==="compositionend"||!lf&&yg(t,e)?(t=_g(),Io=sf=Li=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dx[t.type]:e==="textarea"}function Mg(t,e,n,i){Jm(i),e=sl(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,va=null;function fx(t){Dg(t,0)}function bl(t){var e=es(t);if(Xm(e))return t}function hx(t,e){if(t==="change")return e}var Eg=!1;if(ui){var cc;if(ui){var uc="oninput"in document;if(!uc){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),uc=typeof Ph.oninput=="function"}cc=uc}else cc=!1;Eg=cc&&(!document.documentMode||9<document.documentMode)}function bh(){sa&&(sa.detachEvent("onpropertychange",Tg),va=sa=null)}function Tg(t){if(t.propertyName==="value"&&bl(va)){var e=[];Mg(e,va,t,Jd(t)),ig(fx,e)}}function px(t,e,n){t==="focusin"?(bh(),sa=e,va=n,sa.attachEvent("onpropertychange",Tg)):t==="focusout"&&bh()}function mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(va)}function gx(t,e){if(t==="click")return bl(e)}function vx(t,e){if(t==="input"||t==="change")return bl(e)}function _x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:_x;function _a(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!su.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function wg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=Qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qo(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xx(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wg(n.ownerDocument.documentElement,n)){if(i!==null&&cf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nh(n,s);var a=Nh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=ui&&"documentMode"in document&&11>=document.documentMode,Qr=null,Tu=null,aa=null,wu=!1;function Dh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||Qr==null||Qr!==Qo(i)||(i=Qr,"selectionStart"in i&&cf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&_a(aa,i)||(aa=i,i=sl(Tu,"onSelect"),0<i.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function to(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},dc={},Cg={};ui&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Ll(t){if(dc[t])return dc[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return dc[t]=e[n];return t}var Rg=Ll("animationend"),Pg=Ll("animationiteration"),bg=Ll("animationstart"),Lg=Ll("transitionend"),Ng=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){Ng.set(t,e),Cr(e,[t])}for(var fc=0;fc<Uh.length;fc++){var hc=Uh[fc],Sx=hc.toLowerCase(),Mx=hc[0].toUpperCase()+hc.slice(1);Yi(Sx,"on"+Mx)}Yi(Rg,"onAnimationEnd");Yi(Pg,"onAnimationIteration");Yi(bg,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(Lg,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Ih(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,S0(i,e,void 0,t),t.currentTarget=null}function Dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Ih(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Ih(r,o,c),s=l}}}if(el)throw t=yu,el=!1,yu=null,t}function st(t,e){var n=e[bu];n===void 0&&(n=e[bu]=new Set);var i=t+"__bubble";n.has(i)||(Ug(e,t,2,!1),n.add(i))}function pc(t,e,n){var i=0;e&&(i|=4),Ug(n,t,i,e)}var no="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[no]){t[no]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(Ex.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[no]||(e[no]=!0,pc("selectionchange",!1,e))}}function Ug(t,e,n,i){switch(vg(e)){case 1:var r=O0;break;case 4:r=k0;break;default:r=rf}n=r.bind(null,e,n,t),r=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=fr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ig(function(){var c=s,d=Jd(n),f=[];e:{var h=Ng.get(t);if(h!==void 0){var m=af,x=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":m=J0;break;case"focusin":x="focus",m=lc;break;case"focusout":x="blur",m=lc;break;case"beforeblur":case"afterblur":m=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nx;break;case Rg:case Pg:case bg:m=W0;break;case Lg:m=rx;break;case"scroll":m=B0;break;case"wheel":m=ax;break;case"copy":case"cut":case"paste":m=X0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wh}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ha(v,u),M!=null&&S.push(ya(v,M,g)))),p)break;v=v.return}0<S.length&&(h=new m(h,x,null,n,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==vu&&(x=n.relatedTarget||n.fromElement)&&(fr(x)||x[di]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?fr(x):null,x!==null&&(p=Rr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(S=Eh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=wh,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:es(m),g=x==null?h:es(x),h=new S(M,v+"leave",m,n,d),h.target=p,h.relatedTarget=g,M=null,fr(d)===c&&(S=new S(u,v+"enter",x,n,d),S.target=g,S.relatedTarget=p,M=S),p=M,m&&x)t:{for(S=m,u=x,v=0,g=S;g;g=Ur(g))v++;for(g=0,M=u;M;M=Ur(M))g++;for(;0<v-g;)S=Ur(S),v--;for(;0<g-v;)u=Ur(u),g--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Ur(S),u=Ur(u)}S=null}else S=null;m!==null&&Fh(f,h,m,S,!1),x!==null&&p!==null&&Fh(f,p,x,S,!0)}}e:{if(h=c?es(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=hx;else if(Rh(h))if(Eg)P=vx;else{P=mx;var R=px}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=gx);if(P&&(P=P(t,c))){Mg(f,P,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&fu(h,"number",h.value)}switch(R=c?es(c):window,t){case"focusin":(Rh(R)||R.contentEditable==="true")&&(Qr=R,Tu=c,aa=null);break;case"focusout":aa=Tu=Qr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Dh(f,n,d);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Dh(f,n,d)}var A;if(lf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Zr?yg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(xg&&n.locale!=="ko"&&(Zr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Zr&&(A=_g()):(Li=d,sf="value"in Li?Li.value:Li.textContent,Zr=!0)),R=sl(c,b),0<R.length&&(b=new Th(b,t,null,n,d),f.push({event:b,listeners:R}),A?b.data=A:(A=Sg(n),A!==null&&(b.data=A)))),(A=lx?cx(t,n):ux(t,n))&&(c=sl(c,"onBeforeInput"),0<c.length&&(d=new Th("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}Dg(f,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ha(n,s),l!=null&&a.unshift(ya(n,l,o))):r||(l=ha(n,s),l!=null&&a.push(ya(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Tx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(Tx,`
`).replace(wx,"")}function io(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(te(425))}function al(){}var Au=null,Cu=null;function Ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(t){return kh.resolve(null).then(t).catch(Rx)}:Pu;function Rx(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ds,Sa="__reactProps$"+Ds,di="__reactContainer$"+Ds,bu="__reactEvents$"+Ds,Px="__reactListeners$"+Ds,bx="__reactHandles$"+Ds;function fr(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Gn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[Gn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Nl(t){return t[Sa]||null}var Lu=[],ts=-1;function Ki(t){return{current:t}}function ot(t){0>ts||(t.current=Lu[ts],Lu[ts]=null,ts--)}function nt(t,e){ts++,Lu[ts]=t.current,t.current=e}var Xi={},Bt=Ki(Xi),Qt=Ki(!1),yr=Xi;function xs(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function ol(){ot(Qt),ot(Bt)}function zh(t,e,n){if(Bt.current!==Xi)throw Error(te(168));nt(Bt,e),nt(Qt,n)}function Ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,p0(t)||"Unknown",r));return dt({},n,i)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,yr=Bt.current,nt(Bt,t),nt(Qt,Qt.current),!0}function Hh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Ig(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,ot(Qt),ot(Bt),nt(Bt,t)):ot(Qt),nt(Qt,n)}var ri=null,Dl=!1,vc=!1;function Fg(t){ri===null?ri=[t]:ri.push(t)}function Lx(t){Dl=!0,Fg(t)}function Zi(){if(!vc&&ri!==null){vc=!0;var t=0,e=Ze;try{var n=ri;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Dl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),og(ef,Zi),r}finally{Ze=e,vc=!1}}return null}var ns=[],is=0,cl=null,ul=0,vn=[],_n=0,Sr=null,si=1,ai="";function ar(t,e){ns[is++]=ul,ns[is++]=cl,cl=t,ul=e}function Og(t,e,n){vn[_n++]=si,vn[_n++]=ai,vn[_n++]=Sr,Sr=t;var i=si;t=ai;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,si=1<<32-On(e)+r|n<<r|i,ai=s+t}else si=1<<s|n<<r|i,ai=t}function uf(t){t.return!==null&&(ar(t,1),Og(t,1,0))}function df(t){for(;t===cl;)cl=ns[--is],ns[is]=null,ul=ns[--is],ns[is]=null;for(;t===Sr;)Sr=vn[--_n],vn[_n]=null,ai=vn[--_n],vn[_n]=null,si=vn[--_n],vn[_n]=null}var un=null,cn=null,lt=!1,Dn=null;function kg(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:si,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(lt){var e=cn;if(e){var n=e;if(!Vh(t,e)){if(Nu(t))throw Error(te(418));e=Oi(n.nextSibling);var i=un;e&&Vh(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,lt=!1,un=t)}}else{if(Nu(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,un=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function ro(t){if(t!==un)return!1;if(!lt)return Gh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ru(t.type,t.memoizedProps)),e&&(e=cn)){if(Nu(t))throw Bg(),Error(te(418));for(;e;)kg(t,e),e=Oi(e.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Oi(t.stateNode.nextSibling):null;return!0}function Bg(){for(var t=cn;t;)t=Oi(t.nextSibling)}function ys(){cn=un=null,lt=!1}function ff(t){Dn===null?Dn=[t]:Dn.push(t)}var Nx=vi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function so(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function zg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Hi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,M){return v===null||v.tag!==6?(v=Tc(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var P=g.type;return P===Kr?d(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ai&&Wh(P)===v.type)?(M=r(v,g.props),M.ref=Hs(u,v,g),M.return=u,M):(M=Go(g.type,g.key,g.props,null,u.mode,M),M.ref=Hs(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=wc(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,M,P){return v===null||v.tag!==7?(v=_r(g,u.mode,M,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Tc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return g=Go(v.type,v.key,v.props,null,u.mode,g),g.ref=Hs(u,null,v),g.return=u,g;case Yr:return v=wc(v,u.mode,g),v.return=u,v;case Ai:var M=v._init;return f(u,M(v._payload),g)}if(Zs(v)||Fs(v))return v=_r(v,u.mode,g,null),v.return=u,v;so(u,v)}return null}function h(u,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $a:return g.key===P?l(u,v,g,M):null;case Yr:return g.key===P?c(u,v,g,M):null;case Ai:return P=g._init,h(u,v,P(g._payload),M)}if(Zs(g)||Fs(g))return P!==null?null:d(u,v,g,M,null);so(u,g)}return null}function m(u,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,o(v,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case $a:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,P);case Yr:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,P);case Ai:var R=M._init;return m(u,v,g,R(M._payload),P)}if(Zs(M)||Fs(M))return u=u.get(g)||null,d(v,u,M,P,null);so(v,M)}return null}function x(u,v,g,M){for(var P=null,R=null,A=v,b=v=0,H=null;A!==null&&b<g.length;b++){A.index>b?(H=A,A=null):H=A.sibling;var y=h(u,A,g[b],M);if(y===null){A===null&&(A=H);break}t&&A&&y.alternate===null&&e(u,A),v=s(y,v,b),R===null?P=y:R.sibling=y,R=y,A=H}if(b===g.length)return n(u,A),lt&&ar(u,b),P;if(A===null){for(;b<g.length;b++)A=f(u,g[b],M),A!==null&&(v=s(A,v,b),R===null?P=A:R.sibling=A,R=A);return lt&&ar(u,b),P}for(A=i(u,A);b<g.length;b++)H=m(A,u,b,g[b],M),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?b:H.key),v=s(H,v,b),R===null?P=H:R.sibling=H,R=H);return t&&A.forEach(function(T){return e(u,T)}),lt&&ar(u,b),P}function S(u,v,g,M){var P=Fs(g);if(typeof P!="function")throw Error(te(150));if(g=P.call(g),g==null)throw Error(te(151));for(var R=P=null,A=v,b=v=0,H=null,y=g.next();A!==null&&!y.done;b++,y=g.next()){A.index>b?(H=A,A=null):H=A.sibling;var T=h(u,A,y.value,M);if(T===null){A===null&&(A=H);break}t&&A&&T.alternate===null&&e(u,A),v=s(T,v,b),R===null?P=T:R.sibling=T,R=T,A=H}if(y.done)return n(u,A),lt&&ar(u,b),P;if(A===null){for(;!y.done;b++,y=g.next())y=f(u,y.value,M),y!==null&&(v=s(y,v,b),R===null?P=y:R.sibling=y,R=y);return lt&&ar(u,b),P}for(A=i(u,A);!y.done;b++,y=g.next())y=m(A,u,b,y.value,M),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?b:y.key),v=s(y,v,b),R===null?P=y:R.sibling=y,R=y);return t&&A.forEach(function(W){return e(u,W)}),lt&&ar(u,b),P}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case $a:e:{for(var P=g.key,R=v;R!==null;){if(R.key===P){if(P=g.type,P===Kr){if(R.tag===7){n(u,R.sibling),v=r(R,g.props.children),v.return=u,u=v;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ai&&Wh(P)===R.type){n(u,R.sibling),v=r(R,g.props),v.ref=Hs(u,R,g),v.return=u,u=v;break e}n(u,R);break}else e(u,R);R=R.sibling}g.type===Kr?(v=_r(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=Go(g.type,g.key,g.props,null,u.mode,M),M.ref=Hs(u,v,g),M.return=u,u=M)}return a(u);case Yr:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=wc(g,u.mode,M),v.return=u,u=v}return a(u);case Ai:return R=g._init,p(u,v,R(g._payload),M)}if(Zs(g))return x(u,v,g,M);if(Fs(g))return S(u,v,g,M);so(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Tc(g,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return p}var Ss=zg(!0),Hg=zg(!1),dl=Ki(null),fl=null,rs=null,hf=null;function pf(){hf=rs=fl=null}function mf(t){var e=dl.current;ot(dl),t._currentValue=e}function Uu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){fl=t,hf=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(hf!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(fl===null)throw Error(te(308));rs=t,fl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var hr=null;function gf(t){hr===null?hr=[t]:hr.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function Oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tf(t,n)}}function jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(h=e,m=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=dt({},f,h);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=f}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Fa={},qn=Ki(Fa),Ma=Ki(Fa),Ea=Ki(Fa);function pr(t){if(t===Fa)throw Error(te(174));return t}function _f(t,e){switch(nt(Ea,e),nt(Ma,t),nt(qn,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pu(e,t)}ot(qn),nt(qn,e)}function Ms(){ot(qn),ot(Ma),ot(Ea)}function Wg(t){pr(Ea.current);var e=pr(qn.current),n=pu(e,t.type);e!==n&&(nt(Ma,t),nt(qn,n))}function xf(t){Ma.current===t&&(ot(qn),ot(Ma))}var ct=Ki(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function yf(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var ko=vi.ReactCurrentDispatcher,xc=vi.ReactCurrentBatchConfig,Mr=0,ut=null,Mt=null,Ct=null,ml=!1,oa=!1,Ta=0,Dx=0;function Dt(){throw Error(te(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Mf(t,e,n,i,r,s){if(Mr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ko.current=t===null||t.memoizedState===null?Ox:kx,t=n(i,r),oa){s=0;do{if(oa=!1,Ta=0,25<=s)throw Error(te(301));s+=1,Ct=Mt=null,e.updateQueue=null,ko.current=Bx,t=n(i,r)}while(oa)}if(ko.current=gl,e=Mt!==null&&Mt.next!==null,Mr=0,Ct=Mt=ut=null,ml=!1,e)throw Error(te(300));return t}function Ef(){var t=Ta!==0;return Ta=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ut.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Tn(){if(Mt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Ct===null?ut.memoizedState:Ct.next;if(e!==null)Ct=e,Mt=t;else{if(t===null)throw Error(te(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Ct===null?ut.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function wa(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,ut.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Bn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Bn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jg(){}function Xg(t,e){var n=ut,i=Tn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,Tf(Yg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Aa(9,$g.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(te(349));Mr&30||qg(n,e,r)}return r}function qg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Kg(e)&&Zg(t)}function Yg(t,e,n){return n(function(){Kg(e)&&Zg(t)})}function Kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Zg(t){var e=fi(t,1);e!==null&&kn(e,t,1,-1)}function qh(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=Fx.bind(null,ut,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qg(){return Tn().memoizedState}function Bo(t,e,n,i){var r=Hn();ut.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function Ul(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Sf(i,a.deps)){r.memoizedState=Aa(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function $h(t,e){return Bo(8390656,8,t,e)}function Tf(t,e){return Ul(2048,8,t,e)}function Jg(t,e){return Ul(4,2,t,e)}function ev(t,e){return Ul(4,4,t,e)}function tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nv(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,tv.bind(null,e,t),n)}function wf(){}function iv(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sv(t,e,n){return Mr&21?(Bn(n,e)||(n=ug(),ut.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function Ux(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=xc.transition;xc.transition={};try{t(!1),e()}finally{Ze=n,xc.transition=i}}function av(){return Tn().memoizedState}function Ix(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ov(t))lv(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=Vt();kn(n,t,i,r),cv(n,e,i)}}function Fx(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ov(t))lv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var l=e.interleaved;l===null?(r.next=r,gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=Vt(),kn(n,t,i,r),cv(n,e,i))}}function ov(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function lv(t,e){oa=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tf(t,n)}}var gl={readContext:En,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Ox={readContext:En,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ix.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:qh,useDebugValue:wf,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=qh(!1),e=t[0];return t=Ux.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Hn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));Mr&30||qg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$h(Yg.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=Rt.identifierPrefix;if(lt){var n=ai,i=si;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kx={readContext:En,useCallback:iv,useContext:En,useEffect:Tf,useImperativeHandle:nv,useInsertionEffect:Jg,useLayoutEffect:ev,useMemo:rv,useReducer:yc,useRef:Qg,useState:function(){return yc(wa)},useDebugValue:wf,useDeferredValue:function(t){var e=Tn();return sv(e,Mt.memoizedState,t)},useTransition:function(){var t=yc(wa)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Xg,useId:av,unstable_isNewReconciler:!1},Bx={readContext:En,useCallback:iv,useContext:En,useEffect:Tf,useImperativeHandle:nv,useInsertionEffect:Jg,useLayoutEffect:ev,useMemo:rv,useReducer:Sc,useRef:Qg,useState:function(){return Sc(wa)},useDebugValue:wf,useDeferredValue:function(t){var e=Tn();return Mt===null?e.memoizedState=t:sv(e,Mt.memoizedState,t)},useTransition:function(){var t=Sc(wa)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Xg,useId:av,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=zi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(kn(e,t,r,i),Oo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=zi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(kn(e,t,r,i),Oo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=zi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(kn(e,t,i,n),Oo(e,t,i))}};function Yh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function uv(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Jt(e)?yr:Bt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Fu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Jt(e)?yr:Bt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Il.enqueueReplaceState(r,r.state,null),hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",i=e;do n+=h0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ou(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zx=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,qu=i),Ou(t,e)},n}function fv(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ou(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ou(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ey.bind(null,t,e,n),e.then(t,t))}function Qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var Hx=vi.ReactCurrentOwner,Zt=!1;function Ht(t,e,n,i){e.child=t===null?Hg(e,null,n,i):Ss(e,t.child,n,i)}function ep(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=Mf(t,e,n,i,s,r),n=Ef(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(lt&&n&&uf(e),e.flags|=1,Ht(t,e,i,r),e.child)}function tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hv(t,e,s,i,r)):(t=Go(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(a,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function hv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return ku(t,e,n,i,r)}function pv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(as,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(as,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(as,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(as,ln),ln|=i;return Ht(t,e,r,n),e.child}function mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ku(t,e,n,i,r){var s=Jt(n)?yr:Bt.current;return s=xs(e,s),fs(e,r),n=Mf(t,e,n,i,s,r),i=Ef(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(lt&&i&&uf(e),e.flags|=1,Ht(t,e,n,r),e.child)}function np(t,e,n,i,r){if(Jt(n)){var s=!0;ll(e)}else s=!1;if(fs(e,r),e.stateNode===null)zo(t,e),uv(e,n,i),Fu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Jt(n)?yr:Bt.current,c=xs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Kh(e,a,i,c),Ci=!1;var h=e.memoizedState;a.state=h,hl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||Qt.current||Ci?(typeof d=="function"&&(Iu(e,n,d,i),l=e.memoizedState),(o=Ci||Yh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Gg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:bn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Jt(n)?yr:Bt.current,l=xs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Kh(e,a,i,l),Ci=!1,h=e.memoizedState,a.state=h,hl(e,i,a,r);var x=e.memoizedState;o!==f||h!==x||Qt.current||Ci?(typeof m=="function"&&(Iu(e,n,m,i),x=e.memoizedState),(c=Ci||Yh(e,n,c,i,h,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Bu(t,e,n,i,s,r)}function Bu(t,e,n,i,r,s){mv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Hh(e,n,!1),hi(t,e,s);i=e.stateNode,Hx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Ht(t,e,o,s),e.memoizedState=i.state,r&&Hh(e,n,!0),e.child}function gv(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),_f(t,e.containerInfo)}function ip(t,e,n,i,r){return ys(),ff(r),e.flags|=256,Ht(t,e,n,i),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vv(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ct,r&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kl(a,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hu(n),e.memoizedState=zu,t):Af(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Vx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=_r(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Hu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zu,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Af(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ao(t,e,n,i){return i!==null&&ff(i),Ss(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Mc(Error(te(422))),ao(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Hu(a),e.memoizedState=zu,s);if(!(e.mode&1))return ao(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=Mc(s,i,void 0),ao(t,e,a,i)}if(o=(a&t.childLanes)!==0,Zt||o){if(i=Rt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),kn(i,t,r,-1))}return Nf(),i=Mc(Error(te(421))),ao(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ty.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Oi(r.nextSibling),un=e,lt=!0,Dn=null,t!==null&&(vn[_n++]=si,vn[_n++]=ai,vn[_n++]=Sr,si=t.id,ai=t.overflow,Sr=e),e=Af(e,i.children),e.flags|=4096,e)}function rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uu(t.return,e,n)}function Ec(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,n,e);else if(t.tag===19)rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ec(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ec(e,!0,n,null,s);break;case"together":Ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gx(t,e,n){switch(e.tag){case 3:gv(e),ys();break;case 5:Wg(e);break;case 1:Jt(e.type)&&ll(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?vv(t,e,n):(nt(ct,ct.current&1),t=hi(t,e,n),t!==null?t.sibling:null);nt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,pv(t,e,n)}return hi(t,e,n)}var xv,Vu,yv,Sv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vu=function(){};yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(qn.current);var s=null;switch(n){case"input":r=uu(t,r),i=uu(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=hu(t,r),i=hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=al)}mu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Wx(t,e,n){var i=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Jt(e.type)&&ol(),Ut(e),null;case 3:return i=e.stateNode,Ms(),ot(Qt),ot(Bt),yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Ku(Dn),Dn=null))),Vu(t,e),Ut(e),null;case 5:xf(e);var r=pr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ut(e),null}if(t=pr(qn.current),ro(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)st(Js[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":hh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":mh(i,s),st("invalid",i)}mu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&io(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&io(i.textContent,o,t),r=["children",""+o]):da.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":Ya(i),ph(i,s,!0);break;case"textarea":Ya(i),gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Gn]=e,t[Sa]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(a=gu(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)st(Js[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":hh(t,i),r=uu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),st("invalid",t);break;case"textarea":mh(t,i),r=hu(t,i),st("invalid",t);break;default:r=i}mu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Yd(t,s,l,a))}switch(n){case"input":Ya(t),ph(t,i,!1);break;case"textarea":Ya(t),gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=pr(Ea.current),pr(qn.current),ro(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:io(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&io(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ut(e),null;case 13:if(ot(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&cn!==null&&e.mode&1&&!(e.flags&128))Bg(),ys(),e.flags|=98560,s=!1;else if(s=ro(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Gn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Dn!==null&&(Ku(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Et===0&&(Et=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Ms(),Vu(t,e),t===null&&xa(e.stateNode.containerInfo),Ut(e),null;case 10:return mf(e.type._context),Ut(e),null;case 17:return Jt(e.type)&&ol(),Ut(e),null;case 19:if(ot(ct),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Vs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=pl(t),a!==null){for(e.flags|=128,Vs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>Ts&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=pl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return Ut(e),null}else 2*mt()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=ct.current,nt(ct,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Lf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function jx(t,e){switch(df(e),e.tag){case 1:return Jt(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),ot(Qt),ot(Bt),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(ot(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ct),null;case 4:return Ms(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var oo=!1,Ot=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,me=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Gu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var sp=!1;function qx(t,e){if(Au=il,t=Ag(),cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:t,selectionRange:n},il=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:bn(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){ht(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=sp,sp=!1,x}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gu(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mv(t){var e=t.alternate;e!==null&&(t.alternate=null,Mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[Sa],delete e[bu],delete e[Px],delete e[bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Xu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xu(t,e,n),t=t.sibling;t!==null;)Xu(t,e,n),t=t.sibling}var bt=null,Ln=!1;function xi(t,e,n){for(n=n.child;n!==null;)Tv(t,e,n),n=n.sibling}function Tv(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Ot||ss(n,e);case 6:var i=bt,r=Ln;bt=null,xi(t,e,n),bt=i,Ln=r,bt!==null&&(Ln?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Ln?(t=bt,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),ga(t)):gc(bt,n.stateNode));break;case 4:i=bt,r=Ln,bt=n.stateNode.containerInfo,Ln=!0,xi(t,e,n),bt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Gu(n,e,a),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!Ot&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ht(n,e,o)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,xi(t,e,n),Ot=i):xi(t,e,n);break;default:xi(t,e,n)}}function op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xx),e.forEach(function(i){var r=ny.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:bt=o.stateNode,Ln=!1;break e;case 3:bt=o.stateNode.containerInfo,Ln=!0;break e;case 4:bt=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(bt===null)throw Error(te(160));Tv(s,a,r),bt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wv(e,t),e=e.sibling}function wv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),zn(t),i&4){try{la(3,t,t.return),Fl(3,t)}catch(S){ht(t,t.return,S)}try{la(5,t,t.return)}catch(S){ht(t,t.return,S)}}break;case 1:An(e,t),zn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(An(e,t),zn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(S){ht(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),gu(o,a);var c=gu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Qm(r,f):d==="dangerouslySetInnerHTML"?Km(r,f):d==="children"?fa(r,f):Yd(r,d,f,c)}switch(o){case"input":du(r,s);break;case"textarea":$m(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ls(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(S){ht(t,t.return,S)}}break;case 6:if(An(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){ht(t,t.return,S)}}break;case 3:if(An(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(S){ht(t,t.return,S)}break;case 4:An(e,t),zn(t);break;case 13:An(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pf=mt())),i&4&&op(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,An(e,t),Ot=c):An(e,t),zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:la(4,h,h.return);break;case 1:ss(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){ht(i,n,S)}}break;case 5:ss(h,h.return);break;case 22:if(h.memoizedState!==null){cp(f);continue}}m!==null?(m.return=h,me=m):cp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Zm("display",a))}catch(S){ht(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){ht(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),zn(t),i&4&&op(t);break;case 21:break;default:An(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=ap(t);Xu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ap(t);ju(t,o,a);break;default:throw Error(te(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $x(t,e,n){me=t,Av(t)}function Av(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||oo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ot;o=oo;var c=Ot;if(oo=a,(Ot=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?up(r):l!==null?(l.return=a,me=l):up(r);for(;s!==null;)me=s,Av(s),s=s.sibling;me=r,oo=o,Ot=c}lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):lp(t)}}function lp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Wu(e)}catch(h){ht(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function cp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function up(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{Wu(e)}catch(l){ht(e,s,l)}break;case 5:var a=e.return;try{Wu(e)}catch(l){ht(e,a,l)}}}catch(l){ht(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var Yx=Math.ceil,vl=vi.ReactCurrentDispatcher,Cf=vi.ReactCurrentOwner,Mn=vi.ReactCurrentBatchConfig,Ge=0,Rt=null,xt=null,Lt=0,ln=0,as=Ki(0),Et=0,Ca=null,Er=0,Ol=0,Rf=0,ca=null,Yt=null,Pf=0,Ts=1/0,ii=null,_l=!1,qu=null,Bi=null,lo=!1,Ni=null,xl=0,ua=0,$u=null,Ho=-1,Vo=0;function Vt(){return Ge&6?mt():Ho!==-1?Ho:Ho=mt()}function zi(t){return t.mode&1?Ge&2&&Lt!==0?Lt&-Lt:Nx.transition!==null?(Vo===0&&(Vo=ug()),Vo):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:vg(t.type)),t):1}function kn(t,e,n,i){if(50<ua)throw ua=0,$u=null,Error(te(185));Da(t,n,i),(!(Ge&2)||t!==Rt)&&(t===Rt&&(!(Ge&2)&&(Ol|=n),Et===4&&Pi(t,Lt)),en(t,i),n===1&&Ge===0&&!(e.mode&1)&&(Ts=mt()+500,Dl&&Zi()))}function en(t,e){var n=t.callbackNode;N0(t,e);var i=nl(t,t===Rt?Lt:0);if(i===0)n!==null&&xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xh(n),e===1)t.tag===0?Lx(dp.bind(null,t)):Fg(dp.bind(null,t)),Cx(function(){!(Ge&6)&&Zi()}),n=null;else{switch(dg(i)){case 1:n=ef;break;case 4:n=lg;break;case 16:n=tl;break;case 536870912:n=cg;break;default:n=tl}n=Uv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if(Ho=-1,Vo=0,Ge&6)throw Error(te(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=nl(t,t===Rt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yl(t,i);else{e=i;var r=Ge;Ge|=2;var s=Pv();(Rt!==t||Lt!==e)&&(ii=null,Ts=mt()+500,vr(t,e));do try{Qx();break}catch(o){Rv(t,o)}while(!0);pf(),vl.current=s,Ge=r,xt!==null?e=0:(Rt=null,Lt=0,e=Et)}if(e!==0){if(e===2&&(r=Su(t),r!==0&&(i=r,e=Yu(t,r))),e===1)throw n=Ca,vr(t,0),Pi(t,i),en(t,mt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Kx(r)&&(e=yl(t,i),e===2&&(s=Su(t),s!==0&&(i=s,e=Yu(t,s))),e===1))throw n=Ca,vr(t,0),Pi(t,i),en(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:or(t,Yt,ii);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Pf+500-mt(),10<e)){if(nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pu(or.bind(null,t,Yt,ii),e);break}or(t,Yt,ii);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yx(i/1960))-i,10<i){t.timeoutHandle=Pu(or.bind(null,t,Yt,ii),i);break}or(t,Yt,ii);break;case 5:or(t,Yt,ii);break;default:throw Error(te(329))}}}return en(t,mt()),t.callbackNode===n?Cv.bind(null,t):null}function Yu(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&Ku(e)),t}function Ku(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function Kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Rf,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function dp(t){if(Ge&6)throw Error(te(327));hs();var e=nl(t,0);if(!(e&1))return en(t,mt()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var i=Su(t);i!==0&&(e=i,n=Yu(t,i))}if(n===1)throw n=Ca,vr(t,0),Pi(t,e),en(t,mt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,Yt,ii),en(t,mt()),null}function bf(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(Ts=mt()+500,Dl&&Zi())}}function Tr(t){Ni!==null&&Ni.tag===0&&!(Ge&6)&&hs();var e=Ge;Ge|=1;var n=Mn.transition,i=Ze;try{if(Mn.transition=null,Ze=1,t)return t()}finally{Ze=i,Mn.transition=n,Ge=e,!(Ge&6)&&Zi()}}function Lf(){ln=as.current,ot(as)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ax(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ol();break;case 3:Ms(),ot(Qt),ot(Bt),yf();break;case 5:xf(i);break;case 4:Ms();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:mf(i.type._context);break;case 22:case 23:Lf()}n=n.return}if(Rt=t,xt=t=Hi(t.current,null),Lt=ln=e,Et=0,Ca=null,Rf=Ol=Er=0,Yt=ca=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}hr=null}return t}function Rv(t,e){do{var n=xt;try{if(pf(),ko.current=gl,ml){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ml=!1}if(Mr=0,Ct=Mt=ut=null,oa=!1,Ta=0,Cf.current=null,n===null||n.return===null){Et=1,Ca=e,xt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Lt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Qh(a);if(m!==null){m.flags&=-257,Jh(m,a,o,s,e),m.mode&1&&Zh(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Zh(s,c,e),Nf();break e}l=Error(te(426))}}else if(lt&&o.mode&1){var p=Qh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Jh(p,a,o,s,e),ff(Es(l,o));break e}}s=l=Es(l,o),Et!==4&&(Et=2),ca===null?ca=[s]:ca.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=dv(s,l,e);jh(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bi===null||!Bi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=fv(s,o,e);jh(s,M);break e}}s=s.return}while(s!==null)}Lv(n)}catch(P){e=P,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Pv(){var t=vl.current;return vl.current=gl,t===null?gl:t}function Nf(){(Et===0||Et===3||Et===2)&&(Et=4),Rt===null||!(Er&268435455)&&!(Ol&268435455)||Pi(Rt,Lt)}function yl(t,e){var n=Ge;Ge|=2;var i=Pv();(Rt!==t||Lt!==e)&&(ii=null,vr(t,e));do try{Zx();break}catch(r){Rv(t,r)}while(!0);if(pf(),Ge=n,vl.current=i,xt!==null)throw Error(te(261));return Rt=null,Lt=0,Et}function Zx(){for(;xt!==null;)bv(xt)}function Qx(){for(;xt!==null&&!E0();)bv(xt)}function bv(t){var e=Dv(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Lv(t):xt=e,Cf.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jx(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,xt=null;return}}else if(n=Wx(n,e,ln),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Et===0&&(Et=5)}function or(t,e,n){var i=Ze,r=Mn.transition;try{Mn.transition=null,Ze=1,Jx(t,e,n,i)}finally{Mn.transition=r,Ze=i}return null}function Jx(t,e,n,i){do hs();while(Ni!==null);if(Ge&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D0(t,s),t===Rt&&(xt=Rt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Uv(tl,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=Ze;Ze=1;var o=Ge;Ge|=4,Cf.current=null,qx(t,n),wv(n,t),xx(Cu),il=!!Au,Cu=Au=null,t.current=n,$x(n),T0(),Ge=o,Ze=a,Mn.transition=s}else t.current=n;if(lo&&(lo=!1,Ni=t,xl=r),s=t.pendingLanes,s===0&&(Bi=null),C0(n.stateNode),en(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=qu,qu=null,t;return xl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===$u?ua++:(ua=0,$u=t):ua=0,Zi(),null}function hs(){if(Ni!==null){var t=dg(xl),e=Mn.transition,n=Ze;try{if(Mn.transition=null,Ze=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,xl=0,Ge&6)throw Error(te(331));var r=Ge;for(Ge|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:la(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var h=d.sibling,m=d.return;if(Mv(d),d===c){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){a=me;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,me=g;else e:for(a=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fl(9,o)}}catch(P){ht(o,o.return,P)}if(o===a){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(Ge=r,Zi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Rl,t)}catch{}i=!0}return i}finally{Ze=n,Mn.transition=e}}return!1}function fp(t,e,n){e=Es(n,e),e=dv(t,e,1),t=ki(t,e,1),e=Vt(),t!==null&&(Da(t,1,e),en(t,e))}function ht(t,e,n){if(t.tag===3)fp(t,t,n);else for(;e!==null;){if(e.tag===3){fp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Es(n,t),t=fv(e,t,1),e=ki(e,t,1),t=Vt(),e!==null&&(Da(e,1,t),en(e,t));break}}e=e.return}}function ey(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Lt&n)===n&&(Et===4||Et===3&&(Lt&130023424)===Lt&&500>mt()-Pf?vr(t,0):Rf|=n),en(t,e)}function Nv(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=Vt();t=fi(t,e),t!==null&&(Da(t,e,n),en(t,n))}function ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nv(t,n)}function ny(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Nv(t,n)}var Dv;Dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,Gx(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,lt&&e.flags&1048576&&Og(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zo(t,e),t=e.pendingProps;var r=xs(e,Bt.current);fs(e,n),r=Mf(null,e,i,t,r,n);var s=Ef();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vf(e),r.updater=Il,e.stateNode=r,r._reactInternals=e,Fu(e,i,t,n),e=Bu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&uf(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ry(i),t=bn(i,t),r){case 0:e=ku(null,e,i,t,n);break e;case 1:e=np(null,e,i,t,n);break e;case 11:e=ep(null,e,i,t,n);break e;case 14:e=tp(null,e,i,bn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),np(t,e,i,r,n);case 3:e:{if(gv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),hl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(te(423)),e),e=ip(t,e,i,n,r);break e}else if(i!==r){r=Es(Error(te(424)),e),e=ip(t,e,i,n,r);break e}else for(cn=Oi(e.stateNode.containerInfo.firstChild),un=e,lt=!0,Dn=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=hi(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&Du(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ru(i,r)?a=null:s!==null&&Ru(i,s)&&(e.flags|=32),mv(t,e),Ht(t,e,a,n),e.child;case 6:return t===null&&Du(e),null;case 13:return vv(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),ep(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(dl,i._currentValue),i._currentValue=a,s!==null)if(Bn(s.value,a)){if(s.children===r.children&&!Qt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Uu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=En(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),tp(t,e,i,r,n);case 15:return hv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),zo(t,e),e.tag=1,Jt(i)?(t=!0,ll(e)):t=!1,fs(e,n),uv(e,i,r),Fu(e,i,r,n),Bu(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return pv(t,e,n)}throw Error(te(156,e.tag))};function Uv(t,e){return og(t,e)}function iy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new iy(t,e,n,i)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ry(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===Qd)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Go(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Df(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Kr:return _r(n.children,r,s,e);case Kd:a=8,r|=8;break;case au:return t=yn(12,n,e,r|2),t.elementType=au,t.lanes=s,t;case ou:return t=yn(13,n,e,r),t.elementType=ou,t.lanes=s,t;case lu:return t=yn(19,n,e,r),t.elementType=lu,t.lanes=s,t;case Wm:return kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vm:a=10;break e;case Gm:a=9;break e;case Zd:a=11;break e;case Qd:a=14;break e;case Ai:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function kl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,i,r,s,a,o,l){return t=new sy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return Xi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Ig(t,n,e)}return e}function Fv(t,e,n,i,r,s,a,o,l){return t=Uf(n,i,!0,t,r,s,a,o,l),t.context=Iv(null),n=t.current,i=Vt(),r=zi(n),s=ci(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Da(t,r,i),en(t,i),t}function Bl(t,e,n,i){var r=e.current,s=Vt(),a=zi(r);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(kn(t,r,a,s),Oo(t,r,a)),a}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){hp(t,e),(t=t.alternate)&&hp(t,e)}function oy(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}zl.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Bl(t,e,null,null)};zl.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Bl(null,t,null,null)}),e[di]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&gg(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function ly(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sl(a);s.call(c)}}var a=Fv(e,i,t,0,null,!1,!1,"",pp);return t._reactRootContainer=a,t[di]=a.current,xa(t.nodeType===8?t.parentNode:t),Tr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Sl(l);o.call(c)}}var l=Uf(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=l,t[di]=l.current,xa(t.nodeType===8?t.parentNode:t),Tr(function(){Bl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Sl(a);o.call(l)}}Bl(e,a,t,r)}else a=ly(n,e,t,r,i);return Sl(a)}fg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(tf(e,n|1),en(e,mt()),!(Ge&6)&&(Ts=mt()+500,Zi()))}break;case 13:Tr(function(){var i=fi(t,1);if(i!==null){var r=Vt();kn(i,t,1,r)}}),If(t,1)}};nf=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=Vt();kn(e,t,134217728,n)}If(t,134217728)}};hg=function(t){if(t.tag===13){var e=zi(t),n=fi(t,e);if(n!==null){var i=Vt();kn(n,t,e,i)}If(t,e)}};pg=function(){return Ze};mg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};_u=function(t,e,n){switch(e){case"input":if(du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nl(i);if(!r)throw Error(te(90));Xm(i),du(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};tg=bf;ng=Tr;var cy={usingClientEntryPoint:!1,Events:[Ia,es,Nl,Jm,eg,bf]},Gs={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uy={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Rl=co.inject(uy),Xn=co}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(te(200));return ay(t,e,null,n)};hn.createRoot=function(t,e){if(!Of(t))throw Error(te(299));var n=!1,i="",r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,xa(t.nodeType===8?t.parentNode:t),new Ff(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Tr(t)};hn.hydrate=function(t,e,n){if(!Hl(e))throw Error(te(200));return Vl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Fv(e,null,t,1,n??null,r,!1,s,a),t[di]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};hn.render=function(t,e,n){if(!Hl(e))throw Error(te(200));return Vl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(te(40));return t._reactRootContainer?(Tr(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};hn.unstable_batchedUpdates=bf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Vl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),km.exports=hn;var dy=km.exports,mp=dy;ru.createRoot=mp.createRoot,ru.hydrateRoot=mp.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ra.apply(null,arguments)}var Di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Di||(Di={}));const gp="popstate";function fy(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Pr(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Zu("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:Ml(s))}function i(r,s){Gl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return py(e,n,i,t)}function yt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hy(){return Math.random().toString(36).substr(2,8)}function vp(t,e){return{usr:t.state,key:t.key,idx:e}}function Zu(t,e,n,i){return n===void 0&&(n=null),Ra({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pr(e):e,{state:n,key:e&&e.key||i||hy()})}function Ml(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Pr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function py(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Di.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Ra({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Di.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:S.location,delta:u})}function h(p,u){o=Di.Push;let v=Zu(S.location,p,u);n&&n(v,p),c=d()+1;let g=vp(v,c),M=S.createHref(v);try{a.pushState(g,"",M)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(M)}s&&l&&l({action:o,location:S.location,delta:1})}function m(p,u){o=Di.Replace;let v=Zu(S.location,p,u);n&&n(v,p),c=d();let g=vp(v,c),M=S.createHref(v);a.replaceState(g,"",M),s&&l&&l({action:o,location:S.location,delta:0})}function x(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Ml(p);return v=v.replace(/ $/,"%20"),yt(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let S={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gp,f),l=p,()=>{r.removeEventListener(gp,f),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let u=x(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(p){return a.go(p)}};return S}var _p;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_p||(_p={}));function my(t,e,n){return n===void 0&&(n="/"),gy(t,e,n)}function gy(t,e,n,i){let r=typeof e=="string"?Pr(e):e,s=kf(r.pathname||"/",n);if(s==null)return null;let a=Bv(t);vy(a);let o=null,l=Py(s);for(let c=0;o==null&&c<a.length;++c)o=Ay(a[c],l);return o}function Bv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(yt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Vi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(yt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bv(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ty(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of zv(s.path))r(s,a,l)}),e}function zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=zv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function vy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const _y=/^:[\w-]+$/,xy=3,yy=2,Sy=1,My=10,Ey=-2,xp=t=>t==="*";function Ty(t,e){let n=t.split("/"),i=n.length;return n.some(xp)&&(i+=Ey),e&&(i+=yy),n.filter(r=>!xp(r)).reduce((r,s)=>r+(_y.test(s)?xy:s===""?Sy:My),i)}function wy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Ay(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Cy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Vi([s,f.pathname]),pathnameBase:Uy(Vi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Vi([s,f.pathnameBase]))}return a}function Cy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Ry(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let S=o[f]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const x=o[f];return m&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function Ry(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Py(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const by=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ly=t=>by.test(t);function Ny(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Pr(t):t,s;if(n)if(Ly(n))s=n;else{if(n.includes("//")){let a=n;n=Gv(n),Gl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=yp(n.substring(1),"/"):s=yp(n,e)}else s=e;return{pathname:s,search:Iy(i),hash:Fy(r)}}function yp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Ac(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hv(t,e){let n=Dy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Vv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Pr(t):(r=Ra({},t),yt(!r.pathname||!r.pathname.includes("?"),Ac("?","pathname","search",r)),yt(!r.pathname||!r.pathname.includes("#"),Ac("#","pathname","hash",r)),yt(!r.search||!r.search.includes("#"),Ac("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=Ny(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Gv=t=>t.replace(/\/\/+/g,"/"),Vi=t=>Gv(t.join("/")),Uy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Iy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Fy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Oy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wv=["post","put","patch","delete"];new Set(Wv);const ky=["get",...Wv];new Set(ky);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pa.apply(null,arguments)}const Bf=ie.createContext(null),By=ie.createContext(null),br=ie.createContext(null),Wl=ie.createContext(null),Lr=ie.createContext({outlet:null,matches:[],isDataRoute:!1}),jv=ie.createContext(null);function zy(t,e){let{relative:n}=e===void 0?{}:e;Oa()||yt(!1);let{basename:i,navigator:r}=ie.useContext(br),{hash:s,pathname:a,search:o}=qv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Vi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Oa(){return ie.useContext(Wl)!=null}function ka(){return Oa()||yt(!1),ie.useContext(Wl).location}function Xv(t){ie.useContext(br).static||ie.useLayoutEffect(t)}function zf(){let{isDataRoute:t}=ie.useContext(Lr);return t?Jy():Hy()}function Hy(){Oa()||yt(!1);let t=ie.useContext(Bf),{basename:e,future:n,navigator:i}=ie.useContext(br),{matches:r}=ie.useContext(Lr),{pathname:s}=ka(),a=JSON.stringify(Hv(r,n.v7_relativeSplatPath)),o=ie.useRef(!1);return Xv(()=>{o.current=!0}),ie.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Vv(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Vi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function qv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ie.useContext(br),{matches:r}=ie.useContext(Lr),{pathname:s}=ka(),a=JSON.stringify(Hv(r,i.v7_relativeSplatPath));return ie.useMemo(()=>Vv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function Vy(t,e){return Gy(t,e)}function Gy(t,e,n,i){Oa()||yt(!1);let{navigator:r}=ie.useContext(br),{matches:s}=ie.useContext(Lr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ka(),d;if(e){var f;let p=typeof e=="string"?Pr(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||yt(!1),d=p}else d=c;let h=d.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=my(t,{pathname:m}),S=$y(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Vi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Vi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&S?ie.createElement(Wl.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Di.Pop}},S):S}function Wy(){let t=Qy(),e=Oy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),n?ie.createElement("pre",{style:r},n):null,null)}const jy=ie.createElement(Wy,null);class Xy extends ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ie.createElement(Lr.Provider,{value:this.props.routeContext},ie.createElement(jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qy(t){let{routeContext:e,match:n,children:i}=t,r=ie.useContext(Bf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ie.createElement(Lr.Provider,{value:e},i)}function $y(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||yt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let m,x=!1,S=null,p=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,S=f.route.errorElement||jy,l&&(c<0&&h===0?(eS("route-fallback"),x=!0,p=null):c===h&&(x=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),v=()=>{let g;return m?g=S:x?g=p:f.route.Component?g=ie.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,ie.createElement(qy,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?ie.createElement(Xy,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var $v=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($v||{}),Yv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Yv||{});function Yy(t){let e=ie.useContext(Bf);return e||yt(!1),e}function Ky(t){let e=ie.useContext(By);return e||yt(!1),e}function Zy(t){let e=ie.useContext(Lr);return e||yt(!1),e}function Kv(t){let e=Zy(),n=e.matches[e.matches.length-1];return n.route.id||yt(!1),n.route.id}function Qy(){var t;let e=ie.useContext(jv),n=Ky(),i=Kv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Jy(){let{router:t}=Yy($v.UseNavigateStable),e=Kv(Yv.UseNavigateStable),n=ie.useRef(!1);return Xv(()=>{n.current=!0}),ie.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Pa({fromRouteId:e},s)))},[t,e])}const Sp={};function eS(t,e,n){Sp[t]||(Sp[t]=!0)}function tS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Wo(t){yt(!1)}function nS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Di.Pop,navigator:s,static:a=!1,future:o}=t;Oa()&&yt(!1);let l=e.replace(/^\/*/,"/"),c=ie.useMemo(()=>({basename:l,navigator:s,static:a,future:Pa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Pr(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:x="default"}=i,S=ie.useMemo(()=>{let p=kf(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:x},navigationType:r}},[l,d,f,h,m,x,r]);return S==null?null:ie.createElement(br.Provider,{value:c},ie.createElement(Wl.Provider,{children:n,value:S}))}function iS(t){let{children:e,location:n}=t;return Vy(Qu(e),n)}new Promise(()=>{});function Qu(t,e){e===void 0&&(e=[]);let n=[];return ie.Children.forEach(t,(i,r)=>{if(!ie.isValidElement(i))return;let s=[...e,r];if(i.type===ie.Fragment){n.push.apply(n,Qu(i.props.children,s));return}i.type!==Wo&&yt(!1),!i.props.index||!i.props.children||yt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Qu(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ju.apply(null,arguments)}function rS(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function sS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aS(t,e){return t.button===0&&(!e||e==="_self")&&!sS(t)}const oS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lS="6";try{window.__reactRouterVersion=lS}catch{}const cS="startTransition",Mp=e0[cS];function uS(t){let{basename:e,children:n,future:i,window:r}=t,s=ie.useRef();s.current==null&&(s.current=fy({window:r,v5Compat:!0}));let a=s.current,[o,l]=ie.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=ie.useCallback(f=>{c&&Mp?Mp(()=>l(f)):l(f)},[l,c]);return ie.useLayoutEffect(()=>a.listen(d),[a,d]),ie.useEffect(()=>tS(i),[i]),ie.createElement(nS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const dS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$n=ie.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=rS(e,oS),{basename:m}=ie.useContext(br),x,S=!1;if(typeof c=="string"&&fS.test(c)&&(x=c,dS))try{let g=new URL(window.location.href),M=c.startsWith("//")?new URL(g.protocol+c):new URL(c),P=kf(M.pathname,m);M.origin===g.origin&&P!=null?c=P+M.search+M.hash:S=!0}catch{}let p=zy(c,{relative:r}),u=hS(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function v(g){i&&i(g),g.defaultPrevented||u(g)}return ie.createElement("a",Ju({},h,{href:x||p,onClick:S||s?i:v,ref:n,target:l}))});var Ep;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ep||(Ep={}));var Tp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tp||(Tp={}));function hS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=zf(),c=ka(),d=qv(t,{relative:a});return ie.useCallback(f=>{if(aS(f,n)){f.preventDefault();let h=i!==void 0?i:Ml(c)===Ml(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function jl(){const t=zf(),e=ka();return n=>{var i;e.pathname==="/"?(i=document.getElementById(n))==null||i.scrollIntoView({behavior:"smooth"}):(sessionStorage.setItem("scrollTo",n),t("/"))}}function Zv(){const[t,e]=ie.useState(!1),n=jl(),i=r=>{e(!1),n(r)};return _.jsx("header",{className:"nav nav--pill",children:_.jsx("div",{className:"container nav__pillwrap",children:_.jsxs("div",{className:"nav__pill",children:[_.jsxs($n,{to:"/",className:"brand",children:[_.jsx("span",{className:"brand__mark",children:"MK"})," Phone"]}),_.jsxs("nav",{className:`nav__links ${t?"open":""}`,children:[_.jsx("button",{className:"nav__link",onClick:()=>i("services"),children:"Services"}),_.jsx($n,{className:"nav__link",to:"/tarifs",onClick:()=>e(!1),children:"Tarifs"}),_.jsx("button",{className:"nav__link",onClick:()=>i("vente"),children:"Vente & rachat"}),_.jsx("button",{className:"nav__link",onClick:()=>i("faq"),children:"FAQ"}),_.jsx("button",{className:"nav__link",onClick:()=>i("contact"),children:"Contact"})]}),_.jsx("button",{className:"btn btn--primary nav__cta",onClick:()=>i("rdv"),children:"Prendre RDV"}),_.jsx("button",{className:"nav__burger","aria-label":"Menu",onClick:()=>e(r=>!r),children:"☰"})]})})})}function pS(){const t=jl();return _.jsxs("section",{className:"hero hero--photo",id:"top",children:[_.jsx("img",{className:"hero__bgimg",src:"./img/hero.jpg",alt:"iPhone en réparation chez MK Phone"}),_.jsx("div",{className:"hero__scrim"}),_.jsx("div",{className:"container hero__inner",children:_.jsxs("div",{className:"hero__text",children:[_.jsx("p",{className:"hero__eyebrow",children:"Déplacements dans toute l'Île-de-France"}),_.jsxs("h1",{className:"hero__title",children:["La réparation de votre téléphone,",_.jsx("br",{}),_.jsx("em",{children:"simple, rapide et moins chère."})]}),_.jsxs("p",{className:"hero__sub",children:["MK Phone répare iPhone, Samsung, tablettes et PC partout en Île-de-France. Des tarifs ",_.jsx("strong",{children:"30 à 40 € moins chers que la concurrence"}),", et on se déplace chez vous."]}),_.jsxs("div",{className:"hero__actions",children:[_.jsx("button",{className:"btn btn--primary btn--lg",onClick:()=>t("rdv"),children:"Prendre rendez-vous"}),_.jsx($n,{to:"/tarifs",className:"btn btn--outline-white btn--lg",children:"Voir les tarifs"})]}),_.jsxs("div",{className:"hero__stats",children:[_.jsxs("div",{children:[_.jsx("strong",{children:"30 min"}),_.jsx("span",{children:"Réparation express"})]}),_.jsxs("div",{children:[_.jsx("strong",{children:"−30 à 40 €"}),_.jsx("span",{children:"vs la concurrence"})]}),_.jsxs("div",{children:[_.jsx("strong",{children:"Île-de-France"}),_.jsx("span",{children:"Déplacement à domicile"})]})]})]})})]})}const pi=[{marque:"Apple",modele:"iPhone 16 Pro Max",ecran:234,batterie:84,charge:74,camera:104,vitre:134,desox:64},{marque:"Apple",modele:"iPhone 16 Pro",ecran:214,batterie:79,charge:69,camera:94,vitre:124,desox:64},{marque:"Apple",modele:"iPhone 16",ecran:174,batterie:74,charge:64,camera:84,vitre:114,desox:64},{marque:"Apple",modele:"iPhone 15 Pro Max",ecran:204,batterie:79,charge:69,camera:94,vitre:124,desox:64},{marque:"Apple",modele:"iPhone 15",ecran:154,batterie:69,charge:59,camera:79,vitre:104,desox:64},{marque:"Apple",modele:"iPhone 14 Pro Max",ecran:184,batterie:69,charge:64,camera:84,vitre:114,desox:59},{marque:"Apple",modele:"iPhone 14",ecran:134,batterie:59,charge:54,camera:74,vitre:94,desox:59},{marque:"Apple",modele:"iPhone 13 Pro Max",ecran:154,batterie:64,charge:59,camera:79,vitre:104,desox:59},{marque:"Apple",modele:"iPhone 13",ecran:114,batterie:54,charge:49,camera:64,vitre:84,desox:54},{marque:"Apple",modele:"iPhone 12 Pro Max",ecran:124,batterie:54,charge:54,camera:69,vitre:94,desox:54},{marque:"Apple",modele:"iPhone 12",ecran:94,batterie:49,charge:49,camera:59,vitre:74,desox:54},{marque:"Apple",modele:"iPhone 11 Pro Max",ecran:104,batterie:49,charge:49,camera:64,vitre:84,desox:49},{marque:"Apple",modele:"iPhone 11",ecran:74,batterie:44,charge:44,camera:54,vitre:69,desox:49},{marque:"Apple",modele:"iPhone XR",ecran:69,batterie:44,charge:44,camera:49,vitre:64,desox:49},{marque:"Apple",modele:"iPhone X",ecran:74,batterie:44,charge:44,camera:49,vitre:64,desox:49},{marque:"Apple",modele:"iPhone 8 / SE 2020",ecran:44,batterie:39,charge:39,camera:44,vitre:54,desox:44},{marque:"Apple",modele:"iPhone 7",ecran:39,batterie:34,charge:39,camera:44,vitre:null,desox:44},{marque:"Samsung",modele:"Galaxy S24 Ultra",ecran:264,batterie:79,charge:69,camera:94,vitre:114,desox:64},{marque:"Samsung",modele:"Galaxy S24",ecran:194,batterie:69,charge:64,camera:84,vitre:94,desox:64},{marque:"Samsung",modele:"Galaxy S23",ecran:174,batterie:64,charge:59,camera:79,vitre:89,desox:59},{marque:"Samsung",modele:"Galaxy S22",ecran:154,batterie:59,charge:54,camera:74,vitre:84,desox:59},{marque:"Samsung",modele:"Galaxy S21",ecran:134,batterie:54,charge:54,camera:69,vitre:79,desox:54},{marque:"Samsung",modele:"Galaxy A54",ecran:104,batterie:49,charge:49,camera:59,vitre:64,desox:49},{marque:"Samsung",modele:"Galaxy A53",ecran:94,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"Samsung",modele:"Galaxy A34",ecran:89,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"Samsung",modele:"Galaxy A14",ecran:64,batterie:39,charge:39,camera:44,vitre:49,desox:44},{marque:"Xiaomi",modele:"Xiaomi 13",ecran:134,batterie:54,charge:49,camera:64,vitre:74,desox:54},{marque:"Xiaomi",modele:"Xiaomi 12",ecran:119,batterie:49,charge:49,camera:59,vitre:69,desox:54},{marque:"Xiaomi",modele:"Redmi Note 13",ecran:84,batterie:44,charge:44,camera:49,vitre:54,desox:49},{marque:"Xiaomi",modele:"Redmi Note 12",ecran:74,batterie:39,charge:39,camera:44,vitre:49,desox:49},{marque:"Xiaomi",modele:"Redmi 12",ecran:64,batterie:39,charge:39,camera:44,vitre:44,desox:44},{marque:"Huawei",modele:"P40 Pro",ecran:129,batterie:54,charge:49,camera:64,vitre:74,desox:54},{marque:"Huawei",modele:"P30 Pro",ecran:104,batterie:49,charge:44,camera:59,vitre:64,desox:49},{marque:"Huawei",modele:"P30 Lite",ecran:74,batterie:39,charge:39,camera:44,vitre:49,desox:44},{marque:"Huawei",modele:"Mate 20 Pro",ecran:94,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"Google",modele:"Pixel 8 Pro",ecran:154,batterie:59,charge:54,camera:74,vitre:84,desox:54},{marque:"Google",modele:"Pixel 8",ecran:129,batterie:54,charge:49,camera:64,vitre:74,desox:54},{marque:"Google",modele:"Pixel 7",ecran:104,batterie:49,charge:49,camera:59,vitre:64,desox:49},{marque:"Google",modele:"Pixel 6",ecran:94,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"iPad",modele:'iPad Pro 12.9"',ecran:224,batterie:89,charge:74,camera:84,vitre:null,desox:74},{marque:"iPad",modele:'iPad Pro 11"',ecran:194,batterie:79,charge:69,camera:79,vitre:null,desox:74},{marque:"iPad",modele:"iPad Air",ecran:154,batterie:69,charge:59,camera:69,vitre:null,desox:64},{marque:"iPad",modele:"iPad 10 / 9",ecran:104,batterie:59,charge:54,camera:59,vitre:null,desox:59},{marque:"iPad",modele:"iPad mini",ecran:114,batterie:59,charge:54,camera:59,vitre:null,desox:59}],ps=[{cle:"ecran",nom:"Écran"},{cle:"batterie",nom:"Batterie"},{cle:"charge",nom:"Connecteur de charge"},{cle:"camera",nom:"Caméra"},{cle:"vitre",nom:"Vitre arrière"},{cle:"desox",nom:"Désoxydation"}],mS=[{q:"Combien de temps dure une réparation ?",r:"La plupart des réparations courantes (écran, batterie) sont réalisées en 30 minutes environ, pendant que vous attendez."},{q:"Vos réparations sont-elles garanties ?",r:"Oui. Les batteries sont garanties 6 mois. Pour les écrans, nous proposons plusieurs gammes : la garantie va de 3 à 6 mois pour les gammes compatibles, et jusqu'à 1 an pour les gammes premium."},{q:"Êtes-vous vraiment moins chers ?",r:"Oui : nos tarifs sont en moyenne 30 à 40 € moins chers que la concurrence, à qualité de pièce équivalente."},{q:"Intervenez-vous à domicile ?",r:"Oui, nous nous déplaçons partout en Île-de-France, à votre domicile ou sur votre lieu de travail, sur rendez-vous."},{q:"Rachetez-vous les téléphones ?",r:"Oui, nous rachetons votre ancien téléphone (fonctionnel ou en panne) avec une estimation gratuite et un paiement immédiat. Nous vendons aussi des téléphones reconditionnés et testés."},{q:"Que se passe-t-il si vous ne pouvez pas réparer ?",r:"Le diagnostic est gratuit. Si la réparation n'est pas possible ou si vous refusez le devis, vous ne payez rien."},{q:"Quels moyens de paiement acceptez-vous ?",r:"Espèces et carte bancaire. Un reçu vous est remis à chaque intervention."}],gS="Écrans garantis de 3 mois à 1 an selon la gamme · Batteries garanties 6 mois",kt={tel:"07 51 48 43 92",telLink:"+33751484392",email:"aminemekhfi45@gmail.com",zone:"Toute l'Île-de-France"},vS={ecran:"./img/services/ecran.jpg",batterie:"./img/services/batterie.jpg",charge:"./img/services/charge.jpg",camera:"./img/services/camera.jpg",vitre:"./img/services/vitre.jpg",desox:"./img/services/desox.jpg"},_S={ecran:_.jsxs(_.Fragment,{children:[_.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2.5"}),_.jsx("line",{x1:"10",y1:"18",x2:"14",y2:"18"})]}),batterie:_.jsxs(_.Fragment,{children:[_.jsx("rect",{x:"2",y:"7",width:"16",height:"10",rx:"2"}),_.jsx("line",{x1:"21",y1:"10",x2:"21",y2:"14"}),_.jsx("line",{x1:"6",y1:"10",x2:"6",y2:"14"}),_.jsx("line",{x1:"10",y1:"10",x2:"10",y2:"14"})]}),charge:_.jsx("path",{d:"M13 2 3 14h7l-1 8 10-12h-7l1-8Z"}),camera:_.jsxs(_.Fragment,{children:[_.jsx("path",{d:"M3 8a2 2 0 0 1 2-2h1.5l1-2h5l1 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}),_.jsx("circle",{cx:"12",cy:"12.5",r:"3.5"})]}),vitre:_.jsxs(_.Fragment,{children:[_.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2.5"}),_.jsx("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),_.jsx("line",{x1:"4",y1:"17",x2:"20",y2:"17"})]}),desox:_.jsx("path",{d:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"}),express:_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:"12",cy:"12",r:"9"}),_.jsx("path",{d:"M12 7v5l3 2"})]}),garantie:_.jsxs(_.Fragment,{children:[_.jsx("path",{d:"M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z"}),_.jsx("path",{d:"m9 12 2 2 4-4"})]}),prix:_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:"12",cy:"12",r:"9"}),_.jsx("path",{d:"M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0"})]}),domicile:_.jsxs(_.Fragment,{children:[_.jsx("path",{d:"M4 11 12 4l8 7"}),_.jsx("path",{d:"M6 10v9h12v-9"}),_.jsx("path",{d:"M10 19v-5h4v5"})]}),expert:_.jsx("path",{d:"M14.7 6.3a4 4 0 0 0-5.6 5.6l-6.1 6.1 1.4 1.4 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.1 2.1-1.9-.5-.5-1.9Z"}),correspondance:_.jsxs(_.Fragment,{children:[_.jsx("path",{d:"M3 8 12 3l9 5-9 5Z"}),_.jsx("path",{d:"M3 8v8l9 5 9-5V8"}),_.jsx("line",{x1:"12",y1:"13",x2:"12",y2:"21"})]}),phone:_.jsxs(_.Fragment,{children:[_.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"3"}),_.jsx("line",{x1:"10",y1:"18",x2:"14",y2:"18"})]}),chat:_.jsx("path",{d:"M4 5h16v11H8l-4 4V5Z"}),search:_.jsxs(_.Fragment,{children:[_.jsx("circle",{cx:"11",cy:"11",r:"7"}),_.jsx("line",{x1:"21",y1:"21",x2:"16.5",y2:"16.5"})]})};function ed({name:t,className:e=""}){return _.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:_S[t]||null})}function xS(){return _.jsx("section",{className:"section",id:"services",children:_.jsxs("div",{className:"container",children:[_.jsx("p",{className:"section__eyebrow",children:"Nos services"}),_.jsx("h2",{className:"section__title",children:"Toutes les réparations, un seul atelier"}),_.jsx("div",{className:"cards",children:ps.map(t=>{const e=Math.min(...pi.map(i=>i[t.cle]).filter(i=>i!=null)),n=vS[t.cle];return _.jsxs("article",{className:`service${n?" service--photo":""}`,style:n?{backgroundImage:`url(${n})`}:void 0,children:[_.jsx("span",{className:"ic",children:_.jsx(ed,{name:t.cle})}),_.jsx("h3",{children:t.nom}),_.jsxs("p",{children:["Remplacement et réparation ",t.nom.toLowerCase()," sur iPhone, Samsung et autres marques."]}),_.jsxs("div",{className:"service__from",children:["Dès ",e," €"]})]},t.cle)})})]})})}const yS=[{n:"01",titre:"Vous réservez",texte:"Choisissez l'appareil, la réparation et un créneau en ligne, ou appelez-nous."},{n:"02",titre:"Diagnostic gratuit",texte:"On identifie la panne et on vous donne un devis clair, sans engagement."},{n:"03",titre:"Réparation express",texte:"La plupart des réparations sont faites en 30 minutes, avec pièces garanties."},{n:"04",titre:"Garantie incluse",texte:"Écrans garantis de 3 mois à 1 an selon la gamme, batteries garanties 6 mois."}];function SS(){return _.jsx("section",{className:"section",id:"process",children:_.jsxs("div",{className:"container",children:[_.jsx("p",{className:"section__eyebrow",children:"Comment ça marche"}),_.jsx("h2",{className:"section__title",children:"Réparé en 4 étapes"}),_.jsx("div",{className:"steps",children:yS.map(t=>_.jsxs("div",{className:"step",children:[_.jsx("span",{className:"step__n",children:t.n}),_.jsx("h3",{children:t.titre}),_.jsx("p",{children:t.texte})]},t.n))})]})})}function MS(){return _.jsx("section",{className:"section section--alt",id:"apropos",children:_.jsxs("div",{className:"container apropos",children:[_.jsx("div",{className:"apropos__media",children:_.jsx("img",{src:"./img/atelier.jpg",alt:"Atelier MK Phone",loading:"lazy"})}),_.jsxs("div",{children:[_.jsx("p",{className:"section__eyebrow",children:"À propos"}),_.jsx("h2",{className:"section__title",children:"MK Phone, votre expert de proximité"}),_.jsx("p",{className:"section__lead",children:"Chez MK Phone, on répare votre téléphone avec soin, rapidement et à prix juste — 30 à 40 € moins cher que la concurrence. Passionnés de tech, nous nous déplaçons dans toute l'Île-de-France : à domicile, au travail ou en atelier. Chaque réparation est testée et garantie."}),_.jsxs("div",{className:"apropos__stats",children:[_.jsxs("div",{children:[_.jsx("strong",{children:"+5 000"}),_.jsx("span",{children:"Appareils réparés"})]}),_.jsxs("div",{children:[_.jsx("strong",{children:"4,9/5"}),_.jsx("span",{children:"Avis clients"})]}),_.jsxs("div",{children:[_.jsx("strong",{children:"6j/7"}),_.jsx("span",{children:"Disponibles"})]})]})]})]})})}function ES(){return _.jsx("section",{className:"section section--alt",id:"faq",children:_.jsxs("div",{className:"container faq",children:[_.jsx("p",{className:"section__eyebrow",children:"FAQ"}),_.jsx("h2",{className:"section__title",children:"Questions fréquentes"}),_.jsx("div",{className:"faq__list",children:mS.map(t=>_.jsxs("details",{className:"faq__item",children:[_.jsxs("summary",{children:[t.q,_.jsx("span",{className:"faq__plus",children:"+"})]}),_.jsx("p",{children:t.r})]},t.q))})]})})}const wp=[...new Set(pi.map(t=>t.marque))],TS=["09:00 – 10:00","10:00 – 11:00","11:00 – 12:00","14:00 – 15:00","15:00 – 16:00","16:00 – 17:00","17:00 – 18:00"];function wS({prefill:t}){var g;const[e,n]=ie.useState(wp[0]),[i,r]=ie.useState(""),[s,a]=ie.useState("ecran"),[o,l]=ie.useState(!1),[c,d]=ie.useState(null),f=ie.useRef(null),h=new Date().toISOString().split("T")[0],m=ie.useMemo(()=>pi.filter(M=>M.marque===e),[e]),x=ie.useMemo(()=>pi.find(M=>M.modele===i),[i]);ie.useEffect(()=>{var M;m.find(P=>P.modele===i)||r(((M=m[0])==null?void 0:M.modele)||"")},[m]),ie.useEffect(()=>{t!=null&&t.marque&&(n(t.marque),r(t.modele))},[t]);const S=x?x[s]:null,p=((g=ps.find(M=>M.cle===s))==null?void 0:g.nom)||"",u=S!=null?_.jsxs(_.Fragment,{children:["Estimation : ",_.jsxs("strong",{children:[S," €"]})," ",_.jsx("span",{className:"muted",children:"(30 à 40 € sous la concurrence · devis confirmé en atelier)"})]}):_.jsxs(_.Fragment,{children:["Cette réparation est établie ",_.jsx("strong",{children:"sur devis gratuit"}),"."]});async function v(M){M.preventDefault();const P=M.target,R=Object.fromEntries(new FormData(P));if(!R.nom||!R.tel||!i||!R.date||!R.creneau){d({type:"error",html:"Merci de remplir tous les champs obligatoires (*)."});return}const A=R.nom.split(" ")[0],b=S!=null?`${S} €`:"sur devis",H=`Demande de RDV — ${e} ${i}`,y=`Nom: ${R.nom}
Téléphone: ${R.tel}
E-mail: ${R.email||"—"}
Appareil: ${e} ${i}
Réparation: ${p} (${b})
Date: ${R.date} — Créneau: ${R.creneau}
Message: ${R.message||"—"}`,T=`mailto:${kt.email}?subject=${encodeURIComponent(H)}&body=${encodeURIComponent(y)}`;d({type:"ok",mailto:T,html:`✅ Merci ${A} ! Votre demande pour « ${p} » (${e} ${i}, le ${R.date} — ${R.creneau}) est enregistrée. Nous vous confirmons par téléphone.`}),P.reset()}return _.jsx("section",{className:"section",id:"rdv",children:_.jsxs("div",{className:"container rdv",children:[_.jsxs("div",{className:"rdv__intro",children:[_.jsx("p",{className:"section__eyebrow",children:"Rendez-vous"}),_.jsx("h2",{className:"section__title",children:"Réservez votre créneau"}),_.jsx("p",{className:"section__lead",children:"Choisissez votre appareil, la réparation et un créneau. Nous vous confirmons par téléphone. C'est gratuit et sans engagement, partout en Île-de-France."}),_.jsxs("ul",{className:"rdv__points",children:[_.jsx("li",{children:"Confirmation rapide par téléphone"}),_.jsx("li",{children:"Devis clair avant toute intervention"}),_.jsx("li",{children:"Aucun frais si vous ne réparez pas"})]})]}),_.jsxs("form",{className:"rdv__form",ref:f,onSubmit:v,noValidate:!0,children:[_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"nom",children:"Nom complet *"}),_.jsx("input",{id:"nom",name:"nom",type:"text",required:!0})]}),_.jsxs("div",{className:"field-row",children:[_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"tel",children:"Téléphone *"}),_.jsx("input",{id:"tel",name:"tel",type:"tel",placeholder:"06 12 34 56 78",required:!0})]}),_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"email",children:"E-mail"}),_.jsx("input",{id:"email",name:"email",type:"email",placeholder:"vous@exemple.fr"})]})]}),_.jsxs("div",{className:"field-row",children:[_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"marque",children:"Marque *"}),_.jsx("select",{id:"marque",name:"marque",value:e,onChange:M=>n(M.target.value),children:wp.map(M=>_.jsx("option",{children:M},M))})]}),_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"modele",children:"Modèle *"}),_.jsx("select",{id:"modele",name:"modele",value:i,onChange:M=>r(M.target.value),children:m.map(M=>_.jsx("option",{children:M.modele},M.modele))})]})]}),_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"reparation",children:"Réparation *"}),_.jsx("select",{id:"reparation",name:"reparation",value:s,onChange:M=>a(M.target.value),children:ps.map(M=>{const P=x?x[M.cle]:null;return _.jsxs("option",{value:M.cle,children:[M.nom,P==null?" — sur devis":` — ${P} €`]},M.cle)})})]}),_.jsxs("div",{className:"field-row",children:[_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"date",children:"Date souhaitée *"}),_.jsx("input",{id:"date",name:"date",type:"date",min:h,required:!0})]}),_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"creneau",children:"Créneau *"}),_.jsxs("select",{id:"creneau",name:"creneau",required:!0,defaultValue:"",children:[_.jsx("option",{value:"",children:"—"}),TS.map(M=>_.jsx("option",{children:M},M))]})]})]}),_.jsxs("div",{className:"field",children:[_.jsx("label",{htmlFor:"message",children:"Message (facultatif)"}),_.jsx("textarea",{id:"message",name:"message",rows:"3",placeholder:"Décrivez la panne, votre ville…"})]}),_.jsx("div",{className:"rdv__estimation",children:u}),_.jsx("button",{type:"submit",className:"btn btn--primary btn--lg btn--block",disabled:o,children:o?"Envoi en cours…":"Confirmer le rendez-vous"}),c&&_.jsxs("p",{className:`rdv__confirm ${c.type==="error"?"error":""}`,children:[c.html," ",c.mailto&&_.jsx("a",{href:c.mailto,children:"Envoyer aussi par e-mail →"})]})]})]})})}const Ap={"iPhone 16 Pro Max":700,"iPhone 16 Pro":620,"iPhone 16":480,"iPhone 15 Pro Max":560,"iPhone 15":420,"iPhone 14 Pro Max":470,"iPhone 14":360,"iPhone 13 Pro Max":400,"iPhone 13":300,"iPhone 12 Pro Max":300,"iPhone 12":220,"iPhone 11 Pro Max":240,"iPhone 11":170,"iPhone XR":120,"iPhone X":110,"iPhone 8 / SE 2020":70,"iPhone 7":45,"Galaxy S24 Ultra":620,"Galaxy S24":430,"Galaxy S23":340,"Galaxy S22":250,"Galaxy S21":180,"Galaxy A54":150,"Galaxy A53":110,"Galaxy A34":100,"Galaxy A14":70,"Xiaomi 13":200,"Xiaomi 12":160,"Redmi Note 13":120,"Redmi Note 12":90,"Redmi 12":70,"P40 Pro":140,"P30 Pro":110,"P30 Lite":60,"Mate 20 Pro":90,"Pixel 8 Pro":340,"Pixel 8":280,"Pixel 7":190,"Pixel 6":140,'iPad Pro 12.9"':500,'iPad Pro 11"':420,"iPad Air":320,"iPad 10 / 9":200,"iPad mini":250},Cp=[{cle:"neuf",nom:"Comme neuf",desc:"Aucune rayure, comme sorti de la boîte",coef:1},{cle:"tbe",nom:"Très bon état",desc:"Micro-rayures invisibles à 20 cm",coef:.9},{cle:"bon",nom:"Bon état",desc:"Quelques rayures légères, fonctionne bien",coef:.75},{cle:"correct",nom:"État correct",desc:"Rayures visibles, marques d'usage",coef:.55},{cle:"hs",nom:"Écran cassé / en panne",desc:"Écran fissuré ou dysfonctionnement",coef:.3}],Rp=[{go:"64 Go",coef:.95},{go:"128 Go",coef:1},{go:"256 Go",coef:1.08},{go:"512 Go",coef:1.15},{go:"1 To",coef:1.22}],Pp=[...new Set(pi.map(t=>t.marque))],AS=t=>Math.round(t/5)*5;function CS(){const[t,e]=ie.useState(Pp[0]),[n,i]=ie.useState(""),[r,s]=ie.useState("128 Go"),[a,o]=ie.useState("bon"),l=ie.useMemo(()=>pi.filter(p=>p.marque===t&&Ap[p.modele]!=null),[t]);ie.useEffect(()=>{var p;l.find(u=>u.modele===n)||i(((p=l[0])==null?void 0:p.modele)||"")},[l]);const c=Ap[n],d=Cp.find(p=>p.cle===a),f=Rp.find(p=>p.go===r),h=c!=null&&d&&f?AS(c*d.coef*f.coef):null,m=`Reprise ${t} ${n}`,x=`Bonjour, je souhaite vendre mon appareil :
- Appareil : ${t} ${n}
- Stockage : ${r}
- État : ${d==null?void 0:d.nom}
- Estimation en ligne : ${h??"—"} €

Merci de me recontacter.`,S=`mailto:${kt.email}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(x)}`;return _.jsxs("div",{className:"estim",children:[_.jsxs("div",{className:"estim__form",children:[_.jsxs("div",{className:"estim__field",children:[_.jsx("label",{children:"1. Marque"}),_.jsx("select",{value:t,onChange:p=>e(p.target.value),children:Pp.map(p=>_.jsx("option",{children:p},p))})]}),_.jsxs("div",{className:"estim__field",children:[_.jsx("label",{children:"2. Modèle"}),_.jsx("select",{value:n,onChange:p=>i(p.target.value),children:l.map(p=>_.jsx("option",{children:p.modele},p.modele))})]}),_.jsxs("div",{className:"estim__field",children:[_.jsx("label",{children:"3. Stockage"}),_.jsx("select",{value:r,onChange:p=>s(p.target.value),children:Rp.map(p=>_.jsx("option",{children:p.go},p.go))})]}),_.jsxs("div",{className:"estim__field estim__field--full",children:[_.jsx("label",{children:"4. État de l'appareil"}),_.jsx("div",{className:"estim__etats",children:Cp.map(p=>_.jsxs("button",{type:"button",className:`estim__etat ${a===p.cle?"is-active":""}`,onClick:()=>o(p.cle),children:[_.jsx("strong",{children:p.nom}),_.jsx("span",{children:p.desc})]},p.cle))})]})]}),_.jsxs("aside",{className:"estim__result",children:[_.jsx("p",{className:"estim__result-label",children:"Estimation de reprise"}),_.jsx("p",{className:"estim__price",children:h!=null?`${h} €`:"—"}),_.jsxs("p",{className:"estim__note",children:[t," ",n," · ",r," · ",d==null?void 0:d.nom]}),_.jsx("a",{className:"btn btn--primary btn--block",href:S,children:"Vendre mon téléphone"}),_.jsxs("a",{className:"btn btn--outline btn--block",href:`tel:${kt.telLink}`,children:["Ou appelez le ",kt.tel]}),_.jsx("p",{className:"estim__small",children:"Prix indicatif, confirmé après vérification en atelier. Paiement immédiat, reprise même écran cassé."})]})]})}function RS(){return _.jsx("section",{className:"section section--alt",id:"vente",children:_.jsxs("div",{className:"container",children:[_.jsx("p",{className:"section__eyebrow",children:"Vente & rachat"}),_.jsx("h2",{className:"section__title",children:"Estimez la reprise de votre téléphone"}),_.jsx("p",{className:"section__lead",children:"Comme sur les grandes plateformes : choisissez votre appareil, son état, et obtenez une estimation immédiate. Reprise même écran cassé, paiement immédiat."}),_.jsx(CS,{}),_.jsxs("div",{className:"buysell",style:{marginTop:"2.5rem"},children:[_.jsxs("article",{className:"buysell__card buysell__card--buy",children:[_.jsx("span",{className:"ic",children:_.jsx(ed,{name:"prix"})}),_.jsx("h3",{children:"Nous rachetons votre téléphone"}),_.jsx("p",{children:"Fonctionnel ou en panne, tous modèles. Estimation gratuite et paiement immédiat."}),_.jsxs("ul",{className:"buysell__list",children:[_.jsx("li",{children:"Estimation gratuite en quelques secondes"}),_.jsx("li",{children:"Paiement immédiat (espèces ou virement)"}),_.jsx("li",{children:"Reprise même en cas d'écran cassé"})]}),_.jsx("a",{className:"btn btn--primary",href:`tel:${kt.telLink}`,children:"Estimer par téléphone"})]}),_.jsxs("article",{className:"buysell__card buysell__card--sell",children:[_.jsx("span",{className:"ic",children:_.jsx(ed,{name:"phone"})}),_.jsx("h3",{children:"Achetez un téléphone reconditionné"}),_.jsx("p",{children:"Des smartphones vérifiés, testés et garantis, à prix malins. iPhone, Samsung et plus."}),_.jsxs("ul",{className:"buysell__list",children:[_.jsx("li",{children:"Appareils testés et nettoyés"}),_.jsx("li",{children:"Garantie incluse"}),_.jsx("li",{children:"Prix bien plus bas que le neuf"})]}),_.jsx("a",{className:"btn btn--outline",href:`mailto:${kt.email}?subject=${encodeURIComponent("Achat téléphone reconditionné")}`,children:"Voir les disponibilités"})]})]})]})})}function PS(){const t=jl();return _.jsx("section",{className:"section",children:_.jsx("div",{className:"container",children:_.jsxs("div",{className:"finalcta",children:[_.jsx("p",{className:"finalcta__eyebrow",children:"Prêt à réparer ?"}),_.jsx("h2",{className:"finalcta__title",children:"Votre téléphone mérite mieux qu'un écran cassé."}),_.jsx("p",{className:"finalcta__sub",children:"Réservez en ligne ou appelez-nous : diagnostic gratuit et réparation le jour même, partout en Île-de-France."}),_.jsxs("div",{className:"finalcta__actions",children:[_.jsx("button",{className:"btn btn--white btn--lg",onClick:()=>t("rdv"),children:"Prendre rendez-vous"}),_.jsx("a",{className:"btn btn--outline-white btn--lg",href:`tel:${kt.telLink}`,children:kt.tel})]})]})})})}function Qv(){const t=new Date().getFullYear(),e=jl();return _.jsxs("footer",{className:"footer",id:"contact",children:[_.jsxs("div",{className:"container footer__inner",children:[_.jsxs("div",{children:[_.jsxs($n,{to:"/",className:"brand brand--footer",children:[_.jsx("span",{className:"brand__mark",children:"MK"})," Phone"]}),_.jsx("p",{className:"footer__desc",children:"Réparation, vente et rachat de smartphones, tablettes et PC. Déplacements dans toute l'Île-de-France."})]}),_.jsxs("div",{className:"footer__col",children:[_.jsx("h4",{children:"Contact"}),_.jsx("p",{children:_.jsx("a",{href:`tel:${kt.telLink}`,children:kt.tel})}),_.jsx("p",{children:_.jsx("a",{href:`mailto:${kt.email}`,children:kt.email})})]}),_.jsxs("div",{className:"footer__col",children:[_.jsx("h4",{children:"Zone & horaires"}),_.jsx("p",{children:kt.zone}),_.jsx("p",{children:"Lun – Sam : 9h00 – 19h00"})]}),_.jsxs("div",{className:"footer__col",children:[_.jsx("h4",{children:"Liens"}),_.jsx("p",{children:_.jsx($n,{to:"/tarifs",children:"Tarifs"})}),_.jsx("p",{children:_.jsx("button",{className:"linklike",onClick:()=>e("vente"),children:"Vente & rachat"})}),_.jsx("p",{children:_.jsx("button",{className:"linklike",onClick:()=>e("rdv"),children:"Rendez-vous"})}),_.jsx("p",{children:_.jsx($n,{to:"/mentions-legales",children:"Mentions légales"})})]})]}),_.jsxs("div",{className:"container footer__bottom",children:[_.jsxs("span",{children:["© ",t," MK Phone. Tous droits réservés."]}),_.jsx("span",{children:"Réparation express · Vente & rachat · Île-de-France"})]})]})}function Jv(){return _.jsxs("div",{className:"aurora","aria-hidden":"true",children:[_.jsx("span",{className:"aurora__blob aurora__blob--1"}),_.jsx("span",{className:"aurora__blob aurora__blob--2"}),_.jsx("span",{className:"aurora__blob aurora__blob--3"}),_.jsx("span",{className:"aurora__blob aurora__blob--4"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="169",bS=0,bp=1,LS=2,e_=1,NS=2,ni=3,qi=0,tn=1,Wn=2,Gi=0,ms=1,Lp=2,Np=3,Dp=4,DS=5,ur=100,US=101,IS=102,FS=103,OS=104,kS=200,BS=201,zS=202,HS=203,td=204,nd=205,VS=206,GS=207,WS=208,jS=209,XS=210,qS=211,$S=212,YS=213,KS=214,id=0,rd=1,sd=2,ws=3,ad=4,od=5,ld=6,cd=7,t_=0,ZS=1,QS=2,Wi=0,JS=1,eM=2,tM=3,nM=4,iM=5,rM=6,sM=7,n_=300,As=301,Cs=302,ud=303,dd=304,Xl=306,fd=1e3,mr=1001,hd=1002,Sn=1003,aM=1004,uo=1005,Un=1006,Cc=1007,gr=1008,mi=1009,i_=1010,r_=1011,ba=1012,Vf=1013,wr=1014,oi=1015,Ba=1016,Gf=1017,Wf=1018,Rs=1020,s_=35902,a_=1021,o_=1022,Fn=1023,l_=1024,c_=1025,gs=1026,Ps=1027,u_=1028,jf=1029,d_=1030,Xf=1031,qf=1033,jo=33776,Xo=33777,qo=33778,$o=33779,pd=35840,md=35841,gd=35842,vd=35843,_d=36196,xd=37492,yd=37496,Sd=37808,Md=37809,Ed=37810,Td=37811,wd=37812,Ad=37813,Cd=37814,Rd=37815,Pd=37816,bd=37817,Ld=37818,Nd=37819,Dd=37820,Ud=37821,Yo=36492,Id=36494,Fd=36495,f_=36283,Od=36284,kd=36285,Bd=36286,oM=3200,lM=3201,cM=0,uM=1,bi="",Nn="srgb",Qi="srgb-linear",$f="display-p3",ql="display-p3-linear",El="linear",at="srgb",Tl="rec709",wl="p3",Ir=7680,Up=519,dM=512,fM=513,hM=514,h_=515,pM=516,mM=517,gM=518,vM=519,Ip=35044,Fp="300 es",li=2e3,Al=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,zd=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function _M(t,e){return(t%e+e)%e}function Pc(t,e,n){return(1-n)*t+n*e}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,a,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],x=i[8],S=r[0],p=r[3],u=r[6],v=r[1],g=r[4],M=r[7],P=r[2],R=r[5],A=r[8];return s[0]=a*S+o*v+l*P,s[3]=a*p+o*g+l*R,s[6]=a*u+o*M+l*A,s[1]=c*S+d*v+f*P,s[4]=c*p+d*g+f*R,s[7]=c*u+d*M+f*A,s[2]=h*S+m*v+x*P,s[5]=h*p+m*g+x*R,s[8]=h*u+m*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new Ie;function p_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function La(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xM(){const t=La("canvas");return t.style.display="block",t}const Op={};function Ko(t){t in Op||(Op[t]=!0,console.warn(t))}function yM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function SM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function MM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kp=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bp=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Qi]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Nn]:{transfer:at,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ql]:{transfer:El,primaries:wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Bp),fromReference:t=>t.applyMatrix3(kp)},[$f]:{transfer:at,primaries:wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bp),fromReference:t=>t.applyMatrix3(kp).convertLinearToSRGB()}},EM=new Set([Qi,ql]),Ye={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!EM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=js[e].toReference,r=js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return js[t].primaries},getTransfer:function(t){return t===bi?El:js[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(js[e].luminanceCoefficients)}};function vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class TM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=La("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=La("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nc(r[a].image)):s.push(Nc(r[a]))}else s=Nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;class Gt extends Us{constructor(e=Gt.DEFAULT_IMAGE,n=Gt.DEFAULT_MAPPING,i=mr,r=mr,s=Un,a=gr,o=Fn,l=mi,c=Gt.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=za(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=n_;Gt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],x=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,P=(u+1)/2,R=(d+h)/4,A=(f+S)/4,b=(x+p)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=A/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-S)*(f-S)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-S)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends CM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g_ extends Gt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends Gt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=S;return}if(f!==S||l!==h||c!==m||d!==x){let p=1-o;const u=l*h+c*m+d*x+f*S,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,u*v);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P}const M=o*v;if(l=l*p+h*M,c=c*p+m*M,d=d*p+x*M,f=f*p+S*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+d*f+l*m-c*h,e[n+1]=l*x+d*h+c*f-o*m,e[n+2]=c*x+d*m+o*h-l*f,e[n+3]=d*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"YXZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"ZXY":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"ZYX":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"YZX":this._x=h*d*f+c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f-h*m*x;break;case"XZY":this._x=h*d*f-c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new B,zp=new Ha;class Va{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),ho.subVectors(this.max,Xs),Or.subVectors(e.a,Xs),kr.subVectors(e.b,Xs),Br.subVectors(e.c,Xs),yi.subVectors(kr,Or),Si.subVectors(Br,kr),er.subVectors(Or,Br);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-er.z,er.y,yi.z,0,-yi.x,Si.z,0,-Si.x,er.z,0,-er.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-er.y,er.x,0];return!Uc(n,Or,kr,Br,ho)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,Or,kr,Br,ho))?!1:(po.crossVectors(yi,Si),n=[po.x,po.y,po.z],Uc(n,Or,kr,Br,ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new B,new B,new B,new B,new B,new B,new B,new B],Cn=new B,fo=new Va,Or=new B,kr=new B,Br=new B,yi=new B,Si=new B,er=new B,Xs=new B,ho=new B,po=new B,tr=new B;function Uc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),d=i.dot(tr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const PM=new Va,qs=new B,Ic=new B;class Yf{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Ic)),this.expandByPoint(qs.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new B,Fc=new B,mo=new B,Mi=new B,Oc=new B,go=new B,kc=new B;class bM{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fc.copy(e).add(n).multiplyScalar(.5),mo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Fc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(mo),o=Mi.dot(this.direction),l=-Mi.dot(mo),c=Mi.lengthSq(),d=Math.abs(1-a*a);let f,h,m,x;if(d>0)if(f=a*l-o,h=a*o-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const S=1/d;f*=S,h*=S,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fc).addScaledVector(mo,h),m}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Oc.subVectors(n,e),go.subVectors(i,e),kc.crossVectors(Oc,go);let a=this.direction.dot(kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(go.crossVectors(Mi,go));if(l<0)return null;const c=o*this.direction.dot(Oc.cross(Mi));if(c<0||l+c>a)return null;const d=-o*Mi.dot(kc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,x,S,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,x,S,p)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,x,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=x,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,x=o*d,S=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,x=c*d,S=c*f;n[0]=h+S*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-x,n[6]=S+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,x=c*d,S=c*f;n[0]=h-S*o,n[4]=-a*f,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*d,n[9]=S-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,x=o*d,S=o*f;n[0]=l*d,n[4]=x*c-m,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*d,n[4]=S-h*f,n[8]=x*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+x,n[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,S=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+S,n[5]=a*d,n[9]=m*f-x,n[2]=x*f-m,n[6]=o*d,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LM,e,NM)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Ei.crossVectors(i,an),Ei.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ei.crossVectors(i,an)),Ei.normalize(),vo.crossVectors(an,Ei),r[0]=Ei.x,r[4]=vo.x,r[8]=an.x,r[1]=Ei.y,r[5]=vo.y,r[9]=an.y,r[2]=Ei.z,r[6]=vo.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],x=i[2],S=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],P=i[15],R=r[0],A=r[4],b=r[8],H=r[12],y=r[1],T=r[5],W=r[9],z=r[13],q=r[2],J=r[6],V=r[10],Q=r[14],N=r[3],X=r[7],K=r[11],ae=r[15];return s[0]=a*R+o*y+l*q+c*N,s[4]=a*A+o*T+l*J+c*X,s[8]=a*b+o*W+l*V+c*K,s[12]=a*H+o*z+l*Q+c*ae,s[1]=d*R+f*y+h*q+m*N,s[5]=d*A+f*T+h*J+m*X,s[9]=d*b+f*W+h*V+m*K,s[13]=d*H+f*z+h*Q+m*ae,s[2]=x*R+S*y+p*q+u*N,s[6]=x*A+S*T+p*J+u*X,s[10]=x*b+S*W+p*V+u*K,s[14]=x*H+S*z+p*Q+u*ae,s[3]=v*R+g*y+M*q+P*N,s[7]=v*A+g*T+M*J+P*X,s[11]=v*b+g*W+M*V+P*K,s[15]=v*H+g*z+M*Q+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],x=e[3],S=e[7],p=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+S*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+p*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],S=e[13],p=e[14],u=e[15],v=f*p*c-S*h*c+S*l*m-o*p*m-f*l*u+o*h*u,g=x*h*c-d*p*c-x*l*m+a*p*m+d*l*u-a*h*u,M=d*S*c-x*f*c+x*o*m-a*S*m-d*o*u+a*f*u,P=x*f*l-d*S*l-x*o*h+a*S*h+d*o*p-a*f*p,R=n*v+i*g+r*M+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=v*A,e[1]=(S*h*s-f*p*s-S*r*m+i*p*m+f*r*u-i*h*u)*A,e[2]=(o*p*s-S*l*s+S*r*c-i*p*c-o*r*u+i*l*u)*A,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*A,e[4]=g*A,e[5]=(d*p*s-x*h*s+x*r*m-n*p*m-d*r*u+n*h*u)*A,e[6]=(x*l*s-a*p*s-x*r*c+n*p*c+a*r*u-n*l*u)*A,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*A,e[8]=M*A,e[9]=(x*f*s-d*S*s-x*i*m+n*S*m+d*i*u-n*f*u)*A,e[10]=(a*S*s-x*o*s+x*i*c-n*S*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*A,e[12]=P*A,e[13]=(d*S*r-x*f*r+x*i*h-n*S*h-d*i*p+n*f*p)*A,e[14]=(x*o*r-a*S*r-x*i*l+n*S*l+a*i*p-n*o*p)*A,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,x=s*f,S=a*d,p=a*f,u=o*f,v=l*c,g=l*d,M=l*f,P=i.x,R=i.y,A=i.z;return r[0]=(1-(S+u))*P,r[1]=(m+M)*P,r[2]=(x-g)*P,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(h+u))*R,r[6]=(p+v)*R,r[7]=0,r[8]=(x+g)*A,r[9]=(p-v)*A,r[10]=(1-(h+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,d=1/a,f=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(o===li)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Al)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let x,S;if(o===li)x=(a+s)*f,S=-2*f;else if(o===Al)x=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new B,Rn=new St,LM=new B(0,0,0),NM=new B(1,1,1),Ei=new B,vo=new B,an=new B,Hp=new St,Vp=new Ha;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const Gp=new B,Hr=new Ha,Jn=new St,_o=new B,$s=new B,UM=new B,IM=new Ha,Wp=new B(1,0,0),jp=new B(0,1,0),Xp=new B(0,0,1),qp={type:"added"},FM={type:"removed"},Vr={type:"childadded",child:null},Bc={type:"childremoved",child:null};class dn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new B,n=new gi,i=new Ha,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ie}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt($s,_o,this.up):Jn.lookAt(_o,$s,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FM),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,UM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new B(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new B,ei=new B,zc=new B,ti=new B,Gr=new B,Wr=new B,$p=new B,Hc=new B,Vc=new B,Gc=new B,Wc=new gt,jc=new gt,Xc=new gt;class In{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ei.subVectors(i,n),zc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(zc),c=ei.dot(ei),d=ei.dot(zc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,x=(a*d-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Wc.setScalar(0),jc.setScalar(0),Xc.setScalar(0),Wc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wc,s.x),a.addScaledVector(jc,s.y),a.addScaledVector(Xc,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ei.subVectors(e,n),Pn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),Wr.subVectors(s,i),Hc.subVectors(e,i);const l=Gr.dot(Hc),c=Wr.dot(Hc);if(l<=0&&c<=0)return n.copy(i);Vc.subVectors(e,r);const d=Gr.dot(Vc),f=Wr.dot(Vc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Gr,a);Gc.subVectors(e,s);const m=Gr.dot(Gc),x=Wr.dot(Gc);if(x>=0&&m<=x)return n.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Wr,o);const p=d*x-m*f;if(p<=0&&f-d>=0&&m-x>=0)return $p.subVectors(s,r),o=(f-d)/(f-d+(m-x)),n.copy(r).addScaledVector($p,o);const u=1/(p+S+h);return a=S*u,o=h*u,n.copy(i).addScaledVector(Gr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},xo={h:0,s:0,l:0};function qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=_M(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=qc(a,s,e+1/3),this.g=qc(a,s,e),this.b=qc(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=__[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ye.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Nn){Ye.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(xo);const i=Pc(Ti.h,xo.h,n),r=Pc(Ti.s,xo.s,n),s=Pc(Ti.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Je;Je.NAMES=__;let OM=0;class $l extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=za(),this.name="",this.type="Material",this.blending=ms,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==td&&(i.blendSrc=this.blendSrc),this.blendDst!==nd&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kf extends $l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=t_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new B,yo=new et;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ip,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yo.fromBufferAttribute(this,n),yo.applyMatrix3(e),this.setXY(n,yo.x,yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}}class x_ extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class y_ extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kM=0;const gn=new St,$c=new dn,jr=new B,on=new Va,Ys=new Va,At=new B;class Nr extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?y_:x_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(on.min,Ys.min),on.expandByPoint(At),At.addVectors(on.max,Ys.max),on.expandByPoint(At)):(on.expandByPoint(Ys.min),on.expandByPoint(Ys.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)At.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),At.add(jr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new B,l[b]=new B;const c=new B,d=new B,f=new B,h=new et,m=new et,x=new et,S=new B,p=new B;function u(b,H,y){c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,H),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,H),x.fromBufferAttribute(s,y),d.sub(c),f.sub(c),m.sub(h),x.sub(h);const T=1/(m.x*x.y-x.x*m.y);isFinite(T)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(T),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(T),o[b].add(S),o[H].add(S),o[y].add(S),l[b].add(p),l[H].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,H=v.length;b<H;++b){const y=v[b],T=y.start,W=y.count;for(let z=T,q=T+W;z<q;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const g=new B,M=new B,P=new B,R=new B;function A(b){P.fromBufferAttribute(r,b),R.copy(P);const H=o[b];g.copy(H),g.sub(P.multiplyScalar(P.dot(H))).normalize(),M.crossVectors(R,H);const T=M.dot(l[b])<0?-1:1;a.setXYZW(b,g.x,g.y,g.z,T)}for(let b=0,H=v.length;b<H;++b){const y=v[b],T=y.start,W=y.count;for(let z=T,q=T+W;z<q;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,d=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,x=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let u=0;u<d;u++)h[x++]=c[m++]}return new Yn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new St,nr=new bM,So=new Yf,Kp=new B,Mo=new B,Eo=new B,To=new B,Yc=new B,wo=new B,Zp=new B,Ao=new B;class jn extends dn{constructor(e=new Nr,n=new Kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Yc.fromBufferAttribute(f,e),a?wo.addScaledVector(Yc,d):wo.addScaledVector(Yc.sub(n),d))}n.add(wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(So.containsPoint(nr.origin)===!1&&(nr.intersectSphere(So,Kp)===null||nr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(Yp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Yp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const p=h[x],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const R=o.getX(M),A=o.getX(M+1),b=o.getX(M+2);r=Co(this,u,e,i,c,d,f,R,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=x,u=S;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),M=o.getX(p+2);r=Co(this,a,e,i,c,d,f,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const p=h[x],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const R=M,A=M+1,b=M+2;r=Co(this,u,e,i,c,d,f,R,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=x,u=S;p<u;p+=3){const v=p,g=p+1,M=p+2;r=Co(this,a,e,i,c,d,f,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function BM(t,e,n,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ao);return c<n.near||c>n.far?null:{distance:c,point:Ao.clone(),object:t}}function Co(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Mo),t.getVertexPosition(l,Eo),t.getVertexPosition(c,To);const d=BM(t,e,n,i,Mo,Eo,To,Zp);if(d){const f=new B;In.getBarycoord(Zp,Mo,Eo,To,f),r&&(d.uv=In.getInterpolatedAttribute(r,o,l,c,f,new et)),s&&(d.uv1=In.getInterpolatedAttribute(s,o,l,c,f,new et)),a&&(d.normal=In.getInterpolatedAttribute(a,o,l,c,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};In.getNormal(Mo,Eo,To,h.normal),d.face=h,d.barycoord=f}return d}class Ga extends Nr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xr(c,3)),this.setAttribute("normal",new xr(d,3)),this.setAttribute("uv",new xr(f,2));function x(S,p,u,v,g,M,P,R,A,b,H){const y=M/A,T=P/b,W=M/2,z=P/2,q=R/2,J=A+1,V=b+1;let Q=0,N=0;const X=new B;for(let K=0;K<V;K++){const ae=K*T-z;for(let Te=0;Te<J;Te++){const Oe=Te*y-W;X[S]=Oe*v,X[p]=ae*g,X[u]=q,c.push(X.x,X.y,X.z),X[S]=0,X[p]=0,X[u]=R>0?1:-1,d.push(X.x,X.y,X.z),f.push(Te/A),f.push(1-K/b),Q+=1}}for(let K=0;K<b;K++)for(let ae=0;ae<A;ae++){const Te=h+ae+J*K,Oe=h+ae+J*(K+1),j=h+(ae+1)+J*(K+1),ne=h+(ae+1)+J*K;l.push(Te,Oe,ne),l.push(Oe,j,ne),N+=6}o.addGroup(m,N,H),m+=N,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function zM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function S_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const HM={clone:bs,merge:zt};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends $l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new B,Qp=new et,Jp=new et;class xn extends M_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,qr=1;class WM extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Xr,qr,e,n);r.layers=this.layers,this.add(r);const s=new xn(Xr,qr,e,n);s.layers=this.layers,this.add(s);const a=new xn(Xr,qr,e,n);a.layers=this.layers,this.add(a);const o=new xn(Xr,qr,e,n);o.layers=this.layers,this.add(o);const l=new xn(Xr,qr,e,n);l.layers=this.layers,this.add(l);const c=new xn(Xr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class E_ extends Gt{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jM extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new E_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ga(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new jn(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=Un),new WM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Kc=new B,XM=new B,qM=new Ie;class lr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Kc.subVectors(i,n).cross(XM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qM.getNormalMatrix(e),r=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Yf,Ro=new B;class T_{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],x=r[9],S=r[10],p=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-u).normalize(),i[1].setComponents(l+s,h+c,p+m,M+u).normalize(),i[2].setComponents(l+a,h+d,p+x,M+v).normalize(),i[3].setComponents(l-a,h-d,p-x,M-v).normalize(),i[4].setComponents(l-o,h-f,p-S,M-g).normalize(),n===li)i[5].setComponents(l+o,h+f,p+S,M+g).normalize();else if(n===Al)i[5].setComponents(o,f,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ro.x=r.normal.x>0?e.max.x:e.min.x,Ro.y=r.normal.y>0?e.max.y:e.min.y,Ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $M(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],S=f[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const S=f[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Wa extends Nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],x=[],S=[],p=[];for(let u=0;u<d;u++){const v=u*h-a;for(let g=0;g<c;g++){const M=g*f-s;x.push(M,-v,0),S.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,M=v+c*(u+1),P=v+1+c*(u+1),R=v+1+c*u;m.push(g,M,R),m.push(M,P,R)}this.setIndex(m),this.setAttribute("position",new xr(x,3)),this.setAttribute("normal",new xr(S,3)),this.setAttribute("uv",new xr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_E=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:YM,alphahash_pars_fragment:KM,alphamap_fragment:ZM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:eE,aomap_fragment:tE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:aE,bsdfs:oE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:hE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:gE,color_vertex:vE,common:_E,cube_uv_reflection_fragment:xE,defaultnormal_vertex:yE,displacementmap_pars_vertex:SE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:TE,colorspace_fragment:wE,colorspace_pars_fragment:AE,envmap_fragment:CE,envmap_common_pars_fragment:RE,envmap_pars_fragment:PE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:HE,envmap_vertex:LE,fog_vertex:NE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:IE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:OE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:BE,lights_pars_begin:zE,lights_toon_fragment:VE,lights_toon_pars_fragment:GE,lights_phong_fragment:WE,lights_phong_pars_fragment:jE,lights_physical_fragment:XE,lights_physical_pars_fragment:qE,lights_fragment_begin:$E,lights_fragment_maps:YE,lights_fragment_end:KE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:e1,map_fragment:t1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:a1,morphinstance_vertex:o1,morphcolor_vertex:l1,morphnormal_vertex:c1,morphtarget_pars_vertex:u1,morphtarget_vertex:d1,normal_fragment_begin:f1,normal_fragment_maps:h1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:_1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:S1,opaque_fragment:M1,packing:E1,premultiplied_alpha_fragment:T1,project_vertex:w1,dithering_fragment:A1,dithering_pars_fragment:C1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:L1,shadowmap_vertex:N1,shadowmask_pars_fragment:D1,skinbase_vertex:U1,skinning_pars_vertex:I1,skinning_vertex:F1,skinnormal_vertex:O1,specularmap_fragment:k1,specularmap_pars_fragment:B1,tonemapping_fragment:z1,tonemapping_pars_fragment:H1,transmission_fragment:V1,transmission_pars_fragment:G1,uv_pars_fragment:W1,uv_pars_vertex:j1,uv_vertex:X1,worldpos_vertex:q1,background_vert:$1,background_frag:Y1,backgroundCube_vert:K1,backgroundCube_frag:Z1,cube_vert:Q1,cube_frag:J1,depth_vert:eT,depth_frag:tT,distanceRGBA_vert:nT,distanceRGBA_frag:iT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:aT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:dT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:vT,meshphysical_vert:_T,meshphysical_frag:xT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:ET,shadow_vert:TT,shadow_frag:wT,sprite_vert:AT,sprite_frag:CT},oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Vn={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Vn.physical={uniforms:zt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Po={r:0,b:0,g:0},rr=new gi,RT=new St;function PT(t,e,n,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function x(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function S(v){let g=!1;const M=x(v);M===null?u(o,l):M&&M.isColor&&(u(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,g){const M=x(g);M&&(M.isCubeTexture||M.mapping===Xl)?(d===void 0&&(d=new jn(new Ga(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:bs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),rr.copy(g.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(rr)),d.material.toneMapped=Ye.getTransfer(M.colorSpace)!==at,(f!==M||h!==M.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=M,h=M.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new jn(new Wa(2,2),new $i({name:"BackgroundMaterial",uniforms:bs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(Po,S_(t)),i.buffers.color.setClear(Po.r,Po.g,Po.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:p}}function bT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,T,W,z,q){let J=!1;const V=f(z,W,T);s!==V&&(s=V,c(s.object)),J=m(y,z,W,q),J&&x(y,z,W,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(y,T,W,z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,T,W){const z=W.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let J=q[T.id];J===void 0&&(J={},q[T.id]=J);let V=J[z];return V===void 0&&(V=h(l()),J[z]=V),V}function h(y){const T=[],W=[],z=[];for(let q=0;q<n;q++)T[q]=0,W[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,T,W,z){const q=s.attributes,J=T.attributes;let V=0;const Q=W.getAttributes();for(const N in Q)if(Q[N].location>=0){const K=q[N];let ae=J[N];if(ae===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function x(y,T,W,z){const q={},J=T.attributes;let V=0;const Q=W.getAttributes();for(const N in Q)if(Q[N].location>=0){let K=J[N];K===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),q[N]=ae,V++}s.attributes=q,s.attributesNum=V,s.index=z}function S(){const y=s.newAttributes;for(let T=0,W=y.length;T<W;T++)y[T]=0}function p(y){u(y,0)}function u(y,T){const W=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;W[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),q[y]!==T&&(t.vertexAttribDivisor(y,T),q[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let W=0,z=T.length;W<z;W++)T[W]!==y[W]&&(t.disableVertexAttribArray(W),T[W]=0)}function g(y,T,W,z,q,J,V){V===!0?t.vertexAttribIPointer(y,T,W,q,J):t.vertexAttribPointer(y,T,W,z,q,J)}function M(y,T,W,z){S();const q=z.attributes,J=W.getAttributes(),V=T.defaultAttributeValues;for(const Q in J){const N=J[Q];if(N.location>=0){let X=q[Q];if(X===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const K=X.normalized,ae=X.itemSize,Te=e.get(X);if(Te===void 0)continue;const Oe=Te.buffer,j=Te.type,ne=Te.bytesPerElement,fe=j===t.INT||j===t.UNSIGNED_INT||X.gpuType===Vf;if(X.isInterleavedBufferAttribute){const ce=X.data,Ne=ce.stride,Ae=X.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)u(N.location+ze,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<N.locationSize;ze++)p(N.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ze=0;ze<N.locationSize;ze++)g(N.location+ze,ae/N.locationSize,j,K,Ne*ne,(Ae+ae/N.locationSize*ze)*ne,fe)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)u(N.location+ce,X.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<N.locationSize;ce++)p(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ce=0;ce<N.locationSize;ce++)g(N.location+ce,ae/N.locationSize,j,K,ae*ne,ae/N.locationSize*ce*ne,fe)}}else if(V!==void 0){const K=V[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(N.location,K);break;case 3:t.vertexAttrib3fv(N.location,K);break;case 4:t.vertexAttrib4fv(N.location,K);break;default:t.vertexAttrib1fv(N.location,K)}}}}v()}function P(){b();for(const y in i){const T=i[y];for(const W in T){const z=T[W];for(const q in z)d(z[q].object),delete z[q];delete T[W]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const W in T){const z=T[W];for(const q in z)d(z[q].object),delete z[q];delete T[W]}delete i[y.id]}function A(y){for(const T in i){const W=i[T];if(W[y.id]===void 0)continue;const z=W[y.id];for(const q in z)d(z[q].object),delete z[q];delete W[y.id]}}function b(){H(),a=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function LT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let x=0;x<f;x++)m+=d[x];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],d[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let x=0;for(let S=0;S<f;S++)x+=d[S];for(let S=0;S<h.length;S++)n.update(x,i,h[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Fn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==oi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}function DT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=d(x,h,g,m);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,x){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=l.value,x!==!0||p===null){const u=m+S*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==S;++g,M+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function UT(t){let e=new WeakMap;function n(a,o){return o===ud?a.mapping=As:o===dd&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ud||o===dd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class IT extends M_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,em=[.125,.215,.35,.446,.526,.582],dr=20,Zc=new IT,tm=new Je;let Qc=null,Jc=0,eu=0,tu=!1;const cr=(1+Math.sqrt(5))/2,$r=1/cr,nm=[new B(-cr,$r,0),new B(cr,$r,0),new B(-$r,0,cr),new B($r,0,cr),new B(0,cr,-$r),new B(0,cr,$r),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ba,format:Fn,colorSpace:Qi,depthBuffer:!1},r=rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(s)),this._blurMaterial=OT(s,e,n)}return r}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const o=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(tm),d.toneMapping=Wi,d.autoClear=!1;const m=new Kf({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new jn(new Ga,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(tm),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;bo(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),S&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nm[(r-s-1)%nm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*dr-1),S=s/x,p=isFinite(s)?1+Math.floor(d*S):dr;p>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dr}`);const u=[];let v=0;for(let A=0;A<dr;++A){const b=A/S,H=Math.exp(-b*b/2);u.push(H),A===0?v+=H:A<p&&(v+=2*H)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-os?r-g+os:0),R=4*(this._cubeSize-M);bo(n,P,R,3*M,2*M),l.setRenderTarget(n),l.render(f,Zc)}}function FT(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+em.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-os?l=em[a-t+os-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,S=3,p=2,u=1,v=new Float32Array(S*x*m),g=new Float32Array(p*x*m),M=new Float32Array(u*x*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,b=R>2?0:-1,H=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];v.set(H,S*x*R),g.set(h,p*x*R);const y=[R,R,R,R,R,R];M.set(y,u*x*R)}const P=new Nr;P.setAttribute("position",new Yn(v,S)),P.setAttribute("uv",new Yn(g,p)),P.setAttribute("faceIndex",new Yn(M,u)),e.push(P),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function rm(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OT(t,e,n){const i=new Float32Array(dr),r=new B(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function sm(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function am(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ud||l===dd,d=l===As||l===Cs;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new im(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new im(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function BT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ko("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const S=h.morphAttributes[x];for(let p=0,u=S.length;p<u;p++)e.remove(S[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const S=m[x];for(let p=0,u=S.length;p<u;p++)e.update(S[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],R=v[g+1],A=v[g+2];h.push(P,R,R,A,A,P)}}else if(x!==void 0){const v=x.array;S=x.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,R=g+1,A=g+2;h.push(P,R,R,A,A,P)}}else return;const p=new(p_(h)?y_:x_)(h,1);p.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function HT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*a),n.update(m,i,1)}function c(h,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,h*a,x),n.update(m,i,x))}function d(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];n.update(p,i,1)}function f(h,m,x,S){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/a,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,S,0,x);let u=0;for(let v=0;v<x;v++)u+=m[v];for(let v=0;v<S.length;v++)n.update(u,i,S[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function VT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GT(t,e,n){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),p===!0&&(M=3);let P=o.attributes.position.count*M,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*f),b=new g_(A,P,R,f);b.type=oi,b.needsUpdate=!0;const H=M*4;for(let T=0;T<f;T++){const W=u[T],z=v[T],q=g[T],J=P*R*4*T;for(let V=0;V<W.count;V++){const Q=V*H;x===!0&&(r.fromBufferAttribute(W,V),A[J+Q+0]=r.x,A[J+Q+1]=r.y,A[J+Q+2]=r.z,A[J+Q+3]=0),S===!0&&(r.fromBufferAttribute(z,V),A[J+Q+4]=r.x,A[J+Q+5]=r.y,A[J+Q+6]=r.z,A[J+Q+7]=0),p===!0&&(r.fromBufferAttribute(q,V),A[J+Q+8]=r.x,A[J+Q+9]=r.y,A[J+Q+10]=r.z,A[J+Q+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new et(P,R)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function WT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class A_ extends Gt{constructor(e,n,i,r,s,a,o,l,c,d=gs){if(d!==gs&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===gs&&(i=wr),i===void 0&&d===Ps&&(i=Rs),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const C_=new Gt,om=new A_(1,1),R_=new g_,P_=new RM,b_=new E_,lm=[],cm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yl(t,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),wt(n,i)}}function KT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;dm.set(i),t.uniformMatrix3fv(this.addr,!1,dm),wt(n,i)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),wt(n,i)}}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(om.compareFunction=h_,s=om):s=C_,n.setTexture2D(e||s,r)}function ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P_,r)}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b_,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function uw(t){switch(t){case 5126:return jT;case 35664:return XT;case 35665:return qT;case 35666:return $T;case 35674:return YT;case 35675:return KT;case 35676:return ZT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}function dw(t,e){t.uniform1fv(this.addr,e)}function fw(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function hw(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function pw(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function mw(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gw(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vw(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _w(t,e){t.uniform1iv(this.addr,e)}function xw(t,e){t.uniform2iv(this.addr,e)}function yw(t,e){t.uniform3iv(this.addr,e)}function Sw(t,e){t.uniform4iv(this.addr,e)}function Mw(t,e){t.uniform1uiv(this.addr,e)}function Ew(t,e){t.uniform2uiv(this.addr,e)}function Tw(t,e){t.uniform3uiv(this.addr,e)}function ww(t,e){t.uniform4uiv(this.addr,e)}function Aw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||C_,s[a])}function Cw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||P_,s[a])}function Rw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||b_,s[a])}function Pw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||R_,s[a])}function bw(t){switch(t){case 5126:return dw;case 35664:return fw;case 35665:return hw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return Tw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Lw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uw(n.type)}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bw(n.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function hm(t,e){t.seq.push(e),t.map[e.id]=e}function Uw(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),a=nu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hm(n,c===void 0?new Lw(o,t,e):new Nw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Dw(o),hm(n,f)),n=f}}}class Zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Uw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Iw=37297;let Fw=0;function Ow(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function kw(t){const e=Ye.getPrimaries(Ye.workingColorSpace),n=Ye.getPrimaries(t);let i;switch(e===n?i="":e===wl&&n===Tl?i="LinearDisplayP3ToLinearSRGB":e===Tl&&n===wl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case ql:return[i,"LinearTransferOETF"];case Nn:case $f:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ow(t.getShaderSource(e),a)}else return r}function Bw(t,e){const n=kw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function zw(t,e){let n;switch(e){case JS:n="Linear";break;case eM:n="Reinhard";break;case tM:n="Cineon";break;case nM:n="ACESFilmic";break;case rM:n="AgX";break;case sM:n="Neutral";break;case iM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Lo=new B;function Hw(){Ye.getLuminanceCoefficients(Lo);const t=Lo.x.toFixed(4),e=Lo.y.toFixed(4),n=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Gw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ww(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ea(t){return t!==""}function gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(t){return t.replace(jw,qw)}const Xw=new Map;function qw(t,e){let n=Ue[e];if(n===void 0){const i=Xw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hd(n)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace($w,Yw)}function Yw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Zw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Jw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case t_:e="ENVMAP_BLENDING_MULTIPLY";break;case ZS:e="ENVMAP_BLENDING_MIX";break;case QS:e="ENVMAP_BLENDING_ADD";break}return e}function eA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Kw(n),c=Zw(n),d=Qw(n),f=Jw(n),h=eA(n),m=Vw(n),x=Gw(s),S=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ea).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ea).join(`
`),u.length>0&&(u+=`
`)):(p=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),u=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Wi?zw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Bw("linearToOutputTexel",n.outputColorSpace),Hw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),a=Hd(a),a=gm(a,n),a=vm(a,n),o=Hd(o),o=gm(o,n),o=vm(o,n),a=_m(a),o=_m(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+p+a,M=v+u+o,P=pm(r,r.VERTEX_SHADER,g),R=pm(r,r.FRAGMENT_SHADER,M);r.attachShader(S,P),r.attachShader(S,R),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(T){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(S).trim(),z=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(R).trim();let J=!0,V=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,P,R);else{const Q=mm(r,P,"vertex"),N=mm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+W+`
`+Q+`
`+N)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||q==="")&&(V=!1);V&&(T.diagnostics={runnable:J,programLog:W,vertexShader:{log:z,prefix:p},fragmentShader:{log:q,prefix:u}})}r.deleteShader(P),r.deleteShader(R),b=new Zo(r,S),H=Ww(r,S)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let H;this.getAttributes=function(){return H===void 0&&A(this),H};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,Iw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=R,this}let nA=0;class iA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rA(e),n.set(e,i)),i}}class rA{constructor(e){this.id=nA++,this.code=e,this.usedTimes=0}}function sA(t,e,n,i,r,s,a){const o=new v_,l=new iA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let x=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,T,W,z,q){const J=z.fog,V=q.geometry,Q=y.isMeshStandardMaterial?z.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||Q),X=N&&N.mapping===Xl?N.image.height:null,K=S[y.type];y.precision!==null&&(x=r.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=ae!==void 0?ae.length:0;let Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let j,ne,fe,ce;if(K){const qt=Vn[K];j=qt.vertexShader,ne=qt.fragmentShader}else j=y.vertexShader,ne=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),Ae=q.isInstancedMesh===!0,ze=q.isBatchedMesh===!0,Qe=!!y.map,He=!!y.matcap,L=!!N,nn=!!y.aoMap,ke=!!y.lightMap,We=!!y.bumpMap,Re=!!y.normalMap,it=!!y.displacementMap,Le=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,F=y.anisotropy>0,Y=y.clearcoat>0,ee=y.dispersion>0,$=y.iridescence>0,Se=y.sheen>0,le=y.transmission>0,ge=F&&!!y.anisotropyMap,je=Y&&!!y.clearcoatMap,re=Y&&!!y.clearcoatNormalMap,ve=Y&&!!y.clearcoatRoughnessMap,Pe=$&&!!y.iridescenceMap,be=$&&!!y.iridescenceThicknessMap,_e=Se&&!!y.sheenColorMap,Be=Se&&!!y.sheenRoughnessMap,De=!!y.specularMap,tt=!!y.specularColorMap,D=!!y.specularIntensityMap,he=le&&!!y.transmissionMap,G=le&&!!y.thicknessMap,Z=!!y.gradientMap,ue=!!y.alphaMap,pe=y.alphaTest>0,Ve=!!y.alphaHash,vt=!!y.extensions;let Xt=Wi;y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const Xe={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:ne,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:ze,batchingColor:ze&&q._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&q.instanceColor!==null,instancingMorph:Ae&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Qi,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:He,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:X,aoMap:nn,lightMap:ke,bumpMap:We,normalMap:Re,displacementMap:m&&it,emissiveMap:Le,normalMapObjectSpace:Re&&y.normalMapType===uM,normalMapTangentSpace:Re&&y.normalMapType===cM,metalnessMap:C,roughnessMap:E,anisotropy:F,anisotropyMap:ge,clearcoat:Y,clearcoatMap:je,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:$,iridescenceMap:Pe,iridescenceThicknessMap:be,sheen:Se,sheenColorMap:_e,sheenRoughnessMap:Be,specularMap:De,specularColorMap:tt,specularIntensityMap:D,transmission:le,transmissionMap:he,thicknessMap:G,gradientMap:Z,opaque:y.transparent===!1&&y.blending===ms&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:Ve,combine:y.combine,mapUv:Qe&&p(y.map.channel),aoMapUv:nn&&p(y.aoMap.channel),lightMapUv:ke&&p(y.lightMap.channel),bumpMapUv:We&&p(y.bumpMap.channel),normalMapUv:Re&&p(y.normalMap.channel),displacementMapUv:it&&p(y.displacementMap.channel),emissiveMapUv:Le&&p(y.emissiveMap.channel),metalnessMapUv:C&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:ge&&p(y.anisotropyMap.channel),clearcoatMapUv:je&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(y.sheenRoughnessMap.channel),specularMapUv:De&&p(y.specularMap.channel),specularColorMapUv:tt&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:he&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:ue&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(Qe||ue),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)T.push(W),T.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(g(T,y),M(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),y.push(o.mask)}function P(y){const T=S[y.type];let W;if(T){const z=Vn[T];W=HM.clone(z.uniforms)}else W=y.uniforms;return W}function R(y,T){let W;for(let z=0,q=d.length;z<q;z++){const J=d[z];if(J.cacheKey===T){W=J,++W.usedTimes;break}}return W===void 0&&(W=new tA(t,T,y,s),d.push(W)),W}function A(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function b(y){l.remove(y)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:H}}function aA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function oA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,x,S,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:S,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=S,u.group=p),e++,u}function o(f,h,m,x,S,p){const u=a(f,h,m,x,S,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,x,S,p){const u=a(f,h,m,x,S,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||oA),i.length>1&&i.sort(h||ym),r.length>1&&r.sort(h||ym)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function lA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Sm,t.set(i,[a])):r>=s.length?(a=new Sm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Je};break;case"SpotLight":n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function uA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dA=0;function fA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hA(t){const e=new cA,n=uA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new St,a=new St;function o(c){let d=0,f=0,h=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,x=0,S=0,p=0,u=0,v=0,g=0,M=0,P=0,R=0,A=0;c.sort(fA);for(let H=0,y=c.length;H<y;H++){const T=c[H],W=T.color,z=T.intensity,q=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=W.r*z,f+=W.g*z,h+=W.b*z;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],z);A++}else if(T.isDirectionalLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,N=n.get(T);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=V,m++}else if(T.isSpotLight){const V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(W).multiplyScalar(z),V.distance=q,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[S]=V;const Q=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,Q.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[S]=Q.matrix,T.castShadow){const N=n.get(T);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=J,M++}S++}else if(T.isRectAreaLight){const V=e.get(T);V.color.copy(W).multiplyScalar(z),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=V,p++}else if(T.isPointLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const Q=T.shadow,N=n.get(T);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,i.pointShadow[x]=N,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=T.shadow.matrix,g++}i.point[x]=V,x++}else if(T.isHemisphereLight){const V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(z),V.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[u]=V,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==m||b.pointLength!==x||b.spotLength!==S||b.rectAreaLength!==p||b.hemiLength!==u||b.numDirectionalShadows!==v||b.numPointShadows!==g||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,b.directionalLength=m,b.pointLength=x,b.spotLength=S,b.rectAreaLength=p,b.hemiLength=u,b.numDirectionalShadows=v,b.numPointShadows=g,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=A,i.version=dA++)}function l(c,d){let f=0,h=0,m=0,x=0,S=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(g.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function Mm(t){const e=new hA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function pA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mm(t),e.set(r,[o])):s>=a.length?(o=new Mm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class mA extends $l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gA extends $l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xA(t,e,n){let i=new T_;const r=new et,s=new et,a=new gt,o=new mA({depthPacking:lM}),l=new gA,c={},d=n.maxTextureSize,f={[qi]:tn,[tn]:qi,[Wn]:Wn},h=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:vA,fragmentShader:_A}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Nr;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new jn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_;let u=this.type;this.render=function(R,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const H=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Gi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const z=u!==ni&&this.type===ni,q=u===ni&&this.type!==ni;for(let J=0,V=R.length;J<V;J++){const Q=R[J],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null||z===!0||q===!0){const ae=this.type!==ni?{minFilter:Sn,magFilter:Sn}:{};N.map!==null&&N.map.dispose(),N.map=new Ar(r.x,r.y,ae),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const K=N.getViewportCount();for(let ae=0;ae<K;ae++){const Te=N.getViewport(ae);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),W.viewport(a),N.updateMatrices(Q,ae),i=N.getFrustum(),M(A,b,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&v(N,b),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(H,y,T)};function v(R,A){const b=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ar(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,S,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,b,m,S,null)}function g(R,A,b,H){let y=null;const T=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=b.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=y.uuid,z=A.uuid;let q=c[W];q===void 0&&(q={},c[W]=q);let J=q[z];J===void 0&&(J=y.clone(),q[z]=J,A.addEventListener("dispose",P)),y=J}if(y.visible=A.visible,y.wireframe=A.wireframe,H===ni?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=t.properties.get(y);W.light=b}return y}function M(R,A,b,H,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const z=e.update(R),q=R.material;if(Array.isArray(q)){const J=z.groups;for(let V=0,Q=J.length;V<Q;V++){const N=J[V],X=q[N.materialIndex];if(X&&X.visible){const K=g(R,X,H,y);R.onBeforeShadow(t,R,A,b,z,K,N),t.renderBufferDirect(b,null,z,K,R,N),R.onAfterShadow(t,R,A,b,z,K,N)}}}else if(q.visible){const J=g(R,q,H,y);R.onBeforeShadow(t,R,A,b,z,J,null),t.renderBufferDirect(b,null,z,J,R,null),R.onAfterShadow(t,R,A,b,z,J,null)}}const W=R.children;for(let z=0,q=W.length;z<q;z++)M(W[z],A,b,H,y)}function P(R){R.target.removeEventListener("dispose",P);for(const b in c){const H=c[b],y=R.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}const yA={[id]:rd,[sd]:ld,[ad]:cd,[ws]:od,[rd]:id,[ld]:sd,[cd]:ad,[od]:ws};function SA(t){function e(){let D=!1;const he=new gt;let G=null;const Z=new gt(0,0,0,0);return{setMask:function(ue){G!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){D=ue},setClear:function(ue,pe,Ve,vt,Xt){Xt===!0&&(ue*=vt,pe*=vt,Ve*=vt),he.set(ue,pe,Ve,vt),Z.equals(he)===!1&&(t.clearColor(ue,pe,Ve,vt),Z.copy(he))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,G=null,Z=null,ue=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?fe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(pe){G!==pe&&!D&&(t.depthMask(pe),G=pe)},setFunc:function(pe){if(he&&(pe=yA[pe]),Z!==pe){switch(pe){case id:t.depthFunc(t.NEVER);break;case rd:t.depthFunc(t.ALWAYS);break;case sd:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case ad:t.depthFunc(t.EQUAL);break;case od:t.depthFunc(t.GEQUAL);break;case ld:t.depthFunc(t.GREATER);break;case cd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){D=!1,G=null,Z=null,ue=null}}}function i(){let D=!1,he=null,G=null,Z=null,ue=null,pe=null,Ve=null,vt=null,Xt=null;return{setTest:function(Xe){D||(Xe?fe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!D&&(t.stencilMask(Xe),he=Xe)},setFunc:function(Xe,qt,Kn){(G!==Xe||Z!==qt||ue!==Kn)&&(t.stencilFunc(Xe,qt,Kn),G=Xe,Z=qt,ue=Kn)},setOp:function(Xe,qt,Kn){(pe!==Xe||Ve!==qt||vt!==Kn)&&(t.stencilOp(Xe,qt,Kn),pe=Xe,Ve=qt,vt=Kn)},setLocked:function(Xe){D=Xe},setClear:function(Xe){Xt!==Xe&&(t.clearStencil(Xe),Xt=Xe)},reset:function(){D=!1,he=null,G=null,Z=null,ue=null,pe=null,Ve=null,vt=null,Xt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,x=!1,S=null,p=null,u=null,v=null,g=null,M=null,P=null,R=new Je(0,0,0),A=0,b=!1,H=null,y=null,T=null,W=null,z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=V>=2);let N=null,X={};const K=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Te=new gt().fromArray(K),Oe=new gt().fromArray(ae);function j(D,he,G,Z){const ue=new Uint8Array(4),pe=t.createTexture();t.bindTexture(D,pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<G;Ve++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return pe}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(ws),ke(!1),We(bp),fe(t.CULL_FACE),L(Gi);function fe(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ne(D,he){return d[D]!==he?(t.bindFramebuffer(D,he),d[D]=he,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ae(D,he){let G=h,Z=!1;if(D){G=f.get(he),G===void 0&&(G=[],f.set(he,G));const ue=D.textures;if(G.length!==ue.length||G[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ve=ue.length;pe<Ve;pe++)G[pe]=t.COLOR_ATTACHMENT0+pe;G.length=ue.length,Z=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Z=!0);Z&&t.drawBuffers(G)}function ze(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Qe={[ur]:t.FUNC_ADD,[US]:t.FUNC_SUBTRACT,[IS]:t.FUNC_REVERSE_SUBTRACT};Qe[FS]=t.MIN,Qe[OS]=t.MAX;const He={[kS]:t.ZERO,[BS]:t.ONE,[zS]:t.SRC_COLOR,[td]:t.SRC_ALPHA,[XS]:t.SRC_ALPHA_SATURATE,[WS]:t.DST_COLOR,[VS]:t.DST_ALPHA,[HS]:t.ONE_MINUS_SRC_COLOR,[nd]:t.ONE_MINUS_SRC_ALPHA,[jS]:t.ONE_MINUS_DST_COLOR,[GS]:t.ONE_MINUS_DST_ALPHA,[qS]:t.CONSTANT_COLOR,[$S]:t.ONE_MINUS_CONSTANT_COLOR,[YS]:t.CONSTANT_ALPHA,[KS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,G,Z,ue,pe,Ve,vt,Xt,Xe){if(D===Gi){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(fe(t.BLEND),x=!0),D!==DS){if(D!==S||Xe!==b){if((p!==ur||g!==ur)&&(t.blendEquation(t.FUNC_ADD),p=ur,g=ur),Xe)switch(D){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,v=null,M=null,P=null,R.set(0,0,0),A=0,S=D,b=Xe}return}ue=ue||he,pe=pe||G,Ve=Ve||Z,(he!==p||ue!==g)&&(t.blendEquationSeparate(Qe[he],Qe[ue]),p=he,g=ue),(G!==u||Z!==v||pe!==M||Ve!==P)&&(t.blendFuncSeparate(He[G],He[Z],He[pe],He[Ve]),u=G,v=Z,M=pe,P=Ve),(vt.equals(R)===!1||Xt!==A)&&(t.blendColor(vt.r,vt.g,vt.b,Xt),R.copy(vt),A=Xt),S=D,b=!1}function nn(D,he){D.side===Wn?ce(t.CULL_FACE):fe(t.CULL_FACE);let G=D.side===tn;he&&(G=!G),ke(G),D.blending===ms&&D.transparent===!1?L(Gi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){H!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),H=D)}function We(D){D!==bS?(fe(t.CULL_FACE),D!==y&&(D===bp?t.cullFace(t.BACK):D===LS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=D}function Re(D){D!==T&&(J&&t.lineWidth(D),T=D)}function it(D,he,G){D?(fe(t.POLYGON_OFFSET_FILL),(W!==he||z!==G)&&(t.polygonOffset(he,G),W=he,z=G)):ce(t.POLYGON_OFFSET_FILL)}function Le(D){D?fe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+q-1),N!==D&&(t.activeTexture(D),N=D)}function E(D,he,G){G===void 0&&(N===null?G=t.TEXTURE0+q-1:G=N);let Z=X[G];Z===void 0&&(Z={type:void 0,texture:void 0},X[G]=Z),(Z.type!==D||Z.texture!==he)&&(N!==G&&(t.activeTexture(G),N=G),t.bindTexture(D,he||ne[D]),Z.type=D,Z.texture=he)}function F(){const D=X[N];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){Te.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function _e(D){Oe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Oe.copy(D))}function Be(D,he){let G=l.get(he);G===void 0&&(G=new WeakMap,l.set(he,G));let Z=G.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(he,D.name),G.set(D,Z))}function De(D,he){const Z=l.get(he).get(D);o.get(he)!==Z&&(t.uniformBlockBinding(he,Z,D.__bindingPointIndex),o.set(he,Z))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,X={},d={},f=new WeakMap,h=[],m=null,x=!1,S=null,p=null,u=null,v=null,g=null,M=null,P=null,R=new Je(0,0,0),A=0,b=!1,H=null,y=null,T=null,W=null,z=null,Te.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:ce,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:ze,setBlending:L,setMaterial:nn,setFlipSided:ke,setCullFace:We,setLineWidth:Re,setPolygonOffset:it,setScissorTest:Le,activeTexture:C,bindTexture:E,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:je,texStorage3D:re,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:be,viewport:_e,reset:tt}}function Em(t,e,n,i){const r=MA(i);switch(n){case a_:return t*e;case l_:return t*e;case c_:return t*e*2;case u_:return t*e/r.components*r.byteLength;case jf:return t*e/r.components*r.byteLength;case d_:return t*e*2/r.components*r.byteLength;case Xf:return t*e*2/r.components*r.byteLength;case o_:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case qf:return t*e*4/r.components*r.byteLength;case jo:case Xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case md:case vd:return Math.max(t,16)*Math.max(e,8)/4;case pd:case gd:return Math.max(t,8)*Math.max(e,8)/2;case _d:case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Id:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case f_:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MA(t){switch(t){case mi:case i_:return{byteLength:1,components:1};case ba:case r_:case Ba:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case wr:case Vf:case oi:return{byteLength:4,components:1};case s_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function EA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return m?new OffscreenCanvas(C,E):La("canvas")}function S(C,E,F){let Y=1;const ee=Le(C);if((ee.width>F||ee.height>F)&&(Y=F/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Y*ee.width),Se=Math.floor(Y*ee.height);f===void 0&&(f=x($,Se));const le=E?x($,Se):f;return le.width=$,le.height=Se,le.getContext("2d").drawImage(C,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Se+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Sn&&C.minFilter!==Un}function u(C){t.generateMipmap(C)}function v(C,E,F,Y,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=E;if(E===t.RED&&(F===t.FLOAT&&($=t.R32F),F===t.HALF_FLOAT&&($=t.R16F),F===t.UNSIGNED_BYTE&&($=t.R8)),E===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.R8UI),F===t.UNSIGNED_SHORT&&($=t.R16UI),F===t.UNSIGNED_INT&&($=t.R32UI),F===t.BYTE&&($=t.R8I),F===t.SHORT&&($=t.R16I),F===t.INT&&($=t.R32I)),E===t.RG&&(F===t.FLOAT&&($=t.RG32F),F===t.HALF_FLOAT&&($=t.RG16F),F===t.UNSIGNED_BYTE&&($=t.RG8)),E===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RG8UI),F===t.UNSIGNED_SHORT&&($=t.RG16UI),F===t.UNSIGNED_INT&&($=t.RG32UI),F===t.BYTE&&($=t.RG8I),F===t.SHORT&&($=t.RG16I),F===t.INT&&($=t.RG32I)),E===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RGB8UI),F===t.UNSIGNED_SHORT&&($=t.RGB16UI),F===t.UNSIGNED_INT&&($=t.RGB32UI),F===t.BYTE&&($=t.RGB8I),F===t.SHORT&&($=t.RGB16I),F===t.INT&&($=t.RGB32I)),E===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RGBA8UI),F===t.UNSIGNED_SHORT&&($=t.RGBA16UI),F===t.UNSIGNED_INT&&($=t.RGBA32UI),F===t.BYTE&&($=t.RGBA8I),F===t.SHORT&&($=t.RGBA16I),F===t.INT&&($=t.RGBA32I)),E===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),E===t.RGBA){const Se=ee?El:Ye.getTransfer(Y);F===t.FLOAT&&($=t.RGBA32F),F===t.HALF_FLOAT&&($=t.RGBA16F),F===t.UNSIGNED_BYTE&&($=Se===at?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(C,E){let F;return C?E===null||E===wr||E===Rs?F=t.DEPTH24_STENCIL8:E===oi?F=t.DEPTH32F_STENCIL8:E===ba&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wr||E===Rs?F=t.DEPTH_COMPONENT24:E===oi?F=t.DEPTH_COMPONENT32F:E===ba&&(F=t.DEPTH_COMPONENT16),F}function M(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){const E=C.target;E.removeEventListener("dispose",P),A(E),E.isVideoTexture&&d.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),H(E)}function A(C){const E=i.get(C);if(E.__webglInit===void 0)return;const F=C.source,Y=h.get(F);if(Y){const ee=Y[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys(Y).length===0&&h.delete(F)}i.remove(C)}function b(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const F=C.source,Y=h.get(F);delete Y[E.__cacheKey],a.memory.textures--}function H(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let ee=0;ee<E.__webglFramebuffer[Y].length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[Y][ee]);else t.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)t.deleteFramebuffer(E.__webglFramebuffer[Y]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=C.textures;for(let Y=0,ee=F.length;Y<ee;Y++){const $=i.get(F[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(C)}let y=0;function T(){y=0}function W(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function q(C,E){const F=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(F,C,E);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+E)}function J(C,E){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Oe(F,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+E)}function V(C,E){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Oe(F,C,E);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+E)}function Q(C,E){const F=i.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+E)}const N={[fd]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[hd]:t.MIRRORED_REPEAT},X={[Sn]:t.NEAREST,[aM]:t.NEAREST_MIPMAP_NEAREST,[uo]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[Cc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},K={[dM]:t.NEVER,[vM]:t.ALWAYS,[fM]:t.LESS,[h_]:t.LEQUAL,[hM]:t.EQUAL,[gM]:t.GEQUAL,[pM]:t.GREATER,[mM]:t.NOTEQUAL};function ae(C,E){if(E.type===oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===Cc||E.magFilter===uo||E.magFilter===gr||E.minFilter===Un||E.minFilter===Cc||E.minFilter===uo||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,N[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,N[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,N[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,X[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==uo&&E.minFilter!==gr||E.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Te(C,E){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const Y=E.source;let ee=h.get(Y);ee===void 0&&(ee={},h.set(Y,ee));const $=z(E);if($!==C.__cacheKey){ee[$]===void 0&&(ee[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[$].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&b(E)),C.__cacheKey=$,C.__webglTexture=ee[$].texture}return F}function Oe(C,E,F){let Y=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=t.TEXTURE_3D);const ee=Te(C,E),$=E.source;n.bindTexture(Y,C.__webglTexture,t.TEXTURE0+F);const Se=i.get($);if($.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+F);const le=Ye.getPrimaries(Ye.workingColorSpace),ge=E.colorSpace===bi?null:Ye.getPrimaries(E.colorSpace),je=E.colorSpace===bi||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let re=S(E.image,!1,r.maxTextureSize);re=it(E,re);const ve=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let be=v(E.internalFormat,ve,Pe,E.colorSpace,E.isVideoTexture);ae(Y,E);let _e;const Be=E.mipmaps,De=E.isVideoTexture!==!0,tt=Se.__version===void 0||ee===!0,D=$.dataReady,he=M(E,re);if(E.isDepthTexture)be=g(E.format===Ps,E.type),tt&&(De?n.texStorage2D(t.TEXTURE_2D,1,be,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,ve,Pe,null));else if(E.isDataTexture)if(Be.length>0){De&&tt&&n.texStorage2D(t.TEXTURE_2D,he,be,Be[0].width,Be[0].height);for(let G=0,Z=Be.length;G<Z;G++)_e=Be[G],De?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,Pe,_e.data):n.texImage2D(t.TEXTURE_2D,G,be,_e.width,_e.height,0,ve,Pe,_e.data);E.generateMipmaps=!1}else De?(tt&&n.texStorage2D(t.TEXTURE_2D,he,be,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,Pe,re.data)):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,ve,Pe,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,be,Be[0].width,Be[0].height,re.depth);for(let G=0,Z=Be.length;G<Z;G++)if(_e=Be[G],E.format!==Fn)if(ve!==null)if(De){if(D)if(E.layerUpdates.size>0){const ue=Em(_e.width,_e.height,E.format,E.type);for(const pe of E.layerUpdates){const Ve=_e.data.subarray(pe*ue/_e.data.BYTES_PER_ELEMENT,(pe+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,pe,_e.width,_e.height,1,ve,Ve,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,re.depth,ve,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,be,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,re.depth,ve,Pe,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,be,_e.width,_e.height,re.depth,0,ve,Pe,_e.data)}else{De&&tt&&n.texStorage2D(t.TEXTURE_2D,he,be,Be[0].width,Be[0].height);for(let G=0,Z=Be.length;G<Z;G++)_e=Be[G],E.format!==Fn?ve!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,G,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,Pe,_e.data):n.texImage2D(t.TEXTURE_2D,G,be,_e.width,_e.height,0,ve,Pe,_e.data)}else if(E.isDataArrayTexture)if(De){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,be,re.width,re.height,re.depth),D)if(E.layerUpdates.size>0){const G=Em(re.width,re.height,E.format,E.type);for(const Z of E.layerUpdates){const ue=re.data.subarray(Z*G/re.data.BYTES_PER_ELEMENT,(Z+1)*G/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,ve,Pe,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Pe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,ve,Pe,re.data);else if(E.isData3DTexture)De?(tt&&n.texStorage3D(t.TEXTURE_3D,he,be,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Pe,re.data)):n.texImage3D(t.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,ve,Pe,re.data);else if(E.isFramebufferTexture){if(tt)if(De)n.texStorage2D(t.TEXTURE_2D,he,be,re.width,re.height);else{let G=re.width,Z=re.height;for(let ue=0;ue<he;ue++)n.texImage2D(t.TEXTURE_2D,ue,be,G,Z,0,ve,Pe,null),G>>=1,Z>>=1}}else if(Be.length>0){if(De&&tt){const G=Le(Be[0]);n.texStorage2D(t.TEXTURE_2D,he,be,G.width,G.height)}for(let G=0,Z=Be.length;G<Z;G++)_e=Be[G],De?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve,Pe,_e):n.texImage2D(t.TEXTURE_2D,G,be,ve,Pe,_e);E.generateMipmaps=!1}else if(De){if(tt){const G=Le(re);n.texStorage2D(t.TEXTURE_2D,he,be,G.width,G.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Pe,re)}else n.texImage2D(t.TEXTURE_2D,0,be,ve,Pe,re);p(E)&&u(Y),Se.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function j(C,E,F){if(E.image.length!==6)return;const Y=Te(C,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const $=i.get(ee);if(ee.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+F);const Se=Ye.getPrimaries(Ye.workingColorSpace),le=E.colorSpace===bi?null:Ye.getPrimaries(E.colorSpace),ge=E.colorSpace===bi||Se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!je&&!re?ve[Z]=S(E.image[Z],!0,r.maxCubemapSize):ve[Z]=re?E.image[Z].image:E.image[Z],ve[Z]=it(E,ve[Z]);const Pe=ve[0],be=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),Be=v(E.internalFormat,be,_e,E.colorSpace),De=E.isVideoTexture!==!0,tt=$.__version===void 0||Y===!0,D=ee.dataReady;let he=M(E,Pe);ae(t.TEXTURE_CUBE_MAP,E);let G;if(je){De&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Be,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){G=ve[Z].mipmaps;for(let ue=0;ue<G.length;ue++){const pe=G[ue];E.format!==Fn?be!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,pe.width,pe.height,be,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Be,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,pe.width,pe.height,be,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Be,pe.width,pe.height,0,be,_e,pe.data)}}}else{if(G=E.mipmaps,De&&tt){G.length>0&&he++;const Z=Le(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,be,_e,ve[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,ve[Z].width,ve[Z].height,0,be,_e,ve[Z].data);for(let ue=0;ue<G.length;ue++){const Ve=G[ue].image[Z].image;De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Ve.width,Ve.height,be,_e,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Be,Ve.width,Ve.height,0,be,_e,Ve.data)}}else{De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,_e,ve[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,be,_e,ve[Z]);for(let ue=0;ue<G.length;ue++){const pe=G[ue];De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,be,_e,pe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Be,be,_e,pe.image[Z])}}}p(E)&&u(t.TEXTURE_CUBE_MAP),$.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ne(C,E,F,Y,ee,$){const Se=s.convert(F.format,F.colorSpace),le=s.convert(F.type),ge=v(F.internalFormat,Se,le,F.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>$),ve=Math.max(1,E.height>>$);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,$,ge,re,ve,E.depth,0,Se,le,null):n.texImage2D(ee,$,ge,re,ve,0,Se,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),We(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ee,i.get(F).__webglTexture,0,ke(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ee,i.get(F).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,E,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const Y=E.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,$=g(E.stencilBuffer,ee),Se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=ke(E);We(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,$,E.width,E.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,$,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,$,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,C)}else{const Y=E.textures;for(let ee=0;ee<Y.length;ee++){const $=Y[ee],Se=s.convert($.format,$.colorSpace),le=s.convert($.type),ge=v($.internalFormat,Se,le,$.colorSpace),je=ke(E);F&&We(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ge,E.width,E.height):We(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,ge,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const Y=i.get(E.depthTexture).__webglTexture,ee=ke(E);if(E.depthTexture.format===gs)We(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(E.depthTexture.format===Ps)We(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const E=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=Y}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ce(E.__webglFramebuffer,C)}else if(F){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[Y],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,E,F){const Y=i.get(C);E!==void 0&&ne(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ne(C)}function ze(C){const E=C.texture,F=i.get(C),Y=i.get(E);C.addEventListener("dispose",R);const ee=C.textures,$=C.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=E.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let ge=0;ge<E.mipmaps.length;ge++)F.__webglFramebuffer[le][ge]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Se)for(let le=0,ge=ee.length;le<ge;le++){const je=i.get(ee[le]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const ge=ee[le];F.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const je=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=v(ge.internalFormat,je,re,ge.colorSpace,C.isXRRenderTarget===!0),Pe=ke(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ve,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,F.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ne(F.__webglFramebuffer[le][ge],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else ne(F.__webglFramebuffer[le],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,ge=ee.length;le<ge;le++){const je=ee[le],re=i.get(je);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ae(t.TEXTURE_2D,je),ne(F.__webglFramebuffer,C,je,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),p(je)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Y.__webglTexture),ae(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ne(F.__webglFramebuffer[ge],C,E,t.COLOR_ATTACHMENT0,le,ge);else ne(F.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,le,0);p(E)&&u(le),n.unbindTexture()}C.depthBuffer&&Ne(C)}function Qe(C){const E=C.textures;for(let F=0,Y=E.length;F<Y;F++){const ee=E[F];if(p(ee)){const $=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ee).__webglTexture;n.bindTexture($,Se),u($),n.unbindTexture()}}}const He=[],L=[];function nn(C){if(C.samples>0){if(We(C)===!1){const E=C.textures,F=C.width,Y=C.height;let ee=t.COLOR_BUFFER_BIT;const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(C),le=E.length>1;if(le)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const je=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,F,Y,0,0,F,Y,ee,t.NEAREST),l===!0&&(He.length=0,L.length=0,He.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push($),L.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const je=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ke(C){return Math.min(r.maxSamples,C.samples)}function We(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(C){const E=a.render.frame;d.get(C)!==E&&(d.set(C,E),C.update())}function it(C,E){const F=C.colorSpace,Y=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Qi&&F!==bi&&(Ye.getTransfer(F)===at?(Y!==Fn||ee!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=T,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Ae,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=We}function TA(t,e){function n(i,r=bi){let s;const a=Ye.getTransfer(r);if(i===mi)return t.UNSIGNED_BYTE;if(i===Gf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===s_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===i_)return t.BYTE;if(i===r_)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===Vf)return t.INT;if(i===wr)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===Ba)return t.HALF_FLOAT;if(i===a_)return t.ALPHA;if(i===o_)return t.RGB;if(i===Fn)return t.RGBA;if(i===l_)return t.LUMINANCE;if(i===c_)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===u_)return t.RED;if(i===jf)return t.RED_INTEGER;if(i===d_)return t.RG;if(i===Xf)return t.RG_INTEGER;if(i===qf)return t.RGBA_INTEGER;if(i===jo||i===Xo||i===qo||i===$o)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pd||i===md||i===gd||i===vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_d||i===xd||i===yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_d||i===xd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===Pd||i===bd||i===Ld||i===Nd||i===Dd||i===Ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Md)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ud)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===Id||i===Fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yo)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Id)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f_||i===Od||i===kd||i===Bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class wA extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ta extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Gt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:CA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends Us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,x=null;const S=new PA,p=n.getContextAttributes();let u=null,v=null;const g=[],M=[],P=new et;let R=null;const A=new xn;A.layers.enable(1),A.viewport=new gt;const b=new xn;b.layers.enable(2),b.viewport=new gt;const H=[A,b],y=new wA;y.layers.enable(1),y.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=g[j];return ne===void 0&&(ne=new iu,g[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=g[j];return ne===void 0&&(ne=new iu,g[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=g[j];return ne===void 0&&(ne=new iu,g[j]=ne),ne.getHandSpace()};function z(j){const ne=M.indexOf(j.inputSource);if(ne===-1)return;const fe=g[ne];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let j=0;j<g.length;j++){const ne=M[j];ne!==null&&(M[j]=null,g[j].disconnect(ne))}T=null,W=null,S.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ar(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,fe=null,ce=null;p.depth&&(ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?Ps:gs,fe=p.stencil?Rs:wr);const Ne={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ar(h.textureWidth,h.textureHeight,{format:Fn,type:mi,depthTexture:new A_(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(j){for(let ne=0;ne<j.removed.length;ne++){const fe=j.removed[ne],ce=M.indexOf(fe);ce>=0&&(M[ce]=null,g[ce].disconnect(fe))}for(let ne=0;ne<j.added.length;ne++){const fe=j.added[ne];let ce=M.indexOf(fe);if(ce===-1){for(let Ae=0;Ae<g.length;Ae++)if(Ae>=M.length){M.push(fe),ce=Ae;break}else if(M[Ae]===null){M[Ae]=fe,ce=Ae;break}if(ce===-1)break}const Ne=g[ce];Ne&&Ne.connect(fe)}}const V=new B,Q=new B;function N(j,ne,fe){V.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const ce=V.distanceTo(Q),Ne=ne.projectionMatrix.elements,Ae=fe.projectionMatrix.elements,ze=Ne[14]/(Ne[10]-1),Qe=Ne[14]/(Ne[10]+1),He=(Ne[9]+1)/Ne[5],L=(Ne[9]-1)/Ne[5],nn=(Ne[8]-1)/Ne[0],ke=(Ae[8]+1)/Ae[0],We=ze*nn,Re=ze*ke,it=ce/(-nn+ke),Le=it*-nn;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Le),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ne[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=ze+it,E=Qe+it,F=We-Le,Y=Re+(ce-Le),ee=He*Qe/E*C,$=L*Qe/E*C;j.projectionMatrix.makePerspective(F,Y,ee,$,C,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function X(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,fe=j.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),y.near=b.near=A.near=ne,y.far=b.far=A.far=fe,(T!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,W=y.far);const ce=j.parent,Ne=y.cameras;X(y,ce);for(let Ae=0;Ae<Ne.length;Ae++)X(Ne[Ae],ce);Ne.length===2?N(y,A,b):y.projectionMatrix.copy(A.projectionMatrix),K(j,y,ce)};function K(j,ne,fe){fe===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let ae=null;function Te(j,ne){if(d=ne.getViewerPose(c||a),x=ne,d!==null){const fe=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ce=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ae=0;Ae<fe.length;Ae++){const ze=fe[Ae];let Qe=null;if(m!==null)Qe=m.getViewport(ze);else{const L=f.getViewSubImage(h,ze);Qe=L.viewport,Ae===0&&(e.setRenderTargetTextures(v,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let He=H[Ae];He===void 0&&(He=new xn,He.layers.enable(Ae),He.viewport=new gt,H[Ae]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ae===0&&(y.matrix.copy(He.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(He)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ae=f.getDepthInformation(fe[0]);Ae&&Ae.isValid&&Ae.texture&&S.init(e,Ae,r.renderState)}}for(let fe=0;fe<g.length;fe++){const ce=M[fe],Ne=g[fe];ce!==null&&Ne!==void 0&&Ne.update(ce,ne,c||a)}ae&&ae(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const Oe=new w_;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(j){ae=j},this.dispose=function(){}}}const sr=new gi,LA=new St;function NA(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,S_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;g&&(p.envMap.value=g,sr.copy(M),sr.x*=-1,sr.y*=-1,sr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(sr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(x(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(v,P);const R=e.render.frame;s[v.id]!==R&&(h(v),s[v.id]=R)}function d(v){const g=f();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,A=M.length;R<A;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let H=0,y=b.length;H<y;H++){const T=b[H];if(m(T,R,H,P)===!0){const W=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let q=0;for(let J=0;J<z.length;J++){const V=z[J],Q=S(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,W+q,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,P){const R=v.value,A=g+"_"+M;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const b=P[A];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return P[A]=R,!0}else if(b.equals(R)===!1)return b.copy(R),!0}return!1}function x(v){const g=v.uniforms;let M=0;const P=16;for(let A=0,b=g.length;A<b;A++){const H=Array.isArray(g[A])?g[A]:[g[A]];for(let y=0,T=H.length;y<T;y++){const W=H[y],z=Array.isArray(W.value)?W.value:[W.value];for(let q=0,J=z.length;q<J;q++){const V=z[q],Q=S(V),N=M%P,X=N%Q.boundary,K=N+X;M+=X,K!==0&&P-K<Q.storage&&(M+=P-K),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=Q.storage}}}const R=M%P;return R>0&&(M+=P-R),v.__size=M,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class UA{constructor(e={}){const{canvas:n=xM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),x=new Int32Array(4);let S=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,R=0,A=null,b=-1,H=null;const y=new gt,T=new gt;let W=null;const z=new Je(0);let q=0,J=n.width,V=n.height,Q=1,N=null,X=null;const K=new gt(0,0,J,V),ae=new gt(0,0,J,V);let Te=!1;const Oe=new T_;let j=!1,ne=!1;const fe=new St,ce=new St,Ne=new B,Ae=new gt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function He(){return A===null?Q:1}let L=i;function nn(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",pe,!1),L===null){const U="webgl2";if(L=nn(U,w),L===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ke,We,Re,it,Le,C,E,F,Y,ee,$,Se,le,ge,je,re,ve,Pe,be,_e,Be,De,tt,D;function he(){ke=new BT(L),ke.init(),De=new TA(L,ke),We=new NT(L,ke,e,De),Re=new SA(L),We.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),it=new VT(L),Le=new aA,C=new EA(L,ke,Re,Le,We,De,it),E=new UT(g),F=new kT(g),Y=new $M(L),tt=new bT(L,Y),ee=new zT(L,Y,it,tt),$=new WT(L,ee,Y,it),be=new GT(L,We,C),re=new DT(Le),Se=new sA(g,E,F,ke,We,tt,re),le=new NA(g,Le),ge=new lA,je=new pA(ke),Pe=new PT(g,E,F,Re,$,h,l),ve=new xA(g,$,We),D=new DA(L,it,We,Re),_e=new LT(L,ke,it),Be=new HT(L,ke,it),it.programs=Se.programs,g.capabilities=We,g.extensions=ke,g.properties=Le,g.renderLists=ge,g.shadowMap=ve,g.state=Re,g.info=it}he();const G=new bA(g,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(J,V,!1))},this.getSize=function(w){return w.set(J,V)},this.setSize=function(w,U,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,V=U,n.width=Math.floor(w*Q),n.height=Math.floor(U*Q),O===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(J*Q,V*Q).floor()},this.setDrawingBufferSize=function(w,U,O){J=w,V=U,Q=O,n.width=Math.floor(w*O),n.height=Math.floor(U*O),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,U,O,k){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,U,O,k),Re.viewport(y.copy(K).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,U,O,k){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,U,O,k),Re.scissor(T.copy(ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){Re.setScissorTest(Te=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,U=!0,O=!0){let k=0;if(w){let I=!1;if(A!==null){const se=A.texture.format;I=se===qf||se===Xf||se===jf}if(I){const se=A.texture.type,de=se===mi||se===wr||se===ba||se===Rs||se===Gf||se===Wf,xe=Pe.getClearColor(),ye=Pe.getClearAlpha(),we=xe.r,Ce=xe.g,Me=xe.b;de?(m[0]=we,m[1]=Ce,m[2]=Me,m[3]=ye,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=we,x[1]=Ce,x[2]=Me,x[3]=ye,L.clearBufferiv(L.COLOR,0,x))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),je.dispose(),Le.dispose(),E.dispose(),F.dispose(),$.dispose(),tt.dispose(),D.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",Jf),G.removeEventListener("sessionend",eh),Ji.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=it.autoReset,U=ve.enabled,O=ve.autoUpdate,k=ve.needsUpdate,I=ve.type;he(),it.autoReset=w,ve.enabled=U,ve.autoUpdate=O,ve.needsUpdate=k,ve.type=I}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){const U=w.target;U.removeEventListener("dispose",Ve),vt(U)}function vt(w){Xt(w),Le.remove(w)}function Xt(w){const U=Le.get(w).programs;U!==void 0&&(U.forEach(function(O){Se.releaseProgram(O)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,O,k,I,se){U===null&&(U=ze);const de=I.isMesh&&I.matrixWorld.determinant()<0,xe=D_(w,U,O,k,I);Re.setMaterial(k,de);let ye=O.index,we=1;if(k.wireframe===!0){if(ye=ee.getWireframeAttribute(O),ye===void 0)return;we=2}const Ce=O.drawRange,Me=O.attributes.position;let Ke=Ce.start*we,rt=(Ce.start+Ce.count)*we;se!==null&&(Ke=Math.max(Ke,se.start*we),rt=Math.min(rt,(se.start+se.count)*we)),ye!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,ye.count)):Me!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Me.count));const ft=rt-Ke;if(ft<0||ft===1/0)return;tt.setup(I,k,xe,O,ye);let rn,qe=_e;if(ye!==null&&(rn=Y.get(ye),qe=Be,qe.setIndex(rn)),I.isMesh)k.wireframe===!0?(Re.setLineWidth(k.wireframeLinewidth*He()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(I.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*He()),I.isLineSegments?qe.setMode(L.LINES):I.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else I.isPoints?qe.setMode(L.POINTS):I.isSprite&&qe.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ee=I._multiDrawStarts,Pt=I._multiDrawCounts,$e=I._multiDrawCount,wn=ye?Y.get(ye).bytesPerElement:1,Dr=Le.get(k).currentProgram.getUniforms();for(let sn=0;sn<$e;sn++)Dr.setValue(L,"_gl_DrawID",sn),qe.render(Ee[sn]/wn,Pt[sn])}else if(I.isInstancedMesh)qe.renderInstances(Ke,ft,I.count);else if(O.isInstancedBufferGeometry){const Ee=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Pt=Math.min(O.instanceCount,Ee);qe.renderInstances(Ke,ft,Pt)}else qe.render(Ke,ft)};function Xe(w,U,O){w.transparent===!0&&w.side===Wn&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,Xa(w,U,O),w.side=qi,w.needsUpdate=!0,Xa(w,U,O),w.side=Wn):Xa(w,U,O)}this.compile=function(w,U,O=null){O===null&&(O=w),p=je.get(O),p.init(U),v.push(p),O.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),w!==O&&w.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const se=I.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const xe=se[de];Xe(xe,O,I),k.add(xe)}else Xe(se,O,I),k.add(se)}),v.pop(),p=null,k},this.compileAsync=function(w,U,O=null){const k=this.compile(w,U,O);return new Promise(I=>{function se(){if(k.forEach(function(de){Le.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){I(w);return}setTimeout(se,10)}ke.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let qt=null;function Kn(w){qt&&qt(w)}function Jf(){Ji.stop()}function eh(){Ji.start()}const Ji=new w_;Ji.setAnimationLoop(Kn),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){qt=w,G.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},G.addEventListener("sessionstart",Jf),G.addEventListener("sessionend",eh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,A),p=je.get(w,v.length),p.init(U),v.push(p),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Oe.setFromProjectionMatrix(ce),ne=this.localClippingEnabled,j=re.init(this.clippingPlanes,ne),S=ge.get(w,u.length),S.init(),u.push(S),G.enabled===!0&&G.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&Kl(se,U,-1/0,g.sortObjects)}Kl(w,U,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(N,X),Qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(S,w),this.info.render.frame++,j===!0&&re.beginShadows();const O=p.state.shadowsArray;ve.render(O,w,U),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=S.opaque,I=S.transmissive;if(p.setupLights(),U.isArrayCamera){const se=U.cameras;if(I.length>0)for(let de=0,xe=se.length;de<xe;de++){const ye=se[de];nh(k,I,w,ye)}Qe&&Pe.render(w);for(let de=0,xe=se.length;de<xe;de++){const ye=se[de];th(S,w,ye,ye.viewport)}}else I.length>0&&nh(k,I,w,U),Qe&&Pe.render(w),th(S,w,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,U),tt.resetDefaultState(),b=-1,H=null,v.pop(),v.length>0?(p=v[v.length-1],j===!0&&re.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Kl(w,U,O,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){k&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const de=$.update(w),xe=w.material;xe.visible&&S.push(w,de,xe,O,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const de=$.update(w),xe=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(xe)){const ye=de.groups;for(let we=0,Ce=ye.length;we<Ce;we++){const Me=ye[we],Ke=xe[Me.materialIndex];Ke&&Ke.visible&&S.push(w,de,Ke,O,Ae.z,Me)}}else xe.visible&&S.push(w,de,xe,O,Ae.z,null)}}const se=w.children;for(let de=0,xe=se.length;de<xe;de++)Kl(se[de],U,O,k)}function th(w,U,O,k){const I=w.opaque,se=w.transmissive,de=w.transparent;p.setupLightsView(O),j===!0&&re.setGlobalState(g.clippingPlanes,O),k&&Re.viewport(y.copy(k)),I.length>0&&ja(I,U,O),se.length>0&&ja(se,U,O),de.length>0&&ja(de,U,O),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function nh(w,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ar(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ba:mi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const se=p.state.transmissionRenderTarget[k.id],de=k.viewport||y;se.setSize(de.z,de.w);const xe=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(z),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),Qe&&Pe.render(O);const ye=g.toneMapping;g.toneMapping=Wi;const we=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),j===!0&&re.setGlobalState(g.clippingPlanes,k),ja(w,O,k),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,Ke=U.length;Me<Ke;Me++){const rt=U[Me],ft=rt.object,rn=rt.geometry,qe=rt.material,Ee=rt.group;if(qe.side===Wn&&ft.layers.test(k.layers)){const Pt=qe.side;qe.side=tn,qe.needsUpdate=!0,ih(ft,O,k,rn,qe,Ee),qe.side=Pt,qe.needsUpdate=!0,Ce=!0}}Ce===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}g.setRenderTarget(xe),g.setClearColor(z,q),we!==void 0&&(k.viewport=we),g.toneMapping=ye}function ja(w,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,se=w.length;I<se;I++){const de=w[I],xe=de.object,ye=de.geometry,we=k===null?de.material:k,Ce=de.group;xe.layers.test(O.layers)&&ih(xe,U,O,ye,we,Ce)}}function ih(w,U,O,k,I,se){w.onBeforeRender(g,U,O,k,I,se),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(g,U,O,k,w,se),I.transparent===!0&&I.side===Wn&&I.forceSinglePass===!1?(I.side=tn,I.needsUpdate=!0,g.renderBufferDirect(O,U,k,I,w,se),I.side=qi,I.needsUpdate=!0,g.renderBufferDirect(O,U,k,I,w,se),I.side=Wn):g.renderBufferDirect(O,U,k,I,w,se),w.onAfterRender(g,U,O,k,I,se)}function Xa(w,U,O){U.isScene!==!0&&(U=ze);const k=Le.get(w),I=p.state.lights,se=p.state.shadowsArray,de=I.state.version,xe=Se.getParameters(w,I.state,se,U,O),ye=Se.getProgramCacheKey(xe);let we=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?F:E).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",Ve),we=new Map,k.programs=we);let Ce=we.get(ye);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===de)return sh(w,xe),Ce}else xe.uniforms=Se.getUniforms(w),w.onBeforeCompile(xe,g),Ce=Se.acquireProgram(xe,ye),we.set(ye,Ce),k.uniforms=xe.uniforms;const Me=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=re.uniform),sh(w,xe),k.needsLights=I_(w),k.lightsStateVersion=de,k.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function rh(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Zo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function sh(w,U){const O=Le.get(w);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function D_(w,U,O,k,I){U.isScene!==!0&&(U=ze),C.resetTextureUnits();const se=U.fog,de=k.isMeshStandardMaterial?U.environment:null,xe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qi,ye=(k.isMeshStandardMaterial?F:E).get(k.envMap||de),we=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,rt=!!O.morphAttributes.color;let ft=Wi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=g.toneMapping);const rn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,qe=rn!==void 0?rn.length:0,Ee=Le.get(k),Pt=p.state.lights;if(j===!0&&(ne===!0||w!==H)){const mn=w===H&&k.id===b;re.setState(k,w,mn)}let $e=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Pt.state.version||Ee.outputColorSpace!==xe||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==ye||k.fog===!0&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==we||Ee.vertexTangents!==Ce||Ee.morphTargets!==Me||Ee.morphNormals!==Ke||Ee.morphColors!==rt||Ee.toneMapping!==ft||Ee.morphTargetsCount!==qe)&&($e=!0):($e=!0,Ee.__version=k.version);let wn=Ee.currentProgram;$e===!0&&(wn=Xa(k,U,I));let Dr=!1,sn=!1,Zl=!1;const pt=wn.getUniforms(),_i=Ee.uniforms;if(Re.useProgram(wn.program)&&(Dr=!0,sn=!0,Zl=!0),k.id!==b&&(b=k.id,sn=!0),Dr||H!==w){We.reverseDepthBuffer?(fe.copy(w.projectionMatrix),SM(fe),MM(fe),pt.setValue(L,"projectionMatrix",fe)):pt.setValue(L,"projectionMatrix",w.projectionMatrix),pt.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=pt.map.cameraPosition;mn!==void 0&&mn.setValue(L,Ne.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,sn=!0,Zl=!0)}if(I.isSkinnedMesh){pt.setOptional(L,I,"bindMatrix"),pt.setOptional(L,I,"bindMatrixInverse");const mn=I.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),pt.setValue(L,"boneTexture",mn.boneTexture,C))}I.isBatchedMesh&&(pt.setOptional(L,I,"batchingTexture"),pt.setValue(L,"batchingTexture",I._matricesTexture,C),pt.setOptional(L,I,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",I._indirectTexture,C),pt.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",I._colorsTexture,C));const Ql=O.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0)&&be.update(I,O,wn),(sn||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,pt.setValue(L,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(_i.envMap.value=ye,_i.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(_i.envMapIntensity.value=U.environmentIntensity),sn&&(pt.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&U_(_i,Zl),se&&k.fog===!0&&le.refreshFogUniforms(_i,se),le.refreshMaterialUniforms(_i,k,Q,V,p.state.transmissionRenderTarget[w.id]),Zo.upload(L,rh(Ee),_i,C)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Zo.upload(L,rh(Ee),_i,C),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(L,"center",I.center),pt.setValue(L,"modelViewMatrix",I.modelViewMatrix),pt.setValue(L,"normalMatrix",I.normalMatrix),pt.setValue(L,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const mn=k.uniformsGroups;for(let Jl=0,F_=mn.length;Jl<F_;Jl++){const ah=mn[Jl];D.update(ah,wn),D.bind(ah,wn)}}return wn}function U_(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function I_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,O){Le.get(w.texture).__webglTexture=U,Le.get(w.depthTexture).__webglTexture=O;const k=Le.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const O=Le.get(w);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,O=0){A=w,P=U,R=O;let k=!0,I=null,se=!1,de=!1;if(w){const ye=Le.get(w);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(ye.__hasExternalTextures)C.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Me=w.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Le.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(de=!0);const Ce=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?I=Ce[U][O]:I=Ce[U],se=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?I=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[O]:I=Ce,y.copy(w.viewport),T.copy(w.scissor),W=w.scissorTest}else y.copy(K).multiplyScalar(Q).floor(),T.copy(ae).multiplyScalar(Q).floor(),W=Te;if(Re.bindFramebuffer(L.FRAMEBUFFER,I)&&k&&Re.drawBuffers(w,I),Re.viewport(y),Re.scissor(T),Re.setScissorTest(W),se){const ye=Le.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,O)}else if(de){const ye=Le.get(w.texture),we=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,we)}b=-1},this.readRenderTargetPixels=function(w,U,O,k,I,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Re.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ye=w.texture,we=ye.format,Ce=ye.type;if(!We.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&O>=0&&O<=w.height-I&&L.readPixels(U,O,k,I,De.convert(we),De.convert(Ce),se)}finally{const ye=A!==null?Le.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,U,O,k,I,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){const ye=w.texture,we=ye.format,Ce=ye.type;if(!We.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&O>=0&&O<=w.height-I){Re.bindFramebuffer(L.FRAMEBUFFER,xe);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(U,O,k,I,De.convert(we),De.convert(Ce),0);const Ke=A!==null?Le.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Ke);const rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yM(L,rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Me),L.deleteSync(rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,O=0){w.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-O),I=Math.floor(w.image.width*k),se=Math.floor(w.image.height*k),de=U!==null?U.x:0,xe=U!==null?U.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,de,xe,I,se),Re.unbindTexture()},this.copyTextureToTexture=function(w,U,O=null,k=null,I=0){w.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],I=arguments[3]||0,O=null);let se,de,xe,ye,we,Ce;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,xe=O.min.x,ye=O.min.y):(se=w.image.width,de=w.image.height,xe=0,ye=0),k!==null?(we=k.x,Ce=k.y):(we=0,Ce=0);const Me=De.convert(U.format),Ke=De.convert(U.type);C.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Pt=w.isCompressedTexture?w.mipmaps[I]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,we,Ce,se,de,Me,Ke,Pt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,we,Ce,Pt.width,Pt.height,Me,Pt.data):L.texSubImage2D(L.TEXTURE_2D,I,we,Ce,se,de,Me,Ke,Pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),I===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,U,O=null,k=null,I=0){w.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],I=arguments[4]||0);let se,de,xe,ye,we,Ce,Me,Ke,rt;const ft=w.isCompressedTexture?w.mipmaps[I]:w.image;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,xe=O.max.z-O.min.z,ye=O.min.x,we=O.min.y,Ce=O.min.z):(se=ft.width,de=ft.height,xe=ft.depth,ye=0,we=0,Ce=0),k!==null?(Me=k.x,Ke=k.y,rt=k.z):(Me=0,Ke=0,rt=0);const rn=De.convert(U.format),qe=De.convert(U.type);let Ee;if(U.isData3DTexture)C.setTexture3D(U,0),Ee=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Pt=L.getParameter(L.UNPACK_ROW_LENGTH),$e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wn=L.getParameter(L.UNPACK_SKIP_PIXELS),Dr=L.getParameter(L.UNPACK_SKIP_ROWS),sn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ee,I,Me,Ke,rt,se,de,xe,rn,qe,ft.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,I,Me,Ke,rt,se,de,xe,rn,ft.data):L.texSubImage3D(Ee,I,Me,Ke,rt,se,de,xe,rn,qe,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sn),I===0&&U.generateMipmaps&&L.generateMipmap(Ee),Re.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,Re.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$f?"display-p3":"srgb",n.unpackColorSpace=Ye.workingColorSpace===ql?"display-p3":"srgb"}}class IA extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Tm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class FA{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const OA=new FA;class Qf{constructor(e){this.manager=e!==void 0?e:OA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qf.DEFAULT_MATERIAL_NAME="__DEFAULT";class kA extends Qf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tm.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=La("img");function l(){d(),Tm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class BA extends Qf{constructor(e){super(e)}load(e,n,i,r){const s=new Gt,a=new kA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);const zA=["./img/models/apple.jpg","./img/models/by-model/iphone-15-pro-max.jpg","./img/models/by-model/iphone-13.jpg","./img/models/by-model/galaxy-s24.jpg","./img/models/by-model/pixel-8.jpg","./img/models/macbook.jpg","./img/models/watch.jpg","./img/models/by-model/ipad-air.png"];function L_(){const t=ie.useRef(null);return ie.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=t.current;if(!n)return;const i=()=>window.innerWidth,r=()=>window.innerHeight;let s;try{s=new UA({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.setSize(i(),r()),s.setClearColor(0,0),n.appendChild(s.domElement);const a=new IA,o=new xn(55,i()/r(),.1,100);o.position.z=16;const l=12,c=7,d=4,f=i()<720?8:14,h=[],m=[],x=[],S=[],p=new BA;zA.forEach((H,y)=>{p.load(H,T=>{T.colorSpace=Nn,S.push(T);const W=T.image.width,z=T.image.height,q=W/z,J=new Wa(q,1);m.push(J);const V=new Kf({map:T,transparent:!0,side:Wn});x.push(V);const Q=y<6?2:1;for(let N=0;N<Q;N++){const X=new ta,K=new jn(J,V);X.add(K);const ae=1.1+Math.random()*1.3;if(X.scale.setScalar(ae),X.position.set((Math.random()-.5)*2*l,(Math.random()-.5)*2*c,(Math.random()-.5)*2*d),X.rotation.set((Math.random()-.5)*.5,(Math.random()-.5)*.6,(Math.random()-.5)*.3),X.userData={v:[(Math.random()-.5)*.018,(Math.random()-.5)*.018,(Math.random()-.5)*.01],ry:(Math.random()-.5)*.004,phase:Math.random()*6.28},a.add(X),h.push(X),h.length>=f)return}})});const u={x:0,y:0},v={x:0,y:0},g=H=>{u.x=H.clientX/i()*2-1,u.y=H.clientY/r()*2-1};e||window.addEventListener("pointermove",g,{passive:!0});const M=()=>{o.aspect=i()/r(),o.updateProjectionMatrix(),s.setSize(i(),r())};window.addEventListener("resize",M);let P=0;const R=()=>{P+=.01;for(const H of h){const y=H.userData,T=y.v;H.position.x+=T[0],H.position.y+=T[1],H.position.z+=T[2],(H.position.x>l||H.position.x<-l)&&(T[0]*=-1),(H.position.y>c||H.position.y<-c)&&(T[1]*=-1),(H.position.z>d||H.position.z<-d)&&(T[2]*=-1),H.rotation.y+=y.ry,H.rotation.z=Math.sin(P+y.phase)*.08}v.x+=(u.x-v.x)*.04,v.y+=(u.y-v.y)*.04,a.rotation.y=v.x*.1,a.rotation.x=v.y*.06};let A;const b=()=>{R(),s.render(a,o),A=requestAnimationFrame(b)};if(e)setTimeout(()=>{R(),s.render(a,o)},400);else{const H=()=>{document.hidden?cancelAnimationFrame(A):A=requestAnimationFrame(b)};document.addEventListener("visibilitychange",H),n._onVis=H,A=requestAnimationFrame(b)}return()=>{cancelAnimationFrame(A),window.removeEventListener("pointermove",g),window.removeEventListener("resize",M),n._onVis&&document.removeEventListener("visibilitychange",n._onVis),m.forEach(H=>H.dispose()),x.forEach(H=>H.dispose()),S.forEach(H=>H.dispose()),s.dispose(),s.domElement.parentNode&&s.domElement.parentNode.removeChild(s.domElement)}},[]),_.jsx("div",{className:"three-bg","aria-hidden":"true",ref:t})}function N_(t=[]){ie.useLayoutEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.body.classList.add("reveal-on");const n=Array.from(document.querySelectorAll(".service, .feature, .step, .gallery figure, .avis, .faq__item, .apropos__media, .finalcta, .tarifs-cta, .section__title, .section__lead, .brand-card, .buysell__card")),i=o=>o.classList.add("in"),r=o=>{const l=o.getBoundingClientRect();return l.top<window.innerHeight-20&&l.bottom>0};n.forEach(o=>{r(o)&&i(o)});const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&(i(l.target),s.unobserve(l.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});n.forEach(o=>{o.classList.contains("in")||s.observe(o)});const a=setTimeout(()=>n.forEach(i),1500);return()=>{clearTimeout(a),s.disconnect(),document.body.classList.remove("reveal-on")}},t)}function HA(){return _.jsx("section",{className:"section",id:"tarifs-cta",children:_.jsxs("div",{className:"container tarifs-cta",children:[_.jsxs("div",{children:[_.jsx("p",{className:"section__eyebrow",children:"Tarifs"}),_.jsx("h2",{className:"section__title",children:"Des prix clairs, 30 à 40 € moins chers"}),_.jsx("p",{className:"section__lead",style:{marginBottom:0},children:"Choisissez votre marque (Apple, Samsung, Xiaomi, Huawei, Pixel, iPad) et découvrez le tarif de chaque modèle, pièce et main-d'œuvre comprises."})]}),_.jsx($n,{to:"/tarifs",className:"btn btn--primary btn--lg",children:"Voir les tarifs →"})]})})}function VA(){const[t,e]=ie.useState(null);return N_(),ie.useEffect(()=>{const n=sessionStorage.getItem("prefill");if(n){try{e({...JSON.parse(n),_t:Date.now()})}catch{}sessionStorage.removeItem("prefill")}const i=sessionStorage.getItem("scrollTo");i&&(sessionStorage.removeItem("scrollTo"),setTimeout(()=>{var r;return(r=document.getElementById(i))==null?void 0:r.scrollIntoView({behavior:"smooth"})},120))},[]),_.jsxs(_.Fragment,{children:[_.jsx(Jv,{}),_.jsx(L_,{}),_.jsx(Zv,{}),_.jsxs("main",{children:[_.jsx(pS,{}),_.jsx(xS,{}),_.jsx(HA,{}),_.jsx(SS,{}),_.jsx(RS,{}),_.jsx(MS,{}),_.jsx(ES,{}),_.jsx(wS,{prefill:t}),_.jsx(PS,{})]}),_.jsx(Qv,{})]})}const GA={"iPhone 16 Pro Max":"./img/models/by-model/iphone-16-pro-max.png","iPhone 16 Pro":"./img/models/by-model/iphone-16-pro.jpg","iPhone 16":"./img/models/by-model/iphone-16.jpg","iPhone 15 Pro Max":"./img/models/by-model/iphone-15-pro-max.jpg","iPhone 15":"./img/models/by-model/iphone-15.jpg","iPhone 14 Pro Max":"./img/models/by-model/iphone-14-pro-max.jpg","iPhone 14":"./img/models/by-model/iphone-14.jpg","iPhone 13 Pro Max":"./img/models/by-model/iphone-13-pro-max.jpg","iPhone 13":"./img/models/by-model/iphone-13.jpg","iPhone 12 Pro Max":"./img/models/by-model/iphone-12-pro-max.png","iPhone 12":"./img/models/by-model/iphone-12.png","iPhone 11 Pro Max":"./img/models/by-model/iphone-11-pro-max.jpg","iPhone 11":"./img/models/by-model/iphone-11.jpg","iPhone XR":"./img/models/by-model/iphone-xr.jpg","iPhone X":"./img/models/by-model/iphone-x.jpg","iPhone 8 / SE 2020":"./img/models/by-model/iphone-8-se-2020.jpg","iPhone 7":"./img/models/by-model/iphone-7.jpg","Galaxy S24 Ultra":"./img/models/by-model/galaxy-s24-ultra.jpg","Galaxy S24":"./img/models/by-model/galaxy-s24.jpg","Galaxy S23":"./img/models/by-model/galaxy-s23.png","Galaxy S22":"./img/models/by-model/galaxy-s22.png","Galaxy S21":"./img/models/by-model/galaxy-s21.png","Galaxy A54":"./img/models/by-model/galaxy-a54.jpg","Galaxy A53":"./img/models/by-model/galaxy-a53.png","Galaxy A34":"./img/models/by-model/galaxy-a34.png","Galaxy A14":"./img/models/by-model/galaxy-a14.jpg","Xiaomi 13":"./img/models/by-model/xiaomi-13.jpg","Xiaomi 12":"./img/models/by-model/xiaomi-12.jpg","Redmi Note 13":"./img/models/by-model/redmi-note-13.jpg","Redmi Note 12":"./img/models/by-model/redmi-note-12.jpg","Redmi 12":"./img/models/by-model/redmi-12.jpg","P40 Pro":"./img/models/by-model/p40-pro.jpg","P30 Pro":"./img/models/by-model/p30-pro.jpg","P30 Lite":"./img/models/by-model/p30-lite.jpg","Mate 20 Pro":"./img/models/by-model/mate-20-pro.jpg","Pixel 8 Pro":"./img/models/by-model/pixel-8-pro.jpg","Pixel 8":"./img/models/by-model/pixel-8.jpg","Pixel 7":"./img/models/by-model/pixel-7.jpg","Pixel 6":"./img/models/by-model/pixel-6.jpg",'iPad Pro 12.9"':"./img/models/by-model/ipad-pro-12-9.jpg",'iPad Pro 11"':"./img/models/by-model/ipad-pro-11.jpg","iPad Air":"./img/models/by-model/ipad-air.png","iPad 10 / 9":"./img/models/by-model/ipad-10-9.jpg","iPad mini":"./img/models/by-model/ipad-mini.png"},WA=[...new Set(pi.map(t=>t.marque))],Vd={Apple:{c:"#1d1d1f",abbr:"🍎"},Samsung:{c:"#1428a0",abbr:"SA"},Xiaomi:{c:"#ff6900",abbr:"MI"},Huawei:{c:"#cf0a2c",abbr:"HW"},Google:{c:"#4285f4",abbr:"G"},iPad:{c:"#555555",abbr:"iP"}},jA=t=>{var e;return((e=Vd[t])==null?void 0:e.abbr)??t.slice(0,2).toUpperCase()},XA=t=>pi.filter(e=>e.marque===t).length,wm={Apple:"./img/models/apple.jpg",Samsung:"./img/models/samsung.jpg",Xiaomi:"./img/models/xiaomi.jpg",Huawei:"./img/models/huawei.jpg",Google:"./img/models/google.jpg",iPad:"./img/models/ipad.png"};function qA({onReserver:t,onDevis:e,marque:n,setMarque:i}){var o;const[r,s]=ie.useState("");ie.useEffect(()=>{s("")},[n]);const a=ie.useMemo(()=>{if(!n)return[];const l=r.trim().toLowerCase();return pi.filter(c=>c.marque===n&&(l===""||c.modele.toLowerCase().includes(l)))},[n,r]);return _.jsx("section",{className:"section section--alt",id:"tarifs",children:_.jsxs("div",{className:"container",children:[_.jsx("p",{className:"section__eyebrow",children:"Tarifs"}),!n&&_.jsxs(_.Fragment,{children:[_.jsx("h2",{className:"section__title",children:"Choisissez votre marque"}),_.jsxs("p",{className:"section__lead",children:["Sélectionnez la marque de votre appareil pour voir le tarif de chaque modèle. Des prix ",_.jsx("strong",{children:"30 à 40 € moins chers que la concurrence"}),"."]}),_.jsx("div",{className:"brands",children:WA.map(l=>{var c;return _.jsxs("button",{className:"brand-card",onClick:()=>i(l),style:{"--bc":((c=Vd[l])==null?void 0:c.c)||"#2563eb"},children:[_.jsx("span",{className:"brand-card__logo",children:jA(l)}),_.jsx("span",{className:"brand-card__name",children:l}),_.jsxs("span",{className:"brand-card__count",children:[XA(l)," modèles"]}),_.jsx("span",{className:"brand-card__go",children:"Voir les modèles →"})]},l)})})]}),n&&_.jsxs(_.Fragment,{children:[_.jsx("button",{className:"btn btn--ghost tarifs__back",onClick:()=>i(null),children:"← Toutes les marques"}),_.jsxs("div",{className:"tarifs-head",children:[_.jsx("div",{className:"tarifs-head__photo",style:{"--bc":((o=Vd[n])==null?void 0:o.c)||"#2563eb"},children:_.jsx("img",{src:wm[n],alt:`Téléphone ${n}`,loading:"lazy"})}),_.jsxs("div",{children:[_.jsxs("h2",{className:"section__title",style:{marginTop:0},children:["Réparations ",n]}),_.jsx("p",{className:"section__lead",style:{marginBottom:0},children:"Tarifs par modèle, pièce et main-d'œuvre comprises — 30 à 40 € moins chers que la concurrence. Cliquez sur « Réserver » pour prendre rendez-vous."})]})]}),_.jsx("div",{className:"tarifs__bar",children:_.jsx("input",{type:"search",placeholder:`Rechercher un modèle ${n}…`,value:r,onChange:l=>s(l.target.value)})}),_.jsx("div",{className:"table__wrap",children:_.jsxs("table",{className:"table",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"Modèle"}),ps.map(l=>_.jsx("th",{children:l.nom},l.cle)),_.jsx("th",{})]})}),_.jsx("tbody",{children:a.length===0?_.jsx("tr",{children:_.jsx("td",{className:"na",colSpan:ps.length+2,children:"Aucun modèle trouvé."})}):a.map(l=>_.jsxs("tr",{children:[_.jsxs("td",{className:"model-cell",children:[_.jsx("img",{className:"model-thumb",src:GA[l.modele]||wm[l.marque],alt:`Téléphone ${l.modele}`,loading:"lazy"}),_.jsx("span",{children:l.modele})]}),ps.map(c=>_.jsx("td",{className:l[c.cle]==null?"na":"prix",children:l[c.cle]==null?"—":`${l[c.cle]} €`},c.cle)),_.jsx("td",{children:_.jsx("button",{className:"table__reserver",onClick:()=>t(l.marque,l.modele),children:"Réserver"})})]},l.modele))})]})}),_.jsxs("p",{className:"tarifs__note",children:["🛡️ ",gS,"."]}),_.jsxs("p",{className:"tarifs__note",children:["Modèle non listé ou réparation spécifique (carte mère, haut-parleur, micro…) ?"," ",_.jsx("button",{className:"linklike linklike--accent",onClick:e,children:"Demandez un devis gratuit"}),"."]})]})]})})}function $A(){const t=zf(),[e,n]=ie.useState(null);N_([e]),ie.useEffect(()=>{window.scrollTo(0,0)},[e]);function i(s,a){sessionStorage.setItem("prefill",JSON.stringify({marque:s,modele:a})),sessionStorage.setItem("scrollTo","rdv"),t("/")}function r(){sessionStorage.setItem("scrollTo","rdv"),t("/")}return _.jsxs(_.Fragment,{children:[_.jsx(Jv,{}),_.jsx(L_,{}),_.jsx(Zv,{}),_.jsx("main",{children:_.jsx(qA,{marque:e,setMarque:n,onReserver:i,onDevis:r})}),_.jsx(Qv,{})]})}function YA(){const t=new Date().getFullYear();return _.jsxs(_.Fragment,{children:[_.jsx("header",{className:"nav",children:_.jsxs("div",{className:"container nav__inner",children:[_.jsxs($n,{to:"/",className:"brand",children:[_.jsx("span",{className:"brand__mark",children:"MK"})," Phone"]}),_.jsx($n,{to:"/",className:"btn btn--ghost",children:"← Retour au site"})]})}),_.jsx("main",{className:"section",children:_.jsxs("div",{className:"container legal",children:[_.jsx("h1",{className:"section__title",children:"Mentions légales"}),_.jsx("p",{className:"legal__note",children:"Modèle à compléter avec vos informations réelles (SIRET, adresse, hébergeur…)."}),_.jsx("h2",{children:"Éditeur du site"}),_.jsxs("p",{children:["MK Phone — Réparation de téléphone",_.jsx("br",{}),"Téléphone : ",kt.tel,_.jsx("br",{}),"E-mail : ",kt.email,_.jsx("br",{}),"Zone d'intervention : Île-de-France",_.jsx("br",{}),"SIRET : ",_.jsx("em",{children:"à compléter"})," — Adresse : ",_.jsx("em",{children:"à compléter"})]}),_.jsx("h2",{children:"Responsable de la publication"}),_.jsx("p",{children:"MK Phone."}),_.jsx("h2",{children:"Hébergement"}),_.jsxs("p",{children:["Site hébergé par ",_.jsx("em",{children:"à compléter"})," (ex. Netlify, Vercel, GitHub Pages, OVH)."]}),_.jsx("h2",{children:"Crédits photos"}),_.jsx("p",{children:"Photos des appareils et des réparations : Wikimedia Commons (CC BY / CC BY-SA) — Apple (Hajoon0102), Samsung (C.Stadler/Bwag), Xiaomi (Maksdroider), Huawei (X-SHLIED), Google (IXTA9839), iPad (ajay_suresh), MacBook (Premeditated), Apple Watch (iGeeksBlog), photo « réparation » du hero (Redaktion NdW) et divers contributeurs pour les photos de réparation (écran, batterie, connecteur, caméra, vitre, désoxydation)."}),_.jsx("h2",{children:"Propriété intellectuelle"}),_.jsx("p",{children:"L'ensemble des contenus de ce site (textes, images, mise en page) est la propriété de MK Phone, sauf mention contraire. Toute reproduction sans autorisation est interdite."}),_.jsx("h2",{children:"Données personnelles"}),_.jsxs("p",{children:["Les informations transmises via le formulaire de rendez-vous (nom, téléphone, e-mail) sont utilisées uniquement pour traiter votre demande et ne sont ni vendues ni cédées. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à ",kt.email,"."]}),_.jsx("h2",{children:"Garantie"}),_.jsx("p",{children:"Les batteries sont garanties 6 mois. Les écrans sont garantis de 3 mois à 1 an selon la gamme choisie (compatible ou premium). La garantie ne couvre pas les dommages ultérieurs (chocs, oxydation, casse)."})]})}),_.jsx("footer",{className:"footer",children:_.jsxs("div",{className:"container footer__bottom",children:[_.jsxs("span",{children:["© ",t," MK Phone. Tous droits réservés."]}),_.jsx("span",{children:_.jsx($n,{to:"/",children:"Accueil"})})]})})]})}ru.createRoot(document.getElementById("root")).render(_.jsx(Fm.StrictMode,{children:_.jsx(uS,{children:_.jsxs(iS,{children:[_.jsx(Wo,{path:"/",element:_.jsx(VA,{})}),_.jsx(Wo,{path:"/tarifs",element:_.jsx($A,{})}),_.jsx(Wo,{path:"/mentions-legales",element:_.jsx(YA,{})})]})})}));
