// Task 3: getElementById
function changeHeaderText() {
    let header = document.getElementById("header");
    header.innerText = "Hello, JavaScript World!";
  }
  
  // Task 4: getElementsByClassName
  function changeBoxColors() {
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "lightblue"; // Change background color
    }
  }
  
  // Task 5: getElementsByTagName
  function changeParagraphText() {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerText = "This is a modified paragraph!";
    }
  }
  
  // Task 6: innerHTML
  function changeContent() {
    let content = document.getElementById("content");
    content.innerHTML = "<h2>New Content</h2><p>This is the updated content.</p>";
  }
  
  // Task 7: innerText
  function changeText() {
    let message = document.getElementById("message");
    message.innerText = "The text has been updated!";
  }
  
  // Task 8: style
  function changeBoxStyle() {
    let box = document.getElementById("box");
    box.style.width = "200px"; // Change width
    box.style.height = "200px"; // Change height
    box.style.backgroundColor = "green"; // Change background color
  }