const userModels = require("../models/user.models");
const { errorSignup, errorSign } = require("../utils/error.utils");
const jwt = require("jsonwebtoken");
const mailsend = require("../services/mailler");
const charOTP = "jkkoiiyivvfsa12300786bgsatloyfgdmzza1234507llgdfreQR5536HJFDD35789JBBCXADQHHYqq2213mmnbvxz5489";
const OTPlength = 6;
const generateOtp = (OTPleng,Allchar)=>{
     var OTP = "";
     for (var i = 0; i <= OTPleng; i++) {
         OTP += Allchar.charAt(Math.floor(Math.random()*Allchar.length - 1))
     }
return OTP
}
const maxAge = 3 * 24 * 60 * 60 * 1000;
// const maxAge = 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await userModels.create({ pseudo, email, password });
    res.status(201).json({ user: user?._id });
  } catch (err) {
    const errors = errorSignup(err);
    res.status(200).send({ errors });
  }
};

module.exports.signin = async (req, res) => {
  const { pseudo, password } = req.body;
   console.log(pseudo,password)
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

module.exports.resetpassword = (req, res, next) => {
  const { email } = req.body;

  mailsend.sendGmail(email); 
};

module.exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  try{
   const users = await userModels.find().select("-password");
 const user = users.find(user =>user.email === email)
 const NEWOTP = generateOtp(OTPlength,charOTP);
 if(user){
    userModels.findByIdAndUpdate(
      { _id: user._id },

      {
        $set: {
          OTP:NEWOTP ,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err){
          mailsend.sendOtp(user.pseudo,NEWOTP,email);
        res.status(200).send(docs)
        //reset password after 5seconde without use it
        setTimeout(() => {
          userModels.findByIdAndUpdate(
              {_id:user._id},
              {
                $set:{OTP:""},
              },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            )
        }, 5000)
        }
        if (err) return res.status(500).send({ message: err });
      }
    );
 }else{
  res.status(200).json({message:"Email that u entered does not exist please try again"})
 }
  }catch(err){
     res.status(500).send({message:"something went wrong please try again"})
  }

  
};
