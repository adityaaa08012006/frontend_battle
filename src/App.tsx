import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/solutions">Solutions</Link>{' '}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
