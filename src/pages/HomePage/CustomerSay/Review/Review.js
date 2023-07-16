import PropTypes from "prop-types";

import clsx from "clsx";
import RatingStar from "./RatingStar/RatingStar";
import styles from "./Review.module.scss";
import Text from "~/components/Text/Text";

Review.propTypes = {
  className: PropTypes.node,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

function Review({ className, name, address, img, rating, comment }) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Text cardTitle className={clsx(styles.name)}>
        {name}
      </Text>
      <Text paragraphText className={clsx(styles.address)}>
        {address}
      </Text>
      <div className={clsx(styles.img)}>
        <img src={img} alt={name} />
      </div>
      <RatingStar rating={rating} />
      <div className={clsx(styles.comment)}>
        <Text paragraphText>{comment}</Text>
      </div>
    </div>
  );
}

export default Review;
