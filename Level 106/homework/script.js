/*
Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap) 
*/

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
    alert(year + " is a leap year!");
} else {
    alert(year + " is not a leap year.");
}


// თქვენ უნდა დაწეროთ JavaScript ფუნქცია, რომელიც გენერირებს N რაოდენობის შემთხვევით რიცხვებს და მათ შეინახავს მასივში. ფუნქცია დააბრუნებს ამ რიცხვების საშუალო არითმეტიკულს.

function generateRandomNumbers(N) {
    let numbers = [];
    let sum = 0;
    
    for (let i = 0; i < N; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
        sum += randomNumber;
    }
    
    let average = sum / N;
    return average;
}

let N = parseInt(prompt("Enter the number of random numbers to generate: "));
alert("The average of the generated numbers is: " + generateRandomNumbers(N));