import React from "react";

import Nav from "./Nav";
import images from "../../assets/images";

Header.propTypes = {};

function Header(props) {
  return (
    <>
      <img src={images.yellowFullLogo} alt="Little Lemon" />
      <Nav />
    </>
  );
}

export default Header;
