const {
  getSleepHours,
  getEntriesByDate,
  insertEntry,
  updateEntry,
  deleteEntry,
  checkUser,
  addUser
} = require("../modules/queries.js");

const _getSleepHours = (req, res) => {
  getSleepHours()
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

//login & reg 

const _checkUser = (req, res) => {
  checkUser(req.body.email)
    .then((data) => {
      console.log(data.length);
      // if(data.length < 1){
      //   //res.sendFile(path.join(__dirname + "/public/register.html"));
      //   res.send('<script>alert(`this user is not in DB, please register`)</script>')
      // }else {
        res.json(data)
      
      })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "This email is not registered, please, register" });
    });
};

const _addUser = (req, res) => {
  addUser(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: err });
    });
};
  

module.exports = {
  _getSleepHours,
  _getEntriesByDate,
  _insertEntry,
  _updateEntry,
  _deleteEntry,
  _checkUser,
  _addUser
};
