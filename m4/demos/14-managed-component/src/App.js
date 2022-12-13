import React from "react";
import RegisterFormFunc from "./RegisterForm";
import Summary from "./Summary";

class App extends React.Component {
  state = {
    fullName: "",
    email: "",
    isButtonClicked: false,
  };

  update = (event) => {
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

  render() {
    return (
      <React.Fragment>
        <RegisterFormFunc
          fullName={this.state.fullName}
          email={this.state.email}
          update={this.update}
          register={this.register}
        />

        {this.state.isButtonClicked ? (
          <Summary fullName={this.state.fullName} email={this.state.email} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
