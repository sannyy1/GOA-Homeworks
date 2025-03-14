// 1. პაროლის გამოცნობა
// შექმენით password ცვლადი და მიანიჭეთ მნიშვნელობა 'Group 41 is best'
// თქვენი დავალებაა, რომ შექმნათ ფუნქცია და გამოიცნოთ პაროლი იქამდე, სანამ პაროლი არ იქნება სწორი, მთლიანობაში გაქვთ 3 ცდა, როდესაც ცდების რაოდენობა გამოილევა, alert - ის დახმარებით გამოიტანეთ მესიჯი 'თქვენ ამოგეწურათ ცდების რაოდენობა', როდესაც პაროლი იქნება სწორი, გამოიტანეთ ' თქვენი შეყვანილი პაროლი სწორია'. 

function guessPassword() {
    const password = 'Group 41 is best';
    let attempts = 3;

    while (attempts > 0) {
        let userInput = prompt("შეიყვანეთ პაროლი:");

        if (userInput === password) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return;
        } else {
            attempts--;
            alert(`არასწორი პაროლი. დარჩენილი ცდები: ${attempts}`);
        }
    }
    alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}

guessPassword();



// 2. N რიცხვის ფაქტორიალის გამოთვლა
// for ციკლის დახმარებით გამოითვალეთ ნებისმიერი N რიცხვის ფაქტორიალი.


function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    return result;
}