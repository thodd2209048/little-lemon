import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Hero.module.scss";
import images from "~/assets/images";

Hero.propTypes = {};

function Hero(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.title)}>Little Lemon</div>
      <div className={clsx(styles.subTitle)}>Chicago</div>
      <button>Reserve a Table</button>
      <div className={clsx(styles.slogan)}>
        A Taste of Greece in Every Bite!
      </div>
      <img className={clsx(styles.heroPicture)} src={images.hero} alt="" />
    </div>
  );
}

export default Hero;
