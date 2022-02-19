import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const AboutusCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Aboutus = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          About us
          <br />
          Just to know us better!
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <AboutusCard
          color="bg-[#2952E3]"
          title="CSEA"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <AboutusCard
          color="bg-[#8945F8]"
          title="Abacus"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <AboutusCard
          color="bg-[#F84550]"
          title="CEG"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  </div>
);

export default Aboutus;