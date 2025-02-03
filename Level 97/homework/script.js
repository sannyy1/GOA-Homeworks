class Book {
    constructor(title, author, pages, publishYear) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.publishYear = publishYear;
    }
  
    getSummary() {
      return `წიგნი '${this.title}' დაწერილია ${this.author}-ის მიერ, გამოქვეყნდა ${this.publishYear}-ში და შეიცავს ${this.pages} გვერდს.`;
    }
  }
  
  const book1 = new Book("გერო", "გრიგოლ რობაქიძე", 250, 1921);
  
  console.log(book1.getSummary());