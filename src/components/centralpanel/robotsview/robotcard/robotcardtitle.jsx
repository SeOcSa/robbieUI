import React, { Component } from "react";
import vismaIcon from "../../../../images/vismaIcon.png";

class RobotCardTitle extends Component {
  renderIconClass() {
    let robbieOn = "robo-card-icon";
    let robbieOff = "robo-card-icon-off";
    return this.props.roboStatus === "On" ? robbieOn : robbieOff;
  }

  renderStatusClass() {
    let classes = "mr-2 border";

    return this.props.roboStatus === "On"
      ? classes + " online-dot"
      : classes + " offline-dot";
  }

  render() {
    return (
      <div className="card-title">
        <div className="row">
          <div className="col text-left pt-1">
            <span className={this.renderStatusClass()} />
            <small className="robo-card-status">{this.props.roboStatus}</small>
          </div>
          <div className="col text-right pr-1 pt-1" id="navBarProfile">
            <img
              className={this.renderIconClass()}
              src={vismaIcon}
              alt="vismaIcon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RobotCardTitle;
