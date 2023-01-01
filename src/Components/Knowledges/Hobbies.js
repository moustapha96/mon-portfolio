import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Interêts</h3>

      <ul>
        <li className="hobby">
          {" "}
          <i className="fas fa-futbol"></i> <span> Foot-Ball(sport) </span>{" "}
        </li>

        <li className="hobby">
          {" "}
          <i className="fas fa-book-reader"></i> <span> Lecture </span>{" "}
        </li>

        <li className="hobby">
          {" "}
          <i class="fas fa-gamepad"></i>
          <span> Jeu Video </span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
