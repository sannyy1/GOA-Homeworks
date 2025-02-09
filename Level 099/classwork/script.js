const mother = {
    firstName: "მაია",
    lastName: "ნადირაშვილი",
    age: 54,
    height: 161,
    city: "თბილისი"
  };
  
  const father = {
    firstName: "დავით",
    lastName: "მაისურაძე",
    age: 56,
    height: 175,
    city: "თბილისი"
  };
  
  const brother = {
    firstName: "გიორგი",
    lastName: "მაისურაძე",
    age: 28,
    height: 182,
    city: "თბილისი"
  };
  
  const sister = {
    firstName: "ლიკა",
    lastName: "მაისურაძე",
    age: 22,
    height: 168,
    city: "თბილისი"
  };
  
  const person = {
    firstName: "სანდრო",
    lastName: "მაისურაძე",
    age: 17,
    height: 171,
    city: "თბილისი",
    mother: mother,
    father: father,
    brother: brother,
    sister: sister
  };
  
  console.log(`მე: ${person.firstName} ${person.lastName}, ${person.age} წლის, ${person.height} სმ, ქალაქი: ${person.city}`);
  console.log(`დედა: ${person.mother.firstName} ${person.mother.lastName}, ${person.mother.age} წლის, სიმაღლე: ${person.mother.height} სმ, ქალაქი: ${person.mother.city}`);
  console.log(`მამა: ${person.father.firstName} ${person.father.lastName}, ${person.father.age} წლის, სიმაღლე: ${person.father.height} სმ, ქალაქი: ${person.father.city}`);
  console.log(`ძმა: ${person.brother.firstName} ${person.brother.lastName}, ${person.brother.age} წლის, სიმაღლე: ${person.brother.height} სმ, ქალაქი: ${person.brother.city}`);
  console.log(`და: ${person.sister.firstName} ${person.sister.lastName}, ${person.sister.age} წლის, სიმაღლე: ${person.sister.height} სმ, ქალაქი: ${person.sister.city}`);