// based on an usual website. wait for data to load with componentDidMount and render the website

import React from "react";
import axios from "axios"; // load data with axios (json files)

// need to load data dynamically before page is fully rendered. use react lifestyle!

export default class MallDirectoryMount extends React.Component {
  state = {
    shops: [],
    events: [],
  };

  // async function to load data from json files dynamically
  loadData = async () => {};

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
    for (let eachEvent of this.state.events) {
      elements.push(
        <li className="list-group-item" key={eachEvent}>
          {eachEvent}
        </li>
      );
    }
    return <ol className="list-group">{elements}</ol>;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Rich Mall Directory</h1>
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

          <div className="row">
            <h2>Events</h2>
            {this.renderEvents()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
