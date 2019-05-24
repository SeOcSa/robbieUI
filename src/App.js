import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Header from "./components/centerpanel/header";
import ListMenu from "./components/centerpanel/filtermenu";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLayerGroup,
  faThLarge,
  faPlus,
  faCog,
  faWarehouse,
  faLightbulb,
  faTape,
  faEye,
  faTools
} from "@fortawesome/free-solid-svg-icons";

library.add(faLayerGroup, faThLarge, faPlus, faCog, faWarehouse,faLightbulb, faTape, faEye, faTools);

function App() {
  return (
    <div className="App">
      <NavBar isHorizontal={true} />
      <div className="row" id="container" style={{ position: "relative" }}>
        <NavBar isHorizontal={false} />
        <div className="float-lg-right col-4">
          <Header />
          <ListMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
