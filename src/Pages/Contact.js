import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Navigation from "../Components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"> </div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              {" "}
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>Rufisque, Cité des enseignants</span>
            </li>

            <li>
              {" "}
              <i className="fas fa-mobile-alt"></i>{" "}
              <CopyToClipboard text="221784537547">
                <span
                  onClick={() => alert("Numero copié !!")}
                  className="clickInput"
                >
                  78 453 75 47
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="alhusseinkhouma0@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => alert("Email copié !!")}
                >
                  Alhusseinkhouma0@gmail.com{" "}
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/al-hussein-khouma-019337217"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin </h4>
              <i className="fab fa-linkedin"></i>{" "}
            </a>{" "}
            <a
              href="https://github.com/moustapha96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github </h4>
              <i className="fab fa-github"></i>{" "}
            </a>{" "}
            {/* <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Twitter </h4>
              <i className="fab fa-twitter"></i>{" "}
            </a>{" "} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
