import React, { useEffect, useState } from "react";
import styles from "./../Workshops/WorkshopDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams, useHistory } from "react-router-dom";
import Link from "react";
import reactDom from "react-dom";
import { Workshops } from "../../data/WorkshopsData";
import PageNotFound from "../PageNotFound/PageNotFound";
import nontech from "./../../images/nontech.png";
import { workshopRegistration } from "../../api/registrations";
import { ToastContainer, toast } from "react-toastify";

function WorkshopDetails() {

  const [totalRegisteredList, setTotalRegisteredList] = useState([]);

  const { title } = useParams();

  let registered = false;

  const data = Workshops[title];
  const history = useHistory();
  if (!data) {
    //history.push("/404")
    return <PageNotFound />;
  }

  const onWorkshopRegistration = async () => {
    console.log(data.id)
    const status = await workshopRegistration(data.id, data.refName);

    if (status == 200) {
      const list = JSON.parse(localStorage.getItem("registrations"));
      list.push(String(data.id));
      console.log(list);
      registered = true;
      localStorage.setItem("registrations", JSON.stringify(list));
      setTotalRegisteredList(
        await JSON.parse(localStorage.getItem("registrations"))
      );
    }
  };

  useEffect(async () => {
    setTotalRegisteredList(
      await JSON.parse(localStorage.getItem("registrations"))
    );
  }, []);
  //console.log(totalRegisteredList)
  if(totalRegisteredList == null)
    registered = -1
  else  
    registered = totalRegisteredList.find((x) => x == data.id) != undefined;

  return (
    <div
    // style={{
    //   backgroundImage: `url(${background})`,
    //   backgroundSize: "cover",
    //   height: "100vh",
    //   color: "#f5f5f5",
    // }}
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
            {/* {data.contact.map((person, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                {person.name} - <i class="fa fa-phone"></i>
                {person.mobile}
              </p>
            ))} */}
          </div>
        </div>

        <div className={styles.box} style={{ width: "400px" }}>
          <span></span>
          <div className={styles.content}>
            {/* <img
              src={require(`./../../images/Workshops/${title}.png`)}
              style={{ width: "200px", height: "200px" }}
              alt={title}
            /> */}
            {registered<1 ? (
                <GlassButton 
                onClick={() => {
                  registered==-1 ? (
                    toast.success("Login or Sign up to register")
                  ) : (
                  onWorkshopRegistration()
                  )
                }}
                  title="Register" 
                />
              ) : (
                <GlassButton
                  title="Registered!"
                />
              )}
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
            <h2 className={styles.neon}>SPEAKERS</h2>
            {data.speakers.map((speaker, index) => (
              <p key={index + 1} className={styles.glowCardName}>
                <a href={speaker.href}>
                  {index + 1}. {speaker.name} - {speaker.profession} ({" "}
                  {speaker.company})
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {data.speakers.map((speaker, index) => (
          <div
            className={styles.box}
            key={index + 1}
            style={{ width: "300px" }}
          >
            <span></span>
            <div className={styles.content} >
            <img src={nontech} />

              <h3 className={styles.neon}>{speaker.name}</h3>
              <p className={styles.glowCardName}>
                <a href={speaker.href}>
                  {speaker.profession} <br /> {speaker.company}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WorkshopDetails;
