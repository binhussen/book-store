/* eslint-disable react/prop-types */
/** @format */

import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = ({ books }) => (
  <section className="p-[5%] bg-w2">
    <div className="flex flex-col gap-4">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
    <div className="h-0.5 w-[100%] my-8 bg-w1" />
    <AddBook />
  </section>
);

export default Books;
