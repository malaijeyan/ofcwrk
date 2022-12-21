import React from 'react';
import { useState } from 'react';
function Input() {
    const [num,setNum] = useState();
    const handleClick=(e)=>{
        if(e.num === 0 && e.num>=0) {
            setNum(e.num);
        }
    }
  
  return (
    <div>
    <label>number</label>
        <input type='number' value={num} onClick={handleClick}
        ></input>
       
    </div>
  );

}   
 
export default Input;
