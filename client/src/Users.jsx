import React, { useEffect } from "react";
import { useState } from "react";
import "./Users.css"
import { Link } from "react-router-dom";
import axios from "axios";

let handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(result => {console.log(result)
        window.location.reload();
    })
    .catch(err => console.log(err));
}

export default function Users(){
    
    let [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => {
            setUsers(result.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    }, [])
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
                            loading ? (
                                <tr>
                                    <td colSpan="4" className="text-center">Loading...</td>
                                </tr>
                            ) : (
                                users?.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className="btn btn-outline-success">Update</Link>&nbsp;&nbsp;
                                        <button className="btn btn-outline-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                                }))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
}