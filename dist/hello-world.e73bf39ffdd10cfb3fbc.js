(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.buttonCssClass="hello-world-button"}var t,o;return t=n,(o=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello world",e.classList.add("hello-world-button");var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-test"),n.appendChild(e)},e.classList.add(this.buttonCssClass),n.appendChild(e)}}])&&e(t.prototype,o),n}();function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,o;return n=e,(o=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Webpack is awesome",n.appendChild(e)}}])&&t(n.prototype,o),e}())).render(),(new n).render(),console.log("Production mode")})();