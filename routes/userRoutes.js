const {
  register,
  login,
  setAvatar,
  getAllUsers,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/Register", register);
router.post("/Login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
