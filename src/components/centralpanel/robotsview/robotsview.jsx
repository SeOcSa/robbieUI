import React, { Component } from "react";
import CardTitle from "../cardtitle";
import RobotsViewFilter from "./robotviewfilter/robotsviewfilter";
import RobotCard from "./robotcard/robotcard";

class RobotsView extends Component {
  render() {
    return (
      <div className="col-sm-8">
        <div className="card">
          <div className="card-body shadow robo-card-filter-container">
            <div className="row ml-1">
              <CardTitle titleText="FILTER BY" />
            </div>
            <RobotsViewFilter />
            <div className="row ml-1 mt-4">
              <CardTitle titleText="DEVICES" />
            </div>
            <div className="row">
              {this.props.robbies.map((robo, key) => (
                <RobotCard
                  robbie={robo}
                  key={key}
                  onSelectRobbie={this.props.onSelectRobbie}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RobotsView;
