import React from "react";

export default function EditUser(props) {
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          name="editedUserName"
          onChange={props.updateFormField}
          value={props.editedUserName}
        />
        <input
          type="text"
          name="editedUserEmail"
          onChange={props.updateFormField}
          value={props.editedUserEmail}
        />
        <button
          onClick={() => {
            props.confirmEdit(props.user);
          }}
        >
          Confirm
        </button>
        <button onClick={props.cancelEdit}>Cancel edit</button>
      </div>
    </React.Fragment>
  );
}
