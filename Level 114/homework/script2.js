// ღილაკი და ტექსტი
const toggleButton = document.getElementById("toggleButton");
const textToToggle = document.getElementById("textToToggle");

// ღილაკზე დაჭერის შემთხვევაში ტექსტის დამალვა ან გამოტანა
toggleButton.addEventListener("click", function() {
  // Check if the text is visible and toggle its display
  if (textToToggle.style.display === "none") {
    textToToggle.style.display = "block";  // ტექსტის გამოტანა
  } else {
    textToToggle.style.display = "none";   // ტექსტის დამალვა
  }
});
