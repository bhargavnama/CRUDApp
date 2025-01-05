import React from "react";
import { useState } from "react";
import "./Users.css"
import { Link } from "react-router-dom";

export default function Users(){
    
    let [users, setUsers] = useState([{
        Name: "Bhargav",
        Email: "bhargavnama@gmail.com",
        Age: 20
    }])

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center Users">
            <div className="w-50 bg-white rounded p-3 container">
                <Link to="/create" className="btn btn-outline-info">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Link to="/update" className="btn btn-outline-success">Update</Link>&nbsp;&nbsp;
                                        <button className="btn btn-outline-success">Delete</button>
                                    </td>
                                </tr>
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
}