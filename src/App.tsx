import { useState } from "react";
import './App.css';



export default function App(){
  const [count, setCount] = useState(0);
  function plusOne(){
    setCount(count + 1);
  }
  function subtractOne(){
    if (count > 1){
      setCount(count - 1);
    }
    else{
      return;
    }
  }
  return(
    <>
      <h1>First React Component</h1>
      <hr />
      <div className="button-container">
        <button className="plus-one-button" onClick={plusOne}>+1</button>
        <p>Current count value: {count} </p>
        <button className="subtract-one-button" onClick={subtractOne}>-1</button>
      </div>
    </>
  )
}