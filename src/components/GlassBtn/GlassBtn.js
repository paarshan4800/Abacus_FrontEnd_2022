import styles from "./GlassBtn.module.css";

const GlassBtn = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.btn}>
        <a
          href={props.link}
          onClick={() => {
            props.onClick &&
              (props.parameters
                ? props.onClick(props.parameters)
                : props.onClick());
          }}
        >
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default GlassBtn;
