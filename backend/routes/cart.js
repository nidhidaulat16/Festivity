const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Cart = require('../models/Cart');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get All the items using: GET "/api/cart/fetchallitems". login required
router.get('/fetchallitems', fetchuser, async (req, res) => {
    try {
        const items = await Cart.find({ user: req.user.id });
        res.json(items)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//ROUTE 2: Adding a item to cart using: POST "/api/cart/additem". login required
router.post('/additem', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be of minimum 5 characters').isLength({ min: 5 }),
    body('amount', 'Enter a valid amount').isLength({ min: 1 }),
], async (req, res) => {
    try {
        const { title, description, amount } = req.body;
        //If there are errors return bad requests and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const cart = new Cart({
            title, description, amount, user: req.user.id
        })
        const savedCart = await cart.save()

        res.json(savedCart)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router