const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log("Login");
  res.send("Login");
});

router.post("/signup", (req, res) => {
  console.log("Signup");
  res.send("Signup");
});

router.post("/logout", (req, res) => {
  console.log("Logout");
  res.send("Logout");
});

module.exports = router;
