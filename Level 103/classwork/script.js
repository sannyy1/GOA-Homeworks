let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let concatArray = array1.concat(array2);
console.log("Concatenated Array:", concatArray);

concatArray.copyWithin(concatArray.length, 0, 2);
console.log("Array after copyWithin:", concatArray);

concatArray.fill(0, concatArray.length - 3);
console.log("Array after fill:", concatArray);

let lastElement = concatArray.pop();
console.log("Removed last element:", lastElement);
console.log("Array after pop:", concatArray);

let firstElement = concatArray.shift();
console.log("Removed first element:", firstElement);
console.log("Array after shift:", concatArray);

concatArray.unshift(10, 20);
console.log("Array after unshift:", concatArray);