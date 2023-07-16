import React from "react";

import PropTypes from "prop-types";
import Hero from "./Hero/Hero";
import Highlight from "./Highlight/Highlight";
import Testimonials from "./CustomerSay/CustomerSay";
import { Container } from "react-bootstrap";
import AboutUs from "./AboutUs/AboutUs";

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
      <Container>
        <AboutUs />
      </Container>
    </>
  );
}

export default HomePage;
