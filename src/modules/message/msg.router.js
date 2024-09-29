
import express from 'express'
import { addMsg, shareProfile, userMsg } from './msg.controller.js';
import { auth } from '../../middleware/auth.js';
import { validation } from '../../middleware/validation.js';
import { addMsgSchemaVal, userMsgSchemaVal } from './msgValidation.js';




const msgRouter= express.Router();
msgRouter.get('/messages',validation(userMsgSchemaVal),auth,userMsg)
msgRouter.post('/messages',auth,validation(addMsgSchemaVal),addMsg)
msgRouter.get('/shareProfile',shareProfile)


export{
    msgRouter
}