import React from 'react'

export default function AddUser({updateUserData}) { 
    return (
        <div>
            <input type="text" className="form-control" onChange={(e)=>{updateUserData(e.target.value)}} placeholder="User name"/><br />
        </div>
    )
}