// Pole s obrázky
const images = [
    'lipy.jpg',
    'trava.jpg',
    'les.jpg',
    'zapad.jpg',
];

// Index aktuálního obrázku
let currentIndex = 0;

// Interval pro automatickou změnu obrázku
let slideshowInterval;

// Funkce pro změnu obrázku s efektem prolnutí
function changeImage(index) {
    const slideshow = document.getElementById('slideshow');
    slideshow.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = (index + images.length) % images.length; // Aktualizace indexu s ošetřením záporných hodnot
        slideshow.src = images[currentIndex];
        slideshow.classList.remove('fade-out');
    }, 1000); // Doba prolnutí (1 sekunda)
}

// Funkce pro další obrázek
function nextImage() {
    changeImage(currentIndex + 1);
    resetSlideshowInterval();
}

// Funkce pro předchozí obrázek
function prevImage() {
    changeImage(currentIndex - 1);
    resetSlideshowInterval();
}

// Funkce pro resetování intervalu
function resetSlideshowInterval() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => nextImage(), 5000);
}

// Spuštění intervalu při načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    slideshowInterval = setInterval(() => nextImage(), 5000);
});
