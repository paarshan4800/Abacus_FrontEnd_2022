import styles from "./Loading.module.css";
import { CircleLoader } from "react-awesome-loaders";
const Loading = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.canvas}>
        <CircleLoader
          meshColor={"#008697"}
          lightColor={"#0FE69E"}
          duration={1.5}
          desktopSize={"90px"}
          mobileSize={"64px"}
        />
        {/* <div className={styles.loader}></div> */}
      </div>
    </div>
  );
};

export default Loading;
