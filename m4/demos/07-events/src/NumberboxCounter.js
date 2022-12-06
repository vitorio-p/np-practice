import React from "react";

export default class NumberboxCounter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  printSmiley = () => {
    if (this.state.count % 2 !== 0) {
      return <span>🤬</span>;
    } else {
      return null;
    }
  };

  render() {
    let extra = <span>🥸</span>;
    if (this.state.count % 2 !== 0) {
      extra = null;
    }
    return (
      <div
        style={{
          width: "100px",
          height: "50px",
          border: "2px solid black",
        }}
      >
        {this.state.count} {extra} {this.printSmiley()}
        {this.state.count % 2 == 0 ? <span>🥹</span> : false}
        <div>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
        </div>
      </div>
    );
  }
}
