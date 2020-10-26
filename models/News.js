const mongoose = require('mongoose');
const Schema = mongoose.Schema
const NewsSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  school_id: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  day:{
    type:Number
  },
  month:{
    type:String
  },
  image:{
    type:String
  },
  sender_id: {
    type: Schema.Types.ObjectId
  }
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;
