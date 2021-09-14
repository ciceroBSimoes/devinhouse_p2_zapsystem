import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="w3-bar w3-black menu">
      <img src={logo} alt="logo" />
      <nav className="w3-large">
        <Link to="/">
          <span className="w3-bar-item w3-button">Mensagem</span>
        </Link>
        <Link to="/dashboard">
          <span className="w3-bar-item w3-button">Dashboard</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
