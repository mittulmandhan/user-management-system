import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <span>logo</span>
        <div>
          <input type="button" value="Login" />
          <input type="button" value="Signup" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
