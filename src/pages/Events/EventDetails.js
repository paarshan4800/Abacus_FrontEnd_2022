import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams, useHistory } from "react-router-dom";
import { TechEvents } from "../../data/TechEventsData";
import { NonTechEvents } from "../../data/NonTechEventsData";
import background from "../../images/bg2.jpeg";
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
    console.log("Hello")
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

      {console.log("Haso")}
      <div className={styles.container}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>RULES</h2>
            <p>
              1) The event is for a team of three participants (At Least 2
              participants)<br></br> 2) Problem statement will be provided on
              25th March, 2021 and participants are expected to present their
              prototype on 26th March, 2021 <br></br>3) Decisions made by the
              administrators will be final
            </p>
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
              <p>{data.dateTime}</p>

              {data.contact.map(
                (person, index) =>{ 
                  
                  return(

                <p key={index + 1} className={styles.glowCardName}>
                  {person.name} - <i className="fa fa-phone"></i>{" "}
                  <span style={{ color: "#fff" }}>{person.mobile}</span>
                </p>
                )
              })} 
              
              
            </div>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
