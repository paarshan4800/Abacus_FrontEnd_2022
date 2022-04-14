import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { Hackathon as HackathonData } from "../../data/HackathonData";
import nontech from "./../../images/nontech.png";

function HackathonRegister() {
  const data = HackathonData;

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <div className={styles.container}>
        <div
          className={styles.box}
          style={{
            width: "95vw",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <span></span>

          <div className={styles.content}>
            <h2 className={styles.neon}>MEMBER 1</h2>
            <img src={nontech} style={{ width: "200px", height: "100px" }} />
          </div>

          <div className={styles.content}>
            <h2 className={styles.neon}>YOU</h2>
            <img src={nontech} style={{ width: "200px", height: "100px" }} />
            <GlassButton title="Register Team" />
          </div>

          <div className={styles.content}>
            <h2 className={styles.neon}>MEMBER 2</h2>
            <img src={nontech} style={{ width: "200px", height: "100px" }} />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box} style={{ width: "400px" }}>
          <span></span>
          <div className={styles.content}>
            <img src={nontech} style={{ width: "200px", height: "200px" }} />
          </div>
        </div>

        <div className={styles.box} style={{ width: "800px" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>SPONSORS</h2>
            <p>{data.about}</p>

            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HackathonRegister;
