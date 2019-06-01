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
          className={
            "navbar navbar-expand-lg navbar-light bg-light horizontal-navbar"
          }
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
