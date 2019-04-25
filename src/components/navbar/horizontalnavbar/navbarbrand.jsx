import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./navbarbrand.css";
class NavBarBrand extends Component {
  render() {
    return (
      <div className={"pt-3 pr-3 pb-3 borderB"}>
        <a className="navbar-brand mr-0">
          <img
            src={logo}
            className="d-inline-block align-left"
            alt="logo"
            style={{ width: "100px" }}
          />
        </a>
      </div>
    );
  }
}

export default NavBarBrand;
