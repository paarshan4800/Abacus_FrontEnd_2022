import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";
// import styles from "./Developers.module.css";
import Dev from "../../components/Dev/Dev";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import { developerDetails } from "./details";
export default function Developers() {
  //console.log(process.env);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Heading text="Developers and Design Team" fontSize="1.9rem" />
      </div>
      <div className="container m-auto d-flex justify-content-center pt-5 align-self-center pb-5">
        <div className="row d-flex justify-content-center align-self-center pb-5">
          {developerDetails.map((item, index) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                <FadeInSection>
                  <Dev props={item} />
                </FadeInSection>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
