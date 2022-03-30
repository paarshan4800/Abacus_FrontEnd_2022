import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { Hackathon as HackathonData } from "../../data/HackathonData";
import nontech from "./../../images/nontech.png";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Hackathon() {
  const data = HackathonData;

  return (
    <div
      style={
        {
          // backgroundImage: `url(${background})`,
          // backgroundSize: "cover",
          // height: "100vh",
          // color: "#f5f5f5",
        }
      }
    >
      <div className={styles.container}>
        <div className={styles.box} style={{ width: "800px" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>DESCRIPTION</h2>
            <p>{data.about}</p>
            {/* <h2 className={styles.neon}>DATE & TIME</h2> */}
            {data.dateTime.map((obj) => (
              <p key={1}> {obj}</p>
            ))}
            <h2 className={styles.neon}>CONTACT</h2>
            {data.contact.map((person, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                {person.name} - <i class="fa fa-phone"></i>
                {person.mobile}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.box} style={{ width: "400px" }}>
          <span></span>
          <div className={styles.content}>
            <img src={nontech} style={{ width: "200px", height: "200px" }} />
            <Link to={`/hackathon-register`}>
              <GlassButton title="Register" />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box} style={{ width: "400px" }}>
          <span></span>
          <div className={styles.content}>
            <img src={nontech} style={{ width: "200px", height: "200px" }} />
          </div>
        </div>

        <div className={styles.box} style={{ width: "800px" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>SPONSORS</h2>
            <p>{data.about}</p>

            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>RULES</h2>
            {data.rules.map((rule, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                {index + 1}. {rule}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hackathon;
