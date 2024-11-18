import React, { useState } from 'react'

function UseStudentState() {
    const [count,setCount]=useState(20);

    function doIncrement(){

      console.log("Hi insdie do increment");
      setCount(count+10);
    }

     function doDecrement(){
      setCount(count-5);
    }
  return (
    <>
    <div style={{color:'red', border:'2px solid red', width:'300px', height:'400px', marginLeft:'500px', backgroundColor:'rgb(120,200,180)',fontSize:'50px', paddingLeft:"150px", paddingTop:"50px"}}>
      {count}

    <div>
    <button id='btn' onClick={doIncrement} style={{backgroundColor:'#F34CCD'}}>Increment Counter</button>
    &nbsp;
    <button id='btn' onClick={doDecrement} style={{backgroundColor:'#F34CCD'}}>Increment Counter</button>
  
  
  </div>

    </div>
  
  
  </>
  )
}

export default UseStudentState