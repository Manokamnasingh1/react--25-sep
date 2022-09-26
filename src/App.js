import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [value, setValue]=useState(1);
  const [count, setCount]=useState(0);
  
  useEffect(() => {
    
    setCount(count+1)
  }, [value]);

  return (
    <div className="App">
      <h1 style={{backgroundColor:"lightblue"}}>Hello</h1>
      
      <h1 style={{color: "red"}} >hello</h1>
      <h4>Updated{count} times...</h4>
      <button onClick={()=>setValue(value+1)}>Take the shot!</button>
    </div>
  );
}

export default App;
