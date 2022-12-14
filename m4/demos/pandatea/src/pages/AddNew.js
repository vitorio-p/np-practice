import React from "react";

export default function AddNew(props) {
  return (
    <React.Fragment>
      <h1>Add New Item</h1>
      <div className="mb-3">
        <label className="form-label">Name: </label>
        <input
          type="textbox"
          className="form-control"
          name="newItemName"
          value={props.name}
          onChange={props.update}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Type: </label>
        <input
          type="textbox"
          className="form-control"
          name="newItemType"
          value={props.type}
          onChange={props.update}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price: </label>
        <input
          type="textbox"
          className="form-control"
          name="newItemPrice"
          value={props.price}
          onChange={props.update}
        />
      </div>
      <button className="btn btn-primary" onClick={props.add}>Add</button>
    </React.Fragment>
  );
}
