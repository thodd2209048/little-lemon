import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Text.module.scss";

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.node,
  title: PropTypes.bool,
  subTitle: PropTypes.bool,
  leadText: PropTypes.bool,
  sectionTitle: PropTypes.bool,
  cardTitle: PropTypes.bool,
  paragraphText: PropTypes.bool,
  highlightText: PropTypes.bool,
  special: PropTypes.bool,
};

function Text({
  children,
  className,
  title = false,
  subTitle = false,
  leadText = false,
  sectionTitle = false,
  cardTitle = false,
  paragraphText = false,
  highlightText = false,
  special = false,
}) {
  const classes = clsx(className, {
    [styles.title]: title,
    [styles.subTitle]: subTitle,
    [styles.leadText]: leadText,
    [styles.sectionTitle]: sectionTitle,
    [styles.cardTitle]: cardTitle,
    [styles.paragraphText]: paragraphText,
    [styles.highlightText]: highlightText,
    [styles.special]: special,
  });
  return <span className={clsx(styles.inner, classes)}>{children}</span>;
}

export default Text;
