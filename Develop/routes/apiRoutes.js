const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
uuidv4();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => 
  fs.readFile("db/db.json", "utf-8",(err, data) => {
    return err ? console.log(err) : res.json(JSON.parse(data))
  })
);
//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). 
router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to save a note`);
  
  const { title, text} = req.body;
  
  if (req.body) {
  const newNote = {
  title,
  text,
  id: uuidv4(),
  };
  
  readAndAppend(newNote, './db/db.json');
  res.json(`Note added successfully 🚀`);
} else {
  res.err('Error in saving note');
}});

router.delete('api/notes/:id', (req, res) => {
  const noteId = Number(request.params.id);
  const newNotes = notes.filter((note) => note.id != noteId);
  //console.info(`${req.method} request received to delete a note`);
  Notes.delete({
    where: {
      notes: req.params.notes,
    },
  })
    .then((deletedNote) => {
      res.json(deletedNote);
    })
    .catch((err) => res.json(err));
    return res.json({ message: "Deleted" });
});

  //



module.exports = router