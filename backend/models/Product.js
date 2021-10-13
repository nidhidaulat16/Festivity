const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({

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
    }

  });

  module.exports = mongoose.model('products',ProductsSchema);