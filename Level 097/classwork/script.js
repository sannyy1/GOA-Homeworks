let person1 = {
  name: "sandro",
  lastName: "Maisuradze",
  age: 10,
  proffesion: "ქვიშაში თამაში",
  num: 123
}

person1.country = 'Georgia'
console.log(person1);

person1.gender = 'non binary ze/me/si';

delete person1.gender
console.log(person1);