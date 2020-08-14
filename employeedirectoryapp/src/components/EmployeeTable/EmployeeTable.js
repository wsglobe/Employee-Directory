import React from "react";

function EmployeeTable(props) {
  return (
    <tbody>
      <tr className="w-auto" id={props.id}>
        <td>
          <img
            alt={props.name.first + props.name.last}
            src={props.src.medium}
          />
        </td>
        <td>
          {props.name.first} {props.name.last}
        </td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob.date.split("T", 1)[0]}</td>
      </tr>
    </tbody>
  );
}

export default EmployeeTable;
