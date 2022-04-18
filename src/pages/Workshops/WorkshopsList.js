import { Carousel } from "3d-react-carousal";
import React from "react";
import cx from "classnames";
import Button from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//import TechEventsList from "./TechEventsList";

import tech from "./../../images/tech.png";
import nontech from "./../../images/nontech.png";
import hack from "./../../images/hack.png";
import styles from "./WorkshopsList.module.css";
import { useHistory } from "react-router-dom";

function WorkshopHome() {
  let workshopsList = [
      // {
      //   id: 13,
      //   refName: "blockchain-and-cryptocurrency",
      //   name: "Blockchain and Cryptocurrency"
      // },
      // {
      //   id: 14,
      //   refName: "dev-ops",
      //   name: "DevOps"
      // },
      // {
      //   id: 15,
      //   refName: "stock-market-and-share-market",
      //   name: "Stock Market and Share Market"
      // },
      {
        id: 16,
        refName: "stock-o-nomics",
        name: "Stock-O-Nomics"
      },
      {
        id: 17,
        refName: "cloud-computing-beyond-coding",
        name: "Cloud Computing",
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
    //   color: "#f5f5f5",s
    // }}
    >
      <div className={styles.mainTitle}>Workshops</div>
      <div className={styles.wrapper}>
        {workshopsList.map((event) => (
          <Link to={`/workshops/${event.refName}`} className={styles.linkTag}>
            <div key={event.id} className={cx(styles.maindiv, styles.maindiv1)}>
              <img
                src={require(`./../../images/Workshops/${event.refName}.png`)}
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
export default WorkshopHome;
