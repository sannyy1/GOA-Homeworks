// 1. დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შემოტანას, თუ ტექსტის სიგრძე მეტია 140 - ზე, მაშინ უნდა ჩამოიჭრას ის ნაწილი, საიდანაც ტექსტის სიგრძე ცდება 140 - ს, შემდეგ გამოიტანეთ ის ნაწილი, სადაც ტექსტის სიგრძე არის 140 - მდე.

let userInput = prompt("გთხოვთ, შეიტანოთ ტექსტი:");


if (userInput.length > 140) {
    userInput = userInput.slice(0, 140);
}


console.log(userInput);


// 2. დაწერეთ ფუნქცია, სადაც მომხმარებელი შემოიტანს მის სახელს პატარა ასოებით, თქვენი დავალებაა, რომ დაწეროთ კოდი ისე, რომ შემოტანილი სახელის პირველი ასო გაადიდოთ და შემდეგ მიესალმოთ მომხმარებელს შემდეგნაირად: "Hello Name" - (name - ში უნდა ჩაჯდეს მომხმარებლის შემოტანილი სახელი).

function greetUser() {
    let userName = prompt("გთხოვთ, შეიტანოთ თქვენი სახელი პატარა ასოებით:");
    
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    
    console.log("Hello " + userName);
}

greetUser();