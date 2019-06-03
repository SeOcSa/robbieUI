import React, { Component } from "react";
import RoboDetailsHeader from "./robodetailsheader";
import RoboInfo from "./roboinfo";

class RoboDetails extends Component {
  render() {
    return (
      <div>
        <RoboDetailsHeader
          roboName={this.props.robbie.robotName}
          roboHealth={this.props.robbie.health}
        />
        <RoboInfo robbie={this.props.robbie} />
      </div>
    );
  }
}

export default RoboDetails;
