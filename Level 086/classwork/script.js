// შექმენით ფუნქცია, რომელიც გამოიტანს x და y ჯამს, მოახდინეთ ოპერაცია შემდეგ ოპერატორებზე: +, -. *. //

function calculate(x, y) {
    const addition = x + y;
    const subtraction = x - y;
    const multiplication = x * y;
    const division = Math.floor(x / y);
    
    console.log("Addition (x + y):", addition);
    console.log("Subtraction (x - y):", subtraction);
    console.log("Multiplication (x * y):", multiplication);
    console.log("Division (x // y):", division);
  }