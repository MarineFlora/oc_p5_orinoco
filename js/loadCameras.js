/* méthode fetch pour récupérer la liste des cameras du serveur et les afficher sur la page d'accueil index.html */
// onload sur <body> index.html

function loadCameras() {
    fetch("https://orinoco-oc-p5.herokuapp.com/api/cameras/")
    // transforme données reçues en format json
    .then(data => data.json()) 
    // affiche les caméras
    .then(jsonListCamera => { 
        // boucle qui parcours le tableau, pour chaque case du tableau elle créé une variable jsonCamera qui pourra être manipulée directement
        for(let jsonCamera of jsonListCamera) { 
            // pour chaque camera on créé un objet camera et on affiche le html
            let camera = new Camera(jsonCamera); 
            buildCameras(camera);
        }
    })
    .catch(error => alert("Une erreur est survenue")); 
}


