/* eslint-disable */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import About from './components/About';

function App() {
  return (
    <>
    {/* <div className="App">
      <h1>React App</h1>
    </div> */}
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
