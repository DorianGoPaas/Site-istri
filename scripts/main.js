document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true, // Active le défilement en boucle
        autoplay: {
            delay: 3000, // Temps entre chaque slide en ms
            disableOnInteraction: false, // Ne pas désactiver l'autoplay après interaction
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Permet de cliquer sur les bullet points
        },
        effect: "fade", // Ajoute un effet de fondu
        speed: 800, // Vitesse de transition
    });
});
   
                                       // Nav bar

const burgerMenu = document.getElementById("burger-menu");
const navbar = document.getElementById("navbar");

burgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

                                        // Défilement des partenaires

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".partners-scroll");
    const clones = scrollContainer.innerHTML;
    scrollContainer.innerHTML += clones; 
});

                                        // Pop up des avis

function voirPlus(element) {
    document.getElementById("popup-nom").textContent = element.getAttribute("data-nom");
    const imagesData = element.getAttribute("data-avis");
    const popupAvis = document.getElementById("popup-avis");
    popupAvis.innerHTML = '';
    imagesData.split(',').forEach(imagePath => {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath.trim();
        popupAvis.appendChild(imgElement);
    });
    document.getElementById("popup").style.display = "flex";
}

function fermerPopup(event) {
    if (event.target.id === "popup" || event.target.classList.contains("close")) {
        document.getElementById("popup").style.display = "none";
    }
}

document.querySelectorAll('.avis-card').forEach(card => {
    const imagesData = card.getAttribute('data-avis'); // Récupère la chaîne avec les liens des images
    const imagesArray = imagesData.split(','); // Sépare les images par la virgule
    
    const avisImagesContainer = card.querySelector('.avis-images'); // Sélectionne le conteneur des images
    
    // Vide le conteneur avant d'ajouter les nouvelles images
    avisImagesContainer.innerHTML = '';
    
    // Ajoute chaque image dans le conteneur
    imagesArray.forEach(imagePath => {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath.trim(); // Enlève les espaces autour du lien de l'image
        imgElement.alt = "Avis Image"; // Texte alternatif pour l'image
        avisImagesContainer.appendChild(imgElement); // Ajoute l'image au conteneur
    });
});