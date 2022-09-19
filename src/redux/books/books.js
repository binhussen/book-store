/** @format */
import { v4 as uuidv4 } from 'uuid';

const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialBooks = [
	{
		id: uuidv4(),
		title: 'The Hunger Games',
		category: 'Action',
		author: 'Suzanne Collins',
		progress: { percent: 64, chapter: 17 },
	},
	{
		id: uuidv4(),
		title: 'Dune',
		category: 'Sci-Fi',
		author: 'Frank Herbert',
		progress: { percent: 8, chapter: 3 },
	},
	{
		id: uuidv4(),
		title: 'Capital in the Twenty-First Century',
		category: 'Economy',
		author: 'Suzanne Collins',
		progress: { percent: 0, chapter: 1 },
	},
];

export default (state = initialBooks, action) => {
	switch (action.type) {
		case CREATE_BOOK:
			return [...state, action.book];
		case REMOVE_BOOK:
			return state.filter((book) => book.id !== action.id);
		default:
			return state;
	}
};

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = (id) => ({
	type: REMOVE_BOOK,
	id,
});
