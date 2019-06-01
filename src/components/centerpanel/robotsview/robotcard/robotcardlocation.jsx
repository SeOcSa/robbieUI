import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RobotsCardLocation extends Component {
  render() {
    return (
      <span className="card-text pl-3 robo-card-location">
        <FontAwesomeIcon
          className="mr-1 robo-card-location-icon"
          icon="map-marker-alt"
        />
        {this.props.roboLocation}
      </span>
    );
  }
}

export default RobotsCardLocation;
