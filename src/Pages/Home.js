// import React from "react";
// import Navigation from "../Components/Navigation";

// const Home = () => {
//   return (
//     <div className="home">
//       <Navigation />
//       <div className="homeContent">
//         <div className="content">
//           <h1> AL HUSSEIN KHOUMA </h1>
//           <h2>Dev FUll stack</h2>
//           <p>
//             Passionné par l'innovation web, je suis autonome, curieux et motivé.
//             Mon expérience de plus d'un an couvre chaque aspect du développement
//             d'applications, de la conception à la maintenance, en passant par le
//             développement Front-End et BackEnd. Mon engagement envers le travail
//             d'équipe se manifeste par ma capacité à résoudre les défis avec
//             efficacité tout en encourageant une collaboration harmonieuse.
//           </p>
//           <div className="pdf">
//             <a href="./media/CV.pdf" target="_blank">
//               Teclecharger cv
//             </a>

//             <a
//               href="./media/CV.pdf"
//               style={{ margin: "2%" }}
//               onClick={this.handleExit}
//             >
//               A propos
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  const [showAboutFunction, setShowAboutFunction] = useState(false);

  const handleAboutClick = () => {
    setShowAboutFunction(!showAboutFunction);
  };

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1> AL HUSSEIN KHOUMA </h1>
          <h2>Dev FUll stack</h2>
          <p className="text-content">
            Passionné par l'innovation web, je suis autonome, curieux et motivé.
            Mon expérience de plus d'un an couvre chaque aspect du développement
            d'applications, de la conception à la maintenance, en passant par le
            développement Front-End et BackEnd. Mon engagement envers le travail
            d'équipe se manifeste par ma capacité à résoudre les défis avec
            efficacité tout en encourageant une collaboration harmonieuse.
          </p>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger CV
            </a>

            <a style={{ margin: "2%" }} onClick={handleAboutClick}>
              À propos
            </a>

            {showAboutFunction && (
              <div className="showInfos">
                <div className="infosContent">
                  <div className="head">
                    <h2>A propos de moi</h2>
                  </div>
                  <div className="text">
                    <p>
                      En tant que jeune développeur web, je suis à la recherche
                      d'une opportunité professionnelle après avoir consacré 8
                      mois au télétravail au sein de l'agence web SUNUCODE.
                      Cette expérience significative m'a permis de développer
                      une véritable autonomie et une confiance en mes capacités,
                      même en étant fraîchement diplômé en licence informatique.
                      Elle a joué un rôle crucial dans la consolidation de mes
                      acquis universitaires et m'a offert l'occasion d'élargir
                      considérablement mon éventail de compétences.
                      <br />
                      Actuellement, je saisis l'opportunité qui m'est offerte
                      pour poursuivre mon apprentissage et explorer de nouvelles
                      technologies. Mon attention se porte particulièrement sur
                      l'expansion de mes compétences en développement mobile,
                      notamment à travers la maîtrise de Flutter et Ionic.
                      Parallèlement, je m'investis également dans l'amélioration
                      de ma maîtrise des frameworks JavaScript et Java. Cette
                      démarche reflète ma volonté constante de rester à la
                      pointe des avancées technologiques et de diversifier mon
                      expertise pour répondre aux besoins évolutifs du secteur..
                      <br />
                      Après cette première expérience de stage, j'ai enchaîné
                      avec un second stage chez MASCO, qui s'est étendu sur une
                      période enrichissante d'1 an et 3 mois. Ce stage
                      s'inscrivait dans le contexte de mon projet de Master 2,
                      orienté vers l'informatique avec une spécialisation en
                      génie logiciel. L'objectif de cette démarche était
                      l'achèvement de mon diplôme de Master 2 en informatique,
                      consolidant ainsi ma compréhension et mon expertise dans
                      le domaine du génie logiciel.
                      <br />
                      En outre, mon autonomie se démarque comme l'une de mes
                      principales forces. Mon expérience m'a conféré la
                      compétence de prendre des décisions éclairées dans le but
                      d'optimiser les projets de manière exhaustive, afin de
                      répondre au mieux aux attentes du client. Mon engagement
                      envers l'optimisation du code est une de mes priorités, et
                      je veille à conduire les projets de bout en bout avec
                      rigueur. J'ai forgé une habitude de travail en autonomie,
                      assumant pleinement la responsabilité de mes choix et de
                      mes actions. Cette qualité se manifeste particulièrement
                      dans ma capacité à superviser tous les aspects techniques
                      de la création d'une application, englobant aussi bien la
                      phase de conception que le développement Front-End et
                      Back-End, et jusqu'à la gestion continue lors de la phase
                      de maintenance.
                    </p>
                  </div>
                  <div className="button return" onClick={handleAboutClick}>
                    <span> Quittez </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
