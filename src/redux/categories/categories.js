/** @format */
export const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
