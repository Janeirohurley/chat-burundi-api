const PostModel = require("../models/post.model");
const userModels = require("../models/user.models");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("ERREUR TO GET DATA : " + err);
  }).sort({ createdAt: -1, });
};

module.exports.findPost = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);

  PostModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ERREUR TO GET DATA : " + err);
  });
};

module.exports.createPost = async (req, res) => {
  //if file picture exist
  if (req.file) {
    const newPost = new PostModel({
      posterId: req.body.posterId,
      message: req.body.message,
      picture: "/uploads/posts/" + req.file.filename,
      likers: [],
      comments: [],
    });

    try {
      const post = await newPost.save();
      return res.status(201).json(post);
    } catch (error) {
      return res.status(400).send(error);
    }
  } else {
    const newPost = new PostModel({
      posterId: req.body.posterId,
      message: req.body.message,
      color:req.body.color,
      video: req.body.video,
      likers: [],
      comments: [],
    });
    try {
      const post = await newPost.save();
      return res.status(201).json(post);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

module.exports.updatePost = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  const updatedRecord = {
    message: req.body.message,
    color:req.body.color
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        res.status(200).json(docs);
        // console.log(docs);
      } else console.log("UPDATED ERROR " + err);
    }
  );
};
module.exports.deletePost = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);

  PostModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("delete error " + err);
  });
};

module.exports.likePost = (req, res) => {
  if (!ObjectId.isValid(req.params.id) || !ObjectId.isValid(req.body.id)) {
    return res
      .status(400)
      .send(
        "this ID " +
          req.body.id +
          " from body is unknown or this from : " +
          req.params.id
      );
  } else {
    PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(422).send(err);
        } else {
          userModels
            .findByIdAndUpdate(
              req.body.id,
              {
                $addToSet: { likes: req.params.id },
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

module.exports.unlikePost = (req, res) => {
  if (!ObjectId.isValid(req.params.id) || !ObjectId.isValid(req.body.id)) {
    return res
      .status(400)
      .send(
        "this ID " +
          req.body.id +
          " from body is unknown or this from : " +
          req.params.id
      );
  } else {
    PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(422).send(err);
        } else {
          userModels
            .findByIdAndUpdate(
              req.body.id,
              {
                $pull: { likes: req.params.id },
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

//commentaires

module.exports.commentPost = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID UNKOWN " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    ).sort({ "_id": -1 });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports.editCommentPost = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID UNKOWN " + req.params.id);

  try {
    return PostModel.findById(req.params.id, (err, docs) => {
      const theComment = docs.comments.find((comment) =>
        comment._id.equals(req.body.commentId)
      );
      if (!theComment) return res.status(404).send("comment not found");
      theComment.text = req.body.text;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        else return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports.deleteCommentPost = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID UNKOWN " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};


module.exports.searchPost = async (req,res)=>{
  const keyword = req.query.search
  ? {
    $or: [
      { message: { $regex: req.query.search, $options: "i" } },
    ],
  }
: {};
const userSearched = await PostModel
.find(keyword);
res.status(200).send(userSearched);

}


//send notifications

module.exports.notifications = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID UNKOWN " + req.params.id);

  try {
    return userModels.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          notifications: {
          notifieId:req.body.notifieId,
          notifiePseudo: req.body.notifiePseudo,
          notification: req.body.notification,
          status:req.body.status,
          post:req.body.post,
          pictureNotifie:req.body.pictureNotifie,
          timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    ).sort({ "timestamp": -1 });
  } catch (error) {
    return res.status(400).send(error);
  }
};