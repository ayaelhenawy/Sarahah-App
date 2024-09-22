import mongoose from "mongoose";

const msgSchema=mongoose.Schema(
    {
    recievedId:{
    type:mongoose.Types.ObjectId,
    },
    messageText:String
})
export const msgModel=mongoose.model('messgage',msgSchema);