import jwt from 'jsonwebtoken'
import { AppError } from '../utilts/appError.js';


export const auth =async(req,res,next)=>{
    let token =req.header('token');
    jwt.verify(token, 'aya', (err, decoded) => {
        if (err) {
            
            //res.json({ message: "Invalid token.", err });
            return next(new AppError("Invalid token.",401))
        } else {
            req.user = decoded;   //  ده الريكويست ال اللي هيروح لل ميدل وير اللي بعدها ولازم تكون نفس الاسم 
            //req.aya=decoded    هيبقي غلطuser  وهناك استعملت   
            next(); 
        }
    })
}