import React, { Component } from "react";
import RobotCardTitle from "./robotcardtitle";
import RobotCardName from "./robotcardname";
import RobotCardLocation from "./robotcardlocation";

class RobotCard extends Component {
  state = { isActive: false };

  renderClassDinamic() {
    let classes = "card mb-4 shadow-sm robo-card";
    console.log(this.state);
    return this.state.isActive ? classes + " robo-card-active" : classes;
  }

  handleOnClick() {
    let { isActive } = this.state;

    this.setState({ isActive: !isActive });
  }

  render() {
    return (
      <div className="col-sm-4">
        <div
          onClick={this.handleOnClick.bind(this)}
          className={this.renderClassDinamic()}
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
