let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides-fade");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

const fonteCabecario = document.querySelectorAll('.cab');

fonteCabecario.forEach(function(elemento) {
  elemento.addEventListener('mouseover', function() {
    elemento.style.color = 'cyan'; 
});

elemento.addEventListener('mouseout', function() {
  elemento.style.color = 'black';
});
});