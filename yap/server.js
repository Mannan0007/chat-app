import app from "./app.js";
import connectDB from "./config/db.js";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import express from 'express'
connectDB()
const server = http.createServer(app);
const PORT = process.env.PORT || 2000;

server.listen(PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000", // Update this based on your frontend URL
  },
});



//deployment code 

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/yap2/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "yap2", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }




io.on("connection", (socket) => {
  console.log("connected to the socket.io");
  socket.on('setup', (userData) => {
    socket.join(userData._id);
    socket.emit('connected');
  });

  socket.on('join chat', (room) => {
    socket.join(room);
    console.log('User joined room ' + room);
  })

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
  socket.on('new message', (newMessageRecieved) => {
        console.log("New Message Received:", newMessageRecieved);

    var chat = newMessageRecieved.chat;

     if (!chat.users) return console.log("chat.users not defined");

      chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
        console.log("Message Sent To:", user._id);

      socket.in(user._id).emit("message received", newMessageRecieved);
    });
  })
  //   socket.off("setup", () => {
  //   console.log("USER DISCONNECTED");
  //   socket.leave(userData._id);
  // });
});

