// CONSTANTE ET VARIABLE

const myCache = "cache-laChouetteAgence";

// Contenu a mettre en cache chez lutilisateur :
const content = ["/", "/index.html", "/contact.html", "/css/bootstrap.css", "/style.css", "/js/bootstrap.js", "/js/gmaps.js", "/img/1.jpg", "/img/2.jpg", "/img/3.jpeg", "/img/4.jpeg", "/img/dots-bg.png", "/img/image-de-presentation.jpeg", "/img/la-chouette-agence-banniere.jpg", "/img/la-chouette-agence.png", "/img/lines-h2-bg.png", "/img/logo.png", "/img/texture-paper.png", "/css/font-awesome.css", "/css/et-line.css"];


// FONCTION ET LISTENER
// fonction de mise en cache avec le listener, on y ajoute tous le contenu stocker dans le array
self.addEventListener("install", (e) => {

    e.waitUntil(

        caches.open(myCache).then((cache) => {

            cache.addAll(content);

        })

    );

});

// recupere le cache 
self.addEventListener('fetch', (e) => {

    e.respondWith(

        caches.match(e.request).then((cache) => {

            return cache || fetch(e.request)

        })

    );

});