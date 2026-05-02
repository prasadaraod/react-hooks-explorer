import React, { useState } from 'react';

const CounterPage = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>CounterPage
        <p> counter: {counter}</p>
        <p>
            <button onClick={()=>setCounter(counter+1)}>Increment</button> &nbsp; &nbsp; &nbsp;
            <button onClick={()=>setCounter(counter-1)}> Decrement </button> &nbsp; &nbsp; &nbsp;
            <button onClick={()=>setCounter(0)}> Reset </button>
        </p>
    </div>
  )
}

export default CounterPage