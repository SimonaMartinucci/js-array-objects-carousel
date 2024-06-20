// array di oggetti
const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    } 
];


// richiamo container
let container = document.querySelector(".container");

// faccio ciclo per creare inserire le immagini, il titolo e il testo
images.forEach((element) => {
    container.innerHTML += `
    <div class="item">
        <img src="${element.image}">
    </div>
    <div class="title">${element.title}</div>
    <div class="text">${element.text}</div>`
});


// seleziono gli items della pagina
const imgItems = document.getElementsByClassName("item");
const titleItems = document.getElementsByClassName("title");
const textItems = document.getElementsByClassName("text");

// assegno classe active al primo elemento
let activeImg = 0;
let activeTitle = 0;
let activeText = 0;

imgItems[activeImg].classList.add("active");
titleItems[activeTitle].classList.add("active");
textItems[activeText].classList.add("active");

// seleziono il bottone next
const next = document.querySelector(".next");

// gestisco click su next
next.addEventListener("click",

    
    function() {
        // IMMAGINI
        // verifico di non essere alla fine
        if(activeImg < images.length - 1) {
        // tolgo active su elemento attivo
        imgItems[activeImg].classList.remove("active");

        // aumento valore indice
        activeImg++;

        // aggiungo classe a nuovo elemento active
        imgItems[activeImg].classList.add("active");

        // aggiungo ciclo infinito next
        }else if(activeImg === images.length - 1) {
        imgItems[activeImg].classList.remove("active");
        activeImg = 0;
        imgItems[activeImg].classList.add("active");
        }

        // TITOLO
        if(activeTitle < images.length - 1) {
            // tolgo active su elemento attivo
            titleItems[activeTitle].classList.remove("active");
    
            // aumento valore indice
            activeTitle++;
    
            // aggiungo classe a nuovo elemento active
            titleItems[activeTitle].classList.add("active");
    
            // aggiungo ciclo infinito next
            }else if(activeTitle === images.length - 1) {
            titleItems[activeTitle].classList.remove("active");
            activeTitle = 0;
            titleItems[activeTitle].classList.add("active");
            }

            // TESTO
            if(activeText < images.length - 1) {
                // tolgo active su elemento attivo
                textItems[activeText].classList.remove("active");
        
                // aumento valore indice
                activeText++;
        
                // aggiungo classe a nuovo elemento active
                textItems[activeText].classList.add("active");
        
                // aggiungo ciclo infinito next
                }else if(activeText === images.length - 1) {
                textItems[activeText].classList.remove("active");
                activeText = 0;
                textItems[activeText].classList.add("active");
                }
        }
);

// seleziono il bottone prev
const prev = document.querySelector(".prev");

// gestisco click su prev
prev.addEventListener("click",
    function() {
        // IMMAGINI
        // aggiungo ciclo infinito prev
        if(activeImg === 0) {
            imgItems[activeImg].classList.remove("active");
            activeImg = images.length - 1;
            imgItems[activeImg].classList.add("active");

        // altrimenti, per tutte le altre immagini
        }else if(activeImg <= images.length - 1) {
            // rimuovo classe active
            imgItems[activeImg].classList.remove("active");

            // diminuisco valore indice
            activeImg--;

            // aggiungo classe a nuovo elemento active
            imgItems[activeImg].classList.add("active");
        }

        // TITOLO
        // aggiungo ciclo infinito next
        if(activeTitle === 0) {
            titleItems[activeTitle].classList.remove("active");
            activeTitle = images.length - 1;
            titleItems[activeTitle].classList.add("active");

        // altrimenti, per tutti gli altri
        }else if(activeTitle <= images.length - 1) {
            // rimuovo classe active
            titleItems[activeTitle].classList.remove("active");

            // diminuisco valore indice
            activeTitle--;

            // aggiungo classe a nuovo elemento active
            titleItems[activeTitle].classList.add("active");
        }

        // TESTO
        // aggiungo ciclo infinito next
        if(activeText === 0) {
            textItems[activeText].classList.remove("active");
            activeText = images.length - 1;
            textItems[activeText].classList.add("active");

        // altrimenti, per tutti gli altri
        }else if(activeText <= images.length - 1) {
            // rimuovo classe active
            textItems[activeText].classList.remove("active");

            // diminuisco valore indice
            activeText--;

            // aggiungo classe a nuovo elemento active
            textItems[activeText].classList.add("active");
        }
    }
);

