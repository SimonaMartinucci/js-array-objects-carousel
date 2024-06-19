// array di oggetti
const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    } 
];

// creo un array solo per i percorsi delle immagini tramite ciclo
const arrayImg = images.map((picture) => {
    return picture.image;
});

console.log(arrayImg);

// richiamo container
let container = document.querySelector(".container");

// // estrapolo elementi array img
for(let i = 0; i < arrayImg.length; i++) {
    let itemImg = arrayImg[i];

    // inserisco i div
    let itemContent = `
                <div class="item">
                    <img src="${itemImg}">
                </div>`;
    
    // inserisco il div nel container
    container.innerHTML += itemContent;
}

// seleziono gli item della pagina
const items = document.getElementsByClassName("item");

// assegno classe active al primo elemento
let activeItem = 0;

items[activeItem].classList.add("active");

// seleziono il bottone next
const next = document.querySelector(".next");

// gestisco click su next
next.addEventListener("click",
    function() {
        // verifico di non essere alla fine delle img
        if(activeItem < arrayImg.length - 1) {
            // tolgo active su elemento attivo
            items[activeItem].classList.remove("active");

            // aumento valore indice
            activeItem++;

            // aggiungo classe a nuovo elemento active
            items[activeItem].classList.add("active");

        // aggiungo ciclo infinito next
        }else if(activeItem === arrayImg.length - 1) {
            items[activeItem].classList.remove("active");
            activeItem = 0;
            items[activeItem].classList.add("active");
        }
    }
);

// seleziono il bottone prev
const prev = document.querySelector(".prev");

// gestisco click su prev
prev.addEventListener("click",
    function() {
        // aggiungo ciclo infinito next
        if(activeItem === 0) {
            items[activeItem].classList.remove("active");
            activeItem = arrayImg.length - 1;
            items[activeItem].classList.add("active");

        // altrimenti, per tutte le altre immagini
        }else if(activeItem <= arrayImg.length - 1) {
            // rimuovo classe active
            items[activeItem].classList.remove("active");

            // diminuisco valore indice
            activeItem--;

            // aggiungo classe a nuovo elemento active
            items[activeItem].classList.add("active");
        }
    }
);