const Router = require("express");
const { addMessage, getMessages } = require("../models/message");

const router = Router();
router.get("/", (req, res) => {
  const messages = getMessages();
  res.render("index", {title: "Mini MessageBoard", messages});
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  addMessage(messageUser, messageText);
  res.redirect("/");
});

module.exports = router;
