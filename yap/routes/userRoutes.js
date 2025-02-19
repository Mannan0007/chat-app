import express from 'express'
import { registerUser, loginUser, allUsers } from "../controllers/userControllers.js";
import protect from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.get("/",protect,allUsers)
userRouter.post("/register", registerUser);
userRouter.post("/login",loginUser);



export default userRouter;