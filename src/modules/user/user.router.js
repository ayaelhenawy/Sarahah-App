
import express from 'express'

import { signin, signup, verifyEmail } from './user.controller.js';
import { hashPasowrd } from '../../middleware/hash.js';
import { emailExist } from '../../middleware/emailexist.js';
import { validation } from '../../middleware/validation.js';
import { signinSchemaval, signupSchemaVal } from './userValidation.js';


const userRouter= express.Router();

userRouter.post('/signUp',validation(signupSchemaVal),emailExist,hashPasowrd,signup);
userRouter.post('/signin',validation(signinSchemaval),signin);
userRouter.get('/verifyEmail/:token',verifyEmail);


export{
    userRouter
}