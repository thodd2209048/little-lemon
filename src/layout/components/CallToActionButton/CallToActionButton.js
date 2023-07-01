import React from "react";
import PropTypes from "prop-types";

import styles from "./CallToActionButton.module.scss";
import clsx from "clsx";

CallToActionButton.propTypes = { className: PropTypes.node };

function CallToActionButton({ children, className }) {
  const classes = clsx(styles.wrapper, className);
  return (
    <button className={classes}>
      <span className={clsx(styles.title)}>{children}</span>
    </button>
  );
}

export default CallToActionButton;
