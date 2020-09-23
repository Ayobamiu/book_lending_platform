const {
  getBook,
  getBookinBorrowedList,
  isAvailable,
  showBorrowedBooks,
  showBooksAvailable,
} = require("../index");
const { setUpMockData } = require("./fixtures/db");

beforeEach(setUpMockData);

test("getBook should return a book with given id", () => {
  const book = getBook(1);
  expect(book.title).toBe("Prince of Persia");
});

test("getBook should return a null when given id is unavailable", () => {
  const book = getBook(10);
  expect(book).toBe(null);
});

test("getBookinBorrowedList should return true if book with given id is in BorroweBooks list", () => {
  const answer = getBookinBorrowedList(1);
  expect(answer).toBe(true);
});

test("getBookinBorrowedList should return false if book with given id is not in BorroweBooks list", () => {
  const answer = getBookinBorrowedList(2);
  expect(answer).toBe(false);
});

test("isAvailable should return false if book with given id is not in Books list", () => {
  const answer = isAvailable(1);
  expect(answer).toBe(false);
});

test("isAvailable should return false if book with given id is in Books list", () => {
  const answer = isAvailable(2);
  expect(answer).toBe(true);
});

test("showBorrowedBooks should return books borrowedBooks list", () => {
  const answer = showBorrowedBooks();
  expect(answer.length).toBe(1);
});

test("showBooksAvailable should return books available in Books list", () => {
  const answer = showBooksAvailable();
  expect(answer.length).toBe(2);
});
