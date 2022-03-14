import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams, useHistory } from "react-router-dom";
import { TechEvents } from "../../data/TechEventsData";
import { NonTechEvents } from "../../data/NonTechEventsData";
import PageNotFound from "../PageNotFound/PageNotFound";

function EventDetails() {
  const { type, title } = useParams();

  let Hash;

  if (type === "tech-events") {
    Hash = TechEvents;
  } else if (type === "non-tech-events") {
    Hash = NonTechEvents;
  }

  const data = Hash[title];
  const history = useHistory();
  if (!data) {
    // history.push("/404")
    return <PageNotFound />;
  }

  return (
    <div
      style={{
        // backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
        // backgroundRepeat: 1,
        height: "100vh",
        // color: "#f5f5f5",
      }}
    >
      <div className={styles.container}>
        <div className={styles.box} style={{ width: "800px" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>DESCRIPTION</h2>
            <p>{data.about}</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>

        <div className={styles.box} style={{ width: "400px" }}>
          <span></span>
          <div className={styles.content}>
            <img
              src="../../images/nontech.jpeg"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
      <div className={styles.box} style={{ width: "400px" }}>
          <span></span>
          <div className={styles.content}>
            <img
              src="../../images/nontech.jpeg"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>

      <div className={styles.box} style={{ width: "800px" }}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>DESCRIPTION</h2>
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
            <p>{data.rules}</p>

            <div className="datetime">
              <h2 className={styles.neon}>DATE & TIME</h2>
              <p>{data.dateTime}</p>

              <h2 className={styles.neon}>CONTACT</h2>
              {/* {data.contact.map((person, index) => (
                <p key={index + 1} className={styles.glowCardName}>
                  {person.name} - <i class="fa fa-phone"></i>{" "}
                  <span style={{ color: "#fff" }}>{person.mobile}</span>
                </p>
              ))} */}
            </div>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>RULES</h2>
            <p>{data.rules}</p>

            <div className="datetime">
              <h2 className={styles.neon}>DATE & TIME</h2>
              <p>{data.dateTime}</p>

              <h2 className={styles.neon}>CONTACT</h2>
              {/* {data.contact.map((person, index) => (
                <p key={index + 1} className={styles.glowCardName}>
                  {person.name} - <i class="fa fa-phone"></i>{" "}
                  <span style={{ color: "#fff" }}>{person.mobile}</span>
                </p>
              ))} */}
            </div>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
