function calculateGrade(subject1, subject2, subject3) {
    let average = (subject1 + subject2 + subject3) / 3;

    if (average > 90 && average < 100) {
        return 'A';
    } else if (average >= 70 && average < 80) {
        return 'B';
    } else if (average >= 50 && average < 65) {
        return 'C';
    } else if (average >= 25 && average < 50) {
        return 'D';
    } else {
        return 'წადი ისწავლე და მერე მოდი';
    }
}

console.log(calculateGrade(95, 85, 90)); // A
console.log(calculateGrade(72, 75, 74)); // B
console.log(calculateGrade(60, 55, 63)); // C
console.log(calculateGrade(45, 30, 20)); // D
console.log(calculateGrade(10, 15, 5));  // წადი ისწავლე და მერე მოდი