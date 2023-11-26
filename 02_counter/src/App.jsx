import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () =>{
    // console.log("Value Added", Math.random());
    console.log(counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button>Remove Value</button>
    </>
  );
}

export default App;
