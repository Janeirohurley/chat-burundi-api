const mongoose = require("mongoose");
mongoose.set("strictQuery", true)
mongoose
  .connect(
   "mongodb://127.0.0.1:27017/chat-burundi",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("CONNECTED TO MONGO DB"))
  .catch((err) => console.log("FAILED TO CONNECT TO MONGO DB", err));

