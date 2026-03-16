const express = require("express");
const app = express();

const myLogger = (req, res, next) => {
  console.log("Middleware is running...");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);