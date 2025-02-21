(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var _d={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function TS(){if(d_)return St;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=C&&D[C]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,K={};function X(D,Z,ot){this.props=D,this.context=Z,this.refs=K,this.updater=ot||x}X.prototype.isReactComponent={},X.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},X.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function dt(){}dt.prototype=X.prototype;function tt(D,Z,ot){this.props=D,this.context=Z,this.refs=K,this.updater=ot||x}var ut=tt.prototype=new dt;ut.constructor=tt,$(ut,X.prototype),ut.isPureReactComponent=!0;var Et=Array.isArray,mt={H:null,A:null,T:null,S:null},wt=Object.prototype.hasOwnProperty;function V(D,Z,ot,et,nt,bt){return ot=bt.ref,{$$typeof:r,type:D,key:Z,ref:ot!==void 0?ot:null,props:bt}}function b(D,Z){return V(D.type,Z,void 0,void 0,void 0,D.props)}function S(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function I(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ot){return Z[ot]})}var M=/\/+/g;function P(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?I(""+D.key):Z.toString(36)}function R(){}function pe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ue(D,Z,ot,et,nt){var bt=typeof D;(bt==="undefined"||bt==="boolean")&&(D=null);var At=!1;if(D===null)At=!0;else switch(bt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(D.$$typeof){case r:case t:At=!0;break;case A:return At=D._init,ue(At(D._payload),Z,ot,et,nt)}}if(At)return nt=nt(D),At=et===""?"."+P(D,0):et,Et(nt)?(ot="",At!=null&&(ot=At.replace(M,"$&/")+"/"),ue(nt,Z,ot,"",function(ee){return ee})):nt!=null&&(S(nt)&&(nt=b(nt,ot+(nt.key==null||D&&D.key===nt.key?"":(""+nt.key).replace(M,"$&/")+"/")+At)),Z.push(nt)),1;At=0;var ce=et===""?".":et+":";if(Et(D))for(var Lt=0;Lt<D.length;Lt++)et=D[Lt],bt=ce+P(et,Lt),At+=ue(et,Z,ot,bt,nt);else if(Lt=L(D),typeof Lt=="function")for(D=Lt.call(D),Lt=0;!(et=D.next()).done;)et=et.value,bt=ce+P(et,Lt++),At+=ue(et,Z,ot,bt,nt);else if(bt==="object"){if(typeof D.then=="function")return ue(pe(D),Z,ot,et,nt);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return At}function J(D,Z,ot){if(D==null)return D;var et=[],nt=0;return ue(D,et,"","",function(bt){return Z.call(ot,bt,nt++)}),et}function gt(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(ot){(D._status===0||D._status===-1)&&(D._status=1,D._result=ot)},function(ot){(D._status===0||D._status===-1)&&(D._status=2,D._result=ot)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function qt(){}return St.Children={map:J,forEach:function(D,Z,ot){J(D,function(){Z.apply(this,arguments)},ot)},count:function(D){var Z=0;return J(D,function(){Z++}),Z},toArray:function(D){return J(D,function(Z){return Z})||[]},only:function(D){if(!S(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=X,St.Fragment=n,St.Profiler=o,St.PureComponent=tt,St.StrictMode=s,St.Suspense=p,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,St.act=function(){throw Error("act(...) is not supported in production builds of React.")},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,Z,ot){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var et=$({},D.props),nt=D.key,bt=void 0;if(Z!=null)for(At in Z.ref!==void 0&&(bt=void 0),Z.key!==void 0&&(nt=""+Z.key),Z)!wt.call(Z,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&Z.ref===void 0||(et[At]=Z[At]);var At=arguments.length-2;if(At===1)et.children=ot;else if(1<At){for(var ce=Array(At),Lt=0;Lt<At;Lt++)ce[Lt]=arguments[Lt+2];et.children=ce}return V(D.type,nt,void 0,void 0,bt,et)},St.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},St.createElement=function(D,Z,ot){var et,nt={},bt=null;if(Z!=null)for(et in Z.key!==void 0&&(bt=""+Z.key),Z)wt.call(Z,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(nt[et]=Z[et]);var At=arguments.length-2;if(At===1)nt.children=ot;else if(1<At){for(var ce=Array(At),Lt=0;Lt<At;Lt++)ce[Lt]=arguments[Lt+2];nt.children=ce}if(D&&D.defaultProps)for(et in At=D.defaultProps,At)nt[et]===void 0&&(nt[et]=At[et]);return V(D,bt,void 0,void 0,null,nt)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:g,render:D}},St.isValidElement=S,St.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:gt}},St.memo=function(D,Z){return{$$typeof:y,type:D,compare:Z===void 0?null:Z}},St.startTransition=function(D){var Z=mt.T,ot={};mt.T=ot;try{var et=D(),nt=mt.S;nt!==null&&nt(ot,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(qt,ct)}catch(bt){ct(bt)}finally{mt.T=Z}},St.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},St.use=function(D){return mt.H.use(D)},St.useActionState=function(D,Z,ot){return mt.H.useActionState(D,Z,ot)},St.useCallback=function(D,Z){return mt.H.useCallback(D,Z)},St.useContext=function(D){return mt.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,Z){return mt.H.useDeferredValue(D,Z)},St.useEffect=function(D,Z){return mt.H.useEffect(D,Z)},St.useId=function(){return mt.H.useId()},St.useImperativeHandle=function(D,Z,ot){return mt.H.useImperativeHandle(D,Z,ot)},St.useInsertionEffect=function(D,Z){return mt.H.useInsertionEffect(D,Z)},St.useLayoutEffect=function(D,Z){return mt.H.useLayoutEffect(D,Z)},St.useMemo=function(D,Z){return mt.H.useMemo(D,Z)},St.useOptimistic=function(D,Z){return mt.H.useOptimistic(D,Z)},St.useReducer=function(D,Z,ot){return mt.H.useReducer(D,Z,ot)},St.useRef=function(D){return mt.H.useRef(D)},St.useState=function(D){return mt.H.useState(D)},St.useSyncExternalStore=function(D,Z,ot){return mt.H.useSyncExternalStore(D,Z,ot)},St.useTransition=function(){return mt.H.useTransition()},St.version="19.0.0",St}var m_;function cm(){return m_||(m_=1,_d.exports=TS()),_d.exports}var Vs=cm(),vd={exports:{}},dl={},Td={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function ES(){return g_||(g_=1,function(r){function t(J,gt){var ct=J.length;J.push(gt);t:for(;0<ct;){var qt=ct-1>>>1,D=J[qt];if(0<o(D,gt))J[qt]=gt,J[ct]=D,ct=qt;else break t}}function n(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var gt=J[0],ct=J.pop();if(ct!==gt){J[0]=ct;t:for(var qt=0,D=J.length,Z=D>>>1;qt<Z;){var ot=2*(qt+1)-1,et=J[ot],nt=ot+1,bt=J[nt];if(0>o(et,ct))nt<D&&0>o(bt,et)?(J[qt]=bt,J[nt]=ct,qt=nt):(J[qt]=et,J[ot]=ct,qt=ot);else if(nt<D&&0>o(bt,ct))J[qt]=bt,J[nt]=ct,qt=nt;else break t}}return gt}function o(J,gt){var ct=J.sortIndex-gt.sortIndex;return ct!==0?ct:J.id-gt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],A=1,C=null,L=3,x=!1,$=!1,K=!1,X=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function ut(J){for(var gt=n(y);gt!==null;){if(gt.callback===null)s(y);else if(gt.startTime<=J)s(y),gt.sortIndex=gt.expirationTime,t(p,gt);else break;gt=n(y)}}function Et(J){if(K=!1,ut(J),!$)if(n(p)!==null)$=!0,pe();else{var gt=n(y);gt!==null&&ue(Et,gt.startTime-J)}}var mt=!1,wt=-1,V=5,b=-1;function S(){return!(r.unstable_now()-b<V)}function I(){if(mt){var J=r.unstable_now();b=J;var gt=!0;try{t:{$=!1,K&&(K=!1,dt(wt),wt=-1),x=!0;var ct=L;try{e:{for(ut(J),C=n(p);C!==null&&!(C.expirationTime>J&&S());){var qt=C.callback;if(typeof qt=="function"){C.callback=null,L=C.priorityLevel;var D=qt(C.expirationTime<=J);if(J=r.unstable_now(),typeof D=="function"){C.callback=D,ut(J),gt=!0;break e}C===n(p)&&s(p),ut(J)}else s(p);C=n(p)}if(C!==null)gt=!0;else{var Z=n(y);Z!==null&&ue(Et,Z.startTime-J),gt=!1}}break t}finally{C=null,L=ct,x=!1}gt=void 0}}finally{gt?M():mt=!1}}}var M;if(typeof tt=="function")M=function(){tt(I)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,R=P.port2;P.port1.onmessage=I,M=function(){R.postMessage(null)}}else M=function(){X(I,0)};function pe(){mt||(mt=!0,M())}function ue(J,gt){wt=X(function(){J(r.unstable_now())},gt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){$||x||($=!0,pe())},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return L},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(J){switch(L){case 1:case 2:case 3:var gt=3;break;default:gt=L}var ct=L;L=gt;try{return J()}finally{L=ct}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,gt){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ct=L;L=J;try{return gt()}finally{L=ct}},r.unstable_scheduleCallback=function(J,gt,ct){var qt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?qt+ct:qt):ct=qt,J){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ct+D,J={id:A++,callback:gt,priorityLevel:J,startTime:ct,expirationTime:D,sortIndex:-1},ct>qt?(J.sortIndex=ct,t(y,J),n(p)===null&&J===n(y)&&(K?(dt(wt),wt=-1):K=!0,ue(Et,ct-qt))):(J.sortIndex=D,t(p,J),$||x||($=!0,pe())),J},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(J){var gt=L;return function(){var ct=L;L=gt;try{return J.apply(this,arguments)}finally{L=ct}}}}(Ed)),Ed}var p_;function AS(){return p_||(p_=1,Td.exports=ES()),Td.exports}var Ad={exports:{}},je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function SS(){if(y_)return je;y_=1;var r=cm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,A){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:C==null?null:""+C,children:p,containerInfo:y,implementation:A}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,je.createPortal=function(p,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,A)},je.flushSync=function(p){var y=f.T,A=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=A,s.d.f()}},je.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},je.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},je.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var A=y.as,C=g(A,y.crossOrigin),L=typeof y.integrity=="string"?y.integrity:void 0,x=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:L,fetchPriority:x}):A==="script"&&s.d.X(p,{crossOrigin:C,integrity:L,fetchPriority:x,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},je.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},je.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,C=g(A,y.crossOrigin);s.d.L(p,A,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},je.preloadModule=function(p,y){if(typeof p=="string")if(y){var A=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},je.requestFormReset=function(p){s.d.r(p)},je.unstable_batchedUpdates=function(p,y){return p(y)},je.useFormState=function(p,y,A){return f.H.useFormState(p,y,A)},je.useFormStatus=function(){return f.H.useHostTransitionStatus()},je.version="19.0.0",je}var __;function wS(){if(__)return Ad.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ad.exports=SS(),Ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function bS(){if(v_)return dl;v_=1;var r=AS(),t=cm(),n=wS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),x=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),ut=Symbol.for("react.offscreen"),Et=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case g:return"Portal";case A:return"Profiler";case y:return"StrictMode";case K:return"Suspense";case X:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case $:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return i=e.displayName||null,i!==null?i:b(e.type)||"Memo";case tt:i=e._payload,e=e._init;try{return b(e(i))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,M,P;function R(e){if(M===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||"",P=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+P}var pe=!1;function ue(e,i){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(H){var B=H}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(H){B=H}e.call(Y.prototype)}}else{try{throw Error()}catch(H){B=H}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),N=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<N.length&&!N[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===N.length)for(l=w.length-1,h=N.length-1;1<=l&&0<=h&&w[l]!==N[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==N[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==N[h]){var j=`
`+w[l].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=l&&0<=h);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?R(a):""}function J(e){switch(e.tag){case 26:case 27:case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function gt(e){try{var i="";do i+=J(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ct(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,i.flags&4098&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function qt(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function D(e){if(ct(e)!==e)throw Error(s(188))}function Z(e){var i=e.alternate;if(!i){if(i=ct(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return D(h),e;if(d===l)return D(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function ot(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=ot(e),i!==null)return i;e=e.sibling}return null}var et=Array.isArray,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bt={pending:!1,data:null,method:null,action:null},At=[],ce=-1;function Lt(e){return{current:e}}function ee(e){0>ce||(e.current=At[ce],At[ce]=null,ce--)}function Ft(e,i){ce++,At[ce]=e.current,e.current=i}var $e=Lt(null),pi=Lt(null),pn=Lt(null),Wi=Lt(null);function Ji(e,i){switch(Ft(pn,i),Ft(pi,e),Ft($e,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Hy(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=Hy(e),i=jy(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ee($e),Ft($e,i)}function yi(){ee($e),ee(pi),ee(pn)}function oo(e){e.memoizedState!==null&&Ft(Wi,e);var i=$e.current,a=jy(i,e.type);i!==a&&(Ft(pi,e),Ft($e,a))}function Ys(e){pi.current===e&&(ee($e),ee(pi)),Wi.current===e&&(ee(Wi),ll._currentValue=bt)}var $s=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,Xs=r.unstable_cancelCallback,vh=r.unstable_shouldYield,lo=r.unstable_requestPaint,en=r.unstable_now,Gl=r.unstable_getCurrentPriorityLevel,ye=r.unstable_ImmediatePriority,Re=r.unstable_UserBlockingPriority,_i=r.unstable_NormalPriority,Kl=r.unstable_LowPriority,uo=r.unstable_IdlePriority,Th=r.log,Zr=r.unstable_setDisableYieldValue,tr=null,qe=null;function co(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(tr,e,void 0,(e.current.flags&128)===128)}catch{}}function Qn(e){if(typeof Th=="function"&&Zr(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(tr,e)}catch{}}var Xe=Math.clz32?Math.clz32:Yl,ho=Math.log,Ql=Math.LN2;function Yl(e){return e>>>=0,e===0?32:31-(ho(e)/Ql|0)|0}var Yn=128,er=4194304;function Un(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yn(e,i){var a=e.pendingLanes;if(a===0)return 0;var l=0,h=e.suspendedLanes,d=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=Un(a):(d&=T,d!==0?l=Un(d):e||(v=T&~v,v!==0&&(l=Un(v))))):(T=a&~h,T!==0?l=Un(T):d!==0?l=Un(d):e||(v=a&~v,v!==0&&(l=Un(v)))),l===0?0:i!==0&&i!==l&&!(i&h)&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function nr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Zs(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var e=Yn;return Yn<<=1,!(Yn&4194176)&&(Yn=128),e}function ir(){var e=er;return er<<=1,!(er&62914560)&&(er=4194304),e}function Ws(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ae(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $l(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,w=e.expirationTimes,N=e.hiddenUpdates;for(a=v&~a;0<a;){var j=31-Xe(a),Y=1<<j;T[j]=0,w[j]=-1;var B=N[j];if(B!==null)for(N[j]=null,j=0;j<B.length;j++){var H=B[j];H!==null&&(H.lane&=-536870913)}a&=~Y}l!==0&&rr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function rr(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Xe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194218}function sr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Xe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Xl(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Zl(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function ar(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var $n=Math.random().toString(36).slice(2),Ie="__reactFiber$"+$n,_e="__reactProps$"+$n,vi="__reactContainer$"+$n,Wr="__reactEvents$"+$n,Js="__reactListeners$"+$n,Xn="__reactHandles$"+$n,mo="__reactResources$"+$n,or="__reactMarker$"+$n;function Jr(e){delete e[Ie],delete e[_e],delete e[Wr],delete e[Js],delete e[Xn]}function Pn(e){var i=e[Ie];if(i)return i;for(var a=e.parentNode;a;){if(i=a[vi]||a[Ie]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Ky(e);e!==null;){if(a=e[Ie])return a;e=Ky(e)}return i}e=a,a=e.parentNode}return null}function Ti(e){if(e=e[Ie]||e[vi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function lr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function ur(e){var i=e[mo];return i||(i=e[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Zt(e){e[or]=!0}var go=new Set,ta={};function on(e,i){nn(e,i),nn(e+"Capture",i)}function nn(e,i){for(ta[e]=i,e=0;e<i.length;e++)go.add(i[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},yo={};function Wl(e){return $s.call(yo,e)?!0:$s.call(po,e)?!1:Eh.test(e)?yo[e]=!0:(po[e]=!0,!1)}function cr(e,i,a){if(Wl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function hr(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function _n(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jl(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ah(e){var i=Jl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ts(e){e._valueTracker||(e._valueTracker=Ah(e))}function _o(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Jl(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ei=/[\n"\\]/g;function ne(e){return e.replace(Ei,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function fr(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ze(i)):e.value!==""+Ze(i)&&(e.value=""+Ze(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?na(e,v,Ze(i)):a!=null?na(e,v,Ze(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ze(T):e.removeAttribute("name")}function es(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Ze(a):"",i=i!=null?""+Ze(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function na(e,i,a){i==="number"&&ea(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xt(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function ns(e,i,a){if(i!=null&&(i=""+Ze(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Ze(a):""}function dr(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(et(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ze(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function vn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Sh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||Sh.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function tu(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&vo(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&vo(e,d,i[d])}function To(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return bh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tn=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Si=null;function wi(e){var i=Ti(e);if(i&&(e=i.stateNode)){var a=e[_e]||null;t:switch(e=i.stateNode,i.type){case"input":if(fr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ne(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[_e]||null;if(!h)throw Error(s(90));fr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&_o(l)}break t;case"textarea":ns(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&xt(e,!!a.multiple,i,!1)}}}var Eo=!1;function eu(e,i,a){if(Eo)return e(i,a);Eo=!0;try{var l=e(i);return l}finally{if(Eo=!1,(Ai!==null||Si!==null)&&(Ku(),Ai&&(i=Ai,e=Si,Si=Ai=null,wi(i),e)))for(i=0;i<e.length;i++)wi(e[i])}}function is(e,i){var a=e.stateNode;if(a===null)return null;var l=a[_e]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var En=!1;if(ln)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){En=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{En=!1}var Wn=null,mr=null,bi=null;function Ao(){if(bi)return bi;var e,i=mr,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return bi=h.slice(e,1<l?1-l:void 0)}function Jn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function So(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:So,this.isPropagationStopped=So,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),i}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=Ce(Ht),ss=I({},Ht,{view:0,detail:0}),nu=Ce(ss),sa,aa,ei,as=I({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(sa=e.screenX-ei.screenX,aa=e.screenY-ei.screenY):aa=sa=0,ei=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),An=Ce(as),iu=I({},as,{dataTransfer:0}),Rh=Ce(iu),os=I({},ss,{relatedTarget:0}),oa=Ce(os),wo=I({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),la=Ce(wo),ru=I({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ua=Ce(ru),Ih=I({},Ht,{data:0}),bo=Ce(Ih),ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},su={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ro(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=au[e])?!!i[e]:!1}function us(){return Ro}var ou=I({},ss,{key:function(e){if(e.key){var i=ls[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?su[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ca=Ce(ou),lu=I({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Ce(lu),Ri=I({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),uu=Ce(Ri),cu=I({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),hu=Ce(cu),fu=I({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ha=Ce(fu),We=I({},Ht,{newState:0,oldState:0}),du=Ce(We),mu=[9,13,27,32],ni=ln&&"CompositionEvent"in window,u=null;ln&&"documentMode"in document&&(u=document.documentMode);var m=ln&&"TextEvent"in window&&!u,_=ln&&(!ni||u&&8<u&&11>=u),E=" ",U=!1;function q(e,i){switch(e){case"keyup":return mu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function ve(e,i){switch(e){case"compositionend":return W(i);case"keypress":return i.which!==32?null:(U=!0,E);case"textInput":return e=i.data,e===E&&U?null:e;default:return null}}function kt(e,i){if(Vt)return e==="compositionend"||!ni&&q(e,i)?(e=Ao(),bi=mr=Wn=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Te(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Ii(e,i,a,l){Ai?Si?Si.push(l):Si=[l]:Ai=l,i=Zu(i,"onChange"),0<i.length&&(a=new ra("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ke=null,ii=null;function Co(e){Ly(e,0)}function gu(e){var i=lr(e);if(_o(i))return e}function fg(e,i){if(e==="change")return i}var dg=!1;if(ln){var Ch;if(ln){var Dh="oninput"in document;if(!Dh){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),Dh=typeof mg.oninput=="function"}Ch=Dh}else Ch=!1;dg=Ch&&(!document.documentMode||9<document.documentMode)}function gg(){ke&&(ke.detachEvent("onpropertychange",pg),ii=ke=null)}function pg(e){if(e.propertyName==="value"&&gu(ii)){var i=[];Ii(i,ii,e,ia(e)),eu(Co,i)}}function X0(e,i,a){e==="focusin"?(gg(),ke=i,ii=a,ke.attachEvent("onpropertychange",pg)):e==="focusout"&&gg()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(ii)}function W0(e,i){if(e==="click")return gu(i)}function J0(e,i){if(e==="input"||e==="change")return gu(i)}function tA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:tA;function Do(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!$s.call(i,h)||!un(e[h],i[h]))return!1}return!0}function yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,i){var a=yg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=yg(a)}}function vg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?vg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Tg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ea(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ea(e.document)}return i}function Oh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function eA(e,i){var a=Tg(i);i=e.focusedElem;var l=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&vg(i.ownerDocument.documentElement,i)){if(l!==null&&Oh(i)){if(e=l.start,a=l.end,a===void 0&&(a=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(a,i.value.length);else if(a=(e=i.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=_g(i,d);var v=_g(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(e),a.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),a.addRange(e)))}}for(e=[],a=i;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)a=e[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var nA=ln&&"documentMode"in document&&11>=document.documentMode,fa=null,Nh=null,Oo=null,Mh=!1;function Eg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mh||fa==null||fa!==ea(l)||(l=fa,"selectionStart"in l&&Oh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Oo&&Do(Oo,l)||(Oo=l,l=Zu(Nh,"onSelect"),0<l.length&&(i=new ra("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=fa)))}function cs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var da={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Vh={},Ag={};ln&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function hs(e){if(Vh[e])return Vh[e];if(!da[e])return e;var i=da[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ag)return Vh[e]=i[a];return e}var Sg=hs("animationend"),wg=hs("animationiteration"),bg=hs("animationstart"),iA=hs("transitionrun"),rA=hs("transitionstart"),sA=hs("transitioncancel"),Rg=hs("transitionend"),Ig=new Map,Cg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ln(e,i){Ig.set(e,i),on(i,[e])}var Sn=[],ma=0,kh=0;function pu(){for(var e=ma,i=kh=ma=0;i<e;){var a=Sn[i];Sn[i++]=null;var l=Sn[i];Sn[i++]=null;var h=Sn[i];Sn[i++]=null;var d=Sn[i];if(Sn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Dg(a,h,d)}}function yu(e,i,a,l){Sn[ma++]=e,Sn[ma++]=i,Sn[ma++]=a,Sn[ma++]=l,kh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Uh(e,i,a,l){return yu(e,i,a,l),_u(e)}function gr(e,i){return yu(e,null,null,i),_u(e)}function Dg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&i!==null&&e.tag===3&&(d=e.stateNode,h=31-Xe(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[i]:e.push(i),i.lane=a|536870912)}function _u(e){if(50<el)throw el=0,Hf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ga={},Og=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=Og.get(e);return a!==void 0?a:(i={value:e,source:i,stack:gt(i)},Og.set(e,i),i)}return{value:e,source:i,stack:gt(i)}}var pa=[],ya=0,vu=null,Tu=0,bn=[],Rn=0,fs=null,Ci=1,Di="";function ds(e,i){pa[ya++]=Tu,pa[ya++]=vu,vu=e,Tu=i}function Ng(e,i,a){bn[Rn++]=Ci,bn[Rn++]=Di,bn[Rn++]=fs,fs=e;var l=Ci;e=Di;var h=32-Xe(l)-1;l&=~(1<<h),a+=1;var d=32-Xe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Ci=1<<32-Xe(i)+h|a<<h|l,Di=d+e}else Ci=1<<d|a<<h|l,Di=e}function Ph(e){e.return!==null&&(ds(e,1),Ng(e,1,0))}function Lh(e){for(;e===vu;)vu=pa[--ya],pa[ya]=null,Tu=pa[--ya],pa[ya]=null;for(;e===fs;)fs=bn[--Rn],bn[Rn]=null,Di=bn[--Rn],bn[Rn]=null,Ci=bn[--Rn],bn[Rn]=null}var Je=null,Ue=null,zt=!1,xn=null,ri=!1,xh=Error(s(519));function ms(e){var i=Error(s(418,""));throw Vo(wn(i,e)),xh}function Mg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ie]=e,i[_e]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<il.length;a++)Nt(il[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),es(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ts(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),dr(i,l.value,l.defaultValue,l.children),ts(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||qy(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=Wu),i=!0):i=!1,i||ms(e)}function Vg(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:ri=!0;return;case 5:case 13:ri=!1;return;default:Je=Je.return}}function No(e){if(e!==Je)return!1;if(!zt)return Vg(e),zt=!0,!1;var i=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sd(e.type,e.memoizedProps)),a=!a),a&&(i=!0),i&&Ue&&ms(e),Vg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){Ue=Bn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}Ue=null}}else Ue=Je?Bn(e.stateNode.nextSibling):null;return!0}function Mo(){Ue=Je=null,zt=!1}function Vo(e){xn===null?xn=[e]:xn.push(e)}var ko=Error(s(460)),kg=Error(s(474)),zh={then:function(){}};function Ug(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Eu(){}function Pg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Eu,Eu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===ko?Error(s(483)):e;default:if(typeof i.status=="string")i.then(Eu,Eu);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===ko?Error(s(483)):e}throw Uo=i,ko}}var Uo=null;function Lg(){if(Uo===null)throw Error(s(459));var e=Uo;return Uo=null,e}var _a=null,Po=0;function Au(e){var i=Po;return Po+=1,_a===null&&(_a=[]),Pg(_a,e,i)}function Lo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Su(e,i){throw i.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function xg(e){var i=e._init;return i(e._payload)}function zg(e){function i(k,O){if(e){var z=k.deletions;z===null?(k.deletions=[O],k.flags|=16):z.push(O)}}function a(k,O){if(!e)return null;for(;O!==null;)i(k,O),O=O.sibling;return null}function l(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function h(k,O){return k=Ir(k,O),k.index=0,k.sibling=null,k}function d(k,O,z){return k.index=z,e?(z=k.alternate,z!==null?(z=z.index,z<O?(k.flags|=33554434,O):z):(k.flags|=33554434,O)):(k.flags|=1048576,O)}function v(k){return e&&k.alternate===null&&(k.flags|=33554434),k}function T(k,O,z,F){return O===null||O.tag!==6?(O=kf(z,k.mode,F),O.return=k,O):(O=h(O,z),O.return=k,O)}function w(k,O,z,F){var rt=z.type;return rt===p?j(k,O,z.props.children,F,z.key):O!==null&&(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===tt&&xg(rt)===O.type)?(O=h(O,z.props),Lo(O,z),O.return=k,O):(O=qu(z.type,z.key,z.props,null,k.mode,F),Lo(O,z),O.return=k,O)}function N(k,O,z,F){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Uf(z,k.mode,F),O.return=k,O):(O=h(O,z.children||[]),O.return=k,O)}function j(k,O,z,F,rt){return O===null||O.tag!==7?(O=ws(z,k.mode,F,rt),O.return=k,O):(O=h(O,z),O.return=k,O)}function Y(k,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=kf(""+O,k.mode,z),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case f:return z=qu(O.type,O.key,O.props,null,k.mode,z),Lo(z,O),z.return=k,z;case g:return O=Uf(O,k.mode,z),O.return=k,O;case tt:var F=O._init;return O=F(O._payload),Y(k,O,z)}if(et(O)||wt(O))return O=ws(O,k.mode,z,null),O.return=k,O;if(typeof O.then=="function")return Y(k,Au(O),z);if(O.$$typeof===x)return Y(k,xu(k,O),z);Su(k,O)}return null}function B(k,O,z,F){var rt=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return rt!==null?null:T(k,O,""+z,F);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case f:return z.key===rt?w(k,O,z,F):null;case g:return z.key===rt?N(k,O,z,F):null;case tt:return rt=z._init,z=rt(z._payload),B(k,O,z,F)}if(et(z)||wt(z))return rt!==null?null:j(k,O,z,F,null);if(typeof z.then=="function")return B(k,O,Au(z),F);if(z.$$typeof===x)return B(k,O,xu(k,z),F);Su(k,z)}return null}function H(k,O,z,F,rt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return k=k.get(z)||null,T(O,k,""+F,rt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case f:return k=k.get(F.key===null?z:F.key)||null,w(O,k,F,rt);case g:return k=k.get(F.key===null?z:F.key)||null,N(O,k,F,rt);case tt:var It=F._init;return F=It(F._payload),H(k,O,z,F,rt)}if(et(F)||wt(F))return k=k.get(z)||null,j(O,k,F,rt,null);if(typeof F.then=="function")return H(k,O,z,Au(F),rt);if(F.$$typeof===x)return H(k,O,z,xu(O,F),rt);Su(O,F)}return null}function at(k,O,z,F){for(var rt=null,It=null,lt=O,ft=O=0,Me=null;lt!==null&&ft<z.length;ft++){lt.index>ft?(Me=lt,lt=null):Me=lt.sibling;var Bt=B(k,lt,z[ft],F);if(Bt===null){lt===null&&(lt=Me);break}e&&lt&&Bt.alternate===null&&i(k,lt),O=d(Bt,O,ft),It===null?rt=Bt:It.sibling=Bt,It=Bt,lt=Me}if(ft===z.length)return a(k,lt),zt&&ds(k,ft),rt;if(lt===null){for(;ft<z.length;ft++)lt=Y(k,z[ft],F),lt!==null&&(O=d(lt,O,ft),It===null?rt=lt:It.sibling=lt,It=lt);return zt&&ds(k,ft),rt}for(lt=l(lt);ft<z.length;ft++)Me=H(lt,k,ft,z[ft],F),Me!==null&&(e&&Me.alternate!==null&&lt.delete(Me.key===null?ft:Me.key),O=d(Me,O,ft),It===null?rt=Me:It.sibling=Me,It=Me);return e&&lt.forEach(function(kr){return i(k,kr)}),zt&&ds(k,ft),rt}function vt(k,O,z,F){if(z==null)throw Error(s(151));for(var rt=null,It=null,lt=O,ft=O=0,Me=null,Bt=z.next();lt!==null&&!Bt.done;ft++,Bt=z.next()){lt.index>ft?(Me=lt,lt=null):Me=lt.sibling;var kr=B(k,lt,Bt.value,F);if(kr===null){lt===null&&(lt=Me);break}e&&lt&&kr.alternate===null&&i(k,lt),O=d(kr,O,ft),It===null?rt=kr:It.sibling=kr,It=kr,lt=Me}if(Bt.done)return a(k,lt),zt&&ds(k,ft),rt;if(lt===null){for(;!Bt.done;ft++,Bt=z.next())Bt=Y(k,Bt.value,F),Bt!==null&&(O=d(Bt,O,ft),It===null?rt=Bt:It.sibling=Bt,It=Bt);return zt&&ds(k,ft),rt}for(lt=l(lt);!Bt.done;ft++,Bt=z.next())Bt=H(lt,k,ft,Bt.value,F),Bt!==null&&(e&&Bt.alternate!==null&&lt.delete(Bt.key===null?ft:Bt.key),O=d(Bt,O,ft),It===null?rt=Bt:It.sibling=Bt,It=Bt);return e&&lt.forEach(function(vS){return i(k,vS)}),zt&&ds(k,ft),rt}function se(k,O,z,F){if(typeof z=="object"&&z!==null&&z.type===p&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case f:t:{for(var rt=z.key;O!==null;){if(O.key===rt){if(rt=z.type,rt===p){if(O.tag===7){a(k,O.sibling),F=h(O,z.props.children),F.return=k,k=F;break t}}else if(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===tt&&xg(rt)===O.type){a(k,O.sibling),F=h(O,z.props),Lo(F,z),F.return=k,k=F;break t}a(k,O);break}else i(k,O);O=O.sibling}z.type===p?(F=ws(z.props.children,k.mode,F,z.key),F.return=k,k=F):(F=qu(z.type,z.key,z.props,null,k.mode,F),Lo(F,z),F.return=k,k=F)}return v(k);case g:t:{for(rt=z.key;O!==null;){if(O.key===rt)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){a(k,O.sibling),F=h(O,z.children||[]),F.return=k,k=F;break t}else{a(k,O);break}else i(k,O);O=O.sibling}F=Uf(z,k.mode,F),F.return=k,k=F}return v(k);case tt:return rt=z._init,z=rt(z._payload),se(k,O,z,F)}if(et(z))return at(k,O,z,F);if(wt(z)){if(rt=wt(z),typeof rt!="function")throw Error(s(150));return z=rt.call(z),vt(k,O,z,F)}if(typeof z.then=="function")return se(k,O,Au(z),F);if(z.$$typeof===x)return se(k,O,xu(k,z),F);Su(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(a(k,O.sibling),F=h(O,z),F.return=k,k=F):(a(k,O),F=kf(z,k.mode,F),F.return=k,k=F),v(k)):a(k,O)}return function(k,O,z,F){try{Po=0;var rt=se(k,O,z,F);return _a=null,rt}catch(lt){if(lt===ko)throw lt;var It=On(29,lt,null,k.mode);return It.lanes=F,It.return=k,It}finally{}}}var gs=zg(!0),Bg=zg(!1),va=Lt(null),wu=Lt(0);function qg(e,i){e=Bi,Ft(wu,e),Ft(va,i),Bi=e|i.baseLanes}function Bh(){Ft(wu,Bi),Ft(va,va.current)}function qh(){Bi=wu.current,ee(va),ee(wu)}var In=Lt(null),si=null;function pr(e){var i=e.alternate;Ft(Ee,Ee.current&1),Ft(In,e),si===null&&(i===null||va.current!==null||i.memoizedState!==null)&&(si=e)}function Hg(e){if(e.tag===22){if(Ft(Ee,Ee.current),Ft(In,e),si===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(si=e)}}else yr()}function yr(){Ft(Ee,Ee.current),Ft(In,In.current)}function Oi(e){ee(In),si===e&&(si=null),ee(Ee)}var Ee=Lt(0);function bu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var aA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},oA=r.unstable_scheduleCallback,lA=r.unstable_NormalPriority,Ae={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hh(){return{controller:new aA,data:new Map,refCount:0}}function xo(e){e.refCount--,e.refCount===0&&oA(lA,function(){e.controller.abort()})}var zo=null,jh=0,Ta=0,Ea=null;function uA(e,i){if(zo===null){var a=zo=[];jh=0,Ta=Xf(),Ea={status:"pending",value:void 0,then:function(l){a.push(l)}}}return jh++,i.then(jg,jg),i}function jg(){if(--jh===0&&zo!==null){Ea!==null&&(Ea.status="fulfilled");var e=zo;zo=null,Ta=0,Ea=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function cA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Fg=S.S;S.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&uA(e,i),Fg!==null&&Fg(e,i)};var ps=Lt(null);function Fh(){var e=ps.current;return e!==null?e:Yt.pooledCache}function Ru(e,i){i===null?Ft(ps,ps.current):Ft(ps,i.pool)}function Gg(){var e=Fh();return e===null?null:{parent:Ae._currentValue,pool:e}}var _r=0,Rt=null,Gt=null,he=null,Iu=!1,Aa=!1,ys=!1,Cu=0,Bo=0,Sa=null,hA=0;function oe(){throw Error(s(321))}function Gh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function Kh(e,i,a,l,h,d){return _r=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=e===null||e.memoizedState===null?_s:vr,ys=!1,d=a(l,h),ys=!1,Aa&&(d=Qg(i,a,l,h)),Kg(e),d}function Kg(e){S.H=ai;var i=Gt!==null&&Gt.next!==null;if(_r=0,he=Gt=Rt=null,Iu=!1,Bo=0,Sa=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Lu(e)&&(Oe=!0))}function Qg(e,i,a,l){Rt=e;var h=0;do{if(Aa&&(Sa=null),Bo=0,Aa=!1,25<=h)throw Error(s(301));if(h+=1,he=Gt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=vs,d=i(a,l)}while(Aa);return d}function fA(){var e=S.H,i=e.useState()[0];return i=typeof i.then=="function"?qo(i):i,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function Qh(){var e=Cu!==0;return Cu=0,e}function Yh(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function $h(e){if(Iu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Iu=!1}_r=0,he=Gt=Rt=null,Aa=!1,Bo=Cu=0,Sa=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Rt.memoizedState=he=e:he=he.next=e,he}function fe(){if(Gt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var i=he===null?Rt.memoizedState:he.next;if(i!==null)he=i,Gt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},he===null?Rt.memoizedState=he=e:he=he.next=e}return he}var Du;Du=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function qo(e){var i=Bo;return Bo+=1,Sa===null&&(Sa=[]),e=Pg(Sa,e,i),i=Rt,(he===null?i.memoizedState:he.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?_s:vr),e}function Ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===x)return He(e)}throw Error(s(438,String(e)))}function Xh(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Du(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=Et;return i.index++,a}function Ni(e,i){return typeof i=="function"?i(e):i}function Nu(e){var i=fe();return Zh(i,Gt,e)}function Zh(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,w=null,N=i,j=!1;do{var Y=N.lane&-536870913;if(Y!==N.lane?(Ut&Y)===Y:(_r&Y)===Y){var B=N.revertLane;if(B===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),Y===Ta&&(j=!0);else if((_r&B)===B){N=N.next,B===Ta&&(j=!0);continue}else Y={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},w===null?(T=w=Y,v=d):w=w.next=Y,Rt.lanes|=B,Cr|=B;Y=N.action,ys&&a(d,Y),d=N.hasEagerState?N.eagerState:a(d,Y)}else B={lane:Y,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},w===null?(T=w=B,v=d):w=w.next=B,Rt.lanes|=Y,Cr|=Y;N=N.next}while(N!==null&&N!==i);if(w===null?v=d:w.next=T,!un(d,e.memoizedState)&&(Oe=!0,j&&(a=Ea,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Wh(e){var i=fe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);un(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Yg(e,i,a){var l=Rt,h=fe(),d=zt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Gt||h).memoizedState,a);if(v&&(h.memoizedState=a,Oe=!0),h=h.queue,ef(Zg.bind(null,l,h,e),[e]),h.getSnapshot!==i||v||he!==null&&he.memoizedState.tag&1){if(l.flags|=2048,wa(9,Xg.bind(null,l,h,a,i),{destroy:void 0},null),Yt===null)throw Error(s(349));d||_r&60||$g(l,i,a)}return a}function $g(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=Du(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Xg(e,i,a,l){i.value=a,i.getSnapshot=l,Wg(i)&&Jg(e)}function Zg(e,i,a){return a(function(){Wg(i)&&Jg(e)})}function Wg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function Jg(e){var i=gr(e,2);i!==null&&tn(i,e,2)}function Jh(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),ys){Qn(!0);try{a()}finally{Qn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},i}function tp(e,i,a,l){return e.baseState=a,Zh(e,Gt,typeof l=="function"?l:Ni)}function dA(e,i,a,l,h){if(ku(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,ep(i,d)):(d.next=a.next,i.pending=a.next=d)}}function ep(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var T=a(h,l),w=S.S;w!==null&&w(v,T),np(e,i,T)}catch(N){tf(e,i,N)}finally{S.T=d}}else try{d=a(h,l),np(e,i,d)}catch(N){tf(e,i,N)}}function np(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ip(e,i,l)},function(l){return tf(e,i,l)}):ip(e,i,a)}function ip(e,i,a){i.status="fulfilled",i.value=a,rp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,ep(e,a)))}function tf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,rp(i),i=i.next;while(i!==l)}e.action=null}function rp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function sp(e,i){return i}function ap(e,i){if(zt){var a=Yt.formState;if(a!==null){t:{var l=Rt;if(zt){if(Ue){e:{for(var h=Ue,d=ri;h.nodeType!==8;){if(!d){h=null;break e}if(h=Bn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Ue=Bn(h.nextSibling),l=h.data==="F!";break t}}ms(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sp,lastRenderedState:i},a.queue=l,a=wp.bind(null,Rt,l),l.dispatch=a,l=Jh(!1),d=of.bind(null,Rt,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=dA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function op(e){var i=fe();return lp(i,Gt,e)}function lp(e,i,a){i=Zh(e,i,sp)[0],e=Nu(Ni)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?qo(i):i;var l=fe(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Rt.flags|=2048,wa(9,mA.bind(null,h,a),{destroy:void 0},null)),[i,d,e]}function mA(e,i){e.action=i}function up(e){var i=fe(),a=Gt;if(a!==null)return lp(i,a,e);fe(),i=i.memoizedState,a=fe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function wa(e,i,a,l){return e={tag:e,create:i,inst:a,deps:l,next:null},i=Rt.updateQueue,i===null&&(i=Du(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function cp(){return fe().memoizedState}function Mu(e,i,a,l){var h=rn();Rt.flags|=e,h.memoizedState=wa(1|i,a,{destroy:void 0},l===void 0?null:l)}function Vu(e,i,a,l){var h=fe();l=l===void 0?null:l;var d=h.memoizedState.inst;Gt!==null&&l!==null&&Gh(l,Gt.memoizedState.deps)?h.memoizedState=wa(i,a,d,l):(Rt.flags|=e,h.memoizedState=wa(1|i,a,d,l))}function hp(e,i){Mu(8390656,8,e,i)}function ef(e,i){Vu(2048,8,e,i)}function fp(e,i){return Vu(4,2,e,i)}function dp(e,i){return Vu(4,4,e,i)}function mp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function gp(e,i,a){a=a!=null?a.concat([e]):null,Vu(4,4,mp.bind(null,i,e),a)}function nf(){}function pp(e,i){var a=fe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Gh(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function yp(e,i){var a=fe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Gh(i,l[1]))return l[0];if(l=e(),ys){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[l,i],l}function rf(e,i,a){return a===void 0||_r&1073741824?e.memoizedState=i:(e.memoizedState=a,e=vy(),Rt.lanes|=e,Cr|=e,a)}function _p(e,i,a,l){return un(a,i)?a:va.current!==null?(e=rf(e,a,l),un(e,i)||(Oe=!0),e):_r&42?(e=vy(),Rt.lanes|=e,Cr|=e,i):(Oe=!0,e.memoizedState=a)}function vp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=S.T,T={};S.T=T,of(e,!1,i,a);try{var w=h(),N=S.S;if(N!==null&&N(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var j=cA(w,l);Ho(e,i,j,dn(e))}else Ho(e,i,l,dn(e))}catch(Y){Ho(e,i,{then:function(){},status:"rejected",reason:Y},dn())}finally{nt.p=d,S.T=v}}function gA(){}function sf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Tp(e).queue;vp(e,h,i,bt,a===null?gA:function(){return Ep(e),a(l)})}function Tp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:bt,baseState:bt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:bt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ep(e){var i=Tp(e).next.queue;Ho(e,i,{},dn())}function af(){return He(ll)}function Ap(){return fe().memoizedState}function Sp(){return fe().memoizedState}function pA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=dn();e=Ar(a);var l=Sr(i,e,a);l!==null&&(tn(l,i,a),Go(l,i,a)),i={cache:Hh()},e.payload=i;return}i=i.return}}function yA(e,i,a){var l=dn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ku(e)?bp(i,a):(a=Uh(e,i,a,l),a!==null&&(tn(a,e,l),Rp(a,i,l)))}function wp(e,i,a){var l=dn();Ho(e,i,a,l)}function Ho(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ku(e))bp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,un(T,v))return yu(e,i,h,0),Yt===null&&pu(),!1}catch{}finally{}if(a=Uh(e,i,h,l),a!==null)return tn(a,e,l),Rp(a,i,l),!0}return!1}function of(e,i,a,l){if(l={lane:2,revertLane:Xf(),action:l,hasEagerState:!1,eagerState:null,next:null},ku(e)){if(i)throw Error(s(479))}else i=Uh(e,a,l,2),i!==null&&tn(i,e,2)}function ku(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function bp(e,i){Aa=Iu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Rp(e,i,a){if(a&4194176){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,sr(e,a)}}var ai={readContext:He,use:Ou,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useLayoutEffect:oe,useInsertionEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useSyncExternalStore:oe,useId:oe};ai.useCacheRefresh=oe,ai.useMemoCache=oe,ai.useHostTransitionStatus=oe,ai.useFormState=oe,ai.useActionState=oe,ai.useOptimistic=oe;var _s={readContext:He,use:Ou,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:He,useEffect:hp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Mu(4194308,4,mp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Mu(4194308,4,e,i)},useInsertionEffect:function(e,i){Mu(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var l=e();if(ys){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=rn();if(a!==void 0){var h=a(i);if(ys){Qn(!0);try{a(i)}finally{Qn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=yA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=Jh(e);var i=e.queue,a=wp.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,i){var a=rn();return rf(a,e,i)},useTransition:function(){var e=Jh(!1);return e=vp.bind(null,Rt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=rn();if(zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Yt===null)throw Error(s(349));Ut&60||$g(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,hp(Zg.bind(null,l,d,e),[e]),l.flags|=2048,wa(9,Xg.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var e=rn(),i=Yt.identifierPrefix;if(zt){var a=Di,l=Ci;a=(l&~(1<<32-Xe(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Cu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=hA++,i=":"+i+"r"+a.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return rn().memoizedState=pA.bind(null,Rt)}};_s.useMemoCache=Xh,_s.useHostTransitionStatus=af,_s.useFormState=ap,_s.useActionState=ap,_s.useOptimistic=function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=of.bind(null,Rt,!0,a),a.dispatch=i,[e,i]};var vr={readContext:He,use:Ou,useCallback:pp,useContext:He,useEffect:ef,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:yp,useReducer:Nu,useRef:cp,useState:function(){return Nu(Ni)},useDebugValue:nf,useDeferredValue:function(e,i){var a=fe();return _p(a,Gt.memoizedState,e,i)},useTransition:function(){var e=Nu(Ni)[0],i=fe().memoizedState;return[typeof e=="boolean"?e:qo(e),i]},useSyncExternalStore:Yg,useId:Ap};vr.useCacheRefresh=Sp,vr.useMemoCache=Xh,vr.useHostTransitionStatus=af,vr.useFormState=op,vr.useActionState=op,vr.useOptimistic=function(e,i){var a=fe();return tp(a,Gt,e,i)};var vs={readContext:He,use:Ou,useCallback:pp,useContext:He,useEffect:ef,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:yp,useReducer:Wh,useRef:cp,useState:function(){return Wh(Ni)},useDebugValue:nf,useDeferredValue:function(e,i){var a=fe();return Gt===null?rf(a,e,i):_p(a,Gt.memoizedState,e,i)},useTransition:function(){var e=Wh(Ni)[0],i=fe().memoizedState;return[typeof e=="boolean"?e:qo(e),i]},useSyncExternalStore:Yg,useId:Ap};vs.useCacheRefresh=Sp,vs.useMemoCache=Xh,vs.useHostTransitionStatus=af,vs.useFormState=up,vs.useActionState=up,vs.useOptimistic=function(e,i){var a=fe();return Gt!==null?tp(a,Gt,e,i):(a.baseState=e,[e,a.queue.dispatch])};function lf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:I({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uf={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,i,a){e=e._reactInternals;var l=dn(),h=Ar(l);h.payload=i,a!=null&&(h.callback=a),i=Sr(e,h,l),i!==null&&(tn(i,e,l),Go(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=dn(),h=Ar(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Sr(e,h,l),i!==null&&(tn(i,e,l),Go(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=dn(),l=Ar(a);l.tag=2,i!=null&&(l.callback=i),i=Sr(e,l,a),i!==null&&(tn(i,e,a),Go(i,e,a))}};function Ip(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Do(a,l)||!Do(h,d):!0}function Cp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&uf.enqueueReplaceState(i,i.state,null)}function Ts(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=I({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Dp(e){Uu(e)}function Op(e){console.error(e)}function Np(e){Uu(e)}function Pu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Mp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function cf(e,i,a){return a=Ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Pu(e,i)},a}function Vp(e){return e=Ar(e),e.tag=3,e}function kp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Mp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Mp(i,a,l),typeof h!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function _A(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Fo(i,a,h,!0),a=In.current,a!==null){switch(a.tag){case 13:return si===null?Gf():a.alternate===null&&re===0&&(re=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===zh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Qf(e,l,h)),!1;case 22:return a.flags|=65536,l===zh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Qf(e,l,h)),!1}throw Error(s(435,a.tag))}return Qf(e,l,h),Gf(),!1}if(zt)return i=In.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==xh&&(e=Error(s(422),{cause:l}),Vo(wn(e,a)))):(l!==xh&&(i=Error(s(423),{cause:l}),Vo(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=wn(l,a),h=cf(e.stateNode,l,h),bf(e,h),re!==4&&(re=2)),!1;var d=Error(s(520),{cause:l});if(d=wn(d,a),Jo===null?Jo=[d]:Jo.push(d),re!==4&&(re=2),i===null)return!0;l=wn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=cf(a.stateNode,l,e),bf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Vp(h),kp(h,e,a,l),bf(a,h),!1}a=a.return}while(a!==null);return!1}var Up=Error(s(461)),Oe=!1;function Pe(e,i,a,l){i.child=e===null?Bg(i,null,a,l):gs(i,e.child,a,l)}function Pp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return As(i),l=Kh(e,i,a,v,d,h),T=Qh(),e!==null&&!Oe?(Yh(e,i,h),Mi(e,i,h)):(zt&&T&&Ph(i),i.flags|=1,Pe(e,i,l,h),i.child)}function Lp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Vf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,xp(e,i,d,l,h)):(e=qu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!vf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(v,l)&&e.ref===i.ref)return Mi(e,i,h)}return i.flags|=1,e=Ir(d,l),e.ref=i.ref,e.return=i,i.child=e}function xp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Do(d,l)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=l=d,vf(e,h))e.flags&131072&&(Oe=!0);else return i.lanes=e.lanes,Mi(e,i,h)}return hf(e,i,a,l,h)}function zp(e,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(jo(e,i),l.mode==="hidden"||d){if(i.flags&128){if(l=v!==null?v.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Bp(e,i,l,a)}if(a&536870912)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ru(i,v!==null?v.cachePool:null),v!==null?qg(i,v):Bh(),Hg(i);else return i.lanes=i.childLanes=536870912,Bp(e,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Ru(i,v.cachePool),qg(i,v),yr(),i.memoizedState=null):(e!==null&&Ru(i,null),Bh(),yr());return Pe(e,i,h,a),i.child}function Bp(e,i,a,l){var h=Fh();return h=h===null?null:{parent:Ae._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ru(i,null),Bh(),Hg(i),e!==null&&Fo(e,i,l,!0),null}function jo(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=2097664)}}function hf(e,i,a,l,h){return As(i),a=Kh(e,i,a,l,void 0,h),l=Qh(),e!==null&&!Oe?(Yh(e,i,h),Mi(e,i,h)):(zt&&l&&Ph(i),i.flags|=1,Pe(e,i,a,h),i.child)}function qp(e,i,a,l,h,d){return As(i),i.updateQueue=null,a=Qg(i,l,a,h),Kg(e),l=Qh(),e!==null&&!Oe?(Yh(e,i,d),Mi(e,i,d)):(zt&&l&&Ph(i),i.flags|=1,Pe(e,i,a,d),i.child)}function Hp(e,i,a,l,h){if(As(i),i.stateNode===null){var d=ga,v=a.contextType;typeof v=="object"&&v!==null&&(d=He(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=uf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Sf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?He(v):ga,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(lf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&uf.enqueueReplaceState(d,d.state,null),Qo(i,l,d,h),Ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,w=Ts(a,T);d.props=w;var N=d.context,j=a.contextType;v=ga,typeof j=="object"&&j!==null&&(v=He(j));var Y=a.getDerivedStateFromProps;j=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,j||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||N!==v)&&Cp(i,d,l,v),Er=!1;var B=i.memoizedState;d.state=B,Qo(i,l,d,h),Ko(),N=i.memoizedState,T||B!==N||Er?(typeof Y=="function"&&(lf(i,a,Y,l),N=i.memoizedState),(w=Er||Ip(i,a,w,l,B,N,v))?(j||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=N),d.props=l,d.state=N,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,wf(e,i),v=i.memoizedProps,j=Ts(a,v),d.props=j,Y=i.pendingProps,B=d.context,N=a.contextType,w=ga,typeof N=="object"&&N!==null&&(w=He(N)),T=a.getDerivedStateFromProps,(N=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||B!==w)&&Cp(i,d,l,w),Er=!1,B=i.memoizedState,d.state=B,Qo(i,l,d,h),Ko();var H=i.memoizedState;v!==Y||B!==H||Er||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof T=="function"&&(lf(i,a,T,l),H=i.memoizedState),(j=Er||Ip(i,a,j,l,B,H,w)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=w,l=j):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,jo(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=gs(i,e.child,null,h),i.child=gs(i,null,a,h)):Pe(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Mi(e,i,h),e}function jp(e,i,a,l){return Mo(),i.flags|=256,Pe(e,i,a,l),i.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function df(e){return{baseLanes:e,cachePool:Gg()}}function mf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Nn),e}function Fp(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ee.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(zt){if(h?pr(i):yr(),zt){var T=Ue,w;if(w=T){t:{for(w=T,T=ri;w.nodeType!==8;){if(!T){T=null;break t}if(w=Bn(w.nextSibling),w===null){T=null;break t}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:fs!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},w=On(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,Je=i,Ue=null,w=!0):w=!1}w||ms(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;Oi(i)}return T=l.children,l=l.fallback,h?(yr(),h=i.mode,T=pf({mode:"hidden",children:T},h),l=ws(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=df(a),h.childLanes=mf(e,v,a),i.memoizedState=ff,l):(pr(i),gf(i,T))}if(w=e.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(pr(i),i.flags&=-257,i=yf(e,i,a)):i.memoizedState!==null?(yr(),i.child=e.child,i.flags|=128,i=null):(yr(),h=l.fallback,T=i.mode,l=pf({mode:"visible",children:l.children},T),h=ws(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,gs(i,e.child,null,a),l=i.child,l.memoizedState=df(a),l.childLanes=mf(e,v,a),i.memoizedState=ff,i=h);else if(pr(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var N=v.dgst;v=N,l=Error(s(419)),l.stack="",l.digest=v,Vo({value:l,source:null,stack:null}),i=yf(e,i,a)}else if(Oe||Fo(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Yt,v!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(v.suspendedLanes|a)?0:l,l!==0&&l!==w.retryLane)throw w.retryLane=l,gr(e,l),tn(v,e,l),Up}T.data==="$?"||Gf(),i=yf(e,i,a)}else T.data==="$?"?(i.flags|=128,i.child=e.child,i=VA.bind(null,e),T._reactRetry=i,i=null):(e=w.treeContext,Ue=Bn(T.nextSibling),Je=i,zt=!0,xn=null,ri=!1,e!==null&&(bn[Rn++]=Ci,bn[Rn++]=Di,bn[Rn++]=fs,Ci=e.id,Di=e.overflow,fs=i),i=gf(i,l.children),i.flags|=4096);return i}return h?(yr(),h=l.fallback,T=i.mode,w=e.child,N=w.sibling,l=Ir(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&31457280,N!==null?h=Ir(N,h):(h=ws(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=df(a):(w=T.cachePool,w!==null?(N=Ae._currentValue,w=w.parent!==N?{parent:N,pool:N}:w):w=Gg(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=mf(e,v,a),i.memoizedState=ff,l):(pr(i),a=e.child,e=a.sibling,a=Ir(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function gf(e,i){return i=pf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function pf(e,i){return py(e,i,0,null)}function yf(e,i,a){return gs(i,e.child,null,a),e=gf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Gp(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Ef(e.return,i,a)}function _f(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Kp(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Pe(e,i,l.children,a),l=Ee.current,l&2)l=l&1|2,i.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gp(e,a,i);else if(e.tag===19)Gp(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ft(Ee,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&bu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),_f(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&bu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}_f(i,!0,a,null,d);break;case"together":_f(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Cr|=i.lanes,!(a&i.childLanes))if(e!==null){if(Fo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ir(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ir(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function vf(e,i){return e.lanes&i?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function vA(e,i,a){switch(i.tag){case 3:Ji(i,i.stateNode.containerInfo),Tr(i,Ae,e.memoizedState.cache),Mo();break;case 27:case 5:oo(i);break;case 4:Ji(i,i.stateNode.containerInfo);break;case 10:Tr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(pr(i),i.flags|=128,null):a&i.child.childLanes?Fp(e,i,a):(pr(i),e=Mi(e,i,a),e!==null?e.sibling:null);pr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Fo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Kp(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Ee,Ee.current),l)break;return null;case 22:case 23:return i.lanes=0,zp(e,i,a);case 24:Tr(i,Ae,e.memoizedState.cache)}return Mi(e,i,a)}function Qp(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!vf(e,a)&&!(i.flags&128))return Oe=!1,vA(e,i,a);Oe=!!(e.flags&131072)}else Oe=!1,zt&&i.flags&1048576&&Ng(i,Tu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Vf(l)?(e=Ts(l,e),i.tag=1,i=Hp(null,i,l,e,a)):(i.tag=0,i=hf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===$){i.tag=11,i=Pp(null,i,l,e,a);break t}else if(h===dt){i.tag=14,i=Lp(null,i,l,e,a);break t}}throw i=b(l)||l,Error(s(306,i,""))}}return i;case 0:return hf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ts(l,i.pendingProps),Hp(e,i,l,h,a);case 3:t:{if(Ji(i,i.stateNode.containerInfo),e===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,wf(e,i),Qo(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Tr(i,Ae,d),d!==h.cache&&Af(i,[Ae],a,!0),Ko(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=jp(e,i,d,a);break t}else if(d!==l){l=wn(Error(s(424)),i),Vo(l),i=jp(e,i,d,a);break t}else for(Ue=Bn(i.stateNode.containerInfo.firstChild),Je=i,zt=!0,xn=null,ri=!0,a=Bg(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Mo(),d===l){i=Mi(e,i,a);break t}Pe(e,i,d,a)}i=i.child}return i;case 26:return jo(e,i),e===null?(a=Xy(i.type,null,i.pendingProps,null))?i.memoizedState=a:zt||(a=i.type,e=i.pendingProps,l=Ju(pn.current).createElement(a),l[Ie]=i,l[_e]=e,Le(l,a,e),Zt(l),i.stateNode=l):i.memoizedState=Xy(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return oo(i),e===null&&zt&&(l=i.stateNode=Qy(i.type,i.pendingProps,pn.current),Je=i,ri=!0,Ue=Bn(l.firstChild)),l=i.pendingProps.children,e!==null||zt?Pe(e,i,l,a):i.child=gs(i,null,l,a),jo(e,i),i.child;case 5:return e===null&&zt&&((h=l=Ue)&&(l=$A(l,i.type,i.pendingProps,ri),l!==null?(i.stateNode=l,Je=i,Ue=Bn(l.firstChild),ri=!1,h=!0):h=!1),h||ms(i)),oo(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,sd(h,d)?l=null:v!==null&&sd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Kh(e,i,fA,null,null,a),ll._currentValue=h),jo(e,i),Pe(e,i,l,a),i.child;case 6:return e===null&&zt&&((e=a=Ue)&&(a=XA(a,i.pendingProps,ri),a!==null?(i.stateNode=a,Je=i,Ue=null,e=!0):e=!1),e||ms(i)),null;case 13:return Fp(e,i,a);case 4:return Ji(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=gs(i,null,l,a):Pe(e,i,l,a),i.child;case 11:return Pp(e,i,i.type,i.pendingProps,a);case 7:return Pe(e,i,i.pendingProps,a),i.child;case 8:return Pe(e,i,i.pendingProps.children,a),i.child;case 12:return Pe(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Tr(i,i.type,l.value),Pe(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,As(i),h=He(h),l=l(h),i.flags|=1,Pe(e,i,l,a),i.child;case 14:return Lp(e,i,i.type,i.pendingProps,a);case 15:return xp(e,i,i.type,i.pendingProps,a);case 19:return Kp(e,i,a);case 22:return zp(e,i,a);case 24:return As(i),l=He(Ae),e===null?(h=Fh(),h===null&&(h=Yt,d=Hh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Sf(i),Tr(i,Ae,h)):(e.lanes&a&&(wf(e,i),Qo(i,null,null,a),Ko()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Tr(i,Ae,l)):(l=d.cache,Tr(i,Ae,l),l!==h.cache&&Af(i,[Ae],a,!0))),Pe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var Tf=Lt(null),Es=null,Vi=null;function Tr(e,i,a){Ft(Tf,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=Tf.current,ee(Tf)}function Ef(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Af(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Ef(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Ef(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Fo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if(h.flags&524288)d=!0;else if(h.flags&262144)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Wi.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}h=h.return}e!==null&&Af(i,e,a,l),i.flags|=262144}function Lu(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Es=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return Yp(Es,e)}function xu(e,i){return Es===null&&As(e),Yp(e,i)}function Yp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Vi=Vi.next=i;return a}var Er=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,Jt&2){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=_u(e),Dg(e,null,a),i}return yu(e,l,i,a),_u(e)}function Go(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,sr(e,a)}}function bf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Rf=!1;function Ko(){if(Rf){var e=Ea;if(e!==null)throw e}}function Qo(e,i,a,l){Rf=!1;var h=e.updateQueue;Er=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,N=w.next;w.next=null,v===null?d=N:v.next=N,v=w;var j=e.alternate;j!==null&&(j=j.updateQueue,T=j.lastBaseUpdate,T!==v&&(T===null?j.firstBaseUpdate=N:T.next=N,j.lastBaseUpdate=w))}if(d!==null){var Y=h.baseState;v=0,j=N=w=null,T=d;do{var B=T.lane&-536870913,H=B!==T.lane;if(H?(Ut&B)===B:(l&B)===B){B!==0&&B===Ta&&(Rf=!0),j!==null&&(j=j.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var at=e,vt=T;B=i;var se=a;switch(vt.tag){case 1:if(at=vt.payload,typeof at=="function"){Y=at.call(se,Y,B);break t}Y=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=vt.payload,B=typeof at=="function"?at.call(se,Y,B):at,B==null)break t;Y=I({},Y,B);break t;case 2:Er=!0}}B=T.callback,B!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[B]:H.push(B))}else H={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},j===null?(N=j=H,w=Y):j=j.next=H,v|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);j===null&&(w=Y),h.baseState=w,h.firstBaseUpdate=N,h.lastBaseUpdate=j,d===null&&(h.shared.lanes=0),Cr|=v,e.lanes=v,e.memoizedState=Y}}function $p(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Xp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$p(a[e],i)}function Yo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Qt(i,i.return,T)}}function wr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a;try{T()}catch(N){Qt(h,w,N)}}}l=l.next}while(l!==d)}}catch(N){Qt(i,i.return,N)}}function Zp(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Xp(i,a)}catch(l){Qt(e,e.return,l)}}}function Wp(e,i,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Qt(e,i,l)}}function Ss(e,i){try{var a=e.ref;if(a!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){Qt(e,i,d)}}function cn(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Qt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Qt(e,i,h)}else a.current=null}function Jp(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Qt(e,e.return,h)}}function ty(e,i,a){try{var l=e.stateNode;FA(l,e.type,a,i),l[_e]=i}catch(h){Qt(e,e.return,h)}}function ey(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(e,i):a.insertBefore(e,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(e,a)):(i=a,i.appendChild(e)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wu));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Cf(e,i,a),e=e.sibling;e!==null;)Cf(e,i,a),e=e.sibling}function zu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(zu(e,i,a),e=e.sibling;e!==null;)zu(e,i,a),e=e.sibling}var Ui=!1,ie=!1,Df=!1,ny=typeof WeakSet=="function"?WeakSet:Set,Ne=null,iy=!1;function TA(e,i){if(e=e.containerInfo,id=sc,e=Tg(e),Oh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,w=-1,N=0,j=0,Y=e,B=null;e:for(;;){for(var H;Y!==a||h!==0&&Y.nodeType!==3||(T=v+h),Y!==d||l!==0&&Y.nodeType!==3||(w=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(H=Y.firstChild)!==null;)B=Y,Y=H;for(;;){if(Y===e)break e;if(B===a&&++N===h&&(T=v),B===d&&++j===l&&(w=v),(H=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=H}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:e,selectionRange:a},sc=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var at=Ts(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(at,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(vt){Qt(a,a.return,vt)}}break;case 3:if(e&1024){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ld(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}return at=iy,iy=!1,at}function ry(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Li(e,a),l&4&&Yo(5,a);break;case 1:if(Li(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(T){Qt(a,a.return,T)}else{var h=Ts(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Qt(a,a.return,T)}}l&64&&Zp(a),l&512&&Ss(a,a.return);break;case 3:if(Li(e,a),l&64&&(l=a.updateQueue,l!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Xp(l,e)}catch(T){Qt(a,a.return,T)}}break;case 26:Li(e,a),l&512&&Ss(a,a.return);break;case 27:case 5:Li(e,a),i===null&&l&4&&Jp(a),l&512&&Ss(a,a.return);break;case 12:Li(e,a);break;case 13:Li(e,a),l&4&&oy(e,a);break;case 22:if(h=a.memoizedState!==null||Ui,!h){i=i!==null&&i.memoizedState!==null||ie;var d=Ui,v=ie;Ui=h,(ie=i)&&!v?br(e,a,(a.subtreeFlags&8772)!==0):Li(e,a),Ui=d,ie=v}l&512&&(a.memoizedProps.mode==="manual"?Ss(a,a.return):cn(a,a.return));break;default:Li(e,a)}}function sy(e){var i=e.alternate;i!==null&&(e.alternate=null,sy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Jr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var de=null,hn=!1;function Pi(e,i,a){for(a=a.child;a!==null;)ay(e,i,a),a=a.sibling}function ay(e,i,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(tr,a)}catch{}switch(a.tag){case 26:ie||cn(a,i),Pi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ie||cn(a,i);var l=de,h=hn;for(de=a.stateNode,Pi(e,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Jr(a),de=l,hn=h;break;case 5:ie||cn(a,i);case 6:h=de;var d=hn;if(de=null,Pi(e,i,a),de=h,hn=d,de!==null)if(hn)try{e=de,l=a.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(v){Qt(a,i,v)}else try{de.removeChild(a.stateNode)}catch(v){Qt(a,i,v)}break;case 18:de!==null&&(hn?(i=de,a=a.stateNode,i.nodeType===8?od(i.parentNode,a):i.nodeType===1&&od(i,a),fl(i)):od(de,a.stateNode));break;case 4:l=de,h=hn,de=a.stateNode.containerInfo,hn=!0,Pi(e,i,a),de=l,hn=h;break;case 0:case 11:case 14:case 15:ie||wr(2,a,i),ie||wr(4,a,i),Pi(e,i,a);break;case 1:ie||(cn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Wp(a,i,l)),Pi(e,i,a);break;case 21:Pi(e,i,a);break;case 22:ie||cn(a,i),ie=(l=ie)||a.memoizedState!==null,Pi(e,i,a),ie=l;break;default:Pi(e,i,a)}}function oy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(a){Qt(i,i.return,a)}}function EA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new ny),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new ny),i;default:throw Error(s(435,e.tag))}}function Of(e,i){var a=EA(e);i.forEach(function(l){var h=kA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function Cn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:case 5:de=T.stateNode,hn=!1;break t;case 3:de=T.stateNode.containerInfo,hn=!0;break t;case 4:de=T.stateNode.containerInfo,hn=!0;break t}T=T.return}if(de===null)throw Error(s(160));ay(d,v,h),de=null,hn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ly(i,e),i=i.sibling}var zn=null;function ly(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(i,e),Dn(e),l&4&&(wr(3,e,e.return),Yo(3,e),wr(5,e,e.return));break;case 1:Cn(i,e),Dn(e),l&512&&(ie||a===null||cn(a,a.return)),l&64&&Ui&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=zn;if(Cn(i,e),Dn(e),l&512&&(ie||a===null||cn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[or]||d[Ie]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Le(d,l,a),d[Ie]=e,Zt(d),l=d;break t;case"link":var v=Jy("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),Le(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Jy("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),Le(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ie]=e,Zt(d),l=d}e.stateNode=l}else t_(h,e.type,e.stateNode);else e.stateNode=Wy(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?t_(h,e.type,e.stateNode):Wy(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ty(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var w=h.firstChild;w;){var N=w.nextSibling,j=w.nodeName;w[or]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&w.rel.toLowerCase()==="stylesheet"||h.removeChild(w),w=N}for(var Y=e.type,B=h.attributes;B.length;)h.removeAttributeNode(B[0]);Le(h,Y,d),h[Ie]=e,h[_e]=d}catch(at){Qt(e,e.return,at)}}case 5:if(Cn(i,e),Dn(e),l&512&&(ie||a===null||cn(a,a.return)),e.flags&32){h=e.stateNode;try{vn(h,"")}catch(at){Qt(e,e.return,at)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,ty(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Df=!0);break;case 6:if(Cn(i,e),Dn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(at){Qt(e,e.return,at)}}break;case 3:if(nc=null,h=zn,zn=tc(i.containerInfo),Cn(i,e),zn=h,Dn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(i.containerInfo)}catch(at){Qt(e,e.return,at)}Df&&(Df=!1,uy(e));break;case 4:l=zn,zn=tc(e.stateNode.containerInfo),Cn(i,e),Dn(e),zn=l;break;case 12:Cn(i,e),Dn(e);break;case 13:Cn(i,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zf=en()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Of(e,l)));break;case 22:if(l&512&&(ie||a===null||cn(a,a.return)),w=e.memoizedState!==null,N=a!==null&&a.memoizedState!==null,j=Ui,Y=ie,Ui=j||w,ie=Y||N,Cn(i,e),ie=Y,Ui=j,Dn(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=w?i._visibility&-2:i._visibility|1,w&&(i=Ui||ie,a===null||N||i||ba(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){N=a=i;try{if(h=N.stateNode,w)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=N.stateNode,T=N.memoizedProps.style;var H=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(at){Qt(N,N.return,at)}}}else if(i.tag===6){if(a===null){N=i;try{N.stateNode.nodeValue=w?"":N.memoizedProps}catch(at){Qt(N,N.return,at)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Of(e,a))));break;case 19:Cn(i,e),Dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Of(e,l)));break;case 21:break;default:Cn(i,e),Dn(e)}}function Dn(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(ey(a)){var l=a;break t}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=If(e);zu(e,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(vn(v,""),l.flags&=-33);var T=If(e);zu(e,T,v);break;case 3:case 4:var w=l.stateNode.containerInfo,N=If(e);Cf(e,N,w);break;default:throw Error(s(161))}}}catch(j){Qt(e,e.return,j)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function uy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;uy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Li(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ry(e,i.alternate,i),i=i.sibling}function ba(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),ba(i);break;case 1:cn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Wp(i,i.return,a),ba(i);break;case 26:case 27:case 5:cn(i,i.return),ba(i);break;case 22:cn(i,i.return),i.memoizedState===null&&ba(i);break;default:ba(i)}e=e.sibling}}function br(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:br(h,d,a),Yo(4,d);break;case 1:if(br(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(N){Qt(l,l.return,N)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)$p(w[h],T)}catch(N){Qt(l,l.return,N)}}a&&v&64&&Zp(d),Ss(d,d.return);break;case 26:case 27:case 5:br(h,d,a),a&&l===null&&v&4&&Jp(d),Ss(d,d.return);break;case 12:br(h,d,a);break;case 13:br(h,d,a),a&&v&4&&oy(h,d);break;case 22:d.memoizedState===null&&br(h,d,a),Ss(d,d.return);break;default:br(h,d,a)}i=i.sibling}}function Nf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xo(a))}function Mf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&xo(e))}function Rr(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)cy(e,i,a,l),i=i.sibling}function cy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Rr(e,i,a,l),h&2048&&Yo(9,i);break;case 3:Rr(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&xo(e)));break;case 12:if(h&2048){Rr(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Qt(i,i.return,w)}}else Rr(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Rr(e,i,a,l):$o(e,i):d._visibility&4?Rr(e,i,a,l):(d._visibility|=4,Ra(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Nf(i.alternate,i);break;case 24:Rr(e,i,a,l),h&2048&&Mf(i.alternate,i);break;default:Rr(e,i,a,l)}}function Ra(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,w=l,N=v.flags;switch(v.tag){case 0:case 11:case 15:Ra(d,v,T,w,h),Yo(8,v);break;case 23:break;case 22:var j=v.stateNode;v.memoizedState!==null?j._visibility&4?Ra(d,v,T,w,h):$o(d,v):(j._visibility|=4,Ra(d,v,T,w,h)),h&&N&2048&&Nf(v.alternate,v);break;case 24:Ra(d,v,T,w,h),h&&N&2048&&Mf(v.alternate,v);break;default:Ra(d,v,T,w,h)}i=i.sibling}}function $o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:$o(a,l),h&2048&&Nf(l.alternate,l);break;case 24:$o(a,l),h&2048&&Mf(l.alternate,l);break;default:$o(a,l)}i=i.sibling}}var Xo=8192;function Ia(e){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)hy(e),e=e.sibling}function hy(e){switch(e.tag){case 26:Ia(e),e.flags&Xo&&e.memoizedState!==null&&uS(zn,e.memoizedState,e.memoizedProps);break;case 5:Ia(e);break;case 3:case 4:var i=zn;zn=tc(e.stateNode.containerInfo),Ia(e),zn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xo,Xo=16777216,Ia(e),Xo=i):Ia(e));break;default:Ia(e)}}function fy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Zo(e){var i=e.deletions;if(e.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,my(l,e)}fy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dy(e),e=e.sibling}function dy(e){switch(e.tag){case 0:case 11:case 15:Zo(e),e.flags&2048&&wr(9,e,e.return);break;case 3:Zo(e);break;case 12:Zo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Bu(e)):Zo(e);break;default:Zo(e)}}function Bu(e){var i=e.deletions;if(e.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,my(l,e)}fy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:wr(8,i,i.return),Bu(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Bu(i));break;default:Bu(i)}e=e.sibling}}function my(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:wr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else t:for(a=e;Ne!==null;){l=Ne;var h=l.sibling,d=l.return;if(sy(l),l===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}function AA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,i,a,l){return new AA(e,i,a,l)}function Vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ir(e,i){var a=e.alternate;return a===null?(a=On(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gy(e,i){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function qu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Vf(e)&&(v=1);else if(typeof e=="string")v=oS(e,a,$e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return ws(a.children,h,d,i);case y:v=8,h|=24;break;case A:return e=On(12,a,i,h|2),e.elementType=A,e.lanes=d,e;case K:return e=On(13,a,i,h),e.elementType=K,e.lanes=d,e;case X:return e=On(19,a,i,h),e.elementType=X,e.lanes=d,e;case ut:return py(a,h,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case x:v=10;break t;case L:v=9;break t;case $:v=11;break t;case dt:v=14;break t;case tt:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=On(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ws(e,i,a,l){return e=On(7,e,l,i),e.lanes=a,e}function py(e,i,a,l){e=On(22,e,l,i),e.elementType=ut,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if(!(h._pendingVisibility&2)){var v=gr(d,2);v!==null&&(h._pendingVisibility|=2,tn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if(h._pendingVisibility&2){var v=gr(d,2);v!==null&&(h._pendingVisibility&=-3,tn(v,d,2))}}};return e.stateNode=h,e}function kf(e,i,a){return e=On(6,e,null,i),e.lanes=a,e}function Uf(e,i,a){return i=On(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function xi(e){e.flags|=4}function yy(e,i){if(i.type!=="stylesheet"||i.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!e_(i)){if(i=In.current,i!==null&&((Ut&4194176)===Ut?si!==null:(Ut&62914560)!==Ut&&!(Ut&536870912)||i!==si))throw Uo=zh,kg;e.flags|=8192}}function Hu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ir():536870912,e.lanes|=i,Da|=i)}function Wo(e,i){if(!zt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Wt(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function SA(e,i,a){var l=i.pendingProps;switch(Lh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(i),null;case 1:return Wt(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ki(Ae),yi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(No(i)?xi(i):e===null||e.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,xn!==null&&(jf(xn),xn=null))),Wt(i),null;case 26:return a=i.memoizedState,e===null?(xi(i),a!==null?(Wt(i),yy(i,a)):(Wt(i),i.flags&=-16777217)):a?a!==e.memoizedState?(xi(i),Wt(i),yy(i,a)):(Wt(i),i.flags&=-16777217):(e.memoizedProps!==l&&xi(i),Wt(i),i.flags&=-16777217),null;case 27:Ys(i),a=pn.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Wt(i),null}e=$e.current,No(i)?Mg(i):(e=Qy(h,l,a),i.stateNode=e,xi(i))}return Wt(i),null;case 5:if(Ys(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Wt(i),null}if(e=$e.current,No(i))Mg(i);else{switch(h=Ju(pn.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ie]=i,e[_e]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Le(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&xi(i)}}return Wt(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&xi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=pn.current,No(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=Je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ie]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||qy(e.nodeValue,a)),e||ms(i)}else e=Ju(e).createTextNode(l),e[Ie]=i,i.stateNode=e}return Wt(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=No(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ie]=i}else Mo(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Wt(i),h=!1}else xn!==null&&(jf(xn),xn=null),h=!0;if(!h)return i.flags&256?(Oi(i),i):(Oi(i),null)}if(Oi(i),i.flags&128)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Hu(i,i.updateQueue),Wt(i),null;case 4:return yi(),e===null&&td(i.stateNode.containerInfo),Wt(i),null;case 10:return ki(i.type),Wt(i),null;case 19:if(ee(Ee),h=i.memoizedState,h===null)return Wt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Wo(h,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=i.child;e!==null;){if(d=bu(e),d!==null){for(i.flags|=128,Wo(h,!1),e=d.updateQueue,i.updateQueue=e,Hu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)gy(a,e),a=a.sibling;return Ft(Ee,Ee.current&1|2),i.child}e=e.sibling}h.tail!==null&&en()>ju&&(i.flags|=128,l=!0,Wo(h,!1),i.lanes=4194304)}else{if(!l)if(e=bu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Hu(i,e),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!zt)return Wt(i),null}else 2*en()-h.renderingStartTime>ju&&a!==536870912&&(i.flags|=128,l=!0,Wo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=en(),i.sibling=null,e=Ee.current,Ft(Ee,l?e&1|2:e&1),i):(Wt(i),null);case 22:case 23:return Oi(i),qh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?a&536870912&&!(i.flags&128)&&(Wt(i),i.subtreeFlags&6&&(i.flags|=8192)):Wt(i),a=i.updateQueue,a!==null&&Hu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&ee(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(Ae),Wt(i),null;case 25:return null}throw Error(s(156,i.tag))}function wA(e,i){switch(Lh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(Ae),yi(),e=i.flags,e&65536&&!(e&128)?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ys(i),null;case 13:if(Oi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Mo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ee(Ee),null;case 4:return yi(),null;case 10:return ki(i.type),null;case 22:case 23:return Oi(i),qh(),e!==null&&ee(ps),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(Ae),null;case 25:return null;default:return null}}function _y(e,i){switch(Lh(i),i.tag){case 3:ki(Ae),yi();break;case 26:case 27:case 5:Ys(i);break;case 4:yi();break;case 13:Oi(i);break;case 19:ee(Ee);break;case 10:ki(i.type);break;case 22:case 23:Oi(i),qh(),e!==null&&ee(ps);break;case 24:ki(Ae)}}var bA={getCacheForType:function(e){var i=He(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},RA=typeof WeakMap=="function"?WeakMap:Map,Jt=0,Yt=null,Ct=null,Ut=0,$t=0,fn=null,zi=!1,Ca=!1,Pf=!1,Bi=0,re=0,Cr=0,bs=0,Lf=0,Nn=0,Da=0,Jo=null,oi=null,xf=!1,zf=0,ju=1/0,Fu=null,Dr=null,Gu=!1,Rs=null,tl=0,Bf=0,qf=null,el=0,Hf=null;function dn(){if(Jt&2&&Ut!==0)return Ut&-Ut;if(S.T!==null){var e=Ta;return e!==0?e:Xf()}return Zl()}function vy(){Nn===0&&(Nn=!(Ut&536870912)||zt?fo():536870912);var e=In.current;return e!==null&&(e.flags|=32),Nn}function tn(e,i,a){(e===Yt&&$t===2||e.cancelPendingCommit!==null)&&(Oa(e,0),qi(e,Ut,Nn,!1)),ae(e,a),(!(Jt&2)||e!==Yt)&&(e===Yt&&(!(Jt&2)&&(bs|=a),re===4&&qi(e,Ut,Nn,!1)),li(e))}function Ty(e,i,a){if(Jt&6)throw Error(s(327));var l=!a&&(i&60)===0&&(i&e.expiredLanes)===0||nr(e,i),h=l?DA(e,i):Kf(e,i,!0),d=l;do{if(h===0){Ca&&!l&&qi(e,i,0,!1);break}else if(h===6)qi(e,i,0,!zi);else{if(a=e.current.alternate,d&&!IA(a)){h=Kf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=Jo;var w=T.current.memoizedState.isDehydrated;if(w&&(Oa(T,v).flags|=256),v=Kf(T,v,!1),v!==2){if(Pf&&!w){T.errorRecoveryDisabledLanes|=d,bs|=d,h=4;break t}d=oi,oi=h,d!==null&&jf(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Oa(e,0),qi(e,i,0,!0);break}t:{switch(l=e,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){qi(l,i,Nn,!zi);break t}break;case 2:oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=zf+300-en(),10<d)){if(qi(l,i,Nn,!zi),yn(l,0)!==0)break t;l.timeoutHandle=Fy(Ey.bind(null,l,a,oi,Fu,xf,i,Nn,bs,Da,zi,2,-0,0),d);break t}Ey(l,a,oi,Fu,xf,i,Nn,bs,Da,zi,0,-0,0)}}break}while(!0);li(e)}function jf(e){oi===null?oi=e:oi.push.apply(oi,e)}function Ey(e,i,a,l,h,d,v,T,w,N,j,Y,B){var H=i.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:lS},hy(i),i=cS(),i!==null)){e.cancelPendingCommit=i(Cy.bind(null,e,a,l,h,v,T,w,1,Y,B)),qi(e,d,v,!N);return}Cy(e,a,l,h,v,T,w,j,Y,B)}function IA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qi(e,i,a,l){i&=~Lf,i&=~bs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Xe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&rr(e,a,i)}function Ku(){return Jt&6?!0:(nl(0),!1)}function Ff(){if(Ct!==null){if($t===0)var e=Ct.return;else e=Ct,Vi=Es=null,$h(e),_a=null,Po=0,e=Ct;for(;e!==null;)_y(e.alternate,e),e=e.return;Ct=null}}function Oa(e,i){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,KA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ff(),Yt=e,Ct=a=Ir(e.current,null),Ut=i,$t=0,fn=null,zi=!1,Ca=nr(e,i),Pf=!1,Da=Nn=Lf=bs=Cr=re=0,oi=Jo=null,xf=!1,i&8&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Xe(l),d=1<<h;i|=e[h],l&=~d}return Bi=i,pu(),a}function Ay(e,i){Rt=null,S.H=ai,i===ko?(i=Lg(),$t=3):i===kg?(i=Lg(),$t=4):$t=i===Up?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fn=i,Ct===null&&(re=1,Pu(e,wn(i,e.current)))}function Sy(){var e=S.H;return S.H=ai,e===null?ai:e}function wy(){var e=S.A;return S.A=bA,e}function Gf(){re=4,zi||(Ut&4194176)!==Ut&&In.current!==null||(Ca=!0),!(Cr&134217727)&&!(bs&134217727)||Yt===null||qi(Yt,Ut,Nn,!1)}function Kf(e,i,a){var l=Jt;Jt|=2;var h=Sy(),d=wy();(Yt!==e||Ut!==i)&&(Fu=null,Oa(e,i)),i=!1;var v=re;t:do try{if($t!==0&&Ct!==null){var T=Ct,w=fn;switch($t){case 8:Ff(),v=6;break t;case 3:case 2:case 6:In.current===null&&(i=!0);var N=$t;if($t=0,fn=null,Na(e,T,w,N),a&&Ca){v=0;break t}break;default:N=$t,$t=0,fn=null,Na(e,T,w,N)}}CA(),v=re;break}catch(j){Ay(e,j)}while(!0);return i&&e.shellSuspendCounter++,Vi=Es=null,Jt=l,S.H=h,S.A=d,Ct===null&&(Yt=null,Ut=0,pu()),v}function CA(){for(;Ct!==null;)by(Ct)}function DA(e,i){var a=Jt;Jt|=2;var l=Sy(),h=wy();Yt!==e||Ut!==i?(Fu=null,ju=en()+500,Oa(e,i)):Ca=nr(e,i);t:do try{if($t!==0&&Ct!==null){i=Ct;var d=fn;e:switch($t){case 1:$t=0,fn=null,Na(e,i,d,1);break;case 2:if(Ug(d)){$t=0,fn=null,Ry(i);break}i=function(){$t===2&&Yt===e&&($t=7),li(e)},d.then(i,i);break t;case 3:$t=7;break t;case 4:$t=5;break t;case 7:Ug(d)?($t=0,fn=null,Ry(i)):($t=0,fn=null,Na(e,i,d,7));break;case 5:var v=null;switch(Ct.tag){case 26:v=Ct.memoizedState;case 5:case 27:var T=Ct;if(!v||e_(v)){$t=0,fn=null;var w=T.sibling;if(w!==null)Ct=w;else{var N=T.return;N!==null?(Ct=N,Qu(N)):Ct=null}break e}}$t=0,fn=null,Na(e,i,d,5);break;case 6:$t=0,fn=null,Na(e,i,d,6);break;case 8:Ff(),re=6;break t;default:throw Error(s(462))}}OA();break}catch(j){Ay(e,j)}while(!0);return Vi=Es=null,S.H=l,S.A=h,Jt=a,Ct!==null?0:(Yt=null,Ut=0,pu(),re)}function OA(){for(;Ct!==null&&!vh();)by(Ct)}function by(e){var i=Qp(e.alternate,e,Bi);e.memoizedProps=e.pendingProps,i===null?Qu(e):Ct=i}function Ry(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=qp(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=qp(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:$h(i);default:_y(a,i),i=Ct=gy(i,Bi),i=Qp(a,i,Bi)}e.memoizedProps=e.pendingProps,i===null?Qu(e):Ct=i}function Na(e,i,a,l){Vi=Es=null,$h(i),_a=null,Po=0;var h=i.return;try{if(_A(e,h,i,a,Ut)){re=1,Pu(e,wn(a,e.current)),Ct=null;return}}catch(d){if(h!==null)throw Ct=h,d;re=1,Pu(e,wn(a,e.current)),Ct=null;return}i.flags&32768?(zt||l===1?e=!0:Ca||Ut&536870912?e=!1:(zi=e=!0,(l===2||l===3||l===6)&&(l=In.current,l!==null&&l.tag===13&&(l.flags|=16384))),Iy(i,e)):Qu(i)}function Qu(e){var i=e;do{if(i.flags&32768){Iy(i,zi);return}e=i.return;var a=SA(i.alternate,i,Bi);if(a!==null){Ct=a;return}if(i=i.sibling,i!==null){Ct=i;return}Ct=i=e}while(i!==null);re===0&&(re=5)}function Iy(e,i){do{var a=wA(e.alternate,e);if(a!==null){a.flags&=32767,Ct=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ct=e;return}Ct=e=a}while(e!==null);re=6,Ct=null}function Cy(e,i,a,l,h,d,v,T,w,N){var j=S.T,Y=nt.p;try{nt.p=2,S.T=null,NA(e,i,a,l,Y,h,d,v,T,w,N)}finally{S.T=j,nt.p=Y}}function NA(e,i,a,l,h,d,v,T){do Ma();while(Rs!==null);if(Jt&6)throw Error(s(327));var w=e.finishedWork;if(l=e.finishedLanes,w===null)return null;if(e.finishedWork=null,e.finishedLanes=0,w===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var N=w.lanes|w.childLanes;if(N|=kh,$l(e,l,N,d,v,T),e===Yt&&(Ct=Yt=null,Ut=0),!(w.subtreeFlags&10256)&&!(w.flags&10256)||Gu||(Gu=!0,Bf=N,qf=a,UA(_i,function(){return Ma(),null})),a=(w.flags&15990)!==0,w.subtreeFlags&15990||a?(a=S.T,S.T=null,d=nt.p,nt.p=2,v=Jt,Jt|=4,TA(e,w),ly(w,e),eA(rd,e.containerInfo),sc=!!id,rd=id=null,e.current=w,ry(e,w.alternate,w),lo(),Jt=v,nt.p=d,S.T=a):e.current=w,Gu?(Gu=!1,Rs=e,tl=l):Dy(e,N),N=e.pendingLanes,N===0&&(Dr=null),co(w.stateNode),li(e),i!==null)for(h=e.onRecoverableError,w=0;w<i.length;w++)N=i[w],h(N.value,{componentStack:N.stack});return tl&3&&Ma(),N=e.pendingLanes,l&4194218&&N&42?e===Hf?el++:(el=0,Hf=e):el=0,nl(0),null}function Dy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,xo(i)))}function Ma(){if(Rs!==null){var e=Rs,i=Bf;Bf=0;var a=Xl(tl),l=S.T,h=nt.p;try{if(nt.p=32>a?32:a,S.T=null,Rs===null)var d=!1;else{a=qf,qf=null;var v=Rs,T=tl;if(Rs=null,tl=0,Jt&6)throw Error(s(331));var w=Jt;if(Jt|=4,dy(v.current),cy(v,v.current,T,a),Jt=w,nl(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(tr,v)}catch{}d=!0}return d}finally{nt.p=h,S.T=l,Dy(e,i)}}return!1}function Oy(e,i,a){i=wn(a,i),i=cf(e.stateNode,i,2),e=Sr(e,i,2),e!==null&&(ae(e,2),li(e))}function Qt(e,i,a){if(e.tag===3)Oy(e,e,a);else for(;i!==null;){if(i.tag===3){Oy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){e=wn(a,e),a=Vp(2),l=Sr(i,a,2),l!==null&&(kp(a,l,i,e),ae(l,2),li(l));break}}i=i.return}}function Qf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new RA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Pf=!0,h.add(a),e=MA.bind(null,e,i,a),i.then(e,e))}function MA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(Ut&a)===a&&(re===4||re===3&&(Ut&62914560)===Ut&&300>en()-zf?!(Jt&2)&&Oa(e,0):Lf|=a,Da===Ut&&(Da=0)),li(e)}function Ny(e,i){i===0&&(i=ir()),e=gr(e,i),e!==null&&(ae(e,i),li(e))}function VA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ny(e,a)}function kA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Ny(e,a)}function UA(e,i){return Xr(e,i)}var Yu=null,Va=null,Yf=!1,$u=!1,$f=!1,Is=0;function li(e){e!==Va&&e.next===null&&(Va===null?Yu=Va=e:Va=Va.next=e),$u=!0,Yf||(Yf=!0,LA(PA))}function nl(e,i){if(!$f&&$u){$f=!0;do for(var a=!1,l=Yu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Xe(42|e)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,ky(l,d))}else d=Ut,d=yn(l,l===Yt?d:0),!(d&3)||nr(l,d)||(a=!0,ky(l,d));l=l.next}while(a);$f=!1}}function PA(){$u=Yf=!1;var e=0;Is!==0&&(GA()&&(e=Is),Is=0);for(var i=en(),a=null,l=Yu;l!==null;){var h=l.next,d=My(l,i);d===0?(l.next=null,a===null?Yu=h:a.next=h,h===null&&(Va=a)):(a=l,(e!==0||d&3)&&($u=!0)),l=h}nl(e)}function My(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Xe(d),T=1<<v,w=h[v];w===-1?(!(T&a)||T&l)&&(h[v]=Zs(T,i)):w<=i&&(e.expiredLanes|=T),d&=~T}if(i=Yt,a=Ut,a=yn(e,e===i?a:0),l=e.callbackNode,a===0||e===i&&$t===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xs(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||nr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Xs(l),Xl(a)){case 2:case 8:a=Re;break;case 32:a=_i;break;case 268435456:a=uo;break;default:a=_i}return l=Vy.bind(null,e),a=Xr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Xs(l),e.callbackPriority=2,e.callbackNode=null,2}function Vy(e,i){var a=e.callbackNode;if(Ma()&&e.callbackNode!==a)return null;var l=Ut;return l=yn(e,e===Yt?l:0),l===0?null:(Ty(e,l,i),My(e,en()),e.callbackNode!=null&&e.callbackNode===a?Vy.bind(null,e):null)}function ky(e,i){if(Ma())return null;Ty(e,i,!0)}function LA(e){QA(function(){Jt&6?Xr(ye,e):e()})}function Xf(){return Is===0&&(Is=fo()),Is}function Uy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function Py(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function xA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Uy((h[_e]||null).action),v=l.submitter;v&&(i=(i=v[_e]||null)?Uy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ra("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Is!==0){var w=v?Py(h,v):new FormData(h);sf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?Py(h,v):new FormData(h),sf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var Zf=0;Zf<Cg.length;Zf++){var Wf=Cg[Zf],zA=Wf.toLowerCase(),BA=Wf[0].toUpperCase()+Wf.slice(1);Ln(zA,"on"+BA)}Ln(Sg,"onAnimationEnd"),Ln(wg,"onAnimationIteration"),Ln(bg,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(iA,"onTransitionRun"),Ln(rA,"onTransitionStart"),Ln(sA,"onTransitionCancel"),Ln(Rg,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Ly(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,N=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=N;try{d(h)}catch(j){Uu(j)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,N=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=N;try{d(h)}catch(j){Uu(j)}h.currentTarget=null,d=w}}}}function Nt(e,i){var a=i[Wr];a===void 0&&(a=i[Wr]=new Set);var l=e+"__bubble";a.has(l)||(xy(i,e,2,!1),a.add(l))}function Jf(e,i,a){var l=0;i&&(l|=4),xy(a,e,l,i)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[Xu]){e[Xu]=!0,go.forEach(function(a){a!=="selectionchange"&&(qA.has(a)||Jf(a,!1,e),Jf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Xu]||(i[Xu]=!0,Jf("selectionchange",!1,i))}}function xy(e,i,a,l){switch(o_(i)){case 2:var h=dS;break;case 8:h=mS;break;default:h=dd}a=h.bind(null,i,a,e),h=void 0,!En||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function ed(e,i,a,l,h){var d=l;if(!(i&1)&&!(i&2)&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&(w=v.stateNode.containerInfo,w===h||w.nodeType===8&&w.parentNode===h))return;v=v.return}for(;T!==null;){if(v=Pn(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}T=T.parentNode}}l=l.return}eu(function(){var N=d,j=ia(a),Y=[];t:{var B=Ig.get(e);if(B!==void 0){var H=ra,at=e;switch(e){case"keypress":if(Jn(a)===0)break t;case"keydown":case"keyup":H=ca;break;case"focusin":at="focus",H=oa;break;case"focusout":at="blur",H=oa;break;case"beforeblur":case"afterblur":H=oa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=An;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=uu;break;case Sg:case wg:case bg:H=la;break;case Rg:H=hu;break;case"scroll":case"scrollend":H=nu;break;case"wheel":H=ha;break;case"copy":case"cut":case"paste":H=ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Io;break;case"toggle":case"beforetoggle":H=du}var vt=(i&4)!==0,se=!vt&&(e==="scroll"||e==="scrollend"),k=vt?B!==null?B+"Capture":null:B;vt=[];for(var O=N,z;O!==null;){var F=O;if(z=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||z===null||k===null||(F=is(O,k),F!=null&&vt.push(rl(O,F,z))),se)break;O=O.return}0<vt.length&&(B=new H(B,at,null,a,j),Y.push({event:B,listeners:vt}))}}if(!(i&7)){t:{if(B=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",B&&a!==Tn&&(at=a.relatedTarget||a.fromElement)&&(Pn(at)||at[vi]))break t;if((H||B)&&(B=j.window===j?j:(B=j.ownerDocument)?B.defaultView||B.parentWindow:window,H?(at=a.relatedTarget||a.toElement,H=N,at=at?Pn(at):null,at!==null&&(se=ct(at),vt=at.tag,at!==se||vt!==5&&vt!==27&&vt!==6)&&(at=null)):(H=null,at=N),H!==at)){if(vt=An,F="onMouseLeave",k="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(vt=Io,F="onPointerLeave",k="onPointerEnter",O="pointer"),se=H==null?B:lr(H),z=at==null?B:lr(at),B=new vt(F,O+"leave",H,a,j),B.target=se,B.relatedTarget=z,F=null,Pn(j)===N&&(vt=new vt(k,O+"enter",at,a,j),vt.target=z,vt.relatedTarget=se,F=vt),se=F,H&&at)e:{for(vt=H,k=at,O=0,z=vt;z;z=ka(z))O++;for(z=0,F=k;F;F=ka(F))z++;for(;0<O-z;)vt=ka(vt),O--;for(;0<z-O;)k=ka(k),z--;for(;O--;){if(vt===k||k!==null&&vt===k.alternate)break e;vt=ka(vt),k=ka(k)}vt=null}else vt=null;H!==null&&zy(Y,B,H,vt,!1),at!==null&&se!==null&&zy(Y,se,at,vt,!0)}}t:{if(B=N?lr(N):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var rt=fg;else if(Te(B))if(dg)rt=J0;else{rt=Z0;var It=X0}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?N&&To(N.elementType)&&(rt=fg):rt=W0;if(rt&&(rt=rt(e,N))){Ii(Y,rt,a,j);break t}It&&It(e,B,N),e==="focusout"&&N&&B.type==="number"&&N.memoizedProps.value!=null&&na(B,"number",B.value)}switch(It=N?lr(N):window,e){case"focusin":(Te(It)||It.contentEditable==="true")&&(fa=It,Nh=N,Oo=null);break;case"focusout":Oo=Nh=fa=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,Eg(Y,a,j);break;case"selectionchange":if(nA)break;case"keydown":case"keyup":Eg(Y,a,j)}var lt;if(ni)t:{switch(e){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else Vt?q(e,a)&&(ft="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(_&&a.locale!=="ko"&&(Vt||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Vt&&(lt=Ao()):(Wn=j,mr="value"in Wn?Wn.value:Wn.textContent,Vt=!0)),It=Zu(N,ft),0<It.length&&(ft=new bo(ft,e,null,a,j),Y.push({event:ft,listeners:It}),lt?ft.data=lt:(lt=W(a),lt!==null&&(ft.data=lt)))),(lt=m?ve(e,a):kt(e,a))&&(ft=Zu(N,"onBeforeInput"),0<ft.length&&(It=new bo("onBeforeInput","beforeinput",null,a,j),Y.push({event:It,listeners:ft}),It.data=lt)),xA(Y,e,N,a,j)}Ly(Y,i)})}function rl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Zu(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=is(e,a),h!=null&&l.unshift(rl(e,h,d)),h=is(e,i),h!=null&&l.push(rl(e,h,d))),e=e.return}return l}function ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,N=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||N===null||(w=N,h?(N=is(a,d),N!=null&&v.unshift(rl(a,N,w))):h||(N=is(a,d),N!=null&&v.push(rl(a,N,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var HA=/\r\n?/g,jA=/\u0000|\uFFFD/g;function By(e){return(typeof e=="string"?e:""+e).replace(HA,`
`).replace(jA,"")}function qy(e,i){return i=By(i),By(e)===i}function Wu(){}function Kt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(e,""+l);break;case"className":hr(e,"class",l);break;case"tabIndex":hr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":hr(e,a,l);break;case"style":tu(e,l,d);break;case"data":if(i!=="object"){hr(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Kt(e,i,"name",h.name,h,null),Kt(e,i,"formEncType",h.formEncType,h,null),Kt(e,i,"formMethod",h.formMethod,h,null),Kt(e,i,"formTarget",h.formTarget,h,null)):(Kt(e,i,"encType",h.encType,h,null),Kt(e,i,"method",h.method,h,null),Kt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Wu);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),cr(e,"popover",l);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":cr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,cr(e,a,l))}}function nd(e,i,a,l,h,d){switch(a){case"style":tu(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?vn(e,l):(typeof l=="number"||typeof l=="bigint")&&vn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Wu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ta.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[_e]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):cr(e,a,l)}}}function Le(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Kt(e,i,d,v,a,null)}}h&&Kt(e,i,"srcSet",a.srcSet,a,null),l&&Kt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var T=d=v=h=null,w=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var j=a[l];if(j!=null)switch(l){case"name":h=j;break;case"type":v=j;break;case"checked":w=j;break;case"defaultChecked":N=j;break;case"value":d=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Kt(e,i,l,j,a,null)}}es(e,d,T,w,N,v,h,!1),ts(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Kt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?xt(e,!!l,i,!1):a!=null&&xt(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Kt(e,i,v,T,a,null)}dr(e,l,h,d),ts(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(e,i,w,l,a,null)}return;case"dialog":Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<il.length;l++)Nt(il[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Kt(e,i,N,l,a,null)}return;default:if(To(i)){for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!==void 0&&nd(e,i,j,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Kt(e,i,T,l,a,null))}function FA(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,N=null,j=null;for(H in a){var Y=a[H];if(a.hasOwnProperty(H)&&Y!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":w=Y;default:l.hasOwnProperty(H)||Kt(e,i,H,null,l,Y)}}for(var B in l){var H=l[B];if(Y=a[B],l.hasOwnProperty(B)&&(H!=null||Y!=null))switch(B){case"type":d=H;break;case"name":h=H;break;case"checked":N=H;break;case"defaultChecked":j=H;break;case"value":v=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==Y&&Kt(e,i,B,H,l,Y)}}fr(e,v,T,w,N,j,d,h);return;case"select":H=v=T=B=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":H=w;default:l.hasOwnProperty(d)||Kt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&Kt(e,i,h,d,l,w)}i=T,a=v,l=H,B!=null?xt(e,!!a,B,!1):!!l!=!!a&&(i!=null?xt(e,!!a,i,!0):xt(e,!!a,a?[]:"",!1));return;case"textarea":H=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Kt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":B=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Kt(e,i,v,h,l,d)}ns(e,B,H);return;case"option":for(var at in a)if(B=a[at],a.hasOwnProperty(at)&&B!=null&&!l.hasOwnProperty(at))switch(at){case"selected":e.selected=!1;break;default:Kt(e,i,at,null,l,B)}for(w in l)if(B=l[w],H=a[w],l.hasOwnProperty(w)&&B!==H&&(B!=null||H!=null))switch(w){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Kt(e,i,w,B,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var vt in a)B=a[vt],a.hasOwnProperty(vt)&&B!=null&&!l.hasOwnProperty(vt)&&Kt(e,i,vt,null,l,B);for(N in l)if(B=l[N],H=a[N],l.hasOwnProperty(N)&&B!==H&&(B!=null||H!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Kt(e,i,N,B,l,H)}return;default:if(To(i)){for(var se in a)B=a[se],a.hasOwnProperty(se)&&B!==void 0&&!l.hasOwnProperty(se)&&nd(e,i,se,void 0,l,B);for(j in l)B=l[j],H=a[j],!l.hasOwnProperty(j)||B===H||B===void 0&&H===void 0||nd(e,i,j,B,l,H);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!l.hasOwnProperty(k)&&Kt(e,i,k,null,l,B);for(Y in l)B=l[Y],H=a[Y],!l.hasOwnProperty(Y)||B===H||B==null&&H==null||Kt(e,i,Y,B,l,H)}var id=null,rd=null;function Ju(e){return e.nodeType===9?e:e.ownerDocument}function Hy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function sd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ad=null;function GA(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var Fy=typeof setTimeout=="function"?setTimeout:void 0,KA=typeof clearTimeout=="function"?clearTimeout:void 0,Gy=typeof Promise=="function"?Promise:void 0,QA=typeof queueMicrotask=="function"?queueMicrotask:typeof Gy<"u"?function(e){return Gy.resolve(null).then(e).catch(YA)}:Fy;function YA(e){setTimeout(function(){throw e})}function od(e,i){var a=i,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){e.removeChild(h),fl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);fl(i)}function ld(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $A(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[or])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Bn(e.nextSibling),e===null)break}return null}function XA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bn(e.nextSibling),e===null))return null;return e}function Bn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function Ky(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function Qy(e,i,a){switch(i=Ju(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var Mn=new Map,Yy=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Hi=nt.d;nt.d={f:ZA,r:WA,D:JA,C:tS,L:eS,m:nS,X:rS,S:iS,M:sS};function ZA(){var e=Hi.f(),i=Ku();return e||i}function WA(e){var i=Ti(e);i!==null&&i.tag===5&&i.type==="form"?Ep(i):Hi.r(e)}var Ua=typeof document>"u"?null:document;function $y(e,i,a){var l=Ua;if(l&&typeof i=="string"&&i){var h=ne(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Yy.has(h)||(Yy.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Le(i,"link",e),Zt(i),l.head.appendChild(i)))}}function JA(e){Hi.D(e),$y("dns-prefetch",e,null)}function tS(e,i){Hi.C(e,i),$y("preconnect",e,i)}function eS(e,i,a){Hi.L(e,i,a);var l=Ua;if(l&&e&&i){var h='link[rel="preload"][as="'+ne(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ne(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ne(a.imageSizes)+'"]')):h+='[href="'+ne(e)+'"]';var d=h;switch(i){case"style":d=Pa(e);break;case"script":d=La(e)}Mn.has(d)||(e=I({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Mn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(sl(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),Le(i,"link",e),Zt(i),l.head.appendChild(i)))}}function nS(e,i){Hi.m(e,i);var a=Ua;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ne(l)+'"][href="'+ne(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=La(e)}if(!Mn.has(d)&&(e=I({rel:"modulepreload",href:e},i),Mn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(d)))return}l=a.createElement("link"),Le(l,"link",e),Zt(l),a.head.appendChild(l)}}}function iS(e,i,a){Hi.S(e,i,a);var l=Ua;if(l&&e){var h=ur(l).hoistableStyles,d=Pa(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(sl(d)))T.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Mn.get(d))&&ud(e,a);var w=v=l.createElement("link");Zt(w),Le(w,"link",e),w._p=new Promise(function(N,j){w.onload=N,w.onerror=j}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ec(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function rS(e,i){Hi.X(e,i);var a=Ua;if(a&&e){var l=ur(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=I({src:e,async:!0},i),(i=Mn.get(h))&&cd(e,i),d=a.createElement("script"),Zt(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function sS(e,i){Hi.M(e,i);var a=Ua;if(a&&e){var l=ur(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=I({src:e,async:!0,type:"module"},i),(i=Mn.get(h))&&cd(e,i),d=a.createElement("script"),Zt(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Xy(e,i,a,l){var h=(h=pn.current)?tc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Pa(a.href),a=ur(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pa(a.href);var d=ur(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(sl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(e,a),d||aS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=La(a),a=ur(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pa(e){return'href="'+ne(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function Zy(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Le(i,"link",a),Zt(i),e.head.appendChild(i))}function La(e){return'[src="'+ne(e)+'"]'}function al(e){return"script[async]"+e}function Wy(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ne(a.href)+'"]');if(l)return i.instance=l,Zt(l),l;var h=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Zt(l),Le(l,"style",h),ec(l,a.precedence,e),i.instance=l;case"stylesheet":h=Pa(a.href);var d=e.querySelector(sl(h));if(d)return i.state.loading|=4,i.instance=d,Zt(d),d;l=Zy(a),(h=Mn.get(h))&&ud(l,h),d=(e.ownerDocument||e).createElement("link"),Zt(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Le(d,"link",l),i.state.loading|=4,ec(d,a.precedence,e),i.instance=d;case"script":return d=La(a.src),(h=e.querySelector(al(d)))?(i.instance=h,Zt(h),h):(l=a,(h=Mn.get(d))&&(l=I({},a),cd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Zt(h),Le(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(l=i.instance,i.state.loading|=4,ec(l,a.precedence,e));return i.instance}function ec(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function ud(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var nc=null;function Jy(e,i,a){if(nc===null){var l=new Map,h=nc=new Map;h.set(a,l)}else h=nc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[or]||d[Ie]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function t_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function oS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var ol=null;function lS(){}function uS(e,i,a){if(ol===null)throw Error(s(475));var l=ol;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var h=Pa(a.href),d=e.querySelector(sl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ic.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,Zt(d);return}d=e.ownerDocument||e,a=Zy(a),(h=Mn.get(h))&&ud(a,h),d=d.createElement("link"),Zt(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Le(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&!(i.state.loading&3)&&(l.count++,i=ic.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function cS(){if(ol===null)throw Error(s(475));var e=ol;return e.stylesheets&&e.count===0&&hd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&hd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ic(){if(this.count--,this.count===0){if(this.stylesheets)hd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function hd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,i.forEach(hS,e),rc=null,ic.call(e))}function hS(e,i){if(!(i.state.loading&4)){var a=rc.get(e);if(a)var l=a.get(null);else{a=new Map,rc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=ic.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ll={$$typeof:x,Provider:null,Consumer:null,_currentValue:bt,_currentValue2:bt,_threadCount:0};function fS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ws(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.hiddenUpdates=Ws(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function n_(e,i,a,l,h,d,v,T,w,N,j,Y){return e=new fS(e,i,a,v,T,w,N,Y),i=1,d===!0&&(i|=24),d=On(3,null,null,i),e.current=d,d.stateNode=e,i=Hh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Sf(d),e}function i_(e){return e?(e=ga,e):ga}function r_(e,i,a,l,h,d){h=i_(h),l.context===null?l.context=h:l.pendingContext=h,l=Ar(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Sr(e,l,i),a!==null&&(tn(a,e,i),Go(a,e,i))}function s_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function fd(e,i){s_(e,i),(e=e.alternate)&&s_(e,i)}function a_(e){if(e.tag===13){var i=gr(e,67108864);i!==null&&tn(i,e,67108864),fd(e,67108864)}}var sc=!0;function dS(e,i,a,l){var h=S.T;S.T=null;var d=nt.p;try{nt.p=2,dd(e,i,a,l)}finally{nt.p=d,S.T=h}}function mS(e,i,a,l){var h=S.T;S.T=null;var d=nt.p;try{nt.p=8,dd(e,i,a,l)}finally{nt.p=d,S.T=h}}function dd(e,i,a,l){if(sc){var h=md(l);if(h===null)ed(e,i,l,ac,a),l_(e,l);else if(pS(h,e,i,a,l))l.stopPropagation();else if(l_(e,l),i&4&&-1<gS.indexOf(e)){for(;h!==null;){var d=Ti(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-Xe(v);T.entanglements[1]|=w,v&=~w}li(d),!(Jt&6)&&(ju=en()+500,nl(0))}}break;case 13:T=gr(d,2),T!==null&&tn(T,d,2),Ku(),fd(d,2)}if(d=md(l),d===null&&ed(e,i,l,ac,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else ed(e,i,l,null,a)}}function md(e){return e=ia(e),gd(e)}var ac=null;function gd(e){if(ac=null,e=Pn(e),e!==null){var i=ct(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=qt(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ac=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gl()){case ye:return 2;case Re:return 8;case _i:case Kl:return 32;case uo:return 268435456;default:return 32}default:return 32}}var pd=!1,Or=null,Nr=null,Mr=null,ul=new Map,cl=new Map,Vr=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,i){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function hl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Ti(i),i!==null&&a_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function pS(e,i,a,l,h){switch(i){case"focusin":return Or=hl(Or,e,i,a,l,h),!0;case"dragenter":return Nr=hl(Nr,e,i,a,l,h),!0;case"mouseover":return Mr=hl(Mr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ul.set(d,hl(ul.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,cl.set(d,hl(cl.get(d)||null,e,i,a,l,h)),!0}return!1}function u_(e){var i=Pn(e.target);if(i!==null){var a=ct(i);if(a!==null){if(i=a.tag,i===13){if(i=qt(a),i!==null){e.blockedOn=i,ar(e.priority,function(){if(a.tag===13){var l=dn(),h=gr(a,l);h!==null&&tn(h,a,l),fd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=md(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Tn=l,a.target.dispatchEvent(l),Tn=null}else return i=Ti(a),i!==null&&a_(i),e.blockedOn=a,!1;i.shift()}return!0}function c_(e,i,a){oc(e)&&a.delete(i)}function yS(){pd=!1,Or!==null&&oc(Or)&&(Or=null),Nr!==null&&oc(Nr)&&(Nr=null),Mr!==null&&oc(Mr)&&(Mr=null),ul.forEach(c_),cl.forEach(c_)}function lc(e,i){e.blockedOn===i&&(e.blockedOn=null,pd||(pd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yS)))}var uc=null;function h_(e){uc!==e&&(uc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(gd(l||a)===null)continue;break}var d=Ti(a);d!==null&&(e.splice(i,3),i-=3,sf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function fl(e){function i(w){return lc(w,e)}Or!==null&&lc(Or,e),Nr!==null&&lc(Nr,e),Mr!==null&&lc(Mr,e),ul.forEach(i),cl.forEach(i);for(var a=0;a<Vr.length;a++){var l=Vr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Vr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[_e]||null;if(typeof d=="function")v||h_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[_e]||null)T=v.formAction;else if(gd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),h_(a)}}}function yd(e){this._internalRoot=e}cc.prototype.render=yd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=dn();r_(a,l,e,i,null,null)},cc.prototype.unmount=yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&Ma(),r_(e.current,2,null,e,null,null),Ku(),i[vi]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Zl();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Vr.length&&i!==0&&i<Vr[a].priority;a++);Vr.splice(a,0,e),a===0&&u_(e)}};var f_=t.version;if(f_!=="19.0.0")throw Error(s(527,f_,"19.0.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Z(i),e=e!==null?ot(e):null,e=e===null?null:e.stateNode,e};var _S={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Pn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{tr=hc.inject(_S),qe=hc}catch{}}return dl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Dp,d=Op,v=Np,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=n_(e,1,!1,null,null,a,l,h,d,v,T,null),e[vi]=i.current,td(e.nodeType===8?e.parentNode:e),new yd(i)},dl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Dp,v=Op,T=Np,w=null,N=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(N=a.formState)),i=n_(e,1,!0,i,a??null,l,h,d,v,T,w,N),i.context=i_(null),a=i.current,l=dn(),h=Ar(l),h.callback=null,Sr(a,h,l),i.current.lanes=l,ae(i,l),li(i),e[vi]=i.current,td(e),new cc(i)},dl.version="19.0.0",dl}var T_;function RS(){if(T_)return vd.exports;T_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vd.exports=bS(),vd.exports}var IS=RS(),E_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},CS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return t.join("")},oT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,A=c>>2,C=(c&3)<<4|g>>4;let L=(g&15)<<2|y>>6,x=y&63;p||(x=64,f||(L=64)),s.push(n[A],n[C],n[L],n[x])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(aT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):CS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const C=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||g==null||y==null||C==null)throw new DS;const L=c<<2|g>>4;if(s.push(L),y!==64){const x=g<<4&240|y>>2;if(s.push(x),C!==64){const $=y<<6&192|C;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class DS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OS=function(r){const t=aT(r);return oT.encodeByteArray(t,!0)},Oc=function(r){return OS(r).replace(/\./g,"")},lT=function(r){try{return oT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=()=>NS().__FIREBASE_DEFAULTS__,VS=()=>{if(typeof process>"u"||typeof E_>"u")return;const r=E_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&lT(r[1]);return t&&JSON.parse(t)},Zc=()=>{try{return MS()||VS()||kS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},uT=r=>{var t,n;return(n=(t=Zc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},US=r=>{const t=uT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},cT=()=>{var r;return(r=Zc())===null||r===void 0?void 0:r.config},hT=r=>{var t;return(t=Zc())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Oc(JSON.stringify(n)),Oc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function zS(){var r;const t=(r=Zc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function qS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const r=Qe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jS(){return!zS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dT(){try{return typeof indexedDB=="object"}catch{return!1}}function mT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function FS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="FirebaseError";class Kn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=GS,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,c=this.errors[t],f=c?KS(c,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Kn(o,g,s)}}function KS(r,t){return r.replace(QS,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const QS=/\{\$([^}]+)}/g;function YS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Rl(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=t[o];if(A_(c)&&A_(f)){if(!Rl(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function A_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function $S(r,t){const n=new XS(r,t);return n.subscribe.bind(n)}class XS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ZS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Sd),o.error===void 0&&(o.error=Sd),o.complete===void 0&&(o.complete=Sd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Sd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=1e3,JS=2,tw=4*60*60*1e3,ew=.5;function S_(r,t=WS,n=JS){const s=t*Math.pow(n,r),o=Math.round(ew*s*(Math.random()-.5)*2);return Math.min(tw,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new PS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rw(t))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Cs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cs){return this.instances.has(t)}getOptions(t=Cs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(o,c);const f=this.instances.get(o);return f&&t(f,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iw(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Cs){return this.component?this.component.multipleInstances?t:Cs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iw(r){return r===Cs?void 0:r}function rw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new nw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Dt||(Dt={}));const aw={debug:Dt.DEBUG,verbose:Dt.VERBOSE,info:Dt.INFO,warn:Dt.WARN,error:Dt.ERROR,silent:Dt.SILENT},ow=Dt.INFO,lw={[Dt.DEBUG]:"log",[Dt.VERBOSE]:"log",[Dt.INFO]:"info",[Dt.WARN]:"warn",[Dt.ERROR]:"error"},uw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=lw[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wc{constructor(t){this.name=t,this._logLevel=ow,this._logHandler=uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Dt.DEBUG,...t),this._logHandler(this,Dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Dt.VERBOSE,...t),this._logHandler(this,Dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Dt.INFO,...t),this._logHandler(this,Dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Dt.WARN,...t),this._logHandler(this,Dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Dt.ERROR,...t),this._logHandler(this,Dt.ERROR,...t)}}const cw=(r,t)=>t.some(n=>r instanceof n);let w_,b_;function hw(){return w_||(w_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fw(){return b_||(b_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,zd=new WeakMap,pT=new WeakMap,wd=new WeakMap,hm=new WeakMap;function dw(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Br(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&gT.set(n,r)}).catch(()=>{}),hm.set(t,r),t}function mw(r){if(zd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});zd.set(r,t)}let Bd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return zd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||pT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function gw(r){Bd=r(Bd)}function pw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(bd(this),t,...n);return pT.set(s,t.sort?t.sort():[t]),Br(s)}:fw().includes(r)?function(...t){return r.apply(bd(this),t),Br(gT.get(this))}:function(...t){return Br(r.apply(bd(this),t))}}function yw(r){return typeof r=="function"?pw(r):(r instanceof IDBTransaction&&mw(r),cw(r,hw())?new Proxy(r,Bd):r)}function Br(r){if(r instanceof IDBRequest)return dw(r);if(wd.has(r))return wd.get(r);const t=yw(r);return t!==r&&(wd.set(r,t),hm.set(t,r)),t}const bd=r=>hm.get(r);function yT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,t),g=Br(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Br(f.result),p.oldVersion,p.newVersion,Br(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const _w=["get","getKey","getAll","getAllKeys","count"],vw=["put","add","delete","clear"],Rd=new Map;function R_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Rd.get(t))return Rd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=vw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||_w.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return Rd.set(t,c),c}gw(r=>({...r,get:(t,n,s)=>R_(t,n)||r.get(t,n,s),has:(t,n)=>!!R_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ew(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ew(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qd="@firebase/app",I_="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Wc("@firebase/app"),Aw="@firebase/app-compat",Sw="@firebase/analytics-compat",ww="@firebase/analytics",bw="@firebase/app-check-compat",Rw="@firebase/app-check",Iw="@firebase/auth",Cw="@firebase/auth-compat",Dw="@firebase/database",Ow="@firebase/data-connect",Nw="@firebase/database-compat",Mw="@firebase/functions",Vw="@firebase/functions-compat",kw="@firebase/installations",Uw="@firebase/installations-compat",Pw="@firebase/messaging",Lw="@firebase/messaging-compat",xw="@firebase/performance",zw="@firebase/performance-compat",Bw="@firebase/remote-config",qw="@firebase/remote-config-compat",Hw="@firebase/storage",jw="@firebase/storage-compat",Fw="@firebase/firestore",Gw="@firebase/vertexai",Kw="@firebase/firestore-compat",Qw="firebase",Yw="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",$w={[qd]:"fire-core",[Aw]:"fire-core-compat",[ww]:"fire-analytics",[Sw]:"fire-analytics-compat",[Rw]:"fire-app-check",[bw]:"fire-app-check-compat",[Iw]:"fire-auth",[Cw]:"fire-auth-compat",[Dw]:"fire-rtdb",[Ow]:"fire-data-connect",[Nw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Vw]:"fire-fn-compat",[kw]:"fire-iid",[Uw]:"fire-iid-compat",[Pw]:"fire-fcm",[Lw]:"fire-fcm-compat",[xw]:"fire-perf",[zw]:"fire-perf-compat",[Bw]:"fire-rc",[qw]:"fire-rc-compat",[Hw]:"fire-gcs",[jw]:"fire-gcs-compat",[Fw]:"fire-fst",[Kw]:"fire-fst-compat",[Gw]:"fire-vertex","fire-js":"fire-js",[Qw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map,Xw=new Map,jd=new Map;function C_(r,t){try{r.container.addComponent(t)}catch(n){Yi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function di(r){const t=r.name;if(jd.has(t))return Yi.debug(`There were multiple attempts to register component ${t}.`),!1;jd.set(t,r);for(const n of Nc.values())C_(n,r);for(const n of Xw.values())C_(n,r);return!0}function Hs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function qn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new qs("app","Firebase",Zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=Yw;function _T(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw qr.create("bad-app-name",{appName:String(o)});if(n||(n=cT()),!n)throw qr.create("no-options");const c=Nc.get(o);if(c){if(Rl(n,c.options)&&Rl(s,c.config))return c;throw qr.create("duplicate-app",{appName:o})}const f=new sw(o);for(const p of jd.values())f.addComponent(p);const g=new Ww(n,s,f);return Nc.set(o,g),g}function fm(r=Hd){const t=Nc.get(r);if(!t&&r===Hd&&cT())return _T();if(!t)throw qr.create("no-app",{appName:r});return t}function kn(r,t,n){var s;let o=(s=$w[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const c=o.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const g=[`Unable to register library "${o}" with version "${t}":`];c&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yi.warn(g.join(" "));return}di(new Fn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="firebase-heartbeat-database",tb=1,Il="firebase-heartbeat-store";let Id=null;function vT(){return Id||(Id=yT(Jw,tb,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(r=>{throw qr.create("idb-open",{originalErrorMessage:r.message})})),Id}async function eb(r){try{const n=(await vT()).transaction(Il),s=await n.objectStore(Il).get(TT(r));return await n.done,s}catch(t){if(t instanceof Kn)Yi.warn(t.message);else{const n=qr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yi.warn(n.message)}}}async function D_(r,t){try{const s=(await vT()).transaction(Il,"readwrite");await s.objectStore(Il).put(t,TT(r)),await s.done}catch(n){if(n instanceof Kn)Yi.warn(n.message);else{const s=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yi.warn(s.message)}}}function TT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=1024,ib=30;class rb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ab(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=O_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>ib){const f=ob(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Yi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=O_(),{heartbeatsToSend:s,unsentEntries:o}=sb(this._heartbeatsCache.heartbeats),c=Oc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Yi.warn(n),""}}}function O_(){return new Date().toISOString().substring(0,10)}function sb(r,t=nb){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),N_(n)>t){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),N_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ab{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dT()?mT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return D_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return D_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function N_(r){return Oc(JSON.stringify({version:2,heartbeats:r})).length}function ob(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(r){di(new Fn("platform-logger",t=>new Tw(t),"PRIVATE")),di(new Fn("heartbeat",t=>new rb(t),"PRIVATE")),kn(qd,I_,r),kn(qd,I_,"esm2017"),kn("fire-js","")}lb("");var ub="firebase",cb="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(ub,cb,"app");const ET="@firebase/installations",dm="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=1e4,ST=`w:${dm}`,wT="FIS_v2",hb="https://firebaseinstallations.googleapis.com/v1",fb=60*60*1e3,db="installations",mb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ps=new qs(db,mb,gb);function bT(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT({projectId:r}){return`${hb}/projects/${r}/installations`}function IT(r){return{token:r.token,requestStatus:2,expiresIn:yb(r.expiresIn),creationTime:Date.now()}}async function CT(r,t){const s=(await t.json()).error;return Ps.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function DT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function pb(r,{refreshToken:t}){const n=DT(r);return n.append("Authorization",_b(t)),n}async function OT(r){const t=await r();return t.status>=500&&t.status<600?r():t}function yb(r){return Number(r.replace("s","000"))}function _b(r){return`${wT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=RT(r),o=DT(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:wT,appId:r.appId,sdkVersion:ST},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await OT(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:IT(y.authToken)}}else throw await CT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=/^[cdef][\w-]{21}$/,Fd="";function Ab(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=Sb(r);return Eb.test(n)?n:Fd}catch{return Fd}}function Sb(r){return Tb(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new Map;function VT(r,t){const n=Jc(r);kT(n,t),wb(n,t)}function kT(r,t){const n=MT.get(r);if(n)for(const s of n)s(t)}function wb(r,t){const n=bb();n&&n.postMessage({key:r,fid:t}),Rb()}let Os=null;function bb(){return!Os&&"BroadcastChannel"in self&&(Os=new BroadcastChannel("[Firebase] FID Change"),Os.onmessage=r=>{kT(r.data.key,r.data.fid)}),Os}function Rb(){MT.size===0&&Os&&(Os.close(),Os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="firebase-installations-database",Cb=1,Ls="firebase-installations-store";let Cd=null;function mm(){return Cd||(Cd=yT(Ib,Cb,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ls)}}})),Cd}async function Mc(r,t){const n=Jc(r),o=(await mm()).transaction(Ls,"readwrite"),c=o.objectStore(Ls),f=await c.get(n);return await c.put(t,n),await o.done,(!f||f.fid!==t.fid)&&VT(r,t.fid),t}async function UT(r){const t=Jc(r),s=(await mm()).transaction(Ls,"readwrite");await s.objectStore(Ls).delete(t),await s.done}async function th(r,t){const n=Jc(r),o=(await mm()).transaction(Ls,"readwrite"),c=o.objectStore(Ls),f=await c.get(n),g=t(f);return g===void 0?await c.delete(n):await c.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&VT(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(r){let t;const n=await th(r.appConfig,s=>{const o=Db(s),c=Ob(r,o);return t=c.registrationPromise,c.installationEntry});return n.fid===Fd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Db(r){const t=r||{fid:Ab(),registrationStatus:0};return PT(t)}function Ob(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ps.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Nb(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Mb(r)}:{installationEntry:t}}async function Nb(r,t){try{const n=await vb(r,t);return Mc(r.appConfig,n)}catch(n){throw bT(n)&&n.customData.serverCode===409?await UT(r.appConfig):await Mc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Mb(r){let t=await M_(r.appConfig);for(;t.registrationStatus===1;)await NT(100),t=await M_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await gm(r);return s||n}return t}function M_(r){return th(r,t=>{if(!t)throw Ps.create("installation-not-found");return PT(t)})}function PT(r){return Vb(r)?{fid:r.fid,registrationStatus:0}:r}function Vb(r){return r.registrationStatus===1&&r.registrationTime+AT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb({appConfig:r,heartbeatServiceProvider:t},n){const s=Ub(r,n),o=pb(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:ST,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await OT(()=>fetch(s,g));if(p.ok){const y=await p.json();return IT(y)}else throw await CT("Generate Auth Token",p)}function Ub(r,{fid:t}){return`${RT(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(r,t=!1){let n;const s=await th(r.appConfig,c=>{if(!LT(c))throw Ps.create("not-registered");const f=c.authToken;if(!t&&xb(f))return c;if(f.requestStatus===1)return n=Pb(r,t),c;{if(!navigator.onLine)throw Ps.create("app-offline");const g=Bb(c);return n=Lb(r,g),g}});return n?await n:s.authToken}async function Pb(r,t){let n=await V_(r.appConfig);for(;n.authToken.requestStatus===1;)await NT(100),n=await V_(r.appConfig);const s=n.authToken;return s.requestStatus===0?pm(r,t):s}function V_(r){return th(r,t=>{if(!LT(t))throw Ps.create("not-registered");const n=t.authToken;return qb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Lb(r,t){try{const n=await kb(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Mc(r.appConfig,s),n}catch(n){if(bT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UT(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Mc(r.appConfig,s)}throw n}}function LT(r){return r!==void 0&&r.registrationStatus===2}function xb(r){return r.requestStatus===2&&!zb(r)}function zb(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+fb}function Bb(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function qb(r){return r.requestStatus===1&&r.requestTime+AT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(r){const t=r,{installationEntry:n,registrationPromise:s}=await gm(t);return s?s.catch(console.error):pm(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(r,t=!1){const n=r;return await Fb(n),(await pm(n,t)).token}async function Fb(r){const{registrationPromise:t}=await gm(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(r){if(!r||!r.options)throw Dd("App Configuration");if(!r.name)throw Dd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Dd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Dd(r){return Ps.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="installations",Kb="installations-internal",Qb=r=>{const t=r.getProvider("app").getImmediate(),n=Gb(t),s=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Yb=r=>{const t=r.getProvider("app").getImmediate(),n=Hs(t,xT).getImmediate();return{getId:()=>Hb(n),getToken:o=>jb(n,o)}};function $b(){di(new Fn(xT,Qb,"PUBLIC")),di(new Fn(Kb,Yb,"PRIVATE"))}$b();kn(ET,dm);kn(ET,dm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="analytics",Xb="firebase_id",Zb="origin",Wb=60*1e3,Jb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ym="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Wc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new qs("analytics","Analytics",tR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(r){if(!r.startsWith(ym)){const t=mn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function zT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function nR(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function iR(r,t){const n=nR("firebase-js-sdk-policy",{createScriptURL:eR}),s=document.createElement("script"),o=`${ym}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function rR(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function sR(r,t,n,s,o,c){const f=s[o];try{if(f)await t[f];else{const p=(await zT(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){an.error(g)}r("config",o,c)}async function aR(r,t,n,s,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await zT(n);for(const p of f){const y=g.find(C=>C.measurementId===p),A=y&&t[y.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,o||{})}catch(c){an.error(c)}}function oR(r,t,n,s){async function o(c,...f){try{if(c==="event"){const[g,p]=f;await aR(r,t,n,g,p)}else if(c==="config"){const[g,p]=f;await sR(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=f;r("consent",g,p)}else if(c==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(c==="set"){const[g]=f;r("set",g)}else r(c,...f)}catch(g){an.error(g)}}return o}function lR(r,t,n,s,o){let c=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=oR(c,r,t,n),{gtagCore:c,wrappedGtag:window[o]}}function uR(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ym)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=30,hR=1e3;class fR{constructor(t={},n=hR){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const BT=new fR;function dR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function mR(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:dR(s)},c=Jb.replace("{app-id}",n),f=await fetch(c,o);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function gR(r,t=BT,n){const{appId:s,apiKey:o,measurementId:c}=r.options;if(!s)throw mn.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:s};throw mn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new _R;return setTimeout(async()=>{g.abort()},Wb),qT({appId:s,apiKey:o,measurementId:c},f,g,t)}async function qT(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=BT){var c;const{appId:f,measurementId:g}=r;try{await pR(s,t)}catch(p){if(g)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:g};throw p}try{const p=await mR(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!yR(y)){if(o.deleteThrottleMetadata(f),g)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:g};throw p}const A=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?S_(n,o.intervalMillis,cR):S_(n,o.intervalMillis),C={throttleEndTimeMillis:Date.now()+A,backoffCount:n+1};return o.setThrottleMetadata(f,C),an.debug(`Calling attemptFetch again in ${A} millis`),qT(r,C,s,o)}}function pR(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(c),s(mn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function yR(r){if(!(r instanceof Kn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class _R{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function vR(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(){if(dT())try{await mT()}catch(r){return an.warn(mn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return an.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ER(r,t,n,s,o,c,f){var g;const p=gR(r);p.then(x=>{n[x.measurementId]=x.appId,r.options.measurementId&&x.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>an.error(x)),t.push(p);const y=TR().then(x=>{if(x)return s.getId()}),[A,C]=await Promise.all([p,y]);uR(c)||iR(c,A.measurementId),o("js",new Date);const L=(g=f==null?void 0:f.config)!==null&&g!==void 0?g:{};return L[Zb]="firebase",L.update=!0,C!=null&&(L[Xb]=C),o("config",A.measurementId,L),A.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(t){this.app=t}_delete(){return delete vl[this.app.options.appId],Promise.resolve()}}let vl={},k_=[];const U_={};let Od="dataLayer",SR="gtag",P_,HT,L_=!1;function wR(){const r=[];if(fT()&&r.push("This is a browser extension environment."),FS()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=mn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function bR(r,t,n){wR();const s=r.options.appId;if(!s)throw mn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(vl[s]!=null)throw mn.create("already-exists",{id:s});if(!L_){rR(Od);const{wrappedGtag:c,gtagCore:f}=lR(vl,k_,U_,Od,SR);HT=c,P_=f,L_=!0}return vl[s]=ER(r,k_,U_,t,P_,Od,n),new AR(r)}function RR(r=fm()){r=Ye(r);const t=Hs(r,Vc);return t.isInitialized()?t.getImmediate():IR(r)}function IR(r,t={}){const n=Hs(r,Vc);if(n.isInitialized()){const o=n.getImmediate();if(Rl(t,n.getOptions()))return o;throw mn.create("already-initialized")}return n.initialize({options:t})}function CR(r,t,n,s){r=Ye(r),vR(HT,vl[r.app.options.appId],t,n,s).catch(o=>an.error(o))}const x_="@firebase/analytics",z_="0.10.11";function DR(){di(new Fn(Vc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return bR(s,o,n)},"PUBLIC")),di(new Fn("analytics-internal",r,"PRIVATE")),kn(x_,z_),kn(x_,z_,"esm2017");function r(t){try{const n=t.getProvider(Vc).getImmediate();return{logEvent:(s,o,c)=>CR(n,s,o,c)}}catch(n){throw mn.create("interop-component-reg-failed",{reason:n})}}}DR();function _m(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function jT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OR=jT,FT=new qs("auth","Firebase",jT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Wc("@firebase/auth");function NR(r,...t){kc.logLevel<=Dt.WARN&&kc.warn(`Auth (${to}): ${r}`,...t)}function vc(r,...t){kc.logLevel<=Dt.ERROR&&kc.error(`Auth (${to}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(r,...t){throw Tm(r,...t)}function jn(r,...t){return Tm(r,...t)}function vm(r,t,n){const s=Object.assign(Object.assign({},OR()),{[t]:n});return new qs("auth","Firebase",s).create(t,{appName:r.name})}function ks(r){return vm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MR(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&mi(r,"argument-error"),vm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return FT.create(r,...t)}function yt(r,t,...n){if(!r)throw Tm(t,...n)}function Fi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw vc(t),new Error(t)}function $i(r,t){r||Fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function VR(){return B_()==="http:"||B_()==="https:"}function B_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VR()||fT()||"connection"in navigator)?navigator.onLine:!0}function UR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=xS()||qS()}get(){return kR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new xl(3e4,6e4);function Am(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function eo(r,t,n,s,o={}){return KT(r,o,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=Ll(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},c);return BS()||(y.referrerPolicy="no-referrer"),GT.fetch()(QT(r,r.config.apiHost,n,g),y)})}async function KT(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},PR),t);try{const o=new zR(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw fc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw fc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw fc(r,"user-disabled",f);const A=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw vm(r,A,y);mi(r,A)}}catch(o){if(o instanceof Kn)throw o;mi(r,"network-request-failed",{message:String(o)})}}async function xR(r,t,n,s,o={}){const c=await eo(r,t,n,s,o);return"mfaPendingCredential"in c&&mi(r,"multi-factor-auth-required",{_serverResponse:c}),c}function QT(r,t,n,s){const o=`${t}${n}?${s}`;return r.config.emulator?Em(r.config,o):`${r.config.apiScheme}://${o}`}class zR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jn(this.auth,"network-request-failed")),LR.get())})}}function fc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=jn(r,t,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(r,t){return eo(r,"POST","/v1/accounts:delete",t)}async function YT(r,t){return eo(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qR(r,t=!1){const n=Ye(r),s=await n.getIdToken(t),o=Sm(s);yt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c==null?void 0:c.sign_in_provider;return{claims:o,token:s,authTime:Tl(Nd(o.auth_time)),issuedAtTime:Tl(Nd(o.iat)),expirationTime:Tl(Nd(o.exp)),signInProvider:f||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Nd(r){return Number(r)*1e3}function Sm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const o=lT(n);return o?JSON.parse(o):(vc("Failed to decode base64 JWT payload"),null)}catch(o){return vc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function q_(r){const t=Sm(r);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Kn&&HR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function HR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Cl(r,YT(n,{idToken:s}));yt(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];r._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?$T(c.providerUserInfo):[],g=GR(r.providerData,f),p=r.isAnonymous,y=!(r.email&&c.passwordHash)&&!(g!=null&&g.length),A=p?y:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Kd(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,C)}async function FR(r){const t=Ye(r);await Uc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function GR(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function $T(r){return r.map(t=>{var{providerId:n}=t,s=_m(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(r,t){const n=await KT(r,{},async()=>{const s=Ll({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=QT(r,o,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",GT.fetch()(f,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QR(r,t){return eo(r,"POST","/v2/accounts:revokeToken",Am(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):q_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=q_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await KR(t,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new Ha;return s&&(yt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(yt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),c&&(yt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(r,t){yt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Gi{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,c=_m(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Kd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Cl(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qR(this,t)}reload(){return FR(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Gi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Uc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(ks(this.auth));const t=await this.getIdToken();return await Cl(this,BR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,c,f,g,p,y,A;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,L=(o=n.email)!==null&&o!==void 0?o:void 0,x=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,K=(g=n.tenantId)!==null&&g!==void 0?g:void 0,X=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,dt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,tt=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:ut,emailVerified:Et,isAnonymous:mt,providerData:wt,stsTokenManager:V}=n;yt(ut&&V,t,"internal-error");const b=Ha.fromJSON(this.name,V);yt(typeof ut=="string",t,"internal-error"),Ur(C,t.name),Ur(L,t.name),yt(typeof Et=="boolean",t,"internal-error"),yt(typeof mt=="boolean",t,"internal-error"),Ur(x,t.name),Ur($,t.name),Ur(K,t.name),Ur(X,t.name),Ur(dt,t.name),Ur(tt,t.name);const S=new Gi({uid:ut,auth:t,email:L,emailVerified:Et,displayName:C,isAnonymous:mt,photoURL:$,phoneNumber:x,tenantId:K,stsTokenManager:b,createdAt:dt,lastLoginAt:tt});return wt&&Array.isArray(wt)&&(S.providerData=wt.map(I=>Object.assign({},I))),X&&(S._redirectEventId=X),S}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ha;o.updateFromServerResponse(n);const c=new Gi({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Uc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];yt(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?$T(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),g=new Ha;g.updateFromIdToken(s);const p=new Gi({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new Map;function Ki(r){$i(r instanceof Function,"Expected a class definition");let t=H_.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,H_.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}XT.type="NONE";const j_=XT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(r,t,n){return`firebase:${r}:${t}:${n}`}class ja{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Tc(this.userKey,o.apiKey,c),this.fullPersistenceKey=Tc("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Gi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new ja(Ki(j_),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Ki(j_);const f=Tc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const A=await y._get(f);if(A){const C=Gi._fromJSON(t,A);y!==c&&(g=C),c=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new ja(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new ja(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ZT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nE(t))return"Blackberry";if(iE(t))return"Webos";if(WT(t))return"Safari";if((t.includes("chrome/")||JT(t))&&!t.includes("edge/"))return"Chrome";if(eE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ZT(r=Qe()){return/firefox\//i.test(r)}function WT(r=Qe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function JT(r=Qe()){return/crios\//i.test(r)}function tE(r=Qe()){return/iemobile/i.test(r)}function eE(r=Qe()){return/android/i.test(r)}function nE(r=Qe()){return/blackberry/i.test(r)}function iE(r=Qe()){return/webos/i.test(r)}function wm(r=Qe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function YR(r=Qe()){var t;return wm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function $R(){return HS()&&document.documentMode===10}function rE(r=Qe()){return wm(r)||eE(r)||iE(r)||nE(r)||/windows phone/i.test(r)||tE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(r,t=[]){let n;switch(r){case"Browser":n=F_(Qe());break;case"Worker":n=`${F_(Qe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,g)=>{try{const p=t(c);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(r,t={}){return eo(r,"GET","/v2/passwordPolicy",Am(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=6;class JR{constructor(t){var n,s,o,c;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:WR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,c,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G_(this),this.idTokenSubscription=new G_(this),this.beforeStateQueue=new XR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ja.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await YT(this,{idToken:t}),s=await Gi._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(qn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&(p!=null&&p.user)&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Uc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=UR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qn(this.app))return Promise.reject(ks(this));const n=t?Ye(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(ks(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qn(this.app)?Promise.reject(ks(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ZR(this),n=new JR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new qs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await QR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await ja.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&NR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function eh(r){return Ye(r)}class G_{constructor(t){this.auth=t,this.observer=null,this.addObserver=$S(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(r){bm=r}function nI(r){return bm.loadJS(r)}function iI(){return bm.gapiScript}function rI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(r,t){const n=Hs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Rl(c,t??{}))return o;mi(o,"already-initialized")}return n.initialize({options:t})}function aI(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ki);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function oI(r,t,n){const s=eh(r);yt(s._canInitEmulator,s,"emulator-config-failed"),yt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=aE(t),{host:f,port:g}=lI(t),p=g===null?"":`:${g}`;s.config.emulator={url:`${c}//${f}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),uI()}function aE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function lI(r){const t=aE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:K_(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:K_(f)}}}function K_(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function uI(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(t){return Fi("not implemented")}_linkToIdToken(t,n){return Fi("not implemented")}_getReauthenticationResolver(t){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(r,t){return xR(r,"POST","/v1/accounts:signInWithIdp",Am(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="http://localhost";class xs extends oE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,c=_m(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new xs(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Fa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Fa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fa(t,n)}buildRequest(){const t={requestUri:cI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ll(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends zl{constructor(){super("facebook.com")}static credential(t){return xs._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pr.credentialFromTaggedObject(t)}static credentialFromError(t){return Pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pr.credential(t.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends zl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xs._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ji.credentialFromTaggedObject(t)}static credentialFromError(t){return ji.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return ji.credential(n,s)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends zl{constructor(){super("github.com")}static credential(t){return xs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lr.credential(t.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends zl{constructor(){super("twitter.com")}static credential(t,n){return xs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return xr.credential(n,s)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const c=await Gi._fromIdTokenResponse(t,s,o),f=Q_(s);return new Ka({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=Q_(s);return new Ka({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function Q_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Kn{constructor(t,n,s,o){var c;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Pc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Pc(t,n,s,o)}}function lE(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(r,c,t,s):c})}async function hI(r,t,n=!1){const s=await Cl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ka._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(r,t,n=!1){const{auth:s}=r;if(qn(s.app))return Promise.reject(ks(s));const o="reauthenticate";try{const c=await Cl(r,lE(s,o,t,r),n);yt(c.idToken,s,"internal-error");const f=Sm(c.idToken);yt(f,s,"internal-error");const{sub:g}=f;return yt(r.uid===g,s,"user-mismatch"),Ka._forOperation(r,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&mi(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(r,t,n=!1){if(qn(r.app))return Promise.reject(ks(r));const s="signIn",o=await lE(r,s,t),c=await Ka._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}function mI(r,t,n,s){return Ye(r).onIdTokenChanged(t,n,s)}function gI(r,t,n){return Ye(r).beforeAuthStateChanged(t,n)}function pI(r){return Ye(r).signOut()}const Lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=1e3,_I=10;class cE extends uE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);$R()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,_I):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},yI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}cE.type="LOCAL";const vI=cE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends uE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}hE.type="SESSION";const fE=hE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new nh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,c)),p=await TI(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const y=Im("",20);o.port1.start();const A=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(C){const L=C;if(L.data.eventId===y)switch(L.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(L.data.response);break;default:clearTimeout(A),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}function AI(r){ci().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){return typeof ci().WorkerGlobalScope<"u"&&typeof ci().importScripts=="function"}async function SI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function bI(){return dE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="firebaseLocalStorageDb",RI=1,xc="firebaseLocalStorage",gE="fbase_key";class Bl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ih(r,t){return r.transaction([xc],t?"readwrite":"readonly").objectStore(xc)}function II(){const r=indexedDB.deleteDatabase(mE);return new Bl(r).toPromise()}function Qd(){const r=indexedDB.open(mE,RI);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(xc,{keyPath:gE})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(xc)?t(s):(s.close(),await II(),t(await Qd()))})})}async function Y_(r,t,n){const s=ih(r,!0).put({[gE]:t,value:n});return new Bl(s).toPromise()}async function CI(r,t){const n=ih(r,!1).get(t),s=await new Bl(n).toPromise();return s===void 0?null:s.value}function $_(r,t){const n=ih(r,!0).delete(t);return new Bl(n).toPromise()}const DI=800,OI=3;class pE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>OI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(bI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await SI(),!this.activeServiceWorker)return;this.sender=new EI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||wI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qd();return await Y_(t,Lc,"1"),await $_(t,Lc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Y_(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>CI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=ih(o,!1).getAll();return new Bl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pE.type="LOCAL";const NI=pE;new xl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(r,t){return t?Ki(t):(yt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends oE{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function MI(r){return dI(r.auth,new Cm(r),r.bypassAuthState)}function VI(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),fI(n,new Cm(r),r.bypassAuthState)}async function kI(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),hI(n,new Cm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t,n,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return MI;case"linkViaPopup":case"linkViaRedirect":return kI;case"reauthViaPopup":case"reauthViaRedirect":return VI;default:mi(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new xl(2e3,1e4);async function PI(r,t,n){if(qn(r.app))return Promise.reject(jn(r,"operation-not-supported-in-this-environment"));const s=eh(r);MR(r,t,Rm);const o=yE(s,n);return new Ns(s,"signInViaPopup",t,o).executeNotNull()}class Ns extends _E{constructor(t,n,s,o,c){super(t,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,UI.get())};t()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="pendingRedirect",Ec=new Map;class xI extends _E{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Ec.get(this.auth._key());if(!t){try{const s=await zI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Ec.set(this.auth._key(),t)}return this.bypassAuthState||Ec.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(r,t){const n=HI(t),s=qI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function BI(r,t){Ec.set(r._key(),t)}function qI(r){return Ki(r._redirectPersistence)}function HI(r){return Tc(LI,r.config.apiKey,r.name)}async function jI(r,t,n=!1){if(qn(r.app))return Promise.reject(ks(r));const s=eh(r),o=yE(s,t),f=await new xI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=10*60*1e3;class GI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!KI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!vE(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=FI&&this.cachedEventUids.clear(),this.cachedEventUids.has(X_(t))}saveEventToCache(t){this.cachedEventUids.add(X_(t)),this.lastProcessedEventTime=Date.now()}}function X_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function vE({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function KI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vE(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(r,t={}){return eo(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$I=/^https?/;async function XI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await QI(r);for(const n of t)try{if(ZI(n))return}catch{}mi(r,"unauthorized-domain")}function ZI(r){const t=Gd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!$I.test(n))return!1;if(YI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new xl(3e4,6e4);function Z_(){const r=ci().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function JI(r){return new Promise((t,n)=>{var s,o,c;function f(){Z_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Z_(),n(jn(r,"network-request-failed"))},timeout:WI.get()})}if(!((o=(s=ci().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=ci().gapi)===null||c===void 0)&&c.load)f();else{const g=rI("iframefcb");return ci()[g]=()=>{gapi.load?f():n(jn(r,"network-request-failed"))},nI(`${iI()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw Ac=null,t})}let Ac=null;function t1(r){return Ac=Ac||JI(r),Ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new xl(5e3,15e3),n1="__/auth/iframe",i1="emulator/auth/iframe",r1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a1(r){const t=r.config;yt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Em(t,i1):`https://${r.config.authDomain}/${n1}`,s={apiKey:t.apiKey,appName:r.name,v:to},o=s1.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ll(s).slice(1)}`}async function o1(r){const t=await t1(r),n=ci().gapi;return yt(n,r,"internal-error"),t.open({where:document.body,url:a1(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r1,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=jn(r,"network-request-failed"),g=ci().setTimeout(()=>{c(f)},e1.get());function p(){ci().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u1=500,c1=600,h1="_blank",f1="http://localhost";class W_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d1(r,t,n,s=u1,o=c1){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},l1),{width:s.toString(),height:o.toString(),top:c,left:f}),y=Qe().toLowerCase();n&&(g=JT(y)?h1:n),ZT(y)&&(t=t||f1,p.scrollbars="yes");const A=Object.entries(p).reduce((L,[x,$])=>`${L}${x}=${$},`,"");if(YR(y)&&g!=="_self")return m1(t||"",g),new W_(null);const C=window.open(t||"",g,A);yt(C,r,"popup-blocked");try{C.focus()}catch{}return new W_(C)}function m1(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="__/auth/handler",p1="emulator/auth/handler",y1=encodeURIComponent("fac");async function J_(r,t,n,s,o,c){yt(r.config.authDomain,r,"auth-domain-config-required"),yt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:to,eventId:o};if(t instanceof Rm){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",YS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,C]of Object.entries({}))f[A]=C}if(t instanceof zl){const A=t.getScopes().filter(C=>C!=="");A.length>0&&(f.scopes=A.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const p=await r._getAppCheckToken(),y=p?`#${y1}=${encodeURIComponent(p)}`:"";return`${_1(r)}?${Ll(g).slice(1)}${y}`}function _1({config:r}){return r.emulator?Em(r,p1):`https://${r.authDomain}/${g1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class v1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fE,this._completeRedirectFn=jI,this._overrideRedirectResult=BI}async _openPopup(t,n,s,o){var c;$i((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await J_(t,n,s,Gd(),o);return d1(t,f,Im())}async _openRedirect(t,n,s,o){await this._originValidation(t);const c=await J_(t,n,s,Gd(),o);return AI(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):($i(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await o1(t),s=new GI(t);return n.register("authEvent",o=>(yt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Md,{type:Md},o=>{var c;const f=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Md];f!==void 0&&n(!!f),mi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return rE()||WT()||wm()}}const T1=v1;var tv="@firebase/auth",ev="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function S1(r){di(new Fn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;yt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(r)},y=new tI(s,o,c,p);return aI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),di(new Fn("auth-internal",t=>{const n=eh(t.getProvider("auth").getImmediate());return(s=>new E1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(tv,ev,A1(r)),kn(tv,ev,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=5*60,b1=hT("authIdTokenMaxAge")||w1;let nv=null;const R1=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>b1)return;const o=n==null?void 0:n.token;nv!==o&&(nv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function I1(r=fm()){const t=Hs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=sI(r,{popupRedirectResolver:T1,persistence:[NI,vI,fE]}),s=hT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=R1(c.toString());gI(n,f,()=>f(n.currentUser)),mI(n,g=>f(g))}}const o=uT("auth");return o&&oI(n,`http://${o}`),n}function C1(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}eI({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const c=jn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",C1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});S1("Browser");var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,TE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,b){function S(){}S.prototype=b.prototype,V.D=b.prototype,V.prototype=new S,V.prototype.constructor=V,V.C=function(I,M,P){for(var R=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)R[pe-2]=arguments[pe];return b.prototype[M].apply(I,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,b,S){S||(S=0);var I=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)I[M]=b.charCodeAt(S++)|b.charCodeAt(S++)<<8|b.charCodeAt(S++)<<16|b.charCodeAt(S++)<<24;else for(M=0;16>M;++M)I[M]=b[S++]|b[S++]<<8|b[S++]<<16|b[S++]<<24;b=V.g[0],S=V.g[1],M=V.g[2];var P=V.g[3],R=b+(P^S&(M^P))+I[0]+3614090360&4294967295;b=S+(R<<7&4294967295|R>>>25),R=P+(M^b&(S^M))+I[1]+3905402710&4294967295,P=b+(R<<12&4294967295|R>>>20),R=M+(S^P&(b^S))+I[2]+606105819&4294967295,M=P+(R<<17&4294967295|R>>>15),R=S+(b^M&(P^b))+I[3]+3250441966&4294967295,S=M+(R<<22&4294967295|R>>>10),R=b+(P^S&(M^P))+I[4]+4118548399&4294967295,b=S+(R<<7&4294967295|R>>>25),R=P+(M^b&(S^M))+I[5]+1200080426&4294967295,P=b+(R<<12&4294967295|R>>>20),R=M+(S^P&(b^S))+I[6]+2821735955&4294967295,M=P+(R<<17&4294967295|R>>>15),R=S+(b^M&(P^b))+I[7]+4249261313&4294967295,S=M+(R<<22&4294967295|R>>>10),R=b+(P^S&(M^P))+I[8]+1770035416&4294967295,b=S+(R<<7&4294967295|R>>>25),R=P+(M^b&(S^M))+I[9]+2336552879&4294967295,P=b+(R<<12&4294967295|R>>>20),R=M+(S^P&(b^S))+I[10]+4294925233&4294967295,M=P+(R<<17&4294967295|R>>>15),R=S+(b^M&(P^b))+I[11]+2304563134&4294967295,S=M+(R<<22&4294967295|R>>>10),R=b+(P^S&(M^P))+I[12]+1804603682&4294967295,b=S+(R<<7&4294967295|R>>>25),R=P+(M^b&(S^M))+I[13]+4254626195&4294967295,P=b+(R<<12&4294967295|R>>>20),R=M+(S^P&(b^S))+I[14]+2792965006&4294967295,M=P+(R<<17&4294967295|R>>>15),R=S+(b^M&(P^b))+I[15]+1236535329&4294967295,S=M+(R<<22&4294967295|R>>>10),R=b+(M^P&(S^M))+I[1]+4129170786&4294967295,b=S+(R<<5&4294967295|R>>>27),R=P+(S^M&(b^S))+I[6]+3225465664&4294967295,P=b+(R<<9&4294967295|R>>>23),R=M+(b^S&(P^b))+I[11]+643717713&4294967295,M=P+(R<<14&4294967295|R>>>18),R=S+(P^b&(M^P))+I[0]+3921069994&4294967295,S=M+(R<<20&4294967295|R>>>12),R=b+(M^P&(S^M))+I[5]+3593408605&4294967295,b=S+(R<<5&4294967295|R>>>27),R=P+(S^M&(b^S))+I[10]+38016083&4294967295,P=b+(R<<9&4294967295|R>>>23),R=M+(b^S&(P^b))+I[15]+3634488961&4294967295,M=P+(R<<14&4294967295|R>>>18),R=S+(P^b&(M^P))+I[4]+3889429448&4294967295,S=M+(R<<20&4294967295|R>>>12),R=b+(M^P&(S^M))+I[9]+568446438&4294967295,b=S+(R<<5&4294967295|R>>>27),R=P+(S^M&(b^S))+I[14]+3275163606&4294967295,P=b+(R<<9&4294967295|R>>>23),R=M+(b^S&(P^b))+I[3]+4107603335&4294967295,M=P+(R<<14&4294967295|R>>>18),R=S+(P^b&(M^P))+I[8]+1163531501&4294967295,S=M+(R<<20&4294967295|R>>>12),R=b+(M^P&(S^M))+I[13]+2850285829&4294967295,b=S+(R<<5&4294967295|R>>>27),R=P+(S^M&(b^S))+I[2]+4243563512&4294967295,P=b+(R<<9&4294967295|R>>>23),R=M+(b^S&(P^b))+I[7]+1735328473&4294967295,M=P+(R<<14&4294967295|R>>>18),R=S+(P^b&(M^P))+I[12]+2368359562&4294967295,S=M+(R<<20&4294967295|R>>>12),R=b+(S^M^P)+I[5]+4294588738&4294967295,b=S+(R<<4&4294967295|R>>>28),R=P+(b^S^M)+I[8]+2272392833&4294967295,P=b+(R<<11&4294967295|R>>>21),R=M+(P^b^S)+I[11]+1839030562&4294967295,M=P+(R<<16&4294967295|R>>>16),R=S+(M^P^b)+I[14]+4259657740&4294967295,S=M+(R<<23&4294967295|R>>>9),R=b+(S^M^P)+I[1]+2763975236&4294967295,b=S+(R<<4&4294967295|R>>>28),R=P+(b^S^M)+I[4]+1272893353&4294967295,P=b+(R<<11&4294967295|R>>>21),R=M+(P^b^S)+I[7]+4139469664&4294967295,M=P+(R<<16&4294967295|R>>>16),R=S+(M^P^b)+I[10]+3200236656&4294967295,S=M+(R<<23&4294967295|R>>>9),R=b+(S^M^P)+I[13]+681279174&4294967295,b=S+(R<<4&4294967295|R>>>28),R=P+(b^S^M)+I[0]+3936430074&4294967295,P=b+(R<<11&4294967295|R>>>21),R=M+(P^b^S)+I[3]+3572445317&4294967295,M=P+(R<<16&4294967295|R>>>16),R=S+(M^P^b)+I[6]+76029189&4294967295,S=M+(R<<23&4294967295|R>>>9),R=b+(S^M^P)+I[9]+3654602809&4294967295,b=S+(R<<4&4294967295|R>>>28),R=P+(b^S^M)+I[12]+3873151461&4294967295,P=b+(R<<11&4294967295|R>>>21),R=M+(P^b^S)+I[15]+530742520&4294967295,M=P+(R<<16&4294967295|R>>>16),R=S+(M^P^b)+I[2]+3299628645&4294967295,S=M+(R<<23&4294967295|R>>>9),R=b+(M^(S|~P))+I[0]+4096336452&4294967295,b=S+(R<<6&4294967295|R>>>26),R=P+(S^(b|~M))+I[7]+1126891415&4294967295,P=b+(R<<10&4294967295|R>>>22),R=M+(b^(P|~S))+I[14]+2878612391&4294967295,M=P+(R<<15&4294967295|R>>>17),R=S+(P^(M|~b))+I[5]+4237533241&4294967295,S=M+(R<<21&4294967295|R>>>11),R=b+(M^(S|~P))+I[12]+1700485571&4294967295,b=S+(R<<6&4294967295|R>>>26),R=P+(S^(b|~M))+I[3]+2399980690&4294967295,P=b+(R<<10&4294967295|R>>>22),R=M+(b^(P|~S))+I[10]+4293915773&4294967295,M=P+(R<<15&4294967295|R>>>17),R=S+(P^(M|~b))+I[1]+2240044497&4294967295,S=M+(R<<21&4294967295|R>>>11),R=b+(M^(S|~P))+I[8]+1873313359&4294967295,b=S+(R<<6&4294967295|R>>>26),R=P+(S^(b|~M))+I[15]+4264355552&4294967295,P=b+(R<<10&4294967295|R>>>22),R=M+(b^(P|~S))+I[6]+2734768916&4294967295,M=P+(R<<15&4294967295|R>>>17),R=S+(P^(M|~b))+I[13]+1309151649&4294967295,S=M+(R<<21&4294967295|R>>>11),R=b+(M^(S|~P))+I[4]+4149444226&4294967295,b=S+(R<<6&4294967295|R>>>26),R=P+(S^(b|~M))+I[11]+3174756917&4294967295,P=b+(R<<10&4294967295|R>>>22),R=M+(b^(P|~S))+I[2]+718787259&4294967295,M=P+(R<<15&4294967295|R>>>17),R=S+(P^(M|~b))+I[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+P&4294967295}s.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var S=b-this.blockSize,I=this.B,M=this.h,P=0;P<b;){if(M==0)for(;P<=S;)o(this,V,P),P+=this.blockSize;if(typeof V=="string"){for(;P<b;)if(I[M++]=V.charCodeAt(P++),M==this.blockSize){o(this,I),M=0;break}}else for(;P<b;)if(I[M++]=V[P++],M==this.blockSize){o(this,I),M=0;break}}this.h=M,this.o+=b},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var S=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=S&255,S/=256;for(this.u(V),V=Array(16),b=S=0;4>b;++b)for(var I=0;32>I;I+=8)V[S++]=this.g[b]>>>I&255;return V};function c(V,b){var S=g;return Object.prototype.hasOwnProperty.call(S,V)?S[V]:S[V]=b(V)}function f(V,b){this.h=b;for(var S=[],I=!0,M=V.length-1;0<=M;M--){var P=V[M]|0;I&&P==b||(S[M]=P,I=!1)}this.g=S}var g={};function p(V){return-128<=V&&128>V?c(V,function(b){return new f([b|0],0>b?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return C;if(0>V)return X(y(-V));for(var b=[],S=1,I=0;V>=S;I++)b[I]=V/S|0,S*=4294967296;return new f(b,0)}function A(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return X(A(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(b,8)),I=C,M=0;M<V.length;M+=8){var P=Math.min(8,V.length-M),R=parseInt(V.substring(M,M+P),b);8>P?(P=y(Math.pow(b,P)),I=I.j(P).add(y(R))):(I=I.j(S),I=I.add(y(R)))}return I}var C=p(0),L=p(1),x=p(16777216);r=f.prototype,r.m=function(){if(K(this))return-X(this).m();for(var V=0,b=1,S=0;S<this.g.length;S++){var I=this.i(S);V+=(0<=I?I:4294967296+I)*b,b*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(K(this))return"-"+X(this).toString(V);for(var b=y(Math.pow(V,6)),S=this,I="";;){var M=Et(S,b).g;S=dt(S,M.j(b));var P=((0<S.g.length?S.g[0]:S.h)>>>0).toString(V);if(S=M,$(S))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function K(V){return V.h==-1}r.l=function(V){return V=dt(this,V),K(V)?-1:$(V)?0:1};function X(V){for(var b=V.g.length,S=[],I=0;I<b;I++)S[I]=~V.g[I];return new f(S,~V.h).add(L)}r.abs=function(){return K(this)?X(this):this},r.add=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0,M=0;M<=b;M++){var P=I+(this.i(M)&65535)+(V.i(M)&65535),R=(P>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);I=R>>>16,P&=65535,R&=65535,S[M]=R<<16|P}return new f(S,S[S.length-1]&-2147483648?-1:0)};function dt(V,b){return V.add(X(b))}r.j=function(V){if($(this)||$(V))return C;if(K(this))return K(V)?X(this).j(X(V)):X(X(this).j(V));if(K(V))return X(this.j(X(V)));if(0>this.l(x)&&0>V.l(x))return y(this.m()*V.m());for(var b=this.g.length+V.g.length,S=[],I=0;I<2*b;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var M=0;M<V.g.length;M++){var P=this.i(I)>>>16,R=this.i(I)&65535,pe=V.i(M)>>>16,ue=V.i(M)&65535;S[2*I+2*M]+=R*ue,tt(S,2*I+2*M),S[2*I+2*M+1]+=P*ue,tt(S,2*I+2*M+1),S[2*I+2*M+1]+=R*pe,tt(S,2*I+2*M+1),S[2*I+2*M+2]+=P*pe,tt(S,2*I+2*M+2)}for(I=0;I<b;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=b;I<2*b;I++)S[I]=0;return new f(S,0)};function tt(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function ut(V,b){this.g=V,this.h=b}function Et(V,b){if($(b))throw Error("division by zero");if($(V))return new ut(C,C);if(K(V))return b=Et(X(V),b),new ut(X(b.g),X(b.h));if(K(b))return b=Et(V,X(b)),new ut(X(b.g),b.h);if(30<V.g.length){if(K(V)||K(b))throw Error("slowDivide_ only works with positive integers.");for(var S=L,I=b;0>=I.l(V);)S=mt(S),I=mt(I);var M=wt(S,1),P=wt(I,1);for(I=wt(I,2),S=wt(S,2);!$(I);){var R=P.add(I);0>=R.l(V)&&(M=M.add(S),P=R),I=wt(I,1),S=wt(S,1)}return b=dt(V,M.j(b)),new ut(M,b)}for(M=C;0<=V.l(b);){for(S=Math.max(1,Math.floor(V.m()/b.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=y(S),R=P.j(b);K(R)||0<R.l(V);)S-=I,P=y(S),R=P.j(b);$(P)&&(P=L),M=M.add(P),V=dt(V,R)}return new ut(M,V)}r.A=function(V){return Et(this,V).h},r.and=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)&V.i(I);return new f(S,this.h&V.h)},r.or=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)|V.i(I);return new f(S,this.h|V.h)},r.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)^V.i(I);return new f(S,this.h^V.h)};function mt(V){for(var b=V.g.length+1,S=[],I=0;I<b;I++)S[I]=V.i(I)<<1|V.i(I-1)>>>31;return new f(S,V.h)}function wt(V,b){var S=b>>5;b%=32;for(var I=V.g.length-S,M=[],P=0;P<I;P++)M[P]=0<b?V.i(P+S)>>>b|V.i(P+S+1)<<32-b:V.i(P+S);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,TE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=A,Hr=f}).apply(typeof iv<"u"?iv:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var EE,gl,AE,Sc,Yd,SE,wE,bE;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,m){if(m)t:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break t;_=_[U]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,_){return u.call.apply(u.bind,arguments)}function C(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function L(u,m,_){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:C,L.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,q){for(var W=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)W[Vt-2]=arguments[Vt];return m.prototype[U].apply(E,W)}}function K(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function X(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const U=u.length||0,q=E.length||0;u.length=U+q;for(let W=0;W<q;W++)u[U+W]=E[W]}else u.push(E)}}class dt{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function tt(u){return/^[\s\xa0]*$/.test(u)}function ut(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Et(u){return Et[" "](u),u}Et[" "]=function(){};var mt=ut().indexOf("Gecko")!=-1&&!(ut().toLowerCase().indexOf("webkit")!=-1&&ut().indexOf("Edge")==-1)&&!(ut().indexOf("Trident")!=-1||ut().indexOf("MSIE")!=-1)&&ut().indexOf("Edge")==-1;function wt(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function V(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function b(u){const m={};for(const _ in u)m[_]=u[_];return m}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,m){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let q=0;q<S.length;q++)_=S[q],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function P(u){g.setTimeout(()=>{throw u},0)}function R(){var u=qt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class pe{constructor(){this.h=this.g=null}add(m,_){const E=ue.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var ue=new dt(()=>new J,u=>u.reset());class J{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,ct=!1,qt=new pe,D=()=>{const u=g.Promise.resolve(void 0);gt=()=>{u.then(Z)}};var Z=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){P(_)}var m=ue;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ct=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u}();function bt(u,m){if(et.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(mt){t:{try{Et(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:At[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&bt.aa.h.call(this)}}$(bt,et);var At={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),Lt=0;function ee(u,m,_,E,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=U,this.key=++Lt,this.da=this.fa=!1}function Ft(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function $e(u){this.src=u,this.g={},this.h=0}$e.prototype.add=function(u,m,_,E,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var W=pn(u,m,E,U);return-1<W?(m=u[W],_||(m.fa=!1)):(m=new ee(m,this.src,q,!!E,U),m.fa=_,u.push(m)),m};function pi(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(E,U,1),q&&(Ft(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function pn(u,m,_,E){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==E)return U}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Ji={};function yi(u,m,_,E,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)yi(u,m[q],_,E,U);return null}return _=Gl(_),u&&u[ce]?u.K(m,_,y(E)?!!E.capture:!1,U):oo(u,m,_,!1,E,U)}function oo(u,m,_,E,U,q){if(!m)throw Error("Invalid event type");var W=y(U)?!!U.capture:!!U,Vt=lo(u);if(Vt||(u[Wi]=Vt=new $e(u)),_=Vt.add(m,_,E,W,q),_.proxy)return _;if(E=Ys(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)nt||(U=W),U===void 0&&(U=!1),u.addEventListener(m.toString(),E,U);else if(u.attachEvent)u.attachEvent(Xs(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ys(){function u(_){return m.call(u.src,u.listener,_)}const m=vh;return u}function $s(u,m,_,E,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)$s(u,m[q],_,E,U);else E=y(E)?!!E.capture:!!E,_=Gl(_),u&&u[ce]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=pn(q,_,E,U),-1<_&&(Ft(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=lo(u))&&(m=u.g[m.toString()],u=-1,m&&(u=pn(m,_,E,U)),(_=-1<u?m[u]:null)&&Xr(_))}function Xr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[ce])pi(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Xs(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=lo(m))?(pi(_,u),_.h==0&&(_.src=null,m[Wi]=null)):Ft(u)}}}function Xs(u){return u in Ji?Ji[u]:Ji[u]="on"+u}function vh(u,m){if(u.da)u=!0;else{m=new bt(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&Xr(u),u=_.call(E,m)}return u}function lo(u){return u=u[Wi],u instanceof $e?u:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gl(u){return typeof u=="function"?u:(u[en]||(u[en]=function(m){return u.handleEvent(m)}),u[en])}function ye(){ot.call(this),this.i=new $e(this),this.M=this,this.F=null}$(ye,ot),ye.prototype[ce]=!0,ye.prototype.removeEventListener=function(u,m,_,E){$s(this,u,m,_,E)};function Re(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new et(m,u);else if(m instanceof et)m.target=m.target||u;else{var U=m;m=new et(E,u),I(m,U)}if(U=!0,_)for(var q=_.length-1;0<=q;q--){var W=m.g=_[q];U=_i(W,E,!0,m)&&U}if(W=m.g=u,U=_i(W,E,!0,m)&&U,U=_i(W,E,!1,m)&&U,_)for(q=0;q<_.length;q++)W=m.g=_[q],U=_i(W,E,!1,m)&&U}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)Ft(_[E]);delete u.g[m],u.h--}}this.F=null},ye.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ye.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function _i(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var W=m[q];if(W&&!W.da&&W.capture==_){var Vt=W.listener,ve=W.ha||W.src;W.fa&&pi(u.i,W),U=Vt.call(ve,E)!==!1&&U}}return U&&!E.defaultPrevented}function Kl(u,m,_){if(typeof u=="function")_&&(u=L(u,_));else if(u&&typeof u.handleEvent=="function")u=L(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function uo(u){u.g=Kl(()=>{u.g=null,u.i&&(u.i=!1,uo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Th extends ot{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:uo(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(u){ot.call(this),this.h=u,this.g={}}$(Zr,ot);var tr=[];function qe(u){wt(u.g,function(m,_){this.g.hasOwnProperty(_)&&Xr(m)},u),u.g={}}Zr.prototype.N=function(){Zr.aa.N.call(this),qe(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var co=g.JSON.stringify,Qn=g.JSON.parse,Xe=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function ho(){}ho.prototype.h=null;function Ql(u){return u.h||(u.h=u.i())}function Yl(){}var Yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){et.call(this,"d")}$(er,et);function Un(){et.call(this,"c")}$(Un,et);var yn={},nr=null;function Zs(){return nr=nr||new ye}yn.La="serverreachability";function fo(u){et.call(this,yn.La,u)}$(fo,et);function ir(u){const m=Zs();Re(m,new fo(m))}yn.STAT_EVENT="statevent";function Ws(u,m){et.call(this,yn.STAT_EVENT,u),this.stat=m}$(Ws,et);function ae(u){const m=Zs();Re(m,new Ws(m,u))}yn.Ma="timingevent";function $l(u,m){et.call(this,yn.Ma,u),this.size=m}$($l,et);function rr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function sr(){this.g=!0}sr.prototype.xa=function(){this.g=!1};function Xl(u,m,_,E,U,q){u.info(function(){if(u.g)if(q)for(var W="",Vt=q.split("&"),ve=0;ve<Vt.length;ve++){var kt=Vt[ve].split("=");if(1<kt.length){var De=kt[0];kt=kt[1];var Te=De.split("_");W=2<=Te.length&&Te[1]=="type"?W+(De+"="+kt+"&"):W+(De+"=redacted&")}}else W=null;else W=q;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+_+`
`+W})}function Zl(u,m,_,E,U,q,W){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+_+`
`+q+" "+W})}function ar(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ie(u,_)+(E?" "+E:"")})}function $n(u,m){u.info(function(){return"TIMEOUT: "+m})}sr.prototype.info=function(){};function Ie(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var W=1;W<U.length;W++)U[W]=""}}}}return co(_)}catch{return m}}var _e={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function Js(){}$(Js,ho),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},Wr=new Js;function Xn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var or={},Jr={};function Pn(u,m,_){u.L=1,u.v=ns(ne(m)),u.m=_,u.P=!0,Ti(u,null)}function Ti(u,m){u.F=Date.now(),Zt(u),u.A=ne(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Si(_.i,"t",E),u.C=0,_=u.j.J,u.h=new mo,u.g=hu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Th(L(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(tr[0]=U.toString()),U=tr);for(var q=0;q<U.length;q++){var W=yi(_,U[q],E||m.handleEvent,!1,m.h||m);if(!W)break;m.g[W.key]=W}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),ir(),Xl(u.i,u.u,u.A,u.l,u.R,u.m)}Xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&An(u)==3?m.j():this.Y(u)},Xn.prototype.Y=function(u){try{if(u==this.g)t:{const Te=An(this.g);var m=this.g.Ba();const Ii=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||iu(this.g)))){this.J||Te!=4||m==7||(m==8||0>=Ii?ir(3):ir(2)),ta(this);var _=this.g.Z();this.X=_;e:if(lr(this)){var E=iu(this.g);u="";var U=E.length,q=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),on(this);var W="";break e}this.h.i=new g.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(q&&m==U-1)});E.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=_==200,Zl(this.i,this.u,this.A,this.l,this.R,Te,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Vt,ve=this.g;if((Vt=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tt(Vt)){var kt=Vt;break e}}kt=null}if(_=kt)ar(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ln(this,_);else{this.o=!1,this.s=3,ae(12),nn(this),on(this);break t}}if(this.P){_=!0;let ke;for(;!this.J&&this.C<W.length;)if(ke=ur(this,W),ke==Jr){Te==4&&(this.s=4,ae(14),_=!1),ar(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==or){this.s=4,ae(15),ar(this.i,this.l,W,"[Invalid Chunk]"),_=!1;break}else ar(this.i,this.l,ke,null),ln(this,ke);if(lr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||W.length!=0||this.h.h||(this.s=1,ae(16),_=!1),this.o=this.o&&_,!_)ar(this.i,this.l,W,"[Invalid Chunked Response]"),nn(this),on(this);else if(0<W.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),us(De),De.M=!0,ae(11))}}else ar(this.i,this.l,W,null),ln(this,W);Te==4&&nn(this),this.o&&!this.J&&(Te==4?lu(this.j,this):(this.o=!1,Zt(this)))}else Rh(this.g),_==400&&0<W.indexOf("Unknown SID")?(this.s=3,ae(12)):(this.s=0,ae(13)),nn(this),on(this)}}}catch{}finally{}};function lr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ur(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?Jr:(_=Number(m.substring(_,E)),isNaN(_)?or:(E+=1,E+_>m.length?Jr:(m=m.slice(E,E+_),u.C=E+_,m)))}Xn.prototype.cancel=function(){this.J=!0,nn(this)};function Zt(u){u.S=Date.now()+u.I,go(u,u.I)}function go(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=rr(L(u.ba,u),m)}function ta(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?($n(this.i,this.A),this.L!=2&&(ir(),ae(17)),nn(this),this.s=2,on(this)):go(this,this.S-u)};function on(u){u.j.G==0||u.J||lu(u.j,u)}function nn(u){ta(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,qe(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ln(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||cr(_.h,u))){if(!u.K&&cr(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ca(_),la(_);else break t;Ro(_),ae(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=rr(L(_.Za,_),6e3));if(1>=Wl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ri(_,11)}else if((u.K||_.g==u)&&ca(_),!tt(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let kt=U[m];if(_.T=kt[0],kt=kt[1],_.G==2)if(kt[0]=="c"){_.K=kt[1],_.ia=kt[2];const De=kt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const Te=kt[4];Te!=null&&(_.Aa=Te,_.j.info("SVER="+_.Aa));const Ii=kt[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(E=1.5*Ii,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const ke=u.g;if(ke){const ii=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var q=E.h;q.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(hr(q,q.h),q.h=null))}if(E.D){const Co=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(E.ya=Co,xt(E.I,E.D,Co))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var W=u;if(E.qa=cu(E,E.J?E.ia:null,E.W),W.K){_n(E.h,W);var Vt=W,ve=E.L;ve&&(Vt.I=ve),Vt.B&&(ta(Vt),Zt(Vt)),E.g=W}else au(E);0<_.i.length&&ua(_)}else kt[0]!="stop"&&kt[0]!="close"||Ri(_,7);else _.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?Ri(_,7):wo(_):kt[0]!="noop"&&_.l&&_.l.ta(kt),_.v=0)}}ir(4)}catch{}}var Eh=class{constructor(u,m){this.g=u,this.map=m}};function po(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wl(u){return u.h?1:u.g?u.g.size:0}function cr(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function hr(u,m){u.g?u.g.add(m):u.h=m}function _n(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}po.prototype.cancel=function(){if(this.i=Ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ze(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return K(u.i)}function Jl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Ah(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function ts(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ah(u),E=Jl(u),U=E.length,q=0;q<U;q++)m.call(void 0,E[q],_&&_[q],u)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ea(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var q=u[_].substring(0,E);U=u[_].substring(E+1)}else q=u[_];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Ei(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ei){this.h=u.h,fr(this,u.j),this.o=u.o,this.g=u.g,es(this,u.s),this.l=u.l;var m=u.i,_=new Zn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),na(this,_),this.m=u.m}else u&&(m=String(u).match(_o))?(this.h=!1,fr(this,m[1]||"",!0),this.o=dr(m[2]||""),this.g=dr(m[3]||"",!0),es(this,m[4]),this.l=dr(m[5]||"",!0),na(this,m[6]||"",!0),this.m=dr(m[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Ei.prototype.toString=function(){var u=[],m=this.j;m&&u.push(vn(m,vo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(vn(m,vo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(vn(_,_.charAt(0)=="/"?To:tu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",vn(_,bh)),u.join("")};function ne(u){return new Ei(u)}function fr(u,m,_){u.j=_?dr(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function es(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function na(u,m,_){m instanceof Zn?(u.i=m,Eo(u.i,u.h)):(_||(m=vn(m,wh)),u.i=new Zn(m,u.h))}function xt(u,m,_){u.i.set(m,_)}function ns(u){return xt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function dr(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function vn(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Sh),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sh(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var vo=/[#\/\?@]/g,tu=/[#\?:]/g,To=/[#\?]/g,wh=/[#\?@]/g,bh=/#/g;function Zn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Tn(u){u.g||(u.g=new Map,u.h=0,u.i&&ea(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Zn.prototype,r.add=function(u,m){Tn(this),this.i=null,u=wi(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function ia(u,m){Tn(u),m=wi(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ai(u,m){return Tn(u),m=wi(u,m),u.g.has(m)}r.forEach=function(u,m){Tn(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(m,U,E,this)},this)},this)},r.na=function(){Tn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const U=u[E];for(let q=0;q<U.length;q++)_.push(m[E])}return _},r.V=function(u){Tn(this);let m=[];if(typeof u=="string")Ai(this,u)&&(m=m.concat(this.g.get(wi(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return Tn(this),this.i=null,u=wi(this,u),Ai(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Si(u,m,_){ia(u,m),0<_.length&&(u.i=null,u.g.set(wi(u,m),K(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const q=encodeURIComponent(String(E)),W=this.V(E);for(E=0;E<W.length;E++){var U=q;W[E]!==""&&(U+="="+encodeURIComponent(String(W[E]))),u.push(U)}}return this.i=u.join("&")};function wi(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Eo(u,m){m&&!u.j&&(Tn(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(ia(this,E),Si(this,U,_))},u)),u.j=m}function eu(u,m){const _=new sr;if(g.Image){const E=new Image;E.onload=x(En,_,"TestLoadImage: loaded",!0,m,E),E.onerror=x(En,_,"TestLoadImage: error",!1,m,E),E.onabort=x(En,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=x(En,_,"TestLoadImage: timeout",!1,m,E),g.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function is(u,m){const _=new sr,E=new AbortController,U=setTimeout(()=>{E.abort(),En(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(q=>{clearTimeout(U),q.ok?En(_,"TestPingServer: ok",!0,m):En(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),En(_,"TestPingServer: error",!1,m)})}function En(u,m,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function rs(){this.g=new Xe}function Wn(u,m,_){const E=_||"";try{ts(u,function(U,q){let W=U;y(U)&&(W=co(U)),m.push(E+q+"="+encodeURIComponent(W))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function mr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(mr,ho),mr.prototype.g=function(){return new bi(this.l,this.j)},mr.prototype.i=function(u){return function(){return u}}({});function bi(u,m){ye.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(bi,ye),r=bi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ti(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ao(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ao(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Jn(this):ti(this),this.readyState==3&&Ao(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Jn(this))},r.Qa=function(u){this.g&&(this.response=u,Jn(this))},r.ga=function(){this.g&&Jn(this)};function Jn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ti(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function ti(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function So(u){let m="";return wt(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Ce(u,m,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=So(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):xt(u,m,_))}function Ht(u){ye.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ht,ye);var ra=/^https?$/i,ss=["POST","PUT"];r=Ht.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?Ql(this.o):Ql(Wr),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){nu(this,q);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const q of E.keys())_.set(q,E.get(q));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),U=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(ss,m,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,W]of _)this.g.setRequestHeader(q,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{as(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){nu(this,q)}};function nu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,sa(u),ei(u)}function sa(u){u.A||(u.A=!0,Re(u,"complete"),Re(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Re(this,"complete"),Re(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),Ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},r.bb=function(){aa(this)};function aa(u){if(u.h&&typeof f<"u"&&(!u.v[1]||An(u)!=4||u.Z()!=2)){if(u.u&&An(u)==4)Kl(u.Ea,0,u);else if(Re(u,"readystatechange"),An(u)==4){u.h=!1;try{const W=u.Z();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var E;if(E=W===0){var U=String(u.D).match(_o)[1]||null;!U&&g.self&&g.self.location&&(U=g.self.location.protocol.slice(0,-1)),E=!ra.test(U?U.toLowerCase():"")}_=E}if(_)Re(u,"complete"),Re(u,"success");else{u.m=6;try{var q=2<An(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",sa(u)}}finally{ei(u)}}}}function ei(u,m){if(u.g){as(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Re(u,"ready");try{_.onreadystatechange=E}catch{}}}function as(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function An(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Qn(m)}};function iu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(u){const m={};u=(u.g&&2<=An(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(tt(u[E]))continue;var _=M(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[U]||[];m[U]=q,q.push(_)}V(m,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function oa(u){this.Aa=0,this.i=[],this.j=new sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,u),this.cb=os("retryDelaySeedMs",1e4,u),this.Wa=os("forwardChannelMaxRetries",2,u),this.wa=os("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new po(u&&u.concurrentRequestLimit),this.Da=new rs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,E){ae(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=cu(this,null,this.W),ua(this)};function wo(u){if(ru(u),u.G==3){var m=u.U++,_=ne(u.I);if(xt(_,"SID",u.K),xt(_,"RID",m),xt(_,"TYPE","terminate"),ls(u,_),m=new Xn(u,u.j,m),m.L=2,m.v=ns(ne(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=hu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Zt(m)}uu(u)}function la(u){u.g&&(us(u),u.g.cancel(),u.g=null)}function ru(u){la(u),u.u&&(g.clearTimeout(u.u),u.u=null),ca(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function ua(u){if(!yo(u.h)&&!u.s){u.s=!0;var m=u.Ga;gt||D(),ct||(gt(),ct=!0),qt.add(m,u),u.B=0}}function Ih(u,m){return Wl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=rr(L(u.Ga,u,m),Io(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Xn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=b(q),I(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=su(this,U,m),_=ne(this.I),xt(_,"RID",u),xt(_,"CVER",22),this.D&&xt(_,"X-HTTP-Session-Id",this.D),ls(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(So(q)))+"&"+m:this.m&&Ce(_,this.m,q)),hr(this.h,U),this.Ua&&xt(_,"TYPE","init"),this.P?(xt(_,"$req",m),xt(_,"SID","null"),U.T=!0,Pn(U,_,null)):Pn(U,_,m),this.G=2}}else this.G==3&&(u?bo(this,u):this.i.length==0||yo(this.h)||bo(this))};function bo(u,m){var _;m?_=m.l:_=u.U++;const E=ne(u.I);xt(E,"SID",u.K),xt(E,"RID",_),xt(E,"AID",u.T),ls(u,E),u.m&&u.o&&Ce(E,u.m,u.o),_=new Xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=su(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),hr(u.h,_),Pn(_,E,m)}function ls(u,m){u.H&&wt(u.H,function(_,E){xt(m,E,_)}),u.l&&ts({},function(_,E){xt(m,E,_)})}function su(u,m,_){_=Math.min(u.i.length,_);var E=u.l?L(u.l.Na,u.l,u):null;t:{var U=u.i;let q=-1;for(;;){const W=["count="+_];q==-1?0<_?(q=U[0].g,W.push("ofs="+q)):q=0:W.push("ofs="+q);let Vt=!0;for(let ve=0;ve<_;ve++){let kt=U[ve].g;const De=U[ve].map;if(kt-=q,0>kt)q=Math.max(0,U[ve].g-100),Vt=!1;else try{Wn(De,W,"req"+kt+"_")}catch{E&&E(De)}}if(Vt){E=W.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,E}function au(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;gt||D(),ct||(gt(),ct=!0),qt.add(m,u),u.v=0}}function Ro(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=rr(L(u.Fa,u),Io(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=rr(L(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ae(10),la(this),ou(this))};function us(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function ou(u){u.g=new Xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ne(u.qa);xt(m,"RID","rpc"),xt(m,"SID",u.K),xt(m,"AID",u.T),xt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&xt(m,"TO",u.ja),xt(m,"TYPE","xmlhttp"),ls(u,m),u.m&&u.o&&Ce(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ns(ne(m)),_.m=null,_.P=!0,Ti(_,u)}r.Za=function(){this.C!=null&&(this.C=null,la(this),Ro(this),ae(19))};function ca(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function lu(u,m){var _=null;if(u.g==m){ca(u),us(u),u.g=null;var E=2}else if(cr(u.h,m))_=m.D,_n(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;E=Zs(),Re(E,new $l(E,_)),ua(u)}else au(u);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&Ih(u,m)||E==2&&Ro(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Ri(u,5);break;case 4:Ri(u,10);break;case 3:Ri(u,6);break;default:Ri(u,2)}}}function Io(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ri(u,m){if(u.j.info("Error code "+m),m==2){var _=L(u.fb,u),E=u.Xa;const U=!E;E=new Ei(E||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||fr(E,"https"),ns(E),U?eu(E.toString(),_):is(E.toString(),_)}else ae(2);u.G=0,u.l&&u.l.sa(m),uu(u),ru(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function uu(u){if(u.G=0,u.ka=[],u.l){const m=Ze(u.h);(m.length!=0||u.i.length!=0)&&(X(u.ka,m),X(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function cu(u,m,_){var E=_ instanceof Ei?ne(_):new Ei(_);if(E.g!="")m&&(E.g=m+"."+E.g),es(E,E.s);else{var U=g.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new Ei(null);E&&fr(q,E),m&&(q.g=m),U&&es(q,U),_&&(q.l=_),E=q}return _=u.D,m=u.ya,_&&m&&xt(E,_,m),xt(E,"VER",u.la),ls(u,E),E}function hu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ht(new mr({eb:_})):new Ht(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}r=fu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ha(){}ha.prototype.g=function(u,m){return new We(u,m)};function We(u,m){ye.call(this),this.g=new oa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!tt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!tt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ni(this)}$(We,ye),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){wo(this.g)},We.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=co(u),u=_);m.i.push(new Eh(m.Ya++,u)),m.G==3&&ua(m)},We.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,We.aa.N.call(this)};function du(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(du,er);function mu(){Un.call(this),this.status=1}$(mu,Un);function ni(u){this.g=u}$(ni,fu),ni.prototype.ua=function(){Re(this.g,"a")},ni.prototype.ta=function(u){Re(this.g,new du(u))},ni.prototype.sa=function(u){Re(this.g,new mu)},ni.prototype.ra=function(){Re(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,bE=function(){return new ha},wE=function(){return Zs()},SE=yn,Yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,Sc=_e,vi.COMPLETE="complete",AE=vi,Yl.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",ye.prototype.listen=ye.prototype.K,gl=Yl,Ht.prototype.listenOnce=Ht.prototype.L,Ht.prototype.getLastError=Ht.prototype.Ka,Ht.prototype.getLastErrorCode=Ht.prototype.Ba,Ht.prototype.getStatus=Ht.prototype.Z,Ht.prototype.getResponseJson=Ht.prototype.Oa,Ht.prototype.getResponseText=Ht.prototype.oa,Ht.prototype.send=Ht.prototype.ea,Ht.prototype.setWithCredentials=Ht.prototype.Ha,EE=Ht}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const rv="@firebase/firestore",sv="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Wc("@firebase/firestore");function xa(){return zs.logLevel}function it(r,...t){if(zs.logLevel<=Dt.DEBUG){const n=t.map(Dm);zs.debug(`Firestore (${no}): ${r}`,...n)}}function Xi(r,...t){if(zs.logLevel<=Dt.ERROR){const n=t.map(Dm);zs.error(`Firestore (${no}): ${r}`,...n)}}function Qa(r,...t){if(zs.logLevel<=Dt.WARN){const n=t.map(Dm);zs.warn(`Firestore (${no}): ${r}`,...n)}}function Dm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(r="Unexpected state"){const t=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+r;throw Xi(t),new Error(t)}function jt(r,t){r||pt()}function Tt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends Kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class D1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class O1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class N1{constructor(t){this.t=t,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){jt(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new Us;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Us,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Us)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(jt(typeof s.accessToken=="string"),new RE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return jt(t===null||typeof t=="string"),new Ge(t)}}class M1{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class V1{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new M1(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class av{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k1{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,qn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){jt(this.o===void 0);const s=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const o=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new av(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(jt(typeof n.token=="string"),this.R=n.token,new av(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=U1(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=t.charAt(o[c]%62))}return s}}function Mt(r,t){return r<t?-1:r>t?1:0}function Ya(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=-62135596800,lv=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(t){return we.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*lv);return new we(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<ov)throw new st(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lv}_compareTo(t){return this.seconds===t.seconds?Mt(this.nanoseconds,t.nanoseconds):Mt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ov;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static fromTimestamp(t){return new _t(t)}static min(){return new _t(new we(0,0))}static max(){return new _t(new we(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="__name__";class ui{constructor(t,n,s){n===void 0?n=0:n>t.length&&pt(),s===void 0?s=t.length-n:s>t.length-n&&pt(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ui.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ui?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const c=ui.compareSegments(t.get(o),n.get(o));if(c!==0)return c}return Math.sign(t.length-n.length)}static compareSegments(t,n){const s=ui.isNumericId(t),o=ui.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ui.extractNumericId(t).compare(ui.extractNumericId(n)):t<n?-1:t>n?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Hr.fromString(t.substring(4,t.length-2))}}class Xt extends ui{construct(t,n,s){return new Xt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Xt(n)}static emptyPath(){return new Xt([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ui{construct(t,n,s){return new ze(t,n,s)}static isValidIdentifier(t){return P1.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uv}static keyField(){return new ze([uv])}static fromServerFormat(t){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new st(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new st(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new st(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(c(),o++)}if(c(),f)throw new st(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.path=t}static fromPath(t){return new ht(Xt.fromString(t))}static fromName(t){return new ht(Xt.fromString(t).popFirst(5))}static empty(){return new ht(Xt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Xt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Xt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ht(new Xt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=-1;function L1(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=_t.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Fr(o,ht.empty(),t)}function x1(r){return new Fr(r.readTime,r.key,Dl)}class Fr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Fr(_t.min(),ht.empty(),Dl)}static max(){return new Fr(_t.max(),ht.empty(),Dl)}}function z1(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ht.comparator(r.documentKey,t.documentKey),n!==0?n:Mt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==B1)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&pt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new G((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):G.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):G.reject(n)}static resolve(t){return new G((n,s)=>{n(t)})}static reject(t){return new G((n,s)=>{s(t)})}static waitFor(t){return new G((n,s)=>{let o=0,c=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++c,f&&c===o&&n()},p=>s(p))}),f=!0,c===o&&n()})}static or(t){let n=G.resolve(!1);for(const s of t)n=n.next(o=>o?G.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,c)=>{s.push(n.call(this,o,c))}),this.waitFor(s)}static mapArray(t,n){return new G((s,o)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next(A=>{f[y]=A,++g,g===c&&s(f)},A=>o(A))}})}static doWhile(t,n){return new G((s,o)=>{const c=()=>{t()===!0?n().next(()=>{c()},o):s()};c()})}}function H1(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}rh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=-1;function sh(r){return r==null}function zc(r){return r===0&&1/r==-1/0}function j1(r){return typeof r=="number"&&Number.isInteger(r)&&!zc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="";function F1(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=cv(t)),t=G1(r.get(n),t);return cv(t)}function G1(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case CE:n+="";break;default:n+=c}}return n}function cv(r){return r+CE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function js(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function DE(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n){this.comparator=t,this.root=n||xe.EMPTY}insert(t,n){return new te(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(t){return new te(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mc(this.root,t,this.comparator,!1)}getReverseIterator(){return new mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mc(this.root,t,this.comparator,!0)}}class mc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&o&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xe{constructor(t,n,s,o,c){this.key=t,this.value=n,this.color=s??xe.RED,this.left=o??xe.EMPTY,this.right=c??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,c){return new xe(t??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const c=s(t,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(t,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return xe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pt();const t=this.left.check();if(t!==this.right.check())throw pt();return t+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw pt()}get value(){throw pt()}get color(){throw pt()}get left(){throw pt()}get right(){throw pt()}copy(t,n,s,o,c){return this}insert(t,n,s){return new xe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t,this.data=new te(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new fv(this.data.getIterator())}getIteratorFrom(t){return new fv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new be(this.comparator);return n.data=t,n}}class fv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.fields=t,t.sort(ze.comparator)}static empty(){return new Hn([])}unionWith(t){let n=new be(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Hn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ya(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new OE("Invalid base64 string: "+c):c}}(t);return new Be(n)}static fromUint8Array(t){const n=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Mt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const K1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(r){if(jt(!!r),typeof r=="string"){let t=0;const n=K1.exec(r);if(jt(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Kr(r){return typeof r=="string"?Be.fromBase64String(r):Be.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="server_timestamp",ME="__type__",VE="__previous_value__",kE="__local_write_time__";function Nm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ME])===null||n===void 0?void 0:n.stringValue)===NE}function ah(r){const t=r.mapValue.fields[VE];return Nm(t)?ah(t):t}function Ol(r){const t=Gr(r.mapValue.fields[kE].timestampValue);return new we(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(t,n,s,o,c,f,g,p,y){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y}}const Bc="(default)";class Nl{constructor(t,n){this.projectId=t,this.database=n||Bc}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database===Bc}isEqual(t){return t instanceof Nl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="__type__",Y1="__max__",gc={mapValue:{}},PE="__vector__",qc="value";function Qr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Nm(r)?4:X1(r)?9007199254740991:$1(r)?10:11:pt()}function gi(r,t){if(r===t)return!0;const n=Qr(r);if(n!==Qr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ol(r).isEqual(Ol(t));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Gr(o.timestampValue),g=Gr(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,c){return Kr(o.bytesValue).isEqual(Kr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,c){return le(o.geoPointValue.latitude)===le(c.geoPointValue.latitude)&&le(o.geoPointValue.longitude)===le(c.geoPointValue.longitude)}(r,t);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return le(o.integerValue)===le(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=le(o.doubleValue),g=le(c.doubleValue);return f===g?zc(f)===zc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return Ya(r.arrayValue.values||[],t.arrayValue.values||[],gi);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},g=c.mapValue.fields||{};if(hv(f)!==hv(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!gi(f[p],g[p])))return!1;return!0}(r,t);default:return pt()}}function Ml(r,t){return(r.values||[]).find(n=>gi(n,t))!==void 0}function $a(r,t){if(r===t)return 0;const n=Qr(r),s=Qr(t);if(n!==s)return Mt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Mt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=le(c.integerValue||c.doubleValue),p=le(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return dv(r.timestampValue,t.timestampValue);case 4:return dv(Ol(r),Ol(t));case 5:return Mt(r.stringValue,t.stringValue);case 6:return function(c,f){const g=Kr(c),p=Kr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const A=Mt(g[y],p[y]);if(A!==0)return A}return Mt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=Mt(le(c.latitude),le(f.latitude));return g!==0?g:Mt(le(c.longitude),le(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return mv(r.arrayValue,t.arrayValue);case 10:return function(c,f){var g,p,y,A;const C=c.fields||{},L=f.fields||{},x=(g=C[qc])===null||g===void 0?void 0:g.arrayValue,$=(p=L[qc])===null||p===void 0?void 0:p.arrayValue,K=Mt(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((A=$==null?void 0:$.values)===null||A===void 0?void 0:A.length)||0);return K!==0?K:mv(x,$)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===gc.mapValue&&f===gc.mapValue)return 0;if(c===gc.mapValue)return 1;if(f===gc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=f.fields||{},A=Object.keys(y);p.sort(),A.sort();for(let C=0;C<p.length&&C<A.length;++C){const L=Mt(p[C],A[C]);if(L!==0)return L;const x=$a(g[p[C]],y[A[C]]);if(x!==0)return x}return Mt(p.length,A.length)}(r.mapValue,t.mapValue);default:throw pt()}}function dv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Mt(r,t);const n=Gr(r),s=Gr(t),o=Mt(n.seconds,s.seconds);return o!==0?o:Mt(n.nanos,s.nanos)}function mv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=$a(n[o],s[o]);if(c)return c}return Mt(n.length,s.length)}function Xa(r){return $d(r)}function $d(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Gr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Kr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ht.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=$d(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${$d(n.fields[f])}`;return o+"}"}(r.mapValue):pt()}function wc(r){switch(Qr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ah(r);return t?16+wc(t):16;case 5:return 2*r.stringValue.length;case 6:return Kr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,c)=>o+wc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return js(s.fields,(c,f)=>{o+=c.length+wc(f)}),o}(r.mapValue);default:throw pt()}}function gv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Xd(r){return!!r&&"integerValue"in r}function Mm(r){return!!r&&"arrayValue"in r}function pv(r){return!!r&&"nullValue"in r}function yv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bc(r){return!!r&&"mapValue"in r}function $1(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[UE])===null||n===void 0?void 0:n.stringValue)===PE}function El(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return js(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=El(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=El(r.arrayValue.values[n]);return t}return Object.assign({},r)}function X1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Y1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.value=t}static empty(){return new Vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!bc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=El(n)}setAll(t){let n=ze.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=El(f):o.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(t){const n=this.field(t.popLast());bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];bc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){js(n,(o,c)=>t[o]=c);for(const o of s)delete t[o]}clone(){return new Vn(El(this.value))}}function LE(r){const t=[];return js(r.fields,(n,s)=>{const o=new ze([n]);if(bc(s)){const c=LE(s.mapValue).fields;if(c.length===0)t.push(o);else for(const f of c)t.push(o.child(f))}else t.push(o)}),new Hn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,n,s,o,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Ke(t,0,_t.min(),_t.min(),_t.min(),Vn.empty(),0)}static newFoundDocument(t,n,s,o){return new Ke(t,1,n,_t.min(),s,o,0)}static newNoDocument(t,n){return new Ke(t,2,n,_t.min(),_t.min(),Vn.empty(),0)}static newUnknownDocument(t,n){return new Ke(t,3,n,_t.min(),_t.min(),Vn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n){this.position=t,this.inclusive=n}}function _v(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const c=t[o],f=r.position[o];if(c.field.isKeyField()?s=ht.comparator(ht.fromName(f.referenceValue),n.key):s=$a(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function vv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!gi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,n="asc"){this.field=t,this.dir=n}}function Z1(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{}class ge extends xE{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new J1(t,n,s):n==="array-contains"?new nC(t,s):n==="in"?new iC(t,s):n==="not-in"?new rC(t,s):n==="array-contains-any"?new sC(t,s):new ge(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new tC(t,s):new eC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($a(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison($a(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return pt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends xE{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Gn(t,n)}matches(t){return zE(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function zE(r){return r.op==="and"}function BE(r){return W1(r)&&zE(r)}function W1(r){for(const t of r.filters)if(t instanceof Gn)return!1;return!0}function Zd(r){if(r instanceof ge)return r.field.canonicalString()+r.op.toString()+Xa(r.value);if(BE(r))return r.filters.map(t=>Zd(t)).join(",");{const t=r.filters.map(n=>Zd(n)).join(",");return`${r.op}(${t})`}}function qE(r,t){return r instanceof ge?function(s,o){return o instanceof ge&&s.op===o.op&&s.field.isEqual(o.field)&&gi(s.value,o.value)}(r,t):r instanceof Gn?function(s,o){return o instanceof Gn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((c,f,g)=>c&&qE(f,o.filters[g]),!0):!1}(r,t):void pt()}function HE(r){return r instanceof ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Xa(n.value)}`}(r):r instanceof Gn?function(n){return n.op.toString()+" {"+n.getFilters().map(HE).join(" ,")+"}"}(r):"Filter"}class J1 extends ge{constructor(t,n,s){super(t,n,s),this.key=ht.fromName(s.referenceValue)}matches(t){const n=ht.comparator(t.key,this.key);return this.matchesComparison(n)}}class tC extends ge{constructor(t,n){super(t,"in",n),this.keys=jE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class eC extends ge{constructor(t,n){super(t,"not-in",n),this.keys=jE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function jE(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ht.fromName(s.referenceValue))}class nC extends ge{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Mm(n)&&Ml(n.arrayValue,this.value)}}class iC extends ge{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class rC extends ge{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class sC extends ge{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Mm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ml(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t,n=null,s=[],o=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=g,this.le=null}}function Tv(r,t=null,n=[],s=[],o=null,c=null,f=null){return new aC(r,t,n,s,o,c,f)}function Vm(r){const t=Tt(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Zd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),sh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xa(s)).join(",")),t.le=n}return t.le}function km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Z1(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!qE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!vv(r.startAt,t.startAt)&&vv(r.endAt,t.endAt)}function Wd(r){return ht.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n=null,s=[],o=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function oC(r,t,n,s,o,c,f,g){return new so(r,t,n,s,o,c,f,g)}function Um(r){return new so(r)}function Ev(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function FE(r){return r.collectionGroup!==null}function Al(r){const t=Tt(r);if(t.he===null){t.he=[];const n=new Set;for(const c of t.explicitOrderBy)t.he.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new be(ze.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.he.push(new Vl(c,s))}),n.has(ze.keyField().canonicalString())||t.he.push(new Vl(ze.keyField(),s))}return t.he}function hi(r){const t=Tt(r);return t.Pe||(t.Pe=lC(t,Al(r))),t.Pe}function lC(r,t){if(r.limitType==="F")return Tv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Vl(o.field,c)});const n=r.endAt?new Hc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Hc(r.startAt.position,r.startAt.inclusive):null;return Tv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function Jd(r,t){const n=r.filters.concat([t]);return new so(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function tm(r,t,n){return new so(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function oh(r,t){return km(hi(r),hi(t))&&r.limitType===t.limitType}function GE(r){return`${Vm(hi(r))}|lt:${r.limitType}`}function za(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>HE(o)).join(", ")}]`),sh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Xa(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Xa(o)).join(",")),`Target(${s})`}(hi(r))}; limitType=${r.limitType})`}function lh(r,t){return t.isFoundDocument()&&function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ht.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,o){for(const c of Al(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=_v(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,Al(s),o)||s.endAt&&!function(f,g,p){const y=_v(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,Al(s),o))}(r,t)}function uC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function KE(r){return(t,n)=>{let s=!1;for(const o of Al(r)){const c=cC(o,t,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function cC(r,t,n){const s=r.field.isKeyField()?ht.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),y=g.data.field(c);return p!==null&&y!==null?$a(p,y):pt()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return pt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],t))return void(o[c]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){js(this.inner,(n,s)=>{for(const[o,c]of s)t(o,c)})}isEmpty(){return DE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new te(ht.comparator);function Zi(){return hC}const QE=new te(ht.comparator);function pl(...r){let t=QE;for(const n of r)t=t.insert(n.key,n);return t}function YE(r){let t=QE;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ms(){return Sl()}function $E(){return Sl()}function Sl(){return new Fs(r=>r.toString(),(r,t)=>r.isEqual(t))}const fC=new te(ht.comparator),dC=new be(ht.comparator);function Ot(...r){let t=dC;for(const n of r)t=t.add(n);return t}const mC=new be(Mt);function gC(){return mC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zc(t)?"-0":t}}function XE(r){return{integerValue:""+r}}function pC(r,t){return j1(t)?XE(t):Pm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function yC(r,t,n){return r instanceof kl?function(o,c){const f={fields:{[ME]:{stringValue:NE},[kE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Nm(c)&&(c=ah(c)),c&&(f.fields[VE]=c),{mapValue:f}}(n,t):r instanceof Ul?WE(r,t):r instanceof Pl?JE(r,t):function(o,c){const f=ZE(o,c),g=Av(f)+Av(o.Ie);return Xd(f)&&Xd(o.Ie)?XE(g):Pm(o.serializer,g)}(r,t)}function _C(r,t,n){return r instanceof Ul?WE(r,t):r instanceof Pl?JE(r,t):n}function ZE(r,t){return r instanceof jc?function(s){return Xd(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class kl extends uh{}class Ul extends uh{constructor(t){super(),this.elements=t}}function WE(r,t){const n=t0(t);for(const s of r.elements)n.some(o=>gi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Pl extends uh{constructor(t){super(),this.elements=t}}function JE(r,t){let n=t0(t);for(const s of r.elements)n=n.filter(o=>!gi(o,s));return{arrayValue:{values:n}}}class jc extends uh{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Av(r){return le(r.integerValue||r.doubleValue)}function t0(r){return Mm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(t,n){this.field=t,this.transform=n}}function TC(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Ul&&o instanceof Ul||s instanceof Pl&&o instanceof Pl?Ya(s.elements,o.elements,gi):s instanceof jc&&o instanceof jc?gi(s.Ie,o.Ie):s instanceof kl&&o instanceof kl}(r.transform,t.transform)}class EC{constructor(t,n){this.version=t,this.transformResults=n}}class Qi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Qi}static exists(t){return new Qi(void 0,t)}static updateTime(t){return new Qi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ch{}function e0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new i0(r.key,Qi.none()):new ql(r.key,r.data,Qi.none());{const n=r.data,s=Vn.empty();let o=new be(ze.comparator);for(let c of t.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new Gs(r.key,s,new Hn(o.toArray()),Qi.none())}}function AC(r,t,n){r instanceof ql?function(o,c,f){const g=o.value.clone(),p=wv(o.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof Gs?function(o,c,f){if(!Rc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const g=wv(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(n0(o)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function wl(r,t,n,s){return r instanceof ql?function(c,f,g,p){if(!Rc(c.precondition,f))return g;const y=c.value.clone(),A=bv(c.fieldTransforms,p,f);return y.setAll(A),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Gs?function(c,f,g,p){if(!Rc(c.precondition,f))return g;const y=bv(c.fieldTransforms,p,f),A=f.data;return A.setAll(n0(c)),A.setAll(y),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(C=>C.field))}(r,t,n,s):function(c,f,g){return Rc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function SC(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),c=ZE(s.transform,o||null);c!=null&&(n===null&&(n=Vn.empty()),n.set(s.field,c))}return n||null}function Sv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ya(s,o,(c,f)=>TC(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ql extends ch{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Gs extends ch{constructor(t,n,s,o,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function n0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function wv(r,t,n){const s=new Map;jt(r.length===n.length);for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,g=t.data.field(c.field);s.set(c.field,_C(f,g,n[o]))}return s}function bv(r,t,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,yC(c,f,t))}return s}class i0 extends ch{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wC extends ch{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(t.key)&&AC(c,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=wl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=wl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=$E();return this.mutations.forEach(o=>{const c=t.get(o.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(o.key)?null:g;const p=e0(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(_t.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ot())}isEqual(t){return this.batchId===t.batchId&&Ya(this.mutations,t.mutations,(n,s)=>Sv(n,s))&&Ya(this.baseMutations,t.baseMutations,(n,s)=>Sv(n,s))}}class Lm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){jt(t.mutations.length===s.length);let o=function(){return fC}();const c=t.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new Lm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,Pt;function CC(r){switch(r){case Q.OK:return pt();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return pt()}}function r0(r){if(r===void 0)return Xi("GRPC error has no .code"),Q.UNKNOWN;switch(r){case me.OK:return Q.OK;case me.CANCELLED:return Q.CANCELLED;case me.UNKNOWN:return Q.UNKNOWN;case me.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case me.INTERNAL:return Q.INTERNAL;case me.UNAVAILABLE:return Q.UNAVAILABLE;case me.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case me.NOT_FOUND:return Q.NOT_FOUND;case me.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case me.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case me.ABORTED:return Q.ABORTED;case me.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case me.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case me.DATA_LOSS:return Q.DATA_LOSS;default:return pt()}}(Pt=me||(me={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=new Hr([4294967295,4294967295],0);function Rv(r){const t=DC().encode(r),n=new TE;return n.update(t),new Uint8Array(n.digest())}function Iv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Hr([n,s],0),new Hr([o,c],0)]}class xm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new yl(`Invalid padding: ${n}`);if(s<0)throw new yl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new yl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=Hr.fromNumber(this.Ee)}Ae(t,n,s){let o=t.add(n.multiply(Hr.fromNumber(s)));return o.compare(OC)===1&&(o=new Hr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=Rv(t),[s,o]=Iv(n);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,o,c);if(!this.Re(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new xm(c,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.Ee===0)return;const n=Rv(t),[s,o]=Iv(n);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,o,c);this.Ve(f)}}Ve(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n,s,o,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Hl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new hh(_t.min(),o,new te(Mt),Zi(),Ot())}}class Hl{constructor(t,n,s,o,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Hl(s,n,Ot(),Ot(),Ot())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,n,s,o){this.me=t,this.removedTargetIds=n,this.key=s,this.fe=o}}class s0{constructor(t,n){this.targetId=t,this.ge=n}}class a0{constructor(t,n,s=Be.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Cv{constructor(){this.pe=0,this.ye=Dv(),this.we=Be.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Ot(),n=Ot(),s=Ot();return this.ye.forEach((o,c)=>{switch(c){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:pt()}}),new Hl(this.we,this.Se,t,n,s)}Me(){this.be=!1,this.ye=Dv()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,jt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class NC{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Zi(),this.$e=pc(),this.Ke=pc(),this.Ue=new te(Mt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const s=this.He(n);switch(t.state){case 0:this.Je(n)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(t.resumeToken));break;default:pt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(t){const n=t.targetId,s=t.ge.count,o=this.Xe(n);if(o){const c=o.target;if(Wd(c))if(s===0){const f=new ht(c.path);this.ze(n,f,Ke.newNoDocument(f,_t.min()))}else jt(s===1);else{const f=this.et(n);if(f!==s){const g=this.tt(t),p=g?this.nt(g,t,f):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,g;try{f=Kr(s).toUint8Array()}catch(p){if(p instanceof OE)return Qa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new xm(f,o,c)}catch(p){return Qa(p instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.Ee===0?null:g}nt(t,n,s){return n.ge.count===s-this.st(t,n.targetId)?0:2}st(t,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(c=>{const f=this.ke.it(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.ze(n,c,null),o++)}),o}ot(t){const n=new Map;this.qe.forEach((c,f)=>{const g=this.Xe(f);if(g){if(c.current&&Wd(g.target)){const p=new ht(g.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Ke.newNoDocument(p,t))}c.ve&&(n.set(f,c.Fe()),c.Me())}});let s=Ot();this.Ke.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const o=new hh(t,n,this.Ue,this.Qe,s);return this.Qe=Zi(),this.$e=pc(),this.Ke=pc(),this.Ue=new te(Mt),o}Ge(t,n){if(!this.Je(t))return;const s=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,s){if(!this.Je(t))return;const o=this.He(t);this.ut(t,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new Cv,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new be(Mt),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new be(Mt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Cv),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function pc(){return new te(ht.comparator)}function Dv(){return new te(ht.comparator)}const MC={asc:"ASCENDING",desc:"DESCENDING"},VC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kC={and:"AND",or:"OR"};class UC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function em(r,t){return r.useProto3Json||sh(t)?t:{value:t}}function Fc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function o0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function PC(r,t){return Fc(r,t.toTimestamp())}function fi(r){return jt(!!r),_t.fromTimestamp(function(n){const s=Gr(n);return new we(s.seconds,s.nanos)}(r))}function zm(r,t){return nm(r,t).canonicalString()}function nm(r,t){const n=function(o){return new Xt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function l0(r){const t=Xt.fromString(r);return jt(d0(t)),t}function im(r,t){return zm(r.databaseId,t.path)}function Vd(r,t){const n=l0(t);if(n.get(1)!==r.databaseId.projectId)throw new st(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ht(c0(n))}function u0(r,t){return zm(r.databaseId,t)}function LC(r){const t=l0(r);return t.length===4?Xt.emptyPath():c0(t)}function rm(r){return new Xt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function c0(r){return jt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ov(r,t,n){return{name:im(r,t),fields:n.value.mapValue.fields}}function xC(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:pt()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],c=function(y,A){return y.useProto3Json?(jt(A===void 0||typeof A=="string"),Be.fromBase64String(A||"")):(jt(A===void 0||A instanceof Buffer||A instanceof Uint8Array),Be.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const A=y.code===void 0?Q.UNKNOWN:r0(y.code);return new st(A,y.message||"")}(f);n=new a0(s,o,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Vd(r,s.document.name),c=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):_t.min(),g=new Vn({mapValue:{fields:s.document.fields}}),p=Ke.newFoundDocument(o,c,f,g),y=s.targetIds||[],A=s.removedTargetIds||[];n=new Ic(y,A,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Vd(r,s.document),c=s.readTime?fi(s.readTime):_t.min(),f=Ke.newNoDocument(o,c),g=s.removedTargetIds||[];n=new Ic([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Vd(r,s.document),c=s.removedTargetIds||[];n=new Ic([],c,o,null)}else{if(!("filter"in t))return pt();{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new IC(o,c),g=s.targetId;n=new s0(g,f)}}return n}function zC(r,t){let n;if(t instanceof ql)n={update:Ov(r,t.key,t.value)};else if(t instanceof i0)n={delete:im(r,t.key)};else if(t instanceof Gs)n={update:Ov(r,t.key,t.data),updateMask:YC(t.fieldMask)};else{if(!(t instanceof wC))return pt();n={verify:im(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof kl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Ul)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Pl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof jc)return{fieldPath:f.field.canonicalString(),increment:g.Ie};throw pt()}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:PC(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:pt()}(r,t.precondition)),n}function BC(r,t){return r&&r.length>0?(jt(t!==void 0),r.map(n=>function(o,c){let f=o.updateTime?fi(o.updateTime):fi(c);return f.isEqual(_t.min())&&(f=fi(c)),new EC(f,o.transformResults||[])}(n,t))):[]}function qC(r,t){return{documents:[u0(r,t.path)]}}function HC(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=u0(r,o);const c=function(y){if(y.length!==0)return f0(Gn.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(A=>function(L){return{field:Ba(L.field),direction:GC(L.dir)}}(A))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=em(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:n,parent:o}}function jC(r){let t=LC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){jt(s===1);const A=n.from[0];A.allDescendants?o=A.collectionId:t=t.child(A.collectionId)}let c=[];n.where&&(c=function(C){const L=h0(C);return L instanceof Gn&&BE(L)?L.getFilters():[L]}(n.where));let f=[];n.orderBy&&(f=function(C){return C.map(L=>function($){return new Vl(qa($.field),function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(L))}(n.orderBy));let g=null;n.limit&&(g=function(C){let L;return L=typeof C=="object"?C.value:C,sh(L)?null:L}(n.limit));let p=null;n.startAt&&(p=function(C){const L=!!C.before,x=C.values||[];return new Hc(x,L)}(n.startAt));let y=null;return n.endAt&&(y=function(C){const L=!C.before,x=C.values||[];return new Hc(x,L)}(n.endAt)),oC(t,o,f,c,g,"F",p,y)}function FC(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function h0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qa(n.unaryFilter.field);return ge.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=qa(n.unaryFilter.field);return ge.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qa(n.unaryFilter.field);return ge.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=qa(n.unaryFilter.field);return ge.create(f,"!=",{nullValue:"NULL_VALUE"});default:return pt()}}(r):r.fieldFilter!==void 0?function(n){return ge.create(qa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Gn.create(n.compositeFilter.filters.map(s=>h0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pt()}}(n.compositeFilter.op))}(r):pt()}function GC(r){return MC[r]}function KC(r){return VC[r]}function QC(r){return kC[r]}function Ba(r){return{fieldPath:r.canonicalString()}}function qa(r){return ze.fromServerFormat(r.fieldPath)}function f0(r){return r instanceof ge?function(n){if(n.op==="=="){if(yv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NAN"}};if(pv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NAN"}};if(pv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(n.field),op:KC(n.op),value:n.value}}}(r):r instanceof Gn?function(n){const s=n.getFilters().map(o=>f0(o));return s.length===1?s[0]:{compositeFilter:{op:QC(n.op),filters:s}}}(r):pt()}function YC(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function d0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,n,s,o,c=_t.min(),f=_t.min(),g=Be.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new zr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(t){this.Tt=t}}function XC(r){const t=jC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?tm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.Tn=new WC}addToCollectionParentIndex(t,n){return this.Tn.add(n),G.resolve()}getCollectionParents(t,n){return G.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return G.resolve()}deleteFieldIndex(t,n){return G.resolve()}deleteAllFieldIndexes(t){return G.resolve()}createTargetIndexes(t,n){return G.resolve()}getDocumentsMatchingTarget(t,n){return G.resolve(null)}getIndexType(t,n){return G.resolve(0)}getFieldIndexes(t,n){return G.resolve([])}getNextCollectionGroupToUpdate(t){return G.resolve(null)}getMinOffset(t,n){return G.resolve(Fr.min())}getMinOffsetFromCollectionGroup(t,n){return G.resolve(Fr.min())}updateCollectionGroup(t,n,s){return G.resolve()}updateIndexEntries(t,n){return G.resolve()}}class WC{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new be(Xt.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new be(Xt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},m0=41943040;class sn{static withCacheSize(t){return new sn(t,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(m0,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Za(0)}static Un(){return new Za(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="LruGarbageCollector",JC=1048576;function Vv([r,t],[n,s]){const o=Mt(r,n);return o===0?Mt(t,s):o}class tD{constructor(t){this.Hn=t,this.buffer=new be(Vv),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Vv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class eD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){it(Mv,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ro(n)?it(Mv,"Ignoring IndexedDB error during garbage collection: ",n):await io(n)}await this.er(3e5)})}}class nD{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return G.resolve(rh.ae);const s=new tD(n);return this.tr.forEachTarget(t,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.tr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Nv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nv):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let s,o,c,f,g,p,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,f=Date.now(),this.nthSequenceNumber(t,o))).next(C=>(s=C,g=Date.now(),this.removeTargets(t,s,n))).next(C=>(c=C,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(C=>(y=Date.now(),xa()<=Dt.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${C} documents in `+(y-p)+`ms
Total Duration: ${y-A}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:C})))}}function iD(r,t){return new nD(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.changes=new Fs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ke.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?G.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&wl(s.mutation,o,Hn.empty(),we.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Ot()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Ot()){const o=Ms();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(c=>{let f=pl();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ms();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Ot()))}populateOverlays(t,n,s){const o=[];return s.forEach(c=>{n.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(t,o).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let c=Zi();const f=Sl(),g=function(){return Sl()}();return n.forEach((p,y)=>{const A=s.get(y.key);o.has(y.key)&&(A===void 0||A.mutation instanceof Gs)?c=c.insert(y.key,y):A!==void 0?(f.set(y.key,A.mutation.getFieldMask()),wl(A.mutation,y,A.mutation.getFieldMask(),we.now())):f.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,A)=>f.set(y,A)),n.forEach((y,A)=>{var C;return g.set(y,new sD(A,(C=f.get(y))!==null&&C!==void 0?C:null))}),g))}recalculateAndSaveOverlays(t,n){const s=Sl();let o=new te((f,g)=>f-g),c=Ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let A=s.get(p)||Hn.empty();A=g.applyToLocalView(y,A),s.set(p,A);const C=(o.get(g.batchId)||Ot()).add(p);o=o.insert(g.batchId,C)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,A=p.value,C=$E();A.forEach(L=>{if(!c.has(L)){const x=e0(n.get(L),s.get(L));x!==null&&C.set(L,x),c=c.add(L)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,C))}return G.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ht.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):FE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-c.size):G.resolve(Ms());let g=Dl,p=c;return f.next(y=>G.forEach(y,(A,C)=>(g<C.largestBatchId&&(g=C.largestBatchId),c.get(A)?G.resolve():this.remoteDocumentCache.getEntry(t,A).next(L=>{p=p.insert(A,L)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Ot())).next(A=>({batchId:g,changes:YE(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ht(n)).next(s=>{let o=pl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const c=n.collectionGroup;let f=pl();return this.indexManager.getCollectionParents(t,c).next(g=>G.forEach(g,p=>{const y=function(C,L){return new so(L,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(A=>{A.forEach((C,L)=>{f=f.insert(C,L)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,o))).next(f=>{c.forEach((p,y)=>{const A=y.getKey();f.get(A)===null&&(f=f.insert(A,Ke.newInvalidDocument(A)))});let g=pl();return f.forEach((p,y)=>{const A=c.get(p);A!==void 0&&wl(A.mutation,y,Hn.empty(),we.now()),lh(n,y)&&(g=g.insert(p,y))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return G.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:fi(o.createTime)}}(n)),G.resolve()}getNamedQuery(t,n){return G.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:XC(o.bundledQuery),readTime:fi(o.readTime)}}(n)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.overlays=new te(ht.comparator),this.Rr=new Map}getOverlay(t,n){return G.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ms();return G.forEach(n,o=>this.getOverlay(t,o).next(c=>{c!==null&&s.set(o,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,c)=>{this.Et(t,n,c)}),G.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),G.resolve()}getOverlaysForCollection(t,n,s){const o=Ms(),c=n.length+1,f=new ht(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let c=new te((y,A)=>y-A);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let A=c.get(y.largestBatchId);A===null&&(A=Ms(),c=c.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const g=Ms(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,A)=>g.set(y,A)),!(g.size()>=o)););return G.resolve(g)}Et(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new RC(n,s));let c=this.Rr.get(n);c===void 0&&(c=Ot(),this.Rr.set(n,c)),this.Rr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(t){return G.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.Vr=new be(Ve.mr),this.gr=new be(Ve.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const s=new Ve(t,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.wr(new Ve(t,n))}Sr(t,n){t.forEach(s=>this.removeReference(s,n))}br(t){const n=new ht(new Xt([])),s=new Ve(n,t),o=new Ve(n,t+1),c=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new ht(new Xt([])),s=new Ve(n,t),o=new Ve(n,t+1);let c=Ot();return this.gr.forEachInRange([s,o],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new Ve(t,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ve{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return ht.comparator(t.key,n.key)||Mt(t.Cr,n.Cr)}static pr(t,n){return Mt(t.Cr,n.Cr)||ht.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new be(Ve.mr)}checkEmpty(t){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new bC(c,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Mr=this.Mr.add(new Ve(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return G.resolve(f)}lookupMutationBatch(t,n){return G.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Nr(s),c=o<0?0:o;return G.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Om:this.Fr-1)}getAllMutationBatches(t){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ve(n,0),o=new Ve(n,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,o],f=>{const g=this.Or(f.Cr);c.push(g)}),G.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new be(Mt);return n.forEach(o=>{const c=new Ve(o,0),f=new Ve(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],g=>{s=s.add(g.Cr)})}),G.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let c=s;ht.isDocumentKey(c)||(c=c.child(""));const f=new Ve(new ht(c),0);let g=new be(Mt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Cr)),!0)},f),G.resolve(this.Br(g))}Br(t){const n=[];return t.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){jt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return G.forEach(n.mutations,o=>{const c=new Ve(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,n){const s=new Ve(n,0),o=this.Mr.firstAfterOrEqual(s);return G.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,G.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(t){this.kr=t,this.docs=function(){return new te(ht.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return G.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(t,n){let s=Zi();return n.forEach(o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Ke.newInvalidDocument(o))}),G.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let c=Zi();const f=n.path,g=new ht(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:A}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||z1(x1(A),s)<=0||(o.has(A.key)||lh(n,A))&&(c=c.insert(A.key,A.mutableCopy()))}return G.resolve(c)}getAllFromCollectionGroup(t,n,s,o){pt()}qr(t,n){return G.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new fD(this)}getSize(t){return G.resolve(this.size)}}class fD extends rD{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(s)}),G.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(t){this.persistence=t,this.Qr=new Fs(n=>Vm(n),km),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Bm,this.targetCount=0,this.Ur=Za.Kn()}forEachTarget(t,n){return this.Qr.forEach((s,o)=>n(o)),G.resolve()}getLastRemoteSnapshotVersion(t){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return G.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),G.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ur=new Za(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,G.resolve()}updateTargetData(t,n){return this.zn(n),G.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.br(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(t,n,s){let o=0;const c=[];return this.Qr.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),G.waitFor(c).next(()=>o)}getTargetCount(t){return G.resolve(this.targetCount)}getTargetData(t,n){const s=this.Qr.get(n)||null;return G.resolve(s)}addMatchingKeys(t,n,s){return this.Kr.yr(n,s),G.resolve()}removeMatchingKeys(t,n,s){this.Kr.Sr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach(f=>{c.push(o.markPotentiallyOrphaned(t,f))}),G.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.Kr.br(n),G.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Kr.vr(n);return G.resolve(s)}containsKey(t,n){return G.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new rh(0),this.zr=!1,this.zr=!0,this.jr=new uD,this.referenceDelegate=t(this),this.Hr=new dD(this),this.indexManager=new ZC,this.remoteDocumentCache=function(o){return new hD(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new $C(n),this.Yr=new oD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new lD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Wr[t.toKey()];return s||(s=new cD(n,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const o=new mD(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(c=>this.referenceDelegate.Xr(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}ei(t,n){return G.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,n)))}}class mD extends q1{constructor(t){super(),this.currentSequenceNumber=t}}class qm{constructor(t){this.persistence=t,this.ti=new Bm,this.ni=null}static ri(t){return new qm(t)}get ii(){if(this.ni)return this.ni;throw pt()}addReference(t,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),G.resolve()}removeReference(t,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),G.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),G.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,s=>{const o=ht.fromPath(s);return this.si(t,o).next(c=>{c||n.removeEntry(o,_t.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return G.or([()=>G.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Gc{constructor(t,n){this.persistence=t,this.oi=new Fs(s=>F1(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=iD(this,n)}static ri(t,n){return new Gc(t,n)}Zr(){}Xr(t){return G.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}sr(t){let n=0;return this.rr(t,s=>{n++}).next(()=>n)}rr(t,n){return G.forEach(this.oi,(s,o)=>this.ar(t,s,o).next(c=>c?G.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.qr(t,f=>this.ar(t,f,n).next(g=>{g||(s++,c.removeEntry(f,_t.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),G.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),G.resolve()}removeReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),G.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),G.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=wc(t.data.value)),n}ar(t,n,s){return G.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return G.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(t,n){let s=Ot(),o=Ot();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Hm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return jS()?8:H1(Qe())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,s,o){const c={result:null};return this.rs(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,n,o,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new gD;return this._s(t,n,f).next(g=>{if(c.result=g,this.Xi)return this.us(t,n,f,g.size)})}).next(()=>c.result)}us(t,n,s,o){return s.documentReadCount<this.es?(xa()<=Dt.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(xa()<=Dt.DEBUG&&it("QueryEngine","Query:",za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(xa()<=Dt.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,hi(n))):G.resolve())}rs(t,n){if(Ev(n))return G.resolve(null);let s=hi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=tm(n,null,"F"),s=hi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Ot(...c);return this.ns.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.cs(n,g);return this.ls(n,y,f,p.readTime)?this.rs(t,tm(n,null,"F")):this.hs(t,y,n,p)}))})))}ss(t,n,s,o){return Ev(n)||o.isEqual(_t.min())?G.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(n,c);return this.ls(n,f,s,o)?G.resolve(null):(xa()<=Dt.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),za(n)),this.hs(t,f,n,L1(o,Dl)).next(g=>g))})}cs(t,n){let s=new be(KE(t));return n.forEach((o,c)=>{lh(t,c)&&(s=s.add(c))}),s}ls(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}_s(t,n,s){return xa()<=Dt.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",za(n)),this.ns.getDocumentsMatchingQuery(t,n,Fr.min(),s)}hs(t,n,s,o){return this.ns.getDocumentsMatchingQuery(t,s,o).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="LocalStore",yD=3e8;class _D{constructor(t,n,s,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new te(Mt),this.Is=new Fs(c=>Vm(c),km),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new aD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function vD(r,t,n,s){return new _D(r,t,n,s)}async function p0(r,t){const n=Tt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(c=>(o=c,n.As(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Ot();for(const y of o){f.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}for(const y of c){g.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:g}))})})}function TD(r,t){const n=Tt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),c=n.ds.newChangeBuffer({trackRemovals:!0});return function(g,p,y,A){const C=y.batch,L=C.keys();let x=G.resolve();return L.forEach($=>{x=x.next(()=>A.getEntry(p,$)).next(K=>{const X=y.docVersions.get($);jt(X!==null),K.version.compareTo(X)<0&&(C.applyToRemoteDocument(K,y),K.isValidDocument()&&(K.setReadTime(y.commitVersion),A.addEntry(K)))})}),x.next(()=>g.mutationQueue.removeMutationBatch(p,C))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Ot();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function y0(r){const t=Tt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function ED(r,t){const n=Tt(r),s=t.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const g=[];t.targetChanges.forEach((A,C)=>{const L=o.get(C);if(!L)return;g.push(n.Hr.removeMatchingKeys(c,A.removedDocuments,C).next(()=>n.Hr.addMatchingKeys(c,A.addedDocuments,C)));let x=L.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(C)!==null?x=x.withResumeToken(Be.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):A.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(A.resumeToken,s)),o=o.insert(C,x),function(K,X,dt){return K.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=yD?!0:dt.addedDocuments.size+dt.modifiedDocuments.size+dt.removedDocuments.size>0}(L,x,A)&&g.push(n.Hr.updateTargetData(c,x))});let p=Zi(),y=Ot();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,A))}),g.push(AD(c,f,t.documentUpdates).next(A=>{p=A.Vs,y=A.fs})),!s.isEqual(_t.min())){const A=n.Hr.getLastRemoteSnapshotVersion(c).next(C=>n.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(A)}return G.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(n.Ts=o,c))}function AD(r,t,n){let s=Ot(),o=Ot();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=Zi();return n.forEach((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(_t.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):it(jm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function SD(r,t){const n=Tt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Om),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function wD(r,t){const n=Tt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,t).next(c=>c?(o=c,G.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new zr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(t,s.targetId)),s})}async function sm(r,t,n){const s=Tt(r),o=s.Ts.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ro(f))throw f;it(jm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(o.target)}function kv(r,t,n){const s=Tt(r);let o=_t.min(),c=Ot();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,A){const C=Tt(p),L=C.Is.get(A);return L!==void 0?G.resolve(C.Ts.get(L)):C.Hr.getTargetData(y,A)}(s,f,hi(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,n?o:_t.min(),n?c:Ot())).next(g=>(bD(s,uC(t),g),{documents:g,gs:c})))}function bD(r,t,n){let s=r.Es.get(t)||_t.min();n.forEach((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class Uv{constructor(){this.activeTargetIds=gC()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class RD{constructor(){this.ho=new Uv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,s){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Uv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="ConnectivityMonitor";class Lv{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){it(Pv,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){it(Pv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc=null;function am(){return yc===null?yc=function(){return 268435456+Math.round(2147483648*Math.random())}():yc++,"0x"+yc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="RestConnection",CD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DD{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Bc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(t,n,s,o,c){const f=am(),g=this.bo(t,n.toUriEncodedString());it(kd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,c),this.vo(t,g,p,s).then(y=>(it(kd,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Qa(kd,`RPC '${t}' ${f} failed with error: `,y,"url: ",g,"request:",s),y})}Co(t,n,s,o,c,f){return this.So(t,n,s,o,c)}Do(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}bo(t,n){const s=CD[t];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class ND extends DD{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,s,o){const c=am();return new Promise((f,g)=>{const p=new EE;p.setWithCredentials(!0),p.listenOnce(AE.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Sc.NO_ERROR:const A=p.getResponseJson();it(Fe,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(A)),f(A);break;case Sc.TIMEOUT:it(Fe,`RPC '${t}' ${c} timed out`),g(new st(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const C=p.getStatus();if(it(Fe,`RPC '${t}' ${c} failed with status:`,C,"response text:",p.getResponseText()),C>0){let L=p.getResponseJson();Array.isArray(L)&&(L=L[0]);const x=L==null?void 0:L.error;if(x&&x.status&&x.message){const $=function(X){const dt=X.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(dt)>=0?dt:Q.UNKNOWN}(x.status);g(new st($,x.message))}else g(new st(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else g(new st(Q.UNAVAILABLE,"Connection failed."));break;default:pt()}}finally{it(Fe,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(o);it(Fe,`RPC '${t}' ${c} sending request:`,o),p.send(n,"POST",y,s,15)})}Wo(t,n,s){const o=am(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=bE(),g=wE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const A=c.join("");it(Fe,`Creating RPC '${t}' stream ${o}: ${A}`,p);const C=f.createWebChannel(A,p);let L=!1,x=!1;const $=new OD({Fo:X=>{x?it(Fe,`Not sending because RPC '${t}' stream ${o} is closed:`,X):(L||(it(Fe,`Opening RPC '${t}' stream ${o} transport.`),C.open(),L=!0),it(Fe,`RPC '${t}' stream ${o} sending:`,X),C.send(X))},Mo:()=>C.close()}),K=(X,dt,tt)=>{X.listen(dt,ut=>{try{tt(ut)}catch(Et){setTimeout(()=>{throw Et},0)}})};return K(C,gl.EventType.OPEN,()=>{x||(it(Fe,`RPC '${t}' stream ${o} transport opened.`),$.Qo())}),K(C,gl.EventType.CLOSE,()=>{x||(x=!0,it(Fe,`RPC '${t}' stream ${o} transport closed`),$.Ko())}),K(C,gl.EventType.ERROR,X=>{x||(x=!0,Qa(Fe,`RPC '${t}' stream ${o} transport errored:`,X),$.Ko(new st(Q.UNAVAILABLE,"The operation could not be completed")))}),K(C,gl.EventType.MESSAGE,X=>{var dt;if(!x){const tt=X.data[0];jt(!!tt);const ut=tt,Et=(ut==null?void 0:ut.error)||((dt=ut[0])===null||dt===void 0?void 0:dt.error);if(Et){it(Fe,`RPC '${t}' stream ${o} received error:`,Et);const mt=Et.status;let wt=function(S){const I=me[S];if(I!==void 0)return r0(I)}(mt),V=Et.message;wt===void 0&&(wt=Q.INTERNAL,V="Unknown error status: "+mt+" with message "+Et.message),x=!0,$.Ko(new st(wt,V)),C.close()}else it(Fe,`RPC '${t}' stream ${o} received:`,tt),$.Uo(tt)}}),K(g,SE.STAT_EVENT,X=>{X.stat===Yd.PROXY?it(Fe,`RPC '${t}' stream ${o} detected buffering proxy`):X.stat===Yd.NOPROXY&&it(Fe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.$o()},0),$}}function Ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(r){return new UC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t,n,s=1e3,o=1.5,c=6e4){this.Ti=t,this.timerId=n,this.Go=s,this.zo=o,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&it("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="PersistentStream";class v0{constructor(t,n,s,o,c,f,g,p){this.Ti=t,this.n_=s,this.r_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new _0(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{t(()=>{const o=new st(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(t,n){const s=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return it(xv,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(it(xv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MD extends v0{constructor(t,n,s,o,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=xC(this.serializer,t),s=function(c){if(!("targetChange"in c))return _t.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?_t.min():f.readTime?fi(f.readTime):_t.min()}(t);return this.listener.p_(n,s)}y_(t){const n={};n.database=rm(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=Wd(p)?{documents:qC(c,p)}:{query:HC(c,p).ht},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=o0(c,f.resumeToken);const y=em(c,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(_t.min())>0){g.readTime=Fc(c,f.snapshotVersion.toTimestamp());const y=em(c,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=FC(this.serializer,t);s&&(n.labels=s),this.I_(n)}w_(t){const n={};n.database=rm(this.serializer),n.removeTarget=t,this.I_(n)}}class VD extends v0{constructor(t,n,s,o,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return jt(!!t.streamToken),this.lastStreamToken=t.streamToken,jt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){jt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=BC(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.v_(s,n)}C_(){const t={};t.database=rm(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>zC(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{}class UD extends kD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new st(Q.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.So(t,nm(n,s),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new st(Q.UNKNOWN,c.toString())})}Co(t,n,s,o,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Co(t,nm(n,s),o,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new st(Q.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class PD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Xi(n),this.N_=!1):it("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class LD{constructor(t,n,s,o,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{Ks(this)&&(it(Bs,"Restarting streams for network reachability change."),await async function(p){const y=Tt(p);y.W_.add(4),await jl(y),y.j_.set("Unknown"),y.W_.delete(4),await dh(y)}(this))})}),this.j_=new PD(s,o)}}async function dh(r){if(Ks(r))for(const t of r.G_)await t(!0)}async function jl(r){for(const t of r.G_)await t(!1)}function T0(r,t){const n=Tt(r);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),Qm(n)?Km(n):ao(n).c_()&&Gm(n,t))}function Fm(r,t){const n=Tt(r),s=ao(n);n.U_.delete(t),s.c_()&&E0(n,t),n.U_.size===0&&(s.c_()?s.P_():Ks(n)&&n.j_.set("Unknown"))}function Gm(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_t.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ao(r).y_(t)}function E0(r,t){r.H_.Ne(t),ao(r).w_(t)}function Km(r){r.H_=new NC({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),ao(r).start(),r.j_.B_()}function Qm(r){return Ks(r)&&!ao(r).u_()&&r.U_.size>0}function Ks(r){return Tt(r).W_.size===0}function A0(r){r.H_=void 0}async function xD(r){r.j_.set("Online")}async function zD(r){r.U_.forEach((t,n)=>{Gm(r,t)})}async function BD(r,t){A0(r),Qm(r)?(r.j_.q_(t),Km(r)):r.j_.set("Unknown")}async function qD(r,t,n){if(r.j_.set("Online"),t instanceof a0&&t.state===2&&t.cause)try{await async function(o,c){const f=c.cause;for(const g of c.targetIds)o.U_.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.U_.delete(g),o.H_.removeTarget(g))}(r,t)}catch(s){it(Bs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Kc(r,s)}else if(t instanceof Ic?r.H_.We(t):t instanceof s0?r.H_.Ze(t):r.H_.je(t),!n.isEqual(_t.min()))try{const s=await y0(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.H_.ot(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const A=c.U_.get(y);A&&c.U_.set(y,A.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const A=c.U_.get(p);if(!A)return;c.U_.set(p,A.withResumeToken(Be.EMPTY_BYTE_STRING,A.snapshotVersion)),E0(c,p);const C=new zr(A.target,p,y,A.sequenceNumber);Gm(c,C)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){it(Bs,"Failed to raise snapshot:",s),await Kc(r,s)}}async function Kc(r,t,n){if(!ro(t))throw t;r.W_.add(1),await jl(r),r.j_.set("Offline"),n||(n=()=>y0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{it(Bs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await dh(r)})}function S0(r,t){return t().catch(n=>Kc(r,n,t))}async function mh(r){const t=Tt(r),n=Yr(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:Om;for(;HD(t);)try{const o=await SD(t.localStore,s);if(o===null){t.K_.length===0&&n.P_();break}s=o.batchId,jD(t,o)}catch(o){await Kc(t,o)}w0(t)&&b0(t)}function HD(r){return Ks(r)&&r.K_.length<10}function jD(r,t){r.K_.push(t);const n=Yr(r);n.c_()&&n.S_&&n.b_(t.mutations)}function w0(r){return Ks(r)&&!Yr(r).u_()&&r.K_.length>0}function b0(r){Yr(r).start()}async function FD(r){Yr(r).C_()}async function GD(r){const t=Yr(r);for(const n of r.K_)t.b_(n.mutations)}async function KD(r,t,n){const s=r.K_.shift(),o=Lm.from(s,t,n);await S0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await mh(r)}async function QD(r,t){t&&Yr(r).S_&&await async function(s,o){if(function(f){return CC(f)&&f!==Q.ABORTED}(o.code)){const c=s.K_.shift();Yr(s).h_(),await S0(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await mh(s)}}(r,t),w0(r)&&b0(r)}async function zv(r,t){const n=Tt(r);n.asyncQueue.verifyOperationInProgress(),it(Bs,"RemoteStore received new credentials");const s=Ks(n);n.W_.add(3),await jl(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await dh(n)}async function YD(r,t){const n=Tt(r);t?(n.W_.delete(2),await dh(n)):t||(n.W_.add(2),await jl(n),n.j_.set("Unknown"))}function ao(r){return r.J_||(r.J_=function(n,s,o){const c=Tt(n);return c.M_(),new MD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{xo:xD.bind(null,r),No:zD.bind(null,r),Lo:BD.bind(null,r),p_:qD.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Qm(r)?Km(r):r.j_.set("Unknown")):(await r.J_.stop(),A0(r))})),r.J_}function Yr(r){return r.Y_||(r.Y_=function(n,s,o){const c=Tt(n);return c.M_(),new VD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:FD.bind(null,r),Lo:QD.bind(null,r),D_:GD.bind(null,r),v_:KD.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await mh(r)):(await r.Y_.stop(),r.K_.length>0&&(it(Bs,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,n,s,o,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,c){const f=Date.now()+s,g=new Ym(t,n,f,o,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $m(r,t){if(Xi("AsyncQueue",`${t}: ${r}`),ro(r))return new st(Q.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{static emptySet(t){return new Ga(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ht.comparator(n.key,s.key):(n,s)=>ht.comparator(n.key,s.key),this.keyedMap=pl(),this.sortedSet=new te(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ga)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ga;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.Z_=new te(ht.comparator)}track(t){const n=t.doc.key,s=this.Z_.get(n);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(n):t.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):pt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,s)=>{t.push(s)}),t}}class Wa{constructor(t,n,s,o,c,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Wa(t,n,Ga.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class XD{constructor(){this.queries=qv(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Tt(n),c=o.queries;o.queries=qv(),c.forEach((f,g)=>{for(const p of g.ta)p.onError(s)})})(this,new st(Q.ABORTED,"Firestore shutting down"))}}function qv(){return new Fs(r=>GE(r),oh)}async function ZD(r,t){const n=Tt(r);let s=3;const o=t.query;let c=n.queries.get(o);c?!c.na()&&t.ra()&&(s=2):(c=new $D,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await n.onListen(o,!0);break;case 1:c.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=$m(f,`Initialization of query '${za(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,c),c.ta.push(t),t.sa(n.onlineState),c.ea&&t.oa(c.ea)&&Xm(n)}async function WD(r,t){const n=Tt(r),s=t.query;let o=3;const c=n.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?o=t.ra()?0:1:!c.na()&&t.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function JD(r,t){const n=Tt(r);let s=!1;for(const o of t){const c=o.query,f=n.queries.get(c);if(f){for(const g of f.ta)g.oa(o)&&(s=!0);f.ea=o}}s&&Xm(n)}function tO(r,t,n){const s=Tt(r),o=s.queries.get(t);if(o)for(const c of o.ta)c.onError(n);s.queries.delete(t)}function Xm(r){r.ia.forEach(t=>{t.next()})}var om,Hv;(Hv=om||(om={}))._a="default",Hv.Cache="cache";class eO{constructor(t,n,s){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Wa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Wa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==om.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(t){this.key=t}}class I0{constructor(t){this.key=t}}class nO{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ot(),this.mutatedKeys=Ot(),this.ya=KE(t),this.wa=new Ga(this.ya)}get Sa(){return this.fa}ba(t,n){const s=n?n.Da:new Bv,o=n?n.wa:this.wa;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((A,C)=>{const L=o.get(A),x=lh(this.query,C)?C:null,$=!!L&&this.mutatedKeys.has(L.key),K=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let X=!1;L&&x?L.data.isEqual(x.data)?$!==K&&(s.track({type:3,doc:x}),X=!0):this.va(L,x)||(s.track({type:2,doc:x}),X=!0,(p&&this.ya(x,p)>0||y&&this.ya(x,y)<0)&&(g=!0)):!L&&x?(s.track({type:0,doc:x}),X=!0):L&&!x&&(s.track({type:1,doc:L}),X=!0,(p||y)&&(g=!0)),X&&(x?(f=f.add(x),c=K?c.add(A):c.delete(A)):(f=f.delete(A),c=c.delete(A)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const A=this.query.limitType==="F"?f.last():f.first();f=f.delete(A.key),c=c.delete(A.key),s.track({type:1,doc:A})}return{wa:f,Da:s,ls:g,mutatedKeys:c}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((A,C)=>function(x,$){const K=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pt()}};return K(x)-K($)}(A.type,C.type)||this.ya(A.doc,C.doc)),this.Ca(s),o=o!=null&&o;const g=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new Wa(this.query,t.wa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:g}:{Ma:g}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Bv,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Ot(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return t.forEach(s=>{this.pa.has(s)||n.push(new I0(s))}),this.pa.forEach(s=>{t.has(s)||n.push(new R0(s))}),n}Oa(t){this.fa=t.gs,this.pa=Ot();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Wa.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Zm="SyncEngine";class iO{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class rO{constructor(t){this.key=t,this.Ba=!1}}class sO{constructor(t,n,s,o,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Fs(g=>GE(g),oh),this.qa=new Map,this.Qa=new Set,this.$a=new te(ht.comparator),this.Ka=new Map,this.Ua=new Bm,this.Wa={},this.Ga=new Map,this.za=Za.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function aO(r,t,n=!0){const s=V0(r);let o;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.Na()):o=await C0(s,t,n,!0),o}async function oO(r,t){const n=V0(r);await C0(n,t,!0,!1)}async function C0(r,t,n,s){const o=await wD(r.localStore,hi(t)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await lO(r,t,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&T0(r.remoteStore,o),g}async function lO(r,t,n,s,o){r.Ha=(C,L,x)=>async function(K,X,dt,tt){let ut=X.view.ba(dt);ut.ls&&(ut=await kv(K.localStore,X.query,!1).then(({documents:V})=>X.view.ba(V,ut)));const Et=tt&&tt.targetChanges.get(X.targetId),mt=tt&&tt.targetMismatches.get(X.targetId)!=null,wt=X.view.applyChanges(ut,K.isPrimaryClient,Et,mt);return Fv(K,X.targetId,wt.Ma),wt.snapshot}(r,C,L,x);const c=await kv(r.localStore,t,!0),f=new nO(t,c.gs),g=f.ba(c.documents),p=Hl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);Fv(r,n,y.Ma);const A=new iO(t,n,f);return r.ka.set(t,A),r.qa.has(n)?r.qa.get(n).push(t):r.qa.set(n,[t]),y.snapshot}async function uO(r,t,n){const s=Tt(r),o=s.ka.get(t),c=s.qa.get(o.targetId);if(c.length>1)return s.qa.set(o.targetId,c.filter(f=>!oh(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Fm(s.remoteStore,o.targetId),lm(s,o.targetId)}).catch(io)):(lm(s,o.targetId),await sm(s.localStore,o.targetId,!0))}async function cO(r,t){const n=Tt(r),s=n.ka.get(t),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Fm(n.remoteStore,s.targetId))}async function hO(r,t,n){const s=_O(r);try{const o=await function(f,g){const p=Tt(f),y=we.now(),A=g.reduce((x,$)=>x.add($.key),Ot());let C,L;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let $=Zi(),K=Ot();return p.ds.getEntries(x,A).next(X=>{$=X,$.forEach((dt,tt)=>{tt.isValidDocument()||(K=K.add(dt))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,$)).next(X=>{C=X;const dt=[];for(const tt of g){const ut=SC(tt,C.get(tt.key).overlayedDocument);ut!=null&&dt.push(new Gs(tt.key,ut,LE(ut.value.mapValue),Qi.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,dt,g)}).next(X=>{L=X;const dt=X.applyToLocalDocumentSet(C,K);return p.documentOverlayCache.saveOverlays(x,X.batchId,dt)})}).then(()=>({batchId:L.batchId,changes:YE(C)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new te(Mt)),y=y.insert(g,p),f.Wa[f.currentUser.toKey()]=y}(s,o.batchId,n),await Fl(s,o.changes),await mh(s.remoteStore)}catch(o){const c=$m(o,"Failed to persist write");n.reject(c)}}async function D0(r,t){const n=Tt(r);try{const s=await ED(n.localStore,t);t.targetChanges.forEach((o,c)=>{const f=n.Ka.get(c);f&&(jt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?jt(f.Ba):o.removedDocuments.size>0&&(jt(f.Ba),f.Ba=!1))}),await Fl(n,s,t)}catch(s){await io(s)}}function jv(r,t,n){const s=Tt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((c,f)=>{const g=f.view.sa(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=Tt(f);p.onlineState=g;let y=!1;p.queries.forEach((A,C)=>{for(const L of C.ta)L.sa(g)&&(y=!0)}),y&&Xm(p)}(s.eventManager,t),o.length&&s.La.p_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function fO(r,t,n){const s=Tt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Ka.get(t),c=o&&o.key;if(c){let f=new te(ht.comparator);f=f.insert(c,Ke.newNoDocument(c,_t.min()));const g=Ot().add(c),p=new hh(_t.min(),new Map,new te(Mt),f,g);await D0(s,p),s.$a=s.$a.remove(c),s.Ka.delete(t),Wm(s)}else await sm(s.localStore,t,!1).then(()=>lm(s,t,n)).catch(io)}async function dO(r,t){const n=Tt(r),s=t.batch.batchId;try{const o=await TD(n.localStore,t);N0(n,s,null),O0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fl(n,o)}catch(o){await io(o)}}async function mO(r,t,n){const s=Tt(r);try{const o=await function(f,g){const p=Tt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let A;return p.mutationQueue.lookupMutationBatch(y,g).next(C=>(jt(C!==null),A=C.keys(),p.mutationQueue.removeMutationBatch(y,C))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,A,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A)).next(()=>p.localDocuments.getDocuments(y,A))})}(s.localStore,t);N0(s,t,n),O0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Fl(s,o)}catch(o){await io(o)}}function O0(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function N0(r,t,n){const s=Tt(r);let o=s.Wa[s.currentUser.toKey()];if(o){const c=o.get(t);c&&(n?c.reject(n):c.resolve(),o=o.remove(t)),s.Wa[s.currentUser.toKey()]=o}}function lm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(t),r.isPrimaryClient&&r.Ua.br(t).forEach(s=>{r.Ua.containsKey(s)||M0(r,s)})}function M0(r,t){r.Qa.delete(t.path.canonicalString());const n=r.$a.get(t);n!==null&&(Fm(r.remoteStore,n),r.$a=r.$a.remove(t),r.Ka.delete(n),Wm(r))}function Fv(r,t,n){for(const s of n)s instanceof R0?(r.Ua.addReference(s.key,t),gO(r,s)):s instanceof I0?(it(Zm,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||M0(r,s.key)):pt()}function gO(r,t){const n=t.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(it(Zm,"New document in limbo: "+n),r.Qa.add(s),Wm(r))}function Wm(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const n=new ht(Xt.fromString(t)),s=r.za.next();r.Ka.set(s,new rO(n)),r.$a=r.$a.insert(n,s),T0(r.remoteStore,new zr(hi(Um(n.path)),s,"TargetPurposeLimboResolution",rh.ae))}}async function Fl(r,t,n){const s=Tt(r),o=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((g,p)=>{f.push(s.Ha(p,t,n).then(y=>{var A;if((y||n)&&s.isPrimaryClient){const C=y?!y.fromCache:(A=n==null?void 0:n.targetChanges.get(p.targetId))===null||A===void 0?void 0:A.current;s.sharedClientState.updateQueryState(p.targetId,C?"current":"not-current")}if(y){o.push(y);const C=Hm.Yi(p.targetId,y);c.push(C)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,y){const A=Tt(p);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>G.forEach(y,L=>G.forEach(L.Hi,x=>A.persistence.referenceDelegate.addReference(C,L.targetId,x)).next(()=>G.forEach(L.Ji,x=>A.persistence.referenceDelegate.removeReference(C,L.targetId,x)))))}catch(C){if(!ro(C))throw C;it(jm,"Failed to update sequence numbers: "+C)}for(const C of y){const L=C.targetId;if(!C.fromCache){const x=A.Ts.get(L),$=x.snapshotVersion,K=x.withLastLimboFreeSnapshotVersion($);A.Ts=A.Ts.insert(L,K)}}}(s.localStore,c))}async function pO(r,t){const n=Tt(r);if(!n.currentUser.isEqual(t)){it(Zm,"User change. New user:",t.toKey());const s=await p0(n.localStore,t);n.currentUser=t,function(c,f){c.Ga.forEach(g=>{g.forEach(p=>{p.reject(new st(Q.CANCELLED,f))})}),c.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fl(n,s.Rs)}}function yO(r,t){const n=Tt(r),s=n.Ka.get(t);if(s&&s.Ba)return Ot().add(s.key);{let o=Ot();const c=n.qa.get(t);if(!c)return o;for(const f of c){const g=n.ka.get(f);o=o.unionWith(g.view.Sa)}return o}}function V0(r){const t=Tt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=D0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fO.bind(null,t),t.La.p_=JD.bind(null,t.eventManager),t.La.Ja=tO.bind(null,t.eventManager),t}function _O(r){const t=Tt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mO.bind(null,t),t}class Qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fh(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return vD(this.persistence,new pD,t.initialUser,this.serializer)}Xa(t){return new g0(qm.ri,this.serializer)}Za(t){return new RD}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qc.provider={build:()=>new Qc};class vO extends Qc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){jt(this.persistence.referenceDelegate instanceof Gc);const s=this.persistence.referenceDelegate.garbageCollector;return new eD(s,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new g0(s=>Gc.ri(s,n),this.serializer)}}class um{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pO.bind(null,this.syncEngine),await YD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new XD}()}createDatastore(t){const n=fh(t.databaseInfo.databaseId),s=function(c){return new ND(c)}(t.databaseInfo);return function(c,f,g,p){return new UD(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,c,f,g){return new LD(s,o,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>jv(this.syncEngine,n,0),function(){return Lv.D()?new Lv:new ID}())}createSyncEngine(t,n){return function(o,c,f,g,p,y,A){const C=new sO(o,c,f,g,p,y);return A&&(C.ja=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const c=Tt(o);it(Bs,"RemoteStore shutting down."),c.W_.add(5),await jl(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}um.provider={build:()=>new um};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="FirestoreClient";class EO{constructor(t,n,s,o,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ge.UNAUTHENTICATED,this.clientId=IE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{it($r,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(it($r,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=$m(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Pd(r,t){r.asyncQueue.verifyOperationInProgress(),it($r,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await p0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Gv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await AO(r);it($r,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>zv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>zv(t.remoteStore,o)),r._onlineComponents=t}async function AO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it($r,"Using user provided OfflineComponentProvider");try{await Pd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Qa("Error using user provided cache. Falling back to memory cache: "+n),await Pd(r,new Qc)}}else it($r,"Using default OfflineComponentProvider"),await Pd(r,new vO(void 0));return r._offlineComponents}async function k0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it($r,"Using user provided OnlineComponentProvider"),await Gv(r,r._uninitializedComponentsProvider._online)):(it($r,"Using default OnlineComponentProvider"),await Gv(r,new um))),r._onlineComponents}function SO(r){return k0(r).then(t=>t.syncEngine)}async function Kv(r){const t=await k0(r),n=t.eventManager;return n.onListen=aO.bind(null,t.syncEngine),n.onUnlisten=uO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=oO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=cO.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(r,t,n){if(!n)throw new st(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function wO(r,t,n,s){if(t===!0&&s===!0)throw new st(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Yv(r){if(!ht.isDocumentKey(r))throw new st(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $v(r){if(ht.isDocumentKey(r))throw new st(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function gh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":pt()}function bl(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(r);throw new st(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firestore.googleapis.com",Xv=!0;class Zv{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new st(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=L0,this.ssl=Xv}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Xv;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=m0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<JC)throw new st(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=U0((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ph{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zv(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new D1;switch(s.type){case"firstParty":return new V1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Qv.get(n);s&&(it("ComponentProvider","Removing Datastore"),Qv.delete(n),s.terminate())}(this),Promise.resolve()}}function bO(r,t,n,s={}){var o;const c=(r=bl(r,ph))._getSettings(),f=`${t}:${n}`;if(c.host!==L0&&c.host!==f&&Qa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},c),{host:f,ssl:!1})),s.mockUserToken){let g,p;if(typeof s.mockUserToken=="string")g=s.mockUserToken,p=Ge.MOCK_USER;else{g=LS(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new st(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ge(y)}r._authCredentials=new O1(new RE(g,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Qs(this.firestore,t,this._query)}}class gn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gn(this.firestore,t,this._key)}}class jr extends Qs{constructor(t,n,s){super(t,n,Um(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gn(this.firestore,null,new ht(t))}withConverter(t){return new jr(this.firestore,t,this._path)}}function RO(r,t,...n){if(r=Ye(r),P0("collection","path",t),r instanceof ph){const s=Xt.fromString(t,...n);return $v(s),new jr(r,null,s)}{if(!(r instanceof gn||r instanceof jr))throw new st(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Xt.fromString(t,...n));return $v(s),new jr(r.firestore,null,s)}}function IO(r,t,...n){if(r=Ye(r),arguments.length===1&&(t=IE.newId()),P0("doc","path",t),r instanceof ph){const s=Xt.fromString(t,...n);return Yv(s),new gn(r,null,new ht(s))}{if(!(r instanceof gn||r instanceof jr))throw new st(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Xt.fromString(t,...n));return Yv(s),new gn(r.firestore,r instanceof jr?r.converter:null,new ht(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="AsyncQueue";class Jv{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new _0(this,"async_queue_retry"),this.Su=()=>{const s=Ud();s&&it(Wv,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=t;const n=Ud();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Us;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!ro(t))throw t;it(Wv,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let g=f.message||"";return f.stack&&(g=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),g}(s);throw Xi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(t,n,s){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=Ym.createAndSchedule(this,t,n,s,c=>this.Fu(c));return this.fu.push(o),o}Du(){this.gu&&pt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}function tT(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1}(r,["next","error","complete"])}class Yc extends ph{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new Jv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Jv(t),this._firestoreClient=void 0,await t}}}function CO(r,t){const n=typeof r=="object"?r:fm(),s=typeof r=="string"?r:Bc,o=Hs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=US("firestore");c&&bO(o,...c)}return o}function x0(r){if(r._terminated)throw new st(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||DO(r),r._firestoreClient}function DO(r){var t,n,s;const o=r._freezeSettings(),c=function(g,p,y,A){return new Q1(g,p,y,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,U0(A.experimentalLongPollingOptions),A.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new EO(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ja(Be.fromBase64String(t))}catch(n){throw new st(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ja(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Mt(this._lat,t._lat)||Mt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=/^__.*__$/;class NO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Gs(t,this.data,this.fieldMask,n,this.fieldTransforms):new ql(t,this.data,n,this.fieldTransforms)}}function z0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pt()}}class ig{constructor(t,n,s,o,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ig(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.$u(t),o}Ku(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return $c(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(z0(this.Lu)&&OO.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class MO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||fh(t)}ju(t,n,s,o=!1){return new ig({Lu:t,methodName:n,zu:s,path:ze.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B0(r){const t=r._freezeSettings(),n=fh(r._databaseId);return new MO(r._databaseId,!!t.ignoreUndefinedProperties,n)}function VO(r,t,n,s,o,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,n,o);j0("Data must be an object, but it was:",f,s);const g=q0(s,f);let p,y;if(c.merge)p=new Hn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const A=[];for(const C of c.mergeFields){const L=UO(t,C,n);if(!f.contains(L))throw new st(Q.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);LO(A,L)||A.push(L)}p=new Hn(A),y=f.fieldTransforms.filter(C=>p.covers(C.field))}else p=null,y=f.fieldTransforms;return new NO(new Vn(g),p,y)}class rg extends tg{_toFieldTransform(t){return new vC(t.path,new kl)}isEqual(t){return t instanceof rg}}function kO(r,t,n,s=!1){return sg(n,r.ju(s?4:3,t))}function sg(r,t){if(H0(r=Ye(r)))return j0("Unsupported field value:",t,r),q0(r,t);if(r instanceof tg)return function(s,o){if(!z0(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,o){const c=[];let f=0;for(const g of s){let p=sg(g,o.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,o){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pC(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=we.fromDate(s);return{timestampValue:Fc(o.serializer,c)}}if(s instanceof we){const c=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fc(o.serializer,c)}}if(s instanceof eg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ja)return{bytesValue:o0(o.serializer,s._byteString)};if(s instanceof gn){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:zm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ng)return function(f,g){return{mapValue:{fields:{[UE]:{stringValue:PE},[qc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.Wu("VectorValues must only contain numeric values.");return Pm(g.serializer,y)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${gh(s)}`)}(r,t)}function q0(r,t){const n={};return DE(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):js(r,(s,o)=>{const c=sg(o,t.qu(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function H0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof eg||r instanceof Ja||r instanceof gn||r instanceof tg||r instanceof ng)}function j0(r,t,n){if(!H0(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=gh(n);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function UO(r,t,n){if((t=Ye(t))instanceof Jm)return t._internalPath;if(typeof t=="string")return F0(r,t);throw $c("Field path arguments must be of type string or ",r,!1,void 0,n)}const PO=new RegExp("[~\\*/\\[\\]]");function F0(r,t,n){if(t.search(PO)>=0)throw $c(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Jm(...t.split("."))._internalPath}catch{throw $c(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function $c(r,t,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new st(Q.INVALID_ARGUMENT,g+r+p)}function LO(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(t,n,s,o,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xO extends G0{data(){return super.data()}}function yh(r,t){return typeof t=="string"?F0(r,t):t instanceof Jm?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ag{}class K0 extends ag{}function BO(r,t,...n){let s=[];t instanceof ag&&s.push(t),s=s.concat(n),function(c){const f=c.filter(p=>p instanceof og).length,g=c.filter(p=>p instanceof _h).length;if(f>1||f>0&&g>0)throw new st(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class _h extends K0{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new _h(t,n,s)}_apply(t){const n=this._parse(t);return Q0(t._query,n),new Qs(t.firestore,t.converter,Jd(t._query,n))}_parse(t){const n=B0(t.firestore);return function(c,f,g,p,y,A,C){let L;if(y.isKeyField()){if(A==="array-contains"||A==="array-contains-any")throw new st(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${A}' queries on documentId().`);if(A==="in"||A==="not-in"){nT(C,A);const $=[];for(const K of C)$.push(eT(p,c,K));L={arrayValue:{values:$}}}else L=eT(p,c,C)}else A!=="in"&&A!=="not-in"&&A!=="array-contains-any"||nT(C,A),L=kO(g,f,C,A==="in"||A==="not-in");return ge.create(y,A,L)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function qO(r,t,n){const s=t,o=yh("where",r);return _h._create(o,s,n)}class og extends ag{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new og(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Gn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,c){let f=o;const g=c.getFlattenedFilters();for(const p of g)Q0(f,p),f=Jd(f,p)}(t._query,n),new Qs(t.firestore,t.converter,Jd(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lg extends K0{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new lg(t,n)}_apply(t){const n=function(o,c,f){if(o.startAt!==null)throw new st(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new st(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vl(c,f)}(t._query,this._field,this._direction);return new Qs(t.firestore,t.converter,function(o,c){const f=o.explicitOrderBy.concat([c]);return new so(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,n))}}function HO(r,t="asc"){const n=t,s=yh("orderBy",r);return lg._create(s,n)}function eT(r,t,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new st(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FE(t)&&n.indexOf("/")!==-1)throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Xt.fromString(n));if(!ht.isDocumentKey(s))throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gv(r,new ht(s))}if(n instanceof gn)return gv(r,n._key);throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function nT(r,t){if(!Array.isArray(r)||r.length===0)throw new st(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Q0(r,t){const n=function(o,c){for(const f of o)for(const g of f.getFlattenedFilters())if(c.indexOf(g.op)>=0)return g.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new st(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new st(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class jO{convertValue(t,n="none"){switch(Qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return le(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Kr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw pt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return js(t,(o,c)=>{s[o]=this.convertValue(c,n)}),s}convertVectorValue(t){var n,s,o;const c=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[qc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>le(f.doubleValue));return new ng(c)}convertGeoPoint(t){return new eg(le(t.latitude),le(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ah(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ol(t));default:return null}}convertTimestamp(t){const n=Gr(t);return new we(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Xt.fromString(t);jt(d0(s));const o=new Nl(s.get(1),s.get(3)),c=new ht(s.popFirst(5));return o.isEqual(n)||Xi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Y0 extends G0{constructor(t,n,s,o,c,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(yh("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cc extends Y0{data(t={}){return super.data(t)}}class GO{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new _l(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Cc(this._firestore,this._userDataWriter,s.key,s,new _l(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Cc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new _l(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Cc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new _l(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,A=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),A=f.indexOf(g.doc.key)),{type:KO(g.type),doc:p,oldIndex:y,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pt()}}class $0 extends jO{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ja(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function QO(r,t){const n=bl(r.firestore,Yc),s=IO(r),o=FO(r.converter,t);return $O(n,[VO(B0(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Qi.exists(!1))]).then(()=>s)}function YO(r,...t){var n,s,o;r=Ye(r);let c={includeMetadataChanges:!1,source:"default"},f=0;typeof t[f]!="object"||tT(t[f])||(c=t[f],f++);const g={includeMetadataChanges:c.includeMetadataChanges,source:c.source};if(tT(t[f])){const C=t[f];t[f]=(n=C.next)===null||n===void 0?void 0:n.bind(C),t[f+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),t[f+2]=(o=C.complete)===null||o===void 0?void 0:o.bind(C)}let p,y,A;if(r instanceof gn)y=bl(r.firestore,Yc),A=Um(r._key.path),p={next:C=>{t[f]&&t[f](XO(y,r,C))},error:t[f+1],complete:t[f+2]};else{const C=bl(r,Qs);y=bl(C.firestore,Yc),A=C._query;const L=new $0(y);p={next:x=>{t[f]&&t[f](new GO(y,L,C,x))},error:t[f+1],complete:t[f+2]},zO(r._query)}return function(L,x,$,K){const X=new TO(K),dt=new eO(x,X,$);return L.asyncQueue.enqueueAndForget(async()=>ZD(await Kv(L),dt)),()=>{X.su(),L.asyncQueue.enqueueAndForget(async()=>WD(await Kv(L),dt))}}(x0(y),A,g,p)}function $O(r,t){return function(s,o){const c=new Us;return s.asyncQueue.enqueueAndForget(async()=>hO(await SO(s),o,c)),c.promise}(x0(r),t)}function XO(r,t,n){const s=n.docs.get(t._key),o=new $0(r);return new Y0(r,o,t._key,s,new _l(n.hasPendingWrites,n.fromCache),t.converter)}function ZO(){return new rg("serverTimestamp")}(function(t,n=!0){(function(o){no=o})(to),di(new Fn("firestore",(s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new Yc(new N1(s.getProvider("auth-internal")),new k1(f,s.getProvider("app-check-internal")),function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new st(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(y.options.projectId,A)}(f,o),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),kn(rv,sv,t),kn(rv,sv,"esm2017")})();const WO={apiKey:"AIzaSyAqSuwR_1mGEHOVpUzPhlhYxIulheov1Hs",authDomain:"meso-2de20.firebaseapp.com",projectId:"meso-2de20",storageBucket:"meso-2de20.firebasestorage.app",messagingSenderId:"256089542613",appId:"1:256089542613:web:3891f021bd7b05b3abb75c",measurementId:"G-F800XXYBH1"},ug=_T(WO);RR(ug);const Xc=I1(ug),JO=new ji,t2=CO(ug);var _c={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var iT;function e2(){if(iT)return _c;iT=1,_c.parse=f,_c.serialize=y;var r=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,s=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/;function f(x,$){if(typeof x!="string")throw new TypeError("argument str must be a string");var K={},X=x.length;if(X<2)return K;var dt=$&&$.decode||A,tt=0,ut=0,Et=0;do{if(ut=x.indexOf("=",tt),ut===-1)break;if(Et=x.indexOf(";",tt),Et===-1)Et=X;else if(ut>Et){tt=x.lastIndexOf(";",ut-1)+1;continue}var mt=g(x,tt,ut),wt=p(x,ut,mt),V=x.slice(mt,wt);if(!t.call(K,V)){var b=g(x,ut+1,Et),S=p(x,Et,b);x.charCodeAt(b)===34&&x.charCodeAt(S-1)===34&&(b++,S--);var I=x.slice(b,S);K[V]=L(I,dt)}tt=Et+1}while(tt<X);return K}function g(x,$,K){do{var X=x.charCodeAt($);if(X!==32&&X!==9)return $}while(++$<K);return K}function p(x,$,K){for(;$>K;){var X=x.charCodeAt(--$);if(X!==32&&X!==9)return $+1}return K}function y(x,$,K){var X=K&&K.encode||encodeURIComponent;if(typeof X!="function")throw new TypeError("option encode is invalid");if(!n.test(x))throw new TypeError("argument name is invalid");var dt=X($);if(!s.test(dt))throw new TypeError("argument val is invalid");var tt=x+"="+dt;if(!K)return tt;if(K.maxAge!=null){var ut=Math.floor(K.maxAge);if(!isFinite(ut))throw new TypeError("option maxAge is invalid");tt+="; Max-Age="+ut}if(K.domain){if(!o.test(K.domain))throw new TypeError("option domain is invalid");tt+="; Domain="+K.domain}if(K.path){if(!c.test(K.path))throw new TypeError("option path is invalid");tt+="; Path="+K.path}if(K.expires){var Et=K.expires;if(!C(Et)||isNaN(Et.valueOf()))throw new TypeError("option expires is invalid");tt+="; Expires="+Et.toUTCString()}if(K.httpOnly&&(tt+="; HttpOnly"),K.secure&&(tt+="; Secure"),K.partitioned&&(tt+="; Partitioned"),K.priority){var mt=typeof K.priority=="string"?K.priority.toLowerCase():K.priority;switch(mt){case"low":tt+="; Priority=Low";break;case"medium":tt+="; Priority=Medium";break;case"high":tt+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(K.sameSite){var wt=typeof K.sameSite=="string"?K.sameSite.toLowerCase():K.sameSite;switch(wt){case!0:tt+="; SameSite=Strict";break;case"lax":tt+="; SameSite=Lax";break;case"strict":tt+="; SameSite=Strict";break;case"none":tt+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return tt}function A(x){return x.indexOf("%")!==-1?decodeURIComponent(x):x}function C(x){return r.call(x)==="[object Date]"}function L(x,$){try{return $(x)}catch{return x}}return _c}var Dc=e2();function n2(){const r=typeof global>"u"?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return typeof r=="boolean"?r:typeof document=="object"&&typeof document.cookie=="string"}function i2(r){return typeof r=="string"?Dc.parse(r):typeof r=="object"&&r!==null?r:{}}function Ld(r,t={}){const n=r2(r);if(!t.doNotParse)try{return JSON.parse(n)}catch{}return r}function r2(r){return r&&r[0]==="j"&&r[1]===":"?r.substr(2):r}class cg{constructor(t,n={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const o=this.cookies;this.cookies=Dc.parse(document.cookie),this._checkChanges(o)};const s=typeof document>"u"?"":document.cookie;this.cookies=i2(t||s),this.defaultSetOptions=n,this.HAS_DOCUMENT_COOKIE=n2()}_emitChange(t){for(let n=0;n<this.changeListeners.length;++n)this.changeListeners[n](t)}_checkChanges(t){new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach(s=>{t[s]!==this.cookies[s]&&this._emitChange({name:s,value:Ld(this.cookies[s])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(t,n={}){return n.doNotUpdate||this.update(),Ld(this.cookies[t],n)}getAll(t={}){t.doNotUpdate||this.update();const n={};for(let s in this.cookies)n[s]=Ld(this.cookies[s],t);return n}set(t,n,s){s?s=Object.assign(Object.assign({},this.defaultSetOptions),s):s=this.defaultSetOptions;const o=typeof n=="string"?n:JSON.stringify(n);this.cookies=Object.assign(Object.assign({},this.cookies),{[t]:o}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=Dc.serialize(t,o,s)),this._emitChange({name:t,value:n,options:s})}remove(t,n){const s=n=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=Dc.serialize(t,"",s)),this._emitChange({name:t,value:void 0,options:n})}addChangeListener(t){this.changeListeners.push(t),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===1&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(t){const n=this.changeListeners.indexOf(t);n>=0&&this.changeListeners.splice(n,1),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===0&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}var xd={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT;function s2(){if(rT)return ml;rT=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var g in o)g!=="key"&&(c[g]=o[g])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return ml.Fragment=t,ml.jsx=n,ml.jsxs=n,ml}var sT;function a2(){return sT||(sT=1,xd.exports=s2()),xd.exports}var hg=a2();const Se=hg.jsx,Ds=hg.jsxs,o2=hg.Fragment,l2=new cg,u2=r=>{const{setIsAuth:t}=r;return Ds("div",{children:[Se("p",{children:"Sign in with Google to continue"}),Se("button",{onClick:async()=>{try{const s=await PI(Xc,JO);l2.set("auth-token",s.user.refreshToken),t(!0)}catch(s){console.error(s)}},children:" Sign in with Google"})]})},c2=r=>{const{room:t,signUserOut:n}=r,[s,o]=Vs.useState(""),c=RO(t2,"messages"),[f,g]=Vs.useState([]),p=async y=>{y.preventDefault(),s.trim()!==""&&(await QO(c,{text:s,createdAt:ZO(),user:Xc.currentUser.displayName,room:t}),o(""))};return Vs.useEffect(()=>{const y=BO(c,qO("room","==",t),HO("createdAt")),A=YO(y,C=>{let L=[];C.forEach(x=>{L.push({...x.data(),id:x.id})}),g(L)});return()=>A()},[t]),Ds("div",{className:"h-screen flex flex-col",children:[Ds("div",{className:"flex justify-between",children:[Se("h2",{className:"text-xl font-bold mb-4",children:t}),Se("button",{onClick:n,children:"SignOut"})]}),Ds("div",{className:"p-4 flex-1 overflow-y-auto space-y-2 bg-gray-50",children:[f.map(y=>{const A=y.user===Xc.currentUser.displayName;return Se("div",{className:`flex ${A?"justify-end":"justify-start"}`,children:Ds("div",{className:`px-2 rounded-lg max-w-xs ${A?"bg-white text-slate-900 shadow-sm self-end hover:bg-orange-300 hover:shadow-md transition-colors duration-300":"bg-slate-800 text-white self-start"}`,children:[Se("span",{className:`text-sm block ${A?"text-gray-400":"text-orange-500"}`,children:y.user}),Se("p",{className:"font-semibold",children:y.text})]})},y.id)}),Ds("form",{onSubmit:p,className:"mt-4 relative flex items-center",children:[Se("input",{type:"text",onChange:y=>o(y.target.value),value:s,className:"border p-3 pr-12 rounded-full flex-1",placeholder:"Type a message..."}),Se("button",{type:"submit",disabled:!s.trim(),className:"absolute right-2 bg-blue-500 text-white px-4 py-2 rounded-full  disabled:bg-gray-300 disabled:cursor-not-allowed",children:"Send"})]})]})]})},h2=new cg;function f2(){const[r,t]=Vs.useState(h2.get("auth-token")),[n,s]=Vs.useState(null),o=Vs.useRef(null),c=async()=>{await pI(Xc),cg.remove("auth-token"),t(!1),s(null)};return r?Se(o2,{children:n?Se(c2,{room:n,signUserOut:c}):Ds("div",{className:"",children:[Se("p",{children:"Enter room name"}),Se("input",{type:"text",ref:o}),Se("button",{onClick:()=>s(o.current.value),children:"Enter Chat"}),Se("button",{onClick:c,className:"flex justify-end",children:"SignOut"})]})}):Se("div",{className:"",children:Se(u2,{setIsAuth:t})})}IS.createRoot(document.getElementById("root")).render(Se(Vs.StrictMode,{children:Se(f2,{})}));
