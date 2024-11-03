function laudosMedicos() {
  alert("Abrindo seus laudos prontos...");
}

function mostrarConsultas() {
  alert("Verificando consultas marcadas...");
}

function consultarBoletos() {
  alert("Abrindo boletos para pagamentos...");
}

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
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

