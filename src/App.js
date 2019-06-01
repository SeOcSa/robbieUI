import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Header from "./components/centerpanel/header";
import FilterMenu from "./components/centerpanel/filtermenu/filtermenu";
import RobotsView from "./components/centerpanel/robotsview/robotsview";
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
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

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
  faMapMarkerAlt
);

function App() {
  return (
    <div className="App">
      <NavBar isHorizontal={true} />
      <div
        className="row bg-light"
        id="container"
        style={{ position: "relative" }}
      >
        <NavBar isHorizontal={false} />
        <div
          className="col-8"
          style={{
            marginLeft: "50px",
            marginTop: "30px"
          }}
        >
          <div
            className="row"
            style={{
              marginLeft: "50px",
              marginTop: "30px"
            }}
          >
            <Header />
          </div>
          <div
            className="row"
            style={{
              marginLeft: "20px",
              marginTop: "30px"
            }}
          >
            <FilterMenu />
            <RobotsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
