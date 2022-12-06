import React from "react";

class Numberbox extends React.Component {
  state = {
    count: 10,
  };

  render() {
    return <div>Number: {this.state.count}</div>;
  }
}

export default Numberbox;
