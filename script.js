console.log("connecté !")

// Séléctionner et stocker les éléments du formulaire
const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");

// Séléctionner et stocker le message d'erreur
const errorMessage = document.getElementById("error-message");



// Mettre des fonctions au formulaire 
form.addEventListener("submit" , function(e){

    // Empêcher le raffraichissement de la page
    e.preventDefault();

    // Récupérer les valeurs des inputs
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const messageValue = message.value;

    // Si un des champs est vide , afficher un message d'erreur sinon le laisser caché
    if (firstNameValue ==="") {
        errorMessage.style.display = "block";
    } else if (lastNameValue ==="") {
        errorMessage.style.display = "block";
    } else if (messageValue ==="") {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
});