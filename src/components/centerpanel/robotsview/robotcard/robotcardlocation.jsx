import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RobotsCardLocation extends Component {
  render() {
    return (
      <span
        className="card-text pl-3"
        style={{ color: "#636e72", fontSize: "12px" }}
      >
        <FontAwesomeIcon
          className="mr-1"
          icon="map-marker-alt"
          style={{
            width: "15px",
            height: "15px",
            color: "#636e72"
          }}
        />
        {this.props.roboLocation}
      </span>
    );
  }
}

export default RobotsCardLocation;
