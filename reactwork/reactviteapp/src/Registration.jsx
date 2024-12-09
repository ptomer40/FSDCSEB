import React, { useState } from 'react'

function Registration({regData}) {
const[userName,setUserName]=useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const[userdata,setuserdata]=useState();

  function showData(e){
    e.preventDefault();
    const data={
      userName,
      email,
      password
    }
    regData(data);
    //setuserdata(data);
  }
  return (
    <div>
      {/* <div>{JSON.stringify(userdata)}</div> */}
         <form>
         <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={(e)=>setUserName(e.target.value)} type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" onClick={showData} class="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Registration