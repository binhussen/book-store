/** @format */

const Header = () => (
  <header className="flex items-center gap-10 bg-white p-6 border-b border-w1">
    <h1 className="text-3xl font-bold font-sans text-primary">BookStore CMS</h1>
    <ul className="flex gap-10 grow">
      <li>BOOKS</li>
      <li>CATAGORIES</li>
    </ul>
    <button
      type="button"
      className="cursor-pointer w-12 h-12 border-r rounded-full border border-w1 bg-white"
    >
      User
    </button>
  </header>
);

export default Header;
