import React from "react";
import { ReactComponent as HomeLogo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <HomeLogo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;

// .header {

//     .logo-container {

//     .options {

//       .option {

//       }
//     }
//   }
