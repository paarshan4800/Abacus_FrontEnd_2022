import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.canvas}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default Loading;
