/*
html ფაილში შექმენით 3 ელემენტი, პირველ ელემენტს მიანიჭეთ id, მეორე ელემენტს მიანიჭეთ კლასი და მესამე ელემენტი დატოვეთ ჩვეულებრივად. თქვენი დავალებაა, რომ ეს სამივე ელემენტი წამოიღოთ შესაბამისი dom ის მეთოდებით.
როდესაც წამოიღებთ ელემენტებს მიანიჭეთ სხვადასხვა სტილი, შეუცვალეთ ფერი, უკანა ფერი, ტექსტის ზომა, ტექსტის სტილი და ა.შ
ამასობაში შეცვალეთ წამოღებული ელემენტების კონტენტი.
*/

const elementById = document.getElementById("element1");
const elementByClass = document.querySelector(".element-class");
const elementByTag = document.querySelector("div:not([id])");

elementById.style.color = "blue";
elementById.style.backgroundColor = "yellow";
elementById.style.fontSize = "20px";
elementById.style.fontStyle = "italic";
elementById.innerHTML = "This is the first text.";

elementByClass.style.color = "green";
elementByClass.style.backgroundColor = "lightgrey";
elementByClass.style.fontSize = "18px";
elementByClass.style.fontWeight = "bold";
elementByClass.innerHTML = "This is the second text.";

elementByTag.style.color = "red";
elementByTag.style.backgroundColor = "pink";
elementByTag.style.fontSize = "22px";
elementByTag.style.textDecoration = "underline";
elementByTag.innerHTML = "This is the third text.";