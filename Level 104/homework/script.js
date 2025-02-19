// JavaScript Array Methods Task: Comprehensive Exercise
// Objective: To practice using the concat, copyWithin, fill, pop, shift, unshift, join, slice, and splice array methods.
// Instructions:
// Create three arrays: arr1, arr2, and arr3 with the following elements:
// Concatenate arr1 and arr2 into a new array called mergedArray.
// Use the copyWithin method to copy the first three elements of mergedArray to the positions starting from index 5.
// Use the fill method to replace elements from index 6 to the end with the number 0.
// Remove the last element from mergedArray using the pop method.
// Remove the first element from mergedArray using the shift method.
// Add the elements 100 and 200 to the beginning of mergedArray using the unshift method.
// Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements of arr3.
// 9, Use the slice method to create a new array slicedArray that contains the last five elements of mergedArray.
// Use the join method to create a string from slicedArray, with elements separated by a comma ,.




const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14];

let mergedArray = arr1.concat(arr2);

mergedArray.copyWithin(5, 0, 3);

mergedArray.fill(0, 6);

mergedArray.pop();

mergedArray.shift();

mergedArray.unshift(100, 200);

mergedArray.splice(2, 2, ...arr3);

const slicedArray = mergedArray.slice(-5);

const joinedString = slicedArray.join(',');

console.log("Final merged array:", mergedArray);
console.log("Sliced array:", slicedArray);
console.log("Joined string:", joinedString);