const PostModel = require("../models/post.model");
const userModels = require("../models/user.models");
const initialization = require("firebase/app");
const firebase = require("firebase/storage");

const ObjectId = require("mongoose").Types.ObjectId;
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, ""); // $& means the whole matched string
}

initialization.initializeApp(
    firebaseConfig = {
        apiKey: "AIzaSyBTPpOH0XcHRsTIDe_gfaZzXLXM5ubYhAg",
        authDomain: "chat-burundi.firebaseapp.com",
        projectId: "chat-burundi",
        storageBucket: "chat-burundi.appspot.com",
        messagingSenderId: "735028236904",
        appId: "1:735028236904:web:d54558f034e3a639e361dd",
        measurementId: "G-DH7T4PP3N5"
    });
const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate();
    const heure = today.getHours() + '_' + (today.getMinutes() + 1) + '_' + today.getSeconds();
    const datetime = date + '_' + heure;
    return datetime
}
const storage = firebase.getStorage();

module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("ERREUR TO GET DATA : " + err);
  }).sort({ createdAt: -1 });
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
   if(req.file){
    //lorsquer on en presence d'une photo
      try {
        const datetime = giveCurrentDateTime()
        const storageRef = firebase.ref(storage, `posts/${req.file.originalname + "   " + datetime}`);
        const metadata = {
            contentType: req.file.mimetype,
        }
        const snapshot = await firebase.uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await firebase.getDownloadURL(snapshot.ref);
        if(downloadURL){
          //si la photo est deja poster sur file base
          const newPost = new PostModel({
          posterId: req.body.posterId,
          message: req.body.message,
          picture: downloadURL,
          likers: [],
          comments: [],
          });

          try {
          const post = await newPost.save();
          return res.status(201).json(post);
          } catch (error) {
          return res.status(400).send(error);
          }
        }else{
          res.status(200).send({error :"error while uploading image to fire base"});
        }
    } catch (error) {
        console.log(error)
    }
  }else{
    //si une fois on poster le poster sans foto
    const newPost = new PostModel({
      posterId: req.body.posterId,
      message: req.body.message,
      color: req.body.color,
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
  //if color and message are goig to be update
  if(req.body.message && req.body.color){
  const updatedRecord = {
    message: req.body.message,
    color: req.body.color,
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
  }
  //if color only
    if(!req.body.message && req.body.color){
  const updatedRecord = {
    color: req.body.color,
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
  }
//if message only
    if(req.body.message && !req.body.color){
  const updatedRecord = {
    message: req.body.message,
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
  }

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
    ).sort({ _id: -1 });
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

// module.exports.searchPost = async (req, res) => {
//   const keyword = "janeiro";
//   const postSearched = await PostModel.find({
//     message: { $regex: "/" + keyword + "$/" },
//   });
//   res.status(200).send(postSearched);
// };
module.exports.searchPost = async (req, res) => {
  
  if (req.search !== "*" || req.search !== "'") {
    const keyword = escapeRegExp(req.query.search)
      ? {
          $or: [{ message: { $regex: escapeRegExp(req.query.search), $options: "i" } }],
        }
      : {};
    const keywordother = escapeRegExp(req.query.search)
      ? {
          $or: [{ pseudo: { $regex: escapeRegExp(req.query.search), $options: "i" } }],
        }
      : {};
    const postSearched = await PostModel.find(keyword);
    const userSearched = await userModels.find(keywordother);
    res.status(200).send([...postSearched, ...userSearched]);
  }
};
//send notifications

module.exports.notifications = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID UNKOWN " + req.params.id);

  try {
    return userModels
      .findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            notifications: {
              notifieId: req.body.notifieId,
              notifiePseudo: req.body.notifiePseudo,
              notification: req.body.notification,
              status: req.body.status,
              post: req.body.post,
              pictureNotifie: req.body.pictureNotifie,
              timestamp: new Date().getTime(),
            },
          },
        },
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(400).send(err);
        }
      )
      .sort({ timestamp: -1 });
  } catch (error) {
    return res.status(400).send(error);
  }
};
