// Logical Operators (ლოგიკური ოპერატორები)
// შექმენით ფუნქცია, რომელიც იღებს სამი რიცხვს და ამოწმებს, ეს სამი რიცხვი ქმნიან სამკუთხედს თუ არა. სამკუთხედის შესანარჩუნებლად წრეწირს სამი გვერდი უნდა აკმაყოფილებდეს: a + b > c, b + c > a და c + a > b.

function isTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b;
}

console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(1, 2, 3)); // false


// Prompt (თხოვნა)
// შექმენით ფუნქცია, რომელიც მომხმარებელს მოთხოვს ველექტრონული ფოსტის წარდგენა, შემოტანის შემდეგ დაუწერეთ ტექსტი - 'access granted'.

function requestEmail() {
    let email = prompt("Please enter your email:");
    if (email) {
        console.log("access granted");
    }
}

requestEmail();


// Comparison Operators (შედარებითი ოპერატორები)
// დაწერეთ პროგრამა, რომელიც იღებს ორი რიცხვს და ამოწმებს, თითეული რიცხვი უდრის თუ არა ერთმანეთს და ასევე ამოწმებს დიდია ან პატარა.

function compareNumbers(num1, num2) {
    if (num1 === num2) {
        console.log("Numbers are equal.");
    } else if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else {
        console.log(num1 + " is less than " + num2);
    }
}

compareNumbers(5, 3);
compareNumbers(3, 3);
compareNumbers(2, 5);