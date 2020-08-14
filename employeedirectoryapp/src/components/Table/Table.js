import React from "react";
import "./Table.css";
import EmployeeTable from "../EmployeeTable/EmployeeTable";

function Table(props) {
  return (
    <div className="table-responsive-sm tableWrapper" id="tableWrapper">
      <table
        className="table table-bordered table-hover table-sm"
        id="tableSort"
      >
        <thead>
          <tr className="w-auto table-danger" id="tableTitleWrapper">
            <th scope="col">Image</th>
            <th scope="col" data-key="name" onClick={props.sortBy}>
              Name
            </th>
            <th scope="col" data-key="cell" onClick={props.sortBy}>
              Phone
            </th>
            <th scope="col" data-key="email" onClick={props.sortBy}>
              Email
            </th>
            <th scope="col" data-key="dob" onClick={props.sortBy}>
              DOB
            </th>
          </tr>
        </thead>
        {props.employees.map((employees) => (
          <EmployeeTable
            key={employees.login.uuid}
            id={employees.login.uuid}
            src={employees.picture}
            name={employees.name}
            email={employees.email}
            phone={employees.cell}
            dob={employees.dob}
          />
        ))}
      </table>
    </div>
  );
}

export default Table;
