import React from "react";
import PropTypes from "prop-types";

Nav.propTypes = {};

function Nav(props) {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Reservation</li>
      <li>Order Online</li>
      <li>Login</li>
    </ul>
  );
}

export default Nav;
