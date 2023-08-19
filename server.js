const express = require("express");
require("./config/db");
const io = require("socket.io");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/poster.routes");
const chatRoutes = require("./routes/chat.router");
const path = require("path")
const messageRoutes = require("./routes/message.router");
require("dotenv").config({ path: "./config/.env" });
const { checkUser, requireAuth } = require("./middleware/auth.midleware");
const cors = require("cors");
const app = express();
//new import changed
'use strict';

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
if(results["wi-fi"]){
  console.log(results["wi-fi"])
}
if(results["en0"]){
  console.log(results["en0"][0])
}
console.log(results)
const http = require("http").Server(app);
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//added to test socket io
const socketIO = require("socket.io")(http, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

//added to test socket io

app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user?._id);
});
//routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
//server
// app.listen(process.env.PORT, () => {
//   console.log(`listening on port ${process.env.PORT}`);
// });

//code changed here

//Add this before the app.get() block
//==========================================deployement==================================

const __dirname1 = path.resolve()
if(process.env.NODE_ENV === "production"){
  console.log("server is runing for production mode")
  app.use(express.static(path.join(__dirname1,"update-chat-burundi/build")))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname1,"update-chat-burundi","build","index.html"))
  })

}else{
  console.log("server is runing for development mode")
}
//==========================================deployement==================================

let onLineusers = []
let rooms = {};
const addNewuser =  (userName,socketId) =>{
  const existUser = onLineusers.find((user)=>user.userName === userName)
  if(!existUser){
    onLineusers.push({userName,socketId})
    }
  if(existUser){
    console.log({message:"this user is online"})
  }
}


const deleteUser = (socketId)=>{
  onLineusers = onLineusers.filter((user)=>user.socketId !== socketId)
}

const getUser = (userName)=>{
  return onLineusers.find((user)=>user.userName === userName)
}


socketIO.on("connection", (socket) => {
   socket.on("newuser",(userName)=>{
    addNewuser(userName,socket.id)

  socket.on("sendNotification",({senderName,resverName,timeNot})=>{
          let resever = getUser(resverName)
    if(senderName !== resverName){
    socketIO.to(resever?.socketId).emit("getNotification",{
      senderName,timeNot
    }) 
  }
  })

    socket.on("sendMessage",({senderName,resverName,timeNot,chatId})=>{
          let resever = getUser(resverName)
    if(senderName !== resverName){
    socketIO.to(resever?.socketId).emit("getMessage",{
      senderName,timeNot,chatId
    }) 
  }
  })

socket.on("join chat", (room, userId) => {
  // Add the user to the room
  if (!rooms[room]) {
    rooms[room] = [];
  }
  rooms[room].push(userId);
  socket.join(room);
});
socket.on("new message", (data) => {
  const sendTo = onLineusers?.find((user)=>user?.userName === data?.recepient?._id)
 socketIO.to(sendTo?.socketId).emit("message received", data); 
 socketIO.to(sendTo?.socketId).emit("akiraNotification", {
  senderId:data?.sender?._id,
  isRead:false,
  date:new Date()
 }); 
});

socket.on("typing",(typingInfo)=>{
    socketIO.emit("istyping",typingInfo)
})
socket.on("notyping",(notypingInfo)=>{
    socketIO.emit("isnottyping",notypingInfo)
    
})

  socket.on("NewPost",({data})=>{
    socketIO.emit("getNewpost",{data})
  })
    console.log(onLineusers)
    socketIO.emit("onLineusers",onLineusers)
   })
  socket.on("disconnect", () => {
     deleteUser(socket.id)
      console.log(onLineusers)
       socketIO.emit("onLineusers",onLineusers)
  });
});


http.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});


