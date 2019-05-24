import React, { Component } from "react";
import FilterMenuItem from "./filtermenuitem";

class ListMenu extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
          marginLeft: "20px",
          marginTop: "30px"
        }}
      >
        <div className="col-xs-7 col-sm-6 col-lg-9">
          <div className="card">
            <div className="card-body shadow-mZAs" style={{ height: "65vh" }}>
              <div className="row ml-1">
                <h5
                  className="card-title font-weight-bold"
                  style={{
                    fontSize: "12px",
                    float: "left",
                    fontStyle: "bolt",
                    color: "#636e72"
                  }}
                >
                  CHOOSE ROBOT TYPE
                </h5>
              </div>
              <FilterMenuItem buttonIcon="th-large" buttonCaption="All Robots" />
              <FilterMenuItem buttonIcon="warehouse" buttonCaption="Warehouse" />
              <FilterMenuItem buttonIcon="eye" buttonCaption="Surveillance" />
              <FilterMenuItem
                buttonIcon="lightbulb"
                buttonCaption="Light managers"
              />
              <FilterMenuItem buttonIcon="tools" buttonCaption="Maintenance" />
              <FilterMenuItem buttonIcon="tape" buttonCaption="Packaging" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListMenu;
