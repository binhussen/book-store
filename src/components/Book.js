/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import Action from './Action';
import Progress from './Progress';

const Book = ({ book }) => {
  const { id, title, category, author, progress } = book;
	return (
		<div className='p-8 bg-white rounded border border-w1 flex justify-between'>
			<div>
				<p className='font-bold opacity-50'>{category}</p>
				<h2 className='font-bold text-xl'>{title}</h2>
				<p className='text-sm font-light text-secondary'>{author}</p>
				<Action id={id} />
			</div>
			<Progress progress={progress} />
		</div>
	);
};

export default Book;
