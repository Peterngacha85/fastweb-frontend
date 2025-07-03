import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Fastweb Frontend</h1>
          <Navigation />
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Greeting />} />
            <Route path="/profile" element={<div className="content-section"><h2>Profile Page</h2><p>Coming soon...</p></div>} />
            <Route path="/contact" element={<div className="content-section"><h2>Contact Us</h2><p>Coming soon...</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
