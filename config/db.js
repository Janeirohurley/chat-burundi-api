const mongoose = require("mongoose");
mongoose
  .connect(
      "mongodb+srv://janeirohurley:bujumbura@cluster0.p0uwbag.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("CONNECTED TO MONGO DB"))
  .catch((err) => console.log("FAILED TO CONNECT TO MONGO DB", err));