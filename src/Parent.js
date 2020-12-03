import React from 'react';
import Child from './Child';

const Parent = (props)=>{
    return(
        <Child childName={props.childName} />
    );
}
export default Parent