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
import { registerEvent } from "../../api/events";

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
    // <div
    //   style={{
    //     backgroundImage: `url(${background})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: 1,
    //     //height: "100vh",
    //     // color: "#f5f5f5",
    //   }}
    // >
    //   <div classNameName={styles.container}>
    //     <div classNameName={styles.box}>
    //       <span></span>
    //       <div classNameName={styles.content}>
    //         <h2 classNameName={styles.neon}>DESCRIPTION</h2>
    //         <p>{data.about}</p>
    //         {/* <h2 classNameName={styles.neon}>DATE & TIME</h2> */}
    //         {data.dateTime.map((obj) => (
    //           <p key={1}> {obj}</p>
    //         ))}
    //         <h2 classNameName={styles.neon}>CONTACT</h2>
    //         {data.contact.map((person, index) => (
    //           <p key={index + 1} classNameName={styles.glowCardName}>
    //             {person.name} - <i className="fa fa-phone"></i>
    //             {person.mobile}
    //           </p>
    //         ))}
    //       </div>
    //     </div>

    //     <div classNameName={styles.box} style={{ width: "400px" }}>
    //       <span></span>
    //       <div classNameName={styles.content}>
    //         {type === "tech-events" && (
    //           <img
    //             src={require(`./../../images/TechEvents/${title}.png`)}
    //             style={{ width: "200px", height: "200px" }}
    //             alt={title}
    //           />
    //         )}
    //         {type === "non-tech-events" && (
    //           <img
    //             src={require(`./../../images/NonTechEvents/${title}.png`)}
    //             style={{ width: "200px", height: "200px" }}
    //             alt={title}
    //           />
    //         )}
    //         <GlassButton title="Register" />
    //       </div>
    //       {/* <GlassButton /> */}
    //     </div>
    //   </div>

    //   <div classNameName={styles.container}>
    //     <div classNameName={styles.box} style={{ width: "400px" }}>
    //       <span></span>
    //       <div classNameName={styles.content}>
    //         <img src={nontech} style={{ width: "200px", height: "200px" }} />
    //       </div>
    //     </div>

    //     <div classNameName={styles.box} style={{ width: "800px" }}>
    //       <span></span>
    //       <div classNameName={styles.content}>
    //         <h2 classNameName={styles.neon}>SPONSORS</h2>
    //         <p>{data.about}</p>

    //         {/* <a href="#">Read More</a> */}
    //       </div>
    //     </div>
    //   </div>

    //   <div classNameName={styles.container}>
    //     <div classNameName={styles.box}>
    //       <span></span>
    //       <div classNameName={styles.content}>
    //         <h2 classNameName={styles.neon}>RULES</h2>
    //         {data.rules.map((rule, index) => (
    //           <p key={index + 1} classNameName={styles.glowCardName}>
    //             {index + 1}. {rule}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <div classNameName={styles.container}>
    //     <div classNameName={styles.box}>
    //       <span></span>
    //       <div classNameName={styles.content}>
    //         <h2 classNameName={styles.neon}>ROUNDS</h2>
    //         {data.rounds.roundDetails.map((round, index) => (
    //           <p key={index + 1} classNameName={styles.glowCardName}>
    //             {round.title} - {round.description}
    //           </p>
    //         ))}
    //         <GlassButton title="Scroll to Top" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        //backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: 1,
      }}
    >
      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "60%" }}>
          <span></span>
          <div className={styles.content}>
            <h2 classNameName={styles.neon}>DESCRIPTION</h2>
            <p>{data.about}</p>
          </div>
        </div>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 classNameName={styles.neon}>DATE & TIME</h2>
            {data.dateTime.map((obj) => (
              <p key={1}> {obj}</p>
            ))}
            <h2 classNameName={styles.neon}>CONTACT</h2>
            {data.contact.map((person, index) => (
              <p key={index + 1} classNameName={styles.glowCardName}>
                {person.name} - <i className="fa fa-phone"></i>
                {person.mobile}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.box} style={{ height: "auto", width: "30%" }}>
          <span></span>
          <div className={styles.content}>
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
                registerEvent(data.id);
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "30%" }}>
          <span></span>
          <div className={styles.content}>
            <img src={nontech} style={{ width: "200px", height: "200px" }} />
          </div>
        </div>

        <div className={styles.box} style={{ height: "auto", width: "60%" }}>
          <span></span>
          <div className={styles.content}>
            <h2 classNameName={styles.neon}>SPONSORS</h2>
            <p>{data.about}</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box} style={{ height: "auto", width: "auto" }}>
          <span></span>
          <div className={styles.content}>
            <h2 classNameName={styles.neon}>DATE & TIME</h2>
            {data.dateTime.map((obj) => (
              <p key={1}> {obj}</p>
            ))}
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
                {round.title} - {round.description}
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
