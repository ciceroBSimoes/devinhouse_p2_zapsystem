import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav>
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="logo" /><span>System</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/">Mensagens</Link>
        </li>
        <li className="nav-link">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
