import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import styles from "./Dashboard.module.css";
import { useState, useEffect, useContext } from "react";
import CountUp from "react-countup";
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
import {
  getEventPass,
  getListOfEventRegistrations,
} from "../../api/registrations";
import {
  nonTechEventsList,
  techEventsList,
  workshopsList,
} from "../../api/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faHome
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const width = useContext(Width);

  // let eventList = [
  //   {
  //     id: 1,
  //     refName: "reverse-engineering",
  //     name: "Reverse Engineering",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 2,
  //     refName: "code-for-crown",
  //     name: "Code for Crown",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 3,
  //     refName: "web-design",
  //     name: "Web Design",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 4,
  //     refName: "capture-the-flag",
  //     name: "Capture the Flag",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 5,
  //     refName: "she-codes",
  //     name: "She Codes",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 6,
  //     refName: "booting",
  //     name: "Booting",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 7,
  //     refName: "get-hired",
  //     name: "Get Hired",
  //     type: "tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 8,
  //     refName: "ship-wreck",
  //     name: "Ship-Wreck",
  //     type: "non-tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 9,
  //     refName: "design-a-thon",
  //     name: "Design-a-thon",
  //     type: "non-tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 10,
  //     refName: "fandom-quiz",
  //     name: "Fandom Quiz",
  //     type: "non-tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 11,
  //     refName: "thadam",
  //     name: "Thadam",
  //     type: "non-tech-events",
  //     registered: false,
  //   },
  //   {
  //     id: 12,
  //     refName: "gamindrome",
  //     name: "Gamindrome",
  //     type: "non-tech-events",
  //     registered: false,
  //   },
  // ];

  // let workshopList = [
  //   {
  //     id: 13,
  //     refName: "blockchain-and-cryptocurrency",
  //     name: "Blockchain and Cryptocurrency",
  //     registered: false,
  //   },
  //   {
  //     id: 14,
  //     refName: "dev-ops",
  //     name: "DevOps",
  //     registered: false,
  //   },
  //   {
  //     id: 15,
  //     refName: "stock-market-and-share-market",
  //     name: "Stock Market and Share Market",
  //     registered: false,
  //   },
  // ];

  let isComingSoon = false; /*Set this as false when registrations are open for workshops */

  const [isEventList, setEventList] = useState(true);
  const [isWorkshopList, setWorkshopList] = useState(true);

  const [name, setName] = useState("");
  const [abacusId, setAbacusId] = useState("");
  const [isCegian, setIsCegian] = useState(false);
  // const [hasEventPass, setHasEventPass] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [registeredWorkshops, setRegisteredWorkshops] = useState([]);

  const [college, setCollege] = useState("");
  const [eventListItems, setEventListItems] = useState([]);
  const [workshopListItems, setWorkshopListItems] = useState([]);

  useEffect(async () => {
    setEventList(true);
    setWorkshopList(false); // Set this as true for workshop list.
    await getListOfEventRegistrations();
    setName(localStorage.getItem("name"));
    setAbacusId(Number(localStorage.getItem("abacusId")));
    setIsCegian(await JSON.parse(localStorage.getItem("isCegian")));
    setRegisteredEvents(
      await JSON.parse(localStorage.getItem("registrations"))
    );
    setRegisteredWorkshops(await JSON.parse(localStorage.getItem("workshops")));
    setCollege(localStorage.getItem("college"));
  }, []);

  useEffect(() => {
    const techEventList = techEventsList.map((data) => {
      let registered = false;
      if (registeredEvents.find((x) => x == data.id) != undefined) {
        registered = true;
      }
      return { ...data, registered: registered, type: "tech-events" };
    });

    const nonTechEventList = nonTechEventsList.map((data) => {
      let registered = false;
      if (registeredEvents.find((x) => x == data.id) != undefined) {
        registered = true;
      }
      return { ...data, registered: registered, type: "non-tech-events" };
    });

    setEventListItems([...techEventList, ...nonTechEventList]);
  }, [registeredEvents]);

  useEffect(() => {
    const workshopList = workshopsList.map((data) => {
      let registered = false;
      if (registeredWorkshops.find((x) => x == data.id) != undefined) {
        registered = true;
      }
      return { ...data, registered: registered, type: "workshops" };
    });
    setWorkshopListItems([...workshopList]);
  }, [registeredWorkshops]);

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
                <p>Name : {name}</p>
              </div>
              <div className={styles.abacusid}>
                <p>Abacus ID : {abacusId}</p>
              </div>
              <GlassBtn
                title={<FontAwesomeIcon icon={faHome}>Pay now</FontAwesomeIcon>}
                // title="Pay Now"
              />
              {/* <div className={styles.abacusid}>
                <p>College : {college}</p>
              </div>
               */}
            </div>
          </div>
        </div>
        <div className={styles.userstats}>
          {/* <div className={styles.event_pass}>
            <Link to={`/events`}>
              <img src={eventpassimg} />
            </Link>
          </div>
          <div className={styles.event_stats}>
            <div className={styles.stats_card}>
              {hasEventPass ? (
                <>
                  <div className={styles.title}>Events Registered</div>
                  <div className={styles.num1}>{registeredEvents.length}</div>
                  <div className={styles.num2}>/{eventListItems.length}</div>
                </>
              ) : (
                <div>
                  <p>You need to obtain Event Pass to begin registration</p>
                  <div onClick={getEventPass}>
                    <GlassButton title={"Get Pass"} />
                  </div>
                </div>
              )}
            </div>
          </div> */}
          {0 ? (
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
                <div className={styles.num1}>
                  {" "}
                  <CountUp
                    start={0}
                    end={registeredEvents.length}
                    redraw={false}
                    duration={1}
                  >
                    {" "}
                  </CountUp>
                </div>
                <div className={styles.num2}>/{eventListItems.length}</div>
              </div>
            </div>
          )}
          {0 ? (
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
                <div className={styles.num1}>
                  <CountUp
                    start={0}
                    end={registeredWorkshops.length} 
                    redraw={false}
                    duration={1}
                  >
                    {" "}
                  </CountUp>
                </div>
                <div className={styles.num2}>/{workshopListItems.length}</div>
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
                    {eventListItems.map((event) => (
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
                          {event.registered ? (
                            <TiTick size={35} style={{ color: "white" }} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {isWorkshopList && isComingSoon && <ComingSoon />}
                {isWorkshopList && !isComingSoon && (
                  <div className={styles.list}>
                    {workshopListItems.map((event) => (
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
                          {event.registered ? (
                            <TiTick size={35} style={{ color: "white" }} />
                          ) : (
                            <></>
                          )}
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
                    {eventListItems.map((event) => (
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
                            <TiTick size={35} style={{ color: "white" }} />
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
                    {workshopListItems.map((event) => (
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
                            <TiTick size={35} style={{ color: "white" }} />
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
