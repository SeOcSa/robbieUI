import React, { Component } from "react";
class NavBarSearch extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navBarSearch">
        <form className="form-inline ml-auto mr-3 my-2 my-lg-2">
          <input
            className="form-control mr-lg-2"
            type="search"
            placeholder="Search for a robot"
            aria-label="Search"
            style={{
              width: "300px",
              height: "50px",
              borderRadius: "5px"
            }}
          />
        </form>
      </div>
    );
  }
}

export default NavBarSearch;
