/*! For license information please see component---src-pages-index-js-7be2319701a25ee90fb0.js.LICENSE.txt */
(self.webpackChunkhow_to_gatsby_portfolio=self.webpackChunkhow_to_gatsby_portfolio||[]).push([[678],{5706:function(e,t,r){"use strict";var n=r(8812),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=h(r);i&&i!==p&&e(t,i,n)}var a=u(r);f&&(a=a.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<a.length;++g){var y=a[g];if(!(o[y]||n&&n[y]||m&&m[y]||s&&s[y])){var v=d(r,y);try{l(t,y,v)}catch(b){}}}}return t}},165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case o:case s:case a:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case m:case c:return e;default:return t}}case i:return t}}}function k(e){return S(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(e){return k(e)||S(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===g},t.isMemo=function(e){return S(e)===m},t.isPortal=function(e){return S(e)===i},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===s||e===a||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=S},8812:function(e,t,r){"use strict";e.exports=r(165)},6872:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(i=r?r.call(n,u,f,l):void 0)||void 0===i&&u!==f)return!1}return!0}},2764:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ve}});var n=r(7294),i=r(8812),o=r(6872),a=r.n(o);var s=function(e){function t(e,n,c,l,d){for(var h,p,m,g,w,k=0,C=0,x=0,A=0,E=0,j=0,$=m=h=0,z=0,M=0,D=0,L=0,F=c.length,B=F-1,G="",H="",Y="",U="";z<F;){if(p=c.charCodeAt(z),z===B&&0!==C+A+x+k&&(0!==C&&(p=47===C?10:47),A=x=k=0,F++,B++),0===C+A+x+k){if(z===B&&(0<M&&(G=G.replace(f,"")),0<G.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(z)}p=59}switch(p){case 123:for(h=(G=G.trim()).charCodeAt(0),m=1,L=++z;z<F;){switch(p=c.charCodeAt(z)){case 123:m++;break;case 125:m--;break;case 47:switch(p=c.charCodeAt(z+1)){case 42:case 47:e:{for($=z+1;$<B;++$)switch(c.charCodeAt($)){case 47:if(42===p&&42===c.charCodeAt($-1)&&z+2!==$){z=$+1;break e}break;case 10:if(47===p){z=$+1;break e}}z=$}}break;case 91:p++;case 40:p++;case 34:case 39:for(;z++<B&&c.charCodeAt(z)!==p;);}if(0===m)break;z++}switch(m=c.substring(L,z),0===h&&(h=(G=G.replace(u,"").trim()).charCodeAt(0)),h){case 64:switch(0<M&&(G=G.replace(f,"")),p=G.charCodeAt(1)){case 100:case 109:case 115:case 45:M=n;break;default:M=R}if(L=(m=t(n,M,m,p,d+1)).length,0<T&&(w=s(3,m,M=r(R,G,D),n,P,I,L,p,d,l),G=M.join(""),void 0!==w&&0===(L=(m=w.trim()).length)&&(p=0,m="")),0<L)switch(p){case 115:G=G.replace(S,a);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(y,"$1 $2"))+"{"+m+"}",m=1===_||2===_&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===l&&(H+=m,m="")}else m="";break;default:m=t(n,r(n,G,D),m,l,d+1)}Y+=m,m=D=M=$=h=0,G="",p=c.charCodeAt(++z);break;case 125:case 59:if(1<(L=(G=(0<M?G.replace(f,""):G).trim()).length))switch(0===$&&(h=G.charCodeAt(0),45===h||96<h&&123>h)&&(L=(G=G.replace(" ",":")).length),0<T&&void 0!==(w=s(1,G,n,e,P,I,H.length,l,d,l))&&0===(L=(G=w.trim()).length)&&(G="\0\0"),h=G.charCodeAt(0),p=G.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){U+=G+c.charAt(z);break}default:58!==G.charCodeAt(L-1)&&(H+=i(G,h,p,G.charCodeAt(2)))}D=M=$=h=0,G="",p=c.charCodeAt(++z)}}switch(p){case 13:case 10:47===C?C=0:0===1+h&&107!==l&&0<G.length&&(M=1,G+="\0"),0<T*N&&s(0,G,n,e,P,I,H.length,l,d,l),I=1,P++;break;case 59:case 125:if(0===C+A+x+k){I++;break}default:switch(I++,g=c.charAt(z),p){case 9:case 32:if(0===A+k+C)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===A+C+k&&(M=D=1,g="\f"+g);break;case 108:if(0===A+C+k+O&&0<$)switch(z-$){case 2:112===E&&58===c.charCodeAt(z-3)&&(O=E);case 8:111===j&&(O=j)}break;case 58:0===A+C+k&&($=z);break;case 44:0===C+x+A+k&&(M=1,g+="\r");break;case 34:case 39:0===C&&(A=A===p?0:0===A?p:A);break;case 91:0===A+C+x&&k++;break;case 93:0===A+C+x&&k--;break;case 41:0===A+C+k&&x--;break;case 40:if(0===A+C+k){if(0===h)switch(2*E+3*j){case 533:break;default:h=1}x++}break;case 64:0===C+x+A+k+$+m&&(m=1);break;case 42:case 47:if(!(0<A+k+x))switch(C){case 0:switch(2*p+3*c.charCodeAt(z+1)){case 235:C=47;break;case 220:L=z,C=42}break;case 42:47===p&&42===E&&L+2!==z&&(33===c.charCodeAt(L+2)&&(H+=c.substring(L,z+1)),g="",C=0)}}0===C&&(G+=g)}j=E,E=p,z++}if(0<(L=H.length)){if(M=n,0<T&&(void 0!==(w=s(2,H,M,e,P,I,L,l,d,l))&&0===(H=w).length))return U+H+Y;if(H=M.join(",")+"{"+H+"}",0!=_*O){switch(2!==_||o(H,2)||(O=0),O){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}O=0}}return U+H+Y}function r(e,t,r){var i=t.trim().split(m);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<o;++s)for(var l=0;l<a;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var a=e+";",s=2*t+3*r+4*n;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===_||2===_&&o(c,1)?"-webkit-"+c+c:c}if(0===_||2===_&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(E,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return h.test(a)?a.replace(d,":-webkit-")+a.replace(d,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(w,"tb");break;case 232:c=a.replace(w,"tb-rl");break;case 220:c=a.replace(w,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(C,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(C,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function o(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),$(2!==t?n:n.replace(x,"$1"),r,t)}function a(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,o,a,s,c,u){for(var f,d=0,h=t;d<T;++d)switch(f=j[d].call(l,e,h,r,n,i,o,a,s,c,u)){case void 0:case!1:case!0:case null:break;default:h=f}if(h!==t)return h}function c(e){return void 0!==(e=e.prefix)&&($=null,e?"function"!=typeof e?_=1:(_=2,$=e):_=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var i=s(-1,r,n,n,P,I,0,0,0,0);void 0!==i&&"string"==typeof i&&(r=i)}var o=t(R,n,r,0,0);return 0<T&&(void 0!==(i=s(-2,o,n,n,P,I,o.length,0,0,0))&&(o=i)),"",O=0,I=P=1,o}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,C=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,I=1,P=1,O=0,_=1,R=[],j=[],T=0,$=null,N=0;return l.use=function e(t){switch(t){case void 0:case null:T=j.length=0;break;default:if("function"==typeof t)j[T++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=r(5706),d=r.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,i.typeOf)(e)},g=Object.freeze([]),y=Object.freeze({});function v(e){return"function"==typeof e}function b(e){return e.displayName||e.name||"Component"}function w(e){return e&&"string"==typeof e.styledComponentId}var S="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,C=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),x={};function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var E=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&A(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),I=new Map,P=new Map,O=1,_=function(e){if(I.has(e))return I.get(e);for(;P.has(O);)O++;var t=O++;return I.set(e,t),P.set(t,e),t},R=function(e){return P.get(e)},j=function(e,t){I.set(e,t),P.set(t,e)},T="style["+S+'][data-styled-version="5.2.3"]',$=new RegExp("^"+S+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),N=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},z=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match($);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(j(l,c),N(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},M=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},D=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(S))return n}}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(S,"active"),n.setAttribute("data-styled-version","5.2.3");var a=M();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},L=function(){function e(e){var t=this.element=D(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}A(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),F=function(){function e(e){var t=this.element=D(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),B=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),G=k,H={isServer:!k,useCSSOMInjection:!C},Y=function(){function e(e,t,r){void 0===e&&(e=y),void 0===t&&(t={}),this.options=h({},H,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&k&&G&&(G=!1,function(e){for(var t=document.querySelectorAll(T),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(S)&&(z(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return _(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(h({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new B(i):n?new L(i):new F(i),new E(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(_(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(_(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(_(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var o=R(i);if(void 0!==o){var a=e.names.get(o),s=t.getGroup(i);if(void 0!==a&&0!==s.length){var c=S+".g"+i+'[id="'+o+'"]',l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),U=/(a)(d)/gi,W=function(e){return String.fromCharCode(e+(e>25?39:97))};function q(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=W(t%52)+r;return(W(t%52)+r).replace(U,"$1-$2")}var V=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},X=function(e){return V(5381,e)};function Z(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(v(r)&&!w(r))return!1}return!0}var J=X("5.2.3"),K=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Z(e),this.componentId=t,this.baseHash=V(J,t),this.baseStyle=r,Y.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var o=ge(this.rules,e,t,r).join(""),a=q(V(this.baseHash,o.length)>>>0);if(!t.hasNameForId(n,a)){var s=r(o,"."+a,void 0,n);t.insertRules(n,a,s)}i.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,l=V(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var h=ge(d,e,t,r),p=Array.isArray(h)?h.join(""):h;l=V(l,p+f),u+=p}}if(u){var m=q(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}i.push(m)}}return i.join(" ")},e}(),Q=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,r,n,i,o=void 0===e?y:e,a=o.options,c=void 0===a?y:a,l=o.plugins,u=void 0===l?g:l,f=new s(c),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,o,a,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),p=function(e,n,o){return 0===n&&-1!==ee.indexOf(o[r.length])||o.match(i)?e:"."+t};function m(e,o,a,s){void 0===s&&(s="&");var c=e.replace(Q,""),l=o&&a?a+" "+o+" { "+c+" }":c;return t=s,r=o,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),f(a||!o?"":o,l)}return f.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,p))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||A(15),V(e,t.name)}),5381).toString():"",m}var re=n.createContext(),ne=(re.Consumer,n.createContext()),ie=(ne.Consumer,new Y),oe=te();function ae(){return(0,n.useContext)(re)||ie}function se(){return(0,n.useContext)(ne)||oe}function ce(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],i=t[1],o=ae(),s=(0,n.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=(0,n.useMemo)((function(){return te({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,n.useEffect)((function(){a()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),n.createElement(re.Provider,{value:s},n.createElement(ne.Provider,{value:c},e.children))}var le=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=oe);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return A(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),ue=/([A-Z])/,fe=/([A-Z])/g,de=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function pe(e){return ue.test(e)?e.replace(fe,he).replace(de,"-ms-"):e}var me=function(e){return null==e||!1===e||""===e};function ge(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=ge(e[a],t,r,n))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return me(e)?"":w(e)?"."+e.styledComponentId:v(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:ge(e(t),t,r,n):e instanceof le?r?(e.inject(r,n),e.getName(n)):e:m(e)?function e(t,r){var n,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!me(t[a])&&(m(t[a])?o.push.apply(o,e(t[a],a)):v(t[a])?o.push(pe(a)+":",t[a],";"):o.push(pe(a)+": "+(n=a,(null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in c?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(o,["}"]):o}(e):e.toString();var l}function ye(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return v(e)||m(e)?ge(p(g,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ge(p(e,r))}new Set;var ve=function(e,t,r){return void 0===r&&(r=y),e.theme!==r.theme&&e.theme||t||r.theme},be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function Se(e){return e.replace(be,"-").replace(we,"")}var ke=function(e){return q(X(e)>>>0)};function Ce(e){return"string"==typeof e&&!0}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ae=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ee(e,t,r){var n=e[r];xe(t)&&xe(n)?Ie(n,t):e[r]=t}function Ie(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(xe(a))for(var s in a)Ae(s)&&Ee(e,a[s],s)}return e}var Pe=n.createContext();Pe.Consumer;var Oe={};function _e(e,t,r){var i=w(e),o=!Ce(e),a=t.attrs,s=void 0===a?g:a,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Se(e);Oe[r]=(Oe[r]||0)+1;var n=r+"-"+ke("5.2.3"+r+Oe[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,f=t.displayName,p=void 0===f?function(e){return Ce(e)?"styled."+e:"Styled("+b(e)+")"}(e):f,m=t.displayName&&t.componentId?Se(t.displayName)+"-"+t.componentId:t.componentId||l,S=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,k=t.shouldForwardProp;i&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(r,n){return e.shouldForwardProp(r,n)&&t.shouldForwardProp(r,n)}:e.shouldForwardProp);var C,x=new K(r,m,i?e.componentStyle:void 0),A=x.isStatic&&0===s.length,E=function(e,t){return function(e,t,r,i){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,f=e.styledComponentId,d=e.target,p=function(e,t,r){void 0===e&&(e=y);var n=h({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,o,a=e;for(t in v(a)&&(a=a(n)),a)n[t]=i[t]="className"===t?(r=i[t],o=a[t],r&&o?r+" "+o:r||o):a[t]})),[n,i]}(ve(t,(0,n.useContext)(Pe),s)||y,t,o),m=p[0],g=p[1],b=function(e,t,r,n){var i=ae(),o=se();return t?e.generateAndInjectStyles(y,i,o):e.generateAndInjectStyles(r,i,o)}(a,i,m),w=r,S=g.$as||t.$as||g.as||t.as||d,k=Ce(S),C=g!==t?h({},t,{},g):t,x={};for(var A in C)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?x.as=C[A]:(l?l(A,u):!k||u(A))&&(x[A]=C[A]));return t.style&&g.style!==t.style&&(x.style=h({},t.style,{},g.style)),x.className=Array.prototype.concat(c,f,b!==f?b:null,t.className,g.className).filter(Boolean).join(" "),x.ref=w,(0,n.createElement)(S,x)}(C,e,t,A)};return E.displayName=p,(C=n.forwardRef(E)).attrs=S,C.componentStyle=x,C.displayName=p,C.shouldForwardProp=k,C.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):g,C.styledComponentId=m,C.target=i?e.target:e,C.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),o=n&&n+"-"+(Ce(e)?e:Se(b(e)));return _e(e,h({},i,{attrs:S,componentId:o}),r)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Ie({},e.defaultProps,t):t}}),C.toString=function(){return"."+C.styledComponentId},o&&d()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Re=function(e){return function e(t,r,n){if(void 0===n&&(n=y),!(0,i.isValidElementType)(r))return A(1,String(r));var o=function(){return t(r,n,ye.apply(void 0,arguments))};return o.withConfig=function(i){return e(t,r,h({},n,{},i))},o.attrs=function(i){return e(t,r,h({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},o}(_e,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Re[e]=Re(e)}));var je=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Z(e),Y.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var i=n(ge(this.rules,t,r,n).join(""),""),o=this.componentId+e;r.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&Y.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=M();return"<style "+[r&&'nonce="'+r+'"',S+'="true"','data-styled-version="5.2.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?A(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return A(2);var r=((t={})[S]="",t["data-styled-version"]="5.2.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),i=M();return i&&(r.nonce=i),[n.createElement("style",h({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Y({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?A(2):n.createElement(ce,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return A(3)}}();var Te,$e=Re;var Ne,ze,Me=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o=ye.apply(void 0,[e].concat(r)),a="sc-global-"+ke(JSON.stringify(o)),s=new je(o,a);function c(e){var t=ae(),r=se(),i=(0,n.useContext)(Pe),o=(0,n.useRef)(t.allocateGSInstance(a)).current;return(0,n.useLayoutEffect)((function(){return l(o,e,t,i,r),function(){return s.removeStyles(o,t)}}),[o,e,t,i,r]),null}function l(e,t,r,n,i){if(s.isStatic)s.renderStyles(e,x,r,i);else{var o=h({},t,{theme:ve(t,n,c.defaultProps)});s.renderStyles(e,o,r,i)}}return n.memo(c)}(Te||(Ne=['\n    * {\n        box-sizing: border-box;\n    }\n    html {\n        width: 100%;\n        height: 100%;\n    }\n    body {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        background-color: white;\n        color: black;\n        font-size: 1.125rem;\n        font-family: "Roboto", Arial, Helvetica, sans-serif;\n        line-height: 1.5rem;\n        font-weight: 400;\n    }\n    h1 {\n        font-weight: 700;\n        font-size: 2rem;\n        line-height: 2.375rem;\n        color: black;\n        @media (min-width: 1200px) {\n            font-size: 2.625rem;\n            line-height: 4rem;\n        }\n    }\n    h2 {\n        font-weight: 700;\n        font-size: 1.25rem;\n        line-height: 1.5rem;\n        color: black;\n        @media (min-width: 1200px) {\n            font-size: 2rem;\n            line-height: 3rem;\n        }\n    }\n    a {\n        display: inline-block;\n        text-decoration: none;\n        text-decoration-skip-ink: auto;\n        color: inherit;\n        cursor: pointer;\n        &:hover,\n        &:focus {\n          outline: 0;\n        }\n    }\n'],ze||(ze=Ne.slice(0)),Ne.raw=ze,Te=Ne)),De=r(5444),Le=$e.header.withConfig({displayName:"header__StyledHeader",componentId:"oti3kn-0"})(["width:100%;max-width:62.5rem;height:6.25rem;margin:0 auto;padding:0 2.5rem;background:white;display:flex;justify-content:flex-start;align-items:center;"]),Fe=$e.div.withConfig({displayName:"header__StyledLogo",componentId:"oti3kn-1"})(["font-size:2rem;font-weight:900;color:black;"]),Be=function(){return n.createElement(Le,null,n.createElement(De.Link,{to:"/","aria-label":"home"},n.createElement(Fe,null,"Nydan")))},Ge=$e.footer.withConfig({displayName:"footer__StyledFooter",componentId:"rjc3ut-0"})(["width:100%;height:6.25rem;margin:0 auto;padding:0 2.5rem;background:black;color:white;display:flex;justify-content:center;align-items:center;font-size:0.8rem;text-transform:uppercase;letter-spacing:+1px;font-weight:700;"]),He=function(){return n.createElement(Ge,null,n.createElement("a",{href:"https://github.com/Nydan",target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},n.createElement("span",{role:"img","aria-label":"emoji"},"👏 Put my github here?")))},Ye=$e.div.withConfig({displayName:"layout__StyledLayout",componentId:"ng2nl1-0"})(["width:100%;min-height:100vh;margin:0 auto;display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:100%;#main-content{width:100%;max-width:62.5rem;margin:0 auto;padding:0 2.5rem;}"]),Ue=function(e){var t=e.children;return n.createElement(Ye,null,n.createElement(Me,null),n.createElement(Be,null),n.createElement("main",{id:"main-content"},t),n.createElement(He,null))},We=$e.section.withConfig({displayName:"hero__StyledSection",componentId:"sc-1fbtvxh-0"})([".title{margin-bottom:0;}.subtitle{margin-top:0;}.highlighted{box-shadow:inset 0 -2.5rem 0 #cdf3e1}"]),qe=function(e){var t=e.content,r=t.frontmatter,i=t.rawMarkdownBody;return n.createElement(We,{id:"hero"},n.createElement("h1",{className:"title"},r.greetings," ",n.createElement("span",{role:"img","aria-label":"emoji"},r.emoji),n.createElement("br",null),r.title),n.createElement("h2",{className:"subtitle"},r.subtitlePrefix," ",n.createElement("span",{className:"highlighted"},r.subtitleHighlight)),n.createElement("div",{className:"description"},i))},Ve=function(e){var t=e.data.hero.edges.map((function(e){return n.createElement(qe,{content:e.node})}));return n.createElement(Ue,null,t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-7be2319701a25ee90fb0.js.map