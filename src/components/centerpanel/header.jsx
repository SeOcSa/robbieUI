import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div className={"header-container"}>
        {" "}
        <h1 className={"b"} style={{ marginBottom: "0px" }}>
          Robots{" "}
        </h1>
        <button
          className={"btn btn-primary btn-lg "}
          style={{
            height: "70%",
            width: "70%",
            marginLeft: "50px",
            marginTop: "13px",
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
    );
  }
}

export default Header;
