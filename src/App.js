import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Placetostay from './pages/placetostay/Placetostay';
import Sidebar from './components/header/Sidebar.jsx'
import React, { useState } from "react";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="App">
      <BrowserRouter>
        <Header isOpen={isOpen} toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PlaceToStay" element={<Placetostay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
