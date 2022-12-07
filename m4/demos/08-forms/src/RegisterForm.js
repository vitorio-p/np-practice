import React from "react";

export default class RegisterForm extends React.Component {
  state = {
    name: "",
    email: "",
    product: "",
  };

  updateName = (event) => {
    console.log("name is changing");
    this.setState({
      name: event.target.value,
    });
  };

  updateEmail = (event) => {
    console.log("email is changing");
    this.setState({
      email: event.target.value,
    });
  };

  updateProduct = (event) => {
    console.log("product is updating")
    this.setState({
      product: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateName}
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.updateEmail} />
        </div>
        <div>
          <label>Product:</label>
          <input
            type="radio"
            name="products"
            value="electronics"
            checked={this.state.product == "electronics"}
            onChange={this.updateProduct}
          />
          <label>Electronics</label>
          <input
            type="radio"
            name="products"
            value="groceries"
            checked={this.state.product == "groceries"}
            onChange={this.updateProduct}
          />
          <label>Groceries</label>
          <input
            type="radio"
            name="products"
            value="clothing"
            checked={this.state.product == "clothing"}
            onChange={this.updateProduct}
          />
          <label>Clothing</label>
        </div>
      </React.Fragment>
    );
  }
}
