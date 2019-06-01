import React, { Component } from "react";

class RobotCardName extends Component {
  render() {
    return (
      <h4 className="card-text pl-3 pt-1" style={{ color: "#636e72" }}>
        {this.props.roboName}
      </h4>
    );
  }
}

export default RobotCardName;
