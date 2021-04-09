const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: `${__dirname}/.env` });

const Book = require('./models/Book');
const dbConfig = require('./config/database.js');

mongoose.connect(
  `mongodb+srv://${ dbConfig.mongoDb.user}:${ dbConfig.mongoDb.password}@cluster0.0vydl.mongodb.net/${dbConfig.mongoDb.database}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Connection to MongoDB successful'))
.catch(() => console.log('Connection to MongoDB failed'));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/books', (req, res) => {
  Book.find().then(books => {
    res.json(books);
  });
});

app.post('/api/books', (req, res) => {
  const { title, author, totalPages } = req.body;

  const book = new Book({
    title,
    author,
    totalPages
  });

  book.save();

  res.status(201).send(book);
});

module.exports = app;
