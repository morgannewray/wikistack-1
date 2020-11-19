const morgan = require('morgan');
const express = require('express');
const pg = require('pg');
const app = express();
const path = require('path');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(1587, () => {
  console.log('This is working!');
})
