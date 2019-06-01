import React, { Component } from "react";
import vismaIcon from "../../../../images/vismaIcon.png";

class RobotCardTitle extends Component {
  render() {
    return (
      <div className="card-title">
        <div className="row">
          <div className="col text-left pt-1">
            <span class="online-dot mr-2  border" />
            <small>On</small>
          </div>
          <div className="col text-right pr-1 pt-1" id="navBarProfile">
            <img
              src={vismaIcon}
              style={{ width: "36%", height: "100%" }}
              alt="vismaIcon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RobotCardTitle;
