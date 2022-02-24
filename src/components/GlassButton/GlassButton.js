import styles from "./GlassButton.module.css";

const GlassButton = (props) => {
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

export default GlassButton;
