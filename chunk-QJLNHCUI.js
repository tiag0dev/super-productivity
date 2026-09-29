import{a as N,b as bt,c as Yn,d as cs,e as $n,f as Gn,g as Jc,h as ls,i as no}from"./chunk-XOEN2BZP.js";import{A as Wn,a as pt,b as Qr,c as es,d as ts,f as $c,i as ns,s as is,t as Un,u as Hn,v as Gc,x as os}from"./chunk-LI2G4JUE.js";import{a as $t,b as Qi,k as as,m as gt,r as eo,s as to,w as Xn}from"./chunk-IVMMFXV5.js";import{a as ds,b as qc}from"./chunk-4GWPIVBZ.js";import{a as ss,d as Zc}from"./chunk-DQSPCALA.js";import{d as us,e as Qc}from"./chunk-ZUE7AQRB.js";import{a as rs,h as Kc}from"./chunk-Y4WU6BKH.js";import{$ as Yi,$a as $i,$b as Xr,$c as ft,A as Sn,Aa as T,Ab as zr,Bb as Ur,Ca as p,Cb as Hr,Da as b,Dc as Fn,Ea as a,Ec as oe,Ed as jn,F as Hi,Fa as kn,Fc as re,Fd as Vn,Gc as ht,H as X,Hb as F,Hc as ue,Ia as Ar,Ib as Ut,Ic as be,J as Wi,Ja as Ce,Jb as Wr,Jc as G,K as Tn,Ka as Or,Kb as Pn,La as K,Ma as jt,Mb as ce,N as xn,Na as Vt,Nb as $e,Nc as Ht,P as st,Q as ae,Qa as M,Qb as se,R as xr,Ra as v,Rb as ye,Rd as Zr,Tc as Te,Ua as U,Ub as Fe,Uc as Kr,V as Rr,Va as C,Vb as Zi,Vc as _e,W as Xi,Wc as xe,X as Ir,Xa as Se,Xc as J,Yb as P,Z as Bt,Za as Ne,Zb as x,Zc as Wt,_b as O,_c as mt,_d as Re,a as te,ab as Gi,ba as kr,bc as le,be as Jr,c as Oe,cb as Z,cc as Yr,ce as qr,d as Cr,de as L,e as y,ed as Ln,ee as Yt,f as Sr,fb as zt,fc as Ji,fd as j,ga as Rn,gb as Xe,gc as $r,ge as zn,ha as In,hc as Gr,hd as Le,ia as Dr,ib as R,ic as Nn,id as he,ie as m,jb as Ki,jd as Bn,kb as Pr,kd as Xt,lb as Ye,ma as at,mb as Nr,na as Y,nb as Dn,o as z,oa as Mr,ob as Mn,oc as ut,p as Tr,pa as ct,pb as An,q as Pe,sb as On,ta as $,tb as lt,u as B,ub as dt,uc as de,va as W,vb as Fr,w as Vi,wb as Lr,wc as ne,xa as Ee,xb as Br,xd as qi,y as zi,yb as jr,yc as ie,z as Ui,za as h,zb as Vr}from"./chunk-J4GNA76R.js";import{a as _,b as We,e as g,j as Lt}from"./chunk-PE6UJDCZ.js";function Kn(n,i){if(n===i)return!0;if(n===null||i===null)return!1;if(n!==n&&i!==i)return!0;let e=typeof n,t=typeof i,o;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(i))return!1;if((o=n.length)==i.length){for(let r=0;r<o;r++)if(!Kn(n[r],i[r]))return!1;return!0}}else{if(Array.isArray(i))return!1;if(Ie(n)&&Ie(i)){let r=Object.create(null);for(let s in n){if(!Kn(n[s],i[s]))return!1;r[s]=!0}for(let s in i)if(!(s in r)&&typeof i[s]<"u")return!1;return!0}}return!1}function Be(n){return typeof n<"u"&&n!==null}function hs(n){return n!==void 0}function Ie(n){return Kt(n)&&!Ge(n)&&n!==null}function Kt(n){return typeof n=="object"&&n!==null}function Ge(n){return Array.isArray(n)}function Zn(n){return typeof n=="string"}function il(n){return typeof n=="function"}function Jn(n){if(Ge(n))return n.map(i=>Jn(i));if(Ie(n)){let i={};return Object.keys(n).forEach(e=>{i[e]=Jn(n[e])}),i}else return n}function ro(n,i){if(!Kt(n))return Jn(i);let e=Jn(n);return Kt(e)&&Kt(i)&&Object.keys(i).forEach(t=>{Ie(i[t])?t in n?e[t]=ro(n[t],i[t]):Object.assign(e,{[t]:i[t]}):Object.assign(e,{[t]:i[t]})}),e}function fs(n,i){let e=i.split(".");i="";do{i+=e.shift();let t=!e.length;if(Be(n)){if(Ie(n)&&hs(n[i])&&(Ie(n[i])||Ge(n[i])||t)){n=n[i],i="";continue}if(Ge(n)){let o=parseInt(i,10);if(hs(n[o])&&(Ie(n[o])||Ge(n[o])||t)){n=n[o],i="";continue}}}if(t){n=void 0;continue}i+="."}while(e.length);return n}function ol(n,i,e){return ro(n,rl(i,e))}function rl(n,i){return n.split(".").reduceRight((e,t)=>({[t]:e}),i)}function al(n){return{provide:vt,useClass:n}}function cl(n){return{provide:_t,useClass:n}}function ll(n){return{provide:yt,useClass:n}}function dl(n){return{provide:Zt,useClass:n}}function ms(n={},i){let e=[];n.loader&&e.push(n.loader),n.compiler&&e.push(n.compiler),n.parser&&e.push(n.parser),n.missingTranslationHandler&&e.push(n.missingTranslationHandler),i&&e.push(io),(n.useDefaultLang||n.defaultLanguage)&&(console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead."),n.useDefaultLang===!0&&n.defaultLanguage&&(n.fallbackLang=n.defaultLanguage));let t={fallbackLang:n.fallbackLang??null,lang:n.lang,extend:n.extend??!1};return e.push({provide:oo,useValue:t}),e.push({provide:Jt,useClass:Jt,deps:[io,vt,_t,yt,Zt,oo]}),e}var Zt,el,_t,tl,vt,nl,yt,sl,io,oo,Gt,Jt,ps,uh,so=g(()=>{"use strict";m();m();$();Z();Zt=class{},el=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),_t=class{},tl=(()=>{class n extends _t{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Xe(n)))(o||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),vt=class{},nl=(()=>{class n extends vt{getTranslation(e){return z({})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Xe(n)))(o||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();yt=class{},sl=(()=>{class n extends yt{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){if(Zn(e))return this.interpolateString(e,t);if(il(e))return this.interpolateFunction(e,t)}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(o,r)=>{let s=this.getInterpolationReplacement(t,r);return s!==void 0?s:o}):e}getInterpolationReplacement(e,t){return this.formatValue(fs(e,t))}formatValue(e){if(Zn(e))return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(e===null)return"null";if(Ge(e))return e.join(", ");if(Kt(e))return typeof e.toString=="function"&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Xe(n)))(o||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),io=(()=>{class n{_onTranslationChange=new y;_onLangChange=new y;_onFallbackLangChange=new y;fallbackLang=null;currentLang;translations={};languages=[];getTranslations(e){return this.translations[e]}setTranslations(e,t,o){this.translations[e]=o&&this.hasTranslationFor(e)?ro(this.translations[e],t):t,this.addLanguages([e]),this._onTranslationChange.next({lang:e,translations:this.getTranslations(e)})}getLanguages(){return this.languages}getCurrentLang(){return this.currentLang}getFallbackLang(){return this.fallbackLang}setFallbackLang(e,t=!0){this.fallbackLang=e,t&&this._onFallbackLangChange.next({lang:e,translations:this.translations[e]})}setCurrentLang(e,t=!0){this.currentLang=e,t&&this._onLangChange.next({lang:e,translations:this.translations[e]})}get onTranslationChange(){return this._onTranslationChange.asObservable()}get onLangChange(){return this._onLangChange.asObservable()}get onFallbackLangChange(){return this._onFallbackLangChange.asObservable()}addLanguages(e){this.languages=Array.from(new Set([...this.languages,...e]))}hasTranslationFor(e){return typeof this.translations[e]<"u"}deleteTranslations(e){delete this.translations[e]}getTranslation(e){let t=this.getValue(this.currentLang,e);return t===void 0&&this.fallbackLang!=null&&this.fallbackLang!==this.currentLang&&(t=this.getValue(this.fallbackLang,e)),t}getValue(e,t){return fs(this.getTranslations(e),t)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),oo=new p("TRANSLATE_CONFIG"),Gt=n=>Pe(n)?n:z(n),Jt=(()=>{class n{loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;currentLoader=a(vt);compiler=a(_t);parser=a(yt);missingTranslationHandler=a(Zt);store=a(io);extend=!1;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onFallbackLangChange(){return this.store.onFallbackLangChange}get onDefaultLangChange(){return this.store.onFallbackLangChange}constructor(){let e=_({extend:!1,fallbackLang:null},a(oo,{optional:!0}));e.lang&&this.use(e.lang),e.fallbackLang&&this.setFallbackLang(e.fallbackLang),e.extend&&(this.extend=!0)}setFallbackLang(e){this.getFallbackLang()||this.store.setFallbackLang(e,!1);let t=this.loadOrExtendLanguage(e);return Pe(t)?(t.pipe(ae(1)).subscribe({next:()=>{this.store.setFallbackLang(e)},error:()=>{}}),t):(this.store.setFallbackLang(e),z(this.store.getTranslations(e)))}use(e){this.lastUseLanguage=e,this.getCurrentLang()||this.store.setCurrentLang(e,!1);let t=this.loadOrExtendLanguage(e);return Pe(t)?(t.pipe(ae(1)).subscribe({next:()=>{this.changeLang(e)},error:()=>{}}),t):(this.changeLang(e),z(this.store.getTranslations(e)))}loadOrExtendLanguage(e){if(!this.store.hasTranslationFor(e)||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}changeLang(e){e===this.lastUseLanguage&&this.store.setCurrentLang(e)}getCurrentLang(){return this.store.getCurrentLang()}loadAndCompileTranslations(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(In(1),ae(1));return this.loadingTranslations=t.pipe(B(o=>this.compiler.compileTranslations(o,e)),In(1),ae(1)),this.loadingTranslations.subscribe({next:o=>{this.store.setTranslations(e,o,this.extend),this.pending=!1},error:o=>{this.pending=!1}}),t}setTranslation(e,t,o=!1){let r=this.compiler.compileTranslations(t,e);this.store.setTranslations(e,r,o||this.extend)}getLangs(){return this.store.getLanguages()}addLangs(e){this.store.addLanguages(e)}getParsedResultForKey(e,t){let o=this.getTextToInterpolate(e);if(Be(o))return this.runInterpolation(o,t);let r=this.missingTranslationHandler.handle(_({key:e,translateService:this},t!==void 0&&{interpolateParams:t}));return r!==void 0?r:e}getFallbackLang(){return this.store.getFallbackLang()}getTextToInterpolate(e){return this.store.getTranslation(e)}runInterpolation(e,t){if(Be(e))return Ge(e)?this.runInterpolationOnArray(e,t):Ie(e)?this.runInterpolationOnDict(e,t):this.parser.interpolate(e,t)}runInterpolationOnArray(e,t){return e.map(o=>this.runInterpolation(o,t))}runInterpolationOnDict(e,t){let o={};for(let r in e){let s=this.runInterpolation(e[r],t);s!==void 0&&(o[r]=s)}return o}getParsedResult(e,t){return e instanceof Array?this.getParsedResultForArray(e,t):this.getParsedResultForKey(e,t)}getParsedResultForArray(e,t){let o={},r=!1;for(let c of e)o[c]=this.getParsedResultForKey(c,t),r=r||Pe(o[c]);if(!r)return o;let s=e.map(c=>Gt(o[c]));return Sn(s).pipe(B(c=>{let l={};return c.forEach((u,d)=>{l[e[d]]=u}),l}))}get(e,t){if(!Be(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(xn(()=>Gt(this.getParsedResult(e,t)))):Gt(this.getParsedResult(e,t))}getStreamOnTranslationChange(e,t){if(!Be(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return zi(Ui(()=>this.get(e,t)),this.onTranslationChange.pipe(at(()=>{let o=this.getParsedResult(e,t);return Gt(o)})))}stream(e,t){if(!Be(e)||!e.length)throw new Error('Parameter "key" required');return zi(Ui(()=>this.get(e,t)),this.onLangChange.pipe(at(()=>{let o=this.getParsedResult(e,t);return Gt(o)})))}instant(e,t){if(!Be(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let o=this.getParsedResult(e,t);return Pe(o)?Array.isArray(e)?e.reduce((r,s)=>(r[s]=s,r),{}):e:o}set(e,t,o=this.getCurrentLang()){this.store.setTranslations(o,ol(this.store.getTranslations(o),e,Zn(t)?this.compiler.compile(t,o):this.compiler.compileTranslations(t,o)),!1)}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],this.store.deleteTranslations(e)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return n.getBrowserLang()}getBrowserCultureLang(){return n.getBrowserCultureLang()}get defaultLang(){return this.getFallbackLang()}get currentLang(){return this.store.getCurrentLang()}get langs(){return this.store.getLanguages()}setDefaultLang(e){return this.setFallbackLang(e)}getDefaultLang(){return this.getFallbackLang()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),ps=(()=>{class n{translate=a(Jt);_ref=a(Re);value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onFallbackLangChange;updateValue(e,t,o){let r=s=>{this.value=s!==void 0?s:e,this.lastKey=e,this._ref.markForCheck()};if(o){let s=this.translate.getParsedResult(e,t);Pe(s)?s.subscribe(r):r(s)}this.translate.get(e,t).subscribe(r)}transform(e,...t){if(!e||!e.length)return e;if(Kn(e,this.lastKey)&&Kn(t,this.lastParams))return this.value;let o;if(Be(t[0])&&t.length)if(Zn(t[0])&&t[0].length){let r=t[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{o=JSON.parse(r)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else Ie(t[0])&&(o=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,o),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{(this.lastKey&&r.lang===this.translate.getCurrentLang()||r.lang===this.translate.getFallbackLang())&&(this.lastKey=null,this.updateValue(e,o,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,o,r.translations))})),this.onFallbackLangChange||(this.onFallbackLangChange=this.translate.onFallbackLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,o))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onFallbackLangChange<"u"&&(this.onFallbackLangChange.unsubscribe(),this.onFallbackLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=Xr({name:"translate",type:n,pure:!1});static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();uh=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[...ms(_({compiler:cl(tl),parser:ll(sl),loader:al(nl),missingTranslationHandler:dl(el)},e),!0)]}}static forChild(e={}){return{ngModule:n,providers:[...ms(e,e.isolate??!1)]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({})}return n})()});function gs(n){for(let i of n)i.remove()}function bs(n,i){let e=i.createElement("style");return e.textContent=n,e}function ul(n,i,e,t){let o=n.head?.querySelectorAll(`style[${ao}="${i}"],link[${ao}="${i}"]`);if(o)for(let r of o)r.removeAttribute(ao),r instanceof HTMLLinkElement?t.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function lo(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}function gl(n){return ml.replace(mo,n)}function bl(n){return hl.replace(mo,n)}function ys(n,i){return i.map(e=>e.replace(mo,n))}function _s(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var qt,qn,ti,uo,ao,ho,co,mo,vs,hl,ml,fl,pl,fo,Qt,Qn,en,ei,ws=g(()=>{"use strict";Wn();m();m();qt=class{_doc;constructor(i){this._doc=i}manager},qn=(()=>{class n extends qt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,r){return e.addEventListener(t,o,r),()=>this.removeEventListener(e,t,o,r)}removeEventListener(e,t,o,r){return e.removeEventListener(t,o,r)}static \u0275fac=function(t){return new(t||n)(b(v))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),ti=new p(""),uo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let o=e.filter(s=>!(s instanceof qn));this._plugins=o.slice().reverse();let r=e.find(s=>s instanceof qn);r&&this._plugins.push(r)}addEventListener(e,t,o,r){return this._findPluginFor(t).addEventListener(e,t,o,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(r=>r.supports(e)),!t)throw new W(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(b(ti),b(C))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),ao="ng-app-id";ho=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,o,r={}){this.doc=e,this.appId=t,this.nonce=o,ul(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,bs);t?.forEach(o=>this.addUsage(o,this.external,lo))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let r=t.get(e);r?r.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(gs(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])gs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,bs(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,lo(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(b(v),b(Ye),b(An,8),b(Dn))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),co={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},mo=/%COMP%/g,vs="%COMP%",hl=`_nghost-${vs}`,ml=`_ngcontent-${vs}`,fl=!0,pl=new p("",{factory:()=>fl});fo=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,o,r,s,c,l=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=s,this.ngZone=c,this.nonce=l,this.tracingService=u,this.defaultRenderer=new Qt(e,s,c,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,t);return o instanceof ei?o.applyToHost(e):o instanceof en&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,r=o.get(t.id);if(!r){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(t.encapsulation){case On.Emulated:r=new ei(l,u,t,this.appId,d,s,c,f);break;case On.ShadowDom:return new Qn(l,e,t,s,c,this.nonce,f,u);case On.ExperimentalIsolatedShadowDom:return new Qn(l,e,t,s,c,this.nonce,f);default:r=new en(l,u,t,d,s,c,f);break}o.set(t.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(b(uo),b(ho),b(Ye),b(pl),b(v),b(C),b(An),b(Pn,8))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),Qt=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,o){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(co[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(_s(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(_s(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new W(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,o){if(o){e=o+":"+e;let r=co[o];r?i.setAttributeNS(r,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let o=co[t];o?i.removeAttributeNS(o,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,o){o&(Ut.DashCase|Ut.Important)?i.style.setProperty(e,t,o&Ut.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Ut.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,o){if(typeof i=="string"&&(i=pt().getGlobalEventTarget(this.doc,i),!i))throw new W(5102,!1);let r=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,e,r)),this.eventManager.addEventListener(i,e,r,o)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};Qn=class extends Qt{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,o,r,s,c,l){super(i,o,r,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=ys(t.id,u);for(let f of u){let w=document.createElement("style");s&&w.setAttribute("nonce",s),w.textContent=f,this.shadowRoot.appendChild(w)}let d=t.getExternalStyles?.();if(d)for(let f of d){let w=lo(f,o);s&&w.setAttribute("nonce",s),this.shadowRoot.appendChild(w)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},en=class extends Qt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,o,r,s,c,l){super(i,r,s,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let u=t.styles;this.styles=l?ys(l,u):u,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Wr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ei=class extends en{contentAttr;hostAttr;constructor(i,e,t,o,r,s,c,l){let u=o+"-"+t.id;super(i,e,t,r,s,c,l,u),this.contentAttr=gl(u),this.hostAttr=bl(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}}});function _l(){return tn=tn||document.head.querySelector("base"),tn?tn.getAttribute("href"):null}function vl(n){return new URL(n,document.baseURI).pathname}function Cl(n,i,e){return Lt(this,null,function*(){let t=_({rootComponent:n},Sl(i,e));return qr(t)})}function Sl(n,i){return{platformRef:i?.platformRef,appProviders:[...Ss,...n?.providers??[]],platformProviders:Il}}function Tl(){ni.makeCurrent()}function xl(){return new Se}function Rl(){return Pr(document),document}var ni,tn,ii,yl,Es,wl,El,Cs,Il,kl,Ss,Dl,Ts=g(()=>{"use strict";Wn();m();m();ws();ni=class n extends es{supportsDOMEvents=!0;static makeCurrent(){Qr(new n)}onAndCancel(i,e,t,o){return i.addEventListener(e,t,o),()=>{i.removeEventListener(e,t,o)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=_l();return e==null?null:vl(e)}resetBaseElement(){tn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Un(document.cookie,i)}},tn=null;ii=class{addToWindow(i){Ee.getAngularTestability=(t,o=!0)=>{let r=i.findTestabilityInTree(t,o);if(r==null)throw new W(5103,!1);return r},Ee.getAllAngularTestabilities=()=>i.getAllTestabilities(),Ee.getAllAngularRootElements=()=>i.getAllRootElements();let e=t=>{let o=Ee.getAllAngularTestabilities(),r=o.length,s=function(){r--,r==0&&t()};o.forEach(c=>{c.whenStable(s)})};Ee.frameworkStabilizers||(Ee.frameworkStabilizers=[]),Ee.frameworkStabilizers.push(e)}findTestabilityInTree(i,e,t){if(e==null)return null;let o=i.getTestability(e);return o??(t?pt().isShadowRoot(e)?this.findTestabilityInTree(i,e.host,!0):this.findTestabilityInTree(i,e.parentElement,!0):null)}},yl=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),Es=["alt","control","meta","shift"],wl={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},El={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Cs=(()=>{class n extends qt{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,o,r){let s=n.parseEventName(t),c=n.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>pt().onAndCancel(e,s.domEventName,c,r))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let r=n._normalizeKey(t.pop()),s="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),s="code."),Es.forEach(u=>{let d=t.indexOf(u);d>-1&&(t.splice(d,1),s+=u+".")}),s+=r,t.length!=0||r.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(e,t){let o=wl[e.key]||e.key,r="";return t.indexOf("code.")>-1&&(o=e.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Es.forEach(s=>{if(s!==o){let c=El[s];c(e)&&(r+=s+".")}}),r+=o,r===t)}static eventCallback(e,t,o){return r=>{n.matchEventFullKeyCode(r,e)&&o.runGuarded(()=>t(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(b(v))};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();Il=[{provide:Dn,useValue:os},{provide:Nr,useValue:Tl,multi:!0},{provide:v,useFactory:Rl}],kl=[{provide:Gr,useClass:ii},{provide:$r,useClass:Nn},{provide:Nn,useClass:Nn}],Ss=[{provide:Ar,useValue:"root"},{provide:Se,useFactory:xl},{provide:ti,useClass:qn,multi:!0},{provide:ti,useClass:Cs,multi:!0},fo,ho,uo,{provide:se,useExisting:fo},{provide:Hn,useClass:yl},[]],Dl=(()=>{class n{constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({providers:[...Ss,...kl],imports:[is,Jr]})}return n})()});function Ol(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,c]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(c),e.set(s,l)}),e}function xs(n){return encodeURIComponent(n).replace(Pl,(i,e)=>Nl[e]??i)}function oi(n){return`${n}`}function Fl(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Rs(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Is(n){return typeof Blob<"u"&&n instanceof Blob}function ks(n){return typeof FormData<"u"&&n instanceof FormData}function Ll(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}function Fs(n,i){if(!a(Hl)||n.method==="GET"||n.method==="HEAD")return i(n);try{let o=a(ts).href,{origin:r}=new URL(o),{origin:s}=new URL(n.url,r);if(r!==s)return i(n)}catch(o){return i(n)}let e=a(Ns).getToken(),t=a($l);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function Ls(n,i){return i(n)}function Kl(n,i){return(e,t)=>i.intercept(e,{handle:o=>n(o,t)})}function Zl(n,i,e){return(t,o)=>Or(e,()=>i(t,r=>n(r,o)))}function Jl(){let n=null;return(i,e)=>{n===null&&(n=(a(Bs,{optional:!0})??[]).reduceRight(Kl,Ls));let t=a($i);if(a(_o)){let r=t.add();return n(i,e).pipe(Bt(r))}else return n(i,e)}}function po(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}function ql(n,i){return{\u0275kind:n,\u0275providers:i}}function Ql(...n){let i=[di,ci,{provide:li,useExisting:ci},{provide:vo,useFactory:()=>a(zl,{optional:!0})??a(go)},{provide:bo,useValue:Fs,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return kn(i)}function ed(){return ql(yo.LegacyInterceptors,[{provide:As,useFactory:Jl},{provide:bo,useExisting:As,multi:!0}])}var je,ri,si,Pl,Nl,ke,Ds,Ms,Os,Ps,Bl,wt,Ke,Ct,ai,nn,Et,jl,Vl,zl,Ul,go,Hl,Wl,Xl,Yl,$l,Gl,Ns,Bs,bo,js,_o,vo,ci,li,di,yo,As,wo=g(()=>{"use strict";m();m();Z();Gc();$c();$();je=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let o=e.slice(0,t),r=e.slice(t+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=i.op==="a"?(this.headers.get(e)||[]).slice():[];o.push(...t),this.headers.set(e,o);break;case"d":let r=i.value;if(r===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(r)?r:[r],c=this.headers.get(e);if(!c)return;c=c.filter(l=>s.indexOf(l)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,t),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}},ri=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},si=class{encodeKey(i){return xs(i)}encodeValue(i){return xs(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};Pl=/%(\d[a-f0-9])/gi,Nl={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};ke=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new si,i.fromString){if(i.fromObject)throw new W(2805,!1);this.map=Ol(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],o=Array.isArray(t)?t.map(oi):[oi(t)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let o=i[t];Array.isArray(o)?o.forEach(r=>{e.push({param:t,value:r,op:"a"})}):e.push({param:t,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(oi(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),o=t.indexOf(oi(i.value));o!==-1&&t.splice(o,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};Ds="Content-Type",Ms="Accept",Os="text/plain",Ps="application/json",Bl=`${Ps}, ${Os}, */*`,wt=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,o){this.url=e,this.method=i.toUpperCase();let r;if(Fl(this.method)||o?(this.body=t!==void 0?t:null,r=o):r=t,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new W(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer!==void 0&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new je,this.context??=new ri,!this.params)this.params=new ke,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),l=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Rs(this.body)||Is(this.body)||ks(this.body)||Ll(this.body)?this.body:this.body instanceof ke?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ks(this.body)?null:Is(this.body)?this.body.type||null:Rs(this.body)?null:typeof this.body=="string"?Os:this.body instanceof ke?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ps:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,o=i.responseType||this.responseType,r=i.keepalive??this.keepalive,s=i.priority||this.priority,c=i.cache||this.cache,l=i.mode||this.mode,u=i.redirect||this.redirect,d=i.credentials||this.credentials,f=i.referrer??this.referrer,w=i.integrity||this.integrity,A=i.referrerPolicy||this.referrerPolicy,D=i.transferCache??this.transferCache,k=i.timeout??this.timeout,E=i.body!==void 0?i.body:this.body,S=i.withCredentials??this.withCredentials,ee=i.reportProgress??this.reportProgress,we=i.headers||this.headers,H=i.params||this.params,Nt=i.context??this.context;return i.setHeaders!==void 0&&(we=Object.keys(i.setHeaders).reduce((Ft,He)=>Ft.set(He,i.setHeaders[He]),we)),i.setParams&&(H=Object.keys(i.setParams).reduce((Ft,He)=>Ft.set(He,i.setParams[He]),H)),new n(e,t,E,{params:H,headers:we,context:Nt,reportProgress:ee,responseType:o,withCredentials:S,transferCache:D,keepalive:r,cache:c,priority:s,timeout:k,mode:l,redirect:u,credentials:d,referrer:f,integrity:w,referrerPolicy:A})}},Ke=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ke||{}),Ct=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new je,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},ai=class n extends Ct{constructor(i={}){super(i)}type=Ke.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},nn=class n extends Ct{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ke.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Et=class extends Ct{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},jl=200,Vl=204,zl=new p(""),Ul=/^\)\]\}',?\n/,go=(()=>{class n{xhrFactory;tracingService=a(Pn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new W(-2800,!1);let t=this.xhrFactory;return z(null).pipe(at(()=>new Oe(r=>{let s=t.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((E,S)=>s.setRequestHeader(E,S.join(","))),e.headers.has(Ms)||s.setRequestHeader(Ms,Bl),!e.headers.has(Ds)){let E=e.detectContentTypeHeader();E!==null&&s.setRequestHeader(Ds,E)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let E=e.responseType.toLowerCase();s.responseType=E!=="json"?E:"text"}let c=e.serializeBody(),l=null,u=()=>{if(l!==null)return l;let E=s.statusText||"OK",S=new je(s.getAllResponseHeaders()),ee=s.responseURL||e.url;return l=new ai({headers:S,status:s.status,statusText:E,url:ee}),l},d=this.maybePropagateTrace(()=>{let{headers:E,status:S,statusText:ee,url:we}=u(),H=null;S!==Vl&&(H=typeof s.response>"u"?s.responseText:s.response),S===0&&(S=H?jl:0);let Nt=S>=200&&S<300;if(e.responseType==="json"&&typeof H=="string"){let Ft=H;H=H.replace(Ul,"");try{H=H!==""?JSON.parse(H):null}catch(He){H=Ft,Nt&&(Nt=!1,H={error:He,text:H})}}Nt?(r.next(new nn({body:H,headers:E,status:S,statusText:ee,url:we||void 0})),r.complete()):r.error(new Et({error:H,headers:E,status:S,statusText:ee,url:we||void 0}))}),f=this.maybePropagateTrace(E=>{let{url:S}=u(),ee=new Et({error:E,status:s.status||0,statusText:s.statusText||"Unknown Error",url:S||void 0});r.error(ee)}),w=f;e.timeout&&(w=this.maybePropagateTrace(E=>{let{url:S}=u(),ee=new Et({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:S||void 0});r.error(ee)}));let A=!1,D=this.maybePropagateTrace(E=>{A||(r.next(u()),A=!0);let S={type:Ke.DownloadProgress,loaded:E.loaded};E.lengthComputable&&(S.total=E.total),e.responseType==="text"&&s.responseText&&(S.partialText=s.responseText),r.next(S)}),k=this.maybePropagateTrace(E=>{let S={type:Ke.UploadProgress,loaded:E.loaded};E.lengthComputable&&(S.total=E.total),r.next(S)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",w),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",D),c!==null&&s.upload&&s.upload.addEventListener("progress",k)),s.send(c),r.next({type:Ke.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",w),e.reportProgress&&(s.removeEventListener("progress",D),c!==null&&s.upload&&s.upload.removeEventListener("progress",k)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(t){return new(t||n)(b(Hn))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Hl=new p("",{factory:()=>!0}),Wl="XSRF-TOKEN",Xl=new p("",{factory:()=>Wl}),Yl="X-XSRF-TOKEN",$l=new p("",{factory:()=>Yl}),Gl=(()=>{class n{cookieName=a(Xl);doc=a(v);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Un(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ns=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=b(Gl),o},providedIn:"root"})}return n})();Bs=new p(""),bo=new p("",{factory:()=>[Fs]}),js=new p(""),_o=new p("",{factory:()=>!0});vo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=b(go),o},providedIn:"root"})}return n})(),ci=(()=>{class n{backend;injector;chain=null;pendingTasks=a($i);contributeToStability=a(_o);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=this.injector.get(li,null,{skipSelf:!0}),o=t!==null&&this.backend===t,r=this.injector.get(js,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(bo),...r]));this.chain=s.reduceRight((c,l)=>Zl(c,l,this.injector),Ls)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(Bt(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(b(vo),b(Ce))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=b(ci),o},providedIn:"root"})}return n})();di=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,o={}){let r;if(e instanceof wt)r=e;else{let l;o.headers instanceof je?l=o.headers:l=new je(o.headers);let u;o.params&&(o.params instanceof ke?u=o.params:u=new ke({fromObject:o.params})),r=new wt(e,t,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=z(r).pipe(xn(l=>this.handler.handle(l)));if(e instanceof wt||o.observe==="events")return s;let c=s.pipe(X(l=>l instanceof nn));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return c.pipe(B(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new W(2806,!1);return l.body}));case"blob":return c.pipe(B(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new W(2807,!1);return l.body}));case"text":return c.pipe(B(l=>{if(l.body!==null&&typeof l.body!="string")throw new W(2808,!1);return l.body}));default:return c.pipe(B(l=>l.body))}case"response":return c;default:throw new W(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new ke().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,o={}){return this.request("PATCH",e,po(o,t))}post(e,t,o={}){return this.request("POST",e,po(o,t))}put(e,t,o={}){return this.request("PUT",e,po(o,t))}static \u0275fac=function(t){return new(t||n)(b(li))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yo=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(yo||{});As=new p("")});var Vs=g(()=>{"use strict";wo();wo();});var km,on,nd,Eo=g(()=>{"use strict";Ts();Wn();m();m();km=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(b(v))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),on=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=b(nd),o},providedIn:"root"})}return n})(),nd=(()=>{class n extends on{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case K.NONE:return t;case K.HTML:return dt(t,"HTML")?lt(t):Ur(this._doc,String(t)).toString();case K.STYLE:return dt(t,"Style")?lt(t):t;case K.SCRIPT:if(dt(t,"Script"))return lt(t);throw new W(5200,!1);case K.URL:return dt(t,"URL")?lt(t):zr(String(t));case K.RESOURCE_URL:if(dt(t,"ResourceURL"))return lt(t);throw new W(5201,!1);default:throw new W(5202,!1)}}bypassSecurityTrustHtml(e){return Fr(e)}bypassSecurityTrustStyle(e){return Lr(e)}bypassSecurityTrustScript(e){return Br(e)}bypassSecurityTrustUrl(e){return jr(e)}bypassSecurityTrustResourceUrl(e){return Vr(e)}static \u0275fac=function(t){return new(t||n)(b(v))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function Ze(n,i=0){return zs(n)?Number(n):arguments.length===2?i:0}function zs(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function me(n){return n instanceof R?n.nativeElement:n}var rn=g(()=>{"use strict";m()});function Co(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?rd.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var od,rd,De,ui=g(()=>{"use strict";m();m();od=new p("cdk-dir-doc",{providedIn:"root",factory:()=>a(v)}),rd=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;De=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Ne("ltr");change=new U;constructor(){let e=a(od,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Co(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function mi(){if(Je==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Je=!1,Je;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Je=!0;else{let n=Element.prototype.scrollTo;n?Je=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Je=!1}}return Je}function St(){if(typeof document!="object"||!document)return ve.NORMAL;if(hi==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),hi=ve.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,hi=n.scrollLeft===0?ve.NEGATED:ve.INVERTED),n.remove()}return hi}var ve,hi,Je,So=g(()=>{"use strict";ve=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(ve||{})});function Bm(n){return n&&typeof n.connect=="function"&&!(n instanceof Cr)}var sd=g(()=>{"use strict";$()});var sn,Us,ad=g(()=>{"use strict";sn=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(sn||{}),Us=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,o,r){i.forEachOperation((s,c,l)=>{let u,d;if(s.previousIndex==null){let f=()=>t(s,c,l);u=this._insertView(f,l,e,o(s)),d=u?sn.INSERTED:sn.REPLACED}else l==null?(this._detachAndCacheView(c,e),d=sn.REMOVED):(u=this._moveView(c,l,e,o(s)),d=sn.MOVED);r&&r({context:u?.context,operation:d,record:s})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,o){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=o;return}let s=i();return t.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,o){let r=t.get(i);return t.move(r,e),r.context.$implicit=o,r}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}}});var $m,q,Me=g(()=>{"use strict";m();m();ui();$m=(()=>{class n{_isInitialized=!1;_rawDir="";change=new U;get dir(){return this.valueSignal()}set dir(e){let t=this.valueSignal();this.valueSignal.set(Co(e)),this._rawDir=e,t!==this.valueSignal()&&this._isInitialized&&this.change.emit(this.valueSignal())}get value(){return this.dir}valueSignal=Ne("ltr");ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","dir",""]],hostVars:1,hostBindings:function(t,o){t&2&&de("dir",o._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[qi([{provide:De,useExisting:n}])]})}return n})(),q=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({})}return n})()});var cd,qe,ld,dd,Tt,yf,an,To,fi=g(()=>{"use strict";m();m();$();Z();bt();rn();ui();So();Me();cd=20,qe=(()=>{class n{_ngZone=a(C);_platform=a(N);_renderer=a(se).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=cd){return this._platform.isBrowser?new Oe(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Wi(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):z()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(X(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=me(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ld=(()=>{class n{elementRef=a(R);scrollDispatcher=a(qe);ngZone=a(C);dir=a(De,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=a(ye);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&St()!=ve.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),St()==ve.INVERTED?e.left=e.right:St()==ve.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;mi()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?o:t:e=="end"&&(e=s?t:o),s&&St()==ve.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&St()==ve.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),dd=20,Tt=(()=>{class n{_platform=a(N);_listeners;_viewportSize=null;_change=new y;_document=a(v);constructor(){let e=a(C),t=a(se).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),s=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,c=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:s,left:c}}change(e=dd){return e>0?this._change.pipe(Wi(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yf=new p("CDK_VIRTUAL_SCROLL_VIEWPORT"),an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({})}return n})(),To=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[q,an,q,an]})}return n})()});function cn(n){return n.buttons===0||n.detail===0}function ln(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var xo=g(()=>{"use strict"});function Hs(){if(Ro==null){let n=typeof document<"u"?document.head:null;Ro=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ro}function Io(n){if(Hs()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ko(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Q(n){return n.composedPath?n.composedPath()[0]:n.target}var Ro,dn=g(()=>{"use strict"});function Ws(){if(un==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>un=!0}))}finally{un=un||!1}return un}function xt(n){return Ws()?n:!!n.capture}var un,Do=g(()=>{"use strict"});var Xs,Ys,$s,Mo,Gs,hn,Ks,pi,Rt,ud,Zs=g(()=>{"use strict";m();m();$();Z();xo();dn();bt();Do();rn();Xs=new p("cdk-input-modality-detector-options"),Ys={ignoreKeys:[18,17,224,91,16]},$s=650,Mo={passive:!0,capture:!0},Gs=(()=>{class n{_platform=a(N);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Sr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Q(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<$s||(this._modality.next(cn(e)?"keyboard":"mouse"),this._mostRecentTarget=Q(e))};_onTouchstart=e=>{if(ln(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Q(e)};constructor(){let e=a(C),t=a(v),o=a(Xs,{optional:!0});if(this._options=_(_({},Ys),o),this.modalityDetected=this._modality.pipe(Dr(1)),this.modalityChanged=this.modalityDetected.pipe(Xi()),this._platform.isBrowser){let r=a(se).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Mo),r.listen(t,"mousedown",this._onMousedown,Mo),r.listen(t,"touchstart",this._onTouchstart,Mo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(hn||{}),Ks=new p("cdk-focus-monitor-default-options"),pi=xt({passive:!0,capture:!0}),Rt=(()=>{class n{_ngZone=a(C);_platform=a(N);_inputModalityDetector=a(Gs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=a(v);_stopInputModalityDetector=new y;constructor(){let e=a(Ks,{optional:!0});this._detectionMode=e?.detectionMode||hn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Q(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=me(e);if(!this._platform.isBrowser||o.nodeType!==1)return z();let r=Io(o)||this._document,s=this._elementInfo.get(o);if(s)return t&&(s.checkChildren=!0),s.subject;let c={checkChildren:t,subject:new y,rootNode:r};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=me(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=me(e),s=this._document.activeElement;r===s?this._getClosestElementsInfo(r).forEach(([c,l])=>this._originChanged(c,t,l)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===hn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===hn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?$s:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=Q(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,pi),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,pi)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Y(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,pi),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,pi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ud=(()=>{class n{_elementRef=a(R);_focusMonitor=a(Rt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new U;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})()});var gi,fe,mn=g(()=>{"use strict";m();m();gi=new WeakMap,fe=(()=>{class n{_appRef;_injector=a(M);_environmentInjector=a(Ce);load(e){let t=this._appRef=this._appRef||this._injector.get(ut),o=gi.get(t);o||(o={loaders:new Set,refs:[]},gi.set(t,o),t.onDestroy(()=>{gi.get(t)?.refs.forEach(r=>r.destroy()),gi.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(zn(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function hd(){if(bi===void 0&&(bi=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(bi=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return bi}function Qe(n){return hd()?.createHTML(n)||n}function Js(n,i,e){let t=e.sanitize(K.HTML,i);n.innerHTML=Qe(t||"")}var _i,bi,It=g(()=>{"use strict";mn();m();m();_i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})()});function md(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var qs,Qs,ap,ea,ta=g(()=>{"use strict";m();m();$();Z();rn();qs=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qs=(()=>{class n{_mutationObserverFactory=a(qs);_observedElements=new Map;_ngZone=a(C);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=me(e);return new Oe(o=>{let s=this._observeElement(t).pipe(B(c=>c.filter(l=>!md(l))),X(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{o.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new y,o=this._mutationObserverFactory.create(r=>t.next(r));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:o}=this._observedElements.get(e);t&&t.disconnect(),o.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ap=(()=>{class n{_contentObserver=a(Qs);_elementRef=a(R);event=new U;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Ze(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(st(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",L],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),ea=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({providers:[qs]})}return n})()});function pd(n){try{return n.frameElement}catch(i){return null}}function gd(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function bd(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function _d(n){return yd(n)&&n.type=="hidden"}function vd(n){return wd(n)&&n.hasAttribute("href")}function yd(n){return n.nodeName.toLowerCase()=="input"}function wd(n){return n.nodeName.toLowerCase()=="a"}function ra(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function na(n){if(!ra(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Ed(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Cd(n){return _d(n)?!1:bd(n)||vd(n)||n.hasAttribute("contenteditable")||ra(n)}function Sd(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var fd,Oo,sa,Td,aa,ca,xd,Po,Ve,ia,oa,Ao,la,No,da=g(()=>{"use strict";m();m();bt();dn();mn();It();Jc();Eo();ta();fd=(()=>{class n{_platform=a(N);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return gd(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=pd(Sd(e));if(t&&(na(t)===-1||!this.isVisible(t)))return!1;let o=e.nodeName.toLowerCase(),r=na(e);return e.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ed(e)?!1:o==="audio"?e.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Cd(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();Oo=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,o,r=!1,s){this._element=i,this._checker=e,this._ngZone=t,this._document=o,this._injector=s,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(o)return o}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(o)return o}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?ce(i,{injector:this._injector}):setTimeout(i)}},sa=(()=>{class n{_checker=a(fd);_ngZone=a(C);_document=a(v);_injector=a(M);constructor(){a(fe).load(_i)}create(e,t=!1){return new Oo(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Td=(()=>{class n{_elementRef=a(R);_focusTrapFactory=a(sa);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){a(N).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=ko(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",L],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",L]},exportAs:["cdkTrapFocus"],features:[zt]})}return n})(),aa=new p("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),ca=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),xd=0,Po=(()=>{class n{_ngZone=a(C);_defaultOptions=a(ca,{optional:!0});_liveElement;_document=a(v);_sanitizer=a(on);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=a(aa,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,r,s;return t.length===1&&typeof t[0]=="number"?s=t[0]:[r,s]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),s==null&&o&&(s=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Js(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${xd++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],s=r.getAttribute("aria-owns");s?s.indexOf(e)===-1&&r.setAttribute("aria-owns",s+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ve=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(Ve||{}),ia="cdk-high-contrast-black-on-white",oa="cdk-high-contrast-white-on-black",Ao="cdk-high-contrast-active",la=(()=>{class n{_platform=a(N);_hasCheckedHighContrastMode=!1;_document=a(v);_breakpointSubscription;constructor(){this._breakpointSubscription=a(Gn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ve.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ve.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ve.BLACK_ON_WHITE}return Ve.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Ao,ia,oa),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Ve.BLACK_ON_WHITE?e.add(Ao,ia):t===Ve.WHITE_ON_BLACK&&e.add(Ao,oa)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),No=(()=>{class n{constructor(){a(la)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[ea]})}return n})()});function Fo(){return a(Rd,{optional:!0})?.animationsDisabled||a(Mn,{optional:!0})==="NoopAnimations"?"di-disabled":(ua??=a($n).matchMedia("(prefers-reduced-motion)").matches,ua?"reduced-motion":"enabled")}function pe(){return Fo()!=="enabled"}var Rd,ua,et=g(()=>{"use strict";no();m();Rd=new p("MATERIAL_ANIMATIONS"),ua=null});var Id,vi,ha=g(()=>{"use strict";$();Z();Id=200,vi=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Id;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ct(e=>this._pressedLetters.push(e)),st(i),X(()=>this._pressedLetters.length>0),B(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}}});function kt(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var yi=g(()=>{"use strict"});var Dt,Lo=g(()=>{"use strict";m();$();ha();yi();Dt=class{_items;_activeItemIndex=Ne(-1);_activeItem=Ne(null);_wrap=!1;_typeaheadSubscription=te.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Ki?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Ji(i)&&(this._effectRef=Gi(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new vi(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(r<s?r:s-1,-1);break}else return;default:(o||kt(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Ji(this._items)?this._items():this._items instanceof Ki?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}}});var Bo,ma=g(()=>{"use strict";Lo();Bo=class extends Dt{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}}});var jo,fa=g(()=>{"use strict";Lo();jo=class extends Dt{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}}});var Vo,tt,zo=g(()=>{"use strict";m();m();Vo={},tt=class n{_appId=a(Ye);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Vo.hasOwnProperty(i)||(Vo[i]=0),`${i}${e?n._infix+"-":""}${Vo[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}});function kd(n,i,e){let t=Ei(n,i);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(ga)))}function Dd(n,i,e){let t=Ei(n,i);e=e.trim();let o=t.filter(r=>r!==e);o.length?n.setAttribute(i,o.join(ga)):n.removeAttribute(i)}function Ei(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}function Uo(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function pa(n,i){n.id||(n.id=`${ba}-${i}-${Ho++}`)}var ga,ba,wi,Ho,_a,Mt=g(()=>{"use strict";da();ma();m();m();bt();mn();It();Zs();fa();zo();xo();ga=" ";ba="cdk-describedby-message",wi="cdk-describedby-host",Ho=0,_a=(()=>{class n{_platform=a(N);_document=a(v);_messageRegistry=new Map;_messagesContainer=null;_id=`${Ho++}`;constructor(){a(fe).load(_i),this._id=a(Ye)+"-"+Ho++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let r=Uo(t,o);typeof t!="string"?(pa(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let r=Uo(t,o);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let s=this._messageRegistry.get(r);s&&s.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${wi}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(wi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement("div");pa(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Uo(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=Ei(e,"aria-describedby").filter(o=>o.indexOf(ba)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);kd(e,"aria-describedby",o.messageElement.id),e.setAttribute(wi,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,Dd(e,"aria-describedby",o.messageElement.id),e.removeAttribute(wi)}_isElementDescribedByMessage(e,t){let o=Ei(e,"aria-describedby"),r=this._messageRegistry.get(t),s=r&&r.messageElement.id;return!!s&&o.indexOf(s)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let o=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function xg(n,i={}){let e=i.functional?n:n(),t=_(_({},Md),i);return Object.defineProperty(e,Si,{value:t}),e}function Ad(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(Si)?n[t][Si].hasOwnProperty("dispatch"):!1).map(t=>{let o=n[t][Si];return _({propertyName:t},o)})}function Od(n){return Ad(n)}function Ea(n){return Object.getPrototypeOf(n)}function Pd(n){return!!n.constructor&&n.constructor.name!=="Object"&&n.constructor.name!=="Function"}function Ca(n){return typeof n=="function"}function va(n){return n.filter(Ca)}function Nd(n){return n instanceof p||Ca(n)}function Fd(n,i,e){let t=Ea(n),r=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,s=Od(n).map(({propertyName:c,dispatch:l,useEffectsErrorHandler:u})=>{let d=typeof n[c]=="function"?n[c]():n[c],f=u?e(d,i):d;return l===!1?f.pipe(xr()):f.pipe(kr()).pipe(B(A=>({effect:n[c],notification:A,propertyName:c,sourceName:r,sourceInstance:n})))});return Hi(...s)}function Sa(n,i,e=Ld){return n.pipe(Tn(t=>(i&&i.handleError(t),e<=1?n:Sa(n,i,e-1))))}function Ta(...n){return X(i=>n.some(e=>typeof e=="string"?e===i.type:e.type===i.type))}function jd(n,i){if(n.notification.kind==="N"){let e=n.notification.value;!Vd(e)&&i.handleError(new Error(`Effect ${zd(n)} dispatched an invalid action: ${Ud(e)}`))}}function Vd(n){return typeof n!="function"&&n&&n.type&&typeof n.type=="string"}function zd({propertyName:n,sourceInstance:i,sourceName:e}){let t=typeof i[n]=="function";return!!e?`"${e}.${String(n)}${t?"()":""}"`:`"${String(n)}()"`}function Ud(n){try{return JSON.stringify(n)}catch(i){return n}}function Wd(n){return Yo(n,Hd)}function Yd(n){return Yo(n,Xd)}function Gd(n){return Yo(n,$d)}function Yo(n,i){return n&&i in n&&typeof n[i]=="function"}function Kd(n){return Wd(n)?n.ngrxOnIdentifyEffects():""}function Zd(n,i){return e=>{let t=Fd(e,n,i);return Yd(e)?e.ngrxOnRunEffects(t):t}}function wa(n,i){let e=[];for(let t of n)e.push(...t);for(let t of i)e.push(...t);return e.map(t=>Nd(t)?a(t):t)}function qd(){let n=a(Ma,{optional:!0,skipSelf:!0}),i=a(Wo,{self:!0});if(!(i.length===1&&i[0].length===0)&&n)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}var Md,Si,Ld,Xo,xa,Ci,Wo,Ra,ya,Ia,Bd,ka,Rg,Hd,Xd,$d,Da,Ma,Aa,Jd,Ig,$o=g(()=>{"use strict";$();Z();m();m();Xn();Xn();Md={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},Si="__@ngrx/effects_create__";Ld=10;Xo=(()=>{class n extends Oe{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.\u0275fac=function(t){return new(t||n)(b(as))}}static{this.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();xa=new p("@ngrx/effects Internal Root Guard"),Ci=new p("@ngrx/effects User Provided Effects"),Wo=new p("@ngrx/effects Internal Root Effects"),Ra=new p("@ngrx/effects Internal Root Effects Instances"),ya=new p("@ngrx/effects Internal Feature Effects"),Ia=new p("@ngrx/effects Internal Feature Effects Instance Groups"),Bd=new p("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Sa}),ka="@ngrx/effects/init",Rg=$t(ka);Hd="ngrxOnIdentifyEffects";Xd="ngrxOnRunEffects";$d="ngrxOnInitEffects";Da=(()=>{class n extends y{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe(Yi(e=>Pd(e)?Ea(e):e),Vi(e=>e.pipe(Yi(Kd))),Vi(e=>{let t=e.pipe(Ir(r=>Zd(this.errorHandler,this.effectsErrorHandler)(r)),B(r=>(jd(r,this.errorHandler),r.notification)),X(r=>r.kind==="N"&&r.value!=null),Rr()),o=e.pipe(ae(1),X(Gd),B(r=>r.ngrxOnInitEffects()));return Hi(t,o)}))}static{this.\u0275fac=function(t){return new(t||n)(b(Se),b(Bd))}}static{this.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();Ma=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||n)(b(Da),b(gt))}}static{this.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Aa=(()=>{class n{constructor(e,t,o,r,s,c,l){this.sources=e,t.start();for(let u of r)e.addEffects(u);o.dispatch({type:ka})}addEffects(e){this.sources.addEffects(e)}static{this.\u0275fac=function(t){return new(t||n)(b(Da),b(Ma),b(gt),b(Ra),b(eo,8),b(to,8),b(xa,8))}}static{this.\u0275mod=x({type:n})}static{this.\u0275inj=T({})}}return n})(),Jd=(()=>{class n{constructor(e,t,o,r){let s=t.flat();for(let c of s)e.addEffects(c)}static{this.\u0275fac=function(t){return new(t||n)(b(Aa),b(Ia),b(eo,8),b(to,8))}}static{this.\u0275mod=x({type:n})}static{this.\u0275inj=T({})}}return n})(),Ig=(()=>{class n{static forFeature(...e){let t=e.flat(),o=va(t);return{ngModule:Jd,providers:[o,{provide:ya,multi:!0,useValue:t},{provide:Ci,multi:!0,useValue:[]},{provide:Ia,multi:!0,useFactory:wa,deps:[ya,Ci]}]}}static forRoot(...e){let t=e.flat(),o=va(t);return{ngModule:Aa,providers:[o,{provide:Wo,useValue:[t]},{provide:xa,useFactory:qd},{provide:Ci,multi:!0,useValue:[]},{provide:Ra,useFactory:wa,deps:[Wo,Ci]}]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=x({type:n})}static{this.\u0275inj=T({})}}return n})()});var Oa,Pa,Og,Na=g(()=>{"use strict";Qc();Kc();Oa=new WeakSet,Pa=n=>Oa.has(n),Og=n=>(i,e)=>{try{return n(i,e)}catch(t){if(i===void 0)throw t;Oa.add(e),rs.err("reducerFailureGuardMetaReducer: reducer threw, action rejected",{actionType:e.type});try{us(t)}catch(o){setTimeout(()=>{throw o})}return i}}});var Fa,jg,La=g(()=>{"use strict";m();$o();Z();Na();Fa=new p("LOCAL_ACTIONS",{providedIn:"root",factory:()=>a(Xo).pipe(X(i=>!i.meta?.isRemote&&!Pa(i)),Rn())}),jg=new p("ALL_ACTIONS",{providedIn:"root",factory:()=>a(Xo)})});function Go(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ba=g(()=>{"use strict"});function Ug(){if(At)return At;if(typeof document!="object"||!document)return At=new Set(ja),At;let n=document.createElement("input");return At=new Set(ja.filter(i=>(n.setAttribute("type",i),n.type===i))),At}var At,ja,fn=g(()=>{"use strict";bt();dn();Do();ja=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]});function V(n){return n==null?"":typeof n=="string"?n:`${n}px`}var Va=g(()=>{"use strict"});function Ko(n){return n!=null&&`${n}`!="false"}function Gg(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let o of t){let r=`${o}`.trim();r&&e.push(r)}}return e}var Zo=g(()=>{"use strict";rn();cs()});function tu(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+o*o)}var ge,Jo,za,qo,pn,Qd,Ua,Ha,Wa,eu,gn,Qo,lb,Xa=g(()=>{"use strict";fn();m();m();Mt();Zo();It();et();ge=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ge||{}),Jo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ge.HIDDEN;constructor(i,e,t,o=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},za=xt({passive:!0,capture:!0}),qo=class{_events=new Map;addHandler(i,e,t,o){let r=this._events.get(e);if(r){let s=r.get(t);s?s.add(o):r.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,za)})}removeHandler(i,e,t){let o=this._events.get(i);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,za)))}_delegateEventHandler=i=>{let e=Q(i);e&&this._events.get(i.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},pn={enterDuration:225,exitDuration:150},Qd=800,Ua=xt({passive:!0,capture:!0}),Ha=["mousedown","touchstart"],Wa=["mouseup","mouseleave","touchend","touchcancel"],eu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),gn=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new qo;constructor(i,e,t,o,r){this._target=i,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=me(t)),r&&r.get(fe).load(eu)}fadeInRipple(i,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=_(_({},pn),t.animation);t.centered&&(i=o.left+o.width/2,e=o.top+o.height/2);let s=t.radius||tu(i,e,o),c=i-o.left,l=e-o.top,u=r.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${c-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,t.color!=null&&(d.style.backgroundColor=t.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),w=f.transitionProperty,A=f.transitionDuration,D=w==="none"||A==="0s"||A==="0s, 0s"||o.width===0&&o.height===0,k=new Jo(this,d,t,D);d.style.transform="scale3d(1, 1, 1)",k.state=ge.FADING_IN,t.persistent||(this._mostRecentTransientRipple=k);let E=null;return!D&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let S=()=>{E&&(E.fallbackTimer=null),clearTimeout(we),this._finishRippleTransition(k)},ee=()=>this._destroyRipple(k),we=setTimeout(ee,u+100);d.addEventListener("transitionend",S),d.addEventListener("transitioncancel",ee),E={onTransitionEnd:S,onTransitionCancel:ee,fallbackTimer:we}}),this._activeRipples.set(k,E),(D||!u)&&this._finishRippleTransition(k),k}fadeOutRipple(i){if(i.state===ge.FADING_OUT||i.state===ge.HIDDEN)return;let e=i.element,t=_(_({},pn),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ge.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=me(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ha.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Wa.forEach(e=>{this._triggerElement.addEventListener(e,this,Ua)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ge.FADING_IN?this._startFadeOutTransition(i):i.state===ge.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ge.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ge.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=cn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Qd;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ln(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ge.VISIBLE||i.config.terminateOnPointerUp&&i.state===ge.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ha.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Wa.forEach(e=>i.removeEventListener(e,this,Ua)),this._pointerUpEventsRegistered=!1))}};Qo=new p("mat-ripple-global-options"),lb=(()=>{class n{_elementRef=a(R);_animationsDisabled=pe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=a(C),t=a(N),o=a(Qo,{optional:!0}),r=a(M);this._globalOptions=o||{},this._rippleRenderer=new gn(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,_(_({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&j("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})()});var nu,iu,er,tr,Ya,Ti,$a,Ga=g(()=>{"use strict";m();m();fn();et();Xa();nu={capture:!0},iu=["focus","mousedown","mouseenter","touchstart"],er="mat-ripple-loader-uninitialized",tr="mat-ripple-loader-class-name",Ya="mat-ripple-loader-centered",Ti="mat-ripple-loader-disabled",$a=(()=>{class n{_document=a(v);_animationsDisabled=pe();_globalRippleOptions=a(Qo,{optional:!0});_platform=a(N);_ngZone=a(C);_injector=a(M);_eventCleanups;_hosts=new Map;constructor(){let e=a(se).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>iu.map(t=>e.listen(this._document,t,this._onInteraction,nu)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(er,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(tr))&&e.setAttribute(tr,t.className||""),t.centered&&e.setAttribute(Ya,""),t.disabled&&e.setAttribute(Ti,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ti,""):e.removeAttribute(Ti)}_onInteraction=e=>{let t=Q(e);if(t instanceof HTMLElement){let o=t.closest(`[${er}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(tr)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??pn.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??pn.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Ti),rippleConfig:{centered:e.hasAttribute(Ya),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},l=new gn(c,this._ngZone,t,this._platform,this._injector),u=!c.rippleDisabled;u&&l.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:l,hasSetUpEvents:u}),e.removeAttribute(er)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});var Ka,Za=g(()=>{"use strict";m();Ka=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})()});function Ja(n){return n==null?void 0:Yt(n)}var ou,ru,su,bn,nr,qa=g(()=>{"use strict";m();m();Mt();It();Ga();Za();et();ou=["mat-icon-button",""],ru=["*"],su=new p("MAT_BUTTON_CONFIG");bn=(()=>{class n{_elementRef=a(R);_ngZone=a(C);_animationsDisabled=pe();_config=a(su,{optional:!0});_focusMonitor=a(Rt);_cleanupClick;_renderer=a(ye);_rippleLoader=a($a);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){a(fe).load(Ka);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(de("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Le(o.color?"mat-"+o.color:""),j("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",L],disabled:[2,"disabled","disabled",L],ariaDisabled:[2,"aria-disabled","ariaDisabled",L],disabledInteractive:[2,"disabledInteractive","disabledInteractive",L],tabIndex:[2,"tabIndex","tabIndex",Ja],_tabindex:[2,"tabindex","_tabindex",Ja]}})}return n})(),nr=(()=>{class n extends bn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[le],attrs:ou,ngContentSelectors:ru,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(xe(),G(0,"span",0),J(1),G(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})()});var Qa,ec=g(()=>{"use strict";Me();m();Qa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[q]})}return n})()});function uu(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var au,ir,or,cu,lu,du,tc,vn,Ub,nc,_n,Hb,Wb,hu,rr=g(()=>{"use strict";qa();m();m();Me();ec();au=["matButton",""],ir=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],or=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],cu=["mat-fab",""],lu=["mat-mini-fab",""],du=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,tc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),vn=(()=>{class n extends bn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=uu(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?tc.get(this._appearance):null,r=tc.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[le],attrs:au,ngContentSelectors:or,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(xe(ir),G(0,"span",0),J(1),ue(2,"span",1),J(3,1),be(),J(4,2),G(5,"span",2)(6,"span",3)),t&2&&j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();Ub=vn,nc=new p("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>_n}),_n={color:"accent"},Hb=(()=>{class n extends bn{_options=a(nc,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||_n,this.color=this._options.color||_n.color}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(t,o){t&2&&j("mdc-fab--extended",o.extended)("mat-mdc-extended-fab",o.extended)},inputs:{extended:[2,"extended","extended",L]},exportAs:["matButton","matAnchor"],features:[le],attrs:cu,ngContentSelectors:or,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(xe(ir),G(0,"span",0),J(1),ue(2,"span",1),J(3,1),be(),J(4,2),G(5,"span",2)(6,"span",3)),t&2&&j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return n})(),Wb=(()=>{class n extends bn{_options=a(nc,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||_n,this.color=this._options.color||_n.color}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[le],attrs:lu,ngContentSelectors:or,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(xe(ir),G(0,"span",0),J(1),ue(2,"span",1),J(3,1),be(),J(4,2),G(5,"span",2)(6,"span",3)),t&2&&j("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[du],encapsulation:2,changeDetection:0})}return n})(),hu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[Qa,q]})}return n})()});function ic(n){return Error(`Unable to find icon with the name "${n}"`)}function mu(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function oc(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function rc(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}function xi(n){return n.cloneNode(!0)}function sc(n,i){return n+":"+i}function fu(n){return!!(n.url&&n.options)}var Ae,ac,cc=g(()=>{"use strict";It();Vs();m();m();Eo();$();Z();Ae=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},ac=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,r){return this._addSvgIconConfig(e,t,new Ae(o,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,r){let s=this._sanitizer.sanitize(K.HTML,o);if(!s)throw rc(o);let c=Qe(s);return this._addSvgIconConfig(e,t,new Ae("",c,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new Ae(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let r=this._sanitizer.sanitize(K.HTML,t);if(!r)throw rc(t);let s=Qe(r);return this._addSvgIconSetConfig(e,new Ae("",s,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(K.RESOURCE_URL,e);if(!t)throw oc(e);let o=this._cachedIconsByUrl.get(t);return o?z(xi(o)):this._loadSvgIconFromConfig(new Ae(e,null)).pipe(ct(r=>this._cachedIconsByUrl.set(t,r)),B(r=>xi(r)))}getNamedSvgIcon(e,t=""){let o=sc(t,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):Tr(ic(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?z(xi(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(B(t=>xi(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return z(o);let r=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Tn(c=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(K.RESOURCE_URL,s.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(u)),z(null)})));return Sn(r).pipe(B(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw ic(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let r=t[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(r),c=this._extractSvgIconFromSet(s,e,r.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ct(t=>e.svgText=t),B(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?z(null):this._fetchIcon(e).pipe(ct(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let s=r.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,o);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),o);let c=this._svgElementFromString(Qe("<svg></svg>"));return c.appendChild(s),this._setSvgAttributes(c,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(Qe("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:s,value:c}=o[r];s!=="id"&&t.setAttribute(s,c)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw mu();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(K.RESOURCE_URL,t);if(!s)throw oc(t);let c=this._inProgressUrlFetches.get(s);if(c)return c;let l=this._httpClient.get(s,{responseType:"text",withCredentials:r}).pipe(B(u=>Qe(u)),Bt(()=>this._inProgressUrlFetches.delete(s)),Rn());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(sc(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](t,e);if(r)return fu(r)?new Ae(r.url,null,r.options):new Ae(r,null)}}static \u0275fac=function(t){return new(t||n)(b(di,8),b(on),b(v,8),b(Se))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});var pu,gu,bu,lc,_u,vu,dc,d_,uc=g(()=>{"use strict";m();m();$();Z();cc();Me();pu=["*"],gu=new p("MAT_ICON_DEFAULT_OPTIONS"),bu=new p("mat-icon-location",{providedIn:"root",factory:()=>{let n=a(v),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),lc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],_u=lc.map(n=>`[${n}]`).join(", "),vu=/^url\(['"]?#(.*?)['"]?\)$/,dc=(()=>{class n{_elementRef=a(R);_iconRegistry=a(ac);_location=a(bu);_errorHandler=a(Se);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=te.EMPTY;constructor(){let e=a(new Zr("aria-hidden"),{optional:!0}),t=a(gu,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,r)=>{o.forEach(s=>{r.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(_u),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)lc.forEach(s=>{let c=t[r],l=c.getAttribute(s),u=l?l.match(vu):null;if(u){let d=o.get(c);d||(d=[],o.set(c,d)),d.push({name:s,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(ae(1)).subscribe(r=>this._setSvgElement(r),r=>{let s=`Error retrieving icon ${t}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(de("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Le(o.color?"mat-"+o.color:""),j("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",L],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:pu,decls:1,vars:0,template:function(t,o){t&1&&(xe(),J(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),d_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[q]})}return n})()});function yu(n,i){n&1&&G(0,"div",2)}function hc(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var wu,mc,w_,fc=g(()=>{"use strict";m();m();et();Me();wu=new p("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),mc=(()=>{class n{_elementRef=a(R);_ngZone=a(C);_changeDetectorRef=a(Re);_renderer=a(ye);_cleanupTransitionEnd;constructor(){let e=Fo(),t=a(wu,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=hc(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=hc(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new U;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,o){t&2&&(de("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Le("mat-"+o.color),j("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Yt],bufferValue:[2,"bufferValue","bufferValue",Yt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,o){t&1&&(ue(0,"div",0),G(1,"div",1),ne(2,yu,1,0,"div",2),be(),ue(3,"div",3),G(4,"span",4),be(),ue(5,"div",5),G(6,"span",4),be()),t&2&&(F(),Ln("flex-basis",o._getBufferBarFlexBasis()),F(),ie(o.mode==="buffer"?2:-1),F(),Ln("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();w_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[q]})}return n})()});var yn,ze,Ue,sr,Ot,Ri,I_,ar,cr,Ii=g(()=>{"use strict";m();m();yn=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},ze=class extends yn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},Ue=class extends yn{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},sr=class extends yn{element;constructor(i){super(),this.element=i instanceof R?i.nativeElement:i}},Ot=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ze)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Ue)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof sr)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ri=class extends Ot{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(Zi,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||M.NULL,r=o.get(Ce,t.injector);e=zn(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},I_=(()=>{class n extends Ue{constructor(){let e=a($e),t=a(Fe);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[le]})}return n})(),ar=(()=>{class n extends Ot{_moduleRef=a(Zi,{optional:!0});_document=a(v);_viewContainerRef=a(Fe);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new U;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[le]})}return n})(),cr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({})}return n})()});function Cc(n){return new ki(n.get(Tt),n.get(v))}function Sc(n,i){return new Di(n.get(qe),n.get(C),n.get(Tt),i)}function lr(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,s=n.left>e.right;return t||o||r||s})}function gc(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,s=n.right>e.right;return t||o||r||s})}function En(n,i){return new Mi(n.get(qe),n.get(Tt),n.get(C),i)}function bc(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}function mr(n){return n&&n.nodeType===1}function Cn(n,i){return new Pi(i,n.get(Tt),n.get(v),n.get(N),n.get(hr))}function nt(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function vc(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(Eu);return!e||e==="px"?parseFloat(i):null}return n||null}function yc(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Cu(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}function Fi(n){return new Ni}function ot(n,i){n.get(fe).load(kc);let e=n.get(hr),t=n.get(v),o=n.get(tt),r=n.get(ut),s=n.get(De),c=n.get(ye,null,{optional:!0})||n.get(se).createRenderer(null,null),l=new it(i),u=n.get(fr,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in t.body?l.usePopover=i?.usePopover??u:l.usePopover=!1;let d=t.createElement("div"),f=t.createElement("div");d.id=o.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let w=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return mr(w)?w.after(f):w?.type==="parent"?w.element.appendChild(f):e.getContainerElement().appendChild(f),new Oi(new Ri(d,r,n),f,d,l,n.get(C),n.get(Rc),t,n.get(ns),n.get(Ic),i?.disableAnimations??n.get(Mn,null,{optional:!0})==="NoopAnimations",n.get(Ce),c)}var pc,ki,Di,wn,Mi,Tc,it,Ai,xc,Rc,Ic,kc,hr,dr,Oi,_c,Eu,Pi,wc,Ni,Dc,fr,Mc,Su,Tu,ur,Ac,xu,Li,pr=g(()=>{"use strict";m();m();Wn();bt();dn();Ba();mn();$();Va();cs();fi();So();Z();zo();ui();Ii();yi();Me();pc=mi();ki=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=V(-this._previousScrollPosition.left),i.style.top=V(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),pc&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pc&&(t.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};Di=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(X(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}},wn=class{enable(){}disable(){}attach(){}};Mi=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();lr(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Tc=(()=>{class n{_injector=a(M);constructor(){}noop=()=>new wn;close=e=>Sc(this._injector,e);block=()=>Cc(this._injector);reposition=e=>En(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),it=class{positionStrategy;scrollStrategy=new wn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}},Ai=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}},xc=(()=>{class n{_attachedOverlays=[];_document=a(v);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rc=(()=>{class n extends xc{_ngZone=a(C);_renderer=a(se).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Xe(n)))(o||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ic=(()=>{class n extends xc{_platform=a(N);_ngZone=a(C);_renderer=a(se).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Q(e)};_clickListener=e=>{let t=Q(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let c=r[s],l=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,e,l))){if(bc(c.overlayElement,t)||bc(c.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Xe(n)))(o||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();kc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),hr=(()=>{class n{_platform=a(N);_containerElement;_document=a(v);_styleLoader=a(fe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Go()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Go()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(kc)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dr=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};Oi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=te.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,t,o,r,s,c,l,u,d=!1,f,w){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=c,this._location=l,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=f,this._renderer=w,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ce(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=_(_({},this._config),i),this._updateElementSize()}setDirection(i){this._config=We(_({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=V(this._config.width),i.height=V(this._config.height),i.minWidth=V(this._config.minWidth),i.minHeight=V(this._config.minHeight),i.maxWidth=V(this._config.maxWidth),i.maxHeight=V(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;mr(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new dr(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=Yn(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=ce(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},_c="cdk-overlay-connected-position-bounding-box",Eu=/([A-Za-z%]+)$/;Pi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=te.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(_c),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],s;for(let c of this._preferredPositions){let l=this._getOriginPoint(i,o,c),u=this._getOverlayPoint(l,e,c),d=this._getOverlayFit(u,e,t,c);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,l);return}if(this._canFitWithFlexibleDimensions(d,u,t)){r.push({position:c,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,c)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:u,originPoint:l,position:c,overlayRect:e})}if(r.length){let c=null,l=-1;for(let u of r){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>l&&(l=d,c=u)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&nt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(_c),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof R?this._origin.nativeElement:mr(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,c=this._isRtl()?i.left:i.right;o=t.originX=="start"?s:c}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=yc(e),{x:s,y:c}=i,l=this._getOffset(o,"x"),u=this._getOffset(o,"y");l&&(s+=l),u&&(c+=u);let d=0-s,f=s+r.width-t.width,w=0-c,A=c+r.height-t.height,D=this._subtractOverflows(r.width,d,f),k=this._subtractOverflows(r.height,w,A),E=D*k;return{visibleArea:E,isCompletelyWithinViewport:r.width*r.height===E,fitsInViewportVertically:k===r.height,fitsInViewportHorizontally:D==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,s=vc(this._overlayRef.getConfig().minHeight),c=vc(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||s!=null&&s<=o,u=i.fitsInViewportHorizontally||c!=null&&c<=r;return l&&u}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=yc(e),r=this._viewportRect,s=Math.max(i.x+o.width-r.width,0),c=Math.max(i.y+o.height-r.height,0),l=Math.max(r.top-t.top-i.y,0),u=Math.max(r.left-t.left-i.x,0),d=0,f=0;return o.width<=r.width?d=u||-s:d=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?f=l||-c:f=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:d,y:f},{x:i.x+d,y:i.y+f}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Cu(this._lastScrollVisibility,t)){let o=new Ai(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,s,c;if(e.overlayY==="top")s=i.y,r=t.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")c=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-c+this._getViewportMarginTop();else{let A=Math.min(t.bottom-i.y+t.top,i.y),D=this._lastBoundingBoxSize.height;r=A*2,s=i.y-A,r>D&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-D/2)}let l=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,u=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,d,f,w;if(u)w=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(l)f=i.x,d=t.right-i.x-this._getViewportMarginEnd();else{let A=Math.min(t.right-i.x+t.left,i.x),D=this._lastBoundingBoxSize.width;d=A*2,f=i.x-A,d>D&&!this._isInitialRender&&!this._growAfterOpen&&(f=i.x-D/2)}return{top:s,left:f,bottom:c,right:w,width:d,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=V(t.width),o.height=V(t.height),o.top=V(t.top)||"auto",o.bottom=V(t.bottom)||"auto",o.left=V(t.left)||"auto",o.right=V(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=V(r)),s&&(o.maxWidth=V(s))}this._lastBoundingBoxSize=t,nt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){nt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){nt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let d=this._viewportRuler.getViewportScrollPosition();nt(t,this._getExactOverlayY(e,i,d)),nt(t,this._getExactOverlayX(e,i,d))}else t.position="static";let c="",l=this._getOffset(e,"x"),u=this._getOffset(e,"y");l&&(c+=`translateX(${l}px) `),u&&(c+=`translateY(${u}px)`),t.transform=c.trim(),s.maxHeight&&(o?t.maxHeight=V(s.maxHeight):r&&(t.maxHeight="")),s.maxWidth&&(o?t.maxWidth=V(s.maxWidth):r&&(t.maxWidth="")),nt(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;o.bottom=`${s-(r.y+this._overlayRect.height)}px`}else o.top=V(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let s;if(this._isRtl()?s=i.overlayX==="end"?"left":"right":s=i.overlayX==="end"?"right":"left",s==="right"){let c=this._document.documentElement.clientWidth;o.right=`${c-(r.x+this._overlayRect.width)}px`}else o.left=V(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gc(i,t),isOriginOutsideView:lr(i,t),isOverlayClipped:gc(e,t),isOverlayOutsideView:lr(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Yn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof R)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};wc="cdk-global-overlay-wrapper";Ni=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(wc),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:s,maxHeight:c}=t,l=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),u=(r==="100%"||r==="100vh")&&(!c||c==="100%"||c==="100vh"),d=this._xPosition,f=this._xOffset,w=this._overlayRef.getConfig().direction==="rtl",A="",D="",k="";l?k="flex-start":d==="center"?(k="center",w?D=f:A=f):w?d==="left"||d==="end"?(k="flex-end",A=f):(d==="right"||d==="start")&&(k="flex-start",D=f):d==="left"||d==="start"?(k="flex-start",A=f):(d==="right"||d==="end")&&(k="flex-end",D=f),i.position=this._cssPosition,i.marginLeft=l?"0":A,i.marginTop=u?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":D,e.justifyContent=k,e.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(wc),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Dc=(()=>{class n{_injector=a(M);constructor(){}global(){return Fi()}flexibleConnectedTo(e){return Cn(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fr=new p("OVERLAY_DEFAULT_CONFIG");Mc=(()=>{class n{scrollStrategies=a(Tc);_positionBuilder=a(Dc);_injector=a(M);constructor(){}create(e){return ot(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Su=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Tu=new p("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=a(M);return()=>En(n)}}),ur=(()=>{class n{elementRef=a(R);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Ac=new p("cdk-connected-overlay-default-config"),xu=(()=>{class n{_dir=a(De,{optional:!0});_injector=a(M);_overlayRef;_templatePortal;_backdropSubscription=te.EMPTY;_attachSubscription=te.EMPTY;_detachSubscription=te.EMPTY;_positionSubscription=te.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=a(Tu);_ngZone=a(C);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new U;positionChange=new U;attach=new U;detach=new U;overlayKeydown=new U;overlayOutsideClick=new U;constructor(){let e=a($e),t=a(Fe),o=a(Ac,{optional:!0}),r=a(fr,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new Ue(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Su);let e=this._overlayRef=ot(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!kt(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),r=Q(t);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new it({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Cn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ur?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ur?this.origin.elementRef.nativeElement:this.origin instanceof R?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Mr(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",L],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",L],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",L],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",L],push:[2,"cdkConnectedOverlayPush","push",L],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",L],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",L],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[zt]})}return n})(),Li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({providers:[Mc],imports:[q,cr,To,To]})}return n})()});var Bi=g(()=>{"use strict";pr();pr();fi()});var Ru,Iu,ku,Du,Oc,Mu,Au,Ou,Pu,Nu,gr,Pc,Nc=g(()=>{"use strict";Z();Zo();yi();m();m();fn();Mt();Me();Bi();Ii();no();$();et();Ru=["tooltip"],Iu=20,ku=new p("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=a(M);return()=>En(n,{scrollThrottle:Iu})}}),Du=new p("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})}),Oc="tooltip-panel",Mu={passive:!0},Au=8,Ou=8,Pu=24,Nu=200,gr=(()=>{class n{_elementRef=a(R);_ngZone=a(C);_platform=a(N);_ariaDescriber=a(_a);_focusMonitor=a(Rt);_dir=a(De);_injector=a(M);_viewContainerRef=a(Fe);_mediaMatcher=a($n);_document=a(v);_renderer=a(ye);_animationsDisabled=pe();_defaultOptions=a(Du,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Pc;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ko(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ko(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ze(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ze(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Au}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Y(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new ze(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Y(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof R)return this._overlayRef;this._detach()}let t=this._injector.get(qe).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Oc}`,r=Cn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(Y(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ot(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(ku)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Y(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Y(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Y(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Y(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(_(_({},o.main),r.main)),this._addOffset(_(_({},o.fallback),r.fallback))])}_addOffset(e){let t=Ou,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:s}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:s}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ce(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,s;if(t==="center"?this._dir&&this._dir.value==="rtl"?s=o==="end"?"left":"right":s=o==="start"?"left":"right":s=t==="bottom"&&r==="top"?"above":"below",s!==this._currentPosition){let c=this._overlayRef;if(c){let l=`${this._cssClassPrefix}-${Oc}-`;c.removePanelClass(l+this._currentPosition),c.addPanelClass(l+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Mu))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||ce({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!kt(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&j("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Pc=(()=>{class n{_changeDetectorRef=a(Re);_elementRef=a(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=pe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Pu&&e.width>=Nu}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(t);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&Wt(Ru,7),t&2){let r;mt(r=ft())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&Te("mouseleave",function(s){return o._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(ue(0,"div",1,0),Kr("animationend",function(s){return o._handleAnimationEnd(s)}),ue(2,"div",2),he(3),be()()),t&2&&(Le(o.tooltipClass),j("mdc-tooltip--multiline",o._isMultiline),F(3),Bn(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})()});var Wv,Fc=g(()=>{"use strict";Nc();m();Mt();Me();Bi();fi();Wv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=T({imports:[No,Li,q,an]})}return n})()});var Lc,Bc,Yv,jc,Vc=g(()=>{"use strict";Lc=new WeakMap,Bc=new WeakMap,Yv=(n,i={})=>{if(n<0||!Number.isFinite(n))throw new Error("Wait must be a positive finite number");let e=i.leading!==!1,t=i.trailing!==!1;return(o,r,s)=>{let c=s.value;return s.value=function(...l){let u=Lc.get(this);u||(u=new Map,Lc.set(this,u));let d=u.get(r);d||(d={timeoutId:null,lastCallTime:0,lastArgs:null,lastThis:null,isLeadingInvoked:!1},u.set(r,d));let f=new Date().getTime(),w=n-(f-d.lastCallTime);(w<=0||w>n)&&(d.timeoutId&&(clearTimeout(d.timeoutId),d.timeoutId=null),d.isLeadingInvoked=!1);let A=e&&!d.isLeadingInvoked&&(w<=0||w>n);if(A){d.lastCallTime=f,d.isLeadingInvoked=!0;try{c.apply(this,l)}catch(D){throw D}d.timeoutId&&(d.lastArgs=l,d.lastThis=this)}else d.lastArgs=l,d.lastThis=this;if(t&&!d.timeoutId){let D=A?n:w>0&&w<n?w:n;d.timeoutId=setTimeout(()=>{let k=d.lastArgs!==null,E=k&&t;if(d.timeoutId=null,d.lastCallTime=k?new Date().getTime():0,d.isLeadingInvoked=!1,E&&d.lastArgs&&d.lastThis)try{c.apply(d.lastThis,d.lastArgs)}catch(S){throw d.lastArgs=null,d.lastThis=null,S}d.lastArgs=null,d.lastThis=null},D)}},s}},jc=(n,i={})=>{if(n<0||!Number.isFinite(n))throw new Error("Wait must be a positive finite number");let e=!!i.leading;return(t,o,r)=>{let s=r.value;return r.value=function(...c){let l=Bc.get(this);l||(l=new Map,Bc.set(this,l));let u=l.get(o);u||(u={timeoutId:null,lastCallTime:0,isFirstCall:!0},l.set(o,u));let d=e&&u.isFirstCall;if(u.timeoutId&&(clearTimeout(u.timeoutId),u.timeoutId=null),d){u.isFirstCall=!1,u.lastCallTime=new Date().getTime();try{s.apply(this,c)}catch(f){throw f}}u.timeoutId=setTimeout(()=>{if(u.timeoutId=null,u.lastCallTime=new Date().getTime(),u.isFirstCall=!0,!e)try{s.apply(this,c)}catch(f){throw f}},n)},r}}});var br,zc=g(()=>{"use strict";br={duration:3e3}});function Fu(n,i){if(n&1){let e=Ht();oe(0,"div",1)(1,"button",2),Te("click",function(){jt(e);let o=_e();return Vt(o.action())}),he(2),re()()}if(n&2){let e=_e();F(2),Xt(" ",e.data.action," ")}}function Bu(n,i){}var Lu,ju,rt,ji,Pt,Vu,zu,Uu,Hu,_r,vr,Wu,Xu,Uc,yr=g(()=>{"use strict";m();m();Mt();no();Bi();$();rr();fn();Ii();et();Z();Lu=["label"];ju=Math.pow(2,31)-1,rt=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,ju))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ji=new p("MatSnackBarData"),Pt=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Vu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),zu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Uu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Hu=(()=>{class n{snackBarRef=a(rt);data=a(ji);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,o){t&1&&(oe(0,"div",0),he(1),re(),ne(2,Fu,3,1,"div",1)),t&2&&(F(),Xt(" ",o.data.message,`
`),F(),ie(o.hasAction?2:-1))},dependencies:[vn,Vu,zu,Uu],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),_r="_mat-snack-bar-enter",vr="_mat-snack-bar-exit",Wu=(()=>{class n extends Ot{_ngZone=a(C);_elementRef=a(R);_changeDetectorRef=a(Re);_platform=a(N);_animationsDisabled=pe();snackBarConfig=a(Pt);_document=a(v);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=a(M);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=a(tt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===vr?this._completeExit():e===_r&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ce(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(_r)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(_r)},200)))}exit(){return this._destroyed?z(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ce(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(vr)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(vr),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let o=this._label.nativeElement,r="mdc-snackbar__label";o.classList.toggle(r,!o.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],s=r.getAttribute("aria-owns");this._trackedModals.add(r),s?s.indexOf(e)===-1&&r.setAttribute("aria-owns",s+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let o=t.replace(this._liveElementId,"").trim();o.length>0?e.setAttribute("aria-owns",o):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),o=e.querySelector("[aria-live]");if(t&&o){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),o.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,o){if(t&1&&Wt(ar,7)(Lu,7),t&2){let r;mt(r=ft())&&(o._portalOutlet=r.first),mt(r=ft())&&(o._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,o){t&1&&Te("animationend",function(s){return o.onAnimationEnd(s.animationName)})("animationcancel",function(s){return o.onAnimationEnd(s.animationName)}),t&2&&j("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[le],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(oe(0,"div",1)(1,"div",2,0)(3,"div",3),Yr(4,Bu,0,0,"ng-template",4),re(),ht(5,"div"),re()()),t&2&&(F(5),de("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[ar],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Xu=new p("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Pt}),Uc=(()=>{class n{_live=a(Po);_injector=a(M);_breakpointObserver=a(Gn);_parentSnackBar=a(n,{optional:!0,skipSelf:!0});_defaultConfig=a(Xu);_animationsDisabled=pe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Hu;snackBarContainerComponent=Wu;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",o){let r=_(_({},this._defaultConfig),o);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=M.create({parent:o||this._injector,providers:[{provide:Pt,useValue:t}]}),s=new ze(this.snackBarContainerComponent,t.viewContainerRef,r),c=e.attach(s);return c.instance.snackBarConfig=t,c.instance}_attach(e,t){let o=_(_(_({},new Pt),this._defaultConfig),t),r=this._createOverlay(o),s=this._attachSnackBarContainer(r,o),c=new rt(s,r);if(e instanceof $e){let l=new Ue(e,null,{$implicit:o.data,snackBarRef:c});c.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(o,c),u=new ze(e,void 0,l),d=s.attachComponentPortal(u);c.instance=d.instance}return this._breakpointObserver.observe(ls.HandsetPortrait).pipe(Y(r.detachments())).subscribe(l=>{r.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),o.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(c,o),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new it;t.direction=e.direction;let o=Fi(this._injector),r=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,c=!s&&e.horizontalPosition!=="center";return s?o.left("0"):c?o.right("0"):o.centerHorizontally(),e.verticalPosition==="top"?o.top("0"):o.bottom("0"),t.positionStrategy=o,t.disableAnimations=this._animationsDisabled,ot(this._injector,t)}_createInjector(e,t){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector;return M.create({parent:o||this._injector,providers:[{provide:rt,useValue:t},{provide:ji,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function Yu(n,i){n&1&&(oe(0,"mat-icon",1),he(1,"check_circle "),re())}function $u(n,i){n&1&&(oe(0,"mat-icon",1),he(1,"error "),re())}function Gu(n,i){n&1&&(oe(0,"mat-icon",1),he(1,"warning "),re())}function Ku(n,i){if(n&1&&(ne(0,Yu,2,0,"mat-icon",1),ne(1,$u,2,0,"mat-icon",1),ne(2,Gu,2,0,"mat-icon",1)),n&2){let e=_e();ie(e.data.type==="SUCCESS"?0:-1),F(),ie(e.data.type==="ERROR"?1:-1),F(),ie(e.data.type==="WARNING"?2:-1)}}function Zu(n,i){if(n&1&&(oe(0,"mat-icon",1),he(1),re()),n&2){let e=_e();F(),Bn(e.data.ico)}}function Ju(n,i){if(n&1&&ht(0,"mat-icon",2),n&2){let e=_e();Fn("svgIcon",e.data.svgIco)}}function qu(n,i){if(n&1){let e=Ht();oe(0,"button",9),Te("click",function(){jt(e);let o=_e();return Vt(o.actionClick())}),he(1),jn(2,"translate"),re()}if(n&2){let e=_e();F(),Xt(" ",Vn(2,1,e.data.actionStr)," ")}}function Qu(n,i){if(n&1){let e=Ht();oe(0,"button",10),jn(1,"translate"),jn(2,"translate"),Te("click",function(o){jt(e);let r=_e();return Vt(r.close(o))}),oe(3,"mat-icon"),he(4,"close"),re()()}if(n&2){let e=_e();Fn("matTooltip",Vn(1,2,e.T.G.DISMISS)),de("aria-label",Vn(2,4,e.T.G.DISMISS))}}function eh(n,i){n&1&&ht(0,"mat-progress-bar",8)}var Hc,Wc=g(()=>{"use strict";m();yr();$();Z();uc();rr();fc();so();Fc();qc();m();Hc=(()=>{class n{constructor(){this.data=a(ji),this.snackBarRef=a(rt),this.T=ds,this._subs=new te}ngOnInit(){this.data.promise&&this.data.promise.finally(()=>{this.snackBarRef.dismiss()}),this.data.showWhile$&&this._subs.add(this.data.showWhile$.pipe(st(300)).subscribe(e=>{e||this.snackBarRef.dismiss()}))}ngOnDestroy(){this._subs.unsubscribe()}actionClick(){this.data.actionFn&&this.data.actionFn(),this.snackBarRef.dismissWithAction()}close(e){return Lt(this,null,function*(){e?.stopPropagation(),yield this.data.dismissFn?.(),this.snackBarRef.dismiss()})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=P({type:n,selectors:[["snack-custom"]],decls:10,vars:13,consts:[[1,"wrapper",3,"click"],[1,"snack-icon"],[1,"snack-icon",3,"svgIcon"],[1,"message",3,"innerHtml"],[1,"button-wrapper"],[1,"button-wrapper-inner"],["color","accent","mat-button","",1,"action"],["mat-icon-button","","type","button",1,"close",3,"matTooltip"],["mode","indeterminate"],["color","accent","mat-button","",1,"action",3,"click"],["mat-icon-button","","type","button",1,"close",3,"click","matTooltip"]],template:function(t,o){t&1&&(oe(0,"div",0),Te("click",function(){return!o.data.actionStr&&o.close()}),ne(1,Ku,3,3),ne(2,Zu,2,1,"mat-icon",1),ne(3,Ju,1,1,"mat-icon",2),ht(4,"span",3),oe(5,"div",4)(6,"div",5),ne(7,qu,3,3,"button",6),re()(),ne(8,Qu,5,6,"button",7),ne(9,eh,1,0,"mat-progress-bar",8),re()),t&2&&(j("error",o.data.type==="ERROR")("success",o.data.type==="SUCCESS")("warning",o.data.type==="WARNING"),F(),ie(o.data.ico?-1:1),F(),ie(o.data.ico?2:-1),F(),ie(o.data.svgIco?3:-1),F(),Fn("innerHtml",o.data.msg,Hr),F(3),ie(o.data.actionStr?7:-1),F(),ie(o.data.type==="ERROR"||o.data.type==="WARNING"?8:-1),F(),ie(o.data.promise||o.data.showWhile$||o.data.isSpinner?9:-1))},dependencies:[dc,vn,nr,mc,gr,ps],styles:[`[_nghost-%COMP%]{background:inherit}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:stretch}.snack-icon[_ngcontent-%COMP%]{margin-right:var(--s2);position:relative;z-index:2}.success[_ngcontent-%COMP%]   .snack-icon[_ngcontent-%COMP%]{color:var(--success-green)}.error[_ngcontent-%COMP%]   .snack-icon[_ngcontent-%COMP%]{color:var(--c-warn)}.warning[_ngcontent-%COMP%]   .snack-icon[_ngcontent-%COMP%]{color:var(--c-accent)}.message[_ngcontent-%COMP%]{flex:1;min-width:0;overflow-wrap:anywhere}.action[_ngcontent-%COMP%]{margin:0;margin-left:calc(1.5 * var(--s))}.close[_ngcontent-%COMP%]{flex:0 0 auto;margin-left:var(--s)}.button-wrapper[_ngcontent-%COMP%]{margin-left:auto}.button-wrapper-inner[_ngcontent-%COMP%]{margin-top:-14px;margin-bottom:-14px;margin-right:-8px}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:2px;left:0;right:0}
/*# sourceMappingURL=snack-custom.component-UUKNMBYV.css.map */`],changeDetection:0})}}return n})()});var ky,Xc,Yc=g(()=>{"use strict";Xn();ky=$t("[WorkContext] Load Work Context State",Qi()),Xc=$t("[WorkContext] Set Active Work Context",Qi())});var th,wr,Er,nh=g(()=>{"use strict";m();Zc();Xn();$();Z();zc();Wc();so();yr();$o();Yc();Vc();La();m();th=function(n,i,e,t){var o=arguments.length,r=o<3?i:t===null?t=Object.getOwnPropertyDescriptor(i,e):t,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,i,e,t);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(r=(o<3?s(r):o>3?s(i,e,r):s(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r},wr=function(n,i){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,i)},Er=class n{constructor(){this._store$=a(gt),this._translateService=a(Jt),this._actions$=a(Fa),this._matSnackBar=a(Uc),this._hasPendingPersistentAction=!1,this._actions$.pipe(Ta(Xc)).pipe(ss()).subscribe(()=>{this.close()})}open(i){typeof i=="string"&&(i={msg:i});let e=!!(i.actionStr&&i.config?.duration===0);this._hasPendingPersistentAction&&!e||(this._hasPendingPersistentAction=e,this._openSnack(i))}hasPendingPersistentAction(){return this._hasPendingPersistentAction}close(){this._hasPendingPersistentAction=!1,this._ref&&this._ref.dismiss()}_getDefaultDuration(i,e){if(i!=="ERROR"&&i!=="WARNING")return br.duration;let t=typeof e=="string"?e.length:0;return Math.min(Math.max(1e4,t*90),3e4)}_openSnack(i){let e=new y,t=()=>{e.next(!0),e.unsubscribe()},{msg:o,actionStr:r,actionId:s,actionPayload:c,config:l,type:u,isSkipTranslate:d,translateParams:f={},showWhile$:w,promise:A,isSpinner:D}=i,k=d?o:typeof o=="string"&&this._translateService.instant(o,f),E=We(_(We(_({},br),{duration:this._getDefaultDuration(u,k)}),l),{data:We(_({},i),{msg:k})});(w||A||D)&&(E.panelClass="polling-snack"),this._ref=this._matSnackBar.openFromComponent(Hc,E);let S=this._ref;S?.afterDismissed().pipe(ae(1)).subscribe(()=>{this._ref===S&&(this._hasPendingPersistentAction=!1)}),r&&S&&S.onAction().pipe(ae(1)).subscribe(()=>{this._ref===S&&(this._hasPendingPersistentAction=!1)}),r&&s&&this._ref&&(this._ref.onAction().pipe(Y(e)).subscribe(()=>{this._store$.dispatch({type:s,payload:c}),t()}),this._ref.afterDismissed().pipe(Y(e)).subscribe(()=>{t()}))}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}};th([jc(100),wr("design:type",Function),wr("design:paramtypes",[Object]),wr("design:returntype",void 0)],Er.prototype,"_openSnack",null)});export{vt as a,fs as b,io as c,Jt as d,ps as e,uh as f,so as g,fo as h,ws as i,Cl as j,Dl as k,je as l,ke as m,wt as n,Et as o,Bs as p,vo as q,di as r,Ql as s,ed as t,Vs as u,km as v,on as w,Eo as x,Io as y,ko as z,Q as A,dn as B,fe as C,mn as D,Ze as E,me as F,rn as G,De as H,ui as I,Bm as J,sd as K,sn as L,Us as M,ad as N,$m as O,q as P,Me as Q,qe as R,ld as S,Tt as T,yf as U,an as V,To as W,fi as X,tt as Y,zo as Z,ze as _,Ue as $,Ot as aa,Ri as ba,I_ as ca,ar as da,cr as ea,Ii as fa,kt as ga,yi as ha,Cc as ia,En as ja,it as ka,hr as la,Oi as ma,Cn as na,Pi as oa,Fi as pa,fr as qa,ot as ra,ur as sa,xu as ta,Li as ua,pr as va,Bi as wa,cn as xa,ln as ya,xo as za,Rt as Aa,ud as Ba,Zs as Ca,_i as Da,It as Ea,ap as Fa,ea as Ga,ta as Ha,fd as Ia,sa as Ja,Td as Ka,Po as La,No as Ma,da as Na,Ko as Oa,Gg as Pa,Zo as Qa,Rd as Ra,Fo as Sa,pe as Ta,et as Ua,Bo as Va,jo as Wa,kd as Xa,Dd as Ya,Mt as Za,Ug as _a,fn as $a,xg as ab,Ta as bb,Ig as cb,$o as db,Pa as eb,Og as fb,Na as gb,Fa as hb,jg as ib,La as jb,ge as kb,gn as lb,Qo as mb,lb as nb,Xa as ob,Ka as pb,Za as qb,Qa as rb,ec as sb,$a as tb,Ga as ub,nr as vb,qa as wb,vn as xb,Ub as yb,Hb as zb,Wb as Ab,hu as Bb,rr as Cb,ac as Db,dc as Eb,d_ as Fb,uc as Gb,mc as Hb,w_ as Ib,fc as Jb,gr as Kb,Nc as Lb,Wv as Mb,Fc as Nb,ky as Ob,Xc as Pb,Yc as Qb,Yv as Rb,Vc as Sb,Er as Tb,nh as Ub};
//# sourceMappingURL=chunk-QJLNHCUI.js.map
