import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span></span>
        <div className={styles.content}>
          <h2 className={styles.neon}>{props.title}</h2>
          <p>{props.body}</p>
          {/* <a href="#">Read More</a> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
