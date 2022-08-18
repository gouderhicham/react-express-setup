const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// this two lines responsible for accepting user post requests and not just get requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../build")));
// testing the get method and sending back a response of it works
app.get("/api", (req, res) => {
  res.json({ message: `api works !` });
});
// response with the user input (greeting api post request)
app.post("/greeting", (req, res) => {
  const name = req.body.message;
  res.json({ greeting: `Hello ${name}!` });
});

//listening
app.listen(PORT, () =>
  console.log("Express server is running on localhost:3001")
);
