import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styles from "./EventsList.module.css";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
// import styles from "./../Events/EventDetails.module.css";
import { techEventsList } from "../../api/events";

function TechEventsList() {
  // const history = useHistory();

  // const goBack = () => {
  //   history.push('/events');
  // }

  return (
    <div>
      <div className={styles.mainTitle}>Tech Events</div>
      <div className={styles.wrapper}>
        {techEventsList.map(
          (event) =>
            event.subname != "Pre-event" && (
              <Link
                to={`/events/tech-events/${event.refName}`}
                className={styles.linkTag}
              >
                <FadeInSection>
                  <div
                    key={event.id}
                    className={cx(styles.maindiv, styles.maindiv1)}
                  >
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
                </FadeInSection>
              </Link>
            )
        )}
      </div>
      <FadeInSection>
        <div className={styles.mainTitle}>Pre Events</div>
      </FadeInSection>

      <div className={styles.wrapper}>
        {techEventsList.map(
          (event) =>
            event.subname == "Pre-event" && (
              <Link
                to={`/events/tech-events/${event.refName}`}
                className={styles.linkTag}
              >
                <FadeInSection>
                  <div
                    key={event.id}
                    className={cx(styles.maindiv, styles.maindiv1)}
                  >
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
                </FadeInSection>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
export default TechEventsList;
