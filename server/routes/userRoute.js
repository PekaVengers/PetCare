// IMPORTS -
const express = require("express");
const {
  registerUser,
  loginUser,
  getUserDetails,
} = require("../controllers/userController");
const { isAuthUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

// USER -
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/user").get(isAuthUser, authorizeRoles("user"), getUserDetails);

module.exports = router;
