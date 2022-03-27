import React, { Component } from "react";
import styles from "./Homepage.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from 'classnames'
import {Footer} from '../../components/'


//NeonButton
import Sphere from "../../components/Sphere/Sphere";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";


const Homepage = (props)=>{

  
    return (

       
      <>
     <main>
  <section className={`${styles.one} ${styles.a} ${styles.land}` }>
  
      
  <div className={`${styles.landing_heading} `} >
                <h1 className={`${styles.head}`} > ABACUS   '22</h1>
                <h2 className={`${styles.date}`}>April 28, 29 and 30</h2>
            </div>

            
 
  

















  















  
  </section>
  <section className={`${styles.one} ${styles.b}` }>


  <div className={`${styles.About_Abacus} ${styles.bg}`}>
          <div className={`${styles.left_container}`}>
            <div className={`${styles.left_content}`}>
              <div className={`${styles.logo}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/about-us/ab.png`}
                  alt=""
                  style={{
                    width: "330px",
                    height: "340px",
                    margin: "auto",
                  }}
                />
               

                <div className = {styles.eve}>


                <div className = {styles.top}>

                <div className={`${styles.one_count}`}>
                <div className={`${styles.countup}`}>
                    <CountUp start={0} end={7} redraw={true} suffix=" +">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>{" "}
                   <Heading1 text="Events" fontSize="20px" />
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
                   <Heading1 text="Workshops" fontSize="20px" />
                </div>

                </div>

                <div className = {styles.bottom}>

                <div className={`${styles.one_count}`}>
                <div className={`${styles.countup}`}>
                    <CountUp start={0} end={90} redraw={true} suffix=" K+">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>{" "}
                   <Heading1 text="Cash Prize" fontSize="20px" />

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
                   <Heading1 text="Hackathon" fontSize="20px" />
               </div>
                   
                </div>
                </div>
                
               
              </div>
              
            </div>
          </div>
          <div className={`${styles.right_container}`}>
         
            <div
                key={1}
                className={ cx(styles.maindiv,styles.maindiv1) } 
              >
            
            <div className={styles.card}>

                  <h1 className={`${styles.heading}`}>Abacus '22</h1>
              <p className={`${styles.paragraph} mt-1`}>
                CSEA takes immense pleasure in organizing Abacus'22. This
                version is going to be one of its kind - a symposium completely
                online. We operate with a vision – to bring together students
                from multiple engineering colleges globally and give them a
                chance to demonstrate their technical prowess, ignite their
                passion for learning and to win exciting prizes and internships.
                <br></br> <br></br>
                Grab this opportunity and win cash prizes, Intern opportunities,
                T shirts and many more prizes.
              </p>
              </div>
            
            

            </div>
          </div>
        </div>




















  </section>



  <section className={`${styles.one}` }>

  <div>
       
          <div className={`${styles.blur}`}>
            <div className="text-center mb-20">
              <Heading text="Sponsors" fontSize="60px"  />
              
             
            </div>
            <div className="container-fluid mx-auto d-flex justify-content-center align-self-center mt-0">
              <div className="m-auto row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-xs-1  d-flex justify-content-center align-self-center">
                <div className="col text-center">
                  <Heading text="Title Sponsors" fontSize="30px" />
                  <div className="row row-cols-lg-2 d-flex justify-content-center align-self-center ">
                    <div className="col text-center pb-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/motorq.svg`}
                        className={`${styles.img2}`}
                        alt="Motorq"
                      />
                    </div>

                    <div className="col text-center pb-5">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about-us/visa_modified.svg`}
                        className={`${styles.img2}`}
                        alt="Visa"
                      />
                    </div>
                  </div>
                </div>

                <div className="m-auto row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-xs-1  d-flex justify-content-center align-self-center">
                  <div className="col text-center ">
                    <Heading text="Merchandise Sponsors" fontSize="28px" />
                    <div className="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/Career Crafter.jpg`}
                          className={`${styles.img4}`}
                          alt="Career Crafter"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col text-center ">
                    <Heading text="Workshops Sponsors" fontSize="28px" />
                   
                    <div className="row d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/Tamilpreneur Logo.png`}
                          className={`${styles.img}`}
                          alt="Tamilpreneur"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col text-center ">
                    <Heading text="Platform Sponsors" fontSize="28px" />
                    <div className="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">
                        <img
                          src="https://codechef_shared.s3.amazonaws.com/download/New%20CodeChef%20Logo/cc-logo.svg"
                          className={`${styles.img}`}
                          alt="Codechef"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col text-center">
                    <Heading text="Internship Sponsors" fontSize="28px" />
                    <div className="row row-cols-lg-2 d-flex justify-content-center align-self-center  pb-5 pt-4">
                      <div className="col text-center pt-5 mb-5">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/amazon.jpeg`}
                          className={`${styles.img1}`}
                          alt="Amazon"
                        />
                      </div>
                      <div className="col text-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/Saj.jpeg`}
                          className={`${styles.img5}`}
                          alt="YouthInU"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          </div> 
  </section>


  
</main>
<Footer/>
      </>
    );
  }


export default Homepage;
