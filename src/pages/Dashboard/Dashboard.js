import React from "react";
import Card from "../../components/Card/Card";
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.bodyDb}>
      <div style={{height:"2000px", width:"100%"}}>
        <Card title={"LOREM IPSUM"} 
          body={"Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh."}/>
        <Card title={"LOREM IPSUM"} 
          body={"Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh."}/>
        <Card title={"LOREM IPSUM"} 
          body={"Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh."}/>
      </div>
    </div>
  );
};

export default Dashboard;
