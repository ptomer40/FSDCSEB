import React, { useState } from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
import Imagemanipulation from './Imagemanipulation';
import MyUseEffect from '../MyUseEffect';
import UseFetchAPI from './UseFetchAPI';
import Login from './Login';
import Registration from './Registration';
function App() {

  const[rdata,setrdata]=useState();
  const h1=<h1>Hello World</h1>;
 const mystyle={
  color:'red',
  backgroundColor:'yellow'
 }


 
  return (
    <div>
      <div>
        {JSON.stringify(rdata)}
      </div>
   <h2>Hello Using useSatte Hook</h2>
  <div>
    {/* <Login /> */}
    <Registration regData={setrdata} />
    {/* <UseStudentState /> */}
    {/* <Imagemanipulation /> */}
    {/* <MyUseEffect /> */}
    {/* <UseFetchAPI /> */}
    {/* <Login /> */}
  <div>
    <h2>Login Form</h2>
    <Login regdata={rdata} />
  </div>
   
  </div>
    </div>
      
  )
}

export default App