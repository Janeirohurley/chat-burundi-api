const Chat = require("../models/ChatModel");
const Message = require("../models/MessageModel");
const userModels = require("../models/user.models");

module.exports.sendMessage = async (req, res) => {
  const { chatId, message,type,incoming } = req.body;
  if (!message || !chatId) {
    console.log("invalide data pass into request");
    return res.sendStatus(400);
  }
  var newMessage = {
    sender: req.user._id,
    message: message,
    type:type,
    incoming:incoming,
    chat: chatId,
  };
  try {
    var messages = await Message.create(newMessage);
    messages = await messages.populate("sender", "pseudo picture");
    messages = await messages.populate("chat");
    messages = await userModels.populate(messages, {
      path: "chat.users",
      select: "pseudo picture email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: messages,
    });
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

module.exports.allMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.id })
      .populate("sender", "pseudo picture email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
