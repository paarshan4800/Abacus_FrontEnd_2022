import { Carousel } from "3d-react-carousal";
import React from "react";
import cx from "classnames";
import Button from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//import TechEventsList from "./TechEventsList";
import background from "./../images/bg1.jpg";
import tech from "./../images/tech.jpeg";
import nontech from "./../images/nontech.jpeg";
import hack from "./../images/hack.jpeg";
import styles from "./TechEventsList.module.css";
import { useHistory } from "react-router-dom";

function TechEventsList() {
  let techEvents = [
    {
      id: 1,
      name: "Tenet",
      img: tech,
    },
    {
      id: 2,
      name: "Code for crown",
      img: tech,
    },
    {
      id: 3,
      name: "Tenet",
      img: tech,
    },
    {
      id: 4,
      name: "Asdfgh",
      img: tech,
    },
    {
      id: 5,
      name: "qwerty",
      img: tech,
    },
    {
      id: 6,
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
    // style={{
    //   backgroundImage: `url(${background})`,
    //   backgroundSize: "cover",
    //   height: "100vh",
    //   color: "#f5f5f5",
    // }}
    >
      <div className={styles.wrapper}>
        {techEvents.map((event) =>
          event.id % 3 == 2 ? (
            <Link to={`/events/tech-events/${event.id}`}>
              <div
                key={event.id}
                className={cx(styles.maindiv, styles.maindiv2)}
              >
                <img src={event.img} alt="1" />
                <div className={styles.title}>{event.name}</div>
              </div>
            </Link>
          ) : event.id % 3 == 1 ? (
            <Link to={`/events/tech-events/${event.id}`}>
              <div
                key={event.id}
                className={cx(styles.maindiv, styles.maindiv1)}
              >
                <img src={event.img} alt="1" />
                <div className={styles.title}>{event.name}</div>
              </div>
            </Link>
          ) : (
            <Link to={`/events/tech-events/${event.id}`}>
              <div
                key={event.id}
                className={cx(styles.maindiv, styles.maindiv3)}
              >
                <img src={event.img} alt="1" />
                <div className={styles.title}>{event.name}</div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
export default TechEventsList;
