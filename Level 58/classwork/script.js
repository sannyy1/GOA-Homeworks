// 1) დავალება --  შექმენით ობიექტი სადაც ჩაწერთ თვქენი საყვარელი პერსონაჟის მონაცემებს, დაამატეთ მინიმუმ 5 კუთვნილება თავიდანვე, შემდეგ დაბეჭდეთ ხუთივე კუთვნილება ცალ-ცალკე, შემდეგ შეცვალეთ რომელიმე ორი კუთვნილება და დაბეჭდეთ თავიდან ბოლომდე ობიექტი, საბოლოოდ დაამატეთ ერთი კუთვნილება და წაშალეთ რომელიმე ძველი კუთვნილება, კომენტარებით აუცილებლად ახზსენით თუ რას ნიშნავს ობიექტი, რაში გამოიყენება, რატომ არის მაგარი, რა არის კუთვნილება და რას ნიშნევას წერტილის ნოტაცია

const character  = {
    favorite: "spiderman",
    height: 182,
    weight: 70,
    superpower: "flying",
    age: 19,

}

character.height = 172; //height შევცვალე კუთვნილება
character.weight = 80; //weight შევცვალე კუთვნილება

character.country = "GEORGIA"; //country დავამატე ახალი კუთვნილება
delete character.country //country წავშალე ახალი დამატებული კუთვნილება
console.log(character)

//object - ჩვენს გარშემო რასაც ვხედავთ და ვეხებით ყველაფერი არის ობიექტი, მაგალითად: კურსორი.
//dot ნოტაცია წერტილის ნოტაცია. ჩვენ შეგვიძლია ავირჩიოთ ჩვენი ობიექტის კონკრეტულიო კუთვნილება.