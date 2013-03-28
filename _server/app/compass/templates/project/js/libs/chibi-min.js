/*Chibi v1.0.3, (C)2012 Kyle Barrow, MIT Licensed*/(function(){"use strict";function tt(){var e;Q=t;for(e=0;e<J[n];e+=1)J[e]();J=[]}function nt(){var e;G=t;Q||tt();for(e=0;e<K[n];e+=1)K[e]();K=[]}function rt(e,t){var r;for(r=t[n]-1;r>=0;r-=1)e(t[r])}function it(e){return e[u](/-\w/g,function(e){return e.charAt(1)[a]()})}function st(e,t){return e[f]?e[f][it(t)]:et[l]?et[l](e,c).getPropertyValue(t):c}function ot(e,t){return encodeURIComponent(e)[u](/%20/g,"+")+"="+encodeURIComponent(t)[u](/%20/g,"+")}function ut(r){var i=[],s=[],o=e,u;if(r)if(r.nodeType&&r.nodeType===1)i=[r];else if(typeof r=="object"||typeof r[n]=="number"&&typeof r.item===h){o=t;i=r}else if(typeof r===p){Z[d]||(Z[d]=function(e){var t,r=Z[v](m)[0],i,s=[],o;t=Z[g]("STYLE");t.type="text/css";if(t[y]){t[y][b]=e+" {a:b}";r[w](t);i=Z[v]("*");for(o=0;o<i[n];o+=1)st(i[o],"a")==="b"&&s[E](i[o]);r[S](t)}return s});i=Z[d](r)}if(o)s=i;else for(u=0;u<i[n];u+=1)s[u]=i[u];return s}function at(e,t,n){try{e[x][it(t)]=n}catch(r){}}function ft(e){e[x][T]="";st(e,T)===N&&(e[x][T]="block")}function lt(e){e=e.reverse();e[n]===1&&(e=e[0]);return e}function ct(e){var t="",r,i,s;if(e[C]===Object){for(r in e)if(e.hasOwnProperty(r))if(e[r][C]===Array)for(i=0;i<e[r][n];i+=1)t+=k+ot(r,e[r][i]);else t+=k+ot(r,e[r])}else rt(function(e){if(e[L]==="FORM")for(i=0;i<e.elements[n];i+=1){r=e.elements[i];if(!r.disabled)switch(r.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":r[n]>0&&(t+=k+ot(r[A],r[O]));break;case"select-multiple":for(s=0;s<r[n];s+=1)r[s][M]&&(t+=k+ot(r[A],r[s][O]));break;case _:case D:r[P]&&(t+=k+ot(r[A],r[O]));break;default:t+=k+ot(r[A],r[O])}}},e);return t[n]>0?t.substring(1):""}function ht(f){var l=ut(f);return{ready:function(e){e&&(Q?e():J[E](e))},loaded:function(e){e&&(G?e():K[E](e))},loop:function(e){typeof e===h&&rt(function(t){e(t)},l)},find:function(t){if(t){var r=[],i;switch(t){case"first":l[n]>0&&(l=[l.shift()]);break;case"last":l[n]>0&&(l=[l.pop()]);break;case"odd":case"even":for(i=t==="odd"?0:1;i<l[n];i+=2)r[E](l[i]);l=r}}return l[n]>0?l[n]===1?l[0]:l:e},hide:function(){rt(function(e){e[x][T]=N},l)},show:function(){rt(function(e){ft(e)},l)},toggle:function(){rt(function(e){st(e,T)===N?ft(e):e[x][T]=N},l)},remove:function(){var e=l[n];rt(function(e){try{e[H][S](e)}catch(t){}},l);l=[]},css:function(e,t){var r=[];rt(function(n){t?at(n,e,t):n[x][it(e)]?r[E](n[x][it(e)]):st(n,e)?r[E](st(n,e)):r[E](c)},l);if(r[n]>0)return lt(r)},cls:function(r,i){var s=[],o,a,f,c,h;if(r){o=r.split(/\s+/);i=i||u}rt(function(l){a=l[B];if(r){switch(i){case"add":l[B]=a+" "+r;break;case u:l[B]=r;break;case j:case F:case"remove":c=t;for(h=0;h<o[n];h+=1){f=new RegExp("\\b"+o[h]+"\\b","g");if(i===j){if(!a.match(f)){c=e;break}}else i===F?l[B]=l[B].match(f)?l[B][u](f,""):l[B]+" "+o[h]:l[B]=l[B][u](f,"")}i===j&&s[E](c)}l[B]=l[B][u](/^\s+|\s+$/g,"")}else s[E](a)},l);if(s[n]>0)return lt(s)},html:function(e,t){var r=[],i,s;rt(function(n){if(t){i=Z[g]("div");i[I]=e;while((s=i.lastChild)!==c)try{t==="before"?n[H][q](s,n):t==="after"&&n[H][q](s,n.nextSibling)}catch(o){break}}else e?n[I]=e:r[E](n[I])},l);if(r[n]>0)return lt(r)},attr:function(e,t){var r=[];rt(function(n){if(e){e=e.toLowerCase();switch(e){case x:t?n[x][b]=t:n[x][b]?r[E](n[x][b]):r[E](c);break;case"class":t?n[B]=t:n[B]?r[E](n[B]):r[E](c);break;default:t?n.setAttribute(e,t):n[R](e)?r[E](n[R](e)):r[E](c)}}},l);if(r[n]>0)return lt(r)},val:function(r){var i=[],s=[],o,u,a,f;typeof r===p&&(r=[r]);rt(function(l){if(r)switch(l[L]){case U:for(o=0;o<l[n];o+=1)for(u=0;u<r[n];u+=1){l[o][M]="";if(l[o][O]===r[u]){l[o][M]=M;break}}break;case z:switch(l.type){case _:case D:l[P]="";for(o=0;o<r[n];o+=1)if(l[O]===r[o]){l[P]=P;break}break;default:l[O]=r[0]}break;case W:case X:l[O]=r[0]}else switch(l[L]){case U:f=s[n];s[E]([]);for(o=0;o<l[n];o+=1)l[o][M]&&s[f][E](l[o][O]);switch(s[f][n]){case 0:s[f]=c;break;case 1:s[f]=s[f][0]}break;case z:switch(l.type){case _:l[P]?s[E](l[O]):s[E](c);break;case D:a=e;for(o=0;o<i[n];o+=1)if(i[o][0]===l[A]){l[P]&&(s[i[o][1]]=l[O]);a=t}if(!a){i[E]([l[A],s[n]]);l[P]?s[E](l[O]):s[E](c)}break;default:s[E](l[O])}break;case W:case X:s[E](l[O])}},l);if(s[n]>0)return lt(s)},on:function(t,n,s){if(f===et||f===Z)l=[f];rt(function(o){Z[r]?s?o.removeEventListener(t,n,e):o[r](t,n,e):Z[i]&&(s?o.detachEvent("on"+t,n):o[i]("on"+t,n))},l)},ajax:function(e,n,r,i,f){var h,p=ct(l),d=e.indexOf("?")===-1?"?":k,y=new RegExp("http[s]?://(.*?)/","gi"),b=y.exec(e),E="_ts="+ +(new Date),x=Z[v](m)[0],T="chibi"+ +(new Date)+(Y+=1),N;if(!f&&b&&et.location.host!==b[1]){e+=d+p;i&&(e+=k+E);e=e[u]("=%3F",V);if(r&&e.indexOf(V)!==-1){e=e[u](V,"="+T);et[T]=function(e){try{r(e,200)}catch(t){}et[T]=undefined}}N=document[g]("script");N.async=t;N.src=e;N[o]=function(){x[S](N)};x[w](N)}else{n=n||"GET";et.XMLHttpRequest?h=new XMLHttpRequest:et.ActiveXObject&&(h=new ActiveXObject("Microsoft.XMLHTTP"));if(h){n=n[a]();if(n==="GET"){e+=d+p;p=c}i&&(e+=n===$?d+E:k+E);h.open(n,e,t);h[s]=function(){if(h.readyState===4&&r)try{r(h.responseText,h.status)}catch(e){}};n===$&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(p)}}}}}var e=!1,t=!0,n="length",r="addEventListener",i="attachEvent",s="onreadystatechange",o="onload",u="replace",a="toUpperCase",f="currentStyle",l="getComputedStyle",c=null,h="function",p="string",d="querySelectorAll",v="getElementsByTagName",m="head",g="createElement",y="styleSheet",b="cssText",w="appendChild",E="push",S="removeChild",x="style",T="display",N="none",C="constructor",k="&",L="nodeName",A="name",O="value",M="selected",_="checkbox",D="radio",P="checked",H="parentNode",B="className",j="has",F="toggle",I="innerHTML",q="insertBefore",R="getAttribute",U="SELECT",z="INPUT",W="TEXTAREA",X="BUTTON",V="=?",$="POST",J=[],K=[],Q=e,G=e,Y=0,Z=document,et=window;if(Z[r]){Z[r]("DOMContentLoaded",tt,e);et[r]("load",nt,e)}else if(Z[i]){Z[i](s,tt);et[i](o,nt)}else et[o]=nt;et.$=ht})();