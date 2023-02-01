const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
uuidv4();
//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => 
  fs.readFile("db/db.json", "utf-8",(err, data) => {
    return err ? console.log(err) : res.json(JSON.parse(data))
  })
);
//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). 
router.post('/notes', (req, res) => 
  res.json(notes))
  console.info(`${req.method} request received to save a note`);

  const { username, topic, tip } = req.body;
  
  if (req.body) {
    const newNote = {
    noteTitle;
    noteText;
    saveNoteBtn;
    newNoteBtn;
    noteList;
    note_id: uuid(),
    };
    
    readAndAppend(newTip, './db/notes.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in saving note');
  }
});

module.exports = router