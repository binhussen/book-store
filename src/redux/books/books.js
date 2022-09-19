/** @format */
export const CREATE_BOOK = 'bookstore/books/CREATE';
export const REMOVE_BOOK = 'bookstore/books/REMOVE';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});
