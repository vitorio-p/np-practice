import React from "react";

export default class Menu extends React.Component {
  state = {
    searchFood: "",
    searchIngredient: "",
    menu: [
      {
        "_id": 101,
        "name": "Chicken Udon Soup",
        "price": 11.99,
        "ingredients": ["chicken stock", "udon", "chicken breast"]
      },
      {
        "_id": 203,
        "name": "Salmon Teriyaki Don",
        "price": 9.9,
        "ingredients": ["salmon", "rice", "soya sauce"]
      },
      {
        "_id": 401,
        "name": "Raw Salmon Slices",
        "price": 15.99,
        "ingredients": ["salmon"]
      },
      {
        "_id": 402,
        "name": "Chicken Miso Ramen",
        "price": 15.99,
        "ingredients": ["chicken", "miso", "ramen"]
      }
    ]
  }

  render() {
    for (let eachItem of this.state.menu) {
      let ingredients = [];
      for (let eachIngredient of eachItem.ingredients) {
        ingredients.push(<li key={eachIngredient}>{eachIngredient}</li>)
      }
    }
    return (
      <React.Fragment>
        <h1>Menu</h1>
        <h4>Search for</h4>
        <label>Food: </label>
        <input type="text" value={this.state.searchFood} onChange={(event) => {
          this.setState({
            searchFood: event.target.value,
          });
        }} />
        <br />
        <label>Ingredient: </label>
        <input type="text" value={this.state.searchIngredient} onChange={(event) => {
          this.setState({
            searchIngredient: event.target.value,
          });
        }} />
        <div>
          {this.state.menu
            .filter((eachFood) =>
              (eachFood.name
                .toUpperCase()
                .includes(this.state.searchFood.toUpperCase())
              ) && this.state.searchIngredient == "" ? eachFood.ingredients : (
                eachFood.ingredients
                  .includes(this.state.searchIngredient)
              )
            )
            .map((eachFood) => (
              <div key={eachFood._id}>
                <h2>{eachFood.name}</h2>
                <h3>Ingredients:</h3>
                <ul>
                  {eachFood.ingredients.map((eachIngredient, index) => (
                    <li key={index}>
                      {eachIngredient}
                    </li>
                  ))}
                </ul>
                <span>Price: {eachFood.price}</span>
              </div>
            ))
          }
        </div>
      </React.Fragment>
    )
  }
}