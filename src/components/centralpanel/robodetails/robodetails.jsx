import React, { Component } from "react";
import RoboDetailsHeader from "./robodetailsheader";
import RoboInfo from "./roboinfo";

class RoboDetails extends Component {
  render() {
    return (
      <div>
        <RoboDetailsHeader roboName="Robbie 5" roboHealth="25" />
        <RoboInfo />
      </div>
    );
  }
}

export default RoboDetails;
