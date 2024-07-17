import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NewVideo from './components/NewVideo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-video" element={<NewVideo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
