import React from "react";
import AllItem from "./pages/AllItem";
import AddNew from "./pages/AddNew";
import axios from "axios";

export default class Menu extends React.Component {
  state = {
    page: "list",
    data: [

    ],
    newItemName: "",
    newItemType: "",
    newItemPrice: "",
  };

  renderPage() {
    if (this.state.page === "list") {
      return <AllItem items={this.state.data} />;
    } else if (this.state.page === "add") {
      return (
        <AddNew
          update={this.updateFormField}
          name={this.state.newItemName}
          type={this.state.newItemType}
          price={this.state.newItemPrice}
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
    const newItem = {
      name: this.state.newItemName,
      type: this.state.newItemType,
      price: this.state.newItemPrice,
    };

    this.setState({
      page: "list",
      newItemName: "",
      newItemType: "",
      newItemPrice: "",
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
                    All Items
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => this.switchPage("add")}
                  >
                    Add New Item
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
