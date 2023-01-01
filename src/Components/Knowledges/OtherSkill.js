import React from "react";

const OtherSkill = () => {
  return (
    <div className="otherSkills">
      <h3>Autres competences</h3>
      <div className="list">
        <ul>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> Odoo{" "}
          </li>
          <li>
            {" "}
            <i class="fa fa-check-square" aria-hidden="true"></i> GitHub
          </li>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> Méthodes Agiles
          </li>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> CMS/WORDPRESS
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> PowerBI{" "}
          </li>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> Eclispe{" "}
          </li>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> Docker{" "}
          </li>
          <li>
            {" "}
            <i className="fas fa-check-square"></i> Microsoft{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkill;
