const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const idx = require("./routes/index");
app.use("/", idx);

const more = require("./routes/more");
app.use("/more", more);

const less = require("./routes/less");
app.use("/less", less);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
