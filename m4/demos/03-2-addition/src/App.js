import SumOfTwo from "./SumOfTwo";
import "./App.css";

/*
// first method
function App() {
  return (
    <div>
      <SumOfTwo number1={10} number2={30} />
    </div>
  );
};
*/

// second method
function App() {
  let integer2 = 30;
  return (
    <div>
      <SumOfTwo number1={parseInt("10")} number2={integer2} />
    </div>
  );
}

export default App;
