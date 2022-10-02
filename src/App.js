import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Nev from './component/Nev';
import Create from './component/Create';
function App() {
  const [value, setValue]=useState(1);
  const [count, setCount]=useState(0);
  
  useEffect(() => {
    
    setCount(count+1)
  }, [value]);

  return (
    <div className="App">
      <Create/>
      <Nev/>
      
      
    </div>
  );
}

export default App;
