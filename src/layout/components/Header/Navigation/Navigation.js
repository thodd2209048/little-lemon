import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import useWindowSize from "~/hooks/useWindowSize";
import styles from "./Navigation.module.scss";
import Cart from "./Cart/Cart";
import images from "~/assets/images";

Navigation.propTypes = {};

function Navigation(props) {
  const size = useWindowSize();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className={clsx(styles.logo)}>
            <img
              className={clsx(styles.logo)}
              src={images.yellowFullLogo}
              alt="Home Page"
            />
          </Navbar.Brand>
          {size.width < 992 && <Cart />}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={clsx(styles.linkList, "me-auto")}>
              <Nav.Link to="/menu">Menu</Nav.Link>
              <Nav.Link to="/reservation">Reservation</Nav.Link>
              <Nav.Link to="/about">About</Nav.Link>
              <Nav.Link to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {size.width >= 992 && <Cart />}
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
