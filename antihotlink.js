var hotlink=function(e,t){"use strict";for(var r,n,i,o="http://www.w3.org/1999/xhtml",l="http://purl.eligrey.com/hotlink",c=t.documentElement,a=e.navigator.userAgent,s=~a.indexOf("Gecko/"),f=~a.indexOf("MSIE"),u=e.opera,d=function(e){if(e.click)e.click();else{var r=t.createEvent("Event");r.initEvent("click",!0,!0),e.dispatchEvent(r)}},h=function(e,t){return e.appendChild(t)},m=function(e,r,n){return(n||t).createElementNS(e,r)},g=function(e,t,r){var n=e.getAttribute(t);return 3===arguments.length&&(r===!1?e.removeAttribute(t):e.setAttribute(t,r)),n},p=function(e){var t,r,n,i=e.parentNode,c=i.insertBefore(m(l,"img"),e),a=h(c,m(o,"iframe")),p=m(o,"a",a.contentDocument),v=g(e,"data-src"),y=+g(e,"width"),b=+g(e,"height");for((s||u)&&(y+=16,b+=16),t=e.attributes,r=t.length;r--;)n=t[r],g(c,n.name,n.value);i.removeChild(e),a.style.verticalAlign="bottom",a.style.width=y+"px",a.style.height=b+"px",a.scrolling="no",a.style.border=0,p.rel="noreferrer",p.href=v,(s||f)&&(a.src=v),d(p)},v=!1,y=[],b=!1,k=("referrerPolicy"in new Image),w=function(e){k?(e.referrerPolicy="no-referrer",e.src=g(e,"data-src",!1)):v?b?p(e):e.src=g(e,"data-src",!1):y.push(e)},x="about:blank",E=function(){v=!0,b=""===r.contentDocument.referrer;for(var e=0,t=y.length;t>e;e++)w(y[e])},A=m(o,"style"),L=t.querySelectorAll("img[data-src]"),R=L.length;R--;)i=L[R],i.namespaceURI===o&&w(i);return k?w:(h(A,t.createTextNode("@namespace'"+l+"';img{display:inline-block;vertical-align:bottom}")),h(c,A),r=h(c,m(o,"iframe")),n=m(o,"a",r.contentDocument),r.style.visibility="hidden",r.style.height=r.style.border=0,n.rel="noreferrer",(s||f)&&(x="undefined"!=typeof Blob&&"undefined"!=typeof URL?URL.createObjectURL(new Blob([""],{type:"text/plain"})):"/robots.txt"),n.href=x,r.addEventListener("load",E,!1),(s||f)&&(r.src=n.href),d(n),w)}(self,document);