import app from "./app.js";
import connectDB from "./config/db.js";
import http from "http";
import { Server } from "socket.io";
connectDB()
const server = http.createServer(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

