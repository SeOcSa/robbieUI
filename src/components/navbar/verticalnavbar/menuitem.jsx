import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MenuItem extends Component {
  renderClassDinamic() {
    let classes = "nav-link ml-2";
    return this.props.isActive ? classes + " active" : classes;
  }

  render() {
    return (
      <span
        className={this.renderClassDinamic()}
        onClick={this.props.onHandleClick}
        href="#"
        style={{ width: "70px", height: "70px" }}
      >
        <FontAwesomeIcon
          icon={this.props.iconType}
          style={{ width: "30px", height: "50px" }}
        />
        {this.props.buttonCaption}
      </span>
    );
  }
}

export default MenuItem;
