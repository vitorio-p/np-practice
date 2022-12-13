import React from "react";

export default function AddItem(props) {
  return (
    <React.Fragment>
      <h2>Add new boba item</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="newItemName"
          value={props.name}
          onChange={props.update}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="text"
          name="newItemPrice"
          value={props.price}
          onChange={props.update}
        />
      </div>
      <div>
        <label>Sugar: </label>
        <input
          type="text"
          name="newItemSugar"
          value={props.sugar}
          onChange={props.update}
        />
      </div>
      <button onClick={props.create}>Add</button>
    </React.Fragment>
  );
}
