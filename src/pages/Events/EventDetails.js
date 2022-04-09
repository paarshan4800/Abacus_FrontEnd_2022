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
import { eventRegistration } from "../../api/registrations";

import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faFlag,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

function EventDetails() {
  const { type, title } = useParams();

  let Hash;

  if (type === "tech-events") {
    Hash = TechEvents;
  } else if (type === "non-tech-events") {
    Hash = NonTechEvents;
  }

  const data = Hash[title];
  // console.log(data);
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
      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "30%" }}>
          <span></span>
          <div className={styles.content}>
            {/* <h2>{data.name}</h2> */}
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
            <GlassButton
              title="Register"
              onClick={() => {
                eventRegistration();
              }}
            />
          </div>
          {/* <GlassButton /> */}
        </div>
        <div className={styles.box} style={{ height: "auto", width: "60%" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>{data.name}</h2>
            <p>{data.about}</p>
            {/* <h2 className={styles.neon}>DATE & TIME</h2> */}
            {/* {data.dateTime.map((obj) => (
              <p key={1}> {obj}</p>
            ))} */}
            {/* <h2 className={styles.neon}>CONTACT</h2> */}
            {/* {data.contact.map((person, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                {person.name} - <i class="fa fa-phone"></i>
                {person.mobile}
              </p>
            ))} */}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "60%" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>SPONSORS</h2>
            <img src={nontech} style={{ width: "200px", height: "200px" }} />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "auto" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>RULES</h2>
            {data.rules.map((rule, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                ► {rule}
              </p>
            ))}
            {data.teamSize ? (
              <p>
                <FontAwesomeIcon icon={faPeopleGroup} />
                {"  "}Team size: {data.teamSize}
              </p>
            ) : null}
            {data.dateTime ? (
              <div>
                <p>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {"  "}
                  {data.dateTime[0]}
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  {"  "}
                  {data.dateTime[1]}
                </p>
              </div>
            ) : null}
            {data.roundsNumber ? (
              <p>
                <FontAwesomeIcon icon={faFlag} />
                {"  "}Rounds: {data.roundsNumber}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "auto" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>ROUNDS</h2>
            {data.rounds.roundDetails.map((round, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                <h4>
                  <b>{round.title}</b>
                </h4>
                {round.description.map((desc, index) => (
                  <p key={index + 1} className={styles.glowCardName}>
                    ► {desc}
                  </p>
                ))}
                {/* {round.description} */}
              </p>
            ))}

            {/* <GlassButton title="Scroll to Top" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
