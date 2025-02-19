import express from 'express'
import dotenv from 'dotenv'
import chats from './data/data.js'
import userRouter from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import Router from './routes/messageRoutes.js'
import cors from 'cors';
import { errorHandler,notFound } from './middleware/errorMiddleware.js'

dotenv.config({path:'./config/config.env'})
const app = express()

app.use(express.json()) //to accept the json format data
app.use(cors({
  origin: "http://localhost:3000",  // ✅ Allow frontend to access backend
  methods: "GET,POST,PUT,DELETE",
  credentials: true  // ✅ Allow cookies if needed
}));


app.get("/", (req, res) => {
  res.send("API is running");
});




app.use("/api/user", userRouter);
app.use('/api/chat', chatRoutes)
app.use('/api/message', Router);

app.use(notFound);
app.use(errorHandler);

app.get("/api/chat/", (req, res) => {
  res.send(chats);
});


export default app;
