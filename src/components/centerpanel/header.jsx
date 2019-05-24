import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div
        className={"header-container"}
        style={{
          marginLeft: "40px"
        }}
      >
        <div className={"mt-4 title-container"}>
          <h1 className={"b"}>Robots </h1>
        </div>
        <div className={"button-container ml-2"}>
          <button
            className={"btn btn-primary btn-sm mt-4 pb-2"}
            style={{
              height: "35%",
              width: "70%",
              marginLeft: "50px",
              borderRadius: "5px",
              fontSize: "12px"
            }}
          >
            <span>
              <FontAwesomeIcon icon="plus" style={{ marginRight: "5px" }} />
            </span>
            Add Robot
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
