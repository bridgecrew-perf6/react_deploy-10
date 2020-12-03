import React from 'react'

function Mobile(props){
    return(
    <div>
        <h1>Mobile Component</h1>
        <h2>Mobile Name : {props.name}</h2>
        <h2>Mobile Type : {props.type}</h2>
        <h3>Value of counter form Test.js:{props.counter}</h3>
    </div>
    );
}

export default Mobile;