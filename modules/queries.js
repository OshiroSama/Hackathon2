const db = require("../connections/DBConnection.js");

const getSleepHours = (user_id) => {
  // Returns sleep hours of the user by his ID
  return db("sleep").select("*").where({ user_id: user_id });
};

const getEntriesByDate = (user_id, date) => {
  // Get the amount of sleep for a specific date
};

const insertEntry = (insertValues) => {
  // Insert a new data of sleeping hours
  return db("sleep").insert(insertValues).returning("*");
};

const updateEntry = (user_id, date, hours) => {
  // Change amount of sleeping hours for a given date
};

const deleteEntry = (user_id, date) => {
  // Delete a row from the DB
  return db("<nameOfSleepTable>")
    .where({ user_id: user_id, date: date })
    .del()
    .returning("*");
};

const checkUser = (email) => {
  // Check if a user exists
  // If returns 0 send back that user needs to register
  return db("users").select("*").where({ email: email });
};

const addUser = (user) => {
  // Add a new user to the DB
  return db("users").insert(user).returning("*");
};

module.exports = {
  getSleepHours,
  getEntriesByDate,
  insertEntry,
  updateEntry,
  deleteEntry,
  checkUser,
  addUser,
};
