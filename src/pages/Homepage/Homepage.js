
import React, { Component } from "react";
import styles from "./Homepage.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "bootstrap/dist/css/bootstrap.min.css";

//NeonButton
import GlowCard from "../../components/GlowCard/GlowCard";
import Landing from "../../components/Landing/Landing";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";
import { Navbar, Hero, Aboutus, Footer } from "../../components";


function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
   
  
    return (
      <>
        <Landing />

        {/* Child Class */}

        <section id="#">
          <div
            className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`}
          >
          <div className={`${styles.box}`}>
          <div  >
          <img
              src={`${process.env.PUBLIC_URL}/images/about-us/abacus logo sponsors page.png`}
              alt=""
              style={{
                width: "300px",
                height: "310px",
                margin: "auto",
              }}
            />

          </div>
           

            {/* Hidden Images */}
            <div className={``}>
            <div className="container-fluid center  ml-sm-2  justify-content-center align-self-center pb-5 maxWidth">
              <div className={` row row-cols-md-3 row-cols-sm-3 row-cols-xs-3 justify-content-center align-self-center`}>
                <div className=" col mt-5   text-center">
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
                <div className=" mt-5   col text-center">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={3} redraw={true} suffix=" +">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                  </div>
                  <Heading1 text="Workshops" fontSize="20px" />
                </div>
           
                <div className="col text-center mt-5">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={50} redraw={true} suffix=" K+">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                  </div>
                  <Heading1 text="Prize Money" fontSize="20px" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            </div>
            </div>
          </div>
        </section>

        {/* Child Class */}
        {/* <div className={`${styles._homepage} ${styles._responsive} ${styles.bg}`}>
        
           <div class="container justify-content-center align-self-center ">
             <div class="row justify-content-center align-self-center">
               <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                 <FadeInSection>
               <div class="embed-responsive embed-responsive-21by9">
          <iframe src="https://www.youtube.com/embed/W0eDjWr3ATI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> </FadeInSection>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
               <GlowCard props={{degree: "25deg",title:"Abacus'21",content:"CSEA takes immense pleasure in organizing Abacus’21. This version is going to be one of its kind - a symposium completely organized online. We operate with a vision – to bring together students from multiple engineering colleges globally and give them a chance to demonstrate their technical prowess, ignite their passion for learning and to win exciting prizes and internships. Grab this opportunity and win cash prizes, Intern Opportunities , T shirts and many surprising prizes."}} />    
                 </div>
             </div>
           </div>
            </div> */}

        <div className={`${styles._homepage} ${styles.bg}`}>
          <div className={`${styles._about_event}`}>
            <div className={`${styles._glowCardDiv}`}>
              <GlowCard
                props={{
                  title: "Abacus'22",
                  list: [
                    "CSEA takes immense pleasure in organizing Abacus’22. This version is going to be one of its kind - a symposium completely online. We operate with a vision – to bring together students from multiple engineering colleges globally and give them a chance to demonstrate their technical prowess, ignite their passion for learning and to win exciting prizes and internships.",
                    "Grab this opportunity and win cash prizes, Intern opportunities, Tshirts and many more prizes.",
                  ],
                }}
              />
            </div>

          </div>
        </div>

        {/* Child Class */}

        <div className={`${styles._homepage} ${styles.bg1} ${styles._responsive}`}>
          <div className="text-center mt-0">
            <Heading text="Sponsors" fontSize="40px" />
          </div>
          <div className="container-fluid mx-auto d-flex justify-content-center align-self-center mt-0">
            <div className="m-auto row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-xs-1  d-flex justify-content-center align-self-center">
              <div class="col text-center">
                <Heading text="Title Sponsors" fontSize="30px" />
                <div class="row row-cols-lg-2 d-flex justify-content-center align-self-center ">
                  <div className="col text-center">

                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/motorq.svg`}
                      className={`${styles.img2}`}
                      alt="Motorq"
                      
                    />

                  </div>

                  <div className="col text-center pb-4">

                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-us/visa_modified.svg`}
                      className={`${styles.img2}`}
                      alt="Visa"
                    />

                  </div>

                </div>

              </div>
             
                <div class="m-auto row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-xs-1  d-flex justify-content-center align-self-center">
                  <div class="col text-center ">
                    <Heading text="Merchandise Sponsors" fontSize="28px" />
                    <div class="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">

                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/Career Crafter.jpg`}
                          className={`${styles.img4}`}
                          alt="Career Crafter"
                        />


                      </div>

                    </div>
                  </div>
                  <div class="col text-center ">
                    <Heading text="Workshops Sponsors" fontSize="28px" />
                    <div class="row d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">

                        <img
                          src={`${process.env.PUBLIC_URL}/images/about-us/Tamilpreneur Logo.png`}
                          className={`${styles.img}`}
                          alt="Tamilpreneur"
                        />


                      </div>

                    </div>
                  </div>
                  <div class="col text-center ">
                    <Heading text="Platform Sponsors" fontSize="28px" />
                    <div class="row  d-flex justify-content-center align-self-center">
                      <div className="col text-center mt-3 pb-3 d-flex justify-content-center align-self-center ">

                        <img
                          src="https://codechef_shared.s3.amazonaws.com/download/New%20CodeChef%20Logo/cc-logo.svg"
                          className={`${styles.img}`}
                          alt="Codechef"
                        />


                      </div>

                    </div>
                  </div>
                  <div class="col text-center">
                    <Heading text="Internship Sponsors" fontSize="28px" />
                    <div class="row row-cols-lg-2 d-flex justify-content-center align-self-center  pb-5 pt-4">
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
            </div><div></div></div>

      

        {/* Child Class */}

        {/* Dev Section */}

      

      </>
    );
  }
}

export default Homepage;