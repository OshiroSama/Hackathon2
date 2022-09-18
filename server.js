const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/router.js");
const path = require('path');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/sleep", router);

app.use("/", express.static(__dirname + "/public"));
app.use('/static', express.static('public'));

// doesn't work for me through routes)
const {
  _addUser, 
  _checkUser,
  _insertEntry
} = require("./controllers/queries.js");


app.get('/register',(req, res)=>{
  res.sendFile(path.join(__dirname + "/public/register.html"));
  
});

app.post('/register', _addUser);

app.get('/home/:id',(req, res)=>{
  res.sendFile(path.join(__dirname + "/public/homepage.html"));
  
});


// app.get('/home/script',(req, res)=>{
//   res.sendFile(path.join(__dirname + "/public/postSleep_script.js"));
  
// });

app.post('/home/insert',_insertEntry);

app.get('/login',(req, res)=>{

  res.sendFile(path.join(__dirname + "/public/login.html"));
  
});

app.post('/login', _checkUser);

app.listen(process.env.PORT || 8080, () => {
  console.log(`running on port ${process.env.PORT || 8080}`);
});


