const mongoose = require("mongoose");
mongoose.set("strictQuery", false)
mongoose
  .connect(
    "mongodb+srv://janeiro:<bujumbura>@cluster0.p0uwbag.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("CONNECTED TO MONGO DB"))
  .catch((err) => console.log("FAILED TO CONNECT TO MONGO DB", err));

