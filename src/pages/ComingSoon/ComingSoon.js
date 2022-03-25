import React from "react";
import styles from "./ComingSoon.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useHistory } from "react-router-dom";
import img404 from "../../images/bgg.jpg";

function ComingSoon() {
  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <>
      <div className={`${styles._404_wrapper} ${styles.bg}`}>
        <div className={`${styles._404}`}>
          {/* Image */}
          <div className={`${styles._404_img}`}>
            <img src={img404} alt="" width="250px" height="250px" />
          </div>
          {/* Text */}
          <div className={`${styles._404_text_wrapper}`}>
            <div className={`${styles._404_text}`}>
              <span className={`${styles.normalFlicker}`}>C</span>
              <span className={`${styles.slowFlicker}`}>O</span>
              <span className={`${styles.normalFlicker}`}>MING</span>             
              <span className={`${styles.normalFlicker}`}> SO</span>
              <span className={`${styles.slowFlicker2}`}>O</span>
              <span className={`${styles.normalFlicker}`}>N</span>
            </div>
            <div className={`${styles._404_text_addi}`}>
              <p>The registrations will be open soon.</p>
              <div onClick={redirect}>
                <GlassButton title="Homepage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
