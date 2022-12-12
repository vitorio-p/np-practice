// conditional loading. if slow network, can load skeletal wireframes to juke the consumers

import React from "react";
import axios from "axios"; // load data with axios (json files)

// need to load data dynamically before page is fully rendered. use react lifestyle!

export default class MallDirectoryMountData extends React.Component {
  state = {
    shops: [],
    events: [],
    isDataLoaded: false, // change to false to simulate slow network. else, change the network from inspect tool
  };

  // lifecycle
  async componentDidMount() {
    console.log(" please wait...");
    // the json file should ne in public folder
    const shopResponse = await axios.get("shops.json");
    console.log(shopResponse.data);

    const eventResponse = await axios.get("events.json");
    console.log(eventResponse.data);

    this.setState({
      shops: shopResponse.data.shops,
      events: eventResponse.data.events,
    });
  }

  renderEvents() {
    let elements = [];
    for (let event of this.state.events) {
      elements.push(
        <li className="list-group-item" key={event}>
          {event}
        </li>
      );
    }
    return <ol className="list-group">{elements}</ol>;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Rich Mall Directory</h1>
        {this.state.isDataLoaded ? (
          <React.Fragment>
            <h2>Shops</h2>
            <div className="row">
              {this.state.shops.map((eachShop) => {
                return (
                  <div className="card mb-4" key="eachShop.id">
                    <div className="card-body">
                      <div className="card-title">{eachShop.name}</div>
                      <ul>
                        <li>
                          Unit: {eachShop.floor}-{eachShop.unit}
                        </li>
                        <li>Type: {eachShop.type}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <h2>Events</h2>
              {this.renderEvents()}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="card mb-4" key="1">
              <div className="card-body">
                <div className="card-title">
                  <h3>Loading...</h3>
                </div>
                <ul>
                  <li>Unit: Loading...</li>
                  <li>Type: Loading....</li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
