import React, { useEffect, useState } from "react";
import styles from "./../Workshops/WorkshopDetails.module.css";
import GlassButton from "../../components/GlassButton/GlassButton";
import { useParams, useHistory } from "react-router-dom";
import Link from "react";
import reactDom from "react-dom";
import { Workshops } from "../../data/WorkshopsData";
import PageNotFound from "../PageNotFound/PageNotFound";
import nontech from "./../../images/nontech.png";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import GlassBtn from "../../components/GlassBtn/GlassBtn";
import { ToastContainer, toast } from "react-toastify";

import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faFlag,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

function WorkshopDetails() {
  const { title } = useParams();

  const data = Workshops[title];
  const history = useHistory();
  if (!data) {
    //history.push("/404")
    return <PageNotFound />;
  }

  // The following two lines of code are added to remove errors.
  // Backend people have fun adding the functionalities :)
  let registered = false;
  const oneventRegistration = async () => {};

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
              <img
                src={require(`./../../images/Workshops/${title}.png`)}
                style={{ width: "200px", height: "200px" }}
                alt={title}
              />
              {/* Change this later */}
              {/* <GlassButton
                id="msg"
                onClick={() => {
                  oneventRegistration();
                }}
                title="Register"
              /> */}
              {registered < 1 ? (
                <GlassBtn
                  onClick={() => {
                    registered == -1
                      ? toast.success("Login or Sign up to register")
                      : oneventRegistration();
                  }}
                  title="Register"
                />
              ) : (
                <GlassButton title="Registered!" />
              )}
              {/* <p className="text-center pt-3">Registrations Opening Soon</p> */}
            </div>
          </div>
          <div className={styles.box} style={{ height: "auto", width: "60%" }}>
            <span></span>
            <div className={styles.content}>
              <h2 className={styles.neon}>{data.name ? data.name : null}</h2>
              <p>{data.about ? data.about : null}</p>
              <h2 className={styles.neon}>DATE & TIME</h2>
              {/* {data.dateTime.map((obj) => (
            <p key={1}> {obj}</p>
          ))} */}
              <h2 className={styles.neon}>CONTACT</h2>
              {/* {data.contact.map((person, index) => (
            <p key={index + 1} className={styles.glowCardName}>
              {person.name} - <i class="fa fa-phone"></i>
              {person.mobile}
            </p>
          ))} */}
            </div>
          </div>
        </div>
      </FadeInSection>

      {data.sponsor ? (
        <FadeInSection>
          <div className={styles.container}>
            <div
              className={styles.box}
              style={{ height: "auto", width: "60%" }}
            >
              <span></span>
              <div className={styles.content}>
                <h2
                  className={styles.neon}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  SPONSOR - {data.sponsorName}
                </h2>
                <img
                  src={require(`./../../../public/images/about-us/${data.sponsor}`)}
                  style={{
                    width: "450px",
                    height: "270px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />

                {/* <a href="#">Read More</a> */}
              </div>
            </div>
          </div>
        </FadeInSection>
      ) : null}

      <FadeInSection>
        <div className={styles.mainTitle}>SPEAKER(S)</div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.container}>
          {data.speakers.map((speaker, index) => (
            <div
              className={styles.box}
              key={index + 1}
              style={{ width: "380px" }}
            >
              <span></span>
              <div
                className={styles.content}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require(`./../../../src/images/Workshops/Speakers/${speaker.img}`)}
                  style={{ borderRadius: "100%", marginBottom: "25px" }}
                />
                <a href={speaker.href}>
                  <h3 className={styles.neon}>{speaker.name}</h3>
                </a>
                <p className={styles.glowCardName}>{speaker.profession}</p>
                <p className={styles.glowCardName}>{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
export default WorkshopDetails;
