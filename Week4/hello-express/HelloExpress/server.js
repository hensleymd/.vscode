const express = require("express");
const app = express();
const port = 8000;

const users = [
  { firstName: "Matt", lastName: "Hensley" },
  { firstName: "Matt", lastName: "Hensley" },
  { firstName: "Matt", lastName: "Hensley" },
  { firstName: "Matt", lastName: "Hensley" },
]

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json(users);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );