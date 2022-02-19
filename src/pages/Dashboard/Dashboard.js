import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.body}>
      <div className={styles.profileBar}>
       HI
      </div>
      <div className={styles.content} >
      <div className={styles.title}>
         <h1>Registered Events</h1>
       </div>
       <div className={styles.displayArea}>
        <PreviewCard title={"hi"} body={"sdfghjk"}/>
        <PreviewCard title={"hi"} body={"sdfghjk"}/>
        <PreviewCard title={"hi"} body={"sdfghjk"}/>
        <PreviewCard title={"hi"} body={"sdfghjk"}/>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
