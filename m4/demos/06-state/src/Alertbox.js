import React from "react";

class Alertbox extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  render() {
    return (
      <div
        style={{
          border: "4px solid",
        }}
      >
        Number: {this.state.count}
      </div>
    );
  }
}

export default Alertbox;
