import React from "react";

export default class RegisterForm extends React.Component {
  state = {
    fullName: "",
    email: "",
    isButtonClicked: false,
  };

  updateFormFields = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  register = () => {
    console.log("register button is clicked");
    this.setState({
      isButtonClicked: true,
    });
  };

  renderSummary() {
    if (this.state.isButtonClicked) {
      return (
        <React.Fragment>
          <h1>Summary</h1>
          <ul>
            <li>{this.state.fullName}</li>
            <li>{this.state.email}</li>
          </ul>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.fullName}
            name="fullName"
            onChange={this.updateFormFields}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.updateFormFields}
          />
        </div>
        <button onClick={this.register}>Register</button>

        {this.renderSummary()}
      </React.Fragment>
    );
  }
}
