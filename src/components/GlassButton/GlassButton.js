import styles from "./GlassButton.module.css";

const GlassButton = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.btn}><a href={props.link}>{props.title}</a></div>
    </div>
  );
};

export default GlassButton;
