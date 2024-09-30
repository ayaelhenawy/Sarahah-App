import mongoose from "mongoose";


const photoSchema=mongoose.Schema(
    {
        title:String,
        img:String,

    }
)
export const photoModel=mongoose.model('photo',photoSchema);