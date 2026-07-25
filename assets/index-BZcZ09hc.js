function c0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function u0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},Ol={},$m={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),d0=Symbol.for("react.portal"),f0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),g0=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),_0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),wh=Symbol.iterator;function S0(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Km=Object.assign,Zm={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||Ym}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qm(){}Qm.prototype=Ds.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||Ym}var of=af.prototype=new Qm;of.constructor=af;Km(of,Ds.prototype);of.isPureReactComponent=!0;var Ah=Array.isArray,Jm=Object.prototype.hasOwnProperty,lf={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!eg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fa,type:t,key:s,ref:a,props:r,_owner:lf.current}}function M0(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function E0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E0(""+t.key):e.toString(36)}function Bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fa:case d0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+uc(a,0):i,Ah(r)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),Bo(r,e,n,"",function(c){return c})):r!=null&&(cf(r)&&(r=M0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ah(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+uc(s,o);a+=Bo(s,e,n,l,r)}else if(l=S0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,o++),a+=Bo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return Bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function T0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},zo={transition:null},w0={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:zo,ReactCurrentOwner:lf};function ng(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Ds;Oe.Fragment=f0;Oe.Profiler=p0;Oe.PureComponent=af;Oe.StrictMode=h0;Oe.Suspense=_0;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;Oe.act=ng;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Km({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:a}};Oe.createContext=function(t){return t={$$typeof:g0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:m0,_context:t},t.Consumer=t};Oe.createElement=tg;Oe.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:v0,render:t}};Oe.isValidElement=cf;Oe.lazy=function(t){return{$$typeof:y0,_payload:{_status:-1,_result:t},_init:T0}};Oe.memo=function(t,e){return{$$typeof:x0,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};Oe.unstable_act=ng;Oe.useCallback=function(t,e){return jt.current.useCallback(t,e)};Oe.useContext=function(t){return jt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return jt.current.useEffect(t,e)};Oe.useId=function(){return jt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return jt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};Oe.useRef=function(t){return jt.current.useRef(t)};Oe.useState=function(t){return jt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return jt.current.useTransition()};Oe.version="18.3.1";$m.exports=Oe;var se=$m.exports;const ig=u0(se),A0=c0({__proto__:null,default:ig},[se]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=se,R0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),b0=Object.prototype.hasOwnProperty,L0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N0={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)b0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R0,type:t,key:s,ref:a,props:r,_owner:L0.current}}Ol.Fragment=P0;Ol.jsx=rg;Ol.jsxs=rg;qm.exports=Ol;var y=qm.exports,vu={},sg={exports:{}},mn={},ag={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Y){var Z=N.length;N.push(Y);e:for(;0<Z;){var oe=Z-1>>>1,Se=N[oe];if(0<r(Se,Y))N[oe]=Y,N[Z]=Se,Z=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Y=N[0],Z=N.pop();if(Z!==Y){N[0]=Z;e:for(var oe=0,Se=N.length,Fe=Se>>>1;oe<Fe;){var k=2*(oe+1)-1,j=N[k],ie=k+1,le=N[ie];if(0>r(j,Z))ie<Se&&0>r(le,j)?(N[oe]=le,N[ie]=Z,oe=ie):(N[oe]=j,N[k]=Z,oe=k);else if(ie<Se&&0>r(le,Z))N[oe]=le,N[ie]=Z,oe=ie;else break e}}return Y}function r(N,Y){var Z=N.sortIndex-Y.sortIndex;return Z!==0?Z:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=N)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(N){if(x=!1,g(N),!_)if(n(l)!==null)_=!0,V(P);else{var Y=n(c);Y!==null&&Q(M,Y.startTime-N)}}function P(N,Y){_=!1,x&&(x=!1,u(b),b=-1),m=!0;var Z=h;try{for(g(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||N&&!w());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var Se=oe(f.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),g(Y)}else i(l);f=n(l)}if(f!==null)var Fe=!0;else{var k=n(c);k!==null&&Q(M,k.startTime-Y),Fe=!1}return Fe}finally{f=null,h=Z,m=!1}}var C=!1,A=null,b=-1,K=5,S=-1;function w(){return!(t.unstable_now()-S<K)}function W(){if(A!==null){var N=t.unstable_now();S=N;var Y=!0;try{Y=A(!0,N)}finally{Y?H():(C=!1,A=null)}}else C=!1}var H;if(typeof v=="function")H=function(){v(W)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ee=X.port2;X.port1.onmessage=W,H=function(){ee.postMessage(null)}}else H=function(){p(W,0)};function V(N){A=N,C||(C=!0,H())}function Q(N,Y){b=p(function(){N(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,V(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return N()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=h;h=N;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(N,Y,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,N={id:d++,callback:Y,priorityLevel:N,startTime:Z,expirationTime:Se,sortIndex:-1},Z>oe?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(x?(u(b),b=-1):x=!0,Q(M,Z-oe))):(N.sortIndex=Se,e(l,N),_||m||(_=!0,V(P))),N},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(N){var Y=h;return function(){var Z=h;h=Y;try{return N.apply(this,arguments)}finally{h=Z}}}})(og);ag.exports=og;var D0=ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=se,pn=D0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,ga={};function Rr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(ga[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Ph={};function F0(t){return _u.call(Ph,t)?!0:_u.call(Rh,t)?!1:U0.test(t)?Ph[t]=!0:(Rh[t]=!0,!1)}function O0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k0(t,e,n,i){if(e===null||typeof e>"u"||O0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);It[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);It[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);It[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k0(e,n,r,i)&&(n=null),i||r===null?F0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,dc;function ta(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function B0(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case xu:return"Profiler";case hf:return"StrictMode";case yu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Mu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return Mu(t(e))}catch{}}return null}function z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H0(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=H0(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function Tu(t,e){pg(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(na(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function mg(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){V0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function _g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var G0=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lu=null,ds=null,fs=null;function Uh(t){if(t=Ba(t)){if(typeof Lu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Vl(e),Lu(t.stateNode,t.type,e))}}function yg(t){ds?fs?fs.push(t):fs=[t]:ds=t}function Sg(){if(ds){var t=ds,e=fs;if(fs=ds=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function Mg(t,e){return t(e)}function Eg(){}var pc=!1;function Tg(t,e,n){if(pc)return t(e,n);pc=!0;try{return Mg(t,e,n)}finally{pc=!1,(ds!==null||fs!==null)&&(Eg(),Sg())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Nu=!1;if(hi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Nu=!1}function W0(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var la=!1,al=null,ol=!1,Du=null,j0={onError:function(t){la=!0,al=t}};function X0(t,e,n,i,r,s,a,o,l){la=!1,al=null,W0.apply(j0,arguments)}function q0(t,e,n,i,r,s,a,o,l){if(X0.apply(this,arguments),la){if(la){var c=al;la=!1,al=null}else throw Error(ne(198));ol||(ol=!0,Du=c)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fh(t){if(Pr(t)!==t)throw Error(ne(188))}function $0(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fh(r),t;if(s===i)return Fh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Ag(t){return t=$0(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Rg=pn.unstable_scheduleCallback,Oh=pn.unstable_cancelCallback,Y0=pn.unstable_shouldYield,K0=pn.unstable_requestPaint,_t=pn.unstable_now,Z0=pn.unstable_getCurrentPriorityLevel,vf=pn.unstable_ImmediatePriority,Pg=pn.unstable_UserBlockingPriority,ll=pn.unstable_NormalPriority,Q0=pn.unstable_LowPriority,bg=pn.unstable_IdlePriority,kl=null,$n=null;function J0(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:nx,ex=Math.log,tx=Math.LN2;function nx(t){return t>>>=0,t===0?32:31-(ex(t)/tx|0)|0}var eo=64,to=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ia(o):(s&=a,s!==0&&(i=ia(s)))}else a=n&~r,a!==0?i=ia(a):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ix(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lg(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function _f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dg,xf,Ig,Ug,Fg,Uu=!1,no=[],Ui=null,Fi=null,Oi=null,xa=new Map,ya=new Map,Pi=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ox(t,e,n,i,r){switch(e){case"focusin":return Ui=Hs(Ui,t,e,n,i,r),!0;case"dragenter":return Fi=Hs(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=Hs(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,Hs(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Hs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function Og(t){var e=hr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=wg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bu=i,n.target.dispatchEvent(i),bu=null}else return e=Ba(n),e!==null&&xf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bh(t,e,n){Ho(t)&&n.delete(e)}function lx(){Uu=!1,Ui!==null&&Ho(Ui)&&(Ui=null),Fi!==null&&Ho(Fi)&&(Fi=null),Oi!==null&&Ho(Oi)&&(Oi=null),xa.forEach(Bh),ya.forEach(Bh)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,lx)))}function Sa(t){function e(r){return Vs(r,t)}if(0<no.length){Vs(no[0],t);for(var n=1;n<no.length;n++){var i=no[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Vs(Ui,t),Fi!==null&&Vs(Fi,t),Oi!==null&&Vs(Oi,t),xa.forEach(e),ya.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&Pi.shift()}var hs=_i.ReactCurrentBatchConfig,ul=!0;function cx(t,e,n,i){var r=et,s=hs.transition;hs.transition=null;try{et=1,yf(t,e,n,i)}finally{et=r,hs.transition=s}}function ux(t,e,n,i){var r=et,s=hs.transition;hs.transition=null;try{et=4,yf(t,e,n,i)}finally{et=r,hs.transition=s}}function yf(t,e,n,i){if(ul){var r=Fu(t,e,n,i);if(r===null)wc(t,e,i,dl,n),kh(t,i);else if(ox(r,t,e,n,i))i.stopPropagation();else if(kh(t,i),e&4&&-1<ax.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&Dg(s),s=Fu(t,e,n,i),s===null&&wc(t,e,i,dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wc(t,e,i,null,n)}}var dl=null;function Fu(t,e,n,i){if(dl=null,t=gf(i),t=hr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case vf:return 1;case Pg:return 4;case ll:case Q0:return 16;case bg:return 536870912;default:return 16}default:return 16}}var Ni=null,Sf=null,Vo=null;function Bg(){if(Vo)return Vo;var t,e=Sf,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vo=r.slice(t,1<i?1-i:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function zh(){return!1}function gn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?io:zh,this.isPropagationStopped=zh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=gn(Is),ka=pt({},Is,{view:0,detail:0}),dx=gn(ka),gc,vc,Gs,Bl=pt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(gc=t.screenX-Gs.screenX,vc=t.screenY-Gs.screenY):vc=gc=0,Gs=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Hh=gn(Bl),fx=pt({},Bl,{dataTransfer:0}),hx=gn(fx),px=pt({},ka,{relatedTarget:0}),_c=gn(px),mx=pt({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=gn(mx),vx=pt({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_x=gn(vx),xx=pt({},Is,{data:0}),Vh=gn(xx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mx[t])?!!e[t]:!1}function Ef(){return Ex}var Tx=pt({},ka,{key:function(t){if(t.key){var e=yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=gn(Tx),Ax=pt({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=gn(Ax),Cx=pt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),Rx=gn(Cx),Px=pt({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=gn(Px),Lx=pt({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=gn(Lx),Dx=[9,13,27,32],Tf=hi&&"CompositionEvent"in window,ca=null;hi&&"documentMode"in document&&(ca=document.documentMode);var Ix=hi&&"TextEvent"in window&&!ca,zg=hi&&(!Tf||ca&&8<ca&&11>=ca),Wh=" ",jh=!1;function Hg(t,e){switch(t){case"keyup":return Dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Ux(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(jh=!0,Wh);case"textInput":return t=e.data,t===Wh&&jh?null:t;default:return null}}function Fx(t,e){if(Jr)return t==="compositionend"||!Tf&&Hg(t,e)?(t=Bg(),Vo=Sf=Ni=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zg&&e.locale!=="ko"?null:e.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ox[t.type]:e==="textarea"}function Gg(t,e,n,i){yg(i),e=fl(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ma=null;function kx(t){ev(t,0)}function zl(t){var e=ns(t);if(hg(e))return t}function Bx(t,e){if(t==="change")return e}var Wg=!1;if(hi){var xc;if(hi){var yc="oninput"in document;if(!yc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),yc=typeof qh.oninput=="function"}xc=yc}else xc=!1;Wg=xc&&(!document.documentMode||9<document.documentMode)}function $h(){ua&&(ua.detachEvent("onpropertychange",jg),Ma=ua=null)}function jg(t){if(t.propertyName==="value"&&zl(Ma)){var e=[];Gg(e,Ma,t,gf(t)),Tg(kx,e)}}function zx(t,e,n){t==="focusin"?($h(),ua=e,Ma=n,ua.attachEvent("onpropertychange",jg)):t==="focusout"&&$h()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Ma)}function Vx(t,e){if(t==="click")return zl(e)}function Gx(t,e){if(t==="input"||t==="change")return zl(e)}function Wx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Wx;function Ea(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_u.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qg(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=qg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xg(n.ownerDocument.documentElement,n)){if(i!==null&&wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kh(n,s);var a=Kh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xx=hi&&"documentMode"in document&&11>=document.documentMode,es=null,Ou=null,da=null,ku=!1;function Zh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||es==null||es!==sl(i)||(i=es,"selectionStart"in i&&wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ea(da,i)||(da=i,i=fl(Ou,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Sc={},$g={};hi&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Hl(t){if(Sc[t])return Sc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $g)return Sc[t]=e[n];return t}var Yg=Hl("animationend"),Kg=Hl("animationiteration"),Zg=Hl("animationstart"),Qg=Hl("transitionend"),Jg=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Jg.set(t,e),Rr(e,[t])}for(var Mc=0;Mc<Qh.length;Mc++){var Ec=Qh[Mc],qx=Ec.toLowerCase(),$x=Ec[0].toUpperCase()+Ec.slice(1);Ki(qx,"on"+$x)}Ki(Yg,"onAnimationEnd");Ki(Kg,"onAnimationIteration");Ki(Zg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Qg,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,q0(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,c),s=l}}}if(ol)throw t=Du,ol=!1,Du=null,t}function at(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var i=t+"__bubble";n.has(i)||(tv(e,t,2,!1),n.add(i))}function Tc(t,e,n){var i=0;e&&(i|=4),tv(n,t,i,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[so]){t[so]=!0,lg.forEach(function(n){n!=="selectionchange"&&(Yx.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Tc("selectionchange",!1,e))}}function tv(t,e,n,i){switch(kg(e)){case 1:var r=cx;break;case 4:r=ux;break;default:r=yf}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Tg(function(){var c=s,d=gf(n),f=[];e:{var h=Jg.get(t);if(h!==void 0){var m=Mf,_=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":m=wx;break;case"focusin":_="focus",m=_c;break;case"focusout":_="blur",m=_c;break;case"beforeblur":case"afterblur":m=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Rx;break;case Yg:case Kg:case Zg:m=gx;break;case Qg:m=bx;break;case"scroll":m=dx;break;case"wheel":m=Nx;break;case"copy":case"cut":case"paste":m=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Gh}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=_a(v,u),M!=null&&x.push(wa(v,M,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==bu&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[pi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?hr(_):null,_!==null&&(p=Pr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Hh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Gh,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:ns(m),g=_==null?h:ns(_),h=new x(M,v+"leave",m,n,d),h.target=p,h.relatedTarget=g,M=null,hr(d)===c&&(x=new x(u,v+"enter",_,n,d),x.target=g,x.relatedTarget=p,M=x),p=M,m&&_)t:{for(x=m,u=_,v=0,g=x;g;g=Ur(g))v++;for(g=0,M=u;M;M=Ur(M))g++;for(;0<v-g;)x=Ur(x),v--;for(;0<g-v;)u=Ur(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=Ur(x),u=Ur(u)}x=null}else x=null;m!==null&&ep(f,h,m,x,!1),_!==null&&p!==null&&ep(f,p,_,x,!0)}}e:{if(h=c?ns(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=Bx;else if(Xh(h))if(Wg)P=Gx;else{P=Hx;var C=zx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Vx);if(P&&(P=P(t,c))){Gg(f,P,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&wu(h,"number",h.value)}switch(C=c?ns(c):window,t){case"focusin":(Xh(C)||C.contentEditable==="true")&&(es=C,Ou=c,da=null);break;case"focusout":da=Ou=es=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Zh(f,n,d);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Zh(f,n,d)}var A;if(Tf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Jr?Hg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(zg&&n.locale!=="ko"&&(Jr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Jr&&(A=Bg()):(Ni=d,Sf="value"in Ni?Ni.value:Ni.textContent,Jr=!0)),C=fl(c,b),0<C.length&&(b=new Vh(b,t,null,n,d),f.push({event:b,listeners:C}),A?b.data=A:(A=Vg(n),A!==null&&(b.data=A)))),(A=Ix?Ux(t,n):Fx(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(d=new Vh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}ev(f,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(wa(t,s,r)),s=_a(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ep(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=_a(n,s),l!=null&&a.unshift(wa(n,l,o))):r||(l=_a(n,s),l!=null&&a.push(wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Kx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function tp(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Zx,"")}function ao(t,e,n){if(e=tp(e),tp(t)!==e&&n)throw Error(ne(425))}function hl(){}var Bu=null,zu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(t){return np.resolve(null).then(t).catch(ey)}:Vu;function ey(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),qn="__reactFiber$"+Us,Aa="__reactProps$"+Us,pi="__reactContainer$"+Us,Gu="__reactEvents$"+Us,ty="__reactListeners$"+Us,ny="__reactHandles$"+Us;function hr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ip(t);t!==null;){if(n=t[qn])return n;t=ip(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[qn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Vl(t){return t[Aa]||null}var Wu=[],is=-1;function Zi(t){return{current:t}}function lt(t){0>is||(t.current=Wu[is],Wu[is]=null,is--)}function it(t,e){is++,Wu[is]=t.current,t.current=e}var qi={},zt=Zi(qi),Jt=Zi(!1),yr=qi;function Ss(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function pl(){lt(Jt),lt(zt)}function rp(t,e,n){if(zt.current!==qi)throw Error(ne(168));it(zt,e),it(Jt,n)}function nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,z0(t)||"Unknown",r));return pt({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,yr=zt.current,it(zt,t),it(Jt,Jt.current),!0}function sp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=nv(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,lt(Jt),lt(zt),it(zt,t)):lt(Jt),it(Jt,n)}var ai=null,Gl=!1,Cc=!1;function iv(t){ai===null?ai=[t]:ai.push(t)}function iy(t){Gl=!0,iv(t)}function Qi(){if(!Cc&&ai!==null){Cc=!0;var t=0,e=et;try{var n=ai;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Gl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Rg(vf,Qi),r}finally{et=e,Cc=!1}}return null}var rs=[],ss=0,gl=null,vl=0,xn=[],yn=0,Sr=null,li=1,ci="";function or(t,e){rs[ss++]=vl,rs[ss++]=gl,gl=t,vl=e}function rv(t,e,n){xn[yn++]=li,xn[yn++]=ci,xn[yn++]=Sr,Sr=t;var i=li;t=ci;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-zn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Af(t){t.return!==null&&(or(t,1),rv(t,1,0))}function Cf(t){for(;t===gl;)gl=rs[--ss],rs[ss]=null,vl=rs[--ss],rs[ss]=null;for(;t===Sr;)Sr=xn[--yn],xn[yn]=null,ci=xn[--yn],xn[yn]=null,li=xn[--yn],xn[yn]=null}var hn=null,fn=null,ut=!1,Fn=null;function sv(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xu(t){if(ut){var e=fn;if(e){var n=e;if(!ap(t,e)){if(ju(t))throw Error(ne(418));e=ki(n.nextSibling);var i=hn;e&&ap(t,e)?sv(i,n):(t.flags=t.flags&-4097|2,ut=!1,hn=t)}}else{if(ju(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ut=!1,hn=t}}}function op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function oo(t){if(t!==hn)return!1;if(!ut)return op(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=fn)){if(ju(t))throw av(),Error(ne(418));for(;e;)sv(t,e),e=ki(e.nextSibling)}if(op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?ki(t.stateNode.nextSibling):null;return!0}function av(){for(var t=fn;t;)t=ki(t.nextSibling)}function Ms(){fn=hn=null,ut=!1}function Rf(t){Fn===null?Fn=[t]:Fn.push(t)}var ry=_i.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lp(t){var e=t._init;return e(t._payload)}function ov(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Vi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,M){return v===null||v.tag!==6?(v=Ic(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var P=g.type;return P===Qr?d(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&lp(P)===v.type)?(M=r(v,g.props),M.ref=Ws(u,v,g),M.return=u,M):(M=Ko(g.type,g.key,g.props,null,u.mode,M),M.ref=Ws(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Uc(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,M,P){return v===null||v.tag!==7?(v=xr(g,u.mode,M,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ic(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return g=Ko(v.type,v.key,v.props,null,u.mode,g),g.ref=Ws(u,null,v),g.return=u,g;case Zr:return v=Uc(v,u.mode,g),v.return=u,v;case Ci:var M=v._init;return f(u,M(v._payload),g)}if(na(v)||Bs(v))return v=xr(v,u.mode,g,null),v.return=u,v;lo(u,v)}return null}function h(u,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Za:return g.key===P?l(u,v,g,M):null;case Zr:return g.key===P?c(u,v,g,M):null;case Ci:return P=g._init,h(u,v,P(g._payload),M)}if(na(g)||Bs(g))return P!==null?null:d(u,v,g,M,null);lo(u,g)}return null}function m(u,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,o(v,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Za:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,P);case Zr:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,P);case Ci:var C=M._init;return m(u,v,g,C(M._payload),P)}if(na(M)||Bs(M))return u=u.get(g)||null,d(v,u,M,P,null);lo(v,M)}return null}function _(u,v,g,M){for(var P=null,C=null,A=v,b=v=0,K=null;A!==null&&b<g.length;b++){A.index>b?(K=A,A=null):K=A.sibling;var S=h(u,A,g[b],M);if(S===null){A===null&&(A=K);break}t&&A&&S.alternate===null&&e(u,A),v=s(S,v,b),C===null?P=S:C.sibling=S,C=S,A=K}if(b===g.length)return n(u,A),ut&&or(u,b),P;if(A===null){for(;b<g.length;b++)A=f(u,g[b],M),A!==null&&(v=s(A,v,b),C===null?P=A:C.sibling=A,C=A);return ut&&or(u,b),P}for(A=i(u,A);b<g.length;b++)K=m(A,u,b,g[b],M),K!==null&&(t&&K.alternate!==null&&A.delete(K.key===null?b:K.key),v=s(K,v,b),C===null?P=K:C.sibling=K,C=K);return t&&A.forEach(function(w){return e(u,w)}),ut&&or(u,b),P}function x(u,v,g,M){var P=Bs(g);if(typeof P!="function")throw Error(ne(150));if(g=P.call(g),g==null)throw Error(ne(151));for(var C=P=null,A=v,b=v=0,K=null,S=g.next();A!==null&&!S.done;b++,S=g.next()){A.index>b?(K=A,A=null):K=A.sibling;var w=h(u,A,S.value,M);if(w===null){A===null&&(A=K);break}t&&A&&w.alternate===null&&e(u,A),v=s(w,v,b),C===null?P=w:C.sibling=w,C=w,A=K}if(S.done)return n(u,A),ut&&or(u,b),P;if(A===null){for(;!S.done;b++,S=g.next())S=f(u,S.value,M),S!==null&&(v=s(S,v,b),C===null?P=S:C.sibling=S,C=S);return ut&&or(u,b),P}for(A=i(u,A);!S.done;b++,S=g.next())S=m(A,u,b,S.value,M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),v=s(S,v,b),C===null?P=S:C.sibling=S,C=S);return t&&A.forEach(function(W){return e(u,W)}),ut&&or(u,b),P}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Qr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Za:e:{for(var P=g.key,C=v;C!==null;){if(C.key===P){if(P=g.type,P===Qr){if(C.tag===7){n(u,C.sibling),v=r(C,g.props.children),v.return=u,u=v;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&lp(P)===C.type){n(u,C.sibling),v=r(C,g.props),v.ref=Ws(u,C,g),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===Qr?(v=xr(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=Ko(g.type,g.key,g.props,null,u.mode,M),M.ref=Ws(u,v,g),M.return=u,u=M)}return a(u);case Zr:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Uc(g,u.mode,M),v.return=u,u=v}return a(u);case Ci:return C=g._init,p(u,v,C(g._payload),M)}if(na(g))return _(u,v,g,M);if(Bs(g))return x(u,v,g,M);lo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Ic(g,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return p}var Es=ov(!0),lv=ov(!1),_l=Zi(null),xl=null,as=null,Pf=null;function bf(){Pf=as=xl=null}function Lf(t){var e=_l.current;lt(_l),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){xl=t,Pf=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(xl===null)throw Error(ne(308));as=t,xl.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var pr=null;function Nf(t){pr===null?pr=[t]:pr.push(t)}function cv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nf(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Nf(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_f(t,n)}}function cp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=pt({},f,h);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=f}}function up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var za={},Yn=Zi(za),Ca=Zi(za),Ra=Zi(za);function mr(t){if(t===za)throw Error(ne(174));return t}function If(t,e){switch(it(Ra,e),it(Ca,t),it(Yn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}lt(Yn),it(Yn,e)}function Ts(){lt(Yn),lt(Ca),lt(Ra)}function dv(t){mr(Ra.current);var e=mr(Yn.current),n=Cu(e,t.type);e!==n&&(it(Ca,t),it(Yn,n))}function Uf(t){Ca.current===t&&(lt(Yn),lt(Ca))}var ft=Zi(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function Ff(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var jo=_i.ReactCurrentDispatcher,Pc=_i.ReactCurrentBatchConfig,Mr=0,ht=null,Et=null,Rt=null,Ml=!1,fa=!1,Pa=0,sy=0;function Ut(){throw Error(ne(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if(Mr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?cy:uy,t=n(i,r),fa){s=0;do{if(fa=!1,Pa=0,25<=s)throw Error(ne(301));s+=1,Rt=Et=null,e.updateQueue=null,jo.current=dy,t=n(i,r)}while(fa)}if(jo.current=El,e=Et!==null&&Et.next!==null,Mr=0,Rt=Et=ht=null,Ml=!1,e)throw Error(ne(300));return t}function Bf(){var t=Pa!==0;return Pa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ht.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Cn(){if(Et===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Rt===null?ht.memoizedState:Rt.next;if(e!==null)Rt=e,Et=t;else{if(t===null)throw Error(ne(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?ht.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ba(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,ht.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fv(){}function hv(t,e){var n=ht,i=Cn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,zf(gv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,La(9,mv.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ne(349));Mr&30||pv(n,e,r)}return r}function pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mv(t,e,n,i){e.value=n,e.getSnapshot=i,vv(e)&&_v(t)}function gv(t,e,n){return n(function(){vv(e)&&_v(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function _v(t){var e=mi(t,1);e!==null&&Hn(e,t,1,-1)}function dp(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=ly.bind(null,ht,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function xv(){return Cn().memoizedState}function Xo(t,e,n,i){var r=Wn();ht.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&Of(i,a.deps)){r.memoizedState=La(e,n,s,i);return}}ht.flags|=t,r.memoizedState=La(1|e,n,s,i)}function fp(t,e){return Xo(8390656,8,t,e)}function zf(t,e){return Wl(2048,8,t,e)}function yv(t,e){return Wl(4,2,t,e)}function Sv(t,e){return Wl(4,4,t,e)}function Mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ev(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Mv.bind(null,e,t),n)}function Hf(){}function Tv(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wv(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return Mr&21?(Vn(n,e)||(n=Lg(),ht.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function ay(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Pc.transition;Pc.transition={};try{t(!1),e()}finally{et=n,Pc.transition=i}}function Cv(){return Cn().memoizedState}function oy(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rv(t))Pv(e,n);else if(n=cv(t,e,n,i),n!==null){var r=Gt();Hn(n,t,i,r),bv(n,e,i)}}function ly(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Pv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,Nf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cv(t,e,r,i),n!==null&&(r=Gt(),Hn(n,t,i,r),bv(n,e,i))}}function Rv(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Pv(t,e){fa=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_f(t,n)}}var El={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},cy={readContext:An,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,Mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=oy.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:dp,useDebugValue:Hf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=dp(!1),e=t[0];return t=ay.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Wn();if(ut){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Pt===null)throw Error(ne(349));Mr&30||pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fp(gv.bind(null,i,s,t),[t]),i.flags|=2048,La(9,mv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Pt.identifierPrefix;if(ut){var n=ci,i=li;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:An,useCallback:Tv,useContext:An,useEffect:zf,useImperativeHandle:Ev,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:wv,useReducer:bc,useRef:xv,useState:function(){return bc(ba)},useDebugValue:Hf,useDeferredValue:function(t){var e=Cn();return Av(e,Et.memoizedState,t)},useTransition:function(){var t=bc(ba)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:hv,useId:Cv,unstable_isNewReconciler:!1},dy={readContext:An,useCallback:Tv,useContext:An,useEffect:zf,useImperativeHandle:Ev,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:wv,useReducer:Lc,useRef:xv,useState:function(){return Lc(ba)},useDebugValue:Hf,useDeferredValue:function(t){var e=Cn();return Et===null?e.memoizedState=t:Av(e,Et.memoizedState,t)},useTransition:function(){var t=Lc(ba)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:hv,useId:Cv,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Hi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Hn(e,t,r,i),Wo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Hi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Hn(e,t,r,i),Wo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Hi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Hn(e,t,i,n),Wo(e,t,i))}};function hp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function Lv(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=en(e)?yr:zt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=en(e)?yr:zt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($u(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=B0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){wl||(wl=!0,ad=i),Ku(t,e)},n}function Dv(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var hy=_i.ReactCurrentOwner,Qt=!1;function Vt(t,e,n,i){e.child=t===null?lv(e,null,n,i):Es(e,t.child,n,i)}function _p(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=kf(t,e,n,i,s,r),n=Bf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ut&&n&&Af(e),e.flags|=1,Vt(t,e,i,r),e.child)}function xp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Iv(t,e,s,i,r)):(t=Ko(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Zu(t,e,n,i,r)}function Uv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ls,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ls,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ls,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ls,cn),cn|=i;return Vt(t,e,r,n),e.child}function Fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,i,r){var s=en(n)?yr:zt.current;return s=Ss(e,s),ps(e,r),n=kf(t,e,n,i,s,r),i=Bf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ut&&i&&Af(e),e.flags|=1,Vt(t,e,n,r),e.child)}function yp(t,e,n,i,r){if(en(n)){var s=!0;ml(e)}else s=!1;if(ps(e,r),e.stateNode===null)qo(t,e),Lv(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=en(n)?yr:zt.current,c=Ss(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&pp(e,a,i,c),Ri=!1;var h=e.memoizedState;a.state=h,yl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||Jt.current||Ri?(typeof d=="function"&&($u(e,n,d,i),l=e.memoizedState),(o=Ri||hp(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,uv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:In(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=en(n)?yr:zt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&pp(e,a,i,l),Ri=!1,h=e.memoizedState,a.state=h,yl(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||Jt.current||Ri?(typeof m=="function"&&($u(e,n,m,i),_=e.memoizedState),(c=Ri||hp(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){Fv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sp(e,n,!1),gi(t,e,s);i=e.stateNode,hy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&sp(e,n,!0),e.child}function Ov(t){var e=t.stateNode;e.pendingContext?rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(t,e.context,!1),If(t,e.containerInfo)}function Sp(t,e,n,i,r){return Ms(),Rf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=$l(a,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Ju,t):Vf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return py(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Vi(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ed(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vf(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,i){return i!==null&&Rf(i),Es(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function py(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Nc(Error(ne(422))),co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$l({mode:"visible",children:i.children},r,0,null),s=xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,a),e.child.memoizedState=ed(a),e.memoizedState=Ju,s);if(!(e.mode&1))return co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Nc(s,i,void 0),co(t,e,a,i)}if(o=(a&t.childLanes)!==0,Qt||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Hn(i,t,r,-1))}return $f(),i=Nc(Error(ne(421))),co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Cy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=ki(r.nextSibling),hn=e,ut=!0,Fn=null,t!==null&&(xn[yn++]=li,xn[yn++]=ci,xn[yn++]=Sr,li=t.id,ci=t.overflow,Sr=e),e=Vf(e,i.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qu(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function my(t,e,n){switch(e.tag){case 3:Ov(e),Ms();break;case 5:dv(e);break;case 1:en(e.type)&&ml(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?kv(t,e,n):(it(ft,ft.current&1),t=gi(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,n)}return gi(t,e,n)}var zv,td,Hv,Vv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};Hv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Yn.current);var s=null;switch(n){case"input":r=Eu(t,r),i=Eu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Au(t,r),i=Au(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}Ru(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Vv=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gy(t,e,n){var i=e.pendingProps;switch(Cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return en(e.type)&&pl(),Ft(e),null;case 3:return i=e.stateNode,Ts(),lt(Jt),lt(zt),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(cd(Fn),Fn=null))),td(t,e),Ft(e),null;case 5:Uf(e);var r=mr(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ft(e),null}if(t=mr(Yn.current),oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)at(ra[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Lh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Dh(i,s),at("invalid",i)}Ru(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",""+o]):ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Qa(i),Nh(i,s,!0);break;case"textarea":Qa(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[Aa]=i,zv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Pu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)at(ra[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Lh(t,i),r=Eu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Dh(t,i),r=Au(t,i),at("invalid",t);break;default:r=i}Ru(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&ff(t,s,l,a))}switch(n){case"input":Qa(t),Nh(t,i,!1);break;case"textarea":Qa(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?us(t,!!i.multiple,s,!1):i.defaultValue!=null&&us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Vv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=mr(Ra.current),mr(Yn.current),oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:ao(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ao(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Ft(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&fn!==null&&e.mode&1&&!(e.flags&128))av(),Ms(),e.flags|=98560,s=!1;else if(s=oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[qn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Fn!==null&&(cd(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):$f())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ts(),td(t,e),t===null&&Ta(e.stateNode.containerInfo),Ft(e),null;case 10:return Lf(e.type._context),Ft(e),null;case 17:return en(e.type)&&pl(),Ft(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sl(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>As&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ut)return Ft(e),null}else 2*_t()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return qf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function vy(t,e){switch(Cf(e),e.tag){case 1:return en(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),lt(Jt),lt(zt),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Ts(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var uo=!1,Bt=!1,_y=typeof WeakSet=="function"?WeakSet:Set,me=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function nd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Ep=!1;function xy(t,e){if(Bu=ul,t=qg(),wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},ul=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:In(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){gt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Ep,Ep=!1,_}function ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nd(e,n,s)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gv(t){var e=t.alternate;e!==null&&(t.alternate=null,Gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Aa],delete e[Gu],delete e[ty],delete e[ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wv(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var Nt=null,Un=!1;function yi(t,e,n){for(n=n.child;n!==null;)jv(t,e,n),n=n.sibling}function jv(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Bt||os(n,e);case 6:var i=Nt,r=Un;Nt=null,yi(t,e,n),Nt=i,Un=r,Nt!==null&&(Un?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Un?(t=Nt,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),Sa(t)):Ac(Nt,n.stateNode));break;case 4:i=Nt,r=Un,Nt=n.stateNode.containerInfo,Un=!0,yi(t,e,n),Nt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nd(n,e,a),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!Bt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){gt(n,e,o)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,yi(t,e,n),Bt=i):yi(t,e,n);break;default:yi(t,e,n)}}function wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _y),e.forEach(function(i){var r=Ry.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Un=!1;break e;case 3:Nt=o.stateNode.containerInfo,Un=!0;break e;case 4:Nt=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(Nt===null)throw Error(ne(160));jv(s,a,r),Nt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Gn(t),i&4){try{ha(3,t,t.return),Xl(3,t)}catch(x){gt(t,t.return,x)}try{ha(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:bn(e,t),Gn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(bn(e,t),Gn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&pg(r,s),Pu(o,a);var c=Pu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?xg(r,f):d==="dangerouslySetInnerHTML"?vg(r,f):d==="children"?va(r,f):ff(r,d,f,c)}switch(o){case"input":Tu(r,s);break;case"textarea":mg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?us(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?us(r,!!s.multiple,s.defaultValue,!0):us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(x){gt(t,t.return,x)}}break;case 6:if(bn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){gt(t,t.return,x)}}break;case 3:if(bn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:bn(e,t),Gn(t);break;case 13:bn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jf=_t())),i&4&&wp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,bn(e,t),Bt=c):bn(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:ha(4,h,h.return);break;case 1:os(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){Cp(f);continue}}m!==null?(m.return=h,me=m):Cp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=_g("display",a))}catch(x){gt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){gt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bn(e,t),Gn(t),i&4&&wp(t);break;case 21:break;default:bn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=Tp(t);sd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Tp(t);rd(t,o,a);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yy(t,e,n){me=t,qv(t)}function qv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=uo;var c=Bt;if(uo=a,(Bt=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?Rp(r):l!==null?(l.return=a,me=l):Rp(r);for(;s!==null;)me=s,qv(s),s=s.sibling;me=r,uo=o,Bt=c}Ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Ap(t)}}function Ap(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}up(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Bt||e.flags&512&&id(e)}catch(h){gt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Cp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Rp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{id(e)}catch(l){gt(e,s,l)}break;case 5:var a=e.return;try{id(e)}catch(l){gt(e,a,l)}}}catch(l){gt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var Sy=Math.ceil,Tl=_i.ReactCurrentDispatcher,Gf=_i.ReactCurrentOwner,En=_i.ReactCurrentBatchConfig,We=0,Pt=null,St=null,Dt=0,cn=0,ls=Zi(0),Tt=0,Na=null,Er=0,ql=0,Wf=0,pa=null,Kt=null,jf=0,As=1/0,si=null,wl=!1,ad=null,zi=null,fo=!1,Di=null,Al=0,ma=0,od=null,$o=-1,Yo=0;function Gt(){return We&6?_t():$o!==-1?$o:$o=_t()}function Hi(t){return t.mode&1?We&2&&Dt!==0?Dt&-Dt:ry.transition!==null?(Yo===0&&(Yo=Lg()),Yo):(t=et,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function Hn(t,e,n,i){if(50<ma)throw ma=0,od=null,Error(ne(185));Oa(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&(ql|=n),Tt===4&&bi(t,Dt)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(As=_t()+500,Gl&&Qi()))}function tn(t,e){var n=t.callbackNode;rx(t,e);var i=cl(t,t===Pt?Dt:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?iy(Pp.bind(null,t)):iv(Pp.bind(null,t)),Jx(function(){!(We&6)&&Qi()}),n=null;else{switch(Ng(i)){case 1:n=vf;break;case 4:n=Pg;break;case 16:n=ll;break;case 536870912:n=bg;break;default:n=ll}n=t_(n,$v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $v(t,e){if($o=-1,Yo=0,We&6)throw Error(ne(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=cl(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=We;We|=2;var s=Kv();(Pt!==t||Dt!==e)&&(si=null,As=_t()+500,_r(t,e));do try{Ty();break}catch(o){Yv(t,o)}while(!0);bf(),Tl.current=s,We=r,St!==null?e=0:(Pt=null,Dt=0,e=Tt)}if(e!==0){if(e===2&&(r=Iu(t),r!==0&&(i=r,e=ld(t,r))),e===1)throw n=Na,_r(t,0),bi(t,i),tn(t,_t()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!My(r)&&(e=Cl(t,i),e===2&&(s=Iu(t),s!==0&&(i=s,e=ld(t,s))),e===1))throw n=Na,_r(t,0),bi(t,i),tn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:lr(t,Kt,si);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=jf+500-_t(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vu(lr.bind(null,t,Kt,si),e);break}lr(t,Kt,si);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sy(i/1960))-i,10<i){t.timeoutHandle=Vu(lr.bind(null,t,Kt,si),i);break}lr(t,Kt,si);break;case 5:lr(t,Kt,si);break;default:throw Error(ne(329))}}}return tn(t,_t()),t.callbackNode===n?$v.bind(null,t):null}function ld(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&cd(e)),t}function cd(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function My(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~Wf,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function Pp(t){if(We&6)throw Error(ne(327));ms();var e=cl(t,0);if(!(e&1))return tn(t,_t()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Iu(t);i!==0&&(e=i,n=ld(t,i))}if(n===1)throw n=Na,_r(t,0),bi(t,e),tn(t,_t()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Kt,si),tn(t,_t()),null}function Xf(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(As=_t()+500,Gl&&Qi())}}function Tr(t){Di!==null&&Di.tag===0&&!(We&6)&&ms();var e=We;We|=1;var n=En.transition,i=et;try{if(En.transition=null,et=1,t)return t()}finally{et=i,En.transition=n,We=e,!(We&6)&&Qi()}}function qf(){cn=ls.current,lt(ls)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Ts(),lt(Jt),lt(zt),Ff();break;case 5:Uf(i);break;case 4:Ts();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Lf(i.type._context);break;case 22:case 23:qf()}n=n.return}if(Pt=t,St=t=Vi(t.current,null),Dt=cn=e,Tt=0,Na=null,Wf=ql=Er=0,Kt=pa=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function Yv(t,e){do{var n=St;try{if(bf(),jo.current=El,Ml){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(Mr=0,Rt=Et=ht=null,fa=!1,Pa=0,Gf.current=null,n===null||n.return===null){Tt=1,Na=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gp(a);if(m!==null){m.flags&=-257,vp(m,a,o,s,e),m.mode&1&&mp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){mp(s,c,e),$f();break e}l=Error(ne(426))}}else if(ut&&o.mode&1){var p=gp(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),vp(p,a,o,s,e),Rf(ws(l,o));break e}}s=l=ws(l,o),Tt!==4&&(Tt=2),pa===null?pa=[s]:pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Nv(s,l,e);cp(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zi===null||!zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dv(s,o,e);cp(s,M);break e}}s=s.return}while(s!==null)}Qv(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Kv(){var t=Tl.current;return Tl.current=El,t===null?El:t}function $f(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Er&268435455)&&!(ql&268435455)||bi(Pt,Dt)}function Cl(t,e){var n=We;We|=2;var i=Kv();(Pt!==t||Dt!==e)&&(si=null,_r(t,e));do try{Ey();break}catch(r){Yv(t,r)}while(!0);if(bf(),We=n,Tl.current=i,St!==null)throw Error(ne(261));return Pt=null,Dt=0,Tt}function Ey(){for(;St!==null;)Zv(St)}function Ty(){for(;St!==null&&!Y0();)Zv(St)}function Zv(t){var e=e_(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Qv(t):St=e,Gf.current=null}function Qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vy(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=gy(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function lr(t,e,n){var i=et,r=En.transition;try{En.transition=null,et=1,wy(t,e,n,i)}finally{En.transition=r,et=i}return null}function wy(t,e,n,i){do ms();while(Di!==null);if(We&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sx(t,s),t===Pt&&(St=Pt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,t_(ll,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var a=et;et=1;var o=We;We|=4,Gf.current=null,xy(t,n),Xv(n,t),jx(zu),ul=!!Bu,zu=Bu=null,t.current=n,yy(n),K0(),We=o,et=a,En.transition=s}else t.current=n;if(fo&&(fo=!1,Di=t,Al=r),s=t.pendingLanes,s===0&&(zi=null),J0(n.stateNode),tn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(wl)throw wl=!1,t=ad,ad=null,t;return Al&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===od?ma++:(ma=0,od=t):ma=0,Qi(),null}function ms(){if(Di!==null){var t=Ng(Al),e=En.transition,n=et;try{if(En.transition=null,et=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,Al=0,We&6)throw Error(ne(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:ha(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var h=d.sibling,m=d.return;if(Gv(d),d===c){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){a=me;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,me=g;else e:for(a=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xl(9,o)}}catch(P){gt(o,o.return,P)}if(o===a){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(We=r,Qi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{et=n,En.transition=e}}return!1}function bp(t,e,n){e=ws(n,e),e=Nv(t,e,1),t=Bi(t,e,1),e=Gt(),t!==null&&(Oa(t,1,e),tn(t,e))}function gt(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=ws(n,t),t=Dv(e,t,1),e=Bi(e,t,1),t=Gt(),e!==null&&(Oa(e,1,t),tn(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Dt&n)===n&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>_t()-jf?_r(t,0):Wf|=n),tn(t,e)}function Jv(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Gt();t=mi(t,e),t!==null&&(Oa(t,e,n),tn(t,n))}function Cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jv(t,n)}function Ry(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Jv(t,n)}var e_;e_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,my(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ut&&e.flags&1048576&&rv(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qo(t,e),t=e.pendingProps;var r=Ss(e,zt.current);ps(e,n),r=kf(null,e,i,t,r,n);var s=Bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Af(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=by(i),t=In(i,t),r){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=yp(null,e,i,t,n);break e;case 11:e=_p(null,e,i,t,n);break e;case 14:e=xp(null,e,i,In(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),yp(t,e,i,r,n);case 3:e:{if(Ov(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,uv(t,e),yl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ne(423)),e),e=Sp(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(ne(424)),e),e=Sp(t,e,i,n,r);break e}else for(fn=ki(e.stateNode.containerInfo.firstChild),hn=e,ut=!0,Fn=null,n=lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=gi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return dv(e),t===null&&Xu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hu(i,r)?a=null:s!==null&&Hu(i,s)&&(e.flags|=32),Fv(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&Xu(e),null;case 13:return kv(t,e,n);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),_p(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(_l,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!Jt.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),qu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=An(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),xp(t,e,i,r,n);case 15:return Iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),qo(t,e),e.tag=1,en(i)?(t=!0,ml(e)):t=!1,ps(e,n),Lv(e,i,r),Yu(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return Bv(t,e,n);case 22:return Uv(t,e,n)}throw Error(ne(156,e.tag))};function t_(t,e){return Rg(t,e)}function Py(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new Py(t,e,n,i)}function Yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function by(t){if(typeof t=="function")return Yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ko(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return xr(n.children,r,s,e);case hf:a=8,r|=8;break;case xu:return t=Sn(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case yu:return t=Sn(13,n,e,r),t.elementType=yu,t.lanes=s,t;case Su:return t=Sn(19,n,e,r),t.elementType=Su,t.lanes=s,t;case dg:return $l(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:a=10;break e;case ug:a=9;break e;case pf:a=11;break e;case mf:a=14;break e;case Ci:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Sn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function $l(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=dg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,a,o,l){return t=new Ly(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function n_(t){if(!t)return qi;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(en(n))return nv(t,n,e)}return e}function i_(t,e,n,i,r,s,a,o,l){return t=Kf(n,i,!0,t,r,s,a,o,l),t.context=n_(null),n=t.current,i=Gt(),r=Hi(n),s=fi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Oa(t,r,i),tn(t,i),t}function Yl(t,e,n,i){var r=e.current,s=Gt(),a=Hi(r);return n=n_(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(Hn(t,r,a,s),Wo(t,r,a)),a}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function Dy(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qf(t){this._internalRoot=t}Kl.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Yl(t,e,null,null)};Kl.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Yl(null,t,null,null)}),e[pi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ug();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Og(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rl(a);s.call(c)}}var a=i_(e,i,t,0,null,!1,!1,"",Np);return t._reactRootContainer=a,t[pi]=a.current,Ta(t.nodeType===8?t.parentNode:t),Tr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Rl(l);o.call(c)}}var l=Kf(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=l,t[pi]=l.current,Ta(t.nodeType===8?t.parentNode:t),Tr(function(){Yl(e,l,n,i)}),l}function Ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Rl(a);o.call(l)}}Yl(e,a,t,r)}else a=Iy(n,e,t,r,i);return Rl(a)}Dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(_f(e,n|1),tn(e,_t()),!(We&6)&&(As=_t()+500,Qi()))}break;case 13:Tr(function(){var i=mi(t,1);if(i!==null){var r=Gt();Hn(i,t,1,r)}}),Zf(t,1)}};xf=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Gt();Hn(e,t,134217728,n)}Zf(t,134217728)}};Ig=function(t){if(t.tag===13){var e=Hi(t),n=mi(t,e);if(n!==null){var i=Gt();Hn(n,t,e,i)}Zf(t,e)}};Ug=function(){return et};Fg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Lu=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(ne(90));hg(i),Tu(i,r)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};Mg=Xf;Eg=Tr;var Uy={usingClientEntryPoint:!1,Events:[Ba,ns,Vl,yg,Sg,Xf]},Xs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{kl=ho.inject(Fy),$n=ho}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(ne(200));return Ny(t,e,null,n)};mn.createRoot=function(t,e){if(!Jf(t))throw Error(ne(299));var n=!1,i="",r=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Ta(t.nodeType===8?t.parentNode:t),new Qf(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Tr(t)};mn.hydrate=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=r_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=i_(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};mn.render=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(ne(40));return t._reactRootContainer?(Tr(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};mn.unstable_batchedUpdates=Xf;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ql(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),sg.exports=mn;var Oy=sg.exports,Dp=Oy;vu.createRoot=Dp.createRoot,vu.hydrateRoot=Dp.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Da.apply(null,arguments)}var Ii;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ii||(Ii={}));const Ip="popstate";function ky(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=br(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ud("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:Pl(s))}function i(r,s){Jl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return zy(e,n,i,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function By(){return Math.random().toString(36).substr(2,8)}function Up(t,e){return{usr:t.state,key:t.key,idx:e}}function ud(t,e,n,i){return n===void 0&&(n=null),Da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?br(e):e,{state:n,key:e&&e.key||i||By()})}function Pl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function br(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function zy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Ii.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Da({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Ii.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:x.location,delta:u})}function h(p,u){o=Ii.Push;let v=ud(x.location,p,u);n&&n(v,p),c=d()+1;let g=Up(v,c),M=x.createHref(v);try{a.pushState(g,"",M)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(M)}s&&l&&l({action:o,location:x.location,delta:1})}function m(p,u){o=Ii.Replace;let v=ud(x.location,p,u);n&&n(v,p),c=d();let g=Up(v,c),M=x.createHref(v);a.replaceState(g,"",M),s&&l&&l({action:o,location:x.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Pl(p);return v=v.replace(/ $/,"%20"),Mt(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let x={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ip,f),l=p,()=>{r.removeEventListener(Ip,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(p){return a.go(p)}};return x}var Fp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fp||(Fp={}));function Hy(t,e,n){return n===void 0&&(n="/"),Vy(t,e,n)}function Vy(t,e,n,i){let r=typeof e=="string"?br(e):e,s=eh(r.pathname||"/",n);if(s==null)return null;let a=a_(t);Gy(a);let o=null,l=tS(s);for(let c=0;o==null&&c<a.length;++c)o=Qy(a[c],l);return o}function a_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Gi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),a_(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ky(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of o_(s.path))r(s,a,l)}),e}function o_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=o_(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Gy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Zy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Wy=/^:[\w-]+$/,jy=3,Xy=2,qy=1,$y=10,Yy=-2,Op=t=>t==="*";function Ky(t,e){let n=t.split("/"),i=n.length;return n.some(Op)&&(i+=Yy),e&&(i+=Xy),n.filter(r=>!Op(r)).reduce((r,s)=>r+(Wy.test(s)?jy:s===""?qy:$y),i)}function Zy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Qy(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Jy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Gi([s,f.pathname]),pathnameBase:aS(Gi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Gi([s,f.pathnameBase]))}return a}function Jy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=eS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let x=o[f]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[f];return m&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function eS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function tS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function eh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const nS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iS=t=>nS.test(t);function rS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?br(t):t,s;if(n)if(iS(n))s=n;else{if(n.includes("//")){let a=n;n=u_(n),Jl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=kp(n.substring(1),"/"):s=kp(n,e)}else s=e;return{pathname:s,search:oS(i),hash:lS(r)}}function kp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Fc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function l_(t,e){let n=sS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function c_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=br(t):(r=Da({},t),Mt(!r.pathname||!r.pathname.includes("?"),Fc("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),Fc("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),Fc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=rS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const u_=t=>t.replace(/\/\/+/g,"/"),Gi=t=>u_(t.join("/")),aS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const d_=["post","put","patch","delete"];new Set(d_);const uS=["get",...d_];new Set(uS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ia.apply(null,arguments)}const th=se.createContext(null),dS=se.createContext(null),Lr=se.createContext(null),ec=se.createContext(null),Nr=se.createContext({outlet:null,matches:[],isDataRoute:!1}),f_=se.createContext(null);function fS(t,e){let{relative:n}=e===void 0?{}:e;Ha()||Mt(!1);let{basename:i,navigator:r}=se.useContext(Lr),{hash:s,pathname:a,search:o}=p_(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Gi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ha(){return se.useContext(ec)!=null}function Va(){return Ha()||Mt(!1),se.useContext(ec).location}function h_(t){se.useContext(Lr).static||se.useLayoutEffect(t)}function nh(){let{isDataRoute:t}=se.useContext(Nr);return t?wS():hS()}function hS(){Ha()||Mt(!1);let t=se.useContext(th),{basename:e,future:n,navigator:i}=se.useContext(Lr),{matches:r}=se.useContext(Nr),{pathname:s}=Va(),a=JSON.stringify(l_(r,n.v7_relativeSplatPath)),o=se.useRef(!1);return h_(()=>{o.current=!0}),se.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=c_(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Gi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function p_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=se.useContext(Lr),{matches:r}=se.useContext(Nr),{pathname:s}=Va(),a=JSON.stringify(l_(r,i.v7_relativeSplatPath));return se.useMemo(()=>c_(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function pS(t,e){return mS(t,e)}function mS(t,e,n,i){Ha()||Mt(!1);let{navigator:r}=se.useContext(Lr),{matches:s}=se.useContext(Nr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Va(),d;if(e){var f;let p=typeof e=="string"?br(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Mt(!1),d=p}else d=c;let h=d.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Hy(t,{pathname:m}),x=yS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Gi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Gi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?se.createElement(ec.Provider,{value:{location:Ia({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ii.Pop}},x):x}function gS(){let t=TS(),e=cS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),n?se.createElement("pre",{style:r},n):null,null)}const vS=se.createElement(gS,null);class _S extends se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?se.createElement(Nr.Provider,{value:this.props.routeContext},se.createElement(f_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xS(t){let{routeContext:e,match:n,children:i}=t,r=se.useContext(th);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),se.createElement(Nr.Provider,{value:e},i)}function yS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||Mt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let m,_=!1,x=null,p=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,x=f.route.errorElement||vS,l&&(c<0&&h===0?(AS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),v=()=>{let g;return m?g=x:_?g=p:f.route.Component?g=se.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,se.createElement(xS,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?se.createElement(_S,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var m_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(m_||{}),g_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(g_||{});function SS(t){let e=se.useContext(th);return e||Mt(!1),e}function MS(t){let e=se.useContext(dS);return e||Mt(!1),e}function ES(t){let e=se.useContext(Nr);return e||Mt(!1),e}function v_(t){let e=ES(),n=e.matches[e.matches.length-1];return n.route.id||Mt(!1),n.route.id}function TS(){var t;let e=se.useContext(f_),n=MS(),i=v_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function wS(){let{router:t}=SS(m_.UseNavigateStable),e=v_(g_.UseNavigateStable),n=se.useRef(!1);return h_(()=>{n.current=!0}),se.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ia({fromRouteId:e},s)))},[t,e])}const Bp={};function AS(t,e,n){Bp[t]||(Bp[t]=!0)}function CS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Zo(t){Mt(!1)}function RS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ii.Pop,navigator:s,static:a=!1,future:o}=t;Ha()&&Mt(!1);let l=e.replace(/^\/*/,"/"),c=se.useMemo(()=>({basename:l,navigator:s,static:a,future:Ia({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=br(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:_="default"}=i,x=se.useMemo(()=>{let p=eh(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:_},navigationType:r}},[l,d,f,h,m,_,r]);return x==null?null:se.createElement(Lr.Provider,{value:c},se.createElement(ec.Provider,{children:n,value:x}))}function PS(t){let{children:e,location:n}=t;return pS(dd(e),n)}new Promise(()=>{});function dd(t,e){e===void 0&&(e=[]);let n=[];return se.Children.forEach(t,(i,r)=>{if(!se.isValidElement(i))return;let s=[...e,r];if(i.type===se.Fragment){n.push.apply(n,dd(i.props.children,s));return}i.type!==Zo&&Mt(!1),!i.props.index||!i.props.children||Mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=dd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fd.apply(null,arguments)}function bS(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function LS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function NS(t,e){return t.button===0&&(!e||e==="_self")&&!LS(t)}const DS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],IS="6";try{window.__reactRouterVersion=IS}catch{}const US="startTransition",zp=A0[US];function FS(t){let{basename:e,children:n,future:i,window:r}=t,s=se.useRef();s.current==null&&(s.current=ky({window:r,v5Compat:!0}));let a=s.current,[o,l]=se.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=se.useCallback(f=>{c&&zp?zp(()=>l(f)):l(f)},[l,c]);return se.useLayoutEffect(()=>a.listen(d),[a,d]),se.useEffect(()=>CS(i),[i]),se.createElement(RS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const OS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kn=se.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=bS(e,DS),{basename:m}=se.useContext(Lr),_,x=!1;if(typeof c=="string"&&kS.test(c)&&(_=c,OS))try{let g=new URL(window.location.href),M=c.startsWith("//")?new URL(g.protocol+c):new URL(c),P=eh(M.pathname,m);M.origin===g.origin&&P!=null?c=P+M.search+M.hash:x=!0}catch{}let p=fS(c,{relative:r}),u=BS(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function v(g){i&&i(g),g.defaultPrevented||u(g)}return se.createElement("a",fd({},h,{href:_||p,onClick:x||s?i:v,ref:n,target:l}))});var Hp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hp||(Hp={}));var Vp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vp||(Vp={}));function BS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=nh(),c=Va(),d=p_(t,{relative:a});return se.useCallback(f=>{if(NS(f,n)){f.preventDefault();let h=i!==void 0?i:Pl(c)===Pl(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function tc(){const t=nh(),e=Va();return n=>{var i;e.pathname==="/"?(i=document.getElementById(n))==null||i.scrollIntoView({behavior:"smooth"}):(sessionStorage.setItem("scrollTo",n),t("/"))}}function __(){const[t,e]=se.useState(!1),n=tc(),i=r=>{e(!1),n(r)};return y.jsx("header",{className:"nav",children:y.jsxs("div",{className:"container nav__inner",children:[y.jsxs(Kn,{to:"/",className:"brand",children:[y.jsx("span",{className:"brand__mark",children:"MK"})," Phone"]}),y.jsxs("nav",{className:`nav__links ${t?"open":""}`,children:[y.jsx("button",{className:"nav__link",onClick:()=>i("services"),children:"Services"}),y.jsx(Kn,{className:"nav__link",to:"/tarifs",onClick:()=>e(!1),children:"Tarifs"}),y.jsx("button",{className:"nav__link",onClick:()=>i("vente"),children:"Vente & rachat"}),y.jsx("button",{className:"nav__link",onClick:()=>i("faq"),children:"FAQ"}),y.jsx("button",{className:"nav__link",onClick:()=>i("contact"),children:"Contact"})]}),y.jsx("button",{className:"btn btn--primary nav__cta",onClick:()=>i("rdv"),children:"Prendre RDV"}),y.jsx("button",{className:"nav__burger","aria-label":"Menu",onClick:()=>e(r=>!r),children:"☰"})]})})}function zS(){const t=tc();return y.jsxs("section",{className:"hero hero--photo",id:"top",children:[y.jsx("img",{className:"hero__bgimg",src:"./img/hero.jpg",alt:"Technicien MK Phone réparant un smartphone"}),y.jsx("div",{className:"hero__scrim"}),y.jsx("div",{className:"container hero__inner",children:y.jsxs("div",{className:"hero__text",children:[y.jsx("p",{className:"hero__eyebrow",children:"Déplacements dans toute l'Île-de-France"}),y.jsxs("h1",{className:"hero__title",children:["La réparation de votre téléphone,",y.jsx("br",{}),y.jsx("em",{children:"simple, rapide et moins chère."})]}),y.jsxs("p",{className:"hero__sub",children:["MK Phone répare iPhone, Samsung, tablettes et PC partout en Île-de-France. Des tarifs ",y.jsx("strong",{children:"30 à 40 € moins chers que la concurrence"}),", et on se déplace chez vous."]}),y.jsxs("div",{className:"hero__actions",children:[y.jsx("button",{className:"btn btn--primary btn--lg",onClick:()=>t("rdv"),children:"Prendre rendez-vous"}),y.jsx(Kn,{to:"/tarifs",className:"btn btn--outline-white btn--lg",children:"Voir les tarifs"})]}),y.jsxs("div",{className:"hero__stats",children:[y.jsxs("div",{children:[y.jsx("strong",{children:"30 min"}),y.jsx("span",{children:"Réparation express"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"−30 à 40 €"}),y.jsx("span",{children:"vs la concurrence"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"Île-de-France"}),y.jsx("span",{children:"Déplacement à domicile"})]})]})]})})]})}const wr=[{marque:"Apple",modele:"iPhone 16 Pro Max",ecran:234,batterie:84,charge:74,camera:104,vitre:134,desox:64},{marque:"Apple",modele:"iPhone 16 Pro",ecran:214,batterie:79,charge:69,camera:94,vitre:124,desox:64},{marque:"Apple",modele:"iPhone 16",ecran:174,batterie:74,charge:64,camera:84,vitre:114,desox:64},{marque:"Apple",modele:"iPhone 15 Pro Max",ecran:204,batterie:79,charge:69,camera:94,vitre:124,desox:64},{marque:"Apple",modele:"iPhone 15",ecran:154,batterie:69,charge:59,camera:79,vitre:104,desox:64},{marque:"Apple",modele:"iPhone 14 Pro Max",ecran:184,batterie:69,charge:64,camera:84,vitre:114,desox:59},{marque:"Apple",modele:"iPhone 14",ecran:134,batterie:59,charge:54,camera:74,vitre:94,desox:59},{marque:"Apple",modele:"iPhone 13 Pro Max",ecran:154,batterie:64,charge:59,camera:79,vitre:104,desox:59},{marque:"Apple",modele:"iPhone 13",ecran:114,batterie:54,charge:49,camera:64,vitre:84,desox:54},{marque:"Apple",modele:"iPhone 12 Pro Max",ecran:124,batterie:54,charge:54,camera:69,vitre:94,desox:54},{marque:"Apple",modele:"iPhone 12",ecran:94,batterie:49,charge:49,camera:59,vitre:74,desox:54},{marque:"Apple",modele:"iPhone 11 Pro Max",ecran:104,batterie:49,charge:49,camera:64,vitre:84,desox:49},{marque:"Apple",modele:"iPhone 11",ecran:74,batterie:44,charge:44,camera:54,vitre:69,desox:49},{marque:"Apple",modele:"iPhone XR",ecran:69,batterie:44,charge:44,camera:49,vitre:64,desox:49},{marque:"Apple",modele:"iPhone X",ecran:74,batterie:44,charge:44,camera:49,vitre:64,desox:49},{marque:"Apple",modele:"iPhone 8 / SE 2020",ecran:44,batterie:39,charge:39,camera:44,vitre:54,desox:44},{marque:"Apple",modele:"iPhone 7",ecran:39,batterie:34,charge:39,camera:44,vitre:null,desox:44},{marque:"Samsung",modele:"Galaxy S24 Ultra",ecran:264,batterie:79,charge:69,camera:94,vitre:114,desox:64},{marque:"Samsung",modele:"Galaxy S24",ecran:194,batterie:69,charge:64,camera:84,vitre:94,desox:64},{marque:"Samsung",modele:"Galaxy S23",ecran:174,batterie:64,charge:59,camera:79,vitre:89,desox:59},{marque:"Samsung",modele:"Galaxy S22",ecran:154,batterie:59,charge:54,camera:74,vitre:84,desox:59},{marque:"Samsung",modele:"Galaxy S21",ecran:134,batterie:54,charge:54,camera:69,vitre:79,desox:54},{marque:"Samsung",modele:"Galaxy A54",ecran:104,batterie:49,charge:49,camera:59,vitre:64,desox:49},{marque:"Samsung",modele:"Galaxy A53",ecran:94,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"Samsung",modele:"Galaxy A34",ecran:89,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"Samsung",modele:"Galaxy A14",ecran:64,batterie:39,charge:39,camera:44,vitre:49,desox:44},{marque:"Xiaomi",modele:"Xiaomi 13",ecran:134,batterie:54,charge:49,camera:64,vitre:74,desox:54},{marque:"Xiaomi",modele:"Xiaomi 12",ecran:119,batterie:49,charge:49,camera:59,vitre:69,desox:54},{marque:"Xiaomi",modele:"Redmi Note 13",ecran:84,batterie:44,charge:44,camera:49,vitre:54,desox:49},{marque:"Xiaomi",modele:"Redmi Note 12",ecran:74,batterie:39,charge:39,camera:44,vitre:49,desox:49},{marque:"Xiaomi",modele:"Redmi 12",ecran:64,batterie:39,charge:39,camera:44,vitre:44,desox:44},{marque:"Huawei",modele:"P40 Pro",ecran:129,batterie:54,charge:49,camera:64,vitre:74,desox:54},{marque:"Huawei",modele:"P30 Pro",ecran:104,batterie:49,charge:44,camera:59,vitre:64,desox:49},{marque:"Huawei",modele:"P30 Lite",ecran:74,batterie:39,charge:39,camera:44,vitre:49,desox:44},{marque:"Huawei",modele:"Mate 20 Pro",ecran:94,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"Google",modele:"Pixel 8 Pro",ecran:154,batterie:59,charge:54,camera:74,vitre:84,desox:54},{marque:"Google",modele:"Pixel 8",ecran:129,batterie:54,charge:49,camera:64,vitre:74,desox:54},{marque:"Google",modele:"Pixel 7",ecran:104,batterie:49,charge:49,camera:59,vitre:64,desox:49},{marque:"Google",modele:"Pixel 6",ecran:94,batterie:44,charge:44,camera:54,vitre:59,desox:49},{marque:"iPad",modele:'iPad Pro 12.9"',ecran:224,batterie:89,charge:74,camera:84,vitre:null,desox:74},{marque:"iPad",modele:'iPad Pro 11"',ecran:194,batterie:79,charge:69,camera:79,vitre:null,desox:74},{marque:"iPad",modele:"iPad Air",ecran:154,batterie:69,charge:59,camera:69,vitre:null,desox:64},{marque:"iPad",modele:"iPad 10 / 9",ecran:104,batterie:59,charge:54,camera:59,vitre:null,desox:59},{marque:"iPad",modele:"iPad mini",ecran:114,batterie:59,charge:54,camera:59,vitre:null,desox:59}],gs=[{cle:"ecran",nom:"Écran"},{cle:"batterie",nom:"Batterie"},{cle:"charge",nom:"Connecteur de charge"},{cle:"camera",nom:"Caméra"},{cle:"vitre",nom:"Vitre arrière"},{cle:"desox",nom:"Désoxydation"}],HS=[{nom:"Sarah L.",ville:"Paris 15e",texte:"Écran d'iPhone 13 changé en 25 minutes, nickel et moins cher qu'ailleurs. Je recommande !"},{nom:"Karim B.",ville:"Créteil",texte:"Batterie de Samsung remplacée à domicile. Ponctuel, pro et sympa. Rien à redire."},{nom:"Émilie D.",ville:"Boulogne",texte:"Mon iPad ne chargeait plus, réparé le jour même. Service au top et prix honnête."}],VS=[{q:"Combien de temps dure une réparation ?",r:"La plupart des réparations courantes (écran, batterie) sont réalisées en 30 minutes environ, pendant que vous attendez."},{q:"Vos réparations sont-elles garanties ?",r:"Oui. Les batteries sont garanties 6 mois. Pour les écrans, nous proposons plusieurs gammes : la garantie va de 3 à 6 mois pour les gammes compatibles, et jusqu'à 1 an pour les gammes premium."},{q:"Êtes-vous vraiment moins chers ?",r:"Oui : nos tarifs sont en moyenne 30 à 40 € moins chers que la concurrence, à qualité de pièce équivalente."},{q:"Intervenez-vous à domicile ?",r:"Oui, nous nous déplaçons partout en Île-de-France, à votre domicile ou sur votre lieu de travail, sur rendez-vous."},{q:"Rachetez-vous les téléphones ?",r:"Oui, nous rachetons votre ancien téléphone (fonctionnel ou en panne) avec une estimation gratuite et un paiement immédiat. Nous vendons aussi des téléphones reconditionnés et testés."},{q:"Que se passe-t-il si vous ne pouvez pas réparer ?",r:"Le diagnostic est gratuit. Si la réparation n'est pas possible ou si vous refusez le devis, vous ne payez rien."},{q:"Quels moyens de paiement acceptez-vous ?",r:"Espèces et carte bancaire. Un reçu vous est remis à chaque intervention."}],GS="Écrans garantis de 3 mois à 1 an selon la gamme · Batteries garanties 6 mois",dn={tel:"07 51 48 43 92",telLink:"+33751484392",email:"aminemekhfi45@gmail.com",zone:"Toute l'Île-de-France"},WS={ecran:"./img/services/ecran.jpg",batterie:"./img/services/batterie.jpg",charge:"./img/services/charge.jpg",camera:"./img/services/camera.jpg",vitre:"./img/services/vitre.jpg",desox:"./img/services/desox.jpg"},jS={ecran:y.jsxs(y.Fragment,{children:[y.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2.5"}),y.jsx("line",{x1:"10",y1:"18",x2:"14",y2:"18"})]}),batterie:y.jsxs(y.Fragment,{children:[y.jsx("rect",{x:"2",y:"7",width:"16",height:"10",rx:"2"}),y.jsx("line",{x1:"21",y1:"10",x2:"21",y2:"14"}),y.jsx("line",{x1:"6",y1:"10",x2:"6",y2:"14"}),y.jsx("line",{x1:"10",y1:"10",x2:"10",y2:"14"})]}),charge:y.jsx("path",{d:"M13 2 3 14h7l-1 8 10-12h-7l1-8Z"}),camera:y.jsxs(y.Fragment,{children:[y.jsx("path",{d:"M3 8a2 2 0 0 1 2-2h1.5l1-2h5l1 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}),y.jsx("circle",{cx:"12",cy:"12.5",r:"3.5"})]}),vitre:y.jsxs(y.Fragment,{children:[y.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2.5"}),y.jsx("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),y.jsx("line",{x1:"4",y1:"17",x2:"20",y2:"17"})]}),desox:y.jsx("path",{d:"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"}),express:y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:"12",cy:"12",r:"9"}),y.jsx("path",{d:"M12 7v5l3 2"})]}),garantie:y.jsxs(y.Fragment,{children:[y.jsx("path",{d:"M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z"}),y.jsx("path",{d:"m9 12 2 2 4-4"})]}),prix:y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:"12",cy:"12",r:"9"}),y.jsx("path",{d:"M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0"})]}),domicile:y.jsxs(y.Fragment,{children:[y.jsx("path",{d:"M4 11 12 4l8 7"}),y.jsx("path",{d:"M6 10v9h12v-9"}),y.jsx("path",{d:"M10 19v-5h4v5"})]}),expert:y.jsx("path",{d:"M14.7 6.3a4 4 0 0 0-5.6 5.6l-6.1 6.1 1.4 1.4 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.1 2.1-1.9-.5-.5-1.9Z"}),correspondance:y.jsxs(y.Fragment,{children:[y.jsx("path",{d:"M3 8 12 3l9 5-9 5Z"}),y.jsx("path",{d:"M3 8v8l9 5 9-5V8"}),y.jsx("line",{x1:"12",y1:"13",x2:"12",y2:"21"})]}),phone:y.jsxs(y.Fragment,{children:[y.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"3"}),y.jsx("line",{x1:"10",y1:"18",x2:"14",y2:"18"})]}),chat:y.jsx("path",{d:"M4 5h16v11H8l-4 4V5Z"}),search:y.jsxs(y.Fragment,{children:[y.jsx("circle",{cx:"11",cy:"11",r:"7"}),y.jsx("line",{x1:"21",y1:"21",x2:"16.5",y2:"16.5"})]})};function hd({name:t,className:e=""}){return y.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:jS[t]||null})}function XS(){return y.jsx("section",{className:"section",id:"services",children:y.jsxs("div",{className:"container",children:[y.jsx("p",{className:"section__eyebrow",children:"Nos services"}),y.jsx("h2",{className:"section__title",children:"Toutes les réparations, un seul atelier"}),y.jsx("div",{className:"cards",children:gs.map(t=>{const e=Math.min(...wr.map(i=>i[t.cle]).filter(i=>i!=null)),n=WS[t.cle];return y.jsxs("article",{className:`service${n?" service--photo":""}`,style:n?{backgroundImage:`url(${n})`}:void 0,children:[y.jsx("span",{className:"ic",children:y.jsx(hd,{name:t.cle})}),y.jsx("h3",{children:t.nom}),y.jsxs("p",{children:["Remplacement et réparation ",t.nom.toLowerCase()," sur iPhone, Samsung et autres marques."]}),y.jsxs("div",{className:"service__from",children:["Dès ",e," €"]})]},t.cle)})})]})})}const qS=[{n:"01",titre:"Vous réservez",texte:"Choisissez l'appareil, la réparation et un créneau en ligne, ou appelez-nous."},{n:"02",titre:"Diagnostic gratuit",texte:"On identifie la panne et on vous donne un devis clair, sans engagement."},{n:"03",titre:"Réparation express",texte:"La plupart des réparations sont faites en 30 minutes, avec pièces garanties."},{n:"04",titre:"Garantie incluse",texte:"Écrans garantis de 3 mois à 1 an selon la gamme, batteries garanties 6 mois."}];function $S(){return y.jsx("section",{className:"section",id:"process",children:y.jsxs("div",{className:"container",children:[y.jsx("p",{className:"section__eyebrow",children:"Comment ça marche"}),y.jsx("h2",{className:"section__title",children:"Réparé en 4 étapes"}),y.jsx("div",{className:"steps",children:qS.map(t=>y.jsxs("div",{className:"step",children:[y.jsx("span",{className:"step__n",children:t.n}),y.jsx("h3",{children:t.titre}),y.jsx("p",{children:t.texte})]},t.n))})]})})}function YS(){return y.jsx("section",{className:"section section--alt",id:"apropos",children:y.jsxs("div",{className:"container apropos",children:[y.jsx("div",{className:"apropos__media",children:y.jsx("img",{src:"./img/atelier.jpg",alt:"Atelier MK Phone",loading:"lazy"})}),y.jsxs("div",{children:[y.jsx("p",{className:"section__eyebrow",children:"À propos"}),y.jsx("h2",{className:"section__title",children:"MK Phone, votre expert de proximité"}),y.jsx("p",{className:"section__lead",children:"Chez MK Phone, on répare votre téléphone avec soin, rapidement et à prix juste — 30 à 40 € moins cher que la concurrence. Passionnés de tech, nous nous déplaçons dans toute l'Île-de-France : à domicile, au travail ou en atelier. Chaque réparation est testée et garantie."}),y.jsxs("div",{className:"apropos__stats",children:[y.jsxs("div",{children:[y.jsx("strong",{children:"+5 000"}),y.jsx("span",{children:"Appareils réparés"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"4,9/5"}),y.jsx("span",{children:"Avis clients"})]}),y.jsxs("div",{children:[y.jsx("strong",{children:"6j/7"}),y.jsx("span",{children:"Disponibles"})]})]})]})]})})}function KS(){return y.jsx("section",{className:"section",id:"avis",children:y.jsxs("div",{className:"container",children:[y.jsx("p",{className:"section__eyebrow",children:"Avis clients"}),y.jsx("h2",{className:"section__title",children:"Ils nous ont fait confiance"}),y.jsx("div",{className:"cards cards--3",children:HS.map(t=>y.jsxs("article",{className:"feature avis",children:[y.jsx("div",{className:"avis__stars",children:"★★★★★"}),y.jsxs("p",{className:"avis__texte",children:["« ",t.texte," »"]}),y.jsxs("div",{className:"avis__auteur",children:[y.jsx("strong",{children:t.nom}),y.jsx("span",{children:t.ville})]})]},t.nom))})]})})}function ZS(){return y.jsx("section",{className:"section section--alt",id:"faq",children:y.jsxs("div",{className:"container faq",children:[y.jsx("p",{className:"section__eyebrow",children:"FAQ"}),y.jsx("h2",{className:"section__title",children:"Questions fréquentes"}),y.jsx("div",{className:"faq__list",children:VS.map(t=>y.jsxs("details",{className:"faq__item",children:[y.jsxs("summary",{children:[t.q,y.jsx("span",{className:"faq__plus",children:"+"})]}),y.jsx("p",{children:t.r})]},t.q))})]})})}const Gp=[...new Set(wr.map(t=>t.marque))],QS=["09:00 – 10:00","10:00 – 11:00","11:00 – 12:00","14:00 – 15:00","15:00 – 16:00","16:00 – 17:00","17:00 – 18:00"];function JS({prefill:t}){var g;const[e,n]=se.useState(Gp[0]),[i,r]=se.useState(""),[s,a]=se.useState("ecran"),[o,l]=se.useState(!1),[c,d]=se.useState(null),f=se.useRef(null),h=new Date().toISOString().split("T")[0],m=se.useMemo(()=>wr.filter(M=>M.marque===e),[e]),_=se.useMemo(()=>wr.find(M=>M.modele===i),[i]);se.useEffect(()=>{var M;m.find(P=>P.modele===i)||r(((M=m[0])==null?void 0:M.modele)||"")},[m]),se.useEffect(()=>{t!=null&&t.marque&&(n(t.marque),r(t.modele))},[t]);const x=_?_[s]:null,p=((g=gs.find(M=>M.cle===s))==null?void 0:g.nom)||"",u=x!=null?y.jsxs(y.Fragment,{children:["Estimation : ",y.jsxs("strong",{children:[x," €"]})," ",y.jsx("span",{className:"muted",children:"(30 à 40 € sous la concurrence · devis confirmé en atelier)"})]}):y.jsxs(y.Fragment,{children:["Cette réparation est établie ",y.jsx("strong",{children:"sur devis gratuit"}),"."]});async function v(M){M.preventDefault();const P=M.target,C=Object.fromEntries(new FormData(P));if(!C.nom||!C.tel||!i||!C.date||!C.creneau){d({type:"error",html:"Merci de remplir tous les champs obligatoires (*)."});return}const A=C.nom.split(" ")[0],b=x!=null?`${x} €`:"sur devis",K=`Demande de RDV — ${e} ${i}`,S=`Nom: ${C.nom}
Téléphone: ${C.tel}
E-mail: ${C.email||"—"}
Appareil: ${e} ${i}
Réparation: ${p} (${b})
Date: ${C.date} — Créneau: ${C.creneau}
Message: ${C.message||"—"}`,w=`mailto:${dn.email}?subject=${encodeURIComponent(K)}&body=${encodeURIComponent(S)}`;d({type:"ok",mailto:w,html:`✅ Merci ${A} ! Votre demande pour « ${p} » (${e} ${i}, le ${C.date} — ${C.creneau}) est enregistrée. Nous vous confirmons par téléphone.`}),P.reset()}return y.jsx("section",{className:"section",id:"rdv",children:y.jsxs("div",{className:"container rdv",children:[y.jsxs("div",{className:"rdv__intro",children:[y.jsx("p",{className:"section__eyebrow",children:"Rendez-vous"}),y.jsx("h2",{className:"section__title",children:"Réservez votre créneau"}),y.jsx("p",{className:"section__lead",children:"Choisissez votre appareil, la réparation et un créneau. Nous vous confirmons par téléphone. C'est gratuit et sans engagement, partout en Île-de-France."}),y.jsxs("ul",{className:"rdv__points",children:[y.jsx("li",{children:"Confirmation rapide par téléphone"}),y.jsx("li",{children:"Devis clair avant toute intervention"}),y.jsx("li",{children:"Aucun frais si vous ne réparez pas"})]})]}),y.jsxs("form",{className:"rdv__form",ref:f,onSubmit:v,noValidate:!0,children:[y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"nom",children:"Nom complet *"}),y.jsx("input",{id:"nom",name:"nom",type:"text",required:!0})]}),y.jsxs("div",{className:"field-row",children:[y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"tel",children:"Téléphone *"}),y.jsx("input",{id:"tel",name:"tel",type:"tel",placeholder:"06 12 34 56 78",required:!0})]}),y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"email",children:"E-mail"}),y.jsx("input",{id:"email",name:"email",type:"email",placeholder:"vous@exemple.fr"})]})]}),y.jsxs("div",{className:"field-row",children:[y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"marque",children:"Marque *"}),y.jsx("select",{id:"marque",name:"marque",value:e,onChange:M=>n(M.target.value),children:Gp.map(M=>y.jsx("option",{children:M},M))})]}),y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"modele",children:"Modèle *"}),y.jsx("select",{id:"modele",name:"modele",value:i,onChange:M=>r(M.target.value),children:m.map(M=>y.jsx("option",{children:M.modele},M.modele))})]})]}),y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"reparation",children:"Réparation *"}),y.jsx("select",{id:"reparation",name:"reparation",value:s,onChange:M=>a(M.target.value),children:gs.map(M=>{const P=_?_[M.cle]:null;return y.jsxs("option",{value:M.cle,children:[M.nom,P==null?" — sur devis":` — ${P} €`]},M.cle)})})]}),y.jsxs("div",{className:"field-row",children:[y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"date",children:"Date souhaitée *"}),y.jsx("input",{id:"date",name:"date",type:"date",min:h,required:!0})]}),y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"creneau",children:"Créneau *"}),y.jsxs("select",{id:"creneau",name:"creneau",required:!0,defaultValue:"",children:[y.jsx("option",{value:"",children:"—"}),QS.map(M=>y.jsx("option",{children:M},M))]})]})]}),y.jsxs("div",{className:"field",children:[y.jsx("label",{htmlFor:"message",children:"Message (facultatif)"}),y.jsx("textarea",{id:"message",name:"message",rows:"3",placeholder:"Décrivez la panne, votre ville…"})]}),y.jsx("div",{className:"rdv__estimation",children:u}),y.jsx("button",{type:"submit",className:"btn btn--primary btn--lg btn--block",disabled:o,children:o?"Envoi en cours…":"Confirmer le rendez-vous"}),c&&y.jsxs("p",{className:`rdv__confirm ${c.type==="error"?"error":""}`,children:[c.html," ",c.mailto&&y.jsx("a",{href:c.mailto,children:"Envoyer aussi par e-mail →"})]})]})]})})}function eM(){return y.jsx("section",{className:"section",id:"vente",children:y.jsxs("div",{className:"container",children:[y.jsx("p",{className:"section__eyebrow",children:"Vente & rachat"}),y.jsx("h2",{className:"section__title",children:"On rachète et on vend des téléphones"}),y.jsx("p",{className:"section__lead",children:"Envie de changer de téléphone ou de vous séparer de l'ancien ? MK Phone rachète votre appareil et vous propose des smartphones reconditionnés, testés et garantis."}),y.jsxs("div",{className:"buysell",children:[y.jsxs("article",{className:"buysell__card buysell__card--buy",children:[y.jsx("span",{className:"ic",children:y.jsx(hd,{name:"prix"})}),y.jsx("h3",{children:"Nous rachetons votre téléphone"}),y.jsx("p",{children:"Fonctionnel ou en panne, tous modèles. Estimation gratuite et paiement immédiat."}),y.jsxs("ul",{className:"buysell__list",children:[y.jsx("li",{children:"Estimation gratuite en quelques minutes"}),y.jsx("li",{children:"Paiement immédiat (espèces ou virement)"}),y.jsx("li",{children:"Reprise même en cas d'écran cassé"})]}),y.jsx("a",{className:"btn btn--primary",href:`tel:${dn.telLink}`,children:"Estimer mon téléphone"})]}),y.jsxs("article",{className:"buysell__card buysell__card--sell",children:[y.jsx("span",{className:"ic",children:y.jsx(hd,{name:"phone"})}),y.jsx("h3",{children:"Achetez un téléphone reconditionné"}),y.jsx("p",{children:"Des smartphones vérifiés, testés et garantis, à prix malins. iPhone, Samsung et plus."}),y.jsxs("ul",{className:"buysell__list",children:[y.jsx("li",{children:"Appareils testés et nettoyés"}),y.jsx("li",{children:"Garantie incluse"}),y.jsx("li",{children:"Prix bien plus bas que le neuf"})]}),y.jsx("a",{className:"btn btn--outline",href:`mailto:${dn.email}?subject=${encodeURIComponent("Achat téléphone reconditionné")}`,children:"Voir les disponibilités"})]})]})]})})}function tM(){const t=tc();return y.jsx("section",{className:"section",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"finalcta",children:[y.jsx("p",{className:"finalcta__eyebrow",children:"Prêt à réparer ?"}),y.jsx("h2",{className:"finalcta__title",children:"Votre téléphone mérite mieux qu'un écran cassé."}),y.jsx("p",{className:"finalcta__sub",children:"Réservez en ligne ou appelez-nous : diagnostic gratuit et réparation le jour même, partout en Île-de-France."}),y.jsxs("div",{className:"finalcta__actions",children:[y.jsx("button",{className:"btn btn--white btn--lg",onClick:()=>t("rdv"),children:"Prendre rendez-vous"}),y.jsx("a",{className:"btn btn--outline-white btn--lg",href:`tel:${dn.telLink}`,children:dn.tel})]})]})})})}function x_(){const t=new Date().getFullYear(),e=tc();return y.jsxs("footer",{className:"footer",id:"contact",children:[y.jsxs("div",{className:"container footer__inner",children:[y.jsxs("div",{children:[y.jsxs(Kn,{to:"/",className:"brand brand--footer",children:[y.jsx("span",{className:"brand__mark",children:"MK"})," Phone"]}),y.jsx("p",{className:"footer__desc",children:"Réparation, vente et rachat de smartphones, tablettes et PC. Déplacements dans toute l'Île-de-France."})]}),y.jsxs("div",{className:"footer__col",children:[y.jsx("h4",{children:"Contact"}),y.jsx("p",{children:y.jsx("a",{href:`tel:${dn.telLink}`,children:dn.tel})}),y.jsx("p",{children:y.jsx("a",{href:`mailto:${dn.email}`,children:dn.email})})]}),y.jsxs("div",{className:"footer__col",children:[y.jsx("h4",{children:"Zone & horaires"}),y.jsx("p",{children:dn.zone}),y.jsx("p",{children:"Lun – Sam : 9h00 – 19h00"})]}),y.jsxs("div",{className:"footer__col",children:[y.jsx("h4",{children:"Liens"}),y.jsx("p",{children:y.jsx(Kn,{to:"/tarifs",children:"Tarifs"})}),y.jsx("p",{children:y.jsx("button",{className:"linklike",onClick:()=>e("vente"),children:"Vente & rachat"})}),y.jsx("p",{children:y.jsx("button",{className:"linklike",onClick:()=>e("rdv"),children:"Rendez-vous"})}),y.jsx("p",{children:y.jsx(Kn,{to:"/mentions-legales",children:"Mentions légales"})})]})]}),y.jsxs("div",{className:"container footer__bottom",children:[y.jsxs("span",{children:["© ",t," MK Phone. Tous droits réservés."]}),y.jsx("span",{children:"Réparation express · Vente & rachat · Île-de-France"})]})]})}function y_(){return y.jsxs("div",{className:"aurora","aria-hidden":"true",children:[y.jsx("span",{className:"aurora__blob aurora__blob--1"}),y.jsx("span",{className:"aurora__blob aurora__blob--2"}),y.jsx("span",{className:"aurora__blob aurora__blob--3"}),y.jsx("span",{className:"aurora__blob aurora__blob--4"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="169",nM=0,Wp=1,iM=2,S_=1,rM=2,ri=3,$i=0,Wt=1,oi=2,Wi=0,vs=1,jp=2,Xp=3,qp=4,sM=5,dr=100,aM=101,oM=102,lM=103,cM=104,uM=200,dM=201,fM=202,hM=203,pd=204,md=205,pM=206,mM=207,gM=208,vM=209,_M=210,xM=211,yM=212,SM=213,MM=214,gd=0,vd=1,_d=2,Cs=3,xd=4,yd=5,Sd=6,Md=7,M_=0,EM=1,TM=2,ji=0,wM=1,AM=2,CM=3,RM=4,PM=5,bM=6,LM=7,E_=300,Rs=301,Ps=302,Ed=303,Td=304,nc=306,wd=1e3,gr=1001,Ad=1002,Mn=1003,NM=1004,po=1005,On=1006,Oc=1007,vr=1008,vi=1009,T_=1010,w_=1011,Ua=1012,rh=1013,Ar=1014,ui=1015,Ga=1016,sh=1017,ah=1018,bs=1020,A_=35902,C_=1021,R_=1022,Bn=1023,P_=1024,b_=1025,_s=1026,Ls=1027,L_=1028,oh=1029,N_=1030,lh=1031,ch=1033,Qo=33776,Jo=33777,el=33778,tl=33779,Cd=35840,Rd=35841,Pd=35842,bd=35843,Ld=36196,Nd=37492,Dd=37496,Id=37808,Ud=37809,Fd=37810,Od=37811,kd=37812,Bd=37813,zd=37814,Hd=37815,Vd=37816,Gd=37817,Wd=37818,jd=37819,Xd=37820,qd=37821,nl=36492,$d=36494,Yd=36495,D_=36283,Kd=36284,Zd=36285,Qd=36286,DM=3200,IM=3201,I_=0,UM=1,Li="",jn="srgb",Ji="srgb-linear",uh="display-p3",ic="display-p3-linear",bl="linear",ot="srgb",Ll="rec709",Nl="p3",Fr=7680,$p=519,FM=512,OM=513,kM=514,U_=515,BM=516,zM=517,HM=518,VM=519,Yp=35044,Kp="300 es",di=2e3,Dl=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Jd=180/Math.PI;function Wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function GM(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],v=r[1],g=r[4],M=r[7],P=r[2],C=r[5],A=r[8];return s[0]=a*x+o*v+l*P,s[3]=a*p+o*g+l*C,s[6]=a*u+o*M+l*A,s[1]=c*x+d*v+f*P,s[4]=c*p+d*g+f*C,s[7]=c*u+d*M+f*A,s[2]=h*x+m*v+_*P,s[5]=h*p+m*g+_*C,s[8]=h*u+m*M+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ue;function F_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WM(){const t=Il("canvas");return t.style.display="block",t}const Zp={};function il(t){t in Zp||(Zp[t]=!0,console.warn(t))}function jM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function XM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[Ji]:{transfer:bl,primaries:Ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jn]:{transfer:ot,primaries:Ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ic]:{transfer:bl,primaries:Nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jp),fromReference:t=>t.applyMatrix3(Qp)},[uh]:{transfer:ot,primaries:Nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jp),fromReference:t=>t.applyMatrix3(Qp).convertLinearToSRGB()}},$M=new Set([Ji,ic]),Qe={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$M.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$s[e].toReference,r=$s[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $s[t].primaries},getTransfer:function(t){return t===Li?bl:$s[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray($s[e].luminanceCoefficients)}};function xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class YM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Il("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xs(n[i]/255)*255):n[i]=xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KM=0;class O_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;class nn extends Fs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=gr,r=gr,s=On,a=vr,o=Bn,l=vi,c=nn.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Wa(),this.name="",this.source=new O_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=E_;nn.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,n=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,P=(u+1)/2,C=(d+h)/4,A=(f+x)/4,b=(_+p)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=A/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-x)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QM extends Fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new tt(0,0,e,n),this.scissorTest=!1,this.viewport=new tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new O_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends QM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k_ extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JM extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||c!==m||d!==_){let p=1-o;const u=l*h+c*m+d*_+f*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,u*v);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const M=o*v;if(l=l*p+h*M,c=c*p+m*M,d=d*p+_*M,f=f*p+x*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-o*m,e[n+2]=c*_+d*m+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new F,em=new ja;class Xa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),go.subVectors(this.max,Ys),kr.subVectors(e.a,Ys),Br.subVectors(e.b,Ys),zr.subVectors(e.c,Ys),Si.subVectors(Br,kr),Mi.subVectors(zr,Br),tr.subVectors(kr,zr);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-tr.z,tr.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,tr.z,0,-tr.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-tr.y,tr.x,0];return!Wc(n,kr,Br,zr,go)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,kr,Br,zr,go))?!1:(vo.crossVectors(Si,Mi),n=[vo.x,vo.y,vo.z],Wc(n,kr,Br,zr,go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,mo=new Xa,kr=new F,Br=new F,zr=new F,Si=new F,Mi=new F,tr=new F,Ys=new F,go=new F,vo=new F,nr=new F;function Wc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),d=i.dot(nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const eE=new Xa,Ks=new F,jc=new F;class qa{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(jc)),this.expandByPoint(Ks.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new F,Xc=new F,_o=new F,Ei=new F,qc=new F,xo=new F,$c=new F;class dh{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),_o.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(_o),o=Ei.dot(this.direction),l=-Ei.dot(_o),c=Ei.lengthSq(),d=Math.abs(1-a*a);let f,h,m,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xc).addScaledVector(_o,h),m}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),xo.subVectors(i,e),$c.crossVectors(qc,xo);let a=this.direction.dot($c),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(xo.crossVectors(Ei,xo));if(l<0)return null;const c=o*this.direction.dot(qc.cross(Ei));if(c<0||l+c>a)return null;const d=-o*Ei.dot($c);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,_,x,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,x,p)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,_=o*d,x=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,x=c*f;n[0]=h+x*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,x=c*f;n[0]=h-x*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,_=o*d,x=o*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=x-h*f,n[8]=_*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=a*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ti.crossVectors(i,on),Ti.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ti.crossVectors(i,on)),Ti.normalize(),yo.crossVectors(on,Ti),r[0]=Ti.x,r[4]=yo.x,r[8]=on.x,r[1]=Ti.y,r[5]=yo.y,r[9]=on.y,r[2]=Ti.z,r[6]=yo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],P=i[15],C=r[0],A=r[4],b=r[8],K=r[12],S=r[1],w=r[5],W=r[9],H=r[13],X=r[2],ee=r[6],V=r[10],Q=r[14],N=r[3],Y=r[7],Z=r[11],oe=r[15];return s[0]=a*C+o*S+l*X+c*N,s[4]=a*A+o*w+l*ee+c*Y,s[8]=a*b+o*W+l*V+c*Z,s[12]=a*K+o*H+l*Q+c*oe,s[1]=d*C+f*S+h*X+m*N,s[5]=d*A+f*w+h*ee+m*Y,s[9]=d*b+f*W+h*V+m*Z,s[13]=d*K+f*H+h*Q+m*oe,s[2]=_*C+x*S+p*X+u*N,s[6]=_*A+x*w+p*ee+u*Y,s[10]=_*b+x*W+p*V+u*Z,s[14]=_*K+x*H+p*Q+u*oe,s[3]=v*C+g*S+M*X+P*N,s[7]=v*A+g*w+M*ee+P*Y,s[11]=v*b+g*W+M*V+P*Z,s[15]=v*K+g*H+M*Q+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+x*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+p*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=f*p*c-x*h*c+x*l*m-o*p*m-f*l*u+o*h*u,g=_*h*c-d*p*c-_*l*m+a*p*m+d*l*u-a*h*u,M=d*x*c-_*f*c+_*o*m-a*x*m-d*o*u+a*f*u,P=_*f*l-d*x*l-_*o*h+a*x*h+d*o*p-a*f*p,C=n*v+i*g+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(x*h*s-f*p*s-x*r*m+i*p*m+f*r*u-i*h*u)*A,e[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*u+i*l*u)*A,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*A,e[4]=g*A,e[5]=(d*p*s-_*h*s+_*r*m-n*p*m-d*r*u+n*h*u)*A,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*A,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*A,e[8]=M*A,e[9]=(_*f*s-d*x*s-_*i*m+n*x*m+d*i*u-n*f*u)*A,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*A,e[12]=P*A,e[13]=(d*x*r-_*f*r+_*i*h-n*x*h-d*i*p+n*f*p)*A,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*A,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,_=s*f,x=a*d,p=a*f,u=o*f,v=l*c,g=l*d,M=l*f,P=i.x,C=i.y,A=i.z;return r[0]=(1-(x+u))*P,r[1]=(m+M)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(h+u))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+g)*A,r[9]=(p-v)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/a,f=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===di)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Dl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let _,x;if(o===di)_=(a+s)*f,x=-2*f;else if(o===Dl)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new F,Nn=new ct,tE=new F(0,0,0),nE=new F(1,1,1),Ti=new F,yo=new F,on=new F,tm=new ct,nm=new ja;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const im=new F,Vr=new ja,ti=new ct,So=new F,Zs=new F,rE=new F,sE=new ja,rm=new F(1,0,0),sm=new F(0,1,0),am=new F(0,0,1),om={type:"added"},aE={type:"removed"},Gr={type:"childadded",child:null},Yc={type:"childremoved",child:null};class bt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,n=new Zn,i=new ja,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ue}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Zs,So,this.up):ti.lookAt(So,Zs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ti),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aE),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new F,ni=new F,Kc=new F,ii=new F,Wr=new F,jr=new F,lm=new F,Zc=new F,Qc=new F,Jc=new F,eu=new tt,tu=new tt,nu=new tt;class kn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ni.subVectors(i,n),Kc.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ni),l=Dn.dot(Kc),c=ni.dot(ni),d=ni.dot(Kc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,n),tu.fromBufferAttribute(e,i),nu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(eu,s.x),a.addScaledVector(tu,s.y),a.addScaledVector(nu,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ni.subVectors(e,n),Dn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),jr.subVectors(s,i),Zc.subVectors(e,i);const l=Wr.dot(Zc),c=jr.dot(Zc);if(l<=0&&c<=0)return n.copy(i);Qc.subVectors(e,r);const d=Wr.dot(Qc),f=jr.dot(Qc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Wr,a);Jc.subVectors(e,s);const m=Wr.dot(Jc),_=jr.dot(Jc);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(jr,o);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return lm.subVectors(s,r),o=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(lm,o);const u=1/(p+x+h);return a=x*u,o=h*u,n.copy(i).addScaledVector(Wr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=GM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=iu(a,s,e+1/3),this.g=iu(a,s,e),this.b=iu(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=z_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Zt(kt.r*255,0,255))*65536+Math.round(Zt(kt.g*255,0,255))*256+Math.round(Zt(kt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=jn){Qe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(Mo);const i=Bc(wi.h,Mo.h,n),r=Bc(wi.s,Mo.s,n),s=Bc(wi.l,Mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ge;Ge.NAMES=z_;let oE=0;class Dr extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=vs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fh extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,Eo=new Ye;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yp,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class H_ extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class V_ extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lE=0;const _n=new ct,ru=new bt,Xr=new F,ln=new Xa,Qs=new Xa,Ct=new F;class Rn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?V_:H_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(ln.min,Qs.min),ln.expandByPoint(Ct),Ct.addVectors(ln.max,Qs.max),ln.expandByPoint(Ct)):(ln.expandByPoint(Qs.min),ln.expandByPoint(Qs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ct.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),Ct.add(Xr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new F,l[b]=new F;const c=new F,d=new F,f=new F,h=new Ye,m=new Ye,_=new Ye,x=new F,p=new F;function u(b,K,S){c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,K),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,K),_.fromBufferAttribute(s,S),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(w),o[b].add(x),o[K].add(x),o[S].add(x),l[b].add(p),l[K].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,K=v.length;b<K;++b){const S=v[b],w=S.start,W=S.count;for(let H=w,X=w+W;H<X;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const g=new F,M=new F,P=new F,C=new F;function A(b){P.fromBufferAttribute(r,b),C.copy(P);const K=o[b];g.copy(K),g.sub(P.multiplyScalar(P.dot(K))).normalize(),M.crossVectors(C,K);const w=M.dot(l[b])<0?-1:1;a.setXYZW(b,g.x,g.y,g.z,w)}for(let b=0,K=v.length;b<K;++b){const S=v[b],w=S.start,W=S.count;for(let H=w,X=w+W;H<X;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new Tn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new ct,ir=new dh,To=new qa,um=new F,wo=new F,Ao=new F,Co=new F,su=new F,Ro=new F,dm=new F,Po=new F;class dt extends bt{constructor(e=new Rn,n=new fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(su.fromBufferAttribute(f,e),a?Ro.addScaledVector(su,d):Ro.addScaledVector(su.sub(n),d))}n.add(Ro)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(To.containsPoint(ir.origin)===!1&&(ir.intersectSphere(To,um)===null||ir.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),ir.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const C=o.getX(M),A=o.getX(M+1),b=o.getX(M+2);r=bo(this,u,e,i,c,d,f,C,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),M=o.getX(p+2);r=bo(this,a,e,i,c,d,f,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const C=M,A=M+1,b=M+2;r=bo(this,u,e,i,c,d,f,C,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,g=p+1,M=p+2;r=bo(this,a,e,i,c,d,f,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function cE(t,e,n,i,r,s,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===$i,o),l===null)return null;Po.copy(o),Po.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Po);return c<n.near||c>n.far?null:{distance:c,point:Po.clone(),object:t}}function bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wo),t.getVertexPosition(l,Ao),t.getVertexPosition(c,Co);const d=cE(t,e,n,i,wo,Ao,Co,dm);if(d){const f=new F;kn.getBarycoord(dm,wo,Ao,Co,f),r&&(d.uv=kn.getInterpolatedAttribute(r,o,l,c,f,new Ye)),s&&(d.uv1=kn.getInterpolatedAttribute(s,o,l,c,f,new Ye)),a&&(d.normal=kn.getInterpolatedAttribute(a,o,l,c,f,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};kn.getNormal(wo,Ao,Co,h.normal),d.face=h,d.barycoord=f}return d}class Os extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(f,2));function _(x,p,u,v,g,M,P,C,A,b,K){const S=M/A,w=P/b,W=M/2,H=P/2,X=C/2,ee=A+1,V=b+1;let Q=0,N=0;const Y=new F;for(let Z=0;Z<V;Z++){const oe=Z*w-H;for(let Se=0;Se<ee;Se++){const Fe=Se*S-W;Y[x]=Fe*v,Y[p]=oe*g,Y[u]=X,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Se/A),f.push(1-Z/b),Q+=1}}for(let Z=0;Z<b;Z++)for(let oe=0;oe<A;oe++){const Se=h+oe+ee*Z,Fe=h+oe+ee*(Z+1),k=h+(oe+1)+ee*(Z+1),j=h+(oe+1)+ee*Z;l.push(Se,Fe,j),l.push(Fe,k,j),N+=6}o.addGroup(m,N,K),m+=N,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function uE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function G_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const dE={clone:Ns,merge:Ht};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class W_ extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new F,fm=new Ye,hm=new Ye;class un extends W_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,fm,hm),n.subVectors(hm,fm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,$r=1;class pE extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(qr,$r,e,n);r.layers=this.layers,this.add(r);const s=new un(qr,$r,e,n);s.layers=this.layers,this.add(s);const a=new un(qr,$r,e,n);a.layers=this.layers,this.add(a);const o=new un(qr,$r,e,n);o.layers=this.layers,this.add(o);const l=new un(qr,$r,e,n);l.layers=this.layers,this.add(l);const c=new un(qr,$r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class j_ extends nn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mE extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new j_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Os(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Wi});s.uniforms.tEquirect.value=n;const a=new dt(r,s),o=n.minFilter;return n.minFilter===vr&&(n.minFilter=On),new pE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const au=new F,gE=new F,vE=new Ue;class cr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(gE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vE.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new qa,Lo=new F;class hh{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-u).normalize(),i[1].setComponents(l+s,h+c,p+m,M+u).normalize(),i[2].setComponents(l+a,h+d,p+_,M+v).normalize(),i[3].setComponents(l-a,h-d,p-_,M-v).normalize(),i[4].setComponents(l-o,h-f,p-x,M-g).normalize(),n===di)i[5].setComponents(l+o,h+f,p+x,M+g).normalize();else if(n===Dl)i[5].setComponents(o,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Lo.x=r.normal.x>0?e.max.x:e.min.x,Lo.y=r.normal.y>0?e.max.y:e.min.y,Lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _E(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class rc extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const v=u*h-a;for(let g=0;g<c;g++){const M=g*f-s;_.push(M,-v,0),x.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,M=v+c*(u+1),P=v+1+c*(u+1),C=v+1+c*u;m.push(g,M,C),m.push(M,P,C)}this.setIndex(m),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(x,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
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
#endif`,RE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NE=`#ifdef USE_IRIDESCENCE
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
#endif`,DE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VE=`#define PI 3.141592653589793
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
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WE=`vec3 transformedNormal = objectNormal;
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
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YE="gl_FragColor = linearToOutputTexel( gl_FragColor );",KE=`
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
}`,ZE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
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
#endif`,v1=`struct PhysicalMaterial {
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
}`,_1=`
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R1=`#if defined( USE_POINTS_UV )
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
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
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
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iT=`float getShadowMask() {
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xT=`uniform sampler2D t2D;
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,AT=`#define DISTANCE
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
}`,CT=`#define DISTANCE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
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
}`,LT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,IT=`#define LAMBERT
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
}`,UT=`#define LAMBERT
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
}`,FT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,kT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,zT=`#define PHONG
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
}`,HT=`#define PHONG
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
}`,VT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,WT=`#define TOON
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
}`,jT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,qT=`uniform vec3 diffuse;
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
}`,$T=`#include <common>
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
}`,YT=`uniform vec3 color;
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
}`,KT=`uniform float rotation;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:xE,alphahash_pars_fragment:yE,alphamap_fragment:SE,alphamap_pars_fragment:ME,alphatest_fragment:EE,alphatest_pars_fragment:TE,aomap_fragment:wE,aomap_pars_fragment:AE,batching_pars_vertex:CE,batching_vertex:RE,begin_vertex:PE,beginnormal_vertex:bE,bsdfs:LE,iridescence_fragment:NE,bumpmap_pars_fragment:DE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:OE,color_fragment:kE,color_pars_fragment:BE,color_pars_vertex:zE,color_vertex:HE,common:VE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:WE,displacementmap_pars_vertex:jE,displacementmap_vertex:XE,emissivemap_fragment:qE,emissivemap_pars_fragment:$E,colorspace_fragment:YE,colorspace_pars_fragment:KE,envmap_fragment:ZE,envmap_common_pars_fragment:QE,envmap_pars_fragment:JE,envmap_pars_vertex:e1,envmap_physical_pars_fragment:d1,envmap_vertex:t1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:o1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:c1,lights_pars_begin:u1,lights_toon_fragment:f1,lights_toon_pars_fragment:h1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:v1,lights_fragment_begin:_1,lights_fragment_maps:x1,lights_fragment_end:y1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:T1,map_fragment:w1,map_pars_fragment:A1,map_particle_fragment:C1,map_particle_pars_fragment:R1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:b1,morphinstance_vertex:L1,morphcolor_vertex:N1,morphnormal_vertex:D1,morphtarget_pars_vertex:I1,morphtarget_vertex:U1,normal_fragment_begin:F1,normal_fragment_maps:O1,normal_pars_fragment:k1,normal_pars_vertex:B1,normal_vertex:z1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:j1,opaque_fragment:X1,packing:q1,premultiplied_alpha_fragment:$1,project_vertex:Y1,dithering_fragment:K1,dithering_pars_fragment:Z1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:tT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:aT,skinnormal_vertex:oT,specularmap_fragment:lT,specularmap_pars_fragment:cT,tonemapping_fragment:uT,tonemapping_pars_fragment:dT,transmission_fragment:fT,transmission_pars_fragment:hT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:gT,worldpos_vertex:vT,background_vert:_T,background_frag:xT,backgroundCube_vert:yT,backgroundCube_frag:ST,cube_vert:MT,cube_frag:ET,depth_vert:TT,depth_frag:wT,distanceRGBA_vert:AT,distanceRGBA_frag:CT,equirect_vert:RT,equirect_frag:PT,linedashed_vert:bT,linedashed_frag:LT,meshbasic_vert:NT,meshbasic_frag:DT,meshlambert_vert:IT,meshlambert_frag:UT,meshmatcap_vert:FT,meshmatcap_frag:OT,meshnormal_vert:kT,meshnormal_frag:BT,meshphong_vert:zT,meshphong_frag:HT,meshphysical_vert:VT,meshphysical_frag:GT,meshtoon_vert:WT,meshtoon_frag:jT,points_vert:XT,points_frag:qT,shadow_vert:$T,shadow_frag:YT,sprite_vert:KT,sprite_frag:ZT},ce={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Xn={basic:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ht([ce.points,ce.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ht([ce.common,ce.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ht([ce.sprite,ce.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ht([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ht([ce.lights,ce.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Xn.physical={uniforms:Ht([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const No={r:0,b:0,g:0},sr=new Zn,QT=new ct;function JT(t,e,n,i,r,s,a){const o=new Ge(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function x(v){let g=!1;const M=_(v);M===null?u(o,l):M&&M.isColor&&(u(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,g){const M=_(g);M&&(M.isCubeTexture||M.mapping===nc)?(d===void 0&&(d=new dt(new Os(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ns(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(g.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(sr)),d.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,(f!==M||h!==M.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=M,h=M.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new dt(new rc(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ns(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(No,G_(t)),i.buffers.color.setClear(No.r,No.g,No.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:x,addToRenderList:p}}function ew(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,w,W,H,X){let ee=!1;const V=f(H,W,w);s!==V&&(s=V,c(s.object)),ee=m(S,H,W,X),ee&&_(S,H,W,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,M(S,w,W,H),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,w,W){const H=W.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let ee=X[w.id];ee===void 0&&(ee={},X[w.id]=ee);let V=ee[H];return V===void 0&&(V=h(l()),ee[H]=V),V}function h(S){const w=[],W=[],H=[];for(let X=0;X<n;X++)w[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,w,W,H){const X=s.attributes,ee=w.attributes;let V=0;const Q=W.getAttributes();for(const N in Q)if(Q[N].location>=0){const Z=X[N];let oe=ee[N];if(oe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;V++}return s.attributesNum!==V||s.index!==H}function _(S,w,W,H){const X={},ee=w.attributes;let V=0;const Q=W.getAttributes();for(const N in Q)if(Q[N].location>=0){let Z=ee[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),X[N]=oe,V++}s.attributes=X,s.attributesNum=V,s.index=H}function x(){const S=s.newAttributes;for(let w=0,W=S.length;w<W;w++)S[w]=0}function p(S){u(S,0)}function u(S,w){const W=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;W[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),X[S]!==w&&(t.vertexAttribDivisor(S,w),X[S]=w)}function v(){const S=s.newAttributes,w=s.enabledAttributes;for(let W=0,H=w.length;W<H;W++)w[W]!==S[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function g(S,w,W,H,X,ee,V){V===!0?t.vertexAttribIPointer(S,w,W,X,ee):t.vertexAttribPointer(S,w,W,H,X,ee)}function M(S,w,W,H){x();const X=H.attributes,ee=W.getAttributes(),V=w.defaultAttributeValues;for(const Q in ee){const N=ee[Q];if(N.location>=0){let Y=X[Q];if(Y===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const Z=Y.normalized,oe=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const Fe=Se.buffer,k=Se.type,j=Se.bytesPerElement,ie=k===t.INT||k===t.UNSIGNED_INT||Y.gpuType===rh;if(Y.isInterleavedBufferAttribute){const le=Y.data,Ae=le.stride,Te=Y.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<N.locationSize;ke++)u(N.location+ke,le.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<N.locationSize;ke++)p(N.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ke=0;ke<N.locationSize;ke++)g(N.location+ke,oe/N.locationSize,k,Z,Ae*j,(Te+oe/N.locationSize*ke)*j,ie)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)u(N.location+le,Y.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<N.locationSize;le++)p(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let le=0;le<N.locationSize;le++)g(N.location+le,oe/N.locationSize,k,Z,oe*j,oe/N.locationSize*le*j,ie)}}else if(V!==void 0){const Z=V[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}v()}function P(){b();for(const S in i){const w=i[S];for(const W in w){const H=w[W];for(const X in H)d(H[X].object),delete H[X];delete w[W]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const W in w){const H=w[W];for(const X in H)d(H[X].object),delete H[X];delete w[W]}delete i[S.id]}function A(S){for(const w in i){const W=i[w];if(W[S.id]===void 0)continue;const H=W[S.id];for(const X in H)d(H[X].object),delete H[X];delete W[S.id]}}function b(){K(),a=!0,s!==r&&(s=r,c(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:K,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function tw(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:P,maxSamples:C}}function iw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=d(_,h,g,m);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==x;++g,M+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function rw(t){let e=new WeakMap;function n(a,o){return o===Ed?a.mapping=Rs:o===Td&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ed||o===Td)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class q_ extends W_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,pm=[.125,.215,.35,.446,.526,.582],fr=20,ou=new q_,mm=new Ge;let lu=null,cu=0,uu=0,du=!1;const ur=(1+Math.sqrt(5))/2,Yr=1/ur,gm=[new F(-ur,Yr,0),new F(ur,Yr,0),new F(-Yr,0,ur),new F(Yr,0,ur),new F(0,ur,-Yr),new F(0,ur,Yr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ga,format:Bn,colorSpace:Ji,depthBuffer:!1},r=vm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sw(s)),this._blurMaterial=aw(s,e,n)}return r}_compileMaterial(e){const n=new dt(this._lodPlanes[0],e);this._renderer.compile(n,ou)}_sceneToCubeUV(e,n,i,r){const o=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(mm),d.toneMapping=ji,d.autoClear=!1;const m=new fh({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new dt(new Os,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(mm),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Do(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),x&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Do(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gm[(r-s-1)%gm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new dt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const u=[];let v=0;for(let A=0;A<fr;++A){const b=A/x,K=Math.exp(-b*b/2);u.push(K),A===0?v+=K:A<p&&(v+=2*K)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-cs?r-g+cs:0),C=4*(this._cubeSize-M);Do(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(f,ou)}}function sw(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+pm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-cs?l=pm[a-t+cs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,b=C>2?0:-1,K=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];v.set(K,x*_*C),g.set(h,p*_*C);const S=[C,C,C,C,C,C];M.set(S,u*_*C)}const P=new Rn;P.setAttribute("position",new Tn(v,x)),P.setAttribute("uv",new Tn(g,p)),P.setAttribute("faceIndex",new Tn(M,u)),e.push(P),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vm(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aw(t,e,n){const i=new Float32Array(fr),r=new F(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _m(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function xm(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function ow(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ed||l===Td,d=l===Rs||l===Ps;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new ef(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new ef(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function lw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&il("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cw(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],C=v[g+1],A=v[g+2];h.push(P,C,C,A,A,P)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,C=g+1,A=g+2;h.push(P,C,C,A,A,P)}}else return;const p=new(F_(h)?V_:H_)(h,1);p.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function uw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*a),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*a,_),n.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v];for(let v=0;v<x.length;v++)n.update(u,i,x[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fw(t,e,n){const i=new WeakMap,r=new tt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let P=o.attributes.position.count*M,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*C*4*f),b=new k_(A,P,C,f);b.type=ui,b.needsUpdate=!0;const K=M*4;for(let w=0;w<f;w++){const W=u[w],H=v[w],X=g[w],ee=P*C*4*w;for(let V=0;V<W.count;V++){const Q=V*K;_===!0&&(r.fromBufferAttribute(W,V),A[ee+Q+0]=r.x,A[ee+Q+1]=r.y,A[ee+Q+2]=r.z,A[ee+Q+3]=0),x===!0&&(r.fromBufferAttribute(H,V),A[ee+Q+4]=r.x,A[ee+Q+5]=r.y,A[ee+Q+6]=r.z,A[ee+Q+7]=0),p===!0&&(r.fromBufferAttribute(X,V),A[ee+Q+8]=r.x,A[ee+Q+9]=r.y,A[ee+Q+10]=r.z,A[ee+Q+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new Ye(P,C)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function hw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class $_ extends nn{constructor(e,n,i,r,s,a,o,l,c,d=_s){if(d!==_s&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===_s&&(i=Ar),i===void 0&&d===Ls&&(i=bs),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Y_=new nn,ym=new $_(1,1),K_=new k_,Z_=new JM,Q_=new j_,Sm=[],Mm=[],Em=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;wm.set(i),t.uniformMatrix2fv(this.addr,!1,wm),At(n,i)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Tm.set(i),t.uniformMatrix3fv(this.addr,!1,Tm),At(n,i)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),At(n,i)}}function Sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ym.compareFunction=U_,s=ym):s=Y_,n.setTexture2D(e||s,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Z_,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q_,r)}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K_,r)}function Dw(t){switch(t){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return vw;case 35674:return _w;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return Ew;case 35669:case 35673:return Tw;case 5125:return ww;case 36294:return Aw;case 36295:return Cw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Iw(t,e){t.uniform1fv(this.addr,e)}function Uw(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Fw(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Ow(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function kw(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Bw(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zw(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hw(t,e){t.uniform1iv(this.addr,e)}function Vw(t,e){t.uniform2iv(this.addr,e)}function Gw(t,e){t.uniform3iv(this.addr,e)}function Ww(t,e){t.uniform4iv(this.addr,e)}function jw(t,e){t.uniform1uiv(this.addr,e)}function Xw(t,e){t.uniform2uiv(this.addr,e)}function qw(t,e){t.uniform3uiv(this.addr,e)}function $w(t,e){t.uniform4uiv(this.addr,e)}function Yw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Y_,s[a])}function Kw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Z_,s[a])}function Zw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Q_,s[a])}function Qw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||K_,s[a])}function Jw(t){switch(t){case 5126:return Iw;case 35664:return Uw;case 35665:return Fw;case 35666:return Ow;case 35674:return kw;case 35675:return Bw;case 35676:return zw;case 5124:case 35670:return Hw;case 35667:case 35671:return Vw;case 35668:case 35672:return Gw;case 35669:case 35673:return Ww;case 5125:return jw;case 36294:return Xw;case 36295:return qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Qw}}class eA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Dw(n.type)}}class tA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jw(n.type)}}class nA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fu=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function iA(t,e,n){const i=t.name,r=i.length;for(fu.lastIndex=0;;){const s=fu.exec(i),a=fu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Am(n,c===void 0?new eA(o,t,e):new tA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new nA(o),Am(n,f)),n=f}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);iA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rA=37297;let sA=0;function aA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function oA(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Nl&&n===Ll?i="LinearDisplayP3ToLinearSRGB":e===Ll&&n===Nl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case ic:return[i,"LinearTransferOETF"];case jn:case uh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+aA(t.getShaderSource(e),a)}else return r}function lA(t,e){const n=oA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cA(t,e){let n;switch(e){case wM:n="Linear";break;case AM:n="Reinhard";break;case CM:n="Cineon";break;case RM:n="ACESFilmic";break;case bM:n="AgX";break;case LM:n="Neutral";break;case PM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Io=new F;function uA(){Qe.getLuminanceCoefficients(Io);const t=Io.x.toFixed(4),e=Io.y.toFixed(4),n=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function fA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function sa(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(t){return t.replace(pA,gA)}const mA=new Map;function gA(t,e){let n=Ie[e];if(n===void 0){const i=mA.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(n)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(t){return t.replace(vA,_A)}function _A(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function xA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===S_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function yA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function MA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case M_:e="ENVMAP_BLENDING_MULTIPLY";break;case EM:e="ENVMAP_BLENDING_MIX";break;case TM:e="ENVMAP_BLENDING_ADD";break}return e}function EA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function TA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=xA(n),c=yA(n),d=SA(n),f=MA(n),h=EA(n),m=dA(n),_=fA(s),x=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),u.length>0&&(u+=`
`)):(p=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),u=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?Ie.tonemapping_pars_fragment:"",n.toneMapping!==ji?cA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,lA("linearToOutputTexel",n.outputColorSpace),uA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),a=tf(a),a=Pm(a,n),a=bm(a,n),o=tf(o),o=Pm(o,n),o=bm(o,n),a=Lm(a),o=Lm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+p+a,M=v+u+o,P=Cm(r,r.VERTEX_SHADER,g),C=Cm(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(C).trim();let ee=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,C);else{const Q=Rm(r,P,"vertex"),N=Rm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+Q+`
`+N)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||X==="")&&(V=!1);V&&(w.diagnostics={runnable:ee,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:u}})}r.deleteShader(P),r.deleteShader(C),b=new rl(r,x),K=hA(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let K;this.getAttributes=function(){return K===void 0&&A(this),K};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,rA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let wA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CA(e),n.set(e,i)),i}}class CA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function RA(t,e,n,i,r,s,a){const o=new B_,l=new AA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,w,W,H,X){const ee=H.fog,V=X.geometry,Q=S.isMeshStandardMaterial?H.environment:null,N=(S.isMeshStandardMaterial?n:e).get(S.envMap||Q),Y=N&&N.mapping===nc?N.image.height:null,Z=x[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Se=oe!==void 0?oe.length:0;let Fe=0;V.morphAttributes.position!==void 0&&(Fe=1),V.morphAttributes.normal!==void 0&&(Fe=2),V.morphAttributes.color!==void 0&&(Fe=3);let k,j,ie,le;if(Z){const $t=Xn[Z];k=$t.vertexShader,j=$t.fragmentShader}else k=S.vertexShader,j=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),le=l.getFragmentShaderID(S);const Ae=t.getRenderTarget(),Te=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,qe=!!S.map,Be=!!S.matcap,L=!!N,rn=!!S.aoMap,ze=!!S.lightMap,je=!!S.bumpMap,Pe=!!S.normalMap,rt=!!S.displacementMap,Ne=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,O=S.anisotropy>0,$=S.clearcoat>0,te=S.dispersion>0,q=S.iridescence>0,Me=S.sheen>0,ue=S.transmission>0,ge=O&&!!S.anisotropyMap,Xe=$&&!!S.clearcoatMap,re=$&&!!S.clearcoatNormalMap,ve=$&&!!S.clearcoatRoughnessMap,be=q&&!!S.iridescenceMap,Le=q&&!!S.iridescenceThicknessMap,_e=Me&&!!S.sheenColorMap,He=Me&&!!S.sheenRoughnessMap,De=!!S.specularMap,nt=!!S.specularColorMap,D=!!S.specularIntensityMap,he=ue&&!!S.transmissionMap,G=ue&&!!S.thicknessMap,J=!!S.gradientMap,de=!!S.alphaMap,pe=S.alphaTest>0,Ve=!!S.alphaHash,xt=!!S.extensions;let qt=ji;S.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(qt=t.toneMapping);const $e={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:j,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:ke,batchingColor:ke&&X._colorsTexture!==null,instancing:Te,instancingColor:Te&&X.instanceColor!==null,instancingMorph:Te&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ji,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Be,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:Y,aoMap:rn,lightMap:ze,bumpMap:je,normalMap:Pe,displacementMap:m&&rt,emissiveMap:Ne,normalMapObjectSpace:Pe&&S.normalMapType===UM,normalMapTangentSpace:Pe&&S.normalMapType===I_,metalnessMap:R,roughnessMap:E,anisotropy:O,anisotropyMap:ge,clearcoat:$,clearcoatMap:Xe,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:te,iridescence:q,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:Me,sheenColorMap:_e,sheenRoughnessMap:He,specularMap:De,specularColorMap:nt,specularIntensityMap:D,transmission:ue,transmissionMap:he,thicknessMap:G,gradientMap:J,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:pe,alphaHash:Ve,combine:S.combine,mapUv:qe&&p(S.map.channel),aoMapUv:rn&&p(S.aoMap.channel),lightMapUv:ze&&p(S.lightMap.channel),bumpMapUv:je&&p(S.bumpMap.channel),normalMapUv:Pe&&p(S.normalMap.channel),displacementMapUv:rt&&p(S.displacementMap.channel),emissiveMapUv:Ne&&p(S.emissiveMap.channel),metalnessMapUv:R&&p(S.metalnessMap.channel),roughnessMapUv:E&&p(S.roughnessMap.channel),anisotropyMapUv:ge&&p(S.anisotropyMap.channel),clearcoatMapUv:Xe&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(S.sheenRoughnessMap.channel),specularMapUv:De&&p(S.specularMap.channel),specularColorMapUv:nt&&p(S.specularColorMap.channel),specularIntensityMapUv:D&&p(S.specularIntensityMap.channel),transmissionMapUv:he&&p(S.transmissionMap.channel),thicknessMapUv:G&&p(S.thicknessMap.channel),alphaMapUv:de&&p(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(qe||de),fog:!!ee,useFog:S.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:qt,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===oi,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function v(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)w.push(W),w.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(g(w,S),M(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function g(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function P(S){const w=x[S.type];let W;if(w){const H=Xn[w];W=dE.clone(H.uniforms)}else W=S.uniforms;return W}function C(S,w){let W;for(let H=0,X=d.length;H<X;H++){const ee=d[H];if(ee.cacheKey===w){W=ee,++W.usedTimes;break}}return W===void 0&&(W=new TA(t,w,S,s),d.push(W)),W}function A(S){if(--S.usedTimes===0){const w=d.indexOf(S);d[w]=d[d.length-1],d.pop(),S.destroy()}}function b(S){l.remove(S)}function K(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:K}}function PA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,_,x,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function o(f,h,m,_,x,p){const u=a(f,h,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,x,p){const u=a(f,h,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||bA),i.length>1&&i.sort(h||Dm),r.length>1&&r.sort(h||Dm)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function LA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Im,t.set(i,[a])):r>=s.length?(a=new Im,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function NA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ge};break;case"SpotLight":n={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function DA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IA=0;function UA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FA(t){const e=new NA,n=DA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new ct,a=new ct;function o(c){let d=0,f=0,h=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,v=0,g=0,M=0,P=0,C=0,A=0;c.sort(UA);for(let K=0,S=c.length;K<S;K++){const w=c[K],W=w.color,H=w.intensity,X=w.distance,ee=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=W.r*H,f+=W.g*H,h+=W.b*H;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],H);A++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,N=n.get(w);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=w.shadow.matrix,v++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(W).multiplyScalar(H),V.distance=X,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[x]=V;const Q=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,Q.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[x]=Q.matrix,w.castShadow){const N=n.get(w);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=ee,M++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(W).multiplyScalar(H),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const Q=w.shadow,N=n.get(w);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=w.shadow.matrix,g++}i.point[_]=V,_++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(H),V.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[u]=V,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==m||b.pointLength!==_||b.spotLength!==x||b.rectAreaLength!==p||b.hemiLength!==u||b.numDirectionalShadows!==v||b.numPointShadows!==g||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=m,b.pointLength=_,b.spotLength=x,b.rectAreaLength=p,b.hemiLength=u,b.numDirectionalShadows=v,b.numPointShadows=g,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=A,i.version=IA++)}function l(c,d){let f=0,h=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(g.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(g.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function Um(t){const e=new FA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Um(t),e.set(r,[o])):s>=a.length?(o=new Um(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class kA extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
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
}`;function VA(t,e,n){let i=new hh;const r=new Ye,s=new Ye,a=new tt,o=new kA({depthPacking:IM}),l=new BA,c={},d=n.maxTextureSize,f={[$i]:Wt,[Wt]:$i,[oi]:oi},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:zA,fragmentShader:HA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S_;let u=this.type;this.render=function(C,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const K=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Wi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=u!==ri&&this.type===ri,X=u===ri&&this.type!==ri;for(let ee=0,V=C.length;ee<V;ee++){const Q=C[ee],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Y=N.getFrameExtents();if(r.multiply(Y),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||H===!0||X===!0){const oe=this.type!==ri?{minFilter:Mn,magFilter:Mn}:{};N.map!==null&&N.map.dispose(),N.map=new Cr(r.x,r.y,oe),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let oe=0;oe<Z;oe++){const Se=N.getViewport(oe);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),W.viewport(a),N.updateMatrices(Q,oe),i=N.getFrustum(),M(A,b,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===ri&&v(N,b),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(K,S,w)};function v(C,A){const b=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,m,x,null)}function g(C,A,b,K){let S=null;const w=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)S=w;else if(S=b.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=S.uuid,H=A.uuid;let X=c[W];X===void 0&&(X={},c[W]=X);let ee=X[H];ee===void 0&&(ee=S.clone(),X[H]=ee,A.addEventListener("dispose",P)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,K===ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=b}return S}function M(C,A,b,K,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const H=e.update(C),X=C.material;if(Array.isArray(X)){const ee=H.groups;for(let V=0,Q=ee.length;V<Q;V++){const N=ee[V],Y=X[N.materialIndex];if(Y&&Y.visible){const Z=g(C,Y,K,S);C.onBeforeShadow(t,C,A,b,H,Z,N),t.renderBufferDirect(b,null,H,Z,C,N),C.onAfterShadow(t,C,A,b,H,Z,N)}}}else if(X.visible){const ee=g(C,X,K,S);C.onBeforeShadow(t,C,A,b,H,ee,null),t.renderBufferDirect(b,null,H,ee,C,null),C.onAfterShadow(t,C,A,b,H,ee,null)}}const W=C.children;for(let H=0,X=W.length;H<X;H++)M(W[H],A,b,K,S)}function P(C){C.target.removeEventListener("dispose",P);for(const b in c){const K=c[b],S=C.target.uuid;S in K&&(K[S].dispose(),delete K[S])}}}const GA={[gd]:vd,[_d]:Sd,[xd]:Md,[Cs]:yd,[vd]:gd,[Sd]:_d,[Md]:xd,[yd]:Cs};function WA(t){function e(){let D=!1;const he=new tt;let G=null;const J=new tt(0,0,0,0);return{setMask:function(de){G!==de&&!D&&(t.colorMask(de,de,de,de),G=de)},setLocked:function(de){D=de},setClear:function(de,pe,Ve,xt,qt){qt===!0&&(de*=xt,pe*=xt,Ve*=xt),he.set(de,pe,Ve,xt),J.equals(he)===!1&&(t.clearColor(de,pe,Ve,xt),J.copy(he))},reset:function(){D=!1,G=null,J.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,G=null,J=null,de=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?ie(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(pe){G!==pe&&!D&&(t.depthMask(pe),G=pe)},setFunc:function(pe){if(he&&(pe=GA[pe]),J!==pe){switch(pe){case gd:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case _d:t.depthFunc(t.LESS);break;case Cs:t.depthFunc(t.LEQUAL);break;case xd:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=pe}},setLocked:function(pe){D=pe},setClear:function(pe){de!==pe&&(t.clearDepth(pe),de=pe)},reset:function(){D=!1,G=null,J=null,de=null}}}function i(){let D=!1,he=null,G=null,J=null,de=null,pe=null,Ve=null,xt=null,qt=null;return{setTest:function($e){D||($e?ie(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function($e){he!==$e&&!D&&(t.stencilMask($e),he=$e)},setFunc:function($e,$t,Qn){(G!==$e||J!==$t||de!==Qn)&&(t.stencilFunc($e,$t,Qn),G=$e,J=$t,de=Qn)},setOp:function($e,$t,Qn){(pe!==$e||Ve!==$t||xt!==Qn)&&(t.stencilOp($e,$t,Qn),pe=$e,Ve=$t,xt=Qn)},setLocked:function($e){D=$e},setClear:function($e){qt!==$e&&(t.clearStencil($e),qt=$e)},reset:function(){D=!1,he=null,G=null,J=null,de=null,pe=null,Ve=null,xt=null,qt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,u=null,v=null,g=null,M=null,P=null,C=new Ge(0,0,0),A=0,b=!1,K=null,S=null,w=null,W=null,H=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,V=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ee=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ee=V>=2);let N=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Se=new tt().fromArray(Z),Fe=new tt().fromArray(oe);function k(D,he,G,J){const de=new Uint8Array(4),pe=t.createTexture();t.bindTexture(D,pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<G;Ve++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(he+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return pe}const j={};j[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),s.setFunc(Cs),ze(!1),je(Wp),ie(t.CULL_FACE),L(Wi);function ie(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function le(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ae(D,he){return d[D]!==he?(t.bindFramebuffer(D,he),d[D]=he,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(D,he){let G=h,J=!1;if(D){G=f.get(he),G===void 0&&(G=[],f.set(he,G));const de=D.textures;if(G.length!==de.length||G[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ve=de.length;pe<Ve;pe++)G[pe]=t.COLOR_ATTACHMENT0+pe;G.length=de.length,J=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,J=!0);J&&t.drawBuffers(G)}function ke(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const qe={[dr]:t.FUNC_ADD,[aM]:t.FUNC_SUBTRACT,[oM]:t.FUNC_REVERSE_SUBTRACT};qe[lM]=t.MIN,qe[cM]=t.MAX;const Be={[uM]:t.ZERO,[dM]:t.ONE,[fM]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[_M]:t.SRC_ALPHA_SATURATE,[gM]:t.DST_COLOR,[pM]:t.DST_ALPHA,[hM]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[vM]:t.ONE_MINUS_DST_COLOR,[mM]:t.ONE_MINUS_DST_ALPHA,[xM]:t.CONSTANT_COLOR,[yM]:t.ONE_MINUS_CONSTANT_COLOR,[SM]:t.CONSTANT_ALPHA,[MM]:t.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,G,J,de,pe,Ve,xt,qt,$e){if(D===Wi){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(ie(t.BLEND),_=!0),D!==sM){if(D!==x||$e!==b){if((p!==dr||g!==dr)&&(t.blendEquation(t.FUNC_ADD),p=dr,g=dr),$e)switch(D){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jp:t.blendFunc(t.ONE,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,v=null,M=null,P=null,C.set(0,0,0),A=0,x=D,b=$e}return}de=de||he,pe=pe||G,Ve=Ve||J,(he!==p||de!==g)&&(t.blendEquationSeparate(qe[he],qe[de]),p=he,g=de),(G!==u||J!==v||pe!==M||Ve!==P)&&(t.blendFuncSeparate(Be[G],Be[J],Be[pe],Be[Ve]),u=G,v=J,M=pe,P=Ve),(xt.equals(C)===!1||qt!==A)&&(t.blendColor(xt.r,xt.g,xt.b,qt),C.copy(xt),A=qt),x=D,b=!1}function rn(D,he){D.side===oi?le(t.CULL_FACE):ie(t.CULL_FACE);let G=D.side===Wt;he&&(G=!G),ze(G),D.blending===vs&&D.transparent===!1?L(Wi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){K!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),K=D)}function je(D){D!==nM?(ie(t.CULL_FACE),D!==S&&(D===Wp?t.cullFace(t.BACK):D===iM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),S=D}function Pe(D){D!==w&&(ee&&t.lineWidth(D),w=D)}function rt(D,he,G){D?(ie(t.POLYGON_OFFSET_FILL),(W!==he||H!==G)&&(t.polygonOffset(he,G),W=he,H=G)):le(t.POLYGON_OFFSET_FILL)}function Ne(D){D?ie(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+X-1),N!==D&&(t.activeTexture(D),N=D)}function E(D,he,G){G===void 0&&(N===null?G=t.TEXTURE0+X-1:G=N);let J=Y[G];J===void 0&&(J={type:void 0,texture:void 0},Y[G]=J),(J.type!==D||J.texture!==he)&&(N!==G&&(t.activeTexture(G),N=G),t.bindTexture(D,he||j[D]),J.type=D,J.texture=he)}function O(){const D=Y[N];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){Se.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function _e(D){Fe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function He(D,he){let G=l.get(he);G===void 0&&(G=new WeakMap,l.set(he,G));let J=G.get(D);J===void 0&&(J=t.getUniformBlockIndex(he,D.name),G.set(D,J))}function De(D,he){const J=l.get(he).get(D);o.get(he)!==J&&(t.uniformBlockBinding(he,J,D.__bindingPointIndex),o.set(he,J))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,Y={},d={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,u=null,v=null,g=null,M=null,P=null,C=new Ge(0,0,0),A=0,b=!1,K=null,S=null,w=null,W=null,H=null,Se.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ie,disable:le,bindFramebuffer:Ae,drawBuffers:Te,useProgram:ke,setBlending:L,setMaterial:rn,setFlipSided:ze,setCullFace:je,setLineWidth:Pe,setPolygonOffset:rt,setScissorTest:Ne,activeTexture:R,bindTexture:E,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:ve,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:Xe,texStorage3D:re,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Le,viewport:_e,reset:nt}}function Fm(t,e,n,i){const r=jA(i);switch(n){case C_:return t*e;case P_:return t*e;case b_:return t*e*2;case L_:return t*e/r.components*r.byteLength;case oh:return t*e/r.components*r.byteLength;case N_:return t*e*2/r.components*r.byteLength;case lh:return t*e*2/r.components*r.byteLength;case R_:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case ch:return t*e*4/r.components*r.byteLength;case Qo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:case bd:return Math.max(t,16)*Math.max(e,8)/4;case Cd:case Pd:return Math.max(t,8)*Math.max(e,8)/2;case Ld:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nl:case $d:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case D_:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jA(t){switch(t){case vi:case T_:return{byteLength:1,components:1};case Ua:case w_:case Ga:return{byteLength:2,components:1};case sh:case ah:return{byteLength:2,components:4};case Ar:case rh:case ui:return{byteLength:4,components:1};case A_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function XA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return m?new OffscreenCanvas(R,E):Il("canvas")}function x(R,E,O){let $=1;const te=Ne(R);if((te.width>O||te.height>O)&&($=O/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*te.width),Me=Math.floor($*te.height);f===void 0&&(f=_(q,Me));const ue=E?_(q,Me):f;return ue.width=q,ue.height=Me,ue.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Me+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Mn&&R.minFilter!==On}function u(R){t.generateMipmap(R)}function v(R,E,O,$,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=E;if(E===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),E===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),E===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),E===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),E===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),E===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),E===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),E===t.RGBA){const Me=te?bl:Qe.getTransfer($);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(R,E){let O;return R?E===null||E===Ar||E===bs?O=t.DEPTH24_STENCIL8:E===ui?O=t.DEPTH32F_STENCIL8:E===Ua&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===bs?O=t.DEPTH_COMPONENT24:E===ui?O=t.DEPTH_COMPONENT32F:E===Ua&&(O=t.DEPTH_COMPONENT16),O}function M(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){const E=R.target;E.removeEventListener("dispose",P),A(E),E.isVideoTexture&&d.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),K(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const O=R.source,$=h.get(O);if($){const te=$[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys($).length===0&&h.delete(O)}i.remove(R)}function b(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const O=R.source,$=h.get(O);delete $[E.__cacheKey],a.memory.textures--}function K(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let te=0;te<E.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[$][te]);else t.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)t.deleteFramebuffer(E.__webglFramebuffer[$]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,te=O.length;$<te;$++){const q=i.get(O[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(R)}let S=0;function w(){S=0}function W(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function H(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const O=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,R,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function ee(R,E){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Fe(O,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function V(R,E){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Fe(O,R,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function Q(R,E){const O=i.get(R);if(R.version>0&&O.__version!==R.version){k(O,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const N={[wd]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},Y={[Mn]:t.NEAREST,[NM]:t.NEAREST_MIPMAP_NEAREST,[po]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},Z={[FM]:t.NEVER,[VM]:t.ALWAYS,[OM]:t.LESS,[U_]:t.LEQUAL,[kM]:t.EQUAL,[HM]:t.GEQUAL,[BM]:t.GREATER,[zM]:t.NOTEQUAL};function oe(R,E){if(E.type===ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Oc||E.magFilter===po||E.magFilter===vr||E.minFilter===On||E.minFilter===Oc||E.minFilter===po||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==po&&E.minFilter!==vr||E.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Se(R,E){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const $=E.source;let te=h.get($);te===void 0&&(te={},h.set($,te));const q=H(E);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[q].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&b(E)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return O}function Fe(R,E,O){let $=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=t.TEXTURE_3D);const te=Se(R,E),q=E.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+O);const Me=i.get(q);if(q.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const ue=Qe.getPrimaries(Qe.workingColorSpace),ge=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),Xe=E.colorSpace===Li||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let re=x(E.image,!1,r.maxTextureSize);re=rt(E,re);const ve=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let Le=v(E.internalFormat,ve,be,E.colorSpace,E.isVideoTexture);oe($,E);let _e;const He=E.mipmaps,De=E.isVideoTexture!==!0,nt=Me.__version===void 0||te===!0,D=q.dataReady,he=M(E,re);if(E.isDepthTexture)Le=g(E.format===Ls,E.type),nt&&(De?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ve,be,null));else if(E.isDataTexture)if(He.length>0){De&&nt&&n.texStorage2D(t.TEXTURE_2D,he,Le,He[0].width,He[0].height);for(let G=0,J=He.length;G<J;G++)_e=He[G],De?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,be,_e.data):n.texImage2D(t.TEXTURE_2D,G,Le,_e.width,_e.height,0,ve,be,_e.data);E.generateMipmaps=!1}else De?(nt&&n.texStorage2D(t.TEXTURE_2D,he,Le,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,be,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ve,be,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Le,He[0].width,He[0].height,re.depth);for(let G=0,J=He.length;G<J;G++)if(_e=He[G],E.format!==Bn)if(ve!==null)if(De){if(D)if(E.layerUpdates.size>0){const de=Fm(_e.width,_e.height,E.format,E.type);for(const pe of E.layerUpdates){const Ve=_e.data.subarray(pe*de/_e.data.BYTES_PER_ELEMENT,(pe+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,pe,_e.width,_e.height,1,ve,Ve,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,re.depth,ve,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Le,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,re.depth,ve,be,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Le,_e.width,_e.height,re.depth,0,ve,be,_e.data)}else{De&&nt&&n.texStorage2D(t.TEXTURE_2D,he,Le,He[0].width,He[0].height);for(let G=0,J=He.length;G<J;G++)_e=He[G],E.format!==Bn?ve!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,be,_e.data):n.texImage2D(t.TEXTURE_2D,G,Le,_e.width,_e.height,0,ve,be,_e.data)}else if(E.isDataArrayTexture)if(De){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Le,re.width,re.height,re.depth),D)if(E.layerUpdates.size>0){const G=Fm(re.width,re.height,E.format,E.type);for(const J of E.layerUpdates){const de=re.data.subarray(J*G/re.data.BYTES_PER_ELEMENT,(J+1)*G/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ve,be,de)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,be,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,ve,be,re.data);else if(E.isData3DTexture)De?(nt&&n.texStorage3D(t.TEXTURE_3D,he,Le,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,be,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,ve,be,re.data);else if(E.isFramebufferTexture){if(nt)if(De)n.texStorage2D(t.TEXTURE_2D,he,Le,re.width,re.height);else{let G=re.width,J=re.height;for(let de=0;de<he;de++)n.texImage2D(t.TEXTURE_2D,de,Le,G,J,0,ve,be,null),G>>=1,J>>=1}}else if(He.length>0){if(De&&nt){const G=Ne(He[0]);n.texStorage2D(t.TEXTURE_2D,he,Le,G.width,G.height)}for(let G=0,J=He.length;G<J;G++)_e=He[G],De?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve,be,_e):n.texImage2D(t.TEXTURE_2D,G,Le,ve,be,_e);E.generateMipmaps=!1}else if(De){if(nt){const G=Ne(re);n.texStorage2D(t.TEXTURE_2D,he,Le,G.width,G.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,be,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,ve,be,re);p(E)&&u($),Me.__version=q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function k(R,E,O){if(E.image.length!==6)return;const $=Se(R,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const q=i.get(te);if(te.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+O);const Me=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),ge=E.colorSpace===Li||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Xe&&!re?ve[J]=x(E.image[J],!0,r.maxCubemapSize):ve[J]=re?E.image[J].image:E.image[J],ve[J]=rt(E,ve[J]);const be=ve[0],Le=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),He=v(E.internalFormat,Le,_e,E.colorSpace),De=E.isVideoTexture!==!0,nt=q.__version===void 0||$===!0,D=te.dataReady;let he=M(E,be);oe(t.TEXTURE_CUBE_MAP,E);let G;if(Xe){De&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,be.width,be.height);for(let J=0;J<6;J++){G=ve[J].mipmaps;for(let de=0;de<G.length;de++){const pe=G[de];E.format!==Bn?Le!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,pe.width,pe.height,Le,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,He,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,pe.width,pe.height,Le,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,He,pe.width,pe.height,0,Le,_e,pe.data)}}}else{if(G=E.mipmaps,De&&nt){G.length>0&&he++;const J=Ne(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,J.width,J.height)}for(let J=0;J<6;J++)if(re){De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Le,_e,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,ve[J].width,ve[J].height,0,Le,_e,ve[J].data);for(let de=0;de<G.length;de++){const Ve=G[de].image[J].image;De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ve.width,Ve.height,Le,_e,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,He,Ve.width,Ve.height,0,Le,_e,Ve.data)}}else{De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,_e,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Le,_e,ve[J]);for(let de=0;de<G.length;de++){const pe=G[de];De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Le,_e,pe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,He,Le,_e,pe.image[J])}}}p(E)&&u(t.TEXTURE_CUBE_MAP),q.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function j(R,E,O,$,te,q){const Me=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),ge=v(O.internalFormat,Me,ue,O.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>q),ve=Math.max(1,E.height>>q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,q,ge,re,ve,E.depth,0,Me,ue,null):n.texImage2D(te,q,ge,re,ve,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,i.get(O).__webglTexture,0,ze(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,i.get(O).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const $=E.depthTexture,te=$&&$.isDepthTexture?$.type:null,q=g(E.stencilBuffer,te),Me=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=ze(E);je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,q,E.width,E.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const $=E.textures;for(let te=0;te<$.length;te++){const q=$[te],Me=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),ge=v(q.internalFormat,Me,ue,q.colorSpace),Xe=ze(E);O&&je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ge,E.width,E.height):je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,ge,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const $=i.get(E.depthTexture).__webglTexture,te=ze(E);if(E.depthTexture.format===_s)je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(E.depthTexture.format===Ls)je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const E=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=$}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,R)}else if(O){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=t.createRenderbuffer(),ie(E.__webglDepthbuffer[$],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ie(E.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,E,O){const $=i.get(R);E!==void 0&&j($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ae(R)}function ke(R){const E=R.texture,O=i.get(R),$=i.get(E);R.addEventListener("dispose",C);const te=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=E.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let ge=0;ge<E.mipmaps.length;ge++)O.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else O.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)O.__webglFramebuffer[ue]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,ge=te.length;ue<ge;ue++){const Xe=i.get(te[ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&je(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ge=te[ue];O.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const Xe=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=v(ge.internalFormat,Xe,re,ge.colorSpace,R.isXRRenderTarget===!0),be=ze(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)j(O.__webglFramebuffer[ue][ge],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else j(O.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,ge=te.length;ue<ge;ue++){const Xe=te[ue],re=i.get(Xe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Xe),j(O.__webglFramebuffer,R,Xe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(Xe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,$.__webglTexture),oe(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)j(O.__webglFramebuffer[ge],R,E,t.COLOR_ATTACHMENT0,ue,ge);else j(O.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ue,0);p(E)&&u(ue),n.unbindTexture()}R.depthBuffer&&Ae(R)}function qe(R){const E=R.textures;for(let O=0,$=E.length;O<$;O++){const te=E[O];if(p(te)){const q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(te).__webglTexture;n.bindTexture(q,Me),u(q),n.unbindTexture()}}}const Be=[],L=[];function rn(R){if(R.samples>0){if(je(R)===!1){const E=R.textures,O=R.width,$=R.height;let te=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),ue=E.length>1;if(ue)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const Xe=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,O,$,0,0,O,$,te,t.NEAREST),l===!0&&(Be.length=0,L.length=0,Be.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Be.push(q),L.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const Xe=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ze(R){return Math.min(r.maxSamples,R.samples)}function je(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function rt(R,E){const O=R.colorSpace,$=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Ji&&O!==Li&&(Qe.getTransfer(O)===ot?($!==Bn||te!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=ee,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=j,this.useMultisampledRTT=je}function qA(t,e){function n(i,r=Li){let s;const a=Qe.getTransfer(r);if(i===vi)return t.UNSIGNED_BYTE;if(i===sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ah)return t.UNSIGNED_SHORT_5_5_5_1;if(i===A_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===T_)return t.BYTE;if(i===w_)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===rh)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Ga)return t.HALF_FLOAT;if(i===C_)return t.ALPHA;if(i===R_)return t.RGB;if(i===Bn)return t.RGBA;if(i===P_)return t.LUMINANCE;if(i===b_)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===L_)return t.RED;if(i===oh)return t.RED_INTEGER;if(i===N_)return t.RG;if(i===lh)return t.RG_INTEGER;if(i===ch)return t.RGBA_INTEGER;if(i===Qo||i===Jo||i===el||i===tl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===Rd||i===Pd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Nd||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ld||i===Nd)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Id||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Id)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===$d||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nl)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===D_||i===Kd||i===Zd||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class $A extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YA={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const KA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
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

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:KA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dt(new rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const x=new QA,p=n.getContextAttributes();let u=null,v=null;const g=[],M=[],P=new Ye;let C=null;const A=new un;A.layers.enable(1),A.viewport=new tt;const b=new un;b.layers.enable(2),b.viewport=new tt;const K=[A,b],S=new $A;S.layers.enable(1),S.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=g[k];return j===void 0&&(j=new hu,g[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=g[k];return j===void 0&&(j=new hu,g[k]=j),j.getGripSpace()},this.getHand=function(k){let j=g[k];return j===void 0&&(j=new hu,g[k]=j),j.getHandSpace()};function H(k){const j=M.indexOf(k.inputSource);if(j===-1)return;const ie=g[j];ie!==void 0&&(ie.update(k.inputSource,k.frame,c||a),ie.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ee);for(let k=0;k<g.length;k++){const j=M[k];j!==null&&(M[k]=null,g[k].disconnect(j))}w=null,W=null,x.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,ie=null,le=null;p.depth&&(le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=p.stencil?Ls:_s,ie=p.stencil?bs:Ar);const Ae={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Cr(h.textureWidth,h.textureHeight,{format:Bn,type:vi,depthTexture:new $_(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(k){for(let j=0;j<k.removed.length;j++){const ie=k.removed[j],le=M.indexOf(ie);le>=0&&(M[le]=null,g[le].disconnect(ie))}for(let j=0;j<k.added.length;j++){const ie=k.added[j];let le=M.indexOf(ie);if(le===-1){for(let Te=0;Te<g.length;Te++)if(Te>=M.length){M.push(ie),le=Te;break}else if(M[Te]===null){M[Te]=ie,le=Te;break}if(le===-1)break}const Ae=g[le];Ae&&Ae.connect(ie)}}const V=new F,Q=new F;function N(k,j,ie){V.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const le=V.distanceTo(Q),Ae=j.projectionMatrix.elements,Te=ie.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),Be=(Ae[9]+1)/Ae[5],L=(Ae[9]-1)/Ae[5],rn=(Ae[8]-1)/Ae[0],ze=(Te[8]+1)/Te[0],je=ke*rn,Pe=ke*ze,rt=le/(-rn+ze),Ne=rt*-rn;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ne),k.translateZ(rt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ae[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const R=ke+rt,E=qe+rt,O=je-Ne,$=Pe+(le-Ne),te=Be*qe/E*R,q=L*qe/E*R;k.projectionMatrix.makePerspective(O,$,te,q,R,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Y(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let j=k.near,ie=k.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ie=x.depthFar)),S.near=b.near=A.near=j,S.far=b.far=A.far=ie,(w!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,W=S.far);const le=k.parent,Ae=S.cameras;Y(S,le);for(let Te=0;Te<Ae.length;Te++)Y(Ae[Te],le);Ae.length===2?N(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),Z(k,S,le)};function Z(k,j,ie){ie===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(ie.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Jd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let oe=null;function Se(k,j){if(d=j.getViewerPose(c||a),_=j,d!==null){const ie=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let le=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Te=0;Te<ie.length;Te++){const ke=ie[Te];let qe=null;if(m!==null)qe=m.getViewport(ke);else{const L=f.getViewSubImage(h,ke);qe=L.viewport,Te===0&&(e.setRenderTargetTextures(v,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Be=K[Te];Be===void 0&&(Be=new un,Be.layers.enable(Te),Be.viewport=new tt,K[Te]=Be),Be.matrix.fromArray(ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),Te===0&&(S.matrix.copy(Be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Be)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Te=f.getDepthInformation(ie[0]);Te&&Te.isValid&&Te.texture&&x.init(e,Te,r.renderState)}}for(let ie=0;ie<g.length;ie++){const le=M[ie],Ae=g[ie];le!==null&&Ae!==void 0&&Ae.update(le,j,c||a)}oe&&oe(k,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Fe=new X_;Fe.setAnimationLoop(Se),this.setAnimationLoop=function(k){oe=k},this.dispose=function(){}}}const ar=new Zn,eC=new ct;function tC(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,G_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Wt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Wt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;g&&(p.envMap.value=g,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),p.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(ar)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(_(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(v,P);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function d(v){const g=f();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=M.length;C<A;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let K=0,S=b.length;K<S;K++){const w=b[K];if(m(w,C,K,P)===!0){const W=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let ee=0;ee<H.length;ee++){const V=H[ee],Q=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,W+X,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,P){const C=v.value,A=g+"_"+M;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const b=P[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function _(v){const g=v.uniforms;let M=0;const P=16;for(let A=0,b=g.length;A<b;A++){const K=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,w=K.length;S<w;S++){const W=K[S],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,ee=H.length;X<ee;X++){const V=H[X],Q=x(V),N=M%P,Y=N%Q.boundary,Z=N+Y;M+=Y,Z!==0&&P-Z<Q.storage&&(M+=P-Z),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=Q.storage}}}const C=M%P;return C>0&&(M+=P-C),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class iC{constructor(e={}){const{canvas:n=WM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=ji,this.toneMappingExposure=1;const g=this;let M=!1,P=0,C=0,A=null,b=-1,K=null;const S=new tt,w=new tt;let W=null;const H=new Ge(0);let X=0,ee=n.width,V=n.height,Q=1,N=null,Y=null;const Z=new tt(0,0,ee,V),oe=new tt(0,0,ee,V);let Se=!1;const Fe=new hh;let k=!1,j=!1;const ie=new ct,le=new ct,Ae=new F,Te=new tt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Be(){return A===null?Q:1}let L=i;function rn(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ih}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",pe,!1),L===null){const I="webgl2";if(L=rn(I,T),L===null)throw rn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ze,je,Pe,rt,Ne,R,E,O,$,te,q,Me,ue,ge,Xe,re,ve,be,Le,_e,He,De,nt,D;function he(){ze=new lw(L),ze.init(),De=new qA(L,ze),je=new nw(L,ze,e,De),Pe=new WA(L),je.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),rt=new dw(L),Ne=new PA,R=new XA(L,ze,Pe,Ne,je,De,rt),E=new rw(g),O=new ow(g),$=new _E(L),nt=new ew(L,$),te=new cw(L,$,rt,nt),q=new hw(L,te,$,rt),Le=new fw(L,je,R),re=new iw(Ne),Me=new RA(g,E,O,ze,je,nt,re),ue=new tC(g,Ne),ge=new LA,Xe=new OA(ze),be=new JT(g,E,O,Pe,q,h,l),ve=new VA(g,q,je),D=new nC(L,rt,je,Pe),_e=new tw(L,ze,rt),He=new uw(L,ze,rt),rt.programs=Me.programs,g.capabilities=je,g.extensions=ze,g.properties=Ne,g.renderLists=ge,g.shadowMap=ve,g.state=Pe,g.info=rt}he();const G=new JA(g,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(ee,V,!1))},this.getSize=function(T){return T.set(ee,V)},this.setSize=function(T,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,V=I,n.width=Math.floor(T*Q),n.height=Math.floor(I*Q),B===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(ee*Q,V*Q).floor()},this.setDrawingBufferSize=function(T,I,B){ee=T,V=I,Q=B,n.width=Math.floor(T*B),n.height=Math.floor(I*B),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,I,B,z){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,I,B,z),Pe.viewport(S.copy(Z).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,I,B,z){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,I,B,z),Pe.scissor(w.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){Pe.setScissorTest(Se=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(T=!0,I=!0,B=!0){let z=0;if(T){let U=!1;if(A!==null){const ae=A.texture.format;U=ae===ch||ae===lh||ae===oh}if(U){const ae=A.texture.type,fe=ae===vi||ae===Ar||ae===Ua||ae===bs||ae===sh||ae===ah,xe=be.getClearColor(),ye=be.getClearAlpha(),Ce=xe.r,Re=xe.g,Ee=xe.b;fe?(m[0]=Ce,m[1]=Re,m[2]=Ee,m[3]=ye,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ce,_[1]=Re,_[2]=Ee,_[3]=ye,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Xe.dispose(),Ne.dispose(),E.dispose(),O.dispose(),q.dispose(),nt.dispose(),D.dispose(),Me.dispose(),G.dispose(),G.removeEventListener("sessionstart",vh),G.removeEventListener("sessionend",_h),er.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=rt.autoReset,I=ve.enabled,B=ve.autoUpdate,z=ve.needsUpdate,U=ve.type;he(),rt.autoReset=T,ve.enabled=I,ve.autoUpdate=B,ve.needsUpdate=z,ve.type=U}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){const I=T.target;I.removeEventListener("dispose",Ve),xt(I)}function xt(T){qt(T),Ne.remove(T)}function qt(T){const I=Ne.get(T).programs;I!==void 0&&(I.forEach(function(B){Me.releaseProgram(B)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,B,z,U,ae){I===null&&(I=ke);const fe=U.isMesh&&U.matrixWorld.determinant()<0,xe=s0(T,I,B,z,U);Pe.setMaterial(z,fe);let ye=B.index,Ce=1;if(z.wireframe===!0){if(ye=te.getWireframeAttribute(B),ye===void 0)return;Ce=2}const Re=B.drawRange,Ee=B.attributes.position;let Je=Re.start*Ce,st=(Re.start+Re.count)*Ce;ae!==null&&(Je=Math.max(Je,ae.start*Ce),st=Math.min(st,(ae.start+ae.count)*Ce)),ye!==null?(Je=Math.max(Je,0),st=Math.min(st,ye.count)):Ee!=null&&(Je=Math.max(Je,0),st=Math.min(st,Ee.count));const mt=st-Je;if(mt<0||mt===1/0)return;nt.setup(U,z,xe,B,ye);let sn,Ke=_e;if(ye!==null&&(sn=$.get(ye),Ke=He,Ke.setIndex(sn)),U.isMesh)z.wireframe===!0?(Pe.setLineWidth(z.wireframeLinewidth*Be()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(U.isLine){let we=z.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*Be()),U.isLineSegments?Ke.setMode(L.LINES):U.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else U.isPoints?Ke.setMode(L.POINTS):U.isSprite&&Ke.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,Lt=U._multiDrawCounts,Ze=U._multiDrawCount,Pn=ye?$.get(ye).bytesPerElement:1,Ir=Ne.get(z).currentProgram.getUniforms();for(let an=0;an<Ze;an++)Ir.setValue(L,"_gl_DrawID",an),Ke.render(we[an]/Pn,Lt[an])}else if(U.isInstancedMesh)Ke.renderInstances(Je,mt,U.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lt=Math.min(B.instanceCount,we);Ke.renderInstances(Je,mt,Lt)}else Ke.render(Je,mt)};function $e(T,I,B){T.transparent===!0&&T.side===oi&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,Ya(T,I,B),T.side=$i,T.needsUpdate=!0,Ya(T,I,B),T.side=oi):Ya(T,I,B)}this.compile=function(T,I,B=null){B===null&&(B=T),p=Xe.get(B),p.init(I),v.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==B&&T.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const xe=ae[fe];$e(xe,B,U),z.add(xe)}else $e(ae,B,U),z.add(ae)}),v.pop(),p=null,z},this.compileAsync=function(T,I,B=null){const z=this.compile(T,I,B);return new Promise(U=>{function ae(){if(z.forEach(function(fe){Ne.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){U(T);return}setTimeout(ae,10)}ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let $t=null;function Qn(T){$t&&$t(T)}function vh(){er.stop()}function _h(){er.start()}const er=new X_;er.setAnimationLoop(Qn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(T){$t=T,G.setAnimationLoop(T),T===null?er.stop():er.start()},G.addEventListener("sessionstart",vh),G.addEventListener("sessionend",_h),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,I,A),p=Xe.get(T,v.length),p.init(I),v.push(p),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Fe.setFromProjectionMatrix(le),j=this.localClippingEnabled,k=re.init(this.clippingPlanes,j),x=ge.get(T,u.length),x.init(),u.push(x),G.enabled===!0&&G.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&ac(ae,I,-1/0,g.sortObjects)}ac(T,I,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(N,Y),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&be.addToRenderList(x,T),this.info.render.frame++,k===!0&&re.beginShadows();const B=p.state.shadowsArray;ve.render(B,T,I),k===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,U=x.transmissive;if(p.setupLights(),I.isArrayCamera){const ae=I.cameras;if(U.length>0)for(let fe=0,xe=ae.length;fe<xe;fe++){const ye=ae[fe];yh(z,U,T,ye)}qe&&be.render(T);for(let fe=0,xe=ae.length;fe<xe;fe++){const ye=ae[fe];xh(x,T,ye,ye.viewport)}}else U.length>0&&yh(z,U,T,I),qe&&be.render(T),xh(x,T,I);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,I),nt.resetDefaultState(),b=-1,K=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&re.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ac(T,I,B,z){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){z&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const fe=q.update(T),xe=T.material;xe.visible&&x.push(T,fe,xe,B,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const fe=q.update(T),xe=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const ye=fe.groups;for(let Ce=0,Re=ye.length;Ce<Re;Ce++){const Ee=ye[Ce],Je=xe[Ee.materialIndex];Je&&Je.visible&&x.push(T,fe,Je,B,Te.z,Ee)}}else xe.visible&&x.push(T,fe,xe,B,Te.z,null)}}const ae=T.children;for(let fe=0,xe=ae.length;fe<xe;fe++)ac(ae[fe],I,B,z)}function xh(T,I,B,z){const U=T.opaque,ae=T.transmissive,fe=T.transparent;p.setupLightsView(B),k===!0&&re.setGlobalState(g.clippingPlanes,B),z&&Pe.viewport(S.copy(z)),U.length>0&&$a(U,I,B),ae.length>0&&$a(ae,I,B),fe.length>0&&$a(fe,I,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function yh(T,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Cr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Ga:vi,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=p.state.transmissionRenderTarget[z.id],fe=z.viewport||S;ae.setSize(fe.z,fe.w);const xe=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(H),X=g.getClearAlpha(),X<1&&g.setClearColor(16777215,.5),g.clear(),qe&&be.render(B);const ye=g.toneMapping;g.toneMapping=ji;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),k===!0&&re.setGlobalState(g.clippingPlanes,z),$a(T,B,z),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,Je=I.length;Ee<Je;Ee++){const st=I[Ee],mt=st.object,sn=st.geometry,Ke=st.material,we=st.group;if(Ke.side===oi&&mt.layers.test(z.layers)){const Lt=Ke.side;Ke.side=Wt,Ke.needsUpdate=!0,Sh(mt,B,z,sn,Ke,we),Ke.side=Lt,Ke.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}g.setRenderTarget(xe),g.setClearColor(H,X),Ce!==void 0&&(z.viewport=Ce),g.toneMapping=ye}function $a(T,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ae=T.length;U<ae;U++){const fe=T[U],xe=fe.object,ye=fe.geometry,Ce=z===null?fe.material:z,Re=fe.group;xe.layers.test(B.layers)&&Sh(xe,I,B,ye,Ce,Re)}}function Sh(T,I,B,z,U,ae){T.onBeforeRender(g,I,B,z,U,ae),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(g,I,B,z,T,ae),U.transparent===!0&&U.side===oi&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,g.renderBufferDirect(B,I,z,U,T,ae),U.side=$i,U.needsUpdate=!0,g.renderBufferDirect(B,I,z,U,T,ae),U.side=oi):g.renderBufferDirect(B,I,z,U,T,ae),T.onAfterRender(g,I,B,z,U,ae)}function Ya(T,I,B){I.isScene!==!0&&(I=ke);const z=Ne.get(T),U=p.state.lights,ae=p.state.shadowsArray,fe=U.state.version,xe=Me.getParameters(T,U.state,ae,I,B),ye=Me.getProgramCacheKey(xe);let Ce=z.programs;z.environment=T.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(T.isMeshStandardMaterial?O:E).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",Ve),Ce=new Map,z.programs=Ce);let Re=Ce.get(ye);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===fe)return Eh(T,xe),Re}else xe.uniforms=Me.getUniforms(T),T.onBeforeCompile(xe,g),Re=Me.acquireProgram(xe,ye),Ce.set(ye,Re),z.uniforms=xe.uniforms;const Ee=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=re.uniform),Eh(T,xe),z.needsLights=o0(T),z.lightsStateVersion=fe,z.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function Mh(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=rl.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Eh(T,I){const B=Ne.get(T);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function s0(T,I,B,z,U){I.isScene!==!0&&(I=ke),R.resetTextureUnits();const ae=I.fog,fe=z.isMeshStandardMaterial?I.environment:null,xe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ji,ye=(z.isMeshStandardMaterial?O:E).get(z.envMap||fe),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let mt=ji;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=g.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ke=sn!==void 0?sn.length:0,we=Ne.get(z),Lt=p.state.lights;if(k===!0&&(j===!0||T!==K)){const vn=T===K&&z.id===b;re.setState(z,T,vn)}let Ze=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Lt.state.version||we.outputColorSpace!==xe||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==ye||z.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Re||we.morphTargets!==Ee||we.morphNormals!==Je||we.morphColors!==st||we.toneMapping!==mt||we.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,we.__version=z.version);let Pn=we.currentProgram;Ze===!0&&(Pn=Ya(z,I,U));let Ir=!1,an=!1,oc=!1;const vt=Pn.getUniforms(),xi=we.uniforms;if(Pe.useProgram(Pn.program)&&(Ir=!0,an=!0,oc=!0),z.id!==b&&(b=z.id,an=!0),Ir||K!==T){je.reverseDepthBuffer?(ie.copy(T.projectionMatrix),XM(ie),qM(ie),vt.setValue(L,"projectionMatrix",ie)):vt.setValue(L,"projectionMatrix",T.projectionMatrix),vt.setValue(L,"viewMatrix",T.matrixWorldInverse);const vn=vt.map.cameraPosition;vn!==void 0&&vn.setValue(L,Ae.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,an=!0,oc=!0)}if(U.isSkinnedMesh){vt.setOptional(L,U,"bindMatrix"),vt.setOptional(L,U,"bindMatrixInverse");const vn=U.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),vt.setValue(L,"boneTexture",vn.boneTexture,R))}U.isBatchedMesh&&(vt.setOptional(L,U,"batchingTexture"),vt.setValue(L,"batchingTexture",U._matricesTexture,R),vt.setOptional(L,U,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",U._indirectTexture,R),vt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",U._colorsTexture,R));const lc=B.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0)&&Le.update(U,B,Pn),(an||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,vt.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(xi.envMap.value=ye,xi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(xi.envMapIntensity.value=I.environmentIntensity),an&&(vt.setValue(L,"toneMappingExposure",g.toneMappingExposure),we.needsLights&&a0(xi,oc),ae&&z.fog===!0&&ue.refreshFogUniforms(xi,ae),ue.refreshMaterialUniforms(xi,z,Q,V,p.state.transmissionRenderTarget[T.id]),rl.upload(L,Mh(we),xi,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(rl.upload(L,Mh(we),xi,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(L,"center",U.center),vt.setValue(L,"modelViewMatrix",U.modelViewMatrix),vt.setValue(L,"normalMatrix",U.normalMatrix),vt.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const vn=z.uniformsGroups;for(let cc=0,l0=vn.length;cc<l0;cc++){const Th=vn[cc];D.update(Th,Pn),D.bind(Th,Pn)}}return Pn}function a0(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function o0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,B){Ne.get(T.texture).__webglTexture=I,Ne.get(T.depthTexture).__webglTexture=B;const z=Ne.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const B=Ne.get(T);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,B=0){A=T,P=I,C=B;let z=!0,U=null,ae=!1,fe=!1;if(T){const ye=Ne.get(T);if(ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ye.__hasExternalTextures)R.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(ye.__boundDepthTexture!==Ee){if(Ee!==null&&Ne.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Re=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?U=Re[I][B]:U=Re[I],ae=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?U=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,S.copy(T.viewport),w.copy(T.scissor),W=T.scissorTest}else S.copy(Z).multiplyScalar(Q).floor(),w.copy(oe).multiplyScalar(Q).floor(),W=Se;if(Pe.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Pe.drawBuffers(T,U),Pe.viewport(S),Pe.scissor(w),Pe.setScissorTest(W),ae){const ye=Ne.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,B)}else if(fe){const ye=Ne.get(T.texture),Ce=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Ce)}b=-1},this.readRenderTargetPixels=function(T,I,B,z,U,ae,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Pe.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ye=T.texture,Ce=ye.format,Re=ye.type;if(!je.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-z&&B>=0&&B<=T.height-U&&L.readPixels(I,B,z,U,De.convert(Ce),De.convert(Re),ae)}finally{const ye=A!==null?Ne.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,I,B,z,U,ae,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const ye=T.texture,Ce=ye.format,Re=ye.type;if(!je.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-z&&B>=0&&B<=T.height-U){Pe.bindFramebuffer(L.FRAMEBUFFER,xe);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(I,B,z,U,De.convert(Ce),De.convert(Re),0);const Je=A!==null?Ne.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Je);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jM(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Ee),L.deleteSync(st),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,B=0){T.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(T.image.width*z),ae=Math.floor(T.image.height*z),fe=I!==null?I.x:0,xe=I!==null?I.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,fe,xe,U,ae),Pe.unbindTexture()},this.copyTextureToTexture=function(T,I,B=null,z=null,U=0){T.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let ae,fe,xe,ye,Ce,Re;B!==null?(ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,xe=B.min.x,ye=B.min.y):(ae=T.image.width,fe=T.image.height,xe=0,ye=0),z!==null?(Ce=z.x,Re=z.y):(Ce=0,Re=0);const Ee=De.convert(I.format),Je=De.convert(I.type);R.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ke=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[U]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ce,Re,ae,fe,Ee,Je,Lt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ce,Re,Lt.width,Lt.height,Ee,Lt.data):L.texSubImage2D(L.TEXTURE_2D,U,Ce,Re,ae,fe,Ee,Je,Lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,I,B=null,z=null,U=0){T.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,T=arguments[2],I=arguments[3],U=arguments[4]||0);let ae,fe,xe,ye,Ce,Re,Ee,Je,st;const mt=T.isCompressedTexture?T.mipmaps[U]:T.image;B!==null?(ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,xe=B.max.z-B.min.z,ye=B.min.x,Ce=B.min.y,Re=B.min.z):(ae=mt.width,fe=mt.height,xe=mt.depth,ye=0,Ce=0,Re=0),z!==null?(Ee=z.x,Je=z.y,st=z.z):(Ee=0,Je=0,st=0);const sn=De.convert(I.format),Ke=De.convert(I.type);let we;if(I.isData3DTexture)R.setTexture3D(I,0),we=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ir=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(we,U,Ee,Je,st,ae,fe,xe,sn,Ke,mt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(we,U,Ee,Je,st,ae,fe,xe,sn,mt.data):L.texSubImage3D(we,U,Ee,Je,st,ae,fe,xe,sn,Ke,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ir),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),U===0&&I.generateMipmaps&&L.generateMipmap(we),Pe.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Pe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===uh?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===ic?"display-p3":"srgb"}}class J_ extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class e0 extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new F,Fl=new F,Om=new ct,Js=new dh,Uo=new qa,pu=new F,km=new F;class rC extends bt{constructor(e=new Rn,n=new e0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ul.fromBufferAttribute(n,r-1),Fl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Fl);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;Om.copy(r).invert(),Js.copy(e.ray).applyMatrix4(Om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=c){const u=d.getX(x),v=d.getX(x+1),g=Fo(this,e,Js,l,u,v);g&&n.push(g)}if(this.isLineLoop){const x=d.getX(_-1),p=d.getX(m),u=Fo(this,e,Js,l,x,p);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=c){const u=Fo(this,e,Js,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=Fo(this,e,Js,l,_-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ul.fromBufferAttribute(a,r),Fl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ul,Fl,pu,km)>i)return;pu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(pu);if(!(l<e.near||l>e.far))return{distance:l,point:km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Bm=new F,zm=new F;class sC extends rC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Bm.fromBufferAttribute(n,r),zm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bm.distanceTo(zm);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t0 extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hm=new ct,nf=new dh,Oo=new qa,ko=new F;class aC extends bt{constructor(e=new Rn,n=new t0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Hm.copy(r).invert(),nf.copy(e.ray).applyMatrix4(Hm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,x=m;_<x;_++){const p=c.getX(_);ko.fromBufferAttribute(f,p),Vm(ko,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,x=m;_<x;_++)ko.fromBufferAttribute(f,_),Vm(ko,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vm(t,e,n,i,r,s,a){const o=nf.distanceSqToPoint(t);if(o<n){const l=new F;nf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class mh extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new F,h=new F,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const C=P/n;f.x=-e*Math.cos(r+C*s)*Math.sin(a+g*o),f.y=e*Math.cos(a+g*o),f.z=e*Math.sin(r+C*s)*Math.sin(a+g*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(C+M,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],M=d[u][v],P=d[u+1][v],C=d[u+1][v+1];(u!==0||a>0)&&m.push(g,M,C),(u!==i-1||l<Math.PI)&&m.push(M,P,C)}this.setIndex(m),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(x,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rf extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I_,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gh extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const mu=new ct,Gm=new F,Wm=new F;class n0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wm),n.updateMatrixWorld(),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jm=new ct,ea=new F,gu=new F;class oC extends n0{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(ea),gu.copy(i.position),gu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gu),i.updateMatrixWorld(),r.makeTranslation(-ea.x,-ea.y,-ea.z),jm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jm)}}class lC extends gh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new oC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cC extends n0{constructor(){super(new q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uC extends gh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new cC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dC extends gh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);class fC extends J_{constructor(){super();const e=new Os;e.deleteAttribute("uv");const n=new rf({side:Wt}),i=new rf,r=new lC(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new dt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new dt(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new dt(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new dt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new dt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new dt(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new dt(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const h=new dt(e,Kr(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const m=new dt(e,Kr(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const _=new dt(e,Kr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new dt(e,Kr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new dt(e,Kr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const u=new dt(e,Kr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Kr(t){const e=new fh;return e.color.setScalar(t),e}function i0(){const t=se.useRef(null);return se.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=t.current;if(!n)return;const i=()=>window.innerWidth,r=()=>window.innerHeight;let s;try{s=new iC({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.setSize(i(),r()),s.setClearColor(0,0),n.appendChild(s.domElement);const a=new J_,o=new un(60,i()/r(),.1,100);o.position.z=18;const l=new ef(s),c=l.fromScene(new fC,.04);a.environment=c.texture;const d=20,f=12,h=7,m=i()<720?45:80,_=3.4,x=new Float32Array(m*3),p=[];for(let k=0;k<m;k++)x[k*3]=(Math.random()-.5)*2*d,x[k*3+1]=(Math.random()-.5)*2*f,x[k*3+2]=(Math.random()-.5)*2*h,p.push([(Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.012]);const u=new aa;a.add(u);const v=new Rn;v.setAttribute("position",new Tn(x,3));const g=new t0({color:2450411,size:.13,transparent:!0,opacity:.75,sizeAttenuation:!0}),M=new aC(v,g);u.add(M);const P=m*m,C=new Float32Array(P*3),A=new Rn;A.setAttribute("position",new Tn(C,3));const b=new e0({color:7048447,transparent:!0,opacity:.22}),K=new sC(A,b);u.add(K),a.add(new dC(16777215,.75));const S=new uC(16777215,.9);S.position.set(6,10,8),a.add(S);const w=[13358561,9741240,12107980,9412800,14410474,8359587],W=i()<720?18:34,H=new mh(1,24,16),X=[];for(let k=0;k<W;k++){const j=new rf({color:w[k%w.length],roughness:.15,metalness:1,transparent:!0,opacity:.9}),ie=new dt(H,j);ie.scale.setScalar(.16+Math.random()*.42),ie.position.set((Math.random()-.5)*2*d,(Math.random()-.5)*2*f,(Math.random()-.5)*2*h),ie.userData={v:[(Math.random()-.5)*.03,(Math.random()-.5)*.03,(Math.random()-.5)*.02]},u.add(ie),X.push(ie)}const ee={x:0,y:0},V={x:0,y:0},Q=k=>{ee.x=k.clientX/i()*2-1,ee.y=k.clientY/r()*2-1};e||window.addEventListener("pointermove",Q,{passive:!0});const N=()=>{o.aspect=i()/r(),o.updateProjectionMatrix(),s.setSize(i(),r())};window.addEventListener("resize",N);const Y=v.getAttribute("position"),Z=A.getAttribute("position"),oe=()=>{for(let j=0;j<m;j++){const ie=j*3;for(let le=0;le<3;le++){x[ie+le]+=p[j][le];const Ae=le===0?d:le===1?f:h;(x[ie+le]>Ae||x[ie+le]<-Ae)&&(p[j][le]*=-1)}}Y.needsUpdate=!0;for(const j of X){const ie=j.userData.v;j.position.x+=ie[0],j.position.y+=ie[1],j.position.z+=ie[2],(j.position.x>d||j.position.x<-d)&&(ie[0]*=-1),(j.position.y>f||j.position.y<-f)&&(ie[1]*=-1),(j.position.z>h||j.position.z<-h)&&(ie[2]*=-1)}let k=0;for(let j=0;j<m;j++){const ie=x[j*3],le=x[j*3+1],Ae=x[j*3+2];for(let Te=j+1;Te<m;Te++){const ke=ie-x[Te*3],qe=le-x[Te*3+1],Be=Ae-x[Te*3+2];ke*ke+qe*qe+Be*Be<_*_&&(C[k++]=ie,C[k++]=le,C[k++]=Ae,C[k++]=x[Te*3],C[k++]=x[Te*3+1],C[k++]=x[Te*3+2])}}A.setDrawRange(0,k/3),Z.needsUpdate=!0,V.x+=(ee.x-V.x)*.04,V.y+=(ee.y-V.y)*.04,u.rotation.y=V.x*.18,u.rotation.x=V.y*.1};let Se;const Fe=()=>{oe(),s.render(a,o),Se=requestAnimationFrame(Fe)};if(e)oe(),s.render(a,o);else{const k=()=>{document.hidden?cancelAnimationFrame(Se):Se=requestAnimationFrame(Fe)};document.addEventListener("visibilitychange",k),n._onVis=k,Se=requestAnimationFrame(Fe)}return()=>{cancelAnimationFrame(Se),window.removeEventListener("pointermove",Q),window.removeEventListener("resize",N),n._onVis&&document.removeEventListener("visibilitychange",n._onVis),v.dispose(),A.dispose(),g.dispose(),b.dispose(),H.dispose(),X.forEach(k=>k.material.dispose()),c.dispose(),l.dispose(),s.dispose(),s.domElement.parentNode&&s.domElement.parentNode.removeChild(s.domElement)}},[]),y.jsx("div",{className:"three-bg","aria-hidden":"true",ref:t})}function r0(t=[]){se.useLayoutEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.body.classList.add("reveal-on");const n=Array.from(document.querySelectorAll(".service, .feature, .step, .gallery figure, .avis, .faq__item, .apropos__media, .finalcta, .tarifs-cta, .section__title, .section__lead, .brand-card, .buysell__card")),i=o=>o.classList.add("in"),r=o=>{const l=o.getBoundingClientRect();return l.top<window.innerHeight-20&&l.bottom>0};n.forEach(o=>{r(o)&&i(o)});const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&(i(l.target),s.unobserve(l.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});n.forEach(o=>{o.classList.contains("in")||s.observe(o)});const a=setTimeout(()=>n.forEach(i),1500);return()=>{clearTimeout(a),s.disconnect(),document.body.classList.remove("reveal-on")}},t)}const hC=[["./img/reparation-ecran.jpg","Remplacement d'écran"],["./img/reparation-batterie.jpg","Changement de batterie"],["./img/atelier.jpg","Notre atelier"]];function pC(){return y.jsx("section",{className:"section",id:"tarifs-cta",children:y.jsxs("div",{className:"container tarifs-cta",children:[y.jsxs("div",{children:[y.jsx("p",{className:"section__eyebrow",children:"Tarifs"}),y.jsx("h2",{className:"section__title",children:"Des prix clairs, 30 à 40 € moins chers"}),y.jsx("p",{className:"section__lead",style:{marginBottom:0},children:"Choisissez votre marque (Apple, Samsung, Xiaomi, Huawei, Pixel, iPad) et découvrez le tarif de chaque modèle, pièce et main-d'œuvre comprises."})]}),y.jsx(Kn,{to:"/tarifs",className:"btn btn--primary btn--lg",children:"Voir les tarifs →"})]})})}function mC(){return y.jsx("section",{className:"section",style:{paddingTop:0},children:y.jsx("div",{className:"container",children:y.jsx("div",{className:"gallery",children:hC.map(([t,e])=>y.jsxs("figure",{children:[y.jsx("img",{src:t,alt:e,loading:"lazy"}),y.jsx("figcaption",{children:e})]},t))})})})}function gC(){const[t,e]=se.useState(null);return r0(),se.useEffect(()=>{const n=sessionStorage.getItem("prefill");if(n){try{e({...JSON.parse(n),_t:Date.now()})}catch{}sessionStorage.removeItem("prefill")}const i=sessionStorage.getItem("scrollTo");i&&(sessionStorage.removeItem("scrollTo"),setTimeout(()=>{var r;return(r=document.getElementById(i))==null?void 0:r.scrollIntoView({behavior:"smooth"})},120))},[]),y.jsxs(y.Fragment,{children:[y.jsx(y_,{}),y.jsx(i0,{}),y.jsx(__,{}),y.jsxs("main",{children:[y.jsx(zS,{}),y.jsx(XS,{}),y.jsx(pC,{}),y.jsx(mC,{}),y.jsx($S,{}),y.jsx(eM,{}),y.jsx(YS,{}),y.jsx(KS,{}),y.jsx(ZS,{}),y.jsx(JS,{prefill:t}),y.jsx(tM,{})]}),y.jsx(x_,{})]})}const vC={"iPhone 16 Pro Max":"./img/models/by-model/iphone-16-pro-max.png","iPhone 16 Pro":"./img/models/by-model/iphone-16-pro.jpg","iPhone 16":"./img/models/by-model/iphone-16.jpg","iPhone 15 Pro Max":"./img/models/by-model/iphone-15-pro-max.jpg","iPhone 15":"./img/models/by-model/iphone-15.jpg","iPhone 14 Pro Max":"./img/models/by-model/iphone-14-pro-max.jpg","iPhone 14":"./img/models/by-model/iphone-14.jpg","iPhone 13 Pro Max":"./img/models/by-model/iphone-13-pro-max.jpg","iPhone 13":"./img/models/by-model/iphone-13.jpg","iPhone 12 Pro Max":"./img/models/by-model/iphone-12-pro-max.png","iPhone 12":"./img/models/by-model/iphone-12.png","iPhone 11 Pro Max":"./img/models/by-model/iphone-11-pro-max.jpg","iPhone 11":"./img/models/by-model/iphone-11.jpg","iPhone XR":"./img/models/by-model/iphone-xr.jpg","iPhone X":"./img/models/by-model/iphone-x.jpg","iPhone 8 / SE 2020":"./img/models/by-model/iphone-8-se-2020.jpg","iPhone 7":"./img/models/by-model/iphone-7.jpg","Galaxy S24 Ultra":"./img/models/by-model/galaxy-s24-ultra.jpg","Galaxy S24":"./img/models/by-model/galaxy-s24.jpg","Galaxy S23":"./img/models/by-model/galaxy-s23.png","Galaxy S22":"./img/models/by-model/galaxy-s22.png","Galaxy S21":"./img/models/by-model/galaxy-s21.png","Galaxy A54":"./img/models/by-model/galaxy-a54.jpg","Galaxy A53":"./img/models/by-model/galaxy-a53.png","Galaxy A34":"./img/models/by-model/galaxy-a34.png","Galaxy A14":"./img/models/by-model/galaxy-a14.jpg","Xiaomi 13":"./img/models/by-model/xiaomi-13.jpg","Xiaomi 12":"./img/models/by-model/xiaomi-12.jpg","Redmi Note 13":"./img/models/by-model/redmi-note-13.jpg","Redmi Note 12":"./img/models/by-model/redmi-note-12.jpg","Redmi 12":"./img/models/by-model/redmi-12.jpg","P40 Pro":"./img/models/by-model/p40-pro.jpg","P30 Pro":"./img/models/by-model/p30-pro.jpg","P30 Lite":"./img/models/by-model/p30-lite.jpg","Mate 20 Pro":"./img/models/by-model/mate-20-pro.jpg","Pixel 8 Pro":"./img/models/by-model/pixel-8-pro.jpg","Pixel 8":"./img/models/by-model/pixel-8.jpg","Pixel 7":"./img/models/by-model/pixel-7.jpg","Pixel 6":"./img/models/by-model/pixel-6.jpg",'iPad Pro 12.9"':"./img/models/by-model/ipad-pro-12-9.jpg",'iPad Pro 11"':"./img/models/by-model/ipad-pro-11.jpg","iPad Air":"./img/models/by-model/ipad-air.png","iPad 10 / 9":"./img/models/by-model/ipad-10-9.jpg","iPad mini":"./img/models/by-model/ipad-mini.png"},_C=[...new Set(wr.map(t=>t.marque))],sf={Apple:{c:"#1d1d1f",abbr:"🍎"},Samsung:{c:"#1428a0",abbr:"SA"},Xiaomi:{c:"#ff6900",abbr:"MI"},Huawei:{c:"#cf0a2c",abbr:"HW"},Google:{c:"#4285f4",abbr:"G"},iPad:{c:"#555555",abbr:"iP"}},xC=t=>{var e;return((e=sf[t])==null?void 0:e.abbr)??t.slice(0,2).toUpperCase()},yC=t=>wr.filter(e=>e.marque===t).length,Xm={Apple:"./img/models/apple.jpg",Samsung:"./img/models/samsung.jpg",Xiaomi:"./img/models/xiaomi.jpg",Huawei:"./img/models/huawei.jpg",Google:"./img/models/google.jpg",iPad:"./img/models/ipad.png"};function SC({onReserver:t,onDevis:e,marque:n,setMarque:i}){var o;const[r,s]=se.useState("");se.useEffect(()=>{s("")},[n]);const a=se.useMemo(()=>{if(!n)return[];const l=r.trim().toLowerCase();return wr.filter(c=>c.marque===n&&(l===""||c.modele.toLowerCase().includes(l)))},[n,r]);return y.jsx("section",{className:"section section--alt",id:"tarifs",children:y.jsxs("div",{className:"container",children:[y.jsx("p",{className:"section__eyebrow",children:"Tarifs"}),!n&&y.jsxs(y.Fragment,{children:[y.jsx("h2",{className:"section__title",children:"Choisissez votre marque"}),y.jsxs("p",{className:"section__lead",children:["Sélectionnez la marque de votre appareil pour voir le tarif de chaque modèle. Des prix ",y.jsx("strong",{children:"30 à 40 € moins chers que la concurrence"}),"."]}),y.jsx("div",{className:"brands",children:_C.map(l=>{var c;return y.jsxs("button",{className:"brand-card",onClick:()=>i(l),style:{"--bc":((c=sf[l])==null?void 0:c.c)||"#2563eb"},children:[y.jsx("span",{className:"brand-card__logo",children:xC(l)}),y.jsx("span",{className:"brand-card__name",children:l}),y.jsxs("span",{className:"brand-card__count",children:[yC(l)," modèles"]}),y.jsx("span",{className:"brand-card__go",children:"Voir les modèles →"})]},l)})})]}),n&&y.jsxs(y.Fragment,{children:[y.jsx("button",{className:"btn btn--ghost tarifs__back",onClick:()=>i(null),children:"← Toutes les marques"}),y.jsxs("div",{className:"tarifs-head",children:[y.jsx("div",{className:"tarifs-head__photo",style:{"--bc":((o=sf[n])==null?void 0:o.c)||"#2563eb"},children:y.jsx("img",{src:Xm[n],alt:`Téléphone ${n}`,loading:"lazy"})}),y.jsxs("div",{children:[y.jsxs("h2",{className:"section__title",style:{marginTop:0},children:["Réparations ",n]}),y.jsx("p",{className:"section__lead",style:{marginBottom:0},children:"Tarifs par modèle, pièce et main-d'œuvre comprises — 30 à 40 € moins chers que la concurrence. Cliquez sur « Réserver » pour prendre rendez-vous."})]})]}),y.jsx("div",{className:"tarifs__bar",children:y.jsx("input",{type:"search",placeholder:`Rechercher un modèle ${n}…`,value:r,onChange:l=>s(l.target.value)})}),y.jsx("div",{className:"table__wrap",children:y.jsxs("table",{className:"table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Modèle"}),gs.map(l=>y.jsx("th",{children:l.nom},l.cle)),y.jsx("th",{})]})}),y.jsx("tbody",{children:a.length===0?y.jsx("tr",{children:y.jsx("td",{className:"na",colSpan:gs.length+2,children:"Aucun modèle trouvé."})}):a.map(l=>y.jsxs("tr",{children:[y.jsxs("td",{className:"model-cell",children:[y.jsx("img",{className:"model-thumb",src:vC[l.modele]||Xm[l.marque],alt:`Téléphone ${l.modele}`,loading:"lazy"}),y.jsx("span",{children:l.modele})]}),gs.map(c=>y.jsx("td",{className:l[c.cle]==null?"na":"prix",children:l[c.cle]==null?"—":`${l[c.cle]} €`},c.cle)),y.jsx("td",{children:y.jsx("button",{className:"table__reserver",onClick:()=>t(l.marque,l.modele),children:"Réserver"})})]},l.modele))})]})}),y.jsxs("p",{className:"tarifs__note",children:["🛡️ ",GS,"."]}),y.jsxs("p",{className:"tarifs__note",children:["Modèle non listé ou réparation spécifique (carte mère, haut-parleur, micro…) ?"," ",y.jsx("button",{className:"linklike linklike--accent",onClick:e,children:"Demandez un devis gratuit"}),"."]})]})]})})}function MC(){const t=nh(),[e,n]=se.useState(null);r0([e]),se.useEffect(()=>{window.scrollTo(0,0)},[e]);function i(s,a){sessionStorage.setItem("prefill",JSON.stringify({marque:s,modele:a})),sessionStorage.setItem("scrollTo","rdv"),t("/")}function r(){sessionStorage.setItem("scrollTo","rdv"),t("/")}return y.jsxs(y.Fragment,{children:[y.jsx(y_,{}),y.jsx(i0,{}),y.jsx(__,{}),y.jsx("main",{children:y.jsx(SC,{marque:e,setMarque:n,onReserver:i,onDevis:r})}),y.jsx(x_,{})]})}function EC(){const t=new Date().getFullYear();return y.jsxs(y.Fragment,{children:[y.jsx("header",{className:"nav",children:y.jsxs("div",{className:"container nav__inner",children:[y.jsxs(Kn,{to:"/",className:"brand",children:[y.jsx("span",{className:"brand__mark",children:"MK"})," Phone"]}),y.jsx(Kn,{to:"/",className:"btn btn--ghost",children:"← Retour au site"})]})}),y.jsx("main",{className:"section",children:y.jsxs("div",{className:"container legal",children:[y.jsx("h1",{className:"section__title",children:"Mentions légales"}),y.jsx("p",{className:"legal__note",children:"Modèle à compléter avec vos informations réelles (SIRET, adresse, hébergeur…)."}),y.jsx("h2",{children:"Éditeur du site"}),y.jsxs("p",{children:["MK Phone — Réparation de téléphone",y.jsx("br",{}),"Téléphone : ",dn.tel,y.jsx("br",{}),"E-mail : ",dn.email,y.jsx("br",{}),"Zone d'intervention : Île-de-France",y.jsx("br",{}),"SIRET : ",y.jsx("em",{children:"à compléter"})," — Adresse : ",y.jsx("em",{children:"à compléter"})]}),y.jsx("h2",{children:"Responsable de la publication"}),y.jsx("p",{children:"MK Phone."}),y.jsx("h2",{children:"Hébergement"}),y.jsxs("p",{children:["Site hébergé par ",y.jsx("em",{children:"à compléter"})," (ex. Netlify, Vercel, GitHub Pages, OVH)."]}),y.jsx("h2",{children:"Crédits photos"}),y.jsx("p",{children:"Photos des appareils et des réparations : Wikimedia Commons, licence CC BY-SA — Apple (Hajoon0102), Samsung (C.Stadler/Bwag), Xiaomi (Maksdroider), Huawei (X-SHLIED), Google (IXTA9839), iPad (ajay_suresh) et divers contributeurs pour les photos de réparation (écran, batterie, connecteur, caméra, vitre, désoxydation)."}),y.jsx("h2",{children:"Propriété intellectuelle"}),y.jsx("p",{children:"L'ensemble des contenus de ce site (textes, images, mise en page) est la propriété de MK Phone, sauf mention contraire. Toute reproduction sans autorisation est interdite."}),y.jsx("h2",{children:"Données personnelles"}),y.jsxs("p",{children:["Les informations transmises via le formulaire de rendez-vous (nom, téléphone, e-mail) sont utilisées uniquement pour traiter votre demande et ne sont ni vendues ni cédées. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à ",dn.email,"."]}),y.jsx("h2",{children:"Garantie"}),y.jsx("p",{children:"Les batteries sont garanties 6 mois. Les écrans sont garantis de 3 mois à 1 an selon la gamme choisie (compatible ou premium). La garantie ne couvre pas les dommages ultérieurs (chocs, oxydation, casse)."})]})}),y.jsx("footer",{className:"footer",children:y.jsxs("div",{className:"container footer__bottom",children:[y.jsxs("span",{children:["© ",t," MK Phone. Tous droits réservés."]}),y.jsx("span",{children:y.jsx(Kn,{to:"/",children:"Accueil"})})]})})]})}vu.createRoot(document.getElementById("root")).render(y.jsx(ig.StrictMode,{children:y.jsx(FS,{children:y.jsxs(PS,{children:[y.jsx(Zo,{path:"/",element:y.jsx(gC,{})}),y.jsx(Zo,{path:"/tarifs",element:y.jsx(MC,{})}),y.jsx(Zo,{path:"/mentions-legales",element:y.jsx(EC,{})})]})})}));
