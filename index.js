require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const indexrouter = require("./routes");

const PORT = process.env.PORT || 5000;
const app = express();

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log("Database error");
  });
app.use(express.json());
app.use(morgan("tiny"));
app.use("/resources", express.static("public"));
app.use("/", indexrouter);

app.listen(PORT, () => {
  console.log(`application is runnin on port ${PORT}`);
});
