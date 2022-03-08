/* Structure de la classe Order qui contient les données de contact et les produits commandés, stockés dans le localStorage*/

class Order {
    constructor(contact, products) {
        this.contact = contact;
        this.products = products;
    }
}