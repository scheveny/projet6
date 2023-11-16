import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Importées
import Home from "./pages/Home/Home";
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Details from './pages/Details/Details';
// Composant importés
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// Import du style
import "./index.scss";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Details" element={<Details />} />
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
)