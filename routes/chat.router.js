const router = require("express").Router();
const userControllers = require("../controllers/user.controller");
const {protect} = require("../middleware/auth.midleware")

router.post("/",protect,userControllers.accessChat)
router.get("/:userId",userControllers.fetchChat)
router.post("/group",protect,userControllers.createGroupe)//create groupe
router.put("/rename",protect,userControllers.renameGroupe)//rename group
router.put("/groupremove",protect,userControllers.groupremove)//remvove from group
router.put("/addTogroup",protect,userControllers.addTogroup)//add user to group

module.exports = router;