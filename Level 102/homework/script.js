// 1.  Write a function that takes an array as an argument and returns the number of elements in that array.

function countElements(arr) {
    return arr.length;
}

// 2. Write a function that takes two arrays as arguments and returns a new array that is the result of concatenating the two arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = concatenateArrays(array1, array2);
console.log(result);


// 3. Write a function that takes an array and a value as arguments and adds the value to the end of the array using the push() method. The function should return the new length of the array.

const myArray = [1, 2, 3];
const newLength = addValueToEnd(myArray, 4);
console.log(myArray);
console.log(newLength);


// 4. Write a function that takes an array as an argument and removes the last element from the array using the pop() method. The function should return the removed element.

const myArray2 = [1, 2, 3, 4];
const removedElement = removeLastElement(myArray2);
console.log(removedElement);
console.log(myArray2);

// 5. Write a function that takes two arrays as arguments, concatenates them, and then pushes a new value to the end of the concatenated array. The function should return the new array.

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const newValue = 7;

const result1 = concatenateAndAdd(array3, array4, newValue);
console.log(result1);

