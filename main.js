(()=>{"use strict";function e(){document.querySelector(".js-main").innerHTML='\n        <div class="c-wrapper c-home">\n            <span class="c-phrase--big c-phrase--red">Welcome</span>\n            <span class="c-phrase">to <span class="c-phrase--red">Soundin</span> the biggest</span>\n            <span class="c-phrase"> music store on the web</span>\n        </div>\n    '}document.querySelector(".js-content").innerHTML='\n        <header class="c-header l-flex l-jc-sa">\n            <h1 class="c-title">Soundin</h1>\n            <nav class="c-nav l-flex l-ai-center">\n                <ul class="c-menu l-flex">\n                    <button class="c-menu__item c-menu__item--active js-home">Home</button>\n                    <button class="c-menu__item js-store">Store</button>\n                    <button class="c-menu__item js-about">About</button>\n                </ul>\n            </nav>\n        </header>\n        <main class="c-main l-flex js-main"></main>\n        <footer class="c-footer">\n            <p class="c-footer__copyright">Made with ❤️ by <a href="https://github.com/DawidBal" target="_blank" class="c-footer__link">Dave</a></p>\n        </footer>\n',e();const n=e=>{document.querySelectorAll("button").forEach((n=>{e!==n?n.classList.remove("c-menu__item--active"):n.classList.add("c-menu__item--active")}))},s=document.querySelector(".js-main"),t=document.querySelector(".js-home"),c=document.querySelector(".js-store"),a=document.querySelector(".js-about");t.addEventListener("click",(function(){s.innerHTML="",n(this),e()})),c.addEventListener("click",(function(){s.innerHTML="",n(this),document.querySelector(".js-main").innerHTML='\n                    <span class="c-phrase--big c-phrase--red">Store</span>\n    '})),a.addEventListener("click",(function(){s.innerHTML="",n(this),document.querySelector(".js-main").innerHTML='\n                    <h2 class="c-phrase--big c-phrase--red">About us</h2>\n    '}))})();