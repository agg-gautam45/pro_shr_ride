import JWT from 'jsonwebtoken';
import usermodel from "../models/usermodel.js";


export const testController = async(req,res)=>{
    try {
        const token =req.headers.authorization;
        console.log(token);
       const decoded=await JWT.verify(token,process.env.JWT_SECRET);
       console.log("HII");
       const mongooseId = decoded._id;
       const user=await usermodel.findOne({_id:mongooseId});
       return res.status(200).send({
        success:true,
        message:"Token is valid",
        email:user.email
       })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}