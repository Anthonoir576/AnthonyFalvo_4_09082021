const myCache="cache-laChouetteAgence",content=["/","/index.html","/contact.html","/css/bootstrap.css","/style.css","/js/bootstrap.js","/js/gmaps.js","/img/1.jpg","/img/2.jpg","/img/3.jpeg","/img/4.jpeg","/img/dots-bg.png","/img/image-de-presentation.jpeg","/img/la-chouette-agence-banniere.jpg","/img/la-chouette-agence.png","/img/lines-h2-bg.png","/img/logo.png","/img/texture-paper.png","/css/font-awesome.css","/css/et-line.css"];self.addEventListener("install",e=>{e.waitUntil(caches.open(myCache).then(e=>{e.addAll(content)}))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))});