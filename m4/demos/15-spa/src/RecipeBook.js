import React from "react";
import AllRecipe from "./pages/AllRecipe";
import AddNew from "./pages/AddNew";

export default class RecipeBook extends React.Component {
  state = {
    page: "list",
    data: [
      {
        id: 1,
        title: "Chicken Rice",
        ingredients: ["chicken", "rice"],
      },
      {
        id: 2,
        title: "Beef Don",
        ingredients: ["beef", "rice"],
      },
      {
        id: 3,
        title: "Pork Burger",
        ingredients: ["pork", "bun"],
      },
    ],
    newRecipeTitle: "",
    newRecipeIngredients: "",
  };

  renderPage() {
    if (this.state.page === "list") {
      return <AllRecipe recipes={this.state.data} />;
    } else if (this.state.page === "add") {
      return (
        <AddNew
          update={this.updateFormField}
          title={this.state.newRecipeTitle}
          ingredients={this.state.newRecipeIngredients}
          add={this.addNew}
        />
      );
    }
  }

  switchPage = (page) => {
    this.setState({
      page: page,
    });
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNew = () => {
    console.log("adding new recipe");
    const newRecipe = {
      _id: Math.round(Math.random() * 10000 + 1),
      title: this.state.newRecipeTitle,
      ingredients: this.state.newRecipeIngredients.split(","),
    };

    this.setState({
      data: [...this.state.data, newRecipe],
      page: "list",
      newRecipeTitle: "",
      newRecipeIngredients: "",
    })
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => this.switchPage("list")}
                  >
                    All Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => this.switchPage("add")}
                  >
                    Add New
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">{this.renderPage()}</div>
      </React.Fragment>
    );
  }
}
