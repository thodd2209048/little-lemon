import React from "react";
import PropTypes from "prop-types";

import styles from "./AboutUs.module.scss";
import Text from "~/layout/components/Text/Text";
import clsx from "clsx";
import images from "~/assets/images";

AboutUs.propTypes = {};

function AboutUs(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.textArea)}>
        <Text title>Little Lemon</Text>
        <Text subTitle>Chicago</Text>
        <Text paragraphText className={clsx(styles.content)}>
          Welcome to our restaurant! At Little Lemon, we pride ourselves on
          delivering a remarkable dining experience. Our passion for culinary
          excellence is reflected in our carefully crafted menu, featuring a
          fusion of flavors and the freshest ingredients. From our friendly and
          attentive staff to our inviting ambiance, we strive to create a warm
          and welcoming atmosphere for our guests.
        </Text>
      </div>
      <div className={clsx(styles.imgArea)}>
        <img src={images.employee001} alt="" />
        <img src={images.employee002} alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
