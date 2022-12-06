import Numberbox from "./Numberbox";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Alertbox from "./Alertbox";

function App() {
  return (
    <div>
      <Numberbox />
      <Numberbox />
      <Counter initialValue={100} />
      <Counter2 initialValue={50} />
      <Alertbox initialValue={20} />
    </div>
  );
}

export default App;
