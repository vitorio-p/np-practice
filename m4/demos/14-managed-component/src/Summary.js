import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <h1>Summary</h1>
      <ul>
        <li>{props.fullName}</li>
        <li>{props.email}</li>
      </ul>
    </React.Fragment>
  );
}
