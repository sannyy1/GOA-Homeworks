let nestedArray = [1, [2, 3], 4, [5, [6, 7]], 8];

let flatArray = nestedArray.flat();
console.log('Flattened by one level:', flatArray);

let fullyFlatArray = nestedArray.flat(Infinity);
console.log('Fully flattened:', fullyFlatArray);

function checkElement(arr, value) {
  return arr.includes(value);
}

console.log('Check if 3 exists:', checkElement(flatArray, 3));
console.log('Check if 10 exists:', checkElement(flatArray, 10));

function findIndexOfElement(arr, value) {
  return arr.indexOf(value);
}

console.log('Index of 4:', findIndexOfElement(flatArray, 4));
console.log('Index of 10:', findIndexOfElement(flatArray, 10));

function findLastIndexOfElement(arr, value) {
  return arr.lastIndexOf(value);
}

console.log('Last index of 5:', findLastIndexOfElement(fullyFlatArray, 5));
console.log('Last index of 10:', findLastIndexOfElement(fullyFlatArray, 10));