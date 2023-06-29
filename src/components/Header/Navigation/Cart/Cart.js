import React from "react";
import clsx from "clsx";

import styles from "./Cart.module.scss";
import images from "~/assets/images";

Cart.propTypes = {};

function Cart(props) {
  return (
    <>
      <img className={clsx(styles.basket)} src={images.shoppingBasket} alt="" />
    </>
  );
}

export default Cart;
