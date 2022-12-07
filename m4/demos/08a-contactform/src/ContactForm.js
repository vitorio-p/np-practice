import React from "react";

export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "",
    channel: "",
    btnBeenPressed: false,
  };

  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  updateEnquiry = (event) => {
    this.setState({
      enquiry: event.target.value,
    });
  };

  checkIfDisabled = () => {
    return !(this.state.firstName && this.state.lastName && this.state.enquiry);
  };

  submit = () => {
    /*
    alert(
      `First Name: ${this.state.firstName}, Last Name: ${this.state.lastName}, Enquiry: ${this.state.enquiry}`
    );
    */
    this.setState({
      btnBeenPressed: true,
    });
  };

  renderSummary = () => {
    if (this.state.btnBeenPressed) {
      return (
        <React.Fragment>
          <ul>
            <li>First Name: {this.state.firstName}</li>
            <li>Last Name: {this.state.lastName}</li>
            <li>Enquiry: {this.state.enquiry}</li>
          </ul>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.updateFirstName}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.updateLastName}
          />
        </div>
        <div>
          <label>Enquiry: </label>
          <input
            type="radio"
            value="support"
            name="enquiry"
            checked={this.state.enquiry === "support"}
            onChange={this.updateEnquiry}
          />
          <label>Support</label>
          <input
            type="radio"
            value="sales"
            name="enquiry"
            checked={this.state.enquiry === "sales"}
            onChange={this.updateEnquiry}
          />
          <label>Sales</label>
          <input
            type="radio"
            value="marketing"
            name="enquiry"
            checked={this.state.enquiry === "marketing"}
            onChange={this.updateEnquiry}
          />
          <label>Support</label>
        </div>
        <div>
          <button onClick={this.submit} disabled={this.checkIfDisabled()}>
            Submit
          </button>
        </div>
        {this.renderSummary()}
      </React.Fragment>
    );
  }
}
