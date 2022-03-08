// ajout dynamique du nombre de produits sur l'icone panier du header

function updateHeaderCart() {
    // récupération de la quantité
    let totalQuantity =  JSON.parse(localStorage.getItem("totalQuantity"));
    const cartIconNumber = document.querySelector(".cart-header__number");
    if (totalQuantity) {
        cartIconNumber.innerHTML = `<p>${totalQuantity}</p>`
    } else {
        cartIconNumber.classList.add('d-none');
    }
}

