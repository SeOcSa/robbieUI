import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MenuItem extends Component {
  state = { isActive: false };

  appendIsActiveClass() {
    let isActive = !this.state.isActive;
    this.setState({ isActive });
  }

  renderClassDinamic() {
    let classes = "nav-link";
    return this.state.isActive ? classes + " active" : classes;
  }

  render() {
    return (
      <span
        className={this.renderClassDinamic()}
        onClick={this.appendIsActiveClass.bind(this)}
        href="#"
      >
        <FontAwesomeIcon
          icon={this.props.iconType}
          style={{
            width: "40%",
            height: "50px"
          }}
        />
      </span>
    );
  }
}

export default MenuItem;
