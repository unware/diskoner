/*! sly 1.0.0 - 24th Mar 2013 | https://github.com/Darsain/sly */
(function(h,w,ma){function ia(f,a,na){var oa,k,pa,x,G,w,P;function Z(){var b=0;e.old=h.extend({},e);s=C?0:D[a.horizontal?"width":"height"]();$=E[a.horizontal?"width":"height"]();m=C?f:p[a.horizontal?"outerWidth":"outerHeight"]();y.length=0;e.start=0;e.end=Math.max(m-s,0);q={};if(z){var n=j.length;u=p.children(a.itemSelector);j.length=0;var I=aa(p,a.horizontal?"paddingLeft":"paddingTop"),d=aa(p,a.horizontal?"paddingRight":"paddingBottom"),l=aa(u,a.horizontal?"marginLeft":"marginTop"),b=aa(u.slice(-1),
a.horizontal?"marginRight":"marginBottom"),qa=0,na="none"!==u.css("float"),b=l?0:b;m=0;u.each(function(b,n){var c=h(n),e=c[a.horizontal?"outerWidth":"outerHeight"](!0),f=aa(c,a.horizontal?"marginLeft":"marginTop"),c=aa(c,a.horizontal?"marginRight":"marginBottom"),g={el:n,size:e,half:e/2,start:m-(!b||a.horizontal?0:f),center:m-Math.round(s/2-e/2),end:m-s+e-(l?0:c)};b||(qa=-(H?Math.round(s/2-e/2):0)+I,m+=I);m+=e;!a.horizontal&&!na&&c&&(f&&0<b)&&(m-=Math.min(f,c));b===u.length-1&&(m+=d);j.push(g)});
p[0].style[a.horizontal?"width":"height"]=m+"px";m-=b;e.start=qa;e.end=H?j.length?j[j.length-1].center:qa:Math.max(m-s,0);if(g.activeItem>=j.length||0===n&&0<j.length)ja(0<j.length?j.length-1:0)}e.center=Math.round(e.end/2+e.start/2);h.extend(g,ra(void 0));t&&0<$&&(Q=a.dynamicHandle?Math.round($*s/m):t[a.horizontal?"outerWidth":"outerHeight"](),a.dynamicHandle&&(Q=J(Q,a.minHandleSize,$),t[0].style[a.horizontal?"width":"height"]=Q+"px"),r.end=$-Q,R||ha());if(!C&&0<s){var k=e.start,n="";if(z)h.each(j,
function(b,a){if(H||a.start+a.size>k)k=a[H?"center":"start"],y.push(k),k+=s});else for(;k-s<=e.end;)y.push(k),k+=s;if(S[0]){for(b=0;b<y.length;b++)n+=a.pageBuilder.call(c,b);ka=S.html(n).children()}}F(J(e.dest,e.start,e.end));g.slideeSize=m;g.frameSize=s;g.sbSize=$;g.handleSize=Q;A("load")}function F(b,n,I){if(z&&d.released&&!I){I=ra(b);var f=b>e.start&&b<e.end;K?(f&&(b=j[I.centerItem].center),H&&a.activateMiddle&&ja(I.centerItem)):f&&(b=j[I.firstItem].start)}d.init&&d.slidee&&a.elasticBounds?b>e.end?
b=e.end+(b-e.end)/6:b<e.start&&(b=e.start+(b-e.start)/6):b=J(b,e.start,e.end);oa=+new Date;k=0;pa=e.cur;x=b;G=b-e.cur;w=d.tweese||d.init&&!d.slidee;P=n||d.init&&d.slidee&&!d.tweese;d.tweese=0;b!==e.dest&&(e.dest=b,A("change"),R||Y());d.released&&!c.isPaused&&c.resume();h.extend(g,ra(void 0));ya();ka[0]&&q.page!==g.activePage&&(q.page=g.activePage,ka.removeClass(a.activeClass).eq(g.activePage).addClass(a.activeClass),A("activePage",q.page))}function Y(){R?(P?e.cur=x:w?e.cur+=(x-e.cur)*(d.released?
a.swingSpeed:a.syncSpeed):(k=Math.min(+new Date-oa,a.speed),e.cur=pa+G*jQuery.easing[a.easing](k/a.speed,k,0,1,a.speed)),x===Math.round(e.cur)?(e.cur=x,d.tweese=R=0):R=fa(Y),A("move"),C||(v?p[0].style[v]=sa+(a.horizontal?"translateX":"translateY")+"("+-e.cur+"px)":p[0].style[a.horizontal?"left":"top"]=-Math.round(e.cur)+"px"),!R&&d.released&&A("moveEnd"),ha()):(R=fa(Y),d.released&&A("moveStart"))}function ha(){t&&(r.cur=e.start===e.end?0:((d.init&&!d.slidee?e.dest:e.cur)-e.start)/(e.end-e.start)*
r.end,r.cur=J(Math.round(r.cur),r.start,r.end),q.hPos!==r.cur&&(q.hPos=r.cur,v?t[0].style[v]=sa+(a.horizontal?"translateX":"translateY")+"("+r.cur+"px)":t[0].style[a.horizontal?"left":"top"]=r.cur+"px"))}function ta(b,a,d){"boolean"===L(a)&&(d=a,a=ma);a===ma?F(e[b]):K&&"center"!==b||(a=c.getPos(a))&&F(a[b],d,!K)}function la(b){return"undefined"!==L(b)?M(b)?0<=b&&b<j.length?b:-1:u.index(b):-1}function ua(b){return la(M(b)&&0>b?b+j.length:b)}function ja(b){b=la(b);if(!z||0>b)return!1;q.active!==b&&
(u.eq(g.activeItem).removeClass(a.activeClass),u.eq(b).addClass(a.activeClass),q.active=g.activeItem=b,ya(),A("active",b));return b}function ra(b){b=J(M(b)?b:e.dest,e.start,e.end);var a={},c=H?0:s/2;if(!C)for(var d=0,f=y.length;d<f;d++){if(b>=e.end||d===y.length-1){a.activePage=y.length-1;break}if(b<=y[d]+c){a.activePage=d;break}}if(z){for(var f=d=c=!1,g=0,h=j.length;g<h;g++)if(!1===c&&b<=j[g].start+j[g].half&&(c=g),!1===f&&b<=j[g].center+j[g].half&&(f=g),g===h-1||b<=j[g].end+j[g].half){d=g;break}a.firstItem=
M(c)?c:0;a.centerItem=M(f)?f:a.firstItem;a.lastItem=M(d)?d:a.centerItem}return a}function ya(){var b=e.dest<=e.start,n=e.dest>=e.end,c=b?1:n?2:3;q.slideePosState!==c&&(q.slideePosState=c,T.is("button,input")&&T.prop("disabled",b),U.is("button,input")&&U.prop("disabled",n),T.add(ba)[b?"addClass":"removeClass"](a.disabledClass),U.add(V)[n?"addClass":"removeClass"](a.disabledClass));q.fwdbwdState!==c&&d.released&&(q.fwdbwdState=c,ba.is("button,input")&&ba.prop("disabled",b),V.is("button,input")&&V.prop("disabled",
n));z&&(b=0===g.activeItem,n=g.activeItem>=j.length-1,c=b?1:n?2:3,q.itemsButtonState!==c&&(q.itemsButtonState=c,W.is("button,input")&&W.prop("disabled",b),X.is("button,input")&&X.prop("disabled",n),W[b?"addClass":"removeClass"](a.disabledClass),X[n?"addClass":"removeClass"](a.disabledClass)))}function za(b,a,c){b=ua(b);a=ua(a);if(-1<b&&-1<a&&b!==a&&(!c||a!==b-1)&&(c||a!==b+1)){u.eq(b)[c?"insertAfter":"insertBefore"](j[a].el);var d=b<a?b:c?a:a-1,e=b>a?b:c?a+1:a,f=b>a;b===g.activeItem?q.active=g.activeItem=
c?f?a+1:a:f?a:a-1:g.activeItem>d&&g.activeItem<e&&(q.active=g.activeItem+=f?1:-1);Z()}}function Aa(b,a){for(var c=0,d=B[b].length;c<d;c++)if(B[b][c]===a)return c;return-1}function Ba(b){return Math.round(J(b,r.start,r.end)/r.end*(e.end-e.start))+e.start}function wa(){d.history[0]=d.history[1];d.history[1]=d.history[2];d.history[2]=d.history[3];d.history[3]=d.path}function Ca(b){d.released=0;d.source=b;d.slidee="slidee"===b}function Da(b){if(!d.init){var c="touchstart"===b.type,f=b.data.source,g="slidee"===
f;if(!("handle"===f&&(!a.dragHandle||!t)))if(!g||a.mouseDragging&&!c&&2>b.which||a.touchDragging&&c)N(b,1),Ca(f),d.$source=h(b.target),d.init=0,d.touch=c,d.initLoc=(c?b.originalEvent.touches[0]:b)[a.horizontal?"pageX":"pageY"],d.initPos=g?e.cur:r.cur,d.start=+new Date,d.time=0,d.path=0,d.history=[0,0,0,0],d.pathMin=g?-d.initLoc:-r.cur,d.pathMax=g?document[a.horizontal?"width":"height"]-d.initLoc:r.end-r.cur,(g?p:t).addClass(a.draggedClass),ca.on(c?Ea:Fa,Ga),g&&(Ha=setInterval(wa,10))}}function Ga(b){d.released=
"mouseup"===b.type||"touchend"===b.type;d.path=J((d.touch?b.originalEvent[d.released?"changedTouches":"touches"][0]:b)[a.horizontal?"pageX":"pageY"]-d.initLoc,d.pathMin,d.pathMax);if(!d.init&&(Math.abs(d.path)>(d.touch?50:10)||!d.slidee)){d.init=1;if(d.slidee)d.$source.on(da,Ia);c.pause(1);A("moveStart")}d.init&&(N(b),d.released&&(d.init=0,a.releaseSwing&&d.slidee&&(d.swing=300*((d.path-d.history[0])/40),d.path+=d.swing,d.tweese=10<Math.abs(d.swing))),F(d.slidee?Math.round(d.initPos-d.path):Ba(d.initPos+
d.path)));d.released&&(clearInterval(Ha),ca.off(d.touch?Ea:Fa,Ga),(d.slidee?p:t).removeClass(a.draggedClass),c.resume(1),e.cur===e.dest&&A("moveEnd"))}function Ja(){c.stop();ca.off("mouseup",Ja)}function ea(b){N(b);switch(this){case V[0]:case ba[0]:c.moveBy(V.is(this)?a.moveBy:-a.moveBy);ca.on("mouseup",Ja);break;case W[0]:c.prev();break;case X[0]:c.next();break;case T[0]:c.prevPage();break;case U[0]:c.nextPage()}}function xa(b){if(a.scrollBy&&e.start!==e.end){N(b,1);b=b.originalEvent;var d=0;b.wheelDelta&&
(d=0>b.wheelDelta/120);b.detail&&(d=0>-b.detail/3);if(z)c[K?"toCenter":"toStart"]((K?g.centerItem:g.firstItem)+(d?a.scrollBy:-a.scrollBy));else c.slideBy(d?a.scrollBy:-a.scrollBy)}}function Pa(b){a.clickBar&&b.target===E[0]&&(N(b),F(Ba((a.horizontal?b.pageX-E.offset().left:b.pageY-E.offset().top)-Q/2)))}function Qa(b){if(a.keyboardNavBy)switch(b.which){case a.horizontal?37:38:N(b);c["pages"===a.keyboardNavBy?"prevPage":"prev"]();break;case a.horizontal?39:40:N(b),c["pages"===a.keyboardNavBy?"nextPage":
"next"]()}}function Ra(){this.parentNode===p[0]&&c.activate(this)}function Sa(){this.parentNode===S[0]&&c.activatePage(ka.index(this))}function Ta(b){if(a.pauseOnHover)c["mouseenter"===b.type?"pause":"resume"](2)}function A(b,a){if(B[b])for(var d=0,e=B[b].length;d<e;d++)B[b][d].call(c,b,a)}a=h.extend({},ia.defaults,a);var c=this,va=0,C=M(f),ca=h(document),D=h(f),p=D.children().eq(0),s=0,m=0,e={start:0,center:0,end:0,cur:0,dest:0},E=h(a.scrollBar).eq(0),t=E.length?E.children().eq(0):0,$=0,Q=0,r={start:0,
end:0,cur:0},S=h(a.pagesBar),ka=0,y=[],u=0,j=[],g={firstItem:0,lastItem:0,centerItem:0,activeItem:-1,activePage:0},Ua="basic"===a.itemNav,H="forceCentered"===a.itemNav,K="centered"===a.itemNav||H,z=!C&&(Ua||K||H),Ka=a.scrollSource?h(a.scrollSource):D,Va=a.dragSource?h(a.dragSource):D,V=h(a.forward),ba=h(a.backward),W=h(a.prev),X=h(a.next),T=h(a.prevPage),U=h(a.nextPage),B={},q={};P=w=G=x=pa=k=oa=void 0;var d={released:1},La="touchstart."+l+" mousedown."+l,Fa="mousemove."+l+" mouseup."+l,Ea="touchmove."+
l+" touchend."+l,da="click."+l,Ma="mousedown."+l,R=0,Ha=0,O=0,Na=0;C||(f=D[0]);c.frame=f;c.slidee=p[0];c.pos=e;c.rel=g;c.items=j;c.pages=y;c.isPaused=0;c.options=a;c.reload=Z;c.getPos=function(b){if(z)return b=la(b),-1!==b?j[b]:!1;var c=p.find(b).eq(0);return c[0]?(b=a.horizontal?c.offset().left-p.offset().left:c.offset().top-p.offset().top,c=c[a.horizontal?"outerWidth":"outerHeight"](),{start:b,center:b-s/2+c/2,end:b-s+c,size:c}):!1};c.moveBy=function(b){var a=+new Date,f=e.cur;Ca("button");d.init=
1;ga(Na);(function Oa(){(!b||e.cur===(0<b?e.end:e.start))&&c.stop();d.init&&(Na=fa(Oa));F(f+(+new Date-a)/1E3*b)})()};c.stop=function(){"button"===d.source&&(d.init=0,d.released=1)};c.prev=function(){c.activate(g.activeItem-1)};c.next=function(){c.activate(g.activeItem+1)};c.prevPage=function(){c.activatePage(g.activePage-1)};c.nextPage=function(){c.activatePage(g.activePage+1)};c.slideBy=function(b,a){F(e.dest+b,a)};c.slideTo=function(b,a){F(b,a)};c.toStart=function(b,a){ta("start",b,a)};c.toEnd=
function(b,a){ta("end",b,a)};c.toCenter=function(b,a){ta("center",b,a)};c.getIndex=la;c.activate=function(b,e){var f=ja(b);a.smart&&!1!==f&&(K?c.toCenter(f,e):f>=g.lastItem?c.toStart(f,e):f<=g.firstItem?c.toEnd(f,e):d.released&&!c.isPaused&&c.resume())};c.activatePage=function(b,a){M(b)&&F(y[J(b,0,y.length-1)],a)};c.resume=function(b){if(a.cycleBy&&a.cycleInterval&&!("items"===a.cycleBy&&!j[0]||b<c.isPaused))c.isPaused=0,O?O=clearTimeout(O):A("resume"),O=setTimeout(function(){A("cycle");switch(a.cycleBy){case "items":c.activate(g.activeItem>=
j.length-1?0:g.activeItem+1);break;case "pages":c.activatePage(g.activePage>=y.length-1?0:g.activePage+1)}},a.cycleInterval)};c.pause=function(b){b<c.isPaused||(c.isPaused=b||100,O&&(O=clearTimeout(O),A("pause")))};c.toggle=function(){c[O?"pause":"resume"]()};c.set=function(b,c){h.isPlainObject(b)?h.extend(a,b):a.hasOwnProperty(b)&&(a[b]=c)};c.add=function(b,a){var c=h(b);z?("undefined"===L(a)||!j[0]?c.appendTo(p):j.length&&c.insertBefore(j[a].el),a<=g.activeItem&&(q.active=g.activeItem+=c.length)):
p.append(c);Z()};c.remove=function(b){if(z){if(b=ua(b),-1<b){u.eq(b).remove();var d=b===g.activeItem&&!(H&&a.activateMiddle);if(b<g.activeItem||g.activeItem>=j.length-1)q.active=--g.activeItem;Z();d&&c.activate(g.activeItem)}}else h(b).remove(),Z()};c.moveAfter=function(b,a){za(b,a,1)};c.moveBefore=function(b,a){za(b,a)};c.on=function(b,a){if("object"===L(b))for(var d in b){if(b.hasOwnProperty(d))c.on(d,b[d])}else if("function"===L(a)){d=b.split(" ");for(var e=0,f=d.length;e<f;e++)B[d[e]]=B[d[e]]||
[],-1===Aa(d[e],a)&&B[d[e]].push(a)}else if("array"===L(a)){d=0;for(e=a.length;d<e;d++)c.on(b,a[d])}};c.off=function(a,d){if(d instanceof Array)for(var e=0,f=d.length;e<f;e++)c.off(a,d[e]);else for(var e=a.split(" "),f=0,g=e.length;f<g;f++)if(B[e[f]]=B[e[f]]||[],"undefined"===L(d))B[e[f]].length=0;else{var h=Aa(e[f],d);-1!==h&&B[e[f]].splice(h,1)}};c.destroy=function(){ca.add(Ka).add(t).add(E).add(S).add(V).add(ba).add(W).add(X).add(T).add(U).unbind("."+l);W.add(X).add(T).add(U).removeClass(a.disabledClass);
u&&u.eq(g.activeItem).removeClass(a.activeClass);S.empty();C||(D.unbind("."+l),p.add(t).css(v||(a.horizontal?"left":"top"),v?"none":0),h.removeData(f,l));va=0;return c};c.init=function(){if(!va){c.on(na);if(!C){D.css("overflow","hidden");var b=p.add(t);if(v){var d={};d[v]="translateZ(0)";b.css(d)}else"static"===D.css("position")&&D.css("position","relative"),b.css({position:"absolute"})}!v&&"static"===E.css("position")&&E.css("position","relative");Z();z?(ja(a.startAt),c[K?"toCenter":"toStart"](a.startAt)):
F(a.startAt,1);if(a.forward)V.on(Ma,ea);if(a.backward)ba.on(Ma,ea);if(a.prev)W.on(da,ea);if(a.next)X.on(da,ea);if(a.prevPage)T.on(da,ea);if(a.nextPage)U.on(da,ea);Ka.on("DOMMouseScroll."+l+" mousewheel."+l,xa);if(E[0])E.on(da,Pa);if(z&&a.activateOn)D.on(a.activateOn+"."+l,"*",Ra);if(S[0]&&a.activatePageOn)S.on(a.activatePageOn+"."+l,"*",Sa);Va.on(La,{source:"slidee"},Da);if(t)t.on(La,{source:"handle"},Da);ca.bind("keydown."+l,Qa);if(!C)D.on("mouseenter."+l+" mouseleave."+l,Ta);if(a.cycleBy&&!C)c[a.startPaused?
"pause":"resume"]();va=1;return c}}}function L(f){return{}.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase()}function N(f,a){f.preventDefault();a&&f.stopPropagation()}function Ia(f){N(f,1);h(f.target).off(f.type,Ia)}function M(f){return!isNaN(parseFloat(f))&&isFinite(f)}function aa(f,a){return parseInt(f.css(a),10)||0}function J(f,a,h){return f<a?a:f>h?h:f}for(var l="sly",ga=w.cancelAnimationFrame||w.cancelRequestAnimationFrame,fa=w.requestAnimationFrame,v,sa,P=window,k=["moz","webkit","o"],
ha=0,G=0,wa=k.length;G<wa&&!ga;++G)fa=(ga=P[k[G]+"CancelAnimationFrame"]||P[k[G]+"CancelRequestAnimationFrame"])&&P[k[G]+"RequestAnimationFrame"];ga||(fa=function(f){var a=+new Date,h=Math.max(0,16-(a-ha));ha=a+h;return P.setTimeout(function(){f(a+h)},h)},ga=function(f){clearTimeout(f)});var k=function(f){for(var a=0,h=Y.length;a<h;a++){var l=Y[a]?Y[a]+f.charAt(0).toUpperCase()+f.slice(1):f;if(xa.style[l]!==ma)return l}},Y=["","webkit","moz","ms","o"],xa=document.createElement("div");v=k("transform");
sa=k("perspective")?"translateZ(0) ":"";w.Sly=ia;h.fn.sly=function(f,a){var k,v;if(!h.isPlainObject(f)){if("string"===L(f)||!1===f)k=!1===f?"destroy":f,v=Array.prototype.slice.call(arguments,1);f={}}return this.each(function(G,w){var x=h.data(w,l);!x&&!k?h.data(w,l,(new ia(w,f,a)).init()):x&&k&&x[k]&&x[k].apply(x,v)})};ia.defaults={horizontal:0,itemNav:null,itemSelector:null,smart:0,activateOn:null,activateMiddle:0,scrollSource:null,scrollBy:0,dragSource:null,mouseDragging:0,touchDragging:0,releaseSwing:0,
swingSpeed:0.2,scrollBar:null,dragHandle:0,dynamicHandle:0,minHandleSize:50,clickBar:0,syncSpeed:0.5,pagesBar:null,activatePageOn:null,pageBuilder:function(f){return"<li>"+(f+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5E3,pauseOnHover:0,startPaused:0,moveBy:300,elasticBounds:0,speed:0,easing:"swing",startAt:0,keyboardNavBy:0,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}})(jQuery,window);
