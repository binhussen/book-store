/** @format */

import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => (
  <section className="p-[5%] bg-w2">
    <div className="flex flex-col gap-4">
      <Book />
      <Book />
      <Book />
    </div>
    <AddBook />
  </section>
);

export default Books;
