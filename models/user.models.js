const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      trim: true,
      unique: true,
    },
    picture: {
      type: String,
      default: "./uploads/profil/rendom-user.png",
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minLength: 6,
    },
    OPT: {
      type: String,
    },
    timerLink: {
      type: Number,
    },
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      type: [String],
    },
    following: {
      type: [String],
    },
    likes: {
      type: [String],
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    sociale: {
      type: [String],
    },
    saved: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (pseudo, password) {
  const user = await this.findOne({ pseudo });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect pseudo");
};
const userModels = mongoose.model("user", userSchema);
module.exports = userModels;
