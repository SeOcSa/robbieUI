import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faThLarge } from "@fortawesome/free-solid-svg-icons";

library.add(faLayerGroup, faThLarge);

function App() {
  return (
    <div className="App">
      <NavBar isHorizontal={true} />
      <div className="row" id="container" style={{ position: "relative" }}>
        <NavBar isHorizontal={false} />
        <div className="float-lg-right mr-4">
          <h1>Robots</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
