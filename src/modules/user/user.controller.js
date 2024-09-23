import { userModel } from "../../../Database/models/user.model.js"
import bcrypt from 'bcrypt'
import { sendEmails } from "../../emails/confirmEmail.js";
import jwt from 'jsonwebtoken'
import { catchError } from "../../middleware/catchGlobalError.js";
import { AppError } from "../../AppError.js";


const signup=catchError(async(req,res)=>{
    await userModel.insertMany(req.body);
    sendEmails(req.body.email);
    res.json({message:"success"});
})
const signin=catchError(async(req,res,next)=>{
    let user =await userModel.findOne({email:req.body.email});
    if(user&&bcrypt.compareSync(req.body.password,user.password)){
        let token = jwt.sign({userId:user._id,email:req.body.email},'aya');
        res.json({message:"success",token});
    }

    else 
    //res.json({message:"Incorrect email or Pssword"});
    next(new AppError("Incorrect email or Pssword",401));
})

const verifyEmail=catchError(async(req,res,next)=>{
    await jwt.verify(req.params.token,'ayaalaa',async (err,decoded)=>{
        if(err)
            //res.json({message:'Error',err});
            next(new AppError(err,401))
        else {
            await userModel.findOneAndUpdate({email:decoded.email},{isverify:true})
            res.json({message:"success"});
        }
    })
})


export{
    signup,verifyEmail,signin
}