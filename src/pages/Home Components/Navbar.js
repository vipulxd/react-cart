import React from "react";
import {Link} from "react-router-dom";
import "../../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-logo">React Cart</h2>
      <ul className="navbar-links">
        <Link to="/" className="home">
          <li className="link-li">
            <i class="fas fa-home"></i> Home
          </li>
        </Link>
        <Link to="/cart" className="cart">
          <li className="link-li">
            <i class="fas fa-shopping-cart"></i> Cart
          </li>
        </Link>
        <Link to="/authentication" className="account">
          <li className="link-li">
            <i class="fas fa-user-alt"></i> Manage Account
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
