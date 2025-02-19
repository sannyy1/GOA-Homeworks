// assign() - იღებს რამდენიმე ობიექტს და აერთიანებს

let p1 = {
    name: 'sandro'
};

let p2 = {
    lastName: 'Maisuradze',
    age: 17
};

let p3 = {
    sport: basketball
};

let p4 = {
    country: Georgia
};

let combinedObj = Object.assign(p1, p2, p3, p4);

console.log(combinedObj);


// entries() method - ობიექტიდან გამოაქვს თვისება მნიშვნელობები (key-value) მასივის სახით.

let car = {
    brand: 'Bmw',
    model: 'X5',
    year: '2020',
    color: 'black'
};

let keyValueCar = Object.entries(car);
console.log(keyValueCar);


// console.log(car.brand, car.model, car.year, car.color);


let car2 = {
    brand: 'mercedes',
    model: 'maybach',
    year: '2024',
    color: 'black'
};

console.log(Object.keys(car));


// mesame

Object.freeze(car3);

let car3 = {
    brand: 'audi',
    model: 'rs6',
    year: '2021',
    color: 'black'
};

car.weight = '1800kg';
car.mode = 'sport';
delete car.weight;
car.brand = 'Audi';


console.log(car3);
console.log(Object.keys(car3));


// meotxe

let car4 = {
    brand: 'nissan',
};

Object.seal(car4);

car.model = 'GTR';

car.brand = 'BMW';

console.log(car4);



// mexute

let person = {
    na,e: 'Sandro',
    nickname: 'Maisuradze'
}

console.log(Object.hasOwn(person, 'nickname')); // true
console.log(Object.hasOwn(person, 'name')); // true
console.log(Object.hasOwn(person, 'age')); // false



// mexute metodi fromEntries()

let person2 = {
    name: 'Beqa',
    nickname: 'programisti'
}


let entries = Object.entries(person2);
console.log(entries);

let obj = Object.fromEntries(entries);
console.log(obj);