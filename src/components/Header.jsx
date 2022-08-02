import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="container__social">
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="container__button">
          <button className="btn btn-yardım">Yardım</button>
          <button className="btn btn-blog">Blog</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
