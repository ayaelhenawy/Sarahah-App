
import express from 'express'

import { signup } from './user.controller.js';
import { hashPasowrd } from '../../middleware/hash.js';


const userRouter= express.Router();

userRouter.post('/signUp',hashPasowrd,signup);

export{
    userRouter
}