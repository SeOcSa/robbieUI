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
        <RoboInfoStatusSection status="Online" />
        <RoboInfoTypeSection roboType="Warehouse" vismaLogo={vismalogo} />
        <RoboInfoVersionSection
          versionType="Hardware version"
          version="62.9"
          isOnRightSide={false}
        />
        <RoboInfoVersionSection
          versionType="Software version"
          version="5.4"
          isOnRightSide={true}
        />
        <RoboInfoAccordion />
      </div>
    );
  }
}

export default RoboInfo;
