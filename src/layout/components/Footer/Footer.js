import clsx from "clsx";
import { Col, Container, NavLink, Row } from "react-bootstrap";

import styles from "./Footer.module.scss";
import images from "~/assets/images";
import Text from "../Text/Text";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Container fluid className={clsx(styles.wrapper)}>
      <Container>
        <footer className={clsx(styles.container)}>
          <div className={clsx(styles.imgArea)}>
            <img src={images.logoVerticalYellow} alt="" />
          </div>
          <div className={clsx(styles.linkArea)}>
            <div className={clsx(styles.linkCol)}>
              <span cardTitle className={clsx(styles.linkColTitle)}>
                Doormat Navigation
              </span>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/menu"}>Menu</NavLink>
              <NavLink to={"/reservations"}>Reservations</NavLink>
              <NavLink to={"/order-online"}>Order Online</NavLink>
              <NavLink to={"/login"}>Login</NavLink>
            </div>
            <div className={clsx(styles.linkCol)}>
              <span className={clsx(styles.linkColTitle)}>Contact</span>
              <NavLink to={"/contact-address"}>Address</NavLink>
              <NavLink to={"/contact-phone"}>Phone number</NavLink>
              <NavLink to={"/contact-email"}>Email</NavLink>
            </div>
            <div className={clsx(styles.linkCol)}>
              <span className={clsx(styles.linkColTitle)}>
                Social Media Links
              </span>
              <NavLink to={"/social-address"}>Address</NavLink>
              <NavLink to={"/social-phone"}>Phone number</NavLink>
              <NavLink to={"/social-email"}>Email</NavLink>
            </div>
          </div>
        </footer>
      </Container>
    </Container>
  );
}

export default Footer;
