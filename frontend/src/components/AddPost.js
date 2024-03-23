import React from 'react'

export default function AddPost({updateUserData}) {
    return (
        <div>
            <textarea type="text" className="form-control" onChange={(e)=>{updateUserData(e.target.value)}} placeholder="Add post" rows="5"/><br />
        </div>
    )
}