import React, { Component } from "react";

class RoboInfoStatusSection extends Component {
  render() {
    return (
      <div className="col-sm-6 robo-status-info">
        <h6 className="robo-info-section-title mt-2">Status</h6>
        <div className="row">
          <div className="col">
            <span className="online-dot mr-2 border" />
            <small className="robo-card-status">{this.props.status}</small>
          </div>
        </div>
        <button
          type="button btn-sm"
          className="btn mt-2 btn-sm pb-2 btn-switch-off"
        >
          Switch off
        </button>
      </div>
    );
  }
}

export default RoboInfoStatusSection;
