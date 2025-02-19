let fruits = ['apple', 'orange', 'banana', 'kiwi', 'mango'];

let citrus = fruits.slice(1, 3);
console.log(citrus);

fruits.splice(fruits.length - 2, 2, 'fig', 'fig');
console.log(fruits);

let fruitString = fruits.join('-');
console.log(fruitString);