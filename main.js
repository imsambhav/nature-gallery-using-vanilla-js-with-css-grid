const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// Set img opacity for first image
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opactity
  imgs.forEach(img => (img.style.opacity = 1));

  // Source changed of current image with clicked img.
  current.src = e.target.src;

  // Add fading class
  current.classList.add("fade-in");

  // Remove fade-in class in 500 ms
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity of clicked img
  e.target.style.opacity = opacity;
}
