/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import Action from './Action';
import Progress from './Progress';

const Book = ({ book }) => {
  const {
    item_id, title, author, category,
  } = book;
  const progress = {
    percent: Math.floor(Math.random() * 100),
    chapter: Math.floor(Math.random() * 20),
  };
  return (
    <div className="p-8 bg-white rounded border border-w1 flex justify-between">
      <div>
        <p className="font-bold opacity-50">{category}</p>
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-sm font-light text-secondary">{author}</p>
        <Action id={item_id} />
      </div>
      <Progress progress={progress} />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.objectOf(Progress).isRequired,
  }).isRequired,
};

export default Book;
