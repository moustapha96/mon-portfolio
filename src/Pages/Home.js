import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1> AL HUSSEIN KHOUMA </h1>
          <h2>Dev FUll stack</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Teclecharger cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
