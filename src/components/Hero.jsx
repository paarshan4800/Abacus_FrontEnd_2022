import React from "react";
// import { Loader } from ".";

// import icon from "../images/streamline-icon-designer-working@400x400.png";

const Hero = () => {
    return (
    <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            What is Lorem Ipsum <br /> Why do we use it?
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                orem Ipsum is simply dummy text of the printing and typesetting industry.
                <br></br>
                standard dummy text ever since the 1500s. 
                galley of type and scrambled it to make a type spe
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            {/* <img src={icon} alt="Studing"></img> */}
      </div>
      </div>

    );
  };
  
  export default Hero;