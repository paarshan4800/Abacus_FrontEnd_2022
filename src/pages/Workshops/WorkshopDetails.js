import React, { useEffect, useState } from "react";
import background from "./../../images/bg2.jpeg";
import styles from "./../Workshops/WorkshopDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams } from "react-router-dom";
// import NavbarBigStyles from "../../components/NavbarBig/NavbarBig.module.css";
import Link from "react";
import reactDom from "react-dom";
import axios from "axios";

function WorkshopDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  var config = {
    method: "get",
    url: `http://localhost:3000/${id}`,
  };
  const fetchData = () => {
    axios(config)
      .then(function (response) {
        var data = JSON.stringify(response.data);
        console.log(data);
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(fetchData, []);
  //console.log(details);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      {details.map((element) => (
        <div className={styles.container}>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>RULES</h2>
              <p>
                {element.Description}
                1) The event is for a team of three participants (At Least 2
                participants)<br></br> 2) Problem statement will be provided on
                25th March, 2021 and participants are expected to present their
                prototype on 26th March, 2021 <br></br>3) Decisions made by the
                administrators will be final
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>{element.eventName}</h2>
              <p>
                {element.oneLiner}
                {element.Description}
                <br></br>
                <br></br>
                <b>CONTACT:</b> Kanika K - 8300295535 <br></br>
                <b>DATE:</b> 25-03-2021 & 26-03-2021<br></br>
              </p>
              <a href="#">Register</a>
            </div>
          </div>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>RULES</h2>
              <p>
                4) Participants must ensure that they have laptop with good
                internet connectivity for their convenience <br></br>5)
                Participants must ensure that they have microsoft account
                <br></br>
                6) Participants can contact the given contact for any doubts
                regarding the event.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default WorkshopDetails;
