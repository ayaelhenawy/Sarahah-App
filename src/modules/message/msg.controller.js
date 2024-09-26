import { msgModel } from "../../../Database/models/message.model.js"
import { catchError } from "../../middleware/catchGlobalError.js";
import QRcode from 'qrcode'


const userMsg=catchError(async(req,res)=>{
    let msgs=await msgModel.find({recievedId:req.user.userId});  
     //لتزم نفس الاسم ال الريكويست اللي موجود ف ال ميديل وير اللي قبلها 
    res.json({message:"success",msgs});
})

const addMsg=catchError(async(req,res)=>{
    await msgModel.insertMany(req.body);
    res.json({message:"success"});
})
const shareProfile=catchError(async(req,res)=>{
    QRcode.toDataURL('http://localhost:3000/messages',(err,qr)=>{
    res.send(`<img src=${qr}>`)
    })
})

export{
    userMsg,addMsg,shareProfile
}