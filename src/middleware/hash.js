import bcrypt from 'bcrypt'


export const hashPasowrd =(req,res,next)=>{
    let hash= bcrypt.hashSync(req.body.password,8)
    req.body.password=hash;
    next();
}