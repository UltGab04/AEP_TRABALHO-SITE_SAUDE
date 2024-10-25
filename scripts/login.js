document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    const password = document.getElementById("senha").value;
    const confirmPassword = document.getElementById("confirmarSenha").value;

    if (password !== confirmPassword) {
      alert("As senhas estão diferentes, corrija e tente novamente!");
      event.preventDefault(); // Impede o envio do formulário
    }
  });
