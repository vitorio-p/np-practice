import React from "react";

export default class SecondHandShop extends React.Component {
  state = {
    items: [
      {
        _id: 1,
        itemName: "Jacket",
        price: 100,
      },
      {
        _id: 2,
        itemName: "Old Pants",
        price: 150,
      },
      {
        _id: 3,
        itemName: "Old Suit",
        price: 220,
      },
    ],
    newItemName: "",
    newPrice: "",
    itemBeingModified: null,
    modifiedItemName: "",
    modifiedPrice: "",
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addItem = () => {
    const newItem = {
      _id: Math.floor(Math.random() * 10000 + 1),
      itemName: this.state.newItemName,
      price: this.state.newPrice,
    };
    console.log(newItem);

    this.setState({
      items: [...this.state.items, newItem],
    });

    console.log(`item being added ${newItem._id}`);
  };

  deleteItem = (item) => {
    console.log(`item ${item._id} being deleted`);
    const indexToDelete = this.state.items.findIndex((eachItem) => {
      if (eachItem._id === item._id) return true;
      else return false;
    });

    const modifiedItems = [
      ...this.state.items.slice(0, indexToDelete),
      ...this.state.items.slice(indexToDelete + 1),
    ];

    this.setState({
      items: modifiedItems,
      itemBeingModified: null,
    });
  };

  beginEditItem = (eachItem) => {
    this.setState({
      itemBeingModified: eachItem,
      modifiedItemName: eachItem.itemName,
      modifiedPrice: eachItem.price,
    });
    console.log(eachItem);
  };

  processEditItem = (eachItem) => {
    const clonedItem = {
      ...this.state.itemBeingModified,
      itemName: this.state.modifiedItemName,
      price: this.state.modifiedPrice,
    };
    console.log(clonedItem);

    const indexToReplace = this.state.items.findIndex((item) => {
      if (item._id === clonedItem._id) return true;
      else return false;
    });

    const modifiedItems = [
      ...this.state.items.slice(0, indexToReplace),
      clonedItem,
      ...this.state.items.slice(indexToReplace + 1),
    ];

    this.setState({
      items: modifiedItems,
      itemBeingModified: null,
    });
  };

  cancelEditItem = () => {
    this.setState({
      itemBeingModified: null,
    });
  };

  displayItemInfo(eachItem) {
    return (
      <div key={eachItem._id} className="item-info">
        <h2>{eachItem.itemName}</h2>
        <h3>${eachItem.price}</h3>
        <button
          onClick={() => {
            this.beginEditItem(eachItem);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            this.deleteItem(eachItem);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  displayEdititem(eachItem) {
    return (
      <div>
        <h1>Edit item</h1>
        <li key={eachItem._id}>
          <input
            type="text"
            value={this.state.modifiedItemName}
            name="modifiedItemName"
            onChange={this.updateFormField}
          />
          <input
            type="text"
            value={this.state.modifiedPrice}
            name="modifiedPrice"
            onChange={this.updateFormField}
          />
          <button onClick={this.processEditItem}>Update</button>
          <button onClick={this.cancelEditItem}>Cancel</button>
        </li>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h4>Add new item here</h4>
        <input
          type="text"
          value={this.state.newItemName}
          name="newItemName"
          onChange={this.updateFormField}
        />
        <input
          type="text"
          value={this.state.newPrice}
          name="newPrice"
          onChange={this.updateFormField}
        />
        <button onClick={this.addItem}>Add Item</button>
        {this.state.items.map((eachItem) => {
          if (
            this.state.itemBeingModified &&
            eachItem._id === this.state.itemBeingModified._id
          ) {
            return this.displayEdititem(eachItem);
          } else {
            return this.displayItemInfo(eachItem);
          }
        })}
      </React.Fragment>
    );
  }
}
