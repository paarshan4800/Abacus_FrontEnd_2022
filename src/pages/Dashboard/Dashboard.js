import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import styles from "./Dashboard.module.css";
import { useState, useEffect } from "react";
import cx from "classnames";
import tech from "./../../images/tech.jpeg";
import hack from "./../../images/hack.jpeg";
import nontech from "./../../images/nontech.jpeg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Loading from "../Loading/Loading";
import GlassButton from "../../components/GlassButton/GlassButton";
import GlassBtn from "../../components/GlassBtn/GlassBtn";
import eventpassimg from "../../images/eventpassimggg.png";
import workshoppassimg from "../../images/workshoppassimgg.png";
import { FaUserCircle } from "react-icons/fa";
import userimg from "../../images/usericonimg.jpg";
import { TiTick } from "react-icons/ti";


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  let eventList = [
    {
      id: 1,
      refName: "tenet",
      name: "Tenet",
      img: tech,
      type: "tech-events",
      registered: true,
    },
    {
      id: 2,
      refName: "code-for-crown-olpc",
      name: "Code for crown",
      img: nontech,
      type: "tech-events",
      registered: false,
    },
    {
      id: 3,
      refName: "novice-init",
      name: "Tenet",
      img: hack,
      type: "tech-events",
      registered: false,
    },
    {
      id: 4,
      refName: "tenet",
      name: "Asdfgh",
      img: nontech,
      type: "tech-events",
      registered: true,
    },
    {
      id: 5,
      refName: "tenet",
      name: "qwerty",
      img: hack,
      type: "tech-events",
      registered: true,
    },
    {
      id: 6,
      refName: "tenet",
      name: "zxcvb",
      img: tech,
      type: "tech-events",
      registered: false,
    },
    {
      id: 7,
      refName: "house-full",
      name: "House Full",
      img: nontech,
      type: "non-tech-events",
      registered: true,
    },
    {
      id: 8,
      refName: "graphic-traffic",
      name: "Graphic Traffic",
      img: hack,
      type: "non-tech-events",
      registered: false,
    },
    {
      id: 9,
      refName: "imagenation",
      name: "Imagenation",
      img: tech,
      type: "non-tech-events",
      registered: true,
    },
  ];

  let workshopList = [
    {
      id: 1,
      refName: "cloud-computing",
      name: "Cloud Computing",
      img: tech,
      registered: true,
    },
    {
      id: 2,
      refName: "entrepreneurship",
      name: "Entrepreneurship",
      img: nontech,
      registered: false,
    },
    {
      id: 3,
      refName: "job-readiness",
      name: "Job Readiness",
      img: hack,
      registered: false,
    },
    {
      id: 4,
      refName: "cloud-computing",
      name: "Cloud Computing",
      img: tech,
      registered: true,
    },
  ];

  const [isEventList, setEventList] = useState(true);
  const [isWorkshopList, setWorkshopList] = useState(true);

  useEffect(() => {
    setEventList(true);
    setWorkshopList(false);
  },[]);

  const expandEventList = () => {
    setEventList(true);
    setWorkshopList(false);
  };

  const expandWorkshopList = () => {
    setEventList(false);
    setWorkshopList(true);
  };

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
                <p>Name: Harry Edward Styles</p>
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
            <div className={styles.display}>
              <div className={styles.selector}>
                <GlassButton title="Events" selected={isEventList} onClick={() => {expandEventList()}}/>
                <GlassButton title="Workshop" selected={isWorkshopList} onClick={() => {expandWorkshopList()}}/>
              </div>

              {isEventList && (
              <div className={styles.list}>
                {eventList.map((event) =>
                  event.registered ? (
                    <div key={event.id} className={styles.list_element}>
                      <div className={styles.title}>{event.refName}</div>
                      <div className={styles.hide}>
                        <Link to={`/events/${event.type}/${event.refName}`}>
                          <div className={styles.btn}>
                            <GlassBtn title="View More" />
                          </div>
                        </Link>
                      </div>
                      <div className={styles.badge}>
                        <TiTick size={35}/>
                      </div>
                    </div>
                  ) : (
                    <div key={event.id} className={styles.list_element}>
                      <div className={styles.title}>{event.refName}</div>
                      <div className={styles.hide}>
                        <Link to={`/events/${event.type}/${event.refName}`}>
                          <div className={styles.btn}>
                            <GlassBtn title="Register" />
                          </div>
                        </Link>
                      </div>
                      <div className={styles.badge}>
                      </div>
                    </div>
                  )
                )}
              </div>
              )}

              {isWorkshopList && (
              <div className={styles.list}>
                {workshopList.map((event) =>
                  event.registered ? (
                    <div key={event.id} className={styles.list_element2}>
                      <div className={styles.title}>{event.refName}</div>
                      <div className={styles.hide}>
                        <Link to={`/workshops/${event.refName}`}>
                          <div className={styles.btn}>
                            <GlassBtn title="View More" />
                          </div>
                        </Link>
                      </div>
                      <div className={styles.badge}>
                        <TiTick size={35}/>
                      </div>
                    </div>
                  ) : (
                    <div key={event.id} className={styles.list_element2}>
                      <div className={styles.title}>{event.refName}</div>
                      <div className={styles.hide}>
                        <Link to={`/workshops/${event.refName}`}>
                          <div className={styles.btn}>
                            <GlassBtn title="Register" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                )}
              </div>
              )}

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
