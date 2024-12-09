import React, { useState } from 'react'
import cat from './cat3.png';
function Imagemanipulation() {
  const[height,setHeight]=useState(100);
  const[rotateimg,setRotate]=useState(0);
  const[red,setRed]=useState();
  const[green,setGreen]=useState();
  const[blue,setBlue]=useState();

  function enhanceHeight(){
    setHeight(height+30);
  }

  function rotateImage(){
 setRotate(rotateimg+30);
  }

  function setColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
  }

  return (
    <div style={{border:'2px solid red',height:'300px', width:'400px'
    ,marginLeft:'250px', backgroundColor:'#ccff66'

    }}>

<div style={{backgroundColor:`rgb(${red},${green},${blue})`, marginLeft:'100px', marginTop:'30px', border:'1px solid black', height:'100px', width:'100px'}}>
    <img src={cat} style={{transform:`rotate(${rotateimg}deg)`}} height={height} width={100} alt="cat image" />
</div>
<div style={{marginTop:"100px"}}>
<button id='btn' onClick={enhanceHeight} >EnhanceHeight</button>
<button id='btn' >EnhanceWidth</button>
<button id='btn' onClick={rotateImage} >Rotate</button>
<button id='btn' onClick={setColor} >ChangeBackground</button>

{rotateimg}


</div>

    </div>
  )
}

export default Imagemanipulation