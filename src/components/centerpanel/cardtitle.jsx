import React, { Component } from "react";
class CardTitle extends Component {
  render() {
    return (
      <h5
        className="card-title font-weight-bold"
        style={{
          fontSize: "12px",
          float: "left",
          color: "#636e72"
        }}
      >
        {this.props.titleText}
      </h5>
    );
  }
}

export default CardTitle;
