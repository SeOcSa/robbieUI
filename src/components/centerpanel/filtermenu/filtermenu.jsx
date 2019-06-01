import React, { Component } from "react";
import FilterMenuItem from "./filtermenuitem";
import CardTitle from "../cardtitle";

class ListMenu extends Component {
  render() {
    return (
      <div className="col-sm-4" style={{ maxWidth: "40%" }}>
        <div className="card">
          <div className="card-body shadow" style={{ height: "65vh" }}>
            <div className="row ml-1">
              <CardTitle titleText="CHOOSE ROBOT TYPE" />
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
    );
  }
}

export default ListMenu;
