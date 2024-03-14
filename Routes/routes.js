const router = require("express").Router();
const { register, login, test, logout } = require("../Controller/controller");
const verifyToken = require("./auth");

router.route("/register").post(register);
router.route("/login").post(verifyToken, login);
router.route("/logout").post(verifyToken, logout);
router.route("/test").get(test);

module.exports = router;
