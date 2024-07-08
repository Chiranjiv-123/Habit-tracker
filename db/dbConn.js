const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(`${process.env.DB_CON}`)
  .then(() => {
    console.log("MongoDB Connection Successfull");
  })
  .catch((e) => {
    console.log(e);
  });
