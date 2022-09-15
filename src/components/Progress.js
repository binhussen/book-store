/** @format */

const Progress = () => (
  <div className="flex">
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 border-4 border-blue1 rounded-full border-l-w1" />
      <div>
        <p className="text-4xl">64%</p>
        <p className="opacity-50">Completed</p>
      </div>
    </div>
    <div className="w-0.5 bg-w1 mx-16" />
    <div className="mr-4">
      <p className="opacity-50 uppercase text-sm">Current Chapter</p>
      <p className="text-lg">Chapter 17</p>
      <button
        type="button"
        className="text-white font-light font-serif px-6 py-2 rounded-md bg-primary cursor-pointer mt-8"
      >
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

export default Progress;
