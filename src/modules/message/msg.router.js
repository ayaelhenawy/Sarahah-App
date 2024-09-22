
import express from 'express'
import { addMsg, userMsg } from './msg.controller.js';
import { auth } from '../../middleware/auth.js';




const msgRouter= express.Router();
msgRouter.get('/messages',auth,userMsg)
msgRouter.post('/messages',auth,addMsg)


export{
    msgRouter
}