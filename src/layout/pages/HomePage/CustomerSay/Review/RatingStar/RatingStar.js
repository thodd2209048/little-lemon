import React from "react";
import PropTypes from "prop-types";

import styles from "./RatingStar.module.scss";
import images from "~/assets/images";
import clsx from "clsx";

RatingStar.propTypes = {};

function RatingStar({ rating }) {
  return (
    <div>
      {Array(rating)
        .fill(null)
        .map((_, idx) => (
          <span key={idx}>
            <img className={clsx(styles.imgStar)} src={images.star} alt="" />
          </span>
        ))}
    </div>
  );
}

export default RatingStar;
