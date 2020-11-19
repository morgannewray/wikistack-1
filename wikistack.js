const morgan = require('morgan');
const express = require('express');
const pg = require('pg');
const app = express();
const path = require('path');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views'); //this means it looks directly at index.js
const layout = require('./views/layout');
const { db, Page, User } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'));
//Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('Hi');
  res.send(layout('Hello World!'));
})

// (async() => {
//   await Page.sync();
//   await User.sync();


//   app.listen(3000, () => {
//     console.log('This is working!');
//   })
// })();

const PORT = 3000;
const init = async () => {
  await db.sync({force: true});
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
