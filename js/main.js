function toggleIconVisibility() {
  const icon = document.querySelector(".hero-icon");
  const container = document.querySelector(".hero-content");
  if (!icon || !container) return;

  if (window.innerWidth < 900) {
    icon.style.display = "none";
    container.classList.add("centered");
  } else {
    icon.style.display = "block";
    container.classList.remove("centered");
  }
}

window.addEventListener("load", toggleIconVisibility);
window.addEventListener("resize", toggleIconVisibility);
