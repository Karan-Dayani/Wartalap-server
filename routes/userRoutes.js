const { register, login } = require("../controllers/userController");

const router = require("express").Router();

router.post("/Register", register);
router.post("/Login", login);

module.exports = router;
