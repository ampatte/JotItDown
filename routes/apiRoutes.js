const router = require('express').Router();
const fs = require('fs');
const db = require('../db/notes');
// Helper method for generating unique ids
const { v4: uuidv4 } = require('uuid');
uuidv4();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json', 'utf-8',(err, data) => {
    return err ? console.log(err) : res.json(JSON.parse(data))
});
});

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). 
router.post('/notes', (req, res) => {
  console.log(req.body, `request received to save a note`);
  
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

//DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  //   router.delete('/notes', async(req, res) => {
  //     try {
  //     await notes.deleteNote(req.params.id);
  //     } catch (err) {
  //           res.status(500).json(err);
  //         }
  //         res.json({ ok: true });
  // });

module.exports = router;
