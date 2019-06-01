import React, { Component } from "react";
import RobotCardTitle from "./robotcardtitle";
import RobotCardName from "./robotcardname";
import RobotCardLocation from "./robotcardlocation";

class RobotCard extends Component {
  render() {
    return (
      <div class="col-sm-4">
        <div
          className="card mb-4 shadow-sm border-lg"
          style={{
            width: "100%",
            borderRadius: "10px",
            borderColor: "#1B9CFC"
          }}
        >
          <div className="card-body pt-0 pl-2">
            <RobotCardTitle />
            <RobotCardName roboName={this.props.roboName} />
            <RobotCardLocation roboLocation={this.props.roboLocation} />
          </div>
        </div>
      </div>
    );
  }
}

export default RobotCard;
