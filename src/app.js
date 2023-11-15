const progressBar = document.getElementById("progressBar");

// Calculate the maximum scroll height
const maxScrollHeight =
  document.documentElement.scrollHeight - window.innerHeight;

// Update the width of the progress bar based on scroll position
function updateProgressBar() {
  const scrollPosition = window.scrollY;
  const progress = (scrollPosition / maxScrollHeight) * 100;
  progressBar.style.width = `${progress}%`;
}

// Attach the update function to the scroll event
window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);
