import React, { Component } from "react";
import MenuItem from "./menuitem";
import "./NavBar.css";

class VerticalNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className={
            "navbar navbar-light bg-light mr-auto float-lg-left full-h "
          }
          style={{
            borderRight: "0.5px solid #9E9E9E",
            float: "left",
            width: "132px",
            paddingLeft: "32px"
          }}
        >
          <ul className="nav nav-pills mb-auto">
            <li className="nav-item">
              <MenuItem iconType="layer-group" />
            </li>
            <li className="nav-item">
              <MenuItem iconType="th-large" />
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default VerticalNavBar;
