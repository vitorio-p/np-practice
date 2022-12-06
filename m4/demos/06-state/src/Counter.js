import React from "react";

export default class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  render() {
    return (
      <div>
        Initial value = {this.props.initialValue}
        <br/>
        State count = {this.state.count}
      </div>
    );
  }
}
