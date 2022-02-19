import React from "react";
import Card from "../../components/Card/Card";
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.bodyDb}>
      {/* <div className={styles.profileBar}>
       HI
      </div> */}
      <div className={styles.content} >
       <div className={styles.title}>
         <h1>Registered Events</h1>
       </div>
       <div className={styles.displayArea}>
        <Card title={"hi"} body={"sdfghjk"}/>
        <Card title={"hi"} body={"sdfghjk"}/>
        <Card title={"hi"} body={"sdfghjk"}/>
        <Card title={"hi"} body={"sdfghjk"}/>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
