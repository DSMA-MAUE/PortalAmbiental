function toggleIconVisibility() {
  const icon = document.querySelector(".hero-icon");
  const container = document.querySelector(".hero-content");
  if (!icon || !container) return; // Returns if there isn't an icon or container

  if (window.innerWidth < 900) {
    icon.style.display = "none";
    container.classList.add("centered");
  } else {
    icon.style.display = "block";
    container.classList.remove("centered");
  }
}

function toggleOtherLogoTextVisibility() {
  const container = document.querySelector(".other-logo-text");
  const parent_container = document.querySelector(".logo-text");
  if (!container || !parent_container) return; // Returns if there isn't an icon or container

  if (window.innerWidth < 768) {
    container.style.display = "none";
    //container.classList.add("centered");
  } else {
    container.style.display = "block";
    // container.classList.remove("centered");
  }
}

window.addEventListener("load", toggleIconVisibility);
window.addEventListener("resize", toggleIconVisibility);
window.addEventListener("load", toggleOtherLogoTextVisibility);
window.addEventListener("resize", toggleOtherLogoTextVisibility);
