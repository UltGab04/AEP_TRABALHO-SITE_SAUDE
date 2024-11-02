function enviarEmail(){
    alert("Mensagem de redefinição senha foi enviada para sua caixa principal no email! ");
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