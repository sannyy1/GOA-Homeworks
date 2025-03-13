const button = document.getElementById("toggleButton");
const targetDiv = document.getElementById("targetDiv");

button.addEventListener("click", function() {
  targetDiv.classList.toggle("active");
});
