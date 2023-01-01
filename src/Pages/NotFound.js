import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>page non trouve</h3>

        <NavLink exact to="/">
          {" "}
          <i className="fa fa-home"></i> Accueil{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
