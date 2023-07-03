import React from "react";
import PropTypes from "prop-types";

import styles from "./Review.module.scss";
import images from "~/assets/images";

Review.propTypes = {};

function Review(props) {
  return (
    <div>
      <div className="name">Emma Johnson</div>
      <div className="address">Sydney, Australia</div>
      <div className="img">
        <img src={images.cus001} alt="" />
      </div>
      <div className="rating">5</div>
      <div className="comment">
        I had a fantastic dining experience at this restaurant! The ambiance was
        trendy and inviting, the staff was friendly and attentive, and the food
        was absolutely delicious. I highly recommend this place for a memorable
        and enjoyable dining outing.
      </div>
    </div>
  );
}

export default Review;
