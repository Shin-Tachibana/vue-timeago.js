!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueTimeoutJS={},e.vue)}(this,(function(e,t){"use strict";var n=["second","minute","hour","day","week","month","year"];var r=["秒","分钟","小时","天","周","个月","年"];var a={},o=function(e,t){a[e]=t},u=[60,60,24,7,365/7/12,12];function i(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var l=function(e,t,n){return function(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=u[a]&&a<u.length;a++)e/=u[a];return(e=Math.floor(e))>(0==(a*=2)?9:1)&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}(function(e,t){return(+(t?i(t):new Date)-+i(e))/1e3}(e,n&&n.relativeDate),function(e){return a[e]||a.en_US}(t))};o("en_US",(function(e,t){if(0===t)return["just now","right now"];var r=n[Math.floor(t/2)];return e>1&&(r+="s"),[e+" "+r+" ago","in "+e+" "+r]})),o("zh_CN",(function(e,t){if(0===t)return["刚刚","片刻后"];var n=r[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}));const f=t.defineComponent({props:{tag:{type:String,default:"span"},time:{type:[String,Date,Number],required:!0},locale:{type:String,required:!1,default:"en_US"},delay:{type:Number,default:1e3}},setup(e){const n=t.ref(Date.now()),r=t.computed((()=>l(e.time,e.locale,{relativeDate:n.value}))),a=t.toRef(e,"delay");let o;return t.watch(a,(e=>{clearInterval(o),e>0&&(o=setInterval((()=>{n.value=Date.now()}),e))}),{immediate:!0}),t.onBeforeUnmount((()=>{clearInterval(o)})),()=>t.h(e.tag,r.value)}});var c={install(e){e.component("vue-timeagojs",f)}};e.VueTimeoutJS=f,e.default=c,e.register=o,Object.defineProperty(e,"__esModule",{value:!0})}));
