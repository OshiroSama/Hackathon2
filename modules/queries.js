const db = require("../connections/DBConnection.js");

const getSleepHours = (user_id) => {
  return db("sleep").select("date", "hours").where({ user_id: user_id });
};

const getEntriesByDate = (user_id, date) => {
  return db("sleep")
    .select("date", "hours")
    .where({ user_id: user_id, date: date });
};

const insertEntry = (user_id, date, hours) => {};

const updateEntry = (user_id, date, hours) => {};

const deleteEntry = (user_id, date) => {
  return db("<nameOfSleepTable>")
    .where({ user_id: user_id, date: date })
    .del()
    .returning("*");
};

module.exports = {
  getSleepHours,
  getEntriesByDate,
  insertEntry,
  updateEntry,
  deleteEntry,
};
