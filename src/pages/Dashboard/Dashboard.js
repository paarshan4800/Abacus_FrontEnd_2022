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
import workshoppassimg from "../../images/workshoppassimg.png";
import { FaUserCircle } from "react-icons/fa";
import userimg from "../../images/usericonimg.jpg";

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
      <div className={styles.infoBar}>
        <div className={styles.profile}>
          <div className={styles.info_card}>
            <div className={styles.userimg}>
              <img src={userimg} />
            </div>
            <div className={styles.userinfo}>
              <div className={styles.name}>
                <p>Name: Jyotir Aditya Giri Joe Doe</p>
              </div>
              <div className={styles.abacusid}>
                <p>Abacus-ID: 4101</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.userstats}>
          {1 ? (
            <div className={styles.event_pass}>
              <Link to={`/events`}>
                <img src={eventpassimg} />
              </Link>
            </div>
          ) : (
            <div className={styles.event_stats}>
              <div className={styles.stats_card}>
                <div className={styles.title}>Events</div>
                <div className={styles.title}>Registered</div>
                <div className={styles.num1}>4</div>
                <div className={styles.num2}>/10</div>
              </div>
            </div>
          )}
          {/*aaahhhhhh*/}
          {1 ? (
            <div className={styles.workshop_pass}>
              <Link to={`/workshops`}>
                <img src={workshoppassimg} />
              </Link>
            </div>
          ) : (
            <div className={styles.workshop_stats}>
              <div className={styles.stats_card}>
                <div className={styles.title}>Workshops</div>
                <div className={styles.title}>Registered</div>
                <div className={styles.num1}>2</div>
                <div className={styles.num2}>/23</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        {isLoading && <Loading />}

        {!isLoading && (
          <>
            <div className={styles.list}>
              <div className={styles.list_element}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
              <div className={styles.list_element}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
              <div className={styles.list_element2}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
              <div className={styles.list_element}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
              <div className={styles.list_element2}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
              <div className={styles.list_element2}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
              <div className={styles.list_element}>
                <div className={styles.title}>Tenet</div>
                <div className={styles.btn}><GlassButton title="Register"/></div>
              </div>
            
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
