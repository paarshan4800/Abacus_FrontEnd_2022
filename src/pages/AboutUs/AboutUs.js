import React from "react";

import { INFO, imageBasePath } from "../../data/AboutUs";
import styles from "./AboutUs.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs(props) {
  let containersRef = new Array(INFO.length);
  let imagesRef = new Array(INFO.length);
  return (
    <div className={`${styles.about_root}`}>
      {/* <img
        src={`${process.env.PUBLIC_URL}/assets/images/Logos/kurukshetra_logo.png`}
        alt={"Kurukshetra Logo"}
        className={`${styles.brandLogo}`}
      /> */}
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.stars_1}`}></div>
        <div className={`${styles.stars_2}`}></div>
        <div className={`${styles.stars_3}`}></div>

        <div name="main" className={`${styles.content_wrapper}`}>
          <h1 className={`${styles.heading}`}>About Us</h1>
          {INFO.map((item, index) => {
            return (
              <div
                ref={(el) => (containersRef[index] = el)}
                key={index}
                className={`${styles.content_container}`}
              >
                <div
                  ref={(el) => (imagesRef[index] = el)}
                  className={`${styles.image_box}`}
                >
                  <img
                    src={`${imageBasePath}${item.image}`}
                    alt={`${item.title}`}
                  />
                </div>
                <div className={`${styles.text_box}`}>
                  <h1 className={`${styles.subheading}`}>{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
