import{c as Ve,d as Xi,i as $e,j as rn,k as Ye,l as cn}from"./chunk-JS4C4IPW.js";import{q as We,r as on}from"./chunk-Q2CTO2HA.js";import{b as Ne,c as je,g as Yi}from"./chunk-C7Q4KTPZ.js";import{a as _e,b as Ii,m as He,n as nn,q as Ke,r as sn,u as Qe,v as an}from"./chunk-XKNKYYKF.js";import{a as Ge,c as tn}from"./chunk-B3W5IAVB.js";import{x as qe,y as en}from"./chunk-W7CRA6RJ.js";import{V as Ue,W as Ji,x as Be,y as Zi}from"./chunk-6PGHIYF3.js";import{a as H,b as at,c as ze,d as Ct,p as $i}from"./chunk-VOJXVR4G.js";import{c as Re,d as Wi}from"./chunk-CDQFLBSW.js";import{a as Pe,b as Qi}from"./chunk-6IDYYLMX.js";import{a as Le,b as qi,c as Me,d as Hi}from"./chunk-AURIKYTG.js";import{a as Fe,b as Ki}from"./chunk-Z5JFLE3U.js";import{$ as Vi,O as Ce,P as Ni,S as Oe,U as ji,_ as It,aa as De,ba as Bi}from"./chunk-W6FOKJTS.js";import{a as Se,b as Ri}from"./chunk-GOW6KSYU.js";import{a as ge,b as Ti}from"./chunk-KG3OGIXT.js";import{a as q,b as Li}from"./chunk-PKJ5GXYB.js";import{a as wt,d as Si}from"./chunk-EU4JQVFP.js";import{a as Tt,b as Gi}from"./chunk-BRCXC7YQ.js";import{G as nt,H as ue,Ka as ke,bb as Ai,c as it,d as wi,ja as ve}from"./chunk-KPOSC2QV.js";import{a as fe,c as Di}from"./chunk-SWR2BRIO.js";import{F as Ae,O as Ui,i as de,o as ki,y as Ee}from"./chunk-ZUETY5CO.js";import{$a as Mi,C as re,E as ce,Ea as gi,Eb as Ie,Fa as le,Gb as zi,Ha as fi,Oa as P,Qa as bi,Ta as me,Tb as st,Ua as vi,Ub as Te,c as ee,d as ie,g as hi,lb as xe,mb as ye,ob as Fi,pb as we,qb as Pi,r as ne,u as pi,w as se,x as ui}from"./chunk-QJLNHCUI.js";import{a as oe}from"./chunk-XOEN2BZP.js";import{Ja as be,Ka as Ei}from"./chunk-PV72UEWO.js";import{k as F,l as Oi}from"./chunk-CKDI5GE5.js";import{a as St,d as Ci}from"./chunk-X6ME5BAF.js";import{m as ae,w as _i}from"./chunk-IVMMFXV5.js";import{c as yt,e as xi,m as pe,n as yi}from"./chunk-VDVHBXCV.js";import{a as T,b as he}from"./chunk-4GWPIVBZ.js";import{a as vt,b as di}from"./chunk-4PHA374J.js";import{a as U,q as te}from"./chunk-BJMTKLSK.js";import{a as G,g as kt,h as xt}from"./chunk-Y4WU6BKH.js";import{$c as M,Ca as mt,Cb as Wt,D as Vt,Dc as _t,Ea as g,Ec as B,F as Bt,Fc as X,Gc as Z,Hb as ht,Od as O,Qa as Kt,Tc as $t,Ud as et,Va as Qt,Vc as J,W as Ut,Wc as gt,Xc as A,Yb as j,Yc as ft,Za as z,Zc as Yt,_ as Gt,_b as C,_c as L,a as Rt,bc as V,cb as dt,ed as bt,fd as tt,gb as N,ib as $,id as Xt,ie as I,jd as Zt,l as zt,ma as qt,pa as Ht,s as S,t as Nt,ta as lt,u as jt,uc as Y,wc as pt,xd as Jt,yc as ut,za as E}from"./chunk-J4GNA76R.js";import{a as _,b as x,c as Pt,d as W,e as w,j as v}from"./chunk-PE6UJDCZ.js";function ln(n){if(!isFinite(n))return 0;let m=1,t=0;for(;Math.round(n*m)/m!==n;)m*=10,t++;return t}function y(n){return n===""||n==null}function K(n){return n!=null&&typeof n=="object"&&!Array.isArray(n)}function mn(n){return Number.isInteger?Number.isInteger(n):typeof n=="number"&&Math.floor(n)===n}function Ot(n){return typeof n=="object"&&(n.hasOwnProperty("const")||n.enum&&n.enum.length===1)}function dn(n){if(n===""||n===void 0)return;if(n===null)return null;if(typeof n=="number")return n;let m=parseFloat(n);return isNaN(m)?n:m}function ot(n){if(!n.fieldGroup)return H(n)&&at(n)!==void 0?1:0;let m=n.fieldGroup.reduce((t,e)=>ot(e)+t,0);if(m===0&&H(n)){let t=at(n);if(t===null||t!==void 0&&(n.fieldArray&&Array.isArray(t)||!n.fieldArray&&K(t)))return 1}return m}var $n,hn=w(()=>{"use strict";I();Ui();$i();dt();$n=(()=>{class n{toFieldConfig(t,e){return t=Ct(t),this._toFieldConfig(t,_({schema:t},e||{}))}_toFieldConfig(t,r){var l=r,{key:e,isOptional:i}=l,s=W(l,["key","isOptional"]);t=this.resolveSchema(t,s);let c=this.guessSchemaType(t),a={type:c[0],defaultValue:t.default,props:{label:t.title,readonly:t.readOnly,description:t.description}};if(e!=null&&(a.key=e),!s.ignoreDefault&&(t.readOnly||s.readOnly)&&(a.props.disabled=!0,s=x(_({},s),{readOnly:!0})),s.resetOnHide&&(a.resetOnHide=!0),s.shareFormControl===!1&&(a.shareFormControl=!1),a.defaultValue===void 0&&c.length===1&&i===!1)switch(c[0]){case"null":{a.defaultValue=null;break}case"string":{a.defaultValue="";break}case"object":{a.defaultValue={};break}case"array":{a.defaultValue=t.minItems>0?Array.from(new Array(t.minItems)):[];break}}switch(s.ignoreDefault&&delete a.defaultValue,this.addValidator(a,"type",{schemaType:c,expression:({value:o})=>{if(o===void 0||o===null&&c.indexOf("null")!==-1)return!0;switch(c[0]){case"null":return typeof o===null;case"string":return typeof o=="string";case"integer":return mn(o);case"number":return typeof o=="number";case"object":return K(o);case"array":return Array.isArray(o)}return!0}}),a.type){case"number":case"integer":{a.parsers=[(o,p)=>{if(o=dn(o),o===null&&p){let h=typeof document<"u"&&p.id?document.querySelector(`#${p.id}`):void 0;h&&h.validity&&!h.validity.badInput&&(o=void 0),o!==p.formControl.value&&p.formControl.setValue(o,{emitModelToViewChange:!1})}return o}],t.hasOwnProperty("minimum")&&(a.props.min=t.minimum),t.hasOwnProperty("maximum")&&(a.props.max=t.maximum),t.hasOwnProperty("exclusiveMinimum")&&(a.props.exclusiveMinimum=t.exclusiveMinimum,this.addValidator(a,"exclusiveMinimum",({value:o})=>y(o)||o>t.exclusiveMinimum)),t.hasOwnProperty("exclusiveMaximum")&&(a.props.exclusiveMaximum=t.exclusiveMaximum,this.addValidator(a,"exclusiveMaximum",({value:o})=>y(o)||o<t.exclusiveMaximum)),t.hasOwnProperty("multipleOf")&&(a.props.step=t.multipleOf,this.addValidator(a,"multipleOf",({value:o})=>{if(y(o)||typeof o!="number"||o===0||t.multipleOf<=0)return!0;let p=Math.pow(10,ln(t.multipleOf));return Math.round(o*p)%Math.round(t.multipleOf*p)===0}));break}case"string":{a.parsers=[(o,p)=>(c.indexOf("null")!==-1?o=y(o)?null:o:p&&!p.props.required&&(o=o===""?void 0:o),o)],["minLength","maxLength","pattern"].forEach(o=>{t.hasOwnProperty(o)&&(a.props[o]=t[o])});break}case"object":{a.fieldGroup||(a.fieldGroup=[]);let{propDeps:o,schemaDeps:p}=this.resolveDependencies(t);Object.keys(t.properties||{}).forEach(h=>{let u=Array.isArray(t.required)&&t.required.indexOf(h)!==-1,f=this._toFieldConfig(t.properties[h],x(_({},s),{key:h,isOptional:i||!u}));if(a.fieldGroup.push(f),(u||o[h])&&(f.expressions=x(_({},f.expressions||{}),{"props.required":k=>{let d=k.parent,b=k.fieldGroup&&k.key!=null?d.model:k.model;for(;d.key==null&&d.parent;)d=d.parent;let D=d&&d.props?d.props.required:!1;return!b&&!D?!1:Array.isArray(t.required)&&t.required.indexOf(h)!==-1?!0:o[h]&&k.model&&o[h].some(R=>!y(k.model[R]))}})),p[h]){let k=b=>b.hasOwnProperty("const")?b.const:b.enum[0],d=p[h].oneOf;d&&d.every(b=>b.properties&&b.properties[h]&&Ot(b.properties[h]))?d.forEach(b=>{let Mt=b.properties,{[h]:D}=Mt,R=W(Mt,[Pt(h)]);a.fieldGroup.push(x(_({},this._toFieldConfig(x(_({},b),{properties:R}),x(_({},s),{shareFormControl:!1,resetOnHide:!0}))),{expressions:{hide:Ft=>!Ft.model||k(D)!==Ft.model[h]}}))}):a.fieldGroup.push(x(_({},this._toFieldConfig(p[h],s)),{expressions:{hide:b=>!b.model||y(b.model[h])}}))}}),t.oneOf&&a.fieldGroup.push(this.resolveMultiSchema("oneOf",t.oneOf,x(_({},s),{shareFormControl:!1}))),t.anyOf&&a.fieldGroup.push(this.resolveMultiSchema("anyOf",t.anyOf,s)),s.conditionalSchemas&&s.conditionalSchemas.forEach(u=>{let f=u._ifCondition;if(f&&u.properties){let k={fieldGroup:[],expressions:{hide:d=>{if(!d.model)return!0;let D=d.model[f.property]===f.value;return f.negate?D:!D}}};Object.keys(u.properties).forEach(d=>{let b=u.properties[d];if(!b)return;let D=Array.isArray(u.required)&&u.required.indexOf(d)!==-1,R=this._toFieldConfig(b,x(_({},s),{key:d,isOptional:!D,resetOnHide:!0}));k.fieldGroup.push(R)}),a.fieldGroup.push(k)}});break}case"array":{t.hasOwnProperty("minItems")&&(a.props.minItems=t.minItems,this.addValidator(a,"minItems",({value:o})=>y(o)||o.length>=t.minItems),!i&&t.minItems>0&&a.defaultValue===void 0&&(a.defaultValue=Array.from(new Array(t.minItems)))),t.hasOwnProperty("maxItems")&&(a.props.maxItems=t.maxItems,this.addValidator(a,"maxItems",({value:o})=>y(o)||o.length<=t.maxItems)),t.hasOwnProperty("uniqueItems")&&(a.props.uniqueItems=t.uniqueItems,this.addValidator(a,"uniqueItems",({value:o})=>y(o)||!t.uniqueItems?!0:Array.from(new Set(o.map(h=>JSON.stringify(h,(u,f)=>K(f)?Object.keys(f).sort().reduce((k,d)=>(k[d]=f[d],k),{}):f)))).length===o.length)),t.items&&!Array.isArray(t.items)&&(t.items=this.resolveSchema(t.items,s)),this.isEnum(t)||(a.fieldArray=o=>{let p=o.fieldGroup?o.fieldGroup.length:0,h=t.items;if(!Array.isArray(h)){if(!h)return{};let k=h.oneOf||h.anyOf,d=this._toFieldConfig(h,k?x(_({},s),{key:`${p}`,isOptional:!1}):x(_({},s),{isOptional:!1}));return k&&!H(d)&&(d.key=null),d}let u=h[p]?h[p]:t.additionalItems,f=u?this._toFieldConfig(u,s):{};return f.props&&(f.props.required=!0),h[p]&&(f.props.removable=!1),f});break}}if(t.hasOwnProperty("const")&&(a.props.const=t.const,this.addValidator(a,"const",({value:o})=>o===t.const),a.type||(a.defaultValue=t.const)),this.isEnum(t)){let o=this.toEnumOptions(t),p=a.type==="array";a.type="enum",a.props.multiple=p,a.props.options=o;let h=o.map(u=>u.value);this.addValidator(a,"enum",({value:u})=>u===void 0?!0:p?Array.isArray(u)?u.every(f=>h.includes(f)):!1:h.includes(u))}return t.oneOf&&!a.type&&(delete a.key,a.fieldGroup=[this.resolveMultiSchema("oneOf",t.oneOf,x(_({},s),{key:e,shareFormControl:!1}))]),t.anyOf&&!a.type&&(delete a.key,a.fieldGroup=[this.resolveMultiSchema("oneOf",t.anyOf,x(_({},s),{key:e,shareFormControl:!1}))]),t.widget?.formlyConfig&&(a=this.mergeFields(a,t.widget.formlyConfig)),a.templateOptions=a.props,s.map?s.map(a,t):a}resolveSchema(t,e){if(t&&t.$ref&&(t=this.resolveDefinition(t,e)),t&&t.allOf&&(t=this.resolveAllOf(t,e)),t&&(t.if||t.then||t.else)){let i=this.resolveIfThenElse(t,e);i.length>0&&(e.conditionalSchemas=i)}return t}resolveAllOf(s,i){var r=s,{allOf:t}=r,e=W(r,["allOf"]);if(!t.length)throw Error(`allOf array can not be empty ${t}.`);return t.reduce((l,c)=>(c=this.resolveSchema(c,i),l.required&&c.required&&(l.required=[...l.required,...c.required]),c.uniqueItems&&(l.uniqueItems=c.uniqueItems),["maxLength","maximum","exclusiveMaximum","maxItems","maxProperties"].forEach(a=>{!y(l[a])&&!y(c[a])&&(l[a]=l[a]<c[a]?l[a]:c[a])}),["minLength","minimum","exclusiveMinimum","minItems","minProperties"].forEach(a=>{!y(l[a])&&!y(c[a])&&(l[a]=l[a]>c[a]?l[a]:c[a])}),ze(l,c)),e)}resolveMultiSchema(t,e,i){return{type:"multischema",fieldGroup:[{type:"enum",defaultValue:-1,props:{multiple:t==="anyOf",options:e.map((s,r)=>({label:s.title,value:r,disabled:s.readOnly}))},hooks:{onInit:s=>s.formControl.valueChanges.pipe(Ht(()=>s.options.detectChanges(s.parent)))}},{fieldGroup:e.map((s,r)=>x(_({},this._toFieldConfig(s,x(_({},i),{resetOnHide:!0}))),{expressions:{hide:(l,c)=>{let a=l.parent.parent.fieldGroup[0].formControl;if(a.value===-1||c){let o=l.parent.fieldGroup.map((p,h)=>[p,h,this.isFieldValid(p,h,e,i)]).sort(([p,,h],[u,,f])=>{if(h!==f)return f?1:-1;let k=ot(p),d=ot(u);return k===d&&p.props.disabled===u.props.disabled?0:d>k?1:-1}).map(([,p])=>p);if(t==="anyOf"){let p=o.filter(h=>ot(l.parent.fieldGroup[h]));o=p.length>0?p:[o[0]||0]}o=o.length>0?o:[0],a.setValue(t==="anyOf"?o:o[0])}return Array.isArray(a.value)?a.value.indexOf(r)===-1:a.value!==r}}}))}]}}resolveDefinition(t,e){let[i,s]=t.$ref.split("#/");if(i)throw Error(`Remote schemas for ${t.$ref} not supported yet.`);let r=s?s.split("/").reduce((l,c)=>l?.hasOwnProperty(c)?l[c]:null,e.schema):null;if(!r)throw Error(`Cannot find a definition for ${t.$ref}.`);return r.$ref?this.resolveDefinition(r,e):_(_({},r),["title","description","default","widget"].reduce((l,c)=>(t.hasOwnProperty(c)&&(l[c]=t[c]),l),{}))}resolveDependencies(t){let e={},i={};return Object.keys(t.dependencies||{}).forEach(s=>{let r=t.dependencies[s];Array.isArray(r)?r.forEach(l=>{e[l]?e[l].push(s):e[l]=[s]}):i[s]=r}),{propDeps:e,schemaDeps:i}}extractIfCondition(t){if(t.properties){let e=Object.keys(t.properties)[0];if(e){let i=t.properties[e];if(i&&i.hasOwnProperty("const"))return{property:e,value:i.const}}}return null}resolveIfThenElse(t,e){let i=[];if(t.if&&typeof t.if=="object"){let s=this.extractIfCondition(t.if);if(s){if(t.then&&typeof t.then=="object"){let r=this.resolveConditionalSchema(t.then,e);i.push(x(_({},r),{_ifCondition:s}))}if(t.else&&typeof t.else=="object"){let r=this.resolveConditionalSchema(t.else,e);i.push(x(_({},r),{_ifCondition:{property:s.property,value:s.value,negate:!0}}))}}}return i}resolveConditionalSchema(t,e){let i=t;return t.$ref&&(i=this.resolveDefinition(t,e)),i.allOf&&(i=this.resolveAllOf(i,e)),i}guessSchemaType(t){let e=t?.type;return!e&&t?.properties?["object"]:Array.isArray(e)?e.length===1?e:e.length===2&&e.indexOf("null")!==-1?e.sort(i=>i=="null"?1:-1):e:e?[e]:[]}addValidator(t,e,i){t.validators=t.validators||{},t.validators[e]=i}isEnum(t){return!!t.enum||t.anyOf&&t.anyOf.every(Ot)||t.oneOf&&t.oneOf.every(Ot)||t.uniqueItems&&t.items&&!Array.isArray(t.items)&&this.isEnum(t.items)}toEnumOptions(t){if(t.enum)return t.enum.map(i=>({value:i,label:i}));let e=i=>{let s=i.hasOwnProperty("const")?i.const:i.enum[0],r={value:s,label:i.title||s};return i.readOnly&&(r.disabled=!0),r};return t.anyOf?t.anyOf.map(e):t.oneOf?t.oneOf.map(e):this.toEnumOptions(t.items)}isFieldValid(t,e,i,s){let r=i[e];r._field||Object.defineProperty(r,"_field",{enumerable:!1,writable:!0,configurable:!0});let l=r._field,c=t.model?t.model:t.fieldArray?[]:{};return t.model&&H(t)&&(c={[Array.isArray(t.key)?t.key.join("."):t.key]:at(t)}),c=Ct(c),l?(l.model=c,t.options.build(l)):l=r._field=t.options.build({form:Array.isArray(c)?new Ae([]):new Ee({}),fieldGroup:[this._toFieldConfig(r,x(_({},s),{resetOnHide:!0,ignoreDefault:!0,map:null}))],model:c,options:{}}),l.form.valid}mergeFields(t,e){for(let i in e){let s=i==="templateOptions"?"props":i;K(t[s])&&K(e[i])?t[s]=this.mergeFields(t[s],e[i]):e[i]!=null&&(t[s]=e[i])}return t}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var Xe,rt,is,pn=w(()=>{"use strict";I();te();xt();I();Xe="sp_task_widget_settings",rt={isEnabled:!1,isAlwaysShow:!1,opacity:95},is=(()=>{class n{constructor(){this._settings=z(this._loadFromStorage()),this.settings=this._settings.asReadonly(),U&&this._notifyElectron(this._settings())}update(t){let e=_(_({},this._settings()),t);this._settings.set(e),this._persistToStorage(e),U&&this._notifyElectron(e)}_loadFromStorage(){if(typeof localStorage>"u")return _({},rt);try{let t=localStorage.getItem(Xe);if(!t)return _({},rt);let e=JSON.parse(t);return _(_({},rt),e)}catch(t){return G.err("Failed to read task widget settings from localStorage",t),_({},rt)}}_persistToStorage(t){if(!(typeof localStorage>"u"))try{localStorage.setItem(Xe,JSON.stringify(t))}catch(e){G.err("Failed to persist task widget settings to localStorage",e)}}_notifyElectron(t){typeof window>"u"||!window.ea||window.ea.updateTaskWidgetSettings(t)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var un,Ze,Je=w(()=>{"use strict";te();un=["win-store","mac-store","linux-snap"],Ze=()=>{if(!U)return!1;let n=window.ea?.getDistChannel?.();return!n||!un.includes(n)}});var ti,ei,ii=w(()=>{"use strict";ti=n=>{let m=n.trim().replace(/^v/i,"").match(/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?/);return m?{major:Number(m[1]),minor:Number(m[2]),patch:Number(m[3]),prerelease:m[4]??null}:null},ei=(n,m)=>{let t=ti(n),e=ti(m);return!t||!e?!1:t.major!==e.major?t.major>e.major:t.minor!==e.minor?t.minor>e.minor:t.patch!==e.patch?t.patch>e.patch:t.prerelease===null&&e.prerelease!==null}});var _n,gn,fn,bn,vn,ws,kn=w(()=>{"use strict";I();pi();lt();dt();di();he();ue();ii();Hi();qi();Te();Si();xt();Je();I();_n="https://api.github.com/repos/super-productivity/super-productivity/releases/latest",gn=30*1e3,fn=1440*60*1e3,bn=15*1e3,vn=/^v?\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/,ws=(()=>{class n{constructor(){this._http=g(ne),this._globalConfigService=g(nt),this._bannerService=g(Me),this._snackService=g(st),this._isCheckInFlight=!1}init(){Ze()&&this._globalConfigService.misc$.pipe(jt(t=>t?.isCheckForUpdates!==!1),Ut(),qt(t=>t?Vt(gn,fn):zt)).subscribe(()=>this.checkForUpdate())}checkForUpdate(){return v(this,arguments,function*({isUserTriggered:t=!1}={}){if(!this._isCheckInFlight){this._isCheckInFlight=!0;try{let i=(yield S(this._http.get(_n,{headers:{Accept:"application/vnd.github+json"}}).pipe(Nt(bn)))).tag_name;if(!i||!vn.test(i))throw new Error("Malformed release data");if(!ei(i,vt.version)){t&&this._snackService.open({type:"SUCCESS",msg:T.APP.UPDATE_CHECK.UP_TO_DATE,translateParams:{version:vt.version}});return}if(!t&&localStorage.getItem(wt.UPDATE_CHECK_DISMISSED_VERSION)===i)return;this._showUpdateBanner(i)}catch(e){G.log("Update check failed",{error:e?.message}),t&&this._snackService.open({type:"ERROR",msg:T.APP.UPDATE_CHECK.ERROR})}finally{this._isCheckInFlight=!1}}})}_showUpdateBanner(t){let e=`https://github.com/super-productivity/super-productivity/releases/tag/${t}`;this._bannerService.open({id:Le.UpdateAvailable,msg:T.APP.B_UPDATE_AVAILABLE.MSG,translateParams:{version:t},ico:"file_download",isHideDismissBtn:!0,action:{label:T.APP.B_UPDATE_AVAILABLE.DOWNLOAD,fn:()=>{this._rememberVersion(t),window.ea.openExternalUrl(e)}},action2:{label:T.G.DISMISS,fn:()=>this._rememberVersion(t)}})}_rememberVersion(t){localStorage.setItem(wt.UPDATE_CHECK_DISMISSED_VERSION,t)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var xn,yn,wn,Sn,In,Tn,Cn,On,Dn,En,ni,An,Ln,Mn,Dt,Fn,aa,oa,Pn=w(()=>{"use strict";I();I();bi();Mi();gi();lt();Fi();vi();Pi();fi();xn=["*"],yn=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,wn=["unscopedContent"],Sn=["text"],In=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Tn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"],Cn=new mt("ListOption"),On=(()=>{class n{_elementRef=g($);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Dn=(()=>{class n{_elementRef=g($);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),En=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),ni=(()=>{class n{_listOption=g(Cn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,hostVars:4,hostBindings:function(e,i){e&2&&tt("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),An=(()=>{class n extends ni{static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(n)))(i||n)}})();static \u0275dir=C({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[V]})}return n})(),Ln=(()=>{class n extends ni{static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(n)))(i||n)}})();static \u0275dir=C({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[V]})}return n})(),Mn=new mt("MAT_LIST_CONFIG"),Dt=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=P(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(P(t))}_disabled=z(!1);_defaultOptions=g(Mn,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,hostVars:1,hostBindings:function(e,i){e&2&&Y("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Fn=(()=>{class n{_elementRef=g($);_ngZone=g(Qt);_listBase=g(Dt,{optional:!0});_platform=g(oe);_hostElement;_isButtonElement;_noopAnimations=me();_avatars;_icons;set lines(t){this._explicitLines=ce(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=P(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(P(t))}_disabled=z(!1);_subscriptions=new Rt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){g(re).load(we);let t=g(ye,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new xe(this,this._ngZone,this._hostElement,this._platform,g(Kt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Bt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",s),i.classList.toggle("mdc-list-item__secondary-text",!s)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,contentQueries:function(e,i,s){if(e&1&&ft(s,An,4)(s,Ln,4),e&2){let r;L(r=M())&&(i._avatars=r),L(r=M())&&(i._icons=r)}},hostVars:4,hostBindings:function(e,i){e&2&&(Y("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),tt("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),aa=(()=>{class n extends Dt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(n)))(i||n)}})();static \u0275cmp=j({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Jt([{provide:Dt,useExisting:n}]),V],ngContentSelectors:xn,decls:1,vars:0,template:function(e,i){e&1&&(gt(),A(0))},styles:[yn],encapsulation:2,changeDetection:0})}return n})(),oa=(()=>{class n extends Fn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=P(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(n)))(i||n)}})();static \u0275cmp=j({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,s){if(e&1&&ft(s,Dn,5)(s,On,5)(s,En,5),e&2){let r;L(r=M())&&(i._lines=r),L(r=M())&&(i._titles=r),L(r=M())&&(i._meta=r)}},viewQuery:function(e,i){if(e&1&&Yt(wn,5)(Sn,5),e&2){let s;L(s=M())&&(i._unscopedContent=s.first),L(s=M())&&(i._itemText=s.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(Y("aria-current",i._getAriaCurrent()),tt("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[V],ngContentSelectors:Tn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(gt(In),A(0),B(1,"span",1),A(2,1),A(3,2),B(4,"span",2,0),$t("cdkObserveContent",function(){return i._updateItemLines(!0)}),A(6,3),X()(),A(7,4),A(8,5),Z(9,"div",3))},dependencies:[le],encapsulation:2,changeDetection:0})}return n})()});var si,Rn,zn,Et,la,Nn=w(()=>{"use strict";Ti();si=0,Rn=["username","userName","loginName","password","token","apiKey","secret","authorization","notes","authCode","accessToken","host","gitlabBaseUrl","nextcloudBaseUrl","icalUrl","organization","syncFilePath","syncFolderPath","title","originalImgPath","path","content","repo","repoFullname","filterUserName","filterUsername","caldavUrl","api_key","resourceName","name","description","location","calProviderId","summary","filterIncludeRegex","filterExcludeRegex"],zn=(n,m,t)=>Rn.includes(n)&&m.length>0?`${n}__${t}`:m,Et=n=>{if(!(typeof n!="object"||n===null))for(let m in n){if(Object.prototype.hasOwnProperty.call(n,m)){let t=n[m];Array.isArray(t)?t.forEach(e=>{typeof e=="object"&&e!==null&&Et(e)}):typeof t=="object"&&t!==null?Et(t):typeof t=="string"&&(n[m]=zn(m,t,si))}si++}},la=n=>{let m=ge(n);return Et(m),JSON.stringify(m)}});var jn,Vn,Bn,ai,oi=w(()=>{"use strict";xt();Yi();jn="./assets/snd",Vn=50,Bn=300,ai=(n,m=0)=>v(null,null,function*(){let t=`${jn}/${n.doneSound}`;kt.log(t);let e=n.isIncreaseDoneSoundPitch?Math.min(m*Vn,Bn):0;try{let i=yield Ne(t);yield je(i,n.volume,s=>{s.detune.value=e})}catch(i){kt.err("Error playing done sound:",i)}})});function Un(n,m){if(n&1&&Z(0,"div",2),n&2){let t=J();bt("width",t.size()+"px")("height",t.size()+"px"),_t("innerHTML",m,Wt)}}function Gn(n,m){if(n&1&&(B(0,"mat-icon"),Xt(1),X()),n&2){let t=J();bt("font-size",t.size()+"px"),ht(),Zt(t.fallbackIcon())}}var ya,qn=w(()=>{"use strict";I();ui();Ji();zi();Zi();I();ya=(()=>{class n{constructor(){this._sanitizer=g(se),this._pluginService=g(Ue),this.pluginId=et.required(),this.size=et(24),this.fallbackIcon=et("extension"),this.sanitizedSvg=O(()=>{let t=this.pluginId(),i=this._pluginService.getPluginIconsSignal()().get(t);if(!i)return null;let s=Be(i);return s?this._sanitizer.bypassSecurityTrustHtml(s):null})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=j({type:n,selectors:[["plugin-icon"]],inputs:{pluginId:[1,"pluginId"],size:[1,"size"],fallbackIcon:[1,"fallbackIcon"]},decls:2,vars:1,consts:[[1,"plugin-svg-icon",3,"innerHTML","width","height"],[3,"font-size"],[1,"plugin-svg-icon",3,"innerHTML"]],template:function(e,i){if(e&1&&pt(0,Un,1,5,"div",0)(1,Gn,2,3,"mat-icon",1),e&2){let s;ut((s=i.sanitizedSvg())?0:1,s)}},dependencies:[Ie],styles:[`[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:flex;flex:1}.plugin-svg-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.plugin-svg-icon[_ngcontent-%COMP%]     svg{width:100%;height:100%;fill:currentColor}
/*# sourceMappingURL=plugin-icon.component-L4N33Y6P.css.map */`],changeDetection:0})}}return n})()});var At,ct,ri,ci,Lt,li,Sa,mi=w(()=>{"use strict";At=n=>{let m=new Set(n.map(t=>t.id));return n.filter(t=>!t.parentId||!m.has(t.parentId))},ct=n=>{let m=[],t=[];return n.forEach(e=>(e.parentId?t:m).push(e)),{eligible:m,skippedSubtasks:t}},ri=(n,m)=>{let t=e=>e.id===m?2:e.parentId?0:1;return[...n].sort((e,i)=>t(e)-t(i))},ci=n=>n.some(m=>!m.isDone)?"done":"undone",Lt=(n,m)=>n.length>0&&n.every(t=>t.tagIds.includes(m))?"remove":"add",li=n=>{let m=new Set;return n.filter(t=>t.repeatCfgId?m.has(t.repeatCfgId)?!1:(m.add(t.repeatCfgId),!0):!0)},Sa=n=>{if(!n.length)return null;let m=n[0].projectId??null;return n.every(t=>(t.projectId??null)===m)?m:null}});var po,Hn=w(()=>{"use strict";I();_i();ki();lt();dt();Bi();Ii();nn();Qi();Te();Ri();ue();Ni();xi();Ai();Oi();Ei();Gi();en();an();he();Ci();Li();wi();sn();Ki();ji();Vi();oi();yi();hi();Xi();mi();on();tn();Wi();Di();rn();cn();I();po=(()=>{class n{constructor(){this._store=g(ae),this._taskService=g(De),this._multiSelect=g(_e),this._moveToProjectService=g(He),this._projectService=g(Pe),this._matDialog=g(de),this._snackService=g(st),this._dateService=g(Se),this._globalConfigService=g(nt),this._workContextService=g(Ce),this._translateService=g(ie),this._translateStore=g(ee),this._datePipe=g(Re),this._taskEntities=this._store.selectSignal(ve),this.isFeedbackSuppressed=this._multiSelect.isBulkFeedbackSuppressed,this.selectedTasks=O(()=>{let t=this._taskEntities(),e=this._multiSelect.selectedIds(),i=[];return e.forEach(s=>{let r=t[s];r&&i.push(r)}),i}),this.hasUndone=O(()=>this.selectedTasks().some(t=>!t.isDone)),this.hasParentTasks=O(()=>this.selectedTasks().some(t=>!t.parentId)),this.hasScheduled=O(()=>this.selectedTasks().some(t=>!!t.dueDay||!!t.dueWithTime)),this.hasDeadline=O(()=>this.selectedTasks().some(t=>!!t.deadlineDay||!!t.deadlineWithTime)),this.hasEstimatable=O(()=>this.selectedTasks().some(t=>!t.subTaskIds.length))}toggleDone(){return ci(this.selectedTasks())==="done"?this.markDone():this.markUndone()}markDone(){return v(this,null,function*(){let t=ri(this._resolveInVisualOrder().filter(i=>!i.isDone),this._taskService.currentTaskId());if(!t.length){this._snackNothingToDo();return}let e=this._getFocusTargetAfterRemoval();yield this._runSuppressed(()=>t.forEach(i=>this._taskService.setDone(i.id))),yield this._playDoneSoundOnce(),this._snack("DONE",t.length,{},"check"),this._finish(e)})}markUndone(){return v(this,null,function*(){let t=this._resolveInVisualOrder().filter(i=>i.isDone);if(!t.length){this._snackNothingToDo();return}let e=this._getFocusTargetAfterRemoval();yield this._runSuppressed(()=>t.forEach(i=>this._taskService.setUnDone(i.id))),this._snack("UNDONE",t.length),this._finish(e)})}deleteSelected(){return v(this,null,function*(){let t=At(this._resolveInVisualOrder());if(!t.length)return;if(t.length===1&&this._multiSelect.selectedIds().size===1){yield this._deleteSingle(t[0]);return}if(!(yield S(this._matDialog.open(Tt,{data:{okTxt:T.F.TASK.MULTI_SELECT.D_CONFIRM_DELETE.OK,message:this._plural("F.TASK.MULTI_SELECT.D_CONFIRM_DELETE.MSG",t.length),translateParams:{count:t.length}}}).afterClosed())))return;let i=this._getFocusTargetAfterRemoval(),{eligible:s,skippedSubtasks:r}=ct(t),l=(yield Promise.all(r.map(c=>this._withSubTasks(c)))).filter(c=>!!c);yield this._runSuppressed(()=>{l.forEach(c=>this._taskService.remove(c)),s.length&&this._taskService.removeMultipleTasks(s.map(c=>c.id))}),this._multiSelect.clear(),this._finish(i)})}_deleteSingle(t){return v(this,null,function*(){if((this._globalConfigService.cfg()?.tasks?.isConfirmBeforeDelete??!0)&&!(yield S(this._matDialog.open(Tt,{data:{okTxt:T.F.TASK.D_CONFIRM_DELETE.OK,message:T.F.TASK.D_CONFIRM_DELETE.MSG,translateParams:{title:Fe(t.title)}}}).afterClosed())))return;let i=this._getFocusTargetAfterRemoval(),s=yield this._withSubTasks(t);s&&this._taskService.remove(s),this._multiSelect.clear(),yield this._flush(),this._finish(i)})}moveToProject(t){return v(this,null,function*(){let{eligible:e,skippedSubtasks:i}=ct(At(this._resolveInVisualOrder())),s=li(e.filter(c=>c.projectId!==t));if(!s.length){this._snackNothingToDo();return}let r=this._getFocusTargetAfterRemoval(),l=0;this._multiSelect.setBulkFeedbackSuppressed(!0);try{for(let c of s.filter(a=>!a.repeatCfgId)){let a=yield this._withSubTasks(c);a&&(yield this._moveToProjectService.moveToProject(a,t))&&l++}for(let c of s.filter(a=>!!a.repeatCfgId)){let a=yield this._withSubTasks(c);a&&(yield this._moveToProjectService.moveToProject(a,t))&&l++}yield this._flush()}finally{this._multiSelect.setBulkFeedbackSuppressed(!1)}if(l||i.length){let c=yield S(this._projectService.getByIdOnce$(t));this._snackMoved("MOVED_TO_PROJECT",l,i.length,{projectTitle:c?.title??""},"forward")}this._finish(r)})}toggleTag(t){return v(this,null,function*(){let e=this._resolveInVisualOrder(),i=Lt(e,t),s=e.filter(r=>i==="add"?!r.tagIds.includes(t):r.tagIds.includes(t));s.length&&(yield this._runSuppressed(()=>s.forEach(r=>this._taskService.updateTags(r,i==="add"?[...r.tagIds,t]:r.tagIds.filter(l=>l!==t)))),this._finish())})}isTagOnAllSelected(t){return Lt(this.selectedTasks(),t)==="remove"}openScheduleDialog(){return v(this,null,function*(){let t=this._resolveInVisualOrder().filter(i=>!i.isDone);if(!t.length){this._snackNothingToDo();return}let e=yield S(this._matDialog.open(qe,{autoFocus:!1,data:{isSelectDueOnly:!0}}).afterClosed());!e||typeof e!="object"||!e.date||(yield this.scheduleFor(e,t))})}scheduleFor(t,e){return v(this,null,function*(){let i=e??this._resolveInVisualOrder().filter(u=>!u.isDone);if(!t.date||!i.length)return;let s=St(t.date),r=this._dateService.todayStr(),l=!!t.time&&it(t.time),c=this._globalConfigService.cfg()?.reminder.defaultTaskRemindOption??pe.reminder.defaultTaskRemindOption,a=this._getFocusTargetAfterRemoval(),o=[],p=0;if(yield this._runSuppressed(()=>{i.forEach(u=>{if(l){let f=q(t.time,t.date);this._taskService.scheduleTask(u,f,t.remindOption??yt.DoNotRemind,!1),p++}else if(u.dueWithTime&&!(s===r&&this._dateService.isToday(u.dueWithTime))){let f=Ke(t.date,new Date(u.dueWithTime));this._taskService.scheduleTask(u,f.getTime(),c,!1),p++}else s===r?o.push(u.id):u.dueDay!==s&&(this._store.dispatch(be.planTaskForDay({task:u,day:s,isShowSnack:!1})),p++)}),o.length&&(this._store.dispatch(F.planTasksForToday({taskIds:o,today:r,startOfNextDayDiffMs:this._dateService.getStartOfNextDayDiffMs(),parentTaskMap:Object.fromEntries(i.filter(u=>o.includes(u.id)).map(u=>[u.id,u.parentId]))})),p+=o.length)}),!p){this._snackNothingToDo(),this._restoreFocus(a);return}let h=l?this._datePipe.transform(q(t.time,t.date),"short"):this._datePipe.transform(t.date,"shortDate");this._snack("SCHEDULED",p,{date:h||""},"schedule"),this._finish(a)})}unschedule(){return v(this,null,function*(){let t=this._resolveInVisualOrder().filter(i=>!!i.dueDay||!!i.dueWithTime);if(!t.length){this._snackNothingToDo();return}let e=this._getFocusTargetAfterRemoval();yield this._runSuppressed(()=>t.forEach(i=>this._store.dispatch(F.unscheduleTask({id:i.id,isSkipToast:!0})))),this._snack("UNSCHEDULED",t.length,{},"event_busy"),this._finish(e)})}addToToday(){return v(this,null,function*(){let t=this._dateService.todayStr(),e=this._resolveInVisualOrder().filter(s=>!s.isDone&&s.dueDay!==t&&!(s.dueWithTime&&this._dateService.isToday(s.dueWithTime)));if(!e.length){this._snackNothingToDo();return}let i=this._getFocusTargetAfterRemoval();this._store.dispatch(F.planTasksForToday({taskIds:e.map(s=>s.id),today:t,startOfNextDayDiffMs:this._dateService.getStartOfNextDayDiffMs(),parentTaskMap:Object.fromEntries(e.map(s=>[s.id,s.parentId])),isShowSnack:!0})),yield this._flush(),this._finish(i)})}openDeadlineDialog(){return v(this,null,function*(){let t=this._resolveInVisualOrder();if(!t.length)return;let e=yield S(this._matDialog.open(Qe,{autoFocus:!1,data:{isSelectDeadlineOnly:!0}}).afterClosed());if(!e||typeof e!="object")return;let i=e;if(i.date===null){yield this.removeDeadline();return}yield this._runSuppressed(()=>{t.forEach(r=>{if(i.time&&it(i.time)){let l=q(i.time,i.date),c=i.remindOption&&i.remindOption!==yt.DoNotRemind?Oe(l,i.remindOption):void 0;this._store.dispatch(F.setDeadline(_({taskId:r.id,deadlineWithTime:l,deadlineRemindAt:c},It(this._dateService,void 0,l))))}else{let l=St(i.date);this._store.dispatch(F.setDeadline(_({taskId:r.id,deadlineDay:l},It(this._dateService,l))))}})});let s=i.time&&it(i.time)?this._datePipe.transform(q(i.time,i.date),"short"):this._datePipe.transform(i.date,"shortDate");this._snack("DEADLINE_SET",t.length,{date:s||""},"flag"),this._finish()})}removeDeadline(){return v(this,null,function*(){let t=this._resolveInVisualOrder().filter(e=>!!e.deadlineDay||!!e.deadlineWithTime);if(!t.length){this._snackNothingToDo();return}yield this._runSuppressed(()=>t.forEach(e=>this._store.dispatch(F.removeDeadline({taskId:e.id})))),this._snack("DEADLINE_REMOVED",t.length),this._finish()})}setEstimate(t){return v(this,null,function*(){let e=this._resolveInVisualOrder().filter(i=>!i.subTaskIds.length&&i.timeEstimate!==t);if(!e.length){this._snackNothingToDo();return}yield this._runSuppressed(()=>e.forEach(i=>this._taskService.update(i.id,{timeEstimate:t}))),t?this._snack("ESTIMATE_SET",e.length,{estimate:fe(t)},"timer"):this._snack("ESTIMATE_CLEARED",e.length),this._finish()})}setPriority(t){return v(this,null,function*(){let e=this._resolveInVisualOrder().filter(i=>(i.priority??null)!==t);if(!e.length){this._snackNothingToDo();return}yield this._runSuppressed(()=>e.forEach(i=>this._taskService.update(i.id,{priority:t}))),t?this._snack("PRIORITY_SET",e.length,{priority:this._translateService.instant(We[t])},"priority_high"):this._snack("PRIORITY_CLEARED",e.length),this._finish()})}moveToBacklog(){return v(this,null,function*(){yield this._moveBetweenProjectLists("backlog")})}moveToRegularList(){return v(this,null,function*(){yield this._moveBetweenProjectLists("regular")})}_moveBetweenProjectLists(t){return v(this,null,function*(){let{isEnableBacklog:e}=yield S(this._workContextService.activeWorkContext$);if(!e)return;let{eligible:i,skippedSubtasks:s}=ct(this._resolveInVisualOrder()),r=i.filter(c=>!!c.projectId);if(!r.length){this._snackNothingToDo();return}let l=this._getFocusTargetAfterRemoval();yield this._runSuppressed(()=>r.forEach(c=>t==="backlog"?this._projectService.moveTaskToBacklog(c.id,c.projectId):this._projectService.moveTaskToTodayList(c.id,c.projectId))),this._snackMoved(t==="backlog"?"MOVED_TO_BACKLOG":"MOVED_TO_REGULAR",r.length,s.length),this._finish(l)})}_resolveInVisualOrder(){let t=this._taskEntities();return this._multiSelect.selectedIdsInDomOrder().map(e=>t[e]).filter(e=>!!e)}_withSubTasks(t){return v(this,null,function*(){return S(this._store.select(ke,{id:t.id}).pipe(Gt()))})}_runSuppressed(t){return v(this,null,function*(){this._multiSelect.setBulkFeedbackSuppressed(!0);try{t(),yield this._flush()}finally{this._multiSelect.setBulkFeedbackSuppressed(!1)}})}_flush(){return new Promise(t=>setTimeout(t,0))}_playDoneSoundOnce(){return v(this,null,function*(){let t=this._globalConfigService.sound();if(!t?.doneSound)return;let e=yield S(this._workContextService.flatDoneTodayNr$);ai(t,e)})}_plural(t,e){return Ve(this._translateService,this._translateStore,e,t)}_snack(t,e,i={},s){this._snackService.open({type:"SUCCESS",ico:s,msg:this._plural(`F.TASK.MULTI_SELECT.S.${t}`,e),translateParams:_({count:e},i)})}_snackMoved(t,e,i,s={},r){if(!i){this._snack(t,e,s,r);return}this._snackService.open({type:"CUSTOM",ico:"info",msg:`F.TASK.MULTI_SELECT.S.${t}.PARTIAL`,translateParams:_({count:e,total:e+i},s)})}_snackNothingToDo(){this._snackService.open({type:"CUSTOM",ico:"info",msg:T.F.TASK.MULTI_SELECT.S.NOTHING_TO_DO})}_getFocusTargetAfterRemoval(){if(Ge())return null;let t=this._multiSelect.selectedIds(),e=this._multiSelect.selectionScope(),i=e?.matches("[data-board-selection-scope]")?e:null,s=Array.from((i??document).querySelectorAll('task, planner-task[data-task-selectable="true"]')).filter(d=>!d.closest("task-detail-panel")&&!this._multiSelect.isDestroyedHost(d)),r=s.some(d=>d.matches("planner-task")&&t.has(d.dataset.taskId??"")),l=s.filter(d=>d.matches(r?"planner-task":"task")),c=d=>d.getAttribute("data-task-id")??"",a=d=>{for(let b=d.parentElement?.closest("task");b;b=b.parentElement?.closest("task"))if(t.has(c(b)))return!0;return!1},o=-1;if(l.forEach((d,b)=>{t.has(c(d))&&(o=b)}),o===-1)return null;let p=d=>!t.has(c(d))&&!a(d),h=l.slice(o+1).find(p)??l.slice(0,o).reverse().find(p);if(h)return i?h:c(h);let f=l.find(d=>d.matches("planner-task")&&t.has(c(d)))?.closest("[data-planner-selection-scope], [data-board-selection-scope]");if(!f)return null;let k=f.querySelector($e);return k||f.matches("[data-board-selection-scope]")?k??null:Ye(f)}_finish(t=null){if(this._multiSelect.isTouchSelectionMode()){this._multiSelect.clear();return}this._restoreFocus(t)}_restoreFocus(t){let e=document.activeElement,i=e?.closest('task, planner-task[data-task-selectable="true"]');if(!!e&&e!==document.body&&e.isConnected&&!(i&&this._multiSelect.isDestroyedHost(i)))return;let r=typeof t=="string"?this._multiSelect.findLiveRowEl(t):t;r?.isConnected&&r.focus({preventScroll:!0})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});export{la as a,Nn as b,ai as c,oi as d,$n as e,hn as f,is as g,pn as h,Ze as i,Je as j,ws as k,kn as l,ya as m,qn as n,aa as o,oa as p,Pn as q,Sa as r,mi as s,po as t,Hn as u};
//# sourceMappingURL=chunk-TPT6UI7J.js.map
