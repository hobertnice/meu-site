// Rola suavemente até a seção clicada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Tudo o que acontece quando a página carrega
window.addEventListener("load", function () {
  // Esconde o loader
  document.getElementById("loader").style.display = "none";
  // Mostra o conteúdo do site
  document.getElementById("conteudo").style.display = "block";
  // Alerta de boas-vindas
  alert("Bem-vindo ao meu site!");
  // Inicializa AOS (animações)
  AOS.init();
});
// Validação do formulário
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio real

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome && email && mensagem) {
    document.getElementById("mensagem-sucesso").style.display = "block";
    this.reset(); // Limpa o formulário
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
