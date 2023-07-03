import React from "react";
import PropTypes from "prop-types";

import styles from "./SpecialOrder.module.scss";
import Text from "../Text/Text";
import CallToActionButton from "../CallToActionButton/CallToActionButton";
import images from "~/assets/images";
import clsx from "clsx";

SpecialOrder.propTypes = {};

function SpecialOrder(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.info)}>
        <div className={clsx(styles.header)}>
          <Text cardTitle>Greek salad</Text>
          <Text cardTitle className={clsx(styles.price)}>
            $ 12.99
          </Text>
        </div>
        <Text paragraphText className={clsx(styles.description)}>
          Indulge in the flavors of Greece with our Greek Salad, a vibrant
          medley of fresh vegetables, feta cheese, and tangy olives.
        </Text>
        <CallToActionButton className={clsx(styles.button)}>
          Order a delivery
        </CallToActionButton>
      </div>
      <div className={clsx(styles.img)}>
        <img src={images.greekSalad} alt="Greek salad" />
      </div>
    </div>
  );
}

export default SpecialOrder;
