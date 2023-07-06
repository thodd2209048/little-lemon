import clsx from "clsx";
import { Container, Row } from "react-bootstrap";

import styles from "./Footer.module.scss";
import images from "~/assets/images";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className={clsx(styles.wrapper, "container-fluid")}>
      <Container>
        <Row>
          <div
            className={clsx(styles.imgArea, "d-none", "d-md-block", "col-md-2")}
          >
            <img src={images.logoVerticalYellow} alt="" />
          </div>
          <div className={clsx("d-none", "d-md-block", "col-md-1")}></div>
          <div className={clsx(styles.linkCol, "col-md-3")}>
            <span className={clsx(styles.linkColTitle)}>
              Doormat Navigation
            </span>
            <ul className={clsx(styles.linkList)}>
              <span>
                <Link to={"/"}>Home</Link>
              </span>
              <Link to={"/about"}>About</Link>
              <Link to={"/menu"}>Menu</Link>
              <Link to={"/reservations"}>Reservations</Link>
              <Link to={"/order-online"}>Order Online</Link>
              <Link to={"/login"}>Login</Link>
            </ul>
          </div>
          <div className={clsx(styles.linkCol, "col-md-3")}>
            <span className={clsx(styles.linkColTitle)}>Contact</span>
            <ul className={clsx(styles.linkList)}>
              <Link to={"/contact-address"}>Address</Link>
              <Link to={"/contact-phone"}>Phone number</Link>
              <Link to={"/contact-email"}>Email</Link>
            </ul>
          </div>
          <div className={clsx(styles.linkCol, "col-md-3")}>
            <span className={clsx(styles.linkColTitle)}>
              Social Media Links
            </span>
            <ul className={clsx(styles.linkList)}>
              <Link to={"/social-address"}>Address</Link>
              <Link to={"/social-phone"}>Phone number</Link>
              <Link to={"/social-email"}>Email</Link>
            </ul>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
