import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5;

  const addValue = () =>{
    // console.log("Value Added", Math.random());
    // console.log(counter);
    // counter = counter + 1;
    if(counter < 20){
    setCounter(counter + 1);
    }
  }

  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;