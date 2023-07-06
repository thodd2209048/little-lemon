import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Highlight.module.scss";
import CallToActionButton from "~/layout/components/CallToActionButton/CallToActionButton";
import SpecialOrder from "~/layout/pages/HomePage/Highlight/SpecialOrder/SpecialOrder";
import Text from "~/layout/components/Text/Text";
import dishes from "~/data/dishes";

Highlight.propTypes = {};

function Highlight(props) {
  const specialDish = dishes.filter((dish) => dish.special);
  const topDish = specialDish.splice(0, 3);
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header)}>
        <Text title>Special</Text>
        <CallToActionButton>Online Menu</CallToActionButton>
      </div>
      <div className={clsx(styles.content)}>
        {topDish.map((dish, idx) => (
          <div key={idx}>
            <SpecialOrder dish={dish} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlight;
