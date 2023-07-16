import React from "react";

import styles from "./CustomerSay.module.scss";
import clsx from "clsx";
import Review from "./Review/Review";
import reviewData from "~/data/reviewData";
import Text from "~/components/Text/Text";

CustomerSay.propTypes = {};

function CustomerSay(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header)}>
        <Text title>What Our Client Says</Text>
      </div>
      <div className={clsx(styles.content)}>
        {reviewData.map((review, idx) => (
          <Review key={idx} {...review} />
        ))}
      </div>
    </div>
  );
}

export default CustomerSay;
