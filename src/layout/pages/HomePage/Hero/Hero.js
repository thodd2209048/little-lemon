import clsx from "clsx";

import images from "~/assets/images";
import CallToActionButton from "~/layout/components/CallToActionButton/CallToActionButton";
import styles from "./Hero.module.scss";

Hero.propTypes = {};

function Hero(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.textContainer)}>
        <div className={clsx(styles.title)}>Little Lemon</div>
        <div className={clsx(styles.subTitle)}>Chicago</div>
        <CallToActionButton>Reserve a Table</CallToActionButton>
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
