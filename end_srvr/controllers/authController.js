import {hashPassword,comparePassword} from "../helper/authhelper.js"
import usermodel from "../models/usermodel.js"
import JWT from 'jsonwebtoken';


export const registerController = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        console.log(name);
        console.log(email);
        if(!name)return res.send({error:'Name is required'})
        if(!email)return res.send({error:'Email is required'})
        if(!password)return res.send({error:'Password is required'})

        //if existing user
        const existingUser = await usermodel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"User already register !! "
            })
        }
        else{

            const hashedPassword = await hashPassword(password);
            console.log("INITIALISE");
            const new_user = await usermodel({name,email,password:hashedPassword}).save();
            console.log("NEW USER FOUND!!");
            return res.status(201).send({
                success:true,
                message:"User succesfully registered !!",
                new_user
            })
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Error in registerController",
            error
        })
    }
}


export const loginController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email)return res.send({error:'Email is required'})
        if(!password)return res.send({error:'Password is required'})

        //if existing user
        const user = await usermodel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not register !! "
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(404).send({
                success:false,
                message:"Invalid Password"
            })
        }
        console.log("TOKEN GENERATION");
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        console.log("GENERATED!!");
        console.log(typeof(token));
        return res.status(200).send({
            success:true,
            message:"User succesfully registered !!",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
            },
            token
        })
    } catch (error) {
        console.log(error);
    }
}



export const forgotPasswordController = async(req,res)=>{
    try {
        const {email,newPassword}=req.body;
        console.log("HASHING");
        if(!email){
            res.status(400).send({
                message:"Email is required",
            })
        }
        if(!newPassword){
            res.status(400).send({
                message:"New Password is required",
            })
        }
        //check
        const user=await usermodel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not found"
            })
        }
        const hashed=await hashPassword(newPassword);
        await usermodel.findOneAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"password reset succesfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}


