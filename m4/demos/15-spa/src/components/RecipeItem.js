import React from "react";
export default function RecipeItem(props) {
  return (
    <React.Fragment key={props._id}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <ul>
            {props.ingredients.map((eachIngredient, index) => {
              return <li key={index}>{eachIngredient}</li>;
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
