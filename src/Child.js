import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = (props)=>{
    let counterValue= useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>Data is comming from child: {props.childName} </h1>
            <h4>Data is comming from child: {counterValue[0]} </h4>
            <button onClick={ ()=> counterValue[1](++counterValue[0])}>Increment</button>
        </div>
    );
}

export default Child