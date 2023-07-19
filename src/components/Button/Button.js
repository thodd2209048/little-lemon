import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

Button.propTypes = { className: PropTypes.node };

function Button({ to, href, children, className, onClick, ...pass }) {
  const classes = clsx(styles.wrapper, className);
  let Comp = "button";
  let props = { to, href, onClick, ...pass };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props}>
      <span className={clsx(styles.title)}>{children}</span>
    </Comp>
  );
}

export default Button;
