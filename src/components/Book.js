/** @format */

import Action from './Action';
import Progress from './Progress';

const Book = () => (
  <div className="p-8 bg-white rounded border border-w1 flex justify-between">
    <div>
      <p className="font-bold opacity-50">Action</p>
      <h2 className="font-bold text-xl">The Hunger Games</h2>
      <p className="text-sm font-light text-secondary">Suzanne Collins</p>
      <Action />
    </div>
    <Progress />
  </div>
);

export default Book;
