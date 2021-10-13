const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneno:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

  });

  const Info = mongoose.model('info',InfoSchema);
  module.exports = Info;  