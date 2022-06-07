import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import ServiciosPage from './pages/ServiciosPage';




//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='nosotros' element={<NosotrosPage />}/>
      <Route path='contacto' element={<ContactoPage />}/>
      <Route path='servicios' element={<ServiciosPage />}/>
      
      
      
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
