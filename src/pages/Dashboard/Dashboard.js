import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import styles from "./Dashboard.module.css";
import { useState, useEffect, useContext } from "react";
import cx from "classnames";
import tech from "./../../images/tech.png";
import hack from "./../../images/hack.png";
import nontech from "./../../images/nontech.png";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Loading from "../Loading/Loading";
import GlassButton from "../../components/GlassButton/GlassButton";
import GlassBtn from "../../components/GlassBtn/GlassBtn";
import eventpassimg from "../../images/eventpassimg.png";
import workshoppassimg from "../../images/workshoppassimg.png";
import { FaUserCircle } from "react-icons/fa";
import userimg from "../../images/usericonimg.jpg";
import { TiTick } from "react-icons/ti";
import ComingSoon from "../ComingSoon/ComingSoon";
import { Width } from "../../App";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const width = useContext(Width);

  let eventList = [
    {
      id: 1,
      refName: "reverse-engineering",
      name: "Reverse Engineering",
      type: "tech-events",
      registered: true,
    },
    {
      id: 2,
      refName: "code-for-crown",
      name: "Code for Crown",
      type: "tech-events",
      registered: false,
    },
    {
      id: 3,
      refName: "web-design",
      name: "Web Design",
      type: "tech-events",
      registered: false,
    },
    {
      id: 4,
      refName: "capture-the-flag",
      name: "Capture the Flag",
      type: "tech-events",
      registered: true,
    },
    {
      id: 5,
      refName: "she-codes",
      name: "She Codes",
      type: "tech-events",
      registered: true,
    },
    {
      id: 6,
      refName: "booting",
      name: "Booting",
      type: "tech-events",
      registered: false,
    },
    {
      id: 7,
      refName: "get-hired",
      name: "Get Hired",
      type: "tech-events",
      registered: true,
    },
    {
      id: 8,
      refName: "ship-wreck",
      name: "Ship-Wreck",
      type: "non-tech-events",
      registered: false,
    },
    {
      id: 9,
      refName: "design-a-thon",
      name: "Design-a-thon",
      type: "non-tech-events",
      registered: true,
    },
    {
      id: 10,
      refName: "fandom-quiz",
      name: "Fandom Quiz",
      type: "non-tech-events",
      registered: false,
    },
    {
      id: 11,
      refName: "thadam",
      name: "Thadam",
      type: "non-tech-events",
      registered: true,
    },
    {
      id: 12,
      refName: "gamindrome",
      name: "Gamindrome",
      type: "non-tech-events",
      registered: true,
    },
  ];

  let workshopList = [
    {
      id: 13,
      refName: "blockchain-and-cryptocurrency",
      name: "Blockchain and Cryptocurrency",
      registered: true,
    },
    {
      id: 14,
      refName: "dev-ops",
      name: "DevOps",
      registered: false,
    },
    {
      id: 15,
      refName: "stock-market-and-share-market",
      name: "Stock Market and Share Market",
      registered: true,
    },
  ];

  let isComingSoon = true; /*Set this as false when registrations are open for workshops */

  const [isEventList, setEventList] = useState(true);
  const [isWorkshopList, setWorkshopList] = useState(true);

  useEffect(() => {
    setEventList(true);
    setWorkshopList(false);
  }, []);

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
          <div className={styles.info_card2}>
            <div className={styles.userimg}>
              <img src={userimg} />
            </div>
            <div className={styles.userinfo}>
              <div className={styles.name}>
                <p>Name : Harry Tomlinson</p>
              </div>
              <div className={styles.abacusid}>
                <p>Abacus ID : 4101</p>
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
          <div className={styles.display}>
            <div className={styles.selector}>
              <GlassButton
                title="Events"
                selected={isEventList}
                onClick={() => {
                  expandEventList();
                }}
              />
              <GlassButton
                title="Workshop"
                selected={isWorkshopList}
                onClick={() => {
                  expandWorkshopList();
                }}
              />
            </div>

            {width > 950 ? (
              <div className={styles.webView}>
                {isEventList && (
                  <div className={styles.list}>
                    {eventList.map((event) => (
                      <div key={event.id} className={styles.list_element}>
                        <div className={styles.title}>{event.name}</div>
                        <div className={styles.hide}>
                          <Link to={`/events/${event.type}/${event.refName}`}>
                            <div className={styles.btn}>
                              {event.registered ? (
                                <GlassBtn title="View More" />
                              ) : (
                                <GlassBtn title="Register" />
                              )}
                            </div>
                          </Link>
                        </div>
                        <div className={styles.badge}>
                          {event.registered ? <TiTick size={35} /> : <></>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {isWorkshopList && isComingSoon && <ComingSoon />}
                {isWorkshopList && !isComingSoon && (
                  <div className={styles.list}>
                    {workshopList.map((event) => (
                      <div key={event.id} className={styles.list_element}>
                        <div className={styles.title}>{event.name}</div>
                        <div className={styles.hide}>
                          <Link to={`/workshops/${event.refName}`}>
                            <div className={styles.btn}>
                              {event.registered ? (
                                <GlassBtn title="View More" />
                              ) : (
                                <GlassBtn title="Register" />
                              )}
                            </div>
                          </Link>
                        </div>
                        <div className={styles.badge}>
                          {event.registered ? <TiTick size={35} /> : <></>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.mobileView}>
                {isEventList && (
                  <div className={styles.list}>
                    {eventList.map((event) => (
                      <Link
                        key={event.id}
                        to={`/events/${event.type}/${event.refName}`}
                        className={styles.list_element}
                      >
                        <div className={styles.title}>{event.name}</div>
                        <div className={styles.hide}>
                          <div className={styles.btn}>
                            {event.registered ? (
                              <GlassBtn title="View More" />
                            ) : (
                              <GlassBtn title="Register" />
                            )}
                          </div>
                        </div>
                        <div className={styles.badge}>
                          {event.registered ? (
                            <TiTick size={35} style={{ color: "black" }} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {isWorkshopList && isComingSoon && <ComingSoon />}
                {isWorkshopList && !isComingSoon && (
                  <div className={styles.list}>
                    {workshopList.map((event) => (
                      <Link
                        to={`/workshops/${event.refName}`}
                        key={event.id}
                        className={styles.list_element}
                      >
                        <div className={styles.title}>{event.name}</div>
                        <div className={styles.hide}>
                          <div className={styles.btn}>
                            {event.registered ? (
                              <GlassBtn title="View More" />
                            ) : (
                              <GlassBtn title="Register" />
                            )}
                          </div>
                        </div>
                        <div className={styles.badge}>
                          {event.registered ? (
                            <TiTick size={35} style={{ color: "black" }} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
