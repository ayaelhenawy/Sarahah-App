import mongoose from "mongoose";


const userSchema=mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,
        age:{
            type:Number,
            min:[15,'too young'],
            max:[80,'too long'],
        },
        role:{
            type:String,
            enum:['user','admin'],
            default:'user'
        },
        isverify:{
            type:Boolean,
            default:false,
        }

    }
)
export const userModel=mongoose.model('user',userSchema);