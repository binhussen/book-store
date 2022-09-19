/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
