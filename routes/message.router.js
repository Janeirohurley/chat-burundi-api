const router = require("express").Router();
const messageControllers = require("../controllers/message.controller");
const {protect} = require("../middleware/auth.midleware")


router.post("/",protect,messageControllers.sendMessage)
router.get("/:id",protect,messageControllers.allMessages)

module.exports = router;