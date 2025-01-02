let number1 = parseFloat(prompt("შეიტანეთ პირველი რიცხვი:"));

let number2 = parseFloat(prompt("შეიტანეთ მეორე რიცხვი:"));

let isGreater = number1 > number2;  
let isEqual = number1 === number2; 

console.log("რიცხვი 1 მეტია რიცხვი 2-ზე?", isGreater);
console.log("რიცხვები თანაბარია?", isEqual);


// 2.

let text = "hello World";

let upperCaseText = text.toUpperCase();

let lowerCaseText = text.toLowerCase();

console.log("დიდი ასოებით:", upperCaseText);
console.log("პატარა ასოებით:", lowerCaseText);