function Btn() {
  const clickHandler = () => {
    console.log("i'm being clicked");
  };

  return <button onClick={clickHandler}>Click me</button>;
}

export default Btn;
