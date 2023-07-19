import clsx from "clsx";
import Text from "~/components/Text/Text";

import styles from "./GuestComponent.module.scss";

GuestComponent.propTypes = {};

function GuestComponent({ setNumberOfGuests, numberOfGuests }) {
  const seatingOptions = [1, 2, 3, 4, 8, 12, 20];
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
