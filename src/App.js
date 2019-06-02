import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Header from "./components/centralpanel/header";
import FilterMenu from "./components/centralpanel/filtermenu/filtermenu";
import RobotsView from "./components/centralpanel/robotsview/robotsview";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLayerGroup,
  faThLarge,
  faPlus,
  faCog,
  faWarehouse,
  faLightbulb,
  faTape,
  faEye,
  faTools,
  faMapMarkerAlt,
  faArrowDown,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import RoboDetails from "./components/centralpanel/robodetails/robodetails";

library.add(
  faLayerGroup,
  faThLarge,
  faPlus,
  faCog,
  faWarehouse,
  faLightbulb,
  faTape,
  faEye,
  faTools,
  faMapMarkerAlt,
  faArrowDown,
  faArrowUp
);

function App() {
  return (
    <div className="App">
      <NavBar isHorizontal={true} />
      <div className="row bg-light app-container" id="container">
        <NavBar isHorizontal={false} />
        <div className="col-xs-12 col-md-8 central-panel-container ">
          <div className="row central-panel-header-container">
            <Header />
          </div>
          <div className="row central-panel-robo-container ">
            <FilterMenu />
            <RobotsView />
          </div>
        </div>
        <div className="col-xs-6 col-md-4 robo-details-container">
          <RoboDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
