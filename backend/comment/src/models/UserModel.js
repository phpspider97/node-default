import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const UserModel = mongoose.model('comment',userSchema)

export default UserModel