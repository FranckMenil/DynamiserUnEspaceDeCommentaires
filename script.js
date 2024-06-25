console.log("connecté !")

// Séléctionner et stocker les éléments du formulaire
const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");

// Séléctionner et stocker le message d'erreur
const errorMessage = document.getElementById("error-message");

// Séléctionner et stocker la liste de commentaires pour y ajouter le nouveau a la suite
const commentList = document.getElementById("comment-list");

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

    // Creation d'un nouveau commentaire
    const newComment = document.createElement("div");
    
    // Ajout des balises HTML identiques a ceux deja présentes
    newComment.innerHTML =`
        <div class="flex space-x-4 text-sm text-gray-500">
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstNameValue} ${lastNameValue}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${messageValue}</p>
                </div>
            </div>
        </div>
    `;

    // Afficher le nouveau commentaire a la suite de la liste
    commentList.appendChild(newComment);

    // Supprimer le contenu des champs du formulaire une fois le nouveau commentaire
    // affiché dans la liste
    form.reset();
    

});