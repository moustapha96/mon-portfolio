import React from "react";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3> {props.title} </h3>
      <div className="years">
        <span> Années d'experience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {props.languages.map((language) => {
          let xpyear = 2;
          let progressbar = (language.xp / xpyear) * 100 + "%";

          return (
            <div key={language.id} className="languagesList">
              <li> {language.value} </li>
              <div className="progressBar" style={{ width: progressbar }}>
                {" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
