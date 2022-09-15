/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    progress: { percent: 64, chapter: 17 },
  },
  {
    id: 2,
    title: 'Dune',
    category: 'Sci-Fi',
    author: 'Frank Herbert',
    progress: { percent: 8, chapter: 3 },
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
    author: 'Suzanne Collins',
    progress: { percent: 0, chapter: 1 },
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books books={books} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
