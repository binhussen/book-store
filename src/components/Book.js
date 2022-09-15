/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import Action from './Action';
import Progress from './Progress';

const Book = ({ book }) => {
	const { title, category, author } = book;
	return (
		<div className='p-8 bg-white rounded border border-w1 flex justify-between'>
			<div>
				<p className='font-bold opacity-50'>{category}</p>
				<h2 className='font-bold text-xl'>{title}</h2>
				<p className='text-sm font-light text-secondary'>{author}</p>
				<Action />
			</div>
			<Progress />
		</div>
	);
};

export default Book;
