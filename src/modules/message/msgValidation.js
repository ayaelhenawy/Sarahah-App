import Joi from "joi"

const addMsgSchemaVal = Joi.object({
    recievedId: Joi.string().hex().length(24),
    messageText:Joi.string().min(2).max(200).required()
}) 


const userMsgSchemaVal = Joi.object({
    id: Joi.string().hex().length(24)
}) 
export{
    addMsgSchemaVal,userMsgSchemaVal
}