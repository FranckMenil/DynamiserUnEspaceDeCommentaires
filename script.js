// Séléctionner et stocker les éléments du formulaire
const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");

// Séléctionner et stocker le message d'erreur
const errorMessage = document.getElementById("error-message");

// Séléctionner et stocker la liste de commentaires pour y ajouter le nouveau a la suite
const commentList = document.getElementById("comment-list");

// Fonction pour vérifier les erreurs
function checkErrors(firstNameValue, lastNameValue, messageValue) {
    return !firstNameValue || !lastNameValue || !messageValue;
}

// Fonction pour afficher le message d'erreur
function showError() {
    errorMessage.style.display = 'block';
}

// Fonction pour masquer le message d'erreur
function hideError() {
    errorMessage.style.display = 'none';
}

// Fonction pour ajouter un nouveau commentaire
function addComment(firstNameValue, lastNameValue, messageValue) {
    const newComment = document.createElement("div");
    newComment.innerHTML = `
        <div class="py-10 border-t border-gray-200">
            <h3 class="text-sm font-medium text-gray-900">${firstNameValue} ${lastNameValue}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${messageValue}</p>
            </div>
        </div>
    `;
    commentList.appendChild(newComment);
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(e) {
    // Empêcher le rafraîchissement de la page
    e.preventDefault();

    // Récupérer les valeurs des inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const messageValue = message.value.trim();

    // Vérifier les erreurs
    if (checkErrors(firstNameValue, lastNameValue, messageValue)) {
        showError();
    } else {
        hideError();
        addComment(firstNameValue, lastNameValue, messageValue);
        form.reset();
    }
}

// Attacher l'événement de soumission du formulaire
form.addEventListener("submit", handleSubmit);
