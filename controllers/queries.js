const {
  getSleepHours,
  getEntriesByDate,
  insertEntry,
  updateEntry,
  deleteEntry,
} = require("../modules/queries.js");

const _getSleepHours = (req, res) => {
  getSleepHours(1)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Some error message" });
    });
};

const _getEntriesByDate = (req, res) => {
  getEntriesByDate()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Some error message" });
    });
};

const _insertEntry = (req, res) => {
  insertEntry()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Some error message" });
    });
};

const _updateEntry = (req, res) => {
  updateEntry()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Some error message" });
    });
};

const _deleteEntry = (req, res) => {
  deleteEntry()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Some error message" });
    });
};

module.exports = {
  _getSleepHours,
  _getEntriesByDate,
  _insertEntry,
  _updateEntry,
  _deleteEntry,
};
