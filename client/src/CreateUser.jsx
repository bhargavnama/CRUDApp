import React from "react";

export default function CreateUser(){
    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Add User</h2>
                <form action="">
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Eamil"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" className="form-control" min="0"/>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}