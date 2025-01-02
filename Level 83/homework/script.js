// 1. რიცხვის შემოწმება (ლუწი თუ კენტი)

let number = parseInt(prompt("შეიტანეთ რიცხვი:"));

if (number % 2 === 0) {
    console.log("რიცხვი არის ლუწი.");
} else {
    console.log("რიცხვი არის კენტი.");
}



// 2. ტემპერატურის სტანდარტის შემოწმება

let temperature = parseFloat(prompt("შეიტანეთ ტემპერატურა ცელსიუსში:"));

if (temperature <= 0) {
    console.log("ცივი ტემპერატურა.");
} else if (temperature > 0 && temperature <= 25) {
    console.log("ზომიერი ტემპერატურა.");
} else {
    console.log("ცხელი ტემპერატურა.");
}


//3. სკოლის შეფასების სისტემა

let score = parseInt(prompt("შეიტანეთ თქვენი ქულა (0-100):"));

if (score >= 90 && score <= 100) {
    console.log("შეფასება: A");
} else if (score >= 80 && score < 90) {
    console.log("შეფასება: B");
} else if (score >= 70 && score < 80) {
    console.log("შეფასება: C");
} else if (score >= 60 && score < 70) {
    console.log("შეფასება: D");
} else if (score >= 0 && score < 60) {
    console.log("შეფასება: F");
} else {
    console.log("გთხოვთ, შეიტანოთ ვალიდური ქულა (0-100).");
}