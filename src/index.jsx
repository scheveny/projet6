import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Importées
import Home from "./pages/Home/Home";
import NotFound from './pages/NotFound/NotFound';


// Composant importés

// Import du style
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  </React.StrictMode>
)