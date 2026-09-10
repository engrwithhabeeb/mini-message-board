const Router = require("express");
const { addMessage } = require("../models/messageModel");

const formRouter = Router();

formRouter.get("/", (req, res) => {
  res.render("form");
});

formRouter.post("/", (req, res) => {
  const { messageUser, messageText } = req.body;
  addMessage(messageUser, messageText);
  res.redirect("/");
});

module.exports = formRouter;
