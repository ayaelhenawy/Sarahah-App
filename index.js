process.on('uncaughtException',(err)=>{
    console.log("error",err)
})


import express from 'express'
import { dbConnections } from './Database/dbconnection.js';
import { userRouter } from './src/modules/user/user.router.js';
import { msgRouter } from './src/modules/message/msg.router.js';
import dotenv from "dotenv"
import { globalErrorMiddleware } from './src/middleware/globalErrorMiddleware.js';
import { AppError } from './src/utilts/appError.js';
dotenv.config()
const port = 3000
const app = express()
import multer from "multer"
import {v4 as uuidv4} from 'uuid'
import { photoModel } from './Database/models/photo.mode.js';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null,uuidv4()+ file.originalname)
    }
})

function fileFilter (req, file, cb) {
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  }
  else cb(null, false)
}




const upload = multer({ storage ,fileFilter})
app.use(express.json())
app.use(userRouter)
app.use(msgRouter)


app.post('/photos',upload.single('img'),async(req,res)=>{
    console.log(req.file)
    req.body.img=req.file.filename;
    await photoModel.insertMany(req.body);
    res.json({message:"success"})
})


dbConnections();
app.use('*',(req,res,next)=>{
    next(new AppError(`Not Found endpoint ${req.originalUrl}`,404));
})

app.use(globalErrorMiddleware)
// العمده
// دي  middleware  تلاقي هتيجي لل   error  اللي جواها اول متشوف next  ال  catchError  هنا وحدت الريسبونس ال ال فانكشن اللي اسمها    

process.on('unhandledRejection',(err)=>{
    console.log('error');
})
app.listen(port, () => console.log(`server is running... `))