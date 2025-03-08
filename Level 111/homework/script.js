/* 1. Create and Append Elements
Create a new <p> element with the text "This is a paragraph."
Append this new <p> element to the body of the document.
[11:01 AM]  */

function addParagraph() {

    let newParagraph = document.createElement("p");
  
    newParagraph.innerText = "This is a paragraph.";
  
    document.body.appendChild(newParagraph);
  }


/* 2. # 3. Modify Existing Elements
   1. Create a new <h2> element with the text "Subheading."
   2. Append this <h2> element to the body of the document.
   3. Change the text content of the <h2> element to "Updated Subheading."
*/

function addAndModifyHeading() {

    let newHeading = document.createElement("h2");
  
    newHeading.innerText = "Subheading";
  
    document.body.appendChild(newHeading);
  
    newHeading.innerText = "Updated Subheading";
  }