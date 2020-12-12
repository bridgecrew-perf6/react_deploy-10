import React, {useState} from 'react'
//import Mobile from './test'
import Parent from './Parent'
import counterContext from './CounterContext';


export default function App() {
  let countState = useState(20);
  //let [count, setCount] = useState(0);
  return(
    <counterContext.Provider value={countState}>
    <div> 
      <Parent childName="Shahbaz" />
    </div>
    </counterContext.Provider>
  );
}


