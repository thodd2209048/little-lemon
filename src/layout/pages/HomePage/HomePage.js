import React from "react";

import PropTypes from "prop-types";
import Hero from "./Hero/Hero";
import Highlight from "./Highlight/Highlight";
import Testimonials from "./Testimonials/Testimonials";
import { Container } from "react-bootstrap";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <Container fluid>
        <Hero />
      </Container>
      <Container>
        <Highlight />
        <Testimonials />
      </Container>
      <div>About us</div>
    </>
  );
}

export default HomePage;
