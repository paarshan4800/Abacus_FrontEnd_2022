import { Carousel } from "3d-react-carousal";
import React from "react";
import cx from "classnames";
import Button from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//import TechEventsList from "./TechEventsList";

import tech from "./../../images/tech.jpeg";
import nontech from "./../../images/nontech.jpeg";
import hack from "./../../images/hack.jpeg";
import styles from "./EventsList.module.css";
import { useHistory } from "react-router-dom";

function NonTechEventsList() {
  let nonTechEventsList = [
    {
      id: 1,
      refName: "house-full",
      name: "House Full",
      img: nontech,
    },
    {
      id: 2,
      refName: "graphic-traffic",
      name: "Graphic Traffic",
      img: hack,
    },
    {
      id: 3,
      refName: "imagenation",
      name: "Imagenation",
      img: tech,
    },
    {
      id: 4,
      refName: "tenet",
      name: "Asdfgh",
      img: tech,
    },
    {
      id: 5,
      refName: "tenet",
      name: "qwerty",
      img: nontech,
    },
    {
      id: 6,
      refName: "tenet",
      name: "zxcvb",
      img: hack,
    },
  ];

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
        {nonTechEventsList.map((event) => (
          <Link to={`/events/non-tech-events/${event.refName}`}>
            <div key={event.id} className={cx(styles.maindiv, styles.maindiv1)}>
              <img src={event.img} alt="1" />
              <div className={styles.title}>{event.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NonTechEventsList;
