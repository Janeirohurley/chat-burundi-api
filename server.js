const express = require("express");
require("./config/db");
const io = require("socket.io");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/poster.routes");
const chatRoutes = require("./routes/chat.router");
const messageRoutes = require("./routes/message.router");
require("dotenv").config({ path: "./config/.env" });
const { checkUser, requireAuth } = require("./middleware/auth.midleware");
const cors = require("cors");
const app = express();
//new import changed
const http = require("http").Server(app);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//added to test socket io
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

//added to test socket io

app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
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

let onLineusers = []
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

  socket.on("sendNotification",({senderName,postLiked,resverName,timeNot})=>{
    let resever = getUser(resverName)
    socketIO.to(resever?.socketId).emit("getNotification",{
      senderName,postLiked,timeNot
    }) 
  })

  socket.on("NewPost",({data})=>{
    socketIO.emit("getNewpost",{data})
  })
    console.log(onLineusers)
   })
  socket.on("disconnect", () => {
     // deleteUser(socket.id)
      console.log(onLineusers)
  });
});
http.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
