import React from 'react'
import './student.css';
function Student({data}) {
  return (
    <div className='icard'>
       
      {/* {JSON.stringify(data)} */}
        <table>
        <tbody>
            <tr><td colSpan={2}>{data.college}</td></tr>
            <tr><td colSpan={2}><img src={data.pic} height={200} width={200}/></td></tr>
        <tr><td>Name:</td><td>{data.name}</td></tr>
        <tr><td>Branch:</td><td>{data.branch}</td></tr>
        <tr><td>Roll_Number:</td><td>{data.roll}</td></tr>
        <tr><td>Section:</td><td>{data.section}</td></tr>
        
        </tbody>

        </table>
        </div>
  )
}
// Student.defaultProps={
//   college:"AKG Engineering College"
// }

export default Student