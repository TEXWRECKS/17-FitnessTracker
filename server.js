// Required modules
const express = require("express");
const app = express();
// Morgan package console.log's the status codes
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, ((err) => {
  if(err) return err;
  console.log(`App running on port ${PORT}!`);
}));