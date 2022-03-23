import React from "react";


import styles from './about.module.css'



const Aboutus = () => {
  const INFO = [
    {
      title: "Abacus",
      content:"ABACUS is the annual intercollege symposium of the Department of Computer Science and Engineering conducted by Computer Science and Engineering Association (CSEA), College of Engineering Guindy. It is an event where people from multiple colleges demonstrate their technical prowess to win exciting prizes and internships.",
      image: "ceg.png",
    },
    {
      title: "CSEA",
      content:
        "The Computer Science and Engineering Association, CEG is a team of students and faculty members. We perform multiple activities throughout the year, the most notable ones being SYNC (intra college symposium), periodic coding contests to encourage students to code more and weekly classes for juniors for subjects they find difficult, placement assistance and competitive coding. CSEA is a forum of dedicated members who want to inculcate interest and good programming practices amongst the students.",
      image: "ctf_full.png",
    },
  
    {
      title: "CEG",
      content:
        "Located at the Heart of Chennai, is our very own College of Engineering Guindy, a dream and desire that students all across Tamil Nadu aspire to touch. Founded in 1794, CEG holds laurels of being amongst the top ten institutions in the country, with a rich history spanning over 225 years. Living up to its motto of 'PROGRESS THROUGH KNOWLEDGE', it has been at the fore with it’s cutting-edge research, technology and innovation in shaping the world. True to its esteem, even today CEG stands as a beacon of light to students who wish to make a change in the world.",
      image: "kurukshetra.png",
    },
  ];
    return (
      <div className={`${styles.about_root}`}>
    
      <div className={`${styles.wrapper}`}>
      <div name="main" className={`${styles.content_wrapper}`}>
      
      <h1 className={`${styles.heading}`}>About Us</h1>
          {INFO.map((item, index) => {
            return (
              <div
                
                key={index}
                className={`${styles.content_container}`}
              >
                <div
                  
                  className={`${styles.image_box}`}
                >
                  <img
                    alt={`${item.title}`}
                  />
                </div>
                <div className={`${styles.text_box}`}>
                <h1 className={`${styles.subheading}`}>{item.title}</h1>
                  <p className={`${styles.content}`}>{item.content}</p>

                </div>
              </div>
            );
          })}
        </div>
        </div>
       </div>
    );

};

export default Aboutus;