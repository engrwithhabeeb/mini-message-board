const express = require("express");
const path = require("node:path");
const indexRouter = require("./router/indexRouter");
const formRouter = require("./router/formRouter");

const app = express();

const PORT = 3000;

const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.use("/", indexRouter);
app.use("/new", formRouter);

app.listen(PORT || 8080, () => {
  console.log(`App starting at ${PORT ? PORT : 8080}`);
});
