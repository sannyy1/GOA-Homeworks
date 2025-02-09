// დავალება 1.

// Basic Object Initialization
// Create an object named student with the following properties:
// name (string)
// age (number)
// grade (string)
// isEnrolled (boolean)
// Add a method called getInfo() that returns a formatted string with the student's details.
// Update the student's grade to a new value and log the updated object.

let student = {
    name: "John Doe",
    age: 20,
    grade: "B",
    isEnrolled: true,
    getInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Enrolled: ${this.isEnrolled}`;
    }
};

console.log(student.getInfo());

student.grade = "A";

console.log(student);


// დავალება 2.
// Object Constructor Function
// Create a constructor function called Car that initializes the following properties:
// brand
// model
// year
// Add a method getCarInfo() to the constructor that returns the car’s full details.
// Create three car objects using the Car constructor and display their information using getCarInfo().

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
}

let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2018);
let car3 = new Car("Ford", "Mustang", 2022);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());