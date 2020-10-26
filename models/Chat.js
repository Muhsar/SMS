const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ChatSchema = new mongoose.Schema({
  sender_id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  message: {
    type: String
  },
  school_id: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
