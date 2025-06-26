const express = require("express");
const route = express.Router();

// middleware
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

route.post("/", (req, res) => {
  const { name, m1, m2, m3, m4 } = req.body;
  const sql = `INSERT INTO marks(sname, marks1, marks2, marks3) VALUES (?, ?, ?, ?);`;
});

module.exports = route;
