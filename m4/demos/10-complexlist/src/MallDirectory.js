import React from "react";

export default class MallDirectory extends React.Component {
  state = {
    shops: [
      {
        id: 1,
        name: "Don Don Donki",
        floor: 5,
        unit: 103,
        type: "Supermarket",
      },
      {
        id: 2,
        name: "McDonalds",
        floor: 3,
        unit: 204,
        type: "Restaurant",
      },
    ],
  };

  renderShops() {
    let jsx = [];

    /*
    // Default non-Bootstrap method
    for (let shop of this.state.shops) {
      jsx.push(<div>
        <h3>{shop.name}</h3>
        <h4>Unit: {shop.floor}-{shop.unit}</h4>
        <strong>Type: {shop.type}</strong>
      </div>)
    }
    */

    // Utilising Bootstrap
    for (let shop of this.state.shops) {
      jsx.push(
        <div key={shop.id} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">{shop.name}</h3>
            <div className='"card-text'>
              <h4>
                Unit: {shop.floor}-{shop.unit}
              </h4>
              <strong>Type: {shop.type}</strong>
            </div>
          </div>
        </div>
      );
    }

    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Panda Mall</h1>
        {this.renderShops()}

        <h2>Panda Mall Directory (Using Mapping)</h2>
        <div>
          {this.state.shops.map((shop) => (
            <div key={shop.id} className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">{shop.name}</h3>
                <div className='"card-text'>
                  <h4>
                    Unit: {shop.floor}-{shop.unit}
                  </h4>
                  <strong>Type: {shop.type}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
