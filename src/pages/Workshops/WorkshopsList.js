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
      id: 13,
      refName: "blockchain-and-cryptocurrency",
      name: "Blockchain and Cryptocurrency",
    },
    {
      id: 14,
      refName: "dev-ops",
      name: "DevOps",
    },
    {
      id: 15,
      refName: "stock-market-and-share-market",
      name: "Stock Market and Share Market",
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
            <img
                src={require(`./../../images/Workshops/${event.refName}.png`)}
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
export default WorkshopHome;
