// Working with Strings and Numbers
// Objective: Use array methods to manipulate arrays containing both numbers and strings.

// Instructions:

// Create two arrays, numsArray and strArray, with the following elements:

// Concatenate numsArray and strArray into a new array called combinedArray.

// Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 4.

// Use the fill method to replace the elements from index 2 to index 4 with the string "filled".

// Remove the last element from combinedArray using the pop method.

// Remove the first element from combinedArray using the shift method.

// Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.


const numsArray = [1, 2, 3, 4, 5];
const strArray = ["a", "b", "c", "d", "e"];

const combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);

combinedArray.fill("filled", 2, 5);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

console.log(combinedArray);


// 2.
// #  Task 2: Array of Objects

// **Objective**: Manipulate arrays that contain objects.

// **Instructions**:

// 1. Create two arrays, people and places, with the following objects:

// 2. Concatenate people and places into a new array called mergedArray.

// 3. Use the copyWithin method to copy the first two elements of mergedArray to the positions starting from index 2.

// 4. Use the fill method to replace the last two elements of mergedArray with the object {city: 'New York'}.

// 5.Remove the last element from mergedArray using the pop method.

// 6. Remove the first element from mergedArray using the shift method.

// 7. Add the objects {name: 'Charlie'} and {name: 'David'} to the beginning of mergedArray using the unshift method.


const people = [
    { name: 'sandro' },
    { name: 'lika' },
    { name: 'tamta' }
  ];
  
  const places = [
    { city: 'tbilisi' },
    { city: 'batumi' },
    { city: 'akhaltsikhe' }
  ];
  
  const merged = people.concat(places);
  
  merged.copyWithin(2, 0, 2);
  
  merged.fill({ city: 'tbilisi' }, merged.length - 2);
  
  merged.pop();
  
  merged.shift();
  
  merged.unshift({ name: 'giorgi' }, { name: 'dato' });
  
  console.log(merged);