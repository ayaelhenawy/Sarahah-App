import { createTransport } from "nodemailer";
import jwt from 'jsonwebtoken'
import { htmlTemplate } from "./htmltemplate.js";


export const sendEmails=async(email)=>{
const transporter = await createTransport({
    service:'gmail',
    auth: {
    user: "ayaalaaelhenawy@gmail.com",
    pass: "lagcwnjyjgybydbc",
    },
});
let token =jwt.sign({email},'ayaalaa');
const info = await transporter.sendMail({
    from: '<ayaalaaelhenawy@gmail.com>', 
    to: email, 
    subject: "SarahahApp ✔", 
    html: htmlTemplate(token), 
    });
}
