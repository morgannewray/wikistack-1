const morgan = require('morgan');
const express = require('express');
const pg = require('pg');
const app = express();
const path = require('path');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views'); //this means it looks directly at index.js
const layout = require('./views/layout');

app.use(morgan('dev'));
//Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('Hi');
  res.send(layout('Hello World!'))
})

app.listen(3000, () => {
  console.log('This is working!');
})
