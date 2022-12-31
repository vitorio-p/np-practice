import React from "react";

export default function User(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.user.name}</h3>
        <h4>{props.user.email}</h4>
        <button
          onClick={() => {
            props.beginEdit(props.user);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            props.deleteUser(props.user);
          }}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
}
