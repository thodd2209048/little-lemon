import React from "react";
import PropTypes from "prop-types";
import Text from "~/components/Text/Text";

import styles from "./TimeComponent.module.scss";
import clsx from "clsx";

TimeComponent.propTypes = {};

function TimeComponent({ listTime, setTime }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Text cardTitle className={clsx(styles.title)}>
        Time
      </Text>
      <select id="res-time " onChange={(e) => setTime(e.target.value)}>
        {listTime.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimeComponent;
