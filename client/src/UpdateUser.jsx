import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, data } from "react-router-dom";

export default function UpdateUser(){
    let { id } = useParams();
    let [name, setName] = useState();
    let [age, setAge] = useState();
    let [email, setEmail] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
        .then(result => {
            console.log(result.data[0]);
            setName(result.data[0].name);
            setEmail(result.data[0].email);
            setAge(result.data[0].age);
        })
        .catch(err => console.log(err));
    }, []);

    let Submit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3001/updateUser/${id}`, {name, email, age})
        .then(result => {
            console.log(result);
            navigate("/");
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Update User</h2>
                <form action="" onSubmit={Submit}>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Eamil" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" className="form-control" min="0" value={age} onChange={(e) => setAge(e.target.value)}/> 
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}