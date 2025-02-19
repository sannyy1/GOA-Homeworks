let allValue = [
    17,
    "სანდრო",
    5.5,
    true,
    {
        name: "სანდრო",
        surname: "მაისურაძე",
        age: 17,
        country: "საქართველო",
        city: "თბილისი"
    }
];

let sentence = `ჩემი სახელია ${allValue[4].name}, ჩემი გვარია ${allValue[4].surname}, ჩემი ასაკია ${allValue[4].age}, მე ვარ ${allValue[4].country}-დან და ვცხოვრობ ${allValue[4].city}-ში.`;

console.log(sentence);