import React, { useState } from 'react';

function New() {
    const [sports,setSports] = useState();
    const handleChange = (e)=>{
        setSports(e.target.value);
        console.log(e.target.value);
    }
  return (
    <div onChange={handleChange}>
        <input type="checkbox" name="sports" value="tennis" checked={sports === "tennis"}>tennis</input>
        <input type="checkbox" name="sports" value="football" checked={sports === "football"}>football</input>
        <input type="checkbox" name="sports" value="volleyball" checked={sports === "volleyball"}>volleyball</input>
    </div>
  )
}

export default New;