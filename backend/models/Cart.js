const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

  });

  const Cart = mongoose.model('cart',CartSchema);
  module.exports = Cart;  