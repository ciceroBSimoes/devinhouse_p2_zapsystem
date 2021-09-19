import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <span>System</span>
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
