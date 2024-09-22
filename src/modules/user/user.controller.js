import { userModel } from "../../../Database/models/user.model.js"
import bcrypt from 'bcrypt'
import { sendEmails } from "../../emails/confirmEmail.js";
import jwt from 'jsonwebtoken'


const signup=async(req,res)=>{
    await userModel.insertMany(req.body);
    sendEmails(req.body.email);
    res.json({message:"success"});
}
const signin=async(req,res)=>{
    let user =await userModel.findOne({email:req.body.email});
    if(user&&bcrypt.compareSync(req.body.password,user.password)){
        let token = jwt.sign({userId:user._id,email:req.body.email},'aya');
        res.json({message:"success",token});
    }

    else res.json({message:"Incorrect email or Pssword"});
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
    signup,verifyEmail,signin
}