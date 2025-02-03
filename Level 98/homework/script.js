// 1 Create an Object Constructor: Define a constructor function named Person that takes name, age, and profession as parameters. Inside the constructor, assign these parameters to the properties of the object using the this keyword. Add a method named introduce that logs a message to the console introducing the person (e.g., "Hi, I'm [name], a [age]-year-old [profession].").

function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  
    this.introduce = function() {
      console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
  }
  
  const person1 = new Person("John", 30, "Engineer");
  person1.introduce();


// 2 Book Collection. Create an Object Constructor named Book that takes three parameters: title, author, and year. Declare a method getSummary that returns a brief summary of the book (e.g., "Title by Author, published in Year"). Create three book objects and call the getSummary method for each object.

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
    this.getSummary = function() {
      return `${this.title} by ${this.author}, published in ${this.year}.`;
    };
  }
  
  const book1 = new Book("1984", "George Orwell", 1949);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  
  console.log(book1.getSummary());
  console.log(book2.getSummary());
  console.log(book3.getSummary());