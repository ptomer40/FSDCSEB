import React from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
import Imagemanipulation from './Imagemanipulation';
function App() {
  const h1=<h1>Hello World</h1>;
 const mystyle={
  color:'red',
  backgroundColor:'yellow'
 }


 
  return (
    <div>
   <h2>Hello Using useSatte Hook</h2>
  <div>
    {/* <UseStudentState /> */}
    <Imagemanipulation />
   
  </div>
    </div>
      
  )
}

export default App