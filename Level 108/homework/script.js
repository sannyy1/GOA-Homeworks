/*
Create a function that displays the current date and time in the format YYYY-MM-DD HH:MM:SS.
Create a function that takes a user's birthdate as input and calculates their age in years, months, and days. ---- display result on webpage
Write a function that takes a date as input and displays the corresponding day of the week (e.g., "Monday", "Tuesday").
*/

function displayCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById('dateTime').innerText = formattedDateTime;
}


/*
Create a timer that starts counting from 0 and updates every second.
Write a function that displays the current time (hours, minutes, and seconds) and updates every second using setInterval.
Write a function that logs a random number between 0 and 1 to the console every second using setInterval.
*/

let timer = 0;

function startTimer() {
    setInterval(() => {
        timer++;
        document.getElementById('timer').innerText = timer;
    }, 1000);
}


/*
    Delayed Message
    Write a function that displays a message after a user-defined delay.
    Allow the user to input the message and the delay in milliseconds.
*/

function displayDelayedMessage() {
    const message = document.getElementById('messageInput').value;
    const delay = parseInt(document.getElementById('delayInput').value);

    if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid positive number for the delay.");
        return;
    }

    setTimeout(() => {
        document.getElementById('delayedMessage').innerText = message;
    }, delay);
}