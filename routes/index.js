const express = require("express");
const route = express.Router();
const pool = require("../db");

// middleware
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

route.get("/", (req, res) => {
  const sql = `SELECT * FROM marks`;
  pool.query(sql, (err, results, fields) => {
    if (err) {
      console.error("Fetched failed due to the following error: ", err.message);
      return res.status(500).send("Record not fetched");
    }
    res.render("index", { obj: results });
  });
});

route.post("/", (req, res) => {
  let { name, m1, m2, m3, m4 } = req.body;
  console.log(req.body);
  m1 = Number(m1);
  m2 = Number(m2);
  m3 = Number(m3);
  m4 = Number(m4);

  const sql = `INSERT INTO marks(sname, marks1, marks2, marks3, marks4) VALUES (?, ?, ?, ?, ?)`;

  pool.query(sql, [name, m1, m2, m3, m4], (err, results, fields) => {
    if (err) {
      console.error(
        "Insertion failed due to the following error: ",
        err.message
      );
      return res.status(500).send("Record not inserted");
    }
    console.log("Record inserted successfully");
    res.redirect("/");
  });
});

module.exports = route;
