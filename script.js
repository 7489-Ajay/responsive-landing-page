// Smooth scroll to features section
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
});

// Navbar toggle for mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ✅ Close menu after clicking any link (Fix)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

