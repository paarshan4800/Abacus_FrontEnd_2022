import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import styles1 from "./Landing.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {Footer} from '../../components/'

//NeonButton
import Sphere from "../../components/Sphere/Sphere";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";

const Homepage = (props) => {
  return (
    <>
      <main>
        <section className={`${styles.one} ${styles.a} ${styles.land}`}>
          <div className={styles1.scene}>
            <div className={styles1.space}>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles1.comet}>
                <div className={styles1.comet_inner}></div>
              </div>
            </div>
            <div className={styles1.ufo_contain}>
              <div class={styles1.tractor_beam}></div>

              <div className={styles1.ufo_lower}>
                <div className={styles1.lights}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles1.ufo_upper}>
                <div className={styles1.cockpit}>
                  <div className={styles1.glass}></div>
                  <div className={styles1.alien}>
                    <div className={styles1.eye}></div>
                  </div>
                  <div className={styles1.glass_edge}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.landing_heading} `}>
            <h1 className={`${styles.head}`}> ABACUS '22</h1>
            <h2 className={`${styles.date}`}>April 28, 29 and 30</h2>
          </div>

          <Link to="/homepage##" spy="true" smooth={true}>
            {" "}
          </Link>
          <FontAwesomeIcon icon="fa-regular fa-angles-down" />
        </section>
        <section className={`${styles.one} ${styles.b}`}>
          <div className={`${styles.About_Abacus} ${styles.bg}`}>
            <div className={`${styles.left_container}`}>
              <div className={`${styles.left_content}`}>
                <div className={`${styles.logo}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-us/ABACUS22LOGO-03.png`}
                    alt=""
                    style={{
                      width: "400px",
                      height: "370px",
                      margin: "auto",
                    }}
                  />

                  <div className={styles.eve}>
                    <div className={styles.top}>
                      <div className={`${styles.one_count}`}>
                        <div className={`${styles.countup}`}>
                          <CountUp
                            className={`${styles.font}`}
                            start={0}
                            end={10}
                            redraw={true}
                            suffix=" +"
                          >
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </div>{" "}
                        <Heading1 text="Events" fontSize="15px" />
                      </div>

                      <div className={`${styles.one_count}`}>
                        <div className={`${styles.countup}`}>
                          <CountUp start={0} end={3} redraw={true} suffix=" +">
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </div>{" "}
                        <Heading1 text="Workshops" fontSize="15px" />
                      </div>
                    </div>

                    <div className={styles.bottom}>
                      <div className={`${styles.one_count}`}>
                        <div className={`${styles.countup}`}>
                          <CountUp
                            start={0}
                            end={90}
                            redraw={true}
                            suffix=" K+"
                          >
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </div>{" "}
                        <Heading1 text="Cash Prize" fontSize="15px" />
                      </div>
                      <div className={`${styles.one_count}`}>
                        <div className={`${styles.countup}`}>
                          <CountUp start={0} end={1} redraw={true}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </div>{" "}
                        <Heading1 text="Hackathon" fontSize="15px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.right_container}`}>
              <div key={1} className={cx(styles.maindiv, styles.maindiv1)}>
                <div className={styles.card}>
                  <h1 className={`${styles.heading}`}>Abacus '22</h1>
                  <p className={`${styles.paragraph} mt-1`}>
                    CSEA takes immense pleasure in organizing Abacus'22. This
                    version is going to be one of its kind - a symposium
                    completely online. We operate with a vision – to bring
                    together students from multiple engineering colleges
                    globally and give them a chance to demonstrate their
                    technical prowess, ignite their passion for learning and to
                    win exciting prizes and internships.
                    <br></br> <br></br>
                    Grab this opportunity and win cash prizes, Intern
                    opportunities, T shirts and many more prizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.sponsors}`}>
          <div className="container-fluid">
            <div className="text-center mb-5 pb-5">
              <Heading text="Sponsors" fontSize="3.5rem" />
            </div>

            <div className="col text-center mb-3">
              <Heading text="Title Sponsors" fontSize="1.7rem" />
              <div className=" d-flex justify-content-center align-self-center ">
                <div className="text-center pb-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-us/motorq.svg`}
                    className={`${styles.img2}`}
                    alt="Motorq"
                  />
                </div>
              </div>
            </div>

            <div class="container">
              <div className="col text-center mb-5 ">
                <Heading text="Internship Partners" fontSize="1.7rem" />
              </div>
              <div class="row mb-5">
                <div class="col-xl-3 col-sm-6 col-md-6">
                  <div className="col text-center ">
                    <div className="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/unnamed.jpg`}
                          className={`${styles.img4}`}
                          alt="Career Crafter"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6  col-md-6">
                  <div className="col text-center ">
                    <div className="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/COSGrid_Network.jpg`}
                          className={`${styles.img4}`}
                          alt="Career Crafter"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-md-6">
                  {" "}
                  <div className="col text-center ">
                    <div className="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/Lumel-logo-Orange.png`}
                          className={`${styles.img1}`}
                          alt="Career Crafter"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-3 col-md-6 ">
                  {" "}
                  <div className="col text-center ">
                    <div className="d-flex justify-content-center align-self-center">
                      <div className="text-center mt-3 pb-3  justify-content-center align-self-center ">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/acl_logo.png`}
                          className={`${styles.img4} bg-white px-2 py-2`}
                          alt="Alpha Cloud Labs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div className="m-auto row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-xs-1  d-flex justify-content-center align-self-center">
              <div className="col text-center ">
                <div className="row  d-flex justify-content-center align-self-center">
                  <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/Lumel-logo-Orange.png`}
                      className={`${styles.img1}`}
                      alt="Career Crafter"
                    />
                  </div>
                </div>
              </div>
              <div className="col text-center ">
                <div className="row d-flex justify-content-center align-self-center">
                  <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/COSGrid_Network.jpg`}
                      className={`${styles.img4}`}
                      alt="Career Crafter"
                    />
                  </div>
                </div>
              </div>
              <div className="col text-center ">
                <div className="row  d-flex justify-content-center align-self-center">
                  <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/unnamed.jpg`}
                      className={`${styles.img4}`}
                      alt="Career Crafter"
                    />
                  </div>
                </div>
              </div>

              <div className="col text-center ">
                <div className="row  d-flex justify-content-center align-self-center">
                  <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/acl_logo.png`}
                      className={`${styles.img1} bg-white px-2 py-2`}
                      alt="Career Crafter"
                    />
                  </div>
                </div>
              </div>
            </div> */}

            

            <div className="col text-center mt-5 p-5 mb-1">
              <Heading
                text="Knowledge Partners"
                fontSize="1.7rem"
                className="text-center mt-5 p-5"
              />

              <div className="m-auto mt-5  p-5 row   d-flex justify-content-center align-self-center">
                <div className="col text-center  ">
                  <div className="row  d-flex justify-content-center align-self-center">
                    <div className="col col-sm-12 text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/2IIMLogo.png`}
                        className={`${styles.img4}`}
                        alt="Career Crafter"
                      />
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div className="row   d-flex justify-content-center align-self-center">
                    <div className="col col-sm-12 text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/techz.png`}
                        className={`${styles.img4}`}
                        alt="Career Crafter"
                      />
                    </div>
                  </div>
                </div>

                <div className="col text-center ">
                  <div className="row  d-flex justify-content-center align-self-center">
                    <div className="col col-sm-12 text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/iip.png`}
                        className={`${styles.img4}`}
                        alt="IIP"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>










            <div class="row container m-auto p-5 ">
              <div class="col-xl-6 col-sm-12 mb-5 text-center">
                <Heading
                  text="Hack partner"
                  fontSize="1.7rem"
                  className="text-center mt-5 p-5"
                />
                 <div className="col text-center ">
                  <div className="row  mt-5 d-flex justify-content-center align-self-center">
                    <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/GitHub_Logo_White.png`}
                        className={`${styles.img1}`}
                        alt="Career Crafter"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-sm-12 text-center">
                <Heading
                  text="Promotional partner
                  "
                  fontSize="1.7rem"
                  className="text-center mt-5 p-5"
                />
                 <div className="col text-center ">
                  <div className="row  mt-5 d-flex justify-content-center align-self-center">
                    <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/ACM.png`}
                        className={`${styles.img21}`}
                        alt="Career Crafter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center ">
              <Heading
                text="Platform and Workshop Sponsor"
                fontSize="1.7rem"
                className="text-center mt-5 p-5"
              />
              <div className="col text-center ">
                <div className="row mt-5 d-flex justify-content-center align-self-center">
                  <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/CodingNinjasLogo.jpg`}
                      className={`${styles.img4}`}
                      alt="Coding Ninjas Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer/> */}
    </>
  );
};

export default Homepage;
