import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { Hackathon as HackathonData } from "../../data/HackathonData";
import sponsor from "./../../images/Lumel-logo-Orange.png";
import nontech from "./../../images/hack.png";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FadeInSection from "../../components/FadeInSection/FadeInSection";


function Hackathon() {
  const data = HackathonData;

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
            <img src={nontech} style={{ width: "200px", height: "200px" }} />
            <p className="text-center pt-3">Registrations Opening Soon</p>

            {/* <Link to={`/hackathon-register`}>
              <GlassButton title="Register" />
            </Link> */}
          </div>
        </div>
        <div className={styles.box} style={{ height: "auto", width: "60%" }}>
            <span></span>
            <div className={styles.content}>
            <h2 className={styles.neon}>{data.name}</h2>
              <p>{data.about ? data.about : null}</p>
            {/* <h2 className={styles.neon}>DATE & TIME</h2> */}
            {/* {data.dateTime.map((obj) => (
              <p key={1}> {obj}</p>
            ))}
            <h2 className={styles.neon}>CONTACT</h2>
            {data.contact.map((person, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                {person.name} - <i class="fa fa-phone"></i>
                {person.mobile}
              </p>
            ))} */}
          </div>
        </div>
      </div>
      </FadeInSection>

      <FadeInSection>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: "auto", width: "60%" }}>
            <span></span>
            <div className={styles.content}>
              <h2
                className={styles.neon}
                style={{ display: "flex", justifyContent: "center" }}
              >
                SPONSOR
              </h2>
              <img src={sponsor} style={{ width: "200px", height: "100px" }} />

              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </FadeInSection>


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
              <p>Participants: {data.participants ? data.participants : null}</p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
export default Hackathon;
