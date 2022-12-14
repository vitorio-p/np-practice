import React from "react";
import AllRecipe from "./pages/AllRecipe";
import AddNew from "./pages/AddNew";
import axios from "axios";

export default class RecipeBookAPI extends React.Component {
  state = {
    page: "list",
    data: [],
    newRecipeTitle: "",
    newRecipeIngredients: "",
  };

  BASE_API_URL = "http://localhost:8888";

  async componentDidMount() {
    console.log("ComponentDidMount");
    const response = await axios.get(`${this.BASE_API_URL}/pokemon`);
    console.log(response.data);
    this.setState({
      data: response.data,
    });
  }

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

  addNew = async () => {
    console.log("adding new recipe");
    const newRecipe = {
      title: this.state.newRecipeTitle,
      ingredients: this.state.newRecipeIngredients.split(","),
    };

    const response = await axios.post(
      this.BASE_API_URL + "/pokemons",
      newRecipe
    );
    newRecipe._id = response.data.insertedId;

    this.setState({
      data: [...this.state.data, newRecipe],
      page: "list",
      newRecipeTitle: "",
      newRecipeIngredients: "",
    });
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
