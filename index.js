process.on('uncaughtException',(err)=>{
    console.log("error",err)
})


import express from 'express'
import { dbConnections } from './Database/dbconnection.js';
import { userRouter } from './src/modules/user/user.router.js';
import { msgRouter } from './src/modules/message/msg.router.js';
import { AppError } from './src/AppError.js';
import { globalErrorMiddleware } from './src/middleware/globalErrorMiddleware.js';
const port = 3000
const app = express()



app.use(express.json())
app.use(userRouter)
app.use(msgRouter)


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