/* Structure de la classe Contact qui représente un objet contact qui contient les données saisies du formulaire */

class Contact {
    constructor(lastName, firstName, address, addressComplement, city, zipCode, email) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.addressComplement = addressComplement;
        this.city = city;
        this.zipCode = zipCode;
        this.email = email;
    }
}