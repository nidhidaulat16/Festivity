const mongoose = require('mongoose');
const { Schema } = mongoose;
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const HistorySchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    date:{
        type: String,
        default: today.toDateString(),
    }
  });

  module.exports = mongoose.model('history',HistorySchema);