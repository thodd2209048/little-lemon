import clsx from "clsx";

import images from "~/assets/images";
import styles from "./Hero.module.scss";
import Text from "~/components/Text/Text";
import CallToActionButton from "~/components/Button/Button";

Hero.propTypes = {};

function Hero(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.textContainer)}>
        <Text title className={clsx(styles.title)}>
          Little Lemon
        </Text>
        <Text subTitle className={clsx(styles.subTitle)}>
          Chicago
        </Text>
        <CallToActionButton className={clsx(styles.button)}>
          Reserve a Table
        </CallToActionButton>
        <div className={clsx(styles.slogan)}>
          A Taste of Greece in Every Bite!
        </div>
      </div>
      <div className={clsx(styles.imgCrop)}>
        <img className={clsx(styles.heroImg)} src={images.hero} alt="" />
        <div className={clsx(styles.overlay)}></div>
      </div>
    </div>
  );
}

export default Hero;
