import React, { useState } from 'react';
import Message from './message';
import './App.css';


  
function App() {
  let [count,setcount]=useState(0);
  let [isMorning,setMorning]=useState(false);
  
  return (
    <div className={`box $ {isMorning ? 'dayLight' : " "}`}>
      <h1>Day Time ={isMorning ? 'Morning' : 'Night'}</h1>
       

      <Message  counter={count}/>
      <button onClick={()=>setcount(++count)}>
        Value + </button>
      <button onClick={()=>setcount(--count)}>
        value - </button>
      <br/>
      <br/>
      <button onClick={()=>setcount(0)}> 
       Reset </button>
      </div>

  );
}


export default App;
