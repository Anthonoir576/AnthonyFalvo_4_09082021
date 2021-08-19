// Verification si lutilisateur possède le service worker.
if ("serviceWorker" in navigator) {

    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(() => console.log("cache enregistrer"))
    .catch((err) => console.log(err));

};