import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  handleExit = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.project;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name} </h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            {" "}
            <div className="infosContent">
              <div className="head">
                {" "}
                <h2>{name} </h2>{" "}
                {/* <div className="sourceCode">
                  <a
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    Code Source
                  </a>
                </div> */}
              </div>
              <p className="text"> {info} </p>
              <div className="button return" onClick={this.handleExit}>
                <span> Quittez </span>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    );
  }
}
