const Item = (props) => {
  return (
    <div className="item-info">
      <h2>Name: {props.item.name}</h2>
      <h3>Price: {props.item.price}</h3>
      <h4>Sugar Level: {props.item.sugar}</h4>
      <button onClick={() => props.beginEdit(props.item)}>Edit</button>
      <button onClick={() => props.delete(props.index)}>Delete</button>
    </div>
  );
};

export default Item;
