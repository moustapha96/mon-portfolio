import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/profil.jpeg" alt="maphoto" />
          <h3>Al Hussein KHOUMA</h3>
          <h6>FULL-STACK Dev</h6>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              {" "}
              <i className="fa fa-home"> </i>
              <span> Acceuil </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              {" "}
              <i className="fa fa-mountain"> </i> <span> Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              {" "}
              <i className="fa fa-images"> </i> <span> Portfolio </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              {" "}
              <i className="fa fa-address-book"> </i> <span> Contact </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            {" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-linkedin"></i>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://github.com/moustapha96"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github"></i>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-twitter"></i>{" "}
            </a>{" "}
          </li>
        </ul>

        <div className="signature">
          {" "}
          <p>XUMA@ALHK - 2022 </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
