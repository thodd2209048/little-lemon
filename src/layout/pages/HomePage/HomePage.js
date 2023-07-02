import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero/Hero";
import Highlight from "./Highlight/Highlight";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <Hero />
      <Highlight />
      <div>Testimonials</div>
      <div>About us</div>
    </>
  );
}

export default HomePage;
