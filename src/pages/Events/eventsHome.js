import { Carousel } from "3d-react-carousal";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import TechEventsList from "./TechEventsList";
import background from "./../images/bg1.jpg";
import tech from "./../images/tech.jpeg";
import nontech from "./../images/nontech.jpeg";
import hack from "./../images/hack.jpeg";
import styles from "./EventsHome.module.css";

function EventsHome() {
  let slides = [
    <div>
      <Link to="/events/tech-events">
        <img src={tech} alt="1" />
        <h1 className={styles.neon}>Tech Events</h1>
      </Link>
    </div>,
    <div>
      <Link to="/events/non-tech-events">
        <img src={nontech} alt="2" />
        <h1 className={styles.neon}>Non-Tech Events</h1>
      </Link>
    </div>,
    <div>
      <Link to="/events/hackathon">
        <img src={hack} alt="3" />
        <h1 className={styles.neon}>Hackathon</h1>
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
export default EventsHome;
