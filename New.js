import React from 'react';
import { useState } from 'react';

function New() {
  const [gender,setGender] = useState("");
      // setGender(!gender)
    // const checked =e.target.value
    // if(checked === true){
    //   console.log("checked")
    // }
    // else{
    //   console.log()
    // }
    
    // const element = e.target.value;
  

  return (
    <div>
      <input type="checkbox" id="male" name="gender" checked={gender === "male"} onChange={()=>setGender("male")}></input>male
      <input type="checkbox" id="female" name="gender" checked={gender === "female"}  onChange={()=>setGender("female")}></input>female
    </div>
  )
}

export default New;