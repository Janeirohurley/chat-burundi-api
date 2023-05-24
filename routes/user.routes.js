const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userControllers = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");
const {protect} = require("../middleware/auth.midleware")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../update-chat-burundi/public/uploads/profil");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", authController.signUp);
router.post("/login", authController.signin);
router.get("/logout", authController.logout);

router.post("/resetpassword", authController.resetpassword);

router.post("/forgetpassword", authController.forgetPassword);
router.put("/changepassword/user", userControllers.updateUserPssword);

router.get("/", userControllers.getAllUsers);

router.get("/:id", userControllers.userInfo);
router.get("/notification/:id", userControllers.findNotification);

router.put("/:id", userControllers.updateUser);


router.delete("/:id", userControllers.deleteUser);

router.patch("/follow/:id", userControllers.follow);

router.patch("/unfollow/:id", userControllers.unfollow);

router.post("/upload/",upload.single("file"),uploadController.uploaderProfile);
router.put("/savepost/:id",userControllers.savepost)
router.put("/unsavepost/:id",userControllers.unsavepost)

router.get("/search/user",protect,userControllers.searchUser)

module.exports = router;
