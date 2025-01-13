// პატარა კალკულატორი

function simple_calculator(num1, num2, operation) {
    if (operation === "დამატება") {
      return num1 + num2;
    } else if (operation === "გამოკლება") {
      return num1 - num2;
    } else if (operation === "გამრავლება") {
      return num1 * num2;
    } else if (operation === "გაყოფა") {
      if (num2 === 0) {
        return "შეცდომა: ნულზე გაყოფა შეუძლებელია";
      } else {
        return num1 / num2;
      }
    } else {
      return "არასწორი ოპერაცია";
    }
  }
  
  
  console.log(simple_calculator(10, 5, "დამატება"));
  console.log(simple_calculator(10, 5, "გამოკლება"));
  console.log(simple_calculator(10, 5, "გამრავლება"));
  console.log(simple_calculator(10, 5, "გაყოფა"));
  console.log(simple_calculator(10, 0, "გაყოფა"));
  console.log(simple_calculator(10, 5, "გამოცდა"));


// 2. შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა რიცხვი ლუწი, თუ ლუწია, მაშინ გამოიტანოს 'ეს რიცხვი არის ლუწი', სხვა შემთხვევაში გამოიტანოს 'ეს რიცხვი არის კენტი'

function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log('ეს რიცხვი არის ლუწი');
    } else {
      console.log('ეს რიცხვი არის კენტი');
    }
  }