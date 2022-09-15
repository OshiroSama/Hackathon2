const express = require("express");
const {
  _getSleepHours,
  _getEntriesByDate,
  _insertEntry,
  _updateEntry,
  _deleteEntry,
} = require("../controllers/queries.js");

const router = express.Router();

router.get("have not decided yet", _getSleepHours);
router.get("have not decided yet", _getEntriesByDate);

router.post("have not decided yet", _insertEntry);

router.update("have not decided yet", _updateEntry);

router.delete("have not decided yet", _deleteEntry);

module.exports = router;
