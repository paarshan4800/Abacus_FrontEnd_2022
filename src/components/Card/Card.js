import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div class={styles.box}>
        <span></span>
        <div class={styles.content}>
          <h2 class={styles.neon}>{props.title}</h2>
          <p>
            {props.body}
          </p>
          {/* <a href="#">Read More</a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
