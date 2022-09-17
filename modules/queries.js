const db = require("../connections/DBConnection.js");

const getSleepHours = (user_id) => {
  return db("d4f7jsp1ogl74q").select("*");
};

const getEntriesByDate = (user_id, date) => {};

const insertEntry = (user_id, date, hours) => {};

const updateEntry = (user_id, date, hours) => {};

const deleteEntry = (user_id, date) => {
  return db("<nameOfSleepTable>")
    .where({ user_id: user_id, date: date })
    .del()
    .returning("*");
};

//adding registration & login logic
const checkUser = (email) =>{
  //if returns 0 send back that user needs to register
  return db('users')
    .select("*")
    .where({email:email})
}

const addUser = (user) => {
  return db('users')
    .insert(user)
    .returning('*')
}


module.exports = {
  getSleepHours,
  getEntriesByDate,
  insertEntry,
  updateEntry,
  deleteEntry,
  checkUser,
  addUser
};

