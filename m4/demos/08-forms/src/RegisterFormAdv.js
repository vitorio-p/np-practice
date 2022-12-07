import React from "react";

export default class RegisterFormAdv extends React.Component {
  state = {
    name: "",
    email: "",
    product: "",
    interests: [],
  };

  updateFormField = (event) => {
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateInterests = (event) => {
    console.log(`target value: ${event.target.value}`);
    if (this.state.interests.includes(event.target.value) === false) {
      let cloned = this.state.interests.slice();
      cloned.push(event.target.value);
      this.setState({
        interests: cloned,
      });
    } else {
      let cloned = this.state.interests.slice();
      let itemToRemove = cloned.findIndex(function (element) {
        return element === event.target.value;
      });

      cloned.splice(itemToRemove, 1);
      this.setState({
        interests: cloned,
      });
    }
  };

  updateInterestsSpread = (event) => {
    if (this.state.interests.includes(event.target.value) === false) {
      let cloned = [...this.state.value, event.target.value];
      this.setState({
        interests: cloned,
      })
    } else {
      let cloned = this.state.interests.slice();
      let itemToRemove = cloned.findIndex(function (element) {
        return element === event.target.value;
      });

      cloned = [...this.state.interests.slice(0, itemToRemove), ...this.state.interests.slice(itemToRemove + 1)]
      this.setState({
        interests: cloned,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Product:</label>
          <input
            type="radio"
            name="product"
            value="electronics"
            checked={this.state.product === "electronics"}
            onChange={this.updateFormField}
          />
          <label>Electronics</label>
          <input
            type="radio"
            name="product"
            value="groceries"
            checked={this.state.product === "groceries"}
            onChange={this.updateFormField}
          />
          <label>Groceries</label>
          <input
            type="radio"
            name="product"
            value="clothing"
            checked={this.state.product === "clothing"}
            onChange={this.updateFormField}
          />
          <label>Clothing</label>
        </div>
        <div>
          <label>Interests: </label>
          <input
            type="checkbox"
            name="interests"
            value="sleeping"
            checked={this.state.interests.includes["sleeping"]}
            onChange={this.updateInterests}
          ></input>
          <label>Sleeping</label>
          <input
            type="checkbox"
            name="interests"
            value="running"
            checked={this.state.interests.includes["running"]}
            onChange={this.updateInterests}
          ></input>
          <label>Running</label>
        </div>
      </React.Fragment>
    );
  }
}
