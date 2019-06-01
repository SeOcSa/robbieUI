import React, { Component } from "react";
import FilterInput from "./robotsviewfilterinput";

class RobotsViewFilter extends Component {
  render() {
    return (
      <div className="row border-bottom pb-4 pt-2">
        <FilterInput placeHolder="Location" />
        <FilterInput placeHolder="Type" />
      </div>
    );
  }
}

export default RobotsViewFilter;
