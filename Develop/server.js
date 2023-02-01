const express = require("express");
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");

// Helper method for generating unique ids


const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serves static files from the '/public' folder
app.use(express.static("public"));

app.use("/api", apiRoutes);

// GET Route for feedback page

// POST Route for submitting feedback
app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/notes.html"))
  );

  // GET Route for homepage
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/index.html"))
  );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
// const util = require('util');
// const { readFromFile, readAndAppend } = require('./helpers/fsUtils');
// const routes = require('../routes')

// require('./Develop/routes/apiRoutes')(app);
// require('./Develop/routes/htmlRoutes')(app);
