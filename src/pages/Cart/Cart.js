import React from "react";
import styles from "./Cart.module.css";
import { useState } from "react";
import GlassButton from "../../components/GlassButton/GlassButton";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className={styles.body}>
      <div className={styles.profileBar}>
        Heyy User4101!
      </div>
      <div className={styles.content}>
        {!isLoading && (
          <>
            <div className={styles.loading}>
              <div className={styles.loader}></div>
            </div>
          </>
        )}
        {isLoading && (
          <>
            <div className={styles.title}>
              <h1>Cart</h1>
            </div>
            <div className={styles.displayArea}>
              <CartItem
                title={"Eventasdnk Name"}
                body={"Description of the event goes here ig..."}
              />
              <CartItem
                title={"Event Name"}
                body={"Description of the event goes here ig..."}
              />
              <CartItem
                title={"Event Name"}
                body={"Description of the event goes here ig..."}
              />
              <CartItem
                title={"Event Name"}
                body={"Description of the event goes here ig..."}
              />
            </div>
            <div className={styles.payButton}>
                <GlassButton title={"P a y"}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
