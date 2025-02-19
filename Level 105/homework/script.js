// # Task 5: Library Management System
// **Objective: To manage a library system using arrays and objects, and to practice various array methods including push.**
// **Instructions**:
// 1. Create an array called library with the following initial book objects:
// 2. Write a function called addBook that takes a book object as input and adds it to the library array using the push method. The function should return the updated library array.
// 3. Write a function called removeLastBook that uses the pop method to remove the last book from the library array and returns the updated library array.
// 4. Write a function called updateBookCopies that takes a book title and a number of copies as input, and uses the splice method to update the copies of the specified book. The function should return the updated library array.
// 5. Write a function called listBooks that uses the join method to create a string of all book titles separated by commas and returns the string.
// 6. Write a function called extractBooks that uses the slice method to create a new array containing a portion of the library array (e.g., the first two books) and returns the new array.
// 7. Write a function called modifyBooks that uses the copyWithin method to copy the first book in the library array to the last position and returns the updated library array.
// 8. Write a function called resetCopies that uses the fill method to set the copies of all books in the library array to a specified number and returns the updated library array.
// 9. Write a function called removeFirstBook that uses the shift method to remove the first book from the library array and returns the updated library array.
// 10 . Write a function called addFirstBook that takes a book object as input and uses the unshift method to add it to the beginning of the library array. The function should return the updated library array.



const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 3 },
    { title: "1984", author: "George Orwell", copies: 5 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 4 }
];

function addBook(book) {
    library.push(book);
    return library;
}

function removeLastBook() {
    library.pop();
    return library;
}

function updateBookCopies(title, copies) {
    const bookIndex = library.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
        library.splice(bookIndex, 1, { ...library[bookIndex], copies });
    }
    return library;
}

function listBooks() {
    return library.map(book => book.title).join(", ");
}

function extractBooks(startIndex, endIndex) {
    return library.slice(startIndex, endIndex);
}

function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1);
    return library;
}

function resetCopies(number) {
    library.fill({ copies: number }, 0, library.length);
    return library;
}

function removeFirstBook() {
    library.shift();
    return library;
}

function addFirstBook(book) {
    library.unshift(book);
    return library;
}

console.log(addBook({ title: "Moby Dick", author: "Herman Melville", copies: 2 }));
console.log(removeLastBook());
console.log(updateBookCopies("1984", 10));
console.log(listBooks());
console.log(extractBooks(0, 2));
console.log(modifyBooks());
console.log(resetCopies(5));
console.log(removeFirstBook());
console.log(addFirstBook({ title: "Pride and Prejudice", author: "Jane Austen", copies: 3 }));

// 2. # Level 105:

// # Task 1 : JavaScript Array Methods Task: Comprehensive Array Manipulation
// Objective: To practice using a variety of array methods: concat, copyWithin, fill, pop, shift, unshift, join, slice, splice, flat, includes, indexOf, and lastIndexOf.**
// **Instructions**:
// 1. Create three arrays: arr1, arr2, and nestedArray with the following elements:
// 2. Concatenate arr1 and arr2 into a new array called combinedArray.
// 3. Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 5.
// 4.Use the fill method to replace elements from index 6 to the end with the number 0.
// 5. Remove the last element from combinedArray using the pop method.
// 6. Remove the first element from combinedArray using the shift method.
// 7. Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.
// 8. Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements [x, y, z].
// 9. Use the slice method to create a new array slicedArray that contains the last five elements of combinedArray.
// 10. Use the join method to create a string from slicedArray, with elements separated by a comma ,.
// 11. Use the flat method to flatten nestedArray into a single-level array and store it in flatArray.
// 12. Check if the element 8 is included in flatArray using the includes method.
// 13. Find the index of the element 9 in flatArray using the indexOf method.
// 14. Find the last index of the element 7 in flatArray using the lastIndexOf method.



const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const nestedArray = [[1, 2], [3, 4], [5, 6]];

let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(5, 0, 3);

combinedArray.fill(0, 6);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

combinedArray.splice(2, 2, 'x', 'y', 'z');

const slicedArray = combinedArray.slice(-5);

const joinedString = slicedArray.join(',');

const flatArray = nestedArray.flat();

const isIncluded = flatArray.includes(8);

const indexOf9 = flatArray.indexOf(9);

const lastIndexOf7 = flatArray.lastIndexOf(7);

console.log("Combined Array:", combinedArray);
console.log("Sliced Array:", slicedArray);
console.log("Joined String:", joinedString);
console.log("Flat Array:", flatArray);
console.log("Is 8 included in flatArray?", isIncluded);
console.log("Index of 9 in flatArray:", indexOf9);
console.log("Last index of 7 in flatArray:", lastIndexOf7);