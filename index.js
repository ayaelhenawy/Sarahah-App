import express from 'express'
import { dbConnections } from './Database/dbconnection.js';
import { userRouter } from './src/modules/user/user.router.js';
const port = 3000
const app = express()



app.use(express.json())
app.use(userRouter)


dbConnections();
app.listen(port, () => console.log(`server is running... `))