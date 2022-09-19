/** @format */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Action = ({ id }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="flex items-center mt-5">
      <button
        type="button"
        className="font-serif cursor-pointer font-light text-sm text-secondary"
      >
        Comment
      </button>
      <div className="mx-4 bg-w1 h-6 w-0.5" />
      <button
        type="button"
        className="font-serif cursor-pointer font-light text-sm text-secondary"
        onClick={removeBookHandler}
      >
        Remove
      </button>
      <div className="mx-4 bg-w1 h-6 w-0.5" />
      <button
        type="button"
        className="font-serif cursor-pointer font-light text-sm text-secondary"
      >
        Edit
      </button>
    </div>
  );
};
Action.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Action;
