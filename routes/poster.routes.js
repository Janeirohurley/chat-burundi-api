const router = require("express").Router();
const postControllers = require("../controllers/post.controllers");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../update-chat-burundi/public/uploads/posts");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", postControllers.readPost); //fetch all posts
router.get("/:id", postControllers.findPost); //find post by id
router.post("/", upload.single("file"), postControllers.createPost); //create post
router.put("/:id", postControllers.updatePost); //update post
// delete post
router.delete("/:id", postControllers.deletePost);
// like dislike post
router.patch("/like/:id", postControllers.likePost);
router.patch("/unlike/:id", postControllers.unlikePost);

//commentaire
router.patch("/comment-post/:id", postControllers.commentPost);
router.patch("/edit-comment-post/:id", postControllers.editCommentPost);
router.patch("/delet-comment-post/:id", postControllers.deleteCommentPost);

module.exports = router;
