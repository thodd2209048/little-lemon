import React from "react";
import PropTypes from "prop-types";

import styles from "./Testimonials.module.scss";
import clsx from "clsx";
import Review from "./Review/Review";

Testimonials.propTypes = {};

function Testimonials(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Review />
    </div>
  );
}

export default Testimonials;
