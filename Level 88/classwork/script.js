// 1. while loop დახმარებით, 50 - ჯერ გამოიტანეთ 'GOA'

let akademia = 50;
while(akademia > 0) {
    console.log('goa');
    akademia--;
}

// 3. while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები

let i = 1;

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}