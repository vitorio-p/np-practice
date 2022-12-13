import React from "react";

export default function RegisterFormFunc(props) {
  return (
    <React.Fragment>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={props.fullName}
          name="fullName"
          onChange={props.update}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={props.email}
          name="email"
          onChange={props.update}
        />
      </div>
      <button onClick={props.register}>Register</button>
    </React.Fragment>
  );
}
