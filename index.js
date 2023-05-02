const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const recipe = require("./data/shefrecipie.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("taste bengal is running");
});

app.get("/shef", (req, res) => {
  res.send(recipe);
});

app.get("/shef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = recipe.chefs.find((chef) => chef.id == id);
  console.log(selectedChef);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`taste bengal api APi is running port:${port}`);
});
