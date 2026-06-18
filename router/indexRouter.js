const Router = require("express");
const { getMessages } = require("../models/messageModel");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: getMessages(),
  });
});

module.exports = indexRouter;
