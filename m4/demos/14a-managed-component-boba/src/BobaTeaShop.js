import React from "react";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import Item from "./components/Item";

export default class BobaTeaShop extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: "Milk tea with pearls",
        price: 2,
        sugar: 2,
      },
      {
        id: 2,
        name: "Brown milk tea with pearls",
        price: 3,
        sugar: 3,
      },
      {
        id: 3,
        name: "Chocolate slushie",
        price: 4,
        sugar: 5,
      },
    ],
    itemBeingEdited: {},
    editedItemName: "",
    editedItemPrice: "",
    editedItemSugar: "",
    newItemName: "",
    newItemPrice: "",
    newItemSugar: "",
  };

  beginEdit = (item) => {
    this.setState({
      itemBeingEdited: item,
      editedItemName: item.name,
      editedItemPrice: item.price,
      editedItemSugar: item.sugar,
    });
  };

  addNewItem = () => {
    const newItem = {
      id: Math.floor(Math.random * 10000 + 1),
      name: this.state.newItemName,
      price: this.state.newItemPrice,
      sugar: this.state.newItemSugar,
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  finishEdit = (index) => {
    const modifiedItem = {
      id: this.state.itemBeingEdited.id,
      name: this.state.editedItemName,
      price: this.state.editedItemPrice,
      sugar: this.state.editedItemSugar,
    };

    const updatedItems = [
      ...this.state.items.slice(0, index),
      modifiedItem,
      ...this.state.items.slice(index + 1),
    ];

    this.setState({
      items: updatedItems,
      itemBeingEdited: {},
      editedItemName: "",
      editedItemPrice: "",
      editedItemSugar: "",
    });
  };

  delete = (index) => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Boba Tea Shop</h1>
        {this.state.items.map((eachItem, index) => {
          if (
            this.state.itemBeingEdited &&
            eachItem.id === this.state.itemBeingEdited.id
          ) {
            return (
              <EditItem
                index={index}
                key={eachItem.id}
                name={this.state.editedItemName}
                price={this.state.editedItemPrice}
                sugar={this.state.editedItemSugar}
                update={this.updateFormField}
                cancelUpdate={() => {
                  this.setState({
                    itemBeingEdited: {},
                  });
                }}
                confirmUpdate={this.finishEdit}
              />
            );
          } else {
            return (
              <Item
                item={eachItem}
                key={eachItem.id}
                beginEdit={this.beginEdit}
                index={index}
                delete={this.delete}
              />
            );
          }
        })}

        <AddItem
          name={this.state.newItemName}
          price={this.state.newItemPrice}
          sugar={this.state.newItemSugar}
          create={this.addNewItem}
          update={this.updateFormField}
        />
      </React.Fragment>
    );
  }
}
