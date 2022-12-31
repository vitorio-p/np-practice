import React from "react";
import User from "./User";

export default function UserList(props) {
  return (
    <React.Fragment key={props.user._id}>
      <User
        user={props.user}
        beginEdit={props.beginEdit}
        deleteUser={props.deleteUser}
      />
    </React.Fragment>
  );
}
