import { Carousel } from "3d-react-carousal";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import background from "./../../images/bg2.jpeg";
import tech from "./../images/tech.jpeg";
import nontech from "./../images/nontech.jpeg";
import hack from "./../images/hack.jpeg";
import styles from "./WorkshopHome.module.css";

function WorkshopHome() {
  let slides = [
    <div>
      <Link to="/workshops/1">
        <img src={tech} alt="1" />
        <h1 className={styles.neon}>Cyber Security</h1>
      </Link>
    </div>,
    <div>
      <Link to="/workshops/2">
        <img src={nontech} alt="2" />
        <h1 className={styles.neon}>Cloud Computing</h1>
      </Link>
    </div>,
    <div>
      <Link to="/workshops/3">
        <img src={hack} alt="3" />
        <h1 className={styles.neon}>AWS</h1>
      </Link>
    </div>,
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div className={styles.displaylist}>
        <Carousel
          style={{ paddingTop: "400px" }}
          slides={slides}
          interval={2000}
        />
      </div>
    </div>
  );
}
export default WorkshopHome;
