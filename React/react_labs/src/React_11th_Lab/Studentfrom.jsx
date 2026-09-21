import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Studentfrom() {
    const [studentList, setStudentList] = useState([]);

    const Api_URL = "https://6a3b6362e4a07f202e14dae0.mockapi.io/student"

    useEffect(() => {
        fetch(Api_URL)
        .then((res) => res.json())
        .then((data)=>{setStudentList(data)
            console.log("hedlclo")
        })
    },[])

    const Navigate = useNavigate()
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>StudentID</th>
                    <th>StudentName</th>
                    <th>StudentEmail</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((stu,index) => {
                            return(
                            <>
                                <tr key={stu.id}>
                                    <td>{index + 1}</td>
                                    <td>{stu.Name}</td>
                                    <td>{stu.Email}</td>
                                    <td><button onClick={() => {Navigate("/student/${stu.id}")}}>Detail</button></td>
                                </tr>
                            </>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Studentfrom
