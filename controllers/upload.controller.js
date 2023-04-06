const userModels = require("../models/user.models");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.uploaderProfile = (req, res) => {
  if (!ObjectId.isValid(req.body.userId))
    return res.status(400).send("ID unknown " + req.body.userId);
  try {
    return userModels.findByIdAndUpdate(
      { _id: req.body.userId },
      {

        $set: {
          picture: "./uploads/profil/" + req.file.filename,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    ).then((err, docs) => {
      if (!err) return res.send(docs)
      else return res.status(200).send(err)
    })

  } catch (err) {
    return res.status(500).send({ message: err })
  }
}
