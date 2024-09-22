import jwt from 'jsonwebtoken'

export const auth =async(req,res,next)=>{
    let token =req.header('token');
    jwt.verify(token, 'aya', (err, decoded) => {
        if (err) {
            return res.json({ message: "Invalid token.", err });
        } else {
            req.user = decoded;   //  ده الريكويست ال اللي هيروح لل ميدل وير اللي بعدها ولازم تكون نفس الاسم 
            //req.aya=decoded    هيبقي غلطuser  وهناك استعملت   
            next(); 
        }
    })
}