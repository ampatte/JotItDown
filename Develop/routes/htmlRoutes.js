const express = require('express');

const notesRouter = require('./tipsRouter');
const feedbackRouter = require('./feedbackRouter');

const app = express();
app.use('/notes', notesRouter);
app.use('*', );

module.exports = app
// `GET /notes` should return the `notes.html`
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/a.html'))
);
// `GET *` should return the `index.html` file.

app.get('/api/db', (req, res) => 
  res.json(db))
   
  app.get('/api', (req, res) => 
  res.json(send))


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
