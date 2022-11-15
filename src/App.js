import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Placetostay from './pages/placetostay/Placetostay';
import Sidebar from './components/header/Sidebar.jsx'
import React, { useState } from "react";
import Modal from './components/modal/Modal';

function App() {
  const [isModal, setModal] = useState(true);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    const modal = () => {
     setModal(!isModal);
    };
    
  return (
    <div className="App">
      <BrowserRouter>
        <Header isOpen={isOpen} toggle={toggle} modal={modal} />
        <Sidebar isOpen={isOpen} toggle={toggle} modal={modal} />
        <Modal isModal={isModal} modal={modal} />
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
