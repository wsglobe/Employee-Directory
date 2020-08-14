import React, { Component } from "react";
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import SearchForm from "../SearchForm/SearchForm";
import API from "../../utils/API";
import Table from "../Table/Table";

class Container extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
    currentSort: "down",
  };

  componentDidMount() {
    API.searchAll()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value }, () => this.handleFilter());
  };

  handleFilter = () => {
    let filteredEmployees = this.state.employees.filter((employee) => {
      let fullName = (
        employee.name.first +
        " " +
        employee.name.last
      ).toLowerCase();
      return fullName.includes(this.state.search);
    });
    this.setState({ filteredEmployees: filteredEmployees });
  };

  sortUp(key) {
    if (key === "name") {
      return function (a, b) {
        let afullName = a.name.first + " " + a.name.last;
        let bfullName = b.name.first + " " + b.name.last;
        if (afullName < bfullName) return -1;
        if (afullName > bfullName) return 1;
        return 0;
      };
    }

    if (key === "dob") {
      return function (a, b) {
        let aDOB = a.dob.date;
        let bDOB = b.dob.date;
        if (aDOB < bDOB) return -1;
        if (aDOB > bDOB) return 1;
        return 0;
      };
    }

    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortDown(key) {
    if (key === "name") {
      return function (a, b) {
        let afullName = a.name.first + " " + a.name.last;
        let bfullName = b.name.first + " " + b.name.last;
        if (afullName > bfullName) return -1;
        if (afullName < bfullName) return 1;
        return 0;
      };
    }

    if (key === "dob") {
      return function (a, b) {
        let aDOB = a.dob.date;
        let bDOB = b.dob.date;
        if (aDOB > bDOB) return -1;
        if (aDOB < bDOB) return 1;
        return 0;
      };
    }

    return function (a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    };
  }

  sortBy = (event) => {
    const currentSort = this.state.currentSort;

    if (currentSort === "down") {
      let employeesCopy = [...this.state.filteredEmployees];
      employeesCopy.sort(this.sortUp(event.target.getAttribute("data-key")));
      this.setState({ filteredEmployees: employeesCopy });
      this.setState({ currentSort: "up" });
    } else if (currentSort === "up") {
      let employeesCopy = [...this.state.filteredEmployees];
      employeesCopy.sort(this.sortDown(event.target.getAttribute("data-key")));
      this.setState({ filteredEmployees: employeesCopy });
      this.setState({ currentSort: "down" });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table employees={this.state.filteredEmployees} sortBy={this.sortBy} />
      </Wrapper>
    );
  }
}

export default Container;
