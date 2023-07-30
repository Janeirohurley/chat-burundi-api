const mongoose = require("mongoose");

const HistoryModel = mongoose.Schema(
  {
    searcherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const HisorySearched = mongoose.model("HisorySearched", HistoryModel);
module.exports = HisorySearched;
