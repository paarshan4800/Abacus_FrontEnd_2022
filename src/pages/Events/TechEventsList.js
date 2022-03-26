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
      refName: "code-for-crown",
      name: "Code for Crown",
    },
    {
      id: 3,
      refName: "web-design",
      name: "Web Design",
    },
    {
      id: 4,
      refName: "capture-the-flag",
      name: "Capture the Flag",
    },
    {
      id: 5,
      refName: "she-codes",
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
      name: "Get Hired",
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
        {techEventsList.map((event) => (
          <Link
            to={`/events/tech-events/${event.refName}`}
            className={styles.linkTag}
          >
            <div key={event.id} className={cx(styles.maindiv, styles.maindiv1)}>
              <img
                src={require(`./../../images/TechEvents/${event.refName}.png`)}
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

      {/* {techEventsList.map((event) => (
        <div className={cx(styles.container, styles.list)}>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <Link
                to={`/events/tech-events/${event.refName}`}
                className={stylesnew.linkTag}
              >
                <div key={event.id}>
                  <img
                    src={require(`./../../images/TechEvents/${event.refName}.png`)}
                    style={{ width: "200px", height: "200px" }}
                    alt={event.refName}
                  />
                  <div className={styles.neon}>{event.name}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
export default TechEventsList;
