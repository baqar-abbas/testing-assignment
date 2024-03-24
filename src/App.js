import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './components/Books';
import Categories from './components/Categories';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
