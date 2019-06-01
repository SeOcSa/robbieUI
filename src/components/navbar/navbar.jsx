import React, { Component } from "react";

import VerticalNavBar from "./verticalnavbar/verticalnavbar";
import HorizontalNavBar from "./horizontalnavbar/horizontalnavbar";

class NavBar extends Component {
  getVerticalNavBar() {
    return (
      <div className="col-1" style={{ maxWidth: "5.4%", paddingRight: "0px" }}>
        <VerticalNavBar />
      </div>
    );
  }

  getHorizontalNavBar() {
    return (
      <div>
        <HorizontalNavBar />
      </div>
    );
  }

  render() {
    const { isHorizontal } = this.props;
    let navBar;
    if (isHorizontal === true) navBar = this.getHorizontalNavBar();
    else navBar = this.getVerticalNavBar();
    return navBar;
  }
}

export default NavBar;
