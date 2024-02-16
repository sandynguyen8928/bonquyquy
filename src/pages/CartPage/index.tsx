import {
  useCart,
  Money,
  CartCheckoutButton,
  CartCost,
  CartLineQuantityAdjustButton,
  CartLineProvider,
} from "@shopify/hydrogen-react";
import classNames from "classnames";
import { motion } from "framer-motion";
import "lazysizes";

import styles from "./CartPage.module.scss";
import NavBar from "../../shared-components/layouts/NavBar";

const CartPage = () => {
  const { lines } = useCart();
  console.log(lines);

  if (!lines) {
    return <div>Your shopping bag is empty !</div>;
  }

  return (
    <div className={styles["cart-styled"]}>
      <NavBar />
      <div className={styles["shopping-bag-container"]}>
        <div>SHOPPING BAG</div>
        {lines.map((line) => (
          <div>
            <div className={styles["line"]} />
            <div className={styles["cart-item"]}>
              <div className={styles["cart-item-left"]}>
                <motion.img
                  transition={{ duration: 1 }}
                  src={`${line?.merchandise?.image?.url}&width=10`}
                  className={classNames(styles["cart-image"], "lazyload", "lazyloaded")}
                  alt="bonquyquy"
                  data-sizes="auto"
                  data-srcset={`${line?.merchandise?.image?.url}&width=300 300w,
                ${line?.merchandise?.image?.url}&width=600 600w,
                ${line?.merchandise?.image?.url}&width=800 800w`}
                />
                <div className={styles["cart-description"]}>
                  <div style={{ fontWeight: 600 }}>{line?.merchandise?.product?.title}</div>
                  <div>{line?.merchandise?.title}</div>
                </div>
              </div>
              <div className={styles["cart-item-right"]}>
                {line?.merchandise?.price && (
                  <Money data={line.merchandise.price} style={{ fontWeight: 600 }} />
                )}
                <CartLineProvider line={line!}>
                  <CartLineQuantityAdjustButton adjust="remove" className={styles["remove-item-button"]}>
                    Remove
                  </CartLineQuantityAdjustButton>
                </CartLineProvider>
              </div>
            </div>
          </div>
        ))}
        <div className={styles["line"]} />
        <div className={styles["cart-total"]}>
          <div className={styles["cart-subtotal"]}>
            TOTAL&nbsp;&nbsp;&nbsp; <CartCost amountType="subtotal" /> &nbsp;CAD
          </div>
          <CartCheckoutButton className={styles["checkout-button"]}>CHECKOUT</CartCheckoutButton>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
