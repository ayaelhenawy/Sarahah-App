import express from 'express'
import { dbConnections } from './Database/dbconnection.js';
import { userRouter } from './src/modules/user/user.router.js';
import { msgRouter } from './src/modules/message/msg.router.js';
const port = 3000
const app = express()



app.use(express.json())
app.use(userRouter)
app.use(msgRouter)


dbConnections();


app.use((err,req,res,next)=>{
    res.json({error:err});
})
// العمده
// دي  middleware  تلاقي هتيجي لل   error  اللي جواها اول متشوف next  ال  catchError  هنا وحدت الريسبونس ال ال فانكشن اللي اسمها    

app.listen(port, () => console.log(`server is running... `))