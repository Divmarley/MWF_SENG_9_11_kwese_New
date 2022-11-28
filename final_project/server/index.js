/** @format */

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'play',
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/alldata', (req, resp) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      resp.json(result);
    }
  });
});

app.post('/create', (req, resp) => {
  const name = req.body.name;
  const age = req.body.age;
  const school = req.body.school;
  db.query(
    'INSERT INTO users(name,age,school) VALUES (?,?,?)',
    [name, age, school],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        resp.json(result);
      }
    }
  );
});

app.listen(port, () => console.log(`server is working on port ${port}`));
