const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/Hell', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('DB connection successful!'));
//Schema
const myNotesSchema = new mongoose.Schema(
  {
    notesID: {
      type: Number,
      unique: true,
      required: [true, 'Required field'],
    },
    name: {
      type: String,
      required: [true, 'Required field'],
    },
    data: {
      type: String,
    },
  },{
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },});
//Model
const NotesModel = mongoose.model('mynotes', myNotesSchema);
module.exports = NotesModel;
