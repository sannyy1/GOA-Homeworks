/*
Display and Manipulate Date and Time
Objectives:

Create and display a Date object for the current date and time.

Display the current date and time in a readable format on a webpage.

Use set methods to modify the Date object.

Update and display the modified date and time.
*/

const currentDate = new Date();
console.log("Current Date and Time:", currentDate.toLocaleString());

currentDate.setFullYear(2023);
currentDate.setMonth(5);
currentDate.setDate(15);
currentDate.setHours(10);
currentDate.setMinutes(30);
currentDate.setSeconds(0);

console.log("Modified Date and Time:", currentDate.toLocaleString());