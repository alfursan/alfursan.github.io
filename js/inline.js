const scripts=["lazyLoad","nav"];function loadScript(t){const e=document.createElement("script");e.type="text/javascript",e.src="../js/"+t+".js",document.body.appendChild(e)}function loadStyle(t){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="../css/"+t+".css",document.head.append(e)}window.addEventListener("load",(function(){document.getElementById("heroImg").classList.add("loaded"),scripts.forEach(loadScript)}));