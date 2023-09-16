import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Language extends Component {
  state = {
    languages: [
      { id: 1, value: "CSS", xp: 1.7 },
      { id: 3, value: "PHP", xp: 1.8 },
      { id: 2, value: "JavaScript", xp: 1.5 },
      { id: 4, value: "JAVA", xp: 0.8 },
      { id: 5, value: "Python", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "Symfony", xp: 1.6 },
      { id: 2, value: "Angular", xp: 1.8 },
      { id: 3, value: "NodeJs", xp: 1.2 },
      { id: 4, value: "React", xp: 1.0 },
      { id: 6, value: "Laravel", xp: 0.7 },
      { id: 5, value: "Bootstrap", xp: 1.5 },
      { id: 7, value: "Flutter/ionic", xp: 0.7 },
      { id: 9, value: "Spring Boot & Batch", xp: 1.0 },
    ],
    frontendSkills: [
      { id: 1, value: "Angular (TypeScript)", xp: 1.8 },
      { id: 2, value: "Laravel", xp: 0.7 },
      { id: 3, value: "React", xp: 0.7 },
      { id: 4, value: "HTML, CSS, Bootstrap", xp: 1.7 },
    ],
    backendSkills: [
      { id: 1, value: "JavaScript - Node.js", xp: 1.2 },
      { id: 2, value: "PHP - Symfony", xp: 1.6 },
      { id: 3, value: "Java – Spring Boot", xp: 0.5 },
    ],
    databases: [
      { id: 1, value: "MySQL", xp: 1.5 },
      { id: 2, value: "MongoDB", xp: 0.8 },
      { id: 3, value: "FIREBASE Realtime Database", xp: 0.5 },
    ],
    mobileSkills: [
      { id: 1, value: "Ionic", xp: 0.9 },
      { id: 2, value: "Flutter", xp: 0.5 },
    ],
    apiAndWebService: [
      { id: 1, value: "REST", xp: 1.4 },
      { id: 2, value: "API-PLATFORM", xp: 0.7 },
      { id: 3, value: "JSON", xp: 1.3 },
      { id: 4, value: "XML", xp: 0.6 },
    ],
    architectureAndOtherSkills: [
      { id: 1, value: "MVC (Modèle-Vue-Contrôleur)", xp: 1.6 },
      { id: 2, value: "POO (Programmation Orientée Objet)", xp: 1.5 },
      { id: 3, value: "Python", xp: 0.7 },
      { id: 4, value: "C#", xp: 0.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    const {
      frontendSkills,
      backendSkills,
      databases,
      mobileSkills,
      apiAndWebService,
      architectureAndOtherSkills,
    } = this.state;

    return (
      <div className="languagesFrameworks" style={{ overflowY: "auto" }}>
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Language"
        />
        {/* <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameWork"
        /> */}
        <ProgressBar
          languages={frontendSkills}
          className="frameworksDisplay"
          title="Compétences en Front-End"
        />
        <ProgressBar
          languages={backendSkills}
          className="frameworksDisplay"
          title="Compétences en Back-End"
        />
        <ProgressBar
          languages={databases}
          className="frameworksDisplay"
          title="Databases"
        />
        <ProgressBar
          languages={mobileSkills}
          className="frameworksDisplay"
          title="Compétences en Mobile"
        />
        <ProgressBar
          languages={apiAndWebService}
          className="frameworksDisplay"
          title="Api And Web Service"
        />
        <ProgressBar
          languages={architectureAndOtherSkills}
          className="frameworksDisplay"
          title="Architecture et Autre Compétences"
        />
      </div>
    );
  }
}

export default Language;
