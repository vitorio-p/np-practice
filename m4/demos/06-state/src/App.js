import Numberbox from "./Numberbox";
import Counter from "./Counter";
import Counter2 from "./Counter2";

function App() {
  return (
    <div>
      <Numberbox />
      <Numberbox />
      <Counter initialValue={100} />
      <Counter2 initialValue={50} />
    </div>
  );
}

export default App;
