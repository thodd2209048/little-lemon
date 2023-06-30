import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero/Hero";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <Hero />
      <div>
        <h1>Special</h1>
      </div>
      <div>Testimonials</div>
      <div>About us</div>
    </>
  );
}

export default HomePage;
