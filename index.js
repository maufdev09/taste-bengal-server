const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("taste bengal is running");
});

app.listen(port, () => {
  console.log(`Dragon APi is running port:${port}`);
});
