import React, { Component } from "react";
class FilterInput extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-4">
        <input
          className="form-control form-control-lg w-100 border rounded-lg"
          type="text"
          placeholder={this.props.placeHolder}
          style={{
            fontSize: "14px",
            fontWeight: "bold"
          }}
        />
      </div>
    );
  }
}

export default FilterInput;
