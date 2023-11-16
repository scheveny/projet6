import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/logo_header.png";
import "./Header.scss";

function Header() {
    return (
        <header>
            <img src={headerLogo} alt="Logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;