import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid" id="headerWrapper">
      <div className="container">
        <h1 className="display-4">The Employee Directory</h1>
        <p className="lead">Find your people.</p>
      </div>
    </div>
  );
}

export default Header;
