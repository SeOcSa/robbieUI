import React, { Component } from "react";
class CardTitle extends Component {
  render() {
    return (
      <h5 className="card-title font-weight-bold robo-card-title">
        {this.props.titleText}
      </h5>
    );
  }
}

export default CardTitle;
