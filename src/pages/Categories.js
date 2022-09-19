/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="p-[5%] bg-w2">
      <button
        type="button"
        className=" text-white font-bold font-serif px-6 py-2 rounded-md bg-primary cursor-pointer w-[20%]"
        onClick={handleStatus}
      >
        Check status
      </button>
      <div>{categories}</div>
    </div>
  );
};

export default Categories;
