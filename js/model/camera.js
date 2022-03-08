/* Structure de la classe camera qui représente un objet camera */


class Camera {
    constructor(jsonCamera) {
        this.id = jsonCamera._id;
        this.name = jsonCamera.name;
        this.price = (jsonCamera.price/100).toLocaleString("fr-FR", {minimumFractionDigits: 2});
        this.description = jsonCamera.description;
        this.imageUrl = jsonCamera.imageUrl;
        this.lenses = jsonCamera.lenses;
    }
}
