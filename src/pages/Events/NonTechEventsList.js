import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styles from "./EventsList.module.css";

function NonTechEventsList() {
  let nonTechEventsList = [
    {
      id: 8,
      refName: "ship-wreck",
      name: "Ship-Wreck",
    },
    {
      id: 9,
      refName: "design-a-thon",
      name: "Design-a-thon",
    },
    {
      id: 10,
      refName: "fandom-quiz",
      name: "Fandom Quiz",
    },
    {
      id: 11,
      refName: "thadam",
      name: "Thadam",
    },
    {
      id: 12,
      refName: "gamindrome",
      name: "Gamindrome",
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
              <img
                src={require(`./../../images/NonTechEvents/${event.refName}.png`)}
                style={{ width: "350px", height: "300px" }}
                alt={event.refName}
              />
              <div className={styles.title}>{event.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NonTechEventsList;
