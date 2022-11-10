import React from 'react'


function Output() {
  return (
    <div className='Output'>
    <table>
      <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>User </th>
        <th>MobileNumber</th>
      </tr>
      </thead>
      <tbody>
        { 
          
          Output.map((row)=>
            (
            // {row.id}
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.username}</td>
              <td>{row.mobileNum}</td>

            </tr>)
          )
        }
      </tbody>
    </table>
    </div>

  )
}

export default Output;