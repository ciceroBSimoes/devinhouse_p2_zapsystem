import React from "react";
import { Link } from "react-router-dom";
//import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      {/* <img src={logo} alt="logo" /> */}
      <h2>Logo</h2>
      <nav>
        <Link to="/">
          <span>Mensagem</span>
        </Link>
        <Link to="/dashboard">
          <span>Dashboard</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
