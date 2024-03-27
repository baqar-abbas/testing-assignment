import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './components/Books';
import Categories from './components/Categories';
import About from './components/About';
import Crud from './components/Crud';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Crud" element={<Crud />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
