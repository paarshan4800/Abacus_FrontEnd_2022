import { Carousel } from "3d-react-carousal";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import TechEventsList from "./TechEventsList";

import tech from "./../../images/tech.png";
import nontech from "./../../images/nontech.png";
import hack from "./../../images/hack.png";
import styles from "./EventsHome.module.css";
import eventpassimg from "../../images/eventpassimg.png";

function EventsHome() {
  let slides = [
    <div className={styles.linkBackground}>
      <Link to="/events/tech-events" className={styles.linkTag}>
        <img src={tech} alt="1" />
        <h1 className={styles.neon}>Tech Events</h1>
      </Link>
    </div>,
    <div className={styles.linkBackground}>
      <Link to="/events/non-tech-events" className={styles.linkTag}>
        <img src={nontech} alt="2" />
        <h1 className={styles.neon}>Non-Tech Events</h1>
      </Link>
    </div>,
    <div className={styles.linkBackground}>
      <Link to="/events/coding-hungama" className={styles.linkTag}>
        <img src={hack} alt="3" />
        <h1 className={styles.neon}>All Night Event</h1>
      </Link>
    </div>,
  ];
  return (
    <div
      style={{
        // backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
        height: "100vh",
        // color: "#f5f5f5",
      }}
    >
      {/* <Link to={`/dashboard`}>
        <div className={styles.pass}>
          <img src={eventpassimg} />
        </div>
      </Link> */}
      <div className={styles.displaylist}>
        <Carousel
          style={{ paddingTop: "400px" }}
          slides={slides}
          interval={2000}
          arrows={true}
        />
      </div>
    </div>
  );
}
export default EventsHome;
