import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ListMenuItem extends Component {
  render() {
    return (
      <div className="row mt-3 ml-1 mr-1">
        <button
          type="button"
          class="btn btn-light"
          style={{ backgroundColor: "#ffffff", height: "60px" }}
        >
          <span
            href=""
            className="float-left"
            style={{ textAlign: "left", color: "#636e72" }}
          >
            <FontAwesomeIcon
              icon={this.props.buttonIcon}
              style={{
                width: "20%",
                height: "20px",
                color: "#636e72"
              }}
            />
            {this.props.buttonCaption}
          </span>
        </button>
      </div>
    );
  }
}

export default ListMenuItem;
