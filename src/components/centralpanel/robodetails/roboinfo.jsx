import React, { Component } from "react";
import vismalogo from "../../../images/logoVisma.png";
import RoboInfoStatusSection from "./roboinfostatussection";
import RoboInfoTypeSection from "./roboinfotypesection";
import RoboInfoVersionSection from "./roboinfoversionsection";
import RoboInfoAccordion from "./roboinfoaccordion";

class RoboInfo extends Component {
  state = {};
  render() {
    return (
      <div className="row mt-4 ml-4">
        <RoboInfoStatusSection
          status={this.props.robbie.status === "On" ? "Online" : "Offline"}
        />
        <RoboInfoTypeSection
          roboType={this.props.robbie.roboType}
          vismaLogo={vismalogo}
        />
        <RoboInfoVersionSection
          versionType="Hardware version"
          version={this.props.robbie.hardwareVersion}
          isOnRightSide={false}
        />
        <RoboInfoVersionSection
          versionType="Software version"
          version={this.props.robbie.softwareVersion}
          isOnRightSide={true}
        />
        <RoboInfoAccordion robbie={this.props.robbie} />
      </div>
    );
  }
}

export default RoboInfo;
