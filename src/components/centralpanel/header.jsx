import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div className={"header-container"}>
        {" "}
        <h1 className={"b robo-header-title"}>Robots</h1>
        <button className={"btn btn-primary btn-lg robo-add-btn"}>
          <span>
            <FontAwesomeIcon icon="plus" className="robo-add-btn-icon" />
          </span>
          Add Robot
        </button>
      </div>
    );
  }
}

export default Header;
