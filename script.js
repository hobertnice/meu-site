document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
window.onload = function() {
  alert("Bem-vindo ao meu site!");
}
window.onload = function() {
  document.getElementById("loader").style.display = "none";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
window.onload = function() {
  document.getElementById("loader").style.display = "none";
}
window.onload = function() {
  document.getElementById("loader").style.display = "none";
}
