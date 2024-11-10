import express from 'express';
import { createUser, deleteUser, findUser, updateUser, userlogin, getalluser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/createuser', createUser);
userRouter.get('/finduser/:identifier', findUser);
userRouter.post('/login', userlogin);
userRouter.put('/updateuser/:id', updateUser);
userRouter.delete('/deleteuser/:id', deleteUser);
userRouter.get('/getalluser', getalluser)

//add route for fetching all users
export default userRouter;