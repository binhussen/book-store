/** @format */
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Software',
    };
    dispatch(createBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2 className="text-lg font-bold opacity-60">ADD NEW BOOK</h2>
      <form
        className="flex gap-8 mt-5 flex-col md:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-3 border border-w1 bg-white text-base w-[100%] md:w-[50%]"
          placeholder="Book title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          type="text"
          className="p-3 border border-w1 bg-white text-base w-[100%] md:w-[30%]"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
          required
        />
        <button
          type="submit"
          className="text-white font-bold font-serif px-6 py-2 rounded-md bg-primary cursor-pointer md:w-[20%] w-[30%] mx-auto"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
