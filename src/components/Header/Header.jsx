import React from "react";
import logo from "../../images/logo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} alt="logo" />
        <p>Keep Notes</p>
      </div>
    </div>
  );
};

export default Header;