import React from "react";
import PropTypes from "prop-types";

import styles from "./SpecialOrder.module.scss";
import Text from "../../../../components/Text/Text";
import CallToActionButton from "../../../../components/CallToActionButton/CallToActionButton";
import images from "~/assets/images";
import clsx from "clsx";

SpecialOrder.propTypes = {};

function SpecialOrder({ dish }) {
  const priceText = dish.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.info)}>
        <div className={clsx(styles.header)}>
          <Text cardTitle>{dish.name}</Text>
          <Text cardTitle className={clsx(styles.price)}>
            {priceText}
          </Text>
        </div>
        <Text paragraphText className={clsx(styles.description)}>
          {dish.description}
        </Text>
        <CallToActionButton className={clsx(styles.button)}>
          Order a delivery
        </CallToActionButton>
      </div>
      <div className={clsx(styles.img)}>
        <img src={dish.img} alt={dish.name} />
      </div>
    </div>
  );
}

export default SpecialOrder;
