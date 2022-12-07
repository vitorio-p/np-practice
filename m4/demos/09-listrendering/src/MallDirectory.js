import React from "react";

export default class MallDirectory extends React.Component {
  state = {
    events: [
      "10% off at Coffee Beans",
      "Caroling at Don Don Donki",
      "Free parking vouchers for spending above $100",
    ],
    shops: [
      "McDonalds",
      "Coffee Beans",
      "Uniqlo",
      "Don Don Donki",
      "Giant Supermarket",
    ],
  };

  renderShops() {
    let jsx = [];
    for (let shop of this.state.shops) {
      jsx.push(<li key={shop}>{shop}</li>);
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Mall Directory</h1>
        <h2>Shops</h2>
        <ul>{this.renderShops()}</ul>
        <h2>Events</h2>
        {this.state.events.map((event) => (
          <div
            style={{
              border: "1px solid black",
              margin: "5px",
              padding: "5px",
            }}
          >
            {event}
          </div>
        ))}
      </React.Fragment>
    );
  }
}
