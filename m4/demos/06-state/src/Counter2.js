import React from "react";

export default class Counter2 extends React.Component {
  state = {
    number: this.props.initialValue,
  };

  change = () => {
    console.log("event change triggered");
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ border: "1px solid red", width: "50px" }}>
          {this.state.number}
        </div>
        <button onClick={this.change}>Add 1</button>
      </React.Fragment>
    );
  }
}
