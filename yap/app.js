import express from 'express'
import dotenv from 'dotenv'
import chats from './data/data.js'

dotenv.config({path:'./config/config.env'})
const app = express()




app.get("/", (req, res) => {
  res.send("API is running");
});




app.get("/api/chat/", (req, res) => {
  res.send(chats);
});





export default app;
