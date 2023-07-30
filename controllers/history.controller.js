const HistoryModel = require("../models/HistoryModel")


module.exports.saveHistory = async(req,res)=>{
     const  newHistory = new HistoryModel({
         searcherId : req.user._id,
         message : req.body.message
     })

     try {
      const history = await newHistory.save();
      return res.status(201).json(history);
    } catch (error) {
      return res.status(200).send(error);
    }
}


module.exports.getHistory = async (req,res)=>{
  const history = await HistoryModel.find()
  res.status(200).send(history)
}

module.exports.deleteHistory = async (req, res) => {
  try {
    await HistoryModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "susseccefuly deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};