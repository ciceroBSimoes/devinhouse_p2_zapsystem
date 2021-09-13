import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="w3-bar w3-black menu">
      <img src={logo} alt="logo" />
      <nav className="w3-large">
        <span className="w3-bar-item w3-button">
          <Link to="/">Mensagem</Link>
        </span>
        <span className="w3-bar-item w3-button">
          <Link to="/dashboard">Dashboard</Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;
