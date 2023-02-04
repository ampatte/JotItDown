const router = require('express').Router();
const express = require('express');
const path = require('path');
const fs = require("fs");

// GET Route for submitting notes
router.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

  // GET Route for homepage
router.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/index.html"))
);

  module.exports = router