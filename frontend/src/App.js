import { useState, useEffect } from "react";
import axios from 'axios'
import AddUser from "./components/AddUser";
import ListUser from "./components/ListUser";
import AddPost from "./components/AddPost";
import ListPost from "./components/ListPost";
import AddComment from "./components/AddComment";
function App() { 
    const [role,setRole] = useState(1)
    const [data,setData] = useState('')
    const [userData,setUserData] = useState([])
    const [postData,setPostData] = useState([])
    const [dynamicID,setDynamicID] = useState(0)
    function updateData(data=''){
        setData(data)
    }
    const submitData = () => { 
        switch (role) {
            case 1:
                axios.post('http://localhost:3001/user/add',{name:data}).then((data)=>{
                    console.log(data.data)
                    getAllUserData()
                }).catch((err)=>{
                    console.log(err.message)
                })
                break;
            case 2:
                    axios.post('http://localhost:3001/post/add',{name:data}).then((data)=>{
                        console.log(data.data)
                        getAllUserData()
                    }).catch((err)=>{
                        console.log(err.message)
                    })
                    break;    
        
            default:
                break;
        }
    }

    const getAllUserData = () => {
        axios.get('http://localhost:3001/user/all').then((data)=>{
            setUserData(data.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    const getAllPostData = () => {
        axios.get('http://localhost:3001/user/all').then((data)=>{
            setPostData(data.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getAllUserData()
        getAllPostData()
        const queryParams = new URLSearchParams(window.location.search)
        const id = queryParams.get('id')
        const role = queryParams.get('role')
        if(id != null && role != null){
            setRole(role)
            setDynamicID(id)
        }
    },[])
    return (
        <div className="container p-5">
            <h3>Add User and another Data</h3>
            <input type="radio" name="role" onChange={()=>{setRole(1)}} /> User &nbsp;&nbsp;
            <input type="radio" name="role" onChange={()=>{setRole(2)}} /> Post &nbsp;&nbsp;
            <input type="radio" name="role" onChange={()=>{setRole(3)}} /> Comment <br /><br />
            {
                (role ==1)?<AddUser updateUserData={updateData} />:(role ==2)?<AddPost updateUserData={updateData}/>:<AddComment />
            }
            <input type="button" name="submit" className="btn btn-success w-100" onClick={submitData} value="submit"/>

            {
                (role ==1)?<ListUser getAllUserData={userData} />:(role ==2)?<ListPost getAllUserData={postData} />:<AddComment />
            }

        </div>
    );
}
export default App;