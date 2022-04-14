import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams, useHistory } from "react-router-dom";
import { TechEvents } from "../../data/TechEventsData";
import { NonTechEvents } from "../../data/NonTechEventsData";
import PageNotFound from "../PageNotFound/PageNotFound";
import GlassBtn from "../../components/GlassBtn/GlassBtn";
import background from "../../images/bgg.jpg";
import nontech from "./../../images/nontech.png";
import eventList from "../../api/events";
import { eventRegistration } from "../../api/registrations";
import FadeInSection from "../../components/FadeInSection/FadeInSection";

import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faFlag,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

function EventDetails() {
  const oneventRegistration = async () => {
    const token = window.location.pathname.split("/");
    var event_id;
    if (token[2] == "tech-events") {
      event_id = eventList.techEventsList.findIndex(function (event, index) {
        if (event.refName == token[3]) return true;
      });
      event_id = eventList.techEventsList[event_id].id;
    } else {
      event_id = eventList.nonTechEventsList.findIndex(function (event, index) {
        if (event.refName == token[3]) return true;
      });
      event_id = eventList.nonTechEventsList[event_id].id;
    }
    console.log(event_id);
    const status = await eventRegistration(event_id,token[3]);
    
    if(status == 200){
      const list = localStorage.getItem("registrations").concat("," , String(event_id));
      console.log(list)
      localStorage.setItem("registrations",list);
      location.reload();
    }
  };

  const { type, title } = useParams();
  var user_eventList = localStorage.getItem("registrations");
  user_eventList = user_eventList.split(',').map(Number);
  // console.log(typeof(eventList))
  // console.log(eventList)
  let Hash;

  if (type === "tech-events") {
    Hash = TechEvents;
  } else if (type === "non-tech-events") {
    Hash = NonTechEvents;
  }

  const data = Hash[title];
  //console.log(data);
  const history = useHistory();
  if (!data) {
    // history.push("/404")
    return <PageNotFound />;
  }

  return (
    <div
      style={{
        backgroundSize: "fit",
        backgroundRepeat: 1,
      }}
    >
      <FadeInSection>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: "auto", width: "30%" }}>
            <span></span>
            <div
              className={styles.content}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {type === "tech-events" && (
                <img
                  src={require(`./../../images/TechEvents/${title}.png`)}
                  style={{ width: "200px", height: "200px" }}
                  alt={title}
                />
              )}
              {type === "non-tech-events" && (
                <img
                  src={require(`./../../images/NonTechEvents/${title}.png`)}
                  style={{ width: "200px", height: "200px" }}
                  alt={title}
                />
              )}
              {/* Change this later */}
                {/* <GlassButton
                  id="msg"
                  onClick={() => {
                    oneventRegistration();
                  }}
                  title="Register"
                /> */}
                {user_eventList.find(x => x==data.id) ? (
                  <GlassBtn title="Registered!" />
                  ) : (
                  <GlassButton
                    onClick={() => {
                      oneventRegistration();
                    }}
                    title="Register"
                  />
                )}
              {/* <p className="text-center pt-3">Registrations Opening Soon</p> */}
            </div>
          </div>
          <div className={styles.box} style={{ height: "auto", width: "60%" }}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>{data.name ? data.name : null}</h2>
              <p>{data.about ? data.about : null}</p>
              <h2 className={styles.neon}>DATE & TIME</h2>
              {/* {data.dateTime.map((obj) => (
              <p key={1}> {obj}</p>
            ))} */}
              <h2 className={styles.neon}>CONTACT</h2>
              {/* {data.contact.map((person, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                {person.name} - <i class="fa fa-phone"></i>
                {person.mobile}
              </p>
            ))} */}
            </div>
          </div>
        </div>
      </FadeInSection>

      {data.sponsor ? (
        <FadeInSection>
          <div className={styles.container}>
            <div
              className={styles.box}
              style={{ height: "auto", width: "60%" }}
            >
              <span></span>
              <div className={styles.content}>
                <h2
                  className={styles.neon}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  SPONSOR - {data.sponsorName}
                </h2>
                <img
                  src={require(`./../../../public/images/about-us/${data.sponsor}`)}
                  style={{
                    width: "450px",
                    height: "270px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />

                {/* <a href="#">Read More</a> */}
              </div>
            </div>
          </div>
        </FadeInSection>
      ) : null}

      <FadeInSection>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: "auto", width: "auto" }}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>RULES</h2>
              {data.rules
                ? data.rules.map((rule, index) => (
                    <p key={index + 1} className={styles.glowCardName}>
                      ► {rule}
                    </p>
                  ))
                : null}
              <p>Team size: {data.teamSize ? data.teamSize : null}</p>
              <p>
                Participants: {data.participants ? data.participants : null}
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: "auto", width: "auto" }}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>ROUNDS</h2>
              <p>Rounds: {data.roundsNumber ? data.roundsNumber : null}</p>
              <p>Duration: {data.duration ? data.duration : null}</p>
              {data.rounds
                ? data.rounds.roundDetails.map((round, index) => (
                    <p key={index + 1} className={styles.glowCardName}>
                      <h4>
                        <b>{round.title}</b>
                      </h4>
                      {round.description
                        ? round.description.map((desc, index) => (
                            <p key={index + 1} className={styles.glowCardName}>
                              ► {desc}
                            </p>
                          ))
                        : null}
                    </p>
                  ))
                : null}
              <p>Platform: {data.platform ? data.platform : null}</p>

              <GlassButton title="Scroll to Top" />
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
export default EventDetails;
