import React, { Component } from "react";
import RobotCardTitle from "./robotcardtitle";
import RobotCardName from "./robotcardname";
import RobotCardLocation from "./robotcardlocation";

class RobotCard extends Component {
  state = { isActive: this.props.robbie.isSelected };

  renderClassDinamic() {
    let classes = "card mb-4 shadow-sm robo-card";
    return this.state.isActive ? classes + " robo-card-active" : classes;
  }

  handleOnClick() {
    let { isActive } = this.state;

    this.setState({ isActive: !isActive });

    this.props.onSelectRobbie(this.props.robbie);
  }

  render() {
    return (
      <div className="col-sm-4">
        <div
          onClick={this.handleOnClick.bind(this)}
          className={this.renderClassDinamic()}
        >
          <div className="card-body pt-0 pl-2">
            <RobotCardTitle roboStatus={this.props.robbie.status} />
            <RobotCardName roboName={this.props.robbie.roboName} />
            <RobotCardLocation roboLocation={this.props.robbie.roboLocation} />
          </div>
        </div>
      </div>
    );
  }
}

export default RobotCard;
