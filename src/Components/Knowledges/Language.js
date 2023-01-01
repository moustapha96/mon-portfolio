import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Language extends Component {
  state = {
    languages: [
      { id: 1, value: "CSS", xp: 1.7 },
      { id: 3, value: "PHP", xp: 1.8 },
      { id: 2, value: "JavaScript", xp: 1.5 },
      { id: 4, value: "JAVA 9", xp: 0.8 },
      { id: 5, value: "Python", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "Symfony", xp: 1.6 },
      { id: 2, value: "Angular", xp: 1.8 },
      { id: 3, value: "NodeJs", xp: 1.2 },
      { id: 4, value: "React", xp: 0.5 },
      { id: 6, value: "Laravel", xp: 0.7 },
      { id: 5, value: "Bootstrap", xp: 0.9 },
      { id: 7, value: "Flutter/ionic", xp: 0.5 },
      { id: 9, value: "Spring Boot & Batch", xp: 0.5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="language"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameWork"
        />
      </div>
    );
  }
}

export default Language;
