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
