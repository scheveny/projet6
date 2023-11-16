import React from "react";
import footerLogo from "../../assets/logo_footer.png";
import "./Footer.scss";

function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;