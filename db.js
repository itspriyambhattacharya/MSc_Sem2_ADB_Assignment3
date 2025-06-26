const express = require("express");
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql12345678",
  database: "assign3",
  connectionLimit: 10,
});

module.exports = pool;
