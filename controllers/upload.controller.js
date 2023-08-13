const userModels = require("../models/user.models");
const ObjectId = require("mongoose").Types.ObjectId;
const initialization = require("firebase/app");
const firebase = require("firebase/storage");

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

module.exports.uploaderProfile = async(req, res) => {
  if (!ObjectId.isValid(req.body.userId))
    return res.status(400).send("ID unknown " + req.body.userId);
        try {
        const datetime = giveCurrentDateTime()
        const storageRef = firebase.ref(storage, `profil/${req.file.originalname + "   " + datetime}`);
        const metadata = {
            contentType: req.file.mimetype,
        }
        const snapshot = await firebase.uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await firebase.getDownloadURL(snapshot.ref);
        if(downloadURL){
            try {
            return userModels.findByIdAndUpdate(
            { _id: req.body.userId },
            {

            $set: {
            picture:downloadURL,
            },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            ).then((err, docs) => {
            if (!err) return res.send(docs)
            else return res.status(200).send(err)
            })

            } catch (err) {
            return res.status(500).send({ message: "error while uploading image" })
            }

        }else{
          res.status(200).send({error :"error while uploading image to fire base"});
        }
    } catch (error) {
        console.log(error)
    }
}



module.exports.uploaderProfileThumber = async(req, res) => {
   if (!ObjectId.isValid(req.body.userId))
    return res.status(400).send("ID unknown " + req.body.userId);
            try {
            return userModels.findByIdAndUpdate(
            { _id: req.body.userId },
            {

            $set: {
            thumber:req.body.file,
            },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            ).then((err, docs) => {
            if (!err) return res.send(docs)
            else return res.status(200).send(err)
            })

            } catch (err) {
            return res.status(500).send({ message: "error while uploading image" })
            }
}
