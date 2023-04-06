const Chat = require("../models/ChatModel");
const Message = require("../models/MessageModel");
const userModels = require("../models/user.models");

module.exports.sendMessage = async (req, res) => {
  const { chatId, content } = req.body;
  if (!content || !chatId) {
    console.log("invalide data pass into request");
    return res.sendStatus(400);
  }
  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };
  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "pseudo picture");
    message = await message.populate("chat");
    message = await userModels.populate(message, {
      path: "chat.users",
      select: "pseudo picture email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });
    res.json(message);
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
