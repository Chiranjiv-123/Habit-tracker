const express = require("express");
const path = require("path");
require("dotenv").config();
require("./db/dbConn");
const app = express();
const HabitsModel = require("./models/habit_model");
const router = require("./routers/main");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "html");
app.use(express.json());
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));
app.use(router);

app.listen(port, () => {
  console.log(`app listening at ${port}.`);
});
