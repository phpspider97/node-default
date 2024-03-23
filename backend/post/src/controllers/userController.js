import UserModel from "../models/UserModel.js"

const userAdd = async (req,res) => {
    try{
        const response = await UserModel.create(req.body) 
        res.status(200).json(response)
    }catch(err){ 
        res.status(200).json({msg:err.message})
    }
}
const userList = async (req,res) => {
    try{
        const response = await UserModel.find() 
        res.status(200).json(response)
    }catch(err){ 
        res.status(200).json({msg:err.message})
    }
}

export { 
    userAdd,
    userList
}