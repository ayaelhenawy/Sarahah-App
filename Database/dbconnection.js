import mongoose from "mongoose";

export function dbConnections(){
    mongoose.connect('mongodb://127.0.0.1:27017/SarahahApp').then(()=>{
        console.log('Database Connected');
    })
}
