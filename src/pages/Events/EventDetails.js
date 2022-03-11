import React from "react";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams, useHistory } from "react-router-dom";
import { TechEvents } from "../../data/TechEventsData";
import { NonTechEvents } from "../../data/NonTechEventsData";
import background from "../../images/bg4.jpg";
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
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>{data.name}</h2>
            <p>
              {data.about}
              <br />
              <br />
              <b>CONTACT:</b> Kanika K - 8300295535 <br></br>
              <b>DATE:</b> 25-03-2021 and 26-03-2021<br></br>
              {/* <div className={NavbarBigStyles.buttons}>
                <GlassButton title="REGISTER" />
                </div> */}
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>RULES</h2>
            <p>
              4) Participants must ensure that they have laptop with good
              internet connectivity for their convenience <br></br>5)
              Participants must ensure that they have microsoft account<br></br>
              6) Participants can contact the given contact for any doubts
              regarding the event.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
