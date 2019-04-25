import React, { Component } from "react";

import VerticalNavBar from "../verticalnavbar/verticalnavbar";
import HorizontalNavBar from "../horizontalnavbar/horizontalnavbar";

class NavBar extends Component {
  getVerticalNavBar() {
    return <VerticalNavBar />;
  }

  getHorizontalNavBar() {
    return <HorizontalNavBar />;
  }

  render() {
    const { isHorizontal } = this.props;
    let navBar;
    if (isHorizontal === true) navBar = this.getHorizontalNavBar();
    else navBar = this.getVerticalNavBar();
    return <div>{navBar}</div>;
  }
}

export default NavBar;
