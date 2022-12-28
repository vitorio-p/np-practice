import React from "react";

export default class Directory extends React.Component {
  state = {
    searchLevel: "",
    searchType: "",
    shops: [
      {
        id: 1,
        name: "Fairprice",
        type: "Supermarket",
        level: 1,
        unit: 1,
      },
      {
        id: 1,
        name: "Don Don Donki",
        type: "Supermarket",
        level: 2,
        unit: 1,
      },
      {
        id: 3,
        name: "KFC",
        type: "Fast food restaurant",
        level: 1,
        unit: 2,
      },
      {
        id: 4,
        name: "Nike",
        type: "Sports",
        level: 3,
        unit: 1,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Level: </label>
          <input
            type="text"
            value={this.state.searchLevel}
            onChange={(event) => {
              this.setState({
                searchLevel: event.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          <label>Type: </label>
          <input
            type="text"
            value={this.state.searchType}
            onChange={(event) => {
              this.setState({
                searchType: event.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          {this.state.shops
            .filter((eachShop) =>
              (eachShop.type
                .toUpperCase()
                .includes(this.state.searchType.toUpperCase())
              ) && this.state.searchLevel == "" ? eachShop.level : (
                eachShop.level
                .includes(this.state.searchLevel)
              )
            )
            .map((eachShop) => (
              <div key={eachShop.id}>
                <h1>{eachShop.name}</h1>
                <h2>{eachShop.type}</h2>
                <h3>
                  Unit: {eachShop.level}-{eachShop.unit}
                </h3>
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}
