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
socketIO.on("connection", (socket) => {
  // console.log(`⚡: ${socket.id} user just connected!`);
   socket.on("like",(data)=>{
    socketIO.emit("likeResponse",data)
   })
      socket.on("unlike",(data)=>{
     socketIO.emit("unlikeResponse",data)
   })


  socket.on("disconnect", () => {
    
  });
});
http.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
