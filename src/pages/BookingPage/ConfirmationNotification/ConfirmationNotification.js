import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./ConfirmationNotification.module.scss";
import images from "~/assets/images";
import Text from "~/components/Text/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

ConfirmationNotification.propTypes = {};

function ConfirmationNotification({ setDisplayConfirmation, className }) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <FontAwesomeIcon
        icon={faXmark}
        className={clsx(styles.closeBtn)}
        onClick={() => setDisplayConfirmation(false)}
      />

      <div className={clsx(styles.image)}>
        <img src={images.fireworks} alt="" />
      </div>
      <div>
        <Text className={clsx(styles.text)}>Your order is complete!</Text>
      </div>
    </div>
  );
}

export default ConfirmationNotification;
