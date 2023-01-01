import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    SelectedRadio: "javascript",
    projects: portfolioData,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "css" },
      { id: 3, value: "react" },
      { id: 4, value: "php" },
      { id: 5, value: "java" },
    ],
  };
  handleChangeSelect = (event) => {
    this.setState({
      SelectedRadio: event.target.value,
    });
  };
  render() {
    let { projects, radios, SelectedRadio } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  id={radio.id}
                  value={radio.value}
                  onChange={this.handleChangeSelect}
                  checked={radio.value === SelectedRadio}
                />
                <label htmlFor={radio.id}> {radio.value} </label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(SelectedRadio))
            .map((projet) => {
              return <Project key={projet.id} project={projet} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
