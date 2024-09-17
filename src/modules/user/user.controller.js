import { userModel } from "../../../Database/models/user.model.js"
import bcrypt from 'bcrypt'
import { sendEmails } from "../../emails/confirmEmail.js";
import jwt from 'jsonwebtoken'


const signup=async(req,res)=>{
    await userModel.insertMany(req.body);
    sendEmails(req.body.email);
    res.json({message:"success"});
}

const verifyEmail=async(req,res)=>{
    await jwt.verify(req.params.token,'ayaalaa',async (err,decoded)=>{
        if(err)res.json({message:'Error',err});
        else {
            await userModel.findOneAndUpdate({email:decoded.email},{isverify:true})
            res.json({message:"success"});
        }
    })
}


export{
    signup,verifyEmail
}