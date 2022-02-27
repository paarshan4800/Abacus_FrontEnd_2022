import styles from "./Cart.module.css";
import React from "react";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import { useState } from "react";
import cx from "classnames";
import tech from "./../../images/tech.jpeg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Loading from "../Loading/Loading";
import GlassButton from "../../components/GlassButton/GlassButton";

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

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
    // style={{
    //   backgroundImage: `url(${background})`,
    //   backgroundSize: "cover",
    //   height: "100vh",
    //   color: "#f5f5f5",
    // }}
    >
      <div className={styles.profileBar}>Hi user4101!</div>

      <div className={styles.wrapper}>
        {isLoading && <Loading />}

        {!isLoading && CartList == null && (
          <div>
            <div className={styles.message}>
              <p>
                Cart is empty.
                <br />
                Add items to cart for registration.
              </p>
            </div>
            <Link to={`/events`}>
              <div>
                <GlassButton title="Events" />
              </div>
            </Link>
            <Link to={`/workshops`}>
              <div>
                <GlassButton title="Workshops" />
              </div>
            </Link>
          </div>
        )}

        {!isLoading && CartList != null && (
          <>
            <div className={cx(styles.title, styles.heading)}>Cart</div>
            {CartList.map((event) =>
              event.type != "workshops" ? (
                event.id % 3 == 2 ? (
                  <Link to={`/events/${event.type}/${event.refName}`}>
                    <div
                      key={event.id}
                      className={cx(styles.maindiv, styles.maindiv2)}
                    >
                      <img src={event.img} alt="1" />
                      <div className={styles.title}>{event.name}</div>
                    </div>
                  </Link>
                ) : event.id % 3 == 1 ? (
                  <Link to={`/events/${event.type}/${event.refName}`}>
                    <div
                      key={event.id}
                      className={cx(styles.maindiv, styles.maindiv1)}
                    >
                      <img src={event.img} alt="1" />
                      <div className={styles.title}>{event.name}</div>
                    </div>
                  </Link>
                ) : (
                  <Link to={`/events/${event.type}/${event.refName}`}>
                    <div
                      key={event.id}
                      className={cx(styles.maindiv, styles.maindiv3)}
                    >
                      <img src={event.img} alt="1" />
                      <div className={styles.title}>{event.name}</div>
                    </div>
                  </Link>
                )
              ) : event.id % 3 == 2 ? (
                <Link to={`/workshops/${event.refName}`}>
                  <div
                    key={event.id}
                    className={cx(styles.maindiv, styles.maindiv2)}
                  >
                    <img src={event.img} alt="1" />
                    <div className={styles.title}>{event.name}</div>
                  </div>
                </Link>
              ) : event.id % 3 == 1 ? (
                <Link to={`/workshops/${event.refName}`}>
                  <div
                    key={event.id}
                    className={cx(styles.maindiv, styles.maindiv1)}
                  >
                    <img src={event.img} alt="1" />
                    <div className={styles.title}>{event.name}</div>
                  </div>
                </Link>
              ) : (
                <Link to={`/workshops/${event.refName}`}>
                  <div
                    key={event.id}
                    className={cx(styles.maindiv, styles.maindiv3)}
                  >
                    <img src={event.img} alt="1" />
                    <div className={styles.title}>{event.name}</div>
                  </div>
                </Link>
              )
            )}
            <GlassButton title="P a y" />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
