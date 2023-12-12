import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/logo_header.png";
import "./Header.scss";

function Header() {
    return (
        <header>
            <img src={headerLogo} alt="Logo Kasa" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/About">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;