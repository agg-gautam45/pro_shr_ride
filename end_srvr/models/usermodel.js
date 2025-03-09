import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Username is Required"]
    },
    email: {
        type:String,
        required:[true,"Email is required"]
    },
    password: {
        type:String,
        required:[true,"Password is required"]
    },
})

export default mongoose.model('user',userSchema);