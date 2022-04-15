import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styles from "./EventsList.module.css";
import stylesnew from "./EventsHome.module.css";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import { nonTechEventsList } from "../../api/events";
function NonTechEventsList() {
  // let nonTechEventsList = nonTechEventsList;

  return (
    <div
    // style={{
    //   backgroundImage: `url(${background})`,
    //   backgroundSize: "cover",
    //   height: "100vh",
    //   color: "#f5f5f5",
    // }}
    >
      <div className={styles.mainTitle}>Non-Tech Events</div>
      <div className={styles.wrapper}>
        {nonTechEventsList.map((event) => (
          <Link
            to={`/events/non-tech-events/${event.refName}`}
            className={styles.linkTag}
          >
            <FadeInSection>
              <div
                key={event.id}
                className={cx(styles.maindiv, styles.maindiv1)}
              >
                <img
                  src={require(`./../../images/NonTechEvents/${event.refName}.png`)}
                  style={{
                    width: "350px",
                    height: "250px",
                    padding: "20px",
                    backgroundColor: "black",
                  }}
                  alt={event.refName}
                  className={stylesnew.linkBackground}
                />
                <div className={styles.title}>{event.name}</div>
              </div>
            </FadeInSection>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NonTechEventsList;
