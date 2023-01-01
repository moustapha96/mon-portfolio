import React from "react";
import Experience from "../Components/Knowledges/Experience";
import Hobbies from "../Components/Knowledges/Hobbies";
import Language from "../Components/Knowledges/Language";
import OtherSkill from "../Components/Knowledges/OtherSkill";
import Navigation from "../Components/Navigation";

const KnowLedge = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Hobbies />
        <Experience />
        <OtherSkill />
        <Language />
      </div>
    </div>
  );
};

export default KnowLedge;
