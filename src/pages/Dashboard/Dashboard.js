import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import styles from "./Dashboard.module.css";
import { useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const AboutusCard = ({ title, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-4 m-3 cursor-pointer hover:shadow-xl">
      <div className="ml-5 flex flex-row flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.body}>
      <div className={styles.profileBar}>
        {/* <AboutusCard
          title="Hey, Joe asdasd asdasd #4101"
          subtitle="mailid04@gmail.com and other information goes here."
        /> */}
        Heyy User4101!
      </div>
      <div className={styles.content}>
        {!isLoading && (
          <>
            <div className={styles.loading}>
              <div className={styles.loader}></div>
            </div>
          </>
        )}
        {isLoading && (
          <>
            <div className={styles.title}>
              <h1>Registered Events</h1>
            </div>
            <div className={styles.displayArea}>
              <PreviewCard
                title={"Eventasdnk Name"}
                body={"Description of the event goes here ig..."}
              />
              <PreviewCard
                title={"Event Name"}
                body={"Description of the event goes here ig..."}
              />
              <PreviewCard
                title={"Event Name"}
                body={"Description of the event goes here ig..."}
              />
              <PreviewCard
                title={"Event Name"}
                body={"Description of the event goes here ig..."}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
