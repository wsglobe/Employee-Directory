import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <div className="container" id="searchContainer">
      <div className="row">
        <div className="col-md-1 offset-md-4">
          <label className="label">Search:</label>
        </div>
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                onChange={(letter) => props.handleInputChange(letter)}
                value={props.value}
                name="search"
                type="text"
                placeholder="enter search words"
                id="search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
