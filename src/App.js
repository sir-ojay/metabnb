import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Placetostay from './pages/placetostay/Placetostay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
