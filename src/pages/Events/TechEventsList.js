import { Carousel } from "3d-react-carousal";
import React from "react";
import Button from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import TechEventsList from "./TechEventsList";
import background from "./../images/bg1.jpg";
import tech from "./../images/tech.jpeg";
import nontech from "./../images/nontech.jpeg";
import hack from "./../images/hack.jpeg";
import styles from "./eventsHome.module.css";
import { useHistory } from "react-router-dom";

function EventsHome() {
  let techEvents = [
    {
      id: 1,
      name: "Asdfgh",
      img: tech,
    },
    {
      id: 2,
      name: "qwerty",
      img: tech,
    },
    {
      id: 3,
      name: "zxcvb",
      img: tech,
    },
  ];

  // const history = useHistory();

  // const goBack = () => {
  //   history.push('/events');
  // }

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
        {techEvents.map((event) => (
          <Link to={`/events/tech-events/${event.id}`}>
            <div key={event.id}>
              <img src={event.img} alt="1" />
              <h1 className={styles.neon}>{event.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default EventsHome;
