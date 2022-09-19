/** @format */

import { useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
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
};

export default Books;
