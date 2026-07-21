import React from "react";
import { useState } from "react";

const App = () => {
  // let counter = 15;

  const [counter, setCounter] = useState(15);

  function addValue() {
   setCounter(counter + 1);
   setCounter(counter + 1);
   setCounter(counter + 1);
   setCounter(counter + 1);
  }
  // function removeValue() {
  //   if (counter === 0) {
  //     setCounter(counter);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // }

  return (
    <>
      <div className="container">
        <h1>Counter App - {counter}</h1>
        <br />
        <button onClick={addValue}>Add {counter}</button>
        <br />
        <button >Remove {counter}</button>
      </div>
    </>
  );
};

export default App;
