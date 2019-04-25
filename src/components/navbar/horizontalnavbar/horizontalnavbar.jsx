import React, { Component } from "react";
import NavBarBrand from "./navbarbrand";
import NavBarSearch from "./navbarsearch";
import NavBarProfile from "./navbarprofile";
import NavBarToggleButton from "./navbartogglebutton";

class HorizontalNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className={"navbar navbar-expand-lg navbar-light bg-light"}
          style={{
            borderBottom: "0.5px solid #9E9E9E",
            padding: "0"
          }}
        >
          <NavBarToggleButton />
          <NavBarBrand />
          <NavBarSearch />
          <NavBarProfile />
        </nav>
      </React.Fragment>
    );
  }
}

export default HorizontalNavBar;
