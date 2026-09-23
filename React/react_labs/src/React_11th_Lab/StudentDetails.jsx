import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const API_URL = "https://6a3b6362e4a07f202e14dae0.mockapi.io/student";

  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  const deleteStudent = () => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => {
        window.location.href = "/";
      });
  };

  return (
    <div className="container m-3">
      <h1>Student Details</h1>

      <div className="card p-3">
        <div className="d-flex align-items-center mb-3">
          <img
            src={student.Image}
            alt={student.Student}
            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "12px", border: "1px solid #ddd" }}
          />
        </div>

        <p><b>ID:</b> {student.id}</p>
        <p><b>Student:</b> {student.Student}</p>
        <p><b>Department:</b> {student.Department}</p>
        <p><b>Email:</b> {student.Email}</p>
        <p><b>Phone:</b> {student.Phone}</p>
        <p><b>Address:</b> {student.address}</p>

        <div className="d-flex gap-2 m-3">
          <Link to={`/StudentForm/${id}`}>
            <button className="btn btn-warning btn-sm">Edit</button>
          </Link>

          <button className="btn btn-danger btn-sm" onClick={deleteStudent}>
            Delete
          </button>

          <Link to="/">
            <button className="btn btn-secondary btn-sm">Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails