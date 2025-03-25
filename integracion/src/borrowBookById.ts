type Book = {
  id: number;
  title: string;
  available: boolean;
};

export const booksAvailable: Book[] = [
  { id: 1, title: "The Great Gatsby", available: true },
  { id: 2, title: "1984", available: true },
  { id: 3, title: "To Kill a Mockingbird", available: true },
  { id: 4, title: "Pride and Prejudice", available: true },
  { id: 5, title: "The Catcher in the Rye", available: true },
];

const getBookById = (id: number): Book => {
  const book = booksAvailable.find((book) => book.id === id);
  if (!book) throw new Error("Book not found");
  return book;
};

const borrowBook = (book: Book): void => {
  if (!book.available) throw new Error(`"${book.title}" is already borrowed`);
  book.available = false;
};

export const borrowBookById = (id: number): string => {
  const book = getBookById(id);
  borrowBook(book);
  return `You borrowed ${book.title}.`;
};
