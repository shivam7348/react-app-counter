 import { useState, } from "react";
 
 function App() {
    let [counter, setCounter]= useState(0)
  // let counter = 15

  const addVAlue = () => {
    // console.log("VAlue added", counter);
    // counter = counter + 1
    setCounter(counter + 1  )  
        setCounter(counter + 1  )  
    setCounter(counter + 1  )  
    setCounter(counter + 1  )  
    setCounter(counter + 1  )  

  }
  const removeVAlue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>BAsic React.</h1>
    <h2>Counter VAlue {counter}</h2>

    <button
    onClick={addVAlue}> Add Value</button>
    <br />
    <button onClick={removeVAlue}>Remove Value</button>
    </> 
  )
 }
 export default App