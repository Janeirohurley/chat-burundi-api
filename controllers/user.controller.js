const userModels = require("../models/user.models");
const Chat = require("../models/ChatModel");
const ObjectId = require("mongoose").Types.ObjectId;
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, ""); // $& means the whole matched string
}

module.exports.getAllUsers = async (req, res) => {
  const users = await userModels.find().select("-password");
  res.status(200).send(users);
};

module.exports.userInfo = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);

  userModels
    .findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).send(docs);
      else console.log("id unknown: +" + err);
    })
    .select("-password");
};

module.exports.findNotification = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);

  userModels.findById(req.params.id, (err, docs) => {
    const theNotifications = docs.notifications;
    theNotifications.forEach((notification) => {
      notification.status = "viewed";
    });
    return docs.save((err) => {
      if (!err) return res.status(200).send(docs.notifications);
      else return res.status(500).send(err);
    });
  });
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);

  try {
    userModels.findOneAndUpdate(
      { _id: req.params.id },

      {
        $set: {
          bio: req.body.bio,
          pseudo: req.body.pseudo,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
//changer password

module.exports.updateUserPssword = async (req, res) => {
  const user = await userModels.findOne({ email: req.body.email });
  if (user) {
    if (req.body.newpassword.length < 6) {
      res.status(200).send({
        message:
          "password is too short please use password rather or equal than 6 caracters",
      });
    } else {
      user.password = req.body.newpassword;
      user.requestChangePassword = false;
      await user.save();
      res.status(200).send({ message: "password changed successifully" });
    }
  }
  if (!user)
    return res.status(200).send({ message: "incorrect email does not exist" });
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);

  try {
    await userModels.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "susseccefuly deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports.follow = (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idToFollow)
  ) {
    return res
      .status(400)
      .send(
        "this ID " +
          req.body.idToFollow +
          " from body is unknown or this from : " +
          req.params.id
      );
  } else {
    userModels.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { following: req.body.idToFollow },
      },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(422).send(err);
        } else {
          userModels
            .findByIdAndUpdate(
              req.body.idToFollow,
              {
                $addToSet: { followers: req.params.id },
              },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              return res.status(500).send(err);
            });
        }
      }
    );
  }
};

module.exports.unfollow = (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idToUnFollow)
  ) {
    return res
      .status(400)
      .send(
        "this ID " +
          req.body.idToFollow +
          " from body is unknown or this from : " +
          req.params.id
      );
  } else {
    userModels.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { following: req.body.idToUnFollow },
      },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(400).send(err.message);
        } else {
          userModels
            .findByIdAndUpdate(
              req.body.idToUnFollow,
              {
                $pull: { followers: req.params.id },
              },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              return res.status(500).send(err);
            });
        }
      }
    );
  }
};

module.exports.savepost = (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idPostTosave)
  ) {
    return res
      .status(400)
      .send(
        "this ID " +
          req.body.idPostTosave +
          " from body is unknown or this from : " +
          req.params.id
      );
  } else {
    userModels.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { saved: req.body.idPostTosave },
      },
      { new: true },
      (err, result) => {
        if (!err) {
          return res
            .status(200)
            .send({ message: "post has been saved successfull" });
        }
        if (err) {
          return res.status(422).send(err);
        }
      }
    );
  }
};

module.exports.unsavepost = (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idPostTounsave)
  ) {
    return res
      .status(400)
      .send(
        "this ID " +
          req.body.idPostTounsave +
          " from body is unknown or this from : " +
          req.params.id
      );
  } else {
    userModels.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { saved: req.body.idPostTounsave },
      },
      { new: true },
      (err, result) => {
        if (!err) {
          return res
            .status(200)
            .send({ message: "post has been unsaved successfull" });
        }
        if (err) {
          return res.status(422).send(err);
        }
      }
    );
  }
};

module.exports.searchUser = async (req, res) => {
   if(escapeRegExp(req.query.search).length > 0){
    const keyword = escapeRegExp(req.query.search).trim()
      ? {
          $or: [{ pseudo: { $regex: escapeRegExp(req.query.search), $options: "i" } }],
        }
      : {};
    const userSearched = await userModels
      .find(keyword)
      .find({ _id: { $ne: req.user._id } });
    res.status(200).send(userSearched);
  }
};

//==================================/create group chat//==================================

module.exports.createGroupe = async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "please fill all input" });
  }
  var users = req.body.users;

  if (users.length < 2) {
    return res
      .status(500)
      .send("More than 2 users are required to form a group chat");
  }
  const Group = await Chat.findOne({ chatName: req.body.name });
  if (Group)
    return res.status(500).send("Group with that name exits use others");
  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });
    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).send(fullGroupChat);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//======================rename group chat=====================
module.exports.renameGroupe = async (req, res) => {
  const { chatId, chatName } = req.body;
  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName,
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!updatedChat) {
    res.status(404).json({ message: "chat not found" });
  } else {
    res.json(updatedChat);
  }
};

//remove to group chat
module.exports.groupremove = async (req, res) => {
  const { chatId, userId } = req.body;
  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!removed) {
    res.status(404).json({ message: "chat not found" });
  } else {
    res.json(removed);
  }
};

//add to group chat
module.exports.addTogroup = async (req, res) => {
  const { chatId, userId } = req.body;
  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!added) {
    res.status(404).json({ message: "chat not found" });
  } else {
    res.json(added);
  }
};

//==================================//access to the chats or create new chats //======================================================
module.exports.fetchChat = async (req, res) => {
  try {
    await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage", "-password")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await userModels.populate(results, {
          path: "latestMessage.sender",
          select: "pseudo picture email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

//==================================//access to the chats or create new chats //======================================================

module.exports.accessChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userId params not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await userModels.populate(isChat, {
    path: "latestMessage.sender",
    select: "pseudo picture email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var Chatdata = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(Chatdata);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(FullChat);
    } catch (error) {
      res.status(400);
    }
  }
};
