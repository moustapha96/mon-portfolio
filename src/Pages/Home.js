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
          <p>
            Passionné par l'innovation web, je suis autonome, curieux et motivé.
            Mon expérience de plus d'un an couvre chaque aspect du développement
            d'applications, de la conception à la maintenance, en passant par le
            développement Front-End et BackEnd. Mon engagement envers le travail
            d'équipe se manifeste par ma capacité à résoudre les défis avec
            efficacité tout en encourageant une collaboration harmonieuse.
          </p>
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
