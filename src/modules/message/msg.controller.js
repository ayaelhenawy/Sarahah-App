import { msgModel } from "../../../Database/models/message.model.js"
import { catchError } from "../../middleware/catchGlobalError.js";



const userMsg=catchError(async(req,res)=>{
    let msgs=await msgModel.find({recievedId:req.user.userId});  
     //لتزم نفس الاسم ال الريكويست اللي موجود ف ال ميديل وير اللي قبلها 
    
    res.json({message:"success",msgs});
})

const addMsg=catchError(async(req,res)=>{
    await msgModel.insertMany(req.body);
    res.json({message:"success"});
})

export{
    userMsg,addMsg
}