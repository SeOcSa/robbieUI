import React, { Component } from "react";
import CardTitle from "../cardtitle";
import RobotsViewFilter from "./robotviewfilter/robotsviewfilter";
import RobotCard from "./robotcard/robotcard";

class RobotsView extends Component {
  render() {
    return (
      <div className="col-sm-8">
        <div className="card">
          <div className="card-body shadow" style={{ height: "65vh" }}>
            <div className="row ml-1">
              <CardTitle titleText="FILTER BY" />
            </div>
            <RobotsViewFilter />
            <div className="row ml-1 mt-4">
              <CardTitle titleText="DEVICES" />
            </div>
            <div className="row">
              <RobotCard roboName="Robbie 5" roboLocation="Visma Timisoara" />
              <RobotCard roboName="Robbie 6" roboLocation="Visma Sibiu" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RobotsView;
