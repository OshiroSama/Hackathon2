const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/router.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("have not decided yet", express.static(__dirname + "/public"));

app.listen(process.env.PORT || 8080, () => {
  console.log(`running on port ${process.env.PORT || 8080}`);
});
