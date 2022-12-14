import React from 'react';
import Item from '../components/Item';

export default function AllItem(props) {
  return (
    <React.Fragment>
      <h1>All Items</h1>

      {props.items.map((eachItem) => {
        return (
          <Item
            key={eachItem._id}
            id={eachItem._id}
            name={eachItem.name}
            type={eachItem.type}
            price={eachItem.price}
          />
        );
      })}
    </React.Fragment>
  )
}