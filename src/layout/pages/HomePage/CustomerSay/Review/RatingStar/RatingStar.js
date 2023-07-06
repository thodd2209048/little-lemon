import clsx from "clsx";
import images from "~/assets/images";
import styles from "./RatingStar.module.scss";

RatingStar.propTypes = {};

function RatingStar({ rating }) {
  return (
    <div className={clsx(styles.wrapper)}>
      {Array(rating)
        .fill(null)
        .map((_, idx) => (
          <div key={idx} className={clsx(styles.imgStarContainer)}>
            <img className={clsx(styles.imgStar)} src={images.star} alt="" />
          </div>
        ))}
    </div>
  );
}

export default RatingStar;
