const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  }
});

bookSchema.set('toJSON', {
  transform: function (doc, obj) {
    obj.id = obj._id;

    delete obj._id;
    delete obj.__v;
  }
});

module.exports = mongoose.model('Book', bookSchema);
