import { Carousel } from "3d-react-carousal";
import React from "react";
import cx from "classnames";
import Button from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//import TechEventsList from "./TechEventsList";
import background from "./../../images/bg1.jpg";
import tech from "./../../images/tech.jpeg";
import nontech from "./../../images/nontech.jpeg";
import hack from "./../../images/hack.jpeg";
import styles from "./WorkshopsList.module.css";
import { useHistory } from "react-router-dom";

function WorkshopHome() {
  let workshopsList = [
    {
      id: 1,
      refName: "cloud-computing",
      name: "Cloud Computing",
      img: tech,
    },
    {
      id: 2,
      refName: "entrepreneurship",
      name: "Entrepreneurship",
      img: tech,
    },
    {
      id: 3,
      refName: "job-readiness",
      name: "Job Readiness",
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
      img: tech,
    },
    {
      id: 6,
      refName: "tenet",
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
        {workshopsList.map((event) =>
          event.id % 3 == 2 ? (
            <Link to={`/workshops/${event.refName}`}>
              <div
                key={event.id}
                className={cx(styles.maindiv, styles.maindiv2)}
              >
                <img src={event.img} alt="1" />
                <div className={styles.title}>{event.name}</div>
              </div>
            </Link>
          ) : event.id % 3 == 1 ? (
            <Link to={`/workshops/${event.refName}`}>
              <div
                key={event.id}
                className={cx(styles.maindiv, styles.maindiv1)}
              >
                <img src={event.img} alt="1" />
                <div className={styles.title}>{event.name}</div>
              </div>
            </Link>
          ) : (
            <Link to={`/workshops/${event.refName}`}>
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
export default WorkshopHome;
