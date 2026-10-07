const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navMenuWrapper = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  navMenuWrapper.classList.toggle("open-triger");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navMenuWrapper.classList.remove("open-triger");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();