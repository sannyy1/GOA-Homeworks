// Step 1: Get the ul element by its ID
const myList = document.getElementById("myList");

// Step 2: Create a new li element
const newListItem = document.createElement("li");

// Step 3: Set the text content of the new li element
newListItem.textContent = "New list item";

// Step 4: Append the new li element to the ul element
myList.appendChild(newListItem);
