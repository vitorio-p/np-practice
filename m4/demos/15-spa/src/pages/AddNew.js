import React from "react";

export default function AddNew(props) {
  return (
    <React.Fragment>
      <h1>Add New Recipe</h1>
      <div className="mb-3">
        <label className="form-label">Title: </label>
        <input
          type="textbox"
          className="form-control"
          name="newRecipeTitle"
          value={props.title}
          onChange={props.update}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description: </label>
        <input
          type="textbox"
          className="form-control"
          placeholder="Separate each ingredient with a comma"
          name="newRecipeIngredients"
          value={props.ingredients}
          onChange={props.update}
        />
      </div>
      <button className="btn btn-primary" onClick={props.add}>Add New</button>
    </React.Fragment>
  );
}
