
import express from 'express'

import { signup } from './user.controller.js';
import { hashPasowrd } from '../../middleware/hash.js';
import { emailExist } from '../../middleware/emailexist.js';


const userRouter= express.Router();

userRouter.post('/signUp',emailExist,hashPasowrd,signup);

export{
    userRouter
}