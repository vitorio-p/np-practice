import React from "react";

export default class Numberbox extends React.Component {
  state = {
    count: 0,
  };
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div
        onClick={this.clickHandler}
        style={{
          border: "1px solid black",
          width: "50px",
          height: "50px",
        }}
      >
        {this.state.count}
      </div>
    );
  }
}
