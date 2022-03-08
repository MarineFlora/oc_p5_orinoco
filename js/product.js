//---------------------------RECUPERATION  DES CAMERAS DE L'API AVEC L'ID---------------------------// 
// variable pour la camera selectionnée
let selectedCamera;

// variables pour extraire le paramètre id de l'URL
let params = new URL(window.location).searchParams;
const id = params.get("id");

// fonction pour recuperer produit et l'afficher
// onload sur <body> product.html
function loadProduct() {
    fetch("https://orinoco-oc-p5.herokuapp.com/api/cameras/" + id)
    // transforme données reçues en format json
    .then(data => data.json()) 
    // recupere produit + affiche
    .then(camera => { 
        //créer l'objet camera à partir de la classe Camera
        selectedCamera = camera;
        addLenses(camera);
        displayProduct(camera);
    })
    
    .catch(error => console.log(error)); 
}

//---------------------------AJOUT DE LA CAMERA AU PANIER---------------------------// 

// ajout des produits au panier
// onclick sur <button> "ajouter au panier" product.html
function addToCart(event) {
    event.preventDefault();

    // suppression de l'ancien message d'erreur si présent
    let errorElement = document.getElementById("product-select-error");
    if (errorElement) {
        errorElement.remove();
    }
    
    // on récupère les valeurs de l'objectif choisi
    let selectedLens = document.getElementById("select-lens").value;
    console.log(selectedLens);
 
    // on récupère la quantité indiquée
    let quantity = document.getElementById("select-quantity").value;
    console.log(quantity);

    // affichage message erreur si options non selectionnées
    if (selectedLens == "" || quantity =="") {
        return document.querySelector(".product-selections").innerHTML += `<div id="product-select-error" class="alert alert-danger" role="alert">Vous devez choisir une lentille et une quantité</div>`;
    } 
    
    // sinon on ajoute au panier et on affiche le message pop-up de confirmation
    else {
         // on modifie le prix, la quantité
        selectedCamera.quantity = quantity;
        selectedCamera.price = (selectedCamera.price/100)*quantity;
        
        // on récupère les données du panier, si le panier est vide on l'initialise avec un array vide
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // si le panier est vide, on ajoute le 1er produit
        if (cart.length == 0) {
            cart.push(selectedCamera);
        } 
        // sinon verifier si le produit selectionné existe déjà dans le localStorage pour accumuler les quantités
        else { 
            // recherche les même id
            const sameProducts = cart.find(product => product._id === selectedCamera._id); 
            if (sameProducts) {
                // quantité des produits calculée en additionnant la quantité déjà présente dans le storage et la nouvelle quantité ajoutée, idem pour prix 
                sameProducts.quantity = Number(sameProducts.quantity) + Number(selectedCamera.quantity); 
                sameProducts.price = sameProducts.price + selectedCamera.price; 
            } else {
                cart.push(selectedCamera);
            }
        } 
        // ajoute l'élement dans le localStorage
        localStorage.setItem("cart", JSON.stringify(cart)); 
        // Affichage message pop-up
        buildPopUpMessage(selectedCamera);
    } 
}



