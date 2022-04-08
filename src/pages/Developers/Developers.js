import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";
import styles from "./Developers.module.css";
import Dev from "../../components/Dev/Dev";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import { developerDetails } from "./details";
export default function Developers() {
  return(
    <div>
    <Heading text="Developers and Design Team" fontSize="3rem" className="text-center mt-5 p-5"/>
      <div className="container-fluid m-auto d-flex justify-content-center pt-5 align-self-center pb-5">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5  d-flex justify-content-center align-self-center pb-5">
              {developerDetails.map((item, index)=> {return (
                <div className="col   pb-5 ">
                <FadeInSection>
                  <Dev
                    props={item}
                  /> 
                </FadeInSection>
              </div>
              )})}
            </div>
      </div>
    </div>
  )
}
