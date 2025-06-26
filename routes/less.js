const express = require("express");
const route = express.Router();
const pool = require("../db");

// middleware
route.use((req, res, next) => {
  console.log("More than 90% middleware");
  next();
});

route.get("/", (req, res) => {
  const sql = `SELECT COUNT(sname) AS c FROM marks  WHERE (marks1+marks2+marks3+marks4)/4.0 < 40`;
  pool.query(sql, (err, results, fields) => {
    if (err) {
      console.error("Fetch failed due to the following error: ", err.message);
      return res.status(500).send("Record not fetched");
    }
    console.log(results);

    res.send(`Number of students who scored less than 40% is ${results[0].c}`);
  });
});

module.exports = route;
