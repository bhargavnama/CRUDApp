import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function CreateUser(){
    let [name, setName] = useState();
    let [age, setAge] = useState();
    let [email, setEmail] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/create", {name, email, age})
        .then(res => {
            console.log(res)
            navigate("/");
        })
        .catch(err => console.log(err))
    }
    return (
        
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Add User</h2>
                <form action="" onSubmit={Submit}>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Eamil" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" className="form-control" min="0" onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}