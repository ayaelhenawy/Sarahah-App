import { userModel } from "../../Database/models/user.model.js"
import { AppError } from "../AppError.js";




export const emailExist=async(req,res,next)=>{
    let user= await userModel.findOne({email:req.body.email});
    if(user)
       //return res.json({message:"This email is exist !"})
    return next(new AppError("This email is exist !",401))
    else 
        next()
}
