import React, { Component } from "react";
class FilterInput extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-4">
        <input
          className="form-control form-control-lg w-100 border rounded-lg robo-card-filter-input"
          type="text"
          placeholder={this.props.placeHolder}
        />
      </div>
    );
  }
}

export default FilterInput;
