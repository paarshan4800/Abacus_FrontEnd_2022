import styles from "./Cart.module.css";
import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import { useState } from "react";
import cx from "classnames";
import tech from "./../../images/tech.jpeg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Loading from "../Loading/Loading";
import GlassButton from "../../components/GlassButton/GlassButton";
import ReactCardFlip from "react-card-flip"

const Cart = () => {
  let CartList = [
    {
      id: 1,
      refName: "tenet",
      name: "Tenet",
      img: tech,
      type: "tech-events",
    },
    {
      id: 2,
      refName: "imagenation",
      name: "Imagenation",
      img: tech,
      type: "non-tech-events",
    },
    {
      id: 3,
      refName: "code-for-crown-olpc",
      name: "Code for crown",
      img: tech,
      type: "tech-events",
    },
    {
      id: 4,
      refName: "job-readiness",
      name: "Job Readiness",
      img: tech,
      type: "workshops",
    },
    {
      id: 5,
      refName: "graphic-traffic",
      name: "Graphic Traffic",
      img: tech,
      type: "non-tech-events",
    },
    {
      id: 6,
      refName: "cloud-computing",
      name: "Cloud Computing",
      img: tech,
      type: "workshops",
    },
  ];

  const [flip, setFlip] = useState(false);

  return (
    <div className="body">
      
      <ReactCardFlip
				isFlipped={flip}
				flipDirection="horizontal"
				infinite="1"
				flipSpeedBackToFront="0.9"
				flipSpeedFrontToBack="0.9"
			>
				<div
					className="friendCard friendCard__front"
					onMouseEnter={() => setFlip(true)}
				>
					<div className="friendCard__frontTop">
				
						<h3>sdfgh</h3>
						<p>cvbnm</p>
					</div>
					<div className="friendCard__frontBottom">
						<div>
							<p>Followers</p>
							<p>123</p>
						</div>
						<div>
							<p>Following</p>
							<p>123</p>
						</div>
						<div>
							<p>Posts</p>
							<p>123</p>
						</div>
					</div>
				</div>
				<div
					className="friendCard friendCard__back"
					onMouseLeave={() => setFlip(false)}
				>
					<div className="friendCard__backSkills">
						<h4>Favourite Languages:</h4>
						
					</div>

					<div className="friendCard__backAbout">
						<h4>About :</h4>
						<p>dgsrtg</p>
					</div>
				</div>
			</ReactCardFlip>
    
    </div>
    );
};

export default Cart;
