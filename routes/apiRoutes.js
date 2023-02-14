const router = require('express').Router();
const fs = require('fs');
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
// router.delete('notes/:id', async (req, res) => {
//   readFromFile('*', './db/db.json');
//   console.info(`${req.method} request received to delete a note`);
//   try {
//     const {id} =  note.destroy({
//       where: {
//         id: req.params.id
//        }// await deleteNote(id, note),
//     });

//     res.status(200).json(noteId);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
