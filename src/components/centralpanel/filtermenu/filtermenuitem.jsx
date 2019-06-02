import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ListMenuItem extends Component {
  render() {
    return (
      <div className="row mt-4 ml-1 mr-1 border rounded-lg">
        <button type="button" className="btn btn-light filter-menu-item">
          <span className="float-left filter-menu-item-text">
            <FontAwesomeIcon
              className="filter-menu-item-icon"
              icon={this.props.buttonIcon}
            />
            {this.props.buttonCaption}
          </span>
        </button>
      </div>
    );
  }
}

export default ListMenuItem;
