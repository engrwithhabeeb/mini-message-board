const express = require("express");

const path = require("node:path");

const messageRouter = require("./routes/message");

const app = express();

const PORT = 3000;

const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.status(302).redirect("/messages");
});

app.use("/messages", messageRouter);

app.listen(PORT || 8080, () => {
  console.log(`App starting at http://localhost:${PORT ? PORT : 8080}`);
});
