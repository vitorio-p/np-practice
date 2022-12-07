import React from "react";

export default class MallDirectory extends React.Component {
  state = {
    searchTerms: "",
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

  // required for using loops
  renderShops() {
    let jsx = [];
    for (let shop of this.state.shops) {
      if (
        shop.name.toUpperCase().includes(this.state.searchTerms.toUpperCase())
      ) {
        jsx.push(
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{shop.name}</h3>
              <h6 className="card-text">
                Shop Unit: {shop.floor}-{shop.unit}
              </h6>
            </div>
          </div>
        );
      }
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h2>Directory</h2>
        <label>Search here:</label>
        <input
          className="form-control mb-3"
          type="text"
          value={this.state.searchTerms}
          onChange={(event) => {
            this.setState({
              searchTerms: event.target.value,
            });
          }}
        />
        <h2>Using Maps</h2>
        <div>
          {this.state.shops
            .filter((eachShop) =>
              eachShop.name
                .toUpperCase()
                .includes(this.state.searchTerms.toUpperCase())
            )
            .map((eachShop) => (
              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title">{eachShop.name}</h3>
                  <h6 className="card-text">
                    Shop Unit: {eachShop.floor}-{eachShop.unit}
                  </h6>
                </div>
              </div>
            ))}
        </div>

        <h2>Using Loops</h2>
        {this.renderShops()}
      </React.Fragment>
    );
  }
}
