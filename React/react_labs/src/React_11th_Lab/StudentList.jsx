import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function StudentList() {
    const api = "https://6a3b6362e4a07f202e14dae0.mockapi.io/student"
    const [data, setData] = useState([])
  
    useEffect(() => {
      fetch(api, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log('MockAPI data:', data)
        })
    }, [])
  
    
    const tableStyle = {
      border: '1px solid black',
      borderCollapse: 'collapse'
    };
  
    return (
      <div className='container p-2'>
        <h2>CRUD</h2>
        <Link to="/studentform">
          <button className="btn btn-primary ms-2">Add</button>
        </Link>
        <table style={tableStyle}>
          <thead>
            <tr style={tableStyle} className="table table-striped p-2">
              <th style={tableStyle}>id</th>
              <th style={tableStyle}>roll</th>
              <th style={tableStyle}>Image</th>
              <th style={tableStyle}>student</th>
              <th style={tableStyle}>department</th>
              <th style={tableStyle}>Email</th>
              <th style={tableStyle}>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} style={tableStyle} className="p-2">
                <td style={tableStyle}>{index + 1}</td>
                <td style={tableStyle}>{index + 1}</td>
                <td style={tableStyle}>
                  <img
                    src={item.Image}
                    alt={item.Student}
                    style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }}
                  />
                </td>
                <td style={tableStyle}>{item.Student}</td>
                <td style={tableStyle}>{item.department}</td>
                <td style={tableStyle}>{item.Email}</td>
                <td style={tableStyle}>
                  <Link to={`/studentdetails/${item.id}`}>
                    <button className="btn btn-info m-2">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}  

export default StudentList