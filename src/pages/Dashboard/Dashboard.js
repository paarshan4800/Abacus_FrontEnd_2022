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
          <>
            <div className={styles.message}>hehehe</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
