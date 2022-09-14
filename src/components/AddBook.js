/** @format */

const AddBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input placeholder="Book title" required />
      <select>
        <option value="Action">Action</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
