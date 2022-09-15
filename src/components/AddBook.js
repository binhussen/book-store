/** @format */

const AddBook = () => (
  <div>
    <h2 className="text-lg font-bold opacity-60">ADD NEW BOOK</h2>
    <form className="flex gap-8 mt-5">
      <input
        className="w-[50%] p-3 border border-w1 bg-white text-base"
        placeholder="Book title"
        required
      />
      <input
        className="w-[30%] p-3 border border-w1 bg-white text-base"
        placeholder="Author"
        required
      />
      <button
        type="submit"
        className="text-white font-bold font-serif px-6 py-2 rounded-md bg-primary cursor-pointer w-[20%]"
      >
        ADD BOOK
      </button>
    </form>
  </div>
);

export default AddBook;
