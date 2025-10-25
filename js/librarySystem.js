class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  searchBook(title) {
    const book = this.books.find((b) => b.title === title);
    return book || `no book found`;
  }
  removeBook(title) {
    this.books = this.books.filter((b) => b.title !== title);
  }
  showAllBooks() {
    if (this.books.length === 0) {
      console.log("No books in the library");
    } else {
      this.books.forEach((b) => console.log(`${b.title} by ${b.author}`));
    }
  }
}
const lib = new Library();
lib.addBook(new Book("1984", "Orwell"));
lib.addBook(new Book("Dune", "Frank Herbert"));

console.log(lib.searchBook("Dune"));
lib.showAllBooks();
