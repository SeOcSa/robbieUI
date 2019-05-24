import React, { Component } from "react";
import profilePic from "../../../images/profilePic.svg";

class NavBarProfile extends Component {
  render() {
    return (
      <div className="media mr-3" id="navBarProfile">
        <img
          src={profilePic}
          className="mr-3"
          height="40"
          width="50"
          alt="profilePic"
        />
      </div>
    );
  }
}

export default NavBarProfile;
