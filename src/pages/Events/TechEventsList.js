import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styles from "./EventsList.module.css";
// import styles from "./../Events/EventDetails.module.css";
import background from "../../images/bgg.jpg";

function TechEventsList() {
  let techEventsList = [
    {
      id: 1,
      refName: "reverse-engineering",
      name: "Reverse Engineering",
    },
    {
      id: 2,
      refName: "web-design",
      name: "Web Design",
    },
    {
      id: 3,
      refName: "capture-the-flag",
      name: "Capture the flag (Pre event)",
    },
    {
      id: 4,
      refName: "ospc",
      name: "OSPC",
    },
    {
      id: 5,
      refName: "she++",
      name: "She Codes",
    },
    {
      id: 6,
      refName: "booting",
      name: "Booting",
    },
    {
      id: 7,
      refName: "get-hired",
      name: "Get-Hired",
    },
    {
      id: 8,
      refName: "brainstormiz-technicalQuiz",
      name: "Brainstormiz - Technical Quiz",
    },
    {
      id: 9,
      refName: "deadlock-opener",
      name: "Deadlock Opener",
    },
  ];

  // const history = useHistory();

  // const goBack = () => {
  //   history.push('/events');
  // }

  return (
    <div>
      <div className={styles.wrapper}>
        {techEventsList.map((event) => (
          <Link
            to={`/events/tech-events/${event.refName}`}
            className={styles.linkTag}
          >
            <div key={event.id} className={cx(styles.maindiv, styles.maindiv1)}>
              <img
                //src={require(`./../../images/TechEvents/${event.refName}.png`)}
                src={require(`./../../images/TechEvents/web-design.png`)}
                style={{
                  width: "350px",
                  height: "250px",
                  padding: "20px",
                  backgroundColor: "black",
                }}
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
export default TechEventsList;
