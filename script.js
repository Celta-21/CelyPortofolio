// active-tab.js
let currentPage = window.location.pathname.split("/").pop();
if (currentPage === "") {
  currentPage = "index.html";
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
