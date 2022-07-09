const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    image:{
        type: String,
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: Number,
        default: true
    },
    uid:{
        type: String,
        default: true
    },
    date:{
        type: Date,
        default: Date.now
    }

  });

  module.exports = mongoose.model('wishlist',WishlistSchema);