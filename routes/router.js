const express = require("express");
const {
  _getSleepHours,
  _getEntriesByDate,
  _insertEntry,
  _updateEntry,
  _deleteEntry,
  _checkUser,
  _addUser,
} = require("../controllers/queries.js");

const router = express.Router();
const path = require("path");

router.get("/getSleep/:uid", _getSleepHours);
router.get("/getDate", _getEntriesByDate);

router.post("/insert", _insertEntry);

router.put("/update", _updateEntry);

router.delete("/delete", _deleteEntry);

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "public/register.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "public/login.html"));
});
router.post("/register", _addUser);
router.post("/login", _checkUser);

module.exports = router;
