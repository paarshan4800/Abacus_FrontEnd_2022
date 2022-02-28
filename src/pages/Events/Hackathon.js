import React from "react";
import background from "./../../images/bg1.jpg";
import styles from "./../Events/EventDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { Hackathon as HackathonData} from "../../data/HackathonData";

function Hackathon() {

  const data = HackathonData;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div className={styles.container}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>RULES</h2>
            <p>
              {data.rules}
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2 className={styles.neon}>{data.name}</h2>
            <p>
              {data.about}<br/><br/>
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
export default Hackathon;
