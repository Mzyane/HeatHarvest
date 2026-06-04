// ===============================
// PAGE TRANSITION (FADE EFFECT)
// ===============================
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = this.href;

    // Fade out whole page smoothly
    document.querySelector(".page").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});


// ===============================
// SCROLL ANIMATION (TEXT + CARDS)
// ===============================
const elements = document.querySelectorAll(".animate-text, .fade-in, .animate");

function showOnScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

// Run on page load
window.addEventListener("load", showOnScroll);

// Run on scroll
window.addEventListener("scroll", showOnScroll);
