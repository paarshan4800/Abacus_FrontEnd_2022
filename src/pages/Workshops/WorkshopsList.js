import { Carousel } from "3d-react-carousal";
import React from "react";
import cx from "classnames";
import Button from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//import TechEventsList from "./TechEventsList";

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
      img: nontech,
    },
    {
      id: 3,
      refName: "job-readiness",
      name: "Job Readiness",
      img: hack,
    },
    {
      id: 4,
      refName: "tenet",
      name: "Asdfgh",
      img: nontech,
    },
    {
      id: 5,
      refName: "tenet",
      name: "qwerty",
      img: hack,
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
        {workshopsList.map((event) => (
          <Link to={`/workshops/${event.refName}`}>
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
export default WorkshopHome;
