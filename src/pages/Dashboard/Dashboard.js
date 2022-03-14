import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import cx from "classnames";
import tech from "./../../images/tech.jpeg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Loading from "../Loading/Loading";
import GlassButton from "../../components/GlassButton/GlassButton";
import eventpassimg from "../../images/eventpassimg.png";
import { FaUserCircle } from "react-icons/fa";
import usericon from "../../images/usericonimg.jpg";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div>
      <div className={styles.profileBar}>
        <div className={styles.userinfo}>
          {/* <div className={styles.usericon}>
              <FaUserCircle/>
          </div>
          <div className={styles.name}>
            <p>Name: Joe Doe</p>
          </div>
          <div className={styles.abacusid}>
            <p>Abacus-ID: 4101</p>
          </div> */}

          <div className={styles.card}>
            <img src={usericon} alt="Person" className={styles.card__image} />
            <p className={styles.card__name}>Lily-Grace Colley Joe</p>
            <p className={styles.card__name}>4101</p>
          </div>
        </div>

        <div className={styles.eventpass}>
          <img src={eventpassimg} />
        </div>

        <div className={styles.userstats}>
          <div className={styles.eventstats}>
            <p>4/10</p>
          </div>
          <div className={styles.workshopstats}>
            <p>2/23</p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        {isLoading && <Loading />}

        {!isLoading && (
          <div className={styles.wrapper}>
            {workshopsList.map((event) => (
              <Link to={`/workshops/${event.refName}`}>
                {/* <div
                    // className={cx(styles.maindiv, styles.maindiv1)}

                  >
                    <div className={styles.title}>{event.name}</div>
                  </div>  */}
                <div
                  key={event.id}
                  style={{ backgroundColor: "red", width: 1000 }}
                >
                  <img
                    src={event.img}
                    alt="1"
                    style={{
                      
                      width: 200,
                      height: 200,
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
