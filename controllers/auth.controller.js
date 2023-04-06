const userModels = require("../models/user.models");
const { errorSignup, errorSign } = require("../utils/error.utils");
const jwt = require("jsonwebtoken");
const mailsend = require("../services/mailler");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await userModels.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = errorSignup(err);
    res.status(200).send({ errors });
  }
};

module.exports.signin = async (req, res) => {
  const { pseudo, password } = req.body;

  try {
    const user = await userModels.login(pseudo, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge, httpOnly: true });
    res.status(200).json({ user: user._id, token: token });
  } catch (err) {
    const errors = errorSign(err);
    res.status(200).send({ errors });
  }
};

module.exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).send("vous etez deconnecter merci d'avoir utiliser le site");
};

module.exports.forgetPassword = (req, res, next) => {
  const { email } = req.body;

  mailsend.sendGmail(email);
};
