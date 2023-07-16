import React from "react";
import PropTypes from "prop-types";
import Text from "~/components/Text/Text";
import clsx from "clsx";

import styles from "./GuestComponent.module.scss";

GuestComponent.propTypes = {};

function GuestComponent({ seatingOptions, setNumberOfGuests, numberOfGuests }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Text cardTitle className={clsx(styles.title)}>
        Number of guests
      </Text>

      <div className={clsx(styles.guestCountContainer)}>
        {seatingOptions.map((number) => (
          <div
            key={number}
            onClick={() => setNumberOfGuests(number)}
            className={clsx(
              styles.guestCount,
              number === numberOfGuests && styles.active
            )}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestComponent;
