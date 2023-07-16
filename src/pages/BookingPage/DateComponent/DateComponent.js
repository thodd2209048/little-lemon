import React from "react";
import PropTypes from "prop-types";
import Text from "~/components/Text/Text";
import clsx from "clsx";

import styles from "./DateComponent.module.scss";

DateComponent.propTypes = {};

function DateComponent({ date, setDate }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Text cardTitle className={clsx(styles.title)}>
        Date
      </Text>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default DateComponent;
