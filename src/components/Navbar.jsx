import React from "react";
import logo from "../assets/logo.png";

import {
  FaUtensils,
  FaSearch,
  FaUser,
  FaAngleDown,
  FaShoppingCart,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__company">
          <img src={logo} alt="logo" />
          <div className="nav__company-text">
            <h2>Karma</h2>
            <p>EVİNİZİN YANINDA</p>
          </div>
        </div>
        <div className="nav__form">
          <form>
            <input type="text" placeholder="Ne Aramıştınız..." name="search" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="nav__user">
          <div className="nav__user-login">
            <FaUser />
            <div>
              <h5>Giriş Yap</h5>
              <p>veya üye ol</p>
            </div>

            <FaAngleDown />
          </div>
          <div className="nav__user-cart">
            <FaShoppingCart />
            <div>
              <h5>Sepet</h5>
              <h5>0,00TL</h5>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
