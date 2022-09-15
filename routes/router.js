const express = require("express");
const {
  _getSleepHours,
  _getEntriesByDate,
  _insertEntry,
  _updateEntry,
  _deleteEntry,
} = require("../controllers/queries.js");

const router = express.Router();

router.get("/getSleep", _getSleepHours);
router.get("/getDate", _getEntriesByDate);

router.post("/insert", _insertEntry);

router.put("/update", _updateEntry);

router.delete("/delete", _deleteEntry);

module.exports = router;
